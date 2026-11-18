import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SeoHead from "../component/SeoHead.jsx";
import AboutImage from "../Images/About us page.webp";
import imageAbout2 from "../Images/ABOUT SERVICE.webp";
import FixedBanner from "../Images/fixed.webp";
import aboutHero1 from "../Images/hero/about-hero-1.webp";
import aboutHero3 from "../Images/hero/about-hero-3.webp";
import heroTrusted from "../Images/hero/hero-trusted.webp";
import aboutData from "../data/about.json";
import {
  CheckCircle2,
  Award,
  GraduationCap,
  Globe,
  Star,
  ArrowRight,
  Download,
  Phone,
  MessageCircle,
  FileText,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  BookOpen,
  Users,
  Quote,
} from "lucide-react";

const HERO_IMAGES = [aboutHero1, heroTrusted, aboutHero3];

export default function About() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const navigate = useNavigate();

  const heroSlides = (aboutData.heroSlides || []).map((slide, idx) => ({
    ...slide,
    image: slide.image || HERO_IMAGES[idx % HERO_IMAGES.length],
  }));

  // PDF download function
  const downloadPDF = () => {
    const pdfUrl = "/Eduhawk.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Eduhawk-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!heroSlides.length) return;
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(heroInterval);
  }, [heroSlides.length]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const WHY_CHOOSE_PILLARS = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#d4a853]" />,
      title: "100% NMC & WHO Compliant",
      desc: "Every university we recommend strictly follows National Medical Commission FMGE/NEXT guidelines and WHO international standards.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#d4a853]" />,
      title: "Zero Hidden Charges",
      desc: "Completely transparent fee structures directly payable to official university bank accounts with zero surprise charges.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#d4a853]" />,
      title: "Personalized NEET Counselling",
      desc: "1-on-1 expert matching tailored to your exact NEET score, budget range, preferred country, and clinical career goals.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#d4a853]" />,
      title: "Complete End-to-End Support",
      desc: "From initial admission letter and visa stamping to flight booking, airport pickup, hostel allocation, and FMGE coaching support.",
    },
  ];

  return (
    <>
      <SeoHead
        title={
          aboutData.seo?.title ||
          "MBBS Abroad Consultancy in India | About EduHawk"
        }
        description={
          aboutData.seo?.description ||
          "EduHawk is a leading MBBS abroad consultancy in India providing admission guidance, university selection, and visa assistance for Indian students."
        }
        path="/about"
        ogType="website"
      >
        <link rel="preload" as="image" href={aboutHero1} fetchPriority="high" />
      </SeoHead>

      <div className="min-h-screen bg-white font-sans text-slate-800">
        {/* Page heading visually hidden for SEO architecture */}
        <h1 className="sr-only">About Edu-Hawk Worldwide - MBBS Abroad Education Consultancy</h1>

        {/* HERO CAROUSEL */}
        <section className="relative w-full h-[78vh] min-h-[620px] sm:min-h-[680px] lg:h-[84vh] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id || idx}
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
                className="w-full h-full object-cover scale-105 transition-transform duration-[12000ms] brightness-[0.82]"
                style={{
                  transform:
                    idx === currentHeroSlide ? "scale(1.06)" : "scale(1.02)",
                }}
                srcSet={`${slide.image} 1x, ${slide.image} 2x`}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35" />

              <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10 pb-28 sm:pb-36">
                <div className="text-center max-w-5xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-xl">
                    <span className="text-amber-400">★★★★★</span>
                    <span className="text-amber-300 font-bold">4.9/5 Rating</span>
                    <span className="hidden sm:inline text-white/90">
                      • {aboutData.welcome?.badge || "Where Innovation Meets Excellence"}
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
                      <span>{slide.cta || "Book Free Counselling"}</span>
                      <ArrowRight size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={downloadPDF}
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm cursor-pointer shadow-lg"
                    >
                      <Download size={16} />
                      <span>Download Brochure</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators positioned comfortably above the floating stats card */}
          <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 left-0 right-0 flex justify-center gap-2.5 z-20 pointer-events-auto">
            {heroSlides.map((_, i) => (
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

        {/* FLOATING STATS BAR (Half on Hero, Half on Welcome Section) */}
        {aboutData.stats && aboutData.stats.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -translate-y-1/2 -mb-8 sm:-mb-10">
            <div className="bg-white border border-[#d4a853]/30 rounded-2xl sm:rounded-3xl shadow-2xl py-5 px-4 sm:py-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {aboutData.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center p-1 sm:p-2 group">
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

        {/* WELCOME / STORY SECTION */}
        <section className="pt-12 sm:pt-16 pb-20 md:pb-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
                <Sparkles size={14} className="text-amber-600" />
                {aboutData.welcome?.badge || "EDU HAWK – Where Innovation Meets Excellence"}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                {aboutData.welcome?.title || "Welcome to EDU HAWK"}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                {aboutData.welcome?.subtitle ||
                  "Where innovation meets excellence in overseas medical education."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  {aboutData.welcome?.p1_before ||
                    "At Eduhawk, we understand the complex world of college admissions and the challenges students and families face. Our mission is to simplify this journey through personalized guidance, trusted support, and expert counseling for students planning to"}{" "}
                  <Link
                    to="/"
                    className="text-amber-700 hover:text-amber-800 font-bold underline underline-offset-4 decoration-amber-400 transition-colors"
                  >
                    {aboutData.welcome?.p1_link_text || "study MBBS abroad."}
                  </Link>
                </p>

                <p className="text-slate-600">
                  {aboutData.welcome?.p2 ||
                    "We’re here to guide you through every decision — big or small — on the path to college success and the right global career opportunities."}
                </p>

                <p className="font-semibold text-slate-800">
                  {aboutData.welcome?.p3 ||
                    "Together, we turn the challenge of admissions into an opportunity for growth, learning, and success."}
                </p>

                {/* Key Mission Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Transparent University Fees",
                    "Official Direct Admission",
                    "FMGE & NEXT Syllabus Alignment",
                    "Complete Visa & Travel Assistance",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-sm cursor-pointer"
                  >
                    <span>{aboutData.welcome?.ctaText || "Join Us Today →"}</span>
                  </button>

                  <a
                    href="tel:+919630736070"
                    className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold px-6 py-4 rounded-xl hover:bg-slate-50 transition-all text-sm shadow-xs"
                  >
                    <Phone size={16} className="text-amber-600" />
                    <span>Call +91 96307 36070</span>
                  </a>
                </div>
              </div>

              {/* Right Image with Floating Badge */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src={aboutData.welcome?.image || AboutImage}
                    loading="lazy"
                    width={600}
                    height={600}
                    alt="EduHawk medical students on campus"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    srcSet={`${AboutImage} 1x, ${AboutImage} 2x`}
                    sizes="(max-width: 640px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center gap-3.5 max-w-[260px]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a2342] to-[#1a4a7a] flex items-center justify-center text-amber-400 shadow-md flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#0a2342] leading-tight">10+ Years</div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                      Guiding Future Doctors
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="text-center bg-gradient-to-r from-amber-50/70 via-amber-100/40 to-amber-50/70 border border-amber-200/60 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
              <Quote className="w-8 h-8 text-[#d4a853] mx-auto mb-2 opacity-70" />
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0a2342] italic leading-snug">
                {aboutData.welcome?.quote ||
                  '"Where Dreams Take Flight – College Counselling Done Right"'}
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE EDU-HAWK (Core Value Pillars) */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} className="text-amber-600" />
                Why Indian Students Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                The Trusted Path to Your Global Medical Degree
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                We combine transparent admissions, experienced counsellors, and continuous student support until you clear your licensing exam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-4 shadow-2xs">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2342] mb-2 leading-tight">
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

        {/* STUDENT TESTIMONIALS (Restored & Dynamic from CMS) */}
        {aboutData.testimonials && aboutData.testimonials.length > 0 && (
          <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/70">
                  <Star size={14} className="text-amber-600 fill-amber-500" />
                  Student Stories
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                  What Our Students Say About Us
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Real experiences from Indian medical aspirants who turned their dream of becoming doctors into reality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {aboutData.testimonials.map((test, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(test.stars || 5)].map((_, i) => (
                          <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                        "{test.text}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900 text-base">{test.name}</div>
                        <div className="text-xs font-semibold text-amber-700 mt-0.5">{test.loc}</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                        <CheckCircle2 size={12} />
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA / WHATSAPP BANNER */}
        <section
          className="relative py-20 md:py-24 px-5 sm:px-8 lg:px-12 bg-cover bg-center text-center text-white"
          style={{
            backgroundImage: `url(${aboutData.banner?.backgroundImage || FixedBanner})`,
          }}
        >
          {/* Rich Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d38]/90 via-[#0a2b52]/85 to-[#0c3666]/90" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-amber-400" />
              Admissions Open 2026-2027
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {aboutData.banner?.title || "Start Your Global Journey Today"}
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              {aboutData.banner?.subtitle ||
                "Free profile evaluation • No-obligation consultation"}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    `https://api.whatsapp.com/send?phone=${
                      aboutData.banner?.whatsappPhone || "919630736070"
                    }&text=Hi%20Edu-Hawk,%20I%20am%20interested%20in%20MBBS%20Abroad%20counselling.`,
                    "_blank"
                  )
                }
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span>{aboutData.banner?.ctaText || "Chat on WhatsApp"}</span>
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

        {/* FAQ SECTION */}
        {aboutData.faq?.items && aboutData.faq.items.length > 0 && (
          <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-12 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
                  <BookOpen size={14} className="text-amber-700" />
                  Have Questions?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                  {aboutData.faq?.title || "Frequently Asked Questions"}
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  {aboutData.faq?.subtitle ||
                    "Quick answers to the most common questions about MBBS abroad with EDU HAWK"}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
                {/* FAQ List */}
                <div className="w-full lg:w-3/5 space-y-4">
                  {aboutData.faq.items.map((item, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`rounded-2xl transition-all duration-300 border ${
                          isOpen
                            ? "bg-white border-amber-300 shadow-lg ring-1 ring-amber-200/50"
                            : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
                        }`}
                      >
                        <button
                          type="button"
                          className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer gap-4"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className={`text-base sm:text-lg font-bold pr-2 transition-colors ${
                            isOpen ? "text-amber-700" : "text-[#0a2342]"
                          }`}>
                            {item.question}
                          </span>
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold transition-all ${
                            isOpen ? "bg-amber-100 text-amber-800 rotate-180" : "bg-slate-100 text-slate-600"
                          }`}>
                            <ChevronDown size={18} />
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Image + Tagline */}
                <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-6">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                    <img
                      src={aboutData.faq?.sidebarImage || imageAbout2}
                      loading="lazy"
                      width={612}
                      height={408}
                      alt="EduHawk counsellor advising student"
                      className="w-full max-w-md object-cover hover:scale-105 transition-transform duration-700"
                      srcSet={`${imageAbout2} 1x, ${imageAbout2} 2x`}
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#0a2342] text-center lg:text-left whitespace-pre-line leading-snug">
                    {aboutData.faq?.sidebarHeading ||
                      "Where Dreams Take Flight:\nCollege Counseling Done Right"}
                  </h3>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* MOBILE STICKY ACTION BAR */}
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
                "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20want%20to%20know%20more%20about%20MBBS%20Abroad.",
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
