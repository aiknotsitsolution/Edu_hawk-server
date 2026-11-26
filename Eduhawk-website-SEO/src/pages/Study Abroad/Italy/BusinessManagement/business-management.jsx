import cmsData from "../../../../data/study_abroad/italy/business_hub.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Italy/BusinessManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Italy/BusinessManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Italy/BusinessManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Italy/BusinessManagement/cta_bg.webp";
import Bocconi_UniversityImg from "../../../../Images/Abroad/Italy/BusinessManagement/Bocconi_University.webp";
import Bologna_UniversityImg from "../../../../Images/Abroad/Italy/BusinessManagement/Bologna_University.webp";
import Ca_Foscari_University_of_VeniceImg from "../../../../Images/Abroad/Italy/BusinessManagement/Ca_Foscari_University_of_Venice.webp";

const page = {
  "name": "Business Management in Italy",
  "country": "Italy",
  "slug": "business_hub",
  "title": "Business Management in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Business Management in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Business Management in Italy, Study Business Management in Italy, Best Business Schools in Italy, Management Degrees in Italy, Business Management Fees in Italy",
  "introTitle": "Business Management in Italy for Indian Students",
  "heroParas": [
    "Study Business Management in Italy, acquiring comprehensive expertise across organizational strategy, financial analysis, operational leadership, and corporate governance. International students master real-world business acumen and explore post-study residence permit opportunities for work search under Italian immigration regulations."
  ],
  overview: [
    "Yes. Indian students can apply to eligible Bachelor's programs after completing Class 12 or its equivalent qualification, subject to the academic, language and selection requirements of the university."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Business & Management",
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
      "title": "Can Indian students study Business Management in Italy after Class 12?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students can apply to eligible Bachelor's programs after completing Class 12 or its equivalent qualification, subject to the academic, language and selection requirements of the university."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "How long does a Bachelor's in Business Management take in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "A standard Italian Bachelor's degree is generally of three years' duration. The precise name of the course and the length of the course will differ from university to university."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Business Management in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Bocconi_UniversityImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: Bologna_UniversityImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Ca_Foscari_University_of_VeniceImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Bocconi_UniversityImg
            }
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "How long is a Master's in Business Management course in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "A typical Master's degree at a university lasts for two years. Some business schools offer specialized one-year master's courses, with different entry requirements."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Are Business Management courses in Italy taught in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes, there are many business schools and universities that offer programs in English. Language availability differs between programs and institutions, so students should check the language of instruction for their chosen intake."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "How much does it cost to study Business Management in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition fees vary according to the institution and program. Students should refer to official fee schedules and research scholarships or tuition discounts they may qualify for."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Italy Business Management Admission Process",
      "groups": [
        {
        "t": "timeline",
        "items": [
                {
                        "step": "1",
                        "title": "Select Your Degree Level",
                        "desc": "Choose Bachelor's after Class 12 or Master's after an undergraduate degree."
                },
                {
                        "step": "2",
                        "title": "Check Eligibility",
                        "desc": "Review the academic prerequisites, entrance exams and language requirements."
                },
                {
                        "step": "3",
                        "title": "Gather Your Documents",
                        "desc": "Collect your academic transcripts, passport, language certificates, CV and a motivation letter if required."
                },
                {
                        "step": "4",
                        "title": "Complete The Selection Process",
                        "desc": "Appear for an interview, an entrance exam or submit any other documents required."
                },
                {
                        "step": "5",
                        "title": "Accept Admission And Scholarships",
                        "desc": "Follow the institution's instructions for accepting the offer, enrollment and financial aid."
                },
                {
                        "step": "6",
                        "title": "Complete Visa Formalities",
                        "desc": "Follow the Italian student-visa procedure relevant to you. Check whether pre-enrolment through Universitaly is required for your course."
                }
        ]
},
        {
          "t": "p",
          "items": [
            "Verify the latest deadlines and admission procedures directly with the chosen university for the 2026 - 2027 intake."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "\"Business Management Degree and Recognition in Italy\"",
      "groups": [
        {
          "t": "p",
          "items": [
            "In the national higher education system of Italy, you can get business and management degrees. A typical Bachelor's degree covers the basics of how businesses work. A university Master's degree develops more advanced skills in management and making strategic choices.",
            "Students need to know what the difference is between these qualifications:"
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Business Management in Italy - Salary and Job Prospects",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates in Business Management can find jobs in consulting, marketing, finance, operations, human resources, retail, logistics and international trade.",
            "Career prospects after a Bachelor degree"
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed to Study Business Management in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "For Undergraduate applicants"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid Passport (",
            "Class 10 and Class 12 marksheets/certificates as applicable",
            "School Leaving Certificate or equivalent qualification",
            "If applicable, entrance-test scores",
            "Certificate of language proficiency, if available",
            "Certified translations or legalized documents, if required",
            "Documents needed for pre-enrolment and student visa application"
          ]
        },
        {
          "t": "p",
          "items": [
            "For Master's Students"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Bachelor's degree or provisional degree certificate",
            "University transcripts and mark sheets",
            "Current CV or resume",
            "Certificate of competence in English language, where required.",
            "Statement of purpose/motivation letter (if applicable)",
            "Letters of recommendation (if required)",
            "Entrance exam scores, if applicable",
            "Work experience or internship papers (if applicable)",
            "Academic and financial documentation (if available)",
            "Documentation required for pre-enrolment and student visa application"
          ]
        },
        {
          "t": "p",
          "items": [
            "Specific requirements vary by institution and program. Please follow the official checklist for your chosen intake."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Business Management in Italy?",
        "a": "Yes. Indian students can apply to English-taught bachelor's and master's programmes in business and management across leading Italian public and private universities."
    },
    {
        "q": "What is the duration of Business Management degrees in Italy?",
        "a": "Bachelor's programmes (Laurea Triennale) take 3 years (180 ECTS), while Master's programmes (Laurea Magistrale) take 2 years (120 ECTS)."
    },
    {
        "q": "What are the tuition fees for Business Management in Italy?",
        "a": "Public universities charge between €1,000 and €4,000 per year, while private institutions such as Bocconi charge higher tuition with generous merit scholarships."
    },
    {
        "q": "Is work experience required for Business Management master's in Italy?",
        "a": "Most MSc in Management programmes do not require prior work experience, making them ideal for recent graduates."
    },
    {
        "q": "Are DSU scholarships applicable for Business Management students?",
        "a": "Yes. Eligible international students can receive regional DSU scholarships covering full tuition remission and student dining and accommodation allowances."
    },
    {
        "q": "What are the post-study work options in Italy after graduation?",
        "a": "Non-EU students graduating with an accredited master's or bachelor's degree can apply for a 12-month post-study job seeker permit in Italy."
    }
],
  faqTitle: "Frequently Asked Questions About Business Management in Italy"
};

export default function BusinessManagementItaly() {
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
      seoPath="/study-abroad/italy/business-management"
    />
  );
}
