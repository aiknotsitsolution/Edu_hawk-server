import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";
import NewsHeroBg from "../../assets/news-hero-bg.webp";
import { initialNewsData, newsCategories, upcomingDeadlines } from "../../data/newsData.js";
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

const NewsPage = () => {
  // State for search and filtering
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalNews, setActiveModalNews] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Filtered news list (Frontend ready for API/Database replacement)
  const filteredNews = useMemo(() => {
    return initialNewsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-medium mb-4 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Edu-Hawk Official News Bulletin &amp; Circulars</span>
            </div>

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
              {newsCategories.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? initialNewsData.length
                    : initialNewsData.filter((n) => n.category === category).length;

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
                No notices matched &quot;{searchQuery}&quot; in the selected category.
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* ─── LEFT COLUMN: NEWS ARTICLES (8 Cols) ────────────────── */}
              <div className="lg:col-span-8 space-y-8">
                {/* 1. TOP FEATURED BREAKING NEWS CARD */}
                {featuredNews && (
                  <div
                    onClick={() => setActiveModalNews(featuredNews)}
                    className="group bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col md:flex-row"
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
                        <span className={`px-2.5 py-1 text-white text-[10px] font-bold uppercase rounded-md shadow-md ${featuredNews.badgeColor}`}>
                          {featuredNews.badge}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-7/12 p-5 sm:p-6 flex flex-col justify-between">
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
                            <Clock size={13} /> {featuredNews.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg sm:text-xl font-bold text-[#071d38] group-hover:text-[#F48C06] transition-colors leading-snug mb-2.5">
                          {featuredNews.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {featuredNews.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                          Source: {featuredNews.source}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F48C06] group-hover:translate-x-1 transition-transform">
                          Read Notice →
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. REGULAR NEWS GRID */}
                {regularNews.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {regularNews.map((news) => (
                      <div
                        key={news.id}
                        onClick={() => setActiveModalNews(news)}
                        className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-44 overflow-hidden bg-slate-900">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3">
                              <span className={`px-2 py-0.5 text-white text-[9px] font-bold uppercase rounded-md shadow-md ${news.badgeColor}`}>
                                {news.badge}
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 right-2.5">
                              <span className="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] text-white font-medium flex items-center gap-1">
                                <Clock size={10} /> {news.readTime}
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
                            Details →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ─── RIGHT COLUMN: SIDEBAR WIDGETS (4 Cols) ──────────────── */}
              <div className="lg:col-span-4 space-y-6">
                {/* WIDGET 1: UPCOMING INTAKE DEADLINES */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#F48C06] flex items-center justify-center">
                      <Bell size={16} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#071d38]">
                        Important Intake Deadlines
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Upcoming university application cuts
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {upcomingDeadlines.map((item, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50/50 transition"
                      >
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <h4 className="text-xs font-bold text-[#071d38] leading-tight">
                            {item.title}
                          </h4>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-100 text-amber-800 shrink-0">
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span className="flex items-center gap-1">
                            <Globe size={11} /> {item.country}
                          </span>
                          <span className="font-bold text-[#F48C06]">
                            {item.date}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="mt-4 block w-full text-center py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
                  >
                    Check Eligibility For Upcoming Batch →
                  </a>
                </div>

                {/* WIDGET 2: DIRECT ADVISORY / WHATSAPP CONNECT */}
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F48C06]/20 rounded-full blur-2xl pointer-events-none" />

                  <span className="inline-block px-2 py-0.5 bg-[#F48C06] text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-3">
                    Direct Support
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    Questions on Any Official Circular?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Connect directly with an Edu-Hawk Senior Advisor for personalized document evaluation, visa eligibility, and university selection.
                  </p>

                  <div className="space-y-2">
                    <a
                      href="https://wa.me/919310672672?text=Hello%20EduHawk%20Team%2C%20I%20have%20a%20question%20regarding%20the%20latest%20study%20abroad%20news%20and%20intake%20deadlines."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition shadow-xs"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp
                    </a>
                    <a
                      href="tel:+919310672672"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-xl transition"
                    >
                      <Phone size={14} /> Call Helpline: +91 93106 72672
                    </a>
                  </div>
                </div>

                {/* WIDGET 3: OFFICIAL REGULATORY LINKS */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <ExternalLink size={13} /> Official Advisory Portals
                  </h3>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <a
                        href="https://www.nmc.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#F48C06] transition"
                      >
                        <span>National Medical Commission (NMC)</span>
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wdoms.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#F48C06] transition"
                      >
                        <span>WHO Directory of Medical Schools</span>
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://travel.state.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#F48C06] transition"
                      >
                        <span>US Visa Services (travel.state.gov)</span>
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.gov.uk/student-visa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#F48C06] transition"
                      >
                        <span>UK Visas and Immigration (gov.uk)</span>
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ─── DETAIL NEWS MODAL ───────────────────────────────────────────── */}
        {activeModalNews && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
            onClick={() => setActiveModalNews(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Media */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={activeModalNews.image}
                  alt={activeModalNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                <button
                  onClick={() => setActiveModalNews(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 text-white text-[10px] font-bold uppercase rounded-md shadow-sm ${activeModalNews.badgeColor}`}>
                      {activeModalNews.badge}
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold rounded-md">
                      {activeModalNews.category}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-xl font-bold text-white leading-snug drop-shadow-sm">
                    {activeModalNews.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-5 sm:p-7 space-y-5 overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-semibold text-[#F48C06]">
                      <Globe size={13} /> {activeModalNews.country}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {activeModalNews.formattedDate}
                    </span>
                    <span>•</span>
                    <span>Source: {activeModalNews.source}</span>
                  </div>

                  <button
                    onClick={(e) => handleShare(activeModalNews, e)}
                    className="inline-flex items-center gap-1 text-[#F48C06] hover:underline font-semibold cursor-pointer"
                  >
                    <Share2 size={13} />
                    <span>{copiedId === activeModalNews.id ? "Link Copied!" : "Share"}</span>
                  </button>
                </div>

                {/* News Description */}
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {activeModalNews.body}
                </div>

                {/* Key Highlights Checklist */}
                {activeModalNews.keyHighlights && activeModalNews.keyHighlights.length > 0 && (
                  <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 size={15} className="text-[#F48C06]" /> Key Advisory Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {activeModalNews.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-amber-950 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action CTA Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#071d38]">
                      Need expert guidance for this intake?
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Our counsellors can verify your eligibility in 15 mins.
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="px-5 py-2.5 bg-[#F48C06] hover:bg-[#e07b00] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xs whitespace-nowrap"
                  >
                    Book Free Counselling
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;
