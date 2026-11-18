import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/Physiotherapy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/Physiotherapy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/Physiotherapy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/Physiotherapy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/Physiotherapy/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/Physiotherapy/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/Physiotherapy/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/physiotherapy.json";

const page = {
  "name": "Physiotherapy",
  "country": "Mauritius",
  "slug": "physiotherapy",
  "title": "Physiotherapy in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Physiotherapy in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Physiotherapy in Mauritius, Physiotherapy in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Physiotherapy Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Physiotherapy in Mauritius for Indian Students",
  "heroParas": [
    "**Physiotherapy in Mauritius for Indian Students** is a healthcare study pathway for students interested in rehabilitation, movement science, injury recovery and improving patients\u2019 mobility and quality of life. The country has a university-based physiotherapy programme historically documented by the University of Mauritius, alongside training in physiotherapy assistance. Students planning to **Study Physiotherapy in Mauritius** should understand the available qualifications and their professional outcomes."
  ],
  "overview": [
    "The Allied Health Professionals Council (AHPC) of Mauritius regulates physiotherapists and publishes professional registration requirements. Before applying, students should confirm the current course intake, fees, clinical placement arrangements and recognition of the qualification. **Edu-Hawk Worldwide** encourages students to verify these details before selecting a programme."
  ],
  "level": "BPT & MPT Physiotherapy",
  "crumb": "MBBS Abroad",
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
      "title": "Why Study Physiotherapy in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Practical healthcare education: Physiotherapy training combines academic study with supervised clinical experience.",
            "Rehabilitation skills: Students learn to assess movement problems and support recovery after injuries, illness and surgery.",
            "Multicultural environment: Mauritius offers exposure to diverse communities and healthcare needs.",
            "Career flexibility: Qualified physiotherapists may work in hospitals, rehabilitation centres, sports settings and private clinics, subject to registration.",
            "Further study opportunities: Graduates may pursue postgraduate education and specialist training.",
            "The University of Mauritius\u2019 published programme documentation describes physiotherapy as a combination of assessment, therapeutic movement, physical treatment techniques and clinical practice. However, applicants should verify the current programme status rather than relying only on older course documents. This is an important step for students considering **Physiotherapy in Mauritius for Indian Students**."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Physiotherapy Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Physiotherapy-related education can include professional degree programmes, assistant-level qualifications and postgraduate study. Students who want to **Study Physiotherapy in Mauritius** should understand the difference between professional degree programmes and assistant-level training."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Main focus"
          ],
          "rows": [
            [
              "BSc (Hons) Physiotherapy",
              "Anatomy, physiology, movement science, rehabilitation and supervised clinical practice"
            ],
            [
              "Physiotherapy Assisting",
              "Supporting rehabilitation services and working under appropriate professional supervision"
            ],
            [
              "MSc or postgraduate study",
              "Advanced clinical knowledge, research and specialist development, depending on programme availability"
            ],
            [
              "Rehabilitation-related training",
              "Functional recovery, mobility support and rehabilitation principles"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The University of Mauritius has published a BSc (Hons) Physiotherapy programme structure describing a four-year, full-time professional course. This is evidence of a documented programme, not confirmation that applications are currently open for the 2026\u201327 intake.",
            "The Mauritius Institute of Health lists a National Certificate (Level 5\\) in Physiotherapy Assisting. This is an assistant-level qualification and should not be confused with a professional physiotherapy degree."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities and Institutions for Physiotherapy in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Physiotherapy programmes, modern campuses, and international student support.",
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
      "title": "Eligibility to Study Physiotherapy in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Physiotherapy Eligibility in Mauritius** depends on the institution and programme. Applicants to a professional undergraduate degree should generally prepare to demonstrate:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of secondary education equivalent to the required pre-university qualification.",
            "Strong academic performance in relevant science subjects.",
            "Biology, Chemistry, Physics or Mathematics qualifications, where specified.",
            "English-language proficiency, if required.",
            "Valid identification and academic documents.",
            "Any additional health or practical-training requirements set by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants to postgraduate or advanced programmes may need a recognised physiotherapy degree and relevant professional experience.",
            "These are general preparation guidelines. Obtain the exact eligibility criteria for the intended intake directly from the institution. **Edu-Hawk Worldwide** recommends checking the specific academic requirements before beginning the application process."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Physiotherapy in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Physiotherapy Admission Requirements in Mauritius** should be confirmed with the institution before submitting an application. Check the following:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The minimum academic marks and required subjects.",
            "Whether the programme is a professional degree or an assistant-level certificate.",
            "English-language requirements.",
            "The amount and location of supervised clinical training.",
            "Eligibility for international applicants.",
            "The current accreditation and professional recognition status.",
            "Whether additional registration or licensing requirements apply after graduation."
          ]
        },
        {
          "t": "p",
          "items": [
            "For the University of Mauritius, applicants can check the official admissions website. Its published 2026\u201327 admissions page indicates that undergraduate applications are closed at the time of the available notice, so students should check for future application rounds."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Physiotherapy in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Physiotherapy Fees in Mauritius** depend on the institution, programme and student status. A verified current international-student fee for the physiotherapy degree could not be established from the available official information. Avoid relying on an estimated tuition figure without confirmation."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "What to confirm"
          ],
          "rows": [
            [
              "Tuition fees",
              "Annual and full-course fees"
            ],
            [
              "Application and registration",
              "Application charges and initial deposits"
            ],
            [
              "Accommodation",
              "University housing or private rent"
            ],
            [
              "Food and transport",
              "Monthly living expenses"
            ],
            [
              "Clinical training",
              "Uniforms, equipment and placement-related expenses"
            ],
            [
              "Insurance and travel",
              "Health cover, flights and student-entry costs"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Request an itemised fee schedule in Mauritian rupees (MUR). Convert the total to Indian rupees (INR) using the current exchange rate when comparing options. Also confirm the refund policy and whether fees may increase during the programme. Students comparing **Physiotherapy Fees in Mauritius** should consider all these expenses before making a decision."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Physiotherapy in Mauritius",
      "groups": [
        {
          "t": "ul",
          "items": [
            "**Choose your qualification:** Decide whether you want a professional physiotherapy degree or a physiotherapy-assisting certificate.",
            "**Verify the programme:** Check the institution\u2019s official course catalogue and current intake information.",
            "**Check recognition:** Consult the AHPC regarding professional registration requirements for physiotherapists.",
            "**Confirm eligibility:** Submit your academic details to the admissions office for assessment.",
            "**Prepare documents:** Arrange certificates, transcripts, passport details and any required language evidence.",
            "**Submit your application:** Follow the institution\u2019s application process and deadlines.",
            "**Review the offer:** Confirm tuition, clinical placements, qualification awarded and registration pathway before accepting."
          ]
        },
        {
          "t": "p",
          "items": [
            "For **Physiotherapy in Mauritius for Indian Students**, checking the programme's professional recognition and registration pathway is an important step before accepting an admission offer."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options After Physiotherapy",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing an appropriate professional qualification, graduates may consider further study in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Musculoskeletal physiotherapy",
            "Sports physiotherapy",
            "Neurological rehabilitation",
            "Paediatric physiotherapy",
            "Cardiopulmonary physiotherapy",
            "Geriatric rehabilitation",
            "Orthopaedic rehabilitation",
            "Public health and rehabilitation research",
            "Healthcare management"
          ]
        },
        {
          "t": "p",
          "items": [
            "Availability and entry requirements vary by institution. Some specialist pathways require clinical experience or professional registration before admission."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Physiotherapy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Qualified physiotherapists may explore career opportunities in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Public and private hospitals",
            "Rehabilitation centres",
            "Orthopaedic and neurological clinics",
            "Sports medicine and fitness settings",
            "Elder-care facilities",
            "Community health services",
            "Home-based rehabilitation",
            "Research and education",
            "Private physiotherapy practice, where permitted"
          ]
        },
        {
          "t": "p",
          "items": [
            "The University of Mauritius\u2019 published programme documentation identifies employment opportunities across public and private healthcare, sports, schools, NGOs and private practice. Actual employment depends on vacancies, qualification recognition and professional registration."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required to Apply",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare the following documents, subject to the institution\u2019s official checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 and Class 12 certificates and mark sheets.",
            "Academic transcripts.",
            "English-language test results, if required.",
            "Passport-size photographs.",
            "Previous degree certificate for postgraduate applications.",
            "Relevant professional registration or experience evidence, if required.",
            "Medical or vaccination documents, where requested.",
            "Completed application form and supporting documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "For professional practice in Mauritius, consult the AHPC\u2019s official registration information for the applicable requirements for foreign-trained physiotherapists."
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
      "q": "Can Indian students apply for Physiotherapy in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Physiotherapy in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Physiotherapy in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function PhysiotherapyMauritius() {
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
      seoPath="/study-abroad/mauritius/physiotherapy"
    />
  );
}
