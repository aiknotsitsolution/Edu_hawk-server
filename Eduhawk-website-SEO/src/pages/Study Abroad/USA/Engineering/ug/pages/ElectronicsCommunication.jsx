import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../../Images/Abroad/USA/Engineering_UG/electronics-communication.jpg";
import mitImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ElectronicsCommunicationUG/Massachusetts Institute of Technology (MIT).webp";
import stanfordImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ElectronicsCommunicationUG/Stanford University.webp";
import ucbImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ElectronicsCommunicationUG/University of California, Berkeley.webp";

const branch = {
  name: "Electronics & Communication Engineering",
  slug: "electronics-communication",
  title:
    "Electronics & Communication Engineering in USA for Indian Students | UG 2026 | Edu Hawk",
  description:
    "Study Bachelor's in Electronics and Communication Engineering (ECE) in the USA after Class 12. Eligibility, tuition fees, top universities, scholarships, careers and visa process for Indian students with Edu Hawk Worldwide.",
  keywords:
    "Study Electronics and Communication Engineering in USA for Indian Students, Best ECE Universities in USA, Bachelor's in Electronics and Communication Engineering in USA, Study ECE in USA After 12th, Electrical and Computer Engineering Courses in USA, ECE Admission Requirements in USA, ECE Tuition Fees in USA, ECE Scholarships for Indian Students, Top Electronics Engineering Colleges in America, ECE Eligibility for Indian Students, SAT Requirements for Engineering in USA, English Language Tests for US Universities, Career Opportunities After ECE, Telecommunications and Semiconductor Engineering in USA, USA Student Visa for Indian Engineering Students",
  heroIntro:
    "The United States provides undergraduate engineering curricula encompassing electronic device technology, communication network infrastructure, wireless technology systems and digital system architecture. Students establish foundational competencies in engineering principles while pursuing specialized knowledge domains through elective coursework, laboratory work, and investigative research endeavors.",
  heroSub:
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey.",

  whyLead: [
    "Principal Advantages of Electronics and Communication Engineering Education in the United States-",
  ],
  whyPoints: [
    "State-of-the-Art Electronics Laboratories: Cultivate applied expertise in electronic circuit systems, digital architectures, microprocessor technology, and hardware development methodologies.",
    "Technology for Wireless Communication Curriculum: Examine theoretical communication frameworks, antenna design systems, cellular communication protocols, and wireless network systems.",
    "Semiconductor and Microelectronics Instruction: Examine electronic component technology, integrated circuit systems, microchip fabrication, and semiconductor quality assurance procedures.",
    "Experiential Engineering Initiatives: Implement theoretical classroom knowledge through experimental laboratory work, circuit development, and signal-processing applications.",
    "Advanced Technology Specialization Pathways: Investigate autonomous systems, Internet of Things (IoT) applications, and embedded",
    "Emerging Technology Specialisations: Explore robotics, the Internet of Things (IoT), embedded systems and wireless technologies, depending on the programme",
    "Research Opportunities: Some universities provide access to faculty-led projects and research facilities in electronics, communications and related engineering fields.",
    "Career Flexibility: Graduates may pursue opportunities in telecommunications, semiconductor manufacturing, electronics design, networking and technology development.",
  ],
  whyNote: [],

  coursesLead: [
    "Within the United States, Electronics and Communication Engineering curricula may be designated under various degree nomenclatures. Indian students are advised to conduct a thorough examination of the curriculum content rather than depending exclusively on the programme designation.",
    "Prevalent Undergraduate Degree Designations",
  ],
  courses: [
    "Bachelor of Science in Electrical and Computer Engineering",
    "Bachelor of Science in Electrical Engineering",
    "Bachelor of Science in Computer Engineering",
    "Bachelor of Science in Telecommunications Engineering, where available",
    "Bachelor of Science in Electronics Engineering, where available",
    "Electronic circuits and circuit analysis",
    "Digital logic design",
    "Signals and systems",
    "Digital signal processing",
    "Communication systems",
    "Electromagnetic fields and waves",
    "Microprocessors and microcontrollers",
    "Semiconductor devices and microelectronics",
    "Computer architecture",
    "Wireless communication networks",
    "Embedded systems and the Internet of Things",
    "Programming and engineering mathematics",
  ],
  coursesNote: [
    "Electrical and Computer Engineering programmes demonstrate particular relevance for students pursuing interests in both electronic hardware infrastructure and communication systems. Nevertheless, the disciplinary content varies considerably across institutions.",
    "Typical Subject Matter in ECE-Related Programmes",
    "Contingent upon the institution and area of specialization, students may engage with:-",
    "Students should examine the institutional curriculum documentation to verify inclusion of their desired subject areas, including telecommunications, RF engineering, semiconductor design, or digital communications.",
  ],

  duration: [
    "The majority of undergraduate engineering degrees in this discipline require approximately four years for completion, though the actual timeframe may vary depending on programme structure and individual student academic planning.",
  ],

  eligibilityLead: [
    "The prerequisites for pursuing undergraduate engineering programs at USA universities differ across institutions. Indian applicants are generally required to satisfy academic qualifications, discipline-specific competencies, and English language proficiency standards.",
    "Academic Prerequisites Following Secondary Education",
    "Prospective students must ordinarily:",
  ],
  eligibility: [
    "Complete secondary education (Class 12) through an accredited educational institution.",
    "Have studied mathematics and physics alongside any supplementary disciplines mandated by the target university.",
    "Satisfy the institution's minimum academic performance benchmarks.",
    "Provide official school transcripts, examination marksheets, and educational certificates.",
    "Establish English language competency, where applicable.",
    "Submit any supplementary documentation as requested by the admissions office.",
  ],

  englishLead: [
    "International applicants may be obligated to demonstrate English language proficiency as a component of the university admissions evaluation.",
    "Widely Recognized English Proficiency Assessments",
  ],
  englishTests: [
    "IELTS Academic",
    "TOEFL iBT",
    "PTE Academic",
    "Duolingo English Test, where recognized by the institution",
  ],
  englishNote: [
    "Minimum score thresholds, examination validity periods, potential exemptions, and permissible test formats differ substantially among universities. Indian applicants should verify current institutional requirements through official admissions portals prior to examination registration. Certain universities may grant exemptions from testing under particular circumstances.",
  ],

  testsNote: [
    "Depending on the institution and the particular admission cycle in question, SAT scores may or may not be required for admission to engineering programs at US institutions.",
    "Certain universities maintain mandatory standardized testing requirements, whereas others have adopted test-optional admission frameworks. Additionally, ACT examination scores may be either accepted or mandated by particular institutions.",
    "Whether test results from the SAT or ACT are required for the application",
    "Students are advised to adhere to the admission policies pertinent to their intended enrollment period rather than depending upon outdated or superseded testing guidelines.",
  ],

  costsLead: [
    "The aggregate expenditure associated with pursuing an ECE degree in the United States as an Indian student is contingent upon multiple variables, including the specific university, tuition fee structure, geographic location, residential arrangements, and program duration.",
    "The comprehensive financial budget must encompass considerably more than tuition expenses alone. Students should thoroughly examine the university's official cost of attendance documentation specifically designated for international undergraduate enrollees.",
    "Primary Expenditure Categories-",
  ],
  costs: [
    "Tuition and Academic Fees: Institutional charges encompassing coursework, enrollment registration, and supplementary academic services.",
    "Accomodation and Meals: Expenses related to university-provided housing, private rental arrangements, food procurement, and meal services.",
    "Health Insurance: Mandatory health insurance coverage as stipulated by the university or applicable student health arrangements.",
    "Books and Laboratory Supplies: Expenditures for academic textbooks, electronic components, experimental materials, and requisite educational resources.",
    "Transportation: Costs associated with local transit systems and commuting arrangements.",
    "Personal Expenses: Miscellaneous expenditures including telecommunications, apparel, and routine living necessities.",
  ],
  costsNote: [],

  scholarshipsLead: [
    "Numerous institutions within the United States provide scholarship opportunities for international undergraduate students pursuing engineering disciplines, though the specific eligibility requirements, monetary allocations, and resource accessibility demonstrate substantial variation across institutions.",
    "Prospective Funding Mechanisms-",
  ],
  scholarships: [
    "Merit-Oriented Scholarships: Financial awards determined by demonstrated academic excellence and supplementary institutional selection parameters.",
    "International Scholar Funding: Financial resources designated exclusively for qualified non-domestic applicants.",
    "Institution-Centered Tuition Assistance: Financial awards or tuition remission programs administered through formal university frameworks.",
    "Financial Assistance Based on Demonstrated Need: Monetary support accessible to international students at select universities, contingent upon institutional eligibility standards and regulatory frameworks.",
    "Independent Funding Sources: Financial support administered by external organizations or philanthropic entities to qualified candidates.",
    "Examine institutional scholarship and financial assistance webpages for comprehensive information.",
    "Verify eligibility status for international first-year applicants.",
    "Determine whether scholarship solicitations necessitate independent submission processes distinct from admission procedures.",
    "Review application submission deadlines, renewal stipulations, and requisite academic performance thresholds.",
    "Analyze aggregate educational expenses following confirmed financial awards rather than presuming automatic funding allocation.",
    "Critical Consideration: Scholarship acquisition remains highly competitive, and numerous American universities do not extend financial assistance to international undergraduate candidates. Direct institutional communication regarding funding specifications is imperative.",
  ],
  scholarshipsNote: ["Methodologies for Scholarship Identification"],

  universitiesLead: [
    "The United States provides comprehensive undergraduate curricula in Electronics and Communication Engineering (ECE) through specialized degrees in Electrical Engineering, Electrical and Computer Engineering, and Computer Engineering. Electronics And communication systems, wireless networks, signal processing, embedded systems, and semiconductor technologies are all included in these university programs.",
    "Preeminent Institutions Offering ECE Programs:",
  ],
  universities: [
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, Massachusetts",
      img: mitImg,
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      img: stanfordImg,
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, California",
      img: ucbImg,
    },
  ],
  universitiesNote: [
    "University of California, Berkeley – Bachelor of Science in Electrical Engineering and Computer Sciences",
    "Eligibility for Indian Students",
    "Prospective applicants typically must demonstrate completion of secondary education (Class 12) with proficiency in Mathematics and Physics, submit official academic records, and provide evidence of English language competency through standardized examinations where applicable. Standardized testing requirements, including the SAT or ACT, vary across institutions.",
    "CAREER OPPORTUNITIES",
    "Program graduates may pursue professional opportunities in electronics design,",
    "telecommunications, wireless communication systems, semiconductor engineering, embedded systems development, signal processing, and computer hardware engineering.",
    "NOTE - ECE disciplines are frequently designated under alternative degree nomenclature within American universities. Prospective applicants should thoroughly examine each institution's curriculum to verify the availability of communication systems and electronics specializations prior to application submission.",
    "How to Choose the Right University",
    "Before shortlisting universities, compare:",
    "Exact undergraduate degree title",
    "Availability of communication systems and electronics subjects",
    "Semiconductor, microelectronics and wireless communication electives",
    "Laboratory facilities and engineering project opportunities",
    "Internship and co-op options",
    "Tuition fees and estimated total cost",
    "Scholarships for international students",
    "Academic eligibility and required Class 12 subjects",
    "Accreditation and programme recognition",
    "Campus location, accommodation and student support",
    "Tip: Do not select a university based on its name alone. Compare the actual course modules to determine whether the programme matches your interests in electronics, telecommunications, semiconductor technology or embedded systems.",
  ],

  careerIntro:
    "Individuals completing degree programmes in electronics and communication engineering disciplines may pursue professional trajectories encompassing electronics design, telecommunications, computer hardware, wireless systems, and semiconductor technology.",
  careerLead: [
    "The availability of specific career opportunities is contingent upon the degree programme curriculum, acquired technical competencies, hands-on experience, organisational requirements, and pertinent work authorisation regulations.",
    "Prospective Career Positions",
    "Electronics Design Engineer: Specialises in the development of electronic circuits, components, and hardware systems.",
    "Communication Systems Engineer: Participates in the conception, evaluation, or assessment of communication systems.",
    "Telecommunications Engineer: Engages with communication networks, transmission infrastructure, and associated systems.",
    "RF Engineering Associate: Facilitates radio-frequency assessment, wireless hardware advancement, and complementary engineering functions.",
    "Signal Processing Engineer: Formulates or examines mechanisms that manipulate digital or analogue signals.",
    "Embedded Systems Engineer: Manages hardware and software components integrated within embedded electronic apparatus.",
    "Network Systems Engineer: Facilitates the conception, administration, or enhancement of communication and computational networks.",
    "Hardware Design Engineer: Formulates and validates electronic or computational hardware.",
    "Semiconductor Test Engineer: Participates in the assessment of integrated circuits, microchips, and semiconductor components.",
    "Wireless Technology Engineer: Concentrates on wireless communication apparatus, technological systems, or network infrastructures.",
    "Designations and operational responsibilities may differ across organisations. Certain positions necessitate advanced expertise, supplementary professional development, or pertinent professional background.",
    "Industries That Employ ECE Graduates",
    "Based on their credentials and technical proficiencies, graduates may investigate possibilities within:",
  ],
  careers: [
    "Telecommunications and wireless communication sectors",
    "Semiconductor and microchip production",
    "Electronics conception and production",
    "Computational hardware and embedded systems",
    "Networking and communication infrastructure development",
    "Automotive electronics applications",
    "Aerospace and defence-oriented engineering, contingent upon applicable employment constraints",
    "Robotics and mechanised production systems",
    "Internet of Things (IoT) technological applications",
    "Research and development",
  ],
  careerNote: [
    "Students who are interested in a certain industry should select practical projects and technical electives that meet its standards.",
  ],

  visaLead: [
    "Indian students who have secured admission to an accredited United States institution are typically required to complete the requisite student visa procedures prior to entering the United States.",
    "Step-by-Step Admission and Visa Process",
    "Step 1: Institutional Research",
    "Conduct thorough research to identify universities that offer pertinent undergraduate engineering programmes and evaluate their respective curricula.",
    "Step 2: Verify Eligibility Requirements",
    "Examine the subject prerequisites for Class 12, academic performance standards, and proficiency requirements in the English language.",
    "Step 3: Examine Standardised Assessment Policies",
    "Determine whether SAT or ACT examination scores are mandated for the intended admission cycle.",
    "Step 4: Compile Application Materials",
    "Gather official academic transcripts, examination marksheets, standardised test scores, and any supplementary documentation specified by the institution.",
    "Step 5: Submit Application Materials",
    "Complete and submit applications via the university's designated admissions platform in accordance with established submission deadlines.",
    "Step 6: Evaluate Admission Decisions",
    "Analyse programme specifications, financial obligations, available scholarships, and projected expenditures for living accommodations.",
    "Step 7: Fulfil University Enrolment Obligations",
    "Provide any remaining required documentation and adhere to the institution's protocols for international student registration.",
    "Step 8: Secure Requisite Student Documentation",
    "Qualified applicants typically obtain Form I-20 documentation from their SEVP-designated institution upon satisfying all procedural requirements and demonstrating adequate financial resources.",
    "Step 9: Execute Visa Application Procedures",
    "Adhere to current official protocols pertaining to the applicable student visa classification, SEVIS fee payment, and visa application submission. Participate in an interview if mandated.",
    "Step 10: Execute Pre-Departure Preparations",
    "Secure residential arrangements, procure health insurance coverage as applicable, organise transportation, and complete other necessary pre-departure arrangements.",
    "NOTE -: University admission decisions and visa authorisation represent independent determinations. Applicants should consult authoritative United States government resources for contemporary visa requirements and procedural guidelines.",
  ],
  visaSteps: [],
  visaNote: [],

  faqs: [
    {
      q: "Can Indian students pursue Electronics and Communication Engineering studies in the United States following completion of Class 12?",
      a: "yes,. Indian students are eligible to submit applications for pertinent undergraduate engineering programmes upon completion of Class 12, provided they satisfy the institution's academic prerequisites, subject-specific requirements, and language proficiency standards.",
    },
    {
      q: "Is Electronics and Communication Engineering offered as a distinct degree programme in the United States?",
      a: "Certain universities provide specialized degrees in electronics or telecommunications; however, numerous institutions incorporate related coursework within Electrical Engineering, Electrical and Computer Engineering, or Computer Engineering degree programmes. Prospective students should conduct thorough comparative analyses of course curricula.",
    },
    {
      q: "What is the typical duration of an undergraduate degree in ECE-related fields within the United States?",
      a: "The majority of undergraduate engineering degrees in this discipline require approximately four years for completion, though the actual timeframe may vary depending on programme structure and individual student academic planning.",
    },
    {
      q: "Is the SAT examination mandatory for admission to ECE-related programmes in the United States?",
      a: "No, SAT and ACT examination requirements demonstrate considerable variation across institutions and admission cycles. Certain universities implement test-optional admission policies, whereas others mandate standardized test score submission.",
    },
    {
      q: "Are financial scholarships accessible to Indian students enrolled in ECE programmes in the United States?",
      a: "Yes, Numerous universities extend merit-based scholarships and supplementary financial support mechanisms to qualified international students. The availability of such funding, eligibility criteria, and award magnitudes differ substantially across institutions.",
    },
    {
      q: "How can Edu Hawk worldwide help me study abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities.",
    },
  ],
};

const SectionHeading = ({ eyebrow, title }) => (
  <div className="mb-8">
    <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
      {eyebrow}
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
  </div>
);

const ListCard = ({ children }) => <ul className="space-y-3">{children}</ul>;

const DocParas = ({
  items,
  className = "max-w-3xl mb-6 text-slate-600 leading-relaxed space-y-4",
}) =>
  items && items.length ? (
    <div className={className}>
      {items.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  ) : null;

const Li = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
    <span className="text-slate-600 leading-relaxed">{text}</span>
  </li>
);

const ElectronicsCommunicationUG = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll("section");
    if (!sections) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    sections.forEach((s) => {
      s.classList.add("reveal");
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-slate-800">
      <Helmet>
        <title>{branch.title}</title>
        <meta name="description" content={branch.description} />
        <meta name="keywords" content={branch.keywords} />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`${branch.name} in the USA for Indian Students | Edu Hawk Worldwide`}
        />
        <meta property="og:description" content={branch.description} />
        <meta
          property="og:url"
          content={`https://www.eduhawk.in/courses/ug/${branch.slug}`}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://www.eduhawk.in/courses/ug/${branch.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: branch.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.is-visible { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .visa-step-card { animation: none; opacity: 1; }
        }
        .visa-step-card {
          opacity: 0;
          animation: visaStepReveal 0.7s ease forwards;
        }
        @keyframes visaStepReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Paper artwork: stacked rotated sheets + dotted graph-paper texture */
        .visa-step-card {
          background-image: radial-gradient(#e2e8f0 1px, transparent 1.1px);
          background-size: 16px 16px;
        }
        .visa-step-card::before,
        .visa-step-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 3px 10px rgba(15, 23, 42, 0.06);
          z-index: -1;
          transition: transform 0.5s ease;
        }
        .visa-step-card::before { transform: rotate(2deg) translate(3px, 4px); }
        .visa-step-card::after {
          transform: rotate(-1.6deg) translate(-4px, 2px);
          background: #fffbeb;
        }
        .visa-step-card:hover::before { transform: rotate(3.2deg) translate(5px, 6px); }
        .visa-step-card:hover::after { transform: rotate(-2.6deg) translate(-6px, 3px); }
        @media (prefers-reduced-motion: reduce) {
          .visa-step-card::before,
          .visa-step-card::after { transition: none; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#0b1533] via-[#101c47] to-[#0b1533] text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[480px] h-[480px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Engineering{" "}
                <span className="mx-1.5">›</span> UG{" "}
                <span className="mx-1.5">›</span> {branch.name}
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study {branch.name} · USA · Undergraduate
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                {branch.name} in the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                {branch.heroIntro}
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                {branch.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <a
                  href="https://api.whatsapp.com/send?phone=919630736070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
                >
                  Book free counselling
                </a>
                <a
                  href="#faq"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
                >
                  Read FAQs
                </a>
              </div>
            </div>
            <div className="relative mt-2 lg:mt-0">
              <img
                src={heroImg}
                alt={`${branch.name} students in the USA`}
                className="rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px]"
                loading="eager"
              />
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium">
                Trusted by 1000+ Indian students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 1. WHY STUDY ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why the USA"
            title={`Why Study ${branch.name} in the USA?`}
          />
          <DocParas items={branch.whyLead} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {branch.whyPoints.map((p) => (
              <Li key={p} text={p} />
            ))}
          </div>
          <DocParas
            items={branch.whyNote}
            className="mt-6 max-w-3xl text-slate-500 leading-relaxed space-y-4"
          />
        </div>
      </section>

      {/* ================= 2. COURSES ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Programs"
            title={`${branch.name} Courses in the USA`}
          />
          <DocParas items={branch.coursesLead} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.courses.map((c) => (
              <div
                key={c}
                className="bg-white border border-slate-200 rounded-xl p-5 text-sm font-medium text-slate-700 shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
          <DocParas
            items={branch.coursesNote}
            className="mt-6 max-w-3xl text-slate-500 leading-relaxed space-y-4"
          />
        </div>
      </section>

      {/* ================= TOP UNIVERSITIES (moved up) ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Top Universities for {branch.name} in the USA
            </h2>
            <DocParas
              items={branch.universitiesLead}
              className="text-slate-500 text-[15px] leading-relaxed max-w-2xl space-y-3"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branch.universities.map((u) => (
              <div
                key={u.name}
                className="relative rounded-2xl overflow-hidden h-60 group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >
                {u.img ? (
                  <img
                    src={u.img}
                    alt={`${u.name} campus`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#101c47] to-blue-900 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/20">
                      {u.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                  <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-white font-semibold text-lg leading-snug">
                      {u.name}
                    </h4>
                    <p className="text-white/80 text-sm">{u.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <DocParas
            items={branch.universitiesNote}
            className="mt-6 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-4"
          />
        </div>
      </section>

      {/* ================= 3. DURATION (no duration section exists in the source doc for this branch) ================= */}
      {branch.duration.length > 0 && (
        <section className="py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading eyebrow="How long" title="Program Duration" />
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 sm:p-8 max-w-3xl">
              <DocParas
                items={branch.duration}
                className="text-slate-700 leading-relaxed space-y-4"
              />
            </div>
          </div>
        </section>
      )}

      {/* ================= 4. ELIGIBILITY ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Who can apply"
            title="Eligibility Requirements for Indian Students"
          />
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl shadow-sm">
            <DocParas
              items={branch.eligibilityLead}
              className="mb-5 text-slate-600 leading-relaxed space-y-4"
            />
            <ListCard>
              {branch.eligibility.map((e) => (
                <Li key={e} text={e} />
              ))}
            </ListCard>
          </div>
        </div>
      </section>

      {/* ================= 5+6. ENGLISH & TESTS ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading
              eyebrow="English proficiency"
              title="English Language Requirements"
            />
            <DocParas
              items={branch.englishLead}
              className="mb-5 text-slate-600 leading-relaxed space-y-3"
            />
            <div className="flex flex-wrap gap-3">
              {branch.englishTests.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium border border-orange-100"
                >
                  {t}
                </span>
              ))}
            </div>
            <DocParas
              items={branch.englishNote}
              className="mt-5 text-slate-600 leading-relaxed space-y-4"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Standardised tests"
              title="SAT & Other Admission Tests"
            />
            <DocParas items={branch.testsNote} />
          </div>
        </div>
      </section>

      {/* ================= 7. COSTS ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Budget"
            title="Tuition Fees and Living Expenses"
          />
          <DocParas items={branch.costsLead} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.costs.map((c) => (
              <div
                key={c}
                className="bg-white border border-slate-200 rounded-xl p-5 text-sm text-slate-700 shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
          <DocParas
            items={branch.costsNote}
            className="mt-6 max-w-3xl text-slate-500 leading-relaxed space-y-4"
          />
        </div>
      </section>

      {/* ================= 8. SCHOLARSHIPS ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Funding"
            title="Scholarship Opportunities and Financial Aid"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <DocParas
                items={branch.scholarshipsLead}
                className="mb-5 text-slate-600 leading-relaxed space-y-4"
              />
              <ListCard>
                {branch.scholarships.map((s) => (
                  <Li key={s} text={s} />
                ))}
              </ListCard>
            </div>
            <DocParas
              items={branch.scholarshipsNote}
              className="text-slate-600 leading-relaxed space-y-4"
            />
          </div>
        </div>
      </section>

      {/* ================= 10. CAREERS ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="After graduation"
            title={`Career Opportunities After ${branch.name}`}
          />
          <DocParas items={branch.careerIntro ? [branch.careerIntro] : []} />
          <DocParas items={branch.careerLead} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.careers.map((c) => (
              <div
                key={c}
                className="border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-slate-700 bg-white shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
          <DocParas
            items={branch.careerNote}
            className="mt-6 max-w-3xl text-slate-500 leading-relaxed space-y-4"
          />
        </div>
      </section>

      {/* ================= 11. VISA PROCESS ================= */}
      <section className="py-14 sm:py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Step by step"
            title="Visa & Application Process for Indian Students"
          />
          <DocParas items={branch.visaLead} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branch.visaSteps.map((s, i) => (
              <div
                key={s}
                className="visa-step-card group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-200"
                style={{
                  animationDelay: `${i * 120}ms`,
                }}
              >
                {/* Animated Number Circle */}
                <div className="mb-5 relative w-fit">
                  <div className="visa-number-circle relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-orange-500 bg-orange-50 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-orange-200">
                    <span className="text-xl font-bold text-orange-500 transition-colors duration-500 group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Outer Ring */}
                    <span className="absolute inset-[-6px] rounded-full border border-orange-200 opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" />
                  </div>
                </div>

                {/* Step Content */}
                <p className="text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-800">
                  {s}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-orange-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>

          <DocParas
            items={branch.visaNote}
            className="mt-7 text-sm text-slate-500 max-w-3xl space-y-4"
          />
        </div>
      </section>

      {/* ================= 12. FAQ ================= */}
      <section id="faq" className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            eyebrow="FAQs"
            title={`Frequently Asked Questions — ${branch.name} in the USA`}
          />
          <div className="space-y-3">
            {branch.faqs.map((f, i) => (
              <div
                key={f.q}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span
                    className={`text-xl text-orange-500 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-slate-600 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-[#0b1533] via-[#101c47] to-[#0b1533] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Plan your {branch.name} journey to the USA with Edu Hawk Worldwide
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get expert guidance on university shortlisting, applications,
            scholarships, visas and pre-departure preparation — all in one
            place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=919630736070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold bg-blue-600 hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919630736070"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold border-[1.5px] border-white/30 hover:bg-white/10 hover:border-white transition-all no-underline"
            >
              Call +91 96307 36070
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectronicsCommunicationUG;
