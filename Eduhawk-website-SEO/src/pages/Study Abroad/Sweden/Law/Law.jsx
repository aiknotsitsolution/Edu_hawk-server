import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/Law/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/law.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/Law/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/Law/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/Law/image3.webp";
import uniImg4 from "../../../../Images/Abroad/Sweden/Law/image4.webp";


const page = {
  "name": "Law",
  "country": "Sweden",
  "slug": "law",
  "title": "Law in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Law in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Law in Sweden, Law in Sweden for Indian Students, Best Universities in Sweden, Sweden Law Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Law in Sweden for Indian Students",
  "heroParas": [
    "**Law in Sweden** offers opportunities for students interested in international law, human rights, commercial law, investment arbitration, intellectual property and legal research. Swedish universities provide different study pathways, including professional law programmes and specialised postgraduate degrees."
  ],
  "overview": [
    "However, students should understand an important distinction: most Swedish law degrees that prepare graduates for domestic legal practice are taught in Swedish, while several specialised master's programmes are available in English.",
    "For Indian students, the right pathway depends on their career goals. Those who wish to practise law in Sweden must understand the Swedish language requirements and professional qualification process. Students interested in international legal careers may consider an English-taught LL.M. after completing a recognised law degree.",
    "Through Edu Hawk worldwide study abroad guidance, students can explore suitable universities, understand admission requirements and compare the available **law courses in Sweden**."
  ],
  "level": "LLB & LLM in Law",
  "crumb": "Law",
  "stats": [
    {
      "val": "SEK 80K-150K",
      "label": "Tuition / Year"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World-Class Nordic Innovation",
      "desc": "Study in Sweden's globally ranked universities renowned for pioneering scientific breakthroughs, design thinking, and sustainable research."
    },
    {
      "icon": "FaGraduationCap",
      "title": "English-Taught Degrees",
      "desc": "Over 1,000 bachelor's and master's degree programs delivered entirely in English with international accreditation."
    },
    {
      "icon": "FaFileAlt",
      "title": "Generous Post-Study Work",
      "desc": "Sweden offers residence permits after graduation for students to seek employment or start innovative businesses."
    },
    {
      "icon": "FaCheckCircle",
      "title": "High Quality of Life",
      "desc": "Ranked among the top nations globally for safety, equality, environmental sustainability, and student well-being."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Sweden",
      "title": "Why Study Law in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden offers opportunities to develop legal knowledge through academic study, research and specialised postgraduate education. Students can explore areas of law connected with European institutions, international business and global legal systems.",
            "Key reasons to consider studying law in Sweden include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**International Legal Education:** Explore international law, international trade, arbitration, intellectual property and human rights.",
            "**Specialised Master's Programmes:** Develop advanced knowledge in a particular legal field after completing a qualifying law degree.",
            "**European Legal Environment:** Understand legal structures and institutions relevant to European and international business.",
            "**Research Opportunities:** Develop skills in legal analysis, academic research, legal writing and argumentation.",
            "**International Career Pathways:** Prepare for relevant roles in law firms, businesses, arbitration organisations, policy institutions and research.",
            "**Interdisciplinary Learning:** Connect legal knowledge with business, technology, international relations and public policy."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students who intend to practise law in Sweden should carefully check the Swedish language requirements and professional qualification pathway before choosing a programme."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Law Courses and Degree Programmes in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Swedish universities offer different legal education pathways. Programme titles, duration, teaching language and professional recognition vary between institutions."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Pathway or Degree",
            "Typical Duration",
            "Key Study Areas"
          ],
          "rows": [
            [
              "Bachelor's degree in Legal Studies, where available",
              "Usually 3 years",
              "Legal foundations, public law, private law and legal research"
            ],
            [
              "Swedish Law Programme (Juristprogrammet)",
              "4.5 years",
              "Swedish law, legal methods, civil law, criminal law and public law"
            ],
            [
              "Specialised Master of Laws (LL.M.)",
              "Usually 1\u20132 years",
              "International law, commercial law, arbitration and intellectual property"
            ],
            [
              "Master's in Investment Treaty Arbitration",
              "1 year for the 60-credit programme",
              "International investment law, dispute settlement and treaty arbitration"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Swedish professional Law Programme is generally taught in Swedish. For example, Uppsala University's 270-credit Law Programme requires applicants to meet the relevant Swedish-language requirements.",
            "English-taught opportunities are more commonly available at the master's level. Students should check the exact degree title, teaching language and entry requirements on the official university website."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Law in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Law in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\Uppsala University",
          "location": "\Uppsala University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Uppsala University offers a professional Law Programme worth 270 credits, normally completed over 4.5 years. The programme is taught in Swedish, so applicants must meet the required Swedish-language proficiency.  The university also offers the **Master's Programme in Investment Treaty Arbitration**, an English-taught postgraduate programme for eligible law graduates. It focuses on international investment law and the resolution of investment disputes.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\Stockholm University",
          "location": "\Stockholm University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Stockholm University offers specialised English-taught master's programmes, including: * LL.M. in International Commercial Arbitration Law * LL.M. in European Intellectual Property Law  These programmes are designed for students with a qualifying legal education who want to develop specialist knowledge in international commercial disputes or intellectual property law.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "\Swedish Defence University",
          "location": "\Swedish Defence University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "The Swedish Defence University offers a one-year **Master's Programme in International Operational Law**. It covers international law relating to armed conflict, military operations, human rights and peace operations. Applicants must hold a relevant legal qualification and satisfy the programme-specific academic and admission requirements.  **Important:** Programme availability, admission criteria, teaching language and tuition fees can change. Always confirm the latest information through the official university programme pages.",
          "image": uniImg3, "img": uniImg3
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study Law in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility depends on whether students are applying for an undergraduate programme, the professional Swedish Law Programme or a specialised master's degree.",
            "Indian students applying after Class 12 generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Complete Class 12 or an equivalent recognised school qualification.",
            "Meet the university's general academic and subject requirements.",
            "Demonstrate Swedish-language proficiency for programmes taught in Swedish.",
            "Fulfil any additional programme-specific admission conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "**Important for Indian students:** Studying law in English does not automatically provide the right to practise Swedish law. Students planning to become practising lawyers in Sweden should investigate the full professional qualification pathway.",
            "Applicants generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Hold a recognised bachelor's degree in law or another qualification specifically accepted by the programme.",
            "Meet the required academic background and subject-credit criteria.",
            "Demonstrate English-language proficiency.",
            "Submit academic transcripts and degree certificates.",
            "Provide a CV, statement of purpose, recommendation letters or other documents when required."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Uppsala University's Master's Programme in Investment Treaty Arbitration requires a recognised bachelor's degree with Law or Legal Science as the main field of study. The selection process also considers academic history, a CV, two recommendation letters and a statement of purpose."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Law in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **admission requirements for Law in Sweden** vary according to the programme, university and level of study.",
            "Students should check:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Accepted Class 12 or equivalent qualifications.",
            "Required academic subjects and grades.",
            "Whether the programme is taught in Swedish or English.",
            "Language proficiency requirements.",
            "Any additional university-specific admission conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "For master's programmes, universities generally assess:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Previous legal education and degree recognition.",
            "Relevant academic subjects and credit requirements.",
            "Academic performance.",
            "English-language proficiency.",
            "Programme-specific application documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "The English requirement for many English-taught university programmes corresponds to Swedish upper-secondary English 6, although accepted tests, scores and exemption rules vary. Students should check the requirements listed by University Admissions and the individual university.",
            "Some programmes also require a CV, recommendation letters or a statement of purpose. Applicants should follow the official document checklist rather than assume that every programme requires the same documents."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Law in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **cost of studying Law in Sweden** depends on the university, programme, duration and the student's living arrangements.",
            "Students from countries outside the EU/EEA and Switzerland generally pay tuition fees unless they qualify for an exemption."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and Programme",
            "Duration",
            "Tuition Fee"
          ],
          "rows": [
            [
              "Uppsala University \u2013 Law Programme",
              "4.5 years",
              "First instalment: SEK 49,500 for the 2026 intake"
            ],
            [
              "Uppsala University \u2013 Master's Programme in Investment Treaty Arbitration",
              "1 year",
              "Total: SEK 114,000 (approximately \u20b910.83 lakh)"
            ],
            [
              "Swedish Defence University \u2013 International Operational Law",
              "1 year",
              "SEK 123,500 (approximately \u20b911.73 lakh)"
            ],
            [
              "Stockholm University \u2013 European Intellectual Property Law",
              "1 year",
              "Check the current fee with the university"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Uppsala Law Programme is taught in Swedish. Its first tuition instalment is not the total cost of the full degree. The other figures are programme fees published for the relevant intakes and should be reconfirmed before applying.",
            "The INR conversions are indicative and based on an exchange rate of **SEK 1 \u2248 \u20b99.50**."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Approximate Monthly Cost"
          ],
          "rows": [
            [
              "Accommodation",
              "SEK 4,000\u20137,000 (\u20b938,000\u2013\u20b966,500)"
            ],
            [
              "Food and groceries",
              "SEK 2,000\u20133,000 (\u20b919,000\u2013\u20b928,500)"
            ],
            [
              "Local transport",
              "SEK 600\u20131,000 (\u20b95,700\u2013\u20b99,500)"
            ],
            [
              "Personal and study expenses",
              "SEK 1,000\u20133,000 (\u20b99,500\u2013\u20b928,500)"
            ],
            [
              "**Estimated total**",
              "**SEK 10,000\u201314,000 (\u20b995,000\u2013\u20b91.33 lakh)**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should also budget for travel, insurance where applicable, residence permit fees and other one-time expenses. Actual living costs depend on the city, accommodation and personal spending habits."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Application Process for Law Programmes in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning to apply for **Law in Sweden** should follow these general steps:",
            "**Step 1: Choose the Right Study Pathway**",
            "Decide whether you want to pursue an undergraduate legal qualification, the professional Swedish Law Programme or a specialised master's degree.",
            "**Step 2: Check the Language of Instruction**",
            "Confirm whether the programme is taught in Swedish or English and whether you meet the required language proficiency.",
            "**Step 3: Review Academic Eligibility**",
            "Check the university's school-level requirements for undergraduate programmes or the relevant law-degree and subject requirements for postgraduate programmes.",
            "**Step 4: Prepare Your Documents**",
            "Collect academic transcripts, degree certificates, identification documents, language test results and programme-specific application materials.",
            "**Step 5: Apply Through the Official Portal**",
            "Many international programmes accept applications through the University Admissions in Sweden portal. Follow the application instructions provided by the university.",
            "**Step 6: Pay Applicable Fees**",
            "Applicants who are not exempt may need to pay an application fee and tuition fees according to the university's instructions.",
            "**Step 7: Plan Your Move**",
            "After receiving admission, arrange finances, accommodation, travel and a residence permit for studies if required.",
            "The application deadline for Uppsala University's Master's Programme in Investment Treaty Arbitration is **15 January 2027** for the Autumn 2027 intake, according to the information provided for this programme. Other universities and courses may have different deadlines, so check the official programme page before applying."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Studies and Professional Development",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree in law or an equivalent qualifying legal education, students may pursue specialised postgraduate studies in areas such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International Commercial Arbitration",
            "European Intellectual Property Law",
            "International Investment Law",
            "International Operational Law",
            "International Public Law and Human Rights",
            "Corporate and Business Law",
            "Technology, Data Protection and Digital Law"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students can also develop professional skills through legal research, moot court activities, internships where available, academic writing and engagement with international legal institutions.",
            "A specialised LL.M. can support career development in international disputes, intellectual property, investment law and corporate legal work. However, completing an LL.M. does not automatically grant a licence to practise law in Sweden or another country."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities and Salary After Studying Law in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can explore career opportunities based on their qualifications, specialisation, work experience and language abilities.",
            "Potential career areas include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Legal Research and Policy",
            "Corporate Compliance",
            "Contract Administration",
            "Intellectual Property Support",
            "International Arbitration Research",
            "Legal Operations",
            "Human Rights and Non-Governmental Organisations",
            "International Business and Regulatory Affairs"
          ]
        },
        {
          "t": "p",
          "items": [
            "Salary levels vary considerably depending on the employer, role, professional experience, language proficiency and whether the position requires a specific professional qualification.",
            "As an illustrative planning estimate, entry-level legal and compliance roles may offer around **SEK 30,000\u201340,000 gross per month**. Experienced professionals may earn more, but these figures are not guaranteed or verified salary bands for every legal profession.",
            "For international graduates, many domestic legal positions require Swedish-language proficiency. Some opportunities in international companies, arbitration, research and compliance may operate primarily in English, but competition and employer requirements vary."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required for Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students should prepare the documents specified by their chosen university and programme. These may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or acceptable identification.",
            "Class 10 and Class 12 certificates and mark sheets for undergraduate applicants.",
            "Bachelor's degree certificate and academic transcripts for master's applicants.",
            "Proof of English or Swedish proficiency, where applicable.",
            "CV or r\u00e9sum\u00e9, if requested.",
            "Statement of purpose or letter of motivation, if required.",
            "Letters of recommendation, where applicable.",
            "Evidence of relevant legal education, if required.",
            "Official translations of documents, where necessary."
          ]
        },
        {
          "t": "p",
          "items": [
            "For Uppsala University's Master's Programme in Investment Treaty Arbitration, applicants are required to submit a CV, a one-page statement of purpose and two recommendation letters, in addition to the relevant academic documents."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\Uppsala University",
      "location": "\Uppsala University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Uppsala University offers a professional Law Programme worth 270 credits, normally completed over 4.5 years. The programme is taught in Swedish, so applicants must meet the required Swedish-language proficiency.  The university also offers the **Master's Programme in Investment Treaty Arbitration**, an English-taught postgraduate programme for eligible law graduates. It focuses on international investment law and the resolution of investment disputes.",
      "image": uniImg4, "img": uniImg4
    },
    {
      "name": "\Stockholm University",
      "location": "\Stockholm University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Stockholm University offers specialised English-taught master's programmes, including: * LL.M. in International Commercial Arbitration Law * LL.M. in European Intellectual Property Law  These programmes are designed for students with a qualifying legal education who want to develop specialist knowledge in international commercial disputes or intellectual property law.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\Swedish Defence University",
      "location": "\Swedish Defence University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "The Swedish Defence University offers a one-year **Master's Programme in International Operational Law**. It covers international law relating to armed conflict, military operations, human rights and peace operations. Applicants must hold a relevant legal qualification and satisfy the programme-specific academic and admission requirements.  **Important:** Programme availability, admission criteria, teaching language and tuition fees can change. Always confirm the latest information through the official university programme pages.",
      "image": uniImg2, "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Law in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Law in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Law in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function LawSweden() {
  const dynamicPage = {
    ...page,
    name: page.name,
    introTitle: cmsData.hero?.title || page.introTitle,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      : page.stats,
    seo: {
      title: cmsData.seo?.title || page.title,
      description: cmsData.seo?.description || page.description,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/sweden/law"
    />
  );
}
