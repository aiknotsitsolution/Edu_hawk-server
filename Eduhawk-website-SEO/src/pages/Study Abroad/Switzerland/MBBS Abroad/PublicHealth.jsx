import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/PublicHealth/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/PublicHealth/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/PublicHealth/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/PublicHealth/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/public-health.json";

const page = {
  name: "Public Health",
  country: "Switzerland",
  slug: "public-health",
  title: "Public Health in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Public Health in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Public Health in Switzerland, Public Health in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Public Health Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Public Health in Switzerland for Indian Students",
  heroParas: [
    "**Public Health in Switzerland for Indian Students** offers an opportunity to develop the knowledge and skills needed to improve population health, prevent diseases, analyse health data, evaluate healthcare systems, and design public health programmes. Swiss universities offer opportunities to explore epidemiology, global health, health policy, biostatistics, health promotion, and public health research."
],
  overview: [
    "Students who want to **Study Public Health in Switzerland** can explore programmes at different academic levels and gain exposure to international health research and healthcare systems. Switzerland is home to international health organisations and research institutions, making it a relevant destination for students interested in global health and international development. However, Public Health is different from clinical medical training: an MPH or related degree does not qualify a graduate to practise as a doctor.",
    "For programme research and application planning, students can also connect with **Edu-Hawk Worldwide**."
],
  level: "M.Sc. in Global Health / MPH",
  crumb: "Healthcare & Public Health",
  stats: [
    {
        "label": "Degree Choices",
        "value": "M.Sc. Global Health / MPH"
    },
    {
        "label": "Course Duration",
        "value": "1.5 to 2 Years"
    },
    {
        "label": "Top Institutions",
        "value": "Univ of Geneva, Basel & Zurich"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,000 \u2013 CHF 4,500 / Year"
    }
],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Study Public Health in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Choosing **Public Health in Switzerland for Indian Students** can provide exposure to international research, interdisciplinary education, and global healthcare challenges."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "**International health environment:** Switzerland hosts international organisations and initiatives focused on global health and disease prevention.",
                        "**Research opportunities:** Study epidemiology, biostatistics, population health, and evidence-based public health interventions.",
                        "**Interdisciplinary learning:** Connect public health with medicine, economics, social sciences, statistics, and policy.",
                        "**Global health exposure:** Explore health challenges across countries, including infectious diseases, health inequalities, and healthcare access.",
                        "**Career flexibility:** Prepare for roles in public health research, health programmes, policy, data analysis, and international development.",
                        "**Further study opportunities:** Build a foundation for doctoral research or specialised postgraduate education."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Public Health programmes may be taught in English, French, German, or a combination, depending on the university. Check the language requirements of each programme before applying."
                ]
        }
]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Public Health Courses in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Public Health Courses in Switzerland** cover several areas, including population health, epidemiology, global health, healthcare policy, and research methods."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Course",
                        "Typical duration",
                        "Main areas of study"
                ],
                "rows": [
                        [
                                "Master of Public Health (MPH)",
                                "Around 1\u20132 years",
                                "Public health practice, policy, epidemiology, health promotion"
                        ],
                        [
                                "MSc in Public Health",
                                "Around 1.5\u20132 years",
                                "Population health, research methods, disease prevention"
                        ],
                        [
                                "MSc in Epidemiology",
                                "Around 1.5\u20132 years",
                                "Disease patterns, statistics, research design"
                        ],
                        [
                                "Master\u2019s in Global Health",
                                "Around 1\u20132 years",
                                "International health systems, health equity, global health policy"
                        ],
                        [
                                "MSc in Health Sciences",
                                "Around 1.5\u20132 years",
                                "Healthcare research, health systems, applied health science"
                        ],
                        [
                                "PhD in Public Health or a related field",
                                "Usually 3\u20135 years",
                                "Advanced research, population health, policy evaluation"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "Course titles and durations vary by institution. Some universities offer related degrees rather than a programme titled exactly \u201cMaster of Public Health.\u201d"
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top Universities and Institutions for Public Health in Switzerland",
      lead: "Explore leading Swiss universities offering accredited Public Health programs, modern facilities, and research opportunities.",
      unis: [
        {
          name: "University of Geneva",
          location: "Geneva | English",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Its two-year Master of Science in Global Health explores international health challenges, interdisciplinary research, and global health policy. The programme includes a thesis and work placement or internship. A bachelor\u2019s degree or equivalent is required, and applicants are assessed through their application file.",
          img: uniImg1
        },
        {
          name: "University of Basel",
          location: "Basel | Programme-dependent",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "The University of Basel participates in the joint Master of Public Health programme. Explore its broader health sciences and research offerings if you are interested in population health, epidemiology, or health research.",
          img: uniImg2
        },
        {
          name: "University of Zurich",
          location: "Zurich | Programme-dependent",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Participates in the joint Master of Public Health programme. Its wider academic environment may also be relevant to applicants interested in epidemiology, health services, and population-health research. Which programme should you consider? The University of Geneva\u2019s MSc in Global Health is a full-time, English-taught option open to applicants from different academic backgrounds. The joint Master of Public Health is primarily designed for professionals who already have a master\u2019s-level qualification and relevant work experience. These are different pathways, so compare their eligibility rules before applying.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Eligibility to Study Public Health in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Understanding **Public Health Eligibility in Switzerland** is important before selecting a university or submitting an application.",
                        "**Master\u2019s in Global Health or a related programme**",
                        "Applicants generally need to:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Hold a recognised bachelor\u2019s degree or equivalent qualification.",
                        "Meet the programme\u2019s academic and application requirements.",
                        "Provide transcripts and other documents requested by the university.",
                        "Demonstrate proficiency in the language of instruction.",
                        "Meet any programme-specific prerequisites or selection criteria."
                ]
        },
        {
                "t": "p",
                "items": [
                        "For the University of Geneva\u2019s MSc in Global Health, applicants may come from different academic disciplines, subject to the university\u2019s admission assessment.",
                        "**Master of Public Health for working professionals**",
                        "The joint MPH coordinated by Swiss TPH is aimed at applicants with a master\u2019s-level qualification in a relevant field and professional experience. In certain circumstances, applicants with comparable qualifications and experience may be considered.",
                        "**Can students apply after Class 12?**",
                        "Most postgraduate Public Health programmes require a bachelor\u2019s degree, so Class 12 alone is not sufficient for direct entry into these master\u2019s programmes. Students who have completed school should first explore suitable bachelor\u2019s degrees in public health, health sciences, biology, biomedical sciences, or related fields, subject to each university\u2019s offerings and entry requirements."
                ]
        }
]
    },
    {
      slot: "language",
      eyebrow: "Language Requirements",
      title: "Admission Requirements for Public Health in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The **Public Health Admission in Switzerland** process generally requires students to meet academic, language, and programme-specific conditions.",
                        "Common application requirements include:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Academic certificates and transcripts.",
                        "A recognised bachelor\u2019s degree for postgraduate study.",
                        "A CV or r\u00e9sum\u00e9.",
                        "A statement of purpose or motivation letter, if requested.",
                        "Letters of recommendation, if required.",
                        "Proof of English, French, or German proficiency, depending on the programme.",
                        "Evidence of professional experience for programmes that require it.",
                        "A valid passport.",
                        "Certified translations of documents where necessary."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Admission criteria vary by institution. Meeting the minimum academic requirements does not guarantee an offer.",
                        "**Language requirements**",
                        "The University of Geneva\u2019s MSc in Global Health is taught in English, although some specialisation courses may be available only in French and passive knowledge of French is recommended.",
                        "The joint Master of Public Health coordinated by Swiss TPH lists German and English as its programme languages. Applicants should check the requirements for the modules they intend to take."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Public Health in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The **Public Health Fees in Switzerland** depend on the programme type, university, and fee category. Living expenses also vary significantly by city and accommodation."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Expense",
                        "Indicative estimated cost"
                ],
                "rows": [
                        [
                                "University tuition",
                                "CHF 435\u20132,550 per semester at selected public universities, depending on institution and student category"
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
                                "Local transport",
                                "CHF 50\u2013120 per month"
                        ],
                        [
                                "Health insurance",
                                "CHF 100\u2013350+ per month"
                        ],
                        [
                                "Personal and study expenses",
                                "CHF 150\u2013400 per month"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "University tuition figures are illustrative, based on published 2026\u201327 fee listings for selected Swiss universities; they are not a universal fee range for all programmes.",
                        "Accommodation and other living costs are budgeting estimates and should be checked against current local prices.",
                        "**Example: University of Geneva**",
                        "The University of Geneva\u2019s MSc in Global Health is a two-year programme. Its published programme information lists tuition at CHF 500 per semester, subject to the university\u2019s current fee rules.",
                        "**Example: Joint Master of Public Health**",
                        "The joint MPH coordinated by Swiss TPH has a published total course fee of approximately CHF 39,000. It is a part-time programme that can be completed over two to five years, and the fee does not include living expenses, travel, or insurance.",
                        "For help understanding programme costs and application planning, students can contact **Edu-Hawk Worldwide**.",
                        "Before applying, confirm the current tuition schedule, additional fees, scholarship eligibility, and financial evidence required for your student visa or residence permit."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "Public Health Admission Process in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students planning to pursue **Public Health in Switzerland for Indian Students** should follow a structured admission process:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "1. **Choose your study pathway:** Decide whether you want an MSc in Global Health, a Master of Public Health, or a specialised degree in epidemiology or health sciences.",
                        "2. **Check academic eligibility:** Confirm that your previous qualification and academic background meet the programme requirements.",
                        "3. **Review language requirements:** Check accepted language tests and whether courses are taught in English, French, German, or a combination.",
                        "4. **Prepare your application:** Gather transcripts, degree certificates, a CV, a motivation letter, and any required references or work-experience evidence.",
                        "5. **Apply before the deadline:** Complete the university\u2019s application process and submit all supporting documents.",
                        "6. **Arrange finances:** Prepare a realistic budget for tuition, accommodation, insurance, travel, and everyday expenses.",
                        "7. **Complete immigration formalities:** After admission, follow the applicable Swiss student visa or residence-permit process."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Deadlines vary by programme and intake. The University of Geneva publishes programme-specific application dates, while the joint MPH has its own application and module-enrolment procedures. Always use the current official admissions page rather than relying on general deadlines."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Degree Recognition and Career Scope",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Can Indian students work in Switzerland after a Public Health degree?**",
                        "A Public Health qualification can be relevant to research, health programme management, policy, and data-focused roles. Employment is not guaranteed, however, and international graduates must meet applicable work-authorisation requirements.",
                        "Roles involving regulated clinical practice may require a separate professional qualification and registration. A general Public Health degree does not qualify someone to work as a doctor, nurse, or other regulated healthcare professional.",
                        "**Can a Swiss Public Health degree be used in India?**",
                        "A Swiss degree may support applications for relevant jobs or further study in India, but acceptance depends on the employer, university, or relevant authority. Students should confirm degree-equivalency requirements if they plan to apply for government positions, regulated roles, or further academic programmes.",
                        "**Career opportunities after Public Health studies**",
                        "Graduates may pursue roles such as:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Public Health Research Assistant",
                        "Epidemiology Researcher",
                        "Health Programme Coordinator",
                        "Global Health Project Officer",
                        "Health Policy Analyst",
                        "Monitoring and Evaluation Officer",
                        "Health Data Analyst",
                        "Health Promotion Specialist",
                        "Public Health Consultant",
                        "Research or Programme Officer at an NGO or international organisation"
                ]
        },
        {
                "t": "p",
                "items": [
                        "Some positions require previous professional experience, quantitative skills, a specialised degree, or knowledge of local languages."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Career Scope",
      title: "Salary and Job Opportunities in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The following figures are illustrative annual gross salary estimates, not verified current averages or guaranteed earnings. Actual pay depends on the role, employer, experience, specialist skills, location, and work authorisation."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Career path",
                        "Illustrative annual gross salary"
                ],
                "rows": [
                        [
                                "Entry-level research or programme assistant",
                                "CHF 55,000\u201375,000"
                        ],
                        [
                                "Public Health Project Officer",
                                "CHF 65,000\u201390,000"
                        ],
                        [
                                "Epidemiology or health research professional",
                                "CHF 70,000\u2013100,000"
                        ],
                        [
                                "Health Policy Analyst",
                                "CHF 75,000\u2013105,000"
                        ],
                        [
                                "Monitoring and Evaluation Specialist",
                                "CHF 70,000\u2013100,000"
                        ],
                        [
                                "Experienced programme or project manager",
                                "CHF 90,000\u2013125,000+"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "These estimates are for preliminary planning only. Check current Swiss job advertisements and salary surveys before making financial decisions. International organisations may have different salary structures from local employers."
                ]
        }
]
    },
    {
      slot: "important",
      eyebrow: "Key Considerations",
      title: "Documents Required for Public Health Admission",
      groups: [
        {
                "t": "p",
                "items": [
                        "Prepare the documents requested by your chosen university:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Valid passport.",
                        "Class 10 and Class 12 certificates, if required.",
                        "Bachelor\u2019s degree certificate and academic transcripts.",
                        "Master\u2019s degree certificate and professional-experience records, if required for the programme.",
                        "English, French, or German language certificates, where applicable.",
                        "Updated CV or r\u00e9sum\u00e9.",
                        "Statement of purpose or motivation letter.",
                        "Letters of recommendation, if requested.",
                        "Evidence of professional experience, where required.",
                        "Certified translations of documents, if applicable.",
                        "Completed application form and proof of application-fee payment.",
                        "Additional documents required for visa or residence-permit processing."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Students seeking support with their international education planning can also explore guidance from **Edu-Hawk Worldwide**."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Public Health in Switzerland?",
        "a": "Yes, Indian students can explore suitable programmes, provided they meet the institution\u2019s academic, language, and application requirements. Eligibility should be confirmed directly with the university."
    },
    {
        "q": "Is IELTS required for Public Health in Switzerland?",
        "a": "It depends on the programme and the applicant\u2019s educational background. English-taught programmes may require proof of English proficiency or accept specified exemptions. Check the university\u2019s official requirements before booking a test."
    },
    {
        "q": "How long does a Public Health degree take in Switzerland?",
        "a": "The duration depends on the qualification. The University of Geneva\u2019s MSc in Global Health takes two years full-time, while the joint Master of Public Health coordinated by Swiss TPH is part-time and can be completed over two to five years."
    },
    {
        "q": "What is the cost of studying Public Health in Switzerland?",
        "a": "Costs vary by institution and programme. For example, the University of Geneva lists tuition of CHF 500 per semester for its MSc in Global Health, while the joint MPH coordinated by Swiss TPH has a published total course fee of approximately CHF 39,000. Living expenses are additional."
    },
    {
        "q": "What jobs can I get after studying Public Health in Switzerland?",
        "a": "Possible career paths include public health research, epidemiology, health policy, programme management, health data analysis, and work with NGOs or international health organisations. Employment depends on your qualifications, experience, language skills, and work authorisation."
    }
],
  faqTitle: "11. Frequently Asked Questions"
};

export default function PublicHealthSwitzerland() {
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
      seoPath="/study-abroad/switzerland/public-health"
    />
  );
}
