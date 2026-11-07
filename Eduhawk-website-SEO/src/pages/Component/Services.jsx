import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SeoHead from "../../component/SeoHead.jsx";
import servicesData from "../../data/main_pages/services.json";

// Service images
import ExpertGuidance from "../../Images/Service Image/Expert Guidance.webp";
import Globalmap from "../../Images/Service Image/global-map.webp";
import Globalmap2 from "../../Images/Service Image/backround one.webp";
import FixedBanner from "../../Images/fixed.webp";
import serviceHero1 from "../../Images/Service Image/service-hero-1.webp";
import serviceHero3 from "../../Images/Service Image/service-hero-3.webp";
import heroTrusted from "../../Images/hero/hero-trusted.webp";

import {
  CheckCircle2,
  Compass,
  FileCheck2,
  ShieldCheck,
  PlaneTakeoff,
  Award,
  GraduationCap,
  Globe,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  ChevronDown,
  Headphones,
  Users,
} from "lucide-react";

const HERO_IMAGES = [serviceHero1, heroTrusted, serviceHero3];

const SERVICE_ICONS = [
  <Compass className="w-6 h-6 text-[#d4a853]" />,
  <FileCheck2 className="w-6 h-6 text-[#d4a853]" />,
  <ShieldCheck className="w-6 h-6 text-[#d4a853]" />,
  <PlaneTakeoff className="w-6 h-6 text-[#d4a853]" />,
];

const SERVICE_HIGHLIGHTS = [
  [
    "NEET score & budget profiling",
    "NMC-recognized university matching",
    "Transparent fee breakdowns",
  ],
  [
    "Direct admission letter issuance",
    "SOP & document apostille support",
    "Zero hidden service charges",
  ],
  [
    "100% Embassy dossier preparation",
    "Financial documentation check",
    "Rigorous mock visa interviews",
  ],
  [
    "Hostel accommodation allocation",
    "Group flight travel with team",
    "Local Indian food & FMGE mentors",
  ],
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      img: HERO_IMAGES[0],
      title:
        servicesData.hero?.title ||
        "Comprehensive Study Abroad & Medical Admission Services",
      subtitle:
        servicesData.hero?.subtitle ||
        "Guiding ambitious Indian students to world-class universities across 20+ countries with complete transparency and 100% visa assistance.",
    },
    {
      img: HERO_IMAGES[1],
      title: "From Dream to Degree — We’re With You Every Step",
      subtitle:
        "Transparent counselling, zero hidden charges, and end-to-end support from admission application to post-arrival hostel settling.",
    },
    {
      img: HERO_IMAGES[2],
      title: "Study MBBS Abroad Made Simple, Trusted & Secure",
      subtitle:
        "Official admission partners for NMC and WHO recognized medical colleges in Russia, Georgia, Uzbekistan, Kazakhstan & Kyrgyzstan.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      <SeoHead
        title={
          servicesData.seo?.title ||
          "MBBS Abroad Services | Admission & Visa Assistance"
        }
        description={
          servicesData.seo?.description ||
          "Complete MBBS abroad services including personalized counselling, university admission, documentation and visa support for Indian students."
        }
        path="/services"
        ogType="website"
      >
        <link rel="preload" as="image" href={serviceHero1} fetchPriority="high" />
      </SeoHead>

      <div className="min-h-screen bg-white font-sans text-slate-800">
        {/* Page heading visually hidden for SEO architecture */}
        <h1 className="sr-only">
          Edu-Hawk Worldwide - MBBS Abroad Admission, Counselling and Visa Services
        </h1>

        {/* ─── HERO CAROUSEL ──────────────────────────────────────────────── */}
        <section className="relative w-full h-[78vh] min-h-[620px] sm:min-h-[680px] lg:h-[84vh] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                width={1920}
                height={1281}
                className="w-full h-full object-cover scale-105 transition-transform duration-[12000ms] brightness-[0.80]"
                style={{
                  transform:
                    currentSlide === idx ? "scale(1.06)" : "scale(1.02)",
                }}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
                srcSet={`${slide.img} 1x, ${slide.img} 2x`}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />

              <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10 pb-28 sm:pb-36">
                <div className="text-center max-w-5xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-xl">
                    <span className="text-amber-400">★★★★★</span>
                    <span className="text-amber-300 font-bold">4.9/5 Rating</span>
                    <span className="hidden sm:inline text-white/90">
                      • 1000+ Placed • 100% Visa Support • NMC Approved
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-xl text-white/95 font-medium mb-7 md:mb-9 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
                    <button
                      type="button"
                      onClick={() => navigate("/landingpage")}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                    >
                      <span>
                        {servicesData.hero?.ctaText || "Book Free Counselling"}
                      </span>
                      <ArrowRight size={17} />
                    </button>

                    <a
                      href="#services-list"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm cursor-pointer shadow-lg"
                    >
                      <span>Explore Services</span>
                      <ChevronDown size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators positioned safely above the floating stats card */}
          <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 left-0 right-0 flex justify-center gap-2.5 z-20 pointer-events-auto">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-400 shadow-md ${
                  currentSlide === idx
                    ? "w-7 bg-[#d4a853] ring-2 ring-[#d4a853]/60"
                    : "w-2 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ─── FLOATING STATS BAR (Half on Hero, Half on Services Section) ──── */}
        {servicesData.stats && servicesData.stats.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -translate-y-1/2 -mb-8 sm:-mb-10">
            <div className="bg-white border border-[#d4a853]/30 rounded-2xl sm:rounded-3xl shadow-2xl py-5 px-4 sm:py-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {servicesData.stats.map((s, i) => (
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
        )}

        {/* ─── DETAILED SERVICES GRID ─────────────────────────────────────── */}
        <section
          id="services-list"
          className="pt-12 sm:pt-16 pb-20 md:pb-28 px-5 sm:px-8 lg:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
                <Sparkles size={14} className="text-amber-600" />
                End-to-End Admission Support
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                Our Comprehensive Student Services
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                From your very first counselling session to landing at your
                university campus abroad, we manage every single detail with 100%
                transparency.
              </p>
            </div>

            {/* Dynamic Services List */}
            {servicesData.services && servicesData.services.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
                {servicesData.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Step Number Background Accent */}
                    <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 group-hover:text-amber-100/60 transition-colors pointer-events-none select-none">
                      0{idx + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                        {SERVICE_ICONS[idx % SERVICE_ICONS.length]}
                      </div>

                      <h3 className="text-2xl font-bold text-[#0a2342] group-hover:text-amber-600 transition-colors mb-3 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                        {(SERVICE_HIGHLIGHTS[idx] || []).map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-600 flex-shrink-0"
                            />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => navigate("/landingpage")}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
                      >
                        <span>Get Started with Step 0{idx + 1}</span>
                        <ArrowRight size={15} />
                      </button>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Step 0{idx + 1} of 04
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── WHY STUDENTS CHOOSE EDUHAWK (3 Featured Image Pillars) ─────── */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} className="text-amber-600" />
                Trusted Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                Why Students & Parents Choose EduHawk
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Decades of combined overseas medical expertise delivering
                transparent, reliable and guaranteed guidance for Indian
                aspirants.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col justify-between hover:-translate-y-2">
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <img
                    src={ExpertGuidance}
                    loading="lazy"
                    width={1726}
                    height={980}
                    alt="Expert Guidance"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    srcSet={`${ExpertGuidance} 1x, ${ExpertGuidance} 2x`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-7 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a2342] group-hover:text-amber-600 transition-colors mb-2">
                      Expert Guidance
                    </h3>
                    <div className="mx-auto my-3 h-1 w-12 rounded bg-gradient-to-r from-amber-500 to-amber-600 transition-all group-hover:w-20" />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      10+ years helping Indian students secure verified admissions
                      in top NMC & WHO accredited universities worldwide.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-bold text-amber-700">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Certified Overseas Counsellors</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col justify-between hover:-translate-y-2">
                <div className="h-56 overflow-hidden bg-gradient-to-br from-amber-50/40 via-white to-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                  <img
                    src={Globalmap}
                    loading="lazy"
                    width={915}
                    height={435}
                    alt="Global Network"
                    className="max-h-40 w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                    srcSet={`${Globalmap} 1x, ${Globalmap} 2x`}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a2342] group-hover:text-amber-600 transition-colors mb-2">
                      Global Network
                    </h3>
                    <div className="mx-auto my-3 h-1 w-12 rounded bg-gradient-to-r from-amber-500 to-amber-600 transition-all group-hover:w-20" />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Direct tie-ups with 200+ universities in 20+ countries:
                      Russia, Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan & more.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-bold text-amber-700">
                    <Globe size={14} className="text-amber-600" />
                    <span>Official University Representatives</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col justify-between hover:-translate-y-2">
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <img
                    src={Globalmap2}
                    loading="lazy"
                    width={520}
                    height={260}
                    alt="Success Stories"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    srcSet={`${Globalmap2} 1x, ${Globalmap2} 2x`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-7 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0a2342] group-hover:text-amber-600 transition-colors mb-2">
                      100% Proven Success
                    </h3>
                    <div className="mx-auto my-3 h-1 w-12 rounded bg-gradient-to-r from-amber-500 to-amber-600 transition-all group-hover:w-20" />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Unmatched visa approval rate, verified pre-departure
                      briefings, and on-ground Indian student welfare coordinators.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-bold text-amber-700">
                    <Award size={14} className="text-amber-600" />
                    <span>1000+ Doctor Alumni Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BANNER / CTA STRIP ──────────────────────────────────────────── */}
        <section
          className="relative py-20 md:py-24 px-5 sm:px-8 lg:px-12 bg-cover bg-center text-center text-white"
          style={{ backgroundImage: `url(${FixedBanner})` }}
        >
          {/* Rich Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d38]/90 via-[#0a2b52]/85 to-[#0c3666]/90" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-amber-400" />
              Free Profile Evaluation
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Start Your Global Medical Journey Today
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              No hidden charges • Transparent fee structure • 100% Admission &
              Visa Guidance
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20would%20like%20to%20know%20more%20about%20your%20MBBS%20Abroad%20services.",
                    "_blank"
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span>Talk to an Expert on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/landingpage")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md px-8 py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-auto"
              >
                <span>Book Free Counselling →</span>
              </button>
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
                "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20am%20interested%20in%20your%20services.",
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
}
