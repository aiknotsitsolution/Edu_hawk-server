import cmsData from "../../../../../data/study_abroad/italy/pg_hub.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/cta_bg.webp";
import Politecnico_di_MilanoImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/Politecnico_di_Milano.webp";
import Politecnico_di_TorinoImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/Politecnico_di_Torino.webp";
import University_of_BolognaImg from "../../../../../Images/Abroad/Italy/Engineering_PG/General/University_of_Bologna.webp";

const page = {
  "name": "Postgraduate Engineering in Italy",
  "country": "Italy",
  "slug": "pg_hub",
  "title": "Postgraduate Engineering in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Postgraduate Engineering in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Study Postgraduate Engineering in Italy, Postgraduate Engineering in Italy for Indian Students, Best Universities in Italy, Cost of Studying in Italy",
  "introTitle": "Master's in Italy for Indian Students",
  heroParas: [
    "Postgraduate Engineering in Italy offers world-class research infrastructure, advanced laboratory training, and internationally recognized master's degrees across prestigious institutions like Politecnico di Milano and Politecnico di Torino."
  ],
  overview: [
    "Yes. Indian students with a suitable bachelor's degree can apply to Italian engineering master's programmes if they meet the academic, language, and programme-specific requirements."
  ],
  "level": "Postgraduate",
  "crumb": "Engineering",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Postgraduate"
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
      "title": "Can Indian students study a Master's in Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students with a suitable bachelor's degree can apply to Italian engineering master's programmes if they meet the academic, language, and programme-specific requirements."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "How long does a Master's in Engineering take in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Most standard Italian master's degrees last two years and carry 120 ECTS credits. Confirm the duration of your chosen programme on the official university website."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Postgraduate Engineering in Italy",
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
              img: Politecnico_di_MilanoImg
            }
          ]
        }
      ]
    },
    {
      "slot": "section-3",
      "eyebrow": "Details",
      "title": "Can I study Engineering Master's in Italy in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Several universities offer English-taught engineering master's programmes, but the language depends on the specific course. Check the official programme catalogue before applying."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What is the tuition fee for a Master's in Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition varies by institution and student circumstances. Illustrative annual budgeting figures include €1,000 (₹1,08,600), €2,500 (₹2,71,500), €5,000 (₹5,43,000), and €8,000 (₹8,68,800). These figures are estimates, not confirmed university fees."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Is a master's degree from Italy useful for engineering jobs?",
      "groups": [
        {
          "t": "p",
          "items": [
            "A recognised Italian master's degree can provide advanced subject knowledge and international academic exposure. Career outcomes depend on your specialisation, experience, technical skills, language proficiency, and the requirements of the employer and destination country."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Engineering Master's Admission Process in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Follow these steps when applying for a postgraduate engineering programme."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Required to Study Engineering Master's in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian applicants may need to prepare the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport",
            "Bachelor's degree certificate or provisional certificate",
            "Semester-wise academic transcripts",
            "Detailed course descriptions or syllabus, if requested",
            "English-language proficiency certificate, if required",
            "Updated CV or r&eacute;sum&eacute;",
            "Statement of purpose or motivation letter",
            "Letters of recommendation, if required",
            "Passport-sized photographs",
            "Additional academic or qualification-verification documents",
            "Financial documents and proof of funds for the visa process",
            "Health insurance or other visa-related documents",
            "Official translations or legalisation where requested"
          ]
        },
        {
          "t": "p",
          "items": [
            "The university may request additional documents based on your previous qualification and chosen programme. Always use the official checklist for your application and visa process."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Master's in Engineering in Italy in English?",
        "a": "Yes. Almost all major Italian technical universities offer Master of Science (Laurea Magistrale) engineering degrees 100% in English."
    },
    {
        "q": "What is the duration of a master's in engineering in Italy?",
        "a": "Postgraduate engineering programmes in Italy take 2 years to complete and require 120 ECTS credits, concluding with an extensive master's thesis."
    },
    {
        "q": "What are the tuition fees for Master's in Engineering in Italy?",
        "a": "At leading public technical universities, tuition fees range between €1,000 and €3,900 per year, with eligible students receiving full DSU scholarship fee waivers."
    },
    {
        "q": "What are the admission requirements for engineering master's in Italy?",
        "a": "Applicants must hold a relevant 3 or 4-year Bachelor's degree in engineering, with strong academic marks and prerequisite undergraduate credits in mathematics and core disciplines."
    },
    {
        "q": "Is Italian language proficiency required for engineering master's?",
        "a": "No. Instruction is fully in English. However, learning basic conversational Italian is helpful for daily life and internship placements in local firms."
    },
    {
        "q": "Can engineering graduates work in Italy after completing their master's?",
        "a": "Yes. Non-EU graduates are eligible for a 12-month post-study job seeker visa (permesso per ricerca lavoro) across Italy's advanced manufacturing and tech sectors."
    }
],
  faqTitle: "Frequently Asked Questions About Postgraduate Engineering in Italy"
};

export default function PostgraduateEngineeringItaly() {
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
      seoPath="/study-abroad/italy/pg/engineering"
    />
  );
}
