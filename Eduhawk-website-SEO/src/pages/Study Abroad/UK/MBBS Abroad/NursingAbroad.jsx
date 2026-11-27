import cmsData from "../../../../data/study_abroad/uk/nursing.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/UK/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/UK/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/UK/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/UK/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/UK/Nursing/Southampton_University.webp";
import uniImg2 from "../../../../Images/Abroad/UK/Nursing/Birmingham_University.webp";
import uniImg3 from "../../../../Images/Abroad/UK/Nursing/Nottingham_University.webp";
import uniImg4 from "../../../../Images/Abroad/UK/Nursing/Glasgow_University.webp";

const page = {
  "name": "Nursing in the UK",
  "country": "UK",
  "slug": "nursing",
  "title": "Study Nursing in the UK for Indian Students | Edu-Hawk Worldwide",
  "description": "Complete guide to Nursing in the UK for Indian students: Top UK universities, eligibility criteria, tuition fees (£14,000–£35,000/yr), scholarships, and 2-year post-study work visa (Graduate Route).",
  "keywords": "Study Nursing in the UK, Nursing in the UK for Indian Students, Best Universities in the UK, Cost of Studying in the UK, Edu-Hawk Worldwide",
  "introTitle": "Study Nursing in the UK",
  "heroParas": [
    "Earn an accredited Nursing degree in the UK, combining academic excellence with 2,300 hours of clinical practice across NHS trust hospitals. Indian students gain direct qualification eligibility for registration with the Nursing and Midwifery Council (NMC) and valuable Post-Study Work opportunities."
  ],
  "overview": [
    "Respected nursing education in the world Clinical placements"
  ],
  "level": "BSc & MSc Nursing",
  "crumb": "Healthcare / Nursing",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "BSc & MSc Nursing"
    },
    {
      "label": "Course Duration",
      "value": "3 to 4 Years (UG) / 1 to 2 Years (MSc)"
    },
    {
      "label": "Top Institutions",
      "value": "Southampton, Birmingham, Nottingham, Glasgow"
    },
    {
      "label": "Post-Study Work",
      "value": "2 Years Graduate Route Visa"
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Study in the UK",
      "title": "Why choose to study nursing in the UK?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Earn an accredited Nursing degree in the UK, combining academic excellence with 2,300 hours of clinical practice across NHS trust hospitals. Indian students gain direct qualification eligibility for registration with the Nursing and Midwifery Council (NMC) and valuable Post-Study Work opportunities."
          ]
        },
        {
          "t": "p",
          "items": [
            "Main advantages are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Respected nursing education in the world Clinical placements",
            "Opportunities to specialize in different nursing areas.",
            "There are openings in community care, clinics and hospitals. There are  research and postgraduate study routes ."
          ]
        },
        {
          "t": "p",
          "items": [
            "Edu Hawk Worldwide Consultancy assists students in understanding the university admission requirements, exploring the international study opportunities and preparing for the overseas education journey."
          ]
        }
      ]
    },
    {
      "slot": "content",
      "eyebrow": "Course Guide",
      "title": "Nursing courses in the UK",
      "groups": [
        {
          "t": "p",
          "items": [
            "BSc Nursing: Normally for a period of three years, subject to the course."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Adult Nursing: This area of nursing deals with the care of adult patients.",
            "Children's Nursing: Specializes in care of children and young people.",
            "Mental Health Nursing: Deals with mental health assessment and patient support.",
            "Learning Disability Nursing: Supports people with learning disabilities.",
            "MSc Nursing: Usually 1-2 years depending on the course and the prerequisites."
          ]
        },
        {
          "t": "p",
          "items": [
            "Availability of courses is university-specific."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "The UK's Best Universities for Nursing",
      "groups": [
        {
          "t": "universities",
          "items": [
            {
              "name": "Southampton University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Southampton_University_webp",
              "img": uniImg1
            },
            {
              "name": "Birmingham University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Birmingham_University_webp",
              "img": uniImg2
            },
            {
              "name": "Nottingham University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Nottingham_University_webp",
              "img": uniImg3
            },
            {
              "name": "Glasgow University",
              "desc": "Students should evaluate the clinical placement arrangements, international entry requirements, and nursing courses offered by each university.",
              "imgKey": "uniImg_Glasgow_University_webp",
              "img": uniImg4
            }
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Eligibility & Process",
      "title": "Requirements of British Nursing Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "Foreign applicants generally need:"
          ]
        },
        {
          "t": "p",
          "items": [
            "College programs that will accept high school credentials for admission."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Applicable academic grades (where relevant, in science subjects).",
            "English communication skills.",
            "Verification of fitness for clinical assignments and health. Postgraduate programs need further qualifications."
          ]
        },
        {
          "t": "p",
          "items": [
            "The requirements for university and nursing specializations are different."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Eligibility & Process",
      "title": "UK Nursing Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Academic transcripts."
          ]
        },
        {
          "t": "p",
          "items": [
            "Results of the English language test"
          ]
        },
        {
          "t": "p",
          "items": [
            "Personal statement – references and a completed application are normally required."
          ]
        },
        {
          "t": "p",
          "items": [
            "You may also be required to undergo background checks, occupational health screenings and interviews."
          ]
        },
        {
          "t": "p",
          "items": [
            "Many undergraduate nursing schools accept applications through UCAS."
          ]
        }
      ]
    },
    {
      "slot": "cost",
      "eyebrow": "Tuition & Living",
      "title": "What is the Cost of Nursing Education in the UK?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The following is an estimate of expenses for international students:"
          ]
        },
        {
          "t": "p",
          "items": [
            "Tuition fees can range from about £15,000 to £30,000 a year depending on the university. Living expenses can vary from £1,000 to £1,800 per month depending on geography and lifestyle."
          ]
        },
        {
          "t": "p",
          "items": [
            "Examples of other costs are deposits for accommodation, transport, books, uniforms, health regulations and visa fees."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always check official sources for up-to-date tuition rates and immigration fees."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Eligibility & Process",
      "title": "The Nursing Admission Procedure of the UK",
      "groups": []
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Select a university and **nursing specialty**.",
      "groups": [
        {
          "t": "universities",
          "items": [
            {
              "name": "Southampton University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Southampton_University_webp",
              "img": uniImg1
            },
            {
              "name": "Birmingham University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Birmingham_University_webp",
              "img": uniImg2
            },
            {
              "name": "Nottingham University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Nottingham_University_webp",
              "img": uniImg3
            },
            {
              "name": "Glasgow University",
              "desc": "Students should evaluate the clinical placement arrangements, international entry requirements, and nursing courses offered by each university.",
              "imgKey": "uniImg_Glasgow_University_webp",
              "img": uniImg4
            }
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Eligibility & Process",
      "title": "Confirm the academic and English language requirements.",
      "groups": [
        {
          "t": "p",
          "items": [
            "3. Draft a personal statement, references and transcripts."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Apply via the university portal or **UCAS**.",
      "groups": [
        {
          "t": "universities",
          "items": [
            {
              "name": "Southampton University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Southampton_University_webp",
              "img": uniImg1
            },
            {
              "name": "Birmingham University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Birmingham_University_webp",
              "img": uniImg2
            },
            {
              "name": "Nottingham University",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": "uniImg_Nottingham_University_webp",
              "img": uniImg3
            },
            {
              "name": "Glasgow University",
              "desc": "Students should evaluate the clinical placement arrangements, international entry requirements, and nursing courses offered by each university.",
              "imgKey": "uniImg_Glasgow_University_webp",
              "img": uniImg4
            },
            {
              "name": "Attend an evaluation or interview, if necessary.",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": null
            },
            {
              "name": "Perform comprehensive background and health checks.",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": null
            },
            {
              "name": "Accept the offer and arrange accommodation, money and **immigration clearance**.",
              "desc": "Prominent UK institution known for academic excellence, state-of-the-art facilities, and strong industry linkages.",
              "imgKey": null
            }
          ]
        }
      ]
    },
    {
      "slot": "content",
      "eyebrow": "Course Guide",
      "title": "The UK's Nursing Accreditation and Recognition",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the UK, nurses and midwives are governed by the Nursing and Midwifery Council (NMC). A approved nursing program that leads to the proper registration pathway should be selected by students who want to work as registered nurses."
          ]
        },
        {
          "t": "p",
          "items": [
            "The NMC's applicable registration criteria must be met by internationally qualified nurses. These requirements may include supplementary examinations and English language proof."
          ]
        },
        {
          "t": "p",
          "items": [
            "9. Pay and Employment Prospects in the UK Following Nursing"
          ]
        },
        {
          "t": "p",
          "items": [
            "After fulfilling registration requirements, nursing graduates can find employment in NHS hospitals , private hospitals, community healthcare, care services, and specialized clinical departments."
          ]
        },
        {
          "t": "p",
          "items": [
            "Experience, role, employer, and geography all affect salary. With more training and experience, nurses can advance into teaching, research, management, or specialist practice."
          ]
        },
        {
          "t": "p",
          "items": [
            "Additionally, international graduates must fulfill the relevant immigration and work-permission requirements"
          ]
        },
        {
          "t": "p",
          "items": [
            "10. Documents Required in the UK to Pursue Nursing Education"
          ]
        },
        {
          "t": "p",
          "items": [
            "Documents that are frequently needed include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A valid passport Academic transcripts and certifications",
            "Results of an English language test. \"Personal statement\"",
            "Scholarly references.",
            "CV, if necessary. Interview and health screening records. When appropriate, financial and visa documents are required."
          ]
        },
        {
          "t": "p",
          "items": [
            "Before applying, review the official checklist provided by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "11. FAQs"
          ]
        },
        {
          "t": "p",
          "items": [
            "Q1. How long does nursing school last in the United Kingdom?"
          ]
        },
        {
          "t": "p",
          "items": [
            "Although course formats might vary, the majority of pre-registration nursing degrees take approximately three years."
          ]
        },
        {
          "t": "p",
          "items": [
            "Q2. Is it possible for Indian students to pursue nursing studies in the United Kingdom?"
          ]
        },
        {
          "t": "p",
          "items": [
            "Yes, as long as they fulfill immigration, academic, English language, and university admission conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "Q3. Is IELTS a prerequisite for nursing in the United Kingdom?"
          ]
        },
        {
          "t": "p",
          "items": [
            "IELTS or similar recognized English language proficiency is required by several universities. Each university has a different minimum score."
          ]
        },
        {
          "t": "p",
          "items": [
            "Q4. How much does it cost to become a nurse in the UK?"
          ]
        },
        {
          "t": "p",
          "items": [
            "Excluding living expenses, international tuition is typically between £15,000 and £30,000 annually. The actual cost varies depending on the course and university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Q5. Is it possible for foreign nursing graduates to find employment in the United Kingdom?"
          ]
        },
        {
          "t": "p",
          "items": [
            "In addition to having the necessary immigration authorization to work, they must fulfill the pertinent NMC registration requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "How can Edu Hawk worldwide Consultancy help me study abroad?"
          ]
        },
        {
          "t": "p",
          "items": [
            "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "Southampton University",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "",
      "imgFile": "Southampton_University.webp"
    },
    {
      "name": "Birmingham University",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "",
      "imgFile": "Birmingham_University.webp"
    },
    {
      "name": "Nottingham University",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "",
      "imgFile": "Nottingham_University.webp"
    },
    {
      "name": "Glasgow University",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "Students should evaluate the clinical placement arrangements, international entry requirements, and nursing courses offered by each university.",
      "imgFile": "Glasgow_University.webp"
    },
    {
      "name": "Attend an evaluation or interview, if necessary.",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "",
      "imgFile": null
    },
    {
      "name": "Perform comprehensive background and health checks.",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "",
      "imgFile": null
    },
    {
      "name": "Accept the offer and arrange accommodation, money and **immigration clearance**.",
      "city": "United Kingdom",
      "rank": "Top Ranked UK University",
      "fee": "£16,000 - £35,000 / yr",
      "desc": "",
      "imgFile": null
    }
  ],
  "table": {
    "title": "Estimated Cost of Studying Nursing in the UK (Tuition & Living)",
    "headers": [
      "Category / Level",
      "Estimated Cost (£ / GBP)",
      "Details / Scope"
    ],
    "rows": [
      [
        "Undergraduate Degree (Annual)",
        "£14,000 – £28,000 / year",
        "Varies by university ranking, laboratory access, and course type"
      ],
      [
        "Postgraduate Degree (Annual)",
        "£16,000 – £35,000 / year",
        "1-year intensive master's program or research dissertation"
      ],
      [
        "Monthly Living Costs (Outside London)",
        "£900 – £1,100 / month",
        "Includes private/student accommodation, groceries, and utilities"
      ],
      [
        "Monthly Living Costs (London)",
        "£1,250 – £1,450 / month",
        "Mandated UKVI maintenance requirement for London study"
      ],
      [
        "Health Surcharge (IHS)",
        "£776 / year",
        "Access to UK National Health Service (NHS) for student visa holders"
      ]
    ]
  },
  "faqs": []
};

export default function NursingAbroadUK() {
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
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          img: u.img || u.image || page.universities?.[idx]?.img,
          image: u.img || u.image || page.universities?.[idx]?.image || page.universities?.[idx]?.img
        }))
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
      seoPath="/study-abroad/uk/nursing"
    />
  );
}
