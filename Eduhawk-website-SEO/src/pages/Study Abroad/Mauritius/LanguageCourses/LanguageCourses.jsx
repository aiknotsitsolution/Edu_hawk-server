import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/LanguageCourses/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/LanguageCourses/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/LanguageCourses/image2.png";
import cmsData from "../../../../data/study_abroad/mauritius/language-courses.json";

const page = {
  "name": "Language Courses",
  "country": "Mauritius",
  "slug": "language-courses",
  "title": "Language Courses in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Language Courses in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Language Courses in Mauritius, Language Courses in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Language Courses Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Language Courses in Mauritius for Indian Students",
  "heroParas": [
    "**Language courses in Mauritius** are a good option for students, working professionals and international learners, who want to improve their communication skills for education, employment, travel or everyday life. Universities, cultural institutions and training providers are providing learners with the chance to learn English, French, Chinese and other languages. **Language courses in Mauritius** provide opportunities to learners with varying levels of proficiency and learning goals. These options also make **language learning in Mauritius** accessible to people with different academic and professional interests."
  ],
  "overview": [
    "French language training and certification opportunities have been established by Mauritius through the Institut fran\u00e7ais de Maurice. The Open University of Mauritius provides foundation courses in English and French. The Mahatma Gandhi Institute also teaches languages, including an introduction to Modern Chinese. Students exploring **language courses in Mauritius for international students** can compare these options according to their learning requirements."
  ],
  "level": "Language Proficiency & Foundation",
  "crumb": "Language Courses",
  "stats": [
    {
      "val": "MUR 150K-350K",
      "label": "Tuition / Year"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "Bilingual & English Degrees",
      "desc": "Study in English with recognized qualifications from national institutions and global UK/Australian branch campuses."
    },
    {
      "icon": "FaGraduationCap",
      "title": "Affordable Tuition & Living",
      "desc": "High quality tertiary education with tuition fees and living costs substantially lower than Western Europe."
    },
    {
      "icon": "FaFileAlt",
      "title": "Safe & Multicultural Island",
      "desc": "Consistently ranked as the safest and most politically stable nation in Africa with close cultural ties to India."
    },
    {
      "icon": "FaCheckCircle",
      "title": "Simplified Visa Process",
      "desc": "Streamlined student visa procedures arranged directly through recognized higher education institutions."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Mauritius",
      "title": "Why should one study language courses in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Enhance your ability to communicate. Develop your speaking, listening, reading and writing skills.",
            "Get ready for international education Develop language skills for university study or for applying to institutions overseas.",
            "Build confidence in the workplace: Improve professional communication in customer service, business, tourism and administration.",
            "Get set for language certifications Search for DELF, DALF, TCF French exam preparation courses.",
            "Opt for flexible learning formats: Learners may find in-person, part-time, online, or distance-learning options, depending on the provider.",
            "The best course for you will depend on your current level of proficiency, target language, learning goals, schedule, and whether you need a recognized certificate. Students who are planning for **Language Courses in Mauritius** should consider these factors to select a good institution. These considerations are also useful for learners comparing **language learning in Mauritius** for academic, professional or personal development."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Mauritius Language Courses",
      "groups": [
        {
          "t": "p",
          "items": [
            "The following are popular options:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Language",
            "Program Options",
            "Suitable for"
          ],
          "rows": [
            [
              "English",
              "Academic English, Foundation English, Spoken English",
              "Higher education, employment and daily communication"
            ],
            [
              "French",
              "General French, French as a Foreign Language (FLE), preparation for exams",
              "Study, work, travel and certificate"
            ],
            [
              "Chinese language",
              "Introduction to Modern Chinese Language",
              "Beginners interested in Chinese Language"
            ],
            [
              "German.",
              "General and beginner language courses (currently available).",
              "Education, travel and career advancement"
            ],
            [
              "Spanish Language",
              "Basic & conversational classes, as available",
              "Travel and communications"
            ],
            [
              "Other languages",
              "Options vary by institution and current intake.",
              "Personal/professional interests"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Institut fran\u00e7ais de Maurice offers general French, FLE, French for Specific Purposes and preparation for official exams. The Open University of Mauritius provides foundation courses in English and French. The Mahatma Gandhi Institute offers Modern Chinese \u2013 Level I.",
            "Students interested in **English and French language courses in Mauritius** can compare the available foundation programs, and those interested in Chinese can explore the introductory options. Learners considering **English and French language courses in Mauritius** can also check the course levels, learning formats and certification opportunities offered by each provider."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Institutions for Language Courses in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Language Courses programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Mauritius (UoM)",
          "location": "Reduit, Mauritius",
          "fee": "MUR 150,000 \u2013 350,000 / Year",
          "desc": "The flagship national university of Mauritius offering premier degree programs in health sciences, engineering, agriculture, and business.",
          "img": uniImg1
        },
        {
          "name": "Universit\u00e9 des Mascareignes (UdM)",
          "location": "Rose Hill, Mauritius",
          "fee": "MUR 180,000 \u2013 320,000 / Year",
          "desc": "Bilingual public university partnering with French universities to offer internationally accredited dual qualifications.",
          "img": uniImg2
        },
        {
          "name": "University of Technology, Mauritius (UTM)",
          "location": "La Tour Koenig, Mauritius",
          "fee": "MUR 160,000 \u2013 280,000 / Year",
          "desc": "Dynamic public institution recognized for cutting-edge programs in technology, applied management, healthcare, and sustainable development.",
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg2
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg1
        }
      ],
      "unis_data": [
        {
          "name": "University of Mauritius (UoM)",
          "location": "Reduit, Mauritius",
          "fee": "MUR 150,000 \u2013 350,000 / Year",
          "desc": "The flagship national university of Mauritius offering premier degree programs in health sciences, engineering, agriculture, and business.",
          "img": uniImg1
        },
        {
          "name": "Universit\u00e9 des Mascareignes (UdM)",
          "location": "Rose Hill, Mauritius",
          "fee": "MUR 180,000 \u2013 320,000 / Year",
          "desc": "Bilingual public university partnering with French universities to offer internationally accredited dual qualifications.",
          "img": uniImg2
        },
        {
          "name": "University of Technology, Mauritius (UTM)",
          "location": "La Tour Koenig, Mauritius",
          "fee": "MUR 160,000 \u2013 280,000 / Year",
          "desc": "Dynamic public institution recognized for cutting-edge programs in technology, applied management, healthcare, and sustainable development.",
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg2
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility varies by language, course level and institution. Understanding **language course eligibility in Mauritius** can help applicants identify the right program before submitting an application.",
            "**For language courses for starters**",
            "No previous language knowledge is required.",
            "Where there is a minimum age requirement, applicants must meet this requirement.",
            "You may need to provide basic identification and registration information.",
            "**For intermediate to higher-level classes**",
            "may need previous knowledge of the language.",
            "Placement test or assessment may be used to determine appropriate level.",
            "Applicants must meet any course-specific academic or language prerequisites.",
            "For example, the foundation French course of the Open University of Mauritius requires a minimum of a School Certificate credit in French. The English foundation course has its own academic entry requirements and mature applicants are considered on their own merit.",
            "Students should check the **language course eligibility in Mauritius** before enrolling as requirements may vary from beginner, intermediate and advanced programs. Applicants comparing **language course eligibility in Mauritius** should confirm the requirements directly with their selected institution."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Qualifications",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prior to enrolling, students should verify:",
            "Level and language of proficiency offered.",
            "If the course is for beginners or for advanced learners.",
            "The study mode: on campus, online, or distance learning.",
            "Course length, class times and attendance requirements.",
            "Whether or not a certificate is awarded on completion.",
            "If the course is a preparation for an official language exam.",
            "Tuition, registration fees and payment deadlines.",
            "If you\u2019re a student looking for certification, make sure the provider is authorized to actually administer the exam and not just offering classes to prepare for it.",
            "For **language course admission in Mauritius**, the aspirants must check the official registration procedure of the selected institution and the required documents and deadlines. Students applying for **language courses in Mauritius for international students** should also confirm any additional registration or residence-related requirements that apply to them."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Language Course Prices in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The fees for language courses vary according to the institution, level, duration and category of the learner. The following published prices are examples of what **Language Courses in Mauritius** can cost."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Cost per Course",
            "Charge Local Currency",
            "Approx Rs."
          ],
          "rows": [
            [
              "Open University foundation English \u2014 international non-SADC, total",
              "US\\$176",
              "\u20b915,300"
            ],
            [
              "International non-SADC, total Open university foundation French",
              "US\\$176",
              "\u20b915,300"
            ],
            [
              "Mahatma Gandhi Institute Modern Chinese \u2013 Level I course fee",
              "MUR 4,000",
              "\u20b98,000"
            ],
            [
              "Mahatma Gandhi Institute Registration fee for Chinese",
              "MUR 1,000",
              "Rs. 2,000"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "At the Open University of Mauritius, international non-SADC students are charged a total fee of US\\$176 for each of the foundation language courses listed. The Mahatma Gandhi Institute has listed MUR 4,000 for the Modern Chinese \u2013 Level I course with an additional MUR 1,000 for registration. Check the fees for your applicant category and intake.",
            "The INR conversions are indicative, using US\\$1 \u2248 \u20b987 and MUR 1 \u2248 \u20b92. Exchange rates may vary. These are course specific examples and are not a general price for all **language courses in Mauritius**. Accommodation and living expenses will be additional for learners traveling from overseas.",
            "Students wishing to enroll for **Language Courses in Mauritius** should check the latest tuition and registration fees with the institution of their choice. International applicants comparing **language courses in Mauritius for international students** should confirm the applicable fee category before making payments."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to Apply",
      "groups": [
        {
          "t": "p",
          "items": [
            "Select your language: Select which language you would like to learn, English, French, Chinese or any other language we offer.",
            "Pick your level of proficiency: Select a course for beginners, intermediate, advanced or exam preparation.",
            "Compare Schools: Explore course details, schedule, duration, fees and certification options.",
            "Verify eligibility: Complete any placement test or provide evidence of prior study where applicable.",
            "Apply Now: \u201cOfficially enrolll in the institution and pay the necessary fee.",
            "Start learning:Attend classes or access the online learning materials, depending on the course format.",
            "Applicants should review the **language course admission in Mauritius** process on the official website of their chosen provider. Checking the application procedure early can help students prepare the required documents and meet registration deadlines."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a language course students may want to consider:",
            "Intermediate and advanced language classes.",
            "Training in business and customer service professional language.",
            "English for Academic Purposes or English Language Preparation for Higher Education",
            "Preparation in French for the DELF, DALF or TCF examinations.",
            "More Chinese language courses.",
            "Training in translation and interpretation provided where offered.",
            "Entry requirements for Degree programs taught in the relevant language subject.",
            "The Institut fran\u00e7ais de Maurice offers French courses and preparation for recognized French language examinations. Learners should check the level of examination required by the university, employer or immigration authority to which they plan to apply.",
            "Students taking **Language Courses in Mauritius** can further enhance their skills with advanced courses, professional training and recognized language examinations. Continuing **language learning in Mauritius** can help learners develop their communication abilities and progress towards more advanced language levels."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "Language skills help careers that involve communication with foreign clients, visitors, students, or business partners.",
            "Possible opportunities:",
            "Executive Customer Service",
            "Hospitality & Tourism Specialist",
            "Sales Executive, International",
            "Administrative Assistant",
            "Language Tutor, with qualifications",
            "Assistant Translator",
            "Assistant of Interpretation",
            "Executive Business Communication Specialist International Student Support",
            "Multilingual Contact Center Executive",
            "Advanced language skills, relevant professional qualifications and practical experience can enhance career prospects. A short language course does not qualify someone for each translation, teaching or interpretation job."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documentation",
      "groups": [
        {
          "t": "p",
          "items": [
            "May require the following from the institution:",
            "Valid national identity card or passport.",
            "Application or registration form filled out.",
            "Recent photograph, if required.",
            "Previous academic certificates, if any.",
            "Evidence of previous language study for upper-level courses.",
            "Results of placement tests, where applicable.",
            "Proof of payment for registration and tuition fees.",
            "English language or other proficiency results, if applicable.",
            "Student visa or residence-permit documents (where applicable for students from abroad).",
            "For the full list, see the institution\u2019s official application instructions."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Mauritius (UoM)",
      "location": "Reduit, Mauritius",
      "fee": "MUR 150,000 \u2013 350,000 / Year",
      "desc": "The flagship national university of Mauritius offering premier degree programs in health sciences, engineering, agriculture, and business.",
      "img": uniImg1
    },
    {
      "name": "Universit\u00e9 des Mascareignes (UdM)",
      "location": "Rose Hill, Mauritius",
      "fee": "MUR 180,000 \u2013 320,000 / Year",
      "desc": "Bilingual public university partnering with French universities to offer internationally accredited dual qualifications.",
      "img": uniImg2
    },
    {
      "name": "University of Technology, Mauritius (UTM)",
      "location": "La Tour Koenig, Mauritius",
      "fee": "MUR 160,000 \u2013 280,000 / Year",
      "desc": "Dynamic public institution recognized for cutting-edge programs in technology, applied management, healthcare, and sustainable development.",
      "img": uniImg1
    },
    {
      "name": "Middlesex University Mauritius",
      "location": "Flic en Flac, Mauritius",
      "fee": "MUR 250,000 \u2013 450,000 / Year",
      "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
      "img": uniImg2
    },
    {
      "name": "Curtin Mauritius",
      "location": "Moka, Mauritius",
      "fee": "MUR 280,000 \u2013 420,000 / Year",
      "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
      "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Language Courses in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Language Courses in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Language Courses in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function LanguageCoursesMauritius() {
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
      seoPath="/study-abroad/mauritius/language-courses"
    />
  );
}
