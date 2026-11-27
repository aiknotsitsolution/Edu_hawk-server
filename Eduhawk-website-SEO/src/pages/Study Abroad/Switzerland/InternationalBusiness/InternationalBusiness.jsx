import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/InternationalBusiness/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/InternationalBusiness/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/InternationalBusiness/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/InternationalBusiness/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/InternationalBusiness/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/InternationalBusiness/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/InternationalBusiness/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/international-business.json";

const page = {
  name: "Study International Business in Switzerland",
  country: "Switzerland",
  slug: "international-business",
  title: "Study International Business in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study International Business in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study International Business in Switzerland, International Business in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland International Business Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  "introTitle": "International Business in Switzerland for Indian Students",
  "heroParas": [
    "Pursue an accredited degree in International Business in Switzerland, mastering global market expansion, multinational corporate strategy, cross-border supply chains, and foreign trade. International students acquire cross-cultural leadership skills in Europe's premier destination for multinational headquarters, private banking, and international commerce."
  ],
  overview: [
    "**International Business in Switzerland for Indian Students** will give you the knowledge of global business practices and international management skills. Edu-Hawk Worldwide can assist students in course selection and the application process. **International Business in Switzerland for Indian Students** also provides students with an opportunity to explore international academic options and develop skills for global business careers."
],
  level: "B.Sc. & M.Sc. in International Business",
  crumb: "International Business",
  stats: [
    {
        "label": "Degree Choices",
        "value": "B.Sc. & M.Sc. International Business"
    },
    {
        "label": "Course Duration",
        "value": "3 Years (UG) / 2 Years (PG)"
    },
    {
        "label": "Top Institutions",
        "value": "Uni of St. Gallen, Geneva & Lausanne"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,500 \u2013 CHF 4,500 / Year"
    }
],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Study International Business in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Switzerland is a magnet for students who want to study global trade, international management, finance and cross-border business operations. Students studying International Business in Switzerland are trained to gain skills in international finance, global marketing, business strategy, negotiation and intercultural communication. The country\u2019s international business environment exposes you to multinational companies, financial institutions, consulting firms and global supply chain. Students can opt for undergraduate or postgraduate programs based on their academic qualifications and career objectives.",
                        "**International Business in Switzerland for Indian Students** will give you the knowledge of global business practices and international management skills. Edu-Hawk Worldwide can assist students in course selection and the application process. **International Business in Switzerland for Indian Students** also provides students with an opportunity to explore international academic options and develop skills for global business careers."
                ]
        }
]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "International Business Studies in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students can choose from undergraduate and postgraduate courses such as:",
                        "International Business \\- Bachelor's Degree International Management \\- Bachelor's Degree International Business \\- BBA Master's Degree International Business \\- MSc Global Business Management \\- Master's Degree International Business \\- MBA International Management \\- Executive MBA International Marketing \\- Master's Degree Global Supply Chain Management \\- Master's Degree",
                        "The institution determines the name of the degree, the specialization and the study format.",
                        "Students interested in pursuing **International Business Courses in Switzerland** can compare undergraduate, postgraduate, MBA and executive level courses as per their career goals. Applicants should also compare **International Business Courses in Switzerland** by curriculum, specialization and learning format provided by each institution."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Universities in Switzerland for International Business",
      lead: "Studying International Business in Switzerland equips students with specialized analytical and strategic frameworks to navigate complex foreign trade policies, global currency dynamics, and cross-border commercial partnerships.",
      unis: [
        {
          name: "University of St. Gallen !",
          location: "St. Gallen, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in International Business.",
          img: uniImg1
        },
        {
          name: "University of Geneva !",
          location: "Geneva, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in International Business.",
          img: uniImg2
        },
        {
          name: "University of Lausanne !",
          location: "Lausanne, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in International Business.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Who can study International Business in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Eligibility is determined by degree level.",
                        "For Under Graduate Programs:",
                        "Passed 12th class or its equivalent exam.",
                        "Academic achievement according to the institution\u2019s requirements.",
                        "English, German, French or Italian, according to language of instruction.",
                        "Additional entrance examinations or evaluations, if necessary.",
                        "For Graduate Degree Programs:",
                        "A relevant bachelor\u2019s degree in business, management, economics or a comparable field is required, depending on the program.",
                        "Degree Certificates and Academic Records",
                        "English language requirement for courses taught in English",
                        "Work experience that is relevant to selected programs, particularly MBA and executive programs.",
                        "If applicable, additional testing, interviews, or prerequisite coursework.",
                        "The admission requirements are different for public universities, universities of applied sciences and private business schools.",
                        "**Eligibility for International Business in Switzerland** helps Indian aspirants to know the academic requirements, language proficiency and other criterions they need to fulfill for their desired courses. **International Business Eligibility in Switzerland** will assist the applicants in preparing for the requirements of their selected institution. Students should review **International Business Eligibility in Switzerland** before selecting their preferred program."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for International Business in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Applicants are usually required to submit their academic results, a valid passport and the application form of the institution.",
                        "Other documents may include:",
                        "Certificates of class 10 and 12 for bachelor applicants.",
                        "Bachelor\u2019s degree certificates and transcripts for master applicants.",
                        "CV or resume, if available.",
                        "Motivation letter or Statement of purpose",
                        "Test results in English language if any.",
                        "Reference letters (if applicable)",
                        "Certificates of professional experience for selected programs.",
                        "Results of entrance exam or interview, if applicable.",
                        "Students should check with the institution of their choice for application deadlines and documentation.",
                        "For **International Business Admission in Switzerland**, students need to prepare their academic documents and supporting records as per the application guidelines of the institution they have chosen. Having knowledge about the **International Business Admission Switzerland** requirements assists the applicants in organizing their documents prior to applying. Understanding **International Business Admission in Switzerland** requirements can also help students prepare their applications on time."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "What is the Cost of Studying International Business in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Tuition fees differ by institution, degree level, type of program and fee rules by nationality.",
                        "Indicative annual tuition fees are:",
                        "Public universities: Rs 1 lakh to Rs 10 lakh.",
                        "Universities of applied sciences: Approx. \u20b92 lakh \\- \u20b912 lakh.",
                        "Private business schools 8 lakh to Rs 30 lakh plus.",
                        "Executive and MBA programs: fees can be much higher and are charged for the entire program.",
                        "These are planning estimates only and are not confirmed fees for a specific course. Current tuition and other fees are available on the official university website.",
                        "The cost of living ranges from \u20b91.2 lakh-\u20b92.5 lakh a month depending on the city you live in, accommodation, insurance, transport and lifestyle.",
                        "Eligible applicants may be eligible for scholarships and financial aid, but are not guaranteed."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "7. International Business Admission Procedure Switzerland"
                ]
        },
        {
                "t": "p",
                "items": [
                        "The admission process mainly involves the following steps:",
                        "What level of study are you interested in? (graduate, master, MBA, executive program)",
                        "Institutions Shortlisted: Compare course contents, tuition fees, language and career possibilities.",
                        "Check Eligibility: Check academic qualifications, language requirements and professional experience criteria.",
                        "Get papers ready: Collect academic certificates, transcripts, passport detail & support documents.",
                        "Now Apply: [https\\://www](https://www). The candidate has to apply through the official admission portal of the institute.",
                        "Additional assessments (if any): Interview or test scores as required.",
                        "Get your admission decision: Read offer letter and follow any conditions.",
                        "Sort out your finances: Prepare your tuition and financial documentation for your application.",
                        "Apply for the appropriate visa / residence permit. \u2022 Follow the current Swiss requirements relevant to your situation.",
                        "Get set to GO: Take care of insurance, accommodation, travel and enrollment formalities.",
                        "Students must start this process early enough to allow for sufficient time for university admissions and visa paperwork.",
                        "**Edu-Hawk Worldwide** helps students narrow down programs, prepare applications and guide them through the admission process. **International Business in Switzerland for Indian Students** can help applicants choose the right course and prepare their university applications."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Degree Recognition & Careers",
      title: "Careers in International Business",
      groups: [
        {
                "t": "p",
                "items": [
                        "An International Business qualification can prepare graduates to work with international clients, global markets, business development and cross-border operations.",
                        "Some career options are:",
                        "International Business Development Manager International Marketing Manager International Sales Executive Business Analyst Export and Import Manager Supply Chain Analyst International Trade Consultant Management Consultant Global Operations Manager International Client Manager Market Research Analyst International Business Consultant",
                        "Your degree level, area of specialization, previous work experience, language proficiency and work permit will determine your career options. Graduates may also decide to continue their studies or set up their own international business."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "9. Switzerland Salary and Job Opportunities after International Business"
                ]
        },
        {
                "t": "p",
                "items": [
                        "Salaries depend on position, industry, employer, experience, language skills and location.",
                        "Indicative gross annual salary estimates for business related roles for initial planning purposes may include:",
                        "Entry level \u20b9 40 lakh \u2013 \u20b9 70 lakh annually.",
                        "Experienced professionals: Rs 65 lakh to Rs 1.2 crore.",
                        "Senior managers and directors: Rs. 1 crore to Rs. 2 crore and more.",
                        "These are ballpark figures, not confirmed salary averages for International Business graduates or guaranty results. Compensation will be higher or lower based on the role and experience. And of course Swiss taxes and cost of living enter into the mix as well.",
                        "International students and graduates must observe the Swiss employment and immigration rules that are applicable to them. Having a degree does not automatically get you a work permit or a job."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Study Documents for International Business in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Most requested documents are:",
                        "Passport is fine.",
                        "Marksheets of Class 10 and Class 12 for UG applicants.",
                        "Master applicants: Bachelor\u2019s degree certificate and transcripts.",
                        "Academic transcripts and mark sheets.",
                        "\u2022 English language proficiency scores (if required).",
                        "Resume or CV as appropriate.",
                        "Letter of purpose / letter of motivation",
                        "Letters of Recommendation (if required).",
                        "Certificates of professional experience for some selected programs.",
                        "Photographs (Passport Size).",
                        "Visa financial documents.",
                        "Other papers as needed by the institute.",
                        "Some universities may require certified translations, official documents or you may need to take additional education tests.",
                        "**Edu-Hawk Worldwide** helps learners comprehend the document requirements and to organize their application materials to their selected institutions."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "11. Frequently asked questions on international business in Switzerland"
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Q1. Is Switzerland good for Indian students to study International Business?**",
                        "Of course. Indian students are welcome to apply for eligible undergraduate and postgraduate programs, as long as they meet the institution\u2019s academic, language and other admission requirements.",
                        "**Q2. How much does it cost to study International Business in Switzerland?**",
                        "Costs differ between universities and levels of study. Students should develop their own budgets for tuition, housing, health insurance, transportation and personal expenses.",
                        "**Q3. Is IELTS needed for International Business in Switzerland?**",
                        "Not all the time. Requirements differ depending on the institution, the language in which it teaches and the exemptions it allows. English language programs may require IELTS, TOEFL or other accepted proof of proficiency in English.",
                        "Q4. **What type of jobs can I get with a degree in International Business?**",
                        "Graduates can embark on careers in international sales, business development, global marketing, supply chain management, market research, consulting and international operations depending on their qualifications and experience.",
                        "Q5. How can **Edu-Hawk Worldwide** help me in International Business study in Switzerland?",
                        "**Edu-Hawk Worldwide** can help students shortlist suitable programs, understand eligibility criteria, prepare applications, compare study costs and help navigate the admission process."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Is IELTS or TOEFL mandatory for studying International Business in Switzerland?",
        "a": "Requirements vary by institution and program level. English-taught programs generally require IELTS (6.5+) or TOEFL (90+), while German/French programs require proof of proficiency at B2/C1 levels."
    },
    {
        "q": "Can Indian students work part-time while studying International Business in Switzerland?",
        "a": "Yes, international students are permitted to work up to 15 hours per week during academic semesters and full-time during official vacation periods after completing 6 months of study in Switzerland."
    },
    {
        "q": "What is the average tuition fee for International Business in Swiss public universities?",
        "a": "Public universities in Switzerland offer highly subsidized tuition, typically ranging from CHF 1,000 to CHF 4,000 per year, making it one of the most cost-effective study destinations in Europe."
    },
    {
        "q": "Are degrees from Swiss universities recognized globally and in India?",
        "a": "Yes, degrees awarded by Swiss cantonal and federal universities are accredited by the Swiss government and recognized globally, including by the Association of Indian Universities (AIU) and international employers."
    }
]
};

export default function InternationalBusinessSwitzerland() {
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
    />
  );
}
