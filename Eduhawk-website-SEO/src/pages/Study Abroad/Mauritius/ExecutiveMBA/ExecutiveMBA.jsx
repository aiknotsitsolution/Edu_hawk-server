import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/ExecutiveMBA/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/executive-mba.json";

const page = {
  "name": "Executive MBA",
  "country": "Mauritius",
  "slug": "executive-mba",
  "title": "Executive MBA in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Executive MBA in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Executive MBA in Mauritius, Executive MBA in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Executive MBA Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Executive MBA in Mauritius for Indian Students",
  "heroParas": [
    "Study an Executive MBA in Mauritius, tailored for professionals and entrepreneurs looking to steer corporate strategy across emerging African and Asian markets. International executives develop cross-border management skills in a stable, established regional financial centre."
  ],
  "overview": [
    "Mauritius also has Executive MBA programs for students wishing to pursue higher business studies. Amity Institute of Higher Education, for example, lists a 16-month, full-time Executive MBA, while the University of Mauritius lists a two-year, part-time MBA and specialized MBA programs. These are different program formats and applicants are advised to compare entry requirements, fees, teaching schedules and recognition before making a choice. Students researching an **Executive MBA in Mauritius for Indian Students** should also check international admission conditions and the exact qualification awarded."
  ],
  "level": "Executive MBA",
  "crumb": "Executive MBA",
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
      "title": "Why pursue an Executive MBA in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students and working professionals considering an **Executive MBA in Mauritius** can explore postgraduate business education with a focus on management, leadership and strategic decision-making.",
            "**Leadership development:** Enhance skills in strategic management, organizational leadership and business decision making.",
            "**Practical business knowledge:** Study management, marketing, finance, operations and business analytics.",
            "**Career advancement:** Pursue more rewarding positions \u2013 according to your experience and opportunities.",
            "**Entrepreneurial skills:** Learn techniques to help you grow your business, innovate and develop organizations.",
            "**International exposure:** Study in a multicultural environment and with links to regional and global markets.",
            "**Various ways of study:** Don\u2019t just consider full-time Executive MBA programs; part-time MBA options may be more compatible with your work commitments.",
            "An Executive MBA is typically of greatest value to people with work experience who want to apply advanced management concepts to real business challenges. However, entry requirements vary and not all programs require the same level of experience. Comparing **Executive MBA courses in Mauritius** can help applicants identify a suitable programme and study format."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Executive MBA programs in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The following may be included within the scope of an Executive MBA and associated post graduate management offerings. Students exploring **Executive MBA courses in Mauritius** should understand that not every listed specialisation is necessarily offered as a separate Executive MBA by every institution."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Program",
            "Key areas of focus"
          ],
          "rows": [
            [
              "EMBA (Executive MBA)",
              "Organizational growth, strategy and executive leadership"
            ],
            [
              "General Master of Business Administration",
              "Business Administration and Management"
            ],
            [
              "MBA in Finance",
              "Financial strategy, corporate finance, risk"
            ],
            [
              "Marketing MBA",
              "Sales, marketing strategy, customer behavior"
            ],
            [
              "MBA in Human Capital Management",
              "Human Resources, Leadership, Talent Development"
            ],
            [
              "MBA, International Business",
              "International Strategy and Global Markets"
            ],
            [
              "Business Analytics MBA",
              "Business Intelligence and Data Driven Decisions"
            ],
            [
              "MBA-Operations or Supply Chain",
              "Logistics, Operations, Supply Chain Strategy"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The availability of each specialization is dependent on the institution. Amity offers an Executive MBA, the University of Mauritius has an MBA and specialized MBA pathways for 2026\u20132027. Students comparing **Executive MBA courses in Mauritius** should confirm the actual course title, curriculum and available specialisations with the university."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Executive MBA in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Executive MBA programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "\\. Amity Institute of Higher Education",
          "location": "\\. Amity Institute of Higher Education, Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Provides a full-time Executive MBA with a published duration of 16 months. The fee is MUR 130,000 for local and SADC students and US\\$3,000 for international students. The curriculum encompasses strategic management, business analytics, marketing, accounting, supply chain management, and a business research project.",
          "img": uniImg1
        },
        {
          "name": "\\. University of Mauritius (UoM)",
          "location": "\\. University of Mauritius (UoM)",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a part-time MBA of two years with specializations in Human Capital Management, Financial Services and Marketing for the academic year 2026-2027. These are MBA options and not an Executive MBA by a specific name.",
          "img": uniImg2
        },
        {
          "name": "\\. Middlesex University Mauritius",
          "location": "\\. Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "It offers a general MBA and specialized streams in Finance, Marketing and Artificial Intelligence & Business Analytics. The published duration is one year full-time or two years part-time, 2026\u20132027. It\u2019s an MBA alternative related, not an Executive MBA. Students comparing **Executive MBA universities in Mauritius** should review the programme structure, professional experience requirements, fees and recognition before selecting an institution.",
          "img": uniImg3
        }
      ],
      "unis_data": [
        {
          "name": "\\. Amity Institute of Higher Education",
          "location": "\\. Amity Institute of Higher Education, Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Provides a full-time Executive MBA with a published duration of 16 months. The fee is MUR 130,000 for local and SADC students and US\\$3,000 for international students. The curriculum encompasses strategic management, business analytics, marketing, accounting, supply chain management, and a business research project.",
          "img": uniImg1
        },
        {
          "name": "\\. University of Mauritius (UoM)",
          "location": "\\. University of Mauritius (UoM)",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a part-time MBA of two years with specializations in Human Capital Management, Financial Services and Marketing for the academic year 2026-2027. These are MBA options and not an Executive MBA by a specific name.",
          "img": uniImg2
        },
        {
          "name": "\\. Middlesex University Mauritius",
          "location": "\\. Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "It offers a general MBA and specialized streams in Finance, Marketing and Artificial Intelligence & Business Analytics. The published duration is one year full-time or two years part-time, 2026\u20132027. It\u2019s an MBA alternative related, not an Executive MBA. Students comparing **Executive MBA universities in Mauritius** should review the programme structure, professional experience requirements, fees and recognition before selecting an institution.",
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
      "title": "Executive MBA in Mauritius Eligibility Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Entry requirements differ between institutions. Executive MBA programs are usually aimed at people with some experience of working life. Applicants checking **Executive MBA eligibility in Mauritius** should review the requirements of their chosen university.",
            "**Typical requirements are:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor degree.",
            "Professional or managerial experience relevant to",
            "English Language Proficiency is a must.",
            "Academic transcripts and supporting documentation.",
            "Further assessment or interview, if requested."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Amity's Executive MBA has requirements that include a bachelor's degree along with at least two years of professional work experience, or equivalent experience under its mature admissions policy. Applicants are encouraged to contact the institution to confirm current requirements.",
            "The **Executive MBA eligibility in Mauritius** criteria may differ from those for a regular MBA, particularly in relation to professional experience and managerial responsibilities."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants may be asked to submit:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Application form completed.",
            "Certificate of graduation of bachelor.",
            "Records of your school studies.",
            "Updated CV/r\u00e9sum\u00e9.",
            "Work experience in a professional capacity.",
            "A valid passport for international students.",
            "English language test results, if applicable.",
            "Personal statement or statement of purpose, if needed.",
            "Letters of recommendation, if required.",
            "Proof of payment of application fee (if applicable)."
          ]
        },
        {
          "t": "p",
          "items": [
            "The university reserves the right to ask for certified copies or further documentation in the assessment of overseas qualifications.",
            "Applicants planning **Executive MBA admission in Mauritius** should check the official admissions checklist and confirm whether additional professional documents or interview assessments are required."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Fees for Executive MBA in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The fees vary from institution to institution, from the type of student and the structure of the program. Students comparing **Executive MBA fees in Mauritius** should check whether the published amount applies to domestic, SADC or international applicants.",
            "**Executive MBA fees**"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Institution and course",
            "Publication Fee",
            "Approximate INR Equivalents"
          ],
          "rows": [
            [
              "Amity Institute of Higher Education \u2013 Executive MBA",
              "MUR 130,000 for domestic/SADC students",
              "\u20b92.60 lakh"
            ],
            [
              "Amity Institute of Higher Education \u2013 Executive MBA",
              "US\\$ 3,000 for international students",
              "\u20b9 2.61 lakh"
            ],
            [
              "University of Mauritius \u2014 MBA Part-time",
              "Verify current fee with the university",
              "Not estimated"
            ],
            [
              "Middlesex University Mauritius \\- MBA International",
              "\u00a310,300",
              "\u20b911.95 lakhs"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "INR figures are illustrative, based on MUR 1 \u2248 \u20b92, US\\$1 \u2248 \u20b987, and \u00a31 \u2248 \u20b9116. The listed programs differ in type of qualification, duration and mode of delivery. Additional fees may be applicable for administration, registration or examination.",
            "**Cost of living in Mauritius**",
            "Plan for housing, meals, transportation, utilities, internet, study materials and personal expenses.",
            "An indicative planning budget is MUR 15,000-30,000 per month, or about \u20b930,000-\u20b960,000. Real costs will depend on your accommodation, lifestyle etc. A guideline for Mauritius government scholarships states that eligible awardees will receive a living allowance of MUR 16,500 per month, but this is not a universal estimate of the total cost of living.",
            "Students planning an **Executive MBA in Mauritius** should prepare a separate budget for tuition fees, accommodation and other personal expenses."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Executive MBA Admission Process in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students interested in **Executive MBA admission in Mauritius** can follow these steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose your program:** Compare Executive MBA and MBA options, specializations and modes of study.",
            "**Confirm Eligibility:** Assess degree requirements and experience requirements.",
            "**Documents preparation:** Gather transcripts, resume, passport information and proof of employment.",
            "**Submit the application:** Apply through the university\u2019s official portal or Admissions Office.",
            "**Full assessment:** Go for an interview or submit additional documents if required.",
            "**Check out the offer:** Check tuition, payment deadlines, program requirements, and refund policies.",
            "**Get permission to study:** International applicants to follow the existing student-visa or study-permit process.",
            "**Book a stay at:** Schedule ahead of time.",
            "**Total enrollment:** Follow the institution\u2019s registration instructions."
          ]
        },
        {
          "t": "p",
          "items": [
            "Working professionals should also review the weekly timetable and attendance requirements to make sure the program fits in with their work commitments. Before completing **Executive MBA admission in Mauritius**, applicants should confirm the course format and any attendance requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "What Next? Post Executive MBA Studies",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates could look at: Once they have completed an Executive MBA,"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Doctorate of Business Administration (DBA)",
            "PhD in Business Administration or Management",
            "Advanced leadership and executive development programs",
            "Professional certification in project management",
            "Investment and finance certificates",
            "Qualifications \u2013 digital transformation or business analytics",
            "Courses in specific corporate governance or strategic leadership"
          ]
        },
        {
          "t": "p",
          "items": [
            "Generally , the PhD is more research-focused , while the DBA is more for experienced people interested in applied business research . Entry requirements differ for each institution."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities Post Executive MBA",
      "groups": [
        {
          "t": "p",
          "items": [
            "An Executive MBA can help seasoned professionals improve their readiness for senior positions. Possible career paths are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Managing director",
            "Director, Business Development",
            "Director of Operations",
            "Marketing Manager",
            "Director of human resources",
            "Strategy & transformation management",
            "Consultant, business",
            "Project or program director",
            "Head of business unit",
            "Business owner or entrepreneur",
            "Executive or senior leadership positions"
          ]
        },
        {
          "t": "p",
          "items": [
            "The impact on career is dependent on prior experience, industry knowledge, leadership performance, and employer expectations. An Executive MBA is not a guaranty of promotion or a pay rise. Completing an **Executive MBA in Mauritius** may support professional development, but career outcomes depend on individual experience, skills and opportunities."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Needed for Executive MBA Admission",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Prepare the following documents as per the official checklist of the institution:",
            "Passport valid.",
            "Bachelor's degree certificate",
            "Records of your school studies.",
            "Updated CV/resume.",
            "Work experience letters or certificates of employment.",
            "Proof of English language proficiency (where required).",
            "Personal statement, if required.",
            "Letters of Recommendation, if applicable.",
            "Passport size photographs, if required.",
            "Proof of payment of application fee.",
            "Additional documents for study permit application."
          ]
        },
        {
          "t": "p",
          "items": [
            "If you are a student from outside the UK, check if your documents need to be certified, translated or submitted in hard copy."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\\. Amity Institute of Higher Education",
      "location": "\\. Amity Institute of Higher Education, Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Provides a full-time Executive MBA with a published duration of 16 months. The fee is MUR 130,000 for local and SADC students and US\\$3,000 for international students. The curriculum encompasses strategic management, business analytics, marketing, accounting, supply chain management, and a business research project.",
      "img": uniImg1
    },
    {
      "name": "\\. University of Mauritius (UoM)",
      "location": "\\. University of Mauritius (UoM)",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers a part-time MBA of two years with specializations in Human Capital Management, Financial Services and Marketing for the academic year 2026-2027. These are MBA options and not an Executive MBA by a specific name.",
      "img": uniImg2
    },
    {
      "name": "\\. Middlesex University Mauritius",
      "location": "\\. Middlesex University Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "It offers a general MBA and specialized streams in Finance, Marketing and Artificial Intelligence & Business Analytics. The published duration is one year full-time or two years part-time, 2026\u20132027. It\u2019s an MBA alternative related, not an Executive MBA. Students comparing **Executive MBA universities in Mauritius** should review the programme structure, professional experience requirements, fees and recognition before selecting an institution.",
      "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Executive MBA in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Executive MBA in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Executive MBA in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ExecutiveMBAMauritius() {
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
      seoPath="/study-abroad/mauritius/executive-mba"
    />
  );
}
