import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/Architecture/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/Architecture/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/Architecture/Massachusetts Institute of Technology M.I.T..webp";
import u1Img from "../../../../Images/Abroad/USA/Architecture/Cornell University.webp";
import u2Img from "../../../../Images/Abroad/USA/Architecture/Rice University.webp";
import u3Img from "../../../../Images/Abroad/USA/Architecture/University of California-Berkeley.webp";

const page = {
  "name": "Architecture",
  "slug": "architecture",
  "title": "Architecture in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Architecture in the USA. Programs, eligibility, English requirements, entrance exams, portfolio, tuition fees, scholarships, top universities, licensing, careers and visa process for Indian students.",
  "keywords": "Study Architecture in USA for Indian Students, Best Universities for Architecture in USA, Architecture Courses in USA for International Students, Architecture Admission Requirements in USA, Architecture Fees in USA for Indian Students, Architecture Scholarships in USA for International Students, Bachelor of Architecture in USA After 12th, Master of Architecture in USA for Indian Students, Architecture Course Duration in USA, Architecture Specializations in USA, Architecture Portfolio Requirements for USA Universities, Architecture Entrance Exams for International Students, Architecture Career Opportunities in USA, Architect Licensing Process in USA, USA Student Visa for Indian Architecture Students",
  "introTitle": "Architecture in the US",
  "heroParas": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "overview": [],
  "level": "UG & PG",
  "crumb": "Courses",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Study Architecture in the United States",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the USA, students can study Architecture and explore innovative design, sustainable construction, urban planning, digital modeling, and modern architectural technologies. U.S. colleges blend creative thinking and technical knowledge with hands-on projects, research and interdisciplinary learning.",
            "If you are an Indian student who wants to design buildings, create sustainable spaces or build future cities, then the USA has undergraduate, postgraduate, doctoral and specialist courses in architecture and related fields for you.",
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why to Study Architecture in the USA?",
      "groups": [
        {
          "t": "dl",
          "items": [
            "1. Internationally Recognized Education",
            "In the US, universities offer architecture programs which combine design theory, engineering, environmental studies and practice.",
            "2. Advanced Design Technologies",
            "Students can get experience in digital design tools, computer-aided design, 3D modeling, Building Information Modeling (BIM) and visualization technologies.",
            "3. Learning through doing",
            "Students engage in studio projects, design critiques, research assignments, internships and collaborations with industry to gain hands-on experience.",
            "4. Multiple Specializations",
            "Students may study architectural design, sustainable architecture, landscape architecture, urban design, historic preservation and related fields.",
            "5. Research & Innovation",
            "Colleges and universities can teach classes in climate-sensitive buildings, intelligent cities, energy efficient construction, and innovative construction techniques.",
            "6. Global Exposure",
            "Interacting with students and faculty from different backgrounds can help develop communication, teamwork and cross-cultural design perspectives."
          ],
          "pairs": [
            {
              "t": "Internationally Recognized Education",
              "d": "In the US, universities offer architecture programs which combine design theory, engineering, environmental studies and practice."
            },
            {
              "t": "Advanced Design Technologies",
              "d": "Students can get experience in digital design tools, computer-aided design, 3D modeling, Building Information Modeling (BIM) and visualization technologies."
            },
            {
              "t": "Learning through doing",
              "d": "Students engage in studio projects, design critiques, research assignments, internships and collaborations with industry to gain hands-on experience."
            },
            {
              "t": "Multiple Specializations",
              "d": "Students may study architectural design, sustainable architecture, landscape architecture, urban design, historic preservation and related fields."
            },
            {
              "t": "Research & Innovation",
              "d": "Colleges and universities can teach classes in climate-sensitive buildings, intelligent cities, energy efficient construction, and innovative construction techniques."
            },
            {
              "t": "Global Exposure",
              "d": "Interacting with students and faculty from different backgrounds can help develop communication, teamwork and cross-cultural design perspectives."
            }
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best Universities for Architecture in the USA",
      "groups": [],
      "lead": [
        "The following institutions are known for architecture, built-environment education or related design programs. Before applying, students should compare the exact degree offered, admission criteria, professional accreditation status and costs."
      ],
      "note": [],
      "unis": [
        {
          "name": "Massachusetts Institute of Technology: M.I.T.",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Cornell University",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "Rice University",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "University of California-Berkeley",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Architecture Programs USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "There are a number of academic routes to architecture education in the United States. The right program will depend on the student’s previous education, career goals and interest in professional architectural practice.",
            "Undergraduate Degrees",
            "B.ARCH. (BACHELOR OF ARCHITECTURE)",
            "A professional degree in architecture, normally a 5-year program, which comprises architectural design, building technology, history and theory, and a studio component.",
            "B.S. Architecture.",
            "An undergraduate program that may focus on one or more of the following: architectural design, building systems, technology or fundamentals of architecture. Depending on the university it may be a pre-professional degree instead of a professional qualification.",
            "Bachelor of Arts Architecture",
            "A program that could mix architecture with liberal arts, design theory, history and interdisciplinary studies.",
            "Bachelor of Science in Architectural Studies",
            "This course addresses the concepts and techniques of architecture, building environments, and related technical topics.",
            "Bachelor of Arts in Landscape Architecture",
            "A program of study in outdoor environments, landscape planning, ecological design and public space.",
            "Postgraduate Studies",
            "Master of Architecture (M.Arch)",
            "A professional graduate degree for students who want an architectural education that can support the path to professional licensure. The duration of the program depends on the student’s previous academic background.",
            "M.Sc. in Architecture",
            "A research or specialized degree, including but not limited to specialized design, building technology, environmental performance, computation or architectural research.",
            "MA Architecture",
            "A degree provided by some institutions in the areas of architectural theory, history, design research, etc.",
            "MSc. Sustainable Design",
            "A program of energy efficient buildings, environmental performance, sustainable materials, and climate responsive design.",
            "Master in Urban Design",
            "A specialized program on urban form, public spaces, neighborhood planning and the relationship between buildings and cities.",
            "Master of Landscape Architecture",
            "An advanced program in landscape systems, ecological planning, public environments and sustainable outdoor design.",
            "PhD Programs",
            "Ph.D. in Architecture",
            "A research degree for students who want to follow an academic career, undertake advanced architectural research, teach or work in a specialized research position.",
            "Doctor of Design (D. Des.)",
            "Professional or research doctorate sometimes available at some institutions, often emphasizing design innovation and advanced practice.",
            "Doctor of Architecture (DArch.)",
            "A degree title offered by few institutions. One by one, the structure, professional standing and licensure relevance need to be checked.",
            "Most Popular Specializations of Architecture in the USA",
            "Focuses on the planning and design of buildings, interiors, arrangements of space and functional environments.Architectural Design"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Sustainable Building",
            "City Planning",
            "Landscape Architecture",
            "Interior Architecture",
            "Housing & Community Design",
            "Real Estate Development"
          ]
        },
        {
          "t": "p",
          "items": [
            "Duration of Course",
            "The duration depends on the degree, the university and the previous education of the student.",
            "Bachelor of Architecture",
            "About 5 years",
            "M.Arch.",
            "Background-dependent, approximately 2-3.5 years",
            "Master of Science – Architecture",
            "About 1-2 years",
            "Doctorate in Architecture",
            "Usually 4 to 6 years"
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility Requirements for Indian Students",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Undergraduate Admissions",
            "In general, students need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passed 12th Class from any recognized Board.",
            "Academic achievement to satisfy the entry requirements of a university.",
            "Mathematics or other subjects as required by the program selected.",
            "English language proficiency, where applicable.",
            "A portfolio, examples of creative work or design materials if requested.",
            "SAT or ACT scores are required only where required or deemed by the institution."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Postgraduate Recruitment",
            "In general, students need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized undergraduate degree.",
            "Academic background appropriate to the program selected.",
            "Degree certificates and academic transcripts.",
            "Statement of purpose.",
            "Letters of recommendation, as appropriate.",
            "A portfolio that shows design ability, creative thinking or relevant project work.",
            "English language knowledge",
            "GRE scores only if required by the university/programme."
          ]
        },
        {
          "t": "ul",
          "items": [
            ".PhD Admissions",
            "Usually applicants will need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A relevant masters degree or other qualification acceptable to the university.",
            "Transcripts of academic records",
            "Research proposal or statement of research interests (if applicable).",
            "Letters of recommendation.",
            "A declaration of intent.",
            "Portfolio or writing sample, depending on the research area.",
            "English language skills.",
            "Proof of research experience where applicable."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students may be asked to demonstrate proficiency in English on one of the following examinations:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "IELTS Academic",
            "TOEFL iBT",
            "PTE Academic",
            "Duolingo English Test (where accepted)"
          ]
        },
        {
          "t": "p",
          "items": [
            "Required scores vary by institution, program and intake. Some universities may provide exemptions for eligible applicants."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance Exams for Architecture in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the USA there is no single national entrance exam for all architecture programs.",
            "Depending on the institution and the degree level, applicants may need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Some undergraduate programs require SAT or ACT",
            "IELTS, TOEFL, PTE or other approved English test",
            "GRE for certain graduate programs",
            "Portfolio or design evaluation",
            "An interview or other application materials"
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Cost of Architecture Study in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition fees vary according to university, degree level, residency classification, length of program, and academic year. Architecture students may also have to budget for studio materials, printing, model-making, specialist software and equipment.",
            "Estimated Cost per Annum",
            "Tuition College",
            "USD 20,000-50,000+",
            "Postgraduate tuition fees",
            "USD 25,000–60,000+",
            "Food and accommodation",
            "USD 10,000 - 20,000",
            "Building Materials and Supplies",
            "$1,000–3,000+",
            "Personal and local transportation costs",
            "USD 2,000–5,000",
            "These are indicative planning figures and are not official quotes of University fees. Actual costs may be much higher or lower. They exclude some possible costs such as flights, visa costs, deposits, and large one-off purchases."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Scholarships for Architecture Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "Based on your academic record, financial situation, degree level and university policy, you may be eligible for university funding or external scholarships as an Indian student.",
            "Possible sources of funding include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships",
            "Financial Aid Based on Need",
            "Graduate Assistantship",
            "Awards for Departments",
            "Outside Scholarships"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should be aware of genuine external funding opportunities that promote study abroad. Uses and eligibility vary."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Architecture Careers Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on their qualifications and experience, graduates can work in architecture, design, construction, research, planning or related fields.",
            "Some possible career paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Architect Design",
            "Architecture Intern",
            "Researcher, Design",
            "BIM (Building Information Modeling) Specialist",
            "Sustainable Design Consultant",
            "Assistant Urban Designer",
            "Landscape Design Pro",
            "Professional Interior Architecture",
            "Architectural Visualization Expert",
            "Project Coordinator, Construction",
            "Specialist in Historic Preservation",
            "Real Estate Development Analyst (Real Estate Development Analyst)",
            "Academic Researcher or Lecturer depending on further qualifications"
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing",
      "title": "Architect Licensing Process in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Having a degree in architecture does not automatically entitle you to practice as a licensed architect in the United States.",
            "Licensure requirements are determined by the applicable state or jurisdiction and typically include:",
            "Following an approved educational track."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Meeting the experience requirements for the jurisdiction, usually through the Architectural Experience Program (AXP).",
            "Completing the Architect Registration Examination (ARE).",
            "Any additional jurisdiction-specific requirements.",
            "Getting a professional architecture degree accredited by the National Architectural Accrediting Board (NAAB) can be an important step on that path. But the requirements differ, and in some jurisdictions there may be alternative routes."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step by step",
      "title": "Admission Procedure for Architecture in USA",
      "groups": [],
      "lead": [],
      "steps": [
        {
          "title": "Set Your Academic Goal",
          "text": "Choose between a Bachelor’s degree, Professional Master of Architecture, Specialized Master, Doctoral program or Certificate."
        },
        {
          "title": "Shortlisting Universities",
          "text": "Compare course structure, program duration, tuition fees, scholarships, studio facilities, location and career goals."
        },
        {
          "title": "Verify Eligibility",
          "text": "Check academic requirements, English language requirements, portfolio rules, entrance exams, application deadlines."
        },
        {
          "title": "Assemble Your Portfolio",
          "text": "Organize design projects, sketches, models and creative work according to each university’s specifications."
        },
        {
          "title": "Create Application Documents",
          "text": "Typical documents include: academic transcript, degree certificate, passport, statement of purpose, recommendation letters, test scores if necessary and portfolio materials."
        },
        {
          "title": "Apply",
          "text": "Complete the official university application process and pay any fees that are required."
        },
        {
          "title": "Review of admission and funding",
          "text": "Compare admission offers, total program costs, scholarship conditions, deposits and enrollment deadlines."
        },
        {
          "title": "Apply for Student Visa",
          "text": "Obtain the necessary documentation from an eligible institution and follow the US student visa process and supporting documentation requirements."
        },
        {
          "title": "Get Ready to Leave",
          "text": "Book accommodation, travel, insurance, registration at the university and other pre-arrival steps."
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "USA Architecture Student Visa",
      "groups": [
        {
          "t": "p",
          "items": [
            "Typically, an F-1 student visa is applied for by international students enrolled in an eligible academic program.",
            "The process is typically:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Acceptance to a Student and Exchange Visitor Program (SEVP)-approved school.",
            "Obtain the Form I-20 from the school.",
            "Payment of the SEVIS fee (if applicable).",
            "Completing the visa application online.",
            "Payment of the required visa application fee.",
            "Scheduling and attending a visa interview, if needed.",
            "Providing academic, financial, identity and other supporting documents as needed.",
            "The issuing of visas is decided by the relevant US authorities. Admission to a university does not guaranty that you will be issued a visa."
          ]
        },
        {
          "t": "p",
          "items": [
            "Why Edu Hawk?",
            "If you are thinking about studying Architecture in the USA, you’ll need to think in detail about your academic eligibility, how to prepare your portfolio, program accreditation, tuition fees and scholarships, and your future career goals.",
            "Edu Hawk guides students to better understand their options and to plan the application process more clearly."
          ]
        }
      ]
    }
  ],
  "faqTitle": "FAQ (Frequently Asked Questions)",
  "faqs": [
    {
      "q": "Can Indian Students Study Architecture in USA?",
      "a": "Yes. Eligible Indian students can apply for undergraduate, postgraduate, doctoral and specialized architecture programs subject to the admission requirements of the institution."
    },
    {
      "q": "How many years is the study of Architecture in the USA?",
      "a": "The typical duration of the Bachelor of Architecture is five years. Other undergraduate degrees in architecture usually take four years, and master’s programs typically take two to three and a half years, depending on the background of the student and the program."
    },
    {
      "q": "Is Math a Must for Architecture in the USA?",
      "a": "Requirements vary. Some programs require maths or specific school subjects, while others use broader academic criteria to assess applicants. Check the requirements of the selected university."
    },
    {
      "q": "Do you need a portfolio to get into architecture?",
      "a": "Most architecture schools ask for a portfolio, particularly if the program is design-oriented. However, requirements differ according to university and level of degree and some programs don’t require one."
    },
    {
      "q": "Is IELTS necessary for studying Architecture in the USA?",
      "a": "International applicants may be required to provide proof of English language proficiency by taking the IELTS, TOEFL, PTE or other accepted English language proficiency test. Some schools have waivers for qualifying students."
    }
  ]
};

const SectionHeading = ({ eyebrow, title }) => (
  <div className="mb-8">
    <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
      {eyebrow}
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
  </div>
);

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

const Groups = ({ groups }) => (
  <>
    {groups.map((g, i) => {
      if (g.t === "ul")
        return (
          <div key={i} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            {g.items.map((it, j) => (
              <Li key={j} text={it} />
            ))}
          </div>
        );
      if (g.t === "dl")
        return (
          <div key={i} className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {g.pairs.map((p, j) =>
              p.t ? (
                <div
                  key={j}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
                >
                  <h4 className="font-semibold text-slate-800 leading-snug mb-1.5">{p.t}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.d}</p>
                </div>
              ) : (
                <p key={j} className="sm:col-span-2 text-slate-600 leading-relaxed">
                  {p.d}
                </p>
              )
            )}
          </div>
        );
      return <DocParas key={i} items={g.items} />;
    })}
  </>
);

const ArchitectureAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={page.introTitle} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={"https://www.eduhawk.in/courses/architecture"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/courses/architecture"} />
        {page.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: page.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            })}
          </script>
        )}
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
      
        .overview-zoom-img {
          animation: kbZoom 14s ease-in-out infinite alternate;
        }
        @keyframes kbZoom {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
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
                <span className="mx-1.5">›</span> {page.crumb}{" "}
                <span className="mx-1.5">›</span> {page.name}
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study {page.name} · USA · {page.level}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                {page.name} in the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  USA
                </span>{" "}
                for Indian Students
              </h1>
              {page.heroParas.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mt-3">
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
                alt={`${page.name} in the USA`}
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

      {/* ================= OVERVIEW ================= */}
      {page.overview.length > 0 && (
        <section className="py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading eyebrow="Overview" title={page.introTitle} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <DocParas
                items={page.overview}
                className="max-w-none text-slate-600 leading-relaxed space-y-4"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/2]">
                <img
                  src={sideImg}
                  alt={`${page.name} at a university in the USA`}
                  className="w-full h-full object-cover overview-zoom-img"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= CONTENT SECTIONS ================= */}
      {page.sections.map((s, idx) => {
        const shade = idx % 2 === 1 ? "bg-slate-50" : "";
        if (s.unis)
          return (
            <section key={idx} className="py-14 sm:py-16 bg-slate-50">
              <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                  <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
                    {s.eyebrow}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    {s.title}
                  </h2>
                  <DocParas
                    items={s.lead}
                    className="text-slate-500 text-[15px] leading-relaxed max-w-2xl space-y-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {s.unis.map((u) => (
                    <div
                      key={u.name}
                      className="relative rounded-2xl overflow-hidden h-60 group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                    >
                      {u.img ? (
                        <img
                          src={u.img}
                          alt={u.name + " campus"}
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
                          {u.desc && (
                            <p className="text-white/80 text-sm line-clamp-3">{u.desc}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <DocParas
                  items={s.note}
                  className="mt-8 max-w-3xl text-slate-500 text-[15px] leading-relaxed space-y-3"
                />
              </div>
            </section>
          );
        if (s.steps)
          return (
            <section
              key={idx}
              className={"py-14 sm:py-16 " + (shade || "bg-slate-50") + " overflow-hidden"}
            >
              <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow={s.eyebrow} title={s.title} />
                <DocParas items={s.lead} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {s.steps.map((st, i) => (
                    <div
                      key={i}
                      className="visa-step-card group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-200"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="mb-5 relative w-fit">
                        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-orange-500 bg-orange-50 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-orange-200">
                          <span className="text-xl font-bold text-orange-500 transition-colors duration-500 group-hover:text-white">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="absolute inset-[-6px] rounded-full border border-orange-200 opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-1.5 leading-snug">
                        {st.title}
                      </h4>
                      {st.text && (
                        <p className="text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-800">
                          {st.text}
                        </p>
                      )}
                      <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-orange-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        const boxed = s.slot === "duration" || s.slot === "tuition";
        return (
          <section key={idx} className={"py-14 sm:py-16 " + shade}>
            <div className="max-w-6xl mx-auto px-6">
              <SectionHeading eyebrow={s.eyebrow} title={s.title} />
              {boxed ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl shadow-sm">
                  <Groups groups={s.groups} />
                </div>
              ) : (
                <Groups groups={s.groups} />
              )}
            </div>
          </section>
        );
      })}

      {/* ================= FAQ ================= */}
      {page.faqs.length > 0 && (
        <section id="faq" className="py-14 sm:py-16">
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeading eyebrow="FAQs" title={page.faqTitle} />
            <div className="space-y-3">
              {page.faqs.map((f, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span>{f.q}</span>
                    <span
                      className={
                        "text-xl text-orange-500 transition-transform duration-200 " +
                        (openFaq === i ? "rotate-45" : "")
                      }
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-slate-600 leading-relaxed">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-[#0b1533] via-[#101c47] to-[#0b1533] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Plan your {page.name} journey to the USA with Edu Hawk Worldwide
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get expert guidance on university shortlisting, applications, scholarships, visas
            and pre-departure preparation — all in one place.
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

export default ArchitectureAbroad;
