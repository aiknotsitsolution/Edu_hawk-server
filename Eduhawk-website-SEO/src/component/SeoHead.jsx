import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Single source of truth for the canonical site origin.
 *
 * NOTE (Phase 4, pending management decision): the production redirect host
 * (apex eduhawk.in vs www.eduhawk.in) must be confirmed by the manager before
 * this value is changed. Current value matches the canonical URLs already
 * used across the site's existing per-page Helmet tags and index.html.
 */
export const SITE_URL = "https://www.eduhawk.in";

/**
 * Shared OG / social image (official branded 1200x630 banner asset served from public/).
 */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * SeoHead - shared per-page SEO metadata component.
 *
 * Required props:
 *  - title            {string}   Unique page title.
 *  - description      {string}   Page-specific meta description.
 *  - path             {string}   Route path, e.g. "/courses/mbbs" (used to build the
 *                                canonical URL). Pass null for non-indexable pages
 *                                (e.g. 404) so NO canonical is emitted.
 *
 * Optional props (all have safe defaults):
 *  - ogTitle          {string}   Defaults to `title`.
 *  - ogDescription    {string}   Defaults to `description`.
 *  - ogImage          {string}   Absolute URL, defaults to DEFAULT_OG_IMAGE.
 *  - ogType           {string}   Defaults to "website" (use "article" for blog posts).
 *  - twitterCard      {string}   Defaults to "summary_large_image".
 *  - twitterTitle     {string}   Defaults to `ogTitle`.
 *  - twitterDescription {string} Defaults to `ogDescription`.
 *  - twitterImage     {string}   Defaults to `ogImage`.
 *  - noindex          {bool}     When true, emits ONLY "noindex, nofollow" -
 *                                never an index directive (safe for 404 etc.).
 *  - keywords         {string}   Legacy meta keywords, preserved verbatim when pages
 *                                migrate off their own Helmet blocks.
 *  - children         {node}     Extra head content (e.g. JSON-LD <script> tags),
 *                                rendered inside this Helmet block.
 *
 * Rules:
 *  - Exactly ONE title, description, canonical, robots, og:title, og:description
 *    is emitted per SeoHead call (react-helmet-async handles DOM de-duplication).
 *  - Canonical is always generated from SITE_URL + `path`; SeoHead never falls
 *    back to the homepage canonical for unrelated pages.
 */
const SeoHead = ({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage = ogImage,
  noindex = false,
  keywords,
  children,
}) => {
  const canonical = path ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : null;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const resolvedTwitterTitle = twitterTitle ?? resolvedOgTitle;
  const resolvedTwitterDescription = twitterDescription ?? resolvedOgDescription;
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {resolvedOgTitle && <meta property="og:title" content={resolvedOgTitle} />}
      {resolvedOgDescription && (
        <meta property="og:description" content={resolvedOgDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Edu-Hawk Worldwide" />
      <meta name="twitter:card" content={twitterCard} />
      {resolvedTwitterTitle && <meta name="twitter:title" content={resolvedTwitterTitle} />}
      {resolvedTwitterDescription && (
        <meta name="twitter:description" content={resolvedTwitterDescription} />
      )}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {children}
    </Helmet>
  );
};

export default SeoHead;
