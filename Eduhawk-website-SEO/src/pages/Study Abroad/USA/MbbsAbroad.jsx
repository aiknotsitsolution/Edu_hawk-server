import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SeoHead from "../../../component/SeoHead.jsx";
import {
  GraduationCap,
  Globe,
  Award,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Building2,
  BookOpen,
  Stethoscope,
  Briefcase,
  FileCheck,
  Plane,
  HelpCircle,
  ChevronDown,
  HeartPulse,
  BadgeCheck,
  Clock,
  Compass,
} from "lucide-react";

import heroTrusted from "../../../Images/hero/hero-trusted.webp";
import heroRussia from "../../../Images/hero/hero-russia.webp";
import heroGeorgia from "../../../Images/hero/hero-georgia.webp";

import russiaFlag from "../../../Images/country flag png/Russia.svg";
import georgiaFlag from "../../../Images/country flag png/Georgia.svg";
import uzbekistanFlag from "../../../Images/country flag png/Uzbekistan-Flag.svg";
import kazakhstanFlag from "../../../Images/country flag png/Kazakhstan.svg";
import nepalFlag from "../../../Images/country flag png/Nepal.svg";
import egyptFlag from "../../../Images/country flag png/Egypt.svg";

const HERO_SLIDES = [
  {
    image: heroTrusted,
    badge: "2026-27 Global Admissions Open",
    title: "Global Study Abroad Hub",
    highlight: "Your Gateway to Premier Overseas Education",
    desc: "Compare accredited medical colleges in Russia, Georgia, Kazakhstan, and premier STEM & Business universities across the USA & Finland. 100% transparent fee structures & NMC compliance.",
    cta: "Book Free 1-on-1 Counselling",
    ctaLink: "/landingpage",
  },
  {
    image: heroRussia,
    badge: "NMC & WHO Recognized Medical Colleges",
    title: "Study MBBS in Premier Universities",
    highlight: "Russia, Georgia, Kazakhstan & Uzbekistan",
    desc: "Top state medical universities with 100% English medium instruction, extensive clinical bed exposure, affordable subsidized fees, and dedicated Indian mess facilities.",
    cta: "Explore Medical Colleges",
    ctaLink: "/allcollege",
  },
  {
    image: heroGeorgia,
    badge: "World-Class STEM & MBA Programs",
    title: "Global Degrees in USA & Europe",
    highlight: "High ROI, Generous Scholarships & Work Rights",
    desc: "Build a high-impact international career with ABET & AACSB accredited degrees in Computer Science, AI, Engineering, and Business with up to 3 years post-study OPT work permits.",
    cta: "Explore Global Programs",
    ctaLink: "#streams",
  },
];

const MbbsAbroad = () => {
  const location = useLocation();
  const canonicalPath = location.pathname.includes("courses/mbbs")
    ? "/study-abroad/usa/mbbs"
    : "/study-abroad";

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(heroInterval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const STATS_DATA = [
    { n: "1000+", l: "Students Placed Globally" },
    { n: "20+", l: "Global Study Destinations" },
    { n: "200+", l: "Accredited Universities" },
    { n: "100%", l: "Visa & Admission Support" },
  ];

  const STUDY_STREAMS = [
    {
      icon: <Stethoscope className="w-7 h-7 text-[#d4a853]" />,
      title: "MBBS & Medical Degrees",
      duration: "5 to 6 Years",
      degree: "MD / MBBS Equivalent",
      desc: "NMC & WHO recognized medical universities with 100% English-medium instruction, high clinical patient exposure, and complete NEXT/FMGE coaching.",
      destinations: "Russia, Georgia, Kazakhstan, Uzbekistan, Nepal, Egypt",
      budget: "₹15 Lakhs – ₹35 Lakhs Total",
      link: "/allcollege",
      badge: "Highest Admissions",
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-[#d4a853]" />,
      title: "Engineering & Technology",
      duration: "3 to 4 Years (UG) • 1.5 to 2 Years (PG)",
      degree: "B.Tech, B.S., M.S., M.Eng",
      desc: "World-class STEM programs in Computer Science, AI, Mechanical, Civil, and Biomedical Engineering with 3-year OPT work permits and research labs.",
      destinations: "USA, Finland, Germany, UK, Australia",
      budget: "₹12 Lakhs – ₹28 Lakhs / Year",
      link: "/study-abroad/usa/computer-science",
      badge: "High ROI & Work Rights",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-[#d4a853]" />,
      title: "Business & Management",
      duration: "3 Years (BBA) • 1 to 2 Years (MBA)",
      degree: "BBA, MBA, Executive MBA, MIM",
      desc: "AACSB & EQUIS accredited global business schools offering hands-on industry consulting, leadership internships, and post-study corporate placement.",
      destinations: "USA, Finland, UK, Canada, Ireland",
      budget: "₹10 Lakhs – ₹25 Lakhs / Year",
      link: "/study-abroad/finland/mba",
      badge: "Global Leadership",
    },
    {
      icon: <HeartPulse className="w-7 h-7 text-[#d4a853]" />,
      title: "Nursing & Allied Healthcare",
      duration: "3 to 4 Years",
      degree: "B.Sc Nursing, Pharmacy, Physiotherapy",
      desc: "Specialized clinical healthcare programs designed for high global demand with hospital apprenticeships and direct registration pathways abroad.",
      destinations: "Finland, UK, Australia, Georgia",
      budget: "₹8 Lakhs – ₹18 Lakhs / Year",
      link: "/study-abroad/finland/nursing",
      badge: "High Job Demand",
    },
  ];

  const TOP_DESTINATIONS = [
    {
      country: "Russia",
      flag: russiaFlag,
      tag: "Top Medical Choice",
      fees: "₹3.5L - ₹5.5L / yr",
      duration: "6 Years (English Medium)",
      recognition: "NMC, WHO, ECFMG, FAIMER",
      desc: "Over 20,000+ Indian medical students enrolled in top century-old Russian state universities with affordable subsidized fees.",
      link: "/mbbs-abroad/russia",
    },
    {
      country: "Georgia",
      flag: georgiaFlag,
      tag: "European Standard",
      fees: "₹4.5L - ₹6.5L / yr",
      duration: "6 Years (English Medium)",
      recognition: "NMC, WHO, WFME, AMEE",
      desc: "European curriculum aligned with USMLE and PLAB standards, ultra-modern campus facilities, and 100% English instruction.",
      link: "/mbbs-abroad/georgia",
    },
    {
      country: "Kazakhstan",
      flag: kazakhstanFlag,
      tag: "Budget Friendly",
      fees: "₹3.2L - ₹4.5L / yr",
      duration: "5 Years (Fast-Track)",
      recognition: "NMC, WHO, WDOMS Recognized",
      desc: "5-year fast-track MBBS, direct 3.5-hour flights from Delhi, low living expenses, and dedicated Indian mess facilities.",
      link: "/mbbs-abroad/kazakhstan",
    },
    {
      country: "Uzbekistan",
      flag: uzbekistanFlag,
      tag: "Fastest Growing",
      fees: "₹2.8L - ₹4.0L / yr",
      duration: "5 to 6 Years",
      recognition: "NMC, WHO, Ministry Approved",
      desc: "Central Asia's most student-friendly nation with state medical institutes, Indian faculty members, and safe hostel environments.",
      link: "/mbbs-abroad/uzbekistan",
    },
    {
      country: "United States (USA)",
      badge: "🇺🇸",
      tag: "Top STEM Hub",
      fees: "$18,000 - $35,000 / yr",
      duration: "4 Years (UG) • 2 Years (PG)",
      recognition: "ABET, AACSB, Top Ranked",
      desc: "World's premier destination for Computer Science, Engineering, MBA and Biotechnology with up to 3 years STEM OPT work permit.",
      link: "/study-abroad/usa/computer-science",
    },
    {
      country: "Finland",
      badge: "🇫🇮",
      tag: "Best Quality of Life",
      fees: "€8,000 - €14,000 / yr",
      duration: "3.5 Years (UG) • 2 Years (PG)",
      recognition: "EU Accredited Universities",
      desc: "Ranked #1 in global education quality. Generous merit scholarships, English-taught programs, and permanent residency opportunities.",
      link: "/study-abroad/finland/mba",
    },
    {
      country: "Nepal",
      flag: nepalFlag,
      tag: "Close to Home",
      fees: "₹45L - ₹60L Total Package",
      duration: "5.5 Years (Incl. Internship)",
      recognition: "NMC & Tribhuvan/KUMS Approved",
      desc: "Closest to India with no visa required for Indian citizens. Exact same medical curriculum, climate, and Indian patient profile.",
      link: "/mbbs-abroad/nepal",
    },
    {
      country: "Egypt",
      flag: egyptFlag,
      tag: "Massive Clinical Beds",
      fees: "₹4.0L - ₹6.0L / yr",
      duration: "5 + 2 Years Internship",
      recognition: "NMC & WHO Accredited",
      desc: "Huge teaching hospitals with thousands of daily clinical patients, giving Indian students unmatched bedside medical practice.",
      link: "/mbbs-abroad/egypt",
    },
  ];

  const KEY_PILLARS = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#d4a853]" />,
      title: "100% NMC & WHO Compliant",
      desc: "Every recommended university complies strictly with National Medical Commission NEXT/FMGE guidelines and international WHO accreditation.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#d4a853]" />,
      title: "Zero Hidden Charges",
      desc: "Transparent university fee receipts directly payable to official institutional accounts with comprehensive breakdown of tuition, hostel, and insurance.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#d4a853]" />,
      title: "Guaranteed Admission & Visa",
      desc: "Our seasoned documentation specialists handle transcript verification, apostille, government invitation letters, and embassy visa stamping.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#d4a853]" />,
      title: "Indian Mess & Secure Hostels",
      desc: "Safe campus accommodations featuring 24/7 CCTV, biometric access, separate boys/girls floors, and hygienic Indian vegetarian/non-veg meals.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#d4a853]" />,
      title: "Language & Test Support",
      desc: "Tailored preparation assistance for IELTS, PTE, NEET, and ongoing coaching support for the NExT/FMGE licensing examination.",
    },
    {
      icon: <Plane className="w-6 h-6 text-[#d4a853]" />,
      title: "Airport Pickup & Local Care",
      desc: "From group airport pickups and SIM card registration to university enrollment and foreign police registration, our overseas team stays with you.",
    },
  ];

  const ROADMAP_STEPS = [
    {
      step: "01",
      title: "Free Profile & Budget Evaluation",
      desc: "Share your Class 12 marks, NEET score, and desired budget. Our senior counsellors provide a realistic, transparent recommendation report.",
    },
    {
      step: "02",
      title: "University & Course Shortlisting",
      desc: "We match you with top-ranked, NMC/WHO-accredited medical colleges or STEM universities that fit your career ambitions.",
    },
    {
      step: "03",
      title: "Official Admission Letter & Apostille",
      desc: "We submit your direct application and secure your official provisional admission letter from the university within days.",
    },
    {
      step: "04",
      title: "Embassy Visa Stamping & Travel Prep",
      desc: "Our visa team completes document apostille, translation, health insurance, and guides you through embassy visa approval.",
    },
    {
      step: "05",
      title: "Group Departure & Campus Onboarding",
      desc: "Travel in safe student batches accompanied by Eduhawk coordinators. We arrange airport pickup, hostel check-in, and class orientation.",
    },
  ];

  const FAQ_ITEMS = [
    {
      q: "Is NEET qualification mandatory to study MBBS abroad?",
      a: "Yes. As per National Medical Commission (NMC) regulations, qualifying NEET in the year of admission or preceding two years is mandatory for Indian students wishing to practice in India after graduation.",
    },
    {
      q: "Is an MBBS degree from Russia, Georgia, or Kazakhstan valid in India?",
      a: "Yes, absolutely. All partner universities recommended by Eduhawk strictly satisfy NMC's November 2021 Gazette regulations (54+ months theory & practical + 12 months clinical internship in the same hospital in English medium), making graduates fully eligible for the NExT (National Exit Test).",
    },
    {
      q: "What is the medium of instruction for overseas medical and STEM courses?",
      a: "100% English. All lectures, clinical bedside teachings, practical labs, and semester examinations are conducted entirely in English.",
    },
    {
      q: "What is the total expense range for studying MBBS abroad?",
      a: "A complete MBBS program abroad ranges from ₹15 Lakhs to ₹35 Lakhs for the entire 5 to 6-year duration, including tuition fees, hostel accommodation, and medical insurance, depending on the chosen country and state university.",
    },
    {
      q: "Are Indian food and vegetarian meal options available on campus?",
      a: "Yes. Most top partner medical universities in Russia, Kazakhstan, Uzbekistan, and Georgia feature dedicated Indian mess facilities serving fresh Indian vegetarian and non-vegetarian meals prepared by Indian chefs.",
    },
    {
      q: "Can students work part-time while studying abroad?",
      a: "For STEM and Business degrees in countries like the USA and Finland, international students are permitted to work up to 20 hours per week during academic semesters and full-time during vacations. In medical courses, students focus primarily on rigorous hospital clinical rotations.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen antialiased selection:bg-amber-100 selection:text-amber-900">
      <SeoHead
        title="Study Abroad Hub 2026-27 | MBBS Abroad & Global Universities | Edu Hawk"
        description="Explore top NMC-recognised MBBS abroad destinations (Russia, Georgia, Kazakhstan, Uzbekistan) and premier STEM/MBA hubs in USA & Finland. Free 1-on-1 counselling."
        keywords="study abroad, study mbbs abroad, mbbs abroad consultants, study in usa, study in finland, mbbs in russia, mbbs in georgia, overseas education consultants india"
        path={canonicalPath}
        ogType="website"
      >
        <link rel="preload" as="image" href={heroTrusted} fetchPriority="high" />
      </SeoHead>

      {/* ─── HERO MULTI-IMAGE CAROUSEL (Matching Home & About) ──────── */}
      <section className="relative w-full h-[78vh] min-h-[620px] sm:min-h-[680px] lg:h-[84vh] overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentHeroSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1281}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
              className="w-full h-full object-cover scale-105 transition-transform duration-[12000ms] brightness-[0.80]"
              style={{
                transform:
                  idx === currentHeroSlide ? "scale(1.06)" : "scale(1.02)",
              }}
              srcSet={`${slide.image} 1x, ${slide.image} 2x`}
              sizes="100vw"
            />
            {/* Atmospheric Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40" />

            <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10 pb-28 sm:pb-36">
              <div className="text-center max-w-5xl mx-auto">
                {/* Admissions Open Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#d4a853]/40 text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-amber-300 font-bold">{slide.badge}</span>
                  <span className="hidden sm:inline text-white/80">
                    • 1000+ Placed • NMC &amp; WHO Recognized
                  </span>
                </div>

                {/* Hero Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4 drop-shadow-2xl">
                  {slide.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] via-[#f0c070] to-[#e0b76b]">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Hero Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-100 font-medium mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
                  {slide.desc}
                </p>

                {/* Hero Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
                  <Link
                    to={slide.ctaLink || "/landingpage"}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-3.5 sm:py-4 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto cursor-pointer"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight size={17} />
                  </Link>

                  <a
                    href="#destinations"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-7 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto cursor-pointer shadow-lg"
                  >
                    <Globe size={16} className="text-amber-300" />
                    <span>Explore Top Countries</span>
                  </a>

                  <a
                    href="#streams"
                    className="inline-flex items-center justify-center gap-2 border border-white/25 bg-black/25 hover:bg-black/40 backdrop-blur-md text-slate-200 font-semibold px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto cursor-pointer"
                  >
                    <Compass size={16} className="text-amber-400" />
                    <span>Browse Streams</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators positioned comfortably above the floating stats card */}
        <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 left-0 right-0 flex justify-center gap-2.5 z-20 pointer-events-auto">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentHeroSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-400 shadow-md cursor-pointer ${
                i === currentHeroSlide
                  ? "w-8 bg-[#d4a853] ring-2 ring-[#d4a853]/60"
                  : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ─── FLOATING STATS BAR (Half on Hero, Half on Body) ─────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -translate-y-1/2 -mb-8 sm:-mb-10">
        <div className="bg-white border border-[#d4a853]/30 rounded-2xl sm:rounded-3xl shadow-2xl py-5 px-4 sm:py-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STATS_DATA.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center p-1 sm:p-2 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#d4a853] tracking-tight leading-none group-hover:scale-105 transition-transform">
                {s.n}
              </div>
              <div className="text-[#0a2342] font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mt-1.5 sm:mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── STUDY STREAMS SECTION ─────────────────────────────────── */}
      <section id="streams" className="pt-14 sm:pt-20 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
              <Sparkles size={14} className="text-amber-600" />
              Academic Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
              Explore Top Global Study Streams
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Whether you aspire to practice medicine as a physician or build a global tech &amp; business career, Eduhawk guides you to accredited universities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {STUDY_STREAMS.map((stream, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl hover:border-[#d4a853] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center group-hover:bg-[#0a2342] transition-colors duration-300">
                      {stream.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0a2342]/5 text-[#0a2342] border border-[#0a2342]/10 group-hover:bg-[#d4a853]/15 group-hover:text-amber-900 transition-colors">
                      {stream.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0a2342] mb-2 group-hover:text-amber-700 transition-colors">
                    {stream.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {stream.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Degree Level:</span>
                      <span className="font-semibold text-slate-800">{stream.degree}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Course Duration:</span>
                      <span className="font-semibold text-slate-800">{stream.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Estimated Package:</span>
                      <span className="font-bold text-[#d4a853]">{stream.budget}</span>
                    </div>
                    <div className="flex justify-between items-start pt-1">
                      <span className="text-slate-500 font-medium shrink-0 mr-2">Key Countries:</span>
                      <span className="font-semibold text-slate-700 text-right">{stream.destinations}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to={stream.link}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center bg-[#0a2342] text-white group-hover:bg-gradient-to-r group-hover:from-[#d4a853] group-hover:to-[#e0b76b] group-hover:text-[#0a2342] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Explore {stream.title.split(" ")[0]} Programs</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOP DESTINATIONS GRID ─────────────────────────────────── */}
      <section id="destinations" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
              <Globe size={14} className="text-amber-700" />
              Global Study Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
              Top Study Abroad Destinations for Indian Students
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Compare premier medical universities, transparent fee structures, and NMC-compliant curriculums across top overseas education destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOP_DESTINATIONS.map((dest, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#d4a853] transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      {dest.flag ? (
                        <img
                          src={dest.flag}
                          alt={`${dest.country} flag`}
                          width={36}
                          height={24}
                          className="w-9 h-6 object-cover rounded shadow-xs border border-slate-200"
                        />
                      ) : (
                        <span className="text-2xl leading-none">{dest.badge}</span>
                      )}
                      <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                        {dest.country.slice(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                      {dest.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0a2342] group-hover:text-amber-700 transition-colors mb-2">
                    {dest.country}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {dest.desc}
                  </p>

                  <div className="space-y-1.5 py-3 border-t border-slate-100 text-xs mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Est. Tuition:</span>
                      <span className="font-bold text-[#d4a853]">{dest.fees}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-semibold text-slate-700">{dest.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Recognition:</span>
                      <span className="font-semibold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        {dest.recognition.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to={dest.link}
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-center bg-slate-900 text-white group-hover:bg-[#d4a853] group-hover:text-[#0a2342] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Explore Universities</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/allcollege"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0a2342] hover:text-amber-700 underline underline-offset-4 decoration-[#d4a853] transition-colors"
            >
              <span>View All 200+ Partner Medical Colleges &amp; Universities Worldwide</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE EDUHAWK (6 PILLARS) ─────────────────────────── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
              <ShieldCheck size={14} className="text-amber-600" />
              The Eduhawk Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
              Why 1000+ Students Trust Eduhawk
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We stand apart through radical transparency, zero hidden charges, and relentless focus on your long-term medical licensing and career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {KEY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#d4a853] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center mb-5 group-hover:bg-[#0a2342] transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a2342] mb-2.5 group-hover:text-amber-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ELIGIBILITY & BUDGET CHECKLIST ────────────────────────── */}
      <section id="eligibility" className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-[#faf8f4] border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Requirements checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                  Eligibility Criteria
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2342] leading-tight mb-3">
                  Who Can Apply for Overseas Studies?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Admission standards are transparent and merit-based. Meet these core benchmarks to begin your application process:
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    title: "Class 12 Academic Foundation",
                    desc: "Minimum 50% aggregate in Physics, Chemistry, Biology (40% for reserved category) for MBBS abroad. Equivalent high school diploma for STEM/Business.",
                  },
                  {
                    title: "NEET Qualification (For MBBS)",
                    desc: "Mandatory qualification in NEET (current year or previous 2 years) as mandated by NMC regulations for Indian students.",
                  },
                  {
                    title: "Minimum Age Requirement",
                    desc: "Student must be at least 17 years old on or before 31st December of the admission intake year.",
                  },
                  {
                    title: "Valid Indian Passport",
                    desc: "A valid passport with minimum 18 months remaining validity before the intended travel date.",
                  },
                  {
                    title: "English Proficiency / Medium of Study",
                    desc: "Most medical universities do not require IELTS/TOEFL if medium of instruction was English. STEM/Business universities provide waivers based on Class 12 English score.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <CheckCircle2 size={15} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Assessment Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0a2342] via-[#0f3560] to-[#071d38] text-white p-7 sm:p-9 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#d4a853]/20 rounded-full blur-2xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4a853]/20 text-[#f0c070] text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4a853]/30">
                <Sparkles size={13} />
                Instant Eligibility Check
              </span>

              <h3 className="text-2xl font-bold mb-3 text-white">
                Not Sure If You Qualify?
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Share your Class 12 marks, NEET score, and target budget. Our senior counselling experts will evaluate your profile and provide a customized list of eligible universities within 2 hours.
              </p>

              <div className="space-y-3.5 mb-7">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <BadgeCheck size={18} className="text-[#d4a853] shrink-0" />
                  <span>100% Free Profile Assessment</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <BadgeCheck size={18} className="text-[#d4a853] shrink-0" />
                  <span>Honest Fee &amp; Living Cost Estimates</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <BadgeCheck size={18} className="text-[#d4a853] shrink-0" />
                  <span>Zero Spam Guarantee</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/landingpage"
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-center bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>Book Free Eligibility Check</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/917632949984?text=Hi%20Eduhawk%20team,%20I%20want%20to%20check%20my%20eligibility%20for%20studying%20abroad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm text-center bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={15} className="text-emerald-400" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5-STEP ROADMAP SECTION ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
              <Clock size={14} className="text-amber-600" />
              Your Roadmap to Success
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
              How the Admission Process Works
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              A stress-free, step-by-step admission journey from your first counselling call to attending classes on campus.
            </p>
          </div>

          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#d4a853] via-amber-200 to-[#d4a853] -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              {ROADMAP_STEPS.map((s, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full lg:w-1/2 ${
                      idx % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#d4a853] hover:shadow-md transition-all">
                      <span className="text-[#d4a853] font-black text-2xl mb-1 block">
                        Step {s.step}
                      </span>
                      <h3 className="text-xl font-bold text-[#0a2342] mb-2">
                        {s.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-black text-base flex items-center justify-center shadow-lg shrink-0 relative z-10 border-4 border-white">
                    {s.step}
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION SECTION ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
              <HelpCircle size={14} className="text-amber-600" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2342] leading-tight mb-4">
              Answers to Common Student &amp; Parent Queries
            </h2>
            <p className="text-gray-600 text-base">
              Clear, transparent answers about MBBS abroad, NMC validity, fee structures, and campus life.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all hover:border-[#d4a853]/60"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 font-bold text-left text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span className="text-[#0a2342]">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      openFaq === i
                        ? "bg-[#d4a853] text-[#0a2342] rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {openFaq === i && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION BANNER ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#071d38] via-[#0a2342] to-[#0d3460] rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#d4a853]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a853]/20 text-[#f0c070] text-xs font-bold uppercase tracking-wider mb-4 border border-[#d4a853]/30">
                <Sparkles size={13} />
                Get Started Today
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Ready to Take Your First Step Towards Overseas Education?
              </h2>

              <p className="text-slate-200/90 max-w-2xl mx-auto mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                Connect with our senior education counsellors for honest, customized guidance on university selection, fees, scholarships, and visa processing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <Link
                  to="/landingpage"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-3.5 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="https://wa.me/917632949984?text=Hi%20Eduhawk,%20I%20want%20to%20know%20more%20about%20study%20abroad%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto shadow-md"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="tel:+917632949984"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto"
                >
                  <Phone size={16} />
                  <span>Call +91 76329 49984</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE STICKY BOTTOM ACTION BAR ───────────────────────── */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center gap-3 shadow-2xl">
        <a
          href="tel:+917632949984"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md"
        >
          <Phone size={14} className="text-amber-400" />
          <span>Call Us</span>
        </a>

        <a
          href="https://wa.me/917632949984?text=Hi%20Eduhawk,%20I%20am%20interested%20in%20studying%20abroad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MbbsAbroad;
