import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/cta_bg.webp";
import Polytechnic_University_of_CatalunyaImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/Polytechnic_University_of_Catalunya.webp";
import Universitat_Politecnica_de_ValenciaImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/Universitat_Politecnica_de_Valencia.webp";
import Pompeu_Fabra_UniversityImg from "../../../../../Images/Abroad/Spain/Engineering_UG/General/Pompeu_Fabra_University.webp";
import cmsData from "../../../../../data/study_abroad/spain/ug_hub.json";

const page = {
  "name": "Undergraduate Engineering in Spain",
  "country": "Spain",
  "slug": "ug_hub",
  "title": "Undergraduate Engineering in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Undergraduate Engineering in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Undergraduate Engineering in Spain, Undergraduate Engineering in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "Engineering Bachelor's in Spain for Indian Students",
  "heroParas": [
    "Bachelor's in Engineering in Spain for Indian Students is an opportunity for Indian students to build technical knowledge, problem-solving skills and practical abilities in fields like mechanical, civil, computer, electrical, electronics, and industrial engineering."
  ],
  "overview": [
    "Bachelor's in Engineering in Spain for Indian Students is an opportunity for Indian students to build technical knowledge, problem-solving skills and practical abilities in fields like mechanical, civil, computer, electrical, electronics, and industrial engineering.",
    "Undergraduate engineering programs in Spanish universities typically last four years and are composed of 240 ECTS credits. Students can choose from traditional engineering disciplines, as well as emerging areas such as renewable energy, robotics, artificial intelligence and sustainable infrastructure.",
    "Spain offers Indian students the opportunity of getting access to European engineering education, laboratory facilities, industry-oriented projects and scope for post-graduate study. It is important to compare the language of instruction, tuition fees, academic prerequisites, the process for the recognition of your qualification and the professional accreditation of each program before applying.",
    "Edu-Hawk Worldwide helps students understand international education options and prepare for their study abroad journey by carefully selecting universities and planning admissions."
  ],
  "level": "Bachelor of Engineering / B.Tech / Grado",
  "crumb": "Undergraduate Engineering",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Bachelor of Engineering / B.Tech / Grado"
    },
    {
      "label": "Course Duration",
      "value": "3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Polytechnic University of Catalunya (UPC), Universitat Politècnica de València (UPV), Pompeu Fabra University (UPF)"
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
      "title": "Why Study Engineering in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students who opt to study engineering in Spain will be able to lay a strong foundation in mathematics, physics, design, technology and hands on engineering applications.",
            "Major benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Higher education in Europe: Learn about the Spanish university system and other study opportunities in the rest of Europe.",
            "Learn through the following methods: Pick up technical skills in labs, projects, design assignments, and internships where possible.",
            "Specialisations: Pick from computer, mechanical, civil, electrical, electronics, robotics or industrial engineering.",
            "Research and innovation: Investigate areas like automation, renewable energy, smart infrastructure and advanced manufacturing.",
            "International exposure: Experience a multicultural academic environment and opportunities for international mobility.",
            "Further study: Progress to a master's degree or a specialized engineering program after obtaining the required bachelor's qualification."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Bachelor's Degree in Engineering Courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students looking for Bachelor's in Engineering in Spain for Indian Students can opt for a variety of undergraduate disciplines. Most bachelor programs are structured over four years and 240 ECTS. Some qualifications and professional routes may vary."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course of Engineering",
            "Duration",
            "Main areas of study"
          ],
          "rows": [
            [
              "Computer Engineering",
              "4 years",
              "Programming, algorithms, computer systems, software"
            ],
            [
              "Mechanical Engineering",
              "4 years",
              "Mechanics, materials, machine design, manufacturing"
            ],
            [
              "Civil Engineering",
              "4 years",
              "Structures, transportation, construction, infrastructure"
            ],
            [
              "Electrical Engineering",
              "4 years",
              "Electrical systems, power generation, circuits"
            ],
            [
              "Electronics Engineering",
              "4 years",
              "Electronic circuits, sensors, embedded systems"
            ],
            [
              "Industrial Engineering",
              "4 years",
              "Manufacturing, automation, production, process design"
            ],
            [
              "Robotics Engineering",
              "4 years",
              "Robotics, control systems, automation, programming"
            ],
            [
              "Chemical Engineering",
              "4",
              "Chemical processes, materials, industrial production"
            ],
            [
              "Aerospace Engineering",
              "Usually 4 years",
              "Aerodynamics, aircraft systems, propulsion"
            ],
            [
              "Biomedical Engineering",
              "Often 4 years",
              "Medical devices, biomechanics, healthcare technology"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Course availability, degree titles, teaching languages and duration differ from university to university. Please check the details of the program before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Engineering Colleges in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Polytechnic University of Catalunya (UPC)",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "UPC offers undergraduate engineering degrees, for example Civil Engineering in Barcelona. Its Civil Engineering program is in English and is listed as four years and 240 ECTS credits. The university also provides courses in mechanical and electronic engineering.",
              "img": Polytechnic_University_of_CatalunyaImg
            },
            {
              "name": "Universitat Politècnica de València (UPV)",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "UPV provides bachelor's degrees in Civil Engineering and Mechanical Engineering, usually for a period of four years with 240 credits. Its engineering programs also offer technical courses and options for further education.",
              "img": Universitat_Politecnica_de_ValenciaImg
            },
            {
              "name": "Pompeu Fabra University (UPF)",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "The UPF presents the Bachelor's Degree in Computer Engineering, with a duration of four years and 240 ECTS credits. It has a School of Engineering, and the degree has an English-taught study-group option, so it could be worth considering for students looking for computer engineering education in English.",
              "img": Pompeu_Fabra_UniversityImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who can study engineering in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "In general, applicants who want to study engineering at the bachelor's level need to meet the university's academic admission criteria. Some common factors to look out for are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 12 qualification: Passing of Class 12 from a recognized board.",
            "Related topics: Mathematics and Physics are especially relevant. Depending on the specialization chemistry may be required or recommended.",
            "Grades: Fulfilll the university's required grades and admission score.",
            "Qualification recognition: Carry out any required Indian school qualification evaluation, equivalency or recognition process.",
            "Language proficiency: Fulfilll the language requirements of the chosen program: Spanish, Catalan or English.",
            "Additional admission procedures: Complete any required entrance examination, credential evaluation, or university pre-enrolment process."
          ]
        },
        {
          "t": "p",
          "items": [
            "Meeting the minimum eligibility criteria does not guaranty admission as admission scores are competitive at some universities. Requirements vary by school and location."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Engineering Admission Requirements in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission criteria vary from one university and engineering discipline to another. Typical documents and procedures that are requested include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 and Class 12 Marksheets.",
            "Academic Transcripts, Mark Sheets.",
            "Passport and identity documents.",
            "Evidence of Mathematics and Physics coursework, if requested.",
            "Spanish or English language test results if applicable.",
            "Recognition of foreign qualifications or documents of equivalence.",
            "Forms for university application and pre-enrolment.",
            "Legalization of documents or certified translations, if necessary.",
            "Other entrance-test results and supporting documents as required by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students who want to study at a public university in Spain may have to complete the relevant recognition and university entrance procedures for international school qualifications. Please consult the university's official international admissions guidance prior to application."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "Engineering Fees in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "When planning the overall cost of an undergraduate degree, be aware of the Engineering Fees in Spain . Tuition fees vary depending on the university, engineering specialization, number of credits, region and fee category (for international students)."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University Type",
            "Sample Annual Tuition",
            "Approx. INR per annum"
          ],
          "rows": [
            [
              "Public university",
              "€1,000 - €8,000",
              "&#8377;1.09 - &#8377;8.69 lakh"
            ],
            [
              "Private University",
              "€6,000-€20,000+",
              "&#8377;6.52-&#8377;21.72 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are broad planning estimates and are not guarantyd fees for individual universities. Non-EU students may be charged different rates to EU students, and some programs are outside these ranges.",
            "For instance, the Polytechnic University of Catalonia offers its standard Civil Engineering program in Barcelona for around €1,800 per academic year to non-EU residents. Its separate English-taught program has a different fee structure published so students need to check the exact course page when budgeting.",
            "You should also include accommodation, food, transport, health insurance, visa expenses, books and other personal expenses in the total study budget. Scholarships or reduced tuition may be available, depending on the program and eligibility criteria."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "Spain Bachelor's Engineering Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students who want to Study Engineering in Spain can follow the following general steps:"
          ]
        },
        {
          "t": "ol",
          "items": [
            "Choose your engineering stream: Choose from computer, mechanical, civil, electrical, electronics, robotics or any other specialization.",
            "Shortlist universities: Compare course content, language of instruction, tuition, laboratory facilities, entry requirements.",
            "Look into academic recognition: See how your Indian Class 12 qualification needs to be evaluated for admission.",
            "Prepare documents: Prepare academic transcripts, certificates, passport details and required language test scores.",
            "Complete the admission process: Apply through the university portal or the respective regional university pre-enrolment system.",
            "Get an admission decision: Complete any additional entry or documentation requirements.",
            "Get your finances in order: Check your tuition, funding and any scholarship award.",
            "Apply for Student Visa: Check the latest Spanish student visa requirements for Indian applicants.",
            "Get ready to enrol: Reserve accommodation, insurance, travel and university registration."
          ]
        },
        {
          "t": "p",
          "items": [
            "Application deadlines vary from institution to institution. Start the process early, especially if your credentials need to be recognized, translated or further verified."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Recognition of Engineering Degrees in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students should ensure that the engineering degree they choose is appropriate for their educational and career goals before they enroll.",
            "Key considerations include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The university and the program have official recognition in Spain.",
            "Is it a university degree of any kind?",
            "Does the program have relevant engineering accreditation or quality certification?",
            "If the degree is a requirement for the master's program you want to attend.",
            "Whether the qualification meets requirements for professional registration or licensing in the country where you plan to work."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some Spanish engineering degrees provide access to some regulated professional paths, others may require further study or qualifications. For example, the Polytechnic University of Valencia points out that its Civil Engineering degree is a degree that qualifies for a regulated professional pathway.",
            "If you intend to return to India, please check with the appropriate Indian authorities, employers and professional bodies to confirm their current requirements for your intended engineering role. Not all foreign engineering degrees are recognized or eligible for professional status equally."
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "Career Opportunities and Salary after Engineering in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "A bachelor's degree in engineering can open doors to careers in technology, manufacturing, construction, infrastructure, energy and industrial sectors."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Occupation",
            "Sample gross annual income"
          ],
          "rows": [
            [
              "Graduate / Junior Engineer",
              "&pound;22,000 - &pound;30,000"
            ],
            [
              "Mechanical Engineer",
              "€25,000-€38,000"
            ],
            [
              "Civil Engineer",
              "24,000€-38,000€"
            ],
            [
              "Electrical/Electronics Engineer",
              "€25,000 - €40,000"
            ],
            [
              "Computer Engineer / Software",
              "28.000€ - 45.000€"
            ],
            [
              "Robotics or Automation Engineer",
              "28.000-45.000 €"
            ],
            [
              "Senior Engineer",
              "€40,000-€60,000+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Salary ranges are broad estimates for illustrative purposes and are not audited salary statistics or guarantyd earnings. Actual salaries vary depending on city, employer, experience, specialization, language skills and work authorization.",
            "Possible fields of employment are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Software and tech companies.",
            "Automotive and manufacturing sectors.",
            "Companies active in construction and infrastructure.",
            "Power & Renewable energy systems.",
            "Robotics and industrial automation.",
            "Telecommunications and electronic equipment.",
            "Aerospace and advanced engineering.",
            "Research and development organizations."
          ]
        },
        {
          "t": "p",
          "items": [
            "If you speak Spanish, local employers may have more opportunities for you. Other international technology and engineering companies also hire English-speaking graduates, but eligibility and hiring requirements differ."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed for Study in Engineering in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students generally have to prepare the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport (valid).",
            "Mark Sheet & Certificate of Class 10.",
            "Class 12 mark sheet & certificate.",
            "Details of subjects and academic transcripts.",
            "Documents of recognition or equivalence of qualifications, where applicable.",
            "Results of Spanish or English language proficiency, as applicable.",
            "College application and admission documents.",
            "Certified translations and legalization of documents if required.",
            "Passport size pictures.",
            "Visa financial documentation and proof of funds.",
            "Documentation requested by Spanish authorities, including health insurance."
          ]
        },
        {
          "t": "p",
          "items": [
            "The precise list will vary depending on the university, route of admission and visa process. Follow the official checklist of the intake you want to apply for."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Most asked questions about Bachelor's in Engineering in Spain",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "Can Indian students pursue engineering in Spain after 12th?",
              "a": "Yes. Indian students can apply post Class 12 after fulfilling the academic criteria, subject prerequisites, qualification recognition procedures and language requirements of their chosen university."
            },
            {
              "q": "How long does it take to study engineering in Spain?",
              "a": "Most engineering bachelor programs take four years to complete and are worth 240 ECTS credits. The amount of time can differ depending on the qualification or career path."
            },
            {
              "q": "Is IELTS required for engineering in Spain?",
              "a": "Not always. English taught courses may require IELTS, TOEFL or recognized equivalent. Spanish-taught programs may need Spanish proficiency and some programs use Catalan or a combination of languages. Check the exact language requirements before you apply."
            },
            {
              "q": "What are Engineering Fees in Spain for Indian Students?",
              "a": "Public universities charge a wide range of fees, from about €1,000 to €8,000 a year. Private universities charge more. Non-EU tuition fees vary according to the university, region, course and academic year."
            },
            {
              "q": "What is the job outlook for a bachelor's in engineering in Spain?",
              "a": "Graduates work in software development, mechanical design, civil infrastructure, electrical systems, robotics, manufacturing, renewable energy and research. Some positions may require additional qualifications, local language skills or professional recognition. Launch Your Engineering Study Abroad Adventure with Edu-Hawk Worldwide Bachelor's in Engineering in Spain for Indian Students Planning? Choosing the right university, understanding eligibility, preparing documents and completing admission formalities are important steps toward your international education goals. Edu-Hawk Worldwide assists students in researching international education options, understanding the requirements for university admission, and planning their study abroad. Take the first step to your global education dreams with Edu-Hawk Worldwide . Bachelor's in Engineering in Spain for Indian Students Study Engineering in Spain Engineering Universities in Spain Engineering Admission Requirements in Spain Engineering Fees in Spain Bachelor's Degree in Engineering Courses in Spain Edu-Hawk Worldwide"
            }
          ]
        }
      ]
    }
  ]
};

export default function UndergraduateEngineeringSpain() {
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
      seoPath="/study-abroad/spain/ug/engineering"
    />
  );
}
