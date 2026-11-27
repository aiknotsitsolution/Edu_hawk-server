import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SeoHead from "../component/SeoHead.jsx";
import LeadModal from "../component/LeadModal.jsx";
import AboutImage from "../Images/About us page.webp";
import imageAbout2 from "../Images/ABOUT SERVICE.webp";
import FixedBanner from "../Images/fixed.webp";
import heroAbroad1 from "../Images/hero/study-abroad-hero-1.webp";
import heroAbroad2 from "../Images/hero/study-abroad-hero-2.webp";
import heroAbroad3 from "../Images/hero/study-abroad-hero-3.webp";
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
  ChevronDown,
  ShieldCheck,
  BookOpen,
  Users,
  Compass,
  Plane,
  Clock,
  HelpCircle
} from "lucide-react";

const HERO_IMAGES = [heroAbroad1, heroAbroad2, heroAbroad3];

const WhatsAppIcon = ({ className = "w-5 h-5", size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function About() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const heroSlides = (aboutData.heroSlides || []).map((slide, idx) => ({
    ...slide,
    image: HERO_IMAGES[idx % HERO_IMAGES.length],
  }));

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
    }, 5500);

    return () => clearInterval(heroInterval);
  }, [heroSlides.length]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const welcome = aboutData.welcome || {};
  const whyChooseUs = aboutData.whyChooseUs || {};
  const process = aboutData.process || {};
  const finalCta = aboutData.finalCta || {};
  const faq = aboutData.faq || {};

  return (
    <>
      <SeoHead
        title={aboutData.seo?.title || "About Us | Edu-Hawk Worldwide - Global Education & Study Abroad"}
        description={aboutData.seo?.description || "Edu-Hawk Worldwide is your trusted partner for global education, helping students explore international universities, courses, admissions, and visas."}
        path="/about"
        ogType="website"
      >
        <link rel="preload" as="image" href={heroAbroad1} fetchPriority="high" />
      </SeoHead>

      <div className="min-h-screen bg-white font-sans text-slate-800">
        <h1 className="sr-only">About Edu-Hawk Worldwide - Global Education &amp; Study Abroad Consultancy</h1>

        {/* 1. HERO CAROUSEL */}
        <section className="relative w-full h-[78vh] min-h-[620px] sm:min-h-[680px] lg:h-[84vh] bg-[#071d38] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id || idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none invisible"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1281}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover scale-105 transition-transform duration-[12000ms]"
                style={{
                  transform: idx === currentHeroSlide ? "scale(1.06)" : "scale(1.02)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071d38]/85 via-black/50 to-black/30" />

              <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10 pb-28 sm:pb-36">
                <div className="text-center max-w-5xl mx-auto">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-md">
                    {slide.title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-xl text-white font-medium mb-7 md:mb-9 max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                    >
                      <span>{slide.primaryCta || "Book Free Counselling"}</span>
                      <ArrowRight size={17} />
                    </button>

                    {slide.secondaryCta && (
                      <Link
                        to="/allcollege"
                        className="inline-flex items-center justify-center gap-2 border-2 border-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-xs sm:text-sm cursor-pointer shadow-lg"
                      >
                        <Globe size={16} />
                        <span>{slide.secondaryCta}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-36 sm:bottom-36 md:bottom-40 left-0 right-0 flex justify-center gap-2.5 z-20 pointer-events-auto">
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

        {/* 2. STATISTICS SECTION (Floating Stats Bar) */}
        {aboutData.stats && aboutData.stats.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -translate-y-1/2 -mb-8 sm:-mb-10">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#d4a853]/30 py-6 px-4 sm:py-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {aboutData.stats.map((s, i) => {
                const isLongText = (s.n || "").length > 6;
                return (
                  <div key={i} className="flex flex-col items-center justify-start text-center p-2 group">
                    <div className={`h-10 sm:h-12 flex items-center justify-center font-black text-[#d4a853] tracking-tight leading-tight group-hover:scale-105 transition-transform ${
                      isLongText
                        ? "text-base sm:text-lg lg:text-xl font-extrabold max-w-[160px]"
                        : "text-2xl sm:text-3xl lg:text-4xl"
                    }`}>
                      {s.n}
                    </div>
                    <div className="text-[#0a2342] font-bold text-xs sm:text-sm uppercase tracking-wider mt-2">
                      {s.l}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. WELCOME TO EDU-HAWK SECTION */}
        <section className="pt-12 sm:pt-16 pb-20 md:pb-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
                
                {welcome.tag || "WELCOME TO EDU-HAWK WORLDWIDE"}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                {welcome.title || "Empowering Students to Achieve Global Dreams"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                {(welcome.paragraphs || [
                  "Edu-Hawk Worldwide is dedicated to helping students explore international education opportunities and build a future through global learning. We understand that choosing a university, course, and country is one of the most important decisions in a student's life.",
                  "Our team works closely with students to understand their academic background, aspirations, interests, and financial plans. With personalized counselling and reliable information, we help students discover suitable universities and programs across the world.",
                  "From the first counselling session to applications, admission formalities, visa guidance, and pre-departure preparation, we aim to make your study-abroad journey more informed, organized, and confident."
                ]).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                {/* Our commitment */}
                <div className="pt-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#0a2342] mb-3">
                    Our commitment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(welcome.commitments || [
                      "Transparent guidance",
                      "Personalized course and university selection",
                      "Student-focused counselling",
                      "Admission and application support",
                      "Visa and pre-departure assistance"
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                        <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <a
                    href="tel:+919630736070"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                  >
                    <Phone size={16} />
                    <span>{welcome.ctaText || "Start Your Journey Today — Call +91 96307 36070"}</span>
                  </a>
                </div>
              </div>

              {/* Right Image with Floating Badge */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <img
                    src={AboutImage}
                    loading="lazy"
                    width={600}
                    height={600}
                    alt="Edu-Hawk Worldwide - Study Abroad Guidance"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-3.5 max-w-[260px] border border-[#d4a853]/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a2342] to-[#1a4a7a] flex items-center justify-center text-amber-400 shadow-md flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-base font-black text-[#0a2342] leading-tight">Trusted &amp; Transparent</div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                      Zero Hidden Charges
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHY STUDENTS CHOOSE US */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} className="text-amber-600" />
                {whyChooseUs.tag || "WHY STUDENTS CHOOSE US"}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                {whyChooseUs.title || "Your Trusted Partner in Global Education"}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {whyChooseUs.lead || "We believe international education is more than earning a degree—it's about expanding horizons, building independence, and preparing for a successful future."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {(whyChooseUs.pillars || []).map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-5 text-[#0a2342] shadow-2xs">
                      {idx === 0 && <Users size={24} className="text-amber-600" />}
                      {idx === 1 && <Globe size={24} className="text-amber-600" />}
                      {idx === 2 && <ShieldCheck size={24} className="text-amber-600" />}
                      {idx === 3 && <GraduationCap size={24} className="text-amber-600" />}
                      {idx === 4 && <Award size={24} className="text-amber-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2342] mb-3 leading-tight min-h-[52px] flex items-start">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. YOUR STUDY ABROAD JOURNEY (5 STEPS) */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                {process.tag || "YOUR STUDY ABROAD JOURNEY"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4">
                {process.title || "Making Your International Education Journey Simple"}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                {process.lead || "We provide structured guidance to help you move forward at every stage of your overseas education journey."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {(process.steps || []).map((st, i) => (
                <div
                  key={i}
                  className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#d4a853] hover:shadow-xl rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-start relative group hover:-translate-y-1"
                >
                  <div className="text-3xl font-black text-[#d4a853] mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0a2342] mb-2 leading-snug min-h-[44px] flex items-start">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA SECTION (ADMISSIONS OPEN) */}
        <section
          className="relative py-20 md:py-24 px-5 sm:px-8 lg:px-12 bg-cover bg-center text-center text-white"
          style={{
            backgroundImage: `url(${FixedBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d38]/90 via-[#0a2b52]/85 to-[#0c3666]/90" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              
              {finalCta.tag || "ADMISSIONS OPEN"}
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {finalCta.title || "Your Future Is Waiting Beyond Borders."}
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
              {finalCta.body || "A world of opportunities is waiting for you. Whether you are planning for a Bachelor's, Master's, medical, technical, or professional program, let us help you take the first step towards your dream university."}
            </p>

            <p className="text-sm sm:text-base text-amber-200/90 max-w-2xl mx-auto mb-8 font-medium">
              {finalCta.subtext || "Get personalized guidance and discover the right international education pathway for you."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold px-8 py-4 border-2 border-transparent text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto min-h-[52px]"
              >
                <span>{finalCta.primaryCta || "Book Free Counselling"}</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 border-2 border-white/30 backdrop-blur-md px-8 py-4 text-xs sm:text-sm uppercase tracking-wider font-bold text-white transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-auto min-h-[52px]"
              >
                <span>{finalCta.secondaryCta || "Talk to Our Experts"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 7. ABOUT PAGE FAQ */}
        {faq.items && faq.items.length > 0 && (
          <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-12 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                  <BookOpen size={14} className="text-amber-700" />
                  Have Questions?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                  {faq.title || "Frequently Asked Questions About Studying Abroad"}
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
                {/* FAQ List */}
                <div className="w-full lg:w-3/5 space-y-4">
                  {faq.items.map((item, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`rounded-2xl transition-all duration-300 border ${
                          isOpen
                            ? "bg-white border-slate-300 shadow-md"
                            : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
                        }`}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer gap-4"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="text-base sm:text-lg font-bold pr-2 text-slate-900">
                            {item.question}
                          </span>
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold transition-all ${
                            isOpen ? "bg-slate-200 text-slate-900 rotate-180" : "bg-slate-100 text-slate-600"
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
                  <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-200">
                    <img
                      src={imageAbout2}
                      loading="lazy"
                      width={612}
                      height={408}
                      alt="Edu-Hawk Worldwide student counselling"
                      className="w-full max-w-md object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#0a2342] text-center lg:text-left whitespace-pre-line leading-snug">
                    Where Dreams Take Flight:{"\n"}Global Education Done Right
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
                "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20want%20to%20know%20more%20about%20Study%20Abroad.",
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
            onClick={() => setIsModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-extrabold text-xs rounded-xl shadow-xs transition"
          >
            <span>Apply Free</span>
          </button>
        </div>

        <ToastContainer />
        <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}
