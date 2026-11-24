import mBSData from "../../../../data/study_abroad/usa/mbs.json";
import { formatRichText, EligibilityCtaCard, AbroadCoursePage } from "../../../../component/CoursePageKit";
import React, { useEffect, useRef, useState } from "react";
import SeoHead from "../../../../component/SeoHead";
import heroImg from "../../../../Images/Abroad/USA/MBS/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/MBS/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/MBS/Harvard University.webp";
import u1Img from "../../../../Images/Abroad/USA/MBS/Stanford University.webp";
import u2Img from "../../../../Images/Abroad/USA/MBS/Massachusetts Institute of Technology.webp";

const page = {
  "name": "MBS",
  "slug": "mbs",
  "title": "MBS in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Master of Business Studies (MBS) in the USA. Eligibility, English requirements, tuition fees, scholarships, top universities, career opportunities and visa process for Indian students.",
  "keywords": "Study MBS in USA for Indian Students, Master of Business Studies in USA, Best Universities for Business Studies in USA, MBS Admission Requirements in USA for International Students, MBS Course Duration in USA, MBS Tuition Fees in USA for Indian Students, Business Master's Scholarships for Indian Students in USA, Master of Science in Management in USA, MBA and MBS Differences for Indian Students, Eligibility for Business Master's Programs in USA, GMAT and GRE Requirements for Business Master's in USA, English Language Tests for US Universities, Career Opportunities After Business Studies in USA, USA Student Visa for Indian Business Students",
  "introTitle": "MBS in the US",
  "heroParas": [
    "Studying a Master of Business Studies (MBS) in the USA equips graduates with specialized managerial acumen, strategic analytics, and professional development tailored to high-growth corporate and entrepreneurial careers."
  ],
  "overview": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "level": "Postgraduate",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "What is an MBS Degree?",
      "groups": [
        {
          "t": "p",
          "items": [
            "MBS generally stands for Master of Business Studies. However, the precise meaning of an MBS degree and its availability varies from country to country and university to university. Those interested in business and management education in the USA should verify whether the institution they are interested in offers a program specifically named Master of Business Studies or a related degree such as a Master of Science in Management or Master of Business Administration.",
            "Edu Hawk Worldwide assists students in exploring international study options, comprehending university admission standards, comparing pathways like [MBA in the USA](/study-abroad/usa/mba) and [Business Management](/study-abroad/usa/business-management), and [getting expert counselling](/contact). Check our [admission FAQs](#faq) and [top universities](#universities)."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Business courses relevant to MBS in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can explore postgraduate programs related to business including:",
            "Master of Business Studies, where offered Master of Business Administration Master of Science in Management Master of Science in International Business Master of Science in Business Analytics Master of Science in Finance Master of Science in Marketing Master of Science in Human Resource Management Master of Science in Entrepreneurship"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Top Universities for MBS in the USA",
      "groups": [],
      "lead": [
        "Students can research business and management courses at:"
      ],
      "note": [
        "They have different business programs. This list does not mean that all of them have a Master of Business Studies degree. Refer to the university’s official website for the precise course name and admission prerequisites."
      ],
      "unis": [
        {
          "name": "Harvard University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "Stanford University",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "Massachusetts Institute of Technology",
          "desc": "",
          "img": u2Img
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of the Course",
      "groups": [
        {
          "t": "p",
          "items": [
            "Master of Business Studies: Varies depending on the institution and structure of the program.",
            "Master of Science in Management: Usually 1-2 years.",
            "Other specialized master’s programs 1–2 years, generally"
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants generally require:",
            "A recognized bachelor degree."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic transcript and degree certificates.",
            "Proficiency in English language, as required.",
            "**Statement of Purpose (SOP)** or application essay.",
            "**Letters of recommendation (LOR)** (if required)",
            "Resume or CV, as appropriate to the program.",
            "**GMAT or GRE** scores, if the school requires it."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some programs may require prerequisite coursework or professional experience."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Proficiency Requirements",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Where accepted, universities may accept",
            "IELTS Academic",
            "TOEFL iBT",
            "PTE Academic",
            "Duolingo English Test"
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Admission Requirements & Entrance Exams",
      "groups": [
        {
          "t": "p",
          "items": [
            "Program requirements vary based on **GMAT or GRE**.",
            "Some universities are making these tests optional or offering waivers."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Applicants may also be required to submit academic essays",
            "**letters of recommendation (LOR)**,",
            "Interviews and evidence of relevant academic or professional experience."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Tuition and Living Costs",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indicative Annual Planning Estimates for Related Master’s Programs:",
            "**Tuition fees**: Around USD 20,000-60,000 and above.",
            "**Living expenses**: Around USD 14,000–35,000.",
            "Actual costs will vary depending on the university, location, length of the program, accommodation and lifestyle. Check official fees before applying."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Financial assistance and scholarships",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students will investigate:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Awards from individual universities Academic scholarships",
            "Department scholarships",
            "Awards for external education",
            "Employer sponsorship where applicable",
            "Funding amounts and eligibility vary. Scholarships are competitive and not a guaranty."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities After an MBS in the USA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the level and concentration, graduates may pursue positions in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Analyst",
            "Management Consultant",
            "Business Development",
            "Executive Operations",
            "Manager Marketing Specialist",
            "Human Resources Specialist",
            "Project Coordinator Strategy",
            "Analyst Entrepreneur"
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Application Process and Student Visa",
      "groups": [
        {
          "t": "p",
          "items": [
            "Most **Indian students** require a valid student visa to study an approved academic program. The full-time academic study visa is the **F-1 student visa**.",
            "Application process:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Please confirm the exact degree and the university.",
            "Check eligibility, admission deadlines",
            "Prepare transcripts, English test scores and supporting documents.",
            "Apply via the university’s official portal.",
            "Review the admission offer and funding.",
            "Fulfilll the school’s requirements and receive the I-20 form.",
            "Complete any necessary SEVIS and visa requirements.",
            "Check visa and entry requirements, then book accommodation and travel.",
            "U.S. immigration laws govern the issuance of visas."
          ]
        }
      ]
    }
  ],
  "faqTitle": "Frequently Asked Questions",
  "faqs": [
    {
      "q": "What does MBS mean?",
      "a": "MBS can mean Master of Business Studies more generally but it varies from institution to institution and country to country."
    },
    {
      "q": "Is an MBS in the USA?",
      "a": "Not all US universities have the exact degree title. Students should check if a particular institution provides it."
    },
    {
      "q": "What is the US alternative to MBS?",
      "a": "Other options include a Master of Science in Management, Master of Business Administration, and specialized business master’s degrees."
    },
    {
      "q": "How long is an MBS related course?",
      "a": "Depending on the course structure, many business master’s programs can take about 1 to 2 years."
    },
    {
      "q": "Who can apply?",
      "a": "Normally, you need to have a recognized bachelor degree and other documents that the university requires."
    },
    {
      "q": "How can Edu Hawk worldwide Consultancy help me study abroad?",
      "a": "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities."
    }
  ]
};

const imgDims = { w: 900, h: 760 };

// UI is rendered by the shared polished course template (CoursePageKit).
const MbsAbroad = () => {
  const dynamicPage = {
    ...page,
    title: mBSData?.seo?.title || page.title,
    description: mBSData?.seo?.description || page.description,
    heroParas: page.heroParas,
    overview: mBSData?.overview ? (Array.isArray(mBSData.overview) ? mBSData.overview : mBSData.overview.split('\n\n')) : page.overview,
    faqs: (mBSData?.faq && mBSData.faq.length > 0)
      ? mBSData.faq.map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
      : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={typeof heroBgImg !== 'undefined' ? heroBgImg : undefined}
      sideImg={sideImg}
      ctaBgImg={typeof ctaBgImg !== 'undefined' ? ctaBgImg : undefined}
      imgDims={typeof imgDims !== 'undefined' ? imgDims : undefined}
      seoPath="/study-abroad/usa/mbs"
    />
  );
};

export default MbsAbroad;
