import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/Pharmacy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/Pharmacy/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/Pharmacy/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/Pharmacy/image3.png";
import cmsData from "../../../../data/study_abroad/mauritius/pharmacy.json";

const page = {
  "name": "Pharmacy",
  "country": "Mauritius",
  "slug": "pharmacy",
  "title": "Pharmacy in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Pharmacy in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Pharmacy in Mauritius, Pharmacy in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Pharmacy Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Pharmacy in Mauritius for Indian Students",
  "heroParas": [
    "Studying pharmacy in Mauritius may be an option for students interested in medicines, pharmaceutical sciences, patient care and the healthcare industry. **Pharmacy in Mauritius for Indian Students** can be an option to explore, but before selecting a university, students should check whether the programme is currently offered, whether it meets professional pharmacy registration requirements and whether the qualification will be recognised in their intended country of practice. Students planning to **Study Pharmacy in Mauritius** should carefully review these details before applying."
  ],
  "overview": [
    "The Pharmacy Council of Mauritius regulates the pharmacy profession, including pharmacist registration, approved training and professional standards. Its guidance is especially important for students planning to work in Mauritius after graduation. **Edu-Hawk Worldwide** encourages students to verify course recognition and professional requirements before making an admission decision."
  ],
  "level": "B.Pharm & M.Pharm",
  "crumb": "Healthcare & Pharmacy",
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
      "val": "4 Years (BPharm)",
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
      "title": "Why Study Pharmacy in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Healthcare-focused education: Pharmacy combines pharmaceutical science, medicines management and patient safety.",
            "Multicultural environment: Students can experience a diverse society and healthcare setting.",
            "Pharmaceutical career pathways: Graduates may explore community pharmacy, hospitals, pharmaceutical companies, research and regulatory affairs, subject to qualification and registration requirements.",
            "Further study opportunities: Pharmacy can provide a foundation for postgraduate education in pharmaceutical sciences and related fields.",
            "International exposure: Students can develop an understanding of healthcare systems and medicine-related practices in a different country.",
            "The most important consideration is professional recognition. A course in pharmaceutical science is not necessarily equivalent to a professional pharmacy degree that qualifies someone to register as a pharmacist. This is an important consideration for **Pharmacy in Mauritius for Indian Students**."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Pharmacy Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Pharmacy-related education can cover professional pharmacy qualifications, pharmaceutical sciences and postgraduate specialisations. The exact programmes available depend on the institution and its current approvals. Students planning to **Study Pharmacy in Mauritius** should confirm the exact qualification offered by their chosen institution."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course or pathway",
            "Main areas of study"
          ],
          "rows": [
            [
              "Bachelor of Pharmacy (BPharm) or equivalent",
              "Pharmacology, pharmaceutics, medicinal chemistry and pharmacy practice"
            ],
            [
              "Doctor of Pharmacy (PharmD)",
              "Pharmaceutical care, clinical pharmacy, therapeutics and patient counselling"
            ],
            [
              "Pharmaceutical Sciences",
              "Drug development, formulation, laboratory analysis and quality control"
            ],
            [
              "Clinical Pharmacy",
              "Medication management, patient safety and clinical decision-making"
            ],
            [
              "Pharmaceutical Research",
              "Drug discovery, pharmacology, research methods and laboratory work"
            ],
            [
              "Postgraduate Pharmacy Studies",
              "Advanced pharmaceutical practice, research or specialised subject areas"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Pharmacy Council states that a professional pharmacy qualification for registration in Mauritius must meet its academic and professional requirements. Its published criteria specify a full-time pharmacy course of at least four years, excluding pre-registration training, for the relevant qualification pathway."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Universities and Institutions to Check for Pharmacy in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Pharmacy programmes, modern campuses, and international student support.",
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
      "title": "Eligibility to Study Pharmacy in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Pharmacy Eligibility in Mauritius** depends on the qualification and institution. Entry requirements vary, and students should generally prepare to meet requirements such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of secondary education equivalent to the institution\u2019s required pre-university qualification.",
            "Strong results in Chemistry and other relevant science subjects.",
            "Required Advanced Level or equivalent qualifications for the selected professional programme.",
            "English-language proficiency, where applicable.",
            "Academic transcripts and identification documents.",
            "Any additional requirements for international applicants."
          ]
        },
        {
          "t": "p",
          "items": [
            "For professional registration in Mauritius, the Pharmacy Council publishes specific academic criteria, including A-Level-equivalent requirements. Students should seek written advice from the Council before enrolling, particularly if they hold Indian Class 12 qualifications. **Edu-Hawk Worldwide** recommends confirming eligibility before proceeding with an application."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Pharmacy in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Pharmacy Admission Requirements in Mauritius** should be checked directly with the institution and relevant regulator. Before applying, confirm the following:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Minimum marks and subject prerequisites.",
            "Whether the course is a professional pharmacy degree or a pharmaceutical-science qualification.",
            "English-language test requirements, if any.",
            "Whether international students can apply.",
            "Clinical or practical training requirements.",
            "The institution\u2019s registration and accreditation status.",
            "Whether graduates can satisfy the relevant pharmacy regulator\u2019s requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students seeking postgraduate study must also verify whether a previous pharmacy degree or relevant honours qualification is required. The HEC\u2019s postgraduate guidance advises prospective students to consult the Pharmacy Council before enrolling in pharmacy-related programmes if they intend to practise."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Pharmacy in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Pharmacy Fees in Mauritius** vary by institution and programme. A verified, current international-student tuition fee for a confirmed entry-level pharmacy programme could not be established from the official sources reviewed. Therefore, it would be misleading to publish a specific tuition range as if it applied to all pharmacy students."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "What to budget for"
          ],
          "rows": [
            [
              "Tuition fees",
              "Annual and full-course charges"
            ],
            [
              "Application and registration",
              "Application fee, enrolment charges and deposits"
            ],
            [
              "Accommodation",
              "University residence or private rental"
            ],
            [
              "Food and transport",
              "Monthly living expenses"
            ],
            [
              "Laboratory and practical training",
              "Materials, equipment and any placement costs"
            ],
            [
              "Insurance and travel",
              "Health cover, flights and entry formalities"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Request a complete fee schedule in Mauritian rupees (MUR) from the institution. Convert it to Indian rupees (INR) using the current exchange rate, and confirm the refund policy before paying a deposit. Students comparing **Pharmacy Fees in Mauritius** should also check all compulsory charges before making a decision."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Pharmacy in Mauritius",
      "groups": [
        {
          "t": "ul",
          "items": [
            "**Select the qualification:** Decide whether you want a professional pharmacy degree or a pharmaceutical-science course.",
            "**Check the institution:** Verify its registration and the programme\u2019s status through the HEC.",
            "**Confirm professional recognition:** Contact the Pharmacy Council of Mauritius if you plan to practise there after graduation.",
            "**Check eligibility:** Submit your academic details for assessment, especially if your qualifications are from India.",
            "**Prepare documents:** Collect certificates, transcripts, passport details and any required English-language results.",
            "**Submit your application:** Follow the institution\u2019s official application procedure and deadlines.",
            "**Review the offer:** Verify fees, course duration, practical training and the qualification awarded before accepting."
          ]
        },
        {
          "t": "p",
          "items": [
            "For **Pharmacy in Mauritius for Indian Students**, checking the qualification and professional registration pathway is an important step before accepting an offer."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options After Pharmacy",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing an appropriate undergraduate qualification, graduates may consider further education in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Clinical pharmacy",
            "Pharmaceutical sciences",
            "Pharmacology",
            "Pharmaceutics and drug formulation",
            "Medicinal chemistry",
            "Pharmacovigilance and drug safety",
            "Pharmaceutical quality assurance",
            "Regulatory affairs",
            "Pharmaceutical research and development"
          ]
        },
        {
          "t": "p",
          "items": [
            "Postgraduate admission requirements differ by programme. The HEC publishes guidelines for postgraduate education in pharmacy, pharmaceutical sciences and related fields."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Pharmacy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on their qualification and registration status, pharmacy graduates may explore roles in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Community pharmacies",
            "Hospital pharmacy services",
            "Pharmaceutical manufacturing",
            "Drug quality control and quality assurance",
            "Pharmaceutical research",
            "Pharmacovigilance",
            "Regulatory affairs",
            "Medical and scientific information",
            "Clinical research organisations"
          ]
        },
        {
          "t": "p",
          "items": [
            "Professional registration matters: Completing a course does not automatically qualify a graduate to practise as a pharmacist. The Pharmacy Council of Mauritius sets the requirements for registration and approved pre-registration training."
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
            "A-Level-equivalent certificates, if applicable.",
            "Academic transcripts.",
            "English-language proficiency results, if required.",
            "Passport-size photographs.",
            "Previous degree certificates for postgraduate applications.",
            "Application form and supporting documents.",
            "Any required medical or additional declarations."
          ]
        },
        {
          "t": "p",
          "items": [
            "For professional registration, the Pharmacy Council may request certified qualifications, academic records and other supporting documents. Check the latest registration instructions before assuming that the university\u2019s admission documents will be sufficient for professional registration."
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
      "q": "Can Indian students apply for Pharmacy in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Pharmacy in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Pharmacy in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function PharmacyMauritius() {
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
      seoPath="/study-abroad/mauritius/pharmacy"
    />
  );
}
