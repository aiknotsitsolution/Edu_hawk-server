import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";
import NewsHeroBg from "../../assets/news-hero-bg.webp";
import { initialNewsData, newsCategories as defaultCategories } from "../../data/newsData.js";
import {
  Calendar,
  Clock,
  Search,
  X,
  ArrowRight,
  Globe,
  Bell,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Phone,
  Newspaper,
  BookOpen,
  Share2,
  Sparkles,
} from "lucide-react";

const API_BASE =
  import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/v1/news`
    : typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:8000/api/v1/news"
    : "https://edu-hawk-server.onrender.com/api/v1/news";

const NewsPage = () => {
  // State for search and filtering
  const [newsList, setNewsList] = useState(initialNewsData);
  const [categoryList, setCategoryList] = useState(defaultCategories);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch dynamic news and categories from server (with graceful fallback)
  useEffect(() => {
    let isMounted = true;
    const fetchNews = async () => {
      try {
        setLoading(true);
        const [newsRes, catRes] = await Promise.allSettled([
          fetch(API_BASE),
          fetch(`${API_BASE}/categories`),
        ]);

        if (newsRes.status === "fulfilled" && newsRes.value.ok) {
          const newsData = await newsRes.value.json();
          const list = newsData.news || newsData.data || [];
          if (isMounted && newsData.success && Array.isArray(list)) {
            const formatted = list.map((item) => ({
              ...item,
              id: item._id || item.id,
              formattedDate:
                item.formattedDate ||
                new Date(item.publishedAt || item.createdAt || Date.now()).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }),
            }));
            setNewsList(formatted);
          }
        }

        if (catRes.status === "fulfilled" && catRes.value.ok) {
          const catData = await catRes.value.json();
          const cats = catData.categories || catData.data || [];
          if (isMounted && catData.success && Array.isArray(cats) && cats.length > 0) {
            const dynamicCatNames = ["All", ...cats.map((c) => c.name)];
            setCategoryList(dynamicCatNames);
          }
        }
      } catch (err) {
        console.warn("Could not load dynamic news, falling back to local newsData:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchNews();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filtered news list
  const filteredNews = useMemo(() => {
    return newsList.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.country && item.country.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [newsList, selectedCategory, searchQuery]);

  // Featured breaking news (first item or most recent)
  const featuredNews = filteredNews.length > 0 ? filteredNews[0] : null;
  const regularNews = filteredNews.length > 0 ? filteredNews.slice(1) : [];

  const handleShare = (newsItem, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedId(newsItem.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <>
      <SeoHead
        title="Global Education News & Study Abroad Circulars | Edu-Hawk"
        description="Stay updated with the latest NMC guidelines, student visa rule changes, intake deadlines, and university announcements verified by Edu-Hawk counsellors."
        path="/news"
        ogType="website"
      />

      <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
        {/* ─── HERO HEADER ─────────────────────────────────────────────────── */}
        <section className="relative bg-[#071d38] text-white py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image with Dark Professional Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={NewsHeroBg}
              alt="Global Education News"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Balanced gradient overlay so photo is clearly visible and text is sharp */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071d38]/75 via-[#0c2a50]/60 to-[#0a2342]/85" />
          </div>

          {/* Subtle Background Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none z-0" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
              Global Education News &amp; Study Abroad Updates
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-teal-100/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Real-time notices on NMC regulations, overseas MBBS admissions, embassy visa appointment batches, and university scholarship announcements.
            </p>

            {/* Interactive Search Bar */}
            <div className="max-w-xl mx-auto relative flex items-center bg-white rounded-2xl shadow-xl p-1.5 border border-slate-200">
              <div className="pl-3.5 pr-2 text-slate-400 flex items-center pointer-events-none">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news by topic, country, NMC, visa, scholarship..."
                className="w-full py-2 px-2 text-slate-800 placeholder-slate-400 text-sm outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 transition"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
              <span className="hidden sm:inline-block px-3 py-1.5 bg-slate-100 text-slate-500 text-xs font-semibold rounded-lg shrink-0">
                Live Feed
              </span>
            </div>
          </div>
        </section>

        {/* ─── CATEGORY FILTER TABS ───────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                <Newspaper size={14} /> Topics:
              </span>
              {categoryList.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? newsList.length
                    : newsList.filter((n) => n.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#1e293b] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-amber-400 text-slate-900 font-bold"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── MAIN CONTENT AREA ──────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {filteredNews.length === 0 ? (
            /* Empty State */
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-sm">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Newspaper size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                No News Articles Found
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {searchQuery
                  ? `No notices matched "${searchQuery}" in the selected category.`
                  : "No news articles or circulars available at this moment."}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2.5 bg-[#F48C06] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#e07b00] transition shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* 1. TOP FEATURED BREAKING NEWS CARD */}
              {featuredNews && (
                <Link
                  to={`/news/${featuredNews.slug || featuredNews.id}`}
                  className="group block bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col md:flex-row"
                >
                  <div className="md:w-5/12 relative overflow-hidden bg-slate-900 min-h-[220px]">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent md:hidden" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-white text-[10px] font-bold uppercase rounded-md shadow-md ${featuredNews.badgeColor || "bg-red-500"}`}>
                        {featuredNews.badge || "Breaking News"}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-7/12 p-5 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                        <span className="flex items-center gap-1 font-medium text-[#F48C06]">
                          <Globe size={13} /> {featuredNews.country}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> {featuredNews.formattedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock size={13} /> {featuredNews.readTime || "3 min read"}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#071d38] group-hover:text-[#F48C06] transition-colors leading-snug mb-3">
                        {featuredNews.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {featuredNews.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-500">
                        By : <span className="font-medium text-slate-700">{featuredNews.author || featuredNews.source}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F48C06] group-hover:translate-x-1 transition-transform">
                        Read Full Article →
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* 2. REGULAR NEWS GRID (3 columns on Desktop) */}
              {regularNews.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularNews.map((news) => (
                    <Link
                      key={news.id}
                      to={`/news/${news.slug || news.id}`}
                      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className={`px-2 py-0.5 text-white text-[9px] font-bold uppercase rounded-md shadow-md ${news.badgeColor || "bg-indigo-500"}`}>
                              {news.badge || "News"}
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5">
                            <span className="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] text-white font-medium flex items-center gap-1">
                              <Clock size={10} /> {news.readTime || "2 min read"}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 sm:p-5">
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                            <span className="font-semibold text-[#F48C06] flex items-center gap-1">
                              <Globe size={11} /> {news.country}
                            </span>
                            <span>•</span>
                            <span>{news.formattedDate}</span>
                          </div>

                          <h3 className="text-base font-bold text-[#071d38] group-hover:text-[#F48C06] transition-colors leading-snug mb-2 line-clamp-2">
                            {news.title}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">
                            {news.summary}
                          </p>
                        </div>
                      </div>

                      <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-400 font-medium truncate max-w-[150px]">
                          {news.category}
                        </span>
                        <span className="font-bold text-[#F48C06] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
