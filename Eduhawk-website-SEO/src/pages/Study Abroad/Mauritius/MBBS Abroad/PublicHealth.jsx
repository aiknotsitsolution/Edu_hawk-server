import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/PublicHealth/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/PublicHealth/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/PublicHealth/image2.png";
import cmsData from "../../../../data/study_abroad/mauritius/public-health.json";

const page = {
  "name": "Public Health",
  "country": "Mauritius",
  "slug": "public-health",
  "title": "Public Health in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Public Health in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Public Health in Mauritius, Public Health in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Public Health Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Public Health in Mauritius for Indian Students",
  "heroParas": [
    "**Public Health in Mauritius for Indian Students** is a study pathway for students interested in disease prevention, health promotion, epidemiology, healthcare policy and improving health at the community and population levels. Unlike clinical degrees focused primarily on treating individual patients, public health programmes examine how health systems, environments, behaviours and social conditions affect entire communities. Students who want to **Study Public Health in Mauritius** can explore postgraduate opportunities and related academic pathways."
  ],
  "overview": [
    "The Master of Public Health (MPH) is a relevant postgraduate option for graduates in medicine, nursing, pharmacy, biology, environmental sciences and other eligible disciplines. The University of Mauritius has published an MPH programme, while the Open University of Mauritius has documented an MPH offered in collaboration with Imperial College London. Applicants must verify the current intake, programme arrangements and fees before applying. **Edu-Hawk Worldwide** encourages students to check the latest admission and programme details before making a decision."
  ],
  "level": "MPH / Master of Public Health",
  "crumb": "Healthcare & Public Health",
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
      "val": "21–39 Months (MPH)",
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
      "title": "Why Study Public Health in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Population-focused learning: Understand how diseases spread and how health risks can be prevented.",
            "Health policy and planning: Learn how public health programmes are developed, implemented and evaluated.",
            "Research skills: Develop knowledge of epidemiology, statistics and research methods.",
            "Multicultural exposure: Explore health challenges affecting diverse communities in Mauritius and the wider region.",
            "Career flexibility: Public health graduates may pursue opportunities in government programmes, hospitals, research, NGOs and international health organisations, depending on their qualifications and experience.",
            "Postgraduate progression: An MPH can build on an undergraduate degree in medicine, nursing, pharmacy, biological sciences or another eligible discipline.",
            "The University of Mauritius\u2019 published MPH curriculum includes epidemiology, biostatistics, global health, health improvement, health services research and health protection. These subjects are important considerations for students planning to **Study Public Health in Mauritius**."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Public Health Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Public health education includes postgraduate degrees, research programmes and specialised training. The availability of each option depends on the institution and intake."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Main areas of study"
          ],
          "rows": [
            [
              "Bachelor\u2019s degree in a health-related discipline",
              "Biology, health sciences, nursing, medicine, environmental science or related foundations"
            ],
            [
              "Master of Public Health (MPH)",
              "Epidemiology, biostatistics, health policy, disease prevention and research"
            ],
            [
              "Public Health and Global Health",
              "International health systems, health inequalities and population health"
            ],
            [
              "Health Promotion",
              "Community education, preventive health and behaviour change"
            ],
            [
              "Health Economics and Policy",
              "Healthcare financing, policy analysis and resource allocation"
            ],
            [
              "Public Health Research",
              "Research methods, data analysis, programme evaluation and dissertation work"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The MPH is generally a postgraduate qualification, so students applying directly after Class 12 should first complete an appropriate undergraduate degree. The exact entry requirements vary by institution."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Public Health in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Public Health programmes, modern campuses, and international student support.",
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
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg2
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg1
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
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg2
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
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
      "title": "Eligibility to Study Public Health in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Public Health Eligibility in Mauritius** depends on the level of study you are applying for and the institution you are applying to.",
            "For an MPH, applicants may generally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognised bachelor\u2019s degree in a relevant discipline.",
            "A suitable academic record.",
            "A background in medicine, health sciences, biological sciences, environmental sciences or another accepted field.",
            "English-language proficiency.",
            "Relevant professional experience, where required by the programme."
          ]
        },
        {
          "t": "p",
          "items": [
            "The published University of Mauritius MPH programme requirements include pathways for medically qualified applicants and non-medical applicants. The non-medical pathway specifies additional academic and experience requirements, subject to the university\u2019s rules and accepted alternatives.",
            "Students should request an assessment of their exact qualification before applying, particularly if their previous degree was earned outside Mauritius. **Edu-Hawk Worldwide** recommends checking eligibility directly with the university before submitting an application."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Public Health in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Public Health Admission Requirements in Mauritius** should be verified with the selected university before submitting an application. Applicants should check the following:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Minimum degree classification or equivalent GPA.",
            "Whether their undergraduate subject is accepted.",
            "Whether professional experience is compulsory.",
            "English-language requirements for international students.",
            "Whether the programme is full-time, part-time or delivered through another study format.",
            "Dissertation, research or fieldwork requirements.",
            "Application deadlines, tuition fees and refund conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "The Open University of Mauritius lists a minimum duration of 21 months and a maximum of 39 months for its published MPH programme. Its programme information also describes coursework and a dissertation. Confirm whether these details apply to the next available intake."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Public Health in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Public Health Fees in Mauritius** depend on the institution, student category, course format and accommodation arrangements.",
            "The Open University of Mauritius lists a total fee of MUR 300,000 for Mauritian students on its published MPH page. The same page lists the international non-SADC fee as unavailable, so this domestic fee should not be used as an international-student estimate."
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
              "International-student fee and full-course total"
            ],
            [
              "Application and registration",
              "Application fee and enrolment charges"
            ],
            [
              "Accommodation",
              "University housing or private rent"
            ],
            [
              "Food and transport",
              "Monthly living budget"
            ],
            [
              "Study materials",
              "Books, software, research and printing costs"
            ],
            [
              "Insurance and travel",
              "Health coverage, flights and entry-related expenses"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Ask the university for an itemised quotation in Mauritian rupees (MUR). Convert the total to Indian rupees (INR) using the current exchange rate, and include accommodation and living expenses when comparing institutions. Students comparing **Public Health Fees in Mauritius** should request the current international-student fee rather than relying on domestic tuition figures."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Public Health in Mauritius",
      "groups": [
        {
          "t": "ul",
          "items": [
            "**Choose your course:** Decide whether you want an MPH, a research degree or another public health qualification.",
            "**Check the university:** Review the official programme page and confirm the next intake.",
            "**Verify eligibility:** Ask admissions staff to assess your previous degree and academic results.",
            "**Confirm the cost:** Obtain the international tuition fee, payment schedule and refund policy in writing.",
            "**Prepare documents:** Collect transcripts, certificates, passport details and English-language evidence if required.",
            "**Submit the application:** Apply through the institution\u2019s official portal before the deadline.",
            "**Review the offer:** Check the degree awarded, teaching format, dissertation requirements and student-entry arrangements before accepting."
          ]
        },
        {
          "t": "p",
          "items": [
            "For **Public Health in Mauritius for Indian Students**, verifying the course details, international tuition and admission requirements is an important part of the application process."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options After Public Health",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing an MPH or a relevant undergraduate degree, students may consider further study in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Epidemiology",
            "Global health",
            "Biostatistics",
            "Health economics",
            "Health policy and management",
            "Environmental and occupational health",
            "Health promotion",
            "Public health nutrition",
            "Infectious disease research",
            "Doctoral research in public health"
          ]
        },
        {
          "t": "p",
          "items": [
            "Entry requirements depend on the programme. Doctoral study commonly requires an appropriate postgraduate qualification, a suitable research proposal and evidence of research capability."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Public Health",
      "groups": [
        {
          "t": "p",
          "items": [
            "Public health graduates may explore roles in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Public health programme coordination",
            "Epidemiology and disease surveillance",
            "Health research and data analysis",
            "Community health and health promotion",
            "Healthcare policy and planning",
            "Monitoring and evaluation of health programmes",
            "Environmental health initiatives",
            "NGO and humanitarian health projects",
            "Health systems management",
            "University teaching and research, subject to further qualifications"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career opportunities depend on the applicant\u2019s prior qualification, professional experience, work authorisation and employer requirements. An MPH does not by itself qualify a graduate to practise as a doctor, nurse or another regulated healthcare professional."
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
            "Prepare the following documents, subject to the university\u2019s official checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Bachelor\u2019s degree certificate.",
            "Academic transcripts and mark sheets.",
            "CV or r\u00e9sum\u00e9, if requested.",
            "Statement of purpose or motivation letter, if required.",
            "Proof of English-language proficiency, if applicable.",
            "Employment or professional experience certificates, where required.",
            "Research proposal, if applying to a research programme.",
            "Passport-size photographs.",
            "Completed application form and supporting documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "International applicants should confirm whether documents need certified copies, official translations or verification by the issuing institution."
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
      "img": uniImg1
    },
    {
      "name": "Middlesex University Mauritius",
      "location": "Flic en Flac, Mauritius",
      "fee": "MUR 250,000 \u2013 450,000 / Year",
      "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
      "img": uniImg2
    },
    {
      "name": "Curtin Mauritius",
      "location": "Moka, Mauritius",
      "fee": "MUR 280,000 \u2013 420,000 / Year",
      "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
      "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Public Health in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Public Health in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Public Health in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function PublicHealthMauritius() {
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
      seoPath="/study-abroad/mauritius/public-health"
    />
  );
}
