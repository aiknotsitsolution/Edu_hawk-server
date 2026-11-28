import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/LanguageCourses/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/language-courses.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/LanguageCourses/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/LanguageCourses/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/LanguageCourses/image3.webp";


const page = {
  "name": "Language Courses",
  "country": "Sweden",
  "slug": "language-courses",
  "title": "Language Courses in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Language Courses in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Language Courses in Sweden, Language Courses in Sweden for Indian Students, Best Universities in Sweden, Sweden Language Courses Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Language Courses in Sweden for Indian Students",
  "heroParas": [
    "Students can explore university-level Swedish studies, introductory courses, intensive language training and classes designed for everyday communication. Some university courses are available only to enrolled international students or researchers, while other programmes have residency or local eligibility requirements."
  ],
  "overview": [
    "For Indian students planning to study, work or live in Sweden, **Swedish Language Courses in Sweden** can be a useful way to develop communication skills and understand local culture.",
    "Through **Edu Hawk worldwide** study abroad guidance, students can explore language-learning options and understand the eligibility, fees and application requirements."
  ],
  "level": "Language Proficiency & Foundation",
  "crumb": "Language Courses",
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
      "title": "Why Should You Study Language Courses in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Learning Swedish can make everyday communication easier and help students participate more confidently in academic, social and professional environments.",
            "Key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Improve Everyday Communication:** Learn to communicate in shops, on public transport, at workplaces and in social situations.",
            "**Support Your Education:** Swedish language skills can be useful if you plan to apply for a degree taught in Swedish or participate more actively in university life.",
            "**Develop Career Opportunities:** Swedish proficiency can be valuable for customer-facing roles and employers who require local-language communication.",
            "**Understand Swedish Culture:** Language learning introduces students to local traditions, communication styles, society and customs.",
            "**Choose Your Learning Level:** Beginners and experienced learners can select suitable courses, sometimes after completing a placement test.",
            "**Prepare for Long-Term Living:** Improved Swedish skills can make daily activities, social interaction and integration easier."
          ]
        },
        {
          "t": "p",
          "items": [
            "Although English is widely used in many educational and professional environments in Sweden, learning Swedish can improve local communication and broaden employment opportunities."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Swedish Language Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The available language-learning options depend on your goals, current proficiency and eligibility. Courses may follow different teaching structures and levels."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of Course",
            "Typical Duration",
            "Main Focus"
          ],
          "rows": [
            [
              "Swedish for Beginners (A1)",
              "Several weeks to one semester",
              "Basic vocabulary, greetings, pronunciation and everyday conversations"
            ],
            [
              "Elementary Swedish (A2)",
              "Several weeks to one term",
              "Basic reading, writing, listening and daily communication"
            ],
            [
              "Intermediate Swedish (B1\u2013B2)",
              "Several months or longer",
              "Practical writing, workplace communication and longer conversations"
            ],
            [
              "Advanced Swedish",
              "Depends on the provider",
              "Fluent communication, academic language and advanced writing"
            ],
            [
              "Swedish for Academic Purposes",
              "Varies by university",
              "Academic vocabulary, university communication, discussions and presentations"
            ],
            [
              "Swedish for Business Purposes",
              "Varies by provider",
              "Workplace conversations, meetings, emails and business communication"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are general learning categories rather than guaranteed course titles at every institution. Universities and language providers may use their own course names, levels and credit systems instead of CEFR labels."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Swedish Language Schools and Universities in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Language Courses in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\Stockholm University",
          "location": "\Stockholm University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Stockholm University offers Swedish language courses for international students and researchers, with options ranging from beginner-level learning to more advanced communication.  These courses are generally intended for international students and researchers affiliated with the university. They may not be available to all external applicants.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\Ume\u00e5 University",
          "location": "\Ume\u00e5 University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Ume\u00e5 University provides Swedish language courses for international students who want to develop basic communication skills or prepare for further studies.  Course availability depends on the semester and student category. The university has stated that Swedish courses are not available for exchange students in Spring 2027, so applicants should check the latest course information.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "\Uppsala University",
          "location": "\Uppsala University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "International students at Uppsala University's Campus Gotland may find introductory and semester-based Swedish courses focused on everyday communication. Eligibility, course fees and availability depend on the particular course and the student's university status.  **Important:** University language courses may have restrictions based on student status, exchange agreements or university affiliation. Always confirm whether external applicants can register before applying.",
          "image": uniImg3, "img": uniImg3
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    }
  ],
  "universities": [
    {
      "name": "\Stockholm University",
      "location": "\Stockholm University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Stockholm University offers Swedish language courses for international students and researchers, with options ranging from beginner-level learning to more advanced communication.  These courses are generally intended for international students and researchers affiliated with the university. They may not be available to all external applicants.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\Ume\u00e5 University",
      "location": "\Ume\u00e5 University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Ume\u00e5 University provides Swedish language courses for international students who want to develop basic communication skills or prepare for further studies.  Course availability depends on the semester and student category. The university has stated that Swedish courses are not available for exchange students in Spring 2027, so applicants should check the latest course information.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "\Uppsala University",
      "location": "\Uppsala University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "International students at Uppsala University's Campus Gotland may find introductory and semester-based Swedish courses focused on everyday communication. Eligibility, course fees and availability depend on the particular course and the student's university status.  **Important:** University language courses may have restrictions based on student status, exchange agreements or university affiliation. Always confirm whether external applicants can register before applying.",
      "image": uniImg3, "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Language Courses in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Language Courses in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Language Courses in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function LanguageCoursesSweden() {
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
      seoPath="/study-abroad/sweden/language-courses"
    />
  );
}
