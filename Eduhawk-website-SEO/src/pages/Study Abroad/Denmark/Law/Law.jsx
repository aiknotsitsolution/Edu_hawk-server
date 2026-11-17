import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Denmark/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Denmark/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Denmark/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Denmark/Law/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Denmark/Law/image1.png";
import uniImg2 from "../../../../Images/Abroad/Denmark/Law/image2.png";
import uniImg3 from "../../../../Images/Abroad/Denmark/Law/image3.png";
import uniImg4 from "../../../../Images/Abroad/Denmark/Law/image4.png";
import cmsData from "../../../../data/study_abroad/denmark/law.json";

const page = {
  "name": "Law",
  "country": "Denmark",
  "slug": "law",
  "title": "Law in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Law in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Law in Denmark, Law in Denmark for Indian Students, Best Universities in Denmark, Denmark Law Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Law in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Law in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Law."
  ],
  "level": "LLB & LLM in Law",
  "crumb": "Law",
  "stats": [
    {
      "val": "DKK 60K-130K",
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
      "val": "20 Hrs/Week",
      "label": "Part-Time Work"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World Top-100 Universities",
      "desc": "Study in globally respected Danish institutions including University of Copenhagen, DTU, and Aarhus University."
    },
    {
      "icon": "FaGraduationCap",
      "title": "Innovative PBL Learning",
      "desc": "Problem-Based Learning model focusing on collaborative projects, real-world applications, and critical analysis."
    },
    {
      "icon": "FaFileAlt",
      "title": "High Living Standard & Safety",
      "desc": "Denmark consistently ranks among the happiest, safest, and most progressive countries in the world."
    },
    {
      "icon": "FaCheckCircle",
      "title": "Post-Study Work Visa",
      "desc": "Non-EU graduates are eligible for post-study residence permits to seek employment and build global careers."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Denmark",
      "title": "Why Study Law in Denmark?",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Law in Denmark** offers opportunities for students interested in the study of law, international law, European law, business law and human rights. A study of law in Denmark can assist students in comprehending European legal systems, international regulations, commercial agreements and the relationship between law and society. Students considering a **Bachelor of Laws in Denmark** or a **Master of Laws in Denmark** should understand the academic and professional opportunities available before selecting a program.",
            "Analytical thinking, research, case-based learning and understanding of legal principles in practical contexts are emphasized at Danish universities. But many Danish law degrees are taught in Danish and English taught options might be more common at the postgraduate level in specialized fields. Exploring available **Law courses in Denmark** can help students identify programs that match their academic interests and career plans.",
            "Main benefits are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Exposure to European and international legal systems.",
            "Opportunities to study business, commercial and human rights law.",
            "Development of legal research, writing and analytical skills.",
            "International academic exposure and multicultural learning experiences.",
            "Career paths in legal research, compliance, business, policy and international organizations."
          ]
        },
        {
          "t": "p",
          "items": [
            "Crucial: A law graduate from Denmark cannot practice law in India or Denmark merely for being a law graduate from Denmark. Professional requirements vary by country and the specific role you seek within the law.",
            "**Edu-Hawk Worldwide** helps students explore hospitality and tourism study options, understand university requirements and plan their study-abroad applications"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Law Studies in Denmark",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Law-related programs are available at various academic levels but course titles, teaching languages and professional recognition vary from institution to institution. Students interested in a **Bachelor of Laws in Denmark** can explore undergraduate legal education, while those who already hold a qualifying law degree may consider a **Master of Laws in Denmark** or a specialist postgraduate program.",
            "Choices at the bachelor's level are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor of Laws (LL.B.) or equivalent qualification in national law;",
            "Legal Studies and Law",
            "The law of business",
            "Studies in Public Administration and Law",
            "European and International Legal Studies, where available"
          ]
        },
        {
          "t": "p",
          "items": [
            "Master's level options might include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "LL.M.",
            "European and international law",
            "Commercial and business law",
            "Intellectual Property Law",
            "Human Rights Law",
            "International Business Law",
            "Maritime Law",
            "Law, Governance and Public Policy"
          ]
        },
        {
          "t": "p",
          "items": [
            "Students exploring **Law courses in Denmark** should compare the curriculum, teaching language and academic entry criteria for each qualification.",
            "Students need to distinguish between a professional law qualification and a specialist postgraduate qualification. An LL.M. is normally aimed at those who already have a qualifying law degree and does not automatically confer rights of professional practice."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities in Denmark to Study Law",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Law programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Copenhagen (UCPH)",
          "location": "Copenhagen, Denmark",
          "fee": "DKK 65,000 \u2013 120,000 / Year",
          "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
          "img": uniImg1
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Kongens Lyngby, Denmark",
          "fee": "DKK 75,000 \u2013 115,000 / Year",
          "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
          "img": uniImg2
        },
        {
          "name": "Aarhus University (AU)",
          "location": "Aarhus, Denmark",
          "fee": "DKK 60,000 \u2013 110,000 / Year",
          "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
          "img": uniImg3
        },
        {
          "name": "Aalborg University (AAU)",
          "location": "Aalborg, Denmark",
          "fee": "DKK 58,000 \u2013 105,000 / Year",
          "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
          "img": uniImg4
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg1
        }
      ],
      "unis_data": [
        {
          "name": "University of Copenhagen (UCPH)",
          "location": "Copenhagen, Denmark",
          "fee": "DKK 65,000 \u2013 120,000 / Year",
          "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
          "img": uniImg1
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Kongens Lyngby, Denmark",
          "fee": "DKK 75,000 \u2013 115,000 / Year",
          "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
          "img": uniImg2
        },
        {
          "name": "Aarhus University (AU)",
          "location": "Aarhus, Denmark",
          "fee": "DKK 60,000 \u2013 110,000 / Year",
          "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
          "img": uniImg3
        },
        {
          "name": "Aalborg University (AAU)",
          "location": "Aalborg, Denmark",
          "fee": "DKK 58,000 \u2013 105,000 / Year",
          "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
          "img": uniImg4
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg1
        }
      ],
      "note": [
        "Tuition fees are indicative and subject to annual review by Danish higher education institutions.",
        "EU/EEA students may study tuition-free; international fees apply to non-EU/EEA citizens."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who can study law in Denmark?",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning a **Bachelor of Laws in Denmark** or a **Master of Laws in Denmark** should check the academic and language criteria of their chosen institution. The **Law admission requirements in Denmark** can differ depending on the degree level and specialization.",
            "Applicants typically require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Minimum Qualification: 12th pass or equivalent qualification",
            "Academic results which satisfy the university's entrance requirements.",
            "Danish language proficiency for law degrees given in Danish.",
            "English language requirement where applicable for the specific program.",
            "Other prerequisite subjects if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants will generally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized degree at bachelors level in law or a closely related subject, subject to the program.",
            "Academic transcripts and evidence of relevant legal study.",
            "English language requirements for English language programs.",
            "A motivation letter or CV if required.",
            "Relevant academic or professional experience for selected specialist programs."
          ]
        },
        {
          "t": "p",
          "items": [
            "You may need to have a qualifying law degree, rather than a general bachelor\u2019s degree, to get onto a professional law master\u2019s program.",
            "Students should review the **Law admission requirements in Denmark** in advance, particularly when applying for specialized postgraduate programs. Checking the **Law admission requirements in Denmark** can help applicants prepare the required academic records and supporting documents."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements to Law in Denmark",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Universities will consider applications on the basis of the program chosen. Requirements may include academic grades, subject prerequisites, language proficiency and supporting documents. Applicants planning to pursue a **Bachelor of Laws in Denmark** or a **Master of Laws in Denmark** should check the relevant application process for their selected qualification.",
            "Applicants to specialist postgraduate programs may be asked to demonstrate relevant knowledge of international law, commercial law, human rights or other related areas.",
            "Before applying, check the program language, eligibility requirements, application deadline and if the qualification will support your intended career path."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What is the Price of Studying Law in Denmark?",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "These numbers are approximate for international students from non-EU/EEA countries. Tuition depends on the university, the program and the fee schedule at the time. Students comparing **Law courses in Denmark** should consider tuition fees, living expenses and other study-related costs when planning their budgets."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Price",
            "Bachelor's",
            "Master's"
          ],
          "rows": [
            [
              "Tuition fees per annum",
              "\u20b96-15 lakhs",
              "\u20b98-18 lakhs"
            ],
            [
              "Monthly living expenses",
              "\u20b980,000 \u2013 \u20b91.30 lakh",
              "\u20b980,000 \u2013 \u20b91.30 lakh"
            ],
            [
              "Cost of living per year",
              "\u20b99.6-15.6 lakh",
              "\u20b99.6-15.6 lakh"
            ],
            [
              "Normal length",
              "Approx 3 years",
              "About 2 years"
            ],
            [
              "Estimated total budget",
              "\u20b947-92 lakh",
              "\u20b935-70 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are planning estimates, not official quotes. The actual costs may differ. The estimates are based on the assumption that a suitable program is available at the tuition level indicated. In Denmark there are several professional law paths that require a longer study period.",
            "Students also have to budget for application fees, insurance (where applicable), travel, accommodation deposits and residence permit requirements. Eligible students may be awarded scholarships and tuition-fee waivers."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to get admitted to study law in Denmark",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process for **Law in Denmark** involves selecting a suitable specialization, checking academic eligibility and preparing the required documents. Students should understand the application process before applying to a **Bachelor of Laws in Denmark** or a **Master of Laws in Denmark** program.",
            "Select your specialization: Choose general legal studies, business law, international law or some other field of law.",
            "Make a list of colleges to apply to: Compare course language, course curriculum, course duration and career outcomes.",
            "Verify eligibility: Please confirm that your current level of education meets the program requirements.",
            "Documents preparation- Collect academic records, identification, language test results, and other required documents.",
            "Apply here: [http\\://bit.ly/2xjQZ9H](http://bit.ly/2xjQZ9H) Apply through the official university admission system.",
            "How about you? Provide any motivation letter, CV or additional information.",
            "Get the admission decision: Review the offer, tuition fee and conditions.",
            "Plan your move: Arrange finance, accommodation and the right Danish student residence permit.",
            "Students can also approach **Edu-Hawk Worldwide** for guidance on course selection, application preparation and study-abroad admission planning."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Recognition and Professional Accreditation",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Before you enrolll for a law degree, ensure that the institution is recognized and the qualification it awards. The recognition of the academic title and the right to exercise the profession are two distinct issues.",
            "Students intending to practice in India should check the relevant requirements with the Bar Council of India before enrolling. Do not assume that a foreign law degree automatically qualifies you to practice in India.",
            "Those wishing to qualify as lawyers in Denmark may be subject to professional rules and nationality related restrictions. In Denmark the rules for foreign lawyers are set out in official guidance."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Opportunities Law, B.A.",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Law graduates may find openings in legal research, business, compliance, public policy, international organizations and corporate services. Specific roles will be defined using degree, language skills, work authorization and professional qualifications.",
            "Possible career routes are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Research Lawyer",
            "Corporate Compliance Analyst",
            "Specialist, Contract Management",
            "Associate, Legal Operations",
            "Regulatory and Business Analyst",
            "Researcher Associate Human Rights \\- Policy Research",
            "Consultant in International Business",
            "Privacy and Data Protection Specialist",
            "Legal Assistant, as per local requirements"
          ]
        },
        {
          "t": "p",
          "items": [
            "Salary expectations: Pay depends a lot on the job, the company, your experience and the country you live in. Salaries can be compared but all things considered against the individual career path rather than just a degree . Some professional legal positions may require local qualifications and language skills ."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required documents",
      "lead": "Essential details regarding law in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Passport valid",
            "Marksheets of Class 10 and Class 12",
            "Certificate of school completion",
            "Proof of required academic subjects",
            "Language proficiency results, if needed",
            "Letter of motivation if required",
            "Certified translations where applicable"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport;",
            "Bachelor's degree certificate",
            "Academic transcripts",
            "CV / Resume",
            "Statement of purpose or motivation letter",
            "English language test results if required",
            "Recommendation letters (if desired)",
            "Course Descriptions or Proof of Required Relevant Legal Studies"
          ]
        },
        {
          "t": "p",
          "items": [
            "We may ask for more financial and immigration documents after you are admitted."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Copenhagen (UCPH)",
      "location": "Copenhagen, Denmark",
      "fee": "DKK 65,000 \u2013 120,000 / Year",
      "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
      "img": uniImg1
    },
    {
      "name": "Technical University of Denmark (DTU)",
      "location": "Kongens Lyngby, Denmark",
      "fee": "DKK 75,000 \u2013 115,000 / Year",
      "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
      "img": uniImg2
    },
    {
      "name": "Aarhus University (AU)",
      "location": "Aarhus, Denmark",
      "fee": "DKK 60,000 \u2013 110,000 / Year",
      "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
      "img": uniImg3
    },
    {
      "name": "Aalborg University (AAU)",
      "location": "Aalborg, Denmark",
      "fee": "DKK 58,000 \u2013 105,000 / Year",
      "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
      "img": uniImg4
    },
    {
      "name": "University of Southern Denmark (SDU)",
      "location": "Odense, Denmark",
      "fee": "DKK 62,000 \u2013 115,000 / Year",
      "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
      "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can Indian students pursue Law in Denmark after Class 12?",
      "a": "Yes, as long as they meet the admission requirements for a relevant bachelor\u2019s program. Many of the standard Danish law degrees are taught in Danish though, which is an important factor to consider for international applicants."
    },
    {
      "q": "Q2. Is it possible to study Law in Denmark in English?",
      "a": "There are a few specialized law-related courses that may be taught in English, but full professional law degrees in English are limited. For the latest teaching language and curriculum, please visit the university\u2019s official website."
    },
    {
      "q": "Q3. What is the duration of Law Study in Denmark?",
      "a": "Typically, a bachelor\u2019s degree takes around three years and a master\u2019s degree around two years, although this can vary for professional qualification routes and individual programs."
    },
    {
      "q": "Q4. If I study law in Denmark, will I be able to practise in India?",
      "a": "Not by default. You should check with the Bar Council of India before you select your program to ensure that your foreign-law-degree is recognized and that you will be eligible to practice law."
    },
    {
      "q": "Q5. How much does it cost to study Law in Denmark?",
      "a": "Tuition and living costs depend on the university, program and length of study. Please use the estimates in this guide for initial planning and confirm the exact fees with the institution."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function LawDenmark() {
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
      seoPath="/study-abroad/denmark/law"
    />
  );
}
