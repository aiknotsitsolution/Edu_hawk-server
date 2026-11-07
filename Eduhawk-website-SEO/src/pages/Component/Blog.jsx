import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";
import BannerCTA from "../../assets/BannerCTA.webp";
import {
  fetchProducts,
  fetchCategories,
  setActiveCategory,
  setCurrentPage,
  setSearchQuery,
  selectVisibleProducts,
  selectCategories,
  selectActiveCategory,
  selectSearchQuery,
  selectProductsStatus,
  selectProductsError,
} from "./productsSlice";

import {
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  Clock,
  User,
  ChevronDown,
  Calendar,
  CheckCircle2,
  MessageCircle,
  Phone,
  X,
  FileText,
} from "lucide-react";

// Helper function to get short description (first 50 words, remove images)
const getShortDescription = (html) => {
  if (!html) return "";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Remove all images
  tempDiv.querySelectorAll("img").forEach((img) => img.remove());

  // Get clean text
  let text = tempDiv.textContent || tempDiv.innerText || "";

  // Clean extra whitespace
  text = text.replace(/\s+/g, " ").trim();

  // Take first 45 words
  const words = text.split(" ");
  const shortText = words.slice(0, 45).join(" ");

  return shortText + (words.length > 45 ? "..." : "");
};

const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    items: products,
    totalItems,
    totalPages,
    currentPage,
  } = useSelector(selectVisibleProducts);

  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);
  const searchQuery = useSelector(selectSearchQuery);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  // State for accordion (which FAQ is open)
  const [openFaq, setOpenFaq] = useState(0);
  const [searchInput, setSearchInput] = useState(searchQuery || "");
  const isInitialLoading = status === "loading" && products.length === 0;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [activeCategory, searchQuery, currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchInput));
    dispatch(setCurrentPage(1));
  };

  const handleClearSearch = () => {
    setSearchInput("");
    dispatch(setSearchQuery(""));
    dispatch(setCurrentPage(1));
  };

  if (status === "failed") {
    return (
      <section className="min-h-screen bg-slate-50 flex items-center justify-center py-16 md:py-24 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
            <X size={28} />
          </div>
          <h2 className="text-xl font-bold text-[#0a2342] mb-2">
            Failed to Load Articles
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            {error || "Unable to connect to the blog server. Please check your internet connection."}
          </p>
          <button
            onClick={() => dispatch(fetchProducts())}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            Retry Loading
          </button>
        </div>
      </section>
    );
  }

  // FAQ data
  const faqs = [
    {
      question: "What kind of articles are published on Edu-Hawk Blog?",
      answer:
        "We regularly publish expert guides on MBBS abroad admission processes, country-wise fee breakdowns (Russia, Georgia, Uzbekistan, Kazakhstan), NMC & WHO regulatory guidelines, FMGE/NEXT examination preparation tips, and campus life reviews from Indian medical students.",
    },
    {
      question: "How do I filter articles by study destination or subject?",
      answer:
        "Use the category filter pills at the top to explore country-specific blogs (e.g., Russia, Georgia, Kazakhstan) or search by entering keywords like 'NEET Cutoff', 'Fees', or 'Hostel' in the search bar.",
    },
    {
      question: "Are fee structures and admission criteria in these blogs verified?",
      answer:
        "Yes, our articles are authored and verified by senior overseas education counsellors based on official university circulars and latest National Medical Commission (NMC) public notifications.",
    },
    {
      question: "Can I get personalized 1-on-1 guidance for the universities mentioned?",
      answer:
        "Absolutely! You can click on 'Book Free Counselling' or 'Talk to an Expert' at the bottom of any article to connect directly with our counselling team via phone or WhatsApp.",
    },
    {
      question: "How often is new blog content published?",
      answer:
        "We update our knowledge base 2–3 times a week with fresh admission circulars, scholarship updates, visa guidelines, and student interview experiences.",
    },
  ];

  return (
    <>
      <SeoHead
        title="MBBS Abroad Blog | Admission Process, Fees & Country Guides"
        description="Read comprehensive guides, university comparisons, NMC guidelines, and latest fee updates for Indian students planning to study MBBS abroad."
        path="/blog"
        ogType="website"
      />

      <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
        {/* Page heading visually hidden for SEO architecture */}
        <h1 className="sr-only">
          Edu-Hawk Knowledge Hub - MBBS Abroad Articles & Admission Guides
        </h1>

        {/* ─── HERO HEADER ─────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#071d38] via-[#0c2a50] to-[#0a2342] text-white py-16 sm:py-20 md:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
          {/* Atmospheric Glow Highlights */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-xl">
              <BookOpen size={14} className="text-amber-400" />
              Edu-Hawk Knowledge Hub &amp; Guides
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
              Latest Insights on MBBS Abroad
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-teal-100/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Explore in-depth articles, university comparisons, transparent fee breakdowns, and NMC guidelines written by certified education experts.
            </p>

            {/* Interactive Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-2xl mx-auto relative flex items-center bg-white rounded-2xl shadow-2xl p-1.5 border border-slate-200"
            >
              <div className="pl-4 pr-2 text-slate-400 flex items-center pointer-events-none">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search articles by country, university, fees, NEET..."
                className="w-full py-2.5 px-2 text-slate-800 placeholder-slate-400 text-sm outline-none bg-transparent"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 transition"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold text-xs uppercase tracking-wider px-5 sm:px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex-shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* ─── MAIN CONTENT CONTAINER ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          {/* Category Filter Pills */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-14">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      dispatch(setActiveCategory(category));
                      dispatch(setCurrentPage(1));
                    }}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0a2342] text-white shadow-lg ring-2 ring-amber-400/50 scale-105"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 shadow-2xs"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Search / Category Indicator */}
          {(searchQuery || (activeCategory && activeCategory !== "All")) && (
            <div className="mb-8 p-3.5 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-center justify-between text-xs sm:text-sm">
              <span className="text-amber-900 font-medium">
                Showing results for:{" "}
                {activeCategory && activeCategory !== "All" && (
                  <strong className="text-[#0a2342]">Category: {activeCategory} </strong>
                )}
                {searchQuery && (
                  <strong className="text-[#0a2342]">Keyword: "{searchQuery}"</strong>
                )}
              </span>
              <button
                onClick={() => {
                  handleClearSearch();
                  dispatch(setActiveCategory("All"));
                }}
                className="text-xs font-bold text-amber-800 hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Articles Grid / Loading Skeleton */}
          {isInitialLoading ? (
            <div className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm animate-pulse"
                  >
                    <div className="h-52 bg-slate-200" />
                    <div className="p-6 space-y-4">
                      <div className="h-4 w-24 rounded-full bg-slate-200" />
                      <div className="h-6 w-5/6 rounded-full bg-slate-200" />
                      <div className="space-y-2 pt-2">
                        <div className="h-3.5 w-full rounded-full bg-slate-200" />
                        <div className="h-3.5 w-4/5 rounded-full bg-slate-200" />
                      </div>
                      <div className="h-4 w-28 rounded-full bg-slate-200 pt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : products && products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                {products.map((product) => {
                  const articleLink = `/blog/${product?.slug || product?._id}`;

                  return (
                    <article
                      key={product._id || product.id}
                      onClick={() => navigate(articleLink)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          navigate(articleLink);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    >
                      <div>
                        {/* Featured Image */}
                        {product.images?.[0] ? (
                          <div className="relative overflow-hidden h-52 bg-slate-100">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              srcSet={`${product.images[0]} 1x, ${product.images[0]} 2x`}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                          </div>
                        ) : (
                          <div className="h-44 bg-gradient-to-br from-[#0a2342] to-[#1a4a7a] flex items-center justify-center text-amber-400/80">
                            <FileText size={48} strokeWidth={1.5} />
                          </div>
                        )}

                        <div className="p-6">
                          {/* Category Tag */}
                          {product.category?.name && (
                            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/70 mb-3">
                              {product.category.name}
                            </span>
                          )}

                          {/* Article Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-[#0a2342] group-hover:text-amber-600 transition-colors mb-2.5 leading-snug line-clamp-2">
                            {product.name}
                          </h3>

                          {/* Author Meta */}
                          {product.author && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 font-medium">
                              <User size={13} className="text-amber-600" />
                              <span>By {product.author}</span>
                            </div>
                          )}

                          {/* Short Description */}
                          {product.description && (
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                              {getShortDescription(product.description)}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Card Footer CTA */}
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-amber-700 group-hover:text-amber-800 transition">
                          <span>Read Full Guide</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                          <Clock size={12} />
                          4 min read
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Modern Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                  <button
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-1 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-50 hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer shadow-xs"
                  >
                    <span>← Previous</span>
                  </button>

                  <div className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold text-xs sm:text-sm shadow-xs">
                    Page <strong className="text-[#0a2342]">{currentPage}</strong> of{" "}
                    <strong className="text-[#0a2342]">{totalPages}</strong> ({totalItems} articles)
                  </div>

                  <button
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-1 px-6 py-3 bg-[#0a2342] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#123661] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer shadow-md"
                  >
                    <span>Next →</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 mb-16 shadow-xs max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0a2342] mb-2">
                No Articles Found
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                We couldn't find any articles
                {searchQuery && ` matching "${searchQuery}"`}
                {activeCategory !== "All" && ` in "${activeCategory}"`}.
              </p>
              <button
                onClick={() => {
                  handleClearSearch();
                  dispatch(setActiveCategory("All"));
                }}
                className="px-6 py-3 bg-[#0a2342] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#123661] transition"
              >
                View All Articles
              </button>
            </div>
          )}

          {/* ─── CALL TO ACTION BANNER ─────────────────────────────────────── */}
          <section className="relative mb-20 overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <div className="absolute inset-0">
              <img
                src={BannerCTA}
                loading="lazy"
                width={898}
                height={360}
                alt="MBBS Abroad counselling banner"
                className="h-full w-full object-cover"
                srcSet={`${BannerCTA} 1x, ${BannerCTA} 2x`}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071d38]/95 via-[#0a2b52]/90 to-[#0c3666]/85" />
            </div>

            <div className="relative z-10 flex min-h-[340px] flex-col items-center justify-center px-6 py-14 text-center text-white">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                <Sparkles size={14} className="text-amber-400" />
                Free Admission Evaluation
              </span>

              <h3 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight mb-3">
                Need Guidance on Selecting the Right Medical University?
              </h3>

              <p className="max-w-2xl text-sm sm:text-base md:text-lg text-teal-100/90 mb-8 font-light leading-relaxed">
                Speak directly with certified MBBS counsellors. We help you choose the best country and university based on your NEET score and budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20have%20questions%20after%20reading%20your%20blog.",
                      "_blank",
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/landingpage")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Book Free Counselling →</span>
                </button>
              </div>
            </div>
          </section>

          {/* ─── FAQ ACCORDION SECTION ─────────────────────────────────────── */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
                <BookOpen size={13} className="text-amber-700" />
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2342]">
                Got Questions About Studying MBBS Abroad?
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? "bg-white border-amber-300 shadow-md ring-1 ring-amber-200/50"
                        : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none cursor-pointer gap-4"
                    >
                      <h3 className={`text-base sm:text-lg font-bold pr-2 transition-colors ${
                        isOpen ? "text-amber-800" : "text-[#0a2342]"
                      }`}>
                        {faq.question}
                      </h3>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base font-bold transition-all ${
                        isOpen ? "bg-amber-100 text-amber-800 rotate-180" : "bg-slate-100 text-slate-600"
                      }`}>
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── MOBILE STICKY ACTION BAR ────────────────────────────────────── */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center justify-around sm:hidden shadow-2xl">
          <a
            href="tel:+919630736070"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
          >
            <Phone size={14} className="text-slate-700" />
            <span>Call Now</span>
          </a>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20have%20a%20blog%20inquiry.",
                "_blank"
              )
            }
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 mx-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/landingpage")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-extrabold text-xs rounded-xl shadow-xs transition"
          >
            <span>Apply Free</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
