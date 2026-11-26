import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SeoHead from "../../../../component/SeoHead.jsx";
import nursingData from "../../../../data/study_abroad/usa/nursing.json";
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  Building2,
  Stethoscope,
  Globe2,
  DollarSign,
  TrendingUp,
  FileCheck,
  Award,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Calendar,
  FileText,
} from "lucide-react";

import upennImg from "../../../../Images/Abroad/USA/Nursing/university-of-pennsylvania.webp";
import jhuImg from "../../../../Images/Abroad/USA/Nursing/johns-hopkins-university.webp";
import dukeImg from "../../../../Images/Abroad/USA/Nursing/duke-university.webp";
import ucsfImg from "../../../../Images/Abroad/USA/Nursing/university-of-california-san-francisco.webp";
import uwImg from "../../../../Images/Abroad/USA/Nursing/university-of-washington.webp";

const universityImageMap = {
  upenn: upennImg,
  jhu: jhuImg,
  duke: dukeImg,
  ucsf: ucsfImg,
  uw: uwImg,
  "University of Pennsylvania": upennImg,
  "Johns Hopkins University": jhuImg,
  "Duke University": dukeImg,
  "University of California, San Francisco": ucsfImg,
  "University of Washington": uwImg,
};

const NursingAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll("section:not(.nursing-hero)");
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach((section) => {
      section.classList.add("nursing-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const stats = nursingData?.stats || [
    { n: "BSN & MSN", l: "Top Degree Pathways" },
    { n: "NCLEX-RN", l: "State Licensure Track" },
    { n: "$97,550", l: "Median Annual Wage (BLS)" },
    { n: "100%", l: "Visa & Admission Support" },
  ];

  const benefits = nursingData?.benefits || [
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

  const bsnSubjects = nursingData?.courses?.bsn?.subjects || [
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

  const graduatePrograms = nursingData?.courses?.graduate?.programs || [
    "Master of Science in Nursing (MSN)",
    "Doctor of Nursing Practice (DNP)",
    "Nursing Leadership",
    "Nursing Education",
    "Advanced Nursing Practice",
    "Specialised Nursing Programs",
  ];

  const universities = nursingData?.universities || [
    {
      id: "upenn",
      name: "University of Pennsylvania",
      location: "Philadelphia, Pennsylvania",
      image: "university-of-pennsylvania.webp",
      tag: "Ivy League Institution",
      desc: "Ranked among the premier nursing schools globally, Penn Nursing integrates rigorous coursework with advanced clinical exposure at the Hospital of the University of Pennsylvania.",
    },
    {
      id: "jhu",
      name: "Johns Hopkins University",
      location: "Baltimore, Maryland",
      image: "johns-hopkins-university.webp",
      tag: "World-Renowned Healthcare Leader",
      desc: "Consistently recognized as a global leader in nursing education and research, affiliated with the world-famous Johns Hopkins Hospital and health system.",
    },
    {
      id: "duke",
      name: "Duke University",
      location: "Durham, North Carolina",
      image: "duke-university.webp",
      tag: "Top Clinical Simulation & Research",
      desc: "Duke University School of Nursing is renowned for its clinical innovation, advanced simulation labs, accelerated BSN, and high NCLEX-RN passing rates.",
    },
    {
      id: "ucsf",
      name: "University of California, San Francisco",
      location: "San Francisco, California",
      image: "university-of-california-san-francisco.webp",
      tag: "Health Sciences Pioneer",
      desc: "UCSF School of Nursing focuses exclusively on health sciences and healthcare delivery, offering top graduate, MSN, and doctoral nursing programs.",
    },
    {
      id: "uw",
      name: "University of Washington",
      location: "Seattle, Washington",
      image: "university-of-washington.webp",
      tag: "Excellence in Public Health Nursing",
      desc: "A top-ranked public university offering comprehensive nursing degrees, high-impact clinical rotations across the Pacific Northwest, and global health research.",
    },
  ];

  const comparisonPoints = nursingData?.comparisonPoints || [
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

  const undergradEligibility = nursingData?.eligibility?.undergrad?.points || [
    "Completion of Class 12 or equivalent qualification",
    "Appropriate academic background in science subjects (Biology, Chemistry, Physics)",
    "English-language proficiency (IELTS / TOEFL / PTE / Duolingo)",
    "Official academic transcripts",
    "Meeting the university's minimum academic percentage or GPA",
  ];

  const gradEligibility = nursingData?.eligibility?.grad?.points || [
    "A recognised bachelor's degree in nursing or relevant healthcare field",
    "Nursing qualification and active nursing registration/licensure, where required",
    "Appropriate academic background & minimum GPA",
    "Professional clinical work experience for certain advanced programs",
    "English-language proficiency test results",
    "Additional university-specific requirements",
  ];

  const academicReqs = nursingData?.requirements?.academic || [
    "Class 10 and Class 12 marksheets",
    "Academic transcripts",
    "Degree certificates, where applicable",
    "Required prerequisite subjects",
    "Minimum GPA or academic percentage",
  ];

  const englishTests = nursingData?.requirements?.english || [
    "IELTS",
    "TOEFL",
    "PTE",
    "Duolingo English Test",
  ];

  const livingExpenses = nursingData?.cost?.livingExpenses || [
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

  const admissionSteps = nursingData?.admissionSteps || [
    {
      step: 1,
      title: "Profile Assessment",
      desc: "Evaluate Academic Background + Science Subjects + English Proficiency + Budget + Career Goals.",
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
      desc: "Plan finances and complete the required U.S. student visa process (Form I-20 & F-1 Visa).",
    },
    {
      step: 8,
      title: "Start Your Nursing Program",
      desc: "Travel to the USA, complete university enrolment and begin your nursing education and clinical training.",
    },
  ];

  const licensingPoints = nursingData?.licensing?.internationalNurses || [
    "Credential evaluation (CGFNS or state equivalent)",
    "Education verification",
    "English-language requirements, where applicable",
    "State-specific documentation",
    "Eligibility determination",
    "NCLEX-RN examination",
  ];

  const workSettings = nursingData?.careers?.workSettings || [
    "Hospitals",
    "Outpatient clinics",
    "Physicians' offices",
    "Home healthcare",
    "Nursing and residential care facilities",
    "Schools",
    "Community healthcare",
    "Government healthcare facilities",
  ];

  const careerAreas = nursingData?.careers?.specializations || [
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

  const academicDocs = nursingData?.documents?.academic || [
    "Class 10 certificate and marksheet",
    "Class 12 certificate and marksheet",
    "Bachelor's degree and transcripts, where applicable",
    "Nursing qualification and registration documents, where applicable",
    "Academic transcripts",
    "Course completion certificates",
  ];

  const applicationDocs = nursingData?.documents?.application || [
    "Valid passport",
    "English-language test score (IELTS/TOEFL/PTE/Duolingo)",
    "Statement of Purpose (SOP)",
    "Letters of Recommendation (LOR)",
    "Resume/CV, where required",
    "Personal essay, where required",
    "Completed application forms",
    "Passport-size photographs, if requested",
  ];

  const visaDocs = nursingData?.documents?.visa || [
    "Proof of financial support",
    "Financial/bank documents as required",
    "University admission letter",
    "Form I-20",
    "Student visa application documents (DS-160, SEVIS fee receipt)",
    "Other documents required by the relevant authorities",
  ];

  const faqs = nursingData?.faqs || [
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
      a: "Yes, Indian-trained nurses may pursue U.S. nursing licensure, but an Indian nursing qualification does not automatically provide authorization to practise in the USA. Candidates must satisfy the requirements of the relevant state Board of Nursing and complete the applicable licensing process.",
    },
    {
      q: "How can Edu Hawk worldwide help me study abroad?",
      a: "Edu Hawk worldwide assists students in exploring suitable universities, understanding admission standards, organizing application documents, and preparing for the study-abroad journey.",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="nursing-page font-sans text-slate-800 bg-white min-h-screen antialiased"
    >
      <SeoHead
        title={
          nursingData?.seo?.title ||
          "Study Nursing in USA for Indian Students | BSN, Top Universities, NCLEX & Fees"
        }
        description={
          nursingData?.seo?.description ||
          "Comprehensive guide for Indian students to study Nursing in the USA. Explore BSN & graduate programs, top universities, tuition fees, NCLEX-RN licensing, salary & career scope."
        }
        keywords={nursingData?.seo?.keywords?.join(", ")}
        path="/study-abroad/usa/nursing"
        ogType="website"
      >
        {faqs?.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            })}
          </script>
        )}
      </SeoHead>

      <style>{`
        @keyframes nursing-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        .nursing-hero-image {
          animation: nursing-float 7s ease-in-out infinite;
          will-change: transform;
        }
        .nursing-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nursing-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="nursing-hero bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="nursing-hero-glow absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-4 flex items-center gap-1.5 flex-wrap">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link to="/study-abroad" className="hover:text-white transition-colors">Study Abroad</Link>
                <span>›</span>
                <span className="text-white/80">USA</span>
                <span>›</span>
                <span className="text-indigo-300 font-medium">Nursing</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
                
                <span>Premier US Healthcare Education</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                  Nursing in the USA
                </span>{" "}
                for Indian Students
              </h1>

              <p className="text-base sm:text-lg text-white/80 max-w-xl mb-8 leading-relaxed font-light">
                {nursingData?.hero?.subtitle ||
                  "A comprehensive roadmap on Bachelor of Science in Nursing (BSN), top accredited universities, NCLEX-RN licensure, cost breakdown, and high-demand healthcare careers in the United States."}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-base bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#usa-universities"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-base border border-white/25 text-white hover:bg-white/10 hover:border-white transition-all"
                >
                  View Top Universities
                </a>
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                  alt="Nursing students in USA"
                  className="nursing-hero-image object-cover w-full h-64 sm:h-80 lg:h-[440px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-200">
                    <span className="font-semibold text-white">Median Registered Nurse Wage:</span>
                    <span className="text-emerald-400 font-bold">$97,550 / year (BLS)</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">180,800+ Annual Openings Projected in the US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:border-indigo-300 transition-colors"
              >
                <div className="text-xs sm:text-sm text-slate-500 font-medium mb-1">
                  {item.l}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-950">
                  {item.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 1. WHY STUDY NURSING IN THE USA? ================= */}
      <section className="py-10 sm:py-14" id="why-usa">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Why Study Nursing in the USA?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Access One of the World's Most Advanced Healthcare Systems
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Choosing to study nursing in the USA provides access to cutting-edge clinical learning, internationally recognized credentials, and extensive career opportunities across state and private healthcare networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {i === 0 && <Globe2 size={24} />}
                  {i === 1 && <Building2 size={24} />}
                  {i === 2 && <BookOpen size={24} />}
                  {i === 3 && <Stethoscope size={24} />}
                  {i === 4 && <TrendingUp size={24} />}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Edu Hawk Worldwide Guidance Banner */}
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck size={16} /> Edu Hawk Worldwide Support
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Exploring Nursing Opportunities in the United States?
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Edu Hawk assists students in exploring international study options, comprehending university admission standards, and preparing end-to-end for the overseas education journey.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3 rounded-xl bg-white text-indigo-950 font-bold hover:bg-amber-300 transition-colors shadow-md text-sm whitespace-nowrap"
            >
              Get Free Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. NURSING COURSES IN THE USA ================= */}
      <section className="py-10 sm:py-14 bg-slate-50" id="usa-courses">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Nursing Pathways
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nursing Courses in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              There are several nursing courses in the USA designed for international students at different stages of their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* BSN */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Bachelor of Science in Nursing (BSN)
                  </h3>
                  <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
                    Primary 4-Year Undergraduate Pathway
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                The Bachelor of Science in Nursing (BSN) is one of the major undergraduate nursing pathways in the USA. It provides thorough theoretical knowledge, hands-on laboratory simulation, and supervised clinical practice.
              </p>

              <h4 className="font-semibold text-slate-900 text-sm mb-3">
                Key Subjects Covered in BSN Curriculum:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                {bsnSubjects.map((sub, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 italic">
                * Note: Program structure and admission requirements vary between universities.
              </p>
            </div>

            {/* ADN & Graduate */}
            <div className="space-y-6">
              {/* ADN */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Associate Degree in Nursing (ADN)
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  An Associate Degree in Nursing (ADN) is another 2-year pathway into professional nursing education in the USA. Students considering this route should carefully evaluate university clinical training, transfer credits to BSN, and state licensing regulations.
                </p>
              </div>

              {/* Graduate Programs */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Stethoscope size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Graduate Nursing Programs
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  For students with a recognized undergraduate nursing degree, graduate tracks include:
                </p>
                <div className="space-y-1.5">
                  {graduatePrograms.map((prog, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. TOP UNIVERSITIES FOR NURSING IN THE USA ================= */}
      <section className="py-10 sm:py-14" id="usa-universities">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Featured US Institutions
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Top Universities for Nursing in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              The USA is home to several internationally recognised universities offering world-class nursing and healthcare education. Explore five premier institutions with accredited clinical programs:
            </p>
          </div>

          {/* University Cards with WebP Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {universities.map((uni, i) => {
              const imgSrc = universityImageMap[uni.id] || universityImageMap[uni.name] || upennImg;
              return (
                <div
                  key={uni.id || i}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={imgSrc}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 bg-indigo-900/85 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/15">
                      {uni.tag}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors mb-1.5">
                        {uni.name}
                      </h3>
                      <div className="flex items-center text-xs text-slate-500 mb-3.5">
                        <MapPin size={14} className="mr-1 text-indigo-500 shrink-0" />
                        <span>{uni.location}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {uni.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 size={13} /> Accredited Nursing School
                      </span>
                      <Link
                        to="/contact"
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        Enquire <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* How to Choose Guide */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              How to Choose the Right University in the USA
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              The best nursing university in the USA is not necessarily the institution with the highest overall global ranking. Indian students should evaluate and compare:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
              {comparisonPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Always check the latest admission and prerequisite criteria directly with the university before applying. With <strong>Edu Hawk university selection guidance</strong>, students can compare suitable institutions based on academic background, budget, preferred location, and long-term professional goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 4. ELIGIBILITY TO STUDY NURSING IN THE USA ================= */}
      <section className="py-10 sm:py-14 bg-slate-50" id="usa-eligibility">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Eligibility Criteria
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Eligibility to Study Nursing in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Nursing eligibility in the USA depends on whether you are applying for an undergraduate (BSN) or graduate (MSN/DNP) degree.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Undergrad */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Eligibility for Undergraduate Nursing (BSN)
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                International students seeking undergraduate admission generally require:
              </p>
              <ul className="space-y-3 mb-5">
                {undergradEligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-3.5 text-xs text-indigo-900 leading-relaxed">
                <strong>For Indian students:</strong> Universities consider Class 10 & 12 marksheets with subjects such as Biology, Chemistry, and other sciences depending on the specific nursing school.
              </div>
            </div>

            {/* Graduate */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Award size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Eligibility for Graduate Nursing (MSN / DNP)
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Applicants pursuing advanced practice nursing or leadership programs typically need:
              </p>
              <ul className="space-y-3 mb-5">
                {gradEligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-sky-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-slate-100/80 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed">
                <strong>Registered Nurse Status:</strong> Prior clinical experience and active licensure verification are often mandated for specialty nurse practitioner (NP) tracks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. NURSING ADMISSION REQUIREMENTS IN THE USA ================= */}
      <section className="py-10 sm:py-14" id="usa-admission-req">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Prerequisites
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nursing Admission Requirements in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Admission requirements vary according to individual university departments and state licensing board standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <FileCheck size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Academic Requirements</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Applicants need to demonstrate consistent academic performance in prerequisite subjects:
              </p>
              <ul className="space-y-3">
                {academicReqs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-violet-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Globe2 size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">English-Language Requirements</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                International students must verify English language proficiency. Commonly accepted tests:
              </p>
              <div className="flex flex-wrap gap-2.5 mb-5">
                {englishTests.map((test, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold"
                  >
                    {test}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                * Note: Minimum required band/scores vary by university and program level. Edu Hawk helps identify universities offering test waivers or specific benchmark cut-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. COST OF STUDYING NURSING IN THE USA ================= */}
      <section className="py-10 sm:py-14 bg-slate-50" id="usa-cost">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Financial Overview
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Cost of Studying Nursing in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              The overall cost depends on university type (public vs private), location, degree level, and duration of study.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Tuition Fees */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <DollarSign size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Tuition Fees</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Tuition varies considerably between state universities (in-state vs out-of-state rates) and private universities, as well as between BSN and graduate nursing programs.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium">Public Universities (Out-of-State)</span>
                  <span className="font-semibold text-slate-900">$20,000 – $40,000 / year</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-2">
                  <span className="font-medium">Private Universities</span>
                  <span className="font-semibold text-slate-900">$35,000 – $65,000 / year</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-medium">Scholarships & Grants</span>
                  <span className="font-semibold text-emerald-600">Available on merit</span>
                </div>
              </div>
            </div>

            {/* Living Expenses */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Building2 size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Living & Clinical Expenses</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Students should factor both standard living expenses and nursing-specific clinical costs:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {livingExpenses.map((exp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Calculating the Total Cost of Nursing Education
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Instead of considering tuition alone, students should calculate the total cost of studying nursing in the USA, including tuition, accommodation, health insurance, transportation, clinical background checks, and exam fees. University-based financial assistance and scholarships may be available depending on institutional policy and individual student profile.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 7. NURSING ADMISSION PROCESS IN THE USA ================= */}
      <section className="py-10 sm:py-14" id="usa-admission">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Step-by-Step Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nursing Admission Process in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Applying for nursing in the USA involves several structured stages from profile assessment to US student visa acquisition:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {admissionSteps.map((s, i) => (
              <div
                key={s.step}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs relative flex flex-col justify-between hover:border-indigo-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                      {s.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Stage 0{s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. NURSING LICENSING IN THE USA (NCLEX-RN) ================= */}
      <section className="py-10 sm:py-14 bg-slate-50" id="usa-licensing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Licensure & Regulations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nursing Licensing in the USA (NCLEX-RN)
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Understanding nursing licensing in the USA is essential for international students. Studying nursing does not automatically confer a license to practice. Licensure is governed by individual state Boards of Nursing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* NCLEX-RN */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  The NCLEX-RN Examination
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Students seeking Registered Nurse (RN) licensure must satisfy the requirements of the relevant state Board of Nursing and pass the National Council Licensure Examination for Registered Nurses (<strong>NCLEX-RN</strong>).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                The NCLEX-RN assesses the essential clinical decision-making, pharmacology, and patient safety skills required to practice safe and effective nursing care in the US healthcare system.
              </p>
            </div>

            {/* Internationally Educated Nurses */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Globe2 size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Internationally Educated Nurses
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Nurses who completed their qualifications outside the USA must fulfill additional requirements prior to authorization:
              </p>
              <ul className="space-y-2">
                {licensingPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important for Indian Students */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-amber-950 mb-2 flex items-center gap-2">
              
              Important for Indian Students:
            </h3>
            <p className="text-amber-900 text-sm leading-relaxed">
              If your long-term goal is to work as a registered nurse in the USA, identify your intended state and review its state Board of Nursing regulations before finalizing your education and clinical pathway. Edu Hawk provides complete clarity on state-by-state licensing criteria.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. SALARY AND JOB OPPORTUNITIES IN THE USA ================= */}
      <section className="py-10 sm:py-14" id="usa-careers">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Career Outlook & Salary
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Nursing Salary and Job Opportunities in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              The nursing job market in the United States offers robust demand, strong job security, and competitive remuneration across public and private healthcare facilities.
            </p>
          </div>

          {/* BLS Stats Card */}
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  BLS Official Data (May 2025)
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 mt-1 mb-2">
                  $97,550
                </div>
                <div className="text-sm text-slate-300">
                  Median Annual Wage for Registered Nurses in the USA
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Employment Growth (2025-2035)
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1 mb-2">
                  +6%
                </div>
                <div className="text-sm text-slate-300">
                  Projected growth rate across US hospitals and clinical practices
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  Annual Job Openings
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mt-1 mb-2">
                  ~180,800
                </div>
                <div className="text-sm text-slate-300">
                  Average yearly job openings projected nationwide
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Work Settings */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Where Registered Nurses Work in the USA:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {workSettings.map((set, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Building2 size={16} className="text-indigo-600 shrink-0" />
                    <span>{set}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nursing Specializations */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Nursing Career Specializations:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {careerAreas.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 10. DOCUMENTS REQUIRED TO STUDY NURSING IN THE USA ================= */}
      <section className="py-10 sm:py-14 bg-slate-50" id="usa-documents">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Application Checklist
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Documents Required to Study Nursing in the USA
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              The documents required to study nursing in the USA vary by university and program level:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Academic */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Academic Records</h3>
              </div>
              <ul className="space-y-2.5">
                {academicDocs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                  <FileCheck size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Application File</h3>
              </div>
              <ul className="space-y-2.5">
                {applicationDocs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-violet-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Financial & Visa */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <DollarSign size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Financial & Visa</h3>
              </div>
              <ul className="space-y-2.5">
                {visaDocs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 11. FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-10 sm:py-14" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-2">
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Frequently Asked Questions About Nursing in the USA
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 font-bold text-base text-left text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors bg-transparent border-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA CONSULTATION ================= */}
      <section className="py-10 sm:py-14" id="consult">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-12 text-center text-white shadow-2xl sm:px-12 sm:py-16">
            <div className="nursing-hero-glow absolute top-0 right-0 w-80 h-80 bg-indigo-600/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
                Start Your Nursing Career in USA
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Apply for Nursing in the USA?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Book a free 1-on-1 counselling session with Edu Hawk's international education advisors. We assess your Class 12 marks or bachelor's degree, shortlist accredited US universities, and assist with document preparation and visa filing.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
                >
                  <span>Book Free Counselling</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+917632949984"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-base border border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  Call +91 76329 49984
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NursingAbroad;
