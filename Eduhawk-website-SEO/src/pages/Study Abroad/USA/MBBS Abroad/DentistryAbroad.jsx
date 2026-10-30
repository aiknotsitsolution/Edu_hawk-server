import React, { useState, useEffect, useRef } from "react";
import Michigan_School_of_Dentistry from "../../../../Images/Abroad/USA/Dentistry_USA/Michigan_School_of_Dentistr.jpg.png";
import San_Francisco_School_of_Dentistry from "../../../../Images/Abroad/USA/Dentistry_USA/San_Francisco_School_of_Dentistry.jpg.png";
import Pennsylvania_School_of_Dental_Medicine from "../../../../Images/Abroad/USA/Dentistry_USA/Pennsylvania_School_of_Dental_Medicine.jpg.png";

import University_College_of_Dentistry from "../../../../Images/Abroad/USA/Dentistry_USA/University_College_of_Dentistry.jpg.png";


const DentistryAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const sectionRefs = useRef({});

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisibleSections(
        Object.keys(sectionRefs.current).reduce((sections, id) => {
          sections[id] = true;
          return sections;
        }, {}),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const stats = [
    { label: "Programs", value: "BDS, MDS & Allied Dental Courses" },
    {
      label: "Countries",
      value: "12+ destinations with NMC-recognised options",
    },
    { label: "Support", value: "End-to-end guidance from profile to arrival" },
    {
      label: "Approach",
      value: "Transparent fees, honest counselling & outcome focus",
    },
  ];

  const features = [
    {
      title: "NMC-recognised universities only",
      desc: "We shortlist only those universities that meet current NMC eligibility criteria, so your BDS degree remains valid in India.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Clear total cost breakdown",
      desc: "Tuition, hostel, living expenses, insurance, visa and travel — you get a complete year-wise budget before applying.",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      title: "Complete application & visa support",
      desc: "From document preparation to offer letter and visa filing — everything is handled end-to-end by our team.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Accommodation & pre-departure help",
      desc: "Hostel booking, flight guidance, forex support and first-week orientation before you leave India.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "NEET & profile guidance",
      desc: "Honest evaluation of your NEET score, Class 12 marks and budget to match the right country and university.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Country comparison made simple",
      desc: "Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan and more — compared on fees, clinical exposure and safety.",
      color: "bg-cyan-50 text-cyan-600",
    },
  ];

  const usaAdvantages = [
    {
      title: "Enhanced dental education",
      desc: "Gain knowledge through state-of-the-art facilities, simulation labs, and clinical training settings.",
    },
    {
      title: "Hands-on clinical experience",
      desc: "Cultivate professional competencies through supervised patient interactions.",
    },
    {
      title: "Opportunities for dental research",
      desc: "Investigate studies in oral health, dental materials, and cutting-edge treatments.",
    },
    {
      title: "Options for dental specialization",
      desc: "Explore areas such as orthodontics, periodontics, endodontics, and oral surgery.",
    },
    {
      title: "Global exposure",
      desc: "Learn in a diverse academic environment with international peers.",
    },
    {
      title: "Career paths in dentistry",
      desc: "Assess potential job opportunities after fulfilling the necessary professional licensing requirements.",
    },
  ];

  const eligibility = [
    "Minimum 50% in PCB (Physics, Chemistry, Biology) in Class 12 (40% for reserved categories in many countries)",
    "NEET qualification is mandatory for Indian students as per current NMC guidelines",
    "Age should be 17 years or above at the time of admission",
    "Valid passport and academic transcripts ready before application deadlines",
    "Proof of funds / financial documents required for the visa process",
    "English proficiency (IELTS/PTE or Medium of Instruction certificate as per university requirement)",
  ];

  const destinations = [
    { name: "Russia", highlight: true },
    { name: "Georgia", highlight: true },
    { name: "Kazakhstan", highlight: true },
    { name: "Uzbekistan", highlight: true },
    { name: "Kyrgyzstan", highlight: true },
    { name: "Philippines", highlight: false },
    { name: "Armenia", highlight: false },
    { name: "Belarus", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your NEET score, Class 12 marks, budget and preferred countries. We give you an honest assessment.",
    },
    {
      step: 2,
      title: "University shortlisting",
      desc: "We shortlist only NMC-recognised universities that match your academic profile, budget and career goals.",
    },
    {
      step: 3,
      title: "Application & admission",
      desc: "Document preparation, application filing, offer letter and invitation letter support till you secure the seat.",
    },
    {
      step: 4,
      title: "Visa guidance",
      desc: "Complete visa file preparation, financial documents checklist and interview guidance.",
    },
    {
      step: 5,
      title: "Pre-departure & arrival support",
      desc: "Hostel allocation, flight guidance, airport pickup coordination and first-week settling support.",
    },
  ];

  const faqs = [
    {
      q: "Is NEET mandatory for BDS abroad?",
      a: "Yes. As per current NMC guidelines, Indian students must qualify NEET to pursue BDS abroad. Without NEET, the degree will not be valid for registration or practice in India.",
    },
    {
      q: "Which countries are best for BDS abroad in 2025-26?",
      a: "Russia, Georgia, Kazakhstan, Uzbekistan and Kyrgyzstan are currently the most preferred destinations for Indian students due to NMC recognition, reasonable fees and good clinical exposure. The best choice depends on your budget and NEET score.",
    },
    {
      q: "What is the total cost of BDS abroad?",
      a: "The total cost (tuition + hostel + living expenses) usually ranges between ₹15–38 lakhs for the complete course. We provide a transparent year-wise cost sheet before you apply.",
    },
    {
      q: "Will my BDS degree be valid in India?",
      a: "Yes, provided you study at an NMC-recognised university, complete the required duration and clear the licensing exam. We only recommend eligible universities.",
    },
    {
      q: "When should I start the process?",
      a: "Ideally 6–10 months before the intake. Most intakes start in September/October. Early application helps with better hostel options and smoother visa processing.",
    },
  ];

  const specializations = [
    "Orthodontics",
    "Endodontics",
    "Periodontics",
    "Prosthodontics",
    "Children's Dentistry",
    "Maxillofacial and Oral Surgery",
    "Public Health in Dentistry",
    "Maxillofacial and Oral Pathology",
  ];

  const usaAdmissionSteps = [
    {
      step: 1,
      title: "Decide on Your Dental Program",
      desc: "Choose between applying for a postgraduate dental specialization, an advanced-standing program following BDS, or a traditional DDS/DMD degree.",
    },
    {
      step: 2,
      title: "Make a dental university shortlist",
      desc: "Examine universities based on their clinical facilities, tuition costs, program length, admission requirements, and international applicant eligibility.",
    },
    {
      step: 3,
      title: "Verify Your Qualifications",
      desc: "Examine the prerequisite courses, minimum grades, prerequisite credentials, and requirements for credential evaluation.",
    },
    {
      step: 4,
      title: "Get Ready for Necessary Tests",
      desc: "Finish the English language test, DAT, and any other exams that your chosen universities require.",
    },
    {
      step: 5,
      title: "Get Your Documents Ready",
      desc: "Gather test results, personal statements, recommendation letters, degree certificates, academic transcripts, and other supporting documentation.",
    },
    {
      step: 6,
      title: "Send in Your Application",
      desc: "Depending on the program, apply directly to the university or via the appropriate application system. Make sure you fulfill the deadlines set by each institution.",
    },
    {
      step: 7,
      title: "Participate in assessments or interviews",
      desc: "To evaluate candidates' motivation, communication abilities, relevant experience, and suitability for dental education, some universities hold interviews or other tests.",
    },
    {
      step: 8,
      title: "Examine Offers for Admission",
      desc: "Before accepting an offer, compare enrollment requirements, funding options, program duration, and tuition costs.",
    },
    {
      step: 9,
      title: "Submit a Student Visa Application",
      desc: "Eligible students generally need the appropriate immigration documentation before applying for a US student visa.",
    },
  ];

  const careerPaths = [
    "General Dentist",
    "Orthodontist",
    "Endodontist",
    "Periodontist",
    "Prosthodontist",
    "Pediatric Dentist",
    "Oral & Maxillofacial Surgeon",
    "Dental Researcher",
    "Public Health Dentist",
    "Dental Educator",
  ];

  const documentsList = [
    "Mark sheets and certificates for grades 10 and 12",
    "Transcripts and certificates of a bachelor's degree (if applicable)",
    "Academic records and BDS degree certificate (for advanced-standing candidates)",
    "Results of any necessary English proficiency tests",
    "DAT results or other necessary test scores",
    "Credential evaluation reports (upon request)",
    "Personal statement or Statement of Purpose",
    "Letters of recommendation",
    "Updated resume or CV",
    "Evidence of clinical experience / dental shadowing (if required)",
    "Valid Passport",
    "Financial records and proof of funds",
    "Offer of admission",
  ];

  return (
    <div className="dentistry-page font-sans text-slate-800 bg-white min-h-screen antialiased">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dentistry-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }
        @keyframes dentistry-image-in {
          from { opacity: 0; transform: translateX(24px) scale(.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes dentistry-card-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }
        .opacity-0-start { opacity: 0; }
        .dentistry-page .dentistry-hero-glow {
          animation: dentistry-float 8s ease-in-out infinite;
        }
        .dentistry-page .dentistry-hero-image {
          animation: dentistry-image-in .8s ease-out .15s both;
        }
        .dentistry-page .dentistry-animated-card {
          animation: dentistry-card-in .55s ease-out both;
          animation-delay: var(--card-delay, 0ms);
        }
        .dentistry-page .dentistry-university-image {
          transition: transform .7s cubic-bezier(.2, .7, .2, 1);
        }
        .dentistry-page .dentistry-university-card:hover .dentistry-university-image {
          transform: scale(1.08);
        }
        .dentistry-page section h2 {
          letter-spacing: -.025em;
        }
        .dentistry-page section .bg-white.border {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .dentistry-page section .bg-white.border:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px rgba(15, 23, 42, .09);
        }
        @media (max-width: 1023px) {
          .dentistry-page .dentistry-hero-image {
            height: clamp(14rem, 52vw, 24rem);
          }
        }
        @media (max-width: 639px) {
          .dentistry-page {
            overflow-x: clip;
          }
          .dentistry-page section:not(:first-of-type) {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .dentistry-page .max-w-6xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .dentistry-page h1 {
            font-size: clamp(2rem, 9vw, 2.5rem);
            letter-spacing: -.035em;
          }
          .dentistry-page h2 {
            text-wrap: balance;
          }
          .dentistry-page section a {
            min-height: 2.75rem;
          }
          .dentistry-page .dentistry-hero-glow {
            width: 18rem;
            height: 18rem;
          }
        }
        @media (hover: none) {
          .dentistry-page section .bg-white.border:hover {
            transform: none;
            box-shadow: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dentistry-page *,
          .dentistry-page *::before,
          .dentistry-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
          .dentistry-page .opacity-0-start {
            opacity: 1;
          }
          .dentistry-page .dentistry-animated-card {
            animation: none;
          }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="dentistry-hero-glow absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="dentistry-hero-glow absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="opacity-0-start animate-fade-up">
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Dentistry
              </div>

              <div className="text-xs font-semibold tracking-wider uppercase text-teal-300 mb-3">
                Study Dentistry · Abroad
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-teal-400 to-amber-300 bg-clip-text text-transparent">
                  Dentistry Abroad
                </span>{" "}
                with confidence
              </h1>

              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Limited seats and high competition for BDS in India make
                studying dentistry abroad a smart and practical choice for many
                students.
              </p>

              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                EduHawk helps you choose only NMC-recognised universities,
                understand real costs, and complete the entire admission + visa
                process with complete transparency.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <a
                  href="#consult"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-teal-600 text-white hover:bg-teal-700 hover:scale-105 transition-all duration-300 no-underline shadow-lg shadow-teal-600/25"
                >
                  Book free counselling
                </a>
                <a
                  href="#destinations"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 no-underline"
                >
                  View countries
                </a>
              </div>
            </div>

            <div
              className="relative mt-2 lg:mt-0 opacity-0-start animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80"
                alt="Dentistry students abroad"
                className="dentistry-hero-image rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px] hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium border border-white/20">
                Trusted by 1000+ Indian students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        id="stats"
        ref={setRef("stats")}
        className={`bg-slate-50 pt-12 pb-16 transition-all duration-700 ${
          visibleSections.stats
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-9">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              At a glance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Dentistry Abroad at a glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="dentistry-animated-card bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ "--card-delay": `${i * 80}ms` }}
              >
                <span className="block text-[13px] text-slate-500 font-medium mb-1.5">
                  {item.label}
                </span>
                <strong className="text-[15px] text-slate-900 font-semibold leading-snug">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW + FEATURES ================= */}
      <section
        id="overview"
        ref={setRef("overview")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections.overview
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Dentistry Courses Abroad with EduHawk
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Every year, a large number of Indian students look for BDS seats
                outside India due to limited seats, intense competition, and
                high fees of private dental colleges.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Studying dentistry abroad not only increases your chances of
                admission but also gives you better clinical exposure and an
                international learning environment.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                At EduHawk, we focus on long-term outcomes. We help you choose
                only NMC-eligible universities, understand real costs, and
                complete the entire process with full transparency.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-teal-600 text-white hover:bg-teal-700 hover:scale-105 transition-all duration-300 no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80"
                alt="Dental education abroad"
                className="rounded-2xl shadow-xl object-cover w-full h-[390px] group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold leading-none">15–38L</div>
                <div className="text-sm opacity-90 mt-1">
                  Approx. total budget range
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="dentistry-animated-card bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ "--card-delay": `${i * 70}ms` }}
              >
                <div
                  className={`w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 ${f.color}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY STUDY IN USA ================= */}
      <section
        id="why-usa"
        ref={setRef("why-usa")}
        className={`py-16 sm:py-20 bg-slate-50 transition-all duration-700 ${
          visibleSections["why-usa"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              Study in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Study Dentistry in the USA?
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The United States has a comprehensive dental education framework
              that integrates theoretical study, hands-on laboratory practice,
              clinical training, and research. Students looking to pursue dental
              programs in the USA can investigate courses that focus on
              contemporary technology, patient care, and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {usaAdvantages.map((item, i) => (
              <div
                key={i}
                className="dentistry-animated-card bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ "--card-delay": `${i * 70}ms` }}
              >
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 bg-teal-50 text-teal-600">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed">
            Through EduHawk worldwide study abroad guidance, students can
            explore these opportunities and understand the requirements involved
            in pursuing dental education overseas.
          </p>
        </div>
      </section>

      {/* ================= BEST COURSES IN USA ================= */}
      <section
        id="usa-courses"
        ref={setRef("usa-courses")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections["usa-courses"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              Programs in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Best Dentistry Courses in the USA for Indian Students
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Individuals seeking the top dentistry courses in the USA should be
              aware of the distinctions between professional dental
              qualifications, advanced-standing programs, and postgraduate
              specializations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-teal-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 grid place-items-center text-sm font-bold">
                  1
                </span>
                Doctor of Dental Surgery (DDS)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                The Doctor of Dental Surgery (DDS) is a professional dental
                qualification in the USA that equips students for a career in
                dental practice. This program typically spans about four years
                following the completion of necessary undergraduate studies.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Participants learn about oral anatomy, dental materials,
                pathology, preventive dental care, and patient management.
                Clinical experience is a crucial component of the curriculum.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-teal-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 grid place-items-center text-sm font-bold">
                  2
                </span>
                Doctor of Dental Medicine (DMD)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                Another professional dental degree in the United States is the
                Doctor of Dental Medicine (DMD). In terms of professional
                standing and educational requirements, DDS and DMD degrees are
                comparable.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Subject to the relevant state licensing requirements, both
                degrees prepare graduates for dental practice.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-teal-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center text-sm font-bold">
                  3
                </span>
                Post-BDS Advanced-Standing Dental Programs
              </h3>
              <ul className="space-y-3 text-slate-500 text-[15px] leading-relaxed">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-600 grid place-items-center mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    Indian students may be eligible to enroll in advanced dental
                    programs in the USA designed for dentists with international
                    training after receiving a Bachelor of Dental Surgery (BDS).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-600 grid place-items-center mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    These programs may offer a route to a US DDS or DMD degree,
                    depending on the university. Credential evaluation and
                    English proficiency are examples of admission requirements.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-teal-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 grid place-items-center text-sm font-bold">
                  4
                </span>
                Specializations in Postgraduate Dentistry
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                In the USA, students who fulfill the necessary qualifications
                can enroll in postgraduate dentistry programs, such as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {specializations.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                    {spec}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Depending on the specialization, there are differences in the
                length, admission requirements, and professional demands.
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mt-8">
            EduHawk worldwide can help students understand the available dental
            education pathways and shortlist universities according to their
            qualifications and career goals.
          </p>
        </div>
      </section>

      {/* ================= 4. ELIGIBILITY FOR USA ================= */}
      <section
        id="usa-eligibility"
        ref={setRef("usa-eligibility")}
        className={`py-16 sm:py-20 bg-slate-50 transition-all duration-700 ${
          visibleSections["usa-eligibility"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              USA Eligibility
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Eligibility for Dentistry Courses in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              It's important to know who is qualified for dental programs in the
              US before submitting an application. The requirements vary
              depending on whether the candidate is applying for postgraduate
              dental training, an advanced-standing program, or a traditional
              DDS/DMD program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Academic Background */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Academic Background
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                Traditional dental programs typically require applicants to
                finish prerequisite coursework and an undergraduate degree.
                While specific requirements differ, some schools require a
                bachelor's degree.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Applications for advanced-standing programs intended for
                dentists with international training may be accepted from
                students who have earned their BDS in India.
              </p>
            </div>

            {/* English Language */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                English Language Requirements
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                International applicants may need to demonstrate English
                proficiency through an accepted examination, such as:
              </p>
              <ul className="space-y-2 text-slate-600 text-[15px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  IELTS for dental school admission
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  TOEFL for international students
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Other English tests accepted by the university
                </li>
              </ul>
              <p className="text-slate-500 text-[15px] leading-relaxed mt-3">
                Minimum scores and exemption policies vary by institution.
              </p>
            </div>

            {/* DAT */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Dental Admission Examination (DAT)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Many traditional dental schools in the United States require the
                Dental Admission Test (DAT). Students should check each
                institution's examination policy because requirements may vary
                for international applicants and advanced-standing programs.
              </p>
            </div>

            {/* Academic Requirements */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Academic Requirements
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                Depending on the program, candidates might need to complete
                coursework in:
              </p>
              <ul className="space-y-2 text-slate-600 text-[15px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  General Chemistry and Biology
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Biochemistry, Physics, and Organic Chemistry
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Additional mandatory science courses
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Additional Admission Requirements
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Universities may also request:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Academic transcripts and degree certificates",
                "Letters of recommendation",
                "A personal statement",
                "Dental shadowing or relevant experience",
                "Interviews",
                "Practical or manual dexterity assessments",
                "Credential evaluation reports",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mt-8">
            EduHawk worldwide admission guidance can help students organise
            their academic records, identify programme-specific requirements,
            and prepare their application documents.
          </p>
        </div>
      </section>

      {/* ================= 5. ADMISSION PROCESS ================= */}
      <section
        id="usa-admission"
        ref={setRef("usa-admission")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections["usa-admission"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              USA Admission
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Admission Process for Dentistry in the USA
            </h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              The dentistry admission process in the USA involves several
              stages. Requirements and application systems differ between
              traditional dental programmes and advanced-standing programmes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {usaAdmissionSteps.map((s, i) => (
              <div key={i} className="flex gap-5 pb-8 relative group">
                {i < usaAdmissionSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 group-hover:bg-teal-200 transition-colors duration-300" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white font-bold text-base grid place-items-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-teal-600/30">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mt-6 text-center max-w-2xl mx-auto">
            EduHawk worldwide study abroad counselling can help students
            understand the application stages, prepare their documents, and plan
            their university applications.
          </p>
        </div>
      </section>

      {/* ================= 6. COST ================= */}
      <section
        id="usa-cost"
        ref={setRef("usa-cost")}
        className={`py-16 sm:py-20 bg-slate-50 transition-all duration-700 ${
          visibleSections["usa-cost"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              USA Cost
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              The Cost of Dental Education in the United States
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The university, length of the program, type of residency, and
              living situation all affect how much it costs to study dentistry
              in the United States. Tuition, housing, health insurance, dental
              supplies, exam fees, and other educational costs should all be
              budgeted for by international students.
            </p>
          </div>

          {/* Cost Table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-sm font-semibold">Expense</th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Estimated Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      expense: "Annual tuition fees",
                      cost: "US $60,000 – US $120,000",
                    },
                    {
                      expense: "Annual living expenses",
                      cost: "US $15,000 – US $30,000",
                    },
                    {
                      expense: "Books, dental instruments & supplies",
                      cost: "Varies by programme",
                    },
                    {
                      expense: "Health insurance",
                      cost: "Varies by university",
                    },
                    {
                      expense: "Application and examination fees",
                      cost: "Varies by applicant",
                    },
                    {
                      expense: "Visa and travel expenses",
                      cost: "Varies by individual",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-[15px] text-slate-700 font-medium">
                        {row.expense}
                      </td>
                      <td className="px-6 py-4 text-[15px] text-slate-600">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
            These are not verified fees for a specific institution, but rather
            general planning estimates. Students should review the most recent
            university fee schedules as actual costs may differ from these
            ranges.
          </p>

          {/* Finance Planning */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Finance Planning and Scholarships
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Students looking into dental scholarships in the USA should review
              the funding policies of each school. Financial aid may be provided
              in some circumstances, but eligibility varies for international
              students.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Before applying, think about:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "The total cost of tuition for the program",
                "Transportation and lodging",
                "Dental supplies and health insurance",
                "Scholarships and institutional funding available",
                "Loans for education and terms of repayment",
                "Financial records needed to obtain a student visa",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-[15px] text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mt-8">
            Students can compare university options based on their projected
            budget and comprehend the costs associated with studying abroad with
            the aid of EduHawk worldwide's overseas education guidance.
          </p>
        </div>
      </section>

      {/* ================= 7. LICENSING ================= */}
      <section
        id="usa-licensing"
        ref={setRef("usa-licensing")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections["usa-licensing"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              Licensing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Dental Licensing Requirements in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Prior to selecting a dental program, it is crucial to comprehend
              the US dental licensing requirements for international students.
              Obtaining a dental degree does not automatically entitle one to
              practice anywhere in the United States.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Typical conditions for licensing could include:
            </h3>
            <ul className="space-y-3">
              {[
                "Completion of a dental education program approved by the applicable licensing body",
                "Passing approved tests or the necessary components of the National Board Dental Examination",
                "Completing a state-mandated examination or an approved clinical evaluation",
                "Fulfilling the documentation and background-check requirements",
                "Meeting additional requirements specific to the state",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                  <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-600 grid place-items-center mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold mb-3">
              Integrated National Board Dental Examination (INBDE)
            </h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              An essential test for US dental licensing is the Integrated
              National Board Dental Examination (INBDE). For Indian dentists
              with a BDS degree, the route to US licensure can differ from that
              of graduates of US-accredited dental programmes. Many
              internationally trained dentists pursue eligible advanced-standing
              programmes to obtain a US dental degree before applying for
              licensure.
            </p>
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed">
            EduHawk worldwide consultancy encourages students to understand the
            difference between dental school admission and professional
            licensing. Applicants should verify current licensing requirements
            with the relevant official authorities.
          </p>
        </div>
      </section>

      {/* ================= 8. CAREER OPPORTUNITIES ================= */}
      <section
        id="usa-careers"
        ref={setRef("usa-careers")}
        className={`py-16 sm:py-20 bg-slate-50 transition-all duration-700 ${
          visibleSections["usa-careers"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              Careers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Career Opportunities After Studying Dentistry in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Clinical practice, specialized treatment, research, teaching,
              public health, and positions in the dental industry are all
              options available to students looking into post-dentistry careers
              in the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {careerPaths.map((path, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 grid place-items-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[15px] font-medium text-slate-800">
                  {path}
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
            Additional education, residency training, or other credentials are
            typically needed for specialist roles.
          </p>

          {/* Salary Card */}
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="text-sm font-medium opacity-90 mb-2">
              Dentist Salary in the USA
            </div>
            <div className="text-4xl sm:text-5xl font-bold mb-3">
              US $179,210
            </div>
            <p className="text-white/85 text-[15px] max-w-xl mx-auto leading-relaxed">
              According to the US Bureau of Labor Statistics, the median annual
              wage for dentists was US $179,210 in May 2025. This is a national
              occupational median, not a guaranteed starting salary or an
              expected salary for every graduate.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. DOCUMENTS REQUIRED ================= */}
      <section
        id="usa-documents"
        ref={setRef("usa-documents")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections["usa-documents"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              Documents
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Documents Required for Dental School Admission
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Students can prevent needless delays by preparing the paperwork
              needed for dental school admission in the USA beforehand.
              Documents that are frequently requested include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {documentsList.map((doc, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 hover:border-teal-200 hover:shadow-sm transition-all duration-300"
              >
                <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-600 grid place-items-center mt-0.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[15px] text-slate-700 leading-snug">
                  {doc}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
              Documents not originally issued in English may require certified
              translations. Some universities also require official transcripts
              to be sent directly by the issuing institution or through an
              approved credential service.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              EduHawk application support can help students organise a document
              checklist and identify programme-specific requirements before
              submitting applications.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section
        id="destinations"
        ref={setRef("destinations")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections.destinations
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Top Dental Universities in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
              Choosing among the top dental universities in the USA requires
              comparing academic requirements, tuition fees, clinical
              facilities, programme structure, and international admission
              policies.
            </p>
            <p>Some well-known dental schools include:</p>
          </div>

          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                img: Michigan_School_of_Dentistry,
                name: "Michigan_School_of_Dentistry",
                desc: "University of Michigan School of Dentistry",
              },
              {
                img: San_Francisco_School_of_Dentistry,
                name: "San_Francisco_School_of_Dentistry",
                desc: "English medium & modern campuses",
              },
              {
                img: Pennsylvania_School_of_Dental_Medicine,
                name: "Pennsylvania_School_of_Dental_Medicine",
                desc: "Affordable with good clinical exposure",
              },
              {
                img: University_College_of_Dentistry,
                name: "University_College_of_Dentistry",
                desc: "Affordable with good clinical exposure",
              },
            ].map((dest, i) => (
              <div
                key={i}
                className="dentistry-animated-card dentistry-university-card relative rounded-2xl overflow-hidden h-60 group cursor-pointer shadow-md hover:shadow-xl"
                style={{ "--card-delay": `${i * 100}ms` }}
              >
                <img
                  src={dest.img}
                  alt={`Study Dentistry in ${dest.name}`}
                  loading="lazy"
                  className="dentistry-university-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                  <div className="transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <h4 className="text-white font-semibold text-lg">
                      {dest.name}
                    </h4>
                    <p className="text-white/80 text-sm">{dest.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section
        id="process"
        ref={setRef("process")}
        className={`py-16 sm:py-20 bg-slate-50 transition-all duration-700 ${
          visibleSections.process
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              How it works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Your journey with EduHawk
            </h2>
            <p className="text-slate-500 text-[15px] max-w-xl mx-auto">
              From the first counselling call to your arrival at the university,
              we stay with you at every step.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {processSteps.map((s, i) => (
              <div key={i} className="flex gap-5 pb-9 relative group">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 group-hover:bg-teal-200 transition-colors duration-300" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white font-bold text-base grid place-items-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-teal-600/30">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        id="faq"
        ref={setRef("faq")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections.faq
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 mb-1.5">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 font-semibold text-[15px] text-left text-slate-900 flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors duration-200 bg-transparent border-none cursor-pointer font-sans"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`text-xl text-slate-400 font-normal flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-teal-600" : ""
                    }`}
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        id="consult"
        ref={setRef("consult")}
        className={`py-16 sm:py-20 transition-all duration-700 ${
          visibleSections.consult
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-8 py-14 sm:px-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
              Ready to start your Dentistry journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">
              Book a free counselling session. We will assess your profile,
              share realistic options and give you a clear cost & process
              roadmap.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center relative">
              <a
                href="https://wa.me/917632949984"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-teal-600 text-white hover:bg-teal-700 hover:scale-105 transition-all duration-300 no-underline shadow-lg shadow-teal-600/25"
              >
                WhatsApp us now
              </a>
              <a
                href="tel:+917632949984"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 no-underline"
              >
                Call +91 76329 49984
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentistryAbroad;
