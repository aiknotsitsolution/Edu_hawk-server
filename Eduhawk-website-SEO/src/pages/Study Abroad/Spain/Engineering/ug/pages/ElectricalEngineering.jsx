import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/cta_bg.webp";
import Polytechnic_University_of_CataloniaImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/Polytechnic_University_of_Catalonia.webp";
import Polytechnic_University_of_ValenciaImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/Polytechnic_University_of_Valencia.webp";
import UPC_Terrassa_ESEIAATImg from "../../../../../../Images/Abroad/Spain/Engineering_UG/Electrical/UPC_Terrassa_ESEIAAT.webp";
import cmsData from "../../../../../../data/study_abroad/spain/elec_engg_ug.json";

const page = {
  "name": "Electrical Engineering - UG in Spain",
  "country": "Spain",
  "slug": "elec_engg_ug",
  "title": "Electrical Engineering - UG in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Electrical Engineering - UG in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Electrical Engineering - UG in Spain, Electrical Engineering - UG in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "BSc Electrical Engineering in Spain for Indian Students",
  "heroParas": [
    "Bachelor's in Electrical Engineering in Spain for Indian Students is a great opportunity to gain technical knowledge and practical skills in electrical systems, power generation, electronics, automation and renewable energy. Spain is well known for its engineering education, industrial research and growing focus on sustainable energy and smart technologies."
  ],
  "overview": [
    "Bachelor's in Electrical Engineering in Spain for Indian Students is a great opportunity to gain technical knowledge and practical skills in electrical systems, power generation, electronics, automation and renewable energy. Spain is well known for its engineering education, industrial research and growing focus on sustainable energy and smart technologies. Students interested in studying engineering in Europe have the option to choose between public and private universities, depending on their academic background, budget, language proficiency, and career goals.",
    "In Spain, an electrical engineering bachelor's degree is generally four years long and consists of 240 ECTS credits. But the names of the programs, the admission requirements, the tuition fees and the languages of instruction vary from university to university. Students should therefore look closely at these details before selecting a program."
  ],
  "level": "Bachelor of Engineering (B.Eng)",
  "crumb": "Engineering / Electrical (UG)",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Bachelor of Engineering (B.Eng)"
    },
    {
      "label": "Course Duration",
      "value": "3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Polytechnic University of Catalonia (UPC), Polytechnic University of Valencia (Universitat Politècnica de València), UPC Terrassa - ESEIAAT"
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
      "title": "Why Study Electrical Engineering in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Electrical Engineering in Spain can offer students strong foundation in electrical concepts, circuit design, power systems, and modern energy technologies. Spanish universities combine academic learning with technical subjects and practical laboratory work, depending on the program.",
            "Some key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Good engineering education: Study electrical principles, circuit design, electrical machines and energy systems.",
            "Renewable energy opportunities: Investigate solar power, wind power, and sustainable electricity technologies.",
            "Learning in practice: Develop technical knowledge through lab sessions, projects and if possible industry connected learning.",
            "Exposure to Europe: Familiarize yourself with the academic context in Spain and the broader European education system.",
            "Flexible career path: Prepare for careers in power systems, automation, electrical design, energy and related industries.",
            "International experience: Gain technical, communication and cross-cultural skills in a European environment."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Electrical Engineering Bachelor's Degree Courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Electrical engineering programs in Spain can be found as different degree titles such as electrical engineering, electrical technologies and electrical engineering with energy related specializations."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course or specialization",
            "Main areas of study"
          ],
          "rows": [
            [
              "Electrical Engineering",
              "Circuits, electrical machines, power systems"
            ],
            [
              "Electrical Energy Systems",
              "Electricity generation, transmission, distribution"
            ],
            [
              "Renewable Energy Technologies",
              "Solar, wind, sustainable energy systems"
            ],
            [
              "Control and Automation",
              "Control systems, industrial automation, sensors"
            ],
            [
              "Electrical and Electronic Systems",
              "Electrical circuits, instrumentation, electronic systems"
            ],
            [
              "Industrial Electrical Engineering",
              "Electrical installations, industry equipment, Energy efficiency"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are the common subject areas and program types, they are not a guaranty that each specialization is offered as a separate bachelor's degree at every Spanish university. Students are advised to check the official syllabus before applying.",
            "Some common topics may be:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Theory of Electrical Circuits",
            "Mathematics and Physics for Engineering",
            "Electrical Machines and Drives",
            "Generation and Distribution of Power",
            "Systems of Electronics and Devices",
            "Automation & Control Systems",
            "Renewable Energy Technologies",
            "Electrical Measurements & Instrumentation",
            "Power Electronics",
            "Installations électriques industrielles"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Electrical Engineering in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Polytechnic University of Catalonia (UPC)",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Place: Barcelona, Spain",
              "img": Polytechnic_University_of_CataloniaImg
            },
            {
              "name": "Polytechnic University of Valencia (Universitat Politècnica de València)",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: Valencia, Spain",
              "img": Polytechnic_University_of_ValenciaImg
            },
            {
              "name": "UPC Terrassa - ESEIAAT",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Location: Terrassa, Spain",
              "img": UPC_Terrassa_ESEIAATImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who Can Study Bachelor's Degree In Electrical Engineering In Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Here are the general requirements for Indian students to apply for an undergraduate electrical engineering program:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Educational Qualifications: Completed Class 12 or equivalent recognized secondary qualification.",
            "Relevant subjects: Mathematics and Physics are highly relevant, some programs may have other subject requirements.",
            "Academic achievement: Satisfy the admission and selection criteria of the university.",
            "Recognize qualifications: Carry out the corresponding process of access to Spanish university studies, recognition of titles or homologation.",
            "Language proficiency: Fulfill the language requirements of the program in Spanish, Catalan or English, if applicable.",
            "Other requirements: Some universities or admission paths may require entrance exams or certain documentation."
          ]
        },
        {
          "t": "p",
          "items": [
            "Meeting minimum eligibility requirements does not assure admission. The exact requirements will vary by university, program and application route."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Admission Requirements for a Bachelor's Degree in Electrical Engineering in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students applying for a degree in electrical engineering may be required to provide the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Marksheets and certificates of class 10 and class 12.",
            "Proof of accepted qualifications for entry into university.",
            "Academic transcripts and course outlines.",
            "Proof of proficiency in Spanish or English language as required.",
            "Valid passport and ID documents.",
            "Certified translation and legalization or apostille, if required.",
            "Results of the entrance examination or a document proving the recognition of qualifications."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students need to verify whether the university they have chosen requires a Spanish university entrance qualification, such as an applicable UNEDasiss accreditation, or another recognized admission route. Requirements vary among autonomous regions and institutions."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "Electrical Engineering in Spain Fees",
      "groups": [
        {
          "t": "p",
          "items": [
            "If you are looking to study abroad, you need to know the Electrical Engineering fees in Spain . Tuition rates vary by institution, campus, credit load, student status and regional fee rules applicable."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of University",
            "Sample Yearly Tuition",
            "Rough INR Equivalent"
          ],
          "rows": [
            [
              "Public",
              "€1,000-€8,000",
              "&#8377;1.09 Lakh-&#8377;8.69 Lakh"
            ],
            [
              "Private university",
              "€6,000-€20,000+",
              "&#8377;6.52 lakh-&#8377;21.72 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are not confirmed fees per each electrical engineering program and are general planning estimates. The actual costs may vary depending on the university, the academic year and the international student fee category.",
            "The INR conversions are based on an illustrative exchange rate of €1 = &#8377;108.60. Actual exchange rates and any additional fees may vary.",
            "Students are advised to ask the university for an official fee schedule for the year of intended study and to check if non-EU tuition fees apply before applying. They also need to budget for accommodation, food, transport, health insurance, study materials and visa fees."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "Bachelor's in Electrical Engineering in Spain Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Here are the general steps Indian students can follow while applying to Spanish universities:"
          ]
        },
        {
          "t": "ol",
          "items": [
            "Select an appropriate university: Check the course description, the language of instruction, the admission requirements, the tuition fees and the application deadlines.",
            "Check qualification recognition: Check the evaluation of your Indian Class 12 qualification for entry to the program you have chosen.",
            "Gather your documents: Collect your academic records, language certificates, translations and legalization if needed.",
            "Submit your application Follow the university's application or regional pre-enrolment procedure.",
            "Get and review admission offer: Review admission conditions, deadlines and tuition payment instructions.",
            "Apply for a Spanish student visa: Prepare your visa application and supporting documents as per the current requirements.",
            "Arrange accommodation and travel: Check housing, insurance and arrival arrangements prior to the start of the program."
          ]
        },
        {
          "t": "p",
          "items": [
            "The application deadlines and processes differ by university and region. Students should start early so that they have plenty of time to get qualified and get their papers in order and get their visas."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Recognition of Degrees After a Bachelor's Degree in Electrical Engineering in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "A bachelor's degree from a recognized Spanish university can help with further study and job applications abroad. That said, recognition of degrees is not automatic for all purposes or countries .",
            "Indian students who plan to work in India should check the relevant recognition and professional requirements with Indian authorities and employers. Some electrical engineering jobs may also require further qualifications, registration or approval, especially if they involve regulated professional duties.",
            "Students planning to work in Spain or another European country should also check local employment, professional registration and immigration requirements. The professional rights attached to a qualification are determined by the respective degree and the relevant regulations."
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "Salary and Job Opportunities with a Bachelor's in Electrical Engineering in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can look for jobs in the energy sector, electrical equipment manufacturing, industrial automation, engineering consultancy, renewable energy and infrastructure."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Career Option",
            "Example Gross Annual Salary"
          ],
          "rows": [
            [
              "Graduate Electrical Engineer",
              "€24,000 - €32,000"
            ],
            [
              "Electrical Design Engineer",
              "€28,000-€40,000"
            ],
            [
              "Power Systems Engineer",
              "€30,000-€45,000"
            ],
            [
              "Automation Engineer",
              "€28k - €42k"
            ],
            [
              "Renewable Energy Engineer",
              "28.000-45.000"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Salary figures are average estimates, not guarantyd current or future salaries, and are for illustrative purposes only. Actual pay will vary depending on experience, location, employer, language skills and specialization.",
            "Possible career options include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Electrical design and engineering.",
            "Generation and distribution of energy.",
            "Renewable energy systems;",
            "Industrial automation & control.",
            "Manufacture of electrical equipment.",
            "Analysis of power systems.",
            "Electrical infrastructure and maintenance.",
            "Engineering consulting and technical services."
          ]
        },
        {
          "t": "p",
          "items": [
            "Graduates may also pursue further studies in power engineering, renewable energy, control systems, industrial automation or related engineering disciplines. \"Internships, technical projects and hands-on experience can help students build their professional profiles."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents for studying Bachelor of Electrical Engineering in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students should prepare the following documents according to the requirements of the university they choose:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport is OK.",
            "Class 10 and class 12 marksheets and certificates.",
            "Academic Records Transcripts.",
            "Documents of recognition of university access credential or qualification, if required.",
            "Certificate of Spanish or English language knowledge, as appropriate.",
            "Certified translations and apostille/legalisation if necessary.",
            "Form support and university application.",
            "Admission/offer letter (if issued).",
            "Financial evidence and other documents you will need for your student visa.",
            "Health insurance and accommodation details as required for visa process."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always follow the official document checklist of the university and the current Spanish consular instructions for your application."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Frequently Asked Questions About the Bachelor's in Electrical Engineering in Spain",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "Ques. Can Indian students do Electrical Engineering in Spain after Class 12?",
              "a": "Yes. Indian students can apply if they meet the university's academic requirements, recognition of qualifications, language and admission requirements."
            },
            {
              "q": "What is the length of a Bachelor's in Electrical Engineering in Spain?",
              "a": "Most programs are four years long and require 240 ECTS credits. Students are advised to consider the length of the degree they are applying for."
            },
            {
              "q": "How much to study Electrical Engineering in Spain?",
              "a": "Fees vary according to the university and the student's status. Roughly speaking, tuition for a public university can vary from €1,000 to €8,000 per year, and tuition for a private university can be even higher."
            },
            {
              "q": "Is being proficient in the Spanish language a must?",
              "a": "Depends on the program. Some courses may be taught in Spanish or Catalan, and English language courses may have separate language requirements. Applicants should check the language of instruction of each program."
            },
            {
              "q": "What are my options after getting a Bachelor's in Electrical Engineering in Spain?",
              "a": "Graduates can work in electrical design, power systems, renewable energy, industrial automation, or engineering services. They may also apply for relevant postgraduate programs, provided they meet eligibility criteria. Edu-Hawk Worldwide Helps You Plan Your Engineering Education in Spain Choosing the right university and understanding the admission process are important steps to an international education. Edu-Hawk Worldwide helps students to explore study abroad options, compare universities, understand admission requirement and prepare their applications. Edu-Hawk Worldwide assists students at every step of their study-abroad journey, from program selection and documentation to admission guidance and visa preparation. If you are looking for Bachelor's in Electrical Engineering in Spain for Indian Students , get in touch with Edu-Hawk Worldwide to discuss the right university choices and your next academic move. Bachelor's in Electrical Engineering in Spain for Indian Students Electrical Engineering in Spain Electrical Engineering Universities in Spain Electrical Engineering fees in Spain Admission Requirements for a Bachelor's Degree in Electrical Engineering in Spain Bachelor's in Electrical Engineering in Spain Admission Process Edu-Hawk Worldwide Counts are based on exact phrase matches in the article body, including headings, and exclude the keyword list and usage-count table."
            }
          ]
        }
      ]
    }
  ]
};

export default function ElectricalEngineeringUGSpain() {
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
      seoPath="/study-abroad/spain/ug/electrical-engineering"
    />
  );
}
