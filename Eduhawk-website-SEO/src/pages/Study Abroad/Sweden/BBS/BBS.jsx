import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/BBS/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/BBS/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/BBS/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/BBS/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/bbs.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/BBS/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/BBS/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/BBS/image3.webp";


const page = {
  "name": "BBS",
  "country": "Sweden",
  "slug": "bbs",
  "title": "BBS in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study BBS in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study BBS in Sweden, BBS in Sweden for Indian Students, Best Universities in Sweden, Sweden BBS Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "BBS in Sweden for Indian Students",
  "heroParas": [
    "Earn a comprehensive Bachelor of Business Studies (BBS) in Sweden, integrating core management principles, business economics, quantitative analysis, and corporate strategy. International students build strong business acumen and explore post-study residence permits to seek employment under Swedish migration policy."
  ],
  "overview": [
    "However, the exact degree title **BBS** may not be available at every Swedish university. Similar undergraduate programmes are commonly offered under titles such as **Business and Economics, International Business, and International Management**.",
    "Most comparable bachelor's programmes in Sweden take **three years (180 ECTS credits)** to complete. They can provide a foundation for postgraduate studies or careers in different business sectors.",
    "Through **Edu Hawk worldwide** study abroad guidance, students can explore language-learning options and understand the eligibility, fees and application requirements."
  ],
  "level": "Bachelor of Business Studies",
  "crumb": "BBS",
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
      "title": "Why Study BBS in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden offers an international learning environment and business-related programmes that help students understand global markets, management practices, and economic developments.",
            "Key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**International Education:** Learn about international markets, global trade, and business practices across different countries.",
            "**Practical Learning:** Develop analytical, presentation, teamwork, communication, and problem-solving skills.",
            "**English-Taught Programmes:** Explore selected undergraduate business degrees delivered in English.",
            "**Career Flexibility:** Build a foundation for careers in marketing, finance, sales, consulting, and management.",
            "**Further Study Opportunities:** Progress to a master's degree in business, management, economics, or finance, subject to admission requirements."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "BBS Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Most comparable undergraduate business programmes in Sweden are **three years long and carry 180 ECTS credits**. Although programme titles differ between institutions, students can study a range of business-related subjects.",
            "Common topics in **BBS Courses in Sweden** include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business Management",
            "Financial Accounting",
            "Financial Management",
            "Marketing Management",
            "Business Economics",
            "Organisational Behaviour",
            "International Business",
            "Innovation and Entrepreneurship",
            "Business Statistics and Data Analysis",
            "Corporate Finance",
            "Business Strategy"
          ]
        },
        {
          "t": "p",
          "items": [
            "The subjects, specialisations, and degree titles vary by university. Students should review the official programme curriculum before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for BBS in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited BBS in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\University of Gothenburg (G\u00f6teborgs universitet)",
          "location": "\University of Gothenburg (G\u00f6teborgs universitet), Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* **Programme:** Bachelor's Programme in Business and Economics * **Duration:** 3 years * **Language of Instruction:** English * **Total Tuition Fee:** SEK 291,000 * **Approximate Tuition Fee:** \u20b927.65 lakh  The programme covers areas such as business, economics, commercial law, and sustainability.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\Ume\u00e5 University",
          "location": "\Ume\u00e5 University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* **Programme:** International Business and Economics Programme * **Duration:** 3 years * **Language of Instruction:** English * **Total Tuition Fee:** SEK 289,800 * **Approximate Tuition Fee:** \u20b927.53 lakh  Students explore international business, economics, market analysis, and data visualisation.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "\J\u00f6nk\u00f6ping University",
          "location": "\J\u00f6nk\u00f6ping University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* **Programme:** Bachelor's Programme in International Management * **Duration:** 3 years * **Language of Instruction:** English * **Total Tuition Fee:** SEK 360,000 * **Approximate Tuition Fee:** \u20b934.20 lakh  The programme focuses on areas such as business administration, management, leadership, and international business.",
          "image": uniImg3, "img": uniImg3
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "BBS Eligibility in Sweden",
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
            "**Class 12 Qualification:** Pass Class 12 from a recognised Indian education board or hold an accepted equivalent qualification.",
            "**Academic Requirements:** Meet the university's general bachelor's admission criteria.",
            "**Mathematics Requirements:** Complete the required mathematics subjects or equivalent qualifications, where applicable.",
            "**English Language Proficiency:** Meet the minimum English language requirements through accepted qualifications or tests.",
            "**Programme-Specific Requirements:** Fulfil additional subject prerequisites specified by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, the University of Gothenburg specifies requirements that include **English 6, Mathematics 3b or 3c, and Social Studies 1b**, or accepted equivalents. Ume\u00e5 University also has requirements relating to mathematics, English, and civics.",
            "Requirements may differ between universities and programmes. Students should verify the accepted Indian qualifications and subject equivalencies before applying."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for BBS in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants should prepare the following documents for their university applications:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 marksheets and certificates",
            "Class 12 marksheets and certificates",
            "Valid passport",
            "English language test results or accepted alternative evidence, if applicable",
            "Official translations of academic documents, where required",
            "Programme-specific application forms and supporting documents",
            "Application fee payment, if applicable"
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian applicants should carefully read the country-specific document instructions published by **University Admissions Sweden** to ensure their qualifications and documents meet the requirements."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "BBS Fees in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **BBS Fees in Sweden** depend on the selected university, programme, and intake. International students from outside the EU/EEA generally need to pay tuition fees unless they qualify for an exemption or scholarship.",
            "The following estimates use an illustrative exchange rate of **SEK 1 \u2248 \u20b99.50**. Currency rates are not fixed, so the final INR amount may vary."
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
              "Ume\u00e5 University",
              "SEK 289,800",
              "\u20b927.53 lakh"
            ],
            [
              "J\u00f6nk\u00f6ping University",
              "SEK 360,000",
              "\u20b934.20 lakh"
            ],
            [
              "Stockholm School of Economics",
              "SEK 360,000",
              "\u20b934.20 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "In addition to tuition fees, students should budget for accommodation, food, transportation, and personal expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Monthly Cost (SEK)",
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
              "Transportation",
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
            "Actual living costs depend on the city, accommodation type, and individual lifestyle.",
            "The following estimates combine the programme tuition fees with living expenses of approximately SEK 10,000\u201314,000 per month over three years."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University",
            "Estimated Tuition \\+ Living Costs (SEK)",
            "Approximate Total (INR)"
          ],
          "rows": [
            [
              "University of Gothenburg",
              "SEK 651,000\u2013795,000",
              "\u20b961.85\u2013\u20b975.53 lakh"
            ],
            [
              "Ume\u00e5 University",
              "SEK 649,800\u2013793,800",
              "\u20b961.73\u2013\u20b975.41 lakh"
            ],
            [
              "J\u00f6nk\u00f6ping University",
              "SEK 720,000\u2013864,000",
              "\u20b968.40\u2013\u20b982.08 lakh"
            ],
            [
              "Stockholm School of Economics",
              "SEK 720,000\u2013864,000",
              "\u20b968.40\u2013\u20b982.08 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These totals cover tuition and estimated living expenses only. They exclude airfare, residence permit fees, accommodation deposits, insurance where applicable, and other one-time expenses.",
            "Students should confirm the latest tuition fees and financial requirements before making their final university selection.",
            "**7\How to get admission in Sweden BBS**",
            "Normally, students who want to apply to bachelor programs in the area of business can take the following steps:",
            "Select Your Program",
            "Compare International Management, Business and Economics and other Business degree programs. Check the curriculum, the university and the language of instruction.",
            "Verify Eligibility",
            "Check your academic subjects, class 12 marks, maths qualifications and English language requirements.",
            "Get Your Papers Ready",
            "Gathering school certificates, academic transcripts, passport information and evidence of English language proficiency if required.",
            "Finish Your Online Application",
            "Register in the appropriate international application round for university admission via University Admissions Sweden, or follow the university's approved application route.",
            "Pay Fees and Submit Required Documents",
            "Pay the application fee, if applicable, and make sure to submit all supporting documentation by the deadline.",
            "Organize Your Arrival",
            "Once you have been admitted, pay your tuition fees according to the instructions from the university and check the current requirements for a Swedish residence permit. Book accommodation and travel packing.",
            "Application Period: Fall 2027 According to the dates given for this guide, the main international application round for the University of Gothenburg and Ume\u00e5 University opens on 16 October 2026 and closes on 15 January 2027\Applicants are encouraged to check the official program pages for updates and to confirm the deadline applicable to the program of their choice.",
            "**8\Further Study After BBS**",
            "Students with a relevant **business bachelor\u2019s degree** may also consider postgraduate programs in Sweden or other countries, depending on their academic background and eligibility.",
            "Further study options may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master of Business Administration MSc Business Administration International Business (Master's)",
            "MSc in Management MSc in Marketing",
            "Master of Finance",
            "Master in Entrepreneurship & Innovation",
            "Master of Business Administration (MBA)",
            "Postgraduate qualifications enable students to specialize in a particular area of business or to continue their academic education at an advanced level."
          ]
        },
        {
          "t": "p",
          "items": [
            "Admission may depend on the number of credits obtained for subjects studied at bachelor level, your academic performance, your proficiency in English as well as your professional experience for certain programs.",
            "**9\BBS Job Opportunities in Sweden**",
            "A bachelor\u2019s degree in business can offer a foundation for career opportunities in many industries. Graduates may pursue careers in marketing, finance, sales, consulting, business development and operations.",
            "**Job Position**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Principal accountabilities",
            "Business Development Manager",
            "Identifying new customers and opportunities for market and business growth",
            "Marketing Coordinator",
            "Assist with market research and marketing campaigns",
            "Business Analyst",
            "Business data and organizational performance analysis",
            "Sale Person",
            "Sales support, client relationship management",
            "Co-ordinator of Projects",
            "Coordinate project activities, timelines and tasks",
            "HR Coordinator",
            "Assistance in recruitment and human resource processes",
            "Coordinator, Operations",
            "Supporting and improving business processes",
            "Business Owner",
            "Starting and Running a Business or Startup"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career prospects Practical experience, professional skills, internships, Swedish language skills where relevant and employer requirements.",
            "A degree does not guarantee that you will get a job or make a certain amount of money. Students are also advised to be aware of any applicable work and residence regulations before planning their careers in Sweden.",
            "**10\Documents Required to Study BBS in Sweden**",
            "For university admission and, where applicable, for the residence permit process thereafter, students should prepare the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 marksheet & certificate",
            "Class XII Marksheet and Certificate",
            "Valid passport",
            "Evidence of English language proficiency, if relevant",
            "Official translations of academic documents where appropriate",
            "Forms and supporting documents for the program",
            "Application Fee Received (if applicable)",
            "Payment of tuition fees and financial documents required for residence permit process"
          ]
        },
        {
          "t": "p",
          "items": [
            "Always check the latest university and Swedish immigration instructions for the intake you are applying for.",
            "**11\FAQ for Sweden BBS**",
            "**1\BBS is based in Sweden?**",
            "Some Swedish universities have similar bachelor programs under names like Business and Economics, International Business and International Management. The subject matter of these programs may be similar to that of a BBS, but the title of the degree may be different. Students are advised to check the official qualification before application.",
            "**2\Do Indian students get to study BBS in Sweden in English?**",
            "Yes. Several relevant business programs are taught in English at Swedish universities. But students have to check the language of instruction and meet the academic and English language requirements of the university they choose.",
            "**3\What are the BBS tuition fees in Sweden?**",
            "The example programs selected in this guide have a total tuition fee of around SEK 289,800 to SEK 360,000 which is around \u20b927.53 lakh to \u20b934.20 lakh at the illustrative exchange rate.",
            "**4\What is the cost of studying BBS in Sweden?**",
            "The total estimated budget of the selected three-year programs, including tuition and living expenses, is in the range of \u20b961.73 lakh to \u20b982.08 lakh. The real cost will depend on tuition fees, accommodation, lifestyle and exchange rates.",
            "**5\Can I do a master\u2019s degree after BBS?**",
            "Yes Students with a recognized bachelor\u2019s degree can apply for suitable master\u2019s programs, as long as they meet the necessary subject-credit, academic, and English language requirements.",
            "**6\What is the duration of a business bachelor\u2019s degree in Sweden?**",
            "Most equivalent undergraduate business programs in Sweden are 3 years long and typically have 180 ECTS credits.",
            "**7\Are there any scholarships for Indian students to study business in Sweden?**",
            "Some Swedish universities offer scholarships for eligible international fee-paying students. Scholarship availability, eligibility and amounts vary by institution and intake. Students should visit the official university scholarship pages for current opportunities."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\University of Gothenburg (G\u00f6teborgs universitet)",
      "location": "\University of Gothenburg (G\u00f6teborgs universitet), Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* **Programme:** Bachelor's Programme in Business and Economics * **Duration:** 3 years * **Language of Instruction:** English * **Total Tuition Fee:** SEK 291,000 * **Approximate Tuition Fee:** \u20b927.65 lakh  The programme covers areas such as business, economics, commercial law, and sustainability.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\Ume\u00e5 University",
      "location": "\Ume\u00e5 University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* **Programme:** International Business and Economics Programme * **Duration:** 3 years * **Language of Instruction:** English * **Total Tuition Fee:** SEK 289,800 * **Approximate Tuition Fee:** \u20b927.53 lakh  Students explore international business, economics, market analysis, and data visualisation.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "\J\u00f6nk\u00f6ping University",
      "location": "\J\u00f6nk\u00f6ping University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* **Programme:** Bachelor's Programme in International Management * **Duration:** 3 years * **Language of Instruction:** English * **Total Tuition Fee:** SEK 360,000 * **Approximate Tuition Fee:** \u20b934.20 lakh  The programme focuses on areas such as business administration, management, leadership, and international business.",
      "image": uniImg3, "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for BBS in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for BBS in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for BBS in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function BBSSweden() {
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
      seoPath="/study-abroad/sweden/bbs"
    />
  );
}
