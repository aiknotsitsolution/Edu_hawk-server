import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/image1.png";
import uniImg2 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/image2.png";
import uniImg3 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electrical/image3.png";
import cmsData from "../../../../../../data/study_abroad/denmark/ug_electrical-engineering.json";

const page = {
  "name": "Electrical Engineering",
  "country": "Denmark",
  "slug": "ug/electrical-engineering",
  "title": "Electrical Engineering in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Electrical Engineering in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Electrical Engineering in Denmark, Electrical Engineering in Denmark for Indian Students, Best Universities in Denmark, Denmark Electrical Engineering Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Electrical Engineering in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Electrical Engineering in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Electrical Engineering."
  ],
  "level": "B.Eng / B.Sc. Electrical Engineering",
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
      "title": "Why Study Electrical Engineering in Denmark?",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "For students interested in electrical systems, renewable energy, automation and modern engineering technologies Denmark is a great country. The country is known for its emphasis on clean energy, wind energy, energy-efficient infrastructure, and sustainable development.",
            "A bachelor's degree in electrical engineering can help students to develop technical knowledge and practical problem-solving skills. Depending on the program they choose, students can explore electrical circuits, power systems, electronics, control systems and automation."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Electrical Engineering Programs in Denmark",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can study bachelor's programs in electrical engineering and related areas, like:",
            "Bachelor\u2019s in Electrical Engineering \u2013 electrical circuits, electrical machines, power systems.",
            "Bachelor of Engineering in Electrical Engineering \u2013 applied electrical engineering and industry projects.",
            "Bachelor\u2019s in Electronics Engineering \u2013 electronic circuits, semiconductor devices, communications systems.",
            "Bachelor\u2019s in Energy Engineering \u2013 renewable energy, energy conversion and efficient power systems.",
            "Bachelor's degree in Automation Engineering \\- control systems, industrial automation and robotics.",
            "Bachelor\u2019s in Electrical and Computer Engineering \u2013 integrating electrical systems, computing and embedded technologies.",
            "Program titles and specialties vary from institution to institution and not all courses are offered in English at the undergraduate level."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Electrical Engineering in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Electrical Engineering programmes, modern campuses, and international student support.",
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
      "title": "Who can study electrical engineering in Denmark?",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students generally require:",
            "Class 12 or equivalent from recognized board.",
            "Mathematics and Physics with the required level of subject.",
            "Academic marks university admission criteria.",
            "English language proficiency for English language programs",
            "Danish language skills for Danish-taught programs.",
            "Indian applicants should verify that their Class 12 qualifications meet the specific mathematics and science requirements of the university."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Electrical Engineering Admission Requirements in Denmark",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Common admission requirements are:",
            "Mark sheets of 10th and 12th.",
            "Subject records: Mathematics and physics.",
            "English language test scores, if required.",
            "Evidence of Danish language skills for Danish taught courses.",
            "Passport and a filled application form.",
            "Other academic documents required by the university.",
            "For example, DTU\u2019s bachelor\u2019s programs in Electrical Engineering are taught in Danish, and the University of Southern Denmark has a BSc in Electronics Engineering taught in English."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Electrical Engineering in Denmark Tuition Fees",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "This will depend on the university, the program and the lifestyle. Below are indicative planning estimates for Indian students."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Cost",
            "Estimated Cost in Rupees"
          ],
          "rows": [
            [
              "Annual fee",
              "\u20b98 lakh-\u20b916 lakh+"
            ],
            [
              "Accommodation (per month)",
              "\u20b940,000-\u20b975,000"
            ],
            [
              "Food and groceries per month",
              "\u20b915,000-\u20b925,000"
            ],
            [
              "Transport and Personal Expenses per month",
              "\u20b910,000\u2013\u20b920,000"
            ],
            [
              "Estimated annual cost of living",
              "\u20b98 lakh \u2013 \u20b914 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, SDU's English-taught BSc in Electronics Engineering costs \u20ac17,300 per year (around \u20b917-18 lakh per year depending on the exchange rate). This is an electronics degree, not a full Electrical Engineering degree.",
            "Tuition fees and living costs Please check tuition fees and living costs from official university information before you apply."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to get admission as Electrical Engineer in Denmark",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Choose a program: Compare electrical engineering, electronics and electrical energy technology degrees",
            "Eligibility Check: Check academic requirements and language of instruction.",
            "Get documents ready: Collect passport, language test result and mark sheets.",
            "University Application: Follow the official application procedure and deadlines.",
            "Receive the admission decision: Review the proposal and fulfilll any remaining requirements.",
            "Organize finances and residence permit: Pay the applicable fee and complete the required immigration formalities.",
            "Start early\\! Each university has different application deadlines and document requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Recognition and Accreditation",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Check the university's recognition, degree title, program duration and curriculum before enrolling. Danish universities use the European Credit Transfer and Accumulation System (ECTS) for academic credits, which facilitates mobility within European higher education.",
            "Students who plan to work in India should also check the recognition of the degree and any employer or professional requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Electrical Engineering Salary and Career Outlook",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates will be able to find opportunities in power generation, electronics, renewable energy, automation, telecommunications and industrial technology.",
            "You might pursue a career in:",
            "Electrical Engineer",
            "Electronics Engineer",
            "Power Systems Engineer,",
            "Automation and Control Engineer",
            "Renewable Energy Engineer",
            "Embedded Systems Engineer",
            "Electrical Projects Engineer",
            "Salary ranges in India are indicative and annual:"
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
              "\u20b93 lakh \u2013 \u20b96 lakh"
            ],
            [
              "3-5 years",
              "\u20b96 lakh \u2013 \u20b912 lakh"
            ],
            [
              "Senior Professionals",
              "\u20b912 lakh-\u20b920 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Actual pay is dependent on experience, specialization, employer and location. Please be aware that some positions may require Danish language skills to work in Denmark."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The following documents may be required by students:",
            "Class 10th & Class 12th certificates and marksheets.",
            "Passport valid.",
            "Results of English language tests, if applicable.",
            "Subject information for Mathematics and Physics.",
            "Statement of purpose (if required).",
            "CV and letters of recommendation, if necessary.",
            "Immigration papers and proof of funds",
            "In any case, always refer to the official checklist of the chosen university."
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
      "q": "Can Indian students apply for Electrical Engineering in Denmark?",
      "a": "Yes, Indian students meeting the academic eligibility prerequisites and English language proficiency requirements (IELTS/TOEFL) can apply to Danish higher education institutions."
    },
    {
      "q": "What is the medium of instruction for Electrical Engineering in Denmark?",
      "a": "Programmes designed for international students across Danish universities are taught entirely in English."
    },
    {
      "q": "What are the typical tuition fees for Electrical Engineering in Denmark?",
      "a": "Tuition fees for non-EU international students typically range from DKK 60,000 to DKK 120,000 per year, depending on the programme and university."
    },
    {
      "q": "Can international students work part-time in Denmark?",
      "a": "Yes, non-EU international students holding a valid Danish residence permit are legally permitted to work up to 20 hours per week during term and full-time in June, July, and August."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ElectricalEngineeringUGDenmark() {
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
      seoPath="/study-abroad/denmark/ug/electrical-engineering"
    />
  );
}
