import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Sweden/Engineering_PG/Aerospace/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Sweden/Engineering_PG/Aerospace/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Sweden/Engineering_PG/Aerospace/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Sweden/Engineering_PG/Aerospace/cta_bg.webp";
import cmsData from "../../../../../../data/study_abroad/sweden/pg_aerospace-engineering.json";
// University campus images
import uniImg1 from "../../../../../../Images/Abroad/Sweden/Engineering_PG/Aerospace/image1.webp";
import uniImg2 from "../../../../../../Images/Abroad/Sweden/Engineering_PG/Aerospace/image2.webp";


const page = {
  "name": "Aerospace Engineering (PG)",
  "country": "Sweden",
  "slug": "pg/aerospace-engineering",
  "title": "Aerospace Engineering (PG) in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Aerospace Engineering (PG) in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Aerospace Engineering (PG) in Sweden, Aerospace Engineering (PG) in Sweden for Indian Students, Best Universities in Sweden, Sweden Aerospace Engineering (PG) Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Aerospace Engineering (PG) in Sweden for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Aerospace Engineering (PG) in Sweden for Indian students."
  ],
  "overview": [
    "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for Aerospace Engineering (PG) in Sweden."
  ],
  "level": "M.Eng / M.Sc. Aerospace Engineering",
  "crumb": "Engineering / PG Engineering",
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
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Aerospace Engineering Masters in Sweden enables students to learn aerospace technologies and related areas such as space engineering, contro...",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Aerospace Engineering (PG) in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "image": uniImg1, "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Key Advantages of Studying Aerospace Engineering in Sweden:",
      "groups": [
        {
          "t": "ul",
          "items": [
            "## English language Master\u2019s Programs: Study postgraduate engineering taught in English.",
            "## Specialization Opportunities: aeronautics, space systems and aircraft structures studies.",
            "## Engineering Projects and Research: Gain technical knowledge through projects and research opportunities.",
            "## International Industry Exposure: Gain relevant knowledge for international engineering & technology industries.",
            "## Further Education Opportunities: Ready yourself for doctoral studies, research positions or specialized engineering careers."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Students who are looking to study Aerospace Engineering in Sweden can take advantage of the country\u2019s emphasis on advanced technology, engin...",
      "groups": [
        {
          "t": "p",
          "items": [
            "Through **Edu Hawk worldwide** study abroad guidance, students can explore language-learning options and understand the eligibility, fees and application requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Typical Areas of Study Include",
      "groups": [
        {
          "t": "ul",
          "items": [
            "## Flight Dynamics and Aerodynamics",
            "## Aircraft Design and Performance",
            "## Light-Weight Materials and Structures for Aerospace",
            "## Satellite and Spacecraft Systems",
            "## Flight Dynamics and Control",
            "## Computational fluid dynamics (CFD) is the application of computers to simulate fluid flow and the transfer of heat and momentum between fluids and solid surfaces.",
            "## Aerospace Propulsion and Space Technologies",
            "## Systems Engineering and Numerical Simulation"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Aerospace Engineering in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Aerospace Engineering (PG) in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\KTH Royal Institute of Technology",
          "location": "\KTH Royal Institute of Technology, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "KTH offers a two-year **Master of Science in Aerospace Engineering** taught in English. Students can specialize in Aeronautics, Space, Lightweight Structures or Systems Engineering. The programme includes aerospace modelling, analysis, design and a major engineering project. **Location:** Stockholm, Sweden ",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "\Chalmers University of Technology",
          "location": "\Chalmers University of Technology, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Chalmers offers the related **MSc in NewSpace Systems Engineering**, a two-year programme focusing on space systems, spacecraft design, propulsion, space structures and materials. It is worth considering for students interested in the space technology side of aerospace engineering. **Location:** Gothenburg, Sweden  **Important Note:** KTH is the most directly relevant option for students seeking a master's degree specifically titled Aerospace Engineering. Chalmers' NewSpace Systems Engineering is a related space systems programme, not a degree with the same Aerospace Engineering title. Students researching the **Best Universities for Aerospace Engineering in Sweden** should verify the exact degree title, curriculum, admission requirements and programme availability before applying.",
          "image": uniImg1, "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who Can Study Aerospace Engineering in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants generally need a recognized bachelor's degree in Aerospace Engineering, Mechanical Engineering, Engineering Sciences or a closely related field.",
            "For admission to the MSc in Aerospace Engineering at KTH, applicants should have relevant previous studies, including the following academic areas:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Mathematics and Programming:** Approximately 25 ECTS credits in total, including control theory and programming.",
            "**Applied Mechanics:** Approximately 20 ECTS credits in total, including solid mechanics and fluid mechanics.",
            "**English Language Proficiency:** Equivalent to Swedish English 6 or English Level 2\\."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants must also meet the programme's degree and documentation requirements.",
            "The **Aerospace Engineering Eligibility in Sweden** depends on the university's academic prerequisites and selection criteria. Meeting the minimum requirements does not guarantee admission because available places may be allocated competitively."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Requirements for Admission to Aerospace Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements differ between universities, but applicants generally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor's degree or equivalent in an appropriate engineering field.",
            "Good academic results in mathematics and engineering subjects.",
            "Previous coursework in mechanics, programming and control theory, where required.",
            "Proof of English language proficiency through accepted qualifications or recognized tests.",
            "Any additional programme-specific forms or supporting documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "For KTH, the published English-language requirement can be met through accepted qualifications or recognized tests. IELTS 6.5 is one example of an accepted qualification, subject to the university's official test requirements and exemption rules.",
            "Students should carefully review the admission criteria before applying to a **Master's in Aerospace Engineering in Sweden**, as specific academic credits and documentation may vary."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Tuition Fees and Cost of Aerospace Engineering in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The overall budget for Indian students includes tuition fees, living expenses, application fees and personal costs.",
            "The following INR conversions use an illustrative exchange rate of **SEK 1 \\= INR 9.50**. Actual amounts may change depending on exchange rates and bank charges."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Cost in SEK",
            "Approximate Cost in INR"
          ],
          "rows": [
            [
              "KTH Total Tuition Fee (Two Years)",
              "SEK 385,000",
              "\u20b936.58 lakh"
            ],
            [
              "Application Fee",
              "SEK 900",
              "\u20b98,550"
            ],
            [
              "Monthly Living Costs",
              "SEK 10,000\u201314,000",
              "\u20b995,000\u2013\u20b91.33 lakh"
            ],
            [
              "Annual Living Expenses",
              "SEK 120,000\u2013168,000",
              "\u20b911.40\u2013\u20b915.96 lakh"
            ],
            [
              "Living Expenses for Two Years",
              "SEK 240,000\u2013336,000",
              "\u20b922.80\u2013\u20b931.92 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "KTH confirms that the total tuition fee for its MSc in Aerospace Engineering is **SEK 385,000** for students required to pay tuition fees. The application fee is SEK 900\\."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Budget Item",
            "Price in SEK",
            "Approximate Cost in INR"
          ],
          "rows": [
            [
              "Tuition Fees",
              "SEK 385,000",
              "\u20b936.58 lakh"
            ],
            [
              "Living Expenses",
              "SEK 240,000\u2013336,000",
              "\u20b922.80\u2013\u20b931.92 lakh"
            ],
            [
              "Application Fee",
              "SEK 900",
              "\u20b98,550"
            ],
            [
              "**Estimated Total**",
              "**SEK 625,900\u2013721,900**",
              "**\u20b959.46\u2013\u20b968.58 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These estimates do not include flights, visa or residence permit costs, initial accommodation deposits and other one-time expenses. Actual expenses may be lower or higher depending on accommodation and lifestyle. Tuition fees may also vary between universities and programmes.",
            "Students should explore scholarships before applying. KTH offers scholarship opportunities for eligible tuition-fee-paying applicants, including scholarships that may cover tuition fees. Applicants should check the relevant conditions and deadlines.",
            "The **Cost of Aerospace Engineering in Sweden** should therefore be planned carefully, including tuition, accommodation, everyday expenses and additional travel costs."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\KTH Royal Institute of Technology",
      "location": "\KTH Royal Institute of Technology, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "KTH offers a two-year **Master of Science in Aerospace Engineering** taught in English. Students can specialize in Aeronautics, Space, Lightweight Structures or Systems Engineering. The programme includes aerospace modelling, analysis, design and a major engineering project. **Location:** Stockholm, Sweden ",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "\Chalmers University of Technology",
      "location": "\Chalmers University of Technology, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Chalmers offers the related **MSc in NewSpace Systems Engineering**, a two-year programme focusing on space systems, spacecraft design, propulsion, space structures and materials. It is worth considering for students interested in the space technology side of aerospace engineering. **Location:** Gothenburg, Sweden  **Important Note:** KTH is the most directly relevant option for students seeking a master's degree specifically titled Aerospace Engineering. Chalmers' NewSpace Systems Engineering is a related space systems programme, not a degree with the same Aerospace Engineering title. Students researching the **Best Universities for Aerospace Engineering in Sweden** should verify the exact degree title, curriculum, admission requirements and programme availability before applying.",
      "image": uniImg1, "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Aerospace Engineering (PG) in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Aerospace Engineering (PG) in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Aerospace Engineering (PG) in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function AerospaceEngineeringPGSweden() {
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
      seoPath="/study-abroad/sweden/pg/aerospace-engineering"
    />
  );
}
