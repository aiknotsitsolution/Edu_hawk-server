import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Canada/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Canada/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Canada/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Canada/LanguageCourses/cta_bg.webp";
import UniversityOfCalgaryImg from "../../../../Images/Abroad/Canada/LanguageCourses/University_of_Calgary.webp";
import SimonFraserUniversityImg from "../../../../Images/Abroad/Canada/LanguageCourses/Simon_Fraser_University.webp";
import GeorgeBrownPolytechnicImg from "../../../../Images/Abroad/Canada/LanguageCourses/George_Brown_Polytechnic.webp";
import HumberPolytechnicImg from "../../../../Images/Abroad/Canada/LanguageCourses/Humber_Polytechnic.webp";
import cmsData from "../../../../data/study_abroad/canada/language_courses.json";

const page = {
  "name": "Language Courses in Canada",
  "country": "Canada",
  "slug": "language_courses",
  "title": "Language Courses in Canada for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Language Courses in Canada: Top universities, English-taught programs, tuition fees (CAD $18,000–$45,000/yr), scholarships, eligibility criteria, and post-graduation work permit (PGWP) opportunities.",
  "keywords": "Study Language Courses in Canada, Language Courses in Canada for Indian Students, Best Universities in Canada, Cost of Studying in Canada",
  "introTitle": "Study Language Courses in Canada",
  "heroParas": [
    "Students who wish to enhance their **English or French language skills** in an international learning setting frequently choose Canada. Students who take **language classes in Canada** can improve their communication skills, get ready for further education, and gain **language proficiency** for both career and personal development."
  ],
  "overview": [
    "Students who wish to enhance their **English or French language skills** in an international learning setting frequently choose Canada. Students who take **language classes in Canada** can improve their communication skills, get ready for further education, and gain **language proficiency** for both career and personal development.",
    "Programs for beginning, intermediate, and advanced students are available in Canadian language schools and educational establishments. Students can select General English courses, Academic English, IELTS and TOEFL preparatory courses, Business English, or French-language training, depending on the school.",
    "The following are the main advantages of taking language classes in Canada:"
  ],
  "level": "Certificate & Diploma",
  "crumb": "Languages & Pathways",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Certificate & Diploma"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Calgary, Simon Fraser University, George Brown Polytechnic"
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
      "title": "Why Study Language Classes in Canada?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students who wish to enhance their **English or French language skills** in an international learning setting frequently choose Canada. Students who take **language classes in Canada** can improve their communication skills, get ready for further education, and gain **language proficiency** for both career and personal development.",
            "Programs for beginning, intermediate, and advanced students are available in Canadian language schools and educational establishments. Students can select General English courses, Academic English, IELTS and TOEFL preparatory courses, Business English, or French-language training, depending on the school.",
            "The following are the main advantages of taking language classes in Canada:",
            "Develop your speaking, listening, reading, writing, grammar, and vocabulary abilities to improve your language proficiency.Prior to enrolling in qualified college or university programs, develop your academic language skills as part of your preparation for higher education.",
            "English Language Exam Preparation - Take appropriate courses to get ready for IELTS, TOEFL, and other English proficiency assessments.",
            "Learn in a Global Setting: Practice interacting with individuals from diverse linguistic and cultural backgrounds.",
            "Enhance professional writing, presentations, interviews, and workplace communication to develop career skills.",
            "Learn French and English in Canada: Depending on the curriculum and area, study the two official languages of Canada.",
            "Flexible Language Learning Options: Depending on your qualifications and goals, select either lengthier language programs or short-term courses.",
            "Edu Hawk Worldwide Consultancy helps students prepare for their foreign education adventure, understand university admission requirements, and explore international study possibilities. Students can make well-informed choices on their **language learning objectives and future educational opportunities** with the right preparation and direction."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Canadian Language Courses",
      "groups": [
        {
          "t": "p",
          "items": [
            "For varying competence levels and learning goals, **English and French language courses in Canada** may be offered by Canadian language schools, colleges, universities, and specialist training providers.",
            "A. Courses in English"
          ]
        },
        {
          "t": "ul",
          "items": [
            "English in general English-intensive",
            "The use of academic English",
            "English to Prepare for College",
            "English for Business",
            "English for Work-Related Purposes",
            "Preparing for the IELTS",
            "Preparing for the TOEFL",
            "Conversation Classes in English",
            "English Writing Proficiency"
          ]
        },
        {
          "t": "p",
          "items": [
            "B. Courses in French"
          ]
        },
        {
          "t": "ul",
          "items": [
            "\"General French\" Strong French",
            "For Academic Purposes, French",
            "Business French",
            "Conversation Classes in French",
            "Grammar and Writing in French",
            "Preparing for the French Exam"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Schools for Language Study",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "University of Calgary",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Language Courses.",
              img: UniversityOfCalgaryImg
            },
            {
              "name": "Simon Fraser University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Language Courses.",
              img: SimonFraserUniversityImg
            },
            {
              "name": "George Brown Polytechnic",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Language Courses.",
              img: GeorgeBrownPolytechnicImg
            },
            {
              "name": "Humber Polytechnic",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Language Courses.",
              img: HumberPolytechnicImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Qualifications for Language Study in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "The institution, course level, length, and the student's objectives all affect who is eligible to take language classes in Canada.",
            "Broad Eligibility",
            "Candidates might require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A passport that is current. - The school's minimum age requirement.",
            "Records of education, upon request.",
            "An initial placement test in either French or English."
          ]
        },
        {
          "t": "p",
          "items": [
            "English Language Requirements",
            "Generally, admission to general English classes does not require scores on the TOEFL or IELTS. After enrollment, the school may evaluate their proficiency.",
            "The following may be necessary for **Academic English or university pathway courses in Canada**:",
            "A placement exam. Results of prior English language exams. A minimal degree of competence. - Finishing a language study at a lower level",
            "Requirements for the French Language",
            "Complete beginners may be able to enrolll in French classes.",
            "Proof of prior language proficiency or a placement test may be required for advanced French, academic programs, or professional training."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Canadian Language Course Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Although criteria differ by provider, admission requirements for language courses in Canada are frequently less complicated than those for degree programs."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Typical Requirements for Admission",
            "The application has been filled out.",
            "A current passport. Personal and contact information.",
            "The preferred course, method of study, and beginning date.",
            "If necessary, take a language placement test.",
            "When asked, prior academic records. - Any applicable application fee. - A tuition deposit or payment in accordance with the policies of the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Extra Conditions for Academic Pathway Programs",
            "Additionally, certain **English language route programs** could need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic records.",
            "Proof of planned or conditional acceptance to a degree program.",
            "The results of prior English tests.",
            "Minimum age or educational requirements.",
            "Extra paperwork needed to advance into the receiving institution"
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "The cost of Taking Language Classes in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "The provider, location, intensity, and length of the course all affect the **cost of language classes in Canada**.",
            "The following are not official quotes, but rather general planning estimates in Canadian dollars."
          ]
        },
        {
          "t": "table",
          "headers": [
            "General Language Course Tuition",
            "CAD 250-600 per week"
          ],
          "rows": [
            [
              "Intensive Language Course Tuition",
              "CAD 350-800+ per week"
            ],
            [
              "Academic English or Pathway Course",
              "Varies significantly by institution"
            ],
            [
              "IELTS or TOEFL Preparation Course",
              "CAD 300-1,500+ per course"
            ],
            [
              "French Language Course",
              "CAD 250-700 per week"
            ],
            [
              "Accommodation",
              "CAD 800-1,800+ per month -CAD 250-500 a month for food and groceries"
            ]
          ]
        },
        {
          "t": "ul",
          "items": [
            "CAD 80-180 per month for local transportation",
            "Personal expenses and health insurance vary depending on the provider and location."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "The Canadian Language Course Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Step 1: Determine Your Objective",
            "Choose if you want to learn French, get ready for academic study, get ready for **IELTS or TOEFL**, or improve everyday conversation.",
            "Step 2: Choose a Language Provider",
            "Examine the course offerings, teaching schedules, costs, and locations of various colleges and institutions.",
            "Step 3: Verify Entry Requirements",
            "Verify any academic requirements, language proficiency, age restrictions, and placement evaluations.",
            "Step 4: Select the Length of the Course",
            "Choose a course duration based on your learning objectives, financial constraints, and immigration situation.",
            "Step 5: Send in Your Application",
            "Fill out the application form provided by the provider and provide the necessary paperwork.",
            "Step 6: Finish the Placement Exam",
            "If necessary, complete the evaluation so that the organization can suggest a suitable level of competency.",
            "Step 7 : Get Your Admission Confirmation.",
            "Examine the course schedule, cost, refund guidelines, and due dates.",
            "Step 8: Make Payment Arrangements",
            "Pay the tuition or needed deposit in accordance with the formal guidelines provided by the university.",
            "Step 9: Verify Immigration Requirements",
            "Find out if you are eligible for an exemption or require a **Canadian study permit**. Prior to making final trip arrangements, do this.",
            "Step 10: Get Ready for Your Studies",
            "Before lessons start, make arrangements for lodging, insurance, transportation, and educational materials.",
            "8. Opportunities for Employment and Education Following Language Studies",
            "Although career outcomes depend on a student's overall qualifications and experience, **language courses in Canada** can promote professional development and additional study.",
            "The Benefits of Language Proficiency"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Higher Education Preparation",
            "Develops Language Proficiency for Academic Study"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Customer Service",
            "Enhances Customer Communication"
          ],
          "rows": []
        },
        {
          "t": "ul",
          "items": [
            "Hospitality and Tourism",
            "Promotes guest service and communication",
            "Administrative Support",
            "Enhances writing and communication in the workplace",
            "Cross-cultural communication is facilitated by international business.",
            "Sales and Client Relation",
            "Builds Interpersonal and Presentation Skills",
            "Translation-related Pathways",
            "Offers a Basis for Additional Specialized Training",
            "Language Teaching Pathways",
            "May encourage additional research for suitable teaching credential",
            "Public-Facing Services",
            "Facilitates Interaction with Diverse Communities",
            "Additional Professional Development",
            "Supports Enrollment in Language-Requirement Programme"
          ]
        },
        {
          "t": "p",
          "items": [
            "Expectations for Salary",
            "A language course by itself does not determine one's eligibility for a certain profession or pay scale. The job, location, employer, work authorization, professional credentials and experience all affect earnings."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed",
      "groups": [
        {
          "t": "ul",
          "items": [
            "A current passport.",
            "The application has been filled out.",
            "Personal information and contact data. - Past academic records, upon request.",
            "Results of placement tests in either English or French, if necessary.",
            "Results from prior language tests, if relevant.",
            "In accordance with the policies of the school, proof of payment or deposit.",
            "When necessary, parental or guardian consent is needed for minors."
          ]
        },
        {
          "t": "p",
          "items": [
            "If a Study Permit Is Needed",
            "Depending on the applicant's situation and the most recent immigration regulations:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A valid passport and identity documents.",
            "The institution's acceptance letter.",
            "Evidence of money for travel, living expenses, and tuition.",
            "If necessary and not exempt, a provincial or territorial attestation letter.",
            "A study plan or letter of explanation, if applicable.",
            "Police certifications or a medical examination, if necessary. Immigration, Refugees and Citizenship Canada (IRCC) has requested additional papers."
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
              "q": "Is it possible for Indian students to take English language classes in Canada?",
              "a": "Yes, according to the admission standards of the provider and the relevant Canadian immigration laws, Indian students may apply to approved language schools and institutes."
            },
            {
              "q": "Can I enrolll in an English language course in Canada without taking the IELTS?",
              "a": "IELTS is typically not required for entrance to general English courses. The school may administer a placement test of its own. There can be further prerequisites for academic pathway programs."
            },
            {
              "q": "What is the duration of language lessons in Canada?",
              "a": "The duration of a course might range from a few weeks to many months or more. The provider, learning objectives, and skill level all affect how long it takes."
            },
            {
              "q": "What is the price of language classes in Canada?",
              "a": "Depending on the source and level of the course, general language instruction might cost anywhere from CAD 250 to CAD 800 or more per week. Additional costs include lodging and other living expenditures."
            },
            {
              "q": "After completing an English route course, may I enroll in a Canadian university?",
              "a": "If you meet the academic and other prerequisites for admission, the university may accept that pathway. Admission to a university is not always guaranteed by finishing a language course."
            },
            {
              "q": "How Can I Study Abroad with the Assistance of Edu Hawk Worldwide Consultancy?",
              "a": "Students can organize their **study-abroad experience in Canada** with the assistance of Edu Hawk Worldwide, which can also assist them in understanding admission requirements, organizing application materials, and exploring appropriate universities. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs."
            }
          ]
        }
      ]
    }
  ]
};

export default function LanguageCoursesCanada() {
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
      seoPath="/study-abroad/canada/language-courses"
    />
  );
}
