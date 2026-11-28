import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import personalized from "../assets/personalized.webp";
import support from "../assets/support.webp";
import checkup from "../assets/checkup.webp";
import charges from "../assets/charges.webp";
import Eduhawk from "../assets/Eduhawk.webp";
import heroAbroad1 from "../Images/hero/study-abroad-hero-1.webp";
import heroAbroad2 from "../Images/hero/study-abroad-hero-2.webp";
import heroAbroad3 from "../Images/hero/study-abroad-hero-3.webp";
import heroAbroad4 from "../Images/hero/study-abroad-hero-4.webp";
import globalDreamsArtwork from "../assets/global-dreams-natural.webp";
import {
  X,
  ChevronDown,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Globe,
  ArrowRight,
  Star,
  Award,
  CheckCircle2,
  MessageCircle,
  Calendar,
  MessageSquare,
  Plane,
  BookOpen,
  ShieldCheck,
  Compass,
  DollarSign,
  Clock,
  HelpCircle,
  FileText,
  Users
} from "lucide-react";

import studyAbroadAbout from "../Images/home_page_Image/study-abroad-about.webp";
import { Link } from "react-router-dom";
import SeoHead from "../component/SeoHead.jsx";
import LeadModal from "../component/LeadModal.jsx";
import homeData from "../data/home.json";

const STATIC_HERO_IMAGES = [heroAbroad1, heroAbroad2, heroAbroad3, heroAbroad4];
const CMS_HERO_IMAGES = (homeData.heroSlides && homeData.heroSlides.map(s => s.image).filter(Boolean)) || [];
const HERO_SLIDE_IMAGES = CMS_HERO_IMAGES.length > 0 ? CMS_HERO_IMAGES : STATIC_HERO_IMAGES;

const ROTATING_HEADINGS = (homeData.hero && homeData.hero.sliderHeadings) || [
  "Your Future Has No Borders.",
  "Learn Globally. Grow Beyond Limits.",
  "Find Your Course. Choose Your Country. Shape Your Future.",
  "Your Dream University Starts With the Right Guidance."
];

const CONTACT_COUNTRY_OPTIONS = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "France", flag: "🇫🇷" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Mauritius", flag: "🇲🇺" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Uzbekistan", flag: "🇺🇿" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Kyrgyzstan", flag: "🇰🇬" },
  { name: "Nepal", flag: "🇳🇵" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Other", flag: "🌍" },
];

const MODAL_INTAKES = [
  "August-September",
  "January-February",
  "May-July",
];

const MODAL_QUALIFICATIONS = [
  "10th / High School",
  "12th Appearing",
  "12th Passed",
  "Diploma",
  "Bachelor's / Undergraduate",
  "Master's / Postgraduate",
  "Other",
];

const CountryFlag = ({ name, className = "w-full h-full object-cover" }) => {
  switch (name) {
    case "USA":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#B22234" />
          <path d="M0 6.15h60M0 12.3h60M0 18.46h60M0 24.61h60M0 30.76h60M0 36.92h60" stroke="#fff" strokeWidth="3.07" />
          <rect width="25" height="21.5" fill="#3C3B6E" />
          <circle cx="5" cy="5.5" r="1.3" fill="#fff" />
          <circle cx="12.5" cy="5.5" r="1.3" fill="#fff" />
          <circle cx="20" cy="5.5" r="1.3" fill="#fff" />
          <circle cx="8.5" cy="11" r="1.3" fill="#fff" />
          <circle cx="16.5" cy="11" r="1.3" fill="#fff" />
          <circle cx="5" cy="16.5" r="1.3" fill="#fff" />
          <circle cx="12.5" cy="16.5" r="1.3" fill="#fff" />
          <circle cx="20" cy="16.5" r="1.3" fill="#fff" />
        </svg>
      );
    case "UK":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
          <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
          <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
        </svg>
      );
    case "Canada":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="15" height="40" fill="#D80621" />
          <rect x="15" width="30" height="40" fill="#fff" />
          <rect x="45" width="15" height="40" fill="#D80621" />
          <path d="M30 8l2.2 4.8 4.2-1.2-1.8 4 3.8 2-3 2.5.8 4.5-4-2.2-2.2 6.6-2.2-6.6-4 2.2.8-4.5-3-2.5 3.8-2-1.8-4 4.2 1.2z" fill="#D80621" />
        </svg>
      );
    case "Australia":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#00008B" />
          <rect width="25" height="17" fill="#012169" />
          <path d="M0 0L25 17M25 0L0 17" stroke="#fff" strokeWidth="3" />
          <path d="M0 0L25 17M25 0L0 17" stroke="#C8102E" strokeWidth="1.5" />
          <path d="M12.5 0v17M0 8.5h25" stroke="#fff" strokeWidth="5" />
          <path d="M12.5 0v17M0 8.5h25" stroke="#C8102E" strokeWidth="3" />
          <circle cx="12.5" cy="28" r="3.5" fill="#fff" />
          <circle cx="45" cy="10" r="1.5" fill="#fff" />
          <circle cx="38" cy="18" r="1.5" fill="#fff" />
          <circle cx="48" cy="24" r="1.5" fill="#fff" />
          <circle cx="43" cy="32" r="1.8" fill="#fff" />
          <circle cx="48" cy="17" r="1" fill="#fff" />
        </svg>
      );
    case "Germany":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="13.33" fill="#000" />
          <rect y="13.33" width="60" height="13.34" fill="#DD0000" />
          <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
        </svg>
      );
    case "Italy":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="20" height="40" fill="#009246" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#CE2B37" />
        </svg>
      );
    case "France":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="20" height="40" fill="#002395" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#ED2939" />
        </svg>
      );
    case "Ireland":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="20" height="40" fill="#169B62" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#FF883E" />
        </svg>
      );
    case "Finland":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#fff" />
          <rect x="18" width="9" height="40" fill="#003580" />
          <rect y="15.5" width="60" height="9" fill="#003580" />
        </svg>
      );
    case "Switzerland":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#D52B1E" />
          <rect x="25" y="10" width="10" height="20" fill="#fff" />
          <rect x="18" y="15" width="24" height="10" fill="#fff" />
        </svg>
      );
    case "Sweden":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#006AA7" />
          <rect x="18" width="8" height="40" fill="#FECC00" />
          <rect y="16" width="60" height="8" fill="#FECC00" />
        </svg>
      );
    case "Denmark":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#C60C30" />
          <rect x="18" width="7" height="40" fill="#fff" />
          <rect y="16.5" width="60" height="7" fill="#fff" />
        </svg>
      );
    case "Spain":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="10" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
          <rect y="30" width="60" height="10" fill="#AA151B" />
          <circle cx="16" cy="20" r="4.5" fill="#AA151B" opacity="0.85" />
        </svg>
      );
    case "Mauritius":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="10" fill="#EA2839" />
          <rect y="10" width="60" height="10" fill="#1A2061" />
          <rect y="20" width="60" height="10" fill="#FFD700" />
          <rect y="30" width="60" height="10" fill="#00A551" />
        </svg>
      );
    case "Russia":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="13.33" fill="#fff" />
          <rect y="13.33" width="60" height="13.34" fill="#0039A6" />
          <rect y="26.67" width="60" height="13.33" fill="#D52B1E" />
        </svg>
      );
    case "Bangladesh":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#006A4E" />
          <circle cx="27" cy="20" r="10" fill="#F42A41" />
        </svg>
      );
    case "Nepal":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#003893" />
          <path d="M12 4v32l24-16-16-16z" fill="#DC143C" />
          <circle cx="20" cy="20" r="4" fill="#fff" />
        </svg>
      );
    case "Kazakhstan":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#00AFCA" />
          <circle cx="30" cy="18" r="6" fill="#FECB00" />
          <path d="M22 25c4-2 12-2 16 0-3 2-13 2-16 0z" fill="#FECB00" />
        </svg>
      );
    case "Kyrgyzstan":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#E8112D" />
          <circle cx="30" cy="20" r="8" fill="#FFE000" />
          <circle cx="30" cy="20" r="5" fill="#E8112D" />
        </svg>
      );
    case "Uzbekistan":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="13" fill="#0099B5" />
          <rect y="13" width="60" height="1" fill="#CE1126" />
          <rect y="14" width="60" height="12" fill="#fff" />
          <rect y="26" width="60" height="1" fill="#CE1126" />
          <rect y="27" width="60" height="13" fill="#1EB53A" />
          <circle cx="10" cy="7" r="3.5" fill="#fff" />
          <circle cx="11.5" cy="7" r="3" fill="#0099B5" />
        </svg>
      );
    case "Tajikistan":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="12" fill="#CC0000" />
          <rect y="12" width="60" height="16" fill="#fff" />
          <rect y="28" width="60" height="12" fill="#006600" />
          <circle cx="30" cy="20" r="4" fill="#F8C300" />
        </svg>
      );
    case "Egypt":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="13.33" fill="#CE1126" />
          <rect y="13.33" width="60" height="13.34" fill="#fff" />
          <rect y="26.67" width="60" height="13.33" fill="#000" />
          <circle cx="30" cy="20" r="3.5" fill="#C09300" />
        </svg>
      );
    case "Georgia":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#fff" />
          <rect x="25" width="10" height="40" fill="#FF0000" />
          <rect y="15" width="60" height="10" fill="#FF0000" />
          <path d="M11 6h3v6h-3zM9.5 7.5h6v3h-6zM46 6h3v6h-3zM44.5 7.5h6v3h-6zM11 28h3v6h-3zM9.5 29.5h6v3h-6zM46 28h3v6h-3zM44.5 29.5h6v3h-6z" fill="#FF0000" />
        </svg>
      );
    case "Vietnam":
      return (
        <svg viewBox="0 0 60 40" className={className}>
          <rect width="60" height="40" fill="#DA251D" />
          <polygon points="30,8 33.5,19 45,19 35.8,25.8 39.3,37 30,30.2 20.7,37 24.2,25.8 15,19 26.5,19" fill="#FFFF00" />
        </svg>
      );
    default:
      return (
        <span className="text-xl">🌍</span>
      );
  }
};

const EMPTY_CONTACT_FORM = {
  name: "",
  email: "",
  phone: "",
  course: "",
  country: "",
  intake: "",
  message: "",
};

export default function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [contactForm, setContactForm] = useState(EMPTY_CONTACT_FORM);
  const [contactErrors, setContactErrors] = useState({});
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeDestinationTab, setActiveDestinationTab] = useState("studyAbroad");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === "#destinations") {
        setTimeout(() => {
          const el = document.getElementById("destinations");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const showSuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 4500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const showError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const submitToApi = async (payload) => {
    const res = await fetch("https://api.eduhawk.in/api/query/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.json();
  };

  const validateContactForm = (form) => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Full Name is required.";
    else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

    if (!form.email.trim()) errors.email = "Email Address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";

    if (!form.phone.trim()) errors.phone = "Phone Number is required.";
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) errors.phone = "Phone number must be 10 digits.";

    if (!form.course.trim()) errors.course = "Please specify your Interested Course.";
    if (!form.country) errors.country = "Please select your Preferred Destination.";
    if (!form.message.trim()) errors.message = "Please tell us about your plans.";
    else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";

    return errors;
  };

  const updateContactField = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    setContactErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const errors = validateContactForm(contactForm);
    setContactErrors(errors);

    if (Object.keys(errors).length > 0) {
      showError("Please fill in all required fields correctly.");
      return;
    }

    setIsContactSubmitting(true);
    try {
      const payload = {
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        country: contactForm.country,
        course: contactForm.course,
        interested: contactForm.course,
        intake: contactForm.intake,
        message: [
          `Interested Course: ${contactForm.course}`,
          `Preferred Destination: ${contactForm.country}`,
          contactForm.intake ? `Preferred Intake: ${contactForm.intake}` : null,
          `Plans/Message: ${contactForm.message}`,
        ].filter(Boolean).join("\n"),
      };
      const data = await submitToApi(payload);
      if (data.success) {
        showSuccess("Enquiry submitted successfully! Our expert advisors will reach out shortly.");
        setContactForm(EMPTY_CONTACT_FORM);
        setContactErrors({});
      } else {
        showError(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      showError("Something went wrong. Please try again later.");
    } finally {
      setIsContactSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % ROTATING_HEADINGS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const seo = homeData.seo || {
    title: "Study Abroad Consultants | Edu-Hawk Worldwide",
    description: "Edu-Hawk Worldwide offers expert study abroad counselling, university selection, admissions, visa and pre-departure support for MBBS, engineering, MBA and more."
  };

  const stats = homeData.stats || [];
  const about = homeData.about || {};
  const studyPrograms = homeData.studyPrograms || {};
  const studyDestinations = homeData.studyDestinations || {};
  const whyChoose = homeData.whyChoose || {};
  const howItWorks = homeData.howItWorks || {};
  const ourServices = homeData.ourServices || {};
  const scholarships = homeData.scholarships || {};
  const promo = homeData.promo || {};
  const faqs = homeData.faq || [];
  const cta = homeData.cta || {};
  const contact = homeData.contact || {};

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        keywords="study abroad, global education, study abroad consultants, overseas education, international universities, study abroad courses, admissions assistance, student visa, scholarships abroad"
        path="/"
        ogType="website"
      >
        <link rel="preload" as="image" href={HERO_SLIDE_IMAGES[0] || heroAbroad1} fetchPriority="high" />
      </SeoHead>

      <div className="min-h-screen bg-white font-sans overflow-x-hidden w-full text-slate-900">
        <ToastContainer />

        {/* COMPLIANT LEAD CAPTURE MODAL */}
        <LeadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        

        {/* 1. HERO SECTION */}
        <section className="relative">
          <div className="relative w-full min-h-[640px] sm:min-h-[580px] lg:h-[80vh] lg:min-h-[590px] lg:max-h-[680px] overflow-hidden">
            {HERO_SLIDE_IMAGES.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroSlide % HERO_SLIDE_IMAGES.length ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={img}
                  alt="Study Abroad with Edu-Hawk Worldwide"
                  width={1920}
                  height={1281}
                  sizes="100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d38]/85 via-black/50 to-black/30" />
              </div>
            ))}

            <div className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-10 pt-2 sm:pt-4 md:pt-6 pb-20 sm:pb-16 lg:pb-20">
              <div className="text-center max-w-5xl mx-auto">
                {/* Primary Keyword-Rich H1 */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-2 sm:mb-3 drop-shadow-md">
                  Study Abroad Consultants for MBBS, Engineering, MBA &amp; More
                </h1>

                {/* Rotating Headings Subline */}
                <p className="text-[#ffd06a] text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 drop-shadow-md">
                  {ROTATING_HEADINGS[currentHeroSlide % ROTATING_HEADINGS.length]}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white font-medium mb-5 md:mb-6 max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
                  Explore international universities, discover courses that match your ambitions, and take the next step towards a global career with expert guidance from Edu-Hawk Worldwide.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <Link
                    to="/study-abroad"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Explore Study Destinations</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Get Free Counselling</span>
                    
                  </Link>
                </div>

                {/* Slider Indicators - Integrated in content flow */}
                <div className="flex justify-center gap-2.5 z-30 pointer-events-auto">
                  {ROTATING_HEADINGS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => setCurrentHeroSlide(i)}
                      className={`h-2 rounded-full transition-all duration-400 shadow-md cursor-pointer ${
                        i === currentHeroSlide % ROTATING_HEADINGS.length
                          ? "w-8 bg-[#d4a853] ring-2 ring-[#d4a853]/60"
                          : "w-2 bg-white/60 hover:bg-white/90"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS SECTION & 10. PROMOTIONAL SECTION */}
        <section className="bg-gradient-to-br from-[#0a2342] via-[#1a4a7a] to-[#0d3460] pt-0 pb-16 md:pb-24 px-5 sm:px-8 lg:px-12 text-center relative overflow-visible">
          {/* FLOATING STATS CARD */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -translate-y-6 sm:-translate-y-1/2 -mb-6 sm:-mb-16 md:-mb-20">
            <div className="bg-white border border-[#d4a853]/30 rounded-2xl sm:rounded-3xl shadow-2xl py-6 px-4 sm:py-6 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((s, i) => {
                const isLongText = (s.n || "").length > 6;
                return (
                  <div key={i} className="flex flex-col items-center justify-start text-center p-2 group">
                    <div className={`h-10 sm:h-12 flex items-center justify-center font-black text-[#d4a853] tracking-tight leading-tight group-hover:scale-105 transition-transform ${
                      isLongText
                        ? "text-sm sm:text-lg lg:text-xl font-extrabold whitespace-nowrap sm:whitespace-normal"
                        : "text-2xl sm:text-3xl lg:text-4xl"
                    }`}>
                      {s.n}
                    </div>
                    <div className="text-[#0a2342] font-bold text-xs sm:text-sm uppercase tracking-wider mt-2">
                      {s.l}
                    </div>
                    {s.sub && (
                      <div className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug max-w-[200px]">
                        {s.sub}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-5xl mx-auto relative pt-1 sm:pt-3">
            <p className="text-[#d4a853] uppercase tracking-wider text-xs sm:text-sm font-semibold mb-4">
              Direction That Shapes Global Careers
            </p>

            {/* 10. Replace medical-only promotional section */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 md:mb-6">
              {promo.title || "Your Future Deserves the Right Direction"}
            </h2>

            <div className="space-y-4 text-white/85 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed">
              {(promo.paragraphs || [
                "Every student has a unique dream, and every dream deserves a plan. Whether you want to pursue medicine, technology, business, science, or a specialized professional degree, the right course and university can help shape your future.",
                "At Edu-Hawk Worldwide, we help you make informed decisions through personalized counselling, university guidance, and step-by-step assistance for international admissions."
              ]).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-block bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
              >
                Start Your Journey →
              </button>

              <Link
                to="/contact"
                className="inline-flex justify-center items-center border-2 border-[#d4a853]/60 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#d4a853]/10 hover:border-[#d4a853] transition-all duration-300 text-xs sm:text-sm"
              >
                Talk to a Counsellor
              </Link>
            </div>
          </div>
        </section>

        {/* 3. ABOUT SECTION */}
        <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-10 bg-[#faf8f4]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="w-14 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mb-4 h-1" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs font-bold mb-2">
                {about.tag || "WHO WE ARE"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2342] leading-tight mb-5">
                {about.title || "Your Trusted Partner for Global Education"}
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {(about.paragraphs || [
                  "Edu-Hawk Worldwide helps students explore international education opportunities and make informed decisions about their academic and career futures.",
                  "We believe every student deserves the opportunity to access quality education, explore new cultures, and build a career without borders. Our experienced counselors provide personalized guidance based on your academic profile, interests, career goals, budget, and preferred destination.",
                  "From selecting the right course and university to application assistance and visa guidance, we simplify the process of studying abroad at every step."
                ]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#0a2342] text-white hover:bg-[#143765] font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-md"
                >
                  <span>Discover Edu-Hawk</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={homeData?.about?.image || studyAbroadAbout}
                  alt="Edu-Hawk Global Education Students"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3.5 sm:p-4 rounded-xl shadow-lg border border-[#d4a853]/30 max-w-[245px] hidden sm:block">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#d4a853]/20 flex items-center justify-center text-[#0a2342] shrink-0">
                    <ShieldCheck size={18} className="text-[#d4a853]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a2342] text-xs sm:text-[13px] leading-tight">Trusted &amp; Transparent</div>
                    <div className="text-slate-500 text-[10.5px]">Zero Hidden Charges</div>
                  </div>
                </div>
                <p className="text-slate-600 text-[11px] leading-snug">
                  Personalized roadmap from initial course shortlisting to post-arrival settlement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STUDY PROGRAMS SECTION */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                {studyPrograms.tag || "EXPLORE YOUR OPTIONS"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4">
                {studyPrograms.title || "Find the Course That Matches Your Ambition"}
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                {studyPrograms.description || "Whether you're planning your undergraduate studies, pursuing a professional degree, or advancing your qualifications with a postgraduate program, explore international opportunities across diverse academic fields."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {(studyPrograms.programs || []).map((prog, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#d4a853]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a2342] to-[#1a4a7a] text-[#d4a853] flex items-center justify-center font-bold text-lg mb-5 shadow-md shrink-0">
                      {index === 0 && <Award size={24} />}
                      {index === 1 && <GraduationCap size={24} />}
                      {index === 2 && <Users size={24} />}
                      {index === 3 && <Compass size={24} />}
                      {index === 4 && <BookOpen size={24} />}
                      {index === 5 && <Globe size={24} />}
                    </div>

                    <h3 className="text-xl font-bold text-[#0a2342] mb-3 min-h-[56px] flex items-start">
                      <Link to={prog.link || "/study-abroad"} className="hover:text-[#d4a853] transition-colors">
                        {prog.name}
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {prog.description}
                    </p>
                  </div>

                  <Link
                    to={prog.link || "/study-abroad"}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a2342] hover:text-[#d4a853] transition-colors mt-auto pt-2"
                  >
                    <span>View Opportunities</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/study-abroad"
                className="inline-flex items-center justify-center gap-2 bg-[#0a2342] hover:bg-[#153b6d] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider"
              >
                <span>Explore All Courses</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. STUDY DESTINATIONS SECTION */}
        <section id="destinations" className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-[#f8fafc] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                {studyDestinations.tag || "EXPLORE THE WORLD"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4">
                {studyDestinations.title || "Choose Your Destination. Discover New Possibilities."}
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                {studyDestinations.description || "Explore education opportunities across leading study destinations. Compare universities, courses, tuition fees, admission requirements, and career pathways to find the country that fits your goals."}
              </p>

              {/* Destination Tabs */}
              <div className="flex justify-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => setActiveDestinationTab("studyAbroad")}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeDestinationTab === "studyAbroad"
                      ? "bg-[#0a2342] text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Global Study Destinations (14)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDestinationTab("medicalAbroad")}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeDestinationTab === "medicalAbroad"
                      ? "bg-[#0a2342] text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Medical / MBBS Destinations (11)
                </button>
              </div>
            </div>

            {/* TAB CONTENT */}
            {activeDestinationTab === "studyAbroad" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {(studyDestinations.popularDestinations || []).map((country, index) => (
                  <Link
                    key={index}
                    to={country.path || `/study-abroad/${country.code}/ug/computer-engineering`}
                    className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#d4a853] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center group"
                  >
                    <div className="w-10 h-7 rounded-sm overflow-hidden flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-xs border border-slate-200">
                      <CountryFlag name={country.name} />
                    </div>
                    <span className="font-bold text-sm text-[#0a2342] group-hover:text-[#d4a853] transition-colors">
                      {country.name}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5">Explore Programs →</span>
                  </Link>
                ))}
              </div>
            )}

            {activeDestinationTab === "medicalAbroad" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {(studyDestinations.medicalDestinations || []).map((country, index) => (
                  <Link
                    key={index}
                    to={country.path}
                    className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#d4a853] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center group"
                  >
                    <div className="w-10 h-7 rounded-sm overflow-hidden flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-xs border border-slate-200">
                      <CountryFlag name={country.name} />
                    </div>
                    <span className="font-bold text-sm text-[#0a2342] group-hover:text-[#d4a853] transition-colors">
                      {country.name}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5">MBBS Guide →</span>
                  </Link>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                to="/study-abroad"
                className="inline-flex items-center justify-center gap-2 bg-[#0a2342] hover:bg-[#153b6d] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider"
              >
                <span>Explore All Countries</span>
                <Globe size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE EDU-HAWK? */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                {whyChoose.tag || "THE EDU-HAWK ADVANTAGE"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4">
                {whyChoose.title || "Guidance That Goes Beyond Admissions"}
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                {whyChoose.description || "Choosing to study abroad is a big decision. We're here to make it easier with personalized guidance, transparent information, and reliable support throughout your journey."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {(whyChoose.features || []).map((f, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-xl hover:border-[#d4a853]/60 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0a2342] text-[#d4a853] flex items-center justify-center mb-5 shadow-xs shrink-0">
                      {i === 0 && <Users size={22} />}
                      {i === 1 && <GraduationCap size={22} />}
                      {i === 2 && <FileText size={22} />}
                      {i === 3 && <Plane size={22} />}
                      {i === 4 && <ShieldCheck size={22} />}
                    </div>
                    <h3 className="font-bold text-lg text-[#0a2342] mb-2.5 min-h-[48px] flex items-start">
                      {f.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-gradient-to-br from-[#0a2342] via-[#10335e] to-[#0a2342] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                {howItWorks.tag || "YOUR JOURNEY IN 5 STEPS"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                {howItWorks.title || "From Dream to University"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {(howItWorks.steps || []).map((st, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 hover:bg-white/15 hover:border-[#d4a853]/50 transition-all duration-300 flex flex-col justify-start relative group"
                >
                  <div className="text-3xl font-black text-[#d4a853] mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug min-h-[44px] flex items-start">
                    {st.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. OUR SERVICES SECTION */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                {ourServices.tag || "COMPLETE OVERSEAS EDUCATION SUPPORT"}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4">
                {ourServices.title || "Everything You Need to Move Forward"}
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                {ourServices.description || "We help simplify the international education journey with support designed around the needs of students and parents."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(ourServices.services || []).map((srv, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#d4a853]/60 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d4a853]/20 flex items-center justify-center text-[#0a2342] font-bold mb-4">
                    <CheckCircle2 size={20} className="text-[#d4a853]" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0a2342] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SCHOLARSHIPS SECTION */}
        <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 bg-[#faf8f4] border-y border-[#d4a853]/20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a853]/15 text-[#0a2342] text-xs font-bold uppercase tracking-wider mb-4">
              <DollarSign size={14} className="text-[#d4a853]" />
              <span>{scholarships.tag || "MAKE GLOBAL EDUCATION MORE ACCESSIBLE"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2342] mb-5">
              {scholarships.title || "Explore Scholarship Opportunities"}
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-4">
              {scholarships.description || "Your academic ambitions shouldn't be limited by uncertainty about finances. Explore university scholarships, merit-based awards, country-specific funding, and other financial opportunities that may be available for your chosen program."}
            </p>

            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto mb-8 font-medium">
              {scholarships.subtext || "Our counselors help you understand scholarship eligibility, requirements, and application timelines."}
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>Explore Scholarship Guidance</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* 11. HOMEPAGE FAQS */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0a2342]">
                Everything You Need to Know About Studying Abroad
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((item, index) => {
                const isFaqOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/70 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isFaqOpen ? -1 : index)}
                      aria-expanded={isFaqOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left transition-all duration-300 hover:bg-white cursor-pointer"
                    >
                      <h4 className="font-bold text-[#0a2342] text-sm sm:text-base pr-4">
                        {item.question}
                      </h4>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0a2342] shadow-sm border border-slate-200 transition-all duration-300">
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isFaqOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isFaqOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA SECTION */}
        <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 bg-gradient-to-r from-[#0a2342] via-[#123866] to-[#0a2342] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              {cta.title || "Your Global Future Starts With One Conversation."}
            </h2>
            <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              {cta.description || "The right guidance can turn your international education dream into a clear plan. Connect with our experts and discover opportunities that match your ambitions."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
              >
                Get Free Counselling
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-xs sm:text-sm"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* 13. CONTACT SECTION */}
        <section className="py-20 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-4" />
              <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-bold mb-3">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4">
                {contact.title || "Let's Plan Your Future Abroad"}
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                {contact.description || "Have questions about courses, universities, countries, admissions, scholarships, or student visas? Our counselors are here to help you find the right direction."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition"
                      placeholder="Full Name"
                      value={contactForm.name}
                      onChange={(e) => updateContactField("name", e.target.value)}
                    />
                    {contactErrors.name && <p className="mt-1 text-[11px] text-red-500">{contactErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition"
                      placeholder="Email Address"
                      value={contactForm.email}
                      onChange={(e) => updateContactField("email", e.target.value)}
                    />
                    {contactErrors.email && <p className="mt-1 text-[11px] text-red-500">{contactErrors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition"
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => updateContactField("phone", e.target.value)}
                    />
                    {contactErrors.phone && <p className="mt-1 text-[11px] text-red-500">{contactErrors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-course" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                      Interested Course *
                    </label>
                    <input
                      id="contact-course"
                      type="text"
                      className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition"
                      placeholder="Interested Course (e.g. MBBS, CS, MBA)"
                      value={contactForm.course}
                      onChange={(e) => updateContactField("course", e.target.value)}
                    />
                    {contactErrors.course && <p className="mt-1 text-[11px] text-red-500">{contactErrors.course}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-country" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                      Preferred Destination *
                    </label>
                    <select
                      id="contact-country"
                      className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition"
                      value={contactForm.country}
                      onChange={(e) => updateContactField("country", e.target.value)}
                    >
                      <option value="">Select Preferred Destination</option>
                      {CONTACT_COUNTRY_OPTIONS.map((c, i) => (
                        <option key={i} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                    {contactErrors.country && <p className="mt-1 text-[11px] text-red-500">{contactErrors.country}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-intake" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                      Preferred Intake
                    </label>
                    <select
                      id="contact-intake"
                      className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition"
                      value={contactForm.intake}
                      onChange={(e) => updateContactField("intake", e.target.value)}
                    >
                      <option value="">Preferred Intake</option>
                      {MODAL_INTAKES.map((it, i) => (
                        <option key={i} value={it}>{it}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-slate-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                    Tell us about your plans *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-4 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] bg-slate-50 transition resize-y"
                    placeholder="Tell us about your plans"
                    value={contactForm.message}
                    onChange={(e) => updateContactField("message", e.target.value)}
                  />
                  {contactErrors.message && <p className="mt-1 text-[11px] text-red-500">{contactErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-xs cursor-pointer disabled:opacity-60"
                >
                  {isContactSubmitting ? "Submitting..." : (contact.button || "Submit Your Enquiry")}
                </button>
              </form>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone size={20} />,
                    title: "Phone",
                    detail: "+91 9630736070",
                    sub: "Mon–Sat, 9 AM – 7 PM",
                  },
                  {
                    icon: <Mail size={20} />,
                    title: "Email",
                    detail: "info@eduhawk.in",
                    sub: "We reply within 24 hours",
                  },
                  {
                    icon: <MapPin size={20} />,
                    title: "Office",
                    detail: "Bajrang House, N-5, next to Aakash Institute, South Extension I, Block N, New Delhi, Delhi 110003",
                    sub: "India, 110001",
                  },
                  {
                    icon: <Clock size={20} />,
                    title: "Office Hours",
                    detail: "Mon–Fri: 10 AM – 6 PM",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-5 bg-[#faf8f4] rounded-xl border border-[#e8d5b0]/70"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4a853] to-[#f0c070] rounded-xl flex items-center justify-center shrink-0 text-[#0a2342] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[#d4a853] text-[10px] uppercase tracking-widest font-bold mb-0.5">
                        {item.title}
                      </div>
                      <div className="font-bold text-[#0a2342] text-sm sm:text-base">
                        {item.detail}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MOBILE STICKY ACTION BAR */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center gap-2">
          <a
            href="tel:+919630736070"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300"
          >
            <Phone size={15} className="text-[#0a2342]" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919630736070?text=Hi%20EduHawk,%20I%20am%20interested%20in%20Study%20Abroad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-md"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4a853] to-[#e0b76b] text-[#0a2342] font-bold text-xs shadow-md cursor-pointer"
          >
            
            <span>Apply Free</span>
          </button>
        </div>
      </div>
    </>
  );
}
