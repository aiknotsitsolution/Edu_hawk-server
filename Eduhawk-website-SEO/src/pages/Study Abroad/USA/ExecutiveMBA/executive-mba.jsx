import { formatRichText, EligibilityCtaCard } from "../../../../component/CoursePageKit";
import React, { useEffect, useRef, useState } from "react";
import SeoHead from "../../../../component/SeoHead";
import heroImg from "../../../../Images/Abroad/USA/ExecutiveMBA/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/ExecutiveMBA/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/ExecutiveMBA/University of Pennsylvania.webp";
import u1Img from "../../../../Images/Abroad/USA/ExecutiveMBA/Northwestern University.webp";
import u2Img from "../../../../Images/Abroad/USA/ExecutiveMBA/Kellogg School of Management.webp";

const page = {
  "name": "Executive MBA",
  "slug": "executive-mba",
  "title": "Executive MBA in USA for Indian Working Professionals | 2026 | Edu Hawk",
  "description": "Study Executive MBA (EMBA) in the USA for working professionals. Specialisations, duration, eligibility, entrance exams, tuition, scholarships, top universities, careers and visa process.",
  "keywords": "Study Executive MBA in USA for Indian Students, Best Executive MBA Universities in USA, Executive MBA Admission Requirements in USA, Executive MBA Fees in USA for Indian Students, Executive MBA Scholarships for International Students in USA, Executive MBA Course Duration in USA, Executive MBA Eligibility for Indian Professionals, Executive MBA Without GMAT in USA, Executive MBA Work Experience Requirements in USA, Top Executive MBA Programs in America, Executive MBA Specializations in USA, Career Opportunities After Executive MBA in USA, Executive MBA for Working Professionals in USA, Executive MBA in USA for International Managers, USA Student Visa for Indian Executive MBA Students",
  "introTitle": "Master of Business Administration (MBA) in the USA",
  "heroParas": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "overview": [],
  "level": "For working professionals",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Overview of Executive MBA in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "The Executive Master of Business Administration (Executive MBA or EMBA) is a postgraduate business degree program designed for experienced professionals, managers, business leaders and entrepreneurs who want to improve their leadership and strategic management skills.",
            "**Executive MBA** programs generally include business strategy, finance, marketing, organizational leadership, innovation and decision-making. Many are geared to allow professionals to work while they earn their advanced education.",
            "Edu Hawk Worldwide assists students in exploring international study options, comprehending university admission standards, comparing pathways like [MBA in the USA](/courses/mba) and [International Business](/courses/international-business), and [getting expert counselling](/contact). Check our [admission FAQs](#faq) and [top universities](#universities)."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why Study Executive MBA in the USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Advanced Leadership Skills: Develop skills to lead teams, departments and organizations.",
            "Strategic Business Knowledge: Understand how to make smart decisions in finance, operations, marketing, and business growth.",
            "Professional Networking: Connect with experienced professionals, managers, entrepreneurs and business leaders.",
            "Hands-On Learning: Learn business principles using case studies, projects, simulations and leadership exercises.",
            "Global Business Perspective: Explore international markets, business strategy and cross-cultural management.",
            "**Career Development:** Get ready to take on more responsibilities, leadership roles or even start your own business."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best Universities for Executive MBA Programs",
      "groups": [],
      "lead": [
        "The following US institutions are recognized for MBA or executive business education."
      ],
      "note": [],
      "unis": [
        {
          "name": "University of Pennsylvania",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Northwestern University",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "Kellogg School of Management",
          "desc": "",
          "img": u2Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Executive MBA Course Specializations and Options",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Executive MBA** programs tend to provide general management education and elective topics or concentrations vary by school.",
            "Some of the popular study areas are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Corporate Management",
            "Strategic Leadership",
            "Finance & Investment Management",
            "Marketing Management",
            "Global Business",
            "Entrepreneurship & Innovation",
            "Analytics of Business",
            "Operations and Supply Chain Management-Technology Management",
            "Management in Healthcare",
            "Human Resource Management (HRM)",
            "Digital Business Transformation"
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
      "title": "Executive MBA Duration of Course",
      "groups": [
        {
          "t": "p",
          "items": [
            "Typically, the duration of **Executive MBA** programs in the USA is 18-24 months, but there are some shorter and longer programs.",
            "The length depends on the university, class schedule, credit requirements, format of study, and any international modules or residency sessions.",
            "Many programs are geared toward working professionals but students should check attendance requirements and the expected time commitment before signing up."
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility criteria for Indian students",
      "groups": [
        {
          "t": "p",
          "items": [
            "The Executive MBA is generally aimed at people who have already had a career and have a good academic record.",
            "Typical requirements may be:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor’s degree or equivalent qualification.",
            "Several years of full-time professional experience, typically in the range of 5-10 years or more.",
            "Evidence of management responsibility, career progression or leadership.",
            "Academic transcripts and certificates of degree.",
            "Resume or curriculum vitae – current.",
            "Essays or professional objective statements.",
            "**Letters of recommendation (LOR)**.",
            "An interview, where necessary."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Proficiency",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants from India may be required to provide evidence of their English language ability if previous education or other qualifications do not satisfy the university’s exemption policy.",
            "Tests accepted may include:",
            "IELTS Academic",
            "TOEFL iBT",
            "PTE Academic where accepted",
            "Other approved English language assessments",
            "Some **Executive MBA** programs waive English-language tests for qualified applicants. Students should check the university policy, minimum scores and exemption criteria."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance Exams and Admission Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admissions process for Executive MBAs looks at a candidate's professional accomplishments, leadership potential, academic record and career goals.",
            "Depending on the university the requirements may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**GMAT or GRE** scores, if applicable.",
            "School transcripts.",
            "Professional résumé or CV.",
            "Personal statement or essay.",
            "**Letters of recommendation (LOR)**.",
            "Documentation of employer sponsorship or support, if applicable.",
            "Interview with admissions team."
          ]
        },
        {
          "t": "p",
          "items": [
            "Many **Executive MBA** programs do not require the **GMAT or GRE**, but policies vary. Applicants should check current admission requirements directly with the university they are interested in."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Executive MBA Tuition and Living Expenses",
      "groups": [
        {
          "t": "dl",
          "items": [
            "**Executive MBA** programs in the USA can be a huge investment. The cost of tuition depends on the program’s format, the services it includes, and the opportunities for learning internationally.",
            "Cost",
            "Planning Estimate Broad",
            "Executive MBA tuition USD 60,000-200,000+ for the whole program, Travel & Accommodations, Depending on attendance format and location",
            "Books, other materials and technology is up to the university",
            "Other costs and health insurance, Depending on enrollment and residency requirements",
            "These are rough estimates, not official university quotes. Some very selective programs can be more expensive. Some programs include certain meals, accommodation, learning materials or international modules in their fees, while others charge for these items separately."
          ],
          "pairs": [
            {
              "t": null,
              "d": "**Executive MBA** programs in the USA can be a huge investment. The cost of tuition depends on the program’s format, the services it includes, and the opportunities for learning internationally."
            },
            {
              "t": null,
              "d": "Cost"
            },
            {
              "t": "Planning Estimate Broad",
              "d": "Executive MBA tuition USD 60,000-200,000+ for the whole program, Travel & Accommodations, Depending on attendance format and location"
            },
            {
              "t": "Books, other materials and technology is up to the university",
              "d": "Other costs and health insurance, Depending on enrollment and residency requirements"
            },
            {
              "t": null,
              "d": "These are rough estimates, not official university quotes. Some very selective programs can be more expensive. Some programs include certain meals, accommodation, learning materials or international modules in their fees, while others charge for these items separately."
            }
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Scholarships and Aid",
      "groups": [
        {
          "t": "p",
          "items": [
            "The amount of money that schools give their Executive MBA students varies from school to school. Some universities offer limited scholarships or awards; others expect candidates or their employers to fund most of the cost.",
            "Possible sources of funding are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Merit Scholarships",
            "Awards for professional accomplishment or leadership.",
            "University-specific fellowships .",
            "Employer sponsorship.",
            "Employer paid tuition reimbursement.",
            "External funding of education where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Scholarships can be competitive and may not cover the full cost of the program. Applicants should check whether international students are eligible, whether employer sponsorship is accepted, and whether funding can be combined with other awards."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Job Opportunities Post Executive MBA",
      "groups": [
        {
          "t": "p",
          "items": [
            "An Executive MBA is designed to help seasoned professionals build their business knowledge and prepare for greater leadership responsibility. Career outcomes are influenced by prior experience, industry, skill set, professional network and employer demand.",
            "Possible career paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Senior Business Manager",
            "Operations Director",
            "Director, Business Development Manager, Strategic Planning",
            "Marketing Director Finance Manager or Director Management Consultant General Manager Product or Program Director Entrepreneur or Business Owner Chief Operating Officer, depending on experience and employer requirements"
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Application Process & Student Visa",
      "groups": [],
      "lead": [
        "The correct immigration route will depend on the format of delivery of the program, the institution and the student’s study plans. International students should check visa eligibility before enrolling."
      ],
      "steps": [
        {
          "title": "Define Your Career Objectives",
          "text": "What leadership skills, industry expertise, and professional results are you looking for from the program?"
        },
        {
          "title": "Research Executive MBA Programs",
          "text": "Review curriculum, class schedule, location, tuition, professional experience requirements and delivery format."
        },
        {
          "title": "See if you qualify",
          "text": "Degree requirements, minimum work experience, English language requirements and entrance tests."
        },
        {
          "title": "Prepare Your Application Documents",
          "text": "Arrange for transcripts, resume, essays, recommendations, and other documents required by the institution."
        },
        {
          "title": "Make Use of the Application",
          "text": "Submit your application via the university’s official admissions portal and participate in any interview or assessment process."
        },
        {
          "title": "Review the Offer & Funding",
          "text": "Please review the admission requirements, **tuition fees**, scholarship opportunities and payment due dates."
        },
        {
          "title": "Verify immigration requirements",
          "text": "Confirm with the university’s international student office that the program and study format is conducive to the appropriate student visa route. Students in eligible programs and qualifying programs are eligible for Form I-20 for application for an **F-1 student visa**."
        },
        {
          "title": "Getting ready to go or attend",
          "text": "Arrange for accommodation, travel, insurance where required and any compulsory campus residencies. Admission to an Executive MBA does not guaranty a student a particular visa. “Students should follow the current official US immigration guidance and check their own circumstances with the university."
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions",
  "faqs": [
    {
      "q": "What is an Executive Master’s of Business Administration?",
      "a": "An Executive MBA is a postgraduate management qualification for experienced professionals who want to improve their leadership, strategic thinking and business management skills."
    },
    {
      "q": "How long is an Executive MBA course in the US?",
      "a": "Many programs last about 18 to 24 months, although length may vary depending on the institution and the format of study."
    },
    {
      "q": "What is the work experience requirement?",
      "a": "Most programs expect ~5-10 years or more professional experience. But each university has different requirements."
    },
    {
      "q": "Can Indian students apply for Executive MBA in USA?",
      "a": "Yes. Indian nationals can apply if they meet the academic, professional experience, English-language and other admission requirements of the chosen program."
    },
    {
      "q": "Is GMAT mandatory for admission to Executive MBA?",
      "a": "Not always. Some programs waive the GMAT or GRE, while others may require a test score or consider it as part of the application process."
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
        <p key={i}>{formatRichText(p)}</p>
      ))}
    </div>
  ) : null;

const Li = ({ text }) => (
  <li className="flex items-start gap-3">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
    <span className="text-slate-600 leading-relaxed">{formatRichText(text)}</span>
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

const ExecutiveMbaAbroad = () => {
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
        path="/courses/executive-mba"
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

export default ExecutiveMbaAbroad;
