import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/image1.png";
import uniImg2 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/image2.png";
import uniImg3 from "../../../../../../Images/Abroad/Denmark/Engineering_UG/Electronics/image3.png";
import cmsData from "../../../../../../data/study_abroad/denmark/ug_electronics-communication.json";

const page = {
  "name": "Electronics & Communication",
  "country": "Denmark",
  "slug": "ug/electronics-communication",
  "title": "Electronics & Communication in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Electronics & Communication in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Electronics & Communication in Denmark, Electronics & Communication in Denmark for Indian Students, Best Universities in Denmark, Denmark Electronics & Communication Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Electronics & Communication in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Electronics & Communication in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Electronics & Communication."
  ],
  "level": "B.Eng / B.Sc. Electronics Engineering",
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
      "title": "Why Study Electronics Engineering in Denmark?",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark is an attractive destination for students who are interested in electronics, automation, communication systems and modern technology. Its engineering education focuses on practical learning, innovation, laboratory work and real-world technical problem solving. Studying a **Bachelor\u2019s in Electronics Engineering in Denmark** can help students develop the technical knowledge needed for modern electronics and technology-related careers.",
            "A bachelor\u2019s degree in electronics engineering is aimed at teaching students about the design and development of electronic devices, industrial systems, sensors, and intelligent technologies. Students can also explore renewable energy systems, embedded technology, robotics and electronic product development. **Electronics Engineering in Denmark for Indian students** can be a suitable option for those looking for international engineering education and practical technical exposure."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Denmark Electronics Engineering Courses",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can study the following Bachelor Level programs. These **Electronics Engineering courses in Denmark** cover different areas of electronics, electrical systems and automation:",
            "Bachelor in Electronics Engineering \\- electronic circuit, digital systems and device design.",
            "Bachelor of Engineering in Electronics \u2013 Practical Electronics, Testing and Industrial Applications.",
            "Bachelor\u2019s degree in Electrical and Electronics Engineering \\- electrical systems, electronics and power technology.",
            "Bachelor\u2019s in Mechatronics Engineering \u2013 mechanics, control systems, software and electronics.",
            "Bachelor's in Automation Engineering \\- automation technology, sensor and control technology.",
            "Bachelor's degree in Embedded Systems \\- hardware, microcontrollers and software-integrated electronic devices.",
            "The course titles, duration and language of instruction depend on the university. Students interested in a **Bachelor\u2019s in Electronics Engineering in Denmark** should compare the curriculum and teaching language before selecting a program."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Electronics Engineering Schools in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Electronics & Communication programmes, modern campuses, and international student support.",
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
      "title": "Can I Study Electronics Engineering in Denmark?",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "International students typically need to meet the following **Electronics Engineering eligibility in Denmark** requirements:",
            "12th Class or equivalent from any recognized board.",
            "Mathematics and Physics at the level of study required.",
            "The academic marks are the university admission criteria.",
            "English language proficiency for programs taught in English.",
            "Additional subject qualifications required by the institution.",
            "Indian students need to verify whether the subjects they have studied in Class 12 meet the specific entry requirements of the university. The **Electronics Engineering eligibility in Denmark** criteria may vary depending on the selected institution and program."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Electronics Engineering in Denmark",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Universities may assess students based on academic performance, knowledge of the subject and skill in the language. Common **Electronics Engineering admission requirements in Denmark** are:",
            "Class 10 and Class 12 mark sheets.",
            "Subject records: Mathematics and physics.",
            "English language test results if required.",
            "\u2022 Completed application and valid passport.",
            "Other documents requested by the University in the academic context.",
            "The Electronics Engineering program at SDU is taught in English. Applicants holding foreign qualifications must adhere to the university\u2019s international application deadlines and admission procedures. Students planning to pursue a **Bachelor\u2019s in Electronics Engineering in Denmark** should review the admission requirements carefully before applying.",
            "**Edu-Hawk Worldwide** can help students understand university admission criteria, prepare academic documents and plan their applications for international education."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Electronics Engineering Tuition Fees in Denmark",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The total **Electronics Engineering fees in Denmark** may vary according to the tuition fees, accommodation, and lifestyle. Following are indicative estimates for Indian students."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Outlay",
            "Approximate cost in INR"
          ],
          "rows": [
            [
              "Tuition Fees per year",
              "About \u20b918 lakh"
            ],
            [
              "Accommodation (per month)",
              "INR 40,000-75,000"
            ],
            [
              "Food and groceries per month",
              "\u20b915,000-\u20b925,000"
            ],
            [
              "Transport and personal expenses per month",
              "\u20b910,000-20,000"
            ],
            [
              "Yearly living costs",
              "\u20b98 lakh\u2013\u20b914 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "SDU lists annual tuition of \u20ac17,300 for its Electronics Engineering and Electronics BEng programs for non-EU/EEA students, equivalent to about \u20b918 lakh per year at an illustrative exchange rate. Fees are subject to currency exchange and university policy. Students should check the latest **Electronics Engineering fees in Denmark** for their intended intake.",
            "**Edu-Hawk Worldwide** can assist students in understanding the estimated study expenses and planning their international education budget."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to Get Admission in Electronics Engineering in Denmark",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Select a university: Compare course content, duration and language of teaching.",
            "Check if you are eligible: Check academic and language requirements.",
            "Prepare documents: Collect marksheets, passport, language test results.",
            "Apply Here : Apply through the university\u2019s official admissions process.",
            "Receive admission decision: Satisfy any other conditions of the offer.",
            "Arrange tuition and immigration formalities: Follow the university\u2019s payment instructions and proceed with the relevant residence permit process.",
            "Deadlines vary by institution and applicant category so apply early. Students planning a **Bachelor\u2019s in Electronics Engineering in Denmark** should start preparing their documents and applications well in advance."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Recognition and accreditation",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Check that the university is recognized, the program is accredited (where applicable), the degree title and the curriculum. Danish higher education uses the European Credit Transfer and Accumulation System (ECTS), which facilitates the transfer of academic credits among European institutions that participate in the system.",
            "Students intending to work or study further in India should also check the degree\u2019s recognition and any requirements by employers or the relevant professional bodies."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Electronics Engineers Salary and Job Opportunities",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can expect to find employment in electronics manufacturing, telecommunications, automation, embedded systems, consumer electronics and renewable energy technology. Completing a **Bachelor\u2019s in Electronics Engineering in Denmark** can provide students with a foundation for exploring these technical career opportunities.",
            "Possible career roles include:",
            "Electronic Design Engineer",
            "Embedded Systems Engineer",
            "Hardware Design Engineer Jobs",
            "Test Engineer \u2013 Electronics Automation Engineer",
            "Telecom Engineer Research and Development Engineer",
            "Salary ranges in India (Indicative Annual):"
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
              "Experienced Professionals",
              "\u20b912Lakh-\u20b920Lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Actual salary is dependent on experience, technical skills, industry, employer, and location. Certain positions in Denmark may require Danish-language skills to be employed."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents",
      "lead": "Essential details regarding electronics & communication in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the application process, students might be asked for the following documents:",
            "10th class and 12th class certificate and marksheet.",
            "Passport valid.",
            "Test results English language, if relevant.",
            "Mathematics and Physics Academic Subject Details",
            "Purpose statement, if applicable.",
            "CV or letters of recommendation, if necessary.",
            "Financial documents and immigration paperwork if applicable.",
            "Always follow the official checklist of the chosen university."
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
      "q": "Can Indian students apply for Electronics & Communication in Denmark?",
      "a": "Yes, Indian students meeting the academic eligibility prerequisites and English language proficiency requirements (IELTS/TOEFL) can apply to Danish higher education institutions."
    },
    {
      "q": "What is the medium of instruction for Electronics & Communication in Denmark?",
      "a": "Programmes designed for international students across Danish universities are taught entirely in English."
    },
    {
      "q": "What are the typical tuition fees for Electronics & Communication in Denmark?",
      "a": "Tuition fees for non-EU international students typically range from DKK 60,000 to DKK 120,000 per year, depending on the programme and university."
    },
    {
      "q": "Can international students work part-time in Denmark?",
      "a": "Yes, non-EU international students holding a valid Danish residence permit are legally permitted to work up to 20 hours per week during term and full-time in June, July, and August."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ElectronicsCommunicationUGDenmark() {
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
      seoPath="/study-abroad/denmark/ug/electronics-communication"
    />
  );
}
