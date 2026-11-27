import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/Dentistry/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/Dentistry/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/Dentistry/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/Dentistry/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/Dentistry/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/Dentistry/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/Dentistry/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/dentistry.json";

const page = {
  "name": "Dentistry",
  "country": "Mauritius",
  "slug": "dentistry",
  "title": "Dentistry in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Dentistry in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Dentistry in Mauritius, Dentistry in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Dentistry Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Dentistry in Mauritius for Indian Students",
  "heroParas": [
    "**Dentistry in Mauritius for Indian Students** is an option that English-speaking students interested in a multicultural island country for their clinical training might want to consider. First though you need to ensure that the qualification will be recognized in the country you intend to practise in and that the institution you want to study at is currently offering an approved dental degree."
  ],
  "overview": [
    "The Dental Council of Mauritius regulates dental practice and is in charge of recognition and equivalence of qualifications for dental registration. The official website is a must starting for eligibility and professional recognition."
  ],
  "level": "BDS / Dental Surgery",
  "crumb": "Healthcare & Dentistry",
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
      "val": "5 Years (BDS)",
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
      "title": "Why choose Dentistry in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "International environment: Mauritius is a multicultural population with a mix of local and international communities.",
            "English and French: Both are widely used in the country, but the medium of instruction and clinical training differs at different institutions.",
            "Clinical learning: Dental education consists of theoretical subjects, laboratory practice and supervised patient care.",
            "Regional exposure: Students will have the opportunity to work in a health care setting that serves a diverse population.",
            "Lifestyle: Island provides tropical climate and seaside lifestyle.",
            "Before you decide on a college, check that its dental program is approved and operating, that it has clinical facilities and that its graduates are eligible for registration where you plan to work. Students planning to **Study Dentistry in Mauritius** should verify these details before making an enrolment decision."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Dental courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Dentistry is typically studied as a professional undergraduate degree, such as a Bachelor of Dental Surgery (BDS) degree or equivalent degree in dental surgery.",
            "Some common fields of study in a dentistry degree include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Dental Physiology and Oral Anatomy",
            "Dental materials and preclinical dental science",
            "Oral Microbiology and Pathology",
            "Endodontics and Periodontology",
            "Oral & Maxillofacial Surgery",
            "Prosthodontics and orthodontics",
            "Preventive & Pediatric Dentistry",
            "Patient Management and Clinical Practice"
          ]
        },
        {
          "t": "p",
          "items": [
            "The dental degree lasts about five years (sometimes with a clinical internship). But ask the institution for the exact length and structure of the course.",
            "Note: Historical mentions of dental colleges in Mauritius may not correspond to a program that is accepting new students in 2026. Please verify current intake and approval status before paying any application or tuition fees."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Universities in Mauritius",
      "lead": "Explore leading universities in Mauritius; applicants should verify directly with the Dental Council of Mauritius and the institution whether an approved dental degree is currently offered.",
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
      "title": "Can I Study Dentistry in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements differ by institution. Students interested in **Dentistry Eligibility in Mauritius** should check the official criteria for their chosen institution. In general, applicants should be ready to provide:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Successful completion of secondary education corresponding to the required pre-university qualification.",
            "Good academic results in Biology and Chemistry and possibly Physics or Mathematics.",
            "Proof of proficiency in the English language, if applicable.",
            "A valid passport and any student-entry paperwork you require.",
            "Medical fitness paperwork, when required by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "These are general preparation considerations and are not confirmed admission criteria for a specific current Mauritian dental program. Contact the institution to get their official criteria for eligibility for the intended intake."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Requirements for Entry to Dentistry in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Dentistry Admission Requirements in Mauritius** may vary by institution and intended intake. Applicants may be asked to provide:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Secondary school transcripts and certificates.",
            "Photos and a copy of the passport.",
            "Application and supporting documents.",
            "English language test results, if required.",
            "Medical or vaccination documentation if asked.",
            "Any results of entrance tests or documents from interviews required by the College."
          ]
        },
        {
          "t": "p",
          "items": [
            "Ask for the full list of documents, deadlines and payment terms before submitting an application. Do not depend only on a verbal assurance of admission or recognition from an education agent."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Dentistry Tuition Fees in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "For students researching **Dentistry Fees in Mauritius**, it is important to confirm the complete cost directly with the institution. At this time, there is no confirmed, actively admitting dental program in Mauritius for which tuition fee is reliably verified here. It would therefore be misleading to quote a specific total cost for the course."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Cost",
            "What to Look For"
          ],
          "rows": [
            [
              "Tuition-fee",
              "annual fee, full course fee and fee increase"
            ],
            [
              "Application & Registration",
              "Non-Refundable Charges & Deposits"
            ],
            [
              "Where to Stay",
              "Hostel availability, rent and utility expenses"
            ],
            [
              "Transport and food",
              "Monthly budget for living"
            ],
            [
              "Clinical charges",
              "Instruments, Uniforms, Supplies, and Laboratory Fees"
            ],
            [
              "Travel and insurance",
              "flights and visa costs, health insurance"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Ask for a detailed fee schedule and a budget for the entire degree program, including the clinical years and the costs associated with the internship."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission to Dentistry in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "A careful application process can save you from expensive mistakes. Students should carefully review the **Dentistry Admission Requirements in Mauritius** before proceeding with an application.",
            "Look for a dental college that is open now and accepting applications.",
            "Get written confirmation of its accreditation and the degree it will award.",
            "Research the recognition and licensing rules in the country you want to work in.",
            "Check academic eligibility and prepare required documents.",
            "Application must be submitted through the official channel of the institution.",
            "Kindly refer to the official offer letter, fee schedule and refund policy.",
            "Check the offer before you arrange accommodation, insurance and student entry formalities."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Studies After Dentistry",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates holding a recognized primary dental qualification and who fulfill the relevant licensing requirements can proceed to further training in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Orthodontics & Dentofacial Orthopedics",
            "Oral and Maxillofacial Surgery",
            "Periodontics and Implantology",
            "Prosthodontics",
            "Endodontics and Conservative Dentistry",
            "Pediatric and Preventive Dentistry",
            "Oral Medicine and Radiology",
            "Dental Public Health"
          ]
        },
        {
          "t": "p",
          "items": [
            "The eligibility for postgraduate training is determined by the university, qualification held, professional registration and any necessary clinical experience."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "What can you do after dentistry?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The following career paths are open to qualified dental graduates:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "General Dental Practice (subject to local licensing)",
            "Community or Hospital Dental Services",
            "Specialist Clinical Practice following advanced accredited training",
            "Dental Research and University Academic Positions",
            "Oral Healthcare and Public Health Programs",
            "Dental Health Services Administration and Healthcare Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "A degree does not give an automatic right to practice. Graduates must comply with the rules of professional registration of the country in which they intend to work."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Needed to Apply",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare the following documents in accordance with the institution's official checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid international passport with at least 12 months validity.",
            "Secondary school certificates and transcripts.",
            "Evidence of required grades in Biology, Chemistry and Mathematics/Physics.",
            "English language proficiency results (IELTS/TOEFL) where applicable.",
            "Passport-size photographs complying with visa standards.",
            "Medical fitness certificate and vaccination records.",
            "Completed application and supporting declaration forms.",
            "Entrance examination scores or interview records where applicable.",
            "Proof of payment of application and evaluation fees."
          ]
        },
        {
          "t": "p",
          "items": [
            "Have certified copies and official translations readily available if requested by the institution or regulator."
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
      "q": "Can Indian students apply for Dentistry in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Dentistry in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Dentistry in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function DentistryMauritius() {
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
      seoPath="/study-abroad/mauritius/dentistry"
    />
  );
}
