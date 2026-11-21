import React, { useState, useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";
import { TESTS_DATA } from "../../data/testsData.js";

// Decap CMS JSON data — 2-way binding for all 17 tests
import cmsIelts       from "../../data/tests/ielts.json";
import cmsToefl       from "../../data/tests/toefl.json";
import cmsDuolingo    from "../../data/tests/duolingo.json";
import cmsPte         from "../../data/tests/pte.json";
import cmsOet         from "../../data/tests/oet.json";
import cmsFrance      from "../../data/tests/france.json";
import cmsSpanish     from "../../data/tests/spanish.json";
import cmsGermany     from "../../data/tests/germany.json";
import cmsGre         from "../../data/tests/gre.json";
import cmsGmat        from "../../data/tests/gmat.json";
import cmsSat         from "../../data/tests/sat.json";
import cmsAct         from "../../data/tests/act.json";
import cmsCmat        from "../../data/tests/cmat.json";
import cmsImat        from "../../data/tests/imat.json";
import cmsUcat        from "../../data/tests/ucat.json";
import cmsMcat        from "../../data/tests/mcat.json";
import cmsWhichTest   from "../../data/tests/which-test.json";

// CMS data map — keyed by test id
const CMS_TESTS_DATA = {
  "ielts":      cmsIelts,
  "toefl":      cmsToefl,
  "duolingo":   cmsDuolingo,
  "pte":        cmsPte,
  "oet":        cmsOet,
  "france":     cmsFrance,
  "spanish":    cmsSpanish,
  "germany":    cmsGermany,
  "gre":        cmsGre,
  "gmat":       cmsGmat,
  "sat":        cmsSat,
  "act":        cmsAct,
  "cmat":       cmsCmat,
  "imat":       cmsImat,
  "ucat":       cmsUcat,
  "mcat":       cmsMcat,
  "which-test": cmsWhichTest,
};

// Merge CMS overrides onto base TESTS_DATA (CMS wins for editable fields)
function mergeCmsTest(base, cms) {
  if (!cms) return base;
  return {
    ...base,
    // SEO fields
    title:          cms.seo?.title          || base.title,
    description:    cms.seo?.description    || base.description,
    keywords:       cms.seo?.keywords       || base.keywords,
    // Hero
    badge:          cms.hero?.badge         || base.badge,
    heroPara:       cms.hero?.heroPara      || base.heroPara,
    // Stats
    stats:          (cms.stats && cms.stats.length > 0) ? cms.stats : base.stats,
    // Overview � CMS stores as [{para:"text"}], base uses ["text"]
    overview:       (cms.overview && cms.overview.length > 0)
                      ? cms.overview.map(item => typeof item === 'object' && item.para ? item.para : item)
                      : base.overview,
    // FAQs (key: faqs in CMS, faqs in base)
    faqs:           (cms.faqs && cms.faqs.length > 0) ? cms.faqs : base.faqs,
  };
}

// Layout & Hero assets
import ExpertGuidance from "../../Images/Service Image/Expert Guidance.webp";
import Globalmap from "../../Images/Service Image/global-map.webp";
import FixedBanner from "../../Images/fixed.webp";

// Test Hero Background Images (Unsplash WebP)
import heroWhichTest from "../../Images/Tests/hero_which_test.webp";
import heroIelts from "../../Images/Tests/hero_ielts.webp";
import heroToefl from "../../Images/Tests/hero_toefl.webp";
import heroDuolingo from "../../Images/Tests/hero_duolingo.webp";
import heroPte from "../../Images/Tests/hero_pte.webp";
import heroOet from "../../Images/Tests/hero_oet.webp";
import heroFrance from "../../Images/Tests/hero_france.webp";
import heroGermany from "../../Images/Tests/hero_germany.webp";
import heroSpanish from "../../Images/Tests/hero_spanish.webp";
import heroGre from "../../Images/Tests/hero_gre.webp";
import heroGmat from "../../Images/Tests/hero_gmat.webp";
import heroSat from "../../Images/Tests/hero_sat.webp";
import heroAct from "../../Images/Tests/hero_act.webp";
import heroCmat from "../../Images/Tests/hero_cmat.webp";
import heroImat from "../../Images/Tests/hero_imat.webp";
import heroUcat from "../../Images/Tests/hero_ucat.webp";
import heroMcat from "../../Images/Tests/hero_mcat.webp";

const TEST_HERO_BG = {
  "which-test": heroWhichTest,
  "ielts": heroIelts,
  "toefl": heroToefl,
  "duolingo": heroDuolingo,
  "pte": heroPte,
  "oet": heroOet,
  "france": heroFrance,
  "germany": heroGermany,
  "spanish": heroSpanish,
  "gre": heroGre,
  "gmat": heroGmat,
  "sat": heroSat,
  "act": heroAct,
  "cmat": heroCmat,
  "imat": heroImat,
  "ucat": heroUcat,
  "mcat": heroMcat,
};

// Lucide Icons
import {
  GraduationCap,
  Clock,
  Award,
  Calendar,
  DollarSign,
  FileText,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Compass,
  ArrowRight,
  Globe2,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Phone,
  MessageCircle,
  Lightbulb,
  Layers,
  BarChart3,
  ListOrdered,
  Search
} from "lucide-react";

const ALL_COUNTRIES = [
  { id: "all", name: "All Countries", flag: "🌐" },
  { id: "usa", name: "USA", flag: "🇺🇸" },
  { id: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { id: "germany", name: "Germany", flag: "🇩🇪" },
  { id: "canada", name: "Canada", flag: "🇨🇦" },
  { id: "australia", name: "Australia", flag: "🇦🇺" },
  { id: "ireland", name: "Ireland", flag: "🇮🇪" },
  { id: "france", name: "France", flag: "🇫🇷" },
  { id: "spain", name: "Spain", flag: "🇪🇸" },
  { id: "italy", name: "Italy", flag: "🇮🇹" },
  { id: "finland", name: "Finland", flag: "🇫🇮" }
];

export default function TestDetailPage() {
  const { testId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCountryParam = (searchParams.get("country") || "all").toLowerCase();

  // Active FAQ state for accordion
  const [openFaq, setOpenFaq] = useState(null);

  // For Which-Test Decision Tool
  const [calcDest, setCalcDest] = useState("usa");
  const [calcLevel, setCalcLevel] = useState("masters");
  const [calcLang, setCalcLang] = useState("english");

  // Determine active test or fallback to which-test
  const currentKey = testId ? testId.toLowerCase() : "which-test";
  const baseTest = TESTS_DATA[currentKey] || TESTS_DATA["which-test"];
  const cmsTest  = CMS_TESTS_DATA[currentKey] || CMS_TESTS_DATA["which-test"];
  // Merge: CMS overrides editable fields (hero, seo, stats, overview, faqs)
  const test = mergeCmsTest(baseTest, cmsTest);
  const currentHeroBg = TEST_HERO_BG[currentKey] || TEST_HERO_BG["which-test"];

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleCountryChange = (countryId) => {
    if (countryId === "all") {
      searchParams.delete("country");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ country: countryId });
    }
  };

  // Dynamic Country Insight if available
  const activeCountryInsight = useMemo(() => {
    if (!test.countryContexts || activeCountryParam === "all") return null;
    return test.countryContexts[activeCountryParam] || null;
  }, [test, activeCountryParam]);

  // Which-Test Recommendation Engine
  const recommendedExams = useMemo(() => {
    if (currentKey !== "which-test") return [];
    const recs = [];
    if (calcLang === "native") {
      if (calcDest === "germany") recs.push({ name: "Goethe-Zertifikat / TestDaF", reason: "Mandatory for German-taught degrees (Level B2/C1)" });
      if (calcDest === "france") recs.push({ name: "DELF B2 / DALF C1", reason: "Mandatory for French-taught university courses" });
      if (calcDest === "spain") recs.push({ name: "DELE B2 / SIELE", reason: "Required for Spanish-taught Grado and Master's" });
    } else {
      // English taught
      if (calcLevel === "ug") {
        recs.push({ name: "IELTS Academic (6.0+) or TOEFL iBT (80+)", reason: "English proficiency benchmark for undergraduate admissions" });
        if (calcDest === "usa") recs.push({ name: "Digital SAT (or ACT)", reason: "Required or strongly recommended for top US college admissions & merit scholarships" });
        if (calcDest === "spain") recs.push({ name: "PCE Subject Tests (UNEDasiss)", reason: "Needed for public university admission score (nota de corte)" });
      } else if (calcLevel === "masters") {
        recs.push({ name: "IELTS Academic (6.5+) or TOEFL iBT (90+)", reason: "Standard language requirement for postgraduate courses" });
        if (calcDest === "usa" || calcDest === "germany") recs.push({ name: "GRE General Test", reason: "Required or advantageous for STEM and research Master's programs" });
      } else if (calcLevel === "mba") {
        recs.push({ name: "GMAT Focus Edition (or GRE)", reason: "Premier admissions credential for elite business schools" });
        recs.push({ name: "IELTS Academic (6.5–7.0) or TOEFL (95+)", reason: "Management communication benchmark" });
      } else if (calcLevel === "medicine") {
        if (calcDest === "italy") recs.push({ name: "IMAT Exam", reason: "Single mandatory entrance test for English MBBS at Italian public universities" });
        if (calcDest === "uk" || calcDest === "australia") recs.push({ name: "UCAT Exam", reason: "Clinical aptitude test required for medical & dental entry" });
        if (calcDest === "usa" || calcDest === "canada") recs.push({ name: "MCAT Exam", reason: "Mandatory for graduate-entry Doctor of Medicine (MD) programs" });
        recs.push({ name: "NEET-UG (for Indian Students)", reason: "NMC mandatory eligibility requirement for overseas medical studies" });
      }
    }
    return recs;
  }, [currentKey, calcDest, calcLevel, calcLang]);

  return (
    <div className="w-full bg-[#f8fafc] text-gray-800">
      <SeoHead
        title={test.title}
        description={test.description}
        path={`/tests/${test.id}`}
        keywords={test.keywords}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": test.name,
            "description": test.description,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "EduHawk Worldwide",
              "url": "https://www.eduhawk.in"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (test.faqs || []).map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </SeoHead>

      {/* =========================================================================
          HERO SECTION (Strict Rule: Single Paragraph in Hero)
          ========================================================================= */}
      <section className="relative w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Relevant Hero Background Image with Contrast Overlays */}
        {currentHeroBg && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={currentHeroBg}
              alt=""
              className="w-full h-full object-cover opacity-60 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
              loading="eager"
            />
            {/* Balanced overlay gradients to ensure 100% text readability while keeping the image clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-950/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </div>
        )}

        {/* Subtle decorative glowing background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/tests/which-test" className="hover:text-orange-400 transition-colors">Tests & Online Exams</Link>
            <span>/</span>
            <span className="text-orange-400 font-medium">{test.shortName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-8">
              {/* Category Pill & Badge */}
              <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full">
                  {test.category}
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full backdrop-blur-sm">
                  {test.badge}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {test.name}
              </h1>

              {/* Single Hero Paragraph (STRICT RULE COMPLIANT) */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
                {test.heroPara}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F48C06] hover:bg-[#e07d04] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Book Free Exam Consultation</span>
                </a>
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3.5 rounded-xl backdrop-blur-sm border border-white/10 transition-all"
                >
                  <span>Explore Exam Structure</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Right Quick Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Study Abroad Test Prep</h3>
                    <p className="text-xs text-gray-300">EduHawk Worldwide Guidance</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-300 flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-orange-400" /> Duration</span>
                    <span className="font-semibold text-white">{test.stats?.[0]?.value || "Standard"}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-300 flex items-center gap-2"><Award className="w-3.5 h-3.5 text-orange-400" /> Scoring Scale</span>
                    <span className="font-semibold text-white">{test.stats?.[1]?.value || "Official"}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-300 flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-orange-400" /> Validity</span>
                    <span className="font-semibold text-white">{test.stats?.[3]?.value || "2 Years"}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-gray-300 flex items-center gap-2"><DollarSign className="w-3.5 h-3.5 text-orange-400" /> Approx. Fee</span>
                    <span className="font-semibold text-white">{test.stats?.[5]?.value || "Standard Official"}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-green-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Official Verified Guidelines</span>
                  </div>
                  <a
                    href="tel:+919630736070"
                    className="p-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                    title="Call EduHawk Test Advisor"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          {test.stats && test.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 pt-8 border-t border-white/10">
              {test.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 text-center">
                  <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-white line-clamp-2">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE COUNTRY CONTEXT BAR (Switches Country Insights)
          ========================================================================= */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider shrink-0">
              <Globe2 className="w-4 h-4 text-orange-500" />
              <span>Filter by Destination:</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-thin">
              {ALL_COUNTRIES.map((c) => {
                const isActive = activeCountryParam === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleCountryChange(c.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-[#F48C06] text-white shadow-sm"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Country Specific Alert Callout */}
      {activeCountryInsight && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-r-xl shadow-sm flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <span className="font-bold text-orange-950 capitalize">
                {activeCountryParam} University Guidelines:{" "}
              </span>
              <span className="text-orange-900 leading-relaxed">{activeCountryInsight}</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* =========================================================================
                WHICH-TEST INTERACTIVE DECISION CALCULATOR (Only for which-test)
                ========================================================================= */}
            {test.id === "which-test" && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D]">
                      Interactive Study Abroad Exam Selector
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Answer 3 simple questions to find the exact exams required for your university admission
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      1. Target Destination
                    </label>
                    <select
                      value={calcDest}
                      onChange={(e) => setCalcDest(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="usa">United States (USA)</option>
                      <option value="uk">United Kingdom (UK)</option>
                      <option value="germany">Germany</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="ireland">Ireland</option>
                      <option value="france">France</option>
                      <option value="spain">Spain</option>
                      <option value="italy">Italy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      2. Degree Level
                    </label>
                    <select
                      value={calcLevel}
                      onChange={(e) => setCalcLevel(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="ug">Undergraduate (Bachelor's / 12th)</option>
                      <option value="masters">Postgraduate (Master's / MS)</option>
                      <option value="mba">MBA & Management</option>
                      <option value="medicine">Medicine / MBBS / Clinical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      3. Instruction Language
                    </label>
                    <select
                      value={calcLang}
                      onChange={(e) => setCalcLang(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="english">English-Taught Degree</option>
                      <option value="native">Native Language (German/French/Spanish)</option>
                    </select>
                  </div>
                </div>

                {/* Recommendation Output */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-[#2F327D] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                    Recommended Examinations for Your Goal:
                  </h3>
                  <div className="space-y-2">
                    {recommendedExams.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-lg shadow-2xs border border-orange-100">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-gray-900">{r.name}</p>
                          <p className="text-xs text-gray-600">{r.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* =========================================================================
                EXAM OVERVIEW SECTION
                ========================================================================= */}
            <section id="overview" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-4 flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-[#F48C06]" />
                <span>Overview & Purpose</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                {(test.overview || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Exam Types (if applicable e.g. IELTS / TOEFL / Germany) */}
              {test.examTypes && test.examTypes.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#2F327D] mb-4">Official Test Variants & Formats</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {test.examTypes.map((type, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                          {type.title || type.name}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* =========================================================================
                SECTIONS & SYLLABUS BREAKDOWN
                ========================================================================= */}
            {test.sections && test.sections.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] flex items-center gap-2.5">
                    <Layers className="w-6 h-6 text-[#F48C06]" />
                    <span>Exam Pattern & Section Breakdown</span>
                  </h2>
                  <span className="text-xs font-semibold px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
                    {test.sections.length} Core Modules
                  </span>
                </div>

                <div className="space-y-4">
                  {test.sections.map((sec, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors bg-white">
                      <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                        <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-orange-50 text-orange-600 text-xs font-extrabold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          {sec.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs">
                          {sec.duration && (
                            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-md flex items-center gap-1">
                              <Clock className="w-3 h-3 text-orange-500" />
                              {sec.duration}
                            </span>
                          )}
                          {sec.questions && (
                            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-semibold rounded-md">
                              {sec.questions}
                            </span>
                          )}
                          {sec.scoring && (
                            <span className="px-2.5 py-1 bg-green-50 text-green-700 font-semibold rounded-md">
                              {sec.scoring}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">{sec.measures}</p>
                      {sec.timeExtra && (
                        <p className="text-xs text-orange-600 font-medium mt-1">{sec.timeExtra}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Which-Test Comparison Table (Only on which-test) */}
            {test.decisionMatrix && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-4 flex items-center gap-2.5">
                  <BarChart3 className="w-6 h-6 text-[#F48C06]" />
                  <span>Study Abroad Exam Decision Matrix</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-semibold text-[11px]">
                        <th className="py-3 px-4 border-b">Study Abroad Goal</th>
                        <th className="py-3 px-4 border-b">Recommended Examination</th>
                        <th className="py-3 px-4 border-b">Key Admissions Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {test.decisionMatrix.map((row, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/50 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">{row.goal}</td>
                          <td className="py-3.5 px-4 font-semibold text-orange-600">{row.recommended}</td>
                          <td className="py-3.5 px-4 text-gray-600 text-xs">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* France Comparison Table (Only on france) */}
            {test.comparisonTable && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-4 flex items-center gap-2.5">
                  <BarChart3 className="w-6 h-6 text-[#F48C06]" />
                  <span>Popular Examinations for Studying in France</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-semibold text-[11px]">
                        <th className="py-3 px-4 border-b">Exam</th>
                        <th className="py-3 px-4 border-b">Main Purpose</th>
                        <th className="py-3 px-4 border-b">Validity / Score Information</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {test.comparisonTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/50 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">{row.exam}</td>
                          <td className="py-3 px-4 text-gray-700">{row.purpose}</td>
                          <td className="py-3 px-4 text-gray-600 text-xs font-medium">{row.validity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* ACT vs SAT Comparison Table (Only on act) */}
            {test.actVsSatComparison && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-4 flex items-center gap-2.5">
                  <BarChart3 className="w-6 h-6 text-[#F48C06]" />
                  <span>ACT vs SAT Detailed Comparison</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-semibold text-[11px]">
                        <th className="py-3 px-4 border-b">Feature</th>
                        <th className="py-3 px-4 border-b text-orange-600">ACT Exam</th>
                        <th className="py-3 px-4 border-b text-blue-600">SAT Exam</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {test.actVsSatComparison.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">{row.feature}</td>
                          <td className="py-3 px-4 text-gray-700 text-xs">{row.act}</td>
                          <td className="py-3 px-4 text-gray-700 text-xs">{row.sat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* =========================================================================
                ELIGIBILITY & REQUIREMENTS
                ========================================================================= */}
            {(test.eligibilityCriteria || test.eligibilityAndFees || test.eligibilityAndRegistration || test.eligibilityAndRequirements || test.eligibilityAndNMC) && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-4 flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-[#F48C06]" />
                  <span>Eligibility & Registration Criteria</span>
                </h2>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {(
                    test.eligibilityCriteria ||
                    test.eligibilityAndFees ||
                    test.eligibilityAndRegistration ||
                    test.eligibilityAndRequirements ||
                    test.eligibilityAndNMC ||
                    []
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* =========================================================================
                REGISTRATION STEPS (Chronological Roadmap)
                ========================================================================= */}
            {(test.registrationSteps || test.registrationRoadmap) && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-6 flex items-center gap-2.5">
                  <ListOrdered className="w-6 h-6 text-[#F48C06]" />
                  <span>How to Register: Step-by-Step Roadmap</span>
                </h2>
                <div className="space-y-4">
                  {(test.registrationSteps || test.registrationRoadmap || []).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex-1">
                        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* =========================================================================
                PREPARATION TIPS & ADVICE
                ========================================================================= */}
            {test.preparationTips && test.preparationTips.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2F327D] mb-4 flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-[#F48C06]" />
                  <span>Preparation Tips & Strategy</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {test.preparationTips.map((tip, idx) => (
                    <div key={idx} className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-4 flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* =========================================================================
              RIGHT SIDEBAR
              ========================================================================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Consultation Booking Card */}
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-6 rounded-2xl shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ace Your Study Abroad Exam</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Receive certified test prep coaching, diagnostic mock tests, university cutoff benchmarking, and 1-on-1 counseling with EduHawk Worldwide experts.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Free Diagnostic Evaluation Test</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>1-on-1 Certified Tutor Coaching</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Official Mock Tests & Performance Review</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>University Shortlisting & Cutoff Benchmarking</span>
                </div>
              </div>

              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#F48C06] hover:bg-[#e07d04] text-white font-bold py-3.5 px-4 rounded-xl text-center text-sm shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Book Free Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Direct Hotline:</span>
                <a href="tel:+919630736070" className="text-orange-400 font-bold hover:underline">
                  +91 96307 36070
                </a>
              </div>
            </div>

            {/* Other Tests Quick Nav */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                All Common Exams
              </h4>
              <div className="space-y-1">
                {Object.keys(TESTS_DATA).map((key) => {
                  const t = TESTS_DATA[key];
                  const isCurrent = t.id === currentKey;
                  return (
                    <Link
                      key={t.id}
                      to={`/tests/${t.id}${activeCountryParam !== "all" ? `?country=${activeCountryParam}` : ""}`}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        isCurrent
                          ? "bg-orange-50 text-orange-600 font-bold"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span className="truncate">{t.shortName}</span>
                      <span className="text-[10px] text-gray-400 px-1.5 py-0.5 rounded bg-gray-50 border border-gray-200 shrink-0">
                        {t.category.split(" ")[0]}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================================
          FAQS ACCORDION (Centered Layout)
          ========================================================================= */}
      {test.faqs && test.faqs.length > 0 && (
        <section id="faq" className="py-16 sm:py-20 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 border border-orange-500/20 rounded-full mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2F327D]">
                Frequently Asked Questions About {test.shortName}
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                Essential insights into registration, score validity, exam structure, and admissions recognition.
              </p>
            </div>

            <div className="space-y-3">
              {test.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white hover:border-orange-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-sm text-[#2F327D]">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-orange-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white border-t border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
