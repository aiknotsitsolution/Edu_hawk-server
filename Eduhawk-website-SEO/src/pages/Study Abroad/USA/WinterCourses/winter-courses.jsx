import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/WinterCourses/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/WinterCourses/overview.webp";


const page = {
  "name": "Winter Courses",
  "slug": "winter-courses",
  "title": "Winter Courses in USA for Indian Students | 2026 | Edu Hawk",
  "description": "Study winter courses in the USA — short academic, business, technology and language programs. Duration, eligibility, costs, admission, visa considerations and career benefits for Indian students.",
  "keywords": "Study Winter Courses in USA for Indian Students, Best Universities for Winter Courses in USA, Short-Term Winter Programs in USA for International Students, Winter Course Fees in USA for Indian Students, Winter Session Eligibility Requirements in USA, Winter Courses in USA for Undergraduate Students, Winter STEM Programs in USA for International Students, Winter Business and Management Courses in USA, Winter English Language Courses in USA, Online Winter Courses in USA for International Students, Winter Course Scholarships in USA",
  "introTitle": "Winter Courses in USA for Indian Students",
  "heroParas": [
    "Study Winter Courses in USA",
    "USA universities have winter courses during the winter break that international students can take to learn new skills, explore academic interests, earn university credits and experience American campus life."
  ],
  "overview": [
    "Such programs can be short academic courses, English language training, business and technology programs, professional certificates and university winter sessions. Students can choose between online, hybrid or in-person learning, depending on the school.",
    "Edu Hawk worldwide consultancy helps students to know the international study options, understand the university admission standards and prepare for the overseas education journey."
  ],
  "level": "Short-term",
  "crumb": "Programs",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why Study During the Winter in the USA?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Short course study. Study selected courses for a few weeks."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Flexible Study Options: Choose from online, hybrid and on-campus programs (where available).",
            "Academic Credit Opportunities Some courses are accredited by universities and credits may be awarded (subject to program requirements and acceptance by your home institution).",
            "Career-Oriented Learning: Develop skills in business, technology, communication, research, and other areas.",
            "International Exposure: Get exposure to different teaching methods and interact with students from different backgrounds.",
            "Explore future study possibilities: Get to know the US education system before applying for a longer program"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Winter Course Types Available",
      "groups": [
        {
          "t": "p",
          "items": [
            "1. Business & Management",
            "2. Information Technologies and Computer Science.",
            "3. Engineering and STEM",
            "4. Classes in English language",
            "5. Health Sciences and Public Health",
            "6. Humanidades y Ciencias Sociales",
            "7. Art, Design and Media.",
            "8. Certificates and Professional Courses"
          ]
        }
      ]
    },
    {
      "slot": "degree-levels",
      "eyebrow": "Who can study",
      "title": "Winter Course Offerings by Degree Level",
      "groups": [
        {
          "t": "p",
          "items": [
            "High School Students: College prep, English language, STEM enrichment, leadership and cultural learning programs.",
            "Undergraduate Students :Winter-session academic courses, general education, business, technology and selected major-related subjects",
            "Graduate Students: Selected advanced courses, research-related learning, professional development & graduate certificates, where available",
            "Admission rules are different from program to program. Some winter sessions are restricted to students enrolled at the host university, and others are available to visiting or international students."
          ]
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of Winter Courses in USA",
      "groups": [
        {
          "t": "dl",
          "items": [
            "Winter courses are typically short and intensive, but the duration may differ depending on the institution and the nature of the course.",
            "One to Three Weeks: Selected workshops and intensive academic programs",
            "Three to Four Weeks: Many accelerated winter-session courses.",
            "Four to Eight Weeks or Longer: Some language, professional or specialized programs.",
            "Opportunities for Winter 2026-2027 & Winter 2027",
            "Some institutions in the United States offer winter-session courses between December and January. Here are a few examples:"
          ],
          "pairs": [
            {
              "t": null,
              "d": "Winter courses are typically short and intensive, but the duration may differ depending on the institution and the nature of the course."
            },
            {
              "t": "One to Three Weeks: Selected workshops and intensive academic programs",
              "d": "Three to Four Weeks: Many accelerated winter-session courses."
            },
            {
              "t": null,
              "d": "Four to Eight Weeks or Longer: Some language, professional or specialized programs."
            },
            {
              "t": "Opportunities for Winter 2026-2027 & Winter 2027",
              "d": "Some institutions in the United States offer winter-session courses between December and January. Here are a few examples:"
            }
          ]
        },
        {
          "t": "ul",
          "items": [
            "University of Connecticut: Winter Session runs from December 28, 2026, to January 15, 2027.",
            "University of Colorado Boulder: Winter Session from Dec. 14, 2026 to Jan. 4, 2027.",
            "San Diego State University: Winter Session, December 17, 2026 - January 14, 2027."
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
            "Eligibility is dependent on the course, institution and level of study. Normal requirements may include:",
            "An academic record of a satisfactory standard appropriate to the program."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of the required prior training.",
            "English language skills as per requirement.",
            "A valid passport for the length of the intended travel.",
            "Academic Records. Identification Documents. Application Forms.",
            "Other documents, such as a statement of purpose or letters of recommendation, if required.",
            "Proof of funds and valid immigration paperwork for travel and study, if applicable."
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
            "English is the language of instruction in many courses. Depending on the program, students may be required to demonstrate English language proficiency through IELTS, TOEFL, another approved test or the institution’s own assessment.",
            "Some short-term courses do not require a standardized English test, but students should check the specific requirements before applying."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance exam",
      "groups": [
        {
          "t": "p",
          "items": [
            "Most short term winter courses do not have the same entrance exams as full degree admissions. The requirements, however, differ."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Short-Term Academic Courses: Usually require transcripts and application.",
            "English Language Programs: Placement test may be required.",
            "Technical/Advanced Courses: Pre-requisites may include related previous coursework.",
            "Professional Certificates: May require previous experience or educational requirements.",
            "SAT, ACT, GRE or GMAT scores are usually only relevant if specifically asked for by the program or the associated degree admission process."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Cost of winter courses in the USA (approx.)",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost will depend on the university, the length of the course, the subject and the way it is delivered."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Tuition for short-term courses $500–4,000+",
            "Accommodation 500-2,000+",
            "Food and everyday expenses 250–700",
            "Local transport 50-200"
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
            "The availability and amount of financial support for short-term winter programs differs from Institute to Institute. The options are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Institution-specific scholarships or reductions in fees.",
            "Support when you need it.",
            "External education scholarships or sponsorship.",
            "Organized by the student's home institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Don't count on getting full scholarships for all winter courses. Check the eligibility, application deadlines and whether the funding covers tuition, accommodation, travel or living expenses."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step by step",
      "title": "Procedural Admission for Winter Courses",
      "groups": [
        {
          "t": "p",
          "items": [
            "Select Your Course: Choose the subject, length, and format of learning you would like."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Check Eligibility : Check academic, language, age and enrollment eligibility.",
            "Shortlisted universities: Compare course content, fees, dates, and location.",
            "Prepare documents Gather transcripts, passport details, English language proof and any other necessary paperwork.",
            "APPLY NOW: Please apply through the official admission process of the Institution.",
            "Confirm admission and make payment: Check the offer, payment schedule, refund policy and enrollment confirmation.",
            "Check Requirements for Immigration: Please confirm that you are in the right visa or immigration category before you make any travel plans.",
            "Ready to Go: Book accommodation, insurance, flights and any orientation required."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa Considerations",
      "groups": [
        {
          "t": "p",
          "items": [
            "The appropriate US immigration category will depend on the program and its structure. Some qualifying academic programs may require an F-1 student visa, and qualifying exchange programs may use the J-1 exchange visitor category. Not all short-term courses are included, but some short non-credit recreational courses might be held to different visitor rules."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Academic and Career Benefits",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can benefit from winter courses:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Explore a subject before choosing a full degree program",
            "Develop academic and communication skills.",
            "Learn about international teaching methods.",
            "Deepen subject knowledge through targeted study.",
            "Build an academic portfolio including relevant projects from the course.",
            "Explore future education and professional development opportunities.",
            "A short-term certificate is not an automatic professional licence, job guaranty or substitute for a recognized degree."
          ]
        }
      ]
    }
  ],
  "faqTitle": "Questions Frequently Asked",
  "faqs": [
    {
      "q": "What are winter courses in the US?",
      "a": "Winter courses are short-term academic or professional programs, usually offered from December to January during the winter break. Some institutions also offer winter programs that run into February."
    },
    {
      "q": "Can Indian students apply for winter courses in USA?",
      "a": "Yes, Indian students can apply for the programs that allow international or visiting students and meet the specified eligibility criteria."
    },
    {
      "q": "How long are the winter courses?",
      "a": "Winter sessions usually run for about three to four weeks, but some programs are shorter or longer."
    },
    {
      "q": "Are there winter courses online?",
      "a": "Yes. Several universities offer fully online winter sessions, while some programs provide in-person or hybrid learning. Some courses offer academic credit. Before you register, see if your current university will give you credit for those credits toward your current degree."
    },
    {
      "q": "How can Edu Hawk worldwide Consultancy help me to study abroad?",
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

const WinterCoursesAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/study-abroad/winter-courses"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/study-abroad/winter-courses"} />
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

export default WinterCoursesAbroad;
