import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../../Images/Abroad/USA/Engineering_PG/civil-engineering.jpg";
import gatechImg from "../../../../../../Images/Abroad/USA/Engineering_PG/CivilEngineeringPG/Georgia Institute of Technology.webp";
import mitImg from "../../../../../../Images/Abroad/USA/Engineering_PG/CivilEngineeringPG/Massachusetts Institute of Technology.webp";
import purdueImg from "../../../../../../Images/Abroad/USA/Engineering_PG/CivilEngineeringPG/Purdue University.webp";
import stanfordImg from "../../../../../../Images/Abroad/USA/Engineering_PG/CivilEngineeringPG/Stanford University.webp";
import ucbImg from "../../../../../../Images/Abroad/USA/Engineering_PG/CivilEngineeringPG/University of California, Berkeley.webp";

const branch = {
  name: "Civil Engineering",
  slug: "civil-engineering",
  title:
    "MS in Civil Engineering in USA for Indian Students | PG 2026 | Edu Hawk",
  description:
    "Study a Master's (MS or MEng) in Civil Engineering in the USA after graduation. Eligibility, GRE, tuition fees, top universities, scholarships, specialisations, careers and the visa process for Indian students with Edu Hawk Worldwide.",
  keywords:
    "Study Postgraduate Civil Engineering in USA, Best Master's in Civil Engineering Universities in USA, Master's in Civil Engineering in USA, Postgraduate Civil Engineering Courses in USA, Civil Engineering Admission Requirements for Master's in USA, MS in Civil Engineering Tuition Fees in USA, Civil Engineering Scholarships for Indian Students, Top Graduate Civil Engineering Colleges in America, Civil Engineering Eligibility for Indian Students, GRE Requirements for MS in Civil Engineering in USA, English Language Tests for US Universities, Career Opportunities After MS in Civil Engineering, Structural and Construction Engineering Master's in USA, USA Student Visa for Indian Postgraduate Students",
  heroIntro:
    "The United States represents a highly sought-after destination for Study postgraduate in Civil Engineering, distinguished by its state-of-the-art infrastructure, comprehensive research facilities, cutting-edge engineering technologies, and rigorous specialized academic curricula. Indian scholars possess the opportunity to cultivate advanced competencies across structural design, transportation systems, environmental engineering, construction management, and sustainable infrastructure development.",
  heroSub:
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey.",

  whyLead: ["Principal advantages encompass:"],
  whyPoints: [
    "Comprehensive access to sophisticated civil engineering laboratories and research infrastructure.",
    "Opportunities to engage with contemporary infrastructure design methodologies and advanced construction technologies.",
    "Specialized concentrations in structural, geotechnical, transportation, and environmental engineering disciplines.",
    "Exposure to Building Information Modelling (BIM), computer-aided design systems, and engineering simulation technologies.",
    "Research prospects in sustainable construction practices, smart city development, and disaster-resistant infrastructure design.",
    "Diverse career trajectories in consulting, construction, transportation, environmental services, and infrastructure development sectors.",
  ],
  whyNote: [
    "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey..",
  ],

  coursesLead: [
    "Indian students may select from diverse master's degree programs aligned with their academic qualifications and professional aspirations.",
    "Prevalent degree offerings include:",
  ],
  courses: [
    "Master of Science in Civil Engineering",
    "Master of Engineering in Civil Engineering",
    "Master of Science in Structural Engineering",
    "Master of Science in Geotechnical Engineering",
    "Master of Science in Transportation Engineering",
    "Master of Science in Environmental Engineering",
    "Master of Science in Construction Engineering and Management",
    "Master of Science in Water Resources Engineering",
    "Structural Engineering",
    "Geotechnical Engineering",
    "Transportation and Traffic Engineering",
    "Environmental Engineering",
    "Construction Engineering and Management",
    "Water Resources Engineering",
    "Earthquake and Disaster-Resilient Engineering",
    "Sustainable and Smart Infrastructure",
    "Construction Materials and Engineering",
  ],
  coursesNote: ["Common specialisations include:"],

  duration: [
    "Postgraduate Civil Engineering programs within the United States typically require a duration of one to two years for completion.",
    "The specific timeframe is contingent upon institutional policies, credit hour requirements, chosen area of specialization, and the student's decision to pursue either a thesis-oriented or course-based academic pathway.",
    "Students may engage in coursework encompassing advanced structural analysis, geotechnical design, transportation planning, environmental systems, construction project management, and infrastructure modelling.",
  ],

  eligibilityLead: [
    "Indian students are generally expected to satisfy the following admission criteria:",
  ],
  eligibility: [
    "A bachelor's degree in Civil Engineering or an allied discipline.",
    "Official academic transcripts and degree certificates.",
    "The institution's minimum requirements for academic success.",
    "English-language proficiency, where mandated.",
    "Graduate Record Examination (GRE) scores, if stipulated by the program.",
    "Statement of Purpose.",
    "Letters of Recommendation.",
    "Resume or Curriculum Vitae.",
    "Relevant academic projects, internship experience, research endeavors, or professional background, where pertinent.",
  ],

  englishLead: [
    "International applicants may be required to demonstrate English language  proficiency through an accredited standardized examination",
    "Widely recognized assessments include:",
  ],
  englishTests: [
    "IELTS Academic",
    "TOEFL iBT",
    "PTE Academic",
    "Duolingo English Test, where recognized by the institution",
    "Minimum score thresholds and exemption criteria differ across universities. Prospective students should verify the prevailing requirements for their intended program prior to submitting their application.",
  ],
  englishNote: [],

  testsNote: [
    "Graduate Record Examination (GRE) prerequisites demonstrate considerable variation across institutions. Certain Civil Engineering graduate programs mandate GRE examination scores whereas others designate the assessment as optional or exclude it from admissions considerations.",
    "Prospective applicants must examine the specific academic prerequisites corresponding to their intended specialization. For instance, Structural Engineering specializations typically necessitate comprehensive competency in mechanics and structural analysis, whereas Environmental Engineering specializations generally prioritize chemistry, fluid mechanics, and environmental systems knowledge.",
  ],

  costsLead: [
    "Postgraduate Civil Engineering program costs in the United States fluctuate based on institutional affiliation, geographic location, curriculum duration, and available financial support mechanisms.",
    "Main expenses include:",
  ],
  costs: [
    "Tuition and institutional fees.",
    "Residential accommodation and meal plans.",
    "Medical insurance coverage.",
    "Textbooks, computational software, and educational materials.",
    "Regional transit and miscellaneous personal expenditures.",
    "Immigration documentation, airfare, and relocation expenses.",
  ],
  costsNote: [
    "Prospective students should consult official institutional fee documentation and projected living cost estimates to establish a comprehensive financial plan for their complete degree program. Educational institutions located in different geographical areas often exhibit significantly different overall costs..",
  ],

  scholarshipsLead: [
    "International students may qualify for diverse funding mechanisms contingent upon institutional and departmental criteria.",
    "Available financial support options encompass:",
  ],
  scholarships: [
    "Academic merit-based scholarships.",
    "Departmental financial awards.",
    "Graduate research assistantship positions.",
    "Graduate instructional assistantship positions.",
    "Tuition remission provisions contingent upon eligible assistantship appointments.",
    "External scholarships administered by qualifying organizations.",
  ],
  scholarshipsNote: [
    "Funding may depend on academic performance, research interests, project availability, and departmental budgets. Students should verify eligibility, application deadlines, and whether the award covers tuition, living costs, or both.",
  ],

  universitiesLead: [
    "The following universities are worth researching for Civil Engineering and related postgraduate programs:",
  ],
  universities: [
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, Massachusetts",
      img: mitImg,
    },
    {
      name: "University of California, Berkeley",
      location: "Berkeley, California",
      img: ucbImg,
    },
    {
      name: "Stanford University",
      location: "Stanford, California",
      img: stanfordImg,
    },
    {
      name: "Georgia Institute of Technology",
      location: "Atlanta, Georgia",
      img: gatechImg,
    },
    {
      name: "Purdue University",
      location: "West Lafayette, Indiana",
      img: purdueImg,
    },
  ],
  universitiesNote: [
    "Students can assess appropriate universities depending on their academic background, budget, ideal location, and long-term professional aspirations with the help of Edu Hawk Worldwide Consultancy advice and university selection guidance.",
    "Prospective students are advised to evaluate the precise program structures, investigative specializations, academic personnel qualifications, financial obligations, and enrollment prerequisites through accredited institutional portals.",
  ],

  careerIntro:
    "A postgraduate qualification can help graduates develop advanced technical and project management skills for careers in infrastructure, construction, consulting, and environmental services.",
  careerLead: ["Standard procedural phases include:"],
  careers: [
    "Civil Design Engineer",
    "Structural Engineer",
    "Geotechnical Engineer",
    "Transportation Engineer",
    "Environmental Engineer",
    "Construction Project Engineer",
    "Construction Manager",
    "Water Resources Engineer",
    "Infrastructure Planning Engineer",
    "Building Information Modeling Engineer or Specialist",
    "Sustainability Consultant",
    "Research and Development Engineer",
  ],
  careerNote: [
    "Certain professional positions, particularly those necessitating professional engineering certification or involvement in public infrastructure initiatives, may mandate state-mandated professional licensure or supplementary credentials. Professional advancement prospects are contingent upon accumulated professional experience, organizational specifications and immigration authorization status.",
  ],

  visaLead: [
    "When admitted to a recognised USA university, Indian nationals usually have to go through the necessary educational visa procedures.",
    "Typical application steps include:",
  ],
  visaSteps: [
    "Examine educational institutions and identify an appropriate Civil Engineering concentration.",
    "Verify academic prerequisites and foundational subject requirements.",
    "Examine standardized examination benchmarks and English language proficiency standards.",
    "Assemble official academic records, a comprehensive Statement of Purpose, endorsements from academic referees, and professional documentation.",
    "Transmit completed applications in accordance with institutional deadlines.",
    "Analyze admission determinations, financial expenditures, and scholarship opportunities.",
    "Procure essential visa documentation from the educational establishment.",
    "Remit the mandatory SEVIS payment and finalize visa application procedures.",
    "Participate in the visa evaluation meeting, if applicable,",
  ],
  visaNote: [],

  faqs: [
    {
      q: "Can Indian students pursue postgraduate Civil Engineering in the USA?",
      a: "Indian students possessing a relevant bachelor's degree and satisfactory academic credentials are eligible to apply to appropriate postgraduate programs in Civil Engineering.",
    },
    {
      q: "How long does a master's in Civil Engineering take in the USA?",
      a: "The duration of most programs ranges from one to two years, contingent upon institutional policies, credit hour requirements, and the chosen area of specialisation.",
    },
    {
      q: "Is the GRE compulsory for Civil Engineering admission?",
      a: "No. The GRE requirement is institution-specific and program-dependent. Certain universities mandate it, whereas others designate it as optional or do not factor it into admissions decisions.",
    },
    {
      q: "Which specialisations are available in Civil Engineering?",
      a: "Prevalent specialisations encompass Structural Engineering, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, Water Resources Engineering, and Construction Management.",
    },
    {
      q: "Are scholarships available for Indian students?",
      a: "Yes. Qualified applicants may investigate merit-based scholarships, research assistantships, teaching assistantships, and supplementary funding mechanisms. The availability and magnitude of awards are determined by institutional policies and resource allocation.",
    },
    {
      q: "How can Edu Hawk worldwide help me study abroad?",
      a: "Edu Hawk worldwide Consultancy can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities. KEYWORDS - Study Postgraduate Civil Engineering in USA Best Master's in Civil Engineering Universities in USA Master's in Civil Engineering in USA Postgraduate Civil Engineering Courses in USA Civil Engineering Admission Requirements for Master's in USA MS in Civil Engineering Tuition Fees in USA Civil Engineering Scholarships for Indian Students Top Graduate Civil Engineering Colleges in America Civil Engineering Eligibility for Indian Students GRE Requirements for MS in Civil Engineering in USA English Language Tests for US Universities Career Opportunities After MS in Civil Engineering Structural and Construction Engineering Master's in USA USA Student Visa for Indian Postgraduate Students Postgraduate Electrical Engineering in the USA",
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

const PostgraduateCivilEngineering = () => {
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
          content={`MS in ${branch.name} in the USA for Indian Students | Edu Hawk Worldwide`}
        />
        <meta property="og:description" content={branch.description} />
        <meta
          property="og:url"
          content={`https://www.eduhawk.in/courses/pg/${branch.slug}`}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://www.eduhawk.in/courses/pg/${branch.slug}`}
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
                <span className="mx-1.5">›</span> PG{" "}
                <span className="mx-1.5">›</span> {branch.name}
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study {branch.name} · USA · Postgraduate
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
                alt={`${branch.name} postgraduate students in the USA`}
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

      {/* ================= 3. DURATION ================= */}
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
              eyebrow="Admission tests"
              title="GRE & Other Admission Requirements"
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

export default PostgraduateCivilEngineering;
