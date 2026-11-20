import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/InternationalBusiness/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/InternationalBusiness/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/InternationalBusiness/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/InternationalBusiness/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/international-business.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/InternationalBusiness/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/InternationalBusiness/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/InternationalBusiness/image3.webp";


const page = {
  "name": "International Business",
  "country": "Sweden",
  "slug": "international-business",
  "title": "International Business in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study International Business in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study International Business in Sweden, International Business in Sweden for Indian Students, Best Universities in Sweden, Sweden International Business Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "International Business in Sweden for Indian Students",
  "heroParas": [
    "**International Business in Sweden** is an attractive study option for students who want to build careers in international trade, global marketing, business development and multinational management. A degree in this field helps students understand how companies operate across countries, manage international customers and respond to different markets, business practices and cultural environments."
  ],
  "overview": [
    "Indian students can choose a bachelor's degree after completing Class 12 or pursue a master's degree after graduation. Several Swedish universities offer English-taught programmes in international business, international management and global trade.",
    "For example, M\u00e4lardalen University offers a bachelor's programme in International Business Management, while Stockholm School of Economics and the University of Gothenburg offer relevant postgraduate programmes.",
    "Through **Edu Hawk worldwide** study abroad guidance, students can explore suitable programmes, compare universities and understand the requirements involved in pursuing business education in Sweden."
  ],
  "level": "Bachelor & Master of International Business",
  "crumb": "International Business",
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
      "title": "Why Study International Business in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden offers an international learning environment, industry-focused education and opportunities to understand European business practices. Here are some reasons to consider studying this subject:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**International Learning Environment:** Study alongside students from different countries and gain exposure to diverse business perspectives.",
            "**English-Taught Programmes:** Several bachelor's and master's programmes are available in English, making them accessible to international students.",
            "**Practical Business Skills:** Develop knowledge of international marketing, management, economics, business strategy and cross-border trade.",
            "**Career Flexibility:** Prepare for opportunities in consulting, sales, market research, logistics and international business operations.",
            "**European Business Exposure:** Learn about business practices, global markets and sustainability approaches followed by Swedish and European organisations.",
            "**Further Study Opportunities:** Progress from a bachelor's degree to a specialised master's programme in international business, management or trade."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "International Business Courses in Sweden for International Students",
      "groups": [
        {
          "t": "p",
          "items": [
            "**International Business courses in Sweden** vary by university and qualification level. Bachelor's programmes generally cover business fundamentals, economics, marketing, management and international markets. Master's programmes usually focus on advanced business strategy, global operations, international trade and research."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Programme",
            "Typical Duration",
            "Main Areas of Study"
          ],
          "rows": [
            [
              "Bachelor's in International Business or International Business Management",
              "3 years",
              "Business administration, economics, marketing, management and international markets"
            ],
            [
              "Master's in International Business",
              "2 years",
              "International business, global strategy, management and research"
            ],
            [
              "Master's in International Business and Trade",
              "2 years",
              "International trade, multinational companies, economic geography and business policy"
            ],
            [
              "Master's in International Business Strategy",
              "Usually 2 years",
              "Business development, competitive strategy and international marketing"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are typical programme areas and durations. The exact degree title, curriculum, duration and admission requirements depend on the university."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for International Business in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited International Business in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "image": uniImg3, "img": uniImg3
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "image": uniImg2, "img": uniImg2
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study International Business in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility depends on the university, programme and qualification level.",
            "Students applying for a bachelor's programme generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Complete Class 12 or an equivalent recognised upper-secondary qualification.",
            "Meet the university's mathematics and other subject-specific prerequisites.",
            "Demonstrate the required level of English language proficiency.",
            "Satisfy any additional programme-specific admission conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "According to University Admissions in Sweden, Indian students who completed school after 2009 generally need a passing grade in Mathematics to meet the relevant bachelor's eligibility requirement. Students should verify the exact subject requirements for their chosen programme.",
            "Applicants for a master's programme generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Hold a recognised bachelor's degree, normally equivalent to 180 ECTS credits.",
            "Have an appropriate academic background in business administration, economics or a related discipline, depending on the programme.",
            "Meet the English language proficiency requirement.",
            "Satisfy any specific subject-credit, selection or additional admission criteria."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Uppsala University's Master's Programme in Business and Management, International Business specialisation, requires a bachelor's degree and 90 credits in business studies. Applicants should check the university's current eligibility criteria before applying."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for International Business Programmes in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Admission requirements for International Business in Sweden** differ between universities and degree levels.",
            "For bachelor's programmes, universities generally assess applicants' school qualifications, subject prerequisites and English language proficiency. For master's programmes, they usually consider the bachelor's degree, academic transcripts, relevant subject credits and English language ability.",
            "Many Swedish universities accept recognised English proficiency tests. For IELTS Academic, the general English 6 equivalent requirement is usually:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Overall IELTS score:** 6.5",
            "**Minimum individual section score:** 5.5"
          ]
        },
        {
          "t": "p",
          "items": [
            "However, the accepted tests and minimum scores can differ by programme. Some applicants may meet the English requirement through qualifying previous education, while others may need to submit an accepted test score.",
            "Depending on the programme, universities may also request:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Statement of purpose or motivation letter",
            "CV or r\u00e9sum\u00e9",
            "Letters of recommendation",
            "Additional academic or professional documents"
          ]
        },
        {
          "t": "p",
          "items": [
            "These are not universal requirements. Applicants should follow the official instructions for their selected programme."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying International Business in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **cost of studying International Business in Sweden** depends on the university, degree level, city and personal lifestyle. Students from outside the EU/EEA and Switzerland generally pay tuition fees unless they qualify for an exemption."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and Programme",
            "Total Tuition Fee (SEK)",
            "Approximate Tuition Fee (INR)"
          ],
          "rows": [
            [
              "M\u00e4lardalen University \u2013 Bachelor's",
              "300,000",
              "\u20b928.50 lakh"
            ],
            [
              "Lund University \u2013 Bachelor's",
              "390,000",
              "\u20b937.05 lakh"
            ],
            [
              "Stockholm School of Economics \u2013 Master's",
              "360,000",
              "\u20b934.20 lakh"
            ],
            [
              "University of Gothenburg \u2013 Master's",
              "194,000",
              "\u20b918.43 lakh"
            ],
            [
              "Uppsala University \u2013 Master's",
              "228,000",
              "\u20b921.66 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These figures reflect the published programme fees and intake information provided above. They should not be treated as guaranteed prices for future admissions."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Approximate Monthly Cost"
          ],
          "rows": [
            [
              "Accommodation",
              "SEK 4,000\u20137,000 (\u20b938,000\u2013\u20b966,500)"
            ],
            [
              "Food and groceries",
              "SEK 2,000\u20133,000 (\u20b919,000\u2013\u20b928,500)"
            ],
            [
              "Transportation",
              "SEK 600\u20131,000 (\u20b95,700\u2013\u20b99,500)"
            ],
            [
              "Study and personal expenses",
              "SEK 1,000\u20133,000 (\u20b99,500\u2013\u20b928,500)"
            ],
            [
              "**Estimated monthly budget**",
              "**SEK 10,000\u201314,000 (\u20b995,000\u2013\u20b91.33 lakh)**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Living expenses vary according to the city, accommodation and personal spending habits. Students should also budget for travel, insurance where applicable, residence permit fees and other one-time expenses."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Application Procedure for International Business in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can generally follow these steps when applying to Swedish universities:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Select a University and Programme:** Choose a bachelor's or master's programme and confirm whether it is taught in English.",
            "**Check Eligibility:** Review the academic background, subject prerequisites, English language requirements and programme-specific conditions.",
            "**Apply Through the Official Portal:** International applicants commonly apply through UniversityAdmissions.se, following the instructions for their selected programmes.",
            "**Upload Supporting Documents:** Submit academic records, identification and English language evidence, along with any additional documents requested.",
            "**Pay the Application Fee:** Applicants who are not exempt generally need to pay an application fee of **SEK 900**.",
            "**Review the Admission Decision:** Check the results and follow the university's instructions to accept the offer and pay any required tuition instalment.",
            "**Arrange Your Move to Sweden:** If applicable, apply for a Swedish residence permit for studies and organise accommodation, finances and travel before departure."
          ]
        },
        {
          "t": "p",
          "items": [
            "For the first admissions round for Autumn 2027, applications through University Admissions are scheduled to open on **16 October 2026** and close on **15 January 2027**. Students should verify the dates and programme listings before submitting an application."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Studies and Career Advancement",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree in international business, students can pursue a specialised master's qualification to develop advanced knowledge and improve their career prospects.",
            "Possible postgraduate study areas include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International Business and Management",
            "International Marketing",
            "Global Business Strategy",
            "International Business and Trade",
            "Supply Chain and Logistics Management",
            "Finance and Business Analysis",
            "Entrepreneurship and Innovation"
          ]
        },
        {
          "t": "p",
          "items": [
            "Internships, project work, international exchange opportunities, language learning and relevant professional experience can strengthen a student's academic and professional profile. These experiences are particularly valuable for roles involving international clients, overseas markets and cross-border business operations."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "Karolinska Institutet",
      "location": "Stockholm, Sweden",
      "fee": "SEK 140,000 \u2013 200,000 / Year",
      "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "KTH Royal Institute of Technology",
      "location": "Stockholm, Sweden",
      "fee": "SEK 120,000 \u2013 160,000 / Year",
      "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "Lund University",
      "location": "Lund, Sweden",
      "fee": "SEK 90,000 \u2013 150,000 / Year",
      "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "Uppsala University",
      "location": "Uppsala, Sweden",
      "fee": "SEK 90,000 \u2013 145,000 / Year",
      "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "Chalmers University of Technology",
      "location": "Gothenburg, Sweden",
      "fee": "SEK 130,000 \u2013 170,000 / Year",
      "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
      "image": uniImg1, "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for International Business in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for International Business in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for International Business in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function InternationalBusinessSweden() {
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
      seoPath="/study-abroad/sweden/international-business"
    />
  );
}
