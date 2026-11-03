import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../../Images/Abroad/USA/Engineering_UG/chemical-engineering.jpg";
import gatechImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ChemicalEngineeringUG/Georgia Institute of Technology.webp";
import mitImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ChemicalEngineeringUG/Massachusetts Institute of Technology.webp";
import stanfordImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ChemicalEngineeringUG/Stanford University.webp";
import ucbImg from "../../../../../../Images/Abroad/USA/Engineering_UG/ChemicalEngineeringUG/University of California, Berkeley.webp";

const branch = {
  name: "Chemical Engineering",
  slug: "chemical-engineering",
  title: "Chemical Engineering in USA for Indian Students | UG 2026 | Edu Hawk",
  description:
    "Study Bachelor's in Chemical Engineering in the USA after Class 12. Eligibility, tuition fees, top universities, scholarships, careers and visa process for Indian students with Edu Hawk Worldwide.",
  keywords:
    "Study Chemical Engineering in USA for Indian Students, Best Chemical Engineering Universities in USA, Bachelor's in Chemical Engineering in USA, Study Chemical Engineering in USA After 12th, Chemical Engineering Courses in USA, Chemical Engineering Admission Requirements in USA, Chemical Engineering Tuition Fees in USA, Chemical Engineering Scholarships for Indian Students, Top Chemical Engineering Colleges in America, Chemical Engineering Eligibility for Indian Students, SAT Requirements for Chemical Engineering in USA, English Language Tests for US Universities, Career Opportunities After Chemical Engineering, Pharmaceutical and Process Engineering in USA, USA Student Visa for Indian Engineering Students",
  heroIntro:
    "Study Undergraduate Chemical Engineering programs in the USA integrate chemistry, physics, mathematics, and engineering principles in order to develop processes for the production of chemicals, fuels, medicines, food, and advanced materials, and the universities give students the chance to carry out practical laboratory work, take part in research, engage in process design, and work on projects that are focused on industry.",
  heroSub:
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey.",

  whyLead: ["Key benefits include:"],
  whyPoints: [
    "Opportunity to use modern chemical engineering laboratories and research facilities.",
    "Learning that is practical in the areas of chemical processes, materials, and industrial production.",
    "There are opportunities for exploring the pharmaceutical, energy, and petrochemical industries.",
    "Being exposed to sustainable manufacturing and environmental technologies.",
    "There are learning opportunities in the fields of biotechnology, nanotechnology, and advanced materials.",
    "The career paths available in the fields of process engineering, manufacturing, research, and quality management.",
  ],
  whyNote: [
    "Edu Hawk worldwide assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey..",
  ],

  coursesLead: [
    "Indian students have the opportunity to study undergraduate programmes that focus on chemical processes, industrial production, and applied chemistry.",
    "Popular degree options include:",
  ],
  courses: [
    "Bachelor of Science in Chemical Engineering",
    "Bachelor of Engineering in Chemical Engineering",
    "Bachelor of Science in Chemical and Biomolecular Engineering",
    "Bachelor of Science in Chemical and Biological Engineering",
    "Bachelor of Science in Biochemical Engineering, where available",
  ],
  coursesNote: [
    "Through Edu Hawk worldwide study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing chemical engineering overseas.",
  ],

  duration: [
    "In the United States an undergraduate degree in Chemical Engineering usually takes four years to finish.",
    "The course usually covers mathematics, chemistry, physics, thermodynamics, fluid mechanics, heat and mass transfer, chemical reaction engineering, process control, and process design.",
    "Students have the opportunity as well to carry out laboratory experiments, carry out design projects, take part in research activities, do internships, or undertake cooperative education placements.",
  ],

  eligibilityLead: [
    "Indian students generally need to meet the following requirements:",
  ],
  eligibility: [
    "Finishing the Class 12 course with a recognised educational board.",
    "The subjects needed by the university include mathematics and chemistry, as well as physics and any other subjects required.",
    "Marks that meet the requirements for admission by the institution.",
    "English-language proficiency where required.",
    "The SAT or ACT scores, if the university requires them.",
    "The academic transcripts and other documents required for the application.",
  ],

  englishLead: [
    "International students might be required to show that they have the necessary level of English by taking a test which is accepted.",
    "Commonly accepted tests include:",
  ],
  englishTests: [
    "IELTS Academic",
    "TOEFL iBT",
    "PTE Academic",
    "Duolingo English Test, where accepted",
  ],
  englishNote: [],

  testsNote: [
    "The requirement for SAT or ACT scores varies from university to university and according to the admission cycle; some schools do require the scores while others have a test-optional policy.",
    "No single entrance examination is required by all US universities for admission to an undergraduate Chemical Engineering programme. It is advisable for students to look into the current testing policies, the application deadlines, and the requirements specific to the programme.",
  ],

  costsLead: [
    "The total cost of undertaking an undergraduate course in Chemical Engineering in the United States varies according to the university, the location, and the accommodation arrangements.",
    "Main expenses include:",
  ],
  costs: [
    "Tuition and academic fees.",
    "Accommodation and meals.",
    "Health insurance.",
    "Books, lab supplies, and school equipment.",
    "Transportation and personal expenses.",
    "Visa, travel, and first settlement costs.",
  ],
  costsNote: [
    "Instead, students should look at the total annual cost of attendance rather than just the tuition fee and make sure that the current costs are checked on the official university websites.",
  ],

  scholarshipsLead: [
    "A number of universities in the United States give scholarships and financial aid to international undergraduate students who are eligible.",
    "Possible funding options include:",
  ],
  scholarships: [
    "Merit-based academic scholarships.",
    "International student scholarships.",
    "University-specific tuition reductions.",
    "Financial aid on a need basis is available to international students.",
    "Scholarships provided externally by organisations that are eligible.",
  ],
  scholarshipsNote: [
    "Students must check the eligibility criteria, the deadlines, the amounts offered, and the conditions for renewal. Scholarships are competitive and not guaranteed.",
  ],

  universitiesLead: [
    "The following universities are worth researching for undergraduate Chemical Engineering or closely related programs:",
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
    {
      name: "Georgia Institute of Technology",
      location: "Atlanta, Georgia",
      img: gatechImg,
    },
  ],
  universitiesNote: [
    "Students must check on each university's official website to find out the precise undergraduate degree offered, the admission requirements, the tuition fees, and whether the programme is accredited.",
  ],

  careerIntro:
    "Graduates have the opportunity to take up starting careers in the fields of chemical processing, manufacturing, energy, pharmaceuticals, materials, and environmental technology.",
  careerLead: ["Potential career roles include:"],
  careers: [
    "Junior Chemical Engineer",
    "Process Engineer",
    "Production Engineer",
    "Quality Control Engineer",
    "Pharmaceutical Process Associate",
    "Environmental Engineering Associate",
    "Materials Engineering Associate",
    "Process Safety Associate",
    "Research and Development Assistant",
    "Manufacturing Engineer",
  ],
  careerNote: [
    "The variety of careers available will depend on one's technical skills, practical experience, the requirements of the employer, and the appropriate work authorisation. In some cases, extra qualifications or professional licensing will be needed.",
  ],

  visaLead: [
    "Indian students who have been accepted by a suitable US institution usually have to go through the relevant student visa procedure.",
    "Typical steps include:",
  ],
  visaSteps: [
    "Examine the colleges that grant degrees in chemical engineering.",
    "Check that you are academically eligible and see what Class 12 subjects are required.",
    "Look at the requirements for English-language and standardised testing.",
    "Get your school transcripts and other needed documents ready.",
    "Make sure that your applications are submitted by the relevant deadlines.",
    "Look over admission offers and money requirements.",
    "Get the student documents that are required from the university.",
    "You must pay the relevant SEVIS fee and fill out the visa application.",
    "If a visa interview is required, attend it and then prepare for travel after your visa has been approved.",
  ],
  visaNote: [],

  faqs: [
    {
      q: "Is it possible for Indian students to study for their undergraduate degree in Chemical Engineering in the United States after completing Class 12?",
      a: "Yes, Indian students may apply after they have completed Class 12 provided that they fulfill the university's academic, subject, and English-language requirements.",
    },
    {
      q: "What is the duration of an undergraduate degree in Chemical Engineering in the United States?",
      a: "It usually takes about four years to finish most undergraduate programmes in Chemical Engineering.",
    },
    {
      q: "What subjects are important in the field of Chemical Engineering?",
      a: "Mathematics, chemistry, and physics form important foundations and students should look at the subjects required for Class 12 at each university.",
    },
    {
      q: "Is the SAT required for admission?",
      a: "The SAT requirements differ from university to university and from admission cycle to admission cycle, and some universities provide test-optional admission.",
    },
    {
      q: "How can Edu Hawk worldwide help me study  abroad?",
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

const ChemicalEngineeringUG = () => {
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

export default ChemicalEngineeringUG;
