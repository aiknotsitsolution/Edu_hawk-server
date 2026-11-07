import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SeoHead from "../../component/SeoHead.jsx";
import contactHero from "../../Images/Contact Us/contact-hero.webp";
import contactData from "../../data/main_pages/contact.json";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "MBBS Abroad Admission",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });
  const [errors, setErrors] = useState({});

  const recaptchaRef = useRef(null);

  const validateForm = () => {
    const nextErrors = {};
    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();
    const wordCount = message.length
      ? message.split(/\s+/).filter(Boolean).length
      : 0;

    if (!firstName) nextErrors.firstName = "First name is required";
    if (!lastName) nextErrors.lastName = "Last name is required";
    if (!email) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (phone && !/^\+?[0-9\s-]{7,15}$/.test(phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (!message) nextErrors.message = "Message is required";
    else if (wordCount < 5) {
      nextErrors.message = "Message must contain at least 5 words";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        loading: false,
        message: "Please fill in all required fields correctly.",
        error: true,
      });
      return;
    }

    setErrors({});

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setStatus({
        loading: false,
        message: "Please complete the reCAPTCHA verification below.",
        error: true,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://edu-hawk-server.onrender.com/api/contact/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone || undefined,
            subject: formData.subject,
            message: formData.message,
            captcha: captchaToken,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message:
            "Thank you! Your message has been sent successfully. Our counselling team will contact you within 24 hours.",
          error: false,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "MBBS Abroad Admission",
          message: "",
        });
        setErrors({});
        recaptchaRef.current?.reset();
      } else {
        setStatus({
          loading: false,
          message: data.message || "Failed to send message. Please try again.",
          error: true,
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus({
        loading: false,
        message:
          "Network error. Please check your internet connection or call us directly.",
        error: true,
      });
    }
  };

  const branches = contactData.branches || [
    {
      city: "New Delhi",
      tag: "Head Office",
      address:
        "Bajrang House, N-5, next to Aakash Institute, South Extension I, Block N, New Delhi - 110049",
      phone: "+91 73199 08359",
      mapLink: "https://maps.google.com/?q=Edu+Hawk+Worldwide+Delhi",
    },
    {
      city: "Patna",
      tag: "Branch Office",
      address: "P-24, Dumraon Place, Frazer Road, Patna, Bihar - 800001",
      phone: "+91 76329 49984",
      mapLink: "https://maps.google.com/?q=Frazer+Road+Patna",
    },
    {
      city: "Bhopal",
      tag: "Branch Office",
      address:
        "103, Goyal Vihar, Plot No.31-C, Zone-II, M.P Nagar, Bhopal, Madhya Pradesh - 462011",
      phone: "+91 96307 36070",
      mapLink: "https://maps.google.com/?q=MP+Nagar+Bhopal",
    },
    {
      city: "Lucknow",
      tag: "Branch Office",
      address:
        "2nd Floor Noor Plaza, Tedhi Pulia Ring Road, Near Lenskart showroom, Kalyanpur, Lucknow - 226022",
      phone: "+91 84000 56046",
      mapLink: "https://maps.google.com/?q=Tedhi+Pulia+Ring+Road+Lucknow",
    },
  ];

  return (
    <>
      <SeoHead
        title={
          contactData.seo?.title ||
          "Contact MBBS Abroad Consultancy | EduHawk Worldwide"
        }
        description={
          contactData.seo?.description ||
          "Contact EduHawk Worldwide for expert MBBS abroad admission guidance, fee structures, and university selection support in Delhi, Patna, Bhopal & Lucknow."
        }
        path="/contact"
        ogType="website"
      >
        <link rel="preload" as="image" href={contactHero} fetchPriority="high" />
      </SeoHead>

      <div className="min-h-screen bg-white font-sans text-slate-800">
        {/* Page heading visually hidden for SEO architecture */}
        <h1 className="sr-only">
          Contact Edu-Hawk Worldwide - MBBS Abroad Admission & Counselling
        </h1>

        {/* ─── HERO HEADER ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[420px] sm:min-h-[480px] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-[#071d38]">
          <img
            src={contactHero}
            alt="Edu Hawk Worldwide corporate office"
            width={1920}
            height={1282}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.75] scale-105"
            srcSet={`${contactHero} 1x, ${contactHero} 2x`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d38]/95 via-[#071d38]/70 to-[#071d38]/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 text-center py-16 sm:py-20">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-xl">
              <Sparkles size={14} className="text-amber-400" />
              24/7 Student & Parent Support
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
              {contactData.hero?.title || "Get in Touch with Edu-Hawk Experts"}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-teal-100/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {contactData.hero?.subtitle ||
                "Have questions about MBBS abroad? Visit our corporate office or branch centres, talk to a counsellor, or send us a message below."}
            </p>

            {/* Quick Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919630736070"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold transition"
              >
                <Phone size={14} className="text-amber-400" />
                <span>+91 96307 36070</span>
              </a>
              <a
                href="mailto:admin@eduhawk.in"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold transition"
              >
                <Mail size={14} className="text-amber-400" />
                <span>admin@eduhawk.in</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919630736070"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/80 hover:bg-emerald-600 backdrop-blur-md border border-emerald-400/30 text-white text-xs sm:text-sm font-semibold transition"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── MAIN CONTACT SECTION (FORM + HEAD OFFICE) ───────────────────── */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT SIDE — CONTACT INQUIRY FORM */}
              <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-200/90 p-7 sm:p-10">
                <div className="mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/70">
                    <Send size={13} className="text-amber-600" />
                    Quick Enquiry Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2342] leading-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-600 text-sm mt-1.5">
                    Fill out the form and our experienced MBBS abroad counselor
                    will reach out to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        First Name <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm shadow-xs outline-none transition duration-200 ${
                          errors.firstName
                            ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-200 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/15"
                        }`}
                        placeholder="e.g. Rahul"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-rose-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Last Name <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm shadow-xs outline-none transition duration-200 ${
                          errors.lastName
                            ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-200 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/15"
                        }`}
                        placeholder="e.g. Sharma"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-rose-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm shadow-xs outline-none transition duration-200 ${
                          errors.email
                            ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-200 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/15"
                        }`}
                        placeholder="your.email@gmail.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number (+91)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm shadow-xs outline-none transition duration-200 ${
                          errors.phone
                            ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-200 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/15"
                        }`}
                        placeholder="+91 9630736070"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Interested Course / Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm shadow-xs outline-none hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/15 transition cursor-pointer"
                    >
                      <option value="MBBS Abroad Admission">MBBS Abroad Admission</option>
                      <option value="MBBS in Russia">MBBS in Russia</option>
                      <option value="MBBS in Georgia">MBBS in Georgia</option>
                      <option value="MBBS in Uzbekistan">MBBS in Uzbekistan</option>
                      <option value="MBBS in Kazakhstan">MBBS in Kazakhstan</option>
                      <option value="Study Abroad Programs (USA, UK, Canada)">Study Abroad Programs (USA, UK, Canada)</option>
                      <option value="Visa & Scholarship Inquiry">Visa &amp; Scholarship Inquiry</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Your Query or Message <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {
                          formData.message.trim().split(/\s+/).filter(Boolean)
                            .length
                        }{" "}
                        words
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 text-sm shadow-xs outline-none transition duration-200 resize-none ${
                        errors.message
                          ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                          : "border-slate-200 hover:border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/15"
                      }`}
                      placeholder="Tell us about your NEET status, preferred country, budget, or questions..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* ReCAPTCHA */}
                  <div className="pt-2 flex justify-start">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LczDtQsAAAAAFPaJwLYrIPrE6FI69tzbXnFYodI"
                      theme="light"
                      size="normal"
                    />
                  </div>

                  {/* Status message */}
                  {status.message && (
                    <div
                      className={`p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                        status.error
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      {status.error ? (
                        <span>⚠️ {status.message}</span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 size={16} className="text-emerald-600" />
                          {status.message}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-[#0a2342] bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      status.loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {status.loading ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-[#0a2342] border-t-transparent animate-spin" />
                        <span>Sending Query...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 Your details are 100% confidential. Zero spam guaranteed.
                  </p>
                </form>
              </div>

              {/* RIGHT SIDE — HEAD OFFICE & DIRECT CONTACT */}
              <div className="lg:col-span-5 space-y-6">
                {/* Main Office Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-7 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                      <Building2 size={13} className="text-amber-600" />
                      Corporate Head Office
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      Open Mon - Sat
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0a2342] mb-2">
                    New Delhi Office
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Bajrang House, N-5, next to Aakash Institute, South Extension
                    I, Block N, New Delhi - 110049
                  </p>

                  {/* Interactive Map Embed */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-inner border border-slate-200 mb-6 bg-slate-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.036209217567!2d77.2195!3d28.5685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce33e1bb0f49f%3A0x187a2bd73bcafa58!2sEdu%20Hawk%20Worldwide%20-%20MBBS%20Abroad%20Consultants%20in%20Delhi!5e0!3m2!1sen!2sin!4v1790078295489!5m2!1sen!2sin"
                      title="EduHawk New Delhi main office location on Google Maps"
                      className="absolute inset-0 block h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>

                  {/* Contact List */}
                  <div className="space-y-3.5 text-sm">
                    <a
                      href="tel:+917632949984"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-2xs group-hover:scale-105 transition">
                        <Phone size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Direct Helpline
                        </div>
                        <div className="font-bold text-[#0a2342]">
                          +91 76329 49984 / +91 96307 36070
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:admin@eduhawk.in"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-2xs group-hover:scale-105 transition">
                        <Mail size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Official Email
                        </div>
                        <div className="font-bold text-[#0a2342]">
                          admin@eduhawk.in
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-2xs">
                        <Clock size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Office Timings
                        </div>
                        <div className="font-semibold text-slate-700">
                          10:00 AM - 7:00 PM (IST)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Support Card */}
                <div className="bg-gradient-to-br from-[#071d38] via-[#0d2e54] to-[#0a2342] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10 relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Chat Available
                    </span>
                    <h4 className="text-xl font-bold mb-2">
                      Connect Instantly on WhatsApp
                    </h4>
                    <p className="text-teal-100/90 text-xs sm:text-sm mb-4 leading-relaxed font-light">
                      Speak directly with our senior admission counsellor for fee
                      structure &amp; university cut-offs.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20have%20an%20MBBS%20Abroad%20admission%20inquiry.",
                          "_blank"
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all shadow-lg hover:shadow-xl cursor-pointer w-full"
                    >
                      <MessageCircle size={17} />
                      <span>Chat on WhatsApp (+91 96307 36070)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ALL BRANCH OFFICES GRID ─────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/70">
                <Building2 size={14} className="text-amber-600" />
                Pan-India Presence
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2342] leading-tight mb-4">
                Visit Our Branch Offices
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Book a face-to-face consultation at any of our counselling
                centres in Delhi, Bihar, and Madhya Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {branches.map((branch, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 uppercase tracking-wider">
                        {branch.city}
                      </span>
                      {branch.tag && (
                        <span className="text-[11px] font-bold text-slate-500">
                          {branch.tag}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-bold text-[#0a2342] mb-2.5">
                      {branch.city} Branch
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {branch.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <a
                      href={`tel:${(branch.phone || "").replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0a2342] hover:text-amber-600 transition"
                    >
                      <Phone size={14} className="text-amber-600" />
                      <span>{branch.phone}</span>
                    </a>

                    {branch.mapLink && (
                      <a
                        href={branch.mapLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition"
                      >
                        <Navigation size={12} />
                        <span>Get Directions</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
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
                "https://api.whatsapp.com/send?phone=919630736070&text=Hi%20Edu-Hawk,%20I%20have%20an%20inquiry.",
                "_blank"
              )
            }
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 mx-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </button>
          <a
            href="#inquiry-form"
            onClick={() => {
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-extrabold text-xs rounded-xl shadow-xs transition"
          >
            <span>Send Msg</span>
          </a>
        </div>
      </div>
    </>
  );
}
