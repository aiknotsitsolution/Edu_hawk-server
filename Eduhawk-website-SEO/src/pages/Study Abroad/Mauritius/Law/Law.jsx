import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/Law/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/Law/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/Law/image2.png";
import cmsData from "../../../../data/study_abroad/mauritius/law.json";

const page = {
  "name": "Law",
  "country": "Mauritius",
  "slug": "law",
  "title": "Law in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Law in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Law in Mauritius, Law in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Law Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Law in Mauritius for Indian Students",
  "heroParas": [
    "Studying **Law in Mauritius** can help students build a foundation in legal principles, legislation, legal research, advocacy, and dispute resolution. Students can choose an undergraduate Bachelor of Laws (LLB) or continue with a postgraduate Master of Laws (LLM) in a specialised area. **Law in Mauritius** offers undergraduate and postgraduate study pathways for students interested in legal education and related careers."
  ],
  "overview": [
    "For the 2026\u20132027 academic year, the University of Mauritius lists a three-year full-time LLB (Hons), a four-year part-time LLB (Hons), and postgraduate programmes in Corporate Law, Human Rights, and Business and Tax Law."
  ],
  "level": "LLB & LLM in Law",
  "crumb": "Law",
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
      "title": "Why Study Law in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Multiple study pathways: Choose an undergraduate law degree or progress to postgraduate specialisation.",
            "Specialised legal education: Explore subjects such as corporate law, human rights, business law, and taxation.",
            "Practical legal skills: Develop legal research, critical thinking, argumentation, writing, and negotiation skills.",
            "Professional development: Learn about the academic and vocational stages required for legal practice.",
            "Career flexibility: A law qualification may lead to opportunities in legal services, business, compliance, public administration, and policy.",
            "Students planning to practise law should check professional admission requirements in the country where they intend to work. Completing an LLB or LLM alone does not automatically grant a licence to practise. Students considering a **Bachelor's in Law in Mauritius** or a **Master's in Law in Mauritius** should also understand the professional requirements relevant to their career goals."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Law Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can explore the following **Law courses in Mauritius** at the University of Mauritius and Middlesex University Mauritius."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Study level",
            "Programme",
            "Duration"
          ],
          "rows": [
            [
              "Bachelor\u2019s",
              "LLB (Hons), University of Mauritius",
              "3 years full-time"
            ],
            [
              "Bachelor\u2019s",
              "LLB (Hons), University of Mauritius",
              "4 years part-time"
            ],
            [
              "Bachelor\u2019s",
              "LLB (Hons), Middlesex University Mauritius",
              "3 years full-time"
            ],
            [
              "Master\u2019s",
              "LLM in Corporate Law, University of Mauritius",
              "2 years part-time"
            ],
            [
              "Master\u2019s",
              "LLM in Human Rights, University of Mauritius",
              "2 years part-time"
            ],
            [
              "Master\u2019s",
              "LLM in Business and Tax Law, University of Mauritius",
              "1 year full-time"
            ],
            [
              "Master\u2019s",
              "LLM (General), Middlesex University Mauritius",
              "1 year full-time or 2 years part-time"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Durations and programmes are based on the institutions\u2019 published information for the relevant academic year. Applicants should confirm current availability before applying.",
            "Students interested in a **Bachelor's in Law in Mauritius** can compare the undergraduate LLB options, while those planning postgraduate specialisation can explore the available LLM programmes."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Law in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Law programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "\\. University of Mauritius",
          "location": "\\. University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers an LLB (Hons), BA (Hons) Law and Criminal Justice, and BA (Hons) Law with Management. Its postgraduate law options include LLM programmes in Corporate Law, Human Rights, and Business and Tax Law.",
          "img": uniImg1
        },
        {
          "name": "\\. Middlesex University Mauritius",
          "location": "\\. Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a three-year, full-time LLB (Hons) and an LLM (General). Its undergraduate law course covers areas such as public law, contract law, criminal law, tort, and land law. When comparing **Law universities in Mauritius**, applicants should review the exact qualification, course modules, tuition fees and professional recognition relevant to their plans.",
          "img": uniImg2
        }
      ],
      "unis_data": [
        {
          "name": "\\. University of Mauritius",
          "location": "\\. University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers an LLB (Hons), BA (Hons) Law and Criminal Justice, and BA (Hons) Law with Management. Its postgraduate law options include LLM programmes in Corporate Law, Human Rights, and Business and Tax Law.",
          "img": uniImg1
        },
        {
          "name": "\\. Middlesex University Mauritius",
          "location": "\\. Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a three-year, full-time LLB (Hons) and an LLM (General). Its undergraduate law course covers areas such as public law, contract law, criminal law, tort, and land law. When comparing **Law universities in Mauritius**, applicants should review the exact qualification, course modules, tuition fees and professional recognition relevant to their plans.",
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
      "title": "Eligibility Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements depend on the university, the level of study, and the applicant\u2019s academic background. **Law eligibility in Mauritius** varies according to the selected programme and institution.",
            "Completion of secondary education equivalent to the institution\u2019s entry requirements.",
            "Academic grades that meet the university\u2019s minimum requirements.",
            "English-language proficiency, if required.",
            "For Middlesex University Mauritius, the published LLB entry requirement for 2026\u20132027 is 96 UCAS tariff points.",
            "Middlesex University",
            "A recognised undergraduate degree in Law or another qualification accepted by the university.",
            "Academic transcripts and proof of graduation.",
            "English-language proficiency evidence, where applicable.",
            "Additional programme-specific prerequisites, if required.",
            "For example, Middlesex University Mauritius states that its general LLM ideally requires a 2:2 honours law degree or above, or a Graduate Diploma in Law/Common Professional Examination.",
            "Students should confirm **Law eligibility in Mauritius** directly with their selected university before applying, especially when moving from an undergraduate qualification to postgraduate legal studies."
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
            "Before applying, students should confirm:",
            "The exact degree and specialisation offered.",
            "Minimum academic qualifications and grades.",
            "English-language requirements.",
            "Whether the programme requires a law degree for postgraduate entry.",
            "Application deadlines and intake dates.",
            "Tuition fees and payment arrangements.",
            "Any professional accreditation or further training needed to practise law.",
            "International applicants should also check the applicable student visa or residence-permit requirements for Mauritius.",
            "Students applying for **Law admission in Mauritius** should review the official university admission guidelines and ensure that their academic qualifications meet the requirements of the chosen course."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Law in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition fees vary by university, programme, nationality, and study mode. The following published 2026\u20132027 fees provide a reference for international applicants planning to study **Law in Mauritius**."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Programme",
            "Tuition fee",
            "Approximate INR"
          ],
          "rows": [
            [
              "LLB (Hons), Middlesex University Mauritius",
              "\u00a36,400",
              "\u20b97.42 lakh"
            ],
            [
              "LLM (General), Middlesex University Mauritius",
              "\u00a37,420",
              "\u20b98.61 lakh"
            ],
            [
              "Living expenses per month \u2014 estimate",
              "MUR 15,000\u201330,000",
              "\u20b930,000\u201360,000"
            ],
            [
              "Living expenses per year \u2014 estimate",
              "MUR 180,000\u2013360,000",
              "\u20b93.6\u20137.2 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Middlesex University Mauritius publishes international tuition fees of \u00a36,400 for its LLB and \u00a37,420 for its LLM (General). The published course pages state that the fees include an administration fee.",
            "The INR figures use an illustrative exchange rate of \u00a31 \u2248 \u20b9116 and MUR 1 \u2248 \u20b92; actual rates may differ. Living costs are estimates, not official university rates, and depend on accommodation, food, transport, utilities, and lifestyle.",
            "For the University of Mauritius, consult its official fee information for 2026\u20132027 for the applicable international-student fees.",
            "Students comparing **Law courses in Mauritius** should check the tuition fees for their specific programme and calculate additional expenses separately."
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
            "Choose your course: Decide between an LLB and an LLM based on your previous education and career goals.",
            "Compare universities: Review course content, duration, fees, entry criteria, and professional recognition.",
            "Prepare your documents: Collect academic transcripts, certificates, identification, and English-language results if required.",
            "Submit your application: Apply through the university\u2019s official admissions portal and pay any applicable application fee.",
            "Receive the admission decision: Follow the university\u2019s instructions for accepting the offer and paying the required deposit.",
            "Prepare for enrolment: Arrange accommodation, travel, and the necessary immigration formalities for studying in Mauritius."
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
            "After completing an LLB, students may consider postgraduate study in areas such as:",
            "LLM in Corporate Law.",
            "LLM in Human Rights.",
            "LLM in Business and Tax Law.",
            "LLM in International Law, where available.",
            "LLM in Commercial or Criminal Law, where available.",
            "Postgraduate research in Law.",
            "Professional legal training required for the relevant jurisdiction.",
            "The University of Mauritius lists LLM programmes in Corporate Law, Human Rights, and Business and Tax Law for the 2026\u20132027 academic year.",
            "After an LLM, eligible graduates may pursue research degrees or specialised professional training, depending on their goals and the institution\u2019s requirements.",
            "Students completing a **Bachelor's in Law in Mauritius** may explore these postgraduate options based on their academic background and the entry requirements of the selected university."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "A Law degree can prepare graduates for legal and non-legal roles, depending on their qualifications and professional authorisation.",
            "Potential career paths include:",
            "Legal Research Assistant",
            "Paralegal",
            "Legal Executive",
            "Corporate Compliance Officer",
            "Contract Management Executive",
            "Legal Consultant, where permitted",
            "Human Rights Researcher",
            "Policy Research Assistant",
            "Tax or Regulatory Compliance Executive",
            "Government or Public Administration Officer",
            "Legal Operations Specialist",
            "Graduates who want to become attorneys, barristers, or notaries must complete the additional professional training and registration requirements applicable to their chosen jurisdiction. A degree alone does not guarantee admission to legal practice."
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
            "Applicants may need the following documents, depending on the university and programme:",
            "Valid passport.",
            "Secondary-school certificates and transcripts for LLB admission.",
            "Bachelor\u2019s degree certificate and transcripts for LLM admission.",
            "English-language test results, if required.",
            "Updated CV or r\u00e9sum\u00e9, if requested.",
            "Statement of purpose or motivation letter, where applicable.",
            "Academic or professional references, if requested.",
            "Completed application form.",
            "Proof of application-fee payment, where applicable.",
            "Any additional documents requested by the admissions office.",
            "Student visa or residence-permit documents at the relevant stage.",
            "Applicants should confirm whether certified copies or translated documents are required."
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
      "desc": "Offers an LLB (Hons), BA (Hons) Law and Criminal Justice, and BA (Hons) Law with Management. Its postgraduate law options include LLM programmes in Corporate Law, Human Rights, and Business and Tax Law.",
      "img": uniImg1
    },
    {
      "name": "\\. Middlesex University Mauritius",
      "location": "\\. Middlesex University Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers a three-year, full-time LLB (Hons) and an LLM (General). Its undergraduate law course covers areas such as public law, contract law, criminal law, tort, and land law. When comparing **Law universities in Mauritius**, applicants should review the exact qualification, course modules, tuition fees and professional recognition relevant to their plans.",
      "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Law in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Law in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Law in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function LawMauritius() {
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
      seoPath="/study-abroad/mauritius/law"
    />
  );
}
