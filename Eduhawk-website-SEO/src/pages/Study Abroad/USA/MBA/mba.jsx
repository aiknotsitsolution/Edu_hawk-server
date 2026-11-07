import { formatRichText, EligibilityCtaCard } from "../../../../component/CoursePageKit";
import React, { useEffect, useRef, useState } from "react";
import SeoHead from "../../../../component/SeoHead";
import heroImg from "../../../../Images/Abroad/USA/MBA/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/MBA/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/MBA/Harvard Business School.webp";
import u1Img from "../../../../Images/Abroad/USA/MBA/Stanford University's Stanford Graduate School of Business.webp";
import u2Img from "../../../../Images/Abroad/USA/MBA/The University of Pennsylvania's Wharton School.webp";

const page = {
  "name": "MBA",
  "slug": "mba",
  "title": "MBA in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study MBA in the USA for Indian students. Programs and specialisations, duration, eligibility, GMAT and GRE, tuition, scholarships, top business schools, careers and F-1 student visa process with Edu Hawk Worldwide.",
  "keywords": "Study MBA in USA for Indian Students, Best MBA Universities in USA, MBA Admission Requirements in USA for Indian Students, Top MBA Colleges in America, MBA Courses and Specializations in USA, MBA Tuition Fees in USA for Indian Students, MBA Scholarships for Indian Students in USA, One-Year MBA Programs in USA for International Students, MBA Eligibility After Graduation in India, GMAT and GRE Requirements for MBA in USA, English Language Tests for MBA Admission in USA, MBA Without Work Experience in USA, Career Opportunities After MBA in USA, MBA in Finance and Business Analytics in USA, USA Student Visa for Indian MBA Students",
  "introTitle": "MBA in the United States",
  "heroParas": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "overview": [],
  "level": "Postgraduate",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why Pursue an MBA in the United States?",
      "groups": [
        {
          "t": "p",
          "items": [
            "With its business schools offering thorough management education, leadership development programs, real-world business projects, and exposure to global business environments, the **United States** is a top choice for **Master of Business Administration (MBA)** programs.",
            "Developing skills in strategic planning, finance, marketing, operations, entrepreneurship, and organizational leadership is made easier with an MBA. Students may also gain from industry-based projects, networking opportunities, internship placements, and career development services, depending on the school.",
            "The main benefits of pursuing an MBA in the US"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Globally Recognized Credentials:** Attend reputable business schools with a wide range of professional and academic networks.",
            "**Leadership Competency Development:** Develop your ability to make decisions, communicate, and manage.",
            "Learn through case study analysis, business simulations, group projects, and real-world business situations.",
            "**Specialization Pathways:** Choose areas of focus such as technology management, marketing, finance, business analytics, or entrepreneurship.",
            "Develop relationships with colleagues, former students, instructors, and business stakeholders through professional networking.",
            "Support for Career Advancement: When appropriate, make use of internship programs, recruitment campaigns, and career coaching.",
            "Gain knowledge of business processes in various industries, cultural contexts, and foreign marketplaces by adopting a global business perspective."
          ]
        },
        {
          "t": "p",
          "items": [
            "Edu Hawk Worldwide Consultancy helps students prepare for their international education journey, understand university admission requirements, explore pathways like [BBA in the USA](/study-abroad/usa/bba), [Executive MBA](/study-abroad/usa/executive-mba), and [International Business](/study-abroad/usa/international-business), and [get personalized counselling](/contact). Explore our [admission FAQs](#faq) and [top universities in the USA](#universities)."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "MBA Programs and Specializations in the United States",
      "groups": [
        {
          "t": "p",
          "items": [
            "To accommodate students with a range of educational backgrounds, career aspirations, and work experiences, MBA programs are offered in several forms.",
            "Common Formats for MBA Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Full-Time MBA:** An extensive program designed for students who are able to devote themselves fully to their studies.",
            "**Part-Time MBA:** Designed for students who want to continue working while attending graduate school.",
            "Senior managers and seasoned professionals are the target audience for the executive MBA program.",
            "Some business schools provide an intensive accelerated one-year MBA program.",
            "Conventional Two-Year MBA: This traditional structure may provide options for career exploration, elective coursework, and internships."
          ]
        },
        {
          "t": "p",
          "items": [
            "Universities differ in terms of program availability, length, and eligibility. International students applying for an **F-1 student visa** may be eligible differently for online and part-time forms.",
            "Popular Specializations in MBA"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Finance MBA",
            "Marketing MBA",
            "Business Analytic MBA",
            "International Business MBA",
            "Human Resource Management MBA",
            "Entrepreneurship MBA",
            "Operations and Supply Chain Management MBA",
            "[MBA in Technology Management]",
            "Healthcare Management MBA",
            "Project Management MBA"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Top US Universities for MBA Programs",
      "groups": [],
      "lead": [
        "The business schools listed below are acknowledged for their superior MBA programs. Instead of relying just on institutional rankings, prospective students should consider program design, **tuition fees**, student composition, career assistance services, and admission requirements."
      ],
      "note": [],
      "unis": [
        {
          "name": "Harvard Business School",
          "desc": "renowned for its case-study approach and emphasis on strategic management, analytical decision-making, and executive leadership.",
          "img": u0Img
        },
        {
          "name": "Stanford University's Stanford Graduate School of Business",
          "desc": "offers an MBA program with a focus on organizational leadership, business growth, executive development, and technological innovation.",
          "img": u1Img
        },
        {
          "name": "The University of Pennsylvania's Wharton School",
          "desc": "renowned for its extensive business curriculum, with a focus on organizational management, quantitative analysis, and financial markets.",
          "img": u2Img
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of an MBA Course",
      "groups": [
        {
          "t": "p",
          "items": [
            "Type of MBA Program -Average Duration"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MBA program full-time - 1-2 years",
            "MBA for a year - Ten to sixteen months",
            "MBA for two years - About 20 to 24 months",
            "MBA Part-Time - About two to four years",
            "MBA for executives - About 18 to 24 months",
            "MBA online - One to three years or more"
          ]
        },
        {
          "t": "p",
          "items": [
            "These times are representative. While part-time and online programs could offer more flexibility, accelerated programs might entail demanding schedules."
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Qualifications for Indian Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "Requirements for admission to MBA programs vary significantly among universities, programs, specific concentrations, and candidate attributes.",
            "Academic Background"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The following academic requirements are usually required of potential  candidates:having a **bachelor's degree** from an approved or other recognized university.",
            "submission of degree documentation and certified **academic transcripts**.",
            "demonstration of academic success in line with the requirements for admission set by the institution.",
            "completion of any further preparatory coursework that may be required by the program."
          ]
        },
        {
          "t": "p",
          "items": [
            "It is not always required to have a **bachelor's degree** in business administration. Applicants with undergraduate training in engineering, natural sciences, commerce, humanities, and other disciplines are often accepted by educational institutions.",
            "Experience in the Workplace"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Expectations for professional experience show significant variation between MBA programs.",
            "Some full-time MBA schools show a preference for applicants with prior professional experience.",
            "Candidates who have demonstrated several years of significant full-time professional activity are highly valued in many esteemed traditional MBA programs.",
            "Some deferred-enrollment or early-career programs accept applicants with relatively little work experience.",
            "The recruitment of seasoned professionals and organizational executives is the main focus of executive MBA programs.",
            "The median professional experience of the cohort and the particular minimal requirements set by each program should be examined by candidates."
          ]
        },
        {
          "t": "p",
          "items": [
            "Academic Background"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Typically, applicants require:",
            "a valid **bachelor's degree** from a school that has been approved or otherwise recognized.",
            "degree certificates and **academic transcripts**.",
            "academic achievement that satisfies the requirements for admission to the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "extra requirements coursework, if the program calls for it.",
            "Universities could ask for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Curriculum vitae or resume",
            "MBA essays or **Statements of Purpose (SOP)**",
            "**Letters of recommendation (LOR)**",
            "Test results in English, if necessary",
            "**GMAT or GRE** results, if necessary",
            "Conversations",
            "Information about leadership, extracurricular pursuits, or career accomplishments"
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "Language Requirements in English",
      "groups": [
        {
          "t": "p",
          "items": [
            "Unless they are eligible for an exemption under the university's rules, foreign applicants might have to prove their English language skills.",
            "Tests That Are Often Accepted"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic IELTS",
            "iBT for the TOEFL",
            "Academic PTE",
            "The acceptable Duolingo English test"
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "GRE and GMAT",
      "groups": [
        {
          "t": "p",
          "items": [
            "Business schools evaluate candidates based on a variety of factors, including academic credentials, test results, work experience, essays, references, and interviews.",
            "GMA - Many business schools assess skills related to graduate management studies using the Graduate Management Admission Test (GMAT). While some MBA programs grant waivers or accept it as an option, others demand it.",
            "GRE - Many business schools accept the Graduate Record Examination (GRE) as a substitute for the GMAT. Policies for acceptance and waiver differ."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Living Expenses and MBA Tuition in the United States",
      "groups": [
        {
          "t": "p",
          "items": [
            "The business school, program length, location, housing, health insurance, and personal expenses all affect the total cost of an MBA.",
            "Estimated Cost of Tuition"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Category of MBA Programs",
            "Total Indicative Tuition",
            "MBA programs that are less expensive",
            "Between $20,000 and $45,000 USD",
            "MBA programs in the middle range",
            "Between $45,000 and $90,000 USD",
            "Premium or highly regarded MBA programs",
            "90,000–180,000 USD or more"
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Financial Aid and MBA Scholarships",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Indian students** may be eligible for employer-sponsored help, external financial sources, business school awards, and university scholarships. The particular institution, the applicant's qualifications, the program's nature, and the institution's finance structure all influence whether or not such financial aid is available.",
            "Typical Funding Choices"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Merit-Based Scholarships: These grants may take into account an applicant's overall quality as well as their professional and academic achievements and leadership qualities.",
            "Need-Based Financial Assistance: Selected institutions offer this kind of support in compliance with their financial aid policies and eligibility requirements.",
            "International Student Scholarships: Some universities offer scholarships created especially for eligible foreign applicants.",
            "Leadership and Diversity Awards: Some business schools give out scholarships based on professional experience, leadership potential, or other institution-specific criteria.",
            "Employer Sponsorship: Subject to organizational norms and contractual requirements, some organizations offer financial assistance to employees who are pursuing an MBA."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Opportunities for Employment in the USA Following an MBA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Numerous industries, such as banking, consulting, technology, healthcare, manufacturing, retail, and professional services, might benefit from an MBA.",
            "Popular Career Paths"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Analyst of Business",
            "Consultant for Management",
            "Analyst of finances",
            "Manager of Marketing",
            "Manager of Products",
            "Manager of Business Development",
            "Manager of Operations",
            "Manager of Projects",
            "Analyst of Strategy",
            "Manager of Human Resources",
            "Manager of the Supply Chain",
            "Entrepreneur or Company Owner"
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Application Process for Student Visas and MBA",
      "groups": [],
      "lead": [
        "The **F-1 student visa** is the conventional authorization for academic pursuits, and **Indian students** wishing to enrolll full-time in authorized MBA programs in the **United States** usually need an appropriate student visa."
      ],
      "steps": [
        {
          "title": "Decide on an MBA program",
          "text": "Establish your career goals and choose the right program structure, enrollment duration, and concentration."
        },
        {
          "title": "Create a Shortlist for Business School",
          "text": "Examine and contrast institutional elements such as entrance requirements, financial aid opportunities, career assistance services, student demographics, geographic location, academic curriculum, and tuition expenses."
        },
        {
          "title": "Evaluate Eligibility Conditions",
          "text": "Check your educational background, professional experience requirements, language proficiency requirements, GMAT or GRE requirements, and application deadlines."
        },
        {
          "title": "Assemble the Application Materials",
          "text": "Compile official transcripts, degree paperwork, curriculum vitae, academic references, personal statements, exam results, and any additional information."
        },
        {
          "title": "Send in Your Application Materials",
          "text": "Finish the application procedure using the online platform that each school has specified, and send in the necessary application fees."
        },
        {
          "title": "If applicable, take part in the interview process",
          "text": "Get ready to discuss your work history, desired career path, proven leadership skills, and institutional fit justification."
        },
        {
          "title": "Assess Admission Choices",
          "text": "Examine the elements of the offer, such as the deadlines for enrollment confirmation, financial aid packages, tuition deposit requirements, and conditional clauses."
        },
        {
          "title": "Obtain Form I-20 Records",
          "text": "Qualified applicants obtain the Form I-20 certificate after meeting institutional requirements and demonstrating sufficient financial resources."
        },
        {
          "title": "Complete the Visa Application Process",
          "text": "Pay the SEVIS fee, finish the paperwork for your visa application, arrange any necessary consular interviews, and gather supporting documentation."
        },
        {
          "title": "Complete Pre-Departure Plans",
          "text": "Obtain health insurance, arrange travel, find lodging, and finish university enrollment processes while abiding by relevant immigration laws and regulations."
        }
      ]
    }
  ],
  "faqTitle": "FAQs, or frequently asked questions",
  "faqs": [
    {
      "q": "1t. Can Indian students study for an MBA in the US?",
      "a": "Yes . After meeting the relevant academic requirements, English language proficiency levels, standardized test requirements, and other institutional admission criteria, Indian students with an accredited bachelor's degree** are eligible to apply to MBA programs."
    },
    {
      "q": "How long does an MBA program in the US typically last?",
      "a": "Most full-time MBA programs take one to two years to complete. Programs for executive, distance, and part-time study may have different timelines."
    },
    {
      "q": "Does enrolling in an MBA program in the United States require professional work experience?",
      "a": "Not everyplace. While some early-career schools accept students with little experience, many traditional MBA programs heavily emphasize professional experience. On the other hand, executive MBA programs are primarily intended for seasoned professionals."
    },
    {
      "q": "Does admission to an MBA program require passing the GMAT?",
      "a": "No. While some universities require the GMAT, others accept the GRE, offer exam waivers, or have test-optional admissions policies."
    },
    {
      "q": "What is the total cost of an MBA in the United States?",
      "a": "Depending on the business institution and particular program format, aggregate tuition costs might vary from about USD 20,000 to USD 180,000 or more. Additional charges are incurred individually and include lodging, health insurance, and other expenses."
    },
    {
      "q": "How can I study abroad with the assistance of Edu Hawk Worldwide Consultancy?",
      "a": "Students may plan their study abroad experience, organize their application materials, research appropriate universities, and comprehend admission requirements with the assistance of Edu Hawk Worldwide. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs."
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

const MbaAbroad = () => {
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
        path="/study-abroad/usa/mba"
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
                  srcSet={`${heroImg} 1x, ${heroImg} 2x`}
                  sizes="100vw"
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
                  srcSet={`${sideImg} 1x, ${sideImg} 2x`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                  srcSet={`${u.img} 1x, ${u.img} 2x`}
                  sizes="(max-width: 768px) 100vw, 50vw"
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
        if (s.slot === "eligibility") {
          return (
            <section key={idx} className={"py-14 sm:py-16 " + shade} id="eligibility">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                  <div>
                    <SectionHeading eyebrow={s.eyebrow} title={s.title} />
                    <Groups groups={s.groups} />
                  </div>
                  <div className="lg:pt-6">
                    <EligibilityCtaCard level={page.level} />
                  </div>
                </div>
              </div>
            </section>
          );
        }
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

export default MbaAbroad;
