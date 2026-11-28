import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/ComputerScience/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/ComputerScience/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/ComputerScience/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/ComputerScience/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/ComputerScience/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/ComputerScience/image2.png";
import cmsData from "../../../../data/study_abroad/mauritius/computer-science.json";

const page = {
  "name": "Computer Science",
  "country": "Mauritius",
  "slug": "computer-science",
  "title": "Computer Science in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Computer Science in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Computer Science in Mauritius, Computer Science in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Computer Science Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Computer Science in Mauritius for Indian Students",
  "heroParas": [
    "Discover quality, affordable Computer Science education in Mauritius at internationally affiliated universities and branch campuses from the UK, France, and Australia. Indian students benefit from a safe, multicultural environment, low living costs, and straightforward visa processing."
],
  "overview": [
    "Mauritius is rapidly transforming into a regional technology and financial services hub for the Indian Ocean and African region. Pursuing Computer Science in Mauritius offers Indian students a unique, cost-effective opportunity to earn internationally recognized qualifications from renowned British, French, and Australian university branch campuses.",
    "Institutions like the University of Mauritius, Université des Mascareignes, Middlesex University Mauritius, and Curtin Mauritius offer comprehensive undergraduate and postgraduate computing degrees. Programs cover programming fundamentals, database management, software engineering, network administration, and cloud technologies, taught in an English-speaking academic environment.",
    "With competitive annual tuition fees (typically $2,500 to $8,500 USD), affordable student accommodation, and a streamlined visa application process with no complicated embassy interviews, Mauritius represents an accessible, high-value destination for students launching an international technology education."
],
  "level": "B.Sc. & M.Sc. in Computer Science",
  "crumb": "Computer Science",
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
      "title": "Why Study Computer Science Engineering in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Mauritius offers bachelor's and master's degrees in computer science engineering. **Computer Science Engineering in Mauritius for Indian Students** can be an option for students who want to pursue higher education in computing, software development, information technology and emerging technologies. The country has universities offering programmes in computer science, software engineering, applied computing, artificial intelligence and information systems.",
            "One important point for prospective students: Mauritian universities often use titles such as BSc Computer Science, BSc Software Engineering and MSc Artificial Intelligence, rather than the exact title \u201cComputer Science Engineering.\u201d These degrees may cover related subjects, but their modules and professional focus can differ. Students planning to **study Computer Science Engineering in Mauritius** should compare the course content and qualification awarded by each institution.",
            "For the 2026\u20132027 academic year, the University of Mauritius lists a three-year BSc (Hons) Computer Science, BSc (Hons) Applied Computing and BSc (Hons) Software Engineering. Its postgraduate options include an MSc Artificial Intelligence and an MSc Software Project Management, while the Open University of Mauritius offers a BSc (Hons) Computer Science and an MSc Applied Computing and Digital Technologies. These options are relevant for students exploring **Computer Science Engineering Courses in Mauritius** at different study levels. **Edu-Hawk Worldwide** helps students explore international education opportunities and understand the admission process.",
            "Reasons to consider studying computing in Mauritius include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Building programming and software development skills.",
            "Learning about databases, algorithms and computer systems.",
            "Exploring artificial intelligence, cybersecurity and data technologies.",
            "Developing skills for software companies, IT departments and technology startups.",
            "Progressing from undergraduate study to specialised postgraduate education."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Computer Science Engineering Courses at the Bachelor and Master Levels in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The following **Computer Science Engineering Courses in Mauritius** are relevant alternatives for students interested in computer science engineering. Students comparing **Computer Science Engineering in Mauritius for Indian Students** can review the study level, institution and programme duration before making a decision."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Study level",
            "Programme",
            "Institution",
            "Duration"
          ],
          "rows": [
            [
              "Bachelor\u2019s",
              "BSc (Hons) Computer Science",
              "University of Mauritius",
              "3 years, full-time"
            ],
            [
              "Bachelor\u2019s",
              "BSc (Hons) Software Engineering",
              "University of Mauritius",
              "3 years, full-time"
            ],
            [
              "Bachelor\u2019s",
              "BSc (Hons) Applied Computing",
              "University of Mauritius",
              "3 years, full-time"
            ],
            [
              "Bachelor\u2019s",
              "BSc (Hons) Computer Science",
              "Open University of Mauritius",
              "3\u20136 years"
            ],
            [
              "Bachelor\u2019s",
              "BSc (Hons) Computer Science (Systems Engineering)",
              "Middlesex University Mauritius",
              "3 years, full-time"
            ],
            [
              "Master\u2019s",
              "MSc Artificial Intelligence",
              "University of Mauritius",
              "2 years, part-time"
            ],
            [
              "Master\u2019s",
              "MSc Software Project Management",
              "University of Mauritius",
              "2 years, part-time"
            ],
            [
              "Master\u2019s",
              "MSc Applied Computing and Digital Technologies",
              "Open University of Mauritius",
              "Confirm current duration with the university"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The University of Mauritius publishes its undergraduate and postgraduate offerings for 2026\u20132027. Middlesex University Mauritius lists Computer Science (Systems Engineering) for September 2026, and the Open University publishes its Computer Science degree details and postgraduate fee information.",
            "These programmes are not all titled \u201cComputer Science Engineering.\u201d Compare the curriculum carefully if you need a particular engineering qualification. Students researching **Computer Science Engineering Courses in Mauritius** should review the curriculum and confirm whether the programme matches their academic and career goals."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Universities for Computer Science Engineering in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Computer Science programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Mauritius (UoM)",
          "location": "University of Mauritius (UoM)",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "UoM offers undergraduate degrees in Computer Science, Software Engineering and Applied Computing. At postgraduate level, it lists an MSc Artificial Intelligence and an MSc Software Project Management. These programmes can suit students interested in software development, AI and technology project leadership.",
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Its BSc (Hons) Computer Science (Systems Engineering) is listed as a three-year, full-time programme for September 2026\\. The published 2026\u20132027 fee is MUR 302,800 for Mauritian students and \u00a36,400 for international students, including the administrative fee. Confirm the current international fee before applying. When comparing **Computer Science Engineering Universities in Mauritius**, students should consider the course structure, academic requirements, tuition fees and study duration. **Edu-Hawk Worldwide** can assist students in understanding the available study pathways.",
          "img": uniImg2
        }
      ],
      "unis_data": [
        {
          "name": "University of Mauritius (UoM)",
          "location": "University of Mauritius (UoM)",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "UoM offers undergraduate degrees in Computer Science, Software Engineering and Applied Computing. At postgraduate level, it lists an MSc Artificial Intelligence and an MSc Software Project Management. These programmes can suit students interested in software development, AI and technology project leadership.",
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Middlesex University Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Its BSc (Hons) Computer Science (Systems Engineering) is listed as a three-year, full-time programme for September 2026\\. The published 2026\u20132027 fee is MUR 302,800 for Mauritian students and \u00a36,400 for international students, including the administrative fee. Confirm the current international fee before applying. When comparing **Computer Science Engineering Universities in Mauritius**, students should consider the course structure, academic requirements, tuition fees and study duration. **Edu-Hawk Worldwide** can assist students in understanding the available study pathways.",
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
      "title": "Computer Science Engineering Eligibility in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Admission requirements vary by university, degree and applicant category. **Computer Science Engineering Eligibility in Mauritius** depends on the selected programme and the applicant's previous academic qualifications. Students interested in **Computer Science Engineering in Mauritius for Indian Students** should check the entry criteria for international applicants before applying.",
            "For a bachelor\u2019s degree, applicants generally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completed secondary education equivalent to the university\u2019s accepted entry qualification.",
            "Required subjects and grades, often including mathematics or computer science.",
            "English-language proficiency evidence, if required.",
            "Any additional documents specified by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, the Open University of Mauritius lists mathematics or computer science among the expected A-Level subjects for its BSc (Hons) Computer Science. Middlesex University Mauritius lists 88 UCAS points for its Computer Science (Systems Engineering) degree.",
            "For a master\u2019s degree, applicants generally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognised bachelor\u2019s degree in computer science, IT, software engineering or a related discipline.",
            "Satisfactory academic results.",
            "Relevant prerequisite knowledge for the chosen specialisation.",
            "English-language test results, if required.",
            "Work experience or other supporting documents, where specified."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants should obtain written confirmation that their previous qualification meets the selected master\u2019s programme\u2019s requirements."
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
            "Students should verify the admission requirements for the exact programme before applying. The **Computer Science Engineering Eligibility in Mauritius** may differ between undergraduate and postgraduate programmes and across universities.",
            "For undergraduate programmes, universities may assess secondary-school results, mathematics preparation, English proficiency and the equivalence of international qualifications.",
            "For postgraduate programmes, universities may consider the relevance of the applicant\u2019s bachelor\u2019s degree, academic performance and prior technical knowledge. Some programmes may have additional requirements.",
            "Before submitting an application:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Review the course curriculum and entry requirements.",
            "Check the current intake and application deadline.",
            "Confirm tuition fees for international students.",
            "Prepare certified academic records and identification documents.",
            "Submit the application through the official university portal.",
            "Review the admission offer and payment conditions before confirming enrolment."
          ]
        },
        {
          "t": "p",
          "items": [
            "The University of Mauritius notes that its 2026\u20132027 programme information is being revised to reflect its new credit-transfer system, so applicants should confirm the latest programme regulations. Students planning to **study Computer Science Engineering in Mauritius** should check the current requirements directly with their chosen university."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Computer Science Engineering Fees in Mauritius and Cost of Studying",
      "groups": [
        {
          "t": "p",
          "items": [
            "The total budget depends on the university, programme, study duration, accommodation and lifestyle. The figures below provide a starting point for planning. **Computer Science Engineering Fees in Mauritius** vary according to the institution, course and applicant category. Students exploring **Computer Science Engineering in Mauritius for Indian Students** should confirm the latest international tuition fees before making financial arrangements."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Programme",
            "Published fee information"
          ],
          "rows": [
            [
              "BSc (Hons) Computer Science \u2014 Open University of Mauritius",
              "USD 6,700 total for international non-SADC applicants, according to the published fee information"
            ],
            [
              "BSc (Hons) Computer Science (Systems Engineering) \u2014 Middlesex University Mauritius",
              "\u00a36,400 for international students for 2026\u20132027, including administrative fee"
            ],
            [
              "MSc Applied Computing and Digital Technologies \u2014 Open University of Mauritius",
              "The published international postgraduate fee schedule lists a total of USD 6,000."
            ],
            [
              "UoM undergraduate and postgraduate programmes",
              "Check the university\u2019s current international fee schedule for the selected programme"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Sources: official programme and fee information.",
            "INR equivalents are not fixed and depend on exchange rates and bank charges. Confirm the amount payable directly with the institution before making a payment. Fees may change by intake.",
            "For students relocating to Mauritius, a preliminary monthly budget could look like this:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Monthly cost (MUR)",
            "Approx. cost (INR)"
          ],
          "rows": [
            [
              "Accommodation",
              "7,000\u201312,000",
              "\u20b914,000\u2013\u20b924,000"
            ],
            [
              "Food and groceries",
              "4,000\u20136,000",
              "\u20b98,000\u2013\u20b912,000"
            ],
            [
              "Transport",
              "1,000\u20132,000",
              "\u20b92,000\u2013\u20b94,000"
            ],
            [
              "Utilities, internet and personal expenses",
              "3,000\u20135,000",
              "\u20b96,000\u2013\u20b910,000"
            ],
            [
              "Estimated total",
              "15,000\u201325,000",
              "\u20b930,000\u2013\u20b950,000"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are indicative planning estimates, not a guaranteed university budget. INR conversions use an illustrative rate of MUR 1 \u2248 \u20b92.00. Actual exchange rates and living expenses vary."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Period",
            "Estimated living cost (MUR)",
            "Approx. cost (INR)"
          ],
          "rows": [
            [
              "1 year",
              "180,000\u2013300,000",
              "\u20b93.6\u2013\u20b96 lakh"
            ],
            [
              "3 years",
              "540,000\u2013900,000",
              "\u20b910.8\u2013\u20b918 lakh"
            ],
            [
              "4 years",
              "720,000\u20131,200,000",
              "\u20b914.4\u2013\u20b924 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These estimates exclude tuition, flights, visa-related expenses, health insurance and other one-time costs. A part-time master\u2019s may take longer in calendar years, so calculate living costs using the actual study plan."
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
            "Students can follow these steps to apply for a bachelor\u2019s or master\u2019s degree in computer science in Mauritius. For students planning to **study Computer Science Engineering in Mauritius**, following the admission process and checking the university's official instructions can help organise the application."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Choose the study level: Decide whether you are applying for an undergraduate degree or postgraduate specialisation.",
            "Select a university: Compare Computer Science, Software Engineering, Applied Computing and related programmes.",
            "Check eligibility: Verify the academic and language requirements for your qualifications.",
            "Prepare documents: Gather school or university certificates, transcripts, identification and supporting documents.",
            "Submit the application: Use the official admissions portal.",
            "Receive the admission decision: Review the offer, course duration and conditions.",
            "Confirm the budget: Check tuition, administrative charges and payment deadlines.",
            "Complete enrolment: Follow the institution\u2019s registration instructions and arrange immigration formalities if required."
          ]
        },
        {
          "t": "p",
          "items": [
            "Use the official websites of the University of Mauritius, Open University of Mauritius and Middlesex University Mauritius to check the current intake and application details. **Edu-Hawk Worldwide** can guide students through the application process and help them understand the steps involved in pursuing international education."
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
            "After completing a bachelor\u2019s degree, students can progress to postgraduate study in specialised computing fields. After a master\u2019s degree, research or advanced professional training may be appropriate. These options can also help students planning to **study Computer Science Engineering in Mauritius** identify possible academic pathways after graduation.",
            "Possible pathways include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Artificial Intelligence and Machine Learning: Intelligent applications, predictive models and automation.",
            "Cybersecurity: Network security, digital forensics and information protection.",
            "Data Science: Statistical analysis, data engineering and business intelligence.",
            "Software Engineering: Software architecture, testing and large-scale application development.",
            "Cloud Computing: Cloud infrastructure, distributed systems and deployment.",
            "Computer Networks: Network architecture, systems administration and communications.",
            "PhD in Computer Science: Advanced research in computing, subject to entry requirements and supervisor availability."
          ]
        },
        {
          "t": "p",
          "items": [
            "The most suitable pathway depends on your interests, prior subjects and long-term career plans."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Computer Science Engineering",
      "groups": [
        {
          "t": "p",
          "items": [
            "A degree in computer science or a related field can prepare graduates for opportunities in software, technology services, finance, telecommunications, consulting and other industries. Students pursuing **Computer Science Engineering in Mauritius for Indian Students** can explore different career areas depending on their specialisation, practical experience and technical skills.",
            "Potential career options include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Software Developer",
            "Software Engineer",
            "Web or Application Developer",
            "Data Analyst",
            "AI or Machine Learning Engineer",
            "Cybersecurity Analyst",
            "Database Administrator",
            "Cloud or Systems Engineer",
            "IT Consultant",
            "Software Project Coordinator"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career outcomes depend on the qualification, practical experience, portfolio, technical skills and employer requirements. Students should build projects, gain internship experience and develop communication and problem-solving skills alongside their studies."
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
            "The exact checklist depends on the institution and programme. Applicants may need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completed application form.",
            "Secondary-school certificates and mark sheets for bachelor\u2019s admission.",
            "Bachelor\u2019s degree certificate and transcripts for master\u2019s admission.",
            "Valid passport or accepted identification.",
            "English-language proficiency results, if required.",
            "CV or r\u00e9sum\u00e9 for postgraduate applications, where requested.",
            "Statement of purpose, if required.",
            "Letters of recommendation, where applicable.",
            "Work-experience certificates, if requested.",
            "Certified translations of documents not issued in an accepted language.",
            "Any additional documents specified by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Check whether the university requires certified copies, originals or electronically verified documents before submission."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Mauritius (UoM)",
      "location": "University of Mauritius (UoM)",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "UoM offers undergraduate degrees in Computer Science, Software Engineering and Applied Computing. At postgraduate level, it lists an MSc Artificial Intelligence and an MSc Software Project Management. These programmes can suit students interested in software development, AI and technology project leadership.",
      "img": uniImg1
    },
    {
      "name": "Middlesex University Mauritius",
      "location": "Middlesex University Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Its BSc (Hons) Computer Science (Systems Engineering) is listed as a three-year, full-time programme for September 2026\\. The published 2026\u20132027 fee is MUR 302,800 for Mauritian students and \u00a36,400 for international students, including the administrative fee. Confirm the current international fee before applying. When comparing **Computer Science Engineering Universities in Mauritius**, students should consider the course structure, academic requirements, tuition fees and study duration. **Edu-Hawk Worldwide** can assist students in understanding the available study pathways.",
      "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Computer Science in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Computer Science in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Computer Science in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ComputerScienceMauritius() {
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
      seoPath="/study-abroad/mauritius/computer-science"
    />
  );
}
