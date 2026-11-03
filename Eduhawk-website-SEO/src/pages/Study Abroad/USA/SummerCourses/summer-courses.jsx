import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/SummerCourses/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/SummerCourses/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/SummerCourses/University of California Los Angeles (UCLA).webp";
import u1Img from "../../../../Images/Abroad/USA/SummerCourses/Harvard University.webp";
import u2Img from "../../../../Images/Abroad/USA/SummerCourses/University of California - Berkeley.webp";
import u3Img from "../../../../Images/Abroad/USA/SummerCourses/Pennsylvania University.webp";

const page = {
  "name": "Summer Courses",
  "slug": "summer-courses",
  "title": "Summer Courses in USA for Indian Students | 2026 | Edu Hawk",
  "description": "Study summer courses in the USA after Class 10, 11, 12 or graduation. Program types, age groups, duration, eligibility, universities, costs, scholarships, visa and admission process.",
  "keywords": "Study Summer Courses in USA for Indian Students, Best Universities for Summer Courses in USA, Short-Term Summer Programs in USA for International Students, Summer Course Fees in USA for Indian Students, Summer School Eligibility Requirements in USA, Summer Programs for High School Students in USA, STEM Summer Programs in USA for Indian Students, Business and Management Summer Courses in USA, Summer Research Programs in USA for International Students, English Language Summer Courses in USA, Summer Courses in USA with Certificates, Summer Course Scholarships in USA for International Students, Duration of Summer Programs in USA, USA Student Visa Requirements for Summer Courses, How to Apply for Summer Courses in USA from India",
  "introTitle": "Summer Courses in US",
  "heroParas": [
    "Summer courses in the USA provide students with the opportunity to acquire new skills, explore academic interests, experience university life, and gain international exposure in a short time period. Universities, colleges, language institutes and dedicated educational organizations deliver these courses.",
    "Students from India can choose from summer schools, pre-college programs, university-level courses, STEM workshops, business programs, English-language courses, arts and design workshops, and cultural learning experiences."
  ],
  "overview": [
    "Edu Hawk worldwide consultancy assists students in exploring international study options, understanding university admission norms and preparing for the overseas education journey."
  ],
  "level": "Short-term",
  "crumb": "Programs",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why take Summer Courses in the USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Learn in the Near Term",
            "International Academic Experience",
            "Investigate career interests",
            "Learning through Activities and Projects",
            "Campus experience",
            "Enhance Communication Skills",
            "Academic Credit Possibilities"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Types of Summer Courses Offered in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Summer School Classes",
            "Academic summer courses are available for students to explore subjects offered by universities and colleges.",
            "Popular areas:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Computer Science",
            "Information Technology",
            "Math Physics Chemistry Biology",
            "Business Management Economics",
            "Psychology",
            "Law & Legal Studies Political Science",
            "Architecture & Design",
            "Environmental Science",
            "International Relations",
            "STEM Summer Programs",
            "STEM programs focus on science, technology, engineering and math.",
            "Possible options are:",
            "Machine Learning and Artificial Intelligence",
            "Automation & Robotics",
            "Software Development & Coding",
            "Science & Analytics",
            "Cyber Security Engineering Design Biotech",
            "Environmental Science",
            "Science, Research & Mathematics",
            "Laboratory Based Science Programs",
            "Summer Programs in Business & Management",
            "Business oriented programs familiarize students with management concepts and professional skills."
          ]
        },
        {
          "t": "p",
          "items": [
            "Possible topics include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Management Business",
            "Entrepreneurship",
            "The Marketing Management",
            "Accounting and Finance International Business Business Analytics",
            "Economics Leadership & Management",
            "Strategy & Innovation",
            "Development of a startup"
          ]
        },
        {
          "t": "p",
          "items": [
            "Summer Medical & Health Sciences Courses",
            "Students interested in healthcare and life sciences may want to look at academic enrichment programs in the areas of:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Biology of Human",
            "Public Health",
            "Neurosciences Biomedical Science",
            "International Health Health Sciences",
            "Medical Research Principles",
            "Biotech Health Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Summer English Courses",
            "Students develop communication abilities through structured learning and practice using English language programs.",
            "Some common options are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "General English language",
            "English Intensive",
            "English for Academic Purposes",
            "English Conversations",
            "Pronunciation and Speaking",
            "English for business",
            "Academic Writing",
            "English Language Proficiency Test Prep",
            "Entry level requirements vary and some courses accept beginners.",
            "Summer Courses in Arts, Design and Creative"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students interested in creative fields might look into:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Design Graphic",
            "Fashion Design",
            "Architectural",
            "Design of Interiors",
            "Photos",
            "Film & Media Studies",
            "Animation",
            "Painting (Digital)",
            "Writing – Creative",
            "Walking Arts"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Summer Courses in Law and International Affairs",
            "Students interested in law and international relations may consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Introduction to Law",
            "International Affairs",
            "Human Rights",
            "Public Policy",
            "International Business Law Diplomacy",
            "Political Science Dispute Resolution",
            "International Trade World Governance"
          ]
        },
        {
          "t": "p",
          "items": [
            "The courses normally give you academic exposure rather than professional legal qualifications."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Leadership & Personal Development Programs",
            "Some summer programs aim to build transferable skills such as:",
            "Public Speaking",
            "Communication Skills",
            "Critical Thinkers",
            "Leadership",
            "Team work",
            "Problem Solving",
            "Entrepreneurship",
            "Discussion and Negotiation",
            "Project Management"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Popular Universities to Consider for Summer Courses",
      "groups": [],
      "lead": [
        "Below are a few examples of US universities that offer summer learning opportunities. Programs vary by institution and year in availability, eligibility, fees, and policies for international students."
      ],
      "note": [
        "Edu Hawk consultancy’s University selection guidance helps students compare suitable institutions based on their academic background, budget, preferred location and long-term professional goals."
      ],
      "unis": [
        {
          "name": "University of California Los Angeles (UCLA)",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Harvard University",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "University of California - Berkeley",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "Pennsylvania University",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "age-groups",
      "eyebrow": "Who can study",
      "title": "Summer programs for different age groups",
      "groups": [
        {
          "t": "p",
          "items": [
            "High School Students",
            "Pre-college summer programs offer eligible school students the chance to discover university-level subjects, workshops and an academic environment before entering higher education.",
            "Possible fields of study are STEM, business, social sciences, writing, arts and leadership.",
            "Admission may be contingent upon age, grade level, academic achievement, English proficiency and parental permission.",
            "Undergraduate Students",
            "University summer courses, research experiences, professional workshops, language programs or credit-bearing classes can be chosen by college students.",
            "Students need to confirm whether the program accepts visiting students from abroad and if there are any academic requirements.",
            "Graduate Students :",
            "Postgraduate students can enrolll in advanced courses, research workshops, specialized certificates and selected professional or academic programs.",
            "Research opportunities may require proper academic background, faculty member invitation, or departmental approval.",
            "Working Professional",
            "Professionals may look at executive education, short-term business courses, leadership training, technology workshops or industry-specific programs.",
            "Admission requirements and the recognition of certificates differ between providers."
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
          "t": "ul",
          "items": [
            "Type of Program",
            "Brief summer workshop",
            "Several weeks to a few days",
            "Summer school",
            "2-8 weeks or so",
            "U.S. summer school",
            "3-12 weeks",
            "English Language Course",
            "From a few weeks to several months",
            "STEM or research program",
            "2 to 10 weeks or so",
            "Summer program for high school students",
            "1–8 weeks",
            "Workshop of Arts and Design",
            "A few days to a couple weeks"
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility Conditions for Indian Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "The eligibility depends on the academic level, age group, duration and subject of the program.",
            "High School Kids",
            "Applicants may require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Enrolled in secondary school or completed a specified grade.",
            "School records or academic transcripts.",
            "A passport valid for the duration of the intended travel.",
            "Proficiency in English where required.",
            "A short essay/personal statement for application.",
            "Letters of recommendation where applicable.",
            "Minors require parental consent.",
            "Proof of funds for tuition and living costs."
          ]
        },
        {
          "t": "ul",
          "items": [
            "For Undergrad Students",
            "Candidates may need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 12 completion or pursuing a recognized undergraduate program depending on the course.",
            "Academic Transcripts",
            "English language where appropriate.",
            "A resume, statement of interest or personal essay.",
            "Letters of recommendation for particular programs.",
            "Subject(s) prerequisite for advanced courses."
          ]
        },
        {
          "t": "ul",
          "items": [
            "For Graduate Students",
            "You may need to apply for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Relevant Bachelor's degree or current postgraduate enrollment.",
            "Academic certificates",
            "A curriculum vitae or resume.",
            "Statement of purpose/research interests.",
            "English language skills, where appropriate.",
            "Relevant academic or professional experience for specialist courses"
          ]
        },
        {
          "t": "ul",
          "items": [
            "For Working Professionals",
            "You may need to apply for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Relevant qualifications",
            "Professional Experience for Selected Executive Programs",
            "A CV or professional profile.",
            "English language ability where needed.",
            "Additional documents as required by the provider."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English language requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "English language requirements vary by course and institution.",
            "Other accepted exams include TOEFL and PTE Academic. Others evaluate English by means of previous education, an interview, an institutional test or their own admission criteria."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "8 .Cost of Summer Courses in US",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost depends on the length of the program, the university, the level of the course, accommodation, meals, insurance and location.",
            "Summer short course fees",
            "USD 500–5,000+",
            "Intensive/University based program USD 2000-10000+",
            "Food and accommodation",
            "USD 1,000 – 3,500+ per month",
            "Flights to India",
            "USD 700-1,500+",
            "Transport and personal costs in the local area",
            "USD 300-1,000+"
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Scholarships & Financial Aid",
      "groups": [
        {
          "t": "p",
          "items": [
            "Summer programs have fewer scholarship opportunities than full-time degree programs, but some providers offer funding or discounts."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Awards Based on Merit",
            "Aid According to Needs",
            "University/Departmental Funding",
            "Funding from outside",
            "Early Bird Specials"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Benefits of Summer Courses",
            "Summer courses can assist students:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Research the field of study before you decide on a college major.",
            "Gain exposure to international teaching and learning contexts.",
            "Improve your academic English and communication.",
            "Gain knowledge of the subject area.",
            "Get involved in projects and workshops.",
            "Build confidence and independent learning skills.",
            "Meet students from different cultures.",
            "Explore academic or career interests for the future."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Visa Requirements for Summer Courses in the USA",
      "groups": [
        {
          "t": "dl",
          "items": [
            "Depending on the purpose of the program, academic credit, length, institution, and immigration rules, the appropriate US visa will differ. Students are advised to ensure they are traveling in the right category.",
            "F-1 Student Visa:",
            "May be used by students enrolled in eligible academic programs or qualifying English-language studies at a school certified by the Student and Exchange Visitor Program (SEVP).",
            "J-1 Exchange Visitor Visa",
            "May be available to eligible participants in approved exchange programs sponsored by authorized organizations.",
            "Visitor Visa for some short courses",
            "Some short recreational, non-credit courses may be permitted under the rules of a visitor visa. Not all summer programs permit this, and students should not assume that a visitor visa allows them to study academically for credit."
          ],
          "pairs": [
            {
              "t": null,
              "d": "Depending on the purpose of the program, academic credit, length, institution, and immigration rules, the appropriate US visa will differ. Students are advised to ensure they are traveling in the right category."
            },
            {
              "t": "F-1 Student Visa:",
              "d": "May be used by students enrolled in eligible academic programs or qualifying English-language studies at a school certified by the Student and Exchange Visitor Program (SEVP)."
            },
            {
              "t": "J-1 Exchange Visitor Visa",
              "d": "May be available to eligible participants in approved exchange programs sponsored by authorized organizations."
            },
            {
              "t": "Visitor Visa for some short courses",
              "d": "Some short recreational, non-credit courses may be permitted under the rules of a visitor visa. Not all summer programs permit this, and students should not assume that a visitor visa allows them to study academically for credit."
            }
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step by step",
      "title": "Summer Courses Admission Procedure in USA",
      "groups": [],
      "lead": [],
      "steps": [
        {
          "title": "Choose your Goal",
          "text": "Choose from academic enrichment, English language learning, university credit, research experience or professional development. 2. Choose Your Subject Choose a field, such as business, STEM, healthcare-related sciences, law, language, design, or social sciences."
        },
        {
          "title": "Choose the right programs",
          "text": "Compare university reputation, curriculum, program duration, location, residential options & learning outcomes"
        },
        {
          "title": "Verify Eligibility",
          "text": "Check age requirements, academic qualifications, language proficiency, application deadline and international student policies."
        },
        {
          "title": "Get Your Documents Ready",
          "text": "Get transcripts, passport information, application essays, recommendations, English test results, and parental consent where applicable."
        },
        {
          "title": "Put on",
          "text": "Apply through the official program portal and pay the application fee where applicable."
        },
        {
          "title": "Verify Admissions and Fees",
          "text": "Review admission offer, payment plan, refund policy, accommodation arrangements and total cost."
        },
        {
          "title": "Check Visa Regulations",
          "text": "Check with the institution for the correct visa category and seek official advice from the US government."
        },
        {
          "title": "Plan Your Trip",
          "text": "Organize accommodation, insurance, flights, airport transfers and any necessary program orientation."
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions (FAQS)",
  "faqs": [
    {
      "q": "What Are Summer Courses USA?",
      "a": "Summer courses are educational programs that are short-term and offered during the summer. They can be academic courses, language learning, pre-college programs, research experiences, professional training or creative workshops."
    },
    {
      "q": "Is it possible for Indian students to apply for summer courses in the USA?",
      "a": "Yes, Indian students can apply to eligible programs if they meet the age, academic, language, financial and other requirements of the institution."
    },
    {
      "q": "What is the duration of summer courses in USA?",
      "a": "They can last from a few days to a few weeks or a few months. Many university summer sessions are three to twelve weeks in length."
    },
    {
      "q": "Can Class 11 and Class 12 students participate in summer programs?",
      "a": "Some pre-college programs are open to high school students, including eligible students in Class 11 and 12. Minimum age, grade, English proficiency and parental consent requirements vary."
    },
    {
      "q": "Do you offer certificates for summer courses?",
      "a": "Some programs provide certificates of completion, while credit-bearing courses may provide academic credit and a transcript. Students should check what documentation is awarded before enrolling."
    },
    {
      "q": "How can Edu Hawk Worldwide Consultancy help me study abroad?",
      "a": "Edu Hawk worldwide can help students to explore suitable universities, understand admission requirements, organize application documents, and plan their study abroad journey. Students should consult the relevant authorities regarding requirements for academic, financial, immigration, and licensing."
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

const SummerCoursesAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/study-abroad/summer-courses"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/study-abroad/summer-courses"} />
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

export default SummerCoursesAbroad;
