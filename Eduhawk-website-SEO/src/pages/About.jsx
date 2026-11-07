import { useState, useEffect } from "react";
import AboutImage from "../Images/About us page.webp";
import imageAbout2 from "../Images/ABOUT SERVICE.webp";
import { useNavigate } from "react-router-dom";
import SeoHead from "../component/SeoHead.jsx";
import FixedBanner from "../Images/fixed.webp";
import aboutHero1 from "../Images/hero/about-hero-1.webp";
import aboutHero3 from "../Images/hero/about-hero-3.webp";
import aboutData from "../data/about.json";

const HERO_IMAGES = [aboutHero1, aboutHero1, aboutHero3];

export default function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const navigate = useNavigate();

  const heroSlides = (aboutData.heroSlides || []).map((slide, idx) => ({
    ...slide,
    image: slide.image || HERO_IMAGES[idx % HERO_IMAGES.length],
  }));

  // ✅ FIXED: PDF download function
  const downloadPDF = () => {
    const pdfUrl = "/Eduhawk.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Eduhawk.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % (heroSlides.length || 1));
    }, 6000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(
        (prev) => (prev + 1) % (aboutData.testimonials?.length || 1)
      );
    }, 7500);

    return () => {
      clearInterval(heroInterval);
      clearInterval(testimonialInterval);
    };
  }, [heroSlides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our counsellor will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
      />

      <div className="min-h-screen bg-gray-50 font-sans">
        {/* HERO CAROUSEL */}
        <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={1281}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
                className="w-full h-full object-cover scale-105 transition-transform duration-[15000ms] brightness-[0.85]"
                style={{
                  transform:
                    idx === currentHeroSlide ? "scale(1.08)" : "scale(1.05)",
                }}
                srcSet={`${slide.image} 1x, ${slide.image} 2x`}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-20">
                <div className="text-center max-w-6xl">
                  <p className="inline-block mb-6 px-6 py-3 bg-[#d4a853]/30 backdrop-blur-md rounded-full text-white font-semibold tracking-wider text-base uppercase">
                    {aboutData.welcome?.badge ||
                      "EDU HAWK – Where Innovation Meets Excellence"}
                  </p>

                  {idx === currentHeroSlide ? (
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                      {slide.title}
                    </h2>
                  )}

                  <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light mb-10 max-w-4xl mx-auto">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <button className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg">
                      {slide.cta} →
                    </button>

                    {/* ✅ FIXED: onClick attached correctly */}
                    <button
                      onClick={downloadPDF}
                      className="border-2 cursor-pointer border-white/70 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`w-4 h-4 rounded-full transition-all duration-500 shadow-md ${
                  i === currentHeroSlide
                    ? "bg-[#f0c070] scale-125 ring-4 ring-[#d4a853]/50"
                    : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </section>

        {/* STATS BAR */}
        <div className="max-w-7xl mx-auto px-6 -mt-24 md:-mt-28 relative z-10">
          <div className="bg-white/95 backdrop-blur-xl border border-[#d4a853]/20 rounded-3xl shadow-2xl p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {(aboutData.stats || []).map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-[#d4a853]">
                  {s.n}
                </div>
                <div className="text-[#0a2342] font-semibold mt-2 uppercase tracking-wide text-sm md:text-base">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT US */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-4">
                {aboutData.welcome?.title || "Welcome to EDU HAWK"}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {aboutData.welcome?.subtitle ||
                  "Where innovation meets excellence in overseas medical education."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  {aboutData.welcome?.p1_before}{" "}
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                  >
                    {aboutData.welcome?.p1_link_text || "study MBBS abroad."}
                  </button>
                </p>
                <p className="mb-4">{aboutData.welcome?.p2}</p>
                <p className="font-medium">{aboutData.welcome?.p3}</p>

                <button
                  onClick={() => navigate("/contact")}
                  className="mt-4 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {aboutData.welcome?.ctaText || "Join Us Today →"}
                </button>
              </div>

              <div>
                <img
                  src={aboutData.welcome?.image || AboutImage}
                  loading="lazy"
                  width={500}
                  height={500}
                  alt="EduHawk students and campus life"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  srcSet={`${AboutImage} 1x, ${AboutImage} 2x`}
                  sizes="(max-width: 640px) 180px, 244px"
                />
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl md:text-3xl font-semibold text-[#d4a853] italic">
                {aboutData.welcome?.quote ||
                  '"Where Dreams Take Flight – College Counselling Done Right"'}
              </p>
            </div>
          </div>
        </section>

        {/* BANNER SECTION */}
        <section
          className="relative h-80 bg-cover bg-center md:h-96 animate-fade-in-up"
          style={{
            backgroundImage: `url(${aboutData.banner?.backgroundImage || FixedBanner})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
            <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl animate-fade-in-up delay-100">
              {aboutData.banner?.title || "Start Your Global Journey Today"}
            </h3>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl animate-fade-in-up delay-200">
              {aboutData.banner?.subtitle ||
                "Free profile evaluation • No-obligation consultation"}
            </p>

            {/* WhatsApp Button */}
            <button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?phone=${
                    aboutData.banner?.whatsappPhone || "919630736070"
                  }`,
                  "_blank"
                )
              }
              className="mt-8 rounded-full bg-white px-10 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              {aboutData.banner?.ctaText || "Talk to an Expert →"}
            </button>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 md:py-24 px-6 bg-[#faf8f4]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-4">
                {aboutData.faq?.title || "Frequently Asked Questions"}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {aboutData.faq?.subtitle ||
                  "Quick answers to the most common questions about MBBS abroad with EDU HAWK"}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
              {/* FAQ List */}
              <div className="w-full lg:w-3/5 space-y-5">
                {(aboutData.faq?.items || []).map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg md:text-xl font-semibold text-[#0a2342] pr-4">
                        {item.question}
                      </span>
                      <span className="text-3xl font-light text-[#d4a853] flex-shrink-0">
                        {openFaqIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`px-6 md:px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                        openFaqIndex === index
                          ? "max-h-96 py-5 opacity-100"
                          : "max-h-0 py-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image + Tagline */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-6">
                <img
                  src={aboutData.faq?.sidebarImage || imageAbout2}
                  loading="lazy"
                  width={612}
                  height={408}
                  alt="MBBS abroad service illustration"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                  srcSet={`${imageAbout2} 1x, ${imageAbout2} 2x`}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <h3 className="text-2xl md:text-2xl lg:text-2xl font-serif font-bold tracking-tight text-indigo-800 text-center lg:text-left whitespace-pre-line">
                  {aboutData.faq?.sidebarHeading ||
                    "Where Dreams Take Flight:\nCollege Counseling Done Right"}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
