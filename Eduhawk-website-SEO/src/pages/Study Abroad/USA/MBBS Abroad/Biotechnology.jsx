import React, { useEffect, useRef, useState } from "react";

const Biotechnology = () => {
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
    { label: "Programs", value: "BSc, MS, Bioinformatics, PhD options" },
    { label: "Countries", value: "USA, UK, Canada, Australia, Ireland & more" },
    { label: "Support", value: "Complete guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & career focus" },
  ];

  const features = [
    {
      title: "Right university for your goals",
      desc: "We compare accreditation, curriculum, research focus, ranking and entry requirements before recommending a university.",
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
      desc: "Compare USA, UK, Canada, Australia, Ireland and more by cost, career outcomes, specialisations and lifestyle.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const usaBenefits = [
    {
      title: "Advanced Research Facilities",
      desc: "Prominent universities furnish access to sophisticated laboratories, research centres and instrumentation used in molecular biology, genetics, microbiology and allied scientific domains.",
    },
    {
      title: "Industry-Oriented Education",
      desc: "Certain programmes integrate theoretical instruction with practical laboratory work, quantitative analysis, product development and biotechnology administration.",
    },
    {
      title: "Comprehensive Specialisation Options",
      desc: "Students may investigate genetic engineering, molecular biotechnology, pharmaceutical biotechnology, bioinformatics, biomedical science and industrial biotechnology.",
    },
    {
      title: "Research Opportunities",
      desc: "Depending on the programme structure, students may participate in faculty-directed research, laboratory investigations, internship placements or thesis development.",
    },
    {
      title: "Interdisciplinary Learning",
      desc: "Biotechnology combines biology with chemistry, computer science, engineering, mathematics and statistics.",
    },
    {
      title: "Career Opportunities",
      desc: "Graduates may pursue roles in biotechnology companies, pharmaceutical organisations, research laboratories, diagnostic services, agriculture and environmental technology.",
    },
  ];

  const bachelorSubjects = [
    "Cell biology",
    "Genetics",
    "Microbiology",
    "Biochemistry",
    "Molecular biology",
    "Immunology",
    "Laboratory methodologies",
    "Biotechnology principles",
  ];

  const mastersPrograms = [
    "Master of Science in Biotechnology",
    "Master of Science in Molecular Biotechnology",
    "Master of Science in Pharmaceutical Biotechnology",
    "Master of Science in Biomedical Science",
    "Master of Science in Bioinformatics",
  ];

  const topUniversities = [
    {
      name: "Johns Hopkins University",
      desc: "Biotechnology, biomedical science and allied life science curricula",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=85",
    },
    {
      name: "University of California, Davis",
      desc: "Biotechnology, biological sciences and agricultural biotechnology pathways",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=85",
    },
    {
      name: "University of California, San Diego",
      desc: "Biological sciences, bioengineering and molecular biology programmes",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=85",
    },
    {
      name: "University of Pennsylvania",
      desc: "Biotechnology, biomedical science and interdisciplinary initiatives",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=85",
    },
    {
      name: "Northwestern University",
      desc: "Biotechnology, biomedical research and postgraduate curricula",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=85",
    },
    {
      name: "Purdue University",
      desc: "Biotechnology and life sciences programmes",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=85",
    },
  ];

  const comparisonPoints = [
    "Exact degree title and curriculum",
    "Availability of your preferred specialisation",
    "Laboratory facilities and research opportunities",
    "Internship and industry collaboration options",
    "Academic eligibility for Indian students",
    "Required undergraduate subjects and prerequisites",
    "English-language proficiency requirements",
    "Tuition fees and total cost of attendance",
    "Scholarships, assistantships and research funding",
    "Campus location and accommodation costs",
    "Career services and graduate outcomes",
    "International student support and visa documentation",
  ];

  const after12Eligibility = [
    "Successfully complete secondary education through an accredited educational institution",
    "Satisfy the institution's academic entrance criteria",
    "Demonstrate adequate scientific preparation, typically encompassing biology and chemistry coursework",
    "Submit official educational documentation and transcripts",
    "Fulfil English language competency standards where mandated",
    "Furnish supplementary materials as specified by the institution",
  ];

  const graduateEligibility = [
    "Possess a recognized baccalaureate degree or equivalent credential",
    "Demonstrate pertinent academic preparation in biotechnology or an allied field",
    "Provide official transcripts documenting completed coursework and corresponding grades",
    "Meet the institution's minimum cumulative grade point average or academic standing threshold",
    "Submit English language proficiency examination scores, where applicable",
    "Include a statement articulating academic and professional objectives alongside supplementary application materials",
  ];

  const doctoralEligibility = [
    "Robust academic credentials and demonstrated commitment to scholarly investigation",
    "A relevant bachelor's or master's degree, contingent upon the university's specifications",
    "Research experience",
    "Academic recommendations",
    "A statement of research interests",
    "Evidence of preparation for advanced scientific study",
  ];

  const admissionAcademic = [
    "Comprehensive academic records from preceding educational institutions",
    "Undergraduate coursework, academic performance and laboratory experience for postgraduate admission",
    "Certified translations or formal credential assessments where mandated",
    "Official transcripts documenting completed coursework and grades",
  ];

  const englishTests = ["IELTS Academic", "TOEFL iBT", "PTE Academic", "Other university-approved tests"];

  const additionalRequirements = [
    "Statement of Purpose or Personal Essay",
    "Letters of Recommendation",
    "Resume / Curriculum Vitae",
    "Research statement or proposal (for research-focused programmes)",
    "Documentation of laboratory experience and research endeavours",
    "Interview (when required)",
    "GRE scores (if required by the specific programme)",
    "Credential evaluation",
  ];

  const principalCosts = [
    {
      title: "Tuition Fees",
      desc: "Tuition charges vary widely by institution, degree level and whether the university is public or private.",
    },
    {
      title: "Living Expenses",
      desc: "Accommodation, food, local travel, personal expenses and health insurance. Housing costs differ between university housing, shared residences and private rentals.",
    },
    {
      title: "Academic Expenses",
      desc: "Books, specialized software, laboratory materials, learning resources and university fees.",
    },
    {
      title: "Other Expenses",
      desc: "Application fees, English tests, credential evaluation, visa costs, flights and initial settlement.",
    },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Evaluate Your Scholarly Credentials",
      desc: "Examine your existing qualifications, academic performance, scientific coursework, hands-on laboratory experience and professional aspirations.",
    },
    {
      step: 2,
      title: "Determine the Appropriate Degree Level",
      desc: "Select between pursuing an undergraduate degree, postgraduate master's degree or doctoral (PhD) programme.",
    },
    {
      step: 3,
      title: "Identify a Specialized Field of Study",
      desc: "Investigate disciplinary concentrations including molecular biotechnology, pharmaceutical biotechnology, bioinformatics, biomedical science, genetic engineering or industrial biotechnology.",
    },
    {
      step: 4,
      title: "Compile a List of Prospective Institutions",
      desc: "Analyze and compare institutional offerings regarding curriculum content, admission criteria, financial costs, financial aid availability, geographical location and submission deadlines.",
    },
    {
      step: 5,
      title: "Verify Academic Entry Requirements",
      desc: "Confirm that your prior educational background, completed coursework and credentials satisfy the programme's specified admission prerequisites.",
    },
    {
      step: 6,
      title: "Compile Application Materials",
      desc: "Gather official academic records, degree documentation, standardized English proficiency examination results, letters of recommendation, a statement of purpose and a curriculum vitae.",
    },
    {
      step: 7,
      title: "Submit Your Application",
      desc: "Complete the application process via the institution's designated admissions platform and adhere to departmental procedural guidelines.",
    },
    {
      step: 8,
      title: "Fulfill Supplementary Requirements",
      desc: "Participate in an admissions interview, provide a research proposal or furnish additional documentation as mandated by the institution.",
    },
    {
      step: 9,
      title: "Assess Your Admission Decision",
      desc: "Review the programme structure, financial obligations, scholarship conditions, enrollment deadlines and any remaining admission prerequisites.",
    },
    {
      step: 10,
      title: "Finalize Student Visa and Pre-Departure Arrangements",
      desc: "Adhere to the institution's protocols for obtaining requisite student documentation and initiating visa procedures. Coordinate housing, insurance, transportation and budget for initial expenditures.",
    },
  ];

  const accreditationPoints = [
    "Whether the institution possesses authorization to confer the qualification",
    "Whether the institution maintains recognized institutional accreditation",
    "Whether specialized programme accreditation is applicable",
    "Whether the qualification aligns with your professional aspirations or advanced educational objectives",
    "Not all biotechnology degrees necessitate distinct specialized accreditation requirements",
    "A United States biotechnology degree does not inherently authorize graduates to engage in all regulated healthcare professions",
  ];

  const jobOpportunities = [
    "Biotechnology Research Assistant",
    "Biological Technician",
    "Molecular Biology Technician",
    "Quality Control Analyst",
    "Quality Assurance Associate",
    "Bioprocessing Associate",
    "Bioinformatics Analyst",
    "Clinical Research Coordinator / Assistant",
    "Pharmaceutical Research Associate",
    "Regulatory Affairs Associate",
  ];

  const academicDocs = [
    "Class 10 marksheet and certificate (where applicable)",
    "Class 12 marksheet and certificate (for undergraduate applications)",
    "Bachelor's degree certificate (for graduate applications)",
    "Master's degree documentation (where mandated for doctoral applications)",
    "Official academic transcripts and semester-wise results",
    "Certified translations of academic documents (where applicable)",
    "Credential evaluation services (if mandated by the institution)",
  ];

  const applicationDocs = [
    "Current valid passport",
    "English language proficiency examination scores (if mandated)",
    "Statement of Purpose or personal narrative essay",
    "Letters of Recommendation from academic or professional referees",
    "Professional curriculum vitae or comprehensive resume",
    "Research proposal or scholarly statement (where required)",
    "Documentation of laboratory experience and research endeavours",
  ];

  const financialVisaDocs = [
    "Formal institutional admission notification",
    "Form I-20 or equivalent student visa documentation",
    "Financial capability documentation",
    "Student visa application materials",
    "Medical insurance and pre-arrival health documentation (where mandated)",
  ];

  const eligibility = [
    "Class 12 with biology and chemistry (and other required subjects) for undergraduate programmes",
    "A recognized bachelor's degree in biotechnology or allied field for master's programmes",
    "English language score such as IELTS, PTE or TOEFL where required by the university",
    "Valid passport and academic transcripts prepared ahead of deadlines",
    "A focused statement of purpose and recommendation letters for eligible courses",
    "Proof of funds and financial documents for the visa process",
    "A realistic study plan that connects your biotechnology course with your future goals",
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
      desc: "Based on your profile, budget and preference we shortlist suitable biotechnology courses and universities.",
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
      q: "Are Indian students eligible to pursue biotechnology studies in the United States following completion of Class 12?",
      a: "Yes, Indian students may submit applications for accredited undergraduate programmes in biotechnology or allied biological sciences upon completion of Class 12. Enrollment eligibility is contingent upon academic achievement, requisite coursework, English language proficiency standards and institutional admission protocols.",
    },
    {
      q: "What constitutes the typical duration of biotechnology curricula in the United States?",
      a: "Baccalaureate degrees ordinarily require approximately four years of study. Graduate-level master's programmes typically span one to two years, whereas doctoral programmes necessitate additional years contingent upon research advancement and institutional specifications.",
    },
    {
      q: "Which postgraduate degree is most appropriate following a BSc or BTech in biotechnology?",
      a: "Contingent upon educational background and professional aspirations, students may pursue an MS in Biotechnology, Molecular Biology, Bioinformatics, Biomedical Science or cognate disciplines. Students aspiring toward autonomous scientific investigation may additionally consider doctoral degree pathways.",
    },
    {
      q: "What financial investment is required for biotechnology education in the United States?",
      a: "The aggregate expenditure varies according to institutional selection, programme duration, geographic location, tuition frameworks and subsistence costs. Students should examine published cost of attendance figures and investigate available scholarships, teaching or research assistantships and supplementary funding mechanisms.",
    },
    {
      q: "What professional opportunities exist for biotechnology graduates from United States institutions?",
      a: "Depending on qualifications and professional experience, graduates may pursue positions in laboratory operations, scientific research, quality control, quality assurance, bioprocessing, pharmaceutical development, bioinformatics and regulatory compliance. Senior research positions typically necessitate doctoral credentials or specialized professional experience.",
    },
    {
      q: "How can Edu Hawk worldwide help me study Biotechnology abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration and licensing requirements with the relevant official authorities.",
    },
    {
      q: "Is GRE required for Biotechnology programmes in the USA?",
      a: "The GRE is not universally required for biotechnology programmes in the USA. Requirements vary by university, department and degree level. Check the latest admissions policy before booking a test.",
    },
    {
      q: "What is the salary of biological technicians and biochemists in the USA?",
      a: "According to the U.S. Bureau of Labor Statistics (May 2025), the median annual wage for biological technicians was $57,510 and for biochemists and biophysicists was $127,410. Actual earnings vary by role, experience, location and employer.",
    },
    {
      q: "Can I work in India after completing a US biotechnology degree?",
      a: "Students intending to pursue careers in India must confirm the degree's relevance to their professional objectives or postgraduate educational plans. Institutional recognition and professional eligibility criteria may differ substantially across employers, academic institutions and regulated professional disciplines.",
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
                <span className="mx-1.5">›</span> Biotechnology
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Biotechnology · Abroad
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Biotechnology in USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Biotechnology education in the United States presents substantial opportunities for Indian students to pursue advanced studies in biological sciences, genetic engineering, molecular biology, bioinformatics and pharmaceutical biotechnology.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                The United States hosts numerous prestigious universities, research institutions and biotechnology enterprises engaged in diverse sectors including healthcare, pharmaceuticals, agriculture, food science and environmental technology. Indian students may select from undergraduate, graduate and doctoral programmes.
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
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80"
                alt="Biotechnology laboratory and research in USA"
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
              Biotechnology Abroad at a glance
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
                Study Biotechnology in USA for Indian Students
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Biotechnology education in the United States presents substantial opportunities for Indian students to pursue advanced studies in biological sciences, genetic engineering, molecular biology, bioinformatics and pharmaceutical biotechnology. The United States hosts numerous prestigious universities, research institutions and biotechnology enterprises engaged in diverse sectors including healthcare, pharmaceuticals, agriculture, food science and environmental technology.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Indian students may select from undergraduate degrees, graduate programmes and doctoral programmes in biotechnology and cognate disciplines. Contingent upon the institution and curriculum, students may acquire laboratory experience, engage in research initiatives, pursue internship opportunities and cultivate technical competencies pertinent to the biotechnology sector.
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
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80"
                alt="Biotechnology research and laboratory training"
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

      {/* ================= 1. WHY STUDY BIOTECHNOLOGY IN USA ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="why-usa">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Study in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Study Biotechnology in the USA?
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The United States constitutes a premier academic destination for students pursuing biotechnology education, scientific investigation and life sciences advancement. Programs in basic biology, applied biotechnology, computational science and industrial applications are offered by its academic institutions.
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
            Studying in the USA also allows students to experience a different academic environment and collaborate with people from diverse educational backgrounds. Through Edu Hawk worldwide study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing biotechnology education overseas.
          </p>
        </div>
      </section>

      {/* ================= 2. BIOTECHNOLOGY COURSES IN USA ================= */}
      <section className="py-16 sm:py-20" id="usa-courses">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Programs in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Biotechnology Courses in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Universities throughout the United States provide biotechnology educational programmes across multiple academic tiers, with programme selection contingent upon an applicant's prior educational attainment, scholarly inclinations and prospective professional trajectories.
            </p>
          </div>

          <div className="space-y-6">
            {/* Bachelor's */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 grid place-items-center text-sm font-bold">1</span>
                Bachelor's Degree in Biotechnology
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                A bachelor's degree in biotechnology establishes foundational competencies in biological sciences and their corresponding technological implementations. After completing Class 12, Indian students may pursue undergraduate admission, subject to institution-specific requirements.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Prevalent degree designations encompass Bachelor of Science in Biotechnology, Biological Sciences with biotechnology specialization, Molecular Biology, Biochemistry and Biomedical Science. Typical programme duration is approximately four years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {bachelorSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {sub}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Numerous programmes incorporate undergraduate research initiatives, laboratory instruction and professional internship placements.
              </p>
            </div>

            {/* Master's */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 grid place-items-center text-sm font-bold">2</span>
                Master's Degree in Biotechnology
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                A Master of Science in Biotechnology from United States institutions serves students pursuing sophisticated scientific understanding, advanced practical laboratory competencies or specialized vocational preparation subsequent to completion of an appropriate bachelor's degree. Typical duration is one to two years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {mastersPrograms.map((prog, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {prog}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
                <strong>Master's in Bioinformatics:</strong> Integrates biological sciences with computational technologies, statistical analysis and data management. Suitable for students with backgrounds in biotechnology, biology, computer science, mathematics or statistics.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                <strong>Master's in Biomedical Science:</strong> Offers comprehensive examination of biological mechanisms underlying human health and pathological conditions. Relevant for students aspiring toward biomedical research, pharmaceutical development and laboratory-centered scientific endeavors.
              </p>
            </div>

            {/* PhD */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center text-sm font-bold">3</span>
                PhD in Biotechnology or Related Field
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                In the US educational system, students dedicated to rigorous research and scientific innovation can pursue advanced scholarly inquiry with a PhD in biotechnology or related fields.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Potential research domains encompass genetic engineering and genome modification, oncological biology and immunological studies, synthetic biology, regenerative medicine applications, agricultural biotechnology, pharmaceutical discovery and development, and molecular biology alongside bioprocess engineering. Doctoral programmes characteristically involve substantial research initiatives, rigorous coursework, academic seminars and comprehensive dissertation requirements. Numerous programmes provide financial support mechanisms or research assistantships for qualified candidates.
              </p>
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
              Top Universities to Explore for Biotechnology in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Prospective students should conduct comprehensive evaluations of prospective institutions by examining their precise programmatic offerings, disciplinary concentrations, research laboratory infrastructure, scholarly research capabilities and professional development resources. This compilation constitutes a curated investigative list rather than a hierarchical assessment.
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
              How to Choose the Right Biotechnology University
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Before applying, compare the following factors:
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
              Eligibility to Study Biotechnology in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The prerequisites for pursuing biotechnology studies in the United States are contingent upon the academic level, institutional affiliation and chosen field of concentration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">After Secondary Education</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Indian applicants seeking undergraduate admission typically must:
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Graduate-Level Study</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Candidates pursuing an MS in Biotechnology or cognate disciplines ordinarily must:
              </p>
              <ul className="space-y-3">
                {graduateEligibility.map((item, i) => (
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
              <p className="text-slate-500 text-[14px] leading-relaxed mt-4">
                Candidates with backgrounds in microbiology, biochemistry, biological sciences, biomedical science or bioengineering may be eligible if they meet the requirements.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Doctoral Research Programmes</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Applicants pursuing doctoral-level biotechnology research programmes ordinarily require:
              </p>
              <ul className="space-y-3">
                {doctoralEligibility.map((item, i) => (
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
              Admission Requirements for Biotechnology in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The prerequisites for biotechnology degree programmes across American universities are contingent upon the specific institution, academic level and disciplinary focus. Prospective students are advised to consult the official programme documentation corresponding to their intended enrollment period.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Documentation</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Applicants are typically required to submit:
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">English Language Competency</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Applicants from India may be obligated to demonstrate English language competency through an examination recognized by the target university:
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
                Institutional policies regarding minimum score thresholds, score exemptions and score validity periods vary considerably.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Additional Admission Requirements</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Depending on the university and programme level, applicants may also need:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalRequirements.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed mt-5">
              The GRE is not universally required for biotechnology programmes in the USA. Requirements vary by university, department and degree level. Research-focused master's and PhD programmes may request a research statement, interview or discussion of the applicant's scientific interests.
            </p>
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
              Cost of Studying Biotechnology in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The cost of studying biotechnology in the United States varies according to the specific university, academic degree level, programme duration, geographic location and individual lifestyle choices. Institutional fee structures demonstrate considerable variation across public universities, private universities and alternative programme delivery formats.
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
              Prospective students should examine institution-based merit scholarships, departmental scholarship awards, graduate assistantship positions, research assistantship opportunities, non-institutional scholarships and programme-specific grants or fellowship awards. Financial assistance remains highly competitive and demonstrates substantial variation across institutions. Certain financial aid mechanisms available to United States citizens or permanent residents may not extend to international student populations.
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
              Admission Process for Biotechnology in the USA
            </h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              Prospective students seeking to pursue biotechnology studies within the United States educational system may generally adhere to the following procedural framework.
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

      {/* ================= 8. ACCREDITATION ================= */}
      <section className="py-16 sm:py-20" id="usa-licensing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Accreditation & Recognition
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Accreditation and Recognition of Biotechnology Degrees in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Before enrolling, prospective students need to find out if the school is accredited and understand the differences between professional certification, specialized program accreditation and institutional accreditation.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold mb-3">Institutional and Programme Verification</h3>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              Prospective applicants should examine the following criteria:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accreditationPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Research and Laboratory Training & Recognition in India</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              For research-intensive programmes, candidates should evaluate the curriculum design, laboratory infrastructure, research faculty supervision and opportunities to cultivate hands-on competencies in molecular biology methodologies, cellular cultivation, genomic analysis, bioprocessing operations, computational biology and quantitative scientific interpretation.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Students intending to pursue careers in India must confirm the degree's relevance to their professional objectives or postgraduate educational plans. Institutional recognition and professional eligibility criteria may differ substantially across employers, academic institutions and regulated professional disciplines.
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
              Career Opportunities and Salary After Biotechnology in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Individuals completing biotechnology degree programmes may pursue professional opportunities spanning scientific investigation, laboratory management, pharmaceutical innovation, biological production systems, quality assurance, computational biology analysis and allied sectors. The specific positions available are contingent upon educational attainment level, acquired technical competencies, hands-on laboratory experience, institutional hiring criteria and relevant employment authorization status.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-5">Professional Pathways in Biotechnology</h3>
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

          <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-8 text-white text-center shadow-xl mb-8">
            <div className="text-sm font-medium opacity-90 mb-2">Biotechnology Salary Reference (USA – May 2025)</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-4">
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">$57,510</div>
                <div className="text-white/85 text-sm">Biological Technicians (median)</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">$127,410</div>
                <div className="text-white/85 text-sm">Biochemists & Biophysicists (median)</div>
              </div>
            </div>
            <p className="text-white/85 text-[15px] max-w-xl mx-auto leading-relaxed">
              Source: U.S. Bureau of Labor Statistics. These statistics pertain to particular professional categories, not all biotechnology degree recipients. Actual earnings vary by role, experience, location, employer and technical expertise.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Potential Employers</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Based on academic credentials and professional background, degree recipients may pursue positions across biotechnology enterprises, pharmaceutical and biopharmaceutical firms, contract research institutions, university and academic research facilities, medical centers and biomedical research institutes, diagnostic and laboratory service enterprises, agricultural biotechnology firms, food science and industrial biotechnology enterprises, environmental biotechnology firms, and scientific instrumentation and life science technology corporations.
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
              Documents Required for Biotechnology Admission in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The documentation prerequisites for biotechnology program admission in the United States are contingent upon institutional policies and academic degree classification. Prospective students are advised to compile materials as delineated in the institution's formal application requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Credentials</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Application Materials</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Financial & Immigration Documentation</h3>
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
              Popular destinations for Biotechnology
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
            Compare tuition, student support, specialisations and career pathways to choose the destination that fits your goals.
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
                Share your academic background and preferred countries. We will tell you honestly which universities and programmes are realistic for your profile and budget.
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
              Frequently Asked Questions About Biotechnology in the USA
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
     
    </div>
  );
};

export default Biotechnology;