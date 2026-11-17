import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/MBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/MBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/MBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/MBA/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/MBA/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/MBA/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/MBA/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/mba.json";

const page = {
  "name": "MBA",
  "country": "Mauritius",
  "slug": "mba",
  "title": "MBA in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study MBA in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study MBA in Mauritius, MBA in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius MBA Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "MBA in Mauritius for Indian Students",
  "heroParas": [
    "An **MBA in Mauritius for Indian Students** is a postgraduate business qualification for graduates and professionals who wish to improve their leadership, strategic thinking, financial management and decision making skills. Students can opt for general MBA programs or specializations in marketing, finance, human resources, international business and business analytics. Choosing to **Study MBA in Mauritius** gives students an opportunity to explore business education in an international environment while developing management and leadership skills."
  ],
  "overview": [
    "Some of the institutions offering MBA in Mauritius are Middlesex University Mauritius, The Open University of Mauritius, University of Mauritius, and Amity Institute of Higher Education. The length of the program, tuition fees, the way the courses are delivered and entry requirements vary, so students should compare each before applying. Students exploring an **MBA in Mauritius for Indian Students** should also compare the course structure, recognition, specialization options and international student fees before selecting a university."
  ],
  "level": "Master of Business Administration",
  "crumb": "MBA",
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
      "title": "Why study MBA in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "**International business exposure:** Understand business practice in a multicultural environment linked to regional and global markets.",
            "**Leadership development:** Develop skills in strategic planning, organizational behavior, team management and business decision making.",
            "**Specialization options:** Students can choose from specialization options such as finance, marketing, human resources or business analytics, depending on the institution.",
            "**Career progression:** An MBA can aid progression to management and leadership roles, but employment outcomes are dependent on experience and the job market.",
            "**Different study formats:** Some universities have part-time programs and some have full-time or online options.",
            "**Professional Networking:** Learning with people from different industries can be a chance to exchange ideas and build professional relationships.",
            "The value of an MBA depends on the curriculum, the accreditation and recognition of the qualification, work experience and the extent to which the program fits a student\u2019s career goals. For Indian graduates considering an **MBA in Mauritius for Indian Students**, these factors can help determine whether the qualification suits their professional plans. Students who want to **Study MBA in Mauritius** should compare the available programmes and their learning formats."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "MBA Programs in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**MBA Programs in Mauritius** are available in general management and selected specialist areas. Students can compare general management programs to specialized MBA courses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "MBA programs",
            "Key focus areas"
          ],
          "rows": [
            [
              "General M.B.A.",
              "Strategy, Finance, Marketing, Operation, Leadership"
            ],
            [
              "MBA Finance",
              "Financial Strategy, Risk, Corporate Finance"
            ],
            [
              "MBA in Marketing",
              "Sales and consumer behavior, marketing strategy"
            ],
            [
              "MBA in Human Capital Management (HCM)",
              "Human resources, talent development, leadership of organizations"
            ],
            [
              "MBA International Business",
              "International strategy, cross-border business, global markets"
            ],
            [
              "MBA in Business Analytics",
              "Business performance, data-driven decisions, analytics"
            ],
            [
              "EMBA (Executive MBA)",
              "Leadership and management development for experienced professionals"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Not all institutions offer specializations. For instance, the University of Mauritius lists its MBA and specialist options in Human Capital Management, Financial Services and Marketing for the academic year 2026-27. Amity also has an MBA and Executive MBA, with specialized MBA tracks online.",
            "Students comparing **MBA Programs in Mauritius** should check whether their preferred specialization is available in the chosen intake. The duration, delivery format, tuition fees and admission requirements can differ between institutions. Understanding these differences helps Indian students choose suitable **MBA Programs in Mauritius** according to their academic background and career objectives."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for MBA in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited MBA programmes, modern campuses, and international student support.",
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
          "img": uniImg3
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg1
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg2
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
          "img": uniImg3
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg1
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg2
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "MBA Eligibility in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**MBA Eligibility in Mauritius** differs between universities. Before applying, applicants should check the individual program page.",
            "Typical requirements are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized degree (bachelor's) from an accredited institution.",
            "A good academic record with a minimum grade or GPA as required by the university.",
            "Appropriate professional experience for those programs that require it.",
            "English language proficiency, if applicable.",
            "Other qualifications, an interview or GMAT score if the school you choose requires it."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, the Open University of Mauritius normally requires a recognized undergraduate degree with a minimum of second class results, 50% or GPA of 2.5/4 or equivalent. It also considers some applicants with ordinary or lower class degrees where they have relevant work experience. Applicants should check the specific rules for the course, as Middlesex University Mauritius may require management level experience for its MBA.",
            "Understanding **MBA Eligibility in Mauritius** is important for Indian applicants because academic qualifications and professional experience requirements may vary. Students planning to **Study MBA in Mauritius** should check the university's eligibility criteria before preparing their applications."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Criteria for admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students applying for an **MBA in Mauritius for Indian Students** may be required to provide:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Duly filled application form.",
            "Degree certificate and academic transcript of Bachelor degree.",
            "International applicants must possess a valid passport.",
            "Current CV or r\u00e9sum\u00e9 with employment history.",
            "Personal statement or statement of purpose, if applicable.",
            "References, academic or from your employer if needed.",
            "Results of English language test, where applicable.",
            "GMAT scores or other supporting qualifications, if required by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities may need certified copies of documents or additional information to assess overseas qualifications. See current admissions checklist for respective intake.",
            "Students should carefully review the **MBA Admission in Mauritius** requirements of their selected institution. Requirements may differ according to the programme, previous qualification, work experience and applicant category."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of MBA in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The overall cost will depend on the institution, length of the course, mode of study, accommodation and lifestyle. Students planning to **Study MBA in Mauritius** should compare the total programme fees as well as their expected monthly living expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Program and university",
            "Tuition announced",
            "Approximate INR\\*"
          ],
          "rows": [
            [
              "Middlesex University Mauritius MBA international fee",
              "\u00a310,300",
              "\u20b911.95 lakh"
            ],
            [
              "Open University of Mauritius \u2013 MBA General, international (non-SADC)",
              "US\\$ 6,845",
              "\u20b95.95 lakh"
            ],
            [
              "Amity Institute of Higher Education \u2013 International Fees, MBA",
              "US\\$ 3,000",
              "\u20b92.61 lakh"
            ],
            [
              "University of Mauritius \u2013 MBA",
              "Check current fee with institute",
              "Not estimated"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "INR conversions are approximate, using \u00a31 \u2248 Rs 116 and US\\$1 \u2248 Rs 87\\. Fees are based on published program information at time of writing and are subject to change. If there are any other administrative, registration, examination or other fees, please confirm.",
            "Students should budget for separate costs for accommodation, food, transport, utilities, internet, study materials and personal expenses. Preliminary planning estimate is MUR 15,000\u201330,000 per month, around \u20b930,000\u2013\u20b960,000. Actual costs vary depending on lifestyle and accommodation. Before you travel, check what accommodation is available and what the financial requirements are.",
            "The **Cost of MBA in Mauritius** should be evaluated by considering both tuition fees and living expenses. Students comparing the **Cost of MBA in Mauritius** across universities should also check payment schedules, additional charges and the total duration of their selected programme."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "MBA Admission Process in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **MBA Admission in Mauritius** process may vary between universities, but students can generally follow these steps:",
            "**Research MBA programs:** Compare universities, specializations, duration, fees, and study format.",
            "**Check eligibility:** Review academic requirements, work experience and English language requirements.",
            "**Prepare documents:** Collect degree certificates, transcripts, passport details and any supporting documents.",
            "**Submit application:** Apply through the official university admissions website.",
            "**Answer admissions inquiries:** Submit any other documents or information we ask for.",
            "**Get the offer and consider it:** See tuition, deadlines for payment, conditions and refund policy.",
            "**Arrange study leave:** Undergo the appropriate student-visa or study-permit procedure for Mauritius.",
            "**Book Accommodation and Travel:** Once you have confirmed your admission and travel needs, book your arrangements.",
            "**Total enrollment:** Follow the university\u2019s registration instructions and be ready to start classes.",
            "International students should apply in good time to allow for qualification checks, payment arrangements and immigration formalities. Applicants pursuing an **MBA in Mauritius for Indian Students** should also verify the applicable international fee category and student-permit requirements before confirming their admission."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "More ways to study after an MBA",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may pursue further qualifications after completing an MBA, depending on their career plans and these include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Doctorate of Business Administration (DBA)",
            "PhD in Business Administration or Management",
            "Specialist postgraduate qualifications in finance, marketing or personnel management",
            "Professional certification in project management, finance, analytics or HR"
          ]
        },
        {
          "t": "p",
          "items": [
            "Generally a doctoral program is more relevant for people interested in advanced research, academic careers or senior strategic roles. Professional certifications can help you gain expertise in a specific industry."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Opportunities Having an MBA in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "An MBA can help you get to higher levels in the business and management career path. But you will find a job based on your prior experience, professional skills, industry demand and work authorization.",
            "Possible roles include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Manager, business development",
            "Operations manager",
            "Marketing Officer",
            "HR Manager",
            "Business Analyst/Financial Planner",
            "Manager, projects",
            "Business consultant",
            "Planning & Strategy Executive",
            "Sales Manager",
            "Business Owner or Entrepreneur"
          ]
        },
        {
          "t": "p",
          "items": [
            "Graduates can seek opportunities in finance, tourism and hospitality, retail, logistics, technology, consulting and other sectors. An MBA does not guarantee a job title or salary, relevant experience and demonstrable skills still count.",
            "An **MBA in Mauritius for Indian Students** can provide advanced business knowledge and help graduates prepare for different management career paths. However, career outcomes depend on professional experience, specialisation, industry demand and applicable work authorization."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required for MBA Admissions",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare the following documents (as per the university\u2019s specific checklist):"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A valid passport.",
            "Bachelor's Degree Certificate.",
            "Academic Records and Transcripts of Grades.",
            "Current CV or r\u00e9sum\u00e9.",
            "Evidence of appropriate work experience (if applicable).",
            "Results of proficiency in the English language, if applicable.",
            "Personal statement or statement of purpose, if required.",
            "Letters of recommendation (if required).",
            "GMAT score or other additional qualifications as applicable.",
            "Passport photographs, if required.",
            "Proof of payment of the application or registration fees."
          ]
        },
        {
          "t": "p",
          "items": [
            "International applicants may also require documents for student-permit processing, proof of admission and evidence of sufficient funds for tuition and living expenses."
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
      "img": uniImg3
    },
    {
      "name": "Middlesex University Mauritius",
      "location": "Flic en Flac, Mauritius",
      "fee": "MUR 250,000 \u2013 450,000 / Year",
      "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
      "img": uniImg1
    },
    {
      "name": "Curtin Mauritius",
      "location": "Moka, Mauritius",
      "fee": "MUR 280,000 \u2013 420,000 / Year",
      "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
      "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for MBA in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for MBA in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for MBA in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function MBAMauritius() {
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
      seoPath="/study-abroad/mauritius/mba"
    />
  );
}
