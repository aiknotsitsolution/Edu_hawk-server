/**



 * CoursePageKit — shared polished UI kit for course "study abroad" pages.



 *



 * Visual language mirrors the reference pages (Dentistry/Nursing/Pharmacy/



 * Physiotherapy/Public-Health/Biotechnology): page-scoped reveal animations,



 * soft card design system, circular check lists, numbered timelines, image



 * university cards and a rounded CTA panel.



 *



 * IMPORTANT: this kit only changes how content is PRESENTED. Every string



 * passed in by the pages is rendered as-is (content is never modified).



 */



import React, { useEffect, useRef, useState } from "react";



import { Link } from "react-router-dom";



import SeoHead from "./SeoHead";







/* ------------------------------------------------------------------ */



/*  Shared page CSS (scoped to .ehp-page)                              */



/* ------------------------------------------------------------------ */



export const EHP_CSS = `



  @keyframes ehp-float {



    0%, 100% { transform: translate3d(0, 0, 0); }



    50% { transform: translate3d(0, -18px, 0); }



  }



  @keyframes ehp-image-in {



    from { opacity: 0; transform: translateX(24px) scale(.98); }



    to { opacity: 1; transform: translateX(0) scale(1); }



  }



  @keyframes ehp-zoom-in-out {



    0% { transform: scale(1); }



    50% { transform: scale(1.12); }



    100% { transform: scale(1); }



  }



  .ehp-bg-zoom {



    animation: ehp-zoom-in-out 16s ease-in-out infinite !important;



    will-change: transform;



    transform-origin: center center;



  }



  .ehp-page .ehp-reveal {



    opacity: 0;



    transform: translateY(24px);



    transition: opacity .65s ease, transform .65s cubic-bezier(.2, .7, .2, 1);



  }



  .ehp-page .ehp-reveal.is-visible {



    opacity: 1;



    transform: translateY(0);



  }



  .ehp-page .ehp-card {



    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;



  }



  .ehp-page .ehp-card:hover {



    transform: translateY(-4px);



    box-shadow: 0 16px 35px rgba(15, 23, 42, .09);



    border-color: rgb(191 219 254); /* blue-200 */



  }



  .ehp-page .ehp-hero-glow {



    animation: ehp-float 8s ease-in-out infinite;



  }



  .ehp-page .ehp-hero-image {



    animation: ehp-image-in .8s ease-out both;



  }



  .ehp-page h2 {



    letter-spacing: -.025em;



  }



  .ehp-page strong {



    font-weight: 700;



  }



  .ehp-page .bg-slate-900 strong,



  .ehp-page [class*="bg-slate-900"] strong,



  .ehp-page [class*="from-slate-900"] strong,



  .ehp-page .text-white strong {



    color: #ffffff !important;



  }



  @media (max-width: 1023px) {



    .ehp-page .ehp-hero-image {



      height: clamp(14rem, 52vw, 24rem);



    }



  }



  @media (max-width: 639px) {



    .ehp-page {



      overflow-x: clip;



    }



    .ehp-page section:not(:first-of-type) {



      padding-top: 3rem;



      padding-bottom: 3rem;



    }



    .ehp-page .max-w-6xl {



      padding-left: 1rem;



      padding-right: 1rem;



    }



    .ehp-page h1 {



      font-size: clamp(2rem, 9vw, 2.5rem);



      letter-spacing: -.035em;



    }



    .ehp-page h2 {



      text-wrap: balance;



    }



    .ehp-page section a {



      min-height: 2.75rem;



    }



    .ehp-page .ehp-hero-glow {



      width: 18rem;



      height: 18rem;



    }



  }



  @media (hover: none) {



    .ehp-page .ehp-card:hover {



      transform: none;



      box-shadow: none;



    }



  }



  @media (prefers-reduced-motion: reduce) {



    .ehp-page .ehp-reveal,



    .ehp-page .ehp-hero-glow,



    .ehp-page .ehp-hero-image {



      animation: none;



      transition: none;



      opacity: 1;



      transform: none;



    }



    .ehp-page .ehp-card {



      transition: none;



    }



  }



`;







/* ------------------------------------------------------------------ */



/*  Page shell: root div + scoped CSS + scroll-reveal wiring           */



/* ------------------------------------------------------------------ */



export const EhpShell = ({ children }) => {



  const pageRef = useRef(null);







  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !pageRef.current) return;
    const sections = pageRef.current?.querySelectorAll("section");
    if (!sections) return;
    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s?.classList?.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target?.classList?.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    sections.forEach((s) => {
      s?.classList?.add("ehp-reveal");
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);







  return (



    <div



      ref={pageRef}



      className="ehp-page font-sans text-slate-800 bg-white min-h-screen antialiased"



    >



      <style>{EHP_CSS}</style>



      {children}



    </div>



  );



};







/* ------------------------------------------------------------------ */



/*  Rich Text Formatter (Supports **bold**, [text](/url), <strong>)    */



/* ------------------------------------------------------------------ */



export const formatRichText = (content) => {
  if (!content) return content;
  if (typeof content === "object") {
    if (React.isValidElement(content)) return content;
    const title = content.title || content.t;
    const desc = content.desc || content.text || content.d;
    if (title && desc) {
      return (
        <span>
          <strong className="font-semibold text-slate-900">{formatRichText(title)}: </strong>
          <span>{formatRichText(desc)}</span>
        </span>
      );
    }
    if (title) return formatRichText(title);
    if (desc) return formatRichText(desc);
    return null;
  }
  if (typeof content !== "string") return content;



  const parts = content.split(/(\*\*\[.*?\]\(.*?\)\*\*|\*\*.*?\*\*|\[.*?\]\(.*?\)|<strong>.*?<\/strong>)/g);



  if (parts.length === 1) return content;



  return parts.filter(Boolean).map((part, index) => {



    if (part.startsWith("**[") && part.endsWith(")**")) {



      const match = part.slice(2, -2).match(/^\[(.*?)\]\((.*?)\)$/);



      if (match) {



        const [, label, url] = match;



        if (url.startsWith("#")) {



          return (



            <a key={index} href={url} className="text-blue-600 font-bold hover:underline cursor-pointer">



              <strong>{label}</strong>



            </a>



          );



        }



        return (



          <Link key={index} to={url} className="text-blue-600 font-bold hover:underline">



            <strong>{label}</strong>



          </Link>



        );



      }



    }



    if (part.startsWith("**") && part.endsWith("**")) {



      return (



        <strong key={index} className="font-bold text-inherit">



          {part.slice(2, -2)}



        </strong>



      );



    }



    if (part.startsWith("<strong>") && part.endsWith("</strong>")) {



      return (



        <strong key={index} className="font-bold text-inherit">



          {part.slice(8, -9)}



        </strong>



      );



    }



    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);



    if (linkMatch) {



      const [, label, url] = linkMatch;



      if (url.startsWith("#")) {



        return (



          <a key={index} href={url} className="text-blue-600 font-semibold hover:underline cursor-pointer">



            {label}



          </a>



        );



      }



      return (



        <Link key={index} to={url} className="text-blue-600 font-semibold hover:underline">



          {label}



        </Link>



      );



    }



    return part;



  });



};







/* ------------------------------------------------------------------ */



/*  Hero                                                               */



/* ------------------------------------------------------------------ */



export const EhpHero = ({



  crumb,



  eyebrow,



  lead,



  accent,



  tail,



  paras,



  primary,



  secondary,



  img,



  imgAlt,



  imgDims,



  bgImg,



}) => (



  <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">



    {bgImg && (



      <div className="absolute inset-0 overflow-hidden pointer-events-none">



        <img



          src={bgImg}



          alt="Hero background"



          className="w-full h-full object-cover ehp-bg-zoom opacity-55"



          loading="eager"



        />



        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-950/75" />



      </div>



    )}



    <div className="ehp-hero-glow absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />



    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">



        <div>



          <div className="text-sm text-white/50 mb-5">



            Home <span className="mx-1.5">›</span> Study Abroad{" "}



            <span className="mx-1.5">›</span> {crumb}



          </div>



          <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">



            {eyebrow}



          </div>



          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">



            {lead}{" "}



            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">



              {accent}



            </span>{" "}



            {tail}



          </h1>



          {paras.map((p, i) => (



            <p



              key={i}



              className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed [&_strong]:text-white [&_strong]:font-bold [&_a]:text-blue-400 hover:[&_a]:text-blue-300 [&_a]:underline"



            >



              {formatRichText(p)}



            </p>



          ))}



          <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mt-3">



            <a



              href={primary.href}



              target={primary.external ? "_blank" : undefined}



              rel={primary.external ? "noopener noreferrer" : undefined}



              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"



            >



              {primary.label}



            </a>



            <a



              href={secondary.href}



              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"



            >



              {secondary.label}



            </a>



          </div>



        </div>



        <div className="relative mt-2 lg:mt-0">



          <img



            src={img}



            width={imgDims?.w ?? 1600}



            height={imgDims?.h ?? 1065}



            alt={imgAlt}



            className="ehp-hero-image rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px]"



            loading="eager"



                  srcSet={`${img} 1x, ${img} 2x`}



                  sizes="100vw"



                />



          <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium">



            Trusted by 1000+ Indian students



          </div>



        </div>



      </div>



    </div>



  </section>



);







/* ------------------------------------------------------------------ */



/*  Headings                                                           */



/* ------------------------------------------------------------------ */



export const EhpHead = ({ eyebrow, title, desc, descClass, center, as }) => (



  <div className={(center ? "text-center " : "") + "mb-9"}>



    <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">



      {eyebrow}



    </div>



    <h2



      className={



        (as === "h3" ? "text-lg" : "text-2xl sm:text-3xl") +



        " font-bold text-slate-900" +



        (desc ? " mb-4" : "")



      }



    >



      {formatRichText(title)}



    </h2>



    {desc && <Paragraphs items={desc} className={descClass ?? "text-slate-500 text-[15px] leading-relaxed max-w-3xl"} />}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Paragraphs / notes                                                 */



/* ------------------------------------------------------------------ */



export const Paragraphs = ({ items, className, tone }) => {



  if (!items || !items.length) return null;



  return (



    <div



      className={



        className ??



        "text-slate-500 text-[15px] leading-relaxed space-y-4"



      }



    >



      {items.map((p, i) => {
        if (!p) return null;
        if (typeof p === "object" && !React.isValidElement(p)) {
          const title = p.title || p.t;
          const desc = p.desc || p.text || p.d;
          return (
            <div key={i} className="my-3">
              {title && <h4 className="font-semibold text-slate-900 mb-1">{formatRichText(title)}</h4>}
              {desc && <p className="text-[15px] text-slate-600 leading-relaxed">{formatRichText(desc)}</p>}
            </div>
          );
        }
        return (
          <p
            key={i}
            className={tone === "dark" ? "text-white/85 text-[15px] leading-relaxed [&_strong]:text-white [&_strong]:font-bold" : undefined}
          >
            {formatRichText(p)}
          </p>
        );
      })}



    </div>



  );



};







/* ------------------------------------------------------------------ */



/*  Circular check list                                                */



/* ------------------------------------------------------------------ */



export const CheckIcon = ({ size = 22, inner = 12, stroke = 2.8 }) => (



  <span



    className={`flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5`}



    style={size !== 22 ? { width: size, height: size } : undefined}



  >



    <svg width={inner} height={inner} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke}>



      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />



    </svg>



  </span>



);







export const CheckList = ({ items, cols = 1, tone = "light" }) => (



  <div



    className={



      cols === 2



        ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5"



        : "space-y-3.5"



    }



  >



    {(items || []).map((it, i) => (



      <div key={i} className="flex gap-3 text-[15px] leading-snug">



        {tone === "dark" ? (



          <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-white/10 text-blue-300 grid place-items-center mt-0.5">



            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">



              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />



            </svg>



          </span>



        ) : (



          <CheckIcon />



        )}



        <span className={tone === "dark" ? "text-white/85" : "text-slate-700"}>



          {formatRichText(it)}



        </span>



      </div>



    ))}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Dot-bullet grid (soft chips)                                       */



/* ------------------------------------------------------------------ */



export const DotGrid = ({ items, cols = 3, tone = "light" }) => (



  <div



    className={



      cols === 2



        ? "grid grid-cols-1 sm:grid-cols-2 gap-3"



        : cols === 1



          ? "grid grid-cols-1 gap-3"



          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"



    }



  >



    {items.map((it, i) => (



      <div



        key={i}



        className={



          tone === "dark"



            ? "flex items-center gap-2.5 text-[15px] text-white/90 bg-white/[.06] border border-white/10 rounded-lg px-3.5 py-2.5"



            : "flex items-start gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5 ehp-card border border-transparent"



        }



      >



        <span



          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${tone === "dark" ? "bg-blue-400" : "bg-blue-500"}`}



        ></span>



        <span className="leading-relaxed">{formatRichText(it)}</span>



      </div>



    ))}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Icon tiles (courses / costs / careers / jobs)                      */



/* ------------------------------------------------------------------ */



const TileItem = (i) => {



  const tones = [



    "bg-blue-50 text-blue-600",



    "bg-teal-50 text-teal-600",



    "bg-indigo-50 text-indigo-600",



    "bg-blue-50 text-blue-600",



    "bg-orange-50 text-orange-600",



    "bg-teal-50 text-teal-600",



  ];



  return tones[i] ?? tones[0];



};







export const TileGrid = ({ items, area = "" }) => (



  <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 " + area}>



    {items.map((it, i) => (



      <div



        key={i}



        className="ehp-card bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-3"



      >



        <div



          className={`w-9 h-9 rounded-lg grid place-items-center flex-shrink-0 ${TileItem(i)}`}



        >



          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">



            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />



          </svg>



        </div>



        <span className="text-[15px] font-medium text-slate-800 leading-snug">



          {formatRichText(it)}



        </span>



      </div>



    ))}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Pills (English tests etc.)                                         */



/* ------------------------------------------------------------------ */



export const Pills = ({ items, tone = "blue" }) => (



  <div className="flex flex-wrap gap-2.5">



    {items.map((t, i) => (



      <span



        key={i}



        className={



          (tone === "blue"



            ? "inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-50 border border-blue-200 text-blue-700"



            : "inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white border border-slate-200 text-slate-800")



        }



      >



        {t}



      </span>



    ))}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Stat cards (at-a-glance / highlights)                              */



/* ------------------------------------------------------------------ */



export const PaperArtCorner = ({ variant = "waves", color = "#0284c7" }) => {
  if (variant === "topo") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h64v64C64 28.65 35.35 0 0 0z" fill={color} fillOpacity="0.08" />
        <path d="M12 0c3 22 28 47 52 52" stroke={color} strokeWidth="1.3" strokeOpacity="0.35" />
        <path d="M24 0c3 17 21 35 40 40" stroke={color} strokeWidth="1.3" strokeOpacity="0.5" />
        <path d="M36 0c3 12 15 24 28 28" stroke={color} strokeWidth="1.3" strokeOpacity="0.65" />
        <path d="M48 0c2 7 9 14 16 16" stroke={color} strokeWidth="1.3" strokeOpacity="0.8" />
      </svg>
    );
  }
  if (variant === "origami") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h64v64L0 0z" fill={color} fillOpacity="0.06" />
        <path d="M18 0L64 46M34 0L64 30M50 0L64 14" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
        <path d="M26 0L64 38M42 0L64 22M58 0L64 6" stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 3" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 64 64"
      className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h64v64C64 28.65 35.35 0 0 0z" fill={color} fillOpacity="0.08" />
      <path d="M16 0c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.4" />
      <path d="M32 0c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.45" />
      <path d="M48 0c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.5" />
      <path d="M24 8c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.45" />
      <path d="M40 8c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.5" />
      <path d="M32 16c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.5" />
      <path d="M48 16c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.55" />
      <path d="M40 24c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke={color} strokeWidth="1.3" strokeOpacity="0.55" />
      <path d="M20 0c0 24.3 19.7 44 44 44" stroke={color} strokeWidth="1.2" strokeOpacity="0.3" />
      <path d="M36 0c0 15.4 12.6 28 28 28" stroke={color} strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M50 0c0 7.7 6.3 14 14 14" stroke={color} strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
};

export const StatGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((item, i) => {
      const art = item.art !== undefined ? item.art : (i === 1 ? "waves" : null);
      const isHighlighted = !!art;
      return (
        <div
          key={i}
          className={`ehp-card bg-white rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:shadow-md ${
            isHighlighted
              ? "border border-blue-200/90 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.12)]"
              : "border border-slate-200"
          }`}
        >
          {art && <PaperArtCorner variant={art} color={item.artColor || "#0284c7"} />}
          <span className="block text-[13px] text-slate-500 font-medium mb-1.5 relative z-10">
            {item.label}
          </span>
          <strong className="text-[15px] text-slate-900 font-semibold leading-snug relative z-10 block">
            {formatRichText(item.value)}
          </strong>
        </div>
      );
    })}
  </div>
);







/* ------------------------------------------------------------------ */



/*  University cards (image)                                           */



/* ------------------------------------------------------------------ */



export const UniversityGrid = ({ unis, alt, className = "" }) => (



  <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 " + className}>



    {unis.map((u, i) => (



      <div



        key={u.name ?? i}



        className="relative rounded-2xl overflow-hidden h-60 group"



      >



        {u.img ? (



          <img



            src={u.img}



            alt={(typeof alt === "function" ? alt(u) : alt) ?? u.name}



            loading="lazy"



            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"



                  srcSet={`${u.img} 1x, ${u.img} 2x`}



                  sizes="(max-width: 768px) 100vw, 50vw"



                />



        ) : (



          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">



            <span className="text-5xl font-bold text-white/20">



              {u.name.charAt(0)}



            </span>



          </div>



        )}



        {(u.link || u.url || u.website) && (
          <a
            href={u.link || u.url || u.website}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${u.name} official website`}
            className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:scale-110 transition-all duration-200 shadow-md"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Visit ${u.name} official website`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">



          <div className="transform group-hover:-translate-y-1 transition-transform duration-300">



            <h3 className="text-white font-semibold text-lg leading-snug">



              {u.name}



            </h3>



            {(u.desc || u.location) && (



              <p className="text-white/80 text-sm line-clamp-3">



                {formatRichText(u.desc || u.location)}



              </p>



            )}



          </div>



        </div>



      </div>



    ))}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Numbered step timeline (like reference "admission process")        */



/* ------------------------------------------------------------------ */



export const StepTimeline = ({ steps, center }) => (



  <div className={(center ? "max-w-3xl mx-auto " : "") + "max-w-4xl"}>



    {steps.map((s, i) => (



      <div key={i} className="flex gap-5 pb-8 relative">



        {i < steps.length - 1 && (



          <div className="absolute left-[22px] top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />



        )}



        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-base grid place-items-center relative z-10 shadow-md shadow-blue-600/30">



          {i + 1}



        </div>



        <div className="pt-1 bg-white/0 rounded-lg">



          {typeof s === "string" ? (



            <p className="text-[15px] text-slate-700 leading-relaxed pt-1.5">



              {formatRichText(s)}



            </p>



          ) : React.isValidElement(s) ? (



            <p className="text-[15px] text-slate-700 leading-relaxed pt-1.5">



              {s}



            </p>



          ) : (



            <>



              {s.title && (



                <h3 className="text-[17px] font-semibold text-slate-900 mb-1">



                  {formatRichText(s.title)}



                </h3>



              )}



              {(s.text || s.desc) && (
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  {formatRichText(s.text || s.desc)}
                </p>



              )}



            </>



          )}



        </div>



      </div>



    ))}



  </div>



);







/* ------------------------------------------------------------------ */



/*  Panels                                                             */



/* ------------------------------------------------------------------ */



export const Panel = ({ children, tone = "light", className = "" }) => (



  <div



    className={



      (tone === "dark"



        ? "bg-slate-900 text-white rounded-2xl p-6 sm:p-8 ehp-shadow-none [&_strong]:text-white [&_strong]:font-bold"



        : tone === "soft"



          ? "bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8"



          : "bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 ehp-card") +



      " " +



      className



    }



  >



    {children}



  </div>



);







/* ------------------------------------------------------------------ */



/*  FAQ accordion                                                      */



/* ------------------------------------------------------------------ */



export const FaqList = ({ faqs }) => {



  const [open, setOpen] = useState(null);



  return (



    <div className="space-y-3 max-w-3xl">



      {faqs.map((f, i) => (



        <div



          key={i}



          className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-100 transition-colors"



        >



          <button



            onClick={() => setOpen(open === i ? null : i)}



            className="w-full px-5 py-4 font-semibold text-[15px] text-left text-slate-900 flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors bg-transparent border-none cursor-pointer font-sans"



          >



            <span>{formatRichText(f.q)}</span>



            <span className="text-xl text-slate-400 font-normal flex-shrink-0 w-6 text-center">



              {open === i ? "−" : "+"}



            </span>



          </button>



          {open === i && (



            <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">



              {f.a && formatRichText(f.a)}



            </div>



          )}



        </div>



      ))}



    </div>



  );



};







/* ------------------------------------------------------------------ */



/*  CTA band (rounded dark panel inside a light section)               */



/* ------------------------------------------------------------------ */



export const CtaBand = ({ title, desc, bgImg}) => (



  <section className="py-16 sm:py-20" id="consult">



    <div className="max-w-6xl mx-auto px-6">



      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-8 py-14 sm:px-12 text-center text-white relative overflow-hidden">



        {bgImg && (



          <div className="absolute inset-0 overflow-hidden pointer-events-none">



            <img



              src={bgImg}



              alt="CTA background"



              className="w-full h-full object-cover ehp-bg-zoom opacity-65"



              loading="lazy"



            />



            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/45 to-slate-950/70" />



          </div>



        )}



        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />



        <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">



          {title}



        </h2>



        <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">



          {desc}



        </p>



        <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center relative">



          <a



            href="https://api.whatsapp.com/send?phone=919630736070"



            target="_blank"



            rel="noopener noreferrer"



            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"



          >



            Chat on WhatsApp



          </a>



          <a



            href="tel:+919630736070"



            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"



          >



            Call +91 96307 36070



          </a>



        </div>



      </div>



    </div>



  </section>



);







/* ------------------------------------------------------------------ */



/*  Eligibility CTA Card (Dark card matching user screenshot)          */



/* ------------------------------------------------------------------ */



export const EligibilityCtaCard = ({



  level = "UG",



  whatsappNumber = "919630736070",



}) => {



  const isPG = level === "PG" || level === "Postgraduate";



  return (



    <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-slate-800">



      <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-white">



        Not sure if you are eligible?



      </h3>



      <p className="text-white/70 text-[15px] leading-relaxed mb-6">



        {isPG



          ? "Share your graduation marks and preferred universities. We will tell you honestly which universities and programs are realistic for your profile and budget."



          : "Share your Class 12 marks and preferred countries. We will tell you honestly which universities and programs are realistic for your profile and budget."}



      </p>



      <a



        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi%2C%20I%20want%20to%20check%20my%20eligibility%20for%20study%20abroad`}



        target="_blank"



        rel="noopener noreferrer"



        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-md shadow-blue-600/30 w-full sm:w-auto"



      >



        Book free eligibility check



      </a>



    </div>



  );



};







/* ================================================================== */



/*  ENGINEERING BRANCH PAGE (UG / PG)                                  */



/* ================================================================== */







/* Canonical list of engineering branches, used to build the internal



   "explore other specialisations" cross-links on every branch page.



   Slugs match the routes registered in src/routes/routes.jsx. */



const ENGINEERING_BRANCHES = [



  { name: "Computer Engineering", slug: "computer-engineering" },



  { name: "Mechanical Engineering", slug: "mechanical-engineering" },



  { name: "Civil Engineering", slug: "civil-engineering" },



  { name: "Electrical Engineering", slug: "electrical-engineering" },



  { name: "Electronics & Communication", slug: "electronics-communication" },



  { name: "Chemical Engineering", slug: "chemical-engineering" },



  { name: "Aerospace Engineering", slug: "aerospace-engineering" },



  { name: "Biomedical Engineering", slug: "biomedical-engineering" },



  { name: "Automobile Engineering", slug: "automobile-engineering" },



];







/* Internal-linking block: links back to the parent engineering landing



   page and across to the sibling specialisations (same level). */



const RelatedBranches = ({ level, currentSlug, country = "USA" }) => {



  const isPG = level === "PG";



  const levelText = isPG ? "Postgraduate" : "Undergraduate";



  const isFinland = country === "Finland";



  const inCountry = country === "USA" ? "the USA" : country;



  const base = isFinland



    ? (isPG ? "/study-abroad/finland/pg" : "/study-abroad/finland/ug")



    : (isPG ? "/courses/pg" : "/courses/ug");



  const siblings = ENGINEERING_BRANCHES.filter((b) => b.slug !== currentSlug);







  return (



    <section className="py-16 sm:py-20 bg-slate-50">



      <div className="max-w-6xl mx-auto px-6">



        <EhpHead



          eyebrow="Explore more"



          title={`Other ${levelText} Engineering Specialisations in ${inCountry}`}



          desc={[



            `Compare ${levelText.toLowerCase()} engineering branches, or return to the full ${levelText.toLowerCase()} engineering in ${inCountry} guide for Indian students.`,



          ]}



          descClass="text-slate-500 text-[15px] leading-relaxed max-w-3xl"



        />



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">



          <Link



            to={`${base}/engineering`}



            className="group ehp-card bg-white border border-blue-200 rounded-xl p-5 no-underline"



          >



            <div className="flex items-center justify-between mb-2">



              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">



                {levelText} Engineering in {inCountry}



              </h3>



              <span className="text-slate-300 group-hover:text-blue-600 transition-colors">



                →



              </span>



            </div>



            <p className="text-sm text-slate-500 leading-relaxed">



              Browse every {levelText.toLowerCase()} engineering branch, process



              and career pathway in one place.



            </p>



          </Link>



          {siblings.map((b) => (



            <Link



              key={b.slug}



              to={`${base}/${b.slug}`}



              className="group ehp-card bg-white border border-slate-200 rounded-xl p-5 no-underline"



            >



              <div className="flex items-center justify-between mb-2">



                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">



                  {b.name}



                </h3>



                <span className="text-slate-300 group-hover:text-blue-600 transition-colors">



                  →



                </span>



              </div>



              <p className="text-sm text-slate-500 leading-relaxed">



                {levelText} {b.name} in {inCountry} — eligibility, fees, universities



                and careers.



              </p>



            </Link>



          ))}



        </div>



      </div>



    </section>



  );



};







export const EngineeringBranchPage = ({



  branch,



  level,



  heroImg,



  heroBgImg,



  ctaBgImg,



  seoPath,



  heroAlt,



  coursesTitle,



  unisTitle,



  testsEyebrow,



  testsTitle,



  careersTitle,



  faqTitle,



}) => {



  const isPG = level === "PG";



  const levelText = isPG ? "Postgraduate" : "Undergraduate";



  const country = branch.country || "USA";



  const inCountry = country === "USA" ? "the USA" : country;



  const effectiveCoursesTitle =



    coursesTitle ??



    (isPG



      ? `Postgraduate ${branch.name} Courses in ${inCountry}`



      : `${branch.name} Courses in ${inCountry}`);



  const effectiveUnisTitle =



    unisTitle ??



    `Top Universities for${isPG ? " Postgraduate" : ""} ${branch.name} in ${inCountry}`;



  const effectiveCareersTitle =



    careersTitle ??



    `Career Opportunities After${isPG ? " Postgraduate" : ""} ${branch.name}`;



  const effectiveFaqTitle =



    faqTitle ??



    `Frequently Asked Questions —${isPG ? " Postgraduate" : ""} ${branch.name} in ${inCountry}`;



  const heroAltText = heroAlt ?? `${branch.name} students in the USA`;



  const primary = {



    href: "https://api.whatsapp.com/send?phone=919630736070",



    external: true,



    label: "Book free counselling",



  };



  const secondary = { href: "#faq", label: "Read FAQs" };







  return (



    <EhpShell>



      <SeoHead title={branch.title} description={branch.description} path={seoPath}>



        <script type="application/ld+json">



          {JSON.stringify({



            "@context": "https://schema.org",



            "@type": "FAQPage",



            mainEntity: branch.faqs.map((f) => ({



              "@type": "Question",



              name: f.q,



              acceptedAnswer: { "@type": "Answer", text: f.a },



            })),



          })}



        </script>



      </SeoHead>







      {/* HERO */}



      <EhpHero



        crumb={



          <>



            Engineering <span className="mx-1.5">›</span> {level}{" "}



            <span className="mx-1.5">›</span> {branch.name}



          </>



        }



        eyebrow={`Study ${branch.name} · ${country} · ${levelText}`}



        lead={`${branch.name} in`}



        accent={inCountry}



        tail="for Indian Students"



        paras={[branch.heroIntro, branch.heroSub]}



        primary={primary}



        secondary={secondary}



        img={heroImg}



        imgAlt={heroAltText}



        imgDims={heroImgDims}



        bgImg={heroBgImg ?? branch?.heroBgImg}



      />







      {/* WHY STUDY */}



      <section className="py-16 sm:py-20">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow={`Why ${inCountry}`}



            title={`Why Study ${branch.name} in ${inCountry}?`}



            desc={branch.whyLead}



          />



          <div className="mb-10">



            <CheckList items={branch.whyPoints} cols={2} />



          </div>



          <Paragraphs items={branch.whyNote} />



        </div>



      </section>







      {/* COURSES */}



      <section className="py-16 sm:py-20 bg-slate-50">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow="Programs"



            title={effectiveCoursesTitle}



            desc={branch.coursesLead}



          />



          <TileGrid items={branch.courses} />



          <Paragraphs



            items={branch.coursesNote}



            className="mt-8 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-4"



          />



        </div>



      </section>







      {/* TOP UNIVERSITIES */}



      <section className="py-16 sm:py-20">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow="Where to study"



            title={effectiveUnisTitle}



            desc={branch.universitiesLead}



            descClass="text-slate-500 text-[15px] leading-relaxed max-w-2xl space-y-3"



          />



          <UniversityGrid



            unis={branch.universities}



            alt={(u) => `${u.name} campus`}



          />



          <Paragraphs



            items={branch.universitiesNote}



            className="mt-8 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-4"



          />



        </div>



      </section>







      {/* DURATION */}



      {branch.duration.length > 0 && (



        <section className="py-16 sm:py-20 bg-slate-50">



          <div className="max-w-6xl mx-auto px-6">



            <EhpHead eyebrow="How long" title="Program Duration" />



            <Panel tone="dark" className="max-w-4xl">



              <Paragraphs items={branch.duration} />



            </Panel>



          </div>



        </section>



      )}







      {/* ELIGIBILITY */}



      <section className="py-16 sm:py-20" id="eligibility">



        <div className="max-w-6xl mx-auto px-6">



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">



            <div>



              <EhpHead



                eyebrow="Who can apply"



                title="Eligibility Requirements for Indian Students"



              />



              <Paragraphs



                items={branch.eligibilityLead}



                className="text-slate-500 text-[15px] leading-relaxed space-y-4 mb-5"



              />



              <CheckList items={branch.eligibility} />



            </div>



            <div className="lg:pt-6">



              <EligibilityCtaCard level={level} />



            </div>



          </div>



        </div>



      </section>







      {/* ENGLISH + TESTS */}



      <section className="py-16 sm:py-20 bg-slate-50">



        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">



          <div>



            <EhpHead



              eyebrow="English proficiency"



              title="English Language Requirements"



              desc={branch.englishLead}



              descClass="text-slate-500 text-[15px] leading-relaxed space-y-3 mb-5"



            />



            <Pills items={branch.englishTests} />



            <Paragraphs



              items={branch.englishNote}



              className="mt-5 text-slate-500 text-[15px] leading-relaxed space-y-4"



            />



          </div>



          <div>



            <EhpHead



              eyebrow={testsEyebrow ?? "Standardised tests"}



              title={testsTitle ?? (isPG ? "GRE & Other Admission Requirements" : "SAT & Other Admission Tests")}



            />



            {branch.testsNote?.length > 0 && (



              <Panel tone="soft">



                <Paragraphs items={branch.testsNote} />



              </Panel>



            )}



          </div>



        </div>



      </section>







      {/* COSTS */}



      <section className="py-16 sm:py-20">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow="Budget"



            title="Tuition Fees and Living Expenses"



            desc={branch.costsLead}



          />



          <TileGrid items={branch.costs} />



          <Paragraphs



            items={branch.costsNote}



            className="mt-8 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-4"



          />



        </div>



      </section>







      {/* SCHOLARSHIPS */}



      <section className="py-16 sm:py-20 bg-slate-50">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow="Funding"



            title="Scholarship Opportunities and Financial Aid"



          />



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">



            <Panel>



              <Paragraphs



                items={branch.scholarshipsLead}



                className="text-slate-500 text-[15px] leading-relaxed space-y-4 mb-5"



              />



              <CheckList items={branch.scholarships} />



            </Panel>



            <Paragraphs



              items={branch.scholarshipsNote}



              className="text-slate-500 text-[15px] leading-relaxed space-y-4"



            />



          </div>



        </div>



      </section>







      {/* CAREERS */}



      <section className="py-16 sm:py-20">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow="After graduation"



            title={effectiveCareersTitle}



            desc={branch.careerIntro ? [branch.careerIntro] : []}



          />



          <Paragraphs



            items={branch.careerLead}



            className="text-slate-500 text-[15px] leading-relaxed max-w-3xl mb-5"



          />



          <TileGrid items={branch.careers} />



          <Paragraphs



            items={branch.careerNote}



            className="mt-8 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-4"



          />



        </div>



      </section>







      {/* VISA PROCESS */}



      <section className="py-16 sm:py-20 bg-slate-50 overflow-hidden">



        <div className="max-w-6xl mx-auto px-6">



          <EhpHead



            eyebrow="Step by step"



            title="Visa & Application Process for Indian Students"



            desc={branch.visaLead}



          />



          <StepTimeline steps={branch.visaSteps} />



          <Paragraphs



            items={branch.visaNote}



            className="mt-4 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-4"



          />



        </div>



      </section>







      {/* FAQ */}



      <section className="py-16 sm:py-20" id="faq">



        <div className="max-w-6xl mx-auto px-6">



          <div className="text-center mb-10">



            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">



              FAQs



            </div>



            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">



              {effectiveFaqTitle}



            </h2>



          </div>



          <div className="max-w-3xl mx-auto">



            <FaqList faqs={branch.faqs} />



          </div>



        </div>



      </section>







      {/* INTERNAL LINKING — related branches */}



      <RelatedBranches level={level} currentSlug={branch.slug} country={country} />







      {/* CTA */}



      <CtaBand



        title={`Plan your ${branch.name} journey to ${inCountry} with Edu Hawk Worldwide`}



        desc={page.ctaDesc || "Get expert guidance on university shortlisting, applications, scholarships, visas and pre-departure preparation — all in one place."}



        bgImg={ctaBgImg ?? branch?.ctaBgImg}



      />



    </EhpShell>



  );



};







/* ================================================================== */



/*  GENERIC ABROAD PAGE (sections-based: business, hospitality, law…)  */



/* ================================================================== */



const AbroadGroups = ({ groups, tone = "light" }) => {



  if (!groups || !Array.isArray(groups)) return null;



  return (



    <div className="space-y-6">



      {groups.map((g, i) => {



        if (!g) return null;



        if (g.t === "table")



          return (



            <div key={i} className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-sm">



              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">



                {Array.isArray(g.headers) && g.headers.length > 0 && (



                  <thead className="bg-slate-100 font-semibold text-slate-800">



                    <tr>



                      {g.headers.map((h, k) => (



                        <th key={k} className="px-4 py-3 border-b border-slate-200">



                          {formatRichText(h)}



                        </th>



                      ))}



                    </tr>



                  </thead>



                )}



                <tbody className="divide-y divide-slate-200 bg-white">



                  {Array.isArray(g.rows) && g.rows.map((row, rIdx) => (



                    <tr key={rIdx} className={rIdx % 2 === 1 ? "bg-slate-50/60" : ""}>



                      {Array.isArray(row) && row.map((cell, cIdx) => (



                        <td key={cIdx} className="px-4 py-3 text-slate-600">



                          {formatRichText(cell)}



                        </td>



                      ))}



                    </tr>



                  ))}



                </tbody>



              </table>



            </div>



          );



                if (g.t === "pills")

          return (

            <div key={i} className="flex flex-wrap gap-2.5 my-4">

              {Array.isArray(g.items) && g.items.map((it, idx) => (

                <span

                  key={idx}

                  className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200/70 shadow-xs hover:bg-blue-100/80 transition-colors"

                >

                  {it}

                </span>

              ))}

            </div>

          );



if (g.t === "ul")



          return (



            <div key={i}>



              <CheckList items={g.items || []} cols={2} tone={tone} />



            </div>



          );



        if (g.t === "dl")



          return (



            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">



              {Array.isArray(g.pairs) && g.pairs.map((p, j) =>



                p && p.t ? (



                  <div



                    key={j}



                    className={



                      tone === "dark"



                        ? "bg-white/[.06] border border-white/10 rounded-xl p-5"



                        : "bg-slate-50 border border-slate-200 rounded-xl p-5"



                    }



                  >



                    <h4



                      className={



                        "font-semibold leading-snug mb-1.5 " +



                        (tone === "dark" ? "text-white" : "text-slate-900")



                      }



                    >



                      {formatRichText(p.t)}



                    </h4>



                    <p



                      className={



                        "text-sm leading-relaxed " +



                        (tone === "dark" ? "text-white/75" : "text-slate-500")



                      }



                    >



                      {formatRichText(p.d)}



                    </p>



                  </div>



                ) : (



                  <p



                    key={j}



                    className={



                      "sm:col-span-2 text-[15px] leading-relaxed " +



                      (tone === "dark" ? "text-white/80" : "text-slate-500")



                    }



                  >



                    {p ? formatRichText(p.d) : null}



                  </p>



                ),



              )}



            </div>



          );



        if (g.t === "step" || g.t === "steps") {
          if (Array.isArray(g.items)) {
            return (
              <div key={i} className="my-6">
                <StepTimeline steps={g.items} />
              </div>
            );
          }
          return (
            <div key={i} className="flex gap-4 pb-6 relative">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-sm grid place-items-center shadow-sm">
                {g.step || i + 1}
              </div>
              <div className="pt-0.5">
                {g.title && (
                  <h4 className="text-[16px] font-semibold text-slate-900 mb-1">
                    {formatRichText(g.title)}
                  </h4>
                )}
                {(g.desc || g.text) && (
                  <p className="text-[15px] text-slate-600 leading-relaxed">
                    {formatRichText(g.desc || g.text)}
                  </p>
                )}
              </div>
            </div>
          );
        }

        if (g.t === "h3" || g.t === "heading") {
          return (
            <h3
              key={i}
              className={
                "text-2xl sm:text-3xl font-bold tracking-tight mt-10 mb-4 " +
                (tone === "dark" ? "text-white" : "text-slate-900")
              }
            >
              {formatRichText(g.text || g.title || (Array.isArray(g.items) ? g.items[0] : ""))}
            </h3>
          );
        }

        if (g.t === "h4") {
          return (
            <h4
              key={i}
              className={
                "text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-3 " +
                (tone === "dark" ? "text-white" : "text-slate-900")
              }
            >
              {formatRichText(g.text || g.title || (Array.isArray(g.items) ? g.items[0] : ""))}
            </h4>
          );
        }

        if (g.t === "img" || g.t === "image") {
          return (
            <div key={i} className="my-6 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md relative group bg-slate-50">
              <img
                src={g.src}
                alt={g.alt || ""}
                loading="lazy"
                className="w-full h-auto max-h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {(g.link || g.url) && (
                <a
                  href={g.link || g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all shadow-md"
                  title="Visit official website"
                  aria-label="Visit official website"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
              {g.caption && (
                <p className="p-3 text-xs text-slate-500 bg-slate-50 border-t border-slate-100 text-center">
                  {formatRichText(g.caption)}
                </p>
              )}
            </div>
          );
        }

        if (g.t === "split" || g.t === "zigzag" || g.t === "feature" || g.t === "uni_card") {
          const hasImg = Boolean(g.img || g.src);
          const isRight = g.imgPos === "right" || g.imagePosition === "right" || g.reverse;
          return (
            <div
              key={i}
              className="my-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {g.pattern && (
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden opacity-90">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500/15 fill-current">
                    <path d="M20,0 Q60,10 100,70 L100,0 Z" />
                    <circle cx="80" cy="20" r="14" className="text-orange-400/25 fill-current" />
                    <path d="M50,0 Q75,25 100,95 L100,0 Z" className="text-blue-600/15 fill-current" />
                  </svg>
                </div>
              )}
              {hasImg ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className={`lg:col-span-5 ${isRight ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md group aspect-[4/3] bg-slate-50">
                      <img
                        src={g.img || g.src}
                        alt={g.alt || g.title || ""}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {(g.link || g.url) && (
                        <a
                          href={g.link || g.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all shadow-md"
                          title="Visit official website"
                          aria-label="Visit official website"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${isRight ? "lg:order-1" : "lg:order-2"}`}>
                    {g.title && (
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        {formatRichText(g.title)}
                      </h3>
                    )}
                    {Array.isArray(g.items) && g.items.length > 0 && (
                      <div className="space-y-3">
                        {g.items.map((it, itIdx) => (
                          <p key={itIdx} className="text-[15px] text-slate-600 leading-relaxed">
                            {formatRichText(it)}
                          </p>
                        ))}
                      </div>
                    )}
                    {Array.isArray(g.bullets) && g.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {g.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#F48C06] font-bold mt-0.5">•</span>
                            <span>{formatRichText(b)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {g.note && (
                      <div className="mt-4 text-xs sm:text-sm text-slate-600 italic bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                        {Array.isArray(g.note) ? (
                          g.note.map((n, nIdx) => (
                            <p key={nIdx} className={nIdx > 0 ? "mt-1.5" : ""}>
                              {formatRichText(n)}
                            </p>
                          ))
                        ) : (
                          <p>{formatRichText(g.note)}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    {g.title && (
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {formatRichText(g.title)}
                      </h3>
                    )}
                    {(g.link || g.url) && (
                      <a
                        href={g.link || g.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-[#F48C06] text-slate-700 hover:text-white border border-slate-200 transition-colors shadow-sm"
                        title="Visit official website"
                      >
                        <span>Official Website</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                  {Array.isArray(g.items) && g.items.length > 0 && (
                    <div className="space-y-3">
                      {g.items.map((it, itIdx) => (
                        <p key={itIdx} className="text-[15px] text-slate-600 leading-relaxed">
                          {formatRichText(it)}
                        </p>
                      ))}
                    </div>
                  )}
                  {Array.isArray(g.bullets) && g.bullets.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-600">
                      {g.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                          <span className="text-[#F48C06] font-bold mt-0.5">•</span>
                          <span>{formatRichText(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {g.note && (
                    <div className="mt-4 text-xs sm:text-sm text-slate-600 italic bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                      {Array.isArray(g.note) ? (
                        g.note.map((n, nIdx) => (
                          <p key={nIdx} className={nIdx > 0 ? "mt-1.5" : ""}>
                            {formatRichText(n)}
                          </p>
                        ))
                      ) : (
                        <p>{formatRichText(g.note)}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }


        if (g.t === "cta" || g.t === "card") {
          return (
            <div key={i} className="my-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white shadow-xl border border-slate-700/60">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              {g.badge && (
                <span className="inline-block px-3 py-1 bg-[#F48C06] text-white text-[11px] font-bold rounded-full uppercase tracking-wider mb-3">
                  {g.badge}
                </span>
              )}
              {g.title && (
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  {formatRichText(g.title)}
                </h3>
              )}
              {g.desc && (
                <p className="text-slate-300 text-[15px] leading-relaxed mb-6 max-w-xl">
                  {formatRichText(g.desc)}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-700/60 text-sm">
                {g.website && (
                  <a
                    href={`https://${g.website.replace(/^https?:\/\//, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    <span>{g.website}</span>
                  </a>
                )}
                {g.email && (
                  <a
                    href={`mailto:${g.email}`}
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>{g.email}</span>
                  </a>
                )}
                <a
                  href="/contact"
                  className="sm:ml-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#F48C06] text-white hover:bg-[#e07b00] transition-colors shadow-md"
                >
                  Connect With Us →
                </a>
              </div>
            </div>
          );
        }

        return <Paragraphs key={i} items={g.items || []} />;



      })}



    </div>



  );



};







export const AbroadCoursePage = ({



  page,



  heroImg,



  sideImg,



  heroBgImg,



  ctaBgImg,



  seoPath,



  imgDims,



}) => {



  const country = page.country || "USA";



  const inCountry = country === "USA" ? "the USA" : country;



  const courseBase = (page.name || "").replace(new RegExp(`\\s+(in|for)\\s+${country}$`, 'i'), '').trim();



  const primary = {



    href: "https://api.whatsapp.com/send?phone=919630736070",



    external: true,



    label: "Book free counselling",



  };



  const secondary = { href: "#faq", label: "Read FAQs" };







  return (



    <EhpShell>



      <SeoHead title={page.title} description={page.description} path={seoPath}>



        {page.faqs?.length > 0 && (



          <script type="application/ld+json">



            {JSON.stringify({



              "@context": "https://schema.org",



              "@type": "FAQPage",



              mainEntity: page.faqs.map((f) => ({



                "@type": "Question",



                name: f.q,



                acceptedAnswer: { "@type": "Answer", text: f.a },



              })),



            })}



          </script>



        )}



      </SeoHead>







      {/* HERO */}



      <EhpHero



        crumb={



          <>



            {page.crumb} <span className="mx-1.5">›</span> {courseBase}



          </>



        }



        eyebrow={`Study ${courseBase} · ${country} · ${page.level}`}



        lead={`${courseBase} in`}



        accent={inCountry}



        tail="for Indian Students"



        paras={page.heroParas}



        primary={primary}



        secondary={secondary}



        img={heroImg}



        imgAlt={`${page.name} in ${inCountry}`}



        imgDims={imgDims ?? heroImgDims}



        bgImg={heroBgImg ?? page?.heroBgImg}



      />







            {/* STATS / AT A GLANCE */}

      {page.stats?.length > 0 && (

        <section className="py-12 bg-white border-b border-slate-100">

          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-8">

              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">

                At a glance

              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">

                {courseBase} at a glance

              </h2>

            </div>

            <StatGrid items={page.stats} />

          </div>

        </section>

      )}



{/* OVERVIEW */}



      {page.overview?.length > 0 && (



        <section className="py-16 sm:py-20">



          <div className="max-w-6xl mx-auto px-6">



            <EhpHead eyebrow="Overview" title={page.introTitle} />



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">



              <Paragraphs



                items={page.overview}



                className="text-slate-500 text-[15px] leading-relaxed space-y-4"



              />



              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/2]">



                <img



                  src={sideImg}



                  width={1200}



                  height={800}



                  alt={`${page.name} at a university in ${inCountry}`}



                  className="w-full h-full object-cover"



                  loading="lazy"



                  srcSet={`${sideImg} 1x, ${sideImg} 2x`}



                  sizes="(max-width: 1024px) 100vw, 50vw"



                />



                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />



                <div className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium text-white">



                  Edu Hawk Worldwide · {inCountry} admissions desk



                </div>



              </div>



            </div>



          </div>



        </section>



      )}







      {/* CONTENT SECTIONS */}



      {page.sections?.map((s, idx) => {



        const shade = idx % 2 === 1 ? "bg-slate-50" : "";







        if (s.unis)



          return (



            <section key={idx} className="py-16 sm:py-20 bg-slate-50">



              <div className="max-w-6xl mx-auto px-6">



                <EhpHead



                  eyebrow={s.eyebrow}



                  title={s.title}



                  desc={s.lead}



                  descClass="text-slate-500 text-[15px] leading-relaxed max-w-2xl space-y-3"



                />



                <UniversityGrid unis={s.unis} alt={(u) => u.name + " campus"} />



                <Paragraphs



                  items={s.note}



                  className="mt-8 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-3"



                />



              </div>



            </section>



          );







        if (s.steps)



          return (



            <section



              key={idx}



              className={"py-16 sm:py-20 " + (shade || "bg-slate-50") + " overflow-hidden"}



            >



              <div className="max-w-6xl mx-auto px-6">



                <EhpHead eyebrow={s.eyebrow} title={s.title} />



                <Paragraphs



                  items={s.lead}



                  className="text-slate-500 text-[15px] leading-relaxed max-w-3xl mb-8"



                />



                <StepTimeline steps={s.steps} />



              </div>



            </section>



          );







        const boxed = s.slot === "duration" || s.slot === "tuition";



        if (s.slot === "eligibility") {



          return (



            <section key={idx} className={"py-16 sm:py-20 " + shade} id="eligibility">



              <div className="max-w-6xl mx-auto px-6">



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">



                  <div>



                    <EhpHead eyebrow={s.eyebrow} title={s.title} />



                    <AbroadGroups groups={s.groups} />



                  </div>



                  <div className="lg:pt-6">



                    <EligibilityCtaCard level={page.level} />



                  </div>



                </div>



              </div>



            </section>



          );



        }



        if (s.img) {



          const isLeft = s.imgPosition !== "right";



          return (



            <section key={idx} className={"py-16 sm:py-20 " + shade} id={s.id || s.slot}>



              <div className="max-w-6xl mx-auto px-6">



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">



                  <div className={isLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}>



                    <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-slate-100">



                      <img



                        src={s.img}



                        alt={s.imgAlt || s.title}



                        className="w-full h-full object-cover"



                        loading="lazy"



                        srcSet={`${s.img} 1x, ${s.img} 2x`}



                        sizes="(max-width: 1024px) 100vw, 50vw"



                      />



                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />



                    </div>



                  </div>



                  <div className={isLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}>



                    <EhpHead eyebrow={s.eyebrow} title={s.title} />



                    <AbroadGroups groups={s.groups} />



                  </div>



                </div>



              </div>



            </section>



          );



        }







        return (



          <section key={idx} className={"py-16 sm:py-20 " + shade}>



            <div className="max-w-6xl mx-auto px-6">



              <EhpHead eyebrow={s.eyebrow} title={s.title} />



              {boxed ? (



                <Panel className="max-w-4xl">



                  <AbroadGroups groups={s.groups} />



                </Panel>



              ) : (



                <AbroadGroups groups={s.groups} />



              )}



            </div>



          </section>



        );



      })}







      {/* FAQ */}



      {page.faqs?.length > 0 && (



        <section id="faq" className="py-16 sm:py-20">



          <div className="max-w-6xl mx-auto px-6">



            <div className="text-center mb-10">



              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">



                FAQs



              </div>



              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">



                {page.faqTitle}



              </h2>



            </div>



            <div className="max-w-3xl mx-auto">



              <FaqList faqs={page.faqs} />



            </div>



          </div>



        </section>



      )}







      {/* CTA */}



      <CtaBand



        title={page.ctaTitle || (page.name.toLowerCase().includes(inCountry.toLowerCase()) ? `Plan your ${page.name} journey with Edu Hawk Worldwide` : `Plan your ${page.name} journey to ${inCountry} with Edu Hawk Worldwide`)}



        desc="Get expert guidance on university shortlisting, applications, scholarships, visas and pre-departure preparation — all in one place."



        bgImg={ctaBgImg ?? page?.ctaBgImg}



      />



    </EhpShell>



  );



};







/* Hero image intrinsic sizes are page-agnostic here; pages render the



   image with fixed aspect classes so the hint is optional. */



const heroImgDims = { w: 1600, h: 1065 };



