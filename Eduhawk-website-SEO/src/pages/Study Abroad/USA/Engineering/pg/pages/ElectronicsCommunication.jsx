import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../../Images/Abroad/USA/Engineering_PG/electronics-communication.jpg";
import ucbImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ElectronicsCommunicationPG/Berkeley University of California.webp";
import stanfordImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ElectronicsCommunicationPG/Stanford University.webp";
import mitImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ElectronicsCommunicationPG/The Massachusetts Institute of Technology.webp";
import cmuImg from "../../../../../../Images/Abroad/USA/Engineering_PG/ElectronicsCommunicationPG/University of Carnegie Mellon.webp";

const branch = {
  name: "Electronics & Communication Engineering",
  slug: "electronics-communication",
  title:
    "MS in Electronics and Communication Engineering in USA for Indian Students | PG 2026 | Edu Hawk",
  description:
    "Study Master's (MS) in Electronics and Communication Engineering (ECE) in the USA after graduation. Eligibility, GRE requirements, tuition fees, top universities, scholarships, careers and visa process for Indian students with Edu Hawk Worldwide.",
  keywords:
    "Study Postgraduate Electronics and Communication Engineering in USA for Indian Students, Best Master's in Electronics and Communication Engineering Universities in USA, Postgraduate Electronics and Communication Engineering Courses in USA, ECE Admission Requirements for Master's in USA, MS in Electronics and Communication Engineering Tuition Fees in USA, ECE Scholarships for Indian Students, Top Graduate Electronics and Communication Engineering Colleges in America, USA Student Visa for Indian Postgraduate Students, VLSI and Semiconductor Engineering Masters in USA, Wireless Communication and IoT Specializations in USA",
  heroIntro:
    "With its cutting-edge research infrastructure, thriving semiconductor industry, advanced communication technologies, and ongoing technological innovation in the electronics field, the United States is a compelling choice for postgraduate study in Electronics and Communication Engineering. Indian students have the chance to develop advanced skills in fields such as embedded systems architecture, wireless communication systems, microelectronics manufacturing, signal processing techniques, and modern networking paradigms.",
  heroSub:
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey.",

  whyLead: ["Among the main advantages are:"],
  whyPoints: [
    "access to state-of-the-art labs devoted to communication and electronics research.",
    "chances to work on integrated circuit technology development and semiconductor design.",
    "specialized focuses in embedded systems engineering, signal processing, and wireless communication technologies.",
    "exposure to Internet of Things (IoT) infrastructure, connected device ecosystems, fifth-generation (5G) networks, and developing sixth-generation (6G) technology research.",
    "Research activities include the development of intelligent electronic devices, robotics applications, and satellite communication systems.",
    "career paths in consumer electronics manufacturing, aerospace engineering, telecommunications, semiconductor design, and technology-driven businesses.",
  ],
  whyNote: [
    "Edu Hawk Worldwide Consultancy helps students prepare for their foreign education adventure, understand university admission requirements, and investigate international study possibilities.",
  ],

  coursesLead: [
    "Indian students can choose graduate programs that fit their educational background and career goals. These programs are usually run by Electrical Engineering, Electrical and Computer Engineering, or similar academic departments in US universities.",
    "Common choices for degrees include:",
  ],
  courses: [
    "Electrical and computer engineering master's degree",
    "Electrical Engineering Master of Science",
    "Electrical and computer engineering master's degree",
    "Master of Science in Telecommunications Engineering, subject to availability at the institution",
    "Master of Science in Wireless Communications, subject to availability at the institution",
    "A Master of Science in Microelectronics or Semiconductor Engineering Master of Science in Embedded Systems Engineering, subject to institutional availability",
    "Electronics, both digital and analog",
    "Systems for Wireless and Mobile Communication",
    "Techniques for Signal and Image Processing",
    "Design of Very Large Scale Integration (VLSI) and Microelectronics",
    "Integrated circuit technologies and semiconductor devices",
    "Internet of Things and Embedded Systems",
    "Telecommunications and Computer Networks",
    "Optical and satellite communication, microwave engineering, and antenna design",
    "Intelligent Electronic Systems and Robotics",
  ],
  coursesNote: ["Typical specializations consist of:"],

  duration: [
    "In the US, postgraduate degrees in Electronics and Communication Engineering normally take one to two years to complete. The exact timeline is influenced by a number of factors, including specialization, credit hour requirements, institutional restrictions, and the student's choice of thesis-oriented, research-oriented, or course-based modalities. Digital communication systems, advanced electronics, semiconductor physics, VLSI design, wireless networks, digital signal processing, embedded systems, antenna engineering, and communication system design are all possible topics for coursework.",
  ],

  eligibilityLead: [
    "In general, Indian candidates must meet the following requirements for admission:",
  ],
  eligibility: [
    "a bachelor's degree in electrical engineering, electrical and electronics engineering, electronics and communication engineering, or a related technological field.",
    "official degree certificates and transcripts.",
    "The institution's minimum requirements for academic success.",
    "competence in English when required.",
    "scores from the Graduate Record Examination (GRE), if required by the program.",
    "A purpose statement.",
    "letters of recommendation.",
    "Curriculum vitae or resume.",
    "documentation of pertinent professional experience, research initiatives, internships, and academic work, as appropriate.",
  ],

  englishLead: [
    "It can be necessary for foreign applicants to pass an approved standardized test to prove their English language competency.",
    "Assessments that are widely accepted include:",
  ],
  englishTests: [
    "Academic TOEFL iBT IELTS",
    "Academic PTE",
    "The Duolingo English Test was accepted by the organization.",
  ],
  englishNote: [
    "Universities have different minimum score requirements and exemption standards. Before submitting an application, prospective students should verify the current language requirements for the program they want to attend.",
  ],

  testsNote: [
    "Requirements for the Graduate Record Examination (GRE) exhibit significant institutional diversity among postgraduate programs and universities. While some universities require GRE scores in order to admit students, others consider the test optional or do not include it in their evaluation standards.",
  ],

  costsLead: [
    "The total cost of completing postgraduate courses in Electronics and Communication Engineering in the United States varies significantly depending on program length, geographic location, institutional choice, and available financing sources.",
    "Principal costs consist of: Individual costs, fees for processing visas, the cost of traveling abroad, and the initial costs of moving.",
    "Before choosing an institution, prospective students are advised to review official tuition schedules and detailed living cost projections. Creating a comprehensive financial forecast for the life of the program allows Indian students to create practical financial planning strategies and allows for meaningful institutional comparison.",
  ],
  costs: [],
  costsNote: [],

  scholarshipsLead: [
    "International students that meet the requirements might look into a variety of funding options.",
    "Alternatives for postgraduate academic PG financing include:",
  ],
  scholarships: [
    "scholarship awards based on merit.",
    "scholarships awarded by departments.",
    "vacancies for graduate research assistants.",
    "jobs for graduate teaching assistantships.",
    "Benefits for tuition reimbursement are dependent on qualified assistantship positions.",
    "Opportunities for external scholarships are managed by qualified funding agencies.",
  ],
  scholarshipsNote: [],

  universitiesLead: [
    "For postgraduate studies in Electrical Engineering, Electrical and Computer Engineering, and related subjects, the following universities are worth investigating:",
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
      name: "Carnegie Mellon University",
      location: "Pittsburgh, Pennsylvania",
      img: cmuImg,
    },
  ],
  universitiesNote: [],

  careerIntro:
    "Graduates with a postgraduate degree can develop advanced technical skills relevant to career paths in semiconductors, networking, electronics, communication systems, and research.",
  careerLead: ["Possible occupations include:"],
  careers: [
    "Engineer for Electronics Design",
    "Engineer for Communication Systems, VLSI, and Semiconductor Design",
    "Engineers in the fields of embedded systems, wireless networks, and radio frequency (RF)",
    "Engineers in the fields of digital signal processing, telecommunications, IoT systems, hardware design, research, and development",
  ],
  careerNote: [],

  visaLead: [
    "Indian students who are admitted to US universities usually have to go through the necessary steps to obtain a student visa.",
    "Typical application procedures consist of:",
  ],
  visaSteps: [
    "Examine educational establishments and determine suitable curricula that emphasize electronics and communication.",
    "Check the criteria for foundational coursework and academic prerequisites.",
    "Examine your English language skills and the requirements for the GRE.",
    "Put together professional paperwork, academic references, official transcripts, and a Statement of Purpose.",
    "Complete applications and submit them by the deadlines set by the university.",
    "Assess financial responsibilities, financial assistance opportunities, and admission decisions.",
    "Obtain the necessary student records from the relevant organization.",
    "Complete the visa application process and pay the required SEVIS cost.",
    "If necessary, take part in the visa interview process and make travel arrangements after authorization.",
  ],
  visaNote: [],

  faqs: [
    {
      q: "Can Indian students study postgraduate Electronics and Communication Engineering in the US?",
      a: "Yes, Indian students may apply to eligible postgraduate programs if they have the necessary academic qualifications and a relevant bachelor's degree.",
    },
    {
      q: "How long does it take to earn a master's degree in Electronics and Communication Engineering in the US?",
      a: "Most similar programs require one to two years of study, depending on degree structure, specialization, and institutional policies.",
    },
    {
      q: "Does admission to the program require taking the GRE?",
      a: "Yes, different programs and institutions have different requirements for the GRE. Some colleges require it, while others classify it as optional or do not take it into account.",
    },
    {
      q: "In this field, what specializations are available?",
      a: "VLSI design, semiconductor engineering, wireless communication, signal processing, embedded systems, the Internet of Things, and telecommunications are popular choices.",
    },
    {
      q: "Do Indian students have access to scholarships?",
      a: "Yes merit scholarships, research assistantships, teaching assistantships, and other financing options are available to qualified students.",
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

const PostgraduateElectronicsCommunication = () => {
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

export default PostgraduateElectronicsCommunication;
