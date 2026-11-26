import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Eduhawk from "../assets/Eduhawk.webp";
import globalDreamsArtwork from "../assets/global-dreams-natural.webp";
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
      toast.error("Please fill in all required fields correctly.", {
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
          modalForm.intake ? `Preferred Intake: ${modalForm.intake}` : null,
          modalForm.qualification
            ? `Current Qualification: ${modalForm.qualification}`
            : null,
          modalForm.message ? `Message: ${modalForm.message}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      };
      const data = await submitToApi(payload);
      if (data.success) {
        toast.success("Form Submitted Successfully! Our team will contact you soon.", {
          position: "top-center",
          autoClose: 4500,
        });
        setModalForm(EMPTY_MODAL_FORM);
        setModalErrors({});
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-[980px] max-h-[95vh] sm:max-h-[92vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row border-0 my-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-30 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 shadow-xs transition-all duration-200 cursor-pointer"
          aria-label="Close"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* LEFT – Atmospheric Card with Seamless Natural Background Artwork */}
        <div className="relative lg:w-[44%] bg-gradient-to-b from-[#002868] via-[#013788] to-[#014299] text-white p-5 sm:p-6 flex flex-col justify-between hidden lg:flex overflow-hidden flex-shrink-0">
          <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0">
            <img
              src={globalDreamsArtwork}
              alt="Global Dreams - Landmark Skies"
              className="w-full h-auto object-cover object-bottom"
            />
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-start">
            {/* Logo in Solid White Card for Maximum Clarity */}
            <div className="flex flex-col items-center text-center mb-2.5">
              <div className="rounded-2xl bg-white px-4 py-2 sm:px-5 sm:py-2.5 shadow-xl inline-flex items-center justify-center">
                <img
                  src={Eduhawk}
                  alt="Edu-Hawk Worldwide"
                  width={280}
                  height={80}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
              <p className="text-blue-100/95 text-xs sm:text-[13px] italic tracking-wide mt-2 font-medium">
                Start in India. Continue Abroad. Graduate Globally
              </p>
            </div>

            {/* Main Heading with Red Badge */}
            <h2 className="text-2xl sm:text-[26px] font-black text-white leading-tight tracking-tight mt-3.5 sm:mt-4.5 mb-2.5 sm:mb-3 drop-shadow-sm">
              Turn Your{" "}
              <span className="inline-block bg-[#b30d1b] text-white px-2.5 py-0.5 rounded-lg font-black shadow-md">
                Study Abroad
              </span>{" "}
              Dream Into Reality
            </h2>

            {/* Red Bordered Callout Box */}
            <div className="border-l-4 border-red-500 bg-white/15 backdrop-blur-xs pl-3.5 py-2 rounded-r-lg my-2 text-xs sm:text-[13px] text-slate-100 font-medium leading-relaxed shadow-xs">
              Get expert guidance for MBBS, Engineering, Nursing, MBA, Masters and more!
            </div>

            {/* 4 Feature Bullet Points */}
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] font-semibold text-white max-w-[62%] mt-2 mb-1">
              <li className="flex items-center gap-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                <span className="w-6.5 h-6.5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-xs backdrop-blur-xs">
                  <Globe size={14} />
                </span>
                <span>Top Universities Worldwide</span>
              </li>
              <li className="flex items-center gap-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                <span className="w-6.5 h-6.5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-xs backdrop-blur-xs">
                  <GraduationCap size={14} />
                </span>
                <span>Complete Admission Support</span>
              </li>
              <li className="flex items-center gap-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                <span className="w-6.5 h-6.5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-xs backdrop-blur-xs">
                  <Award size={14} />
                </span>
                <span>Visa Assistance</span>
              </li>
              <li className="flex items-center gap-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                <span className="w-6.5 h-6.5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-xs backdrop-blur-xs">
                  <Plane size={14} />
                </span>
                <span>Pre-departure Guidance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Header Banner */}
        <div className="lg:hidden bg-gradient-to-r from-[#071d38] to-[#0c4077] text-white p-5 pr-12 shrink-0">
          <div className="inline-block bg-[#b30d1b] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
            Study Abroad
          </div>
          <h3 className="text-lg font-bold text-white leading-tight">
            Turn Your Dream Into Reality
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Get expert guidance for MBBS, Engineering, Nursing, MBA, Masters and more!
          </p>
        </div>

        {/* RIGHT – Form */}
        <div className="flex-1 overflow-y-auto modal-no-scrollbar px-5 py-5 sm:px-8 sm:py-5.5 flex flex-col justify-start sm:justify-center bg-white">
          <form onSubmit={handleModalSubmit} className="space-y-2.5 sm:space-y-3">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative group">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={modalForm.name}
                    onChange={(e) => updateModalField("name", e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none"
                  />
                </div>
                {modalErrors.name && (
                  <p className="mt-0.5 text-xs text-red-600 font-medium">{modalErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email <span className="text-red-600 font-bold">*</span>
                </label>
                <div className="relative group">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    placeholder="your.email@gmail.com"
                    value={modalForm.email}
                    onChange={(e) => updateModalField("email", e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none"
                  />
                </div>
                {modalErrors.email && (
                  <p className="mt-0.5 text-xs text-red-600 font-medium">{modalErrors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone */}
            <div>
              <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number (+91) <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="relative group">
                <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit mobile number"
                  value={modalForm.phone}
                  onChange={(e) => updateModalField("phone", e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none"
                />
              </div>
              {modalErrors.phone && (
                <p className="mt-0.5 text-xs text-red-600 font-medium">{modalErrors.phone}</p>
              )}
            </div>

            {/* Row 3: Interested Course */}
            <div>
              <label htmlFor="modal-course" className="block text-xs font-semibold text-slate-700 mb-1">
                Interested Course <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="relative group">
                <GraduationCap size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                <select
                  id="modal-course"
                  name="course"
                  value={modalForm.course}
                  onChange={(e) => updateModalField("course", e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none cursor-pointer"
                >
                  <option value="" disabled className="text-slate-400">
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
                <p className="mt-0.5 text-xs text-red-600 font-medium">{modalErrors.course}</p>
              )}
            </div>

            {/* Row 4: Destination Country */}
            <div>
              <label htmlFor="modal-country" className="block text-xs font-semibold text-slate-700 mb-1">
                Destination Country <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="relative group">
                <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                <select
                  id="modal-country"
                  name="country"
                  value={modalForm.country}
                  onChange={(e) => updateModalField("country", e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none cursor-pointer"
                >
                  <option value="" disabled className="text-slate-400">
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
                <p className="mt-0.5 text-xs text-red-600 font-medium">{modalErrors.country}</p>
              )}
            </div>

            {/* Row 5: Intake & Qualification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              <div>
                <label htmlFor="modal-intake" className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Intake
                </label>
                <div className="relative group">
                  <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <select
                    id="modal-intake"
                    name="intake"
                    value={modalForm.intake}
                    onChange={(e) => updateModalField("intake", e.target.value)}
                    className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">
                      Select Intake
                    </option>
                    {MODAL_INTAKES.map((intake) => (
                      <option key={intake} value={intake}>
                        {intake}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-qualification" className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Qualification
                </label>
                <div className="relative group">
                  <Award size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                  <select
                    id="modal-qualification"
                    name="qualification"
                    value={modalForm.qualification}
                    onChange={(e) => updateModalField("qualification", e.target.value)}
                    className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">
                      Select Qualification
                    </option>
                    {MODAL_QUALIFICATIONS.map((qual) => (
                      <option key={qual} value={qual}>
                        {qual}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Row 6: Your Message */}
            <div>
              <label htmlFor="modal-message" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Message
              </label>
              <div className="relative group">
                <MessageSquare size={16} className="absolute left-3.5 top-2.5 text-slate-400 group-focus-within:text-teal-600 transition-colors pointer-events-none" />
                <textarea
                  id="modal-message"
                  name="message"
                  rows={2}
                  placeholder="Tell us about your requirements..."
                  value={modalForm.message}
                  onChange={(e) => updateModalField("message", e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm shadow-xs transition-all duration-200 hover:border-slate-300 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isModalSubmitting}
              className={`group relative w-full py-2.5 sm:py-3 px-6 rounded-xl font-bold text-base sm:text-lg text-white shadow-lg transition-all duration-300 mt-1 flex items-center justify-center gap-2 overflow-hidden ${
                isModalSubmitting
                  ? "bg-slate-400 cursor-not-allowed opacity-75"
                  : "bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 hover:from-teal-500 hover:via-teal-600 hover:to-cyan-600 shadow-teal-900/20 hover:shadow-teal-600/30 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                {isModalSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <span>Get Free Counselling Now</span>
                    <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>

            <p className="text-center text-[11.5px] text-slate-500 mt-2">
              By submitting, you agree to our{" "}
              <Link
                to="/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-slate-700 hover:text-teal-700 font-medium transition-colors cursor-pointer"
              >
                Terms
              </Link>{" "}
              &amp;{" "}
              <Link
                to="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-slate-700 hover:text-teal-700 font-medium transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
            </p>
          </form>

          <div className="mt-1 text-center text-[10px] text-slate-400">
            <p>Secure &amp; Confidential • We never spam</p>
          </div>
        </div>
      </div>
    </div>
  );
}
