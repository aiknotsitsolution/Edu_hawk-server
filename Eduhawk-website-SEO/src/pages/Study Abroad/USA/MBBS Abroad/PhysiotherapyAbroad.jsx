import React, { useEffect, useRef, useState } from "react";

const PhysiotherapyAbroad = () => {
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
    { label: "Programs", value: "DPT, Pre-PT pathways, MSc & research options" },
    { label: "Countries", value: "USA, UK, Canada, Australia, Ireland & more" },
    { label: "Support", value: "Complete guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & career focus" },
  ];

  const features = [
    {
      title: "Right university for your goals",
      desc: "We compare accreditation, clinical education, ranking, prerequisites and entry requirements before recommending a university.",
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
      desc: "Get practical help with IELTS, PTE, SOP, LORs, observation hours and profile building where your chosen university needs them.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Honest destination comparison",
      desc: "Compare USA, UK, Canada, Australia, Ireland and more by cost, career outcomes, licensing pathways and lifestyle.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const usaBenefits = [
    {
      title: "Advanced Clinical Training",
      desc: "Gain knowledge through hands-on patient care and supervised clinical experiences in modern healthcare settings.",
    },
    {
      title: "Globally Recognized Education",
      desc: "Enrol in physical therapy programs at universities that have received CAPTE accreditation.",
    },
    {
      title: "Modern Rehabilitation",
      desc: "Learn about the tools, techniques and evidence-based approaches used in contemporary rehabilitation.",
    },
    {
      title: "Opportunities for Specialization",
      desc: "Explore fields like orthopedics, neurological rehabilitation, sports rehabilitation and geriatric care.",
    },
    {
      title: "Research and Innovation",
      desc: "Take part in studies related to patient outcomes, rehabilitation science and movement science.",
    },
    {
      title: "Career Opportunities",
      desc: "Depending on your license and employment eligibility, consider roles in hospitals, clinics, sports and home healthcare.",
    },
  ];

  const dptSubjects = [
    "Anatomy and Physiology",
    "Biomechanics and Kinesiology",
    "Therapeutic Exercise",
    "Rehabilitation Science",
    "Patient Evaluation and Assessment",
    "Clinical Practice / Clinical Education",
    "Neurological and Musculoskeletal PT",
  ];

  const postgraduatePrograms = [
    "Exercise Science and Biomechanics",
    "Rehabilitation Research programs",
    "Movement Science Master's options",
    "Doctoral research in related fields",
    "Specialized academic pathways",
  ];

  const topUniversities = [
    {
      name: "University of Southern California",
      desc: "USC Division of Biokinesiology and Physical Therapy",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=85",
    },
    {
      name: "University of Pittsburgh",
      desc: "School of Health and Rehabilitation Sciences",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=85",
    },
    {
      name: "Washington University in St. Louis",
      desc: "Program in Physical Therapy",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=85",
    },
    {
      name: "Northwestern University",
      desc: "Feinberg School of Medicine – Physical Therapy",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=85",
    },
    {
      name: "Duke University",
      desc: "Doctor of Physical Therapy Program",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=85",
    },
  ];

  const comparisonPoints = [
    "Current programme accreditation and status",
    "Required undergraduate prerequisites",
    "Academic performance and GPA expectations",
    "International student admission policies",
    "English-language requirements",
    "Clinical placement structure",
    "Tuition fees and estimated living expenses",
    "Scholarships and financial assistance",
    "Location, accommodation and transportation",
    "Eligibility for the required student visa",
  ];

  const after12Eligibility = [
    "Completed Class 12 or equivalent education from a recognised board",
    "Suitable academic background including biology and science subjects",
    "Meet the admission requirements of the undergraduate institution",
    "Complete the necessary undergraduate coursework before applying to DPT",
    "Demonstrate English-language proficiency when required",
    "Fulfil the academic and documentation requirements of the university",
  ];

  const bptEligibility = [
    "Postgraduate studies in rehabilitation or related fields",
    "Rehabilitation research and academic programmes",
    "Foreign-educated physical therapist licensing pathway (if aiming to practice)",
    "Note: A BPT does not automatically guarantee US licensure or advanced standing",
  ];

  const admissionAcademic = [
    "Class 10 and Class 12 marksheets and certificates",
    "Undergraduate transcripts and degree certificate (if applicable)",
    "Prerequisite science coursework records",
    "Minimum GPA or equivalent academic performance",
    "Credential evaluation for international academic records (when required)",
  ];

  const englishTests = ["IELTS Academic", "TOEFL iBT", "PTE Academic", "Other university-approved tests"];

  const additionalRequirements = [
    "Statement of Purpose or Personal Essay",
    "Letters of Recommendation",
    "Resume / Curriculum Vitae",
    "Relevant healthcare, volunteering or observation experience",
    "Interview",
    "GRE scores (if required by the programme)",
    "Credential evaluation",
  ];

  const principalCosts = [
    {
      title: "Tuition fees",
      desc: "University-specific tuition and programme charges for the DPT and any prerequisite pathway.",
    },
    {
      title: "Living Expenses",
      desc: "Accommodation, food, local travel, personal expenses and health insurance.",
    },
    {
      title: "Academic & Clinical Expenses",
      desc: "Books, learning resources, clinical supplies, placement-related transport and university fees.",
    },
    {
      title: "Other Expenses",
      desc: "Application fees, test fees, credential evaluation, visa costs, flights and initial settlement.",
    },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Evaluation of Academic Profile",
      desc: "Examine grades, science courses, undergraduate credentials, Class 12 results and long-term professional goals.",
    },
    {
      step: 2,
      title: "Choose the Appropriate Study Route",
      desc: "Decide whether you need an undergraduate degree, prerequisite coursework, a DPT programme or a postgraduate route.",
    },
    {
      step: 3,
      title: "Make a shortlist of universities",
      desc: "Compare programme location, deadlines, fees, eligibility, international admission policies and accreditation.",
    },
    {
      step: 4,
      title: "Verify Requirements",
      desc: "Confirm that your educational background meets the subject and credit requirements for each programme.",
    },
    {
      step: 5,
      title: "Get Your Documents Ready",
      desc: "Arrange transcripts, test results, recommendations, SOP and any observation-hour evidence.",
    },
    {
      step: 6,
      title: "Submit Applications",
      desc: "Apply via PTCAS or the university’s own application system as directed by the programme.",
    },
    {
      step: 7,
      title: "Interviews and Additional Needs",
      desc: "Participate in interviews or submit any further information the university requests.",
    },
    {
      step: 8,
      title: "Accept and Examine the Offer",
      desc: "Review the offer terms, overall cost, funding options and deadlines before accepting.",
    },
    {
      step: 9,
      title: "Visa and Financial Records",
      desc: "Once requirements are met, apply for the student visa following the I-20 instructions from the institution.",
    },
    {
      step: 10,
      title: "Prepare for Enrollment",
      desc: "Arrange travel, lodging, health insurance and other pre-departure plans. Admission, visa and future licensure are separate processes.",
    },
  ];

  const licensingPoints = [
    "Completion of a CAPTE-accredited physical therapy programme",
    "Passing the National Physical Therapy Examination (NPTE)",
    "Meeting state-specific legal, administrative and jurisprudence requirements",
    "Fulfilling any additional requirements set by the relevant licensing authority",
  ];

  const jobOpportunities = [
    "Hospital Physical Therapy",
    "Outpatient Rehabilitation",
    "Sports Physical Therapy",
    "Neurological Rehabilitation",
    "Orthopedic Physical Therapy",
    "Geriatric Physical Therapy",
    "Home Healthcare Physical Therapy",
    "Rehabilitation Research & Academia",
  ];

  const academicDocs = [
    "Class 10 marksheet and certificate",
    "Class 12 marksheet and certificate",
    "Bachelor’s degree certificate (if applicable)",
    "Undergraduate transcripts / semester-wise marksheets",
    "Required course / prerequisite records",
    "Credential evaluation (if required)",
  ];

  const applicationDocs = [
    "Valid passport",
    "English test results (if required)",
    "Statement of Purpose or personal essay",
    "Letters of Recommendation",
    "Curriculum Vitae or resume",
    "Proof of relevant experience / observation hours (when asked)",
    "Application fee confirmation",
  ];

  const financialVisaDocs = [
    "University admission documentation",
    "Form I-20 (when issued by the institution)",
    "Financial evidence showing ability to meet study and living costs",
    "Student visa application documents",
  ];

  const eligibility = [
    "Class 12 with PCB or PCM (Physics, Chemistry, Biology/Mathematics) with the required percentage",
    "English language score such as IELTS, PTE or TOEFL where required by the university",
    "Valid passport and academic transcripts prepared ahead of deadlines",
    "A focused statement of purpose and recommendation letters for eligible courses",
    "Proof of funds and financial documents for the visa process",
    "A realistic study plan that connects your physiotherapy course with your future goals",
  ];

  const destinations = [
    { name: "United States", highlight: true },
    { name: "United Kingdom", highlight: true },
    { name: "Canada", highlight: true },
    { name: "Australia", highlight: true },
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
      desc: "Based on your profile, budget and preference we shortlist suitable physiotherapy courses and universities.",
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
      q: "After Class 12, are Indian students able to pursue physiotherapy in the United States?",
      a: "Yes. After completing the necessary undergraduate degree or prerequisite coursework, Indian students can apply to a DPT programme. Most professional DPT programmes do not offer direct admission right after Class 12.",
    },
    {
      q: "What is the primary degree in physiotherapy in the United States?",
      a: "In the United States, the typical professional entry-level degree for becoming a physical therapist is the Doctor of Physical Therapy (DPT). Related degrees in exercise science or rehabilitation may support other career paths but do not always lead to physical therapist licensure.",
    },
    {
      q: "How long does it take to become a physical therapist in the USA?",
      a: "The professional DPT programme commonly takes about three years after the required undergraduate preparation. The overall pathway is longer because students usually need to complete undergraduate education or prerequisite coursework first.",
    },
    {
      q: "What is the salary of a physical therapist in the USA?",
      a: "According to the U.S. Bureau of Labor Statistics, the median annual wage for physical therapists was $102,760 in May 2025. Actual earnings vary by location, experience, employer, specialty and work setting. Employment is projected to grow 12% from 2025 to 2035.",
    },
    {
      q: "Can Indian BPT graduates work as physical therapists in the USA?",
      a: "An Indian BPT does not automatically grant the right to practise. Graduates generally need to complete the foreign-educated physical therapist pathway, including credential evaluation, examinations (such as the NPTE) and state-specific requirements. Requirements differ by state.",
    },
    {
      q: "How can Edu Hawk worldwide help me study physiotherapy abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration and licensing requirements with the relevant official authorities.",
    },
    {
      q: "Which country is best for Physiotherapy abroad?",
      a: "There is no single best country. The right choice depends on your budget, academic profile, preferred course (DPT / MPT / related programmes), licensing pathway and long-term career plans. USA, UK, Canada and Australia are among the most popular with Indian students.",
    },
    {
      q: "How much does it cost to study Physiotherapy abroad?",
      a: "Costs vary by country and university. Your total budget includes tuition, accommodation, living expenses, insurance, travel and visa costs. We share a realistic estimate before you apply.",
    },
    {
      q: "Do I need IELTS or another English test?",
      a: "Most universities in the USA, UK, Canada and Australia ask for IELTS, PTE or TOEFL. Some universities offer waivers based on your previous medium of instruction. Requirements are checked university by university.",
    },
    {
      q: "Can I work while studying Physiotherapy abroad?",
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
        .pharmacy-page .physio-university-card {
          animation: pharmacy-image-in .65s ease-out both;
          animation-delay: var(--card-delay, 0ms);
        }
        .pharmacy-page .physio-university-image {
          transition: transform .7s cubic-bezier(.2, .7, .2, 1);
        }
        .pharmacy-page .physio-university-card:hover .physio-university-image {
          transform: scale(1.08);
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
          .pharmacy-page .pharmacy-hero-image,
          .pharmacy-page .physio-university-card {
            animation: none;
            transition: none;
          }
          .pharmacy-page .physio-university-image {
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
                <span className="mx-1.5">›</span> Physiotherapy
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Physiotherapy · Abroad
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Physiotherapy in USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Students interested in patient care, rehabilitation science and advanced healthcare education frequently travel to the United States. Physiotherapy (called physical therapy in the USA) helps patients recover from illness, surgery and injury by improving mobility, managing pain and restoring physical function.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Studying physiotherapy in the USA gives Indian students access to advanced rehabilitation facilities, clinical education, research opportunities and diverse career pathways. The Doctor of Physical Therapy (DPT) is the standard professional entry-level degree for licensed physical therapists.
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Physiotherapy students and clinical training in USA"
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
              Physiotherapy Abroad at a glance
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
                Study Physiotherapy in USA for Indian Students
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students interested in patient care, rehabilitation science and advanced healthcare education frequently travel to the United States. Physiotherapy, referred to as physical therapy in the USA, aims to help patients recover from illnesses, surgeries and injuries by increasing mobility, controlling pain and regaining physical function.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Studying physiotherapy in the USA can give Indian students access to cutting-edge rehabilitation facilities, clinical education, research opportunities and a variety of career pathways. The Doctor of Physical Therapy (DPT) is the standard professional entry-level degree for individuals who want to work as licensed physical therapists.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                Edu Hawk worldwide assists students in exploring international study options, understanding university admission standards and preparing for the overseas education journey.
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
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80"
                alt="Physiotherapy education and rehabilitation training"
                className="rounded-2xl shadow-xl object-cover w-full h-[390px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-bold leading-none">25–50L+</div>
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

      {/* ================= 1. WHY STUDY PHYSIOTHERAPY IN USA ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="why-usa">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Study in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Study Physiotherapy in the USA?
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Studying physiotherapy in the US offers access to advanced clinical training, research opportunities and a wide range of career pathways in rehabilitation and healthcare.
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
            Students should understand that a US degree does not always guarantee professional registration or employment in India or another country. Through Edu Hawk study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing physiotherapy overseas.
          </p>
        </div>
      </section>

      {/* ================= 2. PHYSIOTHERAPY COURSES IN USA ================= */}
      <section className="py-16 sm:py-20" id="usa-courses">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Programs in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Physiotherapy Courses in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The right course depends on whether a student is completing Class 12, already holds a bachelor’s degree, or has a physiotherapy qualification from India.
            </p>
          </div>

          <div className="space-y-6">
            {/* DPT */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 grid place-items-center text-sm font-bold">1</span>
                Doctor of Physical Therapy (DPT)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The Doctor of Physical Therapy is the typical professional entry-level degree for those who wish to become licensed physical therapists in the United States.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                After completing the necessary undergraduate prerequisites, professional study typically lasts about three years. A bachelor’s degree or completion of specific undergraduate courses is usually required for admission. Anatomy, physiology, biomechanics, kinesiology, therapeutic exercise, rehabilitation, patient evaluation and clinical practice are covered in the curriculum.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Clinical education is an integral part of the curriculum. A DPT is a professional doctorate, not always a research doctorate. Graduates of suitably accredited programmes may pursue state licensure requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {dptSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {sub}
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-PT Pathway */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 grid place-items-center text-sm font-bold">2</span>
                Pre-Physical Therapy Pathway & Bachelor’s Degree
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Students after Class 12 typically start with a suitable undergraduate degree and complete the prerequisite courses required by their intended DPT programme. There is usually no direct entry into professional DPT programmes immediately after high school.
              </p>
            </div>

            {/* Master's and Doctoral */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center text-sm font-bold">3</span>
                Research and Master’s Programs
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Master’s and doctoral research programmes are available to students interested in exercise science, biomechanics, rehabilitation research or related academic fields. A master’s degree in a related field does not automatically qualify someone to work as a licensed physical therapist in the United States.
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
              Top Universities for Physiotherapy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Students researching physiotherapy universities in the USA can explore the following institutions as starting points. Programme details, admission requirements, international applicant eligibility and accreditation status should be verified for the intended intake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {topUniversities.map((university, index) => (
              <div
                key={university.name}
                className="physio-university-card group relative min-h-64 overflow-hidden rounded-2xl bg-slate-900 shadow-md hover:shadow-xl"
                style={{ "--card-delay": `${index * 100}ms` }}
              >
                <img
                  src={university.image}
                  alt="University campus"
                  loading="lazy"
                  className="physio-university-image absolute inset-0 h-full w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/35 to-transparent" />
                <div className="relative flex min-h-64 flex-col justify-end p-5 sm:p-6">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-white sm:text-xl">
                    {university.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {university.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              How to choose the right university
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Compare each physiotherapy programme by its accreditation, academic requirements, costs, clinical education structure and student support.
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
              With Edu Hawk guidance, students can compare suitable institutions based on their background, budget, preferred location and goals.
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
              Eligibility to Study Physiotherapy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Physiotherapy eligibility in the USA depends on the selected programme and the student’s academic background.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">For Students After Class 12</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students may explore pre-physical therapy pathways if they:
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">For BPT Graduates from India</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                After earning a Bachelor of Physiotherapy in India, students can pursue:
              </p>
              <ul className="space-y-3">
                {bptEligibility.map((item, i) => (
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
              Admission Requirements for Physiotherapy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Different universities and programmes have different requirements for admission to physiotherapy (DPT) programmes.
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
              <p className="text-slate-500 text-[15px] leading-relaxed mt-4">
                Universities typically review cumulative GPA, prerequisite grades and completion of courses such as anatomy, physiology, biology, chemistry, physics, psychology or statistics.
              </p>
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
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Acceptable minimum scores and exemptions are determined by each university’s policy.
              </p>
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
              Cost of Studying Physiotherapy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The length of the programme, the state, the university, housing and personal expenses all affect the cost of studying physiotherapy in the United States. Students should calculate the total cost of both the professional DPT programme and any undergraduate prerequisite pathway.
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
            <h3 className="text-lg font-bold text-slate-900 mb-3">Scholarships and Financial Assistance</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              International student funding may be available through selected universities, external scholarships or merit-based awards. Funding availability varies, and professional healthcare programmes may have limited assistance for international students. Always plan the full cost of attendance including tuition, housing, food, insurance, study materials, travel and other necessary expenses.
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
              Physiotherapy Admission Process in the USA
            </h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              The following steps are typically involved in the physiotherapy (DPT) admission process in the United States.
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
              Physiotherapy Licensing in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              In the United States, state laws govern the licensing of physical therapists. A degree by itself does not give one the ability to work independently as a physical therapist.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold mb-3">For US DPT Programme Graduates</h3>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              In most cases, graduates must fulfil the requirements of the state in which they plan to practise. Typically these include:
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
            <h3 className="text-lg font-bold text-slate-900 mb-3">For BPT Graduates from India</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Indian-trained physiotherapists may need to complete an education credential review to establish whether their qualifications meet the relevant US requirements.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Depending on the state, additional requirements may include English-language proficiency, supervised clinical practice, examinations and other documentation.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              The Federation of State Boards of Physical Therapy (FSBPT) provides guidance for foreign-educated physical therapists. Requirements differ by jurisdiction, so applicants should consult the licensing board for their intended state.
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
              Career Opportunities and Salary After Physiotherapy in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Physical therapists can work in a variety of healthcare settings after fulfilling the necessary training and licensing requirements.
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
            <div className="text-sm font-medium opacity-90 mb-2">Physical Therapist Median Salary (USA)</div>
            <div className="text-4xl sm:text-5xl font-bold mb-3">$102,760</div>
            <p className="text-white/85 text-[15px] max-w-xl mx-auto leading-relaxed">
              According to the U.S. Bureau of Labor Statistics, the median annual wage for physical therapists was $102,760 in May 2025. Employment is projected to grow 12% from 2025 to 2035 (much faster than average), with about 13,400 openings per year. State, employer, experience, specialty, work environment and hours all affect actual pay. These national figures do not guarantee starting salaries or employment for international graduates.
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
              Documents Required for Physiotherapy Admission in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The required documents depend on the selected university and course.
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Application Documents</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Visa & Financial Documents</h3>
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

      {/* ================= DESTINATIONS ================= */}
      <section className="py-16 sm:py-20" id="destinations">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Popular destinations for Physiotherapy
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
            Compare tuition, student support, licensing requirements and career pathways to choose the destination that fits your goals.
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
                Share your Class 12 marks and preferred countries. We will tell you honestly which universities and programmes are realistic for your profile and budget.
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
              Frequently Asked Questions About Physiotherapy in the USA
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
              Ready to start your Physiotherapy journey?
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

export default PhysiotherapyAbroad;