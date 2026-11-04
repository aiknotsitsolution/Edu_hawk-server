import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { Share as ShareIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentProduct,
  selectDetailStatus,
  fetchProductBySlugOrId,
  clearCurrentProduct,
} from "./productsSlice";
import SeoHead from "../../component/SeoHead.jsx";

const BlogDetail = () => {
  const { slugOrId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  // Slug from route params, falling back to the URL path.
  const mySlug = slugOrId || location.pathname.replace(/^\/blog\/?/, "");

  const post = useSelector(selectCurrentProduct);
  const detailStatus = useSelector(selectDetailStatus);

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

  // Post failed to load (rejected thunk, no data) — small message, no endless spinner.
  if (!post && detailStatus === "failed") {
    return (
      <article className="min-h-screen bg-gray-50 pt-8 pb-20">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <p className="mb-6 text-lg text-gray-600">
            This article could not be loaded. It may have been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            ← View all articles
          </Link>
        </div>
      </article>
    );
  }

  // Light skeleton while the post is being fetched (no data yet).
  if (!post) {
    return (
      <article className="min-h-screen bg-gray-50 pt-8 pb-20" aria-busy="true">
        <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
          <div className="mb-8 h-9 w-36 animate-pulse rounded-full bg-gray-200" />
          <div className="mb-3 h-12 w-11/12 animate-pulse rounded-xl bg-gray-200" />
          <div className="mb-10 h-12 w-2/3 animate-pulse rounded-xl bg-gray-200" />
          <div className="mb-12 h-4 w-52 animate-pulse rounded bg-gray-200" />
          <div className="space-y-5">
            {[92, 100, 96, 100, 88, 100, 74].map((w, i) => (
              <div
                key={i}
                className="h-4 animate-pulse rounded bg-gray-200"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      </article>
    );
  }

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
        {/* Hero Image - full width (rendered only when the post has an image) */}
        {heroImage && (
          <div className="relative mx-auto mb-10 max-w-6xl overflow-hidden rounded-3xl px-4 shadow-2xl sm:px-6">
            <div className="w-full overflow-hidden bg-slate-100">
              <img
                src={heroImage}
                alt={post?.name}
                className="h-[240px] w-full object-cover sm:h-[440px] md:h-[520px] lg:h-[620px]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        )}

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
