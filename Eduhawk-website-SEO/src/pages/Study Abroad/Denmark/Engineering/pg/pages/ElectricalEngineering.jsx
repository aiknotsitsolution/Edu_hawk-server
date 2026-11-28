import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/image1.png";
import uniImg2 from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/image2.png";
import uniImg3 from "../../../../../../Images/Abroad/Denmark/Engineering_PG/Electrical/image3.png";
import cmsData from "../../../../../../data/study_abroad/denmark/pg_electrical-engineering.json";

const page = {
  "name": "Electrical Engineering",
  "country": "Denmark",
  "slug": "pg/electrical-engineering",
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
  "level": "M.Eng / M.Sc. Electrical Engineering",
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
      "title": "Why Do Electrical Engineering in Denmark?",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "If you are a student who is interested in electrical engineering, renewable energy, automation and advanced electrical systems, Denmark is an attractive destination. The universities of Denmark are research-based, practice-based, innovative and sustainable in their technologies. Studying a **Master\u2019s in Electrical Engineering in Denmark** allows students to develop advanced technical knowledge and explore modern engineering applications.",
            "A Master's in Electrical Engineering helps students build advanced technical knowledge in power systems, electronics, control engineering, robotics, and energy technologies. Denmark\u2019s focus on wind power and green electricity also offers opportunities to explore modern energy solutions and smart-grid technologies. These areas make **Electrical Engineering courses in Denmark** relevant for students interested in modern electrical systems and sustainable technologies."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Electrical Engineering Courses in Denmark",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Universities in Denmark offer postgraduate programs in electrical engineering and related disciplines. Depending on the institution, students can specialize in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Electrical Energy and Power Systems",
            "Renewable Energy Engineering",
            "Electronics & Embedded Systems",
            "Automation & Control Engineering",
            "Robotics and Intelligent Systems",
            "Signal Processing and Communications",
            "Power Electronics",
            "Smart Grids and Energy Conversion"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students exploring **Electrical Engineering courses in Denmark** can select specializations according to their academic background and career interests.",
            "The most relevant master\u2019s programs are two years long and include advanced courses, lab work, research projects and a final thesis. Specializations and program titles will vary between universities."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Electrical Engineering Universities in Denmark",
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
      "title": "Is It Possible to Study Electrical Engineering in Denmark?",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applying for a **Master\u2019s in Electrical Engineering in Denmark** for international students generally requires:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A relevant bachelor\u2019s degree in electrical engineering, electronics engineering, electrical and electronics engineering or in a closely related field.",
            "Strong academic record that meets the university\u2019s admission requirements.",
            "Depending on the program, some previous coursework in mathematics, electrical circuits, signals, electronics or control systems.",
            "English Language proficiency as evidenced by IELTS, TOEFL or an accepted equivalent (if required).",
            "Any other subject specific prerequisites as specified by the University."
          ]
        },
        {
          "t": "p",
          "items": [
            "These are general **Electrical Engineering eligibility requirements in Denmark**. Students with degrees in related engineering disciplines should verify that their previous courses meet program requirements."
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
            "Admission requirements are different for each university and each program. Generally, applicants are evaluated on their undergraduate qualification, academic grades, relevant subjects and English-language proficiency.",
            "Some programs may require specific credits in mathematics, programming, electronics, electrical machines or signal processing. Universities may also request additional academic documents to determine if an applicant\u2019s prior education is equivalent to the required background.",
            "Students need to be mindful of application deadlines, as international applicants may have earlier deadlines than domestic applicants. Understanding the **Electrical Engineering admission requirements in Denmark** helps students prepare their applications and academic documents in advance."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Tuition Fees for Electrical Engineering in Denmark",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost of studying a **Master\u2019s in Electrical Engineering in Denmark** depends on the university, program and lifestyle. The following figures are approximate estimates for planning purposes for Indian students."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expenses",
            "Approximate cost in INR"
          ],
          "rows": [
            [
              "Annual tuition",
              "\u20b98 lakh-\u20b918 lakh"
            ],
            [
              "Monthly Cost of Living",
              "\u20b980,000-\u20b91.3 lakh"
            ],
            [
              "Yearly Expenses",
              "\u20b99.6 lakh \\- \u20b915.6 lakh"
            ],
            [
              "Books, travel and personal costs",
              "Varies"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "**Estimated total for two years:** Around \u20b935 lakh\u2013\u20b970 lakh, including tuition and living expenses.",
            "The figures shown are purely indicative and do not represent official quotes from the university. **Electrical Engineering tuition fees in Denmark** vary by program. Living costs depend on accommodation and personal spending. Students should also check the university scholarships available and the current financial requirements for residence permits."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to Get Admission as an Electrical Engineer in Denmark",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Electrical Engineering admission process in Denmark** generally involves the following steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Select a program:** Choose a master's degree program that matches your academic background and career goals.",
            "**Check your eligibility:** Check academic requirements, language requirements, tuition fees and application deadlines.",
            "**Prepare the papers:** Collect your transcripts, degree certificate, CV, English language test results if required.",
            "**Application Submission:** Apply via the university's official application portal.",
            "**Receive your admission decision:** The university will evaluate your academic qualifications and supporting documents.",
            "**Accept the offer:** Follow university instructions regarding confirmation of admission and payment of tuition deposits.",
            "**Apply for Residence Permit:** Complete the student residence-permit procedure applicable to you.",
            "**Get ready to leave:** Make arrangements for accommodation and travel and other essential requirements before the course starts."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students interested in a **Master\u2019s in Electrical Engineering in Denmark for Indian students** should begin preparing their applications early and carefully follow the selected university's guidelines.",
            "**Edu-Hawk Worldwide** can assist students with study-abroad guidance, university selection and application preparation for international engineering programs."
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
            "Before applying, students should make sure that the university is officially recognized in Denmark and also check out the research facilities, links with the industry and the programme\u2019s curriculum.",
            "Indian students who want to work in India or another country after graduating should also make sure that the qualification is suitable for their intended career. Some specialist engineering roles may require additional professional qualifications or local registration depending on the country and the position.",
            "Students planning to study at **Electrical Engineering universities in Denmark** should review the degree structure and recognition requirements according to their future career plans."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Salary and Careers Upon Graduating with a Master\u2019s Degree in Electrical Engineering",
      "lead": "Essential details regarding electrical engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates have a range of career options open to them in the fields of renewable energy, electrical equipment manufacturing, automation, electronics, telecommunications and power infrastructure after completing a **Master\u2019s in Electrical Engineering in Denmark**.",
            "Potential job titles include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Electrical Design Engineer",
            "Power Systems Engineer",
            "Automation Engineer",
            "Control Systems Engineer",
            "Electronics Engineer",
            "Renewable Energy Engineer",
            "Embedded Systems Engineer",
            "R\\&D Engineer"
          ]
        },
        {
          "t": "p",
          "items": [
            "**Salary expectations:** Salaries in Denmark are based on experience, specialization, employer and location. Students should review current job listings and salary data before estimating what they might earn. Knowing Danish can be a bonus for some local engineering jobs, but international companies can provide English-speaking jobs."
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
            "Generally, the applicants need the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport",
            "Bachelor\u2019s degree certificate or provisional certificate",
            "Subject Details & Academic Transcripts",
            "Current CV or resume",
            "Motivation Letter or Statement of Purpose, if required",
            "IELTS, TOEFL or proof of English language accepted, if required",
            "Letters of recommendation, if required",
            "Course descriptions/syllabus for pre-req evaluation",
            "Details of relevant academic projects/research, if any",
            "Financial documents & residence permit paperwork after admission"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students applying for **Electrical Engineering courses in Denmark** should prepare their documents according to the university's requirements. The precise list will depend on the university and the program you have chosen."
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
      "q": "Q1. How long is a Master\u2019s in Electrical Engineering in Denmark?",
      "a": "Most relevant masters programs take around 2 years to complete, depending on university and degree structure."
    },
    {
      "q": "Q2. How much does it cost to study electrical engineering in Denmark?",
      "a": "Non-EU/EEA students may have to pay around \u20b98 lakh-\u20b918 lakh per year in tuition fees. Actual fees vary depending on the institution and program."
    },
    {
      "q": "Q3. Can Indian students do electrical engineering in Denmark?",
      "a": "Yes. Indian students are eligible to apply, as long as they meet the academic, English-language and other admission requirements of their chosen university. A **Master\u2019s in Electrical Engineering in Denmark for Indian students** can provide international academic exposure and advanced engineering knowledge."
    },
    {
      "q": "Q4. Do you provide scholarships for international students?",
      "a": "Yes. Some universities in Denmark offer scholarships or tuition fee waiver opportunities for qualifying international applicants. Availability and eligibility depends on the institution and intake."
    },
    {
      "q": "Q5. Can I work in Denmark after my master degree?",
      "a": "Graduates may have options to seek employment under the residence and work rules that apply at the time. Students are advised to check the latest Danish immigration rules before they plan. Students interested in pursuing a **Master\u2019s in Electrical Engineering in Denmark** should compare universities, specializations, admission requirements and tuition costs before making a decision. **Edu-Hawk Worldwide** can assist students with study-abroad guidance and application preparation for their international education journey."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ElectricalEngineeringPGDenmark() {
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
      seoPath="/study-abroad/denmark/pg/electrical-engineering"
    />
  );
}
