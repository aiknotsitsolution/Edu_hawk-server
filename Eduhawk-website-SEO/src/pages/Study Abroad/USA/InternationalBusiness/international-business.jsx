import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/InternationalBusiness/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/InternationalBusiness/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/InternationalBusiness/New York University.webp";
import u1Img from "../../../../Images/Abroad/USA/InternationalBusiness/University of South Carolina.webp";
import u2Img from "../../../../Images/Abroad/USA/InternationalBusiness/University of Southern California.webp";

const page = {
  "name": "International Business",
  "slug": "international-business",
  "title": "International Business in USA for Indian Students | 2026 | Edu Hawk",
  "description": "Study International Business in the USA. Course options, specialisations, eligibility, English requirements, tuition fees, scholarships, top universities, careers and visa process for Indian students.",
  "keywords": "International Business in USA for Indian Students, Best Universities for International Business in USA, International Business Courses in USA, International Business Admission Requirements in USA, International Business Fees in USA for Indian Students, International Business Scholarships for International Students, International Business Eligibility After Class 12, Bachelor's in International Business in USA, Master's in International Business in USA, International Business Specializations in USA, International Business Without GMAT in USA, Top International Business Programs in America",
  "introTitle": "International Business in USA",
  "heroParas": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "overview": [],
  "level": "UG & PG",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Introduction to International Business in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "International Business is a multidisciplinary field that studies how firms operate, compete and expand in international markets. It is a mix of business management, economics, finance, marketing, international trade and cross-cultural communication.",
            "Students who study international business in the US get an overview of the global market, international business strategies, trade regulations and the complex nature of managing organizations across borders.",
            "Students can study International Business at the undergraduate, master’s, MBA specialization or doctoral level depending on their qualifications and career goals.",
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why Study International Business in the USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Global Business View: Discover global markets, trade and international economic trends.",
            "Industry Oriented Education: Learn through case studies, business simulations, presentations and practical projects.",
            "International Atmosphere: Work with students and faculty from different cultural and professional backgrounds.",
            "Specialization Opportunities: Specialize in international marketing, global finance, supply chain management and international strategy.",
            "Opportunities to network: Take part in university events, alumni groups and eligible internships to build professional contacts.",
            "Career Flexibility: Get ready for business positions that include international markets, multinational organizations and cross-border operations."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best Schools to Study International Business",
      "groups": [],
      "lead": [
        "The following US universities are worth considering for international business, global business, or related management education:"
      ],
      "note": [],
      "unis": [
        {
          "name": "New York University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "University of South Carolina",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "University of Southern California",
          "desc": "",
          "img": u2Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Course Options for International Business",
      "groups": [
        {
          "t": "p",
          "items": [
            "In universities of the USA there are International Business programs of various academic levels.",
            "Undergraduate Degree Programs",
            "Students who have completed Class 12 can look at:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor of Science in International Business Administration",
            "BBA International Business",
            "B.A. International Business Studies in",
            "Bachelor of Science in Global Business",
            "Bachelor of Business Administration, International Business Concentration"
          ]
        },
        {
          "t": "p",
          "items": [
            "Usual Duration: Four years.",
            "Graduates may consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master of Science in International Business",
            "International Business (M.I.B.)",
            "Master of Global Business",
            "Master of Business Administration International Business Concentration",
            "MSc International Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Average time to completion: One to two years, depending on program.",
            "Students interested in research and an academic career may want to consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Doctor of Philosophy in International Business (PhD)",
            "PhD International Management",
            "Doctor of Philosophy in Business Administration (International Business concentration)"
          ]
        },
        {
          "t": "p",
          "items": [
            "Usual duration: About four to six years depending on progress of research and university requirements.",
            "Diploma & Certificate Programs",
            "Some universities and professional education providers offer short term learning opportunities in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Trade, International",
            "International Business Management",
            "Global Marketing",
            "Global Supply Chain Management",
            "International Business Strategy (Cross Cultural Management)"
          ]
        }
      ]
    },
    {
      "slot": "specialisations",
      "eyebrow": "Specialisations",
      "title": "Popular Specialisations in International Business",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the degree and university, students can specialize in particular areas."
          ]
        },
        {
          "t": "ul",
          "items": [
            "International Trade & Commerce",
            "Worldwide Marketing",
            "International finance .. .",
            "Global Supply Chain Management",
            "Global Business Strategy",
            "Global Human Resource Management",
            "International Management",
            "Entrepreneurship across the globe",
            "International Management",
            "International Economics",
            "Business Analytics Worldwide",
            "International Trade Management,"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some specializations may be obtained as separate degrees, others as electives, concentrations or minors."
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
            "Must be at the undergraduate level and at a university.",
            "Undergraduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passed Class 12 from a recognized board.",
            "Academic grades which meet the admission requirements of the university.",
            "School certificates and academic records.",
            "English language proficiency (if required).",
            "SAT or ACT scores, if necessary.",
            "Essays, recommendations or other application materials (if applicable)"
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
            "Recognized Bachelor’s degree or equivalent qualification.",
            "Academic transcripts and diplomas.",
            "Results of the English language proficiency test, if required.",
            "Personal statement or application essay.",
            "Recommendation letters.",
            "Curriculum vitae or resume, if applicable.",
            "GRE or GMAT scores (if required by institution)."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some programs admit students from a variety of undergraduate majors, while others may prefer or require previous coursework in business or related quantitative preparation.",
            "For Doctorate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Relevant bachelor's or master's degree depending on the program.",
            "School records.",
            "Research interests/research statement:",
            "Recommendation letters.",
            "Resume or Curriculum Vitae.",
            "GMAT/GRE scores (if applicable).",
            "Proof of English language proficiency, if applicable.",
            "Admission to the PhD program is competitive and may require evidence of research potential."
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
            "International students may need to demonstrate their English proficiency and take a recognized test.",
            "Tests are:",
            "IELTS Academic TOEFL iBT PTE Academic (where accepted) Duolingo English Test (where accepted)",
            "Required scores and exemption rules vary by university and degree level. Students should refer to the official requirements for the program and intake they have chosen."
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
          "t": "p",
          "items": [
            "Entry requirements vary by university and level of study."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Undergraduate Results of Class 12, SAT/ACT where required, English proficiency",
            "Graduate",
            "Bachelor's Degree, Academic Transcripts, Resume, Essays, GMAT or GRE where required",
            "PhD",
            "Academic Qualifications, Research Statement, Recommendations, GMAT or GRE as required"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities have test-optional policies or waive standardized tests for eligible applicants. While some MBA programs may require or prefer work experience, it is not a requirement for all International Business degrees."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Tuition fees and living costs",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost of studying International Business in the USA depends on the university, level of degree, location and structure of the program."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Estimated Annual Cost",
            "Undergraduate tuition USD 15,000–45,000+",
            "Postgraduate tuition $20,000 to $60,000+",
            "Accommodation and food 10,000-20,000 USD",
            "Books, supplies and personal expenses USD 1,000-3,000",
            "Other costs and health insurance"
          ]
        },
        {
          "t": "p",
          "items": [
            "These are planning estimates only, not final quotes for fees. Some private universities and specialized business schools can be considerably more expensive in tuition. Some schools include assistantships for Ph.D. programs."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Financial Aid and Scholarships",
      "groups": [
        {
          "t": "p",
          "items": [
            "Scholarships or financial aid are available to international students based on their academic profile, level of degree and university.",
            "Possible options:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships based on merit.",
            "Academic achievement awards",
            "University scholarships for international students.",
            "Graduate assistantships, if available.",
            "Research or teaching assistantships are available to eligible postgraduate and doctoral students.",
            "External scholarships from eligible organizations."
          ]
        },
        {
          "t": "p",
          "items": [
            "Funding can be used to help cover some or all tuition and possibly some other educational expenses. Availability, eligibility, deadlines, and renewal conditions vary for each program."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities in International Business",
      "groups": [
        {
          "t": "p",
          "items": [
            "International Business graduates can pursue careers in international operations, trade, management and cross-border commercial activities.",
            "Possible functions:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Executive, International Business Development",
            "Global Marketing Co-ordinator",
            "International Trade Analyst",
            "Import Coordinator/Export Coordinator",
            "Global Supply Chain Analyst-",
            "International Sales Representative",
            "Analysis of business systems",
            "Market Research Analyst (October 2023)",
            "International Operations Co-ordinator",
            "Global Account Manager Management Consultant",
            "International Project Co-ordinator"
          ]
        },
        {
          "t": "p",
          "items": [
            "The opportunities for a career will depend on the level of qualification, specialization, language skills, experience and the needs of the employer.",
            "Having a degree does not guaranty employment in the USA. International graduates must satisfy relevant immigration and work-authorisation requirements."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa & Application Process",
      "groups": [],
      "lead": [
        "The Indian students interested to study International Business in the USA generally follow the below-mentioned steps:"
      ],
      "steps": [
        {
          "title": "Select Your Degree Level",
          "text": "Choose to study an undergraduate, postgraduate, doctoral or certificate program."
        },
        {
          "title": "Choosing the Universities",
          "text": "Compare curriculum, specializations, tuition fees, location, scholarships & admission criteria."
        },
        {
          "title": "Confirm Eligibility",
          "text": "Check the requirements for academic qualifications, English proficiency, entrance exam, and work or research experience."
        },
        {
          "title": "Get Your Documents Ready",
          "text": "Gather transcripts, diplomas, passport, essays, letters of recommendation, resume and other necessary documents."
        },
        {
          "title": "Apply",
          "text": "Submit an online application through the university’s official application portal and complete any required assessments or interviews."
        },
        {
          "title": "Confirm the Admission Offer",
          "text": "See admission requirements, tuition deposits, funding information and enrollment deadlines."
        },
        {
          "title": "Apply for the Appropriate Visa",
          "text": "Students who meet the admission requirements for qualifying programs may receive a Form I-20 and apply for an F-1 student visa, subject to current immigration requirements."
        },
        {
          "title": "Get Ready to Leave",
          "text": "Arrange accommodation, travel, insurance (if needed) and registration at university."
        }
      ]
    }
  ],
  "faqTitle": "FAQ (Frequently Asked Questions)",
  "faqs": [
    {
      "q": "What is International Business?",
      "a": "International Business is the study of business activities that occur across national borders, such as global marketing, international trade, finance, management, and operations in multiple countries."
    },
    {
      "q": "Is it possible for Indian students to study International Business in the USA after Class 12?",
      "a": "Yep. Students who meet the university’s academic and English language requirements may apply for an undergraduate International Business or related business program."
    },
    {
      "q": "How long does it take to earn an international business degree?",
      "a": "A bachelor’s degree usually takes four years to complete. Master’s programs usually last one or two years and doctoral programs usually take about four to six years."
    },
    {
      "q": "Is math necessary for International Business?",
      "a": "Requirements vary between universities and degrees. Some programs require quantitative preparation  especially if your coursework has been in finance, economics, or analytics."
    },
    {
      "q": "How much does it cost to study International Business in USA?",
      "a": "Cost varies by degree and university. Undergraduate tuition fees can range from approximately USD 15,000 to USD 45,000 or more annually, with postgraduate fees potentially higher. The costs of living are not included."
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

const InternationalBusinessAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/courses/international-business"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/courses/international-business"} />
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

export default InternationalBusinessAbroad;
