import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/Nursing/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/Nursing/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/Nursing/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/nursing.json";

const page = {
  name: "Nursing",
  country: "Switzerland",
  slug: "nursing",
  title: "Nursing in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Nursing in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Nursing in Switzerland, Nursing in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Nursing Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Indian Students Nursing in Switzerland",
  heroParas: [
    "**Nursing in Switzerland for Indian Students** gives you a chance to explore a healthcare education system focusing on patient safety, practical clinical experience, evidence-based care and professional development. The nursing programs train students to assist patients in hospitals, community healthcare services, rehabilitation centers, elderly care facilities and other medical environments."
],
  overview: [
    "Students interested in **Study Nursing in Switzerland** have access to bachelor studies in nursing, master programs, specialized postgraduate education and nursing research. However, Switzerland has special language, admission and professional registration requirements. Depending on the institution and region, many qualifying nursing programs are taught in German, French or Italian.",
    "For Indian applicants, **Nursing in Switzerland for Indian Students** also involves understanding the eligibility criteria, language requirements, tuition costs and professional recognition process before selecting a nursing program.",
    "\u201cImportant for Indian students: A nursing qualification from Switzerland does not ensure you employment or professional registration in Switzerland or India. Please check the language requirements, eligibility for international admission and recognition of your qualifications before you apply."
],
  level: "B.Sc. in Nursing",
  crumb: "Healthcare & Nursing",
  stats: [
    {
        "label": "Degree Choices",
        "value": "B.Sc. in Nursing (Pflege)"
    },
    {
        "label": "Course Duration",
        "value": "3 to 4 Years"
    },
    {
        "label": "Top Institutions",
        "value": "ZHAW, BFH & SUPSI"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,000 \u2013 CHF 3,000 / Year"
    }
],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Study Nursing in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Study Nursing in Switzerland** and discover a healthcare education system that offers:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Practical healthcare education: Gain nursing knowledge through classroom instruction, simulation, and supervised clinical placements.",
                        "Patient centered care: understanding patient safety, communication, health assessment and care planning.",
                        "Exposure to contemporary healthcare: Study in a healthcare setting including hospitals, rehabilitation services and community care.",
                        "Opportunities to specialize: Explore areas such as geriatric nursing, mental health, community nursing and advanced clinical practice.",
                        "International learning environment: Exposure to healthcare practices and multi-cultural patient population.",
                        "Research and professional development: progress toward advanced nursing education, health care leadership or research, as appropriate for qualifications and eligibility."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Students planning to **Study Nursing in Switzerland** should compare the course structure, teaching language and clinical training opportunities offered by different institutions."
                ]
        }
]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Nursing Studies in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Nursing Courses in Switzerland** are different from one institution to the next. Popular study choices include:"
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Course",
                        "Duration",
                        "Key Topics"
                ],
                "rows": [
                        [
                                "Bachelor of Science in Nursing",
                                "Approximately 3 years full-time",
                                "Nursing fundamentals, patient care, clinical placements, healthcare sciences"
                        ],
                        [
                                "Masters in Nursing Science",
                                "1.5-2 years",
                                "Advanced nursing, research, evidence-based practice, healthcare improvement"
                        ],
                        [
                                "Advanced Nursing Practice",
                                "Variable",
                                "Complex patient care, clinical decision-making, advanced practice"
                        ],
                        [
                                "Nursing Management and Leadership",
                                "Variable",
                                "Healthcare management, leadership, team management"
                        ],
                        [
                                "Mental Health Nursing",
                                "Variable",
                                "Mental health assessment, therapeutic communication, patient care"
                        ],
                        [
                                "Geriatric Nursing",
                                "Variable",
                                "Elderly care, chronic illness, rehabilitation, quality of life"
                        ],
                        [
                                "Nursing Research",
                                "Variable",
                                "Research methodology, clinical evidence, healthcare outcomes"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Nursing Courses in Switzerland** may include practical placements, classroom learning and research-based education. Students should check whether the selected course is an entry-level nursing qualification or a postgraduate specialization.",
                        "Durations are indicative and depend on the program structure, prior education and mode of study. Specialist courses may be post-graduate qualifications rather than entry-level nursing degrees."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Nursing Schools in Switzerland",
      lead: "Explore leading Swiss universities offering accredited Nursing programs, modern facilities, and research opportunities.",
      unis: [
        {
          name: "Zurich University of Applied Sciences (ZHAW)",
          location: "Winterthur | German",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Provides nursing education and tracks for various levels of education including registered nurses.",
          img: uniImg1
        },
        {
          name: "Bern University of Applied Sciences (BFH)",
          location: "Bern | German",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Explore nursing programs, applied health care education and professional development opportunities.",
          img: uniImg2
        },
        {
          name: "SUPSI",
          location: "Italian Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Offers a Bachelor of Science in Nursing degree. The school publishes tuition and admission information for specific programs. These institutions do not guarantee admission offer to Indian applicants. For international applicants check the exact entry conditions as nursing programs often have practical placements and local- language requirements.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Who can Study Nursing in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students aspiring for **Nursing Admission in Switzerland** must know the eligibility criteria for academics and language before applying.",
                        "For **Nursing Admission in Switzerland**, Indian students should carefully review the academic qualifications and language proficiency required by their chosen university.",
                        "**Bachelor of Science in Nursing**",
                        "Indian students may need to meet the following requirements:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "12th class or equivalent qualification.",
                        "Subjects and grades the institution will accept.",
                        "Recognition of foreign qualifications of schools.",
                        "German, French or Italian language proficiency depending on the program.",
                        "Any entry assessment or preparatory modules required.",
                        "Meeting health, immunization and clinical placement requirements as applicable."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Some institutions require further practical experience, an aptitude test or a preparatory route. Finishing Class 12 may not be sufficient to meet the entry criteria of every program.",
                        "**Master of Nursing**",
                        "Applicants must typically have:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "A bachelor\u2019s degree in nursing or a related discipline recognized by the program.",
                        "Degree certificates and transcripts of academic records",
                        "Language requirement.",
                        "Relevant work experience, if applicable.",
                        "CV and motivation letter (if applicable).",
                        "Evidence of clinical experience or research for selected programs."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Students should be able to differentiate between a master\u2019s degree for academic or research development and an award that leads to a regulated clinical role."
                ]
        }
]
    },
    {
      slot: "language",
      eyebrow: "Language Requirements",
      title: "Admission Requirements for Nursing Studies in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The university can require:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Filled up application form.",
                        "Passport valid.",
                        "Marksheets and certificates of Class 10 and Class 12",
                        "Bachelor\u2019s degree and transcripts (for postgraduate admission)",
                        "Documents of nursing registration or professional experience, if applicable.",
                        "Certificates in German, French or Italian language.",
                        "CV/Resume.",
                        "Purpose statement.",
                        "Letters of recommendation (if applicable).",
                        "Legalized translations or certified documents.",
                        "Health documentation or evidence for clinical placement."
                ]
        },
        {
                "t": "p",
                "items": [
                        "The exact list depends on the institution and what kind of applicant they are. Check all requirements with the university before paying an application fee.",
                        "Students applying for **Nursing Admission in Switzerland** should prepare their academic and language documents in advance to avoid delays during the application process."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Nursing fees in Swiss",
      groups: [
        {
                "t": "p",
                "items": [
                        "When budgeting for your international education, it's important to understand **Nursing Fees in Switzerland**.",
                        "Living in Switzerland is not cheap, but studying at a public university is relatively inexpensive."
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
                                "Tuition at public institutions",
                                "CHF 1,000\u20135,000 per semester"
                        ],
                        [
                                "Accommodation",
                                "CHF 700\u20131,500 per month"
                        ],
                        [
                                "Food and groceries",
                                "CHF 400\u2013700 per month"
                        ],
                        [
                                "Transport",
                                "CHF 50\u2013120 per month"
                        ],
                        [
                                "Health insurance",
                                "CHF 100\u2013350+ per month"
                        ],
                        [
                                "Personal expenses and study materials",
                                "CHF 150\u2013400 per month"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Nursing Fees in Switzerland** can vary depending on the university, course and student category. Indian students should compare tuition fees and living expenses before choosing their preferred institution.",
                        "These are general budget estimates, and are not confirmed fees for all nursing programs. Fees vary between schools and by student category. Some universities of applied sciences charge additional fees for international students.",
                        "Students should also factor in the cost of their visa, travel, insurance and any expenses related to clinical placements."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "How to Get into Nursing School in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The typical steps for **Nursing Admission in Switzerland** are as follows:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "1. Choose the qualification: Choose from a bachelor's, master's or specialized nursing program.",
                        "2. Academic Institutions: Compare syllabus, location, fees and clinical training.",
                        "3. Verify international eligibility: Ensure that the institution recognizes your academic qualification and applicant category.",
                        "4. Language requirements Prepare for the language requirements of the program in German, French or Italian.",
                        "5. Prepare your documents: Get together your academic transcripts, proof of language proficiency and any other documents that have been asked for.",
                        "6. Apply on time: Submit your application through the official admission portal.",
                        "7. Take assessments: Attend interviews, entrance tests and practical assessments if required.",
                        "8. Check your offer: Check course structure, placement requirements and fees.",
                        "9. Organize finances and accommodation: Establish a realistic budget for the entire period of study.",
                        "10. Apply for the appropriate visa: Check the latest Swiss immigration guidelines for Indian students."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Do not assume that an English-language nursing course or a student visa automatically qualifies you for clinical employment."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Nursing Degree Recognition and Career Prospects",
      groups: [
        {
                "t": "p",
                "items": [
                        "Nursing graduates can search for employment or continue their studies in hospitals, community health services, rehabilitation centers, elderly care, research and healthcare management according to their qualifications and eligibility for professional practice.",
                        "For students considering **Nursing in Switzerland**, understanding the professional recognition process is important before planning a nursing career in the country.",
                        "Career paths could include:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "RN",
                        "Staff nurse hospital",
                        "Nurse, Community Health",
                        "Nurse in geriatric care",
                        "Nurse, mental health",
                        "Co-ordinator, clinical research",
                        "Nurse educator with the necessary credentials",
                        "Nurse team leader/health care manager with relevant experience"
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Practice in Switzerland:** Nursing is a regulated health profession. Generally, foreign nursing qualifications must be recognized by the Swiss Red Cross (SRC). Language skills are also tested during this process. The SRC accepts B2 in German, French and Italian as the language levels for its recognition procedure.",
                        "If you are a returning student to India, before enrolling check with the appropriate nursing regulatory authority for current requirements regarding Indian nursing registration and recognition of qualifications."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Career Scope",
      title: "Salary and Job Opportunities After Nursing",
      groups: [
        {
                "t": "p",
                "items": [
                        "Salaries for nurses in Switzerland differ depending on canton, employer, qualifications, experience, shift patterns and specialization. The following are illustrative annual gross salary estimates only, not guarantyd salaries or verified current averages."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Job Role",
                        "Illustrative Annual Salary"
                ],
                "rows": [
                        [
                                "Entry-Level Nurse",
                                "CHF 60,000\u201375,000"
                        ],
                        [
                                "Registered Nurse",
                                "CHF 70,000\u201390,000"
                        ],
                        [
                                "Experienced Clinical Nurse",
                                "CHF 80,000\u2013100,000"
                        ],
                        [
                                "Specialist Nurse",
                                "CHF 85,000\u2013110,000+"
                        ],
                        [
                                "Nursing Team Leader",
                                "CHF 90,000\u2013120,000+"
                        ],
                        [
                                "Nursing or Healthcare Manager",
                                "CHF 100,000\u2013140,000+"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "Actual earnings could be less or more than these ranges and should not be relied upon as a guaranty of future income. Graduates must meet the appropriate registration and employment requirements before they can practice."
                ]
        }
]
    },
    {
      slot: "important",
      eyebrow: "Key Considerations",
      title: "Required Documents for Nursing Studies in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The usual documents needed are:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Passport valid.",
                        "Class 10 and Class 12 mark sheets and certificates.",
                        "Academic Transcripts and bachelor degree for admission to Master",
                        "Nursing registration documents (if applicable).",
                        "Language certificates.",
                        "CV or resume.",
                        "Letter of motivation.",
                        "If requested, letters of recommendation.",
                        "Admission Proof.",
                        "Financial documents for visa application.",
                        "Information on accommodation and insurance.",
                        "Certified translations or authenticated copies where necessary."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Be sure about the final requirements by checking the current Swiss visa instructions and the university's official checklist."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Nursing in Switzerland after Class 12?",
        "a": "Maybe, but it is contingent upon the institution's qualification criteria, language requirements, conditions of clinical training, eligibility for international applicants and so on. Students are encouraged to review these requirements before applying."
    },
    {
        "q": "Length of nursing degree in Switzerland?",
        "a": "The full-time Bachelor of Science in Nursing usually lasts about three years, although some pathways vary."
    },
    {
        "q": "Is Nursing taught in English in Switzerland?",
        "a": "Usually a Master\u2019s program lasts for about 1.5-2 years depending on the program. Many of the qualifying nursing courses are predominantly taught in German, French or Italian. Students should check the language of instruction and clinical placement requirements of each institution."
    },
    {
        "q": "Can Indian nurses work in Switzerland after nursing degree?",
        "a": "They may be eligible if they meet the relevant requirements for professional recognition, language, immigration and employment. A foreign nursing qualification does not automatically entitle you to practise in Switzerland."
    },
    {
        "q": "Can a nursing student afford to live in Switzerland?",
        "a": "Tuition in some public institutions can be relatively moderate but expenses of living including accommodation, food, insurance and other costs are high. Students are asked to determine their total annual budget before submitting an application."
    }
],
  faqTitle: "11. Frequently Asked Questions"
};

export default function NursingAbroadSwitzerland() {
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
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/switzerland/nursing"
    />
  );
}
