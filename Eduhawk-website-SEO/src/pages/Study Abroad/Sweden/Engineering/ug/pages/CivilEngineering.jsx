import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Sweden/Engineering_UG/Civil/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Sweden/Engineering_UG/Civil/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Sweden/Engineering_UG/Civil/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Sweden/Engineering_UG/Civil/cta_bg.webp";
import cmsData from "../../../../../../data/study_abroad/sweden/ug_civil-engineering.json";
// University campus images
import uniImg1 from "../../../../../../Images/Abroad/Sweden/Engineering_UG/Civil/image1.webp";
import uniImg2 from "../../../../../../Images/Abroad/Sweden/Engineering_UG/Civil/image2.webp";


const page = {
  "name": "Civil Engineering (UG)",
  "country": "Sweden",
  "slug": "ug/civil-engineering",
  "title": "Civil Engineering (UG) in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Civil Engineering (UG) in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Civil Engineering (UG) in Sweden, Civil Engineering (UG) in Sweden for Indian Students, Best Universities in Sweden, Sweden Civil Engineering (UG) Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Civil Engineering (UG) in Sweden for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Civil Engineering (UG) in Sweden for Indian students."
  ],
  "overview": [
    "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for Civil Engineering (UG) in Sweden."
  ],
  "level": "B.Eng / B.Sc. Civil Engineering",
  "crumb": "Engineering / UG Engineering",
  "stats": [
    {
      "val": "SEK 80K-150K",
      "label": "Tuition / Year"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World-Class Nordic Innovation",
      "desc": "Study in Sweden's globally ranked universities renowned for pioneering scientific breakthroughs, design thinking, and sustainable research."
    },
    {
      "icon": "FaGraduationCap",
      "title": "English-Taught Degrees",
      "desc": "Over 1,000 bachelor's and master's degree programs delivered entirely in English with international accreditation."
    },
    {
      "icon": "FaFileAlt",
      "title": "Generous Post-Study Work",
      "desc": "Sweden offers residence permits after graduation for students to seek employment or start innovative businesses."
    },
    {
      "icon": "FaCheckCircle",
      "title": "High Quality of Life",
      "desc": "Ranked among the top nations globally for safety, equality, environmental sustainability, and student well-being."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Sweden",
      "title": "Why Study Bachelor of Civil Engineering in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden is a good place to study if you are interested in civil engineering, sustainable building, infrastructure development and modern urban planning. The country is famous for its environmental sustainability, innovative building techniques and high quality engineering education.",
            "Sweden can help students to develop technical knowledge and practical skills in fields like structural design, construction materials, transportation systems, and water resource management. Students will also experience project-based learning, modern laboratories, and exposure to industry-focused engineering practices.",
            "For students interested in green buildings, sustainable cities, smart infrastructure and environmentally responsible construction Sweden is especially relevant. However, international students should check the language of instruction carefully, as many bachelor\u2019s programs in Sweden are taught in Swedish rather than English.",
            "The **Bachelor\u2019s in Civil Engineering in Sweden for Indian Students** can be a suitable option for students who want to gain international exposure and understand modern infrastructure and sustainable construction practices. Students planning to **Study Civil Engineering in Sweden** should compare the available programs and their language requirements before applying.",
            "Through **Edu Hawk worldwide** study abroad guidance, students can explore language-learning options and understand the eligibility, fees and application requirements."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Bachelor\u2019s Courses of Civil Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Civil engineering programs give students a foundation in mathematics, physics, engineering design, construction and infrastructure planning. The subjects of study may be, depending on the university and the program:",
            "**Structural Engineering:** Design and analysis of buildings, bridges and other structures.",
            "**Construction Technology:** Construction methods, materials and implementation.",
            "**Geotechnical Engineering:** Soil mechanics, foundations and stability of the ground.",
            "**Transportation Engineering:** Roads, railroads, traffic systems and transport infrastructure.",
            "**Hydraulics and Water Engineering:** Water supply, drainage, waste water and flood management.",
            "**Environmental Engineering:** Pollution control and environmental protection, sustainable building.",
            "**Engineering Mathematics and Physics:** Mathematics modeling, mechanics, technical problem-solving.",
            "**Computer Aided Design (CAD):** Digital drawing, modeling and engineering design tools.",
            "**Construction Management:** Planning, budgeting, scheduling and quality control of projects.",
            "Students exploring **Civil Engineering Courses in Sweden** should review the subjects, practical training opportunities and qualification awarded by each institution. The course structure may differ between universities, so applicants should check the complete curriculum before selecting a program.",
            "In the European higher education system, Bachelor\u2019s degrees normally take three years to complete, although some Swedish civil engineering qualifications follow a longer engineering structure. Students should check the length and the qualification given by each university."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Bachelor\u2019s in Civil Engineering Colleges in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Civil Engineering (UG) in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "image": uniImg1, "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility for Studying Civil Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students typically need to have completed Class 12, or an equivalent upper-secondary qualification. Civil engineering courses typically require a good grounding in maths and physics, and some institutions also require chemistry.",
            "The **Civil Engineering Eligibility in Sweden** depends on the university and the specific course selected.",
            "Typical eligibility considerations are as follows:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Educational qualification:** Passed Class 12th from any recognized board or equivalent qualification.",
            "**Mathematics:** Completion of the required mathematics subjects at required level.",
            "**Physics:** needed for many civil engineering programs.",
            "**Chemistry:** Possibly a program requirement.",
            "**Language skills:** Swedish proficiency for Swedish degree studies, or evidence of English proficiency where an English degree program allows admission.",
            "**Academic performance:** The candidate must fulfilll the university\u2019s specific entry requirements and selection criteria."
          ]
        },
        {
          "t": "p",
          "items": [
            "You will have to verify the precise subject equivalencies for Indian qualifications with the university and Sweden\u2019s official admissions system. Students should carefully review **Civil Engineering Eligibility in Sweden** before submitting their applications."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Swedish Civil Engineering Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Universities will look at your general eligibility for admission as well as your academic qualifications for the specific program. Students should have their academic records and proof of language proficiency ready well in advance of the application deadline.",
            "The **Civil Engineering Admission Requirements in Sweden** may differ depending on the institution, course and language of instruction.",
            "Typical requirements include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Final marksheets of completed secondary-school education.",
            "Mathematics and science subjects required.",
            "Proof of proficiency in Swedish or English depending on the program.",
            "Valid passport and personal details for overseas applications.",
            "Any other documents or forms required by the University."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some institutions may have particular grades or may be competitive on school results. Submit an IELTS or other English test only if accepted and if required for your chosen program. English proficiency alone does not replace a Swedish-language requirement for a Swedish-taught degree.",
            "Students applying for the **Bachelor\u2019s in Civil Engineering in Sweden for Indian Students** should check the official admission requirements and document submission deadlines before applying."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Tuition Fees for Studies in Civil Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The overall cost will depend on the university, duration of the program, tuition category, accommodation and lifestyle. Non-EU/EEA students are normally required to pay application and tuition fees, unless they are exempt.",
            "The **Civil Engineering Fees in Sweden** can vary according to the university and the selected program."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Price",
            "Estimated price"
          ],
          "rows": [
            [
              "Tuition",
              "Depends on the university and the program"
            ],
            [
              "Accommodations",
              "Depends on city and type of dwelling"
            ],
            [
              "Food & groceries",
              "Depends on personal lifestyle"
            ],
            [
              "Local transport",
              "Depends on the city and student discounts"
            ],
            [
              "Books and study resources",
              "Depending on the course's requirements"
            ],
            [
              "Health insurance and personal costs",
              "Subject to eligibility & individual needs"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "As an example, the published program information of Uppsala University shows a first tuition instalment of SEK 75,000 for its Bachelor\u2019s Program in Construction Engineering. This is one installment, not necessarily the full program cost.",
            "Before creating a budget, students should obtain the full tuition schedule from the university. They should also calculate the living expenses for the whole period of study and check the current financial requirements for a residence permit in Sweden. Scholarships may be available, depending on eligibility, but students should not expect to be funded as a matter of course.",
            "Students comparing **Civil Engineering Fees in Sweden** should consider tuition instalments along with accommodation, food, transport and other living expenses."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process of Civil Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process generally includes the following steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Select an appropriate program.** Compare universities, course of study, qualification awarded, language of instruction, tuition fees and intake dates.",
            "**See if you qualify.** Verify your Class 12 subjects and marks against the general and specific requirements of the program.",
            "**Get your documents ready.** Arrange academic certificates, marksheets, language test scores (if applicable) and passport details.",
            "**Submit Application.** Apply through the official Swedish admissions platform or the route specified by the institution.",
            "**Submit the required fees.** Pay the application fee and the tuition deposit or installment as directed.",
            "**Monitor the admission decision.** Check the portal for updates, document requests, and deadlines.",
            "**Make a moving plan.** Arrange accommodation, arrange your travel and go through the necessary residence-permit process after admission."
          ]
        },
        {
          "t": "p",
          "items": [
            "The official admissions calendar for Sweden says that the international admissions round for autumn 2027 opens on 16 October 2026 and the first round application deadline is 15 January 2027\Applicants should confirm the dates and programme availability on the official portal.",
            "Apply through University Admissions in Sweden."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Studies and Professional Development",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree in civil engineering, graduates may pursue postgraduate study or develop specialised technical skills. The choice of the most suitable route will depend on the qualification awarded and the entry requirements of the next program.",
            "Possible future research directions are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Engineering: Structural",
            "Geotechnical Engg.",
            "Environmental Engineering",
            "Transportation and Infrastructure Engineering (TIE)",
            "Sustainable Building",
            "Project Management in Construction",
            "Water Resource Engineering",
            "Building Information Modeling (BIM)"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students who want to work in Sweden should also look into local professional requirements, workplace safety rules, language expectations and the qualifications employers look for. Requirements for engineering roles with responsibility for construction safety or regulated activities may vary by role and employer."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Wages and Career Opportunities After Civil Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates in civil engineering can look for opportunities in construction companies, infrastructure organizations, engineering consultancies, property development and public sector projects. The level of entry-level job that a graduate can obtain depends on their skills, language skills, work permits, and the needs of individual employers.",
            "Possible positions include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Civil Engineer:** Helps plan and develop infrastructure and construction projects.",
            "**Site Engineer:** Overseeing construction work, site measurement, material and quality check.",
            "**Structural Design Engineer:** Assists in analysis and design of structures.",
            "**Construction Project Coordinator:** Managing schedules, costs, resources and project documentation.",
            "**Transportation Engineer:** Works on roads, rail, traffic systems and mobility infrastructure.",
            "**Environmental Engineer:** Works on sustainable construction, water management and environmental projects.",
            "**BIM Technician / Co-ordinator:** Supports digital modeling and coordination of building and infrastructure projects."
          ]
        },
        {
          "t": "p",
          "items": [
            "Salaries depend on experience, specialty, location, employer and Swedish language skills. Rather than using one salary figure, applicants should check up-to-date Swedish salary statistics and job adverts for the particular job they want."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documentation Required for Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants should prepare the following documents as per the official university checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 certificate & marksheet (if asked).",
            "Final Marksheets and 12th class certificate.",
            "Passport or other valid identification.",
            "Proof of subjects in mathematics, physics and chemistry if applicable.",
            "Proof of competence in English or Swedish, where appropriate.",
            "Official translations, if the documents are not in an accepted language.",
            "Confirmation of payment of application fee if applicable.",
            "Forms or supporting documents specific to the program.",
            "Financial and insurance documents needed for future immigration procedures."
          ]
        },
        {
          "t": "p",
          "items": [
            "Documents must meet the official format, translation, certification, and submission requirements. Applicants should not assume that provisional marksheets or predicted grades will be accepted in place of final results."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "Karolinska Institutet",
      "location": "Stockholm, Sweden",
      "fee": "SEK 140,000 \u2013 200,000 / Year",
      "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "KTH Royal Institute of Technology",
      "location": "Stockholm, Sweden",
      "fee": "SEK 120,000 \u2013 160,000 / Year",
      "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "Lund University",
      "location": "Lund, Sweden",
      "fee": "SEK 90,000 \u2013 150,000 / Year",
      "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "Uppsala University",
      "location": "Uppsala, Sweden",
      "fee": "SEK 90,000 \u2013 145,000 / Year",
      "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "Chalmers University of Technology",
      "location": "Gothenburg, Sweden",
      "fee": "SEK 130,000 \u2013 170,000 / Year",
      "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
      "image": uniImg2, "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can Indian students study civil engineering in Sweden after Class 12?",
      "a": "Yes. Indian students can apply if their secondary-school qualifications meet the university's general and programme-specific admission requirements, including the required mathematics and science subjects."
    },
    {
      "q": "Q2. Are civil engineering bachelor's programmes in Sweden taught in English?",
      "a": "Many undergraduate engineering programmes are taught in Swedish. Students are advised to check the language of instruction of each program before applying. For example, Chalmers says its bachelor programs are taught in Swedish."
    },
    {
      "q": "Q3. How long does it take to study civil engineering bachelor in Sweden?",
      "a": "The normal length of a bachelor\u2019s level engineering program is three years or 180 ECTS credits. However, some engineering degrees are structured differently so students should check the exact length of their chosen course."
    },
    {
      "q": "Q4. How much does it cost to study civil engineering in Sweden?",
      "a": "The amount you pay will depend on the university and the program. Students coming from countries outside the EU/EEA normally pay tuition fees, unless there is an exemption. And then there are living expenses. Applicants are advised to consult the full tuition schedule and make arrangements for accommodation, food, transport and other expenses."
    },
    {
      "q": "Q5. After studying civil engineering in Sweden, what can I do?",
      "a": "Graduates may explore roles in construction, structural design, infrastructure, transportation, environmental engineering, and project coordination. Career opportunities depend on skills, experience, language proficiency, employer requirements, and eligibility to work in Sweden. For guidance on choosing a suitable course, understanding admission requirements and planning your application, **Edu-Hawk Worldwide** can help students explore study-abroad opportunities. **Edu-Hawk Worldwide** supports students in understanding university options and preparing for their international education journey."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function CivilEngineeringUGSweden() {
  const dynamicPage = {
    ...page,
    name: page.name,
    introTitle: cmsData.hero?.title || page.introTitle,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
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
      seoPath="/study-abroad/sweden/ug/civil-engineering"
    />
  );
}
