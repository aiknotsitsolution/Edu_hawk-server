import cmsData from "../../../../data/study_abroad/italy/pharmacy.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Italy/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Italy/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Italy/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Italy/Pharmacy/cta_bg.webp";
import Sapienza_University_of_RomeImg from "../../../../Images/Abroad/Italy/Pharmacy/Sapienza_University_of_Rome.webp";
import University_of_Bologna_Rimini_CampusImg from "../../../../Images/Abroad/Italy/Pharmacy/University_of_Bologna_Rimini_Campus.webp";
import University_of_MilanImg from "../../../../Images/Abroad/Italy/Pharmacy/University_of_Milan.webp";

const page = {
  "name": "Pharmacy in Italy",
  "country": "Italy",
  "slug": "pharmacy",
  "title": "Pharmacy in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Pharmacy in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "",
  "introTitle": "1. Why Study Pharmacy in Italy?",
  heroParas: [
    "Pharmacy in Italy offers an in-depth 5-year single-cycle master's curriculum covering medicinal chemistry, pharmacology, clinical toxicology, and European drug licensing regulations."
  ],
  overview: [
    "A standard single-cycle Pharmacy degree in Italy generally takes five years and commonly carries 300 ECTS credits. Always confirm the duration and structure on the official programme page."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Healthcare & Pharmacy",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 Years (UG)"
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
      "title": "How long does Pharmacy in Italy take?",
      "groups": [
        {
          "t": "p",
          "items": [
            "A standard single-cycle Pharmacy degree in Italy generally takes five years and commonly carries 300 ECTS credits. Always confirm the duration and structure on the official programme page."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "Can Indian students study Pharmacy in Italy in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Some programmes are taught in English. For example, the University of Bologna lists its five-year Pharmacy programme at Rimini as entirely English-taught for the 2026/27 academic year. Students should verify the language and admissions requirements for their intended intake."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Pharmacy in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Sapienza_University_of_RomeImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: University_of_Bologna_Rimini_CampusImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: University_of_MilanImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Sapienza_University_of_RomeImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What are the Pharmacy Fees in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition varies by university and fee category. Public university fees may be comparatively affordable, but students should check the official course fee schedule and budget separately for accommodation, food, insurance and transport."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Is an entrance exam required for Pharmacy Courses in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Some programmes have restricted admission and require an entrance test or selection process. The University of Bologna lists CEnT-S for its 2026/27 Pharmacy programme. Requirements may differ at other universities and in later academic years."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "Can I work as a pharmacist in India after completing my degree in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Do not assume automatic eligibility. Students should check the Pharmacy Council of India's current rules and the applicable recognition and registration requirements before enrolling. The qualification, curriculum and other conditions may affect eligibility."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Admission Process for Pharmacy in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "The application process for Pharmacy in Italy for Indian Students generally includes the following steps:"
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Career Opportunities After Pharmacy in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates with the necessary qualification may pursue a variety of career paths, subject to professional recognition, registration, and employment criteria."
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
            "Applicants considering Pharmacy in Italy should prepare the documents requested by their selected university. Common documents may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Certificate and marksheet for class 10.",
            "Certificate with marksheet from class 12.",
            "Academic transcripts and accompanying certifications.",
            "Proof of English proficiency, if required.",
            "Where applicable, obtain an Italian-language certificate.",
            "Entrance test or selection documentation.",
            "University application and enrollment forms.",
            "Documents for qualification assessment are available upon request.",
            "Pre-enrolment confirmation, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "The necessary authorities require visa, financial, and insurance documentation.",
            "Documents may require official translation, legalization, or apostille. Students should double-check the current checklist before submitting their application, as requirements differ per institution and authority."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Pharmacy in Italy in English?",
        "a": "Yes. Renowned institutions such as University of Rome Tor Vergata and University of Bologna offer English-taught 5-year single-cycle degrees in Pharmacy."
    },
    {
        "q": "What is the duration of a Pharmacy degree in Italy?",
        "a": "Pharmacy (Farmacia) is a 5-year single-cycle master's degree (Laurea Magistrale a Ciclo Unico) totaling 300 ECTS credits."
    },
    {
        "q": "What are the tuition fees for Pharmacy in Italy?",
        "a": "Public universities charge between €1,000 and €4,000 annually, with need-based DSU regional scholarships available to waive tuition fees."
    },
    {
        "q": "What entrance examination is required for admission?",
        "a": "Applicants generally take the English TOLC-F test assessing chemistry, biology, physics, mathematics, and logic."
    },
    {
        "q": "Does the curriculum include practical pharmacy training?",
        "a": "Yes. The program includes a mandatory 6-month professional internship in a community or hospital pharmacy before graduation."
    },
    {
        "q": "Can graduates practice as licensed pharmacists in Europe?",
        "a": "Yes. The Italian Pharmacy degree fulfills EU Directive 2005/36/EC, enabling graduates to qualify for European pharmacist registration."
    }
],
  faqTitle: "Frequently Asked Questions About Pharmacy in Italy"
};

export default function PharmacyAbroadItaly() {
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
      seoPath="/study-abroad/italy/pharmacy"
    />
  );
}
