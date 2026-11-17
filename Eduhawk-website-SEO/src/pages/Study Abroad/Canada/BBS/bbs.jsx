import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Canada/BBS/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Canada/BBS/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Canada/BBS/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Canada/BBS/cta_bg.webp";
import TorontoMetropolitanUniversityImg from "../../../../Images/Abroad/Canada/BBS/Toronto_Metropolitan_University.webp";
import CarletonUniversityImg from "../../../../Images/Abroad/Canada/BBS/Carleton_University.webp";
import OttawaUniversityImg from "../../../../Images/Abroad/Canada/BBS/Ottawa_University.webp";
import ManitobaUniversityImg from "../../../../Images/Abroad/Canada/BBS/Manitoba_University.webp";
import cmsData from "../../../../data/study_abroad/canada/bbs.json";

const page = {
  "name": "BBS in Canada",
  "country": "Canada",
  "slug": "bbs",
  "title": "BBS in Canada for Indian Students | Edu-Hawk Worldwide",
  "description": "Study BBS in Canada: Top universities, English-taught programs, tuition fees (CAD $18,000–$45,000/yr), scholarships, eligibility criteria, and post-graduation work permit (PGWP) opportunities.",
  "keywords": "Study BBS in Canada, BBS in Canada for Indian Students, Best Universities in Canada, Cost of Studying in Canada",
  "introTitle": "BBS for Indian Students in Canada",
  "heroParas": [
    "In educational institutions that provide this degree title, an undergraduate degree in business fundamentals, management, accounting, finance, marketing, economics, and organizational operations is called a Bachelor of Business Studies (BBS)."
  ],
  "overview": [
    "In educational institutions that provide this degree title, an undergraduate degree in business fundamentals, management, accounting, finance, marketing, economics, and organizational operations is called a Bachelor of Business Studies (BBS).",
    "The Edu Hawk worldwide consultancy helps students understand university entrance requirements, investigate **international study options**, and prepare for the overseas education journey.",
    "1. A thorough understanding of business"
  ],
  "level": "Undergraduate",
  "crumb": "Business & Management",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Toronto Metropolitan University, Carleton University, Ottawa University"
    },
    {
      "label": "Medium of Study",
      "value": "English & French Taught"
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Canada",
      "title": "Why Come to Canada to Study BBS?",
      "groups": [
        {
          "t": "p",
          "items": [
            "In educational institutions that provide this degree title, an undergraduate degree in business fundamentals, management, accounting, finance, marketing, economics, and organizational operations is called a Bachelor of Business Studies (BBS).",
            "The Edu Hawk worldwide consultancy helps students understand university entrance requirements, investigate **international study options**, and prepare for the overseas education journey.",
            "Key Advantages of Studying Business in Canada",
            "1. A thorough understanding of business",
            "Students gain knowledge of how companies run, handle resources, provide customer service, and make strategic choices.",
            "2. The Basis of Management",
            "Organizational structures, leadership concepts, planning, collaboration, and decision-making are all introduced to students in business studies.",
            "3. Analytical and Financial Skills",
            "Accounting, economics, finance, and statistics are among the subjects that aid students in comprehending financial data and evaluating the success of businesses.",
            "4. Communication and Marketing Skills",
            "Students gain knowledge of sales, market research, business communication, customer behavior, and promotional tactics.",
            "5. Practical Education",
            "Students may take part in case studies, group projects, presentations, simulations, and applicable tasks, depending on the curriculum.",
            "6. A Global Viewpoint",
            "Students can be exposed to various business methods and global viewpoints by studying in Canada's multicultural academic environment.",
            "7. Getting Ready for Work",
            "A business undergraduate degree in Canada can serve as a starting point for entry-level positions in finance support, operations, sales, marketing, administration, and related fields.",
            "8. Opportunities for Additional Study",
            "Depending on entrance requirements, graduates may pursue postgraduate studies in management, finance, marketing, business analytics, or other subjects.",
            "9. Development of Entrepreneurship",
            "Students who study business can learn how to assess company concepts, investigate markets, create budgets, and formulate business plans."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Canada's BBS Programs and Specializations",
      "groups": [
        {
          "t": "p",
          "items": [
            "The degree and institution determine the precise curriculum. Students who are thinking about enrolling in a BBS should contrast its coursework with that of Canadian undergraduate business programs",
            "Fundamental Business Topics"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Overview of Business",
            "Fundamentals of Management",
            "Accounting for finances",
            "Accounting for Managers",
            "Economics of Business",
            "Microeconomics",
            "The macroeconomic",
            "The study of business mathematics",
            "Business Statistics",
            "Management of Marketing",
            "Organizational Conduct",
            "Management of Human Resources",
            "Communication in Business",
            "Business Finance",
            "Business Law",
            "Management of Operations",
            "Entrepreneurship",
            "Information Systems for Businesses",
            "Methods of Business Research",
            "The Management of Strategy"
          ]
        },
        {
          "t": "p",
          "items": [
            "Business Study Subjects"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Accounting",
            "Promotion",
            "Management of Human Resources",
            "Global Commerce",
            "Management of Businesses",
            "Entrepreneurship",
            "Analytics for Business",
            "Operations and Supply Chain",
            "Economics"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Explore BBS-Equivalent Programs at Canadian Universities",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Toronto Metropolitan University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Toronto Metropolitan University",
              img: TorontoMetropolitanUniversityImg
            },
            {
              "name": "Carleton University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in BBS.",
              img: CarletonUniversityImg
            },
            {
              "name": "Ottawa University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in BBS.",
              img: OttawaUniversityImg
            },
            {
              "name": "Manitoba University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in BBS.",
              img: ManitobaUniversityImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Qualifications for Studying BBS or a Comparable Business Degree in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "Educational Background",
            "Indian students often have to finish Class 12 or an equivalent secondary school qualification that is accepted by the school.",
            "Subject Prerequisites",
            "While some undergraduate business programs in Canada have various prerequisites, others require or recommend mathematics. Candidates should verify if the topics they took in Class 12 satisfy the requirements.",
            "Minimum Level of Academic Achievement",
            "Academic admission requirements are set by universities. Stronger academic performance may be necessary for competitive programs, and admission is not assured by fulfilling basic standards.",
            "Proficiency in English",
            "International applicants may be required to show that they are proficient in English using **IELTS Academic, TOEFL, PTE Academic** or another test that the school will accept.",
            "Extra Qualifications",
            "Depending on the organization, candidates can require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Particular prerequisites",
            "Additional responses to applications",
            "Scholarly references",
            "Information about school grades",
            "An extra evaluation or interview, if necessary"
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Canada's BBS Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Academic Writings",
            "Students might have to turn in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 grade report and certificate",
            "Class 12 grade report and certificate",
            "Official transcripts of education",
            "Predicted grades, if submitted prior to final results and approved by the school"
          ]
        },
        {
          "t": "p",
          "items": [
            "Documents in English",
            "TOEFL, PTE Academic, IELTS Academic, or another recognized score, if necessary",
            "Proof of an exemption, if applicable",
            "Documents for Applications"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A filled-out application form",
            "A valid passport number",
            "If necessary, a personal statement or further essays",
            "Academic references, upon request",
            "The receipt for the application fee"
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "The cost of Pursuing a BBS or Comparable Business Degree in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the university, degree, location, length of time, and type of tuition, the cost of studying business in Canada varies."
          ]
        },
        {
          "t": "table",
          "headers": [
            "International tuition per year",
            "CAD 20,000-55,000+"
          ],
          "rows": [
            [
              "Lodging",
              "CAD 800-2,000+ a month"
            ],
            [
              "Monthly food and personal expenses",
              "CAD 300-700+"
            ],
            [
              "Local transit",
              "CAD 80-180+ a month"
            ],
            [
              "Books and educational resources",
              "CAD 500-1,500+ annually"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Health insurance varies depending on the province and the institution.",
            "Additional Costs to Plan for"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The cost of applying to universities",
            "The cost of the English language exam",
            "Campus fees and student service",
            "Software and a laptop",
            "Books and educational resources",
            "Airfare",
            "Insurance for health",
            "Examine the costs associated with permits",
            "Deposits for lodging",
            "Emergency and personal costs"
          ]
        },
        {
          "t": "p",
          "items": [
            "Financial Support and Scholarships",
            "Students that qualify can look into:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Scholarships for admission",
            "Awards for academic merit",
            "Scholarships for international students",
            "Faculty-specific honors",
            "When available, need-based bursaries",
            "Outside scholarships"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Admission Procedure for Canadian BBS or Comparable Programs",
      "groups": [
        {
          "t": "p",
          "items": [
            "Step 1: Recognize Your Degree Options",
            "Verify if a Bachelor of Commerce, Bachelor of Business Administration, or Bachelor of Management fulfills your academic objectives or if you especially require a BBS.",
            "Step 2: Choose Your Favorite Topics",
            "Think about your interests in international business, accounting, finance, marketing, management, economics, and entrepreneurship.",
            "Step 3: Research Establishments",
            "Examine alternatives for practical learning, location, scholarship opportunities, academic prerequisites, program, and tuition.",
            "Step 4: Verify Your Eligibility",
            "Verify your Class 12 scores, the topics you need to take, your English language proficiency, and any other selection requirements.",
            "Step 5: Get the Application Ready",
            "Compile test results, certifications, passport information, academic transcripts, and additional application materials.",
            "Step 6: Send in Your Application",
            "Apply via the institution's designated application system or the official university portal.",
            "Step 7: Fulfill Any Further Requirements",
            "Before the deadline, turn in any additional essays, references, or other needed materials.",
            "Step 8 : Examine the offer letter",
            "Verify the precise degree title, admission requirements, deposit amounts, tuition costs, and scholarship information.",
            "Step 9: Examine Immigration Requirements",
            "Visit Immigration, Refugees and Citizenship Canada (IRCC) to view the most recent Canadian study permit requirements",
            "Step 10: Get Ready for Enrollment",
            "As directed by the institution, make travel, lodging, insurance, financial planning, and course registration arrangements."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Accreditation & Standards",
      "title": "Immigration, Accreditation, and Recognition Issues",
      "groups": [
        {
          "t": "p",
          "items": [
            "Verify the Precise Qualification",
            "The degree names BBS, BBA, BCom, and Bachelor of Management are not always interchangeable. They may have different degree programs, courses, and levels of recognition.",
            "Verify the precise name of the qualification and the organization giving it by visiting the official program site.",
            "Acknowledgment of Professionals",
            "Many general business roles may benefit from a business bachelor's degree. Additional training, tests, real-world experience, or license may be necessary for some professional occupations, such as accounting and other regulated fields.",
            "Transfer of Credit and Additional Research",
            "Verify the entry requirements of the receiving institution if you plan to use the degree for postgraduate admission in Canada or another nation. Recognition and credit transfer are not automatic."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Pay and career options in Canada Following BBS",
      "groups": [
        {
          "t": "p",
          "items": [
            "A business bachelor's degree in Canada can serve as a basis for entry-level positions in a variety of industries. The real qualification, specialization, abilities, experience, and company requirements all influence career prospects.",
            "Possible Career Paths"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Associate in Business Development",
            "A marketing assistant",
            "Coordinator of Sales",
            "Coordinator of Administration",
            "Assistant for Human Resources",
            "Coordinator of Recruitment",
            "Assistant for Operations",
            "A customer service agent",
            "A junior business analyst",
            "Assistant for Accounts",
            "Coordinator of Project Support",
            "An entrepreneur"
          ]
        },
        {
          "t": "p",
          "items": [
            "Additional training, appropriate experience, technical expertise, or professional certification may be necessary for certain positions.",
            "Career Prospects by Field of Study"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Accounting",
            "The financial sector",
            "Marketing",
            "Human Resources",
            "Administration",
            "International Commerce"
          ]
        },
        {
          "t": "p",
          "items": [
            "Sectors to explore"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Financial services and banking",
            "E-commerce and retail",
            "Technology",
            "The supply chain and logistics",
            "Manufacturing",
            "Professional services and consulting",
            "Tourism and hospitality",
            "Administration of healthcare",
            "Nonprofits and education"
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed for Canadian BBS Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Academic Writings",
            "Class 10 grade report and certificate",
            "Class 12 grade report and certificate",
            "Academic records",
            "Estimated grades, if approved by the school",
            "If necessary, certified translations",
            "Individual and Application Records",
            "A valid passport",
            "A filled-out application form",
            "Test results in English, if necessary",
            "If necessary, a personal statement or further essays",
            "When asked, academic references",
            "The receipt for the application fee",
            "Immigration Records, If Relevant",
            "A letter of acceptance",
            "Evidence of funds",
            "Examine the application materials for permits.",
            "Unless otherwise excepted, a provincial or territory attestation letter",
            "The IRCC has requested additional papers."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "FAQs",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "What is meant by BBS?",
              "a": "In several educational institutions, BBS stands for Bachelor of Business Studies. The institution and nation determine the precise degree structure and title."
            },
            {
              "q": "Does Canada have access to BBS?",
              "a": "In Canadian universities, BBS is not a common degree title. Students can verify the precise degree granted by researching similar undergraduate business degrees in Canada, such as BBA, BCom, or Bachelor of Management."
            },
            {
              "q": "After Class 12, are Indian students able to apply to Canadian undergraduate business programs?",
              "a": "Yes. Candidates who fulfill the academic, subject, and English language requirements of the institution are eligible to apply."
            },
            {
              "q": "What distinguishes BBA from BBS?",
              "a": "Both may involve management and business, however the degree title, curriculum, and structure vary depending on the school. Instead of assuming the degrees are the same, compare the actual course subjects and learning objectives."
            },
            {
              "q": "After earning a degree that is comparable to a BBS, may I pursue an MBA?",
              "a": "Yes, possibly. Admission to an MBA program is contingent upon the academic requirements of the school as well as any other prerequisites, such as test results, work experience, or other credentials."
            },
            {
              "q": "How can I study abroad with the assistance of Edu Hawk Worldwide Consultancy?",
              "a": "Students can use Edu Hawk Worldwide to plan their **study-abroad journey**, organize their application materials, research appropriate universities, and comprehend admission standards. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs. Study BBS in Canada for Indian Students Bachelor of Business Studies in Canada for International Students Best Universities for Undergraduate Business Studies in Canada BBS Equivalent Courses in Canada After Class 12 BBS Eligibility in Canada for Indian Students Business Degree Admission Requirements in Canada Undergraduate Business Courses Fees in Canada Business Scholarships in Canada for International Students Career Opportunities After Business Studies in Canada Business Graduate Jobs in Canada for International Students Canadian Study Permit Requirements for Undergraduate Business Students"
            }
          ]
        }
      ]
    }
  ]
};

export default function BBSCanada() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle || page.name,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: (cmsData?.overview && cmsData.overview.length > 0 && cmsData.overview[0] !== "")
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
    seo: {
      title: cmsData?.seo?.title || page.title,
      description: cmsData?.seo?.description || page.description,
      keywords: cmsData?.seo?.keywords || page.keywords,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/canada/bbs"
    />
  );
}
