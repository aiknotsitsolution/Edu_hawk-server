import React, { useEffect, useRef, useState } from "react";
import SeoHead from "../../../../component/SeoHead";
import heroImg from "../../../../Images/Abroad/USA/BBA/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/BBA/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/BBA/University of Pennsylvania.webp";
import u1Img from "../../../../Images/Abroad/USA/BBA/Bloomington University of Texas at Austin.webp";

const page = {
  "name": "BBA",
  "slug": "bba",
  "title": "BBA in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Bachelor of Business Administration (BBA) in the USA after Class 12. Course options, duration, eligibility, entrance tests, tuition fees, scholarships, top universities, careers and visa process.",
  "keywords": "Study BBA in USA for Indian Students, Best Universities for BBA in USA, BBA Admission Requirements in USA for Indian Students, BBA Courses and Specializations in USA, BBA Tuition Fees in USA for Indian Students, BBA Scholarships for International Students in USA, Bachelor of Business Administration in USA After 12th, BBA Eligibility Criteria for Indian Students, SAT and ACT Requirements for BBA in USA, English Language Tests for US Universities, Top Undergraduate Business Schools in America, Career Opportunities After BBA in USA, BBA in Finance and Marketing in USA, Cost of Living in USA for Indian BBA Students, USA Student Visa for Indian BBA Students",
  "introTitle": "BBA in USA",
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
      "title": "Study BBA in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "A Bachelor of Business Administration (BBA) is an undergraduate degree designed to develop business knowledge, management skills and leadership capabilities. The United States offers students opportunities to study business through hands-on projects, case studies, applicable internships, and industry-focused coursework.",
            "In the USA, similar undergraduate business degrees may also be offered as a Bachelor of Science in Business Administration, Bachelor of Business Administration or Bachelor of Arts in Business depending upon the university.",
            "Students can select from a variety of business specializations based on their academic interests and career goals.",
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why Study BBA in the USA?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Worldwide Recognized Education: Attend universities that offer globally recognized business programs.",
            "Diverse Specializations: Explore finance, marketing, management, entrepreneurship and more.",
            "Practical Learning: Learn through projects, presentations, case studies and business simulations.",
            "Industry Exposure: Some programs provide internship opportunities and connections with employers.",
            "Flexible Curriculum: Combine business studies with analytics, technology, communication, or other disciplines.",
            "Career Development Learn business, management, marketing, finance and entrepreneurship skills."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Top Universities for BBA in the USA",
      "groups": [],
      "lead": [
        "The following U.S. institutions are known for business education and/or have undergraduate programs in business:"
      ],
      "note": [],
      "unis": [
        {
          "name": "University of Pennsylvania",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Bloomington University of Texas at Austin",
          "desc": "",
          "img": u1Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Course Options and Specializations",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the USA, universities offer business administration degrees with different names. The study options here are typical:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Administration",
            "Finance Marketing International Business",
            "Management of Human Resources",
            "Business",
            "Business Analytics Accounting",
            "Operations Management Supply Chain Management Management Information Systems",
            "Digital Marketing Economics & Business Administration Hospitality and Tourism Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Through Edu Hawk worldwide study abroad guidance, students can explore these opportunities and understand the requirements involved in pursuing  education overseas."
          ]
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of Course",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the USA, a bachelor’s degree in business administration usually takes four years of full-time study to complete.",
            "The duration can vary according to the university, transfer credits, course structure, internship arrangements, and the student’s study plan."
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
            "For undergraduate business programs the normal admission requirements for students applying are as follows:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th Class Passed from recognized Board.",
            "Academic grades that satisfy the university’s admission criteria.",
            "School-leaving documents and academic transcripts.",
            "Evidence of proficiency in the English Language (if required).",
            "Valid passport.",
            "Application form and supporting documents.",
            "Personal statement, essay, or letters of recommendation, as applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Many business administration programs accept students from Commerce, Science and Humanities background. Mathematics requirements differ across universities and programs."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Proficiency Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students may be required to demonstrate their English proficiency with an approved test.",
            "The most common tests used are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "IELTS Academic TOEFL iBT",
            "PTE Academic",
            "Duolingo English Test accepted locations"
          ]
        },
        {
          "t": "p",
          "items": [
            "Minimum scores depend on the institution. Some universities may have alternative methods to demonstrate English proficiency or waive this requirement for eligible applicants.",
            "Before applying, students are recommended to check the latest requirements on the official university website."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance Requirements & Admission Tests",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission criteria differ from university to university and the competitiveness of the program.",
            "Some of the universities may consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "SAT or ACT scores (if required or submitted at your request).",
            "10th and 12th class academic records.",
            "English test scores.",
            "Personal essays or statements of purpose",
            "Recommendation letters.",
            "Extracurricular Activities, Leadership and Accomplishments"
          ]
        },
        {
          "t": "p",
          "items": [
            "Many US universities are test-optional for admissions, but some may require or recommend standardized tests. Students should consult the policy current for the intake they have chosen."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Tuition and Living Expenses",
      "groups": [
        {
          "t": "p",
          "items": [
            "The expense of pursuing a BBA in USA depends upon the university, location, type of accommodation and lifestyle.",
            "Estimated Cost Yearly Cost"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Tuition fees",
            "15,000-45,000+ USD",
            "Lodging and meals USD 10,000-20,000",
            "Books, supplies and personal expenses.",
            "USD 1,000-3,000",
            "Other costs and health insurance"
          ]
        },
        {
          "t": "p",
          "items": [
            "These figures are broad planning estimates, not official quotes. Private universities and some high-cost locations may charge much more. There are also other costs like travel, visa applications and university fees.",
            "Students should review the official university cost of attendance and budget for the full program."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Financial Aid & Scholarships",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the university and the award’s terms, some universities offer scholarships or other forms of financial assistance for international students.",
            "Funding may be available from:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Awards of Merit.",
            "Academic achievement awards",
            "Scholarships offered by the university for international students.",
            "Need-based aid at colleges that accept international students.",
            "Outside or private scholarships."
          ]
        },
        {
          "t": "p",
          "items": [
            "Scholarships can be applied to part of tuition, or in some limited cases, a larger part of educational costs. Conditions of availability, eligibility, deadlines, renewal vary by institution. Find out if an award is available to international undergraduate applicants."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "BBA career opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "Business Administration graduates are eligible for entry-level positions in a variety of fields. Career options depend on the student’s specialization, skills, experience and work authorization.",
            "Possible jobs are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Associate Business Development",
            "Marketing Co-ordinator",
            "Financial Analyst Intern",
            "Sales and Account Executive Operations Coordinator Management Trainee Business Analyst Trainee Human Resources Coordinator",
            "Customer Relations Representative",
            "Business Owner or Entrepreneurl"
          ]
        },
        {
          "t": "p",
          "items": [
            "Graduates also have the option to study for a Master of Business Administration, Master of Science in Finance, Master of Science in Marketing or another relevant postgraduate degree."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Process for Student Visa and Application",
      "groups": [],
      "lead": [
        "Usually, Indian students follow these steps when they plan to study BBA in the USA:"
      ],
      "steps": [
        {
          "title": "Select a University",
          "text": "Compare business programs, entry requirements, tuition fees, scholarships & campus location."
        },
        {
          "title": "Find Out If You Qualify",
          "text": "Check for academic qualifications, English language requirements, testing requirements and application deadlines."
        },
        {
          "title": "Organize Documents",
          "text": "Provide and submit academic transcripts, passport, English exam results, essays, letters of recommendation and financial statements as required."
        },
        {
          "title": "Apply Now",
          "text": "Apply through the university application portal or an approved application platform."
        },
        {
          "title": "Get Your Admission Decision",
          "text": "Please review the offer, scholarship information, deposit requirements and enrollment conditions."
        },
        {
          "title": "Get the Required Immigration Documents",
          "text": "The university may issue Form I-20 for an eligible student visa applicant after admission and satisfaction of applicable requirements. Step 7. Applying for an F-1 Student Visa Complete the required visa application and follow the current guidance from the US embassy or consulate."
        },
        {
          "title": "Get Ready to Leave",
          "text": "Book accommodation and health insurance where necessary Travel arrangements and university enrollment. Admission and visa approval are two different things. Students must meet applicable requirements for both.”"
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions (FAQs)",
  "faqs": [
    {
      "q": "Indian students can pursue BBA in the USA after Class 12?",
      "a": "Yes. Students from India who meet the academic, English language and other admission requirements can apply for undergraduate business administration programs in the USA."
    },
    {
      "q": "What is the duration of BBA in USA?",
      "a": "A full-time bachelor’s degree in business administration usually takes four years, however, the duration may vary depending on the university and study plan."
    },
    {
      "q": "Is Math a required subject for BBA in USA?",
      "a": "Not in every university. There are programs that require specific math preparation, and others that have different prerequisites. Students should refer to requirements for each program."
    },
    {
      "q": "How much does it cost to study BBA in the USA?",
      "a": "Tuition can vary widely with broad estimates of USD 15,000 - 45,000 or more per year. You’ll also have to budget for living costs and additional university fees."
    },
    {
      "q": "Can students from Science / Humanities backgrounds apply?",
      "a": "Yes. Many undergraduate business programs take students from diverse academic backgrounds if they meet the university's eligibility criteria."
    },
    {
      "q": "6, How can Edu Hawk worldwide Consultancy help me study abroad?",
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

const BbaAbroad = () => {
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
      <SeoHead
        title={page.title}
        description={page.description}
        path="/courses/bba"
      >
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
      </SeoHead>

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
                width={900}
                height={760}
                alt={`${page.name} in the USA`}
                className="rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px]"
                loading="eager"
              />
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium">
                Trusted by 400+ Indian students
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
                  width={1200}
                  height={800}
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

export default BbaAbroad;
