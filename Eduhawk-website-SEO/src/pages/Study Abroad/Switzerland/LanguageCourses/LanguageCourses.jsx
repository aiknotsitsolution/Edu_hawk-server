import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/LanguageCourses/cta_bg.webp";

// University images
import uniImg2 from "../../../../Images/Abroad/Switzerland/LanguageCourses/image1.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/LanguageCourses/image2.png";
import uniImg4 from "../../../../Images/Abroad/Switzerland/LanguageCourses/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/language-courses.json";

const page = {
  name: "Language Courses in Switzerland",
  country: "Switzerland",
  slug: "language-courses",
  title: "Language Courses in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Language Courses in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Language Courses in Switzerland, Language Courses in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Language Courses Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Switzerland Language Course \u2013 Complete Guide for Indian Students",
  heroParas: [
    "1. Why study language courses in Switzerland?"
],
  overview: [
    "**Switzerland Language Courses for Indian Students** offer an opportunity to learn a new language in a multi-lingual and multi-cultural environment. Switzerland is a nice place for students who want to learn a new language in a multi-lingual and multi-cultural environment. Switzerland has German, French, Italian and Romansh as national languages, and students can learn communication skills and experience Swiss culture and international education.",
    "**Languages in Switzerland** and boost your communication skills with real-life exposure to different languages and cultures.",
    "Main pros:- Learn German, French, Italian or English in the appropriate language programs.",
    "* Practice speaking in real-life situations.  \n* Search language courses for academic, career, and personal development.  \n* Study for entry into university or further study.  \n* Enhance employment opportunities in international business, tourism, hospitality and customer service.  \n* Get a taste of Swiss culture and interact with people from various backgrounds.",
    "**Switzerland Language Courses for Indian Students** can help learners develop language skills for academic, professional and personal goals. **Edu-Hawk Worldwide** helps students explore international education options and understand the general application process."
],
  level: "German, French, Italian & English Language Programs",
  crumb: "Language Courses",
  stats: [
    {
        "label": "Program Types",
        "value": "Intensive, Academic & Seasonal"
    },
    {
        "label": "Course Duration",
        "value": "2 Weeks to 1 Academic Year"
    },
    {
        "label": "Top Institutions",
        "value": "Uni of Geneva, Lausanne & UZH Centers"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 500 \u2013 CHF 2,500 / Course"
    }
],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "Bachelor\u2019s, Master\u2019s and Short-Term Language Courses in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Language Courses in Switzerland** Short-term, intensive and academic language learning for students with different goals.",
                        "**Short Term Language Courses These programs aim to develop speaking, listening, reading and writing skills.**"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Duration: weeks to months.",
                        "Languages: German, French, Italian and English depending on the provider.",
                        "Who can join: Typically beginners and learners of various levels."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Suitable for: Students, professionals, travelers and language enthusiasts.",
                        "**Intensive language classes**",
                        "Intensive programs have frequent lessons and structured practice to help learners progress faster."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Duration: Varies by course but generally 2-12 weeks.",
                        "Focus: Speaking, grammar, pronunciation and understanding.",
                        "Suitable for: Students who are preparing for further education or professional communication."
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Preparing for Academic Language**",
                        "These courses help students to enhance the language skills needed for university studies."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Duration is determined by the institution and the level of proficiency."
                ]
        },
        {
                "t": "p",
                "items": [
                        "\\-Focus: Academic writing, presentations, reading, vocabulary specific to the subject."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Ideal for: Students who want to study a program taught in German, French or Italian."
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Bachelors and Masters Options**",
                        "Standalone language courses don\u2019t usually confer bachelor\u2019s or master\u2019s degrees. Students wishing to obtain a degree can study language studies, linguistics, translation or related academic programs at Swiss universities. Admission requirements and length of study vary according to the specific degree.",
                        "Students should compare course duration, language levels and teaching methods before selecting **Switzerland Language Courses for Indian Students**. **Edu-Hawk Worldwide** can help applicants understand available study options and prepare for their education journey."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top Language Courses in Switzerland",
      lead: "Explore leading Swiss universities offering accredited Language Courses programs, modern facilities, and global career pathways.",
      unis: [
        {
          name: "Language Schools in Switzerland",
          location: "Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Language Courses.",
          img: null
        },
        {
          name: "University of Geneva",
          location: "Geneva, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Language Courses.",
          img: uniImg2
        },
        {
          name: "University of Lausanne",
          location: "Lausanne, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Language Courses.",
          img: uniImg3
        },
        {
          name: "University of Zurich",
          location: "Zurich, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Language Courses.",
          img: uniImg4
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Conditions for studying language courses in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Eligibility varies according to course and provider.",
                        "General Requirements .Valid passport of international student ."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Completed application or registration.",
                        "Basic education qualifications, if required.",
                        "Prior knowledge of language for intermediate or advanced courses.",
                        "Evidence of funds to cover tuition and living expenses.",
                        "Valid visa or residence permit for the duration of the intended studies."
                ]
        },
        {
                "t": "p",
                "items": [
                        "The beginner courses usually don't require you to know the language beforehand. Academic programs and advanced courses may be subject to a placement test or a language certificate.",
                        "**Language Eligibility in Switzerland** depends on the selected course, provider, language level and duration of study. Applicants should review the entry conditions before submitting their applications. **Edu-Hawk Worldwide** can help students understand general eligibility requirements."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for Language Class in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Applicants may be required to supply:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Filled-out application form.",
                        "Passport valid.",
                        "Recent photo if requested.",
                        "Previous academic certificates (if applicable).",
                        "Language proficiency certificate for advanced courses, where applicable.",
                        "Placement test results (if applicable).",
                        "Confirmation of payment of course fees.",
                        "Lodging if requested.",
                        "Financial documents for visa purpose (if needed)."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Students should check that the provider will accept international students and that the course is suitable for the visa they intend to apply for.",
                        "**Language Admission in Switzerland** may involve submitting an application, academic documents, language certificates and payment confirmation, depending on the provider. **Language Admission in Switzerland** requirements should be checked before applying, as each institution may follow a different process. **Edu-Hawk Worldwide** can guide students in understanding the general application steps."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Language Courses Cost in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The following are indicative estimates in Indian Rupees and are not confirmed prices from any one supplier.",
                        "**Language Course Fees in Switzerland** vary depending on the type of course, duration, intensity and provider.",
                        "**Course Fees \\| Course type \\| Estimated fee \\| \\|---\\|---\\| \\| Short-term course (2\u20134 weeks) \\| \u20b930,000\u2013\u20b91,20,000 \\| \\| Intensive course (1\u20133 months) \\| \u20b980,000\u2013\u20b93,00,000 \\| \\| Longer language program (6 months) \\| \u20b92 lakh\u2013\u20b96 lakh or more \\| \\| Private lessons \\| Varies by provider and teaching hours \\|**",
                        "**Monthly Living Expenses \\| Expense \\| Approx. Monthly Cost \\| \\|---\\|---\\| \\| Accommodation \\| \u20b960,000\u2013\u20b91,30,000 \\| \\| Food \\| \u20b925,000\u2013\u20b945,000 \\| \\| Transport \\| \u20b95,000\u2013\u20b912,000 \\| \\| Health insurance \\| \u20b915,000\u2013\u20b935,000 \\| \\| Personal expenses \\| \u20b910,000\u2013\u20b925,000 \\|**",
                        "Approximate total budget: A short course can be anywhere between \u20b91 lakh-\u20b94 lakh or more, excluding or including living expenses depending on the package. Longer stays can demand considerably more.",
                        "Actual cost will vary depending on course length, city, accommodation, exchange rate and provider. Be sure to verify the financial requirements (tuition, deposits, insurance, visa) before making your reservation.",
                        "Students should compare **Language Course Fees in Switzerland** with the course duration and facilities included in the package before making a decision."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "7. Admission Procedure for Language Courses in Switzerland"
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Language Courses in Switzerland for Indian Students** usually consist of choosing a provider, applying and verifying the relevant immigration rules."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "1. Select your target language.",
                        "2. Choose a course and check its duration, level and teaching method.",
                        "3. Check eligibility and availability of international students.",
                        "4. Take any placement test that is required.",
                        "5. Provide the application and supporting documents.",
                        "6. Pay the course fee or deposit.",
                        "7. Get the confirmation of enrollment.",
                        "8. Check if you need a visa or residence permit depending on your nationality and the length of your stay.",
                        "9. Arrange travel, insurance and accommodation where necessary."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Don't book non-refundable travel until you have checked the relevant immigration requirements.",
                        "**Switzerland Language Courses for Indian Students** require applicants to check the provider's enrollment process and applicable visa conditions carefully. **Edu-Hawk Worldwide** can help students understand the general admission and application process."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Degree Recognition & Careers",
      title: "Career Prospects After Studying Languages in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Language courses improve communication skills and continued education or career development. A short language certificate alone does not guaranty employment or qualification for a profession.",
                        "Language skills can be useful in the following areas:- Hotel and tourism business."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Customer support.",
                        "International trade.",
                        "Translation and interpreting with appropriate proficiency and qualifications.",
                        "Administrative assistant.- Teaching of language and education, subject to applicable requirements.",
                        "Foreign student services.- Communication and sales in different languages."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Depending on region and employer, German and French can be especially useful. Italian is helpful in areas Italian is spoken. English is helpful in many international contexts, but it does not replace the need for local language skills in each and every role."
                ]
        }
]
    },
    {
      slot: "salary",
      eyebrow: "Salaries & Opportunities",
      title: "Salary and Job Prospects After Language Courses in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Language skills can help you get a job, but pay depends on the job itself, your qualifications, experience, language level and work authorization.",
                        "A language course alone does not entitle a person to a certain salary or a job in Switzerland. For salary planning, look at existing job ads for the job you want to get.",
                        "Factors that affect job opportunities:- Level of language proficiency and language certificates recognized."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Other academic or professional credentials.",
                        "Relevant work experience.",
                        "Company & Place.",
                        "Right to work in Switzerland.- Demand for the language and the occupation in question."
                ]
        },
        {
                "t": "p",
                "items": [
                        "International students should check the conditions of the Swiss work permit before they assume that they can stay and work just because they have finished a language course."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Documents for Language Courses in Switzerland",
      groups: [
        {
                "t": "ul",
                "items": [
                        "Passport (current).",
                        "Completed the course application.",
                        "Recent photo, if applicable.",
                        "Academic certificates (if necessary).",
                        "Any previous certificates in language.",
                        "Placement test results, if applicable.",
                        "Proof of acceptance/registration in a course.",
                        "Evidence of tuition payment.",
                        "Evidence of finances (if required).- Relevant accommodation and insurance papers.",
                        "Visa or residence permit documents, if required by the Swiss authorities."
                ]
        },
        {
                "t": "p",
                "items": [
                        "The final checklist will vary depending on the provider, length of course and immigration requirements."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "How long does a language course in Switzerland last?",
        "a": "Courses can be a few weeks or several months. Language studies at degree level are organized as a separate academic discipline. 3\\. How much do language courses cost in Switzerland? Short courses may cost around \u20b930,000-\u20b91,20,000 for 2-4 weeks, excluding living expenses. Fees vary by provider, intensity and duration."
    },
    {
        "q": "Do I need IELTS to study a language course in Switzerland?\\*\\*",
        "a": "Not typically for a beginner language course. However, some academic programs may require proof of proficiency in the language of instruction. \\*\\*5. Can I work in Switzerland after doing a language course? No, not automatically. Employment depends on work authorization, qualifications, employer requirements and the relevant immigration rules in Switzerland. Switzerland Language Courses for Indian Students offer opportunities to improve language skills and experience a multilingual learning environment. Edu-Hawk Worldwide can help students explore international study options and understand the steps involved in planning their education."
    }
]
};

export default function LanguageCoursesSwitzerland() {
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
