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
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll("section");
    if (!sections) return;
    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    sections.forEach((s) => {
      s.classList.add("ehp-reveal");
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
}) => (
  <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
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
              className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed"
            >
              {p}
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
      {title}
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
      {items.map((p, i) => (
        <p
          key={i}
          className={tone === "dark" ? "text-white/80 text-[15px] leading-relaxed" : undefined}
        >
          {p}
        </p>
      ))}
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
    {items.map((it, i) => (
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
          {it}
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
        <span className="leading-relaxed">{it}</span>
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
          {it}
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
export const StatGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((item, i) => (
      <div
        key={i}
        className="ehp-card bg-white border border-slate-200 rounded-2xl p-5"
      >
        <span className="block text-[13px] text-slate-500 font-medium mb-1.5">
          {item.label}
        </span>
        <strong className="text-[15px] text-slate-900 font-semibold leading-snug">
          {item.value}
        </strong>
      </div>
    ))}
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
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
            <span className="text-5xl font-bold text-white/20">
              {u.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
          <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-white font-semibold text-lg leading-snug">
              {u.name}
            </h3>
            {(u.desc || u.location) && (
              <p className="text-white/80 text-sm line-clamp-3">
                {u.desc || u.location}
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
              {s}
            </p>
          ) : (
            <>
              {s.title && (
                <h3 className="text-[17px] font-semibold text-slate-900 mb-1">
                  {s.title}
                </h3>
              )}
              {s.text && (
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  {s.text}
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
        ? "bg-slate-900 text-white rounded-2xl p-6 sm:p-8 ehp-shadow-none"
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
            <span>{f.q}</span>
            <span className="text-xl text-slate-400 font-normal flex-shrink-0 w-6 text-center">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              {f.a}
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
export const CtaBand = ({ title, desc }) => (
  <section className="py-16 sm:py-20" id="consult">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-8 py-14 sm:px-12 text-center text-white relative overflow-hidden">
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

/* ================================================================== */
/*  ENGINEERING BRANCH PAGE (UG / PG)                                  */
/* ================================================================== */
export const EngineeringBranchPage = ({
  branch,
  level,
  heroImg,
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
  const effectiveCoursesTitle =
    coursesTitle ??
    (isPG
      ? `Postgraduate ${branch.name} Courses in the USA`
      : `${branch.name} Courses in the USA`);
  const effectiveUnisTitle =
    unisTitle ??
    `Top Universities for${isPG ? " Postgraduate" : ""} ${branch.name} in the USA`;
  const effectiveCareersTitle =
    careersTitle ??
    `Career Opportunities After${isPG ? " Postgraduate" : ""} ${branch.name}`;
  const effectiveFaqTitle =
    faqTitle ??
    `Frequently Asked Questions —${isPG ? " Postgraduate" : ""} ${branch.name} in the USA`;
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
        eyebrow={`Study ${branch.name} · USA · ${levelText}`}
        lead={`${branch.name} in the`}
        accent="USA"
        tail="for Indian Students"
        paras={[branch.heroIntro, branch.heroSub]}
        primary={primary}
        secondary={secondary}
        img={heroImg}
        imgAlt={heroAltText}
        imgDims={heroImgDims}
      />

      {/* WHY STUDY */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <EhpHead
            eyebrow="Why the USA"
            title={`Why Study ${branch.name} in the USA?`}
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
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <EhpHead
            eyebrow="Who can apply"
            title="Eligibility Requirements for Indian Students"
          />
          <Panel className="max-w-4xl">
            <Paragraphs
              items={branch.eligibilityLead}
              className="text-slate-500 text-[15px] leading-relaxed space-y-4 mb-5"
            />
            <CheckList items={branch.eligibility} />
          </Panel>
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

      {/* CTA */}
      <CtaBand
        title={`Plan your ${branch.name} journey to the USA with Edu Hawk Worldwide`}
        desc="Get expert guidance on university shortlisting, applications, scholarships, visas and pre-departure preparation — all in one place."
      />
    </EhpShell>
  );
};

/* ================================================================== */
/*  GENERIC ABROAD PAGE (sections-based: business, hospitality, law…)  */
/* ================================================================== */
const AbroadGroups = ({ groups, tone = "light" }) => (
  <div className="space-y-6">
    {groups.map((g, i) => {
      if (g.t === "ul")
        return (
          <div key={i}>
            <CheckList items={g.items} cols={2} tone={tone} />
          </div>
        );
      if (g.t === "dl")
        return (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {g.pairs.map((p, j) =>
              p.t ? (
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
                    {p.t}
                  </h4>
                  <p
                    className={
                      "text-sm leading-relaxed " +
                      (tone === "dark" ? "text-white/75" : "text-slate-500")
                    }
                  >
                    {p.d}
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
                  {p.d}
                </p>
              ),
            )}
          </div>
        );
      return <Paragraphs key={i} items={g.items} />;
    })}
  </div>
);

export const AbroadCoursePage = ({ page, heroImg, sideImg, seoPath, imgDims }) => {
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
            {page.crumb} <span className="mx-1.5">›</span> {page.name}
          </>
        }
        eyebrow={`Study ${page.name} · USA · ${page.level}`}
        lead={`${page.name} in the`}
        accent="USA"
        tail="for Indian Students"
        paras={page.heroParas}
        primary={primary}
        secondary={secondary}
        img={heroImg}
        imgAlt={`${page.name} in the USA`}
        imgDims={imgDims ?? heroImgDims}
      />

      {/* OVERVIEW */}
      {page.overview?.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <EhpHead eyebrow="Overview" title={page.introTitle} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Paragraphs
                items={page.overview}
                className="text-slate-500 text-[15px] leading-relaxed space-y-4"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/2]">
                <img
                  src={sideImg}
                  width={1200}
                  height={800}
                  alt={`${page.name} at a university in the USA`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium text-white">
                  Edu Hawk Worldwide · USA admissions desk
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
        title={`Plan your ${page.name} journey to the USA with Edu Hawk Worldwide`}
        desc="Get expert guidance on university shortlisting, applications, scholarships, visas and pre-departure preparation — all in one place."
      />
    </EhpShell>
  );
};

/* Hero image intrinsic sizes are page-agnostic here; pages render the
   image with fixed aspect classes so the hint is optional. */
const heroImgDims = { w: 1600, h: 1065 };
