import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  fetchProducts,
  fetchCategories,
  setActiveCategory,
  setSearchQuery,
  setCurrentPage,
  selectVisibleProducts,
  selectCategories,
  selectActiveCategory,
  selectSearchQuery,
  selectProductsStatus,
  selectProductsError,
} from "./productsSlice"; // adjust path as needed

const getProductSlug = (product) => {
  if (!product) return "";
  if (product.slug) return product.slug;
  if (product._id || product.id) return product._id || product.id;
  if (product.name) {
    return product.name
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  return "";
};

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

  // Take first 50 words
  const words = text.split(" ");
  const shortText = words.slice(0, 50).join(" ");

  return shortText + (words.length > 50 ? "..." : "");
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
  const [openFaq, setOpenFaq] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
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

  useEffect(() => {
    if (status === "loading") {
      setLoadingProgress(12);

      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 92) return prev;
          return Math.min(prev + Math.random() * 18 + 8, 92);
        });
      }, 500);

      return () => clearInterval(interval);
    }

    if (status === "succeeded" || status === "failed") {
      setLoadingProgress(100);
    }
  }, [status]);

  if (status === "failed") {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 md:py-24">
        <div className="text-xl md:text-2xl text-red-600 font-medium text-center px-4">
          {error || "Failed to load products"}
          <br />
          <button
            onClick={() => dispatch(fetchProducts())}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // FAQ data
  const faqs = [
    {
      question: "What kind of products/articles are listed here?",
      answer:
        "We showcase the latest blog posts, articles, tutorials, and product updates from our team. Topics include technology, lifestyle, development tips, design inspiration, and more.",
    },
    {
      question: "How do I filter the content?",
      answer:
        "Use the category buttons above the grid to view posts from a specific topic, or type in the search bar to find articles by keywords in the title.",
    },
    {
      question: "Why do some articles show 'Read more →'?",
      answer:
        "Clicking 'Read more' takes you to the full article page with complete content, author details, images/videos (if available), and related suggestions.",
    },
    {
      question: "Can I share an article with others?",
      answer:
        "Yes! On the individual article page, you'll find a share button that copies the direct link to your clipboard — perfect for sharing on social media or messaging apps.",
    },
    {
      question: "What if no results appear after filtering or searching?",
      answer:
        "Try clearing the search field, selecting 'All' categories, or choosing a different category. Our collection is regularly updated, so check back soon!",
    },
    {
      question: "How often is new content added?",
      answer:
        "We aim to publish new articles and updates at least 2–3 times per week. Follow us or check back regularly for the latest!",
    },
  ];

  return (
    <>
      <Helmet>
        <title>MBBS Abroad Blog | MBBS Admission, Fees and Country Guide</title>
        <meta
          name="description"
          content="Read blogs on MBBS abroad including admission process, fees, eligibility and country comparison for Indian students"
        />
        <meta
          name="keywords"
          content=" mbbs abroad blog, mbbs admission guide, study abroad blog"
        />
      </Helmet>
      <section className="bg-gray-50 min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Blogs & Articles on MBBS Abroad
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest collection – filter by category or search
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => dispatch(setActiveCategory(category))}
                className={`
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium
                transition-all duration-300 ease-in-out transform hover:scale-105
                ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-300/50"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }
              `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid + Pagination */}
          {isInitialLoading ? (
            <div className="mb-16">
              <div className="mx-auto mb-6 w-full max-w-md">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm font-medium text-indigo-700">
                  <span className="inline-flex items-center gap-2 truncate">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="truncate">Loading latest articles...</span>
                  </span>
                  <span className="shrink-0">
                    {Math.round(loadingProgress)}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 transition-all duration-500 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] animate-pulse"
                  >
                    <div className="h-52 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200" />
                    <div className="space-y-4 p-5">
                      <div className="h-3 w-24 rounded-full bg-slate-200" />
                      <div className="h-5 w-4/5 rounded-full bg-slate-200" />
                      <div className="h-4 w-1/3 rounded-full bg-slate-200" />
                      <div className="space-y-2 pt-2">
                        <div className="h-3 w-full rounded-full bg-slate-200" />
                        <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                        <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                      </div>
                      <div className="h-4 w-28 rounded-full bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16">
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
                      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    >
                      {product.images?.[0] && (
                        <div className="overflow-hidden h-52">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="p-5 flex flex-col flex-1">
                        {product.category?.name && (
                          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                            {product.category.name}
                          </span>
                        )}

                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        {product.author && (
                          <p className="text-sm text-gray-500 mb-3">
                            By{" "}
                            <span className="font-medium">
                              {product.author}
                            </span>
                          </p>
                        )}

                        {product.description && (
                          <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
                            {getShortDescription(product.description)}
                          </p>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(articleLink);
                          }}
                          className="mt-auto inline-flex w-fit items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
                        >
                          Read more →
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
                  <button
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
                  >
                    Previous
                  </button>

                  <span className="text-gray-700 font-medium text-lg">
                    Page {currentPage} of {totalPages} ({totalItems} items)
                  </span>

                  <button
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 sm:py-20 md:py-24 text-gray-500 text-lg sm:text-xl mb-16">
              No items found
              {searchQuery && ` matching "${searchQuery}"`}
              {activeCategory !== "All" && ` in "${activeCategory}"`}.
            </div>
          )}

          <section className="relative mb-16 overflow-hidden rounded-[30px] border border-white/20 shadow-[0_20px_60px_rgba(15,23,42,0.12)] animate-fade-in-up">
            <div className="absolute inset-0">
              <img
                src="../../src/assets/BannerCTA.jpg"
                alt="MBBS Abroad counselling banner"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/55 to-blue-900/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)]" />
            </div>

            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-5 py-14 text-center text-gray-900 sm:min-h-[360px] md:min-h-[420px]">
              <span className="mb-4 inline-flex rounded-full border border-indigo-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur-sm">
                Free Consultation
              </span>

              <h3 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Start Your Global Journey Today
              </h3>

              <p className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg md:text-xl">
                Free profile evaluation • No-obligation consultation
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=919630736070",
                    "_blank",
                  )
                }
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#20ba5c] hover:shadow-xl active:scale-95 sm:px-10 sm:text-lg"
              >
                Talk to an Expert →
              </button>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="text-2xl font-bold text-indigo-600 ml-4 flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`px-6 pb-5 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
