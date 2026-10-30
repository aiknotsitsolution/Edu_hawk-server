import React, { useEffect, useRef, useState } from "react";

const NursingAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll(
      "section:not(.nursing-hero)",
    );
    if (!sections) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    sections.forEach((section) => {
      section.classList.add("nursing-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Programs", value: "BSc Nursing, GNM, MSc Nursing & Allied" },
    { label: "Countries", value: "12+ destinations with good recognition" },
    { label: "Support", value: "End-to-end guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & outcome focus" },
  ];

  const features = [
    {
      title: "Recognised universities only",
      desc: "We shortlist universities that are well-recognised and accepted for further studies or licensing in India and other countries.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Clear total cost breakdown",
      desc: "Tuition, hostel, living expenses, insurance, visa and travel — you see the complete year-wise budget before applying.",
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Complete application & visa support",
      desc: "Documents, applications, offer letters, scholarship guidance and visa file preparation handled end-to-end.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Accommodation & pre-departure help",
      desc: "Hostel booking, flight planning, forex guidance and first-week orientation support before you leave India.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Profile & eligibility guidance",
      desc: "Honest evaluation of your Class 12 marks, English scores and budget to match the right country and university.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Country comparison made simple",
      desc: "Philippines, Germany, Canada, UK, Australia and more — compared on fees, clinical exposure, job opportunities and recognition.",
      color: "bg-violet-50 text-violet-600",
    },
  ];

  const usaBenefits = [
    {
      title: "Globally Recognised Education",
      desc: "Many U.S. universities offer nursing programs with strong academic and clinical components.",
    },
    {
      title: "Advanced Healthcare Facilities",
      desc: "Students may receive clinical learning opportunities in modern healthcare environments, depending on their university and program.",
    },
    {
      title: "Wide Range of Nursing Courses",
      desc: "Students can choose from undergraduate, postgraduate and advanced nursing programs according to their academic background.",
    },
    {
      title: "Strong Career Opportunities",
      desc: "Registered nurses work in hospitals, clinics, outpatient facilities, home healthcare, nursing facilities, schools and other healthcare settings.",
    },
    {
      title: "Specialisation Opportunities",
      desc: "Nurses can develop expertise in areas such as critical care, paediatrics, emergency nursing, mental health, oncology and community health.",
    },
  ];

  const bsnSubjects = [
    "Nursing fundamentals",
    "Anatomy and physiology",
    "Pharmacology",
    "Medical-surgical nursing",
    "Community health",
    "Mental health nursing",
    "Paediatric nursing",
    "Nursing research",
    "Clinical practice",
  ];

  const graduatePrograms = [
    "Master of Science in Nursing",
    "Doctor of Nursing Practice",
    "Nursing Leadership",
    "Nursing Education",
    "Advanced Nursing Practice",
    "Specialised Nursing Programs",
  ];

  const topUniversities = [
    "University of Pennsylvania",
    "Johns Hopkins University",
    "Duke University",
    "University of California, San Francisco",
    "University of Washington",
  ];

  const comparisonPoints = [
    "Nursing program curriculum",
    "Accreditation",
    "Clinical training",
    "International student eligibility",
    "Tuition fees",
    "Location",
    "Living costs",
    "Admission requirements",
    "State licensing pathway",
    "Career opportunities",
  ];

  const undergradEligibility = [
    "Completion of Class 12 or equivalent qualification",
    "Appropriate academic background",
    "Required science subjects, where specified",
    "English-language proficiency",
    "Academic transcripts",
    "Meeting the university's minimum academic requirements",
  ];

  const gradEligibility = [
    "A recognised bachelor's degree",
    "Nursing qualification, where required",
    "Appropriate academic background",
    "Nursing registration/licensure, where applicable",
    "Professional experience for certain programs",
    "English-language proficiency",
    "Additional university-specific requirements",
  ];

  const admissionAcademic = [
    "Class 10 and Class 12 marksheets",
    "Academic transcripts",
    "Degree certificates, where applicable",
    "Required prerequisite subjects",
    "Minimum GPA or academic percentage",
  ];

  const englishTests = ["IELTS", "TOEFL", "PTE", "Duolingo English Test"];

  const livingExpenses = [
    "Accommodation",
    "Food",
    "Transportation",
    "Health insurance",
    "Books and study materials",
    "Personal expenses",
    "Background checks",
    "CPR/BLS certification",
    "Clinical-related expenses",
    "Licensing and examination fees",
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Profile Assessment",
      desc: "Evaluate Academic Background + Science Subjects + English Proficiency + Budget + Career Goals",
    },
    {
      step: 2,
      title: "Select Your Nursing Program",
      desc: "Choose an appropriate pathway such as a BSN in USA or a graduate nursing program.",
    },
    {
      step: 3,
      title: "Shortlist Nursing Universities",
      desc: "Compare course structure, accreditation, tuition fees, clinical opportunities, location, eligibility and international student requirements.",
    },
    {
      step: 4,
      title: "Prepare Documents",
      desc: "Prepare academic records, passport, English-language test results and other required documents.",
    },
    {
      step: 5,
      title: "Submit Application",
      desc: "Complete the university application and submit all required supporting documents.",
    },
    {
      step: 6,
      title: "Receive Admission Decision",
      desc: "Selected students receive the relevant admission documentation from the university.",
    },
    {
      step: 7,
      title: "Financial & Visa Preparation",
      desc: "Plan finances and complete the required U.S. student visa process.",
    },
    {
      step: 8,
      title: "Start Your Nursing Program",
      desc: "Travel to the USA, complete university enrolment and begin your nursing education and clinical training.",
    },
  ];

  const licensingPoints = [
    "Credential evaluation",
    "Education verification",
    "English-language requirements, where applicable",
    "State-specific documentation",
    "Eligibility determination",
    "NCLEX examination",
  ];

  const workSettings = [
    "Hospitals",
    "Outpatient clinics",
    "Physicians' offices",
    "Home healthcare",
    "Nursing and residential care facilities",
    "Schools",
    "Community healthcare",
    "Government healthcare facilities",
  ];

  const careerAreas = [
    "Medical-Surgical Nursing",
    "Critical Care Nursing",
    "Emergency Nursing",
    "Paediatric Nursing",
    "Mental Health Nursing",
    "Oncology Nursing",
    "Community Health Nursing",
    "Surgical Nursing",
    "Geriatric Nursing",
    "Nursing Leadership",
    "Advanced Practice Nursing",
  ];

  const academicDocs = [
    "Class 10 certificate and marksheet",
    "Class 12 certificate and marksheet",
    "Bachelor's degree and transcripts, where applicable",
    "Nursing qualification and registration documents, where applicable",
    "Academic transcripts",
    "Course completion certificates",
  ];

  const applicationDocs = [
    "Valid passport",
    "English-language test score",
    "Statement of Purpose",
    "Letters of Recommendation",
    "Resume/CV, where required",
    "Personal essay, where required",
    "Completed application forms",
    "Passport-size photographs, if requested",
  ];

  const financialVisaDocs = [
    "Proof of financial support",
    "Financial/bank documents as required",
    "University admission letter",
    "Form I-20",
    "Student visa application documents",
    "Other documents required by the relevant authorities",
  ];

  const eligibility = [
    "Minimum 45–50% in Class 12 (PCB or any stream depending on the country and course)",
    "Age 17 years or above at the time of admission",
    "Valid passport and academic transcripts ready before deadlines",
    "English proficiency (IELTS / PTE / Duolingo or Medium of Instruction certificate as required)",
    "Proof of funds / financial documents for the visa process",
    "Some countries may require additional entrance tests or interviews",
  ];

  const destinations = [
    { name: "Philippines", highlight: true },
    { name: "Germany", highlight: true },
    { name: "Canada", highlight: true },
    { name: "UK", highlight: true },
    { name: "Australia", highlight: false },
    { name: "USA", highlight: false },
    { name: "Ireland", highlight: false },
    { name: "New Zealand", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your Class 12 marks, English scores, budget and preferred countries. We give an honest assessment.",
    },
    {
      step: 2,
      title: "University shortlisting",
      desc: "We shortlist recognised universities that match your academic profile, budget and career goals in nursing.",
    },
    {
      step: 3,
      title: "Application & admission",
      desc: "Document preparation, application filing, offer letter and further process support till you secure the seat.",
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
      q: "Is NEET required for Nursing abroad?",
      a: "No. NEET is not mandatory for Nursing courses abroad. Admission is mainly based on Class 12 marks and English proficiency scores.",
    },
    {
      q: "Which countries are best for Nursing abroad?",
      a: "Philippines, Germany, Canada, UK and Australia are among the most preferred destinations. Philippines is popular for affordable fees, while Germany, Canada and UK offer strong job opportunities after graduation.",
    },
    {
      q: "What is the total cost of Nursing abroad?",
      a: "Total cost usually ranges between ₹12–45 lakhs depending on the country and university. Philippines is more affordable, while Canada, UK and Australia are higher. We provide a clear cost sheet before you apply.",
    },
    {
      q: "Can I work while studying Nursing abroad?",
      a: "Yes. Most popular countries allow part-time work (usually 20 hours per week during studies). This helps students manage living expenses.",
    },
    {
      q: "When should I start the process?",
      a: "Ideally 8–12 months before the intake. Early application helps with better university options, scholarships and smoother visa processing.",
    },
    {
      q: "Can Indian students study nursing in the USA?",
      a: "Yes. Indian students can apply to eligible nursing programs in the USA if they meet the academic, English-language and university-specific admission requirements.",
    },
    {
      q: "After 12th grade, can I pursue a BSN in the United States?",
      a: "Yes, eligible international students can explore Bachelor of Science in Nursing (BSN) programs after Class 12. However, admission requirements, prerequisite subjects and international student eligibility vary by university.",
    },
    {
      q: "Is NCLEX-RN required to work as a nurse in the USA?",
      a: "Generally, candidates seeking Registered Nurse licensure need to meet the relevant state Board of Nursing requirements and pass the NCLEX-RN. Licensing requirements vary by state.",
    },
    {
      q: "What is the average nursing salary in USA?",
      a: "The U.S. Bureau of Labor Statistics reported a median annual wage of $97,550 for Registered Nurses in May 2025. Actual salary depends on location, experience, specialty, employer and work setting.",
    },
    {
      q: "Can Indian nurses work in the USA?",
      a: "Yes, Indian-trained nurses may pursue U.S. nursing licensure, but an Indian nursing qualification does not automataically provide authorization to practise in the USA. Candidates must satisfy the requirements of the relevant state Board of Nursing and complete the applicable licensing process.",
    },
    {
      q: "How can Edu Hawk worldwide help me study abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities.",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="nursing-page font-sans text-slate-800 bg-white min-h-screen antialiased"
    >
      <style>{`
        @keyframes nursing-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }
        @keyframes nursing-image-in {
          from { opacity: 0; transform: translateX(24px) scale(.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes nursing-card-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nursing-page .nursing-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .65s ease, transform .65s cubic-bezier(.2, .7, .2, 1);
        }
        .nursing-page .nursing-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .nursing-page .nursing-hero-glow {
          animation: nursing-float 8s ease-in-out infinite;
        }
        .nursing-page .nursing-hero-image {
          animation: nursing-image-in .8s ease-out .15s both;
        }
        .nursing-page .nursing-card {
          animation: nursing-card-in .55s ease-out backwards;
          animation-delay: var(--card-delay, 0ms);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .nursing-page .nursing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px rgba(15, 23, 42, .09);
        }
        .nursing-page .nursing-university-image {
          transition: transform .7s cubic-bezier(.2, .7, .2, 1);
        }
        .nursing-page .nursing-card:hover .nursing-university-image {
          transform: scale(1.08);
        }
        .nursing-page section h2 {
          letter-spacing: -.025em;
        }
        @media (max-width: 1023px) {
          .nursing-page .nursing-hero-image {
            height: clamp(14rem, 52vw, 24rem);
          }
        }
        @media (max-width: 639px) {
          .nursing-page {
            overflow-x: clip;
          }
          .nursing-page section:not(.nursing-hero) {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .nursing-page .max-w-6xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .nursing-page h1 {
            font-size: clamp(2rem, 9vw, 2.5rem);
            letter-spacing: -.035em;
          }
          .nursing-page h2 {
            text-wrap: balance;
          }
          .nursing-page section a {
            min-height: 2.75rem;
          }
          .nursing-page .nursing-hero-glow {
            width: 18rem;
            height: 18rem;
          }
          .nursing-page img:not(.nursing-hero-image) {
            max-height: 24rem;
          }
        }
        @media (hover: none) {
          .nursing-page .nursing-card:hover {
            transform: none;
            box-shadow: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .nursing-page *,
          .nursing-page *::before,
          .nursing-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
      {/* ================= HERO ================= */}
      <section className="nursing-hero bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="nursing-hero-glow absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Nursing
              </div>
              
              <div className="text-xs font-semibold tracking-wider uppercase text-indigo-300 mb-3">
                Study Nursing · Abroad
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">
                  Nursing Abroad
                </span>{" "}
                with confidence
              </h1>
              
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Nursing is one of the most in-demand professions worldwide. Studying Nursing abroad opens doors to better clinical training, international exposure and strong career opportunities.
              </p>
              
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Edu Hawk helps you choose the right country and university, understand real costs, and complete the entire admission + visa process with complete transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <a
                  href="#consult"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-indigo-600 text-white hover:bg-indigo-700 transition-all no-underline shadow-lg shadow-indigo-600/25"
                >
                  Book free counselling
                </a>
                <a
                  href="#destinations"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
                >
                  View countries
                </a>
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Nursing students abroad"
                className="nursing-hero-image rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px]"
              />
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium">
                Trusted by 1000+ Indian students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-9">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              At a glance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Nursing Abroad at a glance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="nursing-card bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
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
      <section className="py-16 sm:py-20" id="overview">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Nursing Courses Abroad with Edu Hawk
              </h2>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Nursing is a highly respected and globally demanded profession. Studying Nursing abroad gives students access to advanced clinical training, modern healthcare systems and better career opportunities.
              </p>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Countries like Philippines, Germany, Canada, UK and Australia are popular among Indian students because of quality education, clinical exposure and post-study work options.
              </p>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                At Edu Hawk, we help you choose the right destination based on your budget, academic profile and long-term goals — with complete transparency in fees and process.
              </p>
              
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-indigo-600 text-white hover:bg-indigo-700 transition-all no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80"
                alt="Nursing education abroad"
                className="rounded-2xl shadow-xl object-cover w-full h-[390px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-bold leading-none">12–45L</div>
                <div className="text-sm opacity-90 mt-1">Approx. total budget range</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="nursing-card bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-200"
                style={{ "--card-delay": `${i * 70}ms` }}
              >
                <div className={`w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 ${f.color}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 1. WHY STUDY NURSING IN USA ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="why-usa">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Study in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Study Nursing in the USA?
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Choosing to study nursing in the USA can provide access to a highly developed healthcare and education system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {usaBenefits.map((item, i) => (
              <div
                key={i}
                className="nursing-card bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-200"
                style={{ "--card-delay": `${i * 70}ms` }}
              >
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 bg-indigo-50 text-indigo-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
            Edu Hawk worldwide assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.
          </p>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            Through Edu Hawk study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing nursing education overseas.
          </p>
        </div>
      </section>

      {/* ================= 2. NURSING COURSES IN USA ================= */}
      <section className="py-16 sm:py-20" id="usa-courses">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Programs in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nursing Courses in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              There are several nursing courses in USA for students at different stages of their education.
            </p>
          </div>

          <div className="space-y-6">
            <div className="nursing-card bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-indigo-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center text-sm font-bold">1</span>
                Bachelor of Science in Nursing (BSN)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The Bachelor of Science in Nursing (BSN) is one of the major undergraduate nursing pathways in the USA. Students receive education in areas such as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {bsnSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                    {sub}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Program structure and admission requirements vary between universities.
              </p>
            </div>

            <div className="nursing-card bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-indigo-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 grid place-items-center text-sm font-bold">2</span>
                Associate Degree in Nursing (ADN)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                An Associate Degree in Nursing (ADN) is another pathway into professional nursing education in the USA. Students considering this route should carefully evaluate the university, clinical training, transfer opportunities and state licensing requirements.
              </p>
            </div>

            <div className="nursing-card bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-indigo-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 grid place-items-center text-sm font-bold">3</span>
                Graduate Nursing Programs
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students can look into graduate-level programs like the following if they already have a suitable undergraduate or nursing degree:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {graduatePrograms.map((prog, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                    {prog}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. TOP UNIVERSITIES ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="usa-universities">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Universities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Top Universities for Nursing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The USA is home to several internationally recognised universities offering nursing and healthcare programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {topUniversities.map((uni, i) => (
              <div
                key={i}
                className="nursing-card group relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-white via-white to-indigo-50/70 px-5 py-6 shadow-sm hover:border-indigo-200"
                style={{ "--card-delay": `${i * 90}ms` }}
              >
                <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-indigo-100/60 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" strokeLinejoin="round" />
                      <path d="M7 10v5c2.8 2.7 7.2 2.7 10 0v-5M21 8v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="relative pt-1 text-[15px] font-semibold leading-relaxed text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {uni}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              How to choose the right university
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              The best nursing university in USA is not necessarily the university with the highest overall ranking. Indian students should compare:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {comparisonPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                  {point}
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Always check the latest requirements directly with the university before applying. With Edu Hawk university selection guidance, students can compare suitable institutions based on academic background, budget, preferred location, and long-term professional goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 4. ELIGIBILITY FOR USA ================= */}
      <section className="py-16 sm:py-20" id="usa-eligibility">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              USA Eligibility
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Eligibility to Study Nursing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The nursing eligibility in the USA depends on the program and university.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Eligibility for Undergraduate Nursing</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                International students generally need:
              </p>
              <ul className="space-y-3">
                {undergradEligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-[15px] leading-relaxed mt-4">
                For Indian students, universities may consider Class 10 and Class 12 qualifications and subjects such as Biology, Chemistry and other sciences, depending on the selected nursing program.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Eligibility for Graduate Nursing</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Applicants may need:
              </p>
              <ul className="space-y-3">
                {gradEligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ADMISSION REQUIREMENTS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="usa-admission-req">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Admission Requirements
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nursing Admission Requirements in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The nursing admission requirements in USA vary according to the university and program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Requirements</h3>
              <ul className="space-y-3">
                {admissionAcademic.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">English-Language Requirements</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Depending on the university, accepted tests may include:
              </p>
              <div className="flex flex-wrap gap-2.5 mb-4">
                {englishTests.map((test, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-indigo-50 border border-indigo-200 text-indigo-700"
                  >
                    {test}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The required score differs by university and program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. COST ================= */}
      <section className="py-16 sm:py-20" id="usa-cost">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              USA Cost
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Cost of Studying Nursing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The cost of nursing in USA depends on several factors, including the university, program, location and duration of study.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Tuition Fees</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Tuition varies considerably between public and private universities and between undergraduate and graduate nursing programs.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Living Expenses</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students should budget for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {livingExpenses.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">How Much Does It Cost to Study Nursing in USA?</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Instead of considering tuition alone, students should calculate the total cost of studying nursing in USA, including tuition, accommodation, insurance, transportation and other university-related expenses. Scholarships and university-based financial assistance may be available depending on the institution and student's eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 7. ADMISSION PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="usa-admission">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              USA Admission Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Nursing Admission Process in the USA
            </h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              The nursing admission process in USA generally involves several stages.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {admissionSteps.map((s, i) => (
              <div key={i} className="flex gap-5 pb-8 relative">
                {i < admissionSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-base grid place-items-center relative z-10 shadow-md shadow-indigo-600/30">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. LICENSING ================= */}
      <section className="py-16 sm:py-20" id="usa-licensing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Licensing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nursing Licensing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Understanding nursing licensing in USA is essential for international students. Studying nursing does not automatically mean that a student is licensed to practise as a nurse. Nursing licensure is regulated by individual U.S. states, and requirements can differ between states.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold mb-3">NCLEX-RN</h3>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Students seeking Registered Nurse licensure generally need to meet the requirements of the relevant state Board of Nursing and pass the National Council Licensure Examination for Registered Nurses (NCLEX-RN). The examination is used by U.S. nursing regulatory bodies as part of the registered nurse licensure process.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Internationally Educated Nurses</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Nurses who completed their education outside the USA may have additional requirements, which can include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {licensingPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Important for Indian Students</h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              If your long-term goal is to work as a nurse in USA, you should identify your intended state and review its Board of Nursing requirements before selecting your education pathway.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. SALARY & CAREERS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="usa-careers">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Careers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nursing Salary and Job Opportunities in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The nursing job market in USA offers opportunities across a wide range of healthcare settings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {workSettings.map((setting, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-slate-700 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                {setting}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white text-center shadow-xl mb-10">
            <div className="text-sm font-medium opacity-90 mb-2">Registered Nurse Median Salary (USA)</div>
            <div className="text-4xl sm:text-5xl font-bold mb-3">$97,550</div>
            <p className="text-white/85 text-[15px] max-w-xl mx-auto leading-relaxed">
              According to the U.S. Bureau of Labor Statistics, the median annual wage for Registered Nurses was $97,550 in May 2025. Actual salary varies by state, city, experience, specialty, employer and work setting. BLS projects 6% employment growth from 2025 to 2035 with approximately 180,800 openings per year on average.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-5">Nursing Career Opportunities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium text-slate-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. DOCUMENTS ================= */}
      <section className="py-16 sm:py-20" id="usa-documents">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Documents
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Documents Required to Study Nursing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The documents required to study nursing in USA vary by university and program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Documents</h3>
              <ul className="space-y-3">
                {academicDocs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Application Documents</h3>
              <ul className="space-y-3">
                {applicationDocs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Financial & Visa Documents</h3>
              <ul className="space-y-3">
                {financialVisaDocs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GENERAL ELIGIBILITY ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="eligibility">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
                Eligibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Who can apply for Nursing abroad?
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                Basic requirements for most popular destinations. Exact criteria can vary by university and country.
              </p>
              
              <ul className="space-y-3.5">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-800 leading-snug">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-indigo-50 text-indigo-600 grid place-items-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2.5">
                Not sure if you are eligible?
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-5">
                Share your Class 12 marks and preferred countries. We will tell you honestly which options are realistic for your profile and budget.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-indigo-600 text-white hover:bg-indigo-700 transition-all no-underline"
              >
                Book free eligibility check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="py-16 sm:py-20" id="destinations">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Popular destinations for Nursing
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
              We help you compare fees, clinical exposure, job opportunities, safety and recognition so you can choose the right country.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {destinations.map((d, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border ${
                  d.highlight
                    ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                {d.highlight && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mr-1.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {d.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="nursing-card relative rounded-2xl overflow-hidden h-60 group shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Study Nursing in Philippines"
                loading="lazy"
                className="nursing-university-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Philippines</h4>
                  <p className="text-white/80 text-sm">Most popular & affordable</p>
                </div>
              </div>
            </div>
            
            <div className="nursing-card relative rounded-2xl overflow-hidden h-60 group shadow-md">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80"
                alt="Study Nursing in Germany"
                loading="lazy"
                className="nursing-university-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Germany</h4>
                  <p className="text-white/80 text-sm">Strong job opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="nursing-card relative rounded-2xl overflow-hidden h-60 group shadow-md">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80"
                alt="Study Nursing in Canada"
                loading="lazy"
                className="nursing-university-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Canada</h4>
                  <p className="text-white/80 text-sm">High demand & PR pathway</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="process">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              How it works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Your journey with Edu Hawk
            </h2>
            <p className="text-slate-500 text-[15px] max-w-xl mx-auto">
              From the first counselling call to your arrival at the university, we stay with you at every step.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {processSteps.map((s, i) => (
              <div
                key={i}
                className="nursing-card flex gap-5 pb-9 relative"
                style={{ "--card-delay": `${i * 80}ms` }}
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-base grid place-items-center relative z-10">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 sm:py-20" id="faq">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-1.5">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 font-semibold text-[15px] text-left text-slate-900 flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors bg-transparent border-none cursor-pointer font-sans"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl text-slate-400 font-normal flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-20" id="consult">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-5 py-10 text-center text-white shadow-2xl shadow-indigo-950/15 sm:px-12 sm:py-14">
            <div className="nursing-hero-glow absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
              Ready to start your Nursing journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">
              Book a free counselling session. We will assess your profile, share realistic options and give you a clear cost & process roadmap.
            </p>
            
            <div className="relative flex flex-col justify-center gap-3.5 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/917632949984"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-indigo-600 text-white hover:bg-indigo-700 transition-all no-underline shadow-lg shadow-indigo-600/25"
              >
                WhatsApp us now
              </a>
              <a
                href="tel:+917632949984"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
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

export default NursingAbroad;