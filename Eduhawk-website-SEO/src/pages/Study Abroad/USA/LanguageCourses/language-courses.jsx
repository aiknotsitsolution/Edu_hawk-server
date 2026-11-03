import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/LanguageCourses/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/LanguageCourses/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/LanguageCourses/University of Michigan.webp";
import u1Img from "../../../../Images/Abroad/USA/LanguageCourses/Ann Arbor University of Arizona.webp";
import u2Img from "../../../../Images/Abroad/USA/LanguageCourses/University of Hawaiʻi at Mānoa.webp";
import u3Img from "../../../../Images/Abroad/USA/LanguageCourses/University of Southern California.webp";

const page = {
  "name": "Language Courses",
  "slug": "language-courses",
  "title": "Language Courses in USA for Indian Students | 2026 | Edu Hawk",
  "description": "Study language courses in the USA — English, ESL and other languages. Types of courses, duration, eligibility, entrance requirements, costs, top universities, careers and visa process.",
  "keywords": "Study Language Courses in USA for Indian Students, Best Universities for Language Courses in USA, English Language Courses in USA for International Students, Language Course Fees in USA for Indian Students, Language Course Admission Requirements in USA, Short-Term English Language Courses in USA, Bachelor's in Linguistics in USA for Indian Students, Master's in Applied Linguistics in USA, TESOL and TEFL Courses in USA for International Students, IELTS and TOEFL Preparation Courses in USA, Foreign Language Courses in USA for Indian Students, Language Course Scholarships in USA for International Students, Duration of Language Courses in USA, Career Opportunities After Studying Languages in USA, USA Student Visa for Language Courses",
  "introTitle": "Language Courses In The United States",
  "heroParas": [
    "Learning Languages Opportunities in the United States",
    "International students studying languages in the USA can develop their communication skills, improve their academic English, learn foreign languages and explore linguistics, translation, interpretation and intercultural communication."
  ],
  "overview": [
    "American universities, colleges and language institutes offer programs from short-term language courses to undergraduate degrees, postgraduate qualifications and research programs. Students can choose a course according to their academic background, language proficiency, career goals and duration they prefer.",
    "If you are an Indian student who wants to improve your English, get ready for university admission, learn a new language or build a career in language-related fields, the USA has a variety of learning pathways for you.",
    "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
  ],
  "level": "Short-term",
  "crumb": "Programs",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why Language Courses in the USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Enhance English language skills",
            "Study in an English-Speaking Environment",
            "Course Options Flexibility",
            "Try Different Languages",
            "Learn Intercultural Communication Skills",
            "Prepare for More Schooling"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Types of Language Courses Offered in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "The language education system in the USA comprises short-term courses, English-language programs, undergraduate degrees, postgraduate qualifications and specialist professional training.",
            "English Language Classes"
          ]
        },
        {
          "t": "ul",
          "items": [
            "General English",
            "English for Academic Purposes Academic English",
            "English Pronunciation & Speaking TOEFL & IELTS Preparation"
          ]
        },
        {
          "t": "p",
          "items": [
            "Programs for Bachelor Degree"
          ]
        },
        {
          "t": "ul",
          "items": [
            "BA in English",
            "BA Linguistics",
            "BA in Applied Linguistics",
            "Foreign Language, Bachelor of Arts",
            "B.A. in French",
            "B.A. German Language and Culture",
            "BA Chinese Studies",
            "Japanese Studies, Bachelor of Arts",
            "BA in Translation Studies"
          ]
        },
        {
          "t": "p",
          "items": [
            "Further Education Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master of Arts – Applied Linguistics",
            "Master of Arts in Linguistics .",
            "M.A. Teaching English to Speakers of Other Languages (TESOL)",
            "Master of Arts in Teaching English as a Foreign Language (TEFL)",
            "Master of Arts in Translation",
            "Master of Arts in Interpretive Arts",
            "Master of Arts in Teaching Foreign Languages",
            "English M.A."
          ]
        },
        {
          "t": "p",
          "items": [
            "PhD Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "PhD in Linguistics",
            "Ph.D. in Linguistics (Applied Linguistics)",
            "Ph.D. (English)",
            "Ph.D. in Second Language Acquisition."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Short Term Courses Certificate and Diploma Courses",
            "Other students also liked:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "E-Learn Certificate in English Language Learning",
            "Academic English Certificate Business English Certificate",
            "TESOL Certificate",
            "TEFL Certificate",
            "Certificate in Translation Studies",
            "Certificate in Applied Linguistics Certificate in Interpretation Certificate in Foreign Language Studies",
            "Certificate in Professional Communication",
            "Intensive English Programs",
            "Summer Language Immersion Programs",
            "Speaking and Pronunciation Classes"
          ]
        },
        {
          "t": "p",
          "items": [
            "Popular Language Specializations in the US"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Language and English Literature",
            "Linguistics",
            "Applied Linguistics",
            "TESOL",
            "Studies in Foreign Languages",
            "Second language learning",
            "Business Writing",
            "Language Technologie"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best universities to study languages courses in the USA",
      "groups": [],
      "lead": [
        "Here are some examples of institutions to research if you are interested in language study, linguistics, English-language education or similar academic programs. Not all the institutions offer all the above courses and their offering vary."
      ],
      "note": [],
      "unis": [
        {
          "name": "University of Michigan",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Ann Arbor University of Arizona",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "University of Hawaiʻi at Mānoa",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "University of Southern California",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of Course Program",
      "groups": [
        {
          "t": "p",
          "items": [
            "Typical Length",
            "Short term language course 1.",
            "Weeks to months (few)",
            "Intensive English Course",
            "Around 2-12 months depending on goals",
            "Academic English Program",
            "One semester to about one year",
            "Degree (undergraduate)",
            "~ 4 years",
            "Master of Arts",
            "1-2 years or so",
            "Doctoral degree",
            "Certificate program Typically 4 – 6 years or more"
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility Criteria for Indian Student",
      "groups": [
        {
          "t": "p",
          "items": [
            "Short Courses in English Language"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Applicants usually need to have:",
            "An academic background appropriate to the chosen course.",
            "Original Passport.",
            "An application form and any necessary supporting documents.",
            "English proficiency appropriate to the course, if required.",
            "Proof of sufficient funds for the planned study and stay.",
            "All other documents required by the institution."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Undergraduate Courses",
            "Students normally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of Intermediate from a recognized board.",
            "Academic achievements that satisfy the university’s requirements.",
            "English language skills when required.",
            "School transcripts and certificates.",
            "An essay or personal statement (if applicable).",
            "Letters of recommendation if needed.",
            "SAT or ACT scores, where required or where considered by the institution."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Post Graduate Courses",
            "Applicants should generally have:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Recognized Bachelor degree.",
            "Transcripts and degree certificates, academic.",
            "Scores on English Language Tests where needed.",
            "Statement of Purpose",
            "Résumé or curriculum vitae if required.",
            "Letters of recommendation (if applicable).",
            "Writing sample or research proposal for selected programs."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Doctoral Programs",
            "Applicants normally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A relevant bachelor's or master's degree (as per the program rules).",
            "Good academic background.",
            "Research statement / proposal",
            "Academic citations.",
            "An example of writing.",
            "English language proficiency where needed.",
            "Evidence of research planning (where appropriate).",
            "English Language Requirements",
            "Requirements may vary for English language programs and academic degree programs."
          ]
        },
        {
          "t": "p",
          "items": [
            "For academic degrees, international applicants may require one of the following:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "IELTS Academic TOEFL iBT",
            "PTE Academic Test",
            "Duolingo English Test"
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Language Courses in the USA Entrance Exams",
      "groups": [
        {
          "t": "p",
          "items": [
            "There is no common entrance examination for all the language programs.",
            "Depending on the course, applicants may need to have:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "An institutional English placement test,",
            "IELTS, TOEFL, PTE or other accepted english proficiency tests",
            "SAT or ACT for selective college undergraduate admissions",
            "GRE (if applicable) for selected PG programs",
            "a research proposal or writing sample for some graduate programs",
            "An interview or further assessment, as appropriate"
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Cost of English Language Courses in the US",
      "groups": [
        {
          "t": "p",
          "items": [
            "Costs vary according to the type of course, institution, program length, city and whether the student is enrolling in a short term language program or a full academic degree.",
            "Estimated Cost - Broad",
            "USD 500-2,500+ per month English language short course",
            "Tuition: undergraduate",
            "$20,000–50,000+/year USD",
            "Postgraduate tuition USD 20,000-55,000+ per annum",
            "Accommodation and food USD 10,000-22,000/year",
            "Books, Supplies, Personal Expenses",
            "Annual USD 1,000–4,000+"
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
          "t": "dl",
          "items": [
            "Funding options will vary depending on the type of course, level of study, institution and eligibility rules.",
            "University Scholarships:",
            "Certain universities provide financial aid to qualifying students pursuing a degree, based on merit or need.",
            "Fellowships, Graduate",
            "Some postgraduate and doctoral programs may provide fellowships, research support or teaching appointments.",
            "Awards by Department",
            "There may be awards for eligible students from language, linguistics or education departments.",
            "Scholarships outside",
            "Students may investigate external funding programs to support international education.",
            "Short Term Course Discount",
            "Some language centers may offer promotional rates or limited discounts, but these should not be expected."
          ],
          "pairs": [
            {
              "t": null,
              "d": "Funding options will vary depending on the type of course, level of study, institution and eligibility rules."
            },
            {
              "t": "University Scholarships:",
              "d": "Certain universities provide financial aid to qualifying students pursuing a degree, based on merit or need."
            },
            {
              "t": "Fellowships, Graduate",
              "d": "Some postgraduate and doctoral programs may provide fellowships, research support or teaching appointments."
            },
            {
              "t": "Awards by Department",
              "d": "There may be awards for eligible students from language, linguistics or education departments."
            },
            {
              "t": "Scholarships outside",
              "d": "Students may investigate external funding programs to support international education."
            },
            {
              "t": "Short Term Course Discount",
              "d": "Some language centers may offer promotional rates or limited discounts, but these should not be expected."
            }
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities for Language Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "Opportunities for a career depend on language proficiency, level of degree, additional qualifications, professional experience and work authorization.",
            "Career paths might include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "English Teacher (Secondary)",
            "Language Program Coordinator Translator Interpreter English as a Second Language (ESL) Teacher",
            "Research Assistant Linguistics",
            "Language Evaluation Specialist",
            "Curriculum Development Assistant",
            "International Student Support Professional",
            "Cross-Disciplinary Communications Specialist",
            "Content Editor or Writer",
            "Customer Support in Multiple Languages Localization Specialist - Professional",
            "Data Analyst – Language",
            "Researcher Academia",
            "Language Technology Professional, and relevant technical skills"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some teaching jobs require additional teaching credentials or state-specific certification. Depending on the employer and the field, professional translation and interpretation may require specialized training or subject matter expertise or certification."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa for Language Course Studies in the US",
      "groups": [
        {
          "t": "dl",
          "items": [
            "Visa requirements depend on the course, institution, length and type of study.",
            "F-1 Visa for Students",
            "Generally, students pursuing a full course of study at an institution certified by the Student and Exchange Visitor Program (SEVP) need an F-1 student visa, which is the most common visa type for international students.",
            "Short-Term studies",
            "Not all short term courses have the same visa requirements. Your eligibility for a visitor visa or other immigration category depends on the actual study activity and applicable US rules. Students should check the correct category before traveling.",
            "The process for an F-1 student is usually as follows:",
            "How to obtain a Form I-20."
          ],
          "pairs": [
            {
              "t": null,
              "d": "Visa requirements depend on the course, institution, length and type of study."
            },
            {
              "t": "F-1 Visa for Students",
              "d": "Generally, students pursuing a full course of study at an institution certified by the Student and Exchange Visitor Program (SEVP) need an F-1 student visa, which is the most common visa type for international students."
            },
            {
              "t": "Short-Term studies",
              "d": "Not all short term courses have the same visa requirements. Your eligibility for a visitor visa or other immigration category depends on the actual study activity and applicable US rules. Students should check the correct category before traveling."
            },
            {
              "t": "The process for an F-1 student is usually as follows:",
              "d": "How to obtain a Form I-20."
            }
          ]
        },
        {
          "t": "ul",
          "items": [
            "Paying the required SEVIS fee, if applicable.",
            "Completing the visa application online.",
            "Payment of the required visa application fee.",
            "Scheduling and attending a visa interview, if necessary.",
            "Submitting required financial, academic, identity and other supporting documents."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step by step",
      "title": "Admission In Language Courses USA",
      "groups": [],
      "lead": [],
      "steps": [
        {
          "title": "Decide What You Want",
          "text": "Think about what you want to do Do you want to improve your English conversation ? Do you want to study at university ? Do you want to learn a foreign language ? Do you want to study for a degree involving languages ?"
        },
        {
          "title": "Course Type",
          "text": "Short-term Courses, Intensive English, Certificates, Bachelor’s Degrees, Master’s Degrees and Doctoral Degrees: What’s the Difference?"
        },
        {
          "title": "Shortlist the institutions",
          "text": "Review curriculum, length of course, fees, location, student support, course times and entry requirements."
        },
        {
          "title": "Verify eligibility",
          "text": "Check the academic qualifications, language requirements, tests accepted, documentation and deadlines."
        },
        {
          "title": "Gather documents",
          "text": "Prepare transcripts, certificates, passport, personal statement, recommendations, test scores or research materials depending on the program."
        },
        {
          "title": "Submit Your Application",
          "text": "Follow the application process as directed by the institution and pay any applicable fees."
        },
        {
          "title": "Review Admissions and Costs",
          "text": "Check your offer, fee schedule, accommodation options, refund policy and other costs."
        },
        {
          "title": "Check Visa Necessities",
          "text": "Determine the appropriate visa type considering the course and school. Get any documentation you may need before you apply."
        },
        {
          "title": "Getting ready for arrival",
          "text": "Arrange accommodation, insurance, travel and any required orientation or placement assessment."
        }
      ]
    }
  ],
  "faqTitle": "F. A. Q. (Frequently Asked Questions)",
  "faqs": [
    {
      "q": "Are Indian students eligible for language courses in the USA?",
      "a": "Yes. Indian students are eligible to apply for English language courses, foreign language programs, certificates, undergraduate degrees, postgraduate qualifications and research programs provided they meet the institutional eligibility requirements."
    },
    {
      "q": "Am I able to come to the USA just to learn English?",
      "a": "Perhaps. Which one is appropriate depends on the course, the institution, the intensity of the study and the immigration rules that apply. Students need to check the correct visa category before traveling."
    },
    {
      "q": "What is the duration of the English course in the USA?",
      "a": "Short-term programs can be for weeks or months. Intensive programs can last for several months, while university degrees in language related subjects usually take several years."
    },
    {
      "q": "Do I have to do IELTS to register for an English language course?",
      "a": "Not necessarily. There are a number of language centers that offer placement tests and take beginners. Additional English proficiency requirements may be introduced for degree programs."
    },
    {
      "q": "What languages can I learn in the USA?",
      "a": "Depending on the institution, students may study Spanish, French, German, Chinese, Japanese, Korean, Arabic, Italian and other languages"
    },
    {
      "q": "How can Edu Hawk Worldwide Consultancy help me study abroad?",
      "a": "Edu Hawk Worldwide Consultancy provides students with an opportunity to research the right universities, requirements for admission, organize application documents and plan their study abroad journey. Students should consult the relevant authorities regarding requirements for academic, financial, immigration, and licensing."
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

const LanguageCoursesAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/study-abroad/language-courses"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/study-abroad/language-courses"} />
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

export default LanguageCoursesAbroad;
