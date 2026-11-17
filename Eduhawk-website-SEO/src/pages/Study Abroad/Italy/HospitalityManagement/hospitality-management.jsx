import cmsData from "../../../../data/study_abroad/italy/hospitality_management.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Italy/HospitalityManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Italy/HospitalityManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Italy/HospitalityManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Italy/HospitalityManagement/cta_bg.webp";
import Ca_Foscari_University_of_VeniceImg from "../../../../Images/Abroad/Italy/HospitalityManagement/Ca_Foscari_University_of_Venice.webp";
import Federico_II_University_of_NaplesImg from "../../../../Images/Abroad/Italy/HospitalityManagement/Federico_II_University_of_Naples.webp";
import Universit_degli_Studi_di_BergamoImg from "../../../../Images/Abroad/Italy/HospitalityManagement/Universit_degli_Studi_di_Bergamo.webp";

const page = {
  "name": "Hospitality Management in Italy",
  "country": "Italy",
  "slug": "hospitality_management",
  "title": "Hospitality Management in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Hospitality Management in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Hospitality Management in Italy, Study Tourism and Hospitality in Italy, Best Hospitality Schools in Italy, Hotel Management in Italy",
  "introTitle": "Hospitality Management Italy for Indian Students",
  heroParas: [
    "Studying Hospitality Management in Italy immerses students in the global capital of culinary arts, luxury tourism, and high-end hotel administration with real-world industry apprenticeships."
  ],
  overview: [
    "Yes. We have courses taught in English. For example, Ca' Foscari University of Venice has a Bachelor's in Hospitality Innovation and e-Tourism in English."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Hospitality & Tourism",
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
      "title": "Can Indian students study Hospitality Management in Italy through English medium?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. We have courses taught in English. For example, Ca' Foscari University of Venice has a Bachelor's in Hospitality Innovation and e-Tourism in English."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "How long does it take to complete a Hospitality Management course in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Many bachelor programs last for three years and many master programs last for two years. Specialized programs may have different lengths."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Hospitality Management in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Ca_Foscari_University_of_VeniceImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: Federico_II_University_of_NaplesImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Universit_degli_Studi_di_BergamoImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Ca_Foscari_University_of_VeniceImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What is the cost of studying Hospitality Management in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost depends on the institution and the program. Tuition at public universities may be less expensive than fees at private hospitality schools. Students should consult official fee schedules and budget for other expenses."
          ]
        }
      ]
    },
    {
      "slot": "section-4",
      "eyebrow": "Details",
      "title": "Is there a scholarship for Indian students?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Maybe, yes. Financial assistance may be available from the university, regional, merit or need-based, based on individual eligibility and deadlines."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Jobs after Hospitality Management in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may work in hotel operations, guest relations, food and beverage, tourism, event management, revenue management and hospitality marketing. Career opportunities are dependent on qualifications, experience, language skills and work authorization."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Admission Process - Italy Hospitality Management",
      "groups": [
        {
        "t": "timeline",
        "items": [
                {
                        "step": "1",
                        "title": "Select Your Program",
                        "desc": "Decide if you want to study a bachelor or master degree and compare the curriculum, language, length of study and practical training."
                },
                {
                        "step": "2",
                        "title": "Get Your Papers Ready",
                        "desc": "Collect transcripts, certificates, passport information and any other materials requested."
                },
                {
                        "step": "3",
                        "title": "Complete Selection Criteria",
                        "desc": "Do interviews or entrance tests, if necessary."
                },
                {
                        "step": "4",
                        "title": "Get Your Admission Decision",
                        "desc": "Follow the university's instructions to accept the offer and complete enrollment."
                }
        ]
}
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Recognition of Hospitality Management Degrees in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students must check that the university and the program to which they are applying is officially recognized and that the qualification is appropriate for their future career or further-study ambitions.",
            "Before signing up, check:",
            "Official status of the institution and degree.",
            "This qualification could be a Bachelor's degree, Master's degree or specialized professional qualification.",
            "Whether the degree meets the entrance requirements for further education.",
            "As to whether further recognition is needed in India or any other country.",
            "Whether the particular job requires further certification, professional registration or language proficiency.",
            "A university degree is not an automatic passport to employment, professional recognition in every country, or the right to every hospitality position."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Salary and Career Opportunities in Italy after Hospitality Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can get jobs in hotels, resorts, restaurants, tourism companies, event management, travel services and luxury hospitality businesses.",
            "Possible positions are as follows:",
            "Executive Hotel Management",
            "Front Office Supervisor",
            "Guest Relations Executive",
            "Supervisor, Food and Beverage",
            "Hospitality Marketing Executive",
            "Revenue Management Analyst Conference and Event Coordinator",
            "Hospitality Management Resort or Hotel Management Hospitality Business Development Executive",
            "Indicative salary",
            "Years of experienceEstimated annual gross salaryApprox. value in INR",
            "Entry-level €22,000 - €28,000₹23.89 lakh - ₹30.41 lakh",
            "Mid-Level €28,000-€40,000₹30.41-₹43.44 lakhs",
            "Professionals with experience €40k-€60k+₹43.44L-₹65.16L+",
            "These are examples, not proven salary figures or guarantyd pay. Real wages can vary a lot, depending on the job, the employer, the city, your experience, your language skills and the season. INR figures are conversions of gross salary and not take-home pay.",
            "A good knowledge of the Italian language could be particularly useful in guest-facing roles and when working with local hospitality businesses. International hotel chains may also present this possibility, where English and other languages are appreciated. Employment is subject to obtaining applicable work authorization requirements."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Required for Hospitality Management Study in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "The documents you need will depend on the university and the program. Typical requirements are:",
            "Passport, valid.",
            "Class 10 & Class 12 certificate and marksheet for bachelor applicants.",
            "Transcripts and a bachelor's degree certificate for applicants for a master's program.",
            "Results of an English language test (if applicable).",
            "Curriculum vitae (if applicable).",
            "Statement of purpose/motivation letter, if required.",
            "Letters of recommendation (if applicable).",
            "Documents for entrance test/interview (if applicable).",
            "Legalized documents or certified translations on request.",
            "Financial, accommodation, insurance and other documents needed for the student visa process.",
            "Applicants should follow the current university document checklist and the relevant Italian visa instructions."
          ]
        }
      ]
    },
    {
      "slot": "section-11",
      "eyebrow": "Details",
      "title": "Frequent Questions and Answers about Hospitality Management in Italy",
      "groups": []
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Hospitality Management in Italy in English?",
        "a": "Yes. Universities such as Ca' Foscari University of Venice and specialized hospitality institutes offer English-taught bachelor's and master's programmes."
    },
    {
        "q": "What is the duration of Hospitality Management degrees in Italy?",
        "a": "Bachelor's programmes take 3 years (180 ECTS) and master's programmes take 1 to 2 years, including intensive hotel and resort internships."
    },
    {
        "q": "What are the tuition costs for Hospitality Management in Italy?",
        "a": "Tuition at public universities ranges from €1,000 to €4,000 per year, while specialized private hospitality institutes charge higher rates with scholarship options."
    },
    {
        "q": "Are internships included in Italian hospitality programmes?",
        "a": "Yes. Mandatory practical internships with premier luxury hotel chains, Michelin-starred culinary venues, and tourism agencies are integrated into the curriculum."
    },
    {
        "q": "What subjects are taught in hospitality management?",
        "a": "Subjects include luxury brand management, revenue management, tourism economics, event management, wine tourism, and sustainable hospitality."
    },
    {
        "q": "What career opportunities exist after graduation?",
        "a": "Graduates pursue international careers as luxury hotel managers, resort directors, event producers, food and beverage directors, and tourism consultants."
    }
],
  faqTitle: "Frequently Asked Questions About Hospitality Management in Italy"
};

export default function HospitalityManagementItaly() {
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
      seoPath="/study-abroad/italy/hospitality-management"
    />
  );
}
