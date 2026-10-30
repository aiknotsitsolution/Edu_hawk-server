import React, { useEffect, useRef, useState } from "react";
import California_San_Francisco from "../../../Images/Abroad/USA/Pharmacy_USA/California,_San_Francisco.jpg.png";
import Michigan_Ann_Arbor from "../../../Images/Abroad/USA/Pharmacy_USA/Michigan_Ann_Arbor.jpg.png";
import North_Carolina_Chapel_Hill from "../../../Images/Abroad/USA/Pharmacy_USA/North_Carolina_at_Chapel_Hil.jpg.png";
import Texas_Austin from "../../../Images/Abroad/USA/Pharmacy_USA/Texas_at_Austin.jpg.png";

const PharmacyAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll("section");
    if (!sections) return;

    if (!("IntersectionObserver" in window)) {
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
      section.classList.add("pharmacy-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Programs", value: "B.Pharm, Pharm.D, M.Pharm & related courses" },
    { label: "Countries", value: "UK, Canada, Australia, USA, Ireland & more" },
    { label: "Support", value: "Complete guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & career focus" },
  ];

  const features = [
    {
      title: "Right university for your goals",
      desc: "We compare accreditation, curriculum, internships, ranking and entry requirements before recommending a university.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Clear cost planning",
      desc: "Understand tuition, living costs, insurance, travel and visa expenses before committing to a study plan.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Complete application support",
      desc: "From shortlisting and documents to applications, offers, scholarships and visa preparation — we stay with you throughout.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Accommodation and arrival help",
      desc: "Plan accommodation, travel, banking and your first days on campus before you leave India.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "English and profile guidance",
      desc: "Get practical help with IELTS, PTE, SOP, LORs and profile building where your chosen university needs them.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Honest destination comparison",
      desc: "Compare UK, Canada, Australia, USA, Ireland, Germany and more by cost, career outcomes, licensing and lifestyle.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const usaBenefits = [
    {
      title: "High-quality education",
      desc: "Clinical and practical learning are integrated with pharmaceutical sciences in professional pharmacy programs.",
    },
    {
      title: "Clinical Exposure",
      desc: "PharmD candidates participate in supervised practice in suitable medical environments.",
    },
    {
      title: "Research Opportunities",
      desc: "Investigate pharmacology, clinical research, pharmaceutical development, and drug discovery.",
    },
    {
      title: "Options for Specialization",
      desc: "Take up fields like pharmacotherapy, clinical pharmacy, oncology, and pharmaceutical research.",
    },
    {
      title: "Diverse Career Opportunities",
      desc: "Depending on your qualifications, pursue jobs in hospitals, community pharmacies, pharmaceutical companies, research, and academia.",
    },
    {
      title: "Advanced Healthcare Setting",
      desc: "Acquire knowledge of patient safety, medication administration.",
    },
  ];

  const pharmdSubjects = [
    "Chemistry of Medicines",
    "Medicines",
    "Medication",
    "Pharmaceutical Calculations in Clinical Pharmacy",
    "Ethics and Law in Pharmacy",
    "Care for Patients",
    "Pharmaceutical Sciences: Supervised Clinical Practice",
  ];

  const postgraduatePrograms = [
    "Pharmaceutical Sciences Master of Science",
    "Pharmacology Master of Science",
    "Drug Development Master of Science",
    "Pharmaceutical Sciences Doctor of Philosophy",
    "Programs in clinical research and regulatory science",
  ];

  const topUniversities = [
    {
      img: North_Carolina_Chapel_Hill,
      name: "University of North Carolina at Chapel Hill",
      desc: "UNC Eshelman School of Pharmacy",
    },
    {
      img: California_San_Francisco,
      name: "University of California, San Francisco",
      desc: "UCSF School of Pharmacy",
    },
    {
      img: Michigan_Ann_Arbor,
      name: "University of Michigan–Ann Arbor",
      desc: "University of Michigan College of Pharmacy",
    },
    {
      img: Texas_Austin,
      name: "University of Texas at Austin",
      desc: "UT Austin College of Pharmacy",
    },
  ];

  const comparisonPoints = [
    "Program type and admission pathway",
    "Prerequisite courses and academic eligibility",
    "Tuition, fees, and living costs",
    "Accreditation and professional requirements",
    "Experiential learning and research opportunities",
    "Location and student support services",
  ];

  const after12Eligibility = [
    "Completed Class 12 or equivalent education",
    "A suitable academic background in science",
    "Required subjects, such as Chemistry and Biology, where specified",
    "English-language proficiency, if required",
    "The academic preparation needed for university prerequisite courses",
  ];

  const bpharmEligibility = [
    "Pharmaceutical sciences master's programs",
    "Pharmacology and drug development programs",
    "Research-based postgraduate degrees",
    "PharmD admission pathways, where eligible",
  ];

  const admissionAcademic = [
    "Class 10 and Class 12 marksheets",
    "Undergraduate transcripts, where applicable",
    "Prerequisite science coursework",
    "Minimum GPA or equivalent academic performance",
    "Degree certificates for postgraduate programs",
  ];

  const englishTests = ["IELTS", "TOEFL", "PTE Academic", "Another university-approved test"];

  const additionalRequirements = [
    "Letters of Recommendation",
    "Personal Statement or Statement of Purpose",
    "Resume/CV",
    "Interview",
    "Credential evaluation",
    "Entrance examination, if required",
  ];

  const principalCosts = [
    {
      title: "Tuition",
      desc: "Professional PharmD programs can be expensive, especially for students from other countries.",
    },
    {
      title: "Living Expenses",
      desc: "Set aside money for personal expenses, lodging, food, travel, and health insurance.",
    },
    {
      title: "Academic Expenses",
      desc: "Books, lab supplies, equipment, clinical requirements, and university fees are examples of additional expenses.",
    },
    {
      title: "Other Expenses",
      desc: "Students should also think about the costs associated with applying, traveling, obtaining a visa, and paying for any necessary tests or licenses.",
    },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Profile Assessment",
      desc: "Examine subjects, budget, English proficiency, and academic background.",
    },
    {
      step: 2,
      title: "Select a Route",
      desc: "Choose an appropriate PharmD, pre-pharmacy, or pharmaceutical sciences program.",
    },
    {
      step: 3,
      title: "Make a shortlist of universities",
      desc: "Compare their international admission policies, fees, duration, accreditation, and eligibility.",
    },
    {
      step: 4,
      title: "Finish Prerequisites",
      desc: "Complete any necessary undergraduate coursework.",
    },
    {
      step: 5,
      title: "Get Your Documents Ready",
      desc: "Gather test results, passports, transcripts, and supporting documentation.",
    },
    {
      step: 6,
      title: "Submit Applications",
      desc: "Use the university's official application system to submit an application.",
    },
    {
      step: 7,
      title: "Admission and Interview",
      desc: "Review the admission offer and finish any further evaluations.",
    },
    {
      step: 8,
      title: "Financial and Visa Preparation",
      desc: "Necessary funds and student visa paperwork.",
    },
    {
      step: 9,
      title: "Enrolment",
      desc: "Begin the selected pharmacy program and complete its academic and practical requirements.",
    },
  ];

  const licensingPoints = [
    "completion of a pharmacy program that qualifies",
    "Getting through the NAPLEX, the North American Pharmacist Licensure Examination",
    "completing any necessary state-specific legal examination",
    "completing the necessary number of hours for an internship or practical experience",
    "Fulfilling additional state-specific requirements",
  ];

  const jobOpportunities = [
    "Community and Retail Pharmacy",
    "Hospital Pharmacy",
    "Clinical Pharmacy",
    "Pharmaceutical Research",
    "Drug Development",
    "Regulatory Affairs",
    "Pharmacovigilance and Drug Safety",
    "Pharmaceutical Manufacturing",
    "Medical Affairs",
    "Academic Research",
  ];

  const academicDocs = [
    "Scholarly Writings",
    "Certificates for Classes 10 and 12",
    "Transcripts and academic grades",
    "Transcripts and undergraduate degree, if any",
    "Required course records",
    "Certificates of degree for postgraduate applications",
  ];

  const applicationDocs = [
    "A valid passport",
    "Test results in English, if necessary",
    "Personal Statement or Statement of Purpose",
    "Recommendation Letters",
    "CV or resume, if necessary",
    "Evaluation of credentials, if requested",
    "Forms for applications",
    "Records of interviews or exams, if applicable",
  ];

  const financialVisaDocs = [
    "Proof of financial support",
    "Required bank or sponsorship doc",
    "Student visa application documents",
    "Other documents requested by the university or authorities",
  ];

  const eligibility = [
    "Class 12 with PCB or PCM (Physics, Chemistry, Biology/Mathematics) with minimum required percentage",
    "English language score such as IELTS, PTE or TOEFL where required by the university",
    "Valid passport and academic transcripts prepared ahead of deadlines",
    "A focused statement of purpose and recommendation letters for eligible courses",
    "Proof of funds and financial documents for the visa process",
    "A realistic study plan that connects your pharmacy course with your future goals",
  ];

  const destinations = [
    { name: "United Kingdom", highlight: true },
    { name: "Canada", highlight: true },
    { name: "Australia", highlight: true },
    { name: "United States", highlight: true },
    { name: "Ireland", highlight: true },
    { name: "Germany", highlight: false },
    { name: "New Zealand", highlight: false },
    { name: "UAE", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your academic background, goals and budget. We assess realistic options honestly.",
    },
    {
      step: 2,
      title: "Course and university shortlisting",
      desc: "Based on your profile, budget and preference we shortlist suitable pharmacy courses and universities.",
    },
    {
      step: 3,
      title: "Application and offer",
      desc: "We help with applications, documents, SOP, LORs and scholarship opportunities until you receive an offer.",
    },
    {
      step: 4,
      title: "Visa guidance and documentation",
      desc: "Prepare your financial documents, visa file and interview answers with a clear checklist.",
    },
    {
      step: 5,
      title: "Pre-departure and arrival support",
      desc: "Plan accommodation, travel, banking and your first days on campus before you fly.",
    },
  ];

  const faqs = [
    {
      q: "After Class 12, are Indian students able to pursue pharmacy studies in the United States?",
      a: "Indeed. Pre-pharmacy routes and qualified PharmD programs are available to Indian students. While some universities offer structured entry pathways after high school, many professional programs require prerequisite undergraduate coursework prior to PharmD study.",
    },
    {
      q: "What is the primary pharmacy degree in the United States?",
      a: "In the United States, the primary professional degree for students aspiring to become pharmacists is the Doctor of Pharmacy (PharmD). Students interested in research and industry can also pursue degrees in pharmaceutical sciences.",
    },
    {
      q: "After earning a BPharm in India, can I pursue a PharmD in the USA?",
      a: "Yes, possibly. The university determines eligibility. Although prior coursework does not ensure exemptions or a shorter degree, some universities take international pharmacy graduates into consideration for admission or advanced standing.",
    },
    {
      q: "How much does a pharmacist make in the United States?",
      a: "The U.S. Bureau of Labor Statistics reports that in May 2025, the median yearly salary for pharmacists was $140,910. Location, experience, employer, and workplace all affect actual earnings.",
    },
    {
      q: "Can Indian BPharm graduates work as pharmacists in the USA?",
      a: "They may pursue U.S. pharmacist licensure, but an Indian BPharm degree does not automatically provide the right to practise. International graduates generally need to meet the FPGEC certification pathway, followed by applicable state licensing requirements.",
    },
    {
      q: "How can Edu Hawk worldwide help me study Pharmacy abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities.",
    },
    {
      q: "Which country is best for Pharmacy abroad?",
      a: "There is no single best country. The right choice depends on your budget, academic profile, preferred course (B.Pharm / Pharm.D / M.Pharm), licensing pathway and long-term career plans. UK, Canada and Australia are currently the most popular among Indian students.",
    },
    {
      q: "How much does it cost to study Pharmacy abroad?",
      a: "Costs vary by country and university. Your total budget includes tuition, accommodation, living expenses, insurance, travel and visa costs. We share a realistic estimate before you apply.",
    },
    {
      q: "Do I need IELTS or another English test?",
      a: "Most universities in UK, Canada, Australia and USA ask for IELTS, PTE or TOEFL. Some universities offer waivers based on your previous medium of instruction. Requirements are checked university by university.",
    },
    {
      q: "Can I work while studying Pharmacy abroad?",
      a: "Yes. Most popular destinations allow international students to work part-time during the course (usually 20 hours per week) and full-time during holidays, subject to visa conditions.",
    },
    {
      q: "When should I start my application?",
      a: "Starting 8–12 months before your intended intake gives you enough time for testing, shortlisting, documents, applications and visa preparation.",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="pharmacy-page font-sans text-slate-800 bg-white min-h-screen antialiased"
    >
      <style>{`
        @keyframes pharmacy-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -18px, 0); }
        }
        @keyframes pharmacy-image-in {
          from { opacity: 0; transform: translateX(24px) scale(.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        .pharmacy-page .pharmacy-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .65s ease, transform .65s cubic-bezier(.2, .7, .2, 1);
        }
        .pharmacy-page .pharmacy-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .pharmacy-page section .bg-white.border {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .pharmacy-page section .bg-white.border:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px rgba(15, 23, 42, .09);
        }
        .pharmacy-page .pharmacy-hero-glow {
          animation: pharmacy-float 8s ease-in-out infinite;
        }
        .pharmacy-page .pharmacy-hero-image {
          animation: pharmacy-image-in .8s ease-out both;
        }
        .pharmacy-page section h2 {
          letter-spacing: -.025em;
        }
        @media (max-width: 1023px) {
          .pharmacy-page .pharmacy-hero-image {
            height: clamp(14rem, 52vw, 24rem);
          }
        }
        @media (max-width: 639px) {
          .pharmacy-page {
            overflow-x: clip;
          }
          .pharmacy-page section:not(:first-of-type) {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .pharmacy-page .max-w-6xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .pharmacy-page h1 {
            font-size: clamp(2rem, 9vw, 2.5rem);
            letter-spacing: -.035em;
          }
          .pharmacy-page h2 {
            text-wrap: balance;
          }
          .pharmacy-page section a {
            min-height: 2.75rem;
          }
          .pharmacy-page .pharmacy-hero-glow {
            width: 18rem;
            height: 18rem;
          }
        }
        @media (hover: none) {
          .pharmacy-page section .bg-white.border:hover {
            transform: none;
            box-shadow: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pharmacy-page .pharmacy-reveal,
          .pharmacy-page .pharmacy-hero-glow,
          .pharmacy-page .pharmacy-hero-image {
            animation: none;
            transition: none;
          }
          .pharmacy-page section .bg-white.border {
            transition: none;
          }
        }
      `}</style>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="pharmacy-hero-glow absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Pharmacy
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Pharmacy · Abroad
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Pharmacy in USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Students interested in careers in pharmacy, pharmaceutical sciences, and healthcare frequently travel to the United States. Professional pharmacy education, laboratory training, clinical education, and research opportunities are all provided by American universities.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Indian students must be aware of course options, eligibility, admission requirements, tuition costs, and pharmacist licensing before deciding to study pharmacy in the United States. The Doctor of Pharmacy (PharmD), which prepares students for pharmacist practices, is the primary professional degree.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <a
                  href="#consult"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
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
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=80"
                alt="Pharmacy students in USA"
                className="pharmacy-hero-image rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px]"
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
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              At a glance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Pharmacy Abroad at a glance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
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
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Study Pharmacy in USA for Indian Students
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students interested in careers in pharmacy, pharmaceutical sciences, and healthcare frequently travel to the United States. Professional pharmacy education, laboratory training, clinical education, and research opportunities are all provided by American universities.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Indian students must be aware of course options, eligibility, admission requirements, tuition costs, and pharmacist licensing before deciding to study pharmacy in the United States. The Doctor of Pharmacy (PharmD), which prepares students for pharmacist practices, is the primary professional degree.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                Edu Hawk worldwide assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80"
                alt="Pharmacy education in USA"
                className="rounded-2xl shadow-xl object-cover w-full h-[390px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-bold leading-none">20–45L</div>
                <div className="text-sm opacity-90 mt-1">Approx. total budget range</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250"
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

      {/* ================= 1. WHY STUDY PHARMACY IN USA ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="why-usa">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Study in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Come to the USA to Study Pharmacy?
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Studying pharmacy in the US offers access to advanced pharmaceutical education and a range of career options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {usaBenefits.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250"
              >
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 bg-blue-50 text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-[15px] leading-relaxed">
            Through Edu Hawk study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing pharmacy education overseas.
          </p>
        </div>
      </section>

      {/* ================= 2. PHARMACY COURSES IN USA ================= */}
      <section className="py-16 sm:py-20" id="usa-courses">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Programs in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Pharmacy Courses in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Professional pharmacy degrees, pharmaceutical science undergraduate programs, and postgraduate study options are all available in the USA.
            </p>
          </div>

          <div className="space-y-6">
            {/* PharmD */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 grid place-items-center text-sm font-bold">1</span>
                PharmD, or Doctor of Pharmacy
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The main professional degree for students who want to work as pharmacists in the United States is the Doctor of Pharmacy (PharmD).
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The conventional route typically entails four academic years of professional pharmacy education after prerequisite undergraduate coursework. Different program structures, including accelerated options, are available at some universities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {pharmdSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {sub}
                  </div>
                ))}
              </div>
            </div>

            {/* Pharmaceutical Sciences */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 grid place-items-center text-sm font-bold">2</span>
                Pharmaceutical Sciences
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Programs in pharmaceutical sciences, pharmacology, medicinal chemistry, and drug development are available to students who are interested in the science and development of medicines.
              </p>
            </div>

            {/* Master's and Doctoral */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center text-sm font-bold">3</span>
                Master's and Doctoral Programs
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The following are possible postgraduate options, depending on the university:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {postgraduatePrograms.map((prog, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
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
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Universities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Top Universities for Pharmacy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Some well-known U.S. pharmacy schools and universities include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {topUniversities.map((university) => (
              <div
                key={university.name}
                className="relative rounded-2xl overflow-hidden h-60 group"
              >
                <img
                  src={university.img}
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                  <div className="transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">
                      {university.name}
                    </h3>
                    <p className="text-white/80 text-sm">{university.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              How to choose the right university
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Compare each pharmacy program by its admission pathway, academic
              requirements, costs, accreditation, experiential learning, and
              student support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {comparisonPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 text-[15px] text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  {point}
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Purdue University is another well-known pharmacy school. With Edu
              Hawk guidance, students can compare suitable institutions based
              on their background, budget, preferred location, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 4. ELIGIBILITY ================= */}
      <section className="py-16 sm:py-20" id="usa-eligibility">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              USA Eligibility
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Eligibility to Study Pharmacy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The eligibility for pharmacy in USA depends on the course and university.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">For Students After Class 12</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students may explore pre-pharmacy pathways if they have:
              </p>
              <ul className="space-y-3">
                {after12Eligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">For Indian BPharm Graduates</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students with a Bachelor of Pharmacy may explore:
              </p>
              <ul className="space-y-3">
                {bpharmEligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Admission Requirements
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Admission Requirements for Pharmacy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The pharmacy admission requirements in USA vary by institution and program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Requirements</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Applicants may need:
              </p>
              <ul className="space-y-3">
                {admissionAcademic.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-700">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
                International students may be required to submit an accepted English proficiency test, such as:
              </p>
              <div className="flex flex-wrap gap-2.5 mb-4">
                {englishTests.map((test, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-50 border border-blue-200 text-blue-700"
                  >
                    {test}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Additional Requirements</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Depending on the university, applicants may also need:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalRequirements.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. COST ================= */}
      <section className="py-16 sm:py-20" id="usa-cost">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              USA Cost
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Cost of Studying Pharmacy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The length of the program, the location, the university, and the student's residency classification all affect the cost of studying pharmacy in the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {principalCosts.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Planning a Budget</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Determine the total cost of attendance: The total cost of tuition, tuition, housing, food, insurance, study materials, travel, and other necessary expenses.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 7. ADMISSION PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="usa-admission">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              USA Admission Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Pharmacy Admission Process in the USA
            </h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              In the USA, the following steps are usually involved in the pharmacy admission process:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {admissionSteps.map((s, i) => (
              <div key={i} className="flex gap-5 pb-8 relative">
                {i < admissionSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-base grid place-items-center relative z-10 shadow-md shadow-blue-600/30">
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
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Licensing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Pharmacy Licensing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              State boards of pharmacy oversee the licensing of pharmacists in the United States. A degree in pharmacy does not grant one the right to work as a pharmacist.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold mb-3">Requirements for U.S. PharmD Graduates</h3>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              In general, graduates of qualified U.S. PharmD programs must fulfill state requirements, which may include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {licensingPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">For BPharm Graduates from India</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              It is not always possible for an Indian graduate with a BPharm degree to obtain a pharmacy license in the United States.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Internationally educated pharmacists generally need to review the Foreign Pharmacy Graduate Examination Committee (FPGEC) certification process administered through the National Association of Boards of Pharmacy.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Requirements may include education verification, examinations and English-language documentation. FPGEC certification is not itself a pharmacist licence. Candidates must also satisfy the requirements of the relevant state board.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. SALARY & CAREERS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="usa-careers">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Careers
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Pharmacy Salary and Job Opportunities in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Professionals in pharmacy who are qualified can look into opportunities in a number of industries.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-5">Job Opportunities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {jobOpportunities.map((job, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 grid place-items-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium text-slate-800">{job}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="text-sm font-medium opacity-90 mb-2">Pharmacist Median Salary (USA)</div>
            <div className="text-4xl sm:text-5xl font-bold mb-3">$140,910</div>
            <p className="text-white/85 text-[15px] max-w-xl mx-auto leading-relaxed">
              In May 2025, the U.S. Bureau of Labor Statistics reported that the median yearly salary for pharmacists was $140,910. Pharmacist employment is expected to increase by 5% between 2025 and 2035, with an average of 12,500 positions per year. Location, experience, employer, specialty, and work environment all affect actual pay.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 10. DOCUMENTS ================= */}
      <section className="py-16 sm:py-20" id="usa-documents">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Documents
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Documents Required to Study Pharmacy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Depending on the program and university, different documents are needed to study pharmacy in the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Documents</h3>
              <ul className="space-y-3">
                {academicDocs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Documents for Admission</h3>
              <ul className="space-y-3">
                {applicationDocs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Financial and Visa Documents</h3>
              <ul className="space-y-3">
                {financialVisaDocs.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-slate-700">
                    <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
      <section className="py-16 sm:py-20" id="destinations">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Popular destinations for Pharmacy
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {destinations.map((destination) => (
              <span
                key={destination.name}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border ${
                  destination.highlight
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                {destination.name}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed mt-5 max-w-xl">
            Compare tuition, student support, licensing requirements, and career
            pathways to choose the destination that fits your goals.
          </p>
        </div>
      </section>
      {/* ================= GENERAL ELIGIBILITY ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="eligibility">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
                Eligibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Who can apply?
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                Basic requirements for most popular destinations. Exact criteria can vary slightly by university and country.
              </p>
              <ul className="space-y-3.5">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-800 leading-snug">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
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
                Share your Class 12 marks and preferred countries. We will tell you honestly which universities and programs are realistic for your profile and budget.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline"
              >
                Book free eligibility check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="process">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              How it works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Your journey with Edu Hawk
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {processSteps.map((s, i) => (
              <div key={i} className="flex gap-5 pb-9 relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-base grid place-items-center relative z-10">
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
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions About Pharmacy in the USA
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-8 py-14 sm:px-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
              Ready to start your Pharmacy journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">
              Book a free counselling session. We will assess your profile, share realistic options and give you a clear cost & process roadmap.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center relative">
              <a
                href="https://wa.me/917632949984"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
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

export default PharmacyAbroad;