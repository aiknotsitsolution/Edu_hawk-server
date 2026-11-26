import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Eduhawk from "../assets/Eduhawk.webp";
import { FaWhatsapp, FaHandshake, FaSearchDollar, FaPlaneDeparture } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  X,
  User,
  Mail,
  Phone,
  Globe,
  GraduationCap,
  Award,
  Plane,
  Calendar,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

const EMPTY_MODAL_FORM = {
  name: "",
  email: "",
  phone: "",
  course: "",
  country: "",
  intake: "",
  qualification: "",
  message: "",
};

const MODAL_COURSES = [
  "MBBS / Medicine",
  "Engineering / B.Tech",
  "Nursing",
  "MBA / Management",
  "Masters / MS",
  "Pharmacy",
  "Physiotherapy",
  "Public Health",
  "Computer Science / IT",
  "Law",
  "Architecture",
  "Other Course",
];

const MODAL_COUNTRIES = [
  "Australia",
  "Canada",
  "United Kingdom (UK)",
  "United States (USA)",
  "Germany",
  "Ireland",
  "Russia",
  "Georgia",
  "Kazakhstan",
  "Kyrgyzstan",
  "Uzbekistan",
  "Philippines",
  "Other Country",
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

export default function LeadModal({ isOpen, onClose }) {
  const [modalForm, setModalForm] = useState(EMPTY_MODAL_FORM);
  const [modalErrors, setModalErrors] = useState({});
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);
  const [preferredContact, setPreferredContact] = useState("whatsapp");
  const [consentGiven, setConsentGiven] = useState(false);

  if (!isOpen) return null;

  const validateModalForm = (form) => {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Full name is required.";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      errors.phone = "Phone number must be 10 digits.";
    }

    if (!form.course) errors.course = "Please select your interested course.";
    if (!form.country) errors.country = "Please select your destination country.";

    if (!consentGiven) {
      errors.consent = "Please authorize contact to receive your university shortlist.";
    }

    return errors;
  };

  const updateModalField = (field, value) => {
    setModalForm((prev) => ({ ...prev, [field]: value }));
    setModalErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const submitToApi = async (payload) => {
    const res = await fetch("https://api.eduhawk.in/api/query/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.json();
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    const errors = validateModalForm(modalForm);
    setModalErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Please fill in required fields and accept consent.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    setIsModalSubmitting(true);
    try {
      const payload = {
        name: modalForm.name,
        email: modalForm.email,
        phone: modalForm.phone,
        country: modalForm.country,
        interested: modalForm.course,
        course: modalForm.course,
        intake: modalForm.intake,
        qualification: modalForm.qualification,
        message: [
          `Interested Course: ${modalForm.course}`,
          `Destination Country: ${modalForm.country}`,
          `Preferred Follow-up: ${preferredContact === "whatsapp" ? "WhatsApp" : "Phone Call"}`,
          modalForm.intake ? `Preferred Intake: ${modalForm.intake}` : null,
          modalForm.qualification
            ? `Current Qualification: ${modalForm.qualification}`
            : null,
          modalForm.message ? `Message: ${modalForm.message}` : null,
          `DPDP/TRAI Consent: Granted on ${new Date().toISOString()}`,
        ]
          .filter(Boolean)
          .join("\n"),
      };
      const data = await submitToApi(payload);
      if (data.success) {
        toast.success("Form Submitted Successfully! Our counsellors will match your universities shortly.", {
          position: "top-center",
          autoClose: 4500,
        });
        setModalForm(EMPTY_MODAL_FORM);
        setModalErrors({});
        setConsentGiven(false);
        setShowOptionalFields(false);
        onClose();
      } else {
        toast.error(data.message || "Submission failed. Please try again.", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please check your connection and try again.", {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setIsModalSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-4 md:p-6 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-[980px] min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] max-h-[96vh] sm:max-h-[94vh] rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row border-0 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 shadow-xs transition-all duration-200 cursor-pointer"
          aria-label="Close"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* LEFT – Modern Minimal Brand & Trust Panel */}
        <div className="relative lg:w-[44%] bg-gradient-to-br from-[#061933] via-[#092244] to-[#041122] text-white pt-6 pb-12 px-6 sm:pt-7 sm:pb-14 sm:px-8 lg:pt-7 lg:pb-16 lg:px-9 flex flex-col justify-start hidden lg:flex overflow-hidden flex-shrink-0 border-r border-slate-100">
          {/* Subtle Ambient Mesh Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-start">
            {/* Logo in Solid White Card - Centered with prominent bottom spacing */}
            <div className="flex justify-center mb-10 sm:mb-12">
              <div className="rounded-2xl bg-white px-5 py-2.5 sm:py-3 shadow-xl inline-flex items-center justify-center">
                <img
                  src={Eduhawk}
                  alt="Edu-Hawk Worldwide"
                  width={280}
                  height={80}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Outcome-Focused Headline with generous bottom gap & larger prominent font */}
            <div className="mb-6 sm:mb-7">
              <h2 className="text-[26px] sm:text-[29px] lg:text-[31px] font-black text-white leading-tight tracking-tight drop-shadow-sm">
                Find Your Ideal University, Course &amp; Budget
              </h2>
            </div>

            {/* Clean Callout Hook with generous bottom gap */}
            <div className="border-l-4 border-teal-400 bg-white/10 backdrop-blur-md pl-4 py-2.5 rounded-r-lg mb-8 sm:mb-10 text-[13px] sm:text-sm text-slate-100 font-medium leading-relaxed">
              Compare tuition fees, scholarships &amp; post-study work visas across 15+ countries.
            </div>

            {/* 4 Feature Bullet Points - Original text with clean White Silhouette Icons */}
            <ul className="space-y-4 sm:space-y-4.5 text-[13px] sm:text-sm font-semibold text-white">
              <li className="flex items-center gap-3.5">
                <span className="w-7 flex items-center justify-center text-white shrink-0">
                  <BsPatchCheckFill size={22} className="text-white drop-shadow-xs" />
                </span>
                <span>Top Accredited Universities Worldwide</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="w-7 flex items-center justify-center text-white shrink-0">
                  <FaSearchDollar size={21} className="text-white drop-shadow-xs" />
                </span>
                <span>100% Transparent Fee &amp; Scholarship Match</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="w-7 flex items-center justify-center text-white shrink-0">
                  <FaHandshake size={22} className="text-white drop-shadow-xs" />
                </span>
                <span>Fast-Track Admission &amp; Visa Support</span>
              </li>
              <li className="flex items-center gap-3.5">
                <span className="w-7 flex items-center justify-center text-white shrink-0">
                  <FaPlaneDeparture size={21} className="text-white drop-shadow-xs" />
                </span>
                <span>Pre-departure Guidance &amp; Forex Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Header Banner */}
        <div className="lg:hidden bg-gradient-to-r from-[#071d38] to-[#0c4077] text-white p-5 pr-14 shrink-0 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
            Find Your Ideal University &amp; Budget
          </h3>
          <p className="text-slate-200 text-xs mt-1">
            Compare tuition fees, scholarships &amp; work visas across 15+ countries.
          </p>
        </div>

        {/* RIGHT – Form */}
        <div className="flex-1 overflow-y-auto modal-no-scrollbar px-6 py-6 sm:px-9 sm:py-8 lg:px-10 lg:py-9 flex flex-col justify-center bg-white">
          <form onSubmit={handleModalSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs sm:text-[13px] font-bold text-slate-700 mb-1.5">
                  Full Name <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative group">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={modalForm.name}
                    onChange={(e) => updateModalField("name", e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border-2 border-slate-300/90 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 outline-none font-medium"
                  />
                </div>
                {modalErrors.name && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{modalErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs sm:text-[13px] font-bold text-slate-700 mb-1.5">
                  Email Address <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative group">
                  <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    placeholder="your.email@gmail.com"
                    value={modalForm.email}
                    onChange={(e) => updateModalField("email", e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border-2 border-slate-300/90 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 outline-none font-medium"
                  />
                </div>
                {modalErrors.email && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{modalErrors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone Number (+91) */}
            <div>
              <label htmlFor="modal-phone" className="block text-xs sm:text-[13px] font-bold text-slate-700 mb-1.5">
                Phone Number (+91) <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="relative group">
                <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit mobile number"
                  value={modalForm.phone}
                  onChange={(e) => updateModalField("phone", e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl border-2 border-slate-300/90 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 outline-none font-medium"
                />
              </div>
              {modalErrors.phone && (
                <p className="mt-1 text-xs text-red-600 font-medium">{modalErrors.phone}</p>
              )}
            </div>

            {/* Row 3: Interested Course & Destination Country (2-Column Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label htmlFor="modal-course" className="block text-xs sm:text-[13px] font-bold text-slate-700 mb-1.5">
                  Interested Course <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative group">
                  <GraduationCap size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <select
                    id="modal-course"
                    name="course"
                    value={modalForm.course}
                    onChange={(e) => updateModalField("course", e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-300/90 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-sm shadow-xs transition-all duration-200 hover:border-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 outline-none cursor-pointer font-medium"
                  >
                    <option value="" disabled className="text-slate-400 font-normal">
                      Select Course
                    </option>
                    {MODAL_COURSES.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                {modalErrors.course && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{modalErrors.course}</p>
                )}
              </div>

              <div>
                <label htmlFor="modal-country" className="block text-xs sm:text-[13px] font-bold text-slate-700 mb-1.5">
                  Destination Country <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative group">
                  <Globe size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <select
                    id="modal-country"
                    name="country"
                    value={modalForm.country}
                    onChange={(e) => updateModalField("country", e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-300/90 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-sm shadow-xs transition-all duration-200 hover:border-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 outline-none cursor-pointer font-medium"
                  >
                    <option value="" disabled className="text-slate-400 font-normal">
                      Select Country
                    </option>
                    {MODAL_COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                {modalErrors.country && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{modalErrors.country}</p>
                )}
              </div>
            </div>

            {/* Bottom Options: WhatsApp Preference & DPDP/TRAI Consent (Grouped above Submit) */}
            <div className="space-y-2.5 pt-2">
              {/* Checkbox 1: WhatsApp Contact Preference */}
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={preferredContact === "whatsapp"}
                  onChange={(e) => setPreferredContact(e.target.checked ? "whatsapp" : "call")}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer accent-teal-600 shrink-0"
                />
                <span className="text-xs sm:text-[13px] text-slate-700 flex items-center gap-1.5 font-medium">
                  <FaWhatsapp className="text-emerald-600 shrink-0" size={15} />
                  <span>Contact me on WhatsApp instead of calling</span>
                </span>
              </label>

              {/* Checkbox 2: DPDP Act & TRAI DND Compliance Checkbox (Unticked by default) */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => {
                      setConsentGiven(e.target.checked);
                      if (e.target.checked) setModalErrors((prev) => ({ ...prev, consent: "" }));
                    }}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 shrink-0 cursor-pointer accent-teal-600"
                  />
                  <span className="leading-snug text-[11px] sm:text-xs text-slate-600">
                    I agree to receive Call, WhatsApp &amp; SMS updates from Edu-Hawk and accept the{" "}
                    <Link
                      to="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-teal-700 hover:text-teal-900 font-medium"
                    >
                      Privacy Policy
                    </Link>{" "}
                    &amp;{" "}
                    <Link
                      to="/terms-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-teal-700 hover:text-teal-900 font-medium"
                    >
                      Terms
                    </Link>.
                  </span>
                </label>
                {modalErrors.consent && (
                  <p className="mt-1 text-xs text-red-600 font-medium flex items-center gap-1">
                    <span>*</span> {modalErrors.consent}
                  </p>
                )}
              </div>
            </div>

            {/* Value-Driven CTA Button */}
            <button
              type="submit"
              disabled={isModalSubmitting}
              className={`group relative w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white shadow-lg transition-all duration-300 mt-2 flex items-center justify-center gap-2 overflow-hidden ${
                isModalSubmitting
                  ? "bg-slate-400 cursor-not-allowed opacity-75"
                  : "bg-gradient-to-r from-teal-600 via-teal-700 to-[#0a2342] hover:from-teal-500 hover:via-teal-600 hover:to-[#071d38] shadow-teal-900/20 hover:shadow-teal-600/30 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {isModalSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Matching Universities...
                  </>
                ) : (
                  <>
                    <span>Get My Free Course &amp; Country Match</span>
                    <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>

            {/* Micro-Social Proof Trust Strip */}
            <div className="pt-1.5 text-center">
              <div className="inline-flex items-center justify-center gap-2 text-[10.5px] sm:text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/90 rounded-full px-3.5 py-1 shadow-2xs">
                <span className="text-amber-500 font-bold">★ 4.8/5</span>
                <span className="text-slate-300">•</span>
                <span>1,200+ Students Guided</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-medium">Avg. Response: 10 mins</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 flex items-center justify-center gap-1">
                <ShieldCheck size={12} className="text-emerald-600 inline" />
                <span>100% Free &amp; Confidential • Zero Spam Guarantee</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
