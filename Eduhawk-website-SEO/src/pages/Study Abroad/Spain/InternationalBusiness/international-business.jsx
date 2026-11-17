import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Spain/InternationalBusiness/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Spain/InternationalBusiness/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Spain/InternationalBusiness/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Spain/InternationalBusiness/cta_bg.webp";
import Universitat_Pompeu_FabraImg from "../../../../Images/Abroad/Spain/Engineering_UG/Computer/Universitat_Pompeu_Fabra.webp";
import cmsData from "../../../../data/study_abroad/spain/international_business.json";

const page = {
  "name": "International Business in Spain",
  "country": "Spain",
  "slug": "international_business",
  "title": "International Business in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study International Business in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study International Business in Spain, International Business in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "International Business in Spain for Indian Students",
  "heroParas": [
    "Studying International Business in Spain for Indian Students is a chance to learn about global trade, international marketing, cross-cultural management, global finance, and international business strategy."
  ],
  "overview": [
    "Studying International Business in Spain for Indian Students is a chance to learn about global trade, international marketing, cross-cultural management, global finance, and international business strategy. Spain's position in the European market makes it an attractive destination for students interested in multinational companies, international business, consulting, logistics, and global entrepreneurship.",
    "Spanish universities and business schools provide undergraduate and postgraduate courses in International Business, International Management, and Global Business. Programs may be taught in English, Spanish, or both, depending on the institution.",
    "Generally, a bachelor's degree takes three to four years and a master's degree takes one to two years. The length will depend on the university and program selected. Students looking to Study International Business in Spain should compare course structures, teaching languages, admission criteria, and career pathways before applying."
  ],
  "level": "Bachelor & Master",
  "crumb": "Business & Management / International Business",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Bachelor & Master"
    },
    {
      "label": "Course Duration",
      "value": "3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Esade Business School, IE Business School, Carlos III University of Madrid"
    },
    {
      "label": "Medium of Study",
      "value": "English & Spanish Taught"
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Spain",
      "title": "Why Study International Business in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "There is an international learning environment in Spain for students who want to learn how businesses operate in different countries and markets. Choosing to Study International Business in Spain can help students understand international markets and business practices."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Global business exposure: Discover international markets, trade regulations, and global business strategies.",
            "European market access: Gain insights into business operations in Spain and the wider European economic environment.",
            "Multicultural learning: Engage and work with students from diverse educational and professional backgrounds.",
            "Industry-oriented education: Some programs include internships, business projects, and international case studies.",
            "Language development: Strengthen your English or Spanish skills for global career opportunities.",
            "Career versatility: Prepare yourself for roles in international trade, marketing, logistics, and multinational organizations."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "International Business Courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students have a choice of undergraduate and postgraduate programs depending on their academic qualifications and career goals. International Business Courses in Spain may include topics like business management, world economics, international marketing, finance, trade, and supply chain operations."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Typical Duration",
            "Main Areas of Study"
          ],
          "rows": [
            [
              "Bachelor's in International Business",
              "3–4 years",
              "World trade, economics, management"
            ],
            [
              "Bachelor's in International Management",
              "3–4 years",
              "Leadership, world strategy, operations"
            ],
            [
              "Master's in International Business",
              "1–2 years",
              "International markets, trade, business strategy"
            ],
            [
              "Master's in International Management",
              "1–2 years",
              "Cross-cultural management, world leadership"
            ],
            [
              "MBA in International Business",
              "1–2 years",
              "Executive strategy, world business development"
            ],
            [
              "Master's in International Trade",
              "1–2 years",
              "Export-import, trade policy, logistics"
            ],
            [
              "Master's in Global Marketing",
              "1–2 years",
              "International branding, market research"
            ],
            [
              "Master's in Supply Chain Management",
              "1–2 years",
              "Procurement, distribution, world logistics"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Length and degree names vary by school. Some programs combine international business with finance, economics, marketing, or management. Students comparing International Business Courses in Spain should review the course structure and teaching language offered by each institution."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best International Business Schools in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Esade Business School",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: In the Barcelona area",
              "img": null
            },
            {
              "name": "IE Business School",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: Madrid, Spain.",
              "img": null
            },
            {
              "name": "Carlos III University of Madrid",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: Close to Madrid",
              "img": null
            },
            {
              "name": "Universitat Pompeu Fabra",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: Barcelona",
              "img": Universitat_Pompeu_FabraImg
            },
            {
              "name": "EADA Business School",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: Barcelona, Spain",
              "img": null
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "International Business Eligibility in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "International Business Eligibility in Spain differs from university to university, level of program, and academic background of the applicant.",
            "For undergraduate courses"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12&#2357;&#2368;&#2306; &#2346;&#2366;&#2360; &#2351;&#2366; &#2360;&#2350;&#2325;&#2325;&#2381;&#2359;&#2404;",
            "Academic marks satisfying university requirements.",
            "Copies of academic transcripts and diploma.",
            "Language skills in English or Spanish, according to the program.",
            "Entrance tests or additional procedures for the recognition of the qualifications, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "For postgraduate courses"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized Bachelor degree.",
            "Degree certificate and academic transcripts.",
            "Must be able to read, write, and speak English or Spanish as required.",
            "CV, motivation letter, or letters of recommendation, if required.",
            "Relevant work experience for some MBA or executive programs.",
            "GMAT, GRE, or other assessments, if required by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Requirements vary by university and by program. Applicants are advised to check the course criteria they are applying for before they start their application."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "International Business Admission Requirements in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students applying to study at a Spanish university may be required to submit the following documents as part of the International Business Admission Requirements in Spain :"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completed application form to the university.",
            "Valid passport.",
            "Class 10 and Class 12 marksheets for UG admission.",
            "Bachelor's degree certificate and transcripts (for graduate admission).",
            "Results from any test in English or Spanish, if applicable.",
            "Letter of motivation / Statement of purpose.",
            "Updated CV for postgraduate study.",
            "Letters of recommendation, if needed.",
            "Results of entrance examination or interview, if applicable.",
            "Additional documents requested by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants should contact their chosen institution directly for current admission requirements, document format, and application deadlines."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "International Business Fees in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost of studying international business will vary depending on the level of study, university, city, and program format. International Business Fees in Spain can vary between public universities, private universities, and business schools."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Indicative Cost"
          ],
          "rows": [
            [
              "Public university tuition",
              "€1,000–€8,000 per year"
            ],
            [
              "Private university or business school tuition",
              "€6,000–€25,000+ per year"
            ],
            [
              "Accommodation",
              "€400–€900 per month"
            ],
            [
              "Food and groceries",
              "€200–€350 per month"
            ],
            [
              "Local transport",
              "€30–€80 per month"
            ],
            [
              "Personal expenses",
              "€100–€200 per month"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are broad planning estimates and not confirmed fees for a specific International Business program. Some specialized master's programs and top business schools can cost considerably more. Fees for non-EU students can also differ.",
            "As a rough guide, €1 is around &#8377;109 – but exchange rates fluctuate. Students should also budget for travel, visa costs, health insurance, and initial accommodation."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "International Business Admission Process in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The International Business Admission Process in Spain generally involves the following steps:"
          ]
        },
        {
          "t": "ol",
          "items": [
            "Choose your programme: Select a bachelor's, master's, MBA, or specialized business qualification.",
            "Compare universities: Look at course content, tuition, teaching language, duration, and career opportunities.",
            "Verify eligibility: Ensure that you meet the academic qualifications and language requirements.",
            "Collect documents: Obtain certificates, transcripts, passport, and any other documents required.",
            "Submit your application: Go to the official university website and apply.",
            "Complete assessments: Attend an interview or entrance examination, if required.",
            "Receive an admission decision: Note offer and payment deadlines.",
            "Plan accommodation and finances: Plan your budget and living arrangements.",
            "Get a Spanish Student Visa: Follow the latest requirements of the relevant Spanish consular authorities in India.",
            "Get ready for enrolment: Book your travel, and arrange insurance, accommodation, and university registration."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students planning to Study International Business in Spain should follow the university's application instructions and keep track of admission and payment deadlines."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "International Business Career Opportunities in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates with a recognized International Business qualification are well placed for positions within multinational companies, trading businesses, consulting firms, logistics companies, and international organizations.",
            "The International Business Career Opportunities in Spain may include the following roles:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International Business Development Executive",
            "Import-Export Coordinator",
            "International Marketing Executive",
            "Global Supply Chain Analyst",
            "Assistant Trade Compliance Officer",
            "Market Research Analyst",
            "Business Consultant",
            "Export Manager",
            "Logistics and Operations Coordinator",
            "Global Account Manager",
            "Business Owner / Entrepreneur / International Trader"
          ]
        },
        {
          "t": "p",
          "items": [
            "Job prospects depend on the qualification, practical experience, language skills, demand in the industry, and eligibility to work in the country of employment."
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "International Business Jobs and Salary in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can find opportunities in international trade, marketing, business development, logistics, and global operations. Below are rough indicative gross annual salary estimates for similar positions in Spain."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Job Role",
            "Indicative Annual Salary"
          ],
          "rows": [
            [
              "International Business Assistant",
              "€22,000–€30,000"
            ],
            [
              "Import-Export Coordinator",
              "€23,000–€34,000"
            ],
            [
              "International Marketing Specialist",
              "€24,000–€38,000"
            ],
            [
              "Market Research Analyst",
              "€25,000–€38,000"
            ],
            [
              "Supply Chain Analyst",
              "€27,000–€42,000"
            ],
            [
              "Business Development Manager",
              "€30,000–€50,000"
            ],
            [
              "International Sales Manager",
              "€35,000–€60,000+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These numbers are estimates for career planning and not guaranteed outcomes. Actual salaries will depend on employer, location, experience, and language proficiency. Spanish language skills are a plus for many local jobs, while English may be sufficient for some international jobs."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Required to Study International Business in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants may be required to prepare the following documents for university admission and the visa process:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport.",
            "Class 10 and Class 12 certificates for UG admission.",
            "Bachelor's degree certificate and transcript for postgraduate education admission.",
            "Submitted application form.",
            "Results of English or Spanish language test, if required.",
            "Letter of motivation or statement of purpose.",
            "CV / résumé where applicable.",
            "Letters of recommendation, if necessary.",
            "GMAT, GRE, or entrance exam scores if you have them.",
            "Evidence of university admission.",
            "Proof of financial means for visa application.",
            "Health insurance that meets the required visa specifications.",
            "Accommodation details and other supportive documents as required by the authorities."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some documents may need to be translated, legalized, or apostilled. Students should check the most current requirements with their university and the appropriate Spanish consular authority."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "International Business in Spain – Frequently Asked Questions",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "Can Indian students pursue International Business in Spain?",
              "a": "Yes. Indian students can apply for eligible undergraduate and postgraduate International Business or related programs, subject to the admission requirements of the chosen university."
            },
            {
              "q": "How long does an International Business course in Spain take?",
              "a": "Bachelor programs typically last three to four years, and master programs one to two years. This varies from school to school and degree to degree."
            },
            {
              "q": "Is it possible to study International Business in Spain through English?",
              "a": "Yes. Some universities and business schools offer courses that are taught in English. Students are obliged to check the language of instruction of the specific course before applying."
            },
            {
              "q": "How much does it cost to study International Business in Spain?",
              "a": "Tuition is different in public universities, private universities, and business schools. Students should also consider the cost of accommodation, food, transport, insurance, and visa-related expenses."
            },
            {
              "q": "What can I do with a degree in International Business in Spain?",
              "a": "Graduates can pursue careers in international trade, import-export, marketing, business development, consulting, logistics, and global operations. If you meet the entry requirements, further study is also possible. Begin Your International Business Journey with Edu-Hawk Worldwide The right university and program choice is an important first step toward an international career. Edu-Hawk Worldwide helps students understand study options, compare universities, prepare applications, and navigate the admission process. If you are planning to Study International Business in Spain for Indian Students , contact Edu-Hawk Worldwide for help in program selection and admission planning. To learn more, visit: https://www.eduhawk.in/"
            }
          ]
        }
      ]
    }
  ]
};

export default function InternationalBusinessSpain() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle || page.name,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: (cmsData?.overview && cmsData.overview.length > 0 && cmsData.overview[0] !== "")
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
    seo: {
      title: cmsData?.seo?.title || page.title,
      description: cmsData?.seo?.description || page.description,
      keywords: cmsData?.seo?.keywords || page.keywords,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/spain/international-business"
    />
  );
}
