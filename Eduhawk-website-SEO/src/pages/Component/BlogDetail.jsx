import { useEffect, useMemo } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import SeoHead from "../../component/SeoHead.jsx";

const BlogDetail = () => {
  const { slugOrId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  // Slug from route params, falling back to the URL path.
  const mySlug = slugOrId || location.pathname.replace(/^\/blog\/?/, "");

  const post = useSelector(selectCurrentProduct);
  const loading = useSelector(selectDetailStatus) === "loading";
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (slugOrId) {
      dispatch(fetchProductBySlugOrId(slugOrId));
    }
    return () => {
      dispatch(clearCurrentProduct());
    };
  }, [slugOrId, dispatch]);

  const formatDate = (iso) =>
    iso
      ? new Date(iso).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  const postExcerpt = post?.description
    ? String(post.description)
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 155)
    : "";
  const postImage = post?.images?.[0] ?? null;
  const postOgImage = postImage
    ? postImage.startsWith("http")
      ? postImage
      : `https://edu-hawk-server.onrender.com${postImage.startsWith("/") ? "" : "/"}${postImage}`
    : null;

  const categoryName = post?.category?.name ?? "Uncategorised";
  const heroImage = post?.images?.[0] ?? null;
  const postDate = formatDate(post?.createdAt);

  const safeDescription = post?.description
    ? DOMPurify.sanitize(String(post.description), {
        USE_PROFILES: { html: true },
      })
    : "";

  // Improved prose classes for better image display
  const proseClasses =
    "prose prose-lg max-w-none mb-16 " +
    "prose-headings:font-bold prose-headings:text-gray-900 " +
    "prose-p:text-gray-700 prose-p:leading-relaxed " +
    "prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-10 prose-img:mx-auto " +
    "prose-img:w-full prose-img:max-w-4xl prose-img:h-auto " +
    "prose-a:text-indigo-600 hover:prose-a:text-indigo-700 " +
    "prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 " +
    "prose-li:my-1 " +
    "prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded " +
    "prose-pre:bg-gray-900 prose-pre:text-gray-100 " +
    "prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:pl-4 " +
    "prose-table:border prose-th:bg-gray-100 prose-td:border";

  return (
    <>
      <SeoHead
        title={
          post?.name ? `${post.name.trim()} | Edu Hawk` : "Blog | Edu Hawk"
        }
        description={
          postExcerpt || "Read the latest study abroad articles from Edu Hawk."
        }
        path={`/blog/${mySlug}`}
        ogType="article"
        ogImage={postOgImage}
      />
      <article className="min-h-screen bg-gray-50 pt-8 pb-20">
        {/* Hero Image - full width */}
        <div className="relative mx-auto mb-10 max-w-6xl overflow-hidden rounded-3xl px-4 shadow-2xl sm:px-6">
          <div className="w-full overflow-hidden bg-slate-100">
            {heroImage ? (
              <img
                src={heroImage}
                alt={post?.name}
                className="h-[240px] w-full object-cover sm:h-[440px] md:h-[520px] lg:h-[620px]"
              />
            ) : (
              <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 sm:h-96">
                <span className="text-6xl text-indigo-300">📷</span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <span className="inline-block bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full mb-4">
            {categoryName}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post?.name}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 mb-12">
            {postDate && <span>{postDate}</span>}
            {post?.author && (
              <span>
                By{" "}
                <span className="font-medium text-gray-900">{post.author}</span>
              </span>
            )}
          </div>

          {/* Content - Sanitized HTML Rendering */}
          {safeDescription ? (
            <div
              className={`blog-description ${proseClasses}`}
              dangerouslySetInnerHTML={{ __html: safeDescription }}
            />
          ) : (
            <p className="text-gray-500 italic">No content available.</p>
          )}

          {/* Video */}
          {post?.videoUrl && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
              <video controls className="w-full" src={post.videoUrl}>
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Share */}
          <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
            <span className="text-gray-600 font-medium">Share this article:</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied successfully!");
              }}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              title="Copy link"
            >
              <ShareIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Back Link */}
          <div className="text-center mt-20">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
            >
              ← View all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetail;
