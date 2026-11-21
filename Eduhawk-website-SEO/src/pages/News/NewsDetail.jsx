import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import SeoHead from "../../component/SeoHead.jsx";
import { initialNewsData } from "../../data/newsData.js";
import {
  Calendar,
  Clock,
  Globe,
  Share2,
  ArrowLeft,
  Building2,
  FileText,
  Sparkles,
  User,
} from "lucide-react";

const API_BASE =
  import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/v1/news`
    : typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:8000/api/v1/news"
    : "https://edu-hawk-server.onrender.com/api/v1/news";

export default function NewsDetail() {
  const { slugOrId } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    let isMounted = true;
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);

        // Try API first
        const res = await fetch(`${API_BASE}/${slugOrId}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.success && data.news) {
            const item = data.news;
            setNews({
              ...item,
              id: item._id || item.id,
              formattedDate:
                item.formattedDate ||
                new Date(item.publishedAt || item.createdAt || Date.now()).toLocaleDateString(
                  "en-IN",
                  { day: "2-digit", month: "short", year: "numeric" }
                ),
            });
            return;
          }
        }
      } catch (err) {
        console.warn("Could not fetch news from API, falling back to local newsData:", err);
      }

      // Fallback to local data
      const localItem = initialNewsData.find(
        (n) => n.slug === slugOrId || String(n.id) === String(slugOrId)
      );

      if (isMounted) {
        if (localItem) {
          setNews(localItem);
        } else {
          setNews(null);
        }
        setLoading(false);
      }
    };

    fetchNewsDetail();
    return () => {
      isMounted = false;
    };
  }, [slugOrId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: news?.title || "Edu-Hawk News Article",
          text: news?.summary || "",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const proseClasses =
    "prose prose-lg max-w-none mb-12 " +
    "prose-headings:font-bold prose-headings:text-slate-900 " +
    "prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg " +
    "prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-8 prose-img:mx-auto prose-img:w-full prose-img:max-w-5xl prose-img:h-auto " +
    "prose-a:text-indigo-600 hover:prose-a:text-indigo-700 " +
    "prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 " +
    "prose-li:my-1.5 prose-li:text-slate-700 " +
    "prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-slate-800 " +
    "prose-blockquote:border-l-4 prose-blockquote:border-[#F48C06] prose-blockquote:bg-amber-50/50 prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:italic " +
    "prose-table:border prose-th:bg-slate-100 prose-td:border prose-td:p-3";

  // 1. Loading Skeleton
  if (loading && !news) {
    return (
      <div className="min-h-screen bg-white pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-9 w-36 animate-pulse rounded-full bg-slate-200" />
          <div className="mb-8 h-72 sm:h-96 w-full animate-pulse rounded-3xl bg-slate-200" />
          <div className="mb-3 h-10 w-11/12 animate-pulse rounded-xl bg-slate-200" />
          <div className="mb-8 h-6 w-1/2 animate-pulse rounded bg-slate-200" />
          <div className="space-y-4">
            {[100, 95, 98, 85, 90].map((w, idx) => (
              <div
                key={idx}
                className="h-4 animate-pulse rounded bg-slate-200"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. Article Not Found
  if (!news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="rounded-3xl border border-slate-200 p-8 sm:p-12 text-center max-w-md shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#F48C06] flex items-center justify-center mx-auto mb-4">
            <FileText size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            News Article Not Found
          </h2>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            The article you are looking for may have been archived or removed.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e293b] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
          >
            <ArrowLeft size={15} />
            View All News
          </Link>
        </div>
      </div>
    );
  }

  const safeBody = DOMPurify.sanitize(news.body || "");
  const heroImage = news.image || null;
  const canonicalPath = `/news/${news.slug || slugOrId}`;

  return (
    <>
      <SeoHead
        title={`${news.title} | Edu-Hawk News`}
        description={news.summary || news.title}
        path={canonicalPath}
        ogType="article"
        ogImage={heroImage}
      />

      <article className="min-h-screen bg-white pt-8 pb-20">
        {/* Top Back Navigation Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition"
          >
            <ArrowLeft size={16} />
            <span>All News &amp; Circulars</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition cursor-pointer"
          >
            <Share2 size={14} className="text-[#F48C06]" />
            <span>{copied ? "Link Copied!" : "Share Article"}</span>
          </button>
        </div>

        {/* Cover Hero Image (NO border, clean shadow-xl) */}
        {heroImage && (
          <div className="relative mx-auto mb-10 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="w-full overflow-hidden rounded-3xl shadow-xl">
              <img
                src={heroImage}
                alt={news.title}
                className="h-[280px] w-full object-cover sm:h-[440px] md:h-[500px]"
                loading="eager"
              />
            </div>
          </div>
        )}

        {/* Main Article Content (Directly on page surface, increased width max-w-5xl, NO card border) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category & Region Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={12} className="text-[#F48C06]" />
              {news.category || "Official Notice"}
            </span>

            {news.country && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Globe size={12} className="text-slate-500" />
                {news.country}
              </span>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071d38] leading-tight mb-5">
            {news.title}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 pb-6 mb-8 border-b border-slate-200">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[#F48C06]" />
              {news.formattedDate}
            </span>

            {(news.author || news.source) && (
              <span className="flex items-center gap-1.5 text-slate-600">
                <User size={15} className="text-[#F48C06]" />
                <span>
                  By :{" "}
                  <span className="font-medium text-slate-900">
                    {news.author || news.source}
                  </span>
                </span>
              </span>
            )}

            {news.readTime && (
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock size={15} />
                {news.readTime}
              </span>
            )}
          </div>

          {/* Executive Summary Callout */}
          {news.summary && (
            <div className="mb-10 rounded-2xl bg-amber-50/70 border-l-4 border-[#F48C06] p-5 sm:p-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                Executive Advisory Summary
              </h3>
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                {news.summary}
              </p>
            </div>
          )}

          {/* Rich Article Body (CKEditor HTML or plain text) */}
          {safeBody ? (
            <div
              className={`news-description ${proseClasses}`}
              dangerouslySetInnerHTML={{ __html: safeBody }}
            />
          ) : (
            <p className="text-slate-500 italic">No content available for this notice.</p>
          )}

          {/* Action / Guidance Strip (Chat on WhatsApp button REMOVED) */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F48C06] mb-1">
                1-on-1 MBBS Abroad Counselling
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071d38] mb-1">
                Have Questions Regarding This Official Notice?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Our certified counsellors can guide you on qualifying scores, NMC compliance, and university admissions.
              </p>
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071d38] hover:bg-slate-800 px-7 py-3.5 text-sm font-bold text-white transition shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Book Free Consultation →</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
