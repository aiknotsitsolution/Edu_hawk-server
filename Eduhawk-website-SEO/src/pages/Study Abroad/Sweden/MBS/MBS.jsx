import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/MBS/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/MBS/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/MBS/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/MBS/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/mbs.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/MBS/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/MBS/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/MBS/image3.webp";
import uniImg4 from "../../../../Images/Abroad/Sweden/MBS/image4.webp";


const page = {
  "name": "MBS",
  "country": "Sweden",
  "slug": "mbs",
  "title": "MBS in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study MBS in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study MBS in Sweden, MBS in Sweden for Indian Students, Best Universities in Sweden, Sweden MBS Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "MBS in Sweden for Indian Students",
  "heroParas": [
    "**Business Studies in Sweden** offers international students opportunities to develop knowledge in business administration, economics, management, marketing and international trade. Students can begin with an undergraduate business degree after Class 12 and progress to a specialised master's programme after completing their bachelor's qualification."
  ],
  "overview": [
    "The term **MBS (Master's in Business Studies)** may be used informally to describe postgraduate business studies. However, Swedish universities may use official degree titles such as MSc in Business Studies, Business and Management, or Business Administration.",
    "It is also important to distinguish an academic master's degree from an MBA. An MBA is a professional postgraduate qualification generally designed for graduates with relevant work experience.",
    "Tuition fees for international students, including Indian applicants, vary by university and programme. Therefore, students should compare the total cost in Swedish kronor (SEK) and Indian rupees (INR) before applying.",
    "Through **Edu Hawk worldwide study abroad guidance**, students can explore suitable business programmes and understand the admission requirements involved in pursuing higher education in Sweden."
  ],
  "level": "Master of Business Studies",
  "crumb": "MBS",
  "stats": [
    {
      "val": "SEK 80K-150K",
      "label": "Tuition / Year"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World-Class Nordic Innovation",
      "desc": "Study in Sweden's globally ranked universities renowned for pioneering scientific breakthroughs, design thinking, and sustainable research."
    },
    {
      "icon": "FaGraduationCap",
      "title": "English-Taught Degrees",
      "desc": "Over 1,000 bachelor's and master's degree programs delivered entirely in English with international accreditation."
    },
    {
      "icon": "FaFileAlt",
      "title": "Generous Post-Study Work",
      "desc": "Sweden offers residence permits after graduation for students to seek employment or start innovative businesses."
    },
    {
      "icon": "FaCheckCircle",
      "title": "High Quality of Life",
      "desc": "Ranked among the top nations globally for safety, equality, environmental sustainability, and student well-being."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Sweden",
      "title": "Why Study Business Studies in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Choosing to **Study Business in Sweden** can help students develop practical business knowledge and prepare for opportunities in an international business environment.",
            "Key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**International Exposure:** Gain knowledge of global markets, international trade and business strategies.",
            "**Hands-On Learning:** Develop practical skills through case studies, presentations, research and group projects.",
            "**English-Taught Options:** Several Swedish universities offer business-related bachelor's and master's programmes in English.",
            "**Career Flexibility:** Explore career paths in management, marketing, consulting, finance and business development.",
            "**Innovation and Sustainability:** Understand responsible business practices, entrepreneurship and evolving market trends.",
            "**International Learning Environment:** Study alongside students from different countries and cultural backgrounds."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Business Studies Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can choose undergraduate or postgraduate business programmes according to their academic qualifications and career goals.",
            "A bachelor's degree generally takes **three years (180 ECTS credits)** to complete. It provides a foundation for further studies in business administration, economics, management and international business.",
            "Common subjects include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Administration",
            "Accounting and Finance",
            "Marketing and Consumer Behaviour",
            "Statistics and Economics",
            "Organisational Behaviour",
            "Entrepreneurship and Innovation",
            "International Business"
          ]
        },
        {
          "t": "p",
          "items": [
            "A **Business Administration Bachelor's in Sweden** can help students develop an understanding of business operations, financial management, marketing and organisational strategies.",
            "A master's programme usually takes **one to two years**, depending on the university and programme structure.",
            "Students may consider specialisations such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Studies with an International Focus",
            "Business and Management",
            "International Business",
            "Business Administration",
            "Strategy and Management",
            "Marketing",
            "Organisation and Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "A **Business and Management Master's in Sweden** can help graduates gain advanced subject knowledge, analytical skills and a deeper understanding of international business practices."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Business Studies in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited MBS in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\University of Gothenburg",
          "location": "\University of Gothenburg, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "The University of Gothenburg offers a three-year **Bachelor's Programme in Business and Economics**, taught in English. * **Duration:** 3 years * **Total tuition fee:** SEK 291,000 * **Approximate INR:** \u20b927.65 lakh * **Official programme page:** University of Gothenburg \u2013 Business and Economics. ",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\Uppsala University",
          "location": "\Uppsala University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Uppsala University offers a two-year **Master's Programme in Business and Management**, with specialisations in International Business, Organisation, Marketing and Entrepreneurship. * **Duration:** 2 years * **Total tuition fee:** SEK 228,000 * **Approximate INR:** \u20b921.66 lakh * **Official programme page:** Uppsala University \u2013 Business and Management.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "",
          "location": ", Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Recognized institution in Sweden providing accredited degree programs and research facilities for international students.",
          "image": uniImg3, "img": uniImg3
        },
        {
          "name": "\Stockholm School of Economics",
          "location": "\Stockholm School of Economics, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "The Stockholm School of Economics offers a three-year **Bachelor's Programme in Business and Economics**, taught entirely in English. * **Duration:** 3 years * **Annual tuition fee:** SEK 120,000 * **Total tuition fee:** SEK 360,000 * **Approximate INR:** \u20b934.20 lakh * **Official programme page:** Stockholm School of Economics \u2013 Business and Economics.  Students comparing the **Best Universities for Business Studies in Sweden** should check the exact programme title, specialisations, teaching language, tuition fees and admission requirements on the official university websites.",
          "image": uniImg4, "img": uniImg4
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study Business Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements depend on the university, degree level and chosen programme.",
            "Applicants generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Complete Class 12 or an equivalent recognised higher secondary qualification.",
            "Meet the university's general admission requirements.",
            "Fulfil subject-specific prerequisites, including mathematics or other subjects where applicable.",
            "Demonstrate English-language proficiency according to university requirements.",
            "Meet any additional programme-specific conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Hold a recognised bachelor's degree.",
            "Have relevant academic credits in business administration, economics or related subjects, where required.",
            "Meet the university's English-language requirements.",
            "Submit programme-specific documents.",
            "Fulfil additional selection criteria, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Uppsala University's Master's Programme in Business and Management requires a bachelor's degree, **90 ECTS credits in business studies and 15 ECTS credits in statistics**.",
            "Applicants should check the latest eligibility criteria for their selected programme before submitting an application."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Business Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the university and programme, applicants may be required to submit:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic transcripts and certificates.",
            "English-language test results, if applicable.",
            "Valid passport.",
            "CV or r\u00e9sum\u00e9, where required.",
            "Statement of purpose or motivation letter, if requested.",
            "Programme-specific forms and supporting documents.",
            "GMAT scores or other test results, where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some programmes have competitive admission processes and may consider academic performance, relevant subject credits and other selection criteria.",
            "**Meeting the minimum eligibility requirements does not guarantee admission.**"
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Business Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Business Studies Tuition Fees in Sweden** depend on the university, programme duration and student category.",
            "The following estimates use an indicative exchange rate of **SEK 1 \u2248 \u20b99.50**. INR conversions are approximate and may change with exchange-rate fluctuations."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and programme",
            "Duration",
            "Total tuition (SEK)",
            "Approximate tuition (INR)"
          ],
          "rows": [
            [
              "University of Gothenburg \u2013 BSc Business and Economics",
              "3 years",
              "SEK 291,000",
              "\u20b927.65 lakh"
            ],
            [
              "Stockholm School of Economics \u2013 Bachelor's in Business and Economics",
              "3 years",
              "SEK 360,000",
              "\u20b934.20 lakh"
            ],
            [
              "Uppsala University \u2013 Master's in Business and Management",
              "2 years",
              "SEK 228,000",
              "\u20b921.66 lakh"
            ],
            [
              "Link\u00f6ping University \u2013 Master's in Business Administration",
              "2 years",
              "SEK 214,800",
              "\u20b920.41 lakh"
            ],
            [
              "Dalarna University \u2013 Master's in Business Studies with International Focus",
              "1 year",
              "SEK 96,000",
              "\u20b99.12 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "*Tuition fees are based on the selected programme figures provided and should be reconfirmed with the respective universities for the intended intake.*",
            "Students should plan for accommodation, food, transport, study materials and personal expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Monthly cost (SEK)",
            "Approximate monthly cost (INR)"
          ],
          "rows": [
            [
              "Accommodation",
              "4,000\u20137,000",
              "\u20b938,000\u2013\u20b966,500"
            ],
            [
              "Food and groceries",
              "2,000\u20133,000",
              "\u20b919,000\u2013\u20b928,500"
            ],
            [
              "Local transport",
              "600\u20131,000",
              "\u20b95,700\u2013\u20b99,500"
            ],
            [
              "Personal and study expenses",
              "1,400\u20133,000",
              "\u20b913,300\u2013\u20b928,500"
            ],
            [
              "**Estimated total**",
              "**10,000\u201314,000**",
              "**\u20b995,000\u2013\u20b91.33 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These figures are planning estimates. Actual living expenses vary according to the city, accommodation type and lifestyle.",
            "The following estimates combine the selected tuition fees with indicative living costs for the complete programme duration."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Study pathway",
            "Tuition fee (SEK)",
            "Estimated total including living expenses (SEK)",
            "Approximate total (INR)"
          ],
          "rows": [
            [
              "3-year bachelor's \u2013 Gothenburg",
              "291,000",
              "651,000\u2013795,000",
              "\u20b961.85\u2013\u20b975.53 lakh"
            ],
            [
              "3-year bachelor's \u2013 Stockholm School of Economics",
              "360,000",
              "720,000\u2013864,000",
              "\u20b968.40\u2013\u20b982.08 lakh"
            ],
            [
              "2-year master's \u2013 Uppsala",
              "228,000",
              "468,000\u2013564,000",
              "\u20b944.46\u2013\u20b953.58 lakh"
            ],
            [
              "2-year master's \u2013 Link\u00f6ping",
              "214,800",
              "454,800\u2013550,800",
              "\u20b943.21\u2013\u20b952.33 lakh"
            ],
            [
              "1-year master's \u2013 Dalarna",
              "96,000",
              "216,000\u2013264,000",
              "\u20b920.52\u2013\u20b925.08 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These estimates do not include airfare, residence-permit fees, initial accommodation deposits or other one-time expenses. Tuition fees may change for future intakes."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Procedure for Business Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can generally follow these steps when applying to Swedish universities.",
            "**Step 1: Select a Programme**",
            "Compare course content, programme duration, tuition fees, specialisations and eligibility requirements.",
            "**Step 2: Check the Prerequisites**",
            "Review academic qualifications, required subject credits, English-language requirements and supporting documents.",
            "**Step 3: Prepare Your Application**",
            "Collect academic transcripts, certificates, passport details and any programme-specific documents.",
            "**Step 4: Apply Online**",
            "For many bachelor's and master's programmes, international applicants apply through **University Admissions Sweden**. Follow the application instructions and submit the required documents and fees before the deadline.",
            "**Step 5: Accept Your Offer and Make Arrangements**",
            "Follow the university's instructions for accepting the offer and paying tuition fees. Arrange accommodation and check the current Swedish residence-permit requirements before travelling.",
            "The main application round for many international applicants for Autumn 2027 opens on **16 October 2026 and closes on 15 January 2027**.",
            "Applicants should confirm the exact dates and document deadlines for their selected programmes through University Admissions Sweden and the official university websites."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Additional Studies and Professional Development",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree, students can pursue further studies in areas such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Administration",
            "International Business",
            "Business and Management",
            "Marketing",
            "Accounting and Finance",
            "Entrepreneurship and Innovation",
            "Strategic Management and Organisation"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students can also strengthen their professional profiles through internships, business research, analytical projects and relevant professional certifications.",
            "Developing practical skills in communication, teamwork, financial analysis and problem-solving can support future career development."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Opportunities After Business Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can explore different career opportunities depending on their qualifications, specialisation, experience, language skills and employer requirements."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Career option",
            "Typical responsibilities"
          ],
          "rows": [
            [
              "Business Analyst",
              "Analysing business data and evaluating organisational performance."
            ],
            [
              "Marketing Manager",
              "Researching customer behaviour and planning marketing campaigns."
            ],
            [
              "Business Development Executive",
              "Supporting business growth, sales and partnerships."
            ],
            [
              "Project Coordinator",
              "Coordinating project activities, tasks and schedules."
            ],
            [
              "Management Consultant",
              "Helping organisations improve business strategies and operations."
            ],
            [
              "Human Resources Coordinator",
              "Supporting recruitment and employee-related processes."
            ],
            [
              "Operations Analyst",
              "Analysing workflows and improving operational efficiency."
            ],
            [
              "Business Owner",
              "Establishing, managing and developing a business."
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Job opportunities and salaries depend on professional experience, language proficiency, industry, employer requirements and the overall job market.",
            "**Having a degree does not guarantee employment or a particular salary.** Graduates should research current job advertisements and employer requirements before making career decisions."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required to Study Business Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants should prepare documents according to the official checklist of their chosen university."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 and Class 12 certificates and mark sheets.",
            "English-language proficiency evidence, if required.",
            "Additional programme-specific documents, where applicable."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor's degree certificate.",
            "Academic transcripts.",
            "Valid passport.",
            "English-language proficiency evidence, if required.",
            "CV or r\u00e9sum\u00e9, where applicable.",
            "Statement of purpose or motivation letter, if requested.",
            "GMAT or other test results, if applicable.",
            "Official translations of documents, where necessary."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Proof of tuition payment, where applicable.",
            "Financial documents required under current residence-permit rules.",
            "Other supporting documents requested by the relevant authorities."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always follow the submission instructions provided by the selected university and University Admissions Sweden."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\University of Gothenburg",
      "location": "\University of Gothenburg, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "The University of Gothenburg offers a three-year **Bachelor's Programme in Business and Economics**, taught in English. * **Duration:** 3 years * **Total tuition fee:** SEK 291,000 * **Approximate INR:** \u20b927.65 lakh * **Official programme page:** University of Gothenburg \u2013 Business and Economics. ",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\Uppsala University",
      "location": "\Uppsala University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Uppsala University offers a two-year **Master's Programme in Business and Management**, with specialisations in International Business, Organisation, Marketing and Entrepreneurship. * **Duration:** 2 years * **Total tuition fee:** SEK 228,000 * **Approximate INR:** \u20b921.66 lakh * **Official programme page:** Uppsala University \u2013 Business and Management.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "",
      "location": ", Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Recognized institution in Sweden providing accredited degree programs and research facilities for international students.",
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "\Stockholm School of Economics",
      "location": "\Stockholm School of Economics, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "The Stockholm School of Economics offers a three-year **Bachelor's Programme in Business and Economics**, taught entirely in English. * **Duration:** 3 years * **Annual tuition fee:** SEK 120,000 * **Total tuition fee:** SEK 360,000 * **Approximate INR:** \u20b934.20 lakh * **Official programme page:** Stockholm School of Economics \u2013 Business and Economics.  Students comparing the **Best Universities for Business Studies in Sweden** should check the exact programme title, specialisations, teaching language, tuition fees and admission requirements on the official university websites.",
      "image": uniImg4, "img": uniImg4
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for MBS in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for MBS in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for MBS in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function MBSSweden() {
  const dynamicPage = {
    ...page,
    name: page.name,
    introTitle: cmsData.hero?.title || page.introTitle,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      : page.stats,
    seo: {
      title: cmsData.seo?.title || page.title,
      description: cmsData.seo?.description || page.description,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/sweden/mbs"
    />
  );
}
