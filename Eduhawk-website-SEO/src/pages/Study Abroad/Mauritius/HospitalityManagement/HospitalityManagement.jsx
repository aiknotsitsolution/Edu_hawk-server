import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/HospitalityManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/HospitalityManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/HospitalityManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/HospitalityManagement/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/HospitalityManagement/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/HospitalityManagement/image2.png";
import cmsData from "../../../../data/study_abroad/mauritius/hospitality-management.json";

const page = {
  "name": "Hospitality Management",
  "country": "Mauritius",
  "slug": "hospitality-management",
  "title": "Hospitality Management in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Hospitality Management in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Hospitality Management in Mauritius, Hospitality Management in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Hospitality Management Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Hospitality Management in Mauritius for Indian Students",
  "heroParas": [
    "For students interested in hotel operations, tourism, resort management, food and beverage services and event planning, Mauritius is a destination to consider. Its hospitality-related programs are able to teach students practical service skills and knowledge of business management. Studying **Hospitality Management in Mauritius** can help students explore undergraduate and postgraduate opportunities in the hospitality and tourism sector."
  ],
  "overview": [
    "The University of Mauritius will be offering the BSc (Hons) Tourism, Hospitality and Events Management, which is listed as a 3.5 year full time degree and the MSc Tourism and Hospitality Management, which is listed as a two year part time program for the academic year 2026-2027."
  ],
  "level": "Bachelor & Master of Hospitality Management",
  "crumb": "Hospitality Management",
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
      "title": "Why Choose Hospitality Management In Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tourism-based learning: Learn about hospitality and tourism operations in a destination known for its visitor economy on a global scale.",
            "Career focused subjects: Learn about hotel administration, guest services, food & beverage management and event operations.",
            "Undergraduate and postgraduate pathways: Depending on entry criteria, choose a bachelor\u2019s degree post-secondary education or master\u2019s degree post-graduation. Students can explore a **Bachelor's in Hospitality Management in Mauritius** or a **Master's in Hospitality Management in Mauritius** according to their academic qualifications.",
            "Hands-on experience: Some hospitality programs offer industrial training so students can learn how a workplace operates.",
            "Wide career opportunities: Hospitality credentials can open doors to jobs in hotels, resorts, restaurants, travel agencies, events and related services.",
            "The Open University of Mauritius, for example, offers a BSc (Hons) in Hotel Management and Catering Technologies that includes subjects such as accommodation operations, food and beverage management, front-office administration and industrial training."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Hospitality Management Courses Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on their qualifications and career goals, students can consider the following programs. These **Hospitality Management courses in Mauritius** include undergraduate and postgraduate options."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Program",
            "Level of study",
            "Time period"
          ],
          "rows": [
            [
              "BSc (Hons) Tourism, Hospitality and Events Management \u2013 University of Mauritius",
              "Bachelor\u2019s",
              "3.5 years, full time"
            ],
            [
              "BSc (Hons) Hotel Management and Catering Technologies \u2014 Open University of Mauritius",
              "Bachelor\u2019s",
              "4-6 years"
            ],
            [
              "MSc Tourism & Hospitality Management \u2013 University of Mauritius",
              "Master\u2019s",
              "2 years part time"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Open University program lists a minimum of four and a maximum of six years. Confirm Duration and mode of study with institution before applying."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities in Mauritius for Hotel Management",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Hospitality Management programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "\\. Mauritius University",
          "location": "\\. Mauritius University",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "We offer a BSc (Hons) Tourism, Hospitality and Events Management and MSc Tourism and Hospitality Management. These programs provide entry into tourism, hospitality operations, management and event related careers. **2\\. University of Mauritius Open** Offers BSc (Hons) in Hotel Management and Catering Technologies. The curriculum includes hotel administration, catering, marketing, finance and hospitality operations.",
          "img": uniImg1
        }
      ],
      "unis_data": [
        {
          "name": "\\. Mauritius University",
          "location": "\\. Mauritius University",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "We offer a BSc (Hons) Tourism, Hospitality and Events Management and MSc Tourism and Hospitality Management. These programs provide entry into tourism, hospitality operations, management and event related careers. **2\\. University of Mauritius Open** Offers BSc (Hons) in Hotel Management and Catering Technologies. The curriculum includes hotel administration, catering, marketing, finance and hospitality operations.",
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
      "title": "Criteria for Eligibility",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Hospitality Management eligibility in Mauritius** varies by institution, qualification and applicant group.",
            "Secondary education completed to the level of the university\u2019s entry requirements.",
            "Academic results that meet the programme\u2019s minimum requirements.",
            "If required, proof of proficiency in English.",
            "Any other prerequisites required by the university.",
            "A recognized Bachelor\u2019s degree in hospitality, tourism, business management or a relevant field as per the requirements of the program.",
            "Graduation proof and academic transcripts.",
            "English fluency if applicable.",
            "Relevant professional experience if required by the program.",
            "Candidates should check with the university for the latest entry requirements before applying. Students interested in a **Bachelor's in Hospitality Management in Mauritius** or postgraduate study should confirm the exact eligibility conditions with their selected institution."
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
            "Students applying for **Hospitality Management in Mauritius** should take the following into account:",
            "The academic qualifications required for the selected course.",
            "Minimum academic grades or equivalent entry requirements.",
            "English language requirements for international students",
            "Whether the course is full time or part time.",
            "Specific entry requirements to the program, practical training or work experience.",
            "Requirements for admission and for immigration for international students.",
            "Meeting the general requirements does not automatically guaranty admission."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Hospitality Management Study Cost in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The overall cost will vary depending on the institution, program, nationality, accommodation and lifestyle. The table below provides a published tuition reference and indicative living cost budget."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Cost",
            "Cost in MUR",
            "Cost INR (estimated)"
          ],
          "rows": [
            [
              "Open University BSc (Hons) Hotel Management and Catering Technologies \u2014 international non-SADC tuition, total US\\$5,750",
              "equivalent",
              "\u20b95 lakh"
            ],
            [
              "Monthly living expenses",
              "MUR 15,000-30,000",
              "\u20b930,000-60,000"
            ],
            [
              "Yearly living expense",
              "MUR 180,000-360,000",
              "\u20b93.6-7.2 lakhs"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Open University of Mauritius states that the total tuition fee for the undergraduate program mentioned is US\\$5,750 for international students from outside the SADC region. This is a published fee reference only and not a confirmed fee per each hospitality program.",
            "The cost of living figures are estimates of what it might cost to live. It is not an official universal minimum. Actual costs will vary depending on rent, food, transportation, utilities, insurance and personal spending. INR figures are approximate. Exchange rates can fluctuate.",
            "Students planning **Hospitality Management in Mauritius** should compare tuition fees and living expenses separately before finalizing their study budget."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admissions Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Choose a course: Choose a bachelor\u2019s or master\u2019s program according to your qualifications and career plans.",
            "Compare schools: View curriculum, duration and study mode, entry requirements and tuition fees.",
            "Get your application ready: Gather academic transcripts, identification, and any necessary proof of English language proficiency.",
            "Apply to the university: Complete the official application and submit the required documentation and fees.",
            "Receive the admission decision Follow the university\u2019s instructions to accept your place and pay any deposit.",
            "Travel & Accommodation Arrangements: Once you have been admitted, you will complete the relevant student immigration formalities and organize your stay in Mauritius.",
            "Students applying for **Hospitality Management admission in Mauritius** should follow the official application process and check the latest deadlines and documentation requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further study opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "After obtaining a hospitality management bachelor\u2019s degree, students may consider:",
            "MSc in Tourism and Hospitality Management.",
            "Master in Tourism Management.",
            "MBA with hospitality or service-management concentration, if available.",
            "Post-Graduate in Event Management.",
            "Business Management MBA.",
            "Postgraduate qualifications in hotel operations, tourism planning or sustainable tourism.",
            "With a relevant master\u2019s degree, graduates can go on to research degrees such as an MPhil or PhD, provided they meet the university admission requirements.",
            "Students completing a **Bachelor's in Hospitality Management in Mauritius** may explore these postgraduate pathways according to their academic background and the admission criteria of the institution."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Openings",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates in Hospitality Management can find opportunities in hotels, resorts, restaurants, travel companies, event businesses and tourism related organizations.",
            "Possible careers are:",
            "Operations Executive (Hotel)",
            "Front Office Supervisor",
            "Guest Relations Executive",
            "Food and Beverage Supervisor \\-",
            "Supervisor, Restaurant",
            "Housekeeping In-charge, Resort Operations In-charge, Event Management Officer, Tourism Operations Officer",
            "Sales & Marketing Hospitality, Executive",
            "Assistant Revenue Manager",
            "Hotel / Resort Manager with relevant experience",
            "Work experience, communication skills, customer service ability and knowledge of hospitality software can improve career possibilities. Work opportunities and work permit eligibility differ by country and employer."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents",
      "groups": [
        {
          "t": "p",
          "items": [
            "The exact checklist varies from university to university, but applicants may be required to submit:",
            "Good passport.",
            "High school diplomas and undergraduate transcripts for admission.",
            "Bachelor degree certificate and transcripts for masters admission.",
            "English language test results, where applicable.",
            "Updated CV or resume where requested.",
            "Statement of purpose / Letter of motivation (if applicable)",
            "Passport size photo(s).",
            "College application form completed.",
            "Proof of payment of the application fee, if applicable.",
            "Additional documents requested by the admissions office.",
            "Documentation of student visa or residence-permit at the proper stage.",
            "Make sure you keep copies of all your scanned documents, and also provide certified translations if required by the university."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\\. Mauritius University",
      "location": "\\. Mauritius University",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "We offer a BSc (Hons) Tourism, Hospitality and Events Management and MSc Tourism and Hospitality Management. These programs provide entry into tourism, hospitality operations, management and event related careers. **2\\. University of Mauritius Open** Offers BSc (Hons) in Hotel Management and Catering Technologies. The curriculum includes hotel administration, catering, marketing, finance and hospitality operations.",
      "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Hospitality Management in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Hospitality Management in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Hospitality Management in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function HospitalityManagementMauritius() {
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
      seoPath="/study-abroad/mauritius/hospitality-management"
    />
  );
}
