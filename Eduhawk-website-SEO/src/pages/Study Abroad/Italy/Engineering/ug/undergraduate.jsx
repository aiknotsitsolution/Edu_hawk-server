import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/cta_bg.webp";
import Politecnico_di_MilanoImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/Politecnico_di_Milano.webp";
import University_of_BolognaImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/University_of_Bologna.webp";
import University_of_PaduaImg from "../../../../../Images/Abroad/Italy/Engineering_UG/General/University_of_Padua.webp";

const page = {
  "name": "Undergraduate Engineering in Italy",
  "country": "Italy",
  "slug": "ug_hub",
  "title": "Undergraduate Engineering in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Undergraduate Engineering in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "",
  "introTitle": "Undergraduate Engineering in Italy",
  heroParas: [
    "Undergraduate Engineering in Italy offers international students world-class foundational training, modern engineering labs, and low-cost public tuition across Europe's leading polytechnic universities."
  ],
  overview: [
    "Yes. Indian students can apply if they meet the academic eligibility, schooling requirements, language conditions and entrance-test criteria of the university. Admission is not automatic and depends on the chosen program."
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
      "title": "Can Indian students study undergraduate engineering in Italy after Class 12?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students can apply if they meet the academic eligibility, schooling requirements, language conditions and entrance-test criteria of the university. Admission is not automatic and depends on the chosen program."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Are undergraduate engineering courses in Italy taught in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Some undergraduate engineering programs or tracks are taught in English, but many are taught in Italian. Students should check the language of instruction for each degree before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Undergraduate Engineering in Italy",
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
              img: University_of_BolognaImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: University_of_PaduaImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Politecnico_di_MilanoImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What are the fees for undergraduate engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "As a rough guide for planning purposes, tuition at public universities may cost between about €900 and €4,000 per year, while private institutions may charge more. Actual fees for engineering programs vary by institution and by fee-assessment rules."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Is an entrance exam required for engineering admission in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Many engineering programs have entrance tests or selection procedures. For example, Politecnico di Milano lists specific admission tests and acceptable alternatives for its 2026/27 engineering bachelor's programs. Requirements vary from university to university."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "Can I work in Italy after completing an undergraduate engineering degree?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may explore employment opportunities, subject to their qualifications, skills, language proficiency and applicable work authorisation rules. Some students choose to continue with a master's degree before entering specialised engineering roles."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Admission Process for Undergraduate Engineering in Italy",
      "groups": [
        {
        "t": "timeline",
        "items": [
                {
                        "step": "1",
                        "title": "",
                        "desc": "Choose your engineering specialisation. Decide whether you want to study mechanical, civil, electrical, electronics, computer, aerospace, chemical or another engineering field."
                },
                {
                        "step": "2",
                        "title": "",
                        "desc": "Shortlist universities. Compare courses, teaching language, location, fees and eligibility criteria."
                },
                {
                        "step": "3",
                        "title": "",
                        "desc": "Check your academic eligibility. Confirm that your Class 12 qualification and school subjects meet the requirements for the selected programme."
                },
                {
                        "step": "4",
                        "title": "",
                        "desc": "Check entrance tests. Review the official test requirements, syllabus, accepted alternatives and registration deadlines."
                },
                {
                        "step": "5",
                        "title": "",
                        "desc": "Prepare your documents. Organise school transcripts, certificates, passport and language-test evidence, as applicable."
                },
                {
                        "step": "6",
                        "title": "",
                        "desc": "Submit your application. Apply through the university's official portal and complete the required tests or selection procedures."
                },
                {
                        "step": "7",
                        "title": "",
                        "desc": "Receive the admission decision. Follow the university's instructions for acceptance, enrolment and tuition payments."
                },
                {
                        "step": "8",
                        "title": "",
                        "desc": "Complete international pre-enrolment, if required. Applicants who need a study visa generally follow the applicable procedure through Universitaly."
                },
                {
                        "step": "9",
                        "title": "",
                        "desc": "Apply for a student visa. Submit the required documents to the competent Italian diplomatic mission. University admission or pre-enrolment does not guarantee visa approval."
                },
                {
                        "step": "10",
                        "title": "",
                        "desc": "Prepare for arrival. Arrange accommodation, insurance and other practical requirements before travelling."
                }
        ]
}
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Recognition, Professional Registration and Further Study",
      "groups": [
        {
          "t": "p",
          "items": [
            "An undergraduate engineering degree can provide a foundation for employment or further study, but professional requirements depend on the intended role and country."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should confirm that their selected qualification and study plan align with their long-term career objectives."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Career Opportunities After Undergraduate Engineering in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Engineering graduates may explore opportunities across manufacturing, construction, automotive, electronics, energy, technology, automation and other technical sectors.",
            "Possible entry-level career pathways include:"
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Required for Undergraduate Engineering in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "The university and visa authorities may require some or all of the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 marksheet and certificate.",
            "Class 12 marksheet and certificate.",
            "Secondary school leaving certificate.",
            "Academic transcripts or other requested school records.",
            "Entrance examination score, where applicable.",
            "English or Italian language proficiency results, if required.",
            "Official translations of documents, where requested.",
            "Documents required for qualification verification or equivalence.",
            "University application confirmation.",
            "Admission letter or enrollment documentation.",
            "Proof of financial means, accommodation and insurance, as required for the visa.",
            "Any additional documents requested by the university or consular authority."
          ]
        },
        {
          "t": "p",
          "items": [
            "Requirements vary according to the university, applicant's qualification and applicable visa procedures. Students should use the official checklist for their chosen programme and intake."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students pursue Bachelor's in Engineering in Italy after Class 12?",
        "a": "Yes. Indian students with Class 12 mathematics and physics can apply for English-taught Bachelor of Science in Engineering programmes in Italy."
    },
    {
        "q": "What is the duration of a Bachelor's in Engineering in Italy?",
        "a": "Undergraduate engineering degrees (Laurea Triennale) in Italy are 3 years in duration, comprising 180 ECTS credits."
    },
    {
        "q": "What are the tuition fees for Bachelor's in Engineering in Italy?",
        "a": "Public universities charge between €1,000 and €4,000 per year based on family income, with full fee waivers available under DSU scholarship programmes."
    },
    {
        "q": "What entrance exam is required for undergraduate engineering in Italy?",
        "a": "Most English-taught engineering bachelor's require the English TOLC-I (Test OnLine CISIA) or institutional entrance evaluations."
    },
    {
        "q": "Are engineering bachelor's degrees from Italy recognized globally?",
        "a": "Yes. Italian engineering degrees comply with the Bologna process and European EUR-ACE quality standards, recognized worldwide."
    },
    {
        "q": "Can students progress to a master's degree in Italy after completing a bachelor's?",
        "a": "Yes. Graduates seamlessly transition into 2-year Master of Science (Laurea Magistrale) engineering degrees in Italy or across the EU."
    }
],
  faqTitle: "Frequently Asked Questions About Undergraduate Engineering in Italy"
};

export default function UndergraduateEngineeringItaly() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/italy/ug/engineering"
    />
  );
}
