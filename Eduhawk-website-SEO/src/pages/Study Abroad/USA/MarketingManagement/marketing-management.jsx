import React, { useEffect, useRef, useState } from "react";
import SeoHead from "../../../../component/SeoHead";
import heroImg from "../../../../Images/Abroad/USA/MarketingManagement/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/MarketingManagement/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/MarketingManagement/Northwestern University.webp";
import u1Img from "../../../../Images/Abroad/USA/MarketingManagement/University of Pennsylvania – Wharton School.webp";
import u2Img from "../../../../Images/Abroad/USA/MarketingManagement/New York University – Stern School of Business.webp";

const page = {
  "name": "Marketing Management",
  "slug": "marketing-management",
  "title": "Marketing Management in USA for Indian Students | 2026 | Edu Hawk",
  "description": "Study Marketing Management in the USA. Course options, specialisations, eligibility, admission tests, tuition fees, scholarships, top universities, careers and visa process for Indian students.",
  "keywords": "Study Marketing Management in USA for Indian Students, Best Universities for Marketing Management in USA, Study Marketing Management Courses in USA, Marketing Management Admission Requirements in USA, Marketing Management Fees in USA for Indian Students, Marketing Management Scholarships for International Students, Marketing Management Eligibility After Class 12, Bachelor's in Marketing Management in USA, Master's in Marketing Management in USA, Digital Marketing Courses in USA for International Students, Marketing Management Specializations in USA, Marketing Management Without GMAT in USA, Career Opportunities After Marketing Management Degree, Marketing Management Course Duration in USA, USA Student Visa for Indian Marketing Management Students",
  "introTitle": "Marketing Management in United States",
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
      "title": "Marketing Management in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Marketing Management is a business discipline that deals with the understanding of customer needs, formulation of marketing strategy, brand building and promotion of product or service. It blends creativity, market research, consumer psychology, data analysis, communication and business strategy.",
            "Students studying Marketing Management in the USA can explore traditional marketing as well as digital marketing, brand management, advertising, marketing analytics and international marketing.",
            "Students can choose undergraduate, postgraduate, doctorate or certificate courses in marketing, depending on their academic qualification and career goals.",
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why Study Marketing Management in the USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Industry Ready Education: Learn modern marketing strategies, consumer behavior, branding and market research.",
            "Digital Marketing Exposure: Social media marketing, search engine marketing, content strategy and marketing analytics.",
            "Practical Learning: Develop skills in campaigns, case studies, presentations and business projects.",
            "Specialization Options: Choose to specialize in brand management, advertising, international marketing or digital strategy.",
            "Professional Networking: Build connections with faculty, classmates, alumni and industry professionals.",
            "Career Flexibility: Prepare for opportunities in technology, retail, media, consulting, consumer goods and more."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best Universities to Search Marketing Management",
      "groups": [],
      "lead": [
        "Here are some US institutions worth exploring for marketing, business or marketing-related education:"
      ],
      "note": [
        "With Edu Hawk consultancy University selection guidance, students can compare suitable institutions based on academic background, budget, preferred location, and long-term professional goals."
      ],
      "unis": [
        {
          "name": "Northwestern University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "University of Pennsylvania – Wharton School",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "New York University – Stern School of Business",
          "desc": "",
          "img": u2Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Marketing Management Course Selections",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the USA, Marketing Management can be offered as a degree in its own right, or as a major within a business degree, a concentration or specialization.",
            "Undergraduate Degrees",
            "Students who have passed their Class 12 can consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Marketing B.S.",
            "Bachelor of Business Administration, Marketing",
            "Bachelor of Science in Business Administration, Major in Marketing",
            "BA Marketing (Bachelor of Arts in Marketing)",
            "Bachelor's Degree in Digital Marketing (if applicable)"
          ]
        },
        {
          "t": "p",
          "items": [
            "Typical length Four years.",
            "Graduate School",
            "Graduates may consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master of Science (Marketing)",
            "MSc in Marketing Analytics",
            "Master of Science in Digital Marketing (if applicable)",
            "Master of Business Administration, Marketing major Master of Marketing",
            "Master of Science: Integrated Marketing Communication"
          ]
        },
        {
          "t": "p",
          "items": [
            "Average duration: Roughly 1-2 years, depending on the program.",
            "PhD Programs",
            "For students interested in research, teaching or academic careers consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "PhD in Marketing",
            "Ph.D. Business Administration (Marketing)"
          ]
        },
        {
          "t": "p",
          "items": [
            "Average duration: Approximately four to six years, depending on the university and progress of research."
          ]
        }
      ]
    },
    {
      "slot": "specialisations",
      "eyebrow": "Specialisations",
      "title": "Common Specializations in Marketing Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can opt for specializations as per their interests and career opportunities."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Online Marketing",
            "Managing the brand",
            "Marketing Analysis",
            "Consumer Behavior",
            "Advertising & Public Relations",
            "Social Media Marketing Tips",
            "Global Marketing",
            "Product Management",
            "Market Research",
            "Retail Marketing",
            "Content Marketing",
            "Integrated Marketing Communication",
            "Customer Relationship Management (CRM)",
            "Marketing Strategy"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some specializations are offered as full degrees, others may be available as electives, concentrations or certificates."
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
            "Admission requirements depend on the university and the level of study.",
            "For Under Graduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passed Class 12 from a recognized board.",
            "Academic grades that meet the university entry requirements.",
            "Class 10 and class 12 transcripts or marksheets.",
            "Proof of English language proficiency, if requested.",
            "SAT or ACT scores, if applicable.",
            "Essays, recommendations or other application documents, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students with backgrounds in Commerce, Science and Humanities may qualify depending on the prerequisites of the program.",
            "For Postgraduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Recognized Bachelor’s degree or equivalent qualification.",
            "Academic Transcripts and Degree Certificates",
            "English language test results (where required).",
            "Statement of purpose or application essay;",
            "Recommendation letters.",
            "Résumé or curriculum vitae, if applicable.",
            "GMAT or GRE scores (if required by university);"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some master programs accept graduates from other academic fields, while others prefer business, marketing, economics or quantitative preparation.",
            "For Ph.D. Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Relevant bachelor's or master's degree depending on the program.",
            "Academic transcripts",
            "Statement of research interests or research proposal as appropriate.",
            "Letters of recommendation",
            "Resume or Curriculum Vitae.",
            "GMAT/GRE scores (if applicable).",
            "Proof of English proficiency, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Doctoral admissions are generally competitive and place considerable emphasis on academic ability and research potential."
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
            "International students may be required to take accepted English language proficiency testing.",
            "Standard options are:",
            "IELTS Academic TOEFL iBT PTE Academic, where accepted Duolingo English Test, where accepted Minimum scores and exemption policies are different for each institution and program Candidates are advised to visit the university’s official website for the current requirements."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Admission Tests and Admission Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Universities may consider a combination of academic results, testing, written materials and other factors when evaluating applicants.",
            "Program Level",
            "Potential Requirements"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Undergraduate Class 12 results, SAT or ACT if applicable, English proficiency",
            "Post-graduate",
            "Bachelor’s degree, transcripts, essays, résumé, GMAT or GRE if required Doctorate",
            "Academic qualifications, research statement, recommendations, GMAT or GRE if required"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities have test-optional admission policies or will waive standardized exams for qualified applicants. While some MBA programs require experience, it’s not a universal requirement for marketing master’s degrees."
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
            "Studying Marketing Management in the USA costs vary depending on the institution, degree level, location, and course structure.",
            "Estimated Annual Cost Cost"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Tuition for undergraduates 45,000+",
            "Postgraduate tuition $20,000 to $60,000+",
            "Accommodation and food 10,000-20,000 USD",
            "Books, supplies and personal expenses USD 1,000-3,000",
            "Other costs and health insurance"
          ]
        },
        {
          "t": "p",
          "items": [
            "These are planning estimates only and not official University quotations. Fees can be much higher at some private universities and specialist business schools. Funding for eligible students may be available in doctoral programs, and fees for certificate courses are independent.",
            "Students are encouraged to review the official cost of attendance and determine the total cost of the program they have selected."
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
            "International students may be eligible for scholarships or other funding depending on their academic profile, degree level and institution.",
            "Possible options are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships for merit.",
            "Academic achievement awards",
            "University scholarships for international students.",
            "Graduate assistantships when available.",
            "Research or teaching assistantships for doctoral students who are eligible.",
            "Scholarships offered externally by eligible organizations.",
            "Scholarships can pay some of the tuition, or in some limited cases, other educational expenses. Varying eligibility, award amounts, deadlines and renewal requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities in Marketing Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates with a degree in Marketing Management can find employment in the business, technology, retail, media, advertising, consulting and consumer sectors.",
            "Potential career paths:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Marketing Director",
            "Digital Marketing Specialist,",
            "Assistant Brand Manager",
            "Market Research Analyst.",
            "Social Media Marketing Expert",
            "Marketing Analyst",
            "Account Executive, Advertising",
            "Specialist, Content Marketing",
            "Product Marketing Associate",
            "Public Relations Officer",
            "Customer Relations Manager",
            "Marketing Manager (with relevant experience)"
          ]
        },
        {
          "t": "p",
          "items": [
            "The level of qualification, practical skills, experience, specialization and the employer’s requirements determine career opportunities.",
            "Graduates may also opt to further their studies with an MBA, Master of Science in Marketing, Master of Science in Marketing Analytics or related business degree."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa & Application",
      "groups": [],
      "lead": [
        "Here are the usual steps taken by Indian students to study Marketing Management in the USA:"
      ],
      "steps": [
        {
          "title": "Select Your Degree Level",
          "text": "Choose to study an undergraduate, postgraduate, doctoral or certificate program."
        },
        {
          "title": "List of Universities",
          "text": "Compare marketing specializations, curriculum, tuition fees, scholarships and location."
        },
        {
          "title": "Verify Eligibility",
          "text": "Check the academic requirements, English language requirements, entrance exams and experience requirements if applicable."
        },
        {
          "title": "Get Your Documents Ready",
          "text": "Gather transcripts, diplomas, passport, essays, letters of recommendation, resume and other necessary documents."
        },
        {
          "title": "Apply for",
          "text": "Complete any required assessments or interviews and apply through the university’s official admissions portal."
        },
        {
          "title": "Review the Offer of Admission",
          "text": "See admission requirements, tuition deposits, funding information and enrollment deadlines."
        },
        {
          "title": "Complete the Required Visa Process",
          "text": "Qualified students accepted into eligible programs may be issued a Form I-20 and apply for an F-1 student visa subject to current immigration requirements. The visa eligibility of short-term certificate programs can vary based on the program format and institution."
        },
        {
          "title": "Get Ready for Departure",
          "text": "Book accommodation, travel, health insurance if required and university registration. Admission does not entitle you to a visa. Students should adhere to official US immigration guidance and the instructions of their university."
        }
      ]
    }
  ],
  "faqTitle": "FAQs (Frequently Asked Questions)",
  "faqs": [
    {
      "q": "Introduction to Marketing Management",
      "a": "Marketing Management is the art and science of choosing target markets and getting, keeping and growing customers through creating, delivering and communicating superior customer value."
    },
    {
      "q": "Can Indian students pursue Marketing Management in the USA after Class 12?",
      "a": "Yeah. Students who meet the academic and English language admission requirements are eligible for undergraduate marketing or related business programs."
    },
    {
      "q": "How long will it take to get a degree in Marketing Management?",
      "a": "Undergraduate programs typically last 4 years. Masters programs typically last one to two years, while doctoral programs may take approximately four to six years."
    },
    {
      "q": "Is Mathematics Mandatory For Marketing Management?",
      "a": "Every university and every program has different requirements. Other marketing pathways might not require as much mathematical preparation as marketing analytics and quantitative business courses."
    },
    {
      "q": "What is the cost to study Marketing Management in USA?",
      "a": "Undergraduate tuition may be anywhere from about USD 15,000 to USD 45,000 or more per year. Tuition for graduate students can be more. Additional living expenses and other charges."
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

const MarketingManagementAbroad = () => {
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
        path="/courses/marketing-management"
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

export default MarketingManagementAbroad;
