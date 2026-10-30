import React, { useEffect, useRef, useState } from "react";

const PublicHealth = () => {
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
    { label: "Programs", value: "BPH, MPH, MSPH, DrPH & PhD options" },
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
      title: "Interdisciplinary Curriculum",
      desc: "Public health programmes integrate principles from biology, statistical analysis, social sciences, epidemiology, healthcare administration and health policy frameworks.",
    },
    {
      title: "Specialisation Pathways",
      desc: "Concentrate on epidemiology, international health, environmental health, biostatistics, health promotion or health policy development.",
    },
    {
      title: "Research and Experiential Learning",
      desc: "Engage in research endeavours, community health projects, professional internships or field-based experiences depending on programme structure.",
    },
    {
      title: "International Health Perspective",
      desc: "Examine communicable diseases, non-communicable conditions, healthcare accessibility, health disparities and crisis response systems.",
    },
    {
      title: "Career Opportunities",
      desc: "Pursue roles in research institutions, healthcare organisations, government bodies, international non-profits, consulting firms, universities and health-focused enterprises.",
    },
    {
      title: "Data and Policy Skills",
      desc: "Learn to interpret health data, evaluate health interventions and understand policies that influence population health.",
    },
  ];

  const bachelorSubjects = [
    "Foundational public health principles",
    "Biological sciences",
    "Epidemiological analysis",
    "Health promotion and education",
    "Quantitative methods",
    "Environmental health sciences",
    "Social determinants of health",
    "Healthcare delivery systems",
  ];

  const mphSubjects = [
    "Advanced epidemiological methodologies",
    "Statistical analysis in health sciences",
    "Health policy formulation and analysis",
    "Environmental health considerations",
    "Public health administration and governance",
    "Systematic programme assessment",
    "Empirical research methodologies",
  ];

  const topUniversities = [
    {
      name: "Johns Hopkins University",
      desc: "Bloomberg School of Public Health",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=85",
    },
    {
      name: "Harvard University",
      desc: "Harvard T.H. Chan School of Public Health",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=85",
    },
    {
      name: "Columbia University",
      desc: "Mailman School of Public Health",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=85",
    },
    {
      name: "University of Washington",
      desc: "School of Public Health",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&q=85",
    },
    {
      name: "Boston University",
      desc: "School of Public Health",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=85",
    },
  ];

  const comparisonPoints = [
    "Offering of the intended degree program and area of specialization",
    "Structure and content of the academic curriculum",
    "Institutional research facilities and qualifications of academic personnel",
    "Opportunities for practical experience through internships, practicums and field-based learning",
    "Admission criteria applicable to students from India",
    "Standards for demonstrating English-language competency",
    "Program costs and projected expenses for living accommodations",
    "Financial support mechanisms including scholarships and assistantships",
    "Geographic location of the institution and residential facilities",
    "Comprehensive support services for international students and visa sponsorship",
  ];

  const after12Eligibility = [
    "Successfully complete secondary education (Class 12) from an accredited educational institution",
    "Satisfy the academic prerequisites established by the prospective university",
    "Furnish official transcripts and educational credentials from secondary schooling",
    "Demonstrate proficiency in the English language, as mandated by institutional requirements",
    "Submit supplementary documentation or materials as specified by the admissions office",
  ];

  const mphEligibility = [
    "A recognized bachelor's degree or its academic equivalent",
    "Official academic transcripts from all pertinent educational institutions",
    "Demonstration of the minimum academic achievement standards established by the institution",
    "Documentation of English language proficiency examination scores, where applicable",
    "A statement articulating academic and professional objectives or a reflective personal essay",
    "Testimonial letters from academic or professional referees, as specified by the programme",
    "A comprehensive resume or detailed curriculum vitae, as requested by the admissions committee",
  ];

  const doctoralEligibility = [
    "A relevant master's degree (often required)",
    "Strong academic performance in prior studies",
    "Research interests aligned with faculty expertise",
    "For some programmes, substantive professional experience",
    "Requirements differ by institution — a master's degree or work experience should not be assumed to be universally mandatory or waived",
  ];

  const admissionAcademic = [
    "Official academic transcripts alongside degree certificates",
    "Secondary education certificates (Class 10 & 12) for undergraduate applications",
    "Baccalaureate degree documentation for graduate applications",
    "Postgraduate degree documentation where mandated for doctoral applications",
    "Credential evaluation for international academic records (when required)",
  ];

  const englishTests = ["IELTS Academic", "TOEFL iBT", "PTE Academic", "Other university-approved tests"];

  const additionalRequirements = [
    "Statement of Purpose or Personal Essay",
    "Letters of Recommendation",
    "Resume / Curriculum Vitae",
    "Research proposal (for designated research-intensive programmes)",
    "Documentation of professional or experiential learning",
    "Interview (when required)",
    "GRE scores (if required by the specific programme)",
    "Credential evaluation",
  ];

  const principalCosts = [
    {
      title: "Tuition Fees",
      desc: "Tuition charges may be structured on a per-credit, per-semester or per-academic-year basis and vary widely by institution.",
    },
    {
      title: "Living Expenses",
      desc: "Accommodation, food, local travel, personal expenses and health insurance. Housing costs differ between university housing, shared residences and private rentals.",
    },
    {
      title: "Academic Expenses",
      desc: "Books, specialized software, statistical analysis tools, learning materials and university fees (student services, technology, facilities).",
    },
    {
      title: "Other Expenses",
      desc: "Application fees, centralized application service charges, English tests, credential evaluation, visa costs, flights and initial settlement.",
    },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Select a Specialisation",
      desc: "Investigate disciplines including epidemiology, international health, health policy, biostatistics, environmental health or health promotion.",
    },
    {
      step: 2,
      title: "Compile a University Shortlist",
      desc: "Evaluate admission criteria, programme content, financial costs, financial aid opportunities, geographic location, application timelines and experiential learning options.",
    },
    {
      step: 3,
      title: "Verify Admission Criteria",
      desc: "Validate subject-specific prerequisites, proficiency in English examinations, professional experience requirements and additional programme-dependent specifications.",
    },
    {
      step: 4,
      title: "Assemble Application Materials",
      desc: "Gather academic transcripts, qualification certificates, reference letters, personal essays, curriculum vitae and any necessary credential authentication documents.",
    },
    {
      step: 5,
      title: "Complete Application Submissions",
      desc: "Submit applications via SOPHAS or the institution's designated application system, following provided guidelines.",
    },
    {
      step: 6,
      title: "Monitor Application Progress",
      desc: "Observe application advancement, address institutional inquiries and fulfil any interview obligations or supplementary evaluations.",
    },
    {
      step: 7,
      title: "Assess the Admission Decision",
      desc: "Examine programme structure, comprehensive expenses, scholarship provisions, registration deadlines and stipulations associated with the offer.",
    },
    {
      step: 8,
      title: "Finalise Visa and Pre-Departure Arrangements",
      desc: "Follow university guidelines for student visa paperwork. Secure housing, obtain insurance coverage and coordinate travel logistics prior to departure.",
    },
  ];

  const accreditationPoints = [
    "CEPH accreditation for eligible schools and public health programmes",
    "Verify the current accreditation status and scope of the programme you are considering",
    "Certified in Public Health (CPH) is a separate professional credential administered by NBPHE",
    "CPH eligibility and examination requirements should be checked directly with the certifying organisation",
    "There is no single universal licence required for every public health career in the USA",
    "Requirements depend on the role and employer — some positions may need specific licences, certifications or experience",
  ];

  const jobOpportunities = [
    "Epidemiologist",
    "Biostatistician",
    "Public Health Research Assistant / Associate",
    "Health Education Specialist",
    "Global Health Programme Coordinator",
    "Public Health Policy Analyst",
    "Healthcare Administration roles",
    "Environmental Health roles",
  ];

  const academicDocs = [
    "Class 10 marksheet and certificate (where applicable)",
    "Class 12 marksheet and certificate (for undergraduate applications)",
    "Bachelor's degree certificate (for graduate applications)",
    "Postgraduate degree documentation (where mandated for doctoral applications)",
    "Official academic transcripts and semester-wise results",
    "Certified translations of academic documents (where applicable)",
    "Credential evaluation services (if mandated by the institution)",
  ];

  const applicationDocs = [
    "Current valid passport",
    "English language proficiency examination scores (if mandated)",
    "Statement of Purpose or reflective personal narrative",
    "Letters of Recommendation from academic or professional referees",
    "Professional curriculum vitae or biographical summary",
    "Research methodology proposal (for designated research-intensive programmes)",
    "Documentation of professional or experiential learning engagement",
    "Application processing fee receipt",
    "Supplementary institutional documentation or forms as specified",
  ];

  const financialVisaDocs = [
    "Formal admission notification and institutional procedural guidelines",
    "Form I-20 or equivalent student visa documentation",
    "Financial capability verification and sponsorship documentation",
    "Student visa application materials and supporting evidence",
  ];

  const eligibility = [
    "Class 12 with required subjects and percentage for undergraduate public health programmes",
    "A recognized bachelor's degree for MPH and related postgraduate programmes",
    "English language score such as IELTS, PTE or TOEFL where required by the university",
    "Valid passport and academic transcripts prepared ahead of deadlines",
    "A focused statement of purpose and recommendation letters for eligible courses",
    "Proof of funds and financial documents for the visa process",
    "A realistic study plan that connects your public health course with your future goals",
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
      desc: "Based on your profile, budget and preference we shortlist suitable public health courses and universities.",
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
      q: "Are Indian students eligible to pursue public health studies in the USA following completion of Class 12?",
      a: "Yes. Students may submit applications for accredited undergraduate programmes, including bachelor's degrees in public health or cognate disciplines. Admission prerequisites differ across institutions, and prospective students must verify both academic credentials and English language proficiency standards.",
    },
    {
      q: "What constitutes the MPH degree within the American higher education system?",
      a: "MPH denotes Master of Public Health, representing a postgraduate qualification emphasizing population-level health outcomes, communicable disease mitigation, epidemiological analysis, healthcare governance, health promotion initiatives and allied disciplines. The specific course structure varies according to institutional policies and chosen specialization.",
    },
    {
      q: "Are applicants from non-medical academic backgrounds permitted to enroll in MPH programmes in the USA?",
      a: "Yes, numerous MPH programmes welcome candidates possessing diverse educational backgrounds including medicine, dentistry, nursing, pharmacy, biology, biotechnology, environmental sciences, social sciences, statistics, management and related fields. Admission eligibility remains contingent upon institutional requirements and selected concentration area.",
    },
    {
      q: "What financial investment is required for public health education in the USA?",
      a: "Expenses fluctuate based on institutional selection, programme length, fee schedules, residential arrangements and subsistence costs. Prospective students should consult the comprehensive cost-of-attendance documentation provided by their target institution and investigate scholarship opportunities or graduate assistantship positions.",
    },
    {
      q: "What professional opportunities exist for graduates with public health qualifications from the USA?",
      a: "Based on educational credentials and professional background, alumni may pursue positions encompassing epidemiological investigation, scientific inquiry, health education delivery, public health administration, programme management, environmental health protection, healthcare quality assurance and public health informatics. Certain positions may necessitate supplementary professional credentials or specialized certifications.",
    },
    {
      q: "How can Edu Hawk worldwide help me study public health abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration and licensing requirements with the relevant official authorities.",
    },
    {
      q: "Is GRE required for MPH in the USA?",
      a: "The GRE is not required by every public health programme. Applicants should check the current admissions policy of each university rather than preparing for the exam automatically.",
    },
    {
      q: "What is CEPH accreditation?",
      a: "The Council on Education for Public Health (CEPH) accredits eligible schools and public health programmes in the United States. Students should verify the current accreditation status and scope of the programme they are considering.",
    },
    {
      q: "Do I need a licence to work in public health in the USA?",
      a: "There is no single universal licence required for every public health career in the USA. Requirements depend on the role and employer. Some positions may require specific professional licences, certifications, educational qualifications or work experience.",
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
                <span className="mx-1.5">›</span> Public Health
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Public Health · Abroad
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Public Health in USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Public health is an interdisciplinary discipline dedicated to enhancing the health status and overall well-being of communities and populations. Unlike clinical healthcare, which focuses on diagnosing and treating individual patients, public health emphasizes disease prevention, health promotion, health education, healthcare infrastructure and population-based health concerns.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                The United States offers an extensive array of public health programmes including Bachelor of Public Health, Master of Public Health (MPH), Master of Science in Public Health and doctoral degrees. These programmes prepare students for roles in epidemiology, international health, health policy, biostatistics, environmental health, healthcare administration and public health research.
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80"
                alt="Public health education and community health in USA"
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
              Public Health Abroad at a glance
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
                Study Public Health in USA for Indian Students
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Public health constitutes an interdisciplinary discipline dedicated to enhancing the health status and overall well-being of communities and populations. In contrast to clinical healthcare, which predominantly addresses the diagnosis and treatment of individual patients, public health emphasizes disease prevention, health promotion, health education, healthcare infrastructure and population-based health concerns.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The United States provides an extensive array of public health educational programs, encompassing the Bachelor of Public Health, Master of Public Health (MPH), Master of Science in Public Health, and doctoral degrees. These academic programs equip students with the knowledge and skills necessary for professional roles in epidemiology, international health, health policy, biostatistics, environmental health, healthcare administration and public health investigation.
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Public health research and education"
                className="rounded-2xl shadow-xl object-cover w-full h-[390px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-bold leading-none">20–45L+</div>
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

      {/* ================= 1. WHY STUDY PUBLIC HEALTH IN USA ================= */}
      <section className="py-16 sm:py-20 bg-slate-50" id="why-usa">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Study in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Study Public Health in the USA?
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The United States represents a viable destination for students seeking to develop expertise in healthcare systems, implement disease prevention strategies, and participate in health initiatives at community, national or international scales.
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
            Public health education can also provide a foundation for advanced research, doctoral study or specialised professional development. Through Edu Hawk study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing public health overseas.
          </p>
        </div>
      </section>

      {/* ================= 2. PUBLIC HEALTH COURSES IN USA ================= */}
      <section className="py-16 sm:py-20" id="usa-courses">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Programs in USA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Public Health Courses in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The selection of an appropriate public health curriculum is contingent upon the student's existing educational credentials, scholarly inclinations and professional aspirations.
            </p>
          </div>

          <div className="space-y-6">
            {/* Bachelor's */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 grid place-items-center text-sm font-bold">1</span>
                Bachelor's Degree in Public Health
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                A bachelor's degree constitutes an undergraduate educational pathway designed for students who have successfully completed secondary education (Class 12). Prevalent degree designations encompass Bachelor of Science in Public Health, Bachelor of Arts in Public Health, Bachelor of Science in Global Health, and health sciences bachelor's degrees with a focus on public health.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Typical duration is ordinarily four years, subject to variation based on institutional requirements and programme architecture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {bachelorSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {sub}
                  </div>
                ))}
              </div>
            </div>

            {/* MPH */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 grid place-items-center text-sm font-bold">2</span>
                Master of Public Health (MPH)
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The Master of Public Health (MPH) represents a specialized postgraduate degree intended to cultivate competencies in public health implementation, empirical investigation, strategic programme development and population-level health interventions.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Typical duration generally spans one to two years, contingent upon institutional standards, academic credit specifications and instructional delivery modalities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mphSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[15px] text-slate-700 bg-slate-50 rounded-lg px-3.5 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {sub}
                  </div>
                ))}
              </div>
            </div>

            {/* Doctoral */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center text-sm font-bold">3</span>
                Doctor of Public Health (DrPH) & PhD
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                The Doctor of Public Health (DrPH) degree is fundamentally structured to prepare professionals for advanced practice, organizational leadership and the practical application of public health interventions to address complex societal health challenges. This program is particularly well-suited for individuals possessing substantive professional experience in health-related fields who aspire to cultivate specialized competencies in public health administration, evidence-based policy formulation or strategic program administration.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The Doctor of Philosophy in Public Health (PhD) represents a research-intensive doctoral program emphasizing rigorous scientific inquiry and methodological advancement. Doctoral candidates engage in systematic investigation of contemporary public health phenomena while simultaneously acquiring sophisticated research methodologies and analytical capabilities. Disciplinary specializations include epidemiological science, health policy analysis, international health systems, quantitative biostatistical methods, environmental health sciences and behavioral health determinants.
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
              Top Universities for Public Health in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Individuals conducting comparative analysis of public health academic programs within the United States may examine the following universities. The subsequent enumeration represents institutions meriting scholarly consideration rather than a hierarchical assessment of program quality.
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
              What to Compare Before Selecting a University
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
              Students can shortlist universities based on their qualifications and career goals by using Edu Hawk Worldwide to help them understand the public health education pathways that are available.
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
              Eligibility Requirements for Pursuing Public Health Studies in the United States
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              In the United States, eligibility to pursue public health education depends on the chosen field of concentration, the specific institution and the desired academic level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">For Students After Class 12</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Prospective students seeking admission to a bachelor's degree program in public health typically must:
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Eligibility for MPH</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Prospective applicants typically must satisfy the following prerequisites:
              </p>
              <ul className="space-y-3">
                {mphEligibility.map((item, i) => (
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
                MPH programmes demonstrate considerable flexibility in admitting candidates from diverse disciplinary backgrounds.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">DrPH & PhD Eligibility</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Doctoral programme admission typically necessitates:
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
              Admission Requirements for Public Health in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The prerequisites for admission to public health programs within United States universities demonstrate considerable variation contingent upon the specific institution and the academic degree level pursued.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Academic Transcripts</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Prospective applicants are typically obligated to furnish:
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">English-Language Proficiency</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Students from India may be obligated to demonstrate English-language proficiency through approved standardized examinations, including but not limited to:
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
                Acceptable minimum scores and exemptions are determined by each university's policy.
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
              Professional experience is not a universal requirement for MPH admission. Some programmes welcome recent graduates, while others may prefer or require relevant experience for specific concentrations. The GRE is not required by every public health programme — check the current admissions policy of each university. Many graduate public health programmes use the Schools of Public Health Application Service (SOPHAS); some institutions also require additional university-specific forms.
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
              Cost of Studying Public Health in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The cost required for pursuing public health education within the United States is contingent upon multiple institutional and personal variables, including the specific university, academic degree level, programme duration, geographic location and individual lifestyle choices. Institutional fee structures demonstrate considerable variation across public universities, private universities and alternative programme delivery formats.
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
            <p className="text-slate-500 text-[15px] leading-relaxed mb-3">
              Prospective students should examine the following funding opportunities:
            </p>
            <ul className="space-y-2 text-slate-500 text-[15px]">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>Institution-based merit scholarships</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>Departmental scholarship awards</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>Graduate assistantship positions, where applicable</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>Research assistantship opportunities for qualified candidates</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>Non-institutional scholarships and external funding sources</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>Programme-specific grants or fellowship awards</li>
            </ul>
            <p className="text-slate-500 text-[15px] leading-relaxed mt-4">
              Financial assistance remains highly competitive and demonstrates substantial variation across institutions, degree programmes and applicant classifications. Certain financial aid mechanisms available to United States citizens or permanent residents may not extend to international student populations.
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
              Public Health Application Procedures in the United States
            </h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              The admissions process typically encompasses the subsequent procedural steps.
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

      {/* ================= 8. ACCREDITATION & CERTIFICATION ================= */}
      <section className="py-16 sm:py-20" id="usa-licensing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Accreditation & Certification
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Public Health Accreditation and Professional Certification in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              Students should distinguish between university admission, academic accreditation and professional certification.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="text-lg font-bold mb-3">Programme Accreditation & Professional Credentials</h3>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              Key points to understand:
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
            <h3 className="text-lg font-bold text-slate-900 mb-3">Is a Licence Required to Work in Public Health?</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              The United States does not mandate a single universal licence for all public health professions. Licensing requirements vary according to the specific position and employing organisation. Certain roles may necessitate particular professional licences, certifications, academic credentials or relevant professional experience. The Certified in Public Health (CPH) credential, administered by the National Board of Public Health Examiners (NBPHE), is a professional certification that operates independently from the completion of a public health degree.
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
              Career Opportunities and Salary After Public Health in the USA
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              A public health qualification facilitates career advancement in research, community-based programmes, epidemiological data analysis, policy development, healthcare management and international health initiatives. Specific career prospects are contingent upon the degree type, area of specialisation, professional experience, organisational requirements and immigration status.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-5">Professional Career Pathways</h3>
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
            <div className="text-sm font-medium opacity-90 mb-2">Public Health Salary in the USA</div>
            <div className="text-2xl sm:text-3xl font-bold mb-3">Varies by Role & Specialisation</div>
            <p className="text-white/85 text-[15px] max-w-xl mx-auto leading-relaxed">
              The compensation structure for public health professionals lacks uniformity across the sector due to the heterogeneous nature of occupational roles within this discipline. Prospective students are advised to conduct thorough examination of remuneration data pertaining to their intended career trajectory rather than relying upon generalized public health salary projections as definitive benchmarks. For international graduates, employment prospects are contingent upon visa sponsorship eligibility, institutional hiring protocols and pertinent immigration legislation.
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
              Documentation Requirements for Public Health Programme Admission in the United States
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-3xl">
              The comprehensive documentation requirements vary according to institutional policies and specific programme specifications.
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
              Popular destinations for Public Health
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
              Frequently Asked Questions Regarding Public Health Education in the United States
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
              Ready to start your Public Health journey?
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

export default PublicHealth;