import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../Images/Abroad/USA/Law/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/Law/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/Law/Harvard University.webp";
import u1Img from "../../../../Images/Abroad/USA/Law/Yale.webp";
import u2Img from "../../../../Images/Abroad/USA/Law/Columbia University.webp";
import u3Img from "../../../../Images/Abroad/USA/Law/Chicago University.webp";

const page = {
  "name": "Law",
  "slug": "law",
  "title": "Study Law in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Law in the USA after Class 12 or graduation. Law courses, specialisations, duration, eligibility, LSAT, tuition fees, scholarships, top universities, careers, admission and visa process.",
  "keywords": "Study Law in USA for Indian Students, Best Law Universities in USA for International Students, Law Courses in USA After 12th, Juris Doctor (JD) in USA for Indian Students, LLM in USA After LLB in India, Law Admission Requirements in USA, Law Course Fees in USA for Indian Students, Law Scholarships in USA for International Students, LSAT Requirements for Law Schools in USA, English Language Tests for Law Admission in USA, Law Specializations in USA for International Students, Duration of Law Courses in USA, Career Opportunities After Studying Law in USA, Lawyer Licensing Requirements in USA, USA Student Visa for Indian Law Students",
  "introTitle": "Law in the United States",
  "heroParas": [
    "Studying Law in the USA gives students an opportunity to learn about the legal systems, constitutional principles, international regulations, business law, human rights and dispute resolution. American law schools focus on legal research, analytical reasoning, case analysis, writing, advocacy and practical learning.",
    "The United States offers Indian students a range of undergraduate, postgraduate, doctoral and specialized legal education options, for those interested in pursuing a career in legal practice, corporate law, international relations, compliance, policy research or academia."
  ],
  "overview": [
    "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
  ],
  "level": "UG & PG",
  "crumb": "Courses",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Why study law in the US?",
      "groups": [
        {
          "t": "dl",
          "items": [
            "1. Different Ways to a Legal Education",
            "Students may select from undergraduate legal studies, the Juris Doctor (JD), Master of Laws (LLM) and doctoral programs according to their qualifications and objectives.",
            "2. Legal Education (Specialised)",
            "American law schools offer courses covering topics such as corporate law, intellectual property, international law, technology law, environmental law, human rights and other specialized fields.",
            "3. Real-World Learning",
            "Many programs include legal research, moot courts, simulations, clinical education, internships and supervised practical experiences.",
            "4. Global Exposure",
            "Students can look at legal issues concerning international trade, transnational transactions, global regulation, and comparative law.",
            "5. Industry Networking",
            "Law schools might offer access to alumni networks, legal conferences, guest lectures, professional associations, and employer engagement opportunities.",
            "6. Studies: Interdisciplinary",
            "Some programs allow for the combination of law with selected disciplines such as business, economics, public policy, technology, international affairs and others."
          ],
          "pairs": [
            {
              "t": "Different Ways to a Legal Education",
              "d": "Students may select from undergraduate legal studies, the Juris Doctor (JD), Master of Laws (LLM) and doctoral programs according to their qualifications and objectives."
            },
            {
              "t": "Legal Education (Specialised)",
              "d": "American law schools offer courses covering topics such as corporate law, intellectual property, international law, technology law, environmental law, human rights and other specialized fields."
            },
            {
              "t": "Real-World Learning",
              "d": "Many programs include legal research, moot courts, simulations, clinical education, internships and supervised practical experiences."
            },
            {
              "t": "Global Exposure",
              "d": "Students can look at legal issues concerning international trade, transnational transactions, global regulation, and comparative law."
            },
            {
              "t": "Industry Networking",
              "d": "Law schools might offer access to alumni networks, legal conferences, guest lectures, professional associations, and employer engagement opportunities."
            },
            {
              "t": "Studies: Interdisciplinary",
              "d": "Some programs allow for the combination of law with selected disciplines such as business, economics, public policy, technology, international affairs and others."
            }
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Law Courses Offered in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "The US system of legal education is different from the Indian one.",
            "Undergraduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "BA in Legal Studies",
            "Legal Studies, Bachelor of Science",
            "Bachelor of Arts in Political Science, Pre-Law Track",
            "Bachelor of Arts Criminal Justice",
            "International Relations, Bachelor of Arts",
            "Bachelor of Arts, Philosophy, Politics, and Economics"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Juris Doctor (JD)",
            "Curriculum may be as follows:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Constitutional Law",
            "Agreement",
            "Criminal Law",
            "Civil Procedure",
            "Property Law",
            "Writing and Legal Research",
            "Evidence",
            "Tort",
            "Professional Responsibilities",
            "Electives and practical legal experience"
          ]
        },
        {
          "t": "p",
          "items": [
            ".",
            "Post-graduate Programs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master of Laws (LL.M.)",
            "Master of Legal Studies (MLS) or Master of Studies in Law (MSL).",
            "Master of Jurisprudence (MJ)",
            "Master of Law Science"
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
            "Doctor of Juridical Science (S.J.D. or J.S.D.)",
            "PhD in Law or Related Research"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Specialized Programs, Certificate & Diploma Programs",
            "Depending on the institution students may find:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Certificate of Corporate Compliance",
            "Certificate of Intellectual Property Law",
            "Diploma in International Law",
            "Cybersecurity and Data Privacy Law Certificate",
            "Human Rights Certificate",
            "Business Law Certificate",
            "Alternate Dispute Resolution Certificate",
            "Health Law and Policy, Certificate",
            "Certificate of Environmental Law",
            "Legal Research and Compliance Professional Programs"
          ]
        },
        {
          "t": "p",
          "items": [
            "The differences between these qualifications are in academic credit, length, professional recognition and admission requirements. A certificate does not automatically entitle a student to practice law."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Best universities to study law in the USA",
      "groups": [],
      "lead": [
        "The following institutions are renowned for legal education and allied academic programs. They are for research purposes. They are not a guarantyd ranking and are not an assurance of admission."
      ],
      "note": [],
      "unis": [
        {
          "name": "Harvard University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Yale",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "Columbia University",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "Chicago University",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "specialisations",
      "eyebrow": "Specialisations",
      "title": "Best Law Specializations in the USA",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Business & Corporate Law",
            "International Law,",
            "Intellectual Property Laws",
            "Criminal Law",
            "Human Rights Legislation",
            "Environmental Law.",
            "Data Privacy and Cybersecurity Law",
            "Taxation law",
            "Intellectual Property & Technology Law",
            "Health Law",
            "Immigration laws",
            "Arbitration and Dispute Resolution"
          ]
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Course Duration:",
      "groups": [
        {
          "t": "p",
          "items": [
            "Bachelor’s Degree in Legal Studies or related field",
            "About 4 years ago",
            "Juris Doctor (J.D.)",
            "Approx. 3 years full time.",
            "Master of Laws (LL.M.)",
            "Typically 1 year, some programs longer",
            "Master of Studies in Law or Master of Legal Studies",
            "Maybe 1-2 years",
            "Doctor of Juridical Science (SJD/JSD)",
            "Typically 3-5 years or greater"
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility for Indian Students",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Undergraduate Admissions",
            "In general, students need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of Class 12 from a recognized board.",
            "Academic performance consistent with the requirements of the university.",
            "English-language skills where applicable.",
            "School certificates and academic transcripts.",
            "Statement of purpose or personal essay, if applicable.",
            "Letters of recommendation (if required).",
            "SAT or ACT scores, only if required or considered by the institution.",
            "Generally, students applying for legal studies or a pre-law track do not need to hold a law degree."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Admission to the Juris Doctor (JD)",
            "Most applicants will need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A completed bachelor’s degree or an equivalent qualification recognized by the law school.",
            "Academic Transcripts & Degree Certificates.",
            "An essay or personal statement .",
            "Letters of recommendation (where applicable)",
            "English language proficiency, if applicable.",
            "LSAT or other acceptable admissions test, as determined by individual law school.",
            "Some law schools accept the Graduate Record Examination (GRE) or have alternative testing policies. International students need to verify requirements for the individual school."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Admissions to the Master of Laws (LLM)",
            "Students typically need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A first degree law degree, such as an LLB or an equivalent foreign law qualification.",
            "Degree certificates and academic transcripts.",
            "A statement of intent.",
            "A curriculum vitae or resume",
            "Letters of recommendation, if any are needed.",
            "English language test scores, as applicable.",
            "Other documents as required by the School of Law."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Admission to the Doctor’s Degree",
            "Applicants usually require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A law degree or other qualifications as specified by the institution.",
            "Good academic record",
            "A statement of research interests or a research proposal.",
            "References Academic",
            "A writing sample or evidence of research skills.",
            "English language skills as needed.",
            "Some programs require an LLM or equivalent advanced legal education, but others may accept applicants with other academic backgrounds."
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
            "International students may need to provide evidence of their English language proficiency by:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "IELTS Academic Test",
            "TOEFL iBT",
            "PTE Academic",
            "Duolingo English Test"
          ]
        },
        {
          "t": "p",
          "items": [
            "Each institution and program has different minimum scores and exemption policies. Law schools may have higher language expectations because legal education demands advanced reading, writing, argumentation, and communication skills."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Law Entrance Exams in the USA",
      "groups": [
        {
          "t": "dl",
          "items": [
            "No single entrance examination exists for all US law programs.",
            "LSAT",
            "The most common test for JD admissions is the Law School Admission Test, but some law schools accept other tests or use alternative policies.",
            "GRE",
            "Some of the JD programs accept GRE in place of LSAT. And some graduate legal programs will also make use of it where appropriate.",
            "ACT vs SAT",
            "Depending on the university, these tests may be required or considered for some undergraduate admissions.",
            "Tests of English Proficiency",
            "International applicants may be asked to undertake the IELTS, TOEFL, PTE or other approved test."
          ],
          "pairs": [
            {
              "t": null,
              "d": "No single entrance examination exists for all US law programs."
            },
            {
              "t": "LSAT",
              "d": "The most common test for JD admissions is the Law School Admission Test, but some law schools accept other tests or use alternative policies."
            },
            {
              "t": "GRE",
              "d": "Some of the JD programs accept GRE in place of LSAT. And some graduate legal programs will also make use of it where appropriate."
            },
            {
              "t": "ACT vs SAT",
              "d": "Depending on the university, these tests may be required or considered for some undergraduate admissions."
            },
            {
              "t": "Tests of English Proficiency",
              "d": "International applicants may be asked to undertake the IELTS, TOEFL, PTE or other approved test."
            }
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Cost of Studying Law in USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition fees vary widely depending on the institution, the program, its location and the academic year. Private universities can be especially costly for professional law degrees.",
            "Estimated Cost per Year",
            "Tuition for undergraduates",
            "USD 20,000-50,000+",
            "JD tuition",
            "35,000-80,000+ US$",
            "LLM tuition fees",
            "$30,000–75,000+ USD",
            "Cost of living",
            "30,000+",
            "Course books, materials and personal expenses",
            "$1,000–4,000+"
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Law Student Scholarships and Financial Aid",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students may also be eligible for university scholarships, fellowships, assistantships or external funding opportunities. Eligibility depends on the university, program, academic profile, financial circumstances and rules of the scholarship."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships based on merit",
            "Need-Based Financial Assistance",
            "Scholarships and Fellowships for LLM",
            "Financial Support",
            "Outside scholarships"
          ]
        },
        {
          "t": "p",
          "items": [
            "Note: Scholarships are competitive and not guaranteed. Some awards only cover a portion of tuition, and some may offer more robust support. Students should check application deadlines and renewal conditions and the eligibility of international students."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Prospects after studying Law in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Career options depend upon the degree completed, previous qualifications, work authorization, relevant experience and if professional licensure is required.",
            "Potential career paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Legal Investigator",
            "Legal assistant or paralegal, according to employer's requirements",
            "Corporate Compliance Analyst",
            "Specialist, Contract Management",
            "Regulatory Affairs Professional",
            "Researcher, Policy;",
            "Legal Operations Lead",
            "Intellectual Property Analyst (IP Analyst)",
            "Specialist in Privacy and Data Protection",
            "International Relations/Policy Specialist",
            "Academic research",
            "Law Professor, usually requiring advanced degrees",
            "Attorney or Lawyer, previously licensed in applicable jurisdictions"
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step by step",
      "title": "USA Law Admission",
      "groups": [],
      "lead": [],
      "steps": [
        {
          "title": "Selecting Your Legal Education Route",
          "text": "Determine whether you want to pursue undergraduate legal studies, a JD, an LLM, a master’s in legal studies or a doctoral program."
        },
        {
          "title": "Select Universities",
          "text": "Program structure, tuition fees, scholarships, location, faculty expertise, career objectives etc."
        },
        {
          "title": "Determine if You Qualify",
          "text": "Find out about academic requirements, accepted degrees, entrance examinations, English language requirements, and deadlines."
        },
        {
          "title": "Prepare for Mandatory Tests",
          "text": "You should only take the LSAT, GRE, SAT, ACT or English proficiency test if the institutions you have chosen require it."
        },
        {
          "title": "Compile Application Materials",
          "text": "Typical documents include transcripts, degree certificates, a resume, statement of purpose, recommendation letters, test scores and writing samples as required."
        },
        {
          "title": "Apply",
          "text": "Follow the university’s application process and pay any necessary fees. Participating law schools may require JD applicants to use the LSAC Credential Assembly Service."
        },
        {
          "title": "Review Admission and Funding",
          "text": "Compare offers, tuition, scholarship conditions, deposits for enrollment and total living costs."
        },
        {
          "title": "Apply for Your Student Visa",
          "text": "Upon admission and receipt of the required documentation from an eligible institution, follow the applicable U.S. student visa process. Step 9 Get Ready to Leave Organize accommodation, insurance, travel, university registration and any pre-arrival formalities required."
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Student Visa to Study Law in the United States",
      "groups": [
        {
          "t": "p",
          "items": [
            "Typically, international students accepted into an eligible academic program apply for an F-1 student visa.",
            "The process usually entails:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Being accepted into a Student and Exchange Visitor Program (SEVP)-certified school.",
            "Receiving Form I-20 from the school.",
            "Payment of the SEVIS fee (if applicable).",
            "Completing the visa application online.",
            "Payment of the required visa application fee.",
            "Scheduling and attending a visa interview, if needed.",
            "Providing academic, financial, identity & other supporting documents as required.",
            "Budget and Tuition Planning",
            "Scholarly research",
            "Guidance on admission and visa process"
          ]
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions (FAQs)",
  "faqs": [
    {
      "q": "Yes, Indian students can study Law in the USA.",
      "a": "Yes. Indian students can study undergraduate legal studies, JD programs, LLM degrees, legal studies master’s programs and doctoral qualifications as long as they meet the eligibility criteria of each institution."
    },
    {
      "q": "How Long Does It Take To Study Law in the USA?",
      "a": "You generally need four years for a bachelor’s degree. A JD (assuming you go full-time) takes about three years. An LLM is typically about one year. The duration of the doctoral and specialized programs varies."
    },
    {
      "q": "Can I study Law in USA after 12th?",
      "a": "Yes. After class 12, students can choose to pursue a bachelor’s in legal studies, political science, criminal justice, or any other related subject. But the JD professional law degree usually requires that you first get a bachelor’s degree."
    },
    {
      "q": "What is the required LSAT for studying Law in the USA",
      "a": "No single test is required of all programs. Many JD programs require the LSAT, but some accept other tests or have different admissions requirements. Undergraduate and LLM admissions have different requirements."
    },
    {
      "q": "Can I do LLM in USA after LLB in India?",
      "a": "Yes . Many US universities will accept applicants with an LLB or other accredited first degree in law. Eligibility, academic requirements and English-language standards are different at various institutions."
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

const LawAbroad = () => {
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
        <meta property="og:url" content={"https://www.eduhawk.in/courses/law"} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.eduhawk.in/courses/law"} />
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

export default LawAbroad;
