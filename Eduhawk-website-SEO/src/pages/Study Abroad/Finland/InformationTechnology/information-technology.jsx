import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";
import heroImg from "../../../../Images/Abroad/Finland/InformationTechnology/it_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/InformationTechnology/it_hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Finland/InformationTechnology/it_side.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/InformationTechnology/it_cta_bg.webp";
import uefImg from "../../../../Images/Abroad/Finland/InformationTechnology/uef.webp";
import turkuImg from "../../../../Images/Abroad/Finland/InformationTechnology/turku.webp";
import metropoliaImg from "../../../../Images/Abroad/Finland/InformationTechnology/metropolia.webp";
import ouluImg from "../../../../Images/Abroad/Finland/InformationTechnology/oulu.webp";
import aaltoImg from "../../../../Images/Abroad/Finland/InformationTechnology/aalto.webp";

const page = {
  name: "Information Technology",
  country: "Finland",
  slug: "information-technology",
  title: "Study Information Technology in Finland for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Information Technology in Finland: Leading universities like UEF, Turku, Metropolia UAS, Oulu, and Aalto. Explore Bachelor's and Master's in IT, cybersecurity, IoT, software engineering, tuition fees, eligibility, and post-study work visa.",
  keywords:
    "Information Technology in Finland, Bachelor’s in Information Technology in Finland, Master’s in Information Technology in Finland, Information Technology Universities in Finland, Study IT in Finland for Indian Students, Information Technology Courses in Finland Fees",
  introTitle: "Information Technology in Finland",
  heroParas: [
    "**Finland** is a premier European destination for students pursuing **[Information Technology in Finland](/study-abroad/finland/information-technology)**. Renowned for technological innovation, world-leading research, and practical industry-oriented education, Finnish universities combine rigorous academic learning with hands-on enterprise projects and cloud laboratories."
  ],
  overview: [
    "Studying Information Technology in Finland prepares international students for careers across the global technology ecosystem. International students can choose from English-taught bachelor’s and master’s programmes across research universities and universities of applied sciences.",
    "**Edu-Hawk Worldwide** helps students explore suitable IT programmes, compare universities and tuition fees, understand admission requirements, and prepare their applications for studying in Finland."
  ],
  level: "Bachelor’s & Master’s",
  crumb: "Engineering & Technology",

  stats: [
    { label: "Degree Awarded", value: "B.Eng. / B.Sc. / M.Sc. in IT & Computing" },
    { label: "Course Duration", value: "3–4 Yrs (UG) / 2 Yrs (MS) / 5 Yrs (3+2)" },
    { label: "Top Institutions", value: "UEF, Turku, Metropolia UAS, Oulu, Aalto" },
    { label: "Indicative Fees", value: "€10,000 – €17,000 / Year (~₹10.86L – ₹18.46L)" }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "1. Why Study Information Technology in Finland?",
      groups: [
        {
          t: "p",
          items: [
            "Finland is a popular destination for students interested in information technology, software development, artificial intelligence, cybersecurity and digital innovation. Finnish universities combine academic learning with practical projects, research and industry-oriented education. Students can develop technical skills in programming, information systems, data engineering, cloud technologies and digital solutions.",
            "Studying Information Technology in Finland can prepare students for careers in the global technology industry. International students can choose from English-taught bachelor’s and master’s programmes at universities and universities of applied sciences. Depending on the institution, students may also have opportunities to participate in internships, research projects and industry collaborations.",
            "Edu-Hawk Worldwide helps students explore suitable IT programmes, compare universities and tuition fees, understand admission requirements and prepare their applications for studying in Finland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Programmes",
      title: "2. Information Technology Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Finnish institutions offer several undergraduate and postgraduate programmes related to information technology.",
            "**Bachelor’s Courses in Information Technology**",
            "Bachelor’s programmes generally take three to four years, depending on the university and degree structure. Popular options include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Bachelor’s in Information Technology",
            "Bachelor’s in Information and Communication Technology",
            "Bachelor’s in Software Engineering",
            "Bachelor’s in Computer Science",
            "Bachelor’s in Computer Engineering",
            "Bachelor’s in Data Engineering",
            "Bachelor’s in Information Systems"
          ]
        },
        {
          t: "p",
          items: [
            "**Master’s Courses in Information Technology**",
            "Master’s programmes typically take two years at research universities, while some professional master’s degrees at universities of applied sciences have different credit and admission requirements. Popular options include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Master’s in Information Technology",
            "Master’s in Information and Communication Technology",
            "Master’s in Software Engineering",
            "Master’s in Cybersecurity",
            "Master’s in Data Analytics",
            "Master’s in Data Engineering",
            "Master’s in Information Networks",
            "Master’s in Artificial Intelligence and related computing fields"
          ]
        },
        {
          t: "p",
          items: [
            "The exact degree title, duration and specialisation depend on the university. Students should review the curriculum before choosing a programme."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "3. Top Universities for Information Technology in Finland",
      desc: "Leading Finnish research universities and Universities of Applied Sciences offering English-taught IT degrees:",
      unis: [
        {
          name: "University of Eastern Finland",
          location: "Joensuu / Kuopio, Finland",
          desc: "Offers a Bachelor's and Master's Degree Programme in Information Technology (combined 3 + 2 pathway) and a dedicated Master's Programme in IT. Focuses on computer science foundations, software engineering, and intelligent systems.",
          fee: "€10,000 / Year (~₹10.86 Lakh)",
          duration: "3 + 2 Years (180 + 120 ECTS) or 2 Years (MS)",
          exams: "Class 12 / Relevant Bachelor's, English test",
          features: [
            "Combined pathway allowing direct progression into Master's level",
            "30% early-bird discount on tuition fees available for eligible students",
            "Official application period: 7–21 January 2027"
          ],
          img: uefImg,
          link: "https://www.uef.fi/en/degree-programme/bachelors-and-masters-degree-programme-in-information-technology"
        },
        {
          name: "University of Turku",
          location: "Turku, Finland",
          desc: "Offers a Degree Programme in Information and Communication Technology with a combined bachelor's and master's pathway. At master's level, students can explore specialised tracks in Cyber Security and Data Analytics.",
          fee: "€10,000 / Yr (UG) | €12,000 / Yr (PG)",
          duration: "3 Years (UG, 180 ECTS) + 2 Years (PG, 120 ECTS)",
          exams: "Upper secondary merit / relevant degree, English proficiency",
          features: [
            "Specialisations in Cyber Security and Data Analytics",
            "Comprehensive Scandinavian research university with global standing",
            "Strong industrial linkages with Turku technology corridor"
          ],
          img: turkuImg,
          link: "https://www.utu.fi/en/study-at-utu/bachelors-degree-programme-in-information-and-communication-technology"
        },
        {
          name: "Metropolia University of Applied Sciences",
          location: "Helsinki Metropolitan Area, Finland",
          desc: "Offers a 4-year Bachelor of Engineering in Information Technology covering Software Engineering and Smart IoT Systems. Emphasises applied engineering, industrial traineeships, and embedded systems.",
          fee: "€11,500 / Year (~₹12.49 Lakh)",
          duration: "4 Years (240 ECTS)",
          exams: "Class 12 / secondary diploma, entrance test or SAT",
          features: [
            "Largest University of Applied Sciences in Finland",
            "Major options in Software Engineering and Smart IoT Systems",
            "Direct internship and career placement pipeline across Nordic tech firms"
          ],
          img: metropoliaImg,
          link: "https://www.metropolia.fi/en/study-at-metropolia/bachelors-degrees/information-technology"
        },
        {
          name: "University of Oulu",
          location: "Oulu, Finland",
          desc: "Offers an advanced Master's Programme in Software Engineering and Information Systems, designed for graduates who want to deepen their expertise in digital services, scalable architectures, and software engineering.",
          fee: "€10,000 / Year (~₹10.86 Lakh)",
          duration: "2 Years (120 ECTS)",
          exams: "Bachelor's in IT/Computing/Software, English test",
          features: [
            "Degree: Master of Science",
            "Focus on software-defined products and information systems design",
            "Application period: 7–21 January 2027"
          ],
          img: ouluImg,
          link: "https://edu.oulu.fi/en/apply/masters-software-engineering-and-information-systems"
        },
        {
          name: "Aalto University",
          location: "Espoo, Greater Helsinki, Finland",
          desc: "Offers a Master's Programme in Information Networks combining technical knowledge with digital services, organizational transformation, and platform ecosystems.",
          fee: "€17,000 / Year (~₹18.46 Lakh)",
          duration: "2 Years (120 ECTS)",
          exams: "Relevant Bachelor's degree, academic merit, English proficiency",
          features: [
            "Degree: Master of Science (Technology)",
            "Cross-disciplinary curriculum combining technology, human-centric design, and business",
            "Application period: 7 December 2026–5 January 2027"
          ],
          img: aaltoImg,
          link: "https://www.aalto.fi/en/study-options/information-networks-master-of-science-technology"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Requirements",
      title: "4. Eligibility & Admission Requirements",
      groups: [
        {
          t: "p",
          items: [
            "Eligibility depends on whether you are applying for an undergraduate bachelor’s degree or postgraduate master’s degree in Finland.",
            "**Bachelor’s Eligibility Requirements:**",
            "• A recognised upper secondary school qualification equivalent to Finnish university-entry requirements (Class 12 completion).",
            "• Required academic preparation for the selected programme (notably Mathematics, Physics, or Computer Science).",
            "• English-language proficiency evidence (IELTS, TOEFL, PTE Academic, or university exemption), where required.",
            "• SAT results or entrance-test results, if specified by the institution.",
            "**Master’s Eligibility Requirements:**",
            "• A recognised bachelor’s degree in Information Technology, Computer Science, Information and Communication Technology, Software Engineering or a related discipline.",
            "• Relevant academic preparation in programming, mathematics, computing or information systems.",
            "• Academic performance meeting the university’s minimum threshold.",
            "• English-language proficiency evidence, where required.",
            "• Relevant work experience if applying to a professional master’s programme at a University of Applied Sciences that requires it.",
            "**Documents Required for Submission:**",
            "• Bachelor's: Class 10 & 12 marksheets, qualification certificates, passport, language test results, and SAT/entrance scores where applicable.",
            "• Master's: Bachelor's degree certificate, academic transcripts, detailed CV, motivation letter / statement of purpose, and recommendation letters.",
            "**Edu-Hawk Worldwide** helps students understand programme-specific admission criteria, shortlist suitable courses, and organise application documentation."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living",
      title: "5. Cost of Studying Information Technology in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The total cost depends on the degree level, institution, city, and living arrangements. Non-EU/EEA students pay tuition fees for English-taught degree programmes. Currency conversion used: €1 ≈ ₹108.60.",
            "**Bachelor’s Courses: Annual Tuition Fees**"
          ]
        },
        {
          t: "table",
          headers: ["University", "Programme", "Annual Fee in EUR", "Approximate Fee in INR"],
          rows: [
            ["University of Eastern Finland", "Information Technology", "€10,000", "₹10.86 lakh"],
            ["University of Turku", "Information & Communication Technology", "€10,000", "₹10.86 lakh"],
            ["Metropolia UAS", "Information Technology (B.Eng.)", "€11,500", "₹12.49 lakh"]
          ]
        },
        {
          t: "p",
          items: [
            "**Master’s Courses: Annual Tuition Fees**"
          ]
        },
        {
          t: "table",
          headers: ["University", "Programme", "Annual Fee in EUR", "Approximate Fee in INR"],
          rows: [
            ["University of Eastern Finland", "Information Technology", "€10,000", "₹10.86 lakh"],
            ["University of Turku", "ICT – Cyber Security or Data Analytics", "€12,000", "₹13.03 lakh"],
            ["University of Oulu", "Software Engineering & Information Systems", "€10,000", "₹10.86 lakh"],
            ["Aalto University", "Information Networks", "€17,000", "₹18.46 lakh"]
          ]
        },
        {
          t: "p",
          items: [
            "**Estimated Monthly Living Expenses for Students in Finland**"
          ]
        },
        {
          t: "table",
          headers: ["Expense Category", "Monthly Cost in EUR", "Approximate Monthly Cost in INR"],
          rows: [
            ["Accommodation", "€300 – €700", "₹32,580 – ₹76,020"],
            ["Food and groceries", "€200 – €350", "₹21,720 – ₹38,010"],
            ["Local transport", "€40 – €80", "₹4,344 – ₹8,688"],
            ["Personal expenses", "€100 – €200", "₹10,860 – ₹21,720"],
            ["Estimated Total Monthly Budget", "€640 – €1,330", "₹69,504 – ₹1,44,438"]
          ]
        },
        {
          t: "p",
          items: [
            "**Scholarships and Tuition Fee Waivers:** Some Finnish universities offer scholarships, tuition waivers or early-bird discounts. For example, the University of Eastern Finland lists a 30% early-bird discount for eligible students in its 2027 intake, subject to published payment conditions. Other merit waivers may depend on academic progress."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions",
      title: "6. Admission Process for Information Technology in Finland",
      groups: [
        {
          t: "step",
          num: "01",
          title: "Choose Your Degree Level",
          desc: "Decide whether you want a bachelor’s degree after Class 12 or a master’s degree after undergraduate graduation."
        },
        {
          t: "step",
          num: "02",
          title: "Shortlist Universities",
          desc: "Compare programmes, specialisations (Cybersecurity, Data Analytics, IoT, Software Engineering), fees, language requirements and locations."
        },
        {
          t: "step",
          num: "03",
          title: "Check Academic Eligibility",
          desc: "Review required previous qualifications and any entrance-test (SAT, UAS entrance exam) or work-experience criteria."
        },
        {
          t: "step",
          num: "04",
          title: "Prepare Documents",
          desc: "Collect academic records, passport details, English test results, motivation letters, and certified translations."
        },
        {
          t: "step",
          num: "05",
          title: "Submit Your Application",
          desc: "Apply through Studyinfo.fi or the university’s designated application portal during the official intake windows."
        },
        {
          t: "step",
          num: "06",
          title: "Apply for Scholarships",
          desc: "Check whether scholarships require a separate application or payment within a specified early-bird period."
        },
        {
          t: "step",
          num: "07",
          title: "Accept Offer & Enrol",
          desc: "Follow university instructions for confirming admission and paying the initial tuition fee installment."
        },
        {
          t: "step",
          num: "08",
          title: "Arrange Your Move & Residence Permit",
          desc: "Apply for the Finnish student residence permit, book student accommodation, secure health insurance, and plan travel."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Licensing",
      title: "7. Licensing, Career Opportunities & Salaries in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Information technology is generally not a licensed profession in Finland. Graduates can apply for relevant jobs based on their qualifications, technical skills and experience.",
            "Depending on their specialisation, students may pursue additional certifications in cloud computing (AWS, Azure, GCP), cybersecurity (CISSP, CEH), data analytics, and DevOps. Employers value internships, practical projects, and demonstrable technical skills.",
            "**Career Opportunities After a Bachelor’s Degree:**",
            "• IT Support Specialist, Junior Software Developer, Web Developer, Application Support Engineer, Junior Systems Administrator, Network Support Specialist, Junior Data Analyst.",
            "**Career Opportunities After a Master’s Degree:**",
            "• Software Engineer, Information Systems Specialist, Cybersecurity Specialist, Data Engineer, Cloud Engineer, Systems Analyst, IT Consultant, Technology Project Specialist, Research Engineer.",
            "Salaries depend on role, location, employer, and technical expertise. International graduates benefit from Finland’s 2-year post-study work visa to transition into full-time careers across the Nordic technology market."
          ]
        },
        {
          t: "cta",
          badge: "Global Education Pathway",
          tagline: "Start in India. Continue Abroad. Graduate Globally.",
          desc: "Connect with Edu-Hawk Worldwide and take the next step towards your international education goals in Finland.",
          phone: "+91 96307 36070",
          email: "eduhawk.global@gmail.com",
          site: "eduhawk.in",
          buttonText: "Connect With Us",
          buttonLink: "https://api.whatsapp.com/send?phone=919630736070"
        }
      ]
    }
  ],

  faqs: [
    {
      q: "Can Indian students study Information Technology in Finland in English?",
      a: "Yes. Several Finnish research universities and universities of applied sciences offer English-taught IT-related programmes. Students must meet the academic, language and documentation requirements of their selected programme."
    },
    {
      q: "What is the duration of an IT degree in Finland?",
      a: "Bachelor’s programmes generally take three to four years, depending on the institution (180 to 240 ECTS). Research university master’s programmes typically take two years (120 ECTS). Combined bachelor’s and master’s pathways take five years in total."
    },
    {
      q: "What are the tuition fees for Information Technology in Finland?",
      a: "For the programmes listed here, annual tuition fees range from approximately €10,000 to €17,000 per year (around ₹10.86 lakh to ₹18.46 lakh). Selected universities offer early-bird discounts and merit scholarships."
    },
    {
      q: "Can I apply for a master’s degree after completing a bachelor’s in IT?",
      a: "Yes. Applicants with a recognised bachelor’s degree in Information Technology or a relevant field can apply if they meet the selected master’s programme’s academic and language requirements."
    },
    {
      q: "How can Edu-Hawk Worldwide help me study Information Technology in Finland?",
      a: "Edu-Hawk Worldwide can help you explore suitable bachelor’s and master’s programmes, compare universities and tuition fees, understand eligibility requirements and prepare your application documents and residence permit application."
    }
  ]
};

export default function InformationTechnologyFinland() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/finland/information-technology"
    />
  );
}
