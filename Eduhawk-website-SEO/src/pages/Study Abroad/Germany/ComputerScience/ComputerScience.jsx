import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/ComputerScience/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/ComputerScience/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/ComputerScience/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/ComputerScience/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/ComputerScience/Saarland_University_renowned_worldw.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/ComputerScience/The_University_of_Bonn_provides_cha.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/ComputerScience/The_University_of_Freiburg_renowned.webp";
import uniImg4 from "../../../../Images/Abroad/Germany/ComputerScience/The_University_of_Passau_provides_c.webp";
import cmsData from "../../../../data/study_abroad/germany/computer_science.json";

const page = {
  name: "Computer Science in Germany",
  country: "Germany",
  slug: "computer-science",
  title: "Computer Science in Germany for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Computer Science in Germany for international students: Top German universities, admission requirements, zero-tuition public education, living expenses, and 18-month post-study work visa.",
  keywords: "Study Computer Science in Germany for Indian Students, Postgraduate Computer Science in Germany, Best German Universities for Computer Science, Computer Science MSc Programs in Germany, Computer Science Specializations in German, Master’s in Computer Science in Germany: Eligibility Criteria, Requirements to Study Computer Science in Germany, Computer Science Courses in Germany – taught in English, Computer Science in Germany IELTS and TOEFL Requirements, Germany Computer Science Fee Structure, Cost of Living for Masters Students in Germany, Conditions for German Student Visa for Computer Science Students",
  introTitle: "Why Study Computer Science in Germany?",
  "heroParas": [
    "Unlock world-class engineering and computing education across Germany's elite TU9 technical universities with tuition-free public degree options. Indian students gain practical industry immersion in Europe's strongest industrial economy and access an 18-month post-study job seeker visa."
],
  "overview": [
    "Germany is an international powerhouse for engineering and technology education, offering Indian students exceptional Computer Science (Informatik) programs that integrate mathematical rigor with practical industrial innovation. German universities are globally recognized for excellence in software systems, embedded architectures, industrial robotics, and artificial intelligence.",
    "Public universities and TU9 institutes of technology across Germany deliver premier English-taught Bachelor's and Master's degree programs with zero tuition fees (charging only a nominal semester administrative fee of €150–€350). Students collaborate with global industry leaders like SAP, Siemens, BMW, and Bosch on cutting-edge research, hands-on laboratory courses, and paid master's thesis projects.",
    "International graduates in Germany benefit from highly favorable immigration and career pathways. Under German immigration law, non-EU graduates can extend their residence permit for up to 18 months to seek qualified employment (Jobseeker Visa), followed by seamless transition to an EU Blue Card and expedited settlement opportunities."
],
  level: "B.Sc. & M.Sc. in Computer Science / Informatics",
  crumb: "Informatics / Computer Science",
  stats: [
    {
      label: "Degree Choices",
      value: "B.Sc. & M.Sc. in Computer Science / AI"
    },
    {
      label: "Course Duration",
      value: "UG: 3-3.5 Yrs | PG: 1.5-2 Yrs"
    },
    {
      label: "Top Institutions",
      value: "Saarland Uni, Uni Bonn, Uni Freiburg, Uni Passau"
    },
    {
      label: "Post-Study Work",
      value: "18-Month Jobseeker Visa (Residence Permit)"
    }
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "Computer Science Courses & Specializations in Germany",
      groups: [
        {
          t: "p",
          items: [
            "German universities offer highly specialized Master of Science (M.Sc.) and Bachelor of Science (B.Sc.) degree programs in Computer Science (Informatik). Master's programs generally span 1.5 to 2 years and require 90 or 120 ECTS credits, culminating in an extensive research Master's thesis.",
            "Students can choose between foundational computer science programs and specialized cutting-edge technology tracks:",
            "Core curricular modules encompass advanced data structures, computational complexity, distributed operating systems, database internals, computer networks, machine learning algorithms, cryptography, computer vision, natural language processing (NLP), and cloud computing architecture."
          ]
        },
        {
          t: "pills",
          items: [
            "M.Sc. in Computer Science (General Informatik)",
            "Master of Science in Applied Computer Science",
            "M.Sc. in Artificial Intelligence & Machine Learning",
            "M.Sc. in Data Science & Big Data Engineering",
            "Master of Science in Cybersecurity & Privacy",
            "M.Sc. in Software Engineering & Distributed Systems",
            "Master in Autonomous Robotics & Intelligent Systems",
            "M.Sc. in Human-Computer Interaction (HCI)",
            "Master in High-Performance Computing (HPC)",
            "M.Sc. in Computational Science & Engineering (CSE)",
            "Cloud Computing & DevOps Infrastructure",
            "Computer Vision & Deep Neural Networks",
            "Embedded Systems & IoT Architecture"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top German Universities",
      title: "Best German Universities & Research Institutions for Computer Science",
      unis: [
        {
          name: "Saarland University (Saarland Informatics Campus)",
          city: "Saarbrücken, Saarland",
          qsRank: "Top 100 Worldwide for Computer Science (QS/THE)",
          tuition: "€0 Tuition (Public) | ~€310/semester contribution (incl. state transit pass)",
          programs: "M.Sc. in Computer Science, M.Sc. in Data Science & AI, M.Sc. in Cybersecurity",
          highlights: "One of the world's leading computer science research clusters; houses two Max Planck Institutes (MPI-INF & MPI-SWS), DFKI, and the Helmholtz Center for Information Security (CISPA).",
          link: "https://www.uni-saarland.de",
          img: uniImg1
        },
        {
          name: "University of Bonn",
          city: "Bonn, North Rhine-Westphalia",
          qsRank: "German University of Excellence | Top 100 Global Research",
          tuition: "€0 Tuition (Public) | ~€330/semester contribution (incl. state transit pass)",
          programs: "M.Sc. in Computer Science, M.Sc. in Autonomous Systems & Intelligent Robotics",
          highlights: "Renowned algorithms research group, Lamarr Institute for Machine Learning and AI, and world-class mathematical computing labs.",
          link: "https://www.uni-bonn.de",
          img: uniImg2
        },
        {
          name: "University of Freiburg",
          city: "Freiburg im Breisgau, Baden-Württemberg",
          qsRank: "Top 100 Global University for Engineering & Technology",
          tuition: "€1,500/semester (Baden-Württemberg non-EU fee) + ~€180 semester fee",
          programs: "M.Sc. in Computer Science, M.Sc. in Embedded Systems Engineering",
          highlights: "Internationally celebrated for autonomous robotics, computer vision, artificial intelligence, and cutting-edge cyber-physical systems.",
          link: "https://www.uni-freiburg.de",
          img: uniImg3
        },
        {
          name: "University of Passau",
          city: "Passau, Bavaria",
          qsRank: "Leading German Faculty in Informatics & Data Analytics",
          tuition: "€0 Tuition (Public) | ~€110/semester contribution",
          programs: "M.Sc. in Computer Science, M.Sc. in AI Engineering",
          highlights: "Vibrant high-tech campus with state-of-the-art supercomputing facilities, specialized software engineering tracks, and strong international industrial collaborations.",
          link: "https://www.uni-passau.de",
          img: uniImg4
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Eligibility Criteria",
      title: "Eligibility Requirements to Study Computer Science in Germany",
      groups: [
        {
          t: "p",
          items: [
            "German universities enforce strict academic compatibility (Fachbindung) standards. Candidates must meet the following eligibility benchmarks:",
            "**Master's in Computer Science Eligibility:**",
            "* **Recognized Bachelor's Degree:** An approved undergraduate degree (B.Tech, B.E., B.Sc., or 4-year BS) in Computer Science, Information Technology, Computer Engineering, or a closely related computational field.",
            "* **Subject-Credit (ECTS) Requirements:** German universities conduct detailed credit mapping. Applicants typically must demonstrate:",
            "  * Minimum 20 to 30 ECTS in Higher Mathematics (Linear Algebra, Calculus, Discrete Mathematics, Probability & Statistics).",
            "  * Minimum 30 to 45 ECTS in Theoretical & Practical Computer Science (Algorithms, Data Structures, Programming Languages, Automata Theory).",
            "  * Minimum 15 to 20 ECTS in Computer Systems (Operating Systems, Computer Architecture, Distributed Networks, Databases).",
            "* **Academic Threshold:** Minimum German grade equivalent of 2.5 or better on the German 1-to-5 scale (approx. 65-70%+ or CGPA 7.0+/10).",
            "* **Language Proficiency:** For English-taught tracks, official IELTS Academic (6.5 to 7.0) or TOEFL iBT (90 to 100+). For German-taught tracks, TestDaF (4x4) or DSH-2.",
            "* **GRE Requirements:** Some elite technical programs (e.g., TU Munich, Saarland) strongly recommend or mandate the GRE General Test, with emphasis on Quantitative Reasoning (160+).",
            "**Undergraduate (Bachelor's) Eligibility:**",
            "* Indian applicants with 12th-grade schooling generally complete a 1-year preparatory foundation course (**Studienkolleg T-Kurs** for technical sciences) and pass the **Feststellungsprüfung (FSP)**, unless holding 1 year of recognized university education in India or an IB Diploma."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Application Checklist",
      title: "Admission Requirements for Computer Science in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Indian students must obtain the mandatory **APS Certificate** from APS India before submitting university applications.",
            "Standard documentation required by German universities includes:",
            "* Valid Passport (minimum 12 months validity).",
            "* Certified Bachelor's Degree Certificate and official consolidated grade transcripts.",
            "* Detailed Course Module Handbook / Syllabi (essential for ECTS credit evaluation).",
            "* **Mandatory APS Certificate** (issued by APS India).",
            "* Official English Language Proficiency scorecard (IELTS Academic or TOEFL iBT).",
            "* German Language Certificates (if enrolled in bilingual or German-taught modules: B1/B2/TestDaF).",
            "* Statement of Purpose (SOP) detailing technical projects, research interests, and academic background.",
            "* Europass format CV highlighting programming languages, GitHub repositories, and tech stacks.",
            "* Two Academic Letters of Recommendation (LORs) from university professors.",
            "* GRE General Test scorecard (if required by the specific university).",
            "* Certificates of technical internships, published research papers, or open-source software contributions."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Financial Planning",
      title: "Cost of Studying Computer Science in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Studying computer science in Germany is among the most economical global pathways for high-tier technical education:",
            "* **Public Universities:** Qualified Master's and Bachelor's programs across 15 of Germany's 16 federal states charge **€0 tuition fee** for all students regardless of nationality.",
            "* **Baden-Württemberg State Tuition:** Public universities in Baden-Württemberg (e.g., Freiburg, Stuttgart) charge **€1,500 per semester** for non-EU international students.",
            "* **Semester Contribution (Semesterbeitrag):** Public universities require an administrative fee of **€150 to €400 per semester**, which includes an all-inclusive regional public transportation pass (Semesterticket).",
            "* **Private Universities:** Private tech colleges charge between **€5,000 and €20,000 per year**.",
            "* **Monthly Living Expenses:** Budget approximately **€900 to €1,300 per month** covering student housing (€350 - €600), statutory health insurance (~€125 - €130), food, internet, and personal expenses.",
            "* **Two-Year Living Expense Estimate:** For a typical 2-year Master's degree, living expenses total approximately **€21,600 to €31,200**.",
            "* **German Blocked Account (Sperrkonto):** For student visa processing, international students must deposit **€11,904 per year** into an approved German blocked account as proof of financial resources."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Pathway",
      title: "Admission Procedure for Computer Science in Germany",
      steps: [
        {
          num: "01",
          title: "Determine Specialization",
          desc: "Select your target computational focus: Artificial Intelligence, Data Science, Cybersecurity, Software Engineering, or Robotics."
        },
        {
          num: "02",
          title: "Shortlist Technical Universities",
          desc: "Compare curriculum module handbooks, lab research capabilities, English instruction tracks, and industry tie-ups."
        },
        {
          num: "03",
          title: "Verify ECTS Compatibility & Secure APS",
          desc: "Map your undergraduate transcript credits in math, algorithms, and systems, and apply early for the mandatory APS Certificate via APS India."
        },
        {
          num: "04",
          title: "Take Standardized Exams",
          desc: "Appear for IELTS Academic (6.5 - 7.5) or TOEFL iBT (90 - 100+), and take the GRE General Test if recommended."
        },
        {
          num: "05",
          title: "Assemble Comprehensive Technical Dossier",
          desc: "Draft a technical SOP, tailor your Europass CV with code repositories, secure 2 academic LORs, and compile detailed course descriptions."
        },
        {
          num: "06",
          title: "Submit University Applications",
          desc: "Apply via Uni-Assist or directly to university portals before July 15 (Winter Intake) or January 15 (Summer Intake)."
        },
        {
          num: "07",
          title: "Complete Technical Assessments / Interviews",
          desc: "Take online programming aptitude tests or participate in technical admissions interviews if shortlisted."
        },
        {
          num: "08",
          title: "Accept Offer of Admission",
          desc: "Receive your official Letter of Admission (Zulassungsbescheid) and pay any initial semester administrative contribution."
        },
        {
          num: "09",
          title: "Open Blocked Account & Apply for Visa",
          desc: "Deposit €11,904 in a German blocked account (Sperrkonto), obtain statutory health insurance, and apply for the National Student Visa (Subtype 16b)."
        },
        {
          num: "10",
          title: "Travel to Germany & University Matriculation",
          desc: "Arrive in Germany, complete your city registration (Anmeldung), finalize university matriculation (Immatrikulation), and receive your student ID and transit pass."
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Quality Standards",
      title: "Accreditation & Quality Recognition of Computer Science in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Before selecting a university, verify that the computer science degree holds recognized accreditation and quality seals:",
            "* **ASIIN Accreditation:** Leading German and European accreditation agency specializing in Engineering, Informatics, Architecture, and Natural Sciences.",
            "* **German State Recognition (Staatlich Anerkannt):** Public universities are state-funded and systematically evaluated by the German Council of Science and Humanities (Wissenschaftsrat) and indexed on Anabin.",
            "* **Euro-Inf Quality Label:** Awarded by the European Quality Assurance Network for Informatics Education (EQANIE), certifying that the program meets European-wide standards for professional informatics education.",
            "* **High Academic Credibility:** Degrees from German technical universities (TU9 and Excellence Universities) are recognized without restriction worldwide by employers and doctoral research programs."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Employment Outlook",
      title: "Career & Salary Prospects in Germany After Computer Science",
      groups: [
        {
          t: "p",
          items: [
            "Computer Science graduates in Germany enter one of the world's most lucrative and talent-starved job markets. Germany faces an estimated shortage of over 100,000+ IT professionals across software engineering, AI, and cybersecurity.",
            "Popular career paths include:",
            "* **Software Engineer / Full-Stack Developer:** Designing scalable backend architectures, cloud microservices, and distributed applications.",
            "* **Machine Learning & AI Engineer:** Developing predictive models, deep learning pipelines, and generative AI systems.",
            "* **Data Scientist & Big Data Engineer:** Architecting large-scale data lakes, ETL pipelines, and statistical intelligence models.",
            "* **Cybersecurity & Information Security Specialist:** Hardening enterprise networks, vulnerability research, and threat modeling.",
            "* **Cloud Infrastructure & DevOps Engineer:** Managing Kubernetes clusters, CI/CD automation, and multi-cloud environments (AWS, Azure, GCP).",
            "* **Autonomous Systems & Robotics Engineer:** Designing motion planning, sensor fusion, and embedded software for automotive and industrial robotics.",
            "* **IT Management Consultant / Enterprise Architect:** Aligning enterprise tech stacks with business transformation strategies.",
            "**Estimated Gross Annual Salaries in Germany:**",
            "* **Entry-Level Positions:** **€48,000 to €62,000** per year.",
            "* **Experienced Engineers (3-5+ years):** **€65,000 to €92,000** per year.",
            "* **Senior Tech Leads, Staff Engineers & AI Specialists:** **€95,000 to €130,000+** per year.",
            "Proficiency in languages such as Python, Java, C++, Go, Rust, SQL, and modern cloud technologies (Docker, Kubernetes) commands top-tier compensation. English is widely spoken in German tech companies, though conversational German enhances long-term leadership growth."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Required Paperwork",
      title: "Documents Required to Study Computer Science in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Ensure all documentation is neatly compiled, translated into English or German, and verified where applicable:",
            "* Valid Passport (minimum 12 months validity).",
            "* Secondary School Certificates & Marksheets (10th & 12th standards).",
            "* Bachelor's Degree Certificate and official consolidated grade transcripts.",
            "* Detailed Course Handbook / Curriculum Syllabus (required for ECTS credit evaluation).",
            "* **Mandatory APS Certificate** issued by the Academic Evaluation Centre (APS India).",
            "* English Language Proficiency scorecards (IELTS Academic 6.5+ or TOEFL iBT 90+).",
            "* German Language Certificates (if enrolled in German or bilingual modules: B1/B2/TestDaF).",
            "* Statement of Purpose (SOP) tailored specifically to your chosen computer science curriculum.",
            "* Europass format CV detailing academic achievements, programming projects, and code repositories.",
            "* Two Academic/Professional Letters of Recommendation (LORs).",
            "* Proof of Technical Internships, Hackathons, Published Papers, or GitHub Repositories.",
            "* Blocked Account Confirmation (€11,904) and German Statutory Health Insurance.",
            "* Official University Admission Letter (Zulassungsbescheid)."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can Indian students study a Master's in Computer Science in Germany?",
      a: "Yes. Indian students holding a recognized 4-year Bachelor's degree (B.Tech, B.E., or BS) or a relevant 3-year degree with sufficient ECTS credits in Computer Science, Information Technology, or Computer Engineering can apply, provided they meet the university's academic credit mapping and language requirements."
    },
    {
      q: "Does Germany offer tuition-free Master's degrees in Computer Science?",
      a: "Yes. Public universities across 15 of Germany's 16 federal states charge zero tuition fees for both EU and non-EU international students, requiring only a modest semester contribution of €150 to €400 (which includes a regional public transit pass). In Baden-Württemberg, tuition is €1,500 per semester. Private institutions charge standard tuition fees."
    },
    {
      q: "How long does a Computer Science Master's degree take in Germany?",
      a: "Most Master of Science (M.Sc.) programs in Computer Science take 1.5 to 2 years (3 to 4 semesters) to complete, requiring 90 to 120 ECTS credits, which includes an extensive 6-month Master's research thesis."
    },
    {
      q: "Is IELTS required to study Computer Science in Germany?",
      a: "Yes, for English-taught programs, most universities require an official English language test score such as IELTS Academic (minimum 6.5 to 7.0 overall) or TOEFL iBT (minimum 90 to 100). Some programs may grant waivers if your entire undergraduate degree was conducted in English, but official scores are strongly recommended. For German-taught courses, TestDaF or DSH certificates are required."
    },
    {
      q: "What career opportunities and post-study work rights are available after graduation?",
      a: "Graduates are entitled to an 18-month post-study work visa (Residence Permit for Jobseekers) in Germany. Graduates enter high-demand careers as software engineers, machine learning engineers, data scientists, cybersecurity specialists, cloud architects, and research scientists, with starting salaries ranging from €48,000 to €62,000 per year and fast-track eligibility for the EU Blue Card."
    }
  ]
};

export default function ComputerScienceGermanyPage() {
  const dynamicPage = {
    ...page,
    name: cmsData.hero?.title || page.name,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
      : page.stats,
    seo: {
      title: cmsData.seo?.title || page.title,
      description: cmsData.seo?.description || page.description,
    },
    sections: (page.sections || []).map(sec => {
      if ((sec.slot === 'universities' || sec.slot === 'unis') && cmsData?.universities && cmsData.universities.length > 0) {
        return {
          ...sec,
          unis: cmsData.universities.map((u, idx) => ({
            name: u.name,
            desc: u.desc || '',
            img: (sec.unis?.[idx]?.img || sec.unis?.[idx]?.image) || u.image || u.img
          }))
        };
      }
      return sec;
    }),
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image,
          img: page.universities?.[idx]?.img || u.img
        }))
      : page.universities,
    faqs: ((cmsData?.faq || cmsData?.faqs) && (cmsData?.faq || cmsData?.faqs).length > 0)
      ? (cmsData.faq || cmsData.faqs).map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
      : page.faqs,
  };

  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      images={images}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/germany/computer-science"
    />
  );
}
