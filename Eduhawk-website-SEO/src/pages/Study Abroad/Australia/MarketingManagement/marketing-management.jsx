import cmsData from "../../../../data/study_abroad/australia/marketing_management.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/MarketingManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/MarketingManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Australia/MarketingManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/MarketingManagement/cta_bg.webp";

// University Campus Images
import melbImg from "../../../../Images/Abroad/Australia/MarketingManagement/Melbourne_University.webp";
import utsImg from "../../../../Images/Abroad/Australia/MarketingManagement/University_of_Technology_Sydney.webp";
import adelaideImg from "../../../../Images/Abroad/Australia/MarketingManagement/University_of_Adelaide.webp";
import uowImg from "../../../../Images/Abroad/Australia/MarketingManagement/University_of_Wollongong.webp";

const page = {
  name: "Marketing Management",
  country: "Australia",
  slug: "marketing-management",
  title: "Study Marketing Management in Australia for Indian Students | Edu-Hawk Worldwide",
  description: "Study Marketing Management in Australia for Indian students. Learn about top marketing schools (Melbourne, UTS, Adelaide, Wollongong), AMI accreditation, fees, and digital marketing careers.",
  keywords: "",
  introTitle: "Marketing Management in Australia",
  heroParas: [
    "Planning and overseeing initiatives that assist companies in understanding consumers, promoting goods, developing brands, and accomplishing corporate goals are the main goals of marketing management."
  ],
  overview: [
    "Q2. Is it possible for Indian students to study marketing management in Australia?",
    "Yes, subject to university admission restrictions, qualified Indian students may apply for undergraduate or graduate programs in marketing.",
    "Q3. How long does a course in marketing management last?",
    "Master's programs often take one to two years, whereas bachelor's degrees typically take three. The institution and certification determine the actual duration.",
    "Q4. Does marketing management require mathematics?",
    "Not every marketing program requires mathematics as a requirement. Requirements vary depending on the university and degree selected.",
    "Q5. Does admission involve taking the IELTS?",
    "In most cases, students must meet the English language requirements of the university. There may be other tests or exemptions available, but IELTS is one recognized one.",
    "Keywords -",
    "Study Marketing Management in Australia",
    "Marketing Management in Australia for Indian Students",
    "Study Bachelor of Marketing in Australia",
    "Study Master of Marketing in Australia",
    "Study Marketing Management After 12th in Australia",
    "Marketing in Australia After Graduation",
    "Marketing Management in Australia with Scholarships",
    "Marketing at Australian Universities",
    "Marketing Management in Australia - Fees and Admission Requirements"
  ],
  level: "Undergraduate & Postgraduate",
  crumb: "Business & Marketing",

  stats: [
    {
        "label": "Degree Options",
        "value": "Bachelor's & Master's Degrees"
    },
    {
        "label": "Course Duration",
        "value": "1.5 to 3 Years Full-Time"
    },
    {
        "label": "Top Business Schools",
        "value": "Melbourne, UTS, Adelaide, Wollongong"
    },
    {
        "label": "Accreditation",
        "value": "AACSB & Australian Marketing Institute (AMI)"
    }
],

  faqs: [],

  sections: [
    {
        "slot": "section-1",
        "eyebrow": "Details",
        "title": "Describe marketing management.",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Planning and overseeing initiatives that assist companies in understanding consumers, promoting goods, developing brands, and accomplishing corporate goals are the main goals of marketing management.",
                    "Q2. Is it possible for Indian students to study marketing management in Australia?",
                    "Yes, subject to university admission restrictions, qualified Indian students may apply for undergraduate or graduate programs in marketing.",
                    "Q3. How long does a course in marketing management last?",
                    "Master's programs often take one to two years, whereas bachelor's degrees typically take three. The institution and certification determine the actual duration.",
                    "Q4. Does marketing management require mathematics?",
                    "Not every marketing program requires mathematics as a requirement. Requirements vary depending on the university and degree selected.",
                    "Q5. Does admission involve taking the IELTS?",
                    "In most cases, students must meet the English language requirements of the university. There may be other tests or exemptions available, but IELTS is one recognized one.",
                    "Keywords -"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Study Marketing Management in Australia",
                    "Marketing Management in Australia for Indian Students",
                    "Study Bachelor of Marketing in Australia",
                    "Study Master of Marketing in Australia",
                    "Study Marketing Management After 12th in Australia",
                    "Marketing in Australia After Graduation",
                    "Marketing Management in Australia with Scholarships",
                    "Marketing at Australian Universities",
                    "Marketing Management in Australia - Fees and Admission Requirements"
                ]
            }
        ]
    },
    {
        "slot": "why",
        "eyebrow": "Why Australia",
        "title": "Why Study Marketing Management in Australia?",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Australia provides business programs including consumer insights, digital platforms, traditional marketing, and strategic brand development in a multicultural learning environment.",
                    "Principal Advantages"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Build a solid foundation in marketing concepts.",
                    "Find out how companies draw in and keep clients.",
                    "Recognize digital marketing platforms and advertising tactics",
                    "Develop your ability to solve problems creatively and analytically.",
                    "Examine consumer experience, market research, and branding.",
                    "Learn about global marketing viewpoints."
                ]
            },
            {
                "t": "p",
                "items": [
                    "The university, course design, real-world experience, and personal interests all influence the educational experience and job prospects.",
                    "Edu Hawk Worldwide Consultancy helps students prepare for their international education journey, understand university admission requirements, and investigate international study possibilities."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Courses in Marketing Management",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Bachelor's degree in Marketing",
                    "an undergraduate degree that covers consumer behavior, market research, advertising, branding, marketing strategy, and marketing principles.",
                    "Marketing-focused Bachelor of Business degree",
                    "a more comprehensive business degree that blends specialized marketing studies with fundamental business courses.",
                    "Marketing studies and a bachelor's degree in commerce",
                    "a degree with an emphasis on commerce that might integrate marketing with courses like business analytics, accounting, economics, or finance.",
                    "Master of Marketing",
                    "a postgraduate degree with a focus on digital marketing, market analysis, brand development, consumer insights, and marketing strategy.",
                    "Marketing Management Master's Program",
                    "a postgraduate course that might focus on customer management, marketing performance, strategic planning, and marketing leadership.",
                    "Master's Program in Digital Marketing",
                    "a specialized program with an emphasis on marketing technologies, digital campaigns, online customer interaction, and digital analytics.",
                    "Master of Business Administration with Electives in Marketing",
                    "an MBA program that would enable students to study management and marketing strategies in addition to more general business leadership courses.",
                    "Australian universities differ in the specific course titles and availability."
                ]
            }
        ]
    },
    {
        "slot": "specializations",
        "eyebrow": "Specializations",
        "title": "Specializations",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Majors, electives, and subject areas may be available to students in:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Online Advertising",
                    "Management of Brands",
                    "Strategy for Marketing",
                    "Promotion and Advertising",
                    "Consumer Conduct",
                    "Market Analysis and Perspectives",
                    "Marketing on Social Media",
                    "Marketing with Content",
                    "Optimization for Search Engines",
                    "Analytics for Marketing",
                    "Public Relations",
                    "Relationship management with customers",
                    "Management of Products",
                    "Global Promotion",
                    "Marketing in Retail",
                    "E-commerce Promotion",
                    "Communications for Integrated Marketing",
                    "Management of Sales"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Not every university offers each specialization as a stand-alone major."
                ]
            }
        ]
    },
    {
        "slot": "eligibility",
        "eyebrow": "Eligibility Criteria",
        "title": "Indian Students Eligibility",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The institution and degree level determine the requirements for admission.",
                    "Eligibility for Undergraduates",
                    "In general, applicants may require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "completing Class 12 successfully from an accredited Indian board",
                    "Academic performance that satisfies university criteria",
                    "If necessary, proof of English language proficiency in mathematics or other prerequisite subjects",
                    "A valid passport and other necessary paperwork"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Many undergraduate degrees in marketing may be available to students with backgrounds in commerce, science, or the humanities, depending on the institution's admissions requirements.",
                    "Postgraduate Qualifications",
                    "In general, applicants may require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "An accredited bachelor's degree or its equivalent",
                    "Academic performance that satisfies course requirements",
                    "Work experience that is relevant, if needed",
                    "Evidence of English language competency, when applicable",
                    "A resume, a statement of purpose, or any other required supporting documentation"
                ]
            },
            {
                "t": "p",
                "items": [
                    "While some postgraduate marketing programs may have particular academic requirements, others may accept graduates from a variety of academic fields."
                ]
            }
        ]
    },
    {
        "slot": "language",
        "eyebrow": "Language Requirements",
        "title": "Language Requirements in English",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Generally speaking, international students must fulfill the English language criteria of the university of their choice.",
                    "Tests that are frequently accepted include:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "TOEFL",
                    "iBT IELTS Academic",
                    "PTE Academic",
                    "Additional exams that the organization accepts"
                ]
            },
            {
                "t": "p",
                "items": [
                    "While not a must for all business programs, an IELTS Academic score of roughly 6.5 overall is a general planning reference. Higher scores or minimum results in specific components may be required for some courses.",
                    "For their particular course and intake, students should verify the current requirements."
                ]
            }
        ]
    },
    {
        "slot": "exams",
        "eyebrow": "Entrance Exams",
        "title": "Admission Tests",
        "groups": [
            {
                "t": "p",
                "items": [
                    "In Australia, a lot of marketing management programs don't have a separate entrance exam."
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Academic credentials, English language ability, and supporting documentation may be taken into consideration for admission.",
                    "Depending on the program and university, candidates might require:",
                    "Certificates and academic transcripts",
                    "Results of any necessary English language tests",
                    "A personal declaration or statement of purpose",
                    "Curriculum vitae or resume for postgraduate applications",
                    "Proof of relevant job experience, if relevant",
                    "Interview or further evaluation for particular programs"
                ]
            },
            {
                "t": "p",
                "items": [
                    "There may be further criteria for admission to some postgraduate management programs. Verify the requirements directly with the university."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Duration of Course",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The Duration of the course varies depending on the institution, study load, and qualification.",
                    "A bachelor's degree typically requires three years of full-time study, while certain programs require more time.",
                    "Master's degree: Depending on the course and prior credentials, it typically requires one to two years of full-time study.",
                    "Graduate certificate: Depending on the university, it is typically shorter than a full master's degree."
                ]
            }
        ]
    },
    {
        "slot": "fees",
        "eyebrow": "Tuition & Living Costs",
        "title": "Living expenses and tuition",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The university, course level, length of time, and city all affect how much it costs to study marketing management in Australia.",
                    "Principal costs consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "The cost of tuition",
                    "Lodging and utilities",
                    "Food and groceries",
                    "Public transportation",
                    "Health Coverage for International Students",
                    "Books and study guides",
                    "The cost of applying for a visa",
                    "Emergency and personal costs"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Tuition costs can vary greatly between colleges and are different for undergraduate and graduate programs. Verify the most recent foreign student pricing schedule for the chosen course.",
                    "Living expenses are influenced by lifestyle, transportation, and lodging options. When preparing a student visa application, create a budget for the entire course and check the current financial capacity standards set by the Australian government."
                ]
            }
        ]
    },
    {
        "slot": "scholarships",
        "eyebrow": "Scholarships",
        "title": "Indian Students Scholarships",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Australian institutions may give scholarships or tuition cost help to qualified Indian students.",
                    "Possible choices consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Merit grants for international students",
                    "Awards for academic excellence",
                    "Scholarships specific to faculty",
                    "Tuition cost reductions related to a course",
                    "Scholarships from outside sources for qualified pupils"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Universities vary in terms of scholarship availability, award value, eligibility, and renewal requirements. While some scholarships automatically evaluate qualified applicants, others require separate applications.",
                    "For their selected course and intake, students should review the official scholarship requirements and deadlines."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Career options for Following Graduation",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Career paths in brand development, advertising, digital marketing, market research, consumer engagement, and business growth can all be supported by a marketing management degree.",
                    "Possible occupations include:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Executive in Marketing",
                    "Expert in Digital Marketing",
                    "Coordinator of Brands",
                    "Coordinator of Marketing",
                    "Manager of Social Media",
                    "Executive in Content Marketing",
                    "Analyst for Market Research",
                    "Coordinator of Advertising",
                    "Expert in Search Engine Optimization",
                    "Executive in Customer Relationship Management",
                    "Officer of Marketing Communications",
                    "Coordinator of Product Marketing and Business Development",
                    "Account Executive and Marketing Analyst",
                    "Senior positions could call for more work experience, specialized knowledge, or proven leadership skills."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Sectors to Explore"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Media and advertising",
                    "Digital marketing firms",
                    "E-commerce and retail",
                    "Financial services and banking",
                    "Technology for information",
                    "Products for consumers",
                    "Medical care",
                    "Learning",
                    "Tourism and hospitality",
                    "Expert services",
                    "Production",
                    "Communications"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Individual skills, real-world experience, market conditions, and employer demands all influence employment outcomes. Migration or employment outcomes are not guaranteed by a qualification."
                ]
            }
        ]
    },
    {
        "slot": "admission",
        "eyebrow": "Step-by-Step Guide",
        "title": "Indian Students Admission Procedure",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Step 1: Establish Your Study Objectives",
                    "Choose between an undergraduate degree, a master's degree, or a specialized marketing certification.",
                    "Step 2: Courses on the Shortlist",
                    "Examine the course material, specializations, length, cost of tuition, and relevance to your career.",
                    "Step 3: Verify Your Eligibility",
                    "Examine prerequisites for academic admission, subject requirements, English language proficiency requirements, and, if relevant, work experience requirements.",
                    "Step 4: Get the paperwork ready",
                    "Gather academic credentials, transcripts, passport information, English test scores, and supporting documentation.",
                    "Step 5: Send in Your Application",
                    "Apply via an approved application method or the university's official website.",
                    "Step 6: Accept and Examine the Offer",
                    "Verify the requirements for enrollment, tuition costs, deadlines for payments, and admission conditions.",
                    "Step 7: Finish Enrollment",
                    "fulfill the terms of the offer and finish the necessary payment and acceptance procedures.",
                    "Step 8: If necessary, apply for a student visa",
                    "Prepare the necessary paperwork and adhere to the current Australian Government visa procedure.",
                    "Step 9: Get Ready to Leave",
                    "Make travel, lodging, health insurance, money, and other pre-departure arrangements."
                ]
            }
        ]
    },
    {
        "slot": "documents",
        "eyebrow": "Checklist",
        "title": "Documents Needed",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Depending on the school and course, candidates can require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "A valid passport",
                    "Certificates for admission to undergraduate programs in Classes 10 and 12",
                    "Certificate of bachelor's degree for entry to postgraduate programs",
                    "Transcripts of academic work",
                    "Results of any necessary English language tests",
                    "A personal declaration or statement of purpose",
                    "Curriculum vitae or resume, if appropriate",
                    "Employment documentation, if necessary",
                    "Financial records in order to obtain a visa",
                    "Verification of Enrollment, if necessary for a student visa",
                    "Evidence of overseas student health coverage",
                    "Additional records that the university or pertinent authorities have sought"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Institutions have different requirements. For the chosen program, adhere to the official application checklist."
                ]
            }
        ]
    },
    {
        "slot": "visa",
        "eyebrow": "Visa Requirements",
        "title": "Student Visa for Australia",
        "groups": [
            {
                "t": "p",
                "items": [
                    "In general, Indian students must meet the requirements for the Australian student visa (subclass 500) in order to enrolll in an authorized full-time course.",
                    "Requirements could consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Enrollment records",
                    "Proof that satisfies the Genuine Student criterion",
                    "Evidence of financial capacity",
                    "Evidence in English, if applicable",
                    "Health Coverage for International Students",
                    "Requirements for character and health",
                    "Identity records and corroborating information"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Documentation requirements, processing periods, and visa fees are subject to change. Before applying, students should visit the official website of the Australian Department of Home Affairs.",
                    "Admission to a university does not ensure that a visa will be granted."
                ]
            }
        ]
    },
    {
        "slot": "assistance",
        "eyebrow": "Consultancy Support",
        "title": "How Edu Hawk Can Assist",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Edu Hawk provides individualized course shortlisting and admission assistance to Indian students who are considering studying abroad.",
                    "Our assistance may consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Evaluating educational background and professional aspirations",
                    "Making a list of appropriate business and marketing initiatives",
                    "Comparing tuition costs, course lengths, and universities",
                    "Outlining the English language and academic requirements",
                    "Assisting students with the application materials",
                    "Assisting students in comprehending the terms of the offer and the admissions process",
                    "Giving general advice on pre-departure preparation and visa paperwork"
                ]
            },
            {
                "t": "p",
                "items": [
                    "We assist students in considering options that fit their long-term professional objectives, selected specialization, financial constraints, and educational background."
                ]
            }
        ]
    }
],

  universitiesEyebrow: "Institutions",
  universitiesTitle: "Top Universities in Australia to Explore",
  universitiesIntro: "Indian students can explore the following leading universities and institutions in Australia.",
  universities: [
    {
      name: "University of Melbourne",
      location: "Melbourne, Victoria",
      image: melbImg,
      desc: "Prestigious marketing education focusing on consumer insights, analytics, and strategy."
    },
    {
      name: "University of Technology Sydney",
      location: "Sydney, New South Wales",
      image: utsImg,
      desc: "Contemporary marketing management with digital media and technology integration."
    },
    {
      name: "University of Adelaide",
      location: "Adelaide, South Australia",
      image: adelaideImg,
      desc: "Group of Eight university offering research-driven marketing and brand management."
    },
    {
      name: "University of Wollongong",
      location: "Wollongong, New South Wales",
      image: uowImg,
      desc: "Applied marketing management with corporate case competitions and internships."
    }
  ]
};

export default function MarketingManagementAustralia() {
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
    />
  );
}