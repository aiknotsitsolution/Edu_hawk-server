import bBSData from "../../../../data/study_abroad/usa/bbs.json";
import { formatRichText, EligibilityCtaCard, AbroadCoursePage } from "../../../../component/CoursePageKit";
import React, { useEffect, useRef, useState } from "react";
import SeoHead from "../../../../component/SeoHead";
import heroImg from "../../../../Images/Abroad/USA/BBS/hero.webp";
import sideImg from "../../../../Images/Abroad/USA/BBS/overview.webp";
import u0Img from "../../../../Images/Abroad/USA/BBS/New York University.webp";
import u1Img from "../../../../Images/Abroad/USA/BBS/University of Southern California.webp";
import u2Img from "../../../../Images/Abroad/USA/BBS/University of Illinois at Urbana-Champaign.webp";
import u3Img from "../../../../Images/Abroad/USA/BBS/Arizona State University.webp";

const page = {
  "name": "BBS",
  "slug": "bbs",
  "title": "BBS in USA for Indian Students | 2026 | Edu Hawk Worldwide",
  "description": "Study Bachelor of Business Studies (BBS) in the USA after Class 12. Specialisations, duration, eligibility, entrance exams, tuition fees, universities, careers and visa process for Indian students.",
  "keywords": "Study BBS in USA for Indian Students, Bachelor of Business Studies in USA, Best Universities for Business Studies in USA, BBS Admission Requirements in USA for Indian Students, Business Studies Courses in USA After 12th",
  "introTitle": "BBS in the USA for Indian Students",
  "heroParas": [
    "Earn a comprehensive Bachelor of Business Studies (BBS) in the USA, integrating core management principles, business economics, quantitative analysis, and corporate strategy. International students build strong business acumen and explore Optional Practical Training (OPT) employment opportunities, subject to US immigration regulations."
  ],
  "overview": [
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey."
  ],
  "level": "Undergraduate",
  "crumb": "Business",
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why the USA",
      "title": "Introduction BBS in U.S.A.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The Bachelor of Business Studies (BBS) is an undergraduate degree that covers business principles, management, economics, finance, marketing and organizational operations. It enables students to acquire skills in analytical thinking, communication, problem solving and decision making for the modern business environment.",
            "The particular degree Bachelor of Business Studies (BBS) is less common in the US. Students interested in a similar qualification could look at undergraduate degrees in Business Administration, Business Management, Business or International Business.",
            "These programs offer a solid grounding in business operations and enable students to acquire specialized knowledge in areas that are consistent with their academic interests and career goals.",
            "Edu Hawk Worldwide assists students in exploring international study options, comprehending university admission standards, comparing pathways like [Bachelor of Business Administration (BBA)](/study-abroad/usa/bba) and [Business Management](/study-abroad/usa/business-management), and [getting expert counselling](/contact). Check our [admission FAQs](#faq) and [top universities](#universities)."
          ]
        }
      ]
    },
    {
      "slot": "why2",
      "eyebrow": "Why the USA",
      "title": "Why Study Business Studies in USA?",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Globally Recognized Learning Explore business programs at universities with strong academic and industry ties.",
            "Broad Business Knowledge Study management, finance, accounting, economics and marketing |",
            "Hands-on Experience: Gain practical abilities through case studies, group projects, presentations and business simulations.",
            "Specialization Options: Select from areas like entrepreneurship, international business, finance or marketing.",
            "**Industry Exposure:** Some universities provide internship opportunities and career development resources.",
            "Additional Study Options: Lay a foundation for an MBA or specialized master’s degree."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Where to study",
      "title": "Top Universities to Consider for Business Studies",
      "groups": [],
      "lead": [
        "Below are US institutions offering undergraduate business or related programs:"
      ],
      "note": [],
      "unis": [
        {
          "name": "New York University",
          "desc": "",
          "img": u0Img
        },
        {
          "name": "University of Southern California",
          "desc": "",
          "img": u1Img
        },
        {
          "name": "University of Illinois at Urbana-Champaign",
          "desc": "",
          "img": u2Img
        },
        {
          "name": "Arizona State University",
          "desc": "",
          "img": u3Img
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Programs",
      "title": "Course Choices and Specializations",
      "groups": [
        {
          "t": "p",
          "items": [
            "For students who want to study BBS, here are some related undergraduate programs in the USA:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Education",
            "Administration of Business",
            "Business Administration",
            "International Business Finance Marketing",
            "Economics Accounting",
            "Business entrepreneur",
            "Business Analytics Human Resource Management",
            "Supply Chain Management Operations Management Management Information Systems"
          ]
        },
        {
          "t": "p",
          "items": [
            "Depending on the university, these options may be offered as a full degree, major, concentration, or minor."
          ]
        }
      ]
    },
    {
      "slot": "duration",
      "eyebrow": "How long",
      "title": "Duration of the course",
      "groups": [
        {
          "t": "p",
          "items": [
            "A full-time undergraduate degree in business in the USA usually takes four years to complete.",
            "NOTE: Actual length may differ based on institution, course structure, transfer credits, academic progress, and internship arrangements."
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Who can apply",
      "title": "Eligibility Criteria for Indian Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "The typical requirements for **Indian students** applying to undergraduate business programs are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th Class passed from a recognized Board of Education.",
            "Grades for university admission criteria.",
            "Class 10 and Class 12 mark sheets or transcripts .",
            "Proof of English language proficiency, if required.",
            "A current passport.",
            "Application form completed.",
            "Personal essays and/or **letters of recommendation (LOR)**, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students from Commerce, Science and Humanities background may be eligible for many programs. Subject specific prerequisites such as Mathematics will depend on the degree and university you choose."
          ]
        }
      ]
    },
    {
      "slot": "english",
      "eyebrow": "English proficiency",
      "title": "English Language Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "English language proficiency, as determined by the University, may be demonstrated by one of the accepted tests.",
            "Some common choices are:",
            "TOEFL iBT",
            "IELTS Academic",
            "PTE Academic",
            "Duolingo English Test",
            "Accepted by all institutions Minimum scores and exemptions vary by institution Students are required to check the current English-language requirements on the official website of the university of their choice."
          ]
        }
      ]
    },
    {
      "slot": "tests",
      "eyebrow": "Admission tests",
      "title": "Entrance examinations and admission standards",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements vary by institution and program. Universities might look at:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10th and Class 12th Academic Performance.",
            "SAT or ACT scores, if required or submitted.",
            "Results of tests in English language.",
            "Application statements or personal essays.",
            "Recommendation letters.",
            "Extracurricular activities, leadership and achievement."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities have test optional policies while others may require standardized test scores. Applicants are advised to consult the requirements relevant to their chosen intake."
          ]
        }
      ]
    },
    {
      "slot": "tuition",
      "eyebrow": "Budget",
      "title": "Tuition Fees and Living Costs",
      "groups": [
        {
          "t": "p",
          "items": [
            "Studying business in the USA costs vary depending on university, location, accommodation and lifestyle.",
            "Spending Estimated Yearly Cost"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Tuition cost 15,000-45,000+ USD",
            "Lodging and meals USD 10,000-20,000",
            "Books, supplies and personal expenses USD 1,000-3,000",
            "Other costs and health insurance"
          ]
        },
        {
          "t": "p",
          "items": [
            "These are general planning estimates and not official quotes. Costs may be higher at private institutions and in high-cost cities. Students are encouraged to refer to the university’s official cost-of-attendance information and to estimate expenses for the full degree."
          ]
        }
      ]
    },
    {
      "slot": "scholarships",
      "eyebrow": "Funding",
      "title": "Fees and Financial Support",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the institution and academic performance and scholarship conditions, international students may be eligible for financial assistance.",
            "Possible options include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships for merit.",
            "Academic achievement awards",
            "International student scholarships specific to universities",
            "Financial Aid for International Students at Colleges that Admit International Students.",
            "External scholarships from qualifying organizations.",
            "Scholarships can pay for a portion of tuition, or in a limited number of cases, a larger portion of educational expenses. Availability, eligibility criteria, deadlines and renewal conditions are subject to change."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "After graduation",
      "title": "Career Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "An undergraduate degree in business can lead to entry-level jobs in many different industries for graduates.",
            "Career paths you could pursue include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Associate Business Development",
            "Marketing Coordinator.",
            "Sales Executive Human Resources Coordinator Finance Assistant Operations Coordinator Business Analyst Trainee",
            "Customer Relationship Associate Management Trainee",
            "Small Business Owner / Entrepreneur",
            "Career options depend on the graduate’s specialization, practical experience, skills and eligibility to work."
          ]
        }
      ]
    },
    {
      "slot": "visa",
      "eyebrow": "Visa",
      "title": "Application Procedure & Student Visa",
      "groups": [],
      "lead": [
        "Generally **Indian students** planning to study business in USA go through the following steps:"
      ],
      "steps": [
        {
          "title": "Pick a program",
          "text": "Compare business degrees by curriculum, **tuition fees**, university location and career goals"
        },
        {
          "title": "Know if You are Eligible",
          "text": "Check academic requirements, English language proficiency, entrance tests and application deadlines."
        },
        {
          "title": "Collect Documents",
          "text": "Arrange **academic transcripts**, passport, test scores, essays, recommendation letters and financial documents as requested."
        },
        {
          "title": "Apply",
          "text": "Apply via the official university website or an accepted application platform."
        },
        {
          "title": "Getting an Admission Decision",
          "text": "Check the offer, the scholarship details, the payment deadlines and the enrollment conditions."
        },
        {
          "title": "Obtain the Necessary Immigration Documents",
          "text": "Upon admission and completion of applicable requirements, the university may issue Form I-20 to the qualified student visa applicant. Step 7. Apply for F-1 Student Visa Complete all required processing for a visa application following the guidance of the current U.S. embassy or consulate."
        },
        {
          "title": "Prepare to go out",
          "text": "Organize accommodation, travel, health insurance if required and university registration. Getting admission in a university doesn’t mean visa approval. Applicants must satisfy all applicable immigration requirements."
        }
      ]
    }
  ],
  "faqTitle": "FAQs",
  "faqs": [
    {
      "q": "Is BBS in the United States?",
      "a": "The exact title Bachelor of Business Studies is less common in the USA. Related undergraduate programs include business, business administration, business management and international business."
    },
    {
      "q": "How long does it take to complete a bachelor’s degree in Business USA?",
      "a": "Four years is usually the length of most full-time undergraduate business degrees."
    },
    {
      "q": "Can Indian students apply after 12th?",
      "a": "Yes. Students who meet the academic, English-language and other admission requirements of the university may apply."
    },
    {
      "q": "Do you need maths for business studies?",
      "a": "Not in all the universities. Subject requirements Applicants should consult the relevant subject requirements as they vary according to the program chosen."
    },
    {
      "q": "How much does it cost to study business in the US?",
      "a": "The tuition can be between about USD 15,000 and USD 45,000 a year or more. Other costs include living expenses, insurance and other fees."
    },
    {
      "q": "How can Edu Hawk worldwide Consultancy help me study abroad?",
      "a": "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities"
    }
  ]
};

const imgDims = { w: 900, h: 760 };

// UI is rendered by the shared polished course template (CoursePageKit).
const BbsAbroad = () => {
  const dynamicPage = {
    ...page,
    title: bBSData?.seo?.title || page.title,
    description: bBSData?.seo?.description || page.description,
    heroParas: bBSData?.hero?.subtitle ? [bBSData.hero.subtitle] : page.heroParas,
    overview: bBSData?.overview ? (Array.isArray(bBSData.overview) ? bBSData.overview : bBSData.overview.split('\n\n')) : page.overview,
    sections: (page.sections || []).map(sec => {
      if ((sec.slot === 'universities' || sec.slot === 'unis') && bBSData?.universities && bBSData.universities.length > 0) {
        return {
          ...sec,
          unis: bBSData.universities.map((u, idx) => ({
            name: u.name,
            desc: u.desc || '',
            img: (sec.unis?.[idx]?.img || sec.unis?.[idx]?.image) || u.image || u.img
          }))
        };
      }
      return sec;
    }),
    universities: (bBSData?.universities && bBSData.universities.length > 0)
      ? bBSData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image,
          img: page.universities?.[idx]?.img || u.img
        }))
      : page.universities,
    faqs: (bBSData?.faq && bBSData.faq.length > 0)
      ? bBSData.faq.map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
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
      seoPath="/study-abroad/usa/bbs"
    />
  );
};

export default BbsAbroad;
