import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/BBS/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/BBS/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/BBS/New York University.webp";
import u1Img from "../../../../Images/Abroad/USA/BBS/University of Southern California.webp";
import u2Img from "../../../../Images/Abroad/USA/BBS/University of Illinois at Urbana-Champaign.webp";
import u3Img from "../../../../Images/Abroad/USA/BBS/Arizona State University.webp";

const page = {
  "name": "BBS",
  "slug": "bbs",
  "title": "BBS in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Bachelor of Business Studies (BBS) in the USA after Class 12. Specialisations, duration, eligibility, entrance exams, tuition fees, universities, careers and visa process for Indian students.",
  "keywords": "Study BBS in USA for Indian Students, Bachelor of Business Studies in USA, Best Universities for Business Studies in USA, BBS Admission Requirements in USA for Indian Students, Business Studies Courses in USA After 12th",
  "introTitle": "BBS in the U.S.",
  "heroParas": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "overview": [],
  "level": "Undergraduate",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Introduction BBS in U.S.A.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The Bachelor of Business Studies (BBS) is an undergraduate degree that covers business principles, management, economics, finance, marketing and organizational operations. It enables students to acquire skills in analytical thinking, communication, problem solving and decision making for the modern business environment.",
            "The particular degree Bachelor of Business Studies (BBS) is less common in the US. Students interested in a similar qualification could look at undergraduate degrees in Business Administration, Business Management, Business or International Business.",
            "These programs offer a solid grounding in business operations and enable students to acquire specialized knowledge in areas that are consistent with their academic interests and career goals.",
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why Study Business Studies in USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Globally Recognized Learning Explore business programs at universities with strong academic and industry ties.",
            "Broad Business Knowledge Study management, finance, accounting, economics and marketing |",
            "Hands-on Experience: Gain practical abilities through case studies, group projects, presentations and business simulations.",
            "Specialization Options: Select from areas like entrepreneurship, international business, finance or marketing.",
            "Industry Exposure: Some universities provide internship opportunities and career development resources.",
            "Additional Study Options: Lay a foundation for an MBA or specialized master’s degree."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Top Universities to Consider for Business Studies",
      "groups": [],
      "lead": [
        "Below are US institutions offering undergraduate business or related programs:"
      ],
      "note": [],
      "unis": [
        {
          "name": "New York University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "University of Southern California",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "University of Illinois at Urbana-Champaign",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "Arizona State University",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Course Choices and Specializations",
      "groups": [
        {
          "t": "p",
          "items": [
            "For students who want to study BBS, here are some related undergraduate programs in the USA:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Education",
            "Administration of Business",
            "Business Administration",
            "International Business Finance Marketing",
            "Economics Accounting",
            "Business entrepreneur",
            "Business Analytics Human Resource Management",
            "Supply Chain Management Operations Management Management Information Systems"
          ]
        },
        {
          "t": "p",
          "items": [
            "Depending on the university, these options may be offered as a full degree, major, concentration, or minor."
          ]
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of the course",
      "groups": [
        {
          "t": "p",
          "items": [
            "A full-time undergraduate degree in business in the USA usually takes four years to complete.",
            "NOTE: Actual length may differ based on institution, course structure, transfer credits, academic progress, and internship arrangements."
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility Criteria for Indian Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "The typical requirements for Indian students applying to undergraduate business programs are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th Class passed from a recognized Board of Education.",
            "Grades for university admission criteria.",
            "Class 10 and Class 12 mark sheets or transcripts .",
            "Proof of English language proficiency, if required.",
            "A current passport.",
            "Application form completed.",
            "Personal essays and/or letters of recommendation, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students from Commerce, Science and Humanities background may be eligible for many programs. Subject specific prerequisites such as Mathematics will depend on the degree and university you choose."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "English language proficiency, as determined by the University, may be demonstrated by one of the accepted tests.",
            "Some common choices are:",
            "TOEFL iBT",
            "IELTS Academic",
            "PTE Academic",
            "Duolingo English Test",
            "Accepted by all institutions Minimum scores and exemptions vary by institution Students are required to check the current English-language requirements on the official website of the university of their choice."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance examinations and admission standards",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements vary by institution and program. Universities might look at:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10th and Class 12th Academic Performance.",
            "SAT or ACT scores, if required or submitted.",
            "Results of tests in English language.",
            "Application statements or personal essays.",
            "Recommendation letters.",
            "Extracurricular activities, leadership and achievement."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities have test optional policies while others may require standardized test scores. Applicants are advised to consult the requirements relevant to their chosen intake."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Tuition Fees and Living Costs",
      "groups": [
        {
          "t": "p",
          "items": [
            "Studying business in the USA costs vary depending on university, location, accommodation and lifestyle.",
            "Spending Estimated Yearly Cost"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Tuition cost 15,000-45,000+ USD",
            "Lodging and meals USD 10,000-20,000",
            "Books, supplies and personal expenses USD 1,000-3,000",
            "Other costs and health insurance"
          ]
        },
        {
          "t": "p",
          "items": [
            "These are general planning estimates and not official quotes. Costs may be higher at private institutions and in high-cost cities. Students are encouraged to refer to the university’s official cost-of-attendance information and to estimate expenses for the full degree."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Fees and Financial Support",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the institution and academic performance and scholarship conditions, international students may be eligible for financial assistance.",
            "Possible options include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships for merit.",
            "Academic achievement awards",
            "International student scholarships specific to universities",
            "Financial Aid for International Students at Colleges that Admit International Students.",
            "External scholarships from qualifying organizations.",
            "Scholarships can pay for a portion of tuition, or in a limited number of cases, a larger portion of educational expenses. Availability, eligibility criteria, deadlines and renewal conditions are subject to change."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "An undergraduate degree in business can lead to entry-level jobs in many different industries for graduates.",
            "Career paths you could pursue include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Associate Business Development",
            "Marketing Coordinator.",
            "Sales Executive Human Resources Coordinator Finance Assistant Operations Coordinator Business Analyst Trainee",
            "Customer Relationship Associate Management Trainee",
            "Small Business Owner / Entrepreneur",
            "Career options depend on the graduate’s specialization, practical experience, skills and eligibility to work."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Application Procedure & Student Visa",
      "groups": [],
      "lead": [
        "Generally Indian students planning to study business in USA go through the following steps:"
      ],
      "steps": [
        {
          "title": "Pick a program",
          "text": "Compare business degrees by curriculum, tuition fees, university location and career goals"
        },
        {
          "title": "Know if You are Eligible",
          "text": "Check academic requirements, English language proficiency, entrance tests and application deadlines."
        },
        {
          "title": "Collect Documents",
          "text": "Arrange academic transcripts, passport, test scores, essays, recommendation letters and financial documents as requested."
        },
        {
          "title": "Apply",
          "text": "Apply via the official university website or an accepted application platform."
        },
        {
          "title": "Getting an Admission Decision",
          "text": "Check the offer, the scholarship details, the payment deadlines and the enrollment conditions."
        },
        {
          "title": "Obtain the Necessary Immigration Documents",
          "text": "Upon admission and completion of applicable requirements, the university may issue Form I-20 to the qualified student visa applicant. Step 7. Apply for F-1 Student Visa Complete all required processing for a visa application following the guidance of the current U.S. embassy or consulate."
        },
        {
          "title": "Prepare to go out",
          "text": "Organize accommodation, travel, health insurance if required and university registration. Getting admission in a university doesn’t mean visa approval. Applicants must satisfy all applicable immigration requirements."
        }
      ]
    }
  ],
  "faqTitle": "FAQs",
  "faqs": [
    {
      "q": "Is BBS in the United States?",
      "a": "The exact title Bachelor of Business Studies is less common in the USA. Related undergraduate programs include business, business administration, business management and international business."
    },
    {
      "q": "How long does it take to complete a bachelor’s degree in Business USA?",
      "a": "Four years is usually the length of most full-time undergraduate business degrees."
    },
    {
      "q": "Can Indian students apply after 12th?",
      "a": "Yes. Students who meet the academic, English-language and other admission requirements of the university may apply."
    },
    {
      "q": "Do you need maths for business studies?",
      "a": "Not in all the universities. Subject requirements Applicants should consult the relevant subject requirements as they vary according to the program chosen."
    },
    {
      "q": "How much does it cost to study business in the US?",
      "a": "The tuition can be between about USD 15,000 and USD 45,000 a year or more. Other costs include living expenses, insurance and other fees."
    },
    {
      "q": "How can Edu Hawk worldwide Consultancy help me study abroad?",
      "a": "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities"
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

const BbsAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/courses/bbs"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/courses/bbs"} />
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

export default BbsAbroad;
