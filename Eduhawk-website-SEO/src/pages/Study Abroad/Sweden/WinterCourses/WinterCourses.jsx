import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/WinterCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/WinterCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/WinterCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/WinterCourses/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/winter-courses.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/WinterCourses/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/WinterCourses/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/WinterCourses/image3.webp";


const page = {
  "name": "Winter Courses",
  "country": "Sweden",
  "slug": "winter-courses",
  "title": "Winter Courses in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Winter Courses in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Winter Courses in Sweden, Winter Courses in Sweden for Indian Students, Best Universities in Sweden, Sweden Winter Courses Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Winter Courses in Sweden for Indian Students",
  "heroParas": [
    "**Winter Courses in Sweden** offer international students an opportunity to experience Nordic winter life while studying subjects such as sustainability, business, environmental science, Swedish culture and technology. These short-term programmes may include classroom learning, cultural activities, field visits and opportunities to connect with students from different countries."
  ],
  "overview": [
    "For students considering winter study during **2026\u20132027**, several programmes may be worth exploring. J\u00f6nk\u00f6ping University's Youth Winter School is scheduled for **7\u201318 December 2026**, while Link\u00f6ping University's winter programme for eligible exchange students runs from **30 November 2026 to 24 January 2027**.",
    "Admission, availability and fees depend on each programme's requirements. Students should confirm the latest information with the respective university before applying.",
    "Through **Edu Hawk worldwide** study abroad guidance, students can explore language-learning options and understand the eligibility, fees and application requirements."
  ],
  "level": "Short-term / Winter Programmes",
  "crumb": "Winter Courses",
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
      "title": "Why Take Winter Courses in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden provides an opportunity to combine academic learning with cultural experiences during the Nordic winter."
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Experience Nordic Winter Life:** Discover Swedish winter traditions, seasonal celebrations and everyday life.",
            "**Explore Sustainability:** Learn about environmental responsibility and Sweden's approach to sustainable development.",
            "**Develop International Skills:** Improve communication, teamwork and cross-cultural understanding.",
            "**Explore Specialist Subjects:** Study topics such as business, economics, digitalisation, environmental studies and Swedish culture.",
            "**Gain Academic Experience:** Some university courses may award credits that can be recognised by your home institution.",
            "**Participate in Cultural Activities:** Depending on the programme, activities may include museum visits, excursions, winter sports and visits to Swedish cities."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Types of Winter Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Winter Courses in Sweden** vary according to academic level, duration, subject and eligibility. Some programmes are designed for school students, while others are restricted to university students nominated through exchange agreements."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of Winter Course",
            "Typical Duration",
            "Major Study Areas"
          ],
          "rows": [
            [
              "Swedish Society and Culture",
              "1\u20134 weeks or longer",
              "Swedish history, traditions, society and everyday communication"
            ],
            [
              "Sustainability and Environment",
              "1\u20134 weeks or more",
              "Sustainable development, climate change and environmental practices"
            ],
            [
              "Economics and Business",
              "A few weeks",
              "International business, development economics and financial markets"
            ],
            [
              "Technology and Digitalisation",
              "Several weeks, depending on the programme",
              "Technology and society, data and digital transformation"
            ],
            [
              "Polar and Arctic Research",
              "Depends on the programme",
              "Polar environments, snow and ice research, and climate science"
            ],
            [
              "Swedish Language Courses",
              "Varies by course",
              "Vocabulary, speaking, reading, writing and everyday Swedish"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are broad subject areas. Actual course availability depends on the university and the winter intake. Students should check individual programme descriptions before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities in Sweden for Winter Courses",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Winter Courses in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\J\u00f6nk\u00f6ping University",
          "location": "\J\u00f6nk\u00f6ping University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": " J\u00f6nk\u00f6ping University's **Youth Winter School**, scheduled for **7\u201318 December 2026**, is designed for high-school students aged 16\u201318. The programme focuses on Swedish heritage, sustainability, innovation, English-language skills and cultural activities. It also includes a trip to Stockholm. Students should consult the university's official Winter School webpage or contact the organiser for current application arrangements, fees and availability.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\Link\u00f6ping University",
          "location": "\Link\u00f6ping University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": " Link\u00f6ping University's **Winter Programme** runs during the winter period, with the 2026\u20132027 programme scheduled from **30 November 2026 to 24 January 2027**. It includes short courses in subjects such as: * International Business * Development Economics * Environmental Monitoring * Digitalisation * Financial Markets The programme is open to eligible exchange students nominated by their home universities. Independent applicants should check the official programme conditions before considering an application.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "\Lule\u00e5 University of Technology",
          "location": "\Lule\u00e5 University of Technology, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": " The **Arctic Winter School** explores subjects such as snow and ice, climate change, polar environments, innovation and cultural heritage. The Spring 2027 course is offered in English in Kiruna. However, the advertised application route is intended for eligible exchange students. Applicants should confirm the nomination requirements, course dates and participation arrangements with the university.",
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
      "title": "Winter Course Eligibility in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility depends on the programme, applicant's age, academic background and whether independent applications are accepted.",
            "Applicants may need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Meet the programme's age requirements.",
            "Have the required level of secondary education.",
            "Demonstrate sufficient English-language proficiency.",
            "Apply through their school if nomination is required.",
            "Have valid health insurance and parental consent, where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, **J\u00f6nk\u00f6ping University's Youth Winter School** is intended for students aged **16\u201318** who have completed their third semester of high school and have English-language skills equivalent to B1. Participation is through school nomination and an agreement with the home institution.",
            "Applicants may need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Meet the academic requirements of the selected course.",
            "Demonstrate good English-language proficiency.",
            "Obtain nomination from an eligible partner university, if required.",
            "Satisfy course-specific credit or prior-learning requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "Link\u00f6ping University's winter programme is primarily intended for exchange students. Independent applicants should not assume that they can apply directly."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Entry Requirements for Swedish Winter Courses",
      "groups": [
        {
          "t": "p",
          "items": [
            "Universities and programme organisers may request the following documents and information:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or approved identification.",
            "School certificates or university academic transcripts.",
            "Proof of English-language proficiency, if required.",
            "Nomination letter from the applicant's school or university, where applicable.",
            "Completed application form.",
            "Health insurance documents.",
            "Parental consent for underage students, if required.",
            "Additional course-specific documents, where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some winter schools are organised through partner institutions rather than the regular university admissions portal. Applicants should always follow the admission instructions provided for their chosen programme."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Winter Course Fees in Sweden and Living Expenses",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **cost of winter courses in Sweden** depends on tuition or programme fees, accommodation, meals, excursions and travel arrangements."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and Programme",
            "Tuition or Programme Fee",
            "Approximate INR"
          ],
          "rows": [
            [
              "J\u00f6nk\u00f6ping University \u2013 Youth Winter School",
              "Contact the organiser for the current fee",
              "No confirmed amount available"
            ],
            [
              "Link\u00f6ping University \u2013 Winter Programme",
              "No tuition charge for eligible exchange students under exchange agreements",
              "\u20b90 tuition fee"
            ],
            [
              "Lule\u00e5 University of Technology \u2013 Arctic Winter School",
              "Confirm fee eligibility and arrangements with the university",
              "No confirmed amount available"
            ],
            [
              "Uppsala University / Baltic University Programme Winter School",
              "Funding and eligibility depend on programme network arrangements",
              "Confirm with the organiser"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Link\u00f6ping University confirms that eligible exchange students under exchange agreements are not charged tuition fees. However, accommodation, course literature, travel and living expenses are separate costs.",
            "*INR estimates are based on an indicative exchange rate of SEK 1 \\= \u20b99.50, where applicable.*"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Approximate Monthly Cost"
          ],
          "rows": [
            [
              "Accommodation",
              "SEK 4,000\u20137,000 (\u20b938,000\u2013\u20b966,500)"
            ],
            [
              "Food and Groceries",
              "SEK 2,000\u20133,000 (\u20b919,000\u2013\u20b928,500)"
            ],
            [
              "Local Transport",
              "SEK 600\u20131,000 (\u20b95,700\u2013\u20b99,500)"
            ],
            [
              "Personal and Study Expenses",
              "SEK 1,000\u20133,000 (\u20b99,500\u2013\u20b928,500)"
            ],
            [
              "**Total Estimated Monthly Cost**",
              "**SEK 10,000\u201314,000 (\u20b995,000\u2013\u20b91.33 lakh)**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Actual living expenses for a two-week course may be lower than a full month's budget. However, short-stay accommodation and winter travel can increase daily expenses.",
            "Before applying, check whether the programme fee includes accommodation, meals, local transport and excursions."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Winter Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can follow these steps when applying for a winter programme:",
            "**Step 1: Select a Suitable Programme**",
            "Choose a winter school based on your age, educational level, interests and preferred dates.",
            "**Step 2: Check Your Eligibility**",
            "Find out whether the programme accepts independent applicants or requires nomination through your school or university.",
            "**Step 3: Check the Application Deadline**",
            "Short-term courses may have separate application procedures and deadlines. Check the official programme webpage for the latest dates.",
            "**Step 4: Prepare Your Documents**",
            "Collect academic transcripts, identification, language proficiency evidence and any required nomination or insurance documents.",
            "**Step 5: Submit Your Application**",
            "Apply through the official university website or follow the application process specified by the programme organiser.",
            "**Step 6: Confirm Your Place and Programme Costs**",
            "Check the programme fee, accommodation arrangements, meals, excursions and payment conditions before confirming your participation.",
            "**Step 7: Arrange Travel and Immigration Requirements**",
            "Check whether you need a visa or other immigration permission for your intended stay in Sweden. Requirements depend on your nationality, purpose of travel and duration of stay.",
            "**Important for Winter 2026:** J\u00f6nk\u00f6ping University's Youth Winter School begins on **7 December 2026**. Students interested in participating should contact the organiser directly to confirm remaining availability, application arrangements and fees before making travel plans."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Continuing Education and Professional Development",
      "groups": [
        {
          "t": "p",
          "items": [
            "Winter programmes allow students to explore a subject before committing to a longer university programme. Depending on the course, students may develop knowledge and skills in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International business and economics.",
            "Sustainability and environmental science.",
            "Technology and digitalisation.",
            "Swedish culture and communication.",
            "Climate science and Arctic research.",
            "International cooperation and governance."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some programmes award academic credits, while others provide a certificate of participation. Students should ask the organiser whether credits are available and confirm whether their school or university will recognise them."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Winter Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "A short winter course is generally not a professional qualification. Instead, it provides an educational and cultural experience that can complement a student's existing academic background and help explore future study interests.",
            "Depending on the subject, the experience may help students discover interests in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International business.",
            "Sustainability and environmental studies.",
            "Digital technology.",
            "Climate and environmental research.",
            "International relations and diplomacy.",
            "Swedish language and cultural studies."
          ]
        },
        {
          "t": "p",
          "items": [
            "Career outcomes depend on full academic qualifications, practical experience, language skills and employer requirements. Completing a short winter course does not guarantee a job or provide eligibility for a work permit in Sweden."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required for Winter Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare the documents requested by the specific programme. These may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "School or university academic transcripts.",
            "Proof of English-language proficiency, where applicable.",
            "Nomination letter from a school or university, if required.",
            "Completed application form.",
            "Health insurance documents.",
            "Parental consent for underage students, if required.",
            "Travel, visa or residence permit documentation, where applicable.",
            "Proof of payment, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Keep electronic copies of all documents and check the organiser's instructions regarding file formats, translations and submission deadlines."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\J\u00f6nk\u00f6ping University",
      "location": "\J\u00f6nk\u00f6ping University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": " J\u00f6nk\u00f6ping University's **Youth Winter School**, scheduled for **7\u201318 December 2026**, is designed for high-school students aged 16\u201318. The programme focuses on Swedish heritage, sustainability, innovation, English-language skills and cultural activities. It also includes a trip to Stockholm. Students should consult the university's official Winter School webpage or contact the organiser for current application arrangements, fees and availability.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\Link\u00f6ping University",
      "location": "\Link\u00f6ping University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": " Link\u00f6ping University's **Winter Programme** runs during the winter period, with the 2026\u20132027 programme scheduled from **30 November 2026 to 24 January 2027**. It includes short courses in subjects such as: * International Business * Development Economics * Environmental Monitoring * Digitalisation * Financial Markets The programme is open to eligible exchange students nominated by their home universities. Independent applicants should check the official programme conditions before considering an application.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "\Lule\u00e5 University of Technology",
      "location": "\Lule\u00e5 University of Technology, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": " The **Arctic Winter School** explores subjects such as snow and ice, climate change, polar environments, innovation and cultural heritage. The Spring 2027 course is offered in English in Kiruna. However, the advertised application route is intended for eligible exchange students. Applicants should confirm the nomination requirements, course dates and participation arrangements with the university.",
      "image": uniImg3, "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Winter Courses in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Winter Courses in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Winter Courses in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function WinterCoursesSweden() {
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
      seoPath="/study-abroad/sweden/winter-courses"
    />
  );
}
