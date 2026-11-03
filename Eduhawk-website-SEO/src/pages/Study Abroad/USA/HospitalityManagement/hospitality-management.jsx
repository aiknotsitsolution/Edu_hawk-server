import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/HospitalityManagement/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/HospitalityManagement/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/HospitalityManagement/Pennsylvania State University.webp";
import u1Img from "../../../../Images/Abroad/USA/HospitalityManagement/University of South Florida.webp";

const page = {
  "name": "Hospitality Management",
  "slug": "hospitality-management",
  "title": "Hospitality Management in USA for Indian Students | 2026 | Edu Hawk",
  "description": "Study Hospitality Management in the USA. Undergraduate, postgraduate and doctorate programs, specialisations, eligibility, duration, costs, scholarships, careers and visa process for Indian students.",
  "keywords": "Hospitality Management in USA for Indian Students, Best Universities for Hospitality Management in USA, Hospitality Management Courses in USA, Hospitality Management Admission Requirements in USA, Hospitality Management Fees in USA for Indian Students, Hospitality Management Scholarships for International Students, Hospitality Management Eligibility After Class 12, Bachelor's in Hospitality Management in USA, Master's in Hospitality Management in USA, Hotel Management Courses in USA for Indian Students, Hospitality Management Specializations in USA, Hospitality Management Course Duration in USA, Career Opportunities After Hospitality Management Degree, Hospitality Management Without Work Experience in USA, USA Student Visa for Indian Hospitality Management Students",
  "introTitle": "Hospitality Management in USA",
  "heroParas": [
    "Hospitality Management in the USA provides students with the opportunity to develop business, leadership, customer service and operational management skills for the global hospitality industry. The United States provides a variety of programs in hotel management, tourism, restaurant operations, event planning, resort management and hospitality business leadership.",
    "Depending on your academic background and career goals, you can choose from undergraduate degrees, postgraduate programs, associate degrees, professional certificates and doctoral studies."
  ],
  "overview": [],
  "level": "UG & PG",
  "crumb": "Courses",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why Study Hospitality Management in the USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Industry-Oriented Education: Gain knowledge of hospitality operations, business strategy, marketing, finance, and customer experience management.",
            "Hands-on learning: Seek out programs that offer projects, simulations, industry exposure or internships.",
            "Specialization choices: Hotel operations, food and beverage, tourism, events, luxury hospitality or resort management.",
            "International Learning Environment: Learn with students from all over the world with different backgrounds.",
            "Flexible Study Pathways: Associate, Bachelor’s, Master’s, Doctoral and Certificate programs.",
            "Global Career Readiness. Develop skills needed for the hospitality and service industries in the USA and other global markets."
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
      "title": "Types of Hospitality Management Courses in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "1. Undergraduate Programs",
            "The undergraduate programs are designed for students who have completed Class 12 or equivalent education.",
            "Potential course offerings may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor of Science, Hospitality Management",
            "Bachelor's Degree in Hospitality & Tourism Management",
            "B.S. in Hotel Management",
            "Bachelor of Science in Global Hospitality Leadership",
            "B.Sc. in Tourism Management",
            "Bachelor of Arts in Hospitality Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Length: Typically 4 years, varying with the degree and institution.",
            "2. Postgraduate Courses",
            "Postgraduate programs are for graduates who wish to develop advanced management, leadership, analytical or specialized hospitality skills.",
            "Popular choices include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "M.S. in Hospitality Management",
            "Master of Science in Tourism & Hospitality Management",
            "Master of Management in Hospitality",
            "Master of Science in Hospitality Business Management",
            "MSc International Hospitality and Tourism Management",
            "Master of Business Administration with a specialization in hospitality",
            "Executive Masters in Hospitality Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Duration: Typically 1-2 years, depending on the program and mode of study..",
            "3. Doctorate programs",
            "Students who are interested in research, university teaching or senior academic careers may consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Ph.D. in Hospitality and Hotel Management",
            "PhD in Hospitality and Tourism Management",
            "Ph.D. in Tourism Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Duration: Typically 3–6 years depending on research needs and progress."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best Universities to Study Hospitality Management in USA",
      "groups": [],
      "lead": [
        "The following institutions provide hospitality related academic programs. Before shortlisting, check the current course title, campus, eligibility and international admissions requirements."
      ],
      "note": [],
      "unis": [
        {
          "name": "Pennsylvania State University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "University of South Florida",
          "desc": "",
          "img": u1Img
        }
      ]
    },
    {
      "slot": "specialisations",
      "eyebrow": "Specialisations",
      "title": "Top Specializations in Hospitality Management",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Hotel and Resort Management: Get information on lodging operations, guest services, housekeeping, front-office management, and property operations.",
            "Food and Beverage Management: Learn about restaurant operations, food service management, purchasing, budgeting and service quality.",
            "Tourism Management: Learn about tourism operations, travel services, visitor experiences, destination development.",
            "Event Management: Find out about conferences, corporate events, festivals, exhibitions and special occasions.",
            "Luxury Hospitality Management: Focus on excellent guest experiences, luxury hotels, service standards and brand management.",
            "Revenue & Hospitality Finance Discover pricing strategies, budgeting, financial analysis and revenue optimization.",
            "Hospitality Marketing Learn hospitality sales, branding, digital marketing and customer relationships.",
            "Resort & Recreation Management: Study resort operation, leisure services, recreation facilities, guest engagement.",
            "Cruise and Club Management – Covering specialist operations in cruise hospitality, private clubs and recreational properties where applicable."
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Indian Students Eligibility Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Undergraduate Degree Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th pass or equivalent from recognized board.",
            "Academic scores which meet the admission standards of the university.",
            "English skills, if needed.",
            "Supporting documents and academic transcripts.",
            "Valid international passport for study.",
            "For Master’s Degree Programs",
            "A recognized undergraduate degree.",
            "Degree certificates and academic transcripts.",
            "If applicable, English language test scores.",
            "Statement of purpose, résumé or letters of recommendation, where requested.",
            "Relevant work experience (where required for programmes)."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some postgraduate programs may be open to students from related disciplines such as business, tourism, hotel administration and management. Some programs will take students from other academic backgrounds."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Eligibility",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students might need to provide evidence of their English language skills in one of the following ways:",
            "IELTS Academic TOEFL iBT",
            "PTE Academic",
            "Where accepted Duolingo English Test",
            "University-specific assessment or approved alternative",
            "Required score varies with institution and program. Some courses may give exemptions for previous education or other criteria."
          ]
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of the Course",
      "groups": [
        {
          "t": "p",
          "items": [
            "Bachelor's Degree",
            "About 4 years",
            "Master’s Degrees",
            "MBA in Hospitality 1–2 years",
            "Diploma Around 1-2 years",
            "Certificate Course",
            "Weeks to months (a few)",
            "Doctorate",
            "3-6 years or so",
            "These are rough estimates. Accelerated, part-time, online and joint-degree programs may have different deadlines."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Cost of Studying Hospitality Management in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Total cost varies by institution, level of degree, campus location, and length of program.",
            "Cost Estimated annual cost in USD",
            "Tuition Price",
            "15,000–45,000+",
            "Accommodation 8,000–18,000",
            "Personal and food expenses",
            "3,000–7,000",
            "Local transport 600-2,000",
            "Books, supplies and other costs",
            "500–1,500",
            "These are broad planning estimates, not official university quotes. Private universities and specialized programs can be more expensive. Other course costs may be applicable including insurance, travel and deposits.\\"
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
            "International students may find financial assistance through:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Merit scholarships for university.",
            "Need-based assistance – Available for international students.",
            "Departmental awards and scholarships from hospitality schools.",
            "Sponsorships and external scholarships.",
            "Graduate assistantships (when available and allowed)."
          ]
        },
        {
          "t": "p",
          "items": [
            "Scholarships are competitive and may require separate application criteria. Funding is not guaranteed and students should check to see if the award is for tuition only or living expenses as well."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities in Hospitality Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "Potential caree paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Front Office Manager Hotel Operations Manager Guest Relations Manager Restaurant Manager Food and Beverage Manager Event Coordinator Conference and Banquet Manager Tourism Operations Executive",
            "Hospitality Marketing Executive Resort Operations Manager",
            "Revenue Management Analyst Hospitality Business Development Manager",
            "Career progression is based on qualifications, relevant experience, employer requirements, location and individual performance. Industry experience is usually a prerequisite for top executive positions."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step by step",
      "title": "Indian Students Admission Process",
      "groups": [],
      "lead": [],
      "steps": [
        {
          "title": "Pick Your Program Find out if you are interested in an associate degree, bachelor’s degree, master’s degree, MBA, diploma or certificate.",
          "text": ""
        },
        {
          "title": "Check Eligibility Check academic, English language and experience requirements.",
          "text": ""
        },
        {
          "title": "Shortlisting Universities: Compare curriculum, fees, location of campus, internships and career resources.",
          "text": "4. Document Preparation: Get transcripts, passport information, English exam scores and any essays or recommendations that are required."
        },
        {
          "title": "Complete Your Application Use the official admissions portal of the university.",
          "text": ""
        },
        {
          "title": "Review Your Offer: Review tuition, deposits, scholarship conditions and refund policies.",
          "text": ""
        },
        {
          "title": "Make Financial Arrangements Prepare proof of financial resources and budget for tuition and living expenses.",
          "text": ""
        },
        {
          "title": "Fulfilll Visa Requirements: Follow the instructions of the institution and official US student visa guidance.",
          "text": ""
        },
        {
          "title": "Prepare for departure: Book accommodation, insurance, travel and university orientation.",
          "text": ""
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa USA for Hospitality Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students may apply for an F-1 student visa for a full-time academic program if the institution and program meet the necessary requirements. In the case of short-term or exchange programs the arrangements for immigration might differ.",
            "Students must ensure the institution is approved to enroll international students in the course of study they wish to pursue and observe the official visa process. Admission is not a guarantee of visa approval."
          ]
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions",
  "faqs": [
    {
      "q": "Is the USA a good place for Hospitality Management?",
      "a": "The USA has a range of hospitality programs with courses that focus on business and practical learning experiences. Students should evaluate the curriculum, costs and industry links of each program."
    },
    {
      "q": "Is Hospitality Management a course for Indian students after 12th?",
      "a": "Yes. Students who meet the academic, language and other admission requirements may apply for appropriate undergraduate programs."
    },
    {
      "q": "What Is the Duration of a Hospitality Management Degree?",
      "a": "A bachelor’s degree typically is 4 years, and a master’s degree takes 1 to 2 years."
    },
    {
      "q": "Do I need to have work experience for a master’s?",
      "a": "Not all the time. Some programs will accept recent graduates, other prefer or need relevant professional experience."
    },
    {
      "q": "Does Hospitality Management in USA require IELTS?",
      "a": "This differs from university to university. Some will accept other English tests or grant exemptions under specific conditions."
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

const HospitalityManagementAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/courses/hospitality-management"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/courses/hospitality-management"} />
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

export default HospitalityManagementAbroad;
