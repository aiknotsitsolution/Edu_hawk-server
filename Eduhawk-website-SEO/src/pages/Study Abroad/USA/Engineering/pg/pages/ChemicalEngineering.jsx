import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../../Images/Abroad/USA/Engineering_PG/chemical-engineering.jpg";
import illinoisImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ChemicalEngineeringPG/Illinois University at Urbana-Champaign.webp";
import purdueImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ChemicalEngineeringPG/Purdue University.webp";
import minnesotaImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ChemicalEngineeringPG/University of Minnesota Twin Cities.webp";
import utAustinImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ChemicalEngineeringPG/University of Texas at Austin.webp";

const branch = {
  name: "Chemical Engineering",
  slug: "chemical-engineering",
  title: "MS in Chemical Engineering in USA for Indian Students | PG 2026 | Edu Hawk",
  description:
    "Study Master's in Chemical Engineering in the USA after your bachelor's. Eligibility, GRE policies, tuition fees, top universities, scholarships, careers and visa process for Indian students with Edu Hawk Worldwide.",
  keywords:
    "Study Postgraduate Chemical Engineering in USA, Best Master's in Chemical Engineering Universities in USA, Master's in Chemical Engineering in USA for Indian Students, Postgraduate Chemical Engineering Courses in USA, Chemical Engineering Admission Requirements for Master's in USA, Chemical Engineering Scholarships for Indian Students, Top Graduate Chemical Engineering Colleges in America, Chemical Engineering Eligibility for Indian Students, GRE Requirements for MS in Chemical Engineering in USA, English Language Tests for US Universities, Career Opportunities After MS in Chemical Engineering",
  heroIntro:
    "Postgraduate Chemical Engineering programs in the USA build on cutting-edge research infrastructure and strengths in pharmaceuticals, energy production, biotechnology, chemical manufacturing and sustainable process systems. Indian students can pursue a one- to two-year master's degree with specialised training in chemical process engineering, materials characterisation and industrial production.",
  heroSub:
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey.",
  whyPoints: [
    "Full access to cutting-edge research facilities and chemical engineering laboratories.",
    "Education centred on industrial production systems and process improvement.",
    "Specialised training in energy systems engineering, materials science and biochemical engineering.",
    "Hands-on experience with advanced materials development, chemical product creation and process simulation technologies.",
    "Research opportunities in environmental remediation, green chemical projects and renewable energy development.",
    "Career paths across manufacturing, biotechnology, chemical production, petroleum, food processing and pharmaceutical industries.",
  ],
  courses: [
    "Master of Science in Chemical Engineering",
    "Master of Engineering in Chemical Engineering",
    "Master of Science in Biochemical Engineering, subject to availability at the institution",
    "Master of Science in Engineering and Materials Science",
    "Master of Science in Pharmaceutical Engineering, subject to institutional availability",
    "Master of Science in Energy Engineering, subject to availability at the institution",
    "Master of Science in Environmental Engineering, subject to availability at the institution",
  ],
  duration:
    "Postgraduate Chemical Engineering programs in the USA normally take one to two years to complete. The precise timeline depends on institutional policies, credit hour requirements, the chosen concentration and the academic pathway, whether thesis-oriented, research-intensive or coursework-focused. Coursework typically covers thermodynamics, transport phenomena, chemical reaction engineering, process control, separation processes, process modeling and industrial process design.",
  eligibility: [
    "A bachelor's degree in Chemical Engineering or a related discipline.",
    "Official degree certificates and transcripts.",
    "Meeting the minimum academic performance level required by the university.",
    "Proof of English language proficiency, where required.",
    "Graduate Record Examination (GRE) scores, if required by the program.",
    "A Statement of Purpose outlining academic and professional goals.",
    "Letters of recommendation from academics or industry professionals.",
    "A curriculum vitae or resume detailing academic and professional background.",
    "Evidence of relevant research, internships, work experience or academic projects, where applicable.",
  ],
  englishTests: [
    "TOEFL iBT",
    "IELTS Academic",
    "PTE Academic",
    "Duolingo English Test, where accepted",
  ],
  testsNote:
    "GRE requirements vary significantly across postgraduate Chemical Engineering programs. Some universities require GRE scores, while others consider the test optional or do not include it in their evaluation criteria. Always review the specific requirements of your chosen specialization. A strong foundation in mathematics, chemistry, thermodynamics, fluid mechanics and transport phenomena is usually expected, and competitive applications typically combine academic achievements, laboratory experience, technical projects, internships, research contributions, recommendations and a thorough Statement of Purpose.",
  costs: [
    "University tuition and institutional fees",
    "Housing and meal services",
    "Health insurance coverage",
    "Academic resources such as textbooks and software",
    "Research and laboratory expenses, where applicable",
    "Local transport and personal expenses",
    "Visa fees, travel and relocation costs",
  ],
  costsNote:
    "Total spending on a postgraduate Chemical Engineering degree in the USA varies with program length, geographic location, institutional choice and available funding. Refer to official university fee schedules and living expense estimates to calculate the total program cost, and verify current figures on official university websites.",
  scholarships: [
    "Merit-based scholarship awards",
    "Department-level scholarships",
    "Graduate research assistantship positions",
    "Graduate teaching assistantship roles",
    "Tuition remissions for qualifying assistantships",
    "External scholarship opportunities from eligible organisations and institutes",
  ],
  universities: [
    { name: "University of Illinois Urbana-Champaign", location: "Urbana, Illinois" , img: illinoisImg },
    { name: "Purdue University", location: "West Lafayette, Indiana" , img: purdueImg },
    { name: "University of Texas at Austin", location: "Austin, Texas" , img: utAustinImg },
    { name: "University of Minnesota Twin Cities", location: "Minneapolis, Minnesota" , img: minnesotaImg },
  ],
  careers: [
    "Process Design Engineer",
    "Chemical Process Engineer",
    "Production and Process Development Engineer",
    "Bioprocess Engineer",
    "Materials Engineer",
    "Pharmaceutical Process Engineer",
    "Quality Control Engineer",
    "Environmental Process Engineer",
    "Energy Systems Engineer",
    "Research and Development Engineer",
    "Process Safety Engineer",
  ],
  careerIntro:
    "Postgraduate graduates develop advanced technical skills relevant to roles in materials science, chemical processing, industrial production, biotechnology, pharmaceutical research and energy. Role availability depends on technical skills, research experience, employer requirements and work authorisation; some positions may need additional qualifications or professional licensing.",
  visaSteps: [
    "Research universities and choose a suitable Chemical Engineering concentration.",
    "Check academic eligibility and subject-specific requirements.",
    "Review Graduate Record Examination (GRE) and English proficiency test requirements.",
    "Prepare official transcripts, a detailed resume, academic references and a Statement of Purpose.",
    "Complete applications and submit them before university deadlines.",
    "Review admission decisions, financial commitments and available funding support.",
    "Obtain the required student documentation from the university.",
    "Complete the visa paperwork and pay the required SEVIS fee.",
    "Participate in the visa adjudication process where applicable and plan travel after approval.",
  ],
  visaNote:
    "Visa authorisation depends on individual circumstances. Always follow current US government regulations and university policies.",
  faqs: [
    {
      q: "Can Indian students pursue postgraduate Chemical Engineering in the USA?",
      a: "Yes. Indian students can apply to eligible postgraduate programs if they hold a relevant undergraduate degree and acceptable academic qualifications.",
    },
    {
      q: "How long does a Master's in Chemical Engineering typically take in the USA?",
      a: "Most programs take one to two years to complete, depending on the research type, institutional requirements and the total credit hours required.",
    },
    {
      q: "Is the GRE required for admission?",
      a: "No single rule applies. GRE requirements vary widely between programs and universities; some require it, while others treat it as optional or exclude it from their evaluation criteria.",
    },
    {
      q: "Which specializations are available in Chemical Engineering programs?",
      a: "Common specializations include process engineering, biochemical engineering, pharmaceutical processes, materials science, energy engineering and sustainable process engineering.",
    },
    {
      q: "Are financial aid options available for Indian students?",
      a: "Yes. Eligible candidates can explore teaching assistantships, research assistantships, merit-based scholarships and other funding sources. Availability depends on university resources and policies.",
    },
    {
      q: "How can Edu Hawk Worldwide help me study abroad?",
      a: "Edu Hawk Worldwide helps students research suitable universities, understand admission requirements, organise application documents and plan their study-abroad journey. Students should verify academic, financial, immigration and licensing requirements with the relevant official authorities.",
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

const ListCard = ({ children }) => (
  <ul className="space-y-3">{children}</ul>
);

const Li = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
    <span className="text-slate-600 leading-relaxed">{text}</span>
  </li>
);

const PostgraduateChemicalEngineering = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {branch.whyPoints.map((p) => (
              <Li key={p} text={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. COURSES ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Programs"
            title={`${branch.name} Courses in the USA`}
          />
          <p className="text-slate-600 mb-6 max-w-3xl">
            Postgraduate students can choose programs based on their academic
            background and career goals, with specializations spanning process
            engineering, biochemical and bioprocess engineering, materials
            science, energy, pharmaceutical and environmental systems. Common
            degree pathways include:
          </p>
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
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
              Compare universities on academics, cost, facilities and
              international admission policies before shortlisting.
            </p>
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
        </div>
      </section>

      {/* ================= 3. DURATION ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="How long" title="Program Duration" />
          <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 sm:p-8 max-w-3xl">
            <p className="text-slate-700 leading-relaxed">{branch.duration}</p>
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
            <p className="text-slate-600 mb-5">
              International applicants may need to prove English competency
              through a recognised test. Minimum scores differ by university,
              and some universities may waive the requirement for students
              educated in English-medium schools.
            </p>
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
          </div>
          <div>
            <SectionHeading
              eyebrow="Standardised tests"
              title="GRE & Other Admission Tests"
            />
            <p className="text-slate-600 leading-relaxed">
              {branch.testsNote}
            </p>
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
          <p className="text-slate-600 mb-6 max-w-3xl">{branch.costsNote}</p>
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
              <ListCard>
                {branch.scholarships.map((s) => (
                  <Li key={s} text={s} />
                ))}
              </ListCard>
            </div>
            <p className="text-slate-600 leading-relaxed">
              International students may qualify for merit-based scholarships,
              university grants and other institutional awards. Availability
              and scope vary across universities and programs — Edu Hawk
              Worldwide helps you map realistic funding options for your
              profile and budget.
            </p>
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
          <p className="text-slate-600 mb-6 max-w-3xl">
            {branch.careerIntro}
          </p>
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
        </div>
      </section>

      {/* ================= 11. VISA PROCESS ================= */}
      <section className="py-14 sm:py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Step by step"
            title="Visa & Application Process for Indian Students"
          />

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

          <p className="mt-7 text-sm text-slate-500 max-w-3xl">
            {branch.visaNote}
          </p>
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

export default PostgraduateChemicalEngineering;
