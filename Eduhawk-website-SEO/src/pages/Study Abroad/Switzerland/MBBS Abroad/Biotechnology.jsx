import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/Biotechnology/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/Biotechnology/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/Biotechnology/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/Biotechnology/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/Biotechnology/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/Biotechnology/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/Biotechnology/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/biotechnology.json";

const page = {
  name: "Biotechnology",
  country: "Switzerland",
  slug: "biotechnology",
  title: "Biotechnology in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Biotechnology in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Biotechnology in Switzerland, Biotechnology in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Biotechnology Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Biotechnology in Switzerland for Indian Students",
  heroParas: [
    "**Biotechnology in Switzerland for Indian Students** provides an opportunity to pursue studies in biological sciences, genetics, molecular biology, bioinformatics, biopharmaceuticals and industrial biotechnology. Swiss universities are renowned for their research in science and technology, offering students interested in laboratory research, pharmaceutical development, diagnostics, agriculture, and medical innovation the opportunity to excel."
],
  overview: [
    "Those who want to **Study Biotechnology in Switzerland** have a wide variety of academic programs and research opportunities to choose from. Switzerland has a robust life-sciences sector and biotechnology graduates may find work in research institutions, pharmaceutical companies, biotechnology firms, diagnostics laboratories and academic organizations. Career prospects are affected by the degree, practical experience, specialization and work authorization.",
    "**Biotechnology in Switzerland for Indian Students** is an option worth exploring for students interested in scientific research, laboratory training and the international life-sciences industry. **Edu-Hawk Worldwide** can help students understand study options and application planning."
],
  level: "B.Sc. & M.Sc. in Biotechnology",
  crumb: "Healthcare & Biotechnology",
  stats: [
    {
        "label": "Degree Choices",
        "value": "B.Sc. & M.Sc. in Biotechnology"
    },
    {
        "label": "Course Duration",
        "value": "3 Yrs (UG) / 1.5\u20132 Yrs (M.Sc.)"
    },
    {
        "label": "Top Institutions",
        "value": "ETH Zurich, Univ of Zurich & Basel"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,000 \u2013 CHF 4,000 / Year"
    }
],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Study Biotech in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Biotechnology in Switzerland for Indian Students** offers a focused range of high-impact academic and research opportunities:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "**Education through research:** Understand molecular biology, genetics, cell biology and advanced laboratory techniques.",
                        "**Life-sciences industry:** Switzerland has a well-developed pharmaceutical and biotechnology industry.",
                        "**Advanced research facilities:** Depending on the program, students may benefit from modern laboratories, research groups and interdisciplinary projects.",
                        "**Specialisation opportunities:** Biopharmaceuticals, genetic engineering, bioinformatics, synthetic biology and industrial biotechnologies.",
                        "**International academic environment:** Work together with researchers and students in other scientific fields.",
                        "**Further study options:** Continue to doctoral studies in biotechnology, molecular biology, biomedical sciences or related fields."
                ]
        },
        {
                "t": "p",
                "items": [
                        "The program language and the admission criteria are different. There are many master\u2019s programs in English, but for bachelor\u2019s programs you may need to know German, French or another local language."
                ]
        }
]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Biotechnology Training in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Biotechnology Courses in Switzerland** cover basic lab skills to more complex scientific research in a variety of biological and applied science fields."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Course",
                        "Typical length",
                        "Main topics of study"
                ],
                "rows": [
                        [
                                "Bachelor\u2019s degree in biotechnology or other life-science discipline",
                                "\\~3 years",
                                "Biology, chemistry, genetics, microbiology, laboratory methods"
                        ],
                        [
                                "MSc Biotechnology",
                                "Usually 1.5-2 years",
                                "Molecular biotechnology, bioprocesses, research techniques"
                        ],
                        [
                                "Molecular Biology MSc",
                                "1.5-2 years (typically)",
                                "Cell biology, genetics, molecular mechanisms"
                        ],
                        [
                                "MSc Biomedical Sciences Typically 1.5\u20132 years Human biology, disease mechanisms, translational research",
                                "",
                                ""
                        ],
                        [
                                "Bioinformatics MSc",
                                "Normally 1.5\u20132 years",
                                "Biological data, programming, computational biology"
                        ],
                        [
                                "PhD in Biotechnology or related field",
                                "Typically 3\u20135 years",
                                "Independent scientific investigation and advanced laboratory work"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "This is not a list of every program offered by every university, but typical routes of study. (Exact degree titles, credits and lengths vary by institution.)"
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Universities For Biotechnology In Switzerland",
      lead: "Explore leading Swiss universities offering accredited Biotechnology programs, modern facilities, and research opportunities.",
      unis: [
        {
          name: "ETH Zurich",
          location: "Basel campus | English",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Offers MSc in Biotechnology with a focus on systems biology, synthetic biology, molecular science and engineering. The program is 120 ECTS credits and normally takes two years to complete. Applicants should have a relevant academic background, including sufficient biology, mathematics and computer science. C1 English proficiency required.",
          img: uniImg1
        },
        {
          name: "University of Zu\u0308rich",
          location: "Zurich | English for M.Sc. Biology",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Provides an MSc in Biology, with specializations in microbiology and immunology, biochemistry, molecular biology, and systems biology. This is a pertinent alternative for students pursuing a research-oriented life-sciences degree. The program is 90 ECTS and typically lasts 1.5 years.",
          img: uniImg2
        },
        {
          name: "University of Basel",
          location: "Basel | Subject to the program",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Explore study opportunities in biology, molecular biology, and related life-sciences in Basel, Switzerland's major biopharma and life-sciences hub.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Criteria for Admission to Biotechnology in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Before deciding on a course, you need to be informed about \\*\\*Biotechnology Eligibility in Switzerland. The requirements vary whether you apply for a bachelor or master degree."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Bachelor\u2019s Degree in Biotechnology or Related Field"
                ]
        },
        {
                "t": "p",
                "items": [
                        "Applicants are usually required to"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Grade 12 or equivalent school leaving qualification.",
                        "Have an appropriate background in Biology, Chemistry, Mathematics and other required sciences.",
                        "Meet the university's requirements for credentials from foreign schools.",
                        "Show proficiency of the language of instruction.",
                        "Meet any entrance tests or other requirements imposed by the university."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Admission varies depending on the institution. Some Swiss bachelor\u2019s programs are taught mainly in German or French, so English-medium schooling may not suffice for the language requirement.",
                        "**Master in Biotechnology**",
                        "Normally applicants must:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Hold a bachelor\u2019s degree with a major in biotechnology, biology, biochemistry, biomedical sciences or similar.",
                        "Have enough previous coursework in the required science subjects.",
                        "Meet academic performance and prerequisite requirements.",
                        "Send transcripts and course descriptions in detail if asked for.",
                        "Show proficiency in English or the local language (depending on the programme).",
                        "Meet any program specific criteria for selection."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Applicants to the MSc in Biotechnology at ETH Zurich should have a strong academic record and adequate background in biology, mathematics and computer science. If the previous degree does not cover all prerequisites, additional coursework may be required."
                ]
        }
]
    },
    {
      slot: "language",
      eyebrow: "Language Requirements",
      title: "Admission Requirements for Biotechnology in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "To get into **Biotechnology in Switzerland** you have to fulfill the academic, language and documentation requirements of the university.",
                        "Documents most often requested:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Transcripts and academic certificates.",
                        "Documents for UG applications: Class 10 and Class 12",
                        "Certificate of Bachelor\u2019s degree and transcripts for master\u2019s applications."
                ]
        },
        {
                "t": "p",
                "items": [
                        "\\-Course description or syllabus, if required.",
                        "\u2022 Proof of proficiency in English, German or French."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Resume or curriculum vitae.",
                        "Letter of motivation or statement of purpose.",
                        "Academic recommendation letter(s) where required."
                ]
        },
        {
                "t": "p",
                "items": [
                        "\\-A valid passport."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Certified translations of documents (if required).",
                        "Application form and proof of payment of application fee."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Some universities may require additional subject specific documents or an entrance assessment. For example, ETH Zurich requires a motivation letter, an academic recommendation letter, course-content information and C1 English proficiency for the application for the MSc Biotechnology. The university\u2019s current rules also state that GRE requirements may apply to applicants whose degrees are from outside the EU/EFTA.",
                        "**Language requirements**"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "**English:** Common for science-based master\u2019s programs like ETH Zurich\u2019s MSc Biotechnology.",
                        "**German:** Required for certain bachelor\u2019s degree programs and courses at German speaking institutions.",
                        "**French:** Some programs in the French-speaking part of Switzerland."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Make sure to always check the program and intake language requirements for your specific program and intake."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Biotechnology in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The overall **Biotechnology in Switzerland for Indian Students** cost of studying depends on the university, degree, city, accommodation and student fee category.",
                        "**Biotechnology in Switzerland for Indian Students** also requires financial planning for tuition, accommodation, insurance and everyday living expenses."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Cost",
                        "Indicative cost estimate"
                ],
                "rows": [
                        [
                                "Certain public universities tuition: CHF 500-5,000 per semester",
                                ""
                        ],
                        [
                                "Accommodation",
                                "CHF 700\u20131,500/month"
                        ],
                        [
                                "Food and groceries",
                                "400-700 CHF/month"
                        ],
                        [
                                "Local transport",
                                "50-120 CHF/month"
                        ],
                        [
                                "Health insurance",
                                "CHF 100\u2013350+/month"
                        ],
                        [
                                "Personal and study expenses",
                                "CHF 150-400 per month"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "These numbers are budget estimates, not confirmed charges for each university. Some international students may be subject to additional fees including increased tuition, semester, administrative and lab fees.",
                        "**Approximate annual budget**",
                        "Students should be prepared to budget approximately CHF 20,000-40,000 or more a year for both tuition and living expenses. Actual costs can be outside this range depending on the institution and lifestyle.",
                        "Please check the official tuition fee schedule of the university, scholarship options, accommodation costs, and the financial proof required for a Swiss student visa or residence permit prior to submitting your application."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "Admission process for Biotechnology in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students who want to **Study Biotechnology in Switzerland** can follow the general admission steps:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "1. **Choose a programme:** Select biotechnology, molecular biology, bioengineering or another appropriate life-sciences degree that matches your career aspirations.",
                        "2. **Check eligibility:** Check the required subjects, degree equivalency and academic and language proficiency.",
                        "3. **Get your documents ready:** Academic transcripts, certificates, course descriptions, CV and any recommendations you need.",
                        "4. **Submit** Apply through the university\u2019s official portal before the application deadline.",
                        "5. **Fulfill additional requirements:** Submit language test scores, entrance exam results, or any other information that is required.",
                        "6. **Find out more:** Check the program duration, tuition fees, admission conditions and any other coursework.",
                        "7. **Arrange your finances and immigration:** Consider tuition fees, accommodation, insurance and the necessary Swiss student visa or residence permit process."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Each university has different application procedures and deadlines. For competitive programs, apply well in advance and check current intake dates on the official university website."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Career & Recognition",
      title: "Recognition of Degrees & Career Scope",
      groups: [
        {
                "t": "p",
                "items": [
                        "**What is the scope for Indian students to work in Switzerland after studying Biotechnology?**",
                        "Biotechnology is typically not a licensed profession such as medicine or pharmacy, so employers evaluate academic qualifications, lab experience, technical skills, and relevant research expertise. Non-EU/EFTA graduates are also subject to Swiss employment and work permit regulations.",
                        "Is Swiss Biotechnology Degree valid in India?",
                        "A Swiss biotech qualification can help you apply for research, pharmaceutical, manufacturing, diagnostics and further study opportunities in India. Acceptance is subject to the employer, university or other organization which evaluates the qualification. If you\u2019re a student looking at a government or specialized research job, be sure to see if there are any degree-equivalency requirements.",
                        "**Career Opportunities After Biotechnology Studies**",
                        "Opportunities for graduates may include:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Research Associate, Biotechnologist",
                        "Molecular biologist",
                        "Associate Bioprocess Development",
                        "Analyst, Quality Control",
                        "QA Specialist",
                        "Pharmaceuticals Research Associate",
                        "Clinical Research Associate (CRA)",
                        "Analyst, Bioinformatics",
                        "Science \\- Laboratory",
                        "Specialist of Biomanufacturing",
                        "Scientist, Research and Development",
                        "Scientist/Researcher (PhD) \\- Academic"
                ]
        },
        {
                "t": "p",
                "items": [
                        "Advanced research and independent scientist jobs usually require a master\u2019s degree, significant hands-on experience, or a PhD."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Career Scope",
      title: "Salaries and Job Opportunities in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The below figures are illustrative estimates of annual gross salary only, and are not verified current averages or guaranteed earnings. Actual pay will vary based on role, employer, qualifications and experience, technical expertise, and location."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Career path",
                        "Example gross yearly salary"
                ],
                "rows": [
                        [
                                "Laboratory or research associate (entry-level)",
                                "CHF 60,000 \\- 80,000"
                        ],
                        [
                                "Quality control/quality assurance specialist",
                                "CHF 65,000 \u2013 90,000"
                        ],
                        [
                                "Bioprocess/Biotechnology Specialist",
                                "CHF 75-100\u2019000"
                        ],
                        [
                                "Clinical research professional",
                                "CHF 70,000\u2013100,000"
                        ],
                        [
                                "R\\&D Scientist, Senior",
                                "CHF 85,000-120,000+"
                        ],
                        [
                                "Biotechnology Project or Team Lead",
                                "CHF 100,000\u2013140,000+"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "Use these figures for preliminary planning purposes only. Look at recent job ads and salary surveys for the job and location you\u2019re interested in. Also, consider Swiss living costs, taxes, insurance and work-authorisation conditions."
                ]
        }
]
    },
    {
      slot: "important",
      eyebrow: "Key Considerations",
      title: "Documents required for admission to Biotechnology",
      groups: [
        {
                "t": "p",
                "items": [
                        "Prepare the following documents as per the university\u2019s application checklist:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Passport valid.",
                        "Class 10 and 12 certificates and mark sheets, if applicable.",
                        "Bachelor\u2019s degree certificate and transcripts for admission to master\u2019s programs.",
                        "If requested, detailed syllabi or course descriptions of subjects.",
                        "Certificates of English, German or French language as applicable.",
                        "Updated curriculum vitae/r\u00e9sum\u00e9.",
                        "Motivation letter or statement of purpose.",
                        "Letter(s) of recommendation from academic referees, if applicable.",
                        "GRE score, if applicable to the program of choice.",
                        "Certified translation of documents as required.",
                        "Application form completed and proof of payment of the application fee.",
                        "Additional documents required for admission, enrollment or visa processing."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students do Biotechnology in Switzerland after 12th?",
        "a": "Yes, students can look at relevant bachelor\u2019s programs, depending on the university\u2019s entry requirements and recognition of their school qualifications. Some programs have German or French prerequisites, so check the language prerequisites early on."
    },
    {
        "q": "How long does it take to study Biotechnology in Switzerland?",
        "a": "A bachelor\u2019s degree takes typically about three years, a master\u2019s degree about 1.5\u20132 years. The MSc in Biotechnology at ETH Zurich is a 120 ECTS, two-year program."
    },
    {
        "q": "Do I need IELTS for Biotechnology in Switzerland?",
        "a": "It is contingent upon the university and program. The MSc in Biotechnology at ETH Zurich requires C1 English proficiency, and the university publishes a list of accepted certificates and requirements. Other institutions may have different rules/exemptions."
    },
    {
        "q": "How much does it cost to study biotechnology in Switzerland?",
        "a": "Costs vary by university and student category. As a rough estimate for planning purposes, tuition and living expenses can add up to CHF 20,000\u201340,000 or more per year. Before budgeting, look at the official fee schedule of the institution you have selected."
    },
    {
        "q": "What are the jobs after Biotechnology in Switzerland?",
        "a": "Potential career opportunities include laboratory research, pharmaceutical development, quality control, bioprocessing, clinical research, bioinformatics, and biotechnology research and development. Senior research positions may require postgraduate qualifications and associated experience."
    }
],
  faqTitle: "Frequently Asked Questions"
};

export default function BiotechnologySwitzerland() {
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
      seoPath="/study-abroad/switzerland/biotechnology"
    />
  );
}
