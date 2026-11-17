import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/image1.png";
import uniImg2 from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/image2.png";
import uniImg3 from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Civil/image3.png";
import cmsData from "../../../../../../data/study_abroad/denmark/pg_civil-engineering.json";

const page = {
  "name": "Civil Engineering",
  "country": "Denmark",
  "slug": "pg/civil-engineering",
  "title": "Civil Engineering in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Civil Engineering in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Civil Engineering in Denmark, Civil Engineering in Denmark for Indian Students, Best Universities in Denmark, Denmark Civil Engineering Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Civil Engineering in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Civil Engineering in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Civil Engineering."
  ],
  "level": "M.Eng / M.Sc. Civil Engineering",
  "crumb": "Engineering / PG Engineering",
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
      "val": "2 Years",
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
      "title": "Why Civil Engineering in Denmark?",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "For students interested in advanced civil engineering, sustainable construction and modern infrastructure development, Denmark is a great place to study. Danish universities work for practical learning, research, innovation and environmentally responsible engineering practices. Studying a **Master\u2019s in Civil Engineering in Denmark** gives students the chance to gain additional technical knowledge and learn about modern construction practices.",
            "A master\u2019s in civil engineering offers students knowledge of structural design, transportation systems, geotechnical engineering, water management and sustainable urban development. Denmark\u2019s focus on green buildings and smart cities also offers opportunities to explore new construction technologies and sustainable infrastructure solutions. Students can learn about many different areas of infrastructure and construction in these **Civil Engineering courses in Denmark**."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Civil Engineering Courses in Denmark",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Civil engineering and construction and infrastructure are specializations in the master programs of the Danish universities. Depending on the university, areas of study may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Civil Engineering",
            "Geotechnical Engineering",
            "Transportation & Highway Engineering",
            "Environmental & Water Resources Engineering",
            "Construction Management",
            "Sustainable Building Design Course",
            "Coastal and Hydraulics Engineering",
            "Infrastructure & Building Technology"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students pursuing **Master's in Civil Engineering courses in Denmark** can opt for specializations according to their academic background and career interests.",
            "Most master\u2019s programs are two years in length and consist of theory, laboratory work, projects, and a research thesis. Programs go by different names and have different specializations at different universities. These **Master's in Civil Engineering in Denmark** options allow students to explore different areas of construction and infrastructure development."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Civil Engineering Schools in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Civil Engineering programmes, modern campuses, and international student support.",
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
      "title": "Civil Engineering Study Admission Requirements in Denmark",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Typically, international students looking to pursue a **Master\u2019s in Civil Engineering in Denmark** need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor\u2019s degree in civil engineering or other engineering discipline closely related to the position.",
            "A good academic record with the required grades of the university.",
            "Prior coursework in mathematics, mechanics, structural engineering or other related subjects.",
            "Proficiency in the English language IELTS, TOEFL or accepted equivalent where required.",
            "Other academic requirements, depending on the specialization chosen."
          ]
        },
        {
          "t": "p",
          "items": [
            "Here are the general **Civil Engineering eligibility requirements in Denmark**. Applicants with related degrees should ensure that their subjects are equivalent to the entry requirements of the program."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Civil Engineering Admission Requirements in Denmark",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The criteria for admission vary from one place to another, but it is generally expected that applicants will have the requisite academic knowledge and ability in English.",
            "Undergraduate subjects, grades, project experience and relevance of previous studies may be considered by universities. Some programs may require specific credits in math, mechanics, materials or structural analysis.",
            "Students are advised to read the **admission requirements for Civil Engineering in Denmark** carefully before applying. Applicants should apply before the university\u2019s deadline and check if certified translations, document verification or extra forms are needed for international students."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Civil Engineering Tuition Fee in Denmark",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost of studying a **Master\u2019s in Civil Engineering in Denmark** will depend on university, program and lifestyle. These are projected estimates for Indian international students."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Prices",
            "Estimated Cost (INR)"
          ],
          "rows": [
            [
              "Annual charges",
              "\u20b98 lakh \u2013 \u20b918 lakh"
            ],
            [
              "Monthly living expenses",
              "\u20b980,000 \\- \u20b91.30 lakh"
            ],
            [
              "Cost of living (Yearly)",
              "\u20b99.6 Lakh \u2013 \u20b915.6 Lakh"
            ],
            [
              "Personal expenses, books and medical insurance",
              "Varies"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "**Total Cost for 2 Years:** Approximately Rs 35 Lakh to Rs 70 Lakh (Tuition \\+ Living Costs)",
            "These are indicative estimates and are not official quotes from the university. **Tuition fees for Civil Engineering in Denmark** are subject to change. Financial requirements related to Visa may change. Students should also explore university scholarships and other funding opportunities."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to Pursue a Civil Engineering Career in Denmark",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Generally, the **admission process for Civil Engineering in Denmark** is as follows:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose a program:** Choose a master\u2019s program that matches your civil engineering background and career objectives.",
            "**Eligibility checks:** Check academic requirements, English requirements, tuition fees and deadlines.",
            "**Get papers ready:** Collect transcripts, diplomas, English test results and any other required documents.",
            "**Send in the application:** Apply through the university\u2019s official admission portal.",
            "**Listen to the ruling:** The university looks at your credentials and sends you a decision in the mail.",
            "**Take your acceptance:** Follow university instructions to accept the offer and pay a deposit (if applicable).",
            "**Application for residence permit:** Submit your student residence permit application and collect required financial and identification documentation.",
            "**Prepare to go:** Before the course begins, make accommodation and travel arrangements and any other necessities."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students who wish to pursue **Civil Engineering at the Master\u2019s level in Denmark** should start the application process early and follow the university\u2019s guidelines.",
            "**Edu-Hawk Worldwide** can assist students with the study abroad application process and to know the requirements for applying to the international universities. Students planning a **Master's in Civil Engineering in Denmark for Indian students** can seek guidance on university selection, documentation and application preparation."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Recognition & Accreditation",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students should verify that the university and degree are officially recognized in Denmark before selecting a program. They will need to look at the program\u2019s curriculum, learning outcomes, industry links and research facilities.",
            "Indian students find it useful to check how the qualification fits in with their plans for future employment or further education in India or elsewhere. In some countries and for some types of work, there may be additional requirements for professional engineering roles.",
            "Students should verify the degree structure and recognition requirements as per their future plans before selecting the **Civil Engineering universities in Denmark**."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Wages and Job Opportunities After a Master\u2019s Degree in Civil Engineering",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates having completed their **Master\u2019s in Civil Engineering in Denmark** may find jobs in construction, infrastructure, consulting, transportation and environmental engineering, and sustainable building projects.",
            "Possible job titles include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Civil Engineer",
            "Structural Engineer",
            "Civil Engineer (Geotechnical)",
            "Construction Engineer",
            "Sustainability Engineer",
            "Transportation Consultant",
            "Water Resources Engineer",
            "Infrastructure Planning Engineer"
          ]
        },
        {
          "t": "p",
          "items": [
            "**Expected salary (indicative):** In Denmark you will find a large spread in salaries for civil engineers depending on your experience level, the company you work for, your area of expertise and where you live. Graduates are advised to check current Danish salary information and job vacancies before making financial plans. Knowledge of Danish may be an advantage for positions with local customers, construction sites and public infrastructure projects."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Supporting Documents",
      "lead": "Essential details regarding civil engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Normally applicants are required to submit the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid Passport & Visas",
            "Bachelor\u2019s degree certificate or provisional certificate",
            "Academic transcripts and course information",
            "CV or resume",
            "Motivation letter or statement of purpose if needed",
            "IELTS, TOEFL or proof of English language accepted if needed",
            "Recommendation letters, if required",
            "Prerequisite for Course Evaluation Description/Syllabus",
            "Portfolio/Project information (if applicable)",
            "Financial Documents and Residence Permit Documents Post Admission"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students applying for **Master's in Civil Engineering courses in Denmark** need to prepare their documents as per the requirement of their university. Always check the official document checklist of the university you want."
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
      "q": "Q1. What is the duration of a master\u2019s in civil engineering in Denmark?",
      "a": "Most master\u2019s programs relevant to the subject are about two years long, depending on the university and degree structure."
    },
    {
      "q": "Q2. What is the cost of studying civil engineering in Denmark?",
      "a": "Non-EU/EEA students have to pay a tuition fee between INR 8 lakh and INR 18 lakh per year. Depends on the program and the school."
    },
    {
      "q": "Q3. Is it possible for Indian students to study a master's in civil engineering in Denmark?",
      "a": "Yes. Indian students can apply if they meet the academic, language and other entry requirements for the program they have selected. A **Master\u2019s in Civil Engineering in Denmark** can provide an opportunity to get international academic exposure and advanced engineering knowledge for Indian students."
    },
    {
      "q": "Q4. Do you have scholarships for overseas students?",
      "a": "Yes. Many Danish universities and scholarship programs offer funding for eligible international students. Depends on students\u2019 availability and eligibility. Students are advised to check the latest official announcements."
    },
    {
      "q": "Q5. Will I be able to work in Denmark after completing my degree?",
      "a": "Graduates may be eligible for employment under the residence and work rules in place at that time. Subject to existing Danish immigration rules on eligibility and length of stay. Students who want to do a **Master in Civil Engineering in Denmark** should make a careful comparison of universities, specializations, admission requirements and tuition costs before taking a decision. **Edu-Hawk Worldwide** can assist students with guidance for studying abroad and preparing applications for their international education journey."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function CivilEngineeringPGDenmark() {
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
      seoPath="/study-abroad/denmark/pg/civil-engineering"
    />
  );
}
