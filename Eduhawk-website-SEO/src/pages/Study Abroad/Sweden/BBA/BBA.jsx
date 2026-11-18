import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/BBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/BBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/BBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/BBA/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/bba.json";

const page = {
  "name": "BBA",
  "country": "Sweden",
  "slug": "bba",
  "title": "BBA in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study BBA in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study BBA in Sweden, BBA in Sweden for Indian Students, Best Universities in Sweden, Sweden BBA Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "BBA in Sweden for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying BBA in Sweden for Indian students."
  ],
  "overview": [
    "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for BBA in Sweden."
  ],
  "level": "Bachelor of Business Administration",
  "crumb": "BBA",
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
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "However, the exact degree title BBA may not be offered at every Swedish university. There are similar options at undergraduate level under p...",
      "lead": "Explore leading universities and institutions in Sweden offering accredited BBA in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "img_var": "null"
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "img_var": "null"
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "img_var": "null"
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "img_var": "null"
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "img_var": "null"
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Universities in Sweden offer different tuition fees, program structures and admission requirements for students who wish to pursue a BBA. Th...",
      "lead": "Explore leading universities and institutions in Sweden offering accredited BBA in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "img_var": "null"
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "img_var": "null"
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "img_var": "null"
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "img_var": "null"
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "img_var": "null"
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "The main advantages are:",
      "groups": [
        {
          "t": "ul",
          "items": [
            "## International Exposure: Gain knowledge about international trade, global markets, and business practices across countries.",
            "## Practical Education: Develop analytical, communication, teamwork and problem solving abilities through academic projects and business-related assignments.",
            "## English-Taught Programs: Discover a range of business degrees taught in English, provided you satisfy the language requirements of the university.",
            "## Career Flexibility Prepare for careers in marketing, finance, consulting, sales, human resources, and management."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Each university has its own subjects and specialties. Students should consult the official curriculum to understand the course structure bef...",
      "lead": "Explore leading universities and institutions in Sweden offering accredited BBA in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "img_var": "null"
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "img_var": "null"
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "img_var": "null"
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "img_var": "null"
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "img_var": "null"
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for BBA in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited BBA in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\\. University of Gothenburg",
          "location": "\\. University of Gothenburg, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* **Programme:** Bachelor's Programme in Business and Economics * **Duration:** 3 years * **Tuition Fee:** SEK 291,000 (approximately \u20b927.65 lakh) * **Application Period for Autumn 2027:** 16 October 2026 \u2013 15 January 2027 ![][image1] Students should check the official programme page for the language of instruction, eligibility requirements, and application details for their chosen intake.",
          "img_var": "null"
        },
        {
          "name": "\\. J\u00f6nk\u00f6ping University",
          "location": "\\. J\u00f6nk\u00f6ping University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* **Programme:** Bachelor's Programme in International Management * **Duration:** 3 years * **Language:** English * **Total Tuition Fee:** SEK 360,000 (approximately \u20b934.20 lakh) * **Entry Requirements:** Applicants must meet the academic requirements, including the specified English, mathematics, and social studies prerequisites or accepted equivalents. ![][image2] J\u00f6nk\u00f6ping University's programme offers an international business and management focus. Applicants should check the official programme page for the relevant application route and deadlines.",
          "img_var": "null"
        },
        {
          "name": "\\. Ume\u00e5 University",
          "location": "\\. Ume\u00e5 University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* **Programme:** International Business and Economics Programme * **Duration:** 3 years * **Total Tuition Fee:** SEK 289,800 (approximately \u20b927.53 lakh) The curriculum combines areas of business administration and economics. Students should confirm the language of instruction and admission requirements for the intended intake. **![][image3]** **Important:** Students must carefully check the language of instruction. The programme listing may be in Swedish, so applicants seeking an English-taught degree should confirm this directly with the university. *Currency conversion is for illustration only, using SEK 1 \u2248 \u20b99.50. Programme availability, tuition fees, language of instruction, and admission requirements may change by intake. Always refer to the official university website for updated information.*",
          "img_var": "null"
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "BBA Eligibility in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students applying for undergraduate business programmes in Sweden generally need to meet the following requirements:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Class 12 Qualification:** Completion of Class 12 or another recognised equivalent upper-secondary qualification.",
            "**Mathematics Requirements:** Meet the mathematics prerequisites specified by the university.",
            "**English Language Proficiency:** Demonstrate English proficiency through an approved qualification or test, if required.",
            "**Programme-Specific Requirements:** Fulfil additional academic prerequisites, which may include social studies or advanced mathematics.",
            "**Academic Records:** Submit all required marksheets, certificates, and supporting documents before the application deadline."
          ]
        },
        {
          "t": "p",
          "items": [
            "Sweden's general bachelor's admission requirements include completed upper-secondary education, English proficiency equivalent to Swedish English 6, and specified mathematics requirements. Individual programmes may have additional subject prerequisites.",
            "Meeting the general eligibility criteria does not automatically guarantee admission. Each university assesses applications according to its own requirements."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for BBA in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students applying for business-related bachelor's programmes should prepare the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 marksheet and certificate",
            "Class 12 marksheet and certificate",
            "Valid passport",
            "Proof of English language proficiency, if required",
            "Official translations of academic documents, where applicable",
            "Programme-specific application forms and supporting documents",
            "Application fee payment, if applicable"
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants from India should carefully follow the country-specific document instructions published by **University Admissions Sweden** and check whether additional documents are required by their selected university."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying BBA in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Cost of Studying BBA in Sweden** depends on the university, tuition fee, accommodation, lifestyle, and duration of the programme. Students from outside the EU/EEA generally need to pay tuition fees unless they qualify for an exemption or scholarship."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University",
            "Total Tuition Fee (SEK)",
            "Approximate Tuition Fee (INR)"
          ],
          "rows": [
            [
              "University of Gothenburg",
              "SEK 291,000",
              "\u20b927.65 lakh"
            ],
            [
              "J\u00f6nk\u00f6ping University",
              "SEK 360,000",
              "\u20b934.20 lakh"
            ],
            [
              "Ume\u00e5 University",
              "SEK 289,800",
              "\u20b927.53 lakh"
            ],
            [
              "Stockholm School of Economics",
              "SEK 360,000",
              "\u20b934.20 lakh"
            ],
            [
              "Uppsala University",
              "SEK 297,000",
              "\u20b928.22 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "*These are the published programme fee figures referenced in this guide. Confirm the tuition fee for your selected intake before applying.*",
            "In addition to tuition fees, international students should budget for accommodation, food, transport, and personal expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Estimated Monthly Cost (SEK)",
            "Approximate Monthly Cost (INR)"
          ],
          "rows": [
            [
              "Accommodation",
              "SEK 4,000\u20137,000",
              "\u20b938,000\u2013\u20b966,500"
            ],
            [
              "Food and Groceries",
              "SEK 2,000\u20133,000",
              "\u20b919,000\u2013\u20b928,500"
            ],
            [
              "Transport",
              "SEK 600\u20131,000",
              "\u20b95,700\u2013\u20b99,500"
            ],
            [
              "Personal and Study Expenses",
              "SEK 1,400\u20133,000",
              "\u20b913,300\u2013\u20b928,500"
            ],
            [
              "**Estimated Total**",
              "**SEK 10,000\u201314,000**",
              "**\u20b995,000\u2013\u20b91.33 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Actual expenses depend on the city, accommodation type, and personal lifestyle.",
            "The following estimates combine the listed tuition fees with an estimated living budget of SEK 10,000\u201314,000 per month for three years."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University",
            "Estimated Total (SEK)",
            "Approximate Total (INR)"
          ],
          "rows": [
            [
              "University of Gothenburg",
              "SEK 651,000\u2013795,000",
              "\u20b961.85\u2013\u20b975.53 lakh"
            ],
            [
              "J\u00f6nk\u00f6ping University",
              "SEK 720,000\u2013864,000",
              "\u20b968.40\u2013\u20b982.08 lakh"
            ],
            [
              "Ume\u00e5 University",
              "SEK 649,800\u2013793,800",
              "\u20b961.73\u2013\u20b975.41 lakh"
            ],
            [
              "Stockholm School of Economics",
              "SEK 720,000\u2013864,000",
              "\u20b968.40\u2013\u20b982.08 lakh"
            ],
            [
              "Uppsala University",
              "SEK 657,000\u2013801,000",
              "\u20b962.42\u2013\u20b976.10 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are indicative estimates covering tuition and living expenses only. They do not include airfare, residence permit expenses, accommodation deposits, insurance where applicable, or other one-time costs. Actual expenses may vary with the university, city, exchange rate, and personal spending.",
            "**7\\. BBA Application in Sweden**",
            "Students who want to apply for undergraduate business programs can normally follow these steps:",
            "Choose a Program",
            "Compare programs International Management, Business and Economics, Business Administration. Review degree title, course structure, language of instruction and university requirements.",
            "Check if you qualify",
            "Please check the academic requirements, mathematics requirements and English language requirements for your chosen course.",
            "Get Your Documents Ready",
            "Gather academic transcripts, degrees, passport information, English language test scores and any other required documents.",
            "Submit your application online",
            "Apply via University Admissions Sweden or the university\u2019s approved application channel, depending on the program.",
            "Pay the Application Fee and Upload Your Documents",
            "Pay the applicable application fee and upload all supporting documents before the deadline if applicable.",
            "Getting Ready for Arrival",
            "When you have received an offer of admission, you should check the requirements for a Swedish residence permit, find accommodation and plan your travel.",
            "Application Period: Autumn 2027 The main application period for several English-taught bachelor\u2019s programs runs from 16 October 2026 to 15 January 2027\\. Some universities, such as J\u00f6nk\u00f6ping University, may have a direct application route with a different deadline. Always check the official program page to ensure you are following the correct application route.",
            "**8\\. Further Study Following a Bachelor in Business**",
            "Following a bachelor\u2019s degree in business, graduates can proceed to postgraduate education in Sweden or abroad, depending on the entry requirements of the chosen institution.",
            "Some other areas of study might be:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master's in Business Administration: Gain advanced knowledge in business operations, finance and management.",
            "Master\u2019s Degree in Management: Gain expertise in organizational leadership, strategy and business development.",
            "Master\u2019s in International Business: Focuses on global trade, international markets, and cross-border business operations.",
            "Master\u2019s in Finance: Gain knowledge and skills in financial markets, investment and corporate finance.",
            "MBA: If the applicant meets the MBA programme's educational and professional experience requirements, apply for an MBA program. Some MBA programs require relevant work experience."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students must verify the eligibility criteria of academic grades, English proficiency, work experience, and required subjects of a bachelor\u2019s degree before applying.",
            "**9\\. Job Opportunity After a BBA in Sweden**",
            "A bachelor\u2019s degree in business can prepare you for a wide range of career opportunities. Graduates could look for opportunities in business operations, marketing, finance, sales, consulting and human resources.",
            "**Role**",
            "Principal accountabilities"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Development Manager",
            "Identifying new customers and opportunities for market and business growth",
            "Co-ordinator Marketing",
            "Helping with marketing campaigns, market research and promotional activities",
            "Business Analyst (BA)",
            "Business data, performance and operational processes analysis",
            "salesperson",
            "Managing customer relationships and supporting sales",
            "Project Coordinator",
            "Supporting project timelines, tasks & delivery",
            "HR Coordinator",
            "Assistance with recruitment and employee related processes",
            "Operations Co-ordinator",
            "Supporting business processes and operational efficiencies",
            "Business Owner / Entrepreneur",
            "Starting and running a business or enterprise"
          ]
        },
        {
          "t": "p",
          "items": [
            "It is contingent upon your skills, your internships, your professional experience, your language skills and what the employer needs. Some positions and work places can benefit from Swedish knowledge.",
            "A degree doesn't guarantee you a job or a specific salary. Students should also review applicable work and residence regulations post-graduation.",
            "**10\\. Documents Required to Study BBA in Sweden**",
            "When applying to university and later for a residence permit students should have the following documents ready:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 Marksheet & Certificate",
            "Class XII Marksheet and Certificate",
            "Valid passport",
            "Proof of English language proficiency, where required",
            "Official translations of documents, if applicable Supporting documents specific to the university",
            "Payment of application fee, if applicable",
            "Tuition fee payment and financial documents for residence permit application"
          ]
        },
        {
          "t": "p",
          "items": [
            "The document requirements are university and application route dependent. Please consult the current official instructions prior to submitting your application.",
            "**11\\. FAQs about BBA in Sweden**",
            "**1\\. Can I study BBA in Sweden?**",
            "Yes . Business Education at the Undergraduate Level Sweden offers undergraduate business education in Business and Economics, International Management, and Business Administration. However, not all universities have a degree with the exact title BBA. Find out the official degree title before applying.",
            "**2\\. Can Indian students pursue BBA in Sweden in English?**",
            "Yes. Some Swedish universities and business schools offer relevant bachelor\u2019s programs in English. Examples include some programs at J\u00f6nk\u00f6ping University and Stockholm School of Economics. Students should consider Gothenburg, Ume\u00e5, Uppsala and other institutions before applying.",
            "**3\\. What is the course fee for BBA related courses in Sweden?**",
            "The selected program examples in this guide have different tuition fees, from around SEK 289,800 to SEK 360,000 which is about \u20b927.53 lakh to \u20b934.20 lakh at the indicative exchange rate used.",
            "**4\\. What is the cost of studying BBA in Sweden?**",
            "Estimated total budget including tuition and living expenses for the selected three-year program examples is approximately between \u20b961.73 lakh and \u20b982.08 lakh. Actual costs vary according to the university, accommodation, lifestyle and exchange rate.",
            "**5\\. Is it possible to do an MBA after BBA in Sweden?**",
            "Yes. Graduates can apply for an MBA after their bachelor\u2019s degree, provided they meet the admission criteria of the MBA provider. Some institutions require students to have relevant work experience, so students should check the entry requirements for each course.",
            "**6\\. How long does a bachelor's degree in business take in Sweden?**",
            "Most bachelor's programmes in business and related subjects take **three years** to complete and generally carry 180 ECTS credits.",
            "**7\\. Are scholarships available for Indian students studying business in Sweden?**",
            "Some Swedish universities offer scholarships to eligible international fee-paying students. Availability, scholarship value, and eligibility conditions vary by institution and intake. Students should check the official scholarship pages of their chosen universities."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\\. University of Gothenburg",
      "location": "\\. University of Gothenburg, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* **Programme:** Bachelor's Programme in Business and Economics * **Duration:** 3 years * **Tuition Fee:** SEK 291,000 (approximately \u20b927.65 lakh) * **Application Period for Autumn 2027:** 16 October 2026 \u2013 15 January 2027 ![][image1] Students should check the official programme page for the language of instruction, eligibility requirements, and application details for their chosen intake.",
      "img_var": "null"
    },
    {
      "name": "\\. J\u00f6nk\u00f6ping University",
      "location": "\\. J\u00f6nk\u00f6ping University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* **Programme:** Bachelor's Programme in International Management * **Duration:** 3 years * **Language:** English * **Total Tuition Fee:** SEK 360,000 (approximately \u20b934.20 lakh) * **Entry Requirements:** Applicants must meet the academic requirements, including the specified English, mathematics, and social studies prerequisites or accepted equivalents. ![][image2] J\u00f6nk\u00f6ping University's programme offers an international business and management focus. Applicants should check the official programme page for the relevant application route and deadlines.",
      "img_var": "null"
    },
    {
      "name": "\\. Ume\u00e5 University",
      "location": "\\. Ume\u00e5 University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* **Programme:** International Business and Economics Programme * **Duration:** 3 years * **Total Tuition Fee:** SEK 289,800 (approximately \u20b927.53 lakh) The curriculum combines areas of business administration and economics. Students should confirm the language of instruction and admission requirements for the intended intake. **![][image3]** **Important:** Students must carefully check the language of instruction. The programme listing may be in Swedish, so applicants seeking an English-taught degree should confirm this directly with the university. *Currency conversion is for illustration only, using SEK 1 \u2248 \u20b99.50. Programme availability, tuition fees, language of instruction, and admission requirements may change by intake. Always refer to the official university website for updated information.*",
      "img_var": "null"
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for BBA in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for BBA in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for BBA in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function BBASweden() {
  const dynamicPage = {
    ...page,
    name: cmsData.hero?.title || page.name,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
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
      seoPath="/study-abroad/sweden/bba"
    />
  );
}
