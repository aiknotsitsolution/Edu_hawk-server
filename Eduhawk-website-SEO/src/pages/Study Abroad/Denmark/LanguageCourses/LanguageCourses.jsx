import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Denmark/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Denmark/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Denmark/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Denmark/LanguageCourses/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Denmark/LanguageCourses/image1.png";
import uniImg2 from "../../../../Images/Abroad/Denmark/LanguageCourses/image2.png";
import uniImg3 from "../../../../Images/Abroad/Denmark/LanguageCourses/image3.png";
import cmsData from "../../../../data/study_abroad/denmark/language-courses.json";

const page = {
  "name": "Language Courses",
  "country": "Denmark",
  "slug": "language-courses",
  "title": "Language Courses in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Language Courses in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Language Courses in Denmark, Language Courses in Denmark for Indian Students, Best Universities in Denmark, Denmark Language Courses Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Language Courses in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Language Courses in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Language Courses."
  ],
  "level": "Language Proficiency & Foundation",
  "crumb": "Language Courses",
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
      "title": "Why study languages in Denmark?",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Language Courses in Denmark** are a great option for students who want to learn new languages, especially Danish and English. International students can join language programs to enhance their communication skills, get ready for higher education and to adjust to Danish culture. Learning Danish can also allow students to interact with local communities and comprehend the work environment.",
            "Students may be able to take classes in beginning, intermediate, and advanced languages, depending on the institution, as well as specialized language classes for academic or professional purposes. Exploring **Danish language courses in Denmark** can help international students improve their language skills and become familiar with local communication and culture.",
            "**Edu-Hawk Worldwide** helps students explore hospitality and tourism study options, understand university requirements and plan their study-abroad applications"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Danish Language Courses",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Language Courses in Denmark** are offered for various levels and learning goals. Students can choose from different languages depending on their academic, personal and professional interests."
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Danish Language Courses:** Learn Danish for everyday conversation, education and work.",
            "**English Language Courses:** Improve your speaking, writing, reading, listening and academic English skills.",
            "**German Language Classes:** Learn German language skills for personal, academic or career purposes.",
            "**French Language Programs:** Learn French for travel, for communicating globally and for cultural enjoyment.",
            "**Spanish Language Courses:** Learn Spanish for personal growth, travel and career advancement.",
            "**Other Foreign Languages:** At some institutions, students can expect to find other European and international language courses."
          ]
        },
        {
          "t": "p",
          "items": [
            "Courses can be short-term classes, intensive programs, evening lessons, or longer learning programs. Each provider has different availability, fees and entrance requirements.",
            "Students interested in **Danish language courses in Denmark** can explore different learning formats, including classroom-based lessons, intensive language programs and online classes."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Courses to Learn Language in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Language Courses programmes, modern campuses, and international student support.",
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
      "title": "Eligible to Study language courses in Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility depends on the language school, program type and course level. Students planning to join **Language Courses in Denmark** should review the admission conditions before registering. In general students should fulfilll the following conditions:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Age:** Requirements vary, but official Danish language education is normally offered to adults aged 18 and over.",
            "**Education:** Basic education qualifications may be sufficient for general language classes.",
            "**Language Proficiency:** Generally, beginners do not require prior knowledge of the language in question.",
            "**Residence Status:** Eligibility for publicly funded Danish language education may be subject to the requirement of legal residence and other conditions.",
            "**Course-specific requirements:** Previous knowledge of the language may be required for advanced, academic or professional language programs."
          ]
        },
        {
          "t": "p",
          "items": [
            "If you are an international student applying from outside Denmark, you should check that your chosen course accepts overseas applicants and qualifies for a student residence permit.",
            "Understanding the **language course eligibility in Denmark** can help applicants determine whether they meet the age, education and residence conditions for their chosen program."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Entry Requirements for Language Courses Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Entry to language programs at the beginner level is generally fairly easy. Applicants may be required to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Select a language and a suitable course level.",
            "Complete the online registration/application.",
            "Provide personal information and educational information if requested.",
            "Take a language placement test for intermediate or advanced level classes.",
            "Provide identification and residence documents where appropriate.",
            "Make the required registration deposit or fee."
          ]
        },
        {
          "t": "p",
          "items": [
            "The **language course admission requirements in Denmark** vary according to the institution, language and course level. Some courses are offered for flexible online study, others are classroom based. Admission requirements and deadlines vary among institutions.",
            "Applicants should review the **language course admission requirements in Denmark** before submitting their registration to avoid missing any necessary documents or assessments."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Prices of Language Courses in Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The price of **Language Courses in Denmark** differs depending on the institution, the duration, the form of teaching, and the chosen language. Students should compare the fees of different providers before selecting a suitable course."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course type",
            "General costs info"
          ],
          "rows": [
            [
              "Dansk sprogtr\u00e6ning (officielt)",
              "May be free to qualified residents, sometimes with a refundable deposit."
            ],
            [
              "Private Danish Language Lessons",
              "Fees depend on the school and the duration of the course"
            ],
            [
              "English language training",
              "Depends on provider and program"
            ],
            [
              "Other courses in foreign languages",
              "Depends on language, level and amount of lessons"
            ],
            [
              "Language courses online",
              "Depending on the provider, they can be free or paid."
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "UCplus, for instance, claims that its official Danish language education for eligible international students is free, but demands a DKK 2,000 deposit that can be refunded under the program rules.",
            "Students should request the most current fee schedule prior to enrollment. Tuition and accommodation and living expenses and visa related costs are separate things.",
            "The overall **language course fees in Denmark** depend on the provider, duration, learning format and selected language. Students should confirm the current fees and any refundable deposit conditions directly with the institution."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Procedure for Language Courses in Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process for **Language Courses in Denmark** generally involves selecting a language, researching institutions and completing the registration process.",
            "Select your language: Select whether you want to learn Danish, English or another language.",
            "Research Institutions: Check courses, fees, duration, learning format and eligibility.",
            "Check entry requirements Look up the documentation and the language level required for the course you've chosen.",
            "Apply now: Register on the official website of the institution.",
            "Finish the assessment: If needed, take a placement test or schedule a consultation.",
            "Verify enrollment Pay any necessary fees or deposits and get your course details.",
            "Start learning: Go to the classes or use the online learning platform as per instructions.",
            "If you are coming to Denmark for a language course, you should check whether the course is approved for immigration purposes before you pay fees or book travel.",
            "Students can also approach **Edu-Hawk Worldwide** for guidance on exploring study options, understanding application procedures and preparing for international education opportunities."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Danish Language Skills Proof in Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can use language proficiency certification to show their communication skills for education, work and everyday life.",
            "**Danish language examinations:** Official Danish courses may offer examinations such as Pr\u00f8ve i Dansk 1 (PD1), Pr\u00f8ve i Dansk 2 (PD2) and Pr\u00f8ve i Dansk 3 (PD3).",
            "**Studiepr\u00f8ven:** A higher level Danish test which may fulfill the language requirement for some study programs taught in Danish.",
            "**English Proficiency Tests:** Depending on the reason for the application, students can choose IELTS, TOEFL or other accepted exams.",
            "**Certificates of completion:** Private language schools can issue certificates to students at the end of their courses.",
            "A certificate is accepted by the university, employer or organization. A language course does not automatically open the doors to a degree program or to employment."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Salary and Job Prospects After Language Courses in Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Learning Danish or another foreign language can enhance communication skills and assist in career advancement. But a language course alone does not guaranty a job or a certain salary.",
            "Possible opportunities include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Customer Support:** Communicate with Danish or international customers.",
            "**Hospitality and Tourism:** Hotel, travel and visitor assistance work, if eligible.",
            "**Translation and Interpretation:** Perform specialized language work with the abilities and qualifications required.",
            "**International Business:** Facilitate communication with clients and business partners in other countries.",
            "**Teaching and Languages:** If you are qualified, consider teaching or language-assistance positions.",
            "**Administrative Positions:** Search for positions that involve multilingual communication."
          ]
        },
        {
          "t": "p",
          "items": [
            "Salaries depend on the role, experience, qualifications, location and language proficiency. International applicants must also satisfy all applicable work-permit and employment requirements."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Needed to Study Language Courses in Denmark",
      "lead": "Essential details regarding language courses in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The exact documents vary depending on the language school and the course. Applicants may be required to submit:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or other acceptable ID.",
            "Filled application forms or registration forms.",
            "Recent passport size photograph (where required).",
            "Educational certificates, where applicable.",
            "Previous language certificates, if any.",
            "Proof of address or proof of residential status if applicable.",
            "Danish CPR number (if required for a particular programme).",
            "Proof of payment of tuition fees or registration deposit.",
            "Visa or residence-permit documentation, if applicable to the applicant\u2019s situation."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students coming from India should check the documentation required for admission to courses and their intended immigration route before committing financially."
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
      "q": "Q1. Are foreigners able to learn Danish in Denmark?",
      "a": "Yes. International students may be able to study Danish language at universities and language centers. Eligibility and fees vary according to program and residence status."
    },
    {
      "q": "Q2. Are language courses free of cost in Denmark?",
      "a": "Some Danish language courses are offered officially and are free for eligible residents or international students, but you may have to pay a refundable deposit. Private courses are usually self-supporting and have their own fee structure."
    },
    {
      "q": "Q3. Do I need IELTS to pursue a language course in Denmark?",
      "a": "Generally, there is no need for an IELTS for language classes at the beginner level. However, there may be separate entry requirements for individual academic or English language programs."
    },
    {
      "q": "Q4. Is it possible to obtain a Danish student visa for a language course?",
      "a": "Not all language courses allow you to get a student residence permit. Applicants are advised to check with the relevant Danish immigration authorities prior to application whether their particular course is eligible."
    },
    {
      "q": "Q5. Will learning Danish help me find a job in Denmark?",
      "a": "Yes, speaking Danish will increase your ability to communicate and open up opportunities in some fields. Employment, however, is subject to your qualifications, experience, language level and legal right to work."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function LanguageCoursesDenmark() {
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
      seoPath="/study-abroad/denmark/language-courses"
    />
  );
}
