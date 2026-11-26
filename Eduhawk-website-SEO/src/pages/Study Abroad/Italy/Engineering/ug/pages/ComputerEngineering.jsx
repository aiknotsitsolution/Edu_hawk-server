import cmsData from "../../../../../../data/study_abroad/italy/comp_engg_ug.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/cta_bg.webp";
import Politecnico_di_MilanoImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/Politecnico_di_Milano.webp";
import Politecnico_di_TorinoImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/Politecnico_di_Torino.webp";
import University_of_BolognaImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/University_of_Bologna.webp";
import University_of_PaduaImg from "../../../../../../Images/Abroad/Italy/Engineering_UG/Computer/University_of_Padua.webp";

const page = {
  "name": "Computer Engineering - UG in Italy",
  "country": "Italy",
  "slug": "comp_engg_ug",
  "title": "Computer Engineering - UG in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Computer Engineering - UG in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "",
  "introTitle": "Computer Engineering Bachelor's in Italy",
  heroParas: [
    "Pursue an English-taught Laurea in Computer Engineering in Italy at historic polytechnic universities, combining microelectronics, industrial automation, affordable public tuition, and regional DSU scholarship opportunities."
  ],
  overview: [
    "Italy's Northern industrial technology belt is celebrated for excellence in automotive electronics, industrial robotics, precision machinery, and aerospace systems. Studying undergraduate Computer Engineering (*Ingegneria Informatica*) in Italy offers Indian students rigorous engineering instruction focused on designing digital computing hardware and automated electronic control systems.",
    "Leading Italian polytechnics—including Politecnico di Milano and Politecnico di Torino—offer English-taught 3-year Bachelor of Science (*Laurea*, 180 ECTS) programs in Computer and Electronic Engineering. The academic curriculum covers electrical circuits, digital systems design, computer architecture, microprocessors, and real-time software, with very accessible public tuition fees (€1,000 to €4,000/year) and widespread eligibility for need-based regional DSU scholarships.",
    "Graduates obtain credentials recognized across the European Higher Education Area (EHEA), preparing them for international hardware engineering roles or direct continuation into advanced Master of Science (*Laurea Magistrale*) programs. Non-EU graduates who transition into qualifying employment can access Italian stay-back and work permit pathways under national immigration regulations."
  ],
  "level": "Undergraduate",
  "crumb": "Engineering",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate"
    },
    {
      "label": "Course Duration",
      "value": "3 to 4 Years (UG) / 2 Years (PG)"
    },
    {
      "label": "Top Institutions",
      "value": "Milano, Sapienza University of Rome, Bologna"
    },
    {
      "label": "Medium of Study",
      "value": "English & Italian Taught"
    }
  ],
  "sections": [
    {
      "slot": "section-1",
      "eyebrow": "Details",
      "title": "Can Indian students study computer engineering in Italy after Class 12?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students can apply if their school qualification is in accordance with the university's entry requirements and they meet the language, entrance-test and document requirements."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "Are computer engineering bachelor's degrees in Italy taught in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Some courses or programs may be taught in English, but a large number of undergraduate degrees in computer engineering are taught in Italian. Please check the official language requirements of the exact program before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Computer Engineering - UG in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Politecnico_di_MilanoImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: Politecnico_di_TorinoImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: University_of_BolognaImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: University_of_PaduaImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What are the fees for computer engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "As a general estimate, tuition at public universities may range from approximately €900 to €4,000 per year, while private institutions may charge more. Actual fees depend on the university and applicable fee rules."
          ]
        }
      ]
    },
    {
      "slot": "section-4",
      "eyebrow": "Details",
      "title": "Is an entrance exam required for computer engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Many programmes have an entrance test or selection process. The University of Bologna lists TOLC-I for its 2026/27 Computer Engineering bachelor's programme, while other institutions may have their own tests or accepted alternatives."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "What jobs can I pursue after completing a computer engineering bachelor's degree in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on your skills and experience, possible paths include software development, systems support, network engineering, embedded systems, quality assurance and technical analysis. Some graduates also continue to a relevant master's degree."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Admission Process for Computer Engineering Bachelors in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can generally follow these steps:"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should verify that the qualification and curriculum match their academic and career goals before enrolling."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Career Opportunities After Computer Engineering Bachelors in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on their skills and experience, graduates may seek junior-level positions in software, technology, electronics, networking, industrial automation and computer systems.",
            "Potential career paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Junior Software Developer",
            "Computer Engineering Trainee",
            "Systems Support Engineer",
            "Junior Network Engineer",
            "Embedded Systems Trainee",
            "Hardware Testing Assistant",
            "Quality Assurance Tester",
            "Junior Systems Analyst",
            "IT Support Specialist",
            "Automation Engineering Assistant",
            "Technical Project Assistant",
            "Junior Application Developer"
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Required",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants may need some or all of the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 marksheet and certificate.",
            "Class 12 marksheet and certificate.",
            "Secondary school leaving certificate.",
            "Academic transcripts and other requested school records.",
            "Entrance examination score, if required.",
            "English or Italian language proficiency results, if applicable.",
            "Official translations of academic documents, where requested.",
            "Qualification verification documents, if required.",
            "University application confirmation.",
            "Admission letter or enrolment documentation.",
            "Proof of financial means, accommodation and insurance, as required for the visa.",
            "Additional documents requested by the university or consular authority."
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact checklist depends on the institution, applicant's qualification and visa procedure. Students should follow the official instructions for their chosen programme."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Computer Engineering in Italy after Class 12?",
        "a": "Yes. Students with high school credentials in mathematics and science can apply for English-taught Bachelor's degrees in Computer Engineering."
    },
    {
        "q": "What is the duration of an undergraduate Computer Engineering degree in Italy?",
        "a": "The degree requires 3 years of full-time academic study totaling 180 ECTS credits."
    },
    {
        "q": "What are the tuition fees for Computer Engineering in Italy?",
        "a": "Public universities charge between €1,000 and €3,800 per year, with full DSU scholarship waivers available for eligible applicants."
    },
    {
        "q": "What entrance examination is required for international students?",
        "a": "Universities typically require the English TOLC-I entrance exam covering mathematics, logic, and physics."
    },
    {
        "q": "What subjects are included in the computer engineering bachelor's?",
        "a": "Curricula include programming (C++, Python), digital electronics, computer architecture, algorithms, databases, and microcontrollers."
    },
    {
        "q": "What are the career opportunities after graduation?",
        "a": "Graduates are equipped for roles as software engineers, firmware developers, systems analysts, or continuing into master's studies in AI, robotics, or cybersecurity."
    }
],
  faqTitle: "Frequently Asked Questions About Computer Engineering UG in Italy"
};

export default function ComputerEngineeringUGItaly() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData?.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : cmsData.overview.split('\n\n'))
      : page.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image
        }))
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
  };


  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/italy/ug/computer-engineering"
    />
  );
}
