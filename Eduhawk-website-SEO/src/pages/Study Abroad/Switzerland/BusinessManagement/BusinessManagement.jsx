import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/BusinessManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/BusinessManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/BusinessManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/BusinessManagement/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/BusinessManagement/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/BusinessManagement/image2.png";
import cmsData from "../../../../data/study_abroad/switzerland/business-management.json";

const page = {
  name: "Study Business Management in Switzerland",
  country: "Switzerland",
  slug: "business-management",
  title: "Study Business Management in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Business Management in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Business Management in Switzerland, Business Management in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Business Management Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Switzerland Business Management for Indian Students",
  heroParas: [
    "**Business Management in Switzerland for Indian Students** offers opportunities to develop business knowledge, leadership skills and international career prospects."
],
  overview: [
    "Switzerland is internationally renowned for academic excellence, state-of-the-art research infrastructure, and world-class faculty. Studying Business Management provides Indian students with cutting-edge theoretical foundations and strong practical exposure.",
    "Graduates benefit from degrees accredited across Europe and globally, offering excellent career pathways in Switzerland, Europe, and international markets."
],
  level: "Bachelor & Master in Business Management",
  crumb: "Business Management",
  stats: [
    {
        "label": "Degree Choices",
        "value": "BBA, BBM & M.Sc. Management"
    },
    {
        "label": "Course Duration",
        "value": "3 Years (UG) / 1.5\u20132 Yrs (PG)"
    },
    {
        "label": "Top Institutions",
        "value": "Uni of St. Gallen, Lausanne & UZH"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,500 \u2013 CHF 4,500 / Year"
    }
],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Study Business Management in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students from all over the world come to Switzerland for the high quality of education, the international business experience and the opportunities for a career. In Switzerland, students studying Business Management develop their leadership, strategic planning, communication, financial management and entrepreneurial skills. Both the bachelor and master programs offer opportunities to explore international business practices and to be exposed to Switzerland\u2019s strong corporate, banking, hospitality and finance sectors.",
                        "**Study Business Management in Switzerland** and learn international business practices. Develop skills for a global business environment. Choosing **Business Management in Switzerland for Indian Students** can help students explore international academic and professional opportunities."
                ]
        }
]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "Business Administration Courses in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Swiss institutions provide a wide range of undergraduate and postgraduate **Business Administration Courses in Switzerland** such as:",
                        "B.S. in Business Management",
                        "Bachelor of Business Adminstration (BBA)",
                        "Bachelor of International Business",
                        "Bachelor of Business Administration and Management (BBAM)",
                        "Master of Business Management",
                        "Master of Business Administration (MBA)",
                        "International Business Master's",
                        "Master\u2019s in Strategic Management",
                        "Master in Entrepreneurship and Innovation",
                        "Masters in Finance and Marketing",
                        "Programs, teaching languages and admission requirements vary from institution to institution."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Universities for Business Management in Switzerland",
      lead: "Explore leading Swiss universities offering accredited Business Management programs, modern facilities, and global career pathways.",
      unis: [
        {
          name: "University of Lausanne!",
          location: "Lausanne, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Business Management.",
          img: uniImg1
        },
        {
          name: "International Institute Geneva!",
          location: "Geneva, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Business Management.",
          img: uniImg2
        },
        {
          name: "Business Management Universities in Switzerland",
          location: "Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Business Management.",
          img: null
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Business Management Eligibility Requirements",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Eligibility for Business Management in Switzerland** depends on the level of study, academic background, language skills and the entry criteria of the chosen institution.",
                        "For Undergraduate Programs:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Secondary qualification (Class 12 or equivalent)",
                        "Academic results that meet the requirements of the institution.",
                        "Appropriate language proficiency for the program.",
                        "Any additional entrance examinations or assessments required."
                ]
        },
        {
                "t": "p",
                "items": [
                        "Master\u2019s Programs:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "A recognized Bachelor\u2019s degree in business or a related discipline depending on the program.",
                        "Academic transcripts and degree certificates copies.",
                        "Work experience relevant to certain courses, especially some MBA courses.",
                        "Language skills (English or other languages depending on the institution)."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Requirements for Admission to Business Management",
      groups: [
        {
                "t": "p",
                "items": [
                        "Admission to **Business Management in Switzerland** may require academic transcripts, proof of language proficiency and other program specific admission requirements.",
                        "For selected postgraduate programs, applicants are usually required to submit academic transcripts, proof of previous qualifications, a valid passport, a statement of purpose or letter of motivation and a CV. Letters of recommendation, entrance tests, interviews, or work experience might also be necessary.",
                        "Admission criteria differ for public universities, universities of applied sciences and private business schools. Students should review the specific **Business Management in Switzerland for Indian Students** admission requirements before applying."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Length of Business Management Courses",
      groups: [
        {
                "t": "p",
                "items": [
                        "In Switzerland, a bachelor\u2019s degree usually takes about three years to complete, but depending on the institution and the program, it may take longer.",
                        "Master\u2019s degrees typically require 1\u20132 years to complete. The length of MBA programs varies depending on the program\u2019s format and structure."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "Switzerland Business Management Tuition Fees (INR)",
      groups: [
        {
                "t": "p",
                "items": [
                        "Tuition fees vary considerably depending on whether students opt for a public university or a private institution."
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Program",
                        "Indicative annual tuition fee"
                ],
                "rows": [
                        [
                                "Bachelor\u2019s in Business Management",
                                "\u20b91 lakh\u2013\u20b925 lakh"
                        ],
                        [
                                "Master\u2019s in Business Management",
                                "\u20b91 lakh\u2013\u20b930 lakh"
                        ],
                        [
                                "MBA programs",
                                "\u20b910 lakh\u2013\u20b980 lakh or more for the full program"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "These are general planning estimates and are not confirmed fees for a particular university. Private business schools and elite MBA programs can be much more costly. Students should check with their chosen institution for current fees."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Degree Recognition & Careers",
      title: "Cost of Living in Switzerland for International Students (\u20b9)",
      groups: [
        {
                "t": "p",
                "items": [
                        "Life in Switzerland is rather expensive. Students need to budget for accommodation, food, travel, health insurance, study materials and personal expenses.",
                        "Indicative monthly budget would be \u20b91.2 lakh-\u20b92.5 lakh depending on city, type of accommodation, lifestyle and insurance. Zurich and Geneva will cost more than the smaller cities, expect that."
                ]
        }
]
    },
    {
      slot: "salary",
      eyebrow: "Salaries & Opportunities",
      title: "Scholarships for Business Management Students",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students might want to explore the university scholarships, merit scholarships, financial aid and some external scholarships. Scholarships are available according to nationality, academic achievement, and level of study and institution.",
                        "Funding for undergraduate and professional business programs may be more limited than for some research-oriented graduate programs. Students should check eligibility and application deadlines before relying on scholarship support."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Business Management Career Opportunities",
      groups: [
        {
                "t": "p",
                "items": [
                        "A Business Management degree can prepare students for a wide variety of positions across industries, including:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Business Development, Executive- Management of Trainees.",
                        "Executive or Manager Marketing",
                        "HR ExecutiveOperations Manager",
                        "Business Analysis",
                        "Project Manager / Coordinator",
                        "Financial advisor- International Business Consultant",
                        "Business owner/entrepreneur",
                        "11. Bachelor\u2019s graduates often enter into entry-level or trainee positions, while master\u2019s graduates may be eligible for more specialized or senior roles, depending on their experience and skills."
                ]
        },
        {
                "t": "p",
                "items": [
                        "**Salary After Business Management in Switzerland (INR)**",
                        "Salaries vary depending on qualifications, experience, employer, location, industry and language skills.",
                        "For planning purposes gross annual salary ranges, in U.S. dollars, are:"
                ]
        },
        {
                "t": "table",
                "headers": [
                        "Career stage",
                        "Estimated annual salary"
                ],
                "rows": [
                        [
                                "Entry-level business roles",
                                "\u20b945 lakh\u2013\u20b975 lakh"
                        ],
                        [
                                "Experienced business professionals",
                                "\u20b970 lakh\u2013\u20b91.2 crore"
                        ],
                        [
                                "Senior management roles",
                                "\u20b91 crore\u2013\u20b92 crore or more"
                        ]
                ]
        },
        {
                "t": "p",
                "items": [
                        "These are rough estimates, not guarantyd salaries or verified averages. When estimating the savings, Swiss living costs and taxes should be taken into account . Actual compensation may be lower or higher .",
                        "**Business Management Courses Admission**",
                        "Many Swiss institutions have autumn semester admissions and some institutions and private business schools also have spring or additional intakes.",
                        "Students are advised to check the intake schedule and application deadlines for the program they are interested in, especially if they need more time for visa documentation."
                ]
        }
]
    },
    {
      slot: "section-13",
      eyebrow: "Documents Needed for Admission",
      title: "Documents Needed for Admission",
      groups: [
        {
                "t": "p",
                "items": [
                        "Some of the documents that may be needed are:",
                        "\u2013 Valid passport"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Class 10 and Class 12 certificates for bachelor\u2019s degree applicants",
                        "Applicants for master\u2019s degree: Bachelor\u2019s degree and transcripts",
                        "Resume or Curriculum Vitae if required"
                ]
        },
        {
                "t": "p",
                "items": [
                        "\u2013 Motivation/letter of intent"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "English or other language proficiency test scores",
                        "References available upon request",
                        "Photographs (passport sized)",
                        "Visa Application Financial Papers",
                        "Documents beyond the requirements of the institution"
                ]
        }
]
    },
    {
      slot: "section-14",
      eyebrow: "English Language Requirements (IELTS/TOEFL)",
      title: "English Language Requirements (IELTS/TOEFL)",
      groups: [
        {
                "t": "p",
                "items": [
                        "English language programs may require IELTS, TOEFL or other accepted language proof. Some institutions may accept other evidence of English proficiency.",
                        "Some programs, especially in German, French or Italian may require proficiency in the language. Minimum scores and exemptions vary between universities and courses."
                ]
        }
]
    },
    {
      slot: "section-15",
      eyebrow: "Business Management Specializations",
      title: "Business Management Specializations",
      groups: [
        {
                "t": "p",
                "items": [
                        "Students may choose a specialization according to their career goals, academic background and program availability.",
                        "Common choices:"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "International Business Management",
                        "Accounting and Finance"
                ]
        },
        {
                "t": "p",
                "items": [
                        "\\-Marketing Management"
                ]
        },
        {
                "t": "ul",
                "items": [
                        "Human Resources Management",
                        "Business Ownership",
                        "Strategic Management",
                        "Supply Chain and Operations Management",
                        "Business Analysis",
                        "Luxury Brand Management",
                        "Innovation & Project Management"
                ]
        }
]
    },
    {
      slot: "section-16",
      eyebrow: "Internship and practical training",
      title: "Internship and practical training",
      groups: [
        {
                "t": "p",
                "items": [
                        "Some business programs offer internships, company projects, consulting, case studies and industry collaborations. These opportunities enable students to apply classroom knowledge to practical business situations.",
                        "Availability depends on institution and degree structure. Students should also check the legal requirements for internships and employment in Switzerland.",
                        "**Part-Time Job Opportunities for International Students**",
                        "International students may be eligible to work part-time, subject to the relevant Swiss immigration regulations. Employment is usually limited for many non-EU/EFTA students. There is a waiting period of 6 months after the beginning of studies and during the semester a limit of 15 hours per week, subject to the applicable conditions and approval.",
                        "Students should check the rules with the relevant cantonal migration authority before they begin employment. Part-time work should not be viewed as a guaranty of tuition or living expenses."
                ]
        }
]
    },
    {
      slot: "section-18",
      eyebrow: "Post Study Work Opportunities in Switzerland",
      title: "Post Study Work Opportunities in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Depending on their nationality, qualification and immigration status, graduates from Swiss higher education institutions may be able to work after they have finished their studies. Graduates from third countries may be eligible for a limited period of up to six months to find suitable employment, under applicable conditions.",
                        "You must meet the conditions for a work and residence permit if you want to have a long-term employment. A Swiss degree does not automatically mean a job or a work permit.",
                        "**How Edu-Hawk Worldwide Can Help You Study Business Management in Switzerland**",
                        "**Edu-Hawk Worldwide** assists students in identifying suitable business management courses according to their academic profile, career aspirations, and budget. We can provide advice ranging from shortlisting universities to helping with applications, document support, admission guidance and understanding visa requirements.",
                        "If you are planning to pursue a bachelor\u2019s degree after Class 12 or a master\u2019s degree after graduation, **Edu-Hawk Worldwide** can help you get an idea of what to study and how to prepare for the next steps.",
                        "Explore overseas education opportunities at [www\\.eduhawk.in](http://www.eduhawk.in)."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Is IELTS or TOEFL mandatory for studying Business Management in Switzerland?",
        "a": "Requirements vary by institution and program level. English-taught programs generally require IELTS (6.5+) or TOEFL (90+), while German/French programs require proof of proficiency at B2/C1 levels."
    },
    {
        "q": "Can Indian students work part-time while studying Business Management in Switzerland?",
        "a": "Yes, international students are permitted to work up to 15 hours per week during academic semesters and full-time during official vacation periods after completing 6 months of study in Switzerland."
    },
    {
        "q": "What is the average tuition fee for Business Management in Swiss public universities?",
        "a": "Public universities in Switzerland offer highly subsidized tuition, typically ranging from CHF 1,000 to CHF 4,000 per year, making it one of the most cost-effective study destinations in Europe."
    },
    {
        "q": "Are degrees from Swiss universities recognized globally and in India?",
        "a": "Yes, degrees awarded by Swiss cantonal and federal universities are accredited by the Swiss government and recognized globally, including by the Association of Indian Universities (AIU) and international employers."
    }
]
};

export default function BusinessManagementSwitzerland() {
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
    />
  );
}
