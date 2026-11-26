import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/BusinessManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/BusinessManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/BusinessManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/BusinessManagement/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/BusinessManagement/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/BusinessManagement/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/BusinessManagement/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/business-management.json";

const page = {
  "name": "Business Management",
  "country": "Mauritius",
  "slug": "business-management",
  "title": "Business Management in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Business Management in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Business Management in Mauritius, Business Management in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Business Management Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Business Management in Mauritius for Indian Students",
  "heroParas": [
    "Study Business Management in Mauritius, acquiring comprehensive expertise across organizational strategy, financial analysis, operational leadership, and corporate governance. International students master real-world business acumen in a politically stable, regional financial hub connecting African and Asian commercial markets."
  ],
  "overview": [
    "Students can choose an undergraduate degree in Business Management and then progress to a postgraduate qualification such as an MSc in Management, Master of Business Administration (MBA), or Executive MBA. The best option depends on academic background, career goals, budget, and preferred study format. Students planning to **study Business Management in Mauritius** can compare the available programmes and choose a qualification that matches their future career plans. **Edu-Hawk Worldwide** helps students explore international education opportunities and understand the admission process."
  ],
  "level": "Bachelor & Master of Business Management",
  "crumb": "Business Management",
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
      "title": "Why Study Business Management in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Mauritius is an option for students seeking business education in a multicultural environment with links to African, Asian, and international markets. **Business Management in Mauritius for Indian Students** offers different academic pathways, including undergraduate degrees, postgraduate management qualifications and MBA programmes."
          ]
        },
        {
          "t": "ul",
          "items": [
            "**International learning environment:** Study alongside students from different backgrounds and gain exposure to global business perspectives.",
            "**Career-focused curriculum:** Business programmes commonly cover marketing, finance, human resources, operations, leadership, and strategy.",
            "**Multiple study pathways:** Choose a bachelor\u2019s degree, postgraduate management qualification, MBA, or executive-level programme.",
            "**Entrepreneurial development:** Build skills relevant to launching and managing a business.",
            "**Flexible progression:** Some institutions offer part-time or extended-duration options, depending on the programme.",
            "**Career versatility:** Business management graduates can pursue opportunities across industries, including finance, retail, consulting, hospitality, technology, and logistics."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Business Management Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can select from a range of undergraduate and postgraduate **Business Management Courses in Mauritius**. These programmes provide options for students interested in business administration, leadership, finance, marketing and management."
          ]
        },
        {
          "t": "ul",
          "items": [
            "BA (Hons) Business Management",
            "BSc (Hons) Business Management",
            "BA (Hons) Business Management with Marketing",
            "BSc (Hons) Business Management with Specialisation in Financial Services",
            "BSc (Hons) Business Management with Specialisation in Financial Risk Management",
            "BSc (Hons) International Business Management"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MSc Management",
            "Master of Business Administration (MBA)",
            "Executive Master of Business Administration (EMBA)",
            "MBA with specialised pathways, where available",
            "Other postgraduate management qualifications offered by individual institutions"
          ]
        },
        {
          "t": "p",
          "items": [
            "Programme names, entry requirements, teaching modes, and availability can change between intakes. Applicants should verify the current course details directly with their chosen institution. Students comparing **Business Management Courses in Mauritius** should also consider programme duration, specialisations and study format before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Business Management in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Business Management programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "\\. University of Mauritius",
          "location": "\\. University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers BSc (Hons) Business Management, International Business Management, Business Management with Finance, and an MBA. The listed 2026\u201327 undergraduate business degrees generally take three years full-time, while the MBA is listed as a two-year part-time programme.",
          "img": uniImg1
        },
        {
          "name": "\\. Middlesex University Mauritius",
          "location": "\\. Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a three-year BA (Hons) Business Management and a one-year full-time or two-year part-time MSc Management. Its published 2026\u201327 international fees are \u00a35,800 for the bachelor\u2019s degree and \u00a37,420 for the MSc Management.",
          "img": uniImg2
        },
        {
          "name": "\\. Open University of Mauritius",
          "location": "\\. Open University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a BSc (Hons) Business Management with a minimum duration of three years and a maximum of six years. It may suit students looking for a more flexible study schedule. When comparing **Business Management Universities in Mauritius**, students should review the programme structure, tuition fees, academic recognition and admission requirements. **Edu-Hawk Worldwide** can help students understand the available university options and international admission process.",
          "img": uniImg3
        }
      ],
      "unis_data": [
        {
          "name": "\\. University of Mauritius",
          "location": "\\. University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers BSc (Hons) Business Management, International Business Management, Business Management with Finance, and an MBA. The listed 2026\u201327 undergraduate business degrees generally take three years full-time, while the MBA is listed as a two-year part-time programme.",
          "img": uniImg1
        },
        {
          "name": "\\. Middlesex University Mauritius",
          "location": "\\. Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a three-year BA (Hons) Business Management and a one-year full-time or two-year part-time MSc Management. Its published 2026\u201327 international fees are \u00a35,800 for the bachelor\u2019s degree and \u00a37,420 for the MSc Management.",
          "img": uniImg2
        },
        {
          "name": "\\. Open University of Mauritius",
          "location": "\\. Open University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a BSc (Hons) Business Management with a minimum duration of three years and a maximum of six years. It may suit students looking for a more flexible study schedule. When comparing **Business Management Universities in Mauritius**, students should review the programme structure, tuition fees, academic recognition and admission requirements. **Edu-Hawk Worldwide** can help students understand the available university options and international admission process.",
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
      "title": "Business Management Eligibility in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Business Management Eligibility in Mauritius** varies by university and programme. Typical requirements include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of secondary education equivalent to the Mauritian Higher School Certificate (HSC).",
            "Required academic grades or A-level qualifications, depending on the institution.",
            "Proof of English-language proficiency if required.",
            "Meeting any programme-specific admission conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Middlesex University Mauritius lists 88 UCAS points for its BA (Hons) Business Management, while Rushmore Business School lists A-level/HSC-equivalent routes."
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognised bachelor\u2019s degree, usually in business, management, or a related field for specialist programmes.",
            "Relevant work experience may be expected or preferred for certain MBA routes.",
            "English-language evidence if required.",
            "Additional documents or an interview if requested by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants should check whether their prior degree meets the specific programme\u2019s entry criteria before submitting an application. Students planning **Business Management in Mauritius for Indian Students** should confirm the entry requirements applicable to international applicants."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students applying to a Business Management programme in Mauritius may need to provide:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic transcripts and certificates.",
            "Proof of identity and passport details for international applications.",
            "English-language test results, if applicable.",
            "A CV or r\u00e9sum\u00e9 for postgraduate applications where requested.",
            "A personal statement or statement of purpose, if required.",
            "References or recommendation letters, if requested.",
            "Evidence of relevant employment for programmes that require professional experience."
          ]
        },
        {
          "t": "p",
          "items": [
            "The university may request certified copies, official translations, or additional documentation during the admission process. Check the current requirements for the chosen intake.",
            "Understanding the admission requirements is an important step for students who want to **study Business Management in Mauritius**. **Edu-Hawk Worldwide** can assist students in understanding application requirements and preparing for the admission process."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Business Management in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition depends on the institution, qualification, and whether the fee is charged annually or for the complete programme. **Business Management Fees in Mauritius** differ across universities and qualifications, so students should compare the published fee structures before selecting a programme."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and programme",
            "Published tuition fee",
            "Approximate INR equivalent"
          ],
          "rows": [
            [
              "Middlesex \u2014 BA (Hons) Business Management, 3 years",
              "\u00a35,800",
              "\u20b96.7 lakh"
            ],
            [
              "Middlesex \u2014 MSc Management, 1 year full-time",
              "\u00a37,420",
              "\u20b98.6 lakh"
            ],
            [
              "Rushmore \u2014 BA (Hons) Business Management",
              "US\\$7,500 per year",
              "\u20b96.5 lakh per year"
            ],
            [
              "Open University \u2014 BSc (Hons) Business Management, international non-SADC fee",
              "US\\$6,840 total",
              "\u20b95.9 lakh total"
            ],
            [
              "Amity \u2014 MBA, listed international full-programme fee",
              "US\\$3,000",
              "\u20b92.6 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Published fees are taken from institutional pages; fee structures and payment schedules differ.",
            "INR figures are indicative conversions, using approximately \u00a31 \\= \u20b9116 and US\\$1 \\= \u20b987. Exchange rates change, and the final amount may include administrative charges or other compulsory fees.",
            "In addition to tuition, students should budget for accommodation, meals, transport, phone and internet, study materials, insurance, and personal expenses. A practical preliminary budget may be around MUR 15,000\u201330,000 per month (approximately \u20b930,000\u2013\u20b960,000), depending on accommodation and lifestyle. This is a planning estimate, not a guaranteed official minimum; confirm housing costs and visa-related financial requirements before travelling.",
            "Students comparing **Business Management Fees in Mauritius** should calculate tuition and living expenses together to prepare a realistic study budget."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "The usual application process for **Business Management Courses in Mauritius** is:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose a course:** Compare bachelor\u2019s degrees, MSc Management programmes, MBAs, and executive qualifications.",
            "**Check eligibility:** Confirm academic requirements, English-language conditions, duration, and delivery mode.",
            "**Prepare documents:** Collect transcripts, certificates, passport details, and any required supporting documents.",
            "**Submit an application:** Apply through the university\u2019s official website or admissions office.",
            "**Receive an admission decision:** The institution may request additional documents or clarification.",
            "**Confirm the offer:** Review tuition fees, payment deadlines, refund conditions, and enrolment requirements.",
            "**Arrange travel and study permission:** Follow the applicable student-visa or study-permit procedure and arrange accommodation.",
            "**Complete enrolment:** Pay the required amount and follow the university\u2019s registration instructions."
          ]
        },
        {
          "t": "p",
          "items": [
            "International applicants should begin early enough to allow for document checks, visa or permit formalities, and accommodation arrangements. Students planning to **study Business Management in Mauritius** should follow the latest instructions provided by their selected university."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor\u2019s degree in Business Management, students can consider:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MBA or Executive MBA",
            "MSc Management",
            "MSc International Business Management",
            "Master\u2019s in Marketing or Human Resource Management",
            "Master\u2019s in Finance or Investment",
            "Postgraduate qualifications in project management, entrepreneurship, or supply chain management"
          ]
        },
        {
          "t": "p",
          "items": [
            "The most suitable pathway depends on the student\u2019s previous education and career goals. For example, students aiming for general management may consider an MBA, while those seeking specialist expertise could explore finance, marketing, human resources, or international business.",
            "Students who pursue **Business Management in Mauritius for Indian Students** can also consider further specialisation based on their professional interests and long-term career plans."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Business Management",
      "groups": [
        {
          "t": "p",
          "items": [
            "A Business Management qualification can prepare graduates for entry-level, specialist, and management-track roles. Actual job eligibility depends on experience, skills, employer requirements, and local work-permit rules.",
            "Potential career paths include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business development executive",
            "Management trainee",
            "Marketing executive or marketing manager",
            "Human resources executive",
            "Operations coordinator or operations manager",
            "Sales and account management professional",
            "Project coordinator",
            "Business analyst, with relevant analytical skills",
            "Entrepreneur or small-business owner",
            "Management consultant, with suitable experience"
          ]
        },
        {
          "t": "p",
          "items": [
            "A bachelor\u2019s degree can provide a foundation for starting a career, while postgraduate study and professional experience may help graduates progress into more specialised or senior roles."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants should prepare the following documents, subject to the institution\u2019s checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport for international students.",
            "Secondary-school certificates and transcripts for bachelor\u2019s applications.",
            "Bachelor\u2019s degree certificate and transcripts for master\u2019s applications.",
            "English-language proficiency results, if required.",
            "Updated CV or r\u00e9sum\u00e9 for postgraduate applications, where applicable.",
            "Statement of purpose or personal statement, if requested.",
            "Recommendation letters, if requested.",
            "Passport-sized photographs, if required.",
            "Proof of payment of application or registration fees.",
            "Any additional documents required for admission and study-permit processing."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always follow the latest checklist issued by the selected university rather than relying on a general list."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\\. University of Mauritius",
      "location": "\\. University of Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers BSc (Hons) Business Management, International Business Management, Business Management with Finance, and an MBA. The listed 2026\u201327 undergraduate business degrees generally take three years full-time, while the MBA is listed as a two-year part-time programme.",
      "img": uniImg1
    },
    {
      "name": "\\. Middlesex University Mauritius",
      "location": "\\. Middlesex University Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers a three-year BA (Hons) Business Management and a one-year full-time or two-year part-time MSc Management. Its published 2026\u201327 international fees are \u00a35,800 for the bachelor\u2019s degree and \u00a37,420 for the MSc Management.",
      "img": uniImg2
    },
    {
      "name": "\\. Open University of Mauritius",
      "location": "\\. Open University of Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers a BSc (Hons) Business Management with a minimum duration of three years and a maximum of six years. It may suit students looking for a more flexible study schedule. When comparing **Business Management Universities in Mauritius**, students should review the programme structure, tuition fees, academic recognition and admission requirements. **Edu-Hawk Worldwide** can help students understand the available university options and international admission process.",
      "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Business Management in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Business Management in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Business Management in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function BusinessManagementMauritius() {
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
      seoPath="/study-abroad/mauritius/business-management"
    />
  );
}
