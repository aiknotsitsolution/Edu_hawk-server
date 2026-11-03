import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/BusinessManagement/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/BusinessManagement/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/BusinessManagement/University of Pennsylvania.webp";
import u1Img from "../../../../Images/Abroad/USA/BusinessManagement/Massachusetts Institute of Technology.webp";
import u2Img from "../../../../Images/Abroad/USA/BusinessManagement/Stanford University.webp";
import u3Img from "../../../../Images/Abroad/USA/BusinessManagement/Harvard University.webp";

const page = {
  "name": "Business Management",
  "slug": "business-management",
  "title": "Business Management in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Business Management in the USA for Indian students — undergraduate, postgraduate and doctoral programs. Courses, duration, eligibility, English and entrance requirements, tuition fees, scholarships, top universities, careers and F-1 visa process.",
  "keywords": "Study Business Management in USA for Indian Students, Best Universities for Business Management in USA, Bachelor's in Business Management in USA, MBA in USA for Indian Students, Business Management Courses in USA for International Students, Business Management Admission Requirements in USA, Business Management Tuition Fees in USA for Indian Students, Business Management Scholarships for Indian Students in USA, Top Business Schools in America",
  "introTitle": "Business Management in the USA",
  "heroParas": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "overview": [],
  "level": "UG, PG & Doctoral",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why Study Business Management in the USA?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The United States represents a highly sought-after destination for Business Management education, providing internationally acclaimed credentials, experiential learning methodologies, and comprehensive exposure to global business operations. Participants acquire competencies across leadership development, strategic analysis, financial management, marketing strategy, venture creation, and organizational administration.",
            "Primary Advantages"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Internationally accredited qualifications",
            "Experiential initiatives and analytical case-based instruction",
            "Engagement with multinational business contexts",
            "Capabilities to concentrate in specialized management disciplines",
            "Access to professional networks and professional placement opportunities, contingent upon program structure"
          ]
        },
        {
          "t": "p",
          "items": [
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Business Management Courses in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Undergraduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor of Business Administration",
            "Bachelor of Science in Business Management",
            "Bachelor of Science in International Business",
            "Bachelor of Science in Entrepreneurship",
            "Bachelor of Science in Human Resource Management",
            "Bachelor of Science in Marketing"
          ]
        },
        {
          "t": "p",
          "items": [
            "Postgraduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master of Business Administration",
            "Master of Science in Management",
            "Master of Science in International Business",
            "Master of Science in Project Management",
            "Master of Science in Business Analytics",
            "Master of Science in Entrepreneurship"
          ]
        },
        {
          "t": "p",
          "items": [
            "Doctoral Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Doctor of Philosophy in Management",
            "Doctor of Business Administration, where available"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Top Universities for Business Management in the USA",
      "groups": [],
      "lead": [],
      "note": [
        "These institutions provide business-oriented curricula; however, program nomenclature, enrollment prerequisites, and degree structures vary considerably. Prospective students should consult each institution's official website to confirm program-specific details."
      ],
      "unis": [
        {
          "name": "University of Pennsylvania",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Massachusetts Institute of Technology",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "Stanford University",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "Harvard University",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Course Duration",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Bachelor's Degree: Customarily 4 years",
            "Master's Degree: Ordinarily 1–2 years",
            "MBA: Typically 1–2 years",
            "Doctoral Programs: Approximately 3–6 years or extended duration"
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
          "t": "p",
          "items": [
            "Undergraduate: Successful completion of Class 12 or comparable qualification, academic performance documentation, and demonstrated English-language competency where applicable.",
            "Postgraduate: An accredited undergraduate degree, academic performance records, English-language proficiency, and requisite application materials. Certain MBA programs necessitate or strongly encourage pertinent professional experience.",
            "Doctoral: A pertinent undergraduate or postgraduate degree, exceptional academic achievement, demonstrated scholarly interests, and supplementary documentation as mandated."
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
            "Institutions may acknowledge:",
            "IELTS Academic",
            "TOEFL iBT",
            "PTE Academic",
            "Duolingo English Test, where recognized",
            "The USA is a popular destination for Business Management studies, offering globally recognized qualifications, practical learning, and exposure to international business practices. Students develop skills in leadership, strategic planning, finance, marketing, entrepreneurship, and organizational management."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance Exams and Admission Requirements",
      "groups": [
        {
          "t": "ul",
          "items": [
            "SAT/ACT: May be required for undergraduate admission.",
            "GMAT/GRE: May be required, optional, or not accepted for postgraduate programs.",
            "Statement of Purpose or Essays: Commonly requested.",
            "Letters of Recommendation: Required by some universities.",
            "Resume/CV: Often required for postgraduate applications."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Tuition Fees and Living Expenses",
      "groups": [
        {
          "t": "p",
          "items": [
            "Projected Annual Tuition Expenditures:",
            "Undergraduate Programs: USD 20,000–50,000",
            "Postgraduate Programs: USD 20,000–60,000",
            "Master of Business Administration: USD 30,000–90,000 or higher",
            "Projected Annual Cost of Living: USD 14,000–35,000.",
            "These figures represent approximate ranges. Actual expenditures vary based on institutional selection, geographic location, residential arrangements, and personal consumption patterns."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Scholarships and Financial Aid",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students may consider the following funding mechanisms:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic merit-based scholarships",
            "Institution-specific financial awards",
            "Discipline-focused scholarship programs",
            "Graduate research and teaching assistantships, where applicable",
            "Non-institutional funding sources and grants"
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities After Business Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "Program graduates may pursue professional roles including:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Analyst",
            "Management Consultant",
            "Marketing Manager",
            "Human Resources Specialist",
            "Operations Manager",
            "Project Coordinator",
            "Business Development Executive",
            "Financial Analyst",
            "Entrepreneur",
            "Strategy Analyst"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career trajectories are contingent upon educational credentials, area of specialization, professional experience, and organizational hiring standards."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa and Application Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students frequently pursue F-1 student visas to enroll in qualifying academic programs.",
            "Application Procedures"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Identify an academic discipline and compile a list of prospective institutions.",
            "Verify admission prerequisites and application submission deadlines.",
            "Assemble academic records, standardized examination results, personal statements, and letters of recommendation.",
            "Transmit completed applications via designated university platforms.",
            "Obtain and evaluate an acceptance letter from the institution.",
            "Secure Form I-20 documentation from the university upon fulfilling all prerequisites.",
            "Finalize requisite SEVIS registration and visa procedures.",
            "Arrange housing accommodations and organize travel logistics.",
            "Visa authorization remains contingent upon compliance with prevailing United States immigration statutes."
          ]
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions (FAQs)",
  "faqs": [
    {
      "q": "Are Indian students eligible to pursue Business Management studies in the United States following secondary education completion?",
      "a": "Yes, . Applicants may submit applications for accredited undergraduate business administration programs subsequent to completing secondary education or an equivalent credential."
    },
    {
      "q": "What is the typical duration of a Business Management degree program?",
      "a": "Baccalaureate degrees ordinarily require four years of study, whereas graduate-level degrees typically necessitate one to two years of academic engagement."
    },
    {
      "q": "Is prior professional experience a prerequisite for MBA enrollment?",
      "a": "Certain MBA curricula mandate or strongly encourage professional background, whereas alternative programs accommodate applicants possessing minimal or negligible full-time employment history."
    },
    {
      "q": "Is the GMAT examination mandatory for Business Management programs?",
      "a": "No Specific examination requirements are contingent upon institutional policies and individual program specifications."
    },
    {
      "q": "What constitutes the financial investment for Business Management education in the United States?",
      "a": "Tuition fees and subsistence expenditures demonstrate substantial variation across institutions. Prospective students should consult each university's published financial documentation for precise cost projections."
    },
    {
      "q": "How can Edu Hawk worldwide Consultancy help me study abroad?",
      "a": "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities."
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

const BusinessManagementAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/courses/business-management"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/courses/business-management"} />
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

export default BusinessManagementAbroad;
