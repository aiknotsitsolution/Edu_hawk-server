import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/Nursing/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/Nursing/image2.png";
import uniImg3 from "../../../../Images/Abroad/Mauritius/Nursing/image3.png";
import uniImg4 from "../../../../Images/Abroad/Mauritius/Nursing/image4.png";
import uniImg5 from "../../../../Images/Abroad/Mauritius/Nursing/image5.png";
import cmsData from "../../../../data/study_abroad/mauritius/nursing.json";

const page = {
  "name": "Nursing",
  "country": "Mauritius",
  "slug": "nursing",
  "title": "Nursing in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Nursing in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Nursing in Mauritius, Nursing in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Nursing Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Nursing in Mauritius for Indian Students",
  "heroParas": [
    "**Nursing in Mauritius for Indian Students** can offer exposure to healthcare education in a multicultural environment, with training pathways ranging from assistant-nurse qualifications to professional nursing programmes. For international students, the key considerations are the institution\u2019s recognition, admission eligibility, clinical placements, total costs and professional registration after graduation. Students exploring **Nursing in Mauritius for Indian Students** should carefully compare available programmes and their professional recognition before making a decision."
  ],
  "overview": [
    "The Nursing Council of Mauritius regulates the nursing and midwifery professions and publishes guidance on nursing schools, training and registration. Students should verify a programme through official sources before enrolling."
  ],
  "level": "B.Sc. & M.Sc. in Nursing",
  "crumb": "Healthcare & Nursing",
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
      "title": "Why Study Nursing in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Healthcare-focused training: Nursing education combines theoretical learning with practical and clinical experience.",
            "Multicultural environment: Students encounter diverse communities and healthcare needs.",
            "English-language learning: English is used in many educational settings, but the teaching language and clinical communication requirements should be confirmed for each programme.",
            "Different nursing pathways: Training options may include general nursing, assistant nursing, mental health nursing and midwifery.",
            "Professional development: Nursing can lead to further study, specialised practice and healthcare leadership, subject to qualification and licensing requirements.",
            "International applicants should confirm that the course accepts foreign students and leads to a qualification suitable for their intended career destination. Students planning to **Study Nursing in Mauritius** can explore these opportunities while checking the programme's recognition and clinical training arrangements."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Nursing Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Nursing education in Mauritius includes different levels of training. The precise courses available depend on the institution and its current approval status. Students interested in **Nursing in Mauritius for Indian Students** can explore different nursing courses based on their academic qualifications and career goals."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course or pathway",
            "Main focus"
          ],
          "rows": [
            [
              "Nursing assistant training",
              "Basic patient care, hygiene, comfort and support for registered nurses"
            ],
            [
              "Diploma or national qualification in nursing",
              "Nursing fundamentals, patient assessment, clinical practice and healthcare procedures"
            ],
            [
              "General nursing",
              "Adult care, medical-surgical nursing, community health and patient education"
            ],
            [
              "Mental health nursing",
              "Supporting people with mental health needs"
            ],
            [
              "Midwifery",
              "Pregnancy, childbirth, postnatal care and maternal health"
            ],
            [
              "Continuing professional education",
              "Skills development and specialised nursing knowledge"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The Nursing Council\u2019s official guidance identifies nursing schools and training pathways in Mauritius. Check its current list for the course and qualification you intend to pursue."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities and Nursing Colleges in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Nursing programmes, modern campuses, and international student support.",
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
          "img": uniImg4
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg5
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
          "img": uniImg4
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg5
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study Nursing in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Nursing Eligibility in Mauritius** varies according to level of study and institution. Typical requirements may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of secondary education for an entry-level nursing degree.",
            "Relevant science subjects, particularly Biology, where required.",
            "Appropriate previous nursing qualifications for top-up programmes.",
            "Academic transcripts and certificates.",
            "English-language proficiency, if required.",
            "Passport and other documents for international applicants."
          ]
        },
        {
          "t": "p",
          "items": [
            "Important: A top-up BSc is generally intended for applicants who already hold relevant nursing qualifications. Students applying directly after Class 12 should specifically seek a programme that accepts first-time nursing students.",
            "Indian students interested in **Nursing Eligibility in Mauritius** should obtain written confirmation of the academic criteria and international applicant requirements before applying."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Nursing in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Nursing Admission Requirements in Mauritius** should be confirmed with the chosen institution. Applicants should confirm the following with their chosen institution:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Minimum academic marks and required school subjects.",
            "Whether an entrance test or interview is required.",
            "English-language requirements.",
            "Clinical-placement arrangements and any health checks.",
            "Whether international applicants are eligible.",
            "The programme\u2019s recognition and professional-registration pathway."
          ]
        },
        {
          "t": "p",
          "items": [
            "Entry requirements can differ significantly between a first nursing qualification, a top-up degree and a postgraduate programme. Checking the **Nursing Admission Requirements in Mauritius** in advance helps students prepare the correct documents and understand the admission process."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Nursing in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Nursing Fees in Mauritius** vary by institution, course level and student status. The official sources reviewed do not establish a single current fee applicable to international students across these programmes. Students comparing **Nursing in Mauritius for Indian Students** should consider tuition as well as accommodation, clinical training and other living expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Budgeting guidance"
          ],
          "rows": [
            [
              "Tuition",
              "Request the annual fee and full-programme total"
            ],
            [
              "Application and registration",
              "Confirm all initial charges"
            ],
            [
              "Accommodation",
              "Check hostel options and private rentals"
            ],
            [
              "Food and transport",
              "Estimate monthly living expenses"
            ],
            [
              "Clinical training",
              "Ask about uniforms, equipment and placement costs"
            ],
            [
              "Insurance and travel",
              "Include health coverage, flights and entry-related expenses"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Ask the institution for an itemised fee schedule in Mauritian rupees (MUR). Convert the total to Indian rupees (INR) using the prevailing exchange rate when comparing options. Do not assume that public education subsidies or domestic-student fees apply to international applicants.",
            "Students should verify **Nursing Fees in Mauritius** directly with the institution and request a complete breakdown of annual and full-programme expenses before accepting an offer."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Nursing in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students should follow these steps when applying to **Study Nursing in Mauritius**:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Choose your course: Decide whether you need an entry-level degree, diploma, top-up programme or specialisation.",
            "Verify the institution: Check the Nursing Council\u2019s current list and confirm the programme\u2019s recognition.",
            "Check eligibility: Obtain written confirmation that your school or nursing qualification meets entry requirements.",
            "Prepare documents: Arrange academic records, passport details and language evidence, if required.",
            "Apply officially: Submit the application and follow the institution\u2019s instructions for interviews or assessments.",
            "Review the offer: Confirm tuition, refund rules, clinical placements and the qualification awarded.",
            "Arrange travel: Complete student-entry and accommodation arrangements only after verifying admission."
          ]
        },
        {
          "t": "p",
          "items": [
            "A clear understanding of the **Nursing Admission Requirements in Mauritius** and the official application process can help international students plan their admission carefully."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options After Nursing",
      "groups": [
        {
          "t": "p",
          "items": [
            "After obtaining the required nursing qualification and meeting entry criteria, students may explore:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MSc Nursing",
            "Advanced nursing practice",
            "Midwifery",
            "Mental health nursing",
            "Public health nursing",
            "Critical care nursing",
            "Oncology or cardiovascular nursing",
            "Nursing management and healthcare leadership"
          ]
        },
        {
          "t": "p",
          "items": [
            "Some specialist programmes require a recognised nursing qualification, professional registration and clinical experience. The Nursing Council\u2019s published programme list includes a range of post-registration and specialist pathways."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Nursing",
      "groups": [
        {
          "t": "p",
          "items": [
            "Nursing graduates may pursue careers in settings such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Hospitals and healthcare centres",
            "Community and public health services",
            "Elder-care and long-term-care facilities",
            "Mental health services",
            "Maternal and child healthcare",
            "Nursing education and research",
            "Healthcare administration"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career eligibility depends on the qualification, practical training and registration requirements of the destination country. Studying in Mauritius does not automatically grant permission to practise in Mauritius, India or another country. Students considering **Nursing in Mauritius for Indian Students** should understand the professional registration requirements of their intended country of practice."
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
            "Prepare the following documents, subject to the institution\u2019s checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 and Class 12 certificates and mark sheets, where applicable.",
            "Previous nursing diploma or degree for top-up and postgraduate courses.",
            "Academic transcripts.",
            "English-language test results, if required.",
            "Passport-size photographs.",
            "Medical or vaccination records, if requested.",
            "Application form and supporting documents.",
            "Evidence of clinical experience, if required."
          ]
        },
        {
          "t": "p",
          "items": [
            "For professional registration in Mauritius, the Nursing Council lists additional documents for foreign-trained applicants, including qualifications, training transcripts, a morality certificate and passport. Other requirements may apply depending on the applicant\u2019s circumstances."
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
      "img": uniImg4
    },
    {
      "name": "Curtin Mauritius",
      "location": "Moka, Mauritius",
      "fee": "MUR 280,000 \u2013 420,000 / Year",
      "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
      "img": uniImg5
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Nursing in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Nursing in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Nursing in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function NursingMauritius() {
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
      seoPath="/study-abroad/mauritius/nursing"
    />
  );
}
