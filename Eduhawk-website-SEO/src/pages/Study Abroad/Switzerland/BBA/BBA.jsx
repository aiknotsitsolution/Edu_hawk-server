import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/BBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/BBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/BBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/BBA/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/BBA/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/BBA/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/BBA/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/bba.json";

const page = {
  name: "Study BBA in Switzerland",
  country: "Switzerland",
  slug: "bba",
  title: "Study BBA in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study BBA in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study BBA in Switzerland, BBA in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland BBA Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  "introTitle": "BBA in Switzerland for Indian Students",
  "heroParas": [
    "Pursue an accredited Bachelor of Business Administration (BBA) in Switzerland, establishing foundational expertise across finance, marketing, organizational management, and international business. Indian students gain practical corporate exposure in Europe's premier destination for multinational headquarters, private banking, and international commerce."
  ],
  overview: [
    "**BBA in Switzerland for Indian Students** is an opportunity to acquire international business knowledge and lay the foundation for future managerial careers. Edu-Hawk Worldwide can help students to explore possible under-graduation studies. **BBA in Switzerland for Indian Students** also offers students an opportunity to understand international business practices and explore global education options."
],
  level: "Bachelor of Business Administration (BBA)",
  crumb: "BBA",
  stats: [
    {
        "label": "Degree Choices",
        "value": "Bachelor of Business Administration"
    },
    {
        "label": "Course Duration",
        "value": "3 Years (180 ECTS)"
    },
    {
        "label": "Top Institutions",
        "value": "Uni of St. Gallen, UZH & EU Business School"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,500 \u2013 CHF 5,000 / Year"
    }
],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "BBA Courses in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students can study undergraduate business and management programs such as:",
                        "Bachelor of Business Administration (B.B.A.)",
                        "Bachelor of Business Management",
                        "Bachelor of International Business Bachelor of Marketing Management",
                        "Bachelor\u2019s in Finance & AccountingBachelor\u2019s in EntrepreneurshipBachelor\u2019s in Hospitality ManagementBachelor\u2019s in Human Resource ManagementBachelor\u2019s in Business AnalyticsBachelor\u2019s in International Management",
                        "Fields of study, languages of instruction and program names vary by institution.",
                        "Students looking for **BBA Courses in Switzerland** will have to look at the various schools and compare the curriculum, specializations, duration, and the language of instruction. Students exploring **BBA in Switzerland for Indian Students** should compare course structures and specializations before selecting a program."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top Universities for BBA in Switzerland",
      lead: "Explore leading Swiss universities offering accredited BBA programs, modern facilities, and global career pathways.",
      unis: [
        {
          name: "University of St. Gallen !",
          location: "St. Gallen, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in BBA.",
          img: uniImg1
        },
        {
          name: "University of Zurich !",
          location: "Zurich, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in BBA.",
          img: uniImg2
        },
        {
          name: "Northwestern Switzerland EU Business School!",
          location: "Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in BBA.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Who can do BBA in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Most Indian students are required to have completed Class 12 or equivalent secondary qualifications to be eligible for an undergraduate business program.",
                        "Common eligibility criteria include:",
                        "Completed recognized secondary education.",
                        "Academic marks acceptable to the institution.",
                        "English language proficiency for English-taught programs.",
                        "German, French or Italian language skills for German, French or Italian taught programs.",
                        "Any other entrance test or assessment as the case may be.",
                        "Some Swiss public universities have specific requirements concerning school qualifications, entrance examinations or further university studies. Meeting the basic Class 12 requirement does not guaranty admission automatically.",
                        "Knowing about **BBA Eligibility in Switzerland** allows students to determine their academic qualifications and language proficiency before applying. Understanding **BBA Eligibility in Switzerland** helps students assess whether they meet the requirements of their preferred institutions."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Admission Criteria for BBA in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Typically, applicants need to submit academic transcripts, proof of secondary education, a valid passport, and the institution's application form.",
                        "Depending on the university, additional documents that may include:",
                        "Certificates of class 10 and class 12\\.",
                        "Academic Transcripts and Marksheets",
                        "Pr\u00fcfungsresultate in Englisch, falls n\u00f6tig.",
                        "Motivation letter or statement of purpose.",
                        "CV or resume when requested.",
                        "Letters of recommendation, if required.",
                        "Passport size photograph.",
                        "Further documents requested by the admissions office.",
                        "Students should review their program of interest\u2019s document checklist and deadlines before applying.",
                        "Students aspiring for **BBA Admission in Switzerland** need to prepare their documents as per the application guidelines of the chosen institution. Understanding the **BBA Admission in Switzerland** process can help students prepare their applications and meet important deadlines."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying BBA in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The cost of a BBA in Switzerland will depend on the school, the length of the program, and whether you choose a public university or private business school.",
                        "Indicative annual tuition fee:",
                        "Government universities: \u20b91 lakh-\u20b910 lakh.",
                        "Institutes of applied sciences: about Rs 2 lakh-Rs 12 lakh.",
                        "Private B-Schools: Rs. 8 lakh and above to Rs. 25 lakh and above.",
                        "These are general planning estimates and not confirmed fees for a specific BBA program. Some private institutions charge much more, and there may be extra registration or examination fees.",
                        "Students should also budget around \u20b91.2 lakh-\u20b92.5 lakh per month for living expenses, depending on accommodation, location, health insurance, transportation and lifestyle.",
                        "Depending on the institution and program, scholarships and financial aid may be available for eligible students. **BBA in Switzerland for Indian Students** applicants should plan their tuition fees and living expenses before beginning the admission process."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "BBA Admission Process in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The admission process generally consists of the following steps:",
                        "Select the right course: Compare BBA and other undergraduate business courses.",
                        "See if you qualify: Criteria for higher secondary education, academic scores and language proficiency.",
                        "Institutions to shortlist: Comparison of tuition fees, location, curriculum and accreditation.",
                        "Prepare documents: Collecting school certificates, transcripts, passport information and whatever else might be required.",
                        "Submit application. Apply online through the college official admission portal.",
                        "Complete other requirements: Go to an interview or assessment if you\u2019re asked to.",
                        "Get the admission decision: Read offer letter and comply with any conditions.",
                        "Finances: Prepare the financial evidence and tuition payments needed.",
                        "Apply for the correct student visa or residence permit: 2\\. Kindly follow the prevailing immigration requirements for Switzerland applicable to your case.",
                        "Pack your bags: Accommodation & insurance arrangements, travel & enrollment formalities.",
                        "Students should start the process well in advance to allow enough time for admission and visa documentation.",
                        "Edu-Hawk Worldwide can help the learners to comprehend the application steps and prepare for the journey for study abroad."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Degree Recognition & Careers",
      title: "BBA in Switzerland Career Opportunities",
      groups: [
        {
                "t": "p",
                "items": [
                        "A BBA opens up entry level positions in business and management for you. Graduates can seek opportunities in various sectors depending on their skills, internships, language proficiency and work authorization.",
                        "Career possibilities include",
                        "Business Development Executive Marketing Executive Sales Executive Human Resources Assistant Business Operations Coordinator Junior Business Analyst Finance or Accounts Assistant Customer Relationship Executive Project Coordinator Entrepreneur/Business Owner",
                        "Graduates may also progress to a master\u2019s degree, an MSc in Management, an MBA following relevant experience or another specialist postgraduate qualification."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "9. Salary & Job Opportunities After BBA in Switzerland"
                ]
        },
        {
                "t": "p",
                "items": [
                        "Salary level depends on job role, employer, city, industry, experience and language skills.",
                        "Broad illustrative gross annual salary ranges for business-related roles, for preliminary planning purposes, may include:",
                        "Entry level: \u20b940 lakh \u2013 \u20b965 lakh.",
                        "\u20b955 lakh to \u20b990 lakh Professionals with relevant experience.",
                        "Senior specialists or managers: \u20b980 lakh-\u20b91.3 crore or more.",
                        "These numbers are estimated figures only and are not confirmed salary averages or guarantyd results for BBA graduates. Salary will vary by location, starting salary. Consider all the taxes, cost of living in Switzerland, competition for jobs, eligibility to work.",
                        "International graduates must satisfy the relevant Swiss employment and immigration conditions. \\# 10\\. A BBA degree doesn\u2019t guaranty you a job or a work permit.",
                        "Documents Needed to Study BBA in Switzerland",
                        "Documents often requested include:",
                        "Valid passport .",
                        "10th class certificate and mark sheet.",
                        "Class 12 certificate and marksheet.",
                        "Academic Records.",
                        "Results of English language proficiency (if applicable).",
                        "Statement of purpose or letter of motivation, where applicable.",
                        "CV or r\u00e9sum\u00e9 if necessary.",
                        "Letters of recommendation (if applicable).",
                        "Passport Photos.",
                        "Visa financial papers.",
                        "Additional documents required by the university.",
                        "Students should verify if they require certified translations, legalized documents, or any other educational assessments.",
                        "Edu-Hawk Worldwide can assist learners in comprehending the document requirements and prepare their university applications.",
                        "FAQs About BBA in Switzerland",
                        "**Q1. Is it possible for Indian students to pursue BBA in Switzerland after Class 12?**",
                        "Yes. Indian students can apply for eligible undergraduate business programs after Class 12 as long as they meet the academic, language and other admission requirements of the institution.",
                        "**Q2. What is BBA in Switzerland fees in Indian Rupees?** Tuition fees differ from institution to institution. Public universities might have comparatively lower tuition fees, but private business schools can be substantially higher. And living expenses need to be budgeted separately.",
                        "**Q3. Do I need IELTS for BBA in Switzerland?**",
                        "Not necessarily. The requirements will vary by institution, teaching language, and accepted exemptions. English-taught programs may require IELTS, TOEFL or other accepted form of English proficiency evidence.",
                        "Q4. **Can I work in Switzerland after completing my BBA?**",
                        "Maybe. The job possibilities depend on your nationality, qualification, immigration status and the relevant Swiss work permit regulations. Having a degree does not automatically mean you can work.",
                        "Q5. **How can Edu-Hawk Worldwide help me study BBA in Switzerland?**",
                        "Edu-Hawk Worldwide can help students shortlist appropriate programs, understand eligibility criteria, prepare admission documents, compare study costs and navigate the application process. Visit [www\\.eduhawk.in](http://www.eduhawk.in) for international education opportunities."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Is IELTS or TOEFL mandatory for studying BBA in Switzerland?",
        "a": "Requirements vary by institution and program level. English-taught programs generally require IELTS (6.5+) or TOEFL (90+), while German/French programs require proof of proficiency at B2/C1 levels."
    },
    {
        "q": "Can Indian students work part-time while studying BBA in Switzerland?",
        "a": "Yes, international students are permitted to work up to 15 hours per week during academic semesters and full-time during official vacation periods after completing 6 months of study in Switzerland."
    },
    {
        "q": "What is the average tuition fee for BBA in Swiss public universities?",
        "a": "Public universities in Switzerland offer highly subsidized tuition, typically ranging from CHF 1,000 to CHF 4,000 per year, making it one of the most cost-effective study destinations in Europe."
    },
    {
        "q": "Are degrees from Swiss universities recognized globally and in India?",
        "a": "Yes, degrees awarded by Swiss cantonal and federal universities are accredited by the Swiss government and recognized globally, including by the Association of Indian Universities (AIU) and international employers."
    }
]
};

export default function BBASwitzerland() {
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
    />
  );
}
