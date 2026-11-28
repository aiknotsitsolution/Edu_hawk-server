import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/image1.png";
import uniImg2 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/image2.png";
import uniImg3 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Automobile/image3.png";
import cmsData from "../../../../../../data/study_abroad/denmark/ug_automobile-engineering.json";

const page = {
  "name": "Automobile Engineering",
  "country": "Denmark",
  "slug": "ug/automobile-engineering",
  "title": "Automobile Engineering in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Automobile Engineering in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Automobile Engineering in Denmark, Automobile Engineering in Denmark for Indian Students, Best Universities in Denmark, Denmark Automobile Engineering Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Automobile Engineering in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Automobile Engineering in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Automobile Engineering."
  ],
  "level": "B.Eng / B.Sc. Automobile Engineering",
  "crumb": "Engineering / UG Engineering",
  "stats": [
    {
      "val": "DKK 60K-130K",
      "label": "Tuition / Year"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "20 Hrs/Week",
      "label": "Part-Time Work"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World Top-100 Universities",
      "desc": "Study in globally respected Danish institutions including University of Copenhagen, DTU, and Aarhus University."
    },
    {
      "icon": "FaGraduationCap",
      "title": "Innovative PBL Learning",
      "desc": "Problem-Based Learning model focusing on collaborative projects, real-world applications, and critical analysis."
    },
    {
      "icon": "FaFileAlt",
      "title": "High Living Standard & Safety",
      "desc": "Denmark consistently ranks among the happiest, safest, and most progressive countries in the world."
    },
    {
      "icon": "FaCheckCircle",
      "title": "Post-Study Work Visa",
      "desc": "Non-EU graduates are eligible for post-study residence permits to seek employment and build global careers."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Denmark",
      "title": "Why Study Automobile Engineering in Denmark?",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark is a great place for students who want to study automotive technology, electric cars, vehicle design and sustainable transport. The country is strongly focused on green mobility, energy efficiency and innovative engineering, which makes it relevant for students exploring the future of the automobile industry. Studying **Automobile Engineering in Denmark** can help students understand modern vehicle technologies and developments in sustainable transportation.",
            "A bachelor's degree in automobile engineering helps students to learn about the design of vehicles, engine systems, automotive electronics, manufacturing and performance of vehicles. Depending on the program, students may also study electric mobility, hybrid vehicles, autonomous driving technology and vehicle safety systems.",
            "For students considering **Automobile Engineering in Denmark for Indian students**, related engineering courses can provide a foundation for entering the automotive and mobility sectors. **Edu-Hawk Worldwide** can help students explore suitable study options and understand the international admission process."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Car Engineering Courses in Denmark",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can explore automobile engineering and related bachelor\u2019s degree courses, for example:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Bachelor of Science in Automotive Engineering** \u2013 vehicle design, automotive systems and performance.",
            "**Bachelor\u2019s in Automotive Engineering** \u2013 vehicle components, production and testing.",
            "**Bachelor of Mechanical Engineering** \u2013 mechanics, thermodynamics, materials and machine design.",
            "**Bachelor's degree in Mechatronics Engineering** \u2013 automotive electronics, sensors, robotics and control systems.",
            "**Bachelor's in Electrical Engineering** \u2013 electric vehicle systems, batteries and power electronics.",
            "**Bachelor\u2019s degree in Manufacturing Engineering** \u2013 production systems, industrial processes and quality control."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students researching **Automobile Engineering courses in Denmark** should also explore mechanical, electrical and mechatronics engineering programs. In Denmark, there may not be many automobile engineering bachelor degrees. For students who want to specialize in the automotive sector, mechanical engineering and mechatronics are useful alternatives.",
            "The availability of **Car Engineering courses in Denmark** depends on the institution, course structure and language of instruction. Students should compare the subjects and practical learning opportunities before choosing a program."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Automobile Engineering Universities in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Automobile Engineering programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Copenhagen (UCPH)",
          "location": "Copenhagen, Denmark",
          "fee": "DKK 65,000 \u2013 120,000 / Year",
          "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
          "img": uniImg1
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Kongens Lyngby, Denmark",
          "fee": "DKK 75,000 \u2013 115,000 / Year",
          "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
          "img": uniImg2
        },
        {
          "name": "Aarhus University (AU)",
          "location": "Aarhus, Denmark",
          "fee": "DKK 60,000 \u2013 110,000 / Year",
          "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
          "img": uniImg3
        },
        {
          "name": "Aalborg University (AAU)",
          "location": "Aalborg, Denmark",
          "fee": "DKK 58,000 \u2013 105,000 / Year",
          "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg2
        }
      ],
      "unis_data": [
        {
          "name": "University of Copenhagen (UCPH)",
          "location": "Copenhagen, Denmark",
          "fee": "DKK 65,000 \u2013 120,000 / Year",
          "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
          "img": uniImg1
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Kongens Lyngby, Denmark",
          "fee": "DKK 75,000 \u2013 115,000 / Year",
          "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
          "img": uniImg2
        },
        {
          "name": "Aarhus University (AU)",
          "location": "Aarhus, Denmark",
          "fee": "DKK 60,000 \u2013 110,000 / Year",
          "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
          "img": uniImg3
        },
        {
          "name": "Aalborg University (AAU)",
          "location": "Aalborg, Denmark",
          "fee": "DKK 58,000 \u2013 105,000 / Year",
          "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg2
        }
      ],
      "note": [
        "Tuition fees are indicative and subject to annual review by Danish higher education institutions.",
        "EU/EEA students may study tuition-free; international fees apply to non-EU/EEA citizens."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Is Automobile Engineering Available in Denmark?",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants usually need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 12th or equivalent from a recognized board.",
            "Mathematics and Physics at the level of study required.",
            "Academic marks that fulfill the university admission criteria.",
            "English proficiency for English-taught programs.",
            "Danish proficiency for programs taught in Danish."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students must ensure that the Class 12 subject combination satisfies the precise prerequisites laid down by the university.",
            "The **Automobile Engineering eligibility in Denmark** may differ according to the selected engineering program and institution. Students interested in **Automobile Engineering in Denmark for Indian students** should carefully check the required academic subjects, grades and language proficiency before applying."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Denmark Automobile Engineering Admission Requirements",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Common admissions requirements include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 and Class 12 mark sheets and certificates.",
            "Results in Mathematics and Physics.",
            "English language test results, if required.",
            "Valid passport and completed application.",
            "University requests for additional academic documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "The **Automobile Engineering admission requirements in Denmark** can vary between institutions and courses. The language of instruction is especially important: DTU\u2019s full-degree undergraduate programs except General Engineering are taught in Danish. If you are seeking English-language courses, read the course details carefully.",
            "Students should verify the course prerequisites and application deadlines through the official university website. **Edu-Hawk Worldwide** can provide study-abroad guidance to help students understand course selection and prepare their applications."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Denmark Automobile Engineering Study Cost",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indicative budgeting estimates for Indian students are as follows. The real cost will depend on the institution and the program, and your lifestyle."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Price",
            "Estimated Cost (in INR)"
          ],
          "rows": [
            [
              "Annual tuition fees",
              "\u20b98 lakh\u2013\u20b918 lakh"
            ],
            [
              "Accommodation per month",
              "\u20b940,000\u2013\u20b975,000"
            ],
            [
              "Food and groceries per month",
              "\u20b915,000\u2013\u20b925,000"
            ],
            [
              "Transport and personal expenses per month",
              "\u20b910,000\u2013\u20b920,000"
            ],
            [
              "Estimated annual living expenses",
              "\u20b98 lakh\u2013\u20b914 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are rough estimates and are not confirmed tuition fees for any automobile engineering degree. The **Automobile Engineering fees in Denmark** can vary depending on the university, program and student's fee category. Check with the university for the most up-to-date fees before applying.",
            "Students planning **Automobile Engineering in Denmark for Indian students** should also account for accommodation, food, transportation, personal expenses and other costs when preparing their study budget."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Automobile Engineering in Denmark",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Automobile Engineering admission process in Denmark** generally involves the following steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose a course:** Compare programs in automobile, mechanical, mechatronics and electrical engineering.",
            "**Eligibility check:** Check subject prerequisites, grades and language requirements.",
            "**Prepare papers:** Prepare academic transcripts, passport and language test scores.",
            "**Submit your application:** Apply via the university's official admissions portal.",
            "**Receive admission decision:** Complete any remaining requirements.",
            "**Get finances and immigration in order:** Please refer to the tuition payment instructions and complete the appropriate student residence permit process."
          ]
        },
        {
          "t": "p",
          "items": [
            "Start your preparations early, as application deadlines vary by institution and applicant category. Students can seek guidance from **Edu-Hawk Worldwide** when comparing courses, preparing documents and planning their applications for **Automobile Engineering in Denmark**."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Accreditation and Recognition",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Check the university recognition, degree title, curriculum and specialization opportunities before enrolling. Danish higher education is based on the European Credit Transfer and Accumulation System (ECTS), which enables the transfer of credits between European institutions participating in the system.",
            "If you want to work in the automobile industry in India, it is good to check the degree requirements of your desired employers and also find out if they expect any extra qualifications or practical experience."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Automobile Engineering Salary and Career Opportunities",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can find opportunities in automotive manufacturing, electric vehicles, vehicle testing, automotive electronics and mobility technology. Students completing relevant **Automobile Engineering courses in Denmark** may explore career opportunities according to their qualifications, specialization and practical experience.",
            "Possible career roles include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Automotive Engineer",
            "Automotive Systems Engineer",
            "Automotive Manufacturing Engineer",
            "Electric Vehicle Engineer",
            "Vehicle Test Engineer",
            "Research and Development Engineer \u2013 Automotive",
            "Quality Engineer"
          ]
        },
        {
          "t": "p",
          "items": [
            "Indicative annual salary band in India:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Work History",
            "Estimated Salary"
          ],
          "rows": [
            [
              "Entry level",
              "\u20b93 lakh\u2013\u20b96 lakh"
            ],
            [
              "3\u20135 years",
              "\u20b96 lakh\u2013\u20b912 lakh"
            ],
            [
              "Seasoned professionals",
              "\u20b912 lakh\u2013\u20b920 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are rough estimates and not guaranteed salaries. Salaries depend on technical skills, experience, specialization, employer and location."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents",
      "lead": "Essential details regarding automobile engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students may require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Mark sheets and certificates of Class 10 and Class 12\\.",
            "Valid passport.",
            "Marks of Mathematics and Physics subjects.",
            "Results of tests in English language, if any.",
            "Purpose statement, if requested.",
            "CV or recommendation letters, if needed.",
            "Immigration paperwork, where applicable, and financial documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always refer to the official university document checklist. Indian students applying for **Automobile Engineering in Denmark** should prepare their academic and identity documents in advance to avoid delays during the application process."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Copenhagen (UCPH)",
      "location": "Copenhagen, Denmark",
      "fee": "DKK 65,000 \u2013 120,000 / Year",
      "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
      "img": uniImg1
    },
    {
      "name": "Technical University of Denmark (DTU)",
      "location": "Kongens Lyngby, Denmark",
      "fee": "DKK 75,000 \u2013 115,000 / Year",
      "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
      "img": uniImg2
    },
    {
      "name": "Aarhus University (AU)",
      "location": "Aarhus, Denmark",
      "fee": "DKK 60,000 \u2013 110,000 / Year",
      "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
      "img": uniImg3
    },
    {
      "name": "Aalborg University (AAU)",
      "location": "Aalborg, Denmark",
      "fee": "DKK 58,000 \u2013 105,000 / Year",
      "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
      "img": uniImg1
    },
    {
      "name": "University of Southern Denmark (SDU)",
      "location": "Odense, Denmark",
      "fee": "DKK 62,000 \u2013 115,000 / Year",
      "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
      "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can Indian students pursue automobile engineering in Denmark after Class 12?",
      "a": "Sure. If you meet the academic and language requirements of the university, you can study engineering with a focus on the automotive industry. Students should check the **Automobile Engineering eligibility in Denmark** before applying."
    },
    {
      "q": "Q2. Does Denmark teach automobile engineering in English?",
      "a": "There may be few English-taught bachelor\u2019s programs dedicated to automobile engineering. Mechanical engineering and mechatronics are alternatives, but students are advised to check the language of each program."
    },
    {
      "q": "Q3. How long does it take to get a Bachelor\u2019s degree?",
      "a": "A university bachelor's degree is normally three years, though some professional engineering programs are around 3\u00bd years. The length will depend on the qualification."
    },
    {
      "q": "Q4. Are international students allowed to work while studying in Denmark?",
      "a": "International students are allowed to work under the conditions of their residence permit and current regulations."
    },
    {
      "q": "Q5. After automobile engineering, can I do a master's?",
      "a": "Yes. Graduates who fulfill the admission requirements can apply for appropriate master\u2019s programs in automotive engineering, electric mobility, mechanical engineering or related subjects. Studying **Automobile Engineering in Denmark** can be an interesting option for students interested in vehicle design, automotive technology, electric vehicles and sustainable mobility. Before selecting a university, students should compare available engineering courses, academic eligibility, language requirements, tuition fees and future career opportunities. For Indian students planning international education, **Edu-Hawk Worldwide** can provide guidance on exploring suitable programs, understanding admission requirements and preparing application documents for studying abroad."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function AutomobileEngineeringUGDenmark() {
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

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/denmark/ug/automobile-engineering"
    />
  );
}
