import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/BBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/BBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/BBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/BBA/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/BBA/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/BBA/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/BBA/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/bba.json";

const page = {
  "name": "BBA",
  "country": "Mauritius",
  "slug": "bba",
  "title": "BBA in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study BBA in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study BBA in Mauritius, BBA in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius BBA Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "BBA in Mauritius for Indian Students",
  "heroParas": [
    "Pursue an accredited Bachelor of Business Administration (BBA) in Mauritius, establishing foundational expertise across finance, marketing, organizational management, and international business. Indian students gain practical corporate exposure in a politically stable, regional financial hub connecting African and Asian commercial markets."
  ],
  "overview": [
    "Not all universities in Mauritius offer a degree called BBA. Other similar options are Middlesex University Mauritius BA (Hons) Business Management and Open University of Mauritius BSc (Hons) Business Management. Before applying students should check the qualification title. Students exploring a **Bachelor of Business Administration in Mauritius** should compare these related qualifications and confirm the exact degree awarded by the institution."
  ],
  "level": "Bachelor of Business Administration",
  "crumb": "BBA",
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
      "title": "Why do a BBA in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "For those students who are looking for an international learning environment for undergraduate business education, Mauritius can be an option. Students considering **BBA in Mauritius** can explore business management courses that provide an understanding of different areas of business and organisational operations.",
            "**Business education:** Learn management concepts, accounting, marketing, finance and organizational behavior.",
            "**Specialization options:** Explore areas such as finance, marketing and innovation and entrepreneurship, depending on institution.",
            "**International exposure:** Learn about regional and international business and experience a multicultural environment.",
            "**Entrepreneurial development:** Develop the basic skills for starting and managing a business.",
            "**Further study opportunities:** On graduation, progress to an MBA, MSc Management or another postgraduate business qualification, subject to entry requirements.",
            "**Flexibility in career:** Business graduates can find entry-level jobs in a wide range of industries.",
            "Different universities offer different course content and practical learning opportunities, so when choosing a program students should compare curricula and internship options. These factors can help students select a suitable **Bachelor of Business Administration in Mauritius** or a related undergraduate business qualification."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "BBA Course in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Other undergraduate degrees that students looking for a **BBA course in Mauritius** might be interested in include:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Curriculum",
            "The main focus"
          ],
          "rows": [
            [
              "BBA \u2014 where available specifically",
              "General business administration and management"
            ],
            [
              "Business Management BA (Hons)",
              "Business Management, Leadership, Strategy"
            ],
            [
              "BA (Hons) Business Management (Finance)",
              "Business management & Financial analysis"
            ],
            [
              "BA (Hons) Business Management (Marketing)",
              "Marketing Strategy and Operations"
            ],
            [
              "BA (Hons) Business Management (Innovation & Entrepreneurship)",
              "Business development, entrepreneurship and innovation"
            ],
            [
              "BSc (Hons) Business Management",
              "Finance, management, marketing and organizational behavior"
            ],
            [
              "BSc (Hons) Business Management with a specialism in Financial Services",
              "Financial and business services"
            ],
            [
              "BSc (Hons) Business Management with Financial Risk Management",
              "Business Finance & Risk Management"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Business Management Degrees with pathways in Finance, Marketing and Innovation and Entrepreneurship \\- Middlesex University Mauritius The Open University of Mauritius provides a BSc (Hons) Business Management with a variant in Financial Services or Financial Risk Management.",
            "Students comparing a **BBA course in Mauritius** should review the curriculum, specialisation options, teaching format, and practical learning opportunities offered by each institution."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for BBA in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited BBA programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "\\. Middlesex University, Mauritius",
          "location": "\\. Middlesex University, Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "BA (Hons) Business Management with specializations in Finance, Marketing, and Innovation and Entrepreneurship. Standard duration is three years full time. The international fee for 2026\u20132027 is published as \u00a35,800 (including the administrative fee).",
          "img": uniImg1
        },
        {
          "name": "\\. University of Mauritius Open",
          "location": "\\. University of Mauritius Open",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a BSc (Hons) Business Management with a minimum of three and a maximum of six years. The published international non-SADC fee is US\\$6,840 for the full program. Has intakes in February and August.",
          "img": uniImg2
        },
        {
          "name": "\\. Mauritius University",
          "location": "\\. Mauritius University",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "A public university worth checking out when comparing undergrad business programs. Before applying, check the current course catalog for the relevant business degree, entry requirements and fee structure. Students interested in **BBA in Mauritius** should confirm the current programme availability, admission conditions, and exact qualification title with their chosen university.",
          "img": uniImg3
        }
      ],
      "unis_data": [
        {
          "name": "\\. Middlesex University, Mauritius",
          "location": "\\. Middlesex University, Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "BA (Hons) Business Management with specializations in Finance, Marketing, and Innovation and Entrepreneurship. Standard duration is three years full time. The international fee for 2026\u20132027 is published as \u00a35,800 (including the administrative fee).",
          "img": uniImg1
        },
        {
          "name": "\\. University of Mauritius Open",
          "location": "\\. University of Mauritius Open",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a BSc (Hons) Business Management with a minimum of three and a maximum of six years. The published international non-SADC fee is US\\$6,840 for the full program. Has intakes in February and August.",
          "img": uniImg2
        },
        {
          "name": "\\. Mauritius University",
          "location": "\\. Mauritius University",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "A public university worth checking out when comparing undergrad business programs. Before applying, check the current course catalog for the relevant business degree, entry requirements and fee structure. Students interested in **BBA in Mauritius** should confirm the current programme availability, admission conditions, and exact qualification title with their chosen university.",
          "img": uniImg3
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "BBA in Mauritius Eligibility Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants generally must meet the following requirements, although exact criteria may vary by institution. Students checking **BBA eligibility in Mauritius** should review the academic and English-language requirements for their selected undergraduate business programme."
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th Class or equivalent secondary school qualification completed.",
            "Minimum academic grades or qualification points needed by the university.",
            "English language proficiency, if needed.",
            "Any course specific subject prerequisites.",
            "Foundation or other requirements for entry if direct entry requirements are not met."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Middlesex University Mauritius show 88 UCAS points for their BA (Hons) Business Management 2026-2027. Indian applicants should contact the admissions team to learn how their Class 12 board and marks are assessed.",
            "Students planning to study a **Bachelor of Business Administration in Mauritius** should confirm whether their Class 12 qualification meets the entry requirements of the chosen institution."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Requirements for Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students applying for BBA or other related business degrees may need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 marksheet and certificate.",
            "Class XII Marksheet and Certificate.",
            "Valid passport for foreign students.",
            "Filled-in application form.",
            "English language test results, if required.",
            "Passport size photographs as required.",
            "Personal statement or supporting documents if applicable.",
            "Proof of payment of application fee if required."
          ]
        },
        {
          "t": "p",
          "items": [
            "Universities may request certified copies or further documents during assessment. Always work to the official checklist for the program you have selected. Applicants preparing for **BBA admission in Mauritius** should check the document requirements and application deadlines before submitting their forms."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Pursuing BBA in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The tuition fee will depend on the university and the program and the category of student. The figures below refer to related business degrees which may not be exactly titled BBA. Students planning **BBA in Mauritius** should compare tuition fees and additional expenses before choosing an institution.",
            "**Tuition Fee**"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Institution and program",
            "Publication fee",
            "Approx INR"
          ],
          "rows": [
            [
              "BA (Hons) Business Management Middlesex University Mauritius",
              "\u00a35,800",
              "\u20b96.73 lakh"
            ],
            [
              "Open University of Mauritius \\- BSc (Hons) Business Management, international non-SADC",
              "Total USD 6,840",
              "\u20b95.95 lakh"
            ],
            [
              "Open University of Mauritius \\- BSc (Hons) Business Management, SADC fee category",
              "US\\$4,320 total",
              "\u20b93.76 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "*",
            "INR figures are approximate, based on \u00a31 \\~ INR 116 and US\\$1 \\~ INR 87\\. Fees may vary from intake to intake. Please check the latest fee, payment schedule and other charges with the university.",
            "**Cost of living in Mauritius**",
            "Students should budget for accommodation, food, local transport, utilities, internet, study materials and personal expenses.",
            "A preliminary budget is in the order of MUR 15,000\u201330,000 per month, or about \u20b930,000\u2013\u20b960,000 at MUR 1 \u2248 \u20b92. Actual costs vary based on lifestyle, accommodation, and location. This is only a planning estimate and is not a guarantyd official minimum."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "BBA in Mauritius Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning **BBA admission in Mauritius** can follow these steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose a course:** Compare Business Management Degree, Specialization and Teaching Formats.",
            "**Check eligibility:** Check academic and English-language requirements.",
            "**Prepare documentation:** Collect school certificates, transcripts, passport details and other supporting documents.",
            "**Apply online:** Apply through official university website or through the admissions office.",
            "**Complete evaluation:** Provide any other documents the institution requests.",
            "**See the offer:** Check fees, deadlines, conditions and refund policy.",
            "**Arrange for permission to study:** Fill out the appropriate student-visa or study-permit process.",
            "**Arrange lodging and transportation:** Organize after verifying admission and travel requirements.",
            "**Full enrollment:** Follow the university\u2019s registration instructions prior to the start of classes."
          ]
        },
        {
          "t": "p",
          "items": [
            "International students should start the process early so that there is time for document verification and immigration formalities. Applicants should also confirm the exact degree title before completing their **BBA admission in Mauritius**."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Other Study Options After BBA",
      "groups": [
        {
          "t": "p",
          "items": [
            "When students have completed an undergraduate business degree they can look at:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MBA (Master in Business Administration)",
            "MSc International Business Management",
            "MSc Management",
            "Master's in Marketing",
            "Master's in Finance",
            "Master's in Human Resource Management",
            "Master's in Project Management",
            "Postgraduate programs in business analytics or entrepreneurship"
          ]
        },
        {
          "t": "p",
          "items": [
            "Your academic performance, your career goals and the admission criteria of each program will determine the right option. Some courses may require you to have relevant professional experience or an undergraduate background in a related field."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career prospects after BBA",
      "groups": [
        {
          "t": "p",
          "items": [
            "A business degree can be the foundation for entry level jobs in a number of different industries. Possible career paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business development executive",
            "Marketing Manager",
            "Sales Executive (Assistant Manager)",
            "Assistant or Executive, Human Resources",
            "Operations Co-ordinator",
            "Customer Relationship Manager",
            "Business Analyst Junior",
            "Trainee Manager",
            "Executive Assistant",
            "Entrepreneur/Small Business Owner"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career opportunities are based on skills, experience, the demands of the employer and local employment laws. Internships, communication skills, analytical ability and practical business projects can ready graduates for the workplace. A **BBA in Mauritius** or a related business management degree can provide an academic foundation for students planning to enter business and management careers."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents needed for BBA Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare these documents according to the checklist of the selected university:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "10th class certificate & marksheet.",
            "12th certificate and mark sheet",
            "Proof of English proficiency (if applicable).",
            "Full application form.",
            "Passport sized photographs may be required.",
            "Personal statement or supporting documents if applicable.",
            "Proof of payment of application fee, if any.",
            "Additional documents required for study-permit processing."
          ]
        },
        {
          "t": "p",
          "items": [
            "Please check if you have to provide certified copies, official translations or other supporting documents when submitting the application."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\\. Middlesex University, Mauritius",
      "location": "\\. Middlesex University, Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "BA (Hons) Business Management with specializations in Finance, Marketing, and Innovation and Entrepreneurship. Standard duration is three years full time. The international fee for 2026\u20132027 is published as \u00a35,800 (including the administrative fee).",
      "img": uniImg1
    },
    {
      "name": "\\. University of Mauritius Open",
      "location": "\\. University of Mauritius Open",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers a BSc (Hons) Business Management with a minimum of three and a maximum of six years. The published international non-SADC fee is US\\$6,840 for the full program. Has intakes in February and August.",
      "img": uniImg2
    },
    {
      "name": "\\. Mauritius University",
      "location": "\\. Mauritius University",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "A public university worth checking out when comparing undergrad business programs. Before applying, check the current course catalog for the relevant business degree, entry requirements and fee structure. Students interested in **BBA in Mauritius** should confirm the current programme availability, admission conditions, and exact qualification title with their chosen university.",
      "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for BBA in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for BBA in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for BBA in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function BBAMauritius() {
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
      seoPath="/study-abroad/mauritius/bba"
    />
  );
}
