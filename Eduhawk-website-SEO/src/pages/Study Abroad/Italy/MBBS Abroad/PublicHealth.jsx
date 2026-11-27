import cmsData from "../../../../data/study_abroad/italy/public_health.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Italy/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Italy/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Italy/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Italy/PublicHealth/cta_bg.webp";
import University_of_BolognaImg from "../../../../Images/Abroad/Italy/PublicHealth/University_of_Bologna.webp";

const page = {
  "name": "Public Health in Italy",
  "country": "Italy",
  "slug": "public_health",
  "title": "Public Health in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Public Health in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "",
  "introTitle": "Public Health in Italy",
  heroParas: [
    "Public Health in Italy equips students with advanced skills in global epidemiology, preventive medicine, environmental health policy, and European healthcare systems management."
  ],
  overview: [
    "Yes. Indian students can apply for eligible Italian university programs, if they meet the academic, language and documentation requirements. Admission depends on individual program."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Healthcare & Public Health",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "2 Years (MPH / M.Sc.) / 3 Years (UG)"
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
      "title": "Can Indian students study public health in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students can apply for eligible Italian university programs, if they meet the academic, language and documentation requirements. Admission depends on individual program."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Are public health programmes in Italy taught in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Several health-related master's programs are in English and others in Italian. Students should check the language of instruction of each program before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Public Health in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: University_of_BolognaImg
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
              img: University_of_BolognaImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: University_of_BolognaImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What are the fees for public health studies in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition is determined by institution and course. Tuition fees at public universities in Italy generally range from about €900 to €4,000 per year, although individual programs may vary. Private institutions may charge higher fees."
          ]
        }
      ]
    },
    {
      "slot": "section-4",
      "eyebrow": "Details",
      "title": "Can I get a scholarship to study public health in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students who qualify should look into university scholarships, regional financial aid and tuition waivers. Awards are subject to the scheme's academic, financial, nationality and documentation requirements; funding is not guaranteed."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "What can I do after completing a public health degree in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates, depending on their qualification and experience, may pursue opportunities in health research, epidemiology, healthcare management, health policy, data analysis, community health and NGO programs. Regulated clinical professions have their own individual licensing and qualification requirements."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Admission Process for Public Health in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process generally involves the following steps:"
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Career Opportunities After Public Health in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may explore roles in public health, healthcare administration, research, policy analysis and health-related organisations, depending on their qualifications and experience.",
            "Potential career paths include:"
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
            "International applicants may need the following documents, depending on the university and programme:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Secondary school certificates for undergraduate applications.",
            "Bachelor's degree certificate for master's applications.",
            "Master's degree certificate for doctoral applications, where applicable.",
            "Academic transcripts and marksheets.",
            "English or Italian language proficiency results, if required.",
            "CV or r&eacute;sum&eacute;.",
            "Statement of purpose or motivation letter.",
            "Letters of recommendation, where required.",
            "Portfolio or research proposal, if applicable.",
            "Official translations of documents, where required.",
            "Document verification or declaration of comparability, if requested by the university.",
            "University admission letter for visa processing.",
            "Proof of financial means, accommodation and insurance, as required for the visa application."
          ]
        },
        {
          "t": "p",
          "items": [
            "Document requirements vary by university, qualification and consular procedure. Applicants should use the official university and visa checklists for the relevant intake."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students pursue an MPH in Italy in English?",
        "a": "Yes. Major universities including University of Milan and Sapienza University offer English-taught master's programmes in Public Health and Global Health."
    },
    {
        "q": "How long is a Master of Public Health in Italy?",
        "a": "A Master's degree in Public Health typically takes 2 years (120 ECTS credits), including field research and a final capstone thesis."
    },
    {
        "q": "What are the tuition fees for Public Health in Italy?",
        "a": "Public university fees range between €1,000 and €3,800 annually, with eligibility for DSU scholarships covering tuition and living allowances."
    },
    {
        "q": "What are the admission requirements for an MPH in Italy?",
        "a": "Applicants need a Bachelor's degree in medicine, healthcare, life sciences, or related social sciences, along with English proficiency (IELTS 6.5+)."
    },
    {
        "q": "What key disciplines are studied in the curriculum?",
        "a": "Core topics include epidemiology, biostatistics, health economics, global health policy, disease surveillance, and environmental healthcare."
    },
    {
        "q": "What career paths are available for MPH graduates in Italy?",
        "a": "Graduates work with international health agencies (WHO, European CDC), government ministries, healthcare consultancies, and health NGOs."
    }
],
  faqTitle: "Frequently Asked Questions About Public Health in Italy"
};

export default function PublicHealthItaly() {
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
      seoPath="/study-abroad/italy/public-health"
    />
  );
}
