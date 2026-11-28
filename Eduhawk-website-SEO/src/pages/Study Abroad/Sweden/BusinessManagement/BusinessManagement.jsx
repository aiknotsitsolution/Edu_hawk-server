import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/BusinessManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/BusinessManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/BusinessManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/BusinessManagement/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/business-management.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/BusinessManagement/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/BusinessManagement/image2.webp";


const page = {
  "name": "Business Management",
  "country": "Sweden",
  "slug": "business-management",
  "title": "Business Management in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Business Management in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Business Management in Sweden, Business Management in Sweden for Indian Students, Best Universities in Sweden, Sweden Business Management Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Business Management in Sweden for Indian Students",
  "heroParas": [
    "Study Business Management in Sweden, acquiring comprehensive expertise across organizational strategy, financial analysis, operational leadership, and corporate governance. International students master real-world business acumen and explore post-study residence permits to seek employment under Swedish migration policy."
  ],
  "overview": [
    "Students can choose a bachelor's degree after completing their secondary education or pursue a master's degree after obtaining a recognised undergraduate qualification. Programme titles may vary between institutions and can include Business and Economics, International Business Management, Business and Management, or Management.",
    "Through **Edu Hawk worldwide study abroad guidance**, students can explore suitable programmes and understand the requirements involved in pursuing higher education in Sweden."
  ],
  "level": "Bachelor & Master of Business Management",
  "crumb": "Business Management",
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
      "title": "Why Study Business Management in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Choosing to **Study Business Management in Sweden** can provide students with an international learning environment and opportunities to develop practical business skills.",
            "Key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**International Learning Environment:** Study alongside students from different countries and cultural backgrounds.",
            "**Practical Education:** Develop business knowledge through case studies, presentations, group projects and analytical assignments.",
            "**Specialisation Options:** Explore areas such as marketing, international business, leadership, entrepreneurship, strategy and finance.",
            "**Career Flexibility:** Build skills relevant to private companies, start-ups, consulting firms and international organisations.",
            "**English-Taught Programmes:** Several Swedish universities offer business-related bachelor's and master's programmes in English.",
            "**Sustainability and Innovation:** Understand responsible business practices and changing global markets."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Business Management Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can select undergraduate or postgraduate programmes depending on their academic qualifications and career goals.",
            "Bachelor's programmes generally take **three years to complete (180 ECTS credits)**. Depending on the university and programme, subjects may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Management Principles and Organisational Behaviour",
            "Consumer Behaviour and Marketing",
            "Accounting and Financial Management",
            "Statistics and Business Economics",
            "Entrepreneurship and Innovation",
            "International Commerce",
            "Business Strategy and Project Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Master's programmes usually take **one to two years**, depending on the degree and university. Common study areas include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business and Management",
            "Global Business",
            "Marketing Management",
            "Organisation and Leadership",
            "Strategic Management",
            "Sustainable Management",
            "Innovation and Entrepreneurship"
          ]
        },
        {
          "t": "p",
          "items": [
            "A master's degree can help graduates deepen their business knowledge, strengthen analytical skills and prepare for specialised professional roles."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Business Management in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Business Management in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\University of Gothenburg",
          "location": "\University of Gothenburg, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "The University of Gothenburg offers a **Bachelor of Science in Business and Economics** and a **Master of Science in Management**. The master's programme is taught in English and is listed for Autumn 2027\**Master's tuition fee:** SEK 194,000 for the complete programme for fee-paying students. ",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\Stockholm School of Economics",
          "location": "\Stockholm School of Economics, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "The Stockholm School of Economics offers a three-year **Bachelor's Programme in Business and Economics**, taught entirely in English. It provides a foundation in business, economics, finance, innovation and entrepreneurship. * ",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "\M\u00e4lardalen University",
          "location": "\M\u00e4lardalen University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "M\u00e4lardalen University offers an English-taught **Bachelor's Programme in International Business Management**, focusing on business administration in an international context.  Students comparing the **Best Universities for Business Management in Sweden** should check the exact degree title, programme language, specialisations, tuition fees and admission requirements for their intended intake.",
          "image": uniImg1, "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study Business Management in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility depends on the university, degree level and programme-specific requirements.",
            "Students generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Complete Class 12 or an equivalent recognised secondary qualification.",
            "Meet the university's general entry requirements.",
            "Fulfil subject-specific requirements, such as mathematics or social studies, where applicable.",
            "Demonstrate English-language proficiency through an accepted qualification or test, if required.",
            "Meet any additional programme-specific admission conditions."
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
            "Hold a recognised bachelor's degree from an accredited university.",
            "Have the required academic credits in business administration, economics or related subjects.",
            "Meet the university's English-language requirements.",
            "Submit programme-specific documents, such as a statement of motivation or application summary sheet, if required.",
            "Fulfil any additional selection criteria."
          ]
        },
        {
          "t": "p",
          "items": [
            "**Important:** Requirements vary by programme. For example, Uppsala University's Master's Programme in Business and Management requires a bachelor's degree, 90 ECTS credits in business studies and 15 ECTS credits in statistics. Applicants should verify the current criteria on the official programme page."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Business Management in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the university and programme, applicants may need to prepare:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic records and certificates.",
            "English-language proficiency certificate, if applicable.",
            "Valid passport.",
            "Programme-specific forms and supporting documents.",
            "Statement of purpose or motivation letter, if required.",
            "CV or r\u00e9sum\u00e9, if requested.",
            "GMAT or other test results, where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities may assess previous academic performance, relevant subject credits and other selection criteria. **Meeting the minimum eligibility requirements does not guarantee admission.**"
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Business Management Fees in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Business Management Fees in Sweden** depend on the university, degree level, programme duration and the student's fee status. The following examples are based on the published tuition figures provided for selected programmes and an indicative exchange rate of **SEK 1 \u2248 \u20b99.50**. Exchange rates may change."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and programme",
            "Duration",
            "Total tuition fee (SEK)",
            "Approx. INR"
          ],
          "rows": [
            [
              "University of Gothenburg \u2013 Bachelor's in Business and Economics",
              "3 years",
              "SEK 291,000",
              "\u20b927.65 lakh"
            ],
            [
              "J\u00f6nk\u00f6ping University \u2013 International Management, BSc",
              "3 years",
              "SEK 360,000",
              "\u20b934.20 lakh"
            ],
            [
              "Stockholm School of Economics \u2013 BSc Business and Economics",
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
              "University of Gothenburg \u2013 MSc in Management",
              "2 years",
              "SEK 194,000",
              "\u20b918.43 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "*These are selected programme examples. Check the university's official fee information for the applicable intake and student category.*",
            "Students should budget for accommodation, food, local transport, utilities, study materials and personal expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Estimated monthly cost"
          ],
          "rows": [
            [
              "Accommodation",
              "SEK 4,000\u20137,000"
            ],
            [
              "Groceries and food",
              "SEK 2,000\u20133,000"
            ],
            [
              "Local transport",
              "SEK 600\u20131,000"
            ],
            [
              "Phone, study materials and personal expenses",
              "SEK 1,400\u20133,000"
            ],
            [
              "**Estimated total**",
              "**SEK 10,000\u201314,000**"
            ],
            [
              "**Approximate INR total**",
              "**\u20b995,000\u2013\u20b91.33 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are planning estimates rather than university quotes. Actual expenses vary depending on the city, accommodation type and personal lifestyle.",
            "For the selected master's programmes listed above:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Tuition fees:** SEK 194,000\u2013228,000",
            "**Living expenses for two years:** SEK 240,000\u2013336,000",
            "**Estimated total:** SEK 434,000\u2013564,000",
            "**Approximate INR:** \u20b941.23 lakh\u2013\u20b953.58 lakh"
          ]
        },
        {
          "t": "p",
          "items": [
            "For a three-year bachelor's programme, estimated living expenses alone may range from **SEK 360,000\u2013504,000**, approximately **\u20b934.20 lakh\u2013\u20b947.88 lakh**.",
            "These estimates exclude airfare, residence-permit fees, initial accommodation deposits and other one-time expenses."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Procedure for Business Management in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can generally follow these steps when applying to Swedish universities:",
            "**Step 1: Choose a Programme**",
            "Compare degree levels, specialisations, tuition fees, programme duration and language of instruction.",
            "**Step 2: Prepare Your Documents**",
            "Collect academic records, English-language evidence, passport details and any programme-specific documents.",
            "**Step 3: Submit Your Application**",
            "Apply through **University Admissions Sweden** during the relevant application period.",
            "**Step 4: Follow Application Instructions**",
            "Upload the required supporting documents, pay the application fee if applicable and regularly check your application account for updates or additional requirements.",
            "**Step 5: Prepare for Your Arrival**",
            "After receiving an admission offer, follow the university's instructions for tuition payment and check the current Swedish residence-permit requirements before travelling.",
            "For some of the listed Autumn 2027 programmes, the application period is **16 October 2026 to 15 January 2027**. Applicants must confirm the official deadlines and document requirements for their chosen programme."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Additional Studies and Career Advancement",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree, students may pursue postgraduate studies in areas such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International Business and Trade",
            "Business and Management",
            "Marketing Management",
            "Accounting and Finance",
            "Human Resource Management",
            "Entrepreneurship and Innovation",
            "Strategic Management",
            "Sustainable Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Master's students can further develop skills in business analytics, leadership, project management, research and organisational development.",
            "Relevant internships, practical projects and professional experience can also strengthen a graduate's career profile."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Salary and Job Opportunities After Business Management in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can explore opportunities across different industries, depending on their qualifications, experience, language skills and specialisation."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Job role",
            "Key responsibilities"
          ],
          "rows": [
            [
              "Business Analyst",
              "Analysing business performance and recommending improvements."
            ],
            [
              "Marketing Manager",
              "Planning marketing campaigns and understanding customer behaviour."
            ],
            [
              "Project Coordinator",
              "Supporting project planning, schedules and delivery."
            ],
            [
              "Management Consultant",
              "Helping organisations improve business strategies and operations."
            ],
            [
              "Business Development Executive",
              "Identifying clients, partnerships and growth opportunities."
            ],
            [
              "Human Resources Coordinator",
              "Supporting recruitment, HR processes and employee relations."
            ],
            [
              "Operations Coordinator",
              "Improving daily business processes and operational efficiency."
            ],
            [
              "Entrepreneur",
              "Establishing and managing a business."
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Salary levels vary according to employer, city, industry, experience and proficiency in Swedish. Graduates should consult current Swedish salary statistics and job advertisements when planning their careers.",
            "**A degree does not guarantee employment or a particular salary.** Job opportunities depend on individual qualifications, experience, language skills and employer requirements."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required to Study Business Management in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the programme and university, students may need to prepare:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 and Class 12 certificates and mark sheets for bachelor's applications.",
            "Bachelor's degree certificate and academic transcripts for master's applications.",
            "Results of the required English-language test or other accepted proof of proficiency.",
            "CV or r\u00e9sum\u00e9, if requested.",
            "Statement of purpose or motivation letter, if required.",
            "Programme-specific application forms.",
            "GMAT or other test scores, if applicable.",
            "Official translations of documents not issued in an accepted language, where necessary.",
            "Proof of tuition payment and financial documents for subsequent residence-permit procedures, according to current rules."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always follow the document instructions published by the chosen university and University Admissions Sweden."
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
      "desc": "The University of Gothenburg offers a **Bachelor of Science in Business and Economics** and a **Master of Science in Management**. The master's programme is taught in English and is listed for Autumn 2027\**Master's tuition fee:** SEK 194,000 for the complete programme for fee-paying students. ",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "\Stockholm School of Economics",
      "location": "\Stockholm School of Economics, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "The Stockholm School of Economics offers a three-year **Bachelor's Programme in Business and Economics**, taught entirely in English. It provides a foundation in business, economics, finance, innovation and entrepreneurship. * ",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\M\u00e4lardalen University",
      "location": "\M\u00e4lardalen University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "M\u00e4lardalen University offers an English-taught **Bachelor's Programme in International Business Management**, focusing on business administration in an international context.  Students comparing the **Best Universities for Business Management in Sweden** should check the exact degree title, programme language, specialisations, tuition fees and admission requirements for their intended intake.",
      "image": uniImg2, "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Business Management in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Business Management in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Business Management in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function BusinessManagementSweden() {
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
    sections: (page.sections || []).map(sec => {
      if ((sec.slot === 'universities' || sec.slot === 'unis') && cmsData?.universities && cmsData.universities.length > 0) {
        return {
          ...sec,
          unis: cmsData.universities.map((u, idx) => ({
            name: u.name,
            desc: u.desc || '',
            img: (sec.unis?.[idx]?.img || sec.unis?.[idx]?.image) || u.image || u.img
          }))
        };
      }
      return sec;
    }),
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image,
          img: page.universities?.[idx]?.img || u.img
        }))
      : page.universities,
    faqs: ((cmsData?.faq || cmsData?.faqs) && (cmsData?.faq || cmsData?.faqs).length > 0)
      ? (cmsData.faq || cmsData.faqs).map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
      : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/sweden/business-management"
    />
  );
}
