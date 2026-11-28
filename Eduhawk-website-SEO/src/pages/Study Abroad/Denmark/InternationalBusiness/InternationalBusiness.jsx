import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Denmark/InternationalBusiness/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Denmark/InternationalBusiness/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Denmark/InternationalBusiness/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Denmark/InternationalBusiness/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Denmark/InternationalBusiness/image1.png";
import uniImg2 from "../../../../Images/Abroad/Denmark/InternationalBusiness/image2.png";
import uniImg3 from "../../../../Images/Abroad/Denmark/InternationalBusiness/image3.png";
import cmsData from "../../../../data/study_abroad/denmark/international-business.json";

const page = {
  "name": "International Business",
  "country": "Denmark",
  "slug": "international-business",
  "title": "International Business in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study International Business in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study International Business in Denmark, International Business in Denmark for Indian Students, Best Universities in Denmark, Denmark International Business Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "International Business in Denmark for Indian Students",
  "heroParas": [
    "Pursue an accredited degree in International Business in Denmark, mastering global market expansion, multinational corporate strategy, cross-border supply chains, and foreign trade. International students acquire cross-cultural leadership skills and explore post-study work establishment opportunities under Danish immigration frameworks."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for International Business."
  ],
  "level": "Bachelor & Master in International Business",
  "crumb": "International Business",
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
      "title": "Why study International Business in Denmark?",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark is an attractive destination for students who are interested in global trade, international management, business strategy and cross-border operations. The international business environment provides an opportunity to understand the way companies operate in different countries and markets.",
            "International Business studies prepare students for skills in global marketing, international finance, supply chain management, negotiations, and cross-cultural communication. Denmark\u2019s emphasis on innovation, sustainability, teamwork, and hands-on learning can prepare graduates for success in multinational corporations and international organizations.",
            "Some of the major benefits are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International business experience.",
            "Opportunities to learn about global markets and trade.",
            "Leadership and analytical skills development.",
            "Practical projects and case studies.",
            "The basis for a career in international companies."
          ]
        },
        {
          "t": "p",
          "items": [
            "**Edu-Hawk Worldwide** helps students explore business study options, understand university requirements and plan their study-abroad applications"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "International Business Studies in Denmark",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark offers undergraduate and postgraduate programs in international business and related fields. Students can explore a **Bachelor's in International Business in Denmark** or choose a **Master's in International Business in Denmark**, depending on their academic qualifications and career goals.",
            "The Bachelor\u2019s programs may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Business \\- World",
            "Business Administration and International Management",
            "Global Sales and Marketing",
            "Economics & Global Business",
            "Business Administration & Commercial Management",
            "Business Communication and International Trade"
          ]
        },
        {
          "t": "p",
          "items": [
            "Master\u2019s programs might include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MSc International Business",
            "International business and management",
            "Marketing",
            "International Business Development",
            "International Business and Economics",
            "Global Strategy and Management",
            "Supply Chain Management and Global Operations Management",
            "International Finance and Business Analytics"
          ]
        },
        {
          "t": "p",
          "items": [
            "A bachelor\u2019s degree typically takes three years to complete and most master\u2019s programs take two years. Exact title, length and language taught will vary from school to school."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best International Business Universities in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited International Business programmes, modern campuses, and international student support.",
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
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg2
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
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg2
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
      "title": "Eligibility for International Business Studies in Denmark",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Bachelor\u2019s qualification**",
            "Applicants typically require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th Pass or Equivalent.",
            "University requirements for grades in academic",
            "Mathematics or other designated subjects as appropriate.",
            "English language proficiency for English taught programs (if needed).",
            "Danish language proficiency if the program is taught in Danish."
          ]
        },
        {
          "t": "p",
          "items": [
            "**Eligibility for Master\u2019s**",
            "Applicants typically need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor\u2019s degree in business, management, economics or a comparable field.",
            "Relevant academic credits in business, economics, statistics or mathematics depending on the program.",
            "If required, competence in the English language demonstrated by IELTS, TOEFL or an accepted alternative.",
            "Additional documents or experience as required.",
            "Admission requirements differ by institution and program."
          ]
        },
        {
          "t": "p",
          "items": [
            "Understanding **International Business eligibility in Denmark** can help Indian students identify suitable bachelor's and master's programs according to their previous academic qualifications."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Denmark International Business Entry Requirements",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "For bachelor\u2019s programs, universities generally consider school qualifications, academic grades, required subjects and language proficiency.",
            "Typically, master\u2019s programs require applicants to submit a degree certificate, academic transcripts and information about previous coursework from their bachelor\u2019s degree. A few programs require particular credits in business administration, economics, quantitative methods or management.",
            "A CV, motivation letter, recommendation letters or interview may also be required. Students are advised to check the deadlines and procedures for international applicants before applying."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What is the cost of studying International Business in Denmark?",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indicative planning estimates for Indian students are given below. Fees are determined by the institution and the program."
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
              "Typical time",
              "3 years",
              "2 years"
            ],
            [
              "Estimated Total Budget",
              "\u20b947\u201392 lakh",
              "\u20b935\u201370 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are ballpark numbers \u2013 not official quotes on charges. Actual costs will vary depending on tuition, accommodation, transport, food and personal spending. Additional travel and one-time expenses may apply.",
            "Students can also check out scholarships and tuition fee waiver opportunities for eligible international applicants. The **International Business fees in Denmark** may differ between undergraduate and postgraduate programs, so applicants should confirm the official tuition details with their chosen university."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to Apply for International Business in Denmark",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Select your program: Choose a bachelor's or master's degree that corresponds to your career goals.",
            "Check eligibility: Review academic requirements, language requirements, and deadlines.",
            "Prepare documents: Gather transcripts, certificates, passport information and language-test scores, if applicable.",
            "Send in your application: Apply via the university's official portal or the relevant admissions system.",
            "Take the decision: The university will review your qualifications and supporting documentation.",
            "Take the offer: Pay and confirm your full tuition.",
            "How to apply for a residence permit: Follow the relevant Danish student immigration procedures.",
            "Get ready to leave: Secure lodging, transport and other necessary items."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students planning to pursue **International Business in Denmark** should follow the university's official application process and prepare all required documents before the application deadline."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Accreditation and Recognition",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Before enrolling check that the institution is officially recognized in Denmark and check what qualification you will receive when you graduate.",
            "Students should consider the program content, the opportunities for internships, for international exchange, for partnership with industry and further education. If you are thinking of doing an MBA in the future, you should also look at the entry requirements of the schools you are considering."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Opportunities in International Business",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates have opportunities available with multinational corporations, international trade, consulting, logistics, finance, technology and global marketing.",
            "Possible job titles include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "International Business Executive",
            "Business Development Mgr",
            "Export & Import Coordinator",
            "International marketing exec",
            "International Supply Chain Analyst",
            "Business Analyst",
            "Market Research Analyst",
            "International Sales Manager",
            "Management Consulting",
            "Operations Co-ordinator"
          ]
        },
        {
          "t": "p",
          "items": [
            "Graduates with a bachelor\u2019s degree may be assigned to entry-level positions and those with a master\u2019s degree may be considered for more specialized roles depending on their experience and skills.",
            "Getting a job depends on practical experience, language skills, specialization, and the needs of the employer. A degree doesn't guaranty a job."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required documents",
      "lead": "Essential details regarding international business in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**For Bachelor\u2019s Degree Applicants**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport valid",
            "Marksheets of Class 10 and Class 12",
            "Certificate of School Leaving",
            "Mandatory courses and grade certificates",
            "English language test results, if applicable",
            "Motivation letter, if required",
            "Certified translations where applicable"
          ]
        },
        {
          "t": "p",
          "items": [
            "**For M.A. Candidates:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A valid passport",
            "Certificate of Bachelor Degree",
            "Studies transcript",
            "Updated CV or resume",
            "Statement of purpose or motivation letter",
            "English-language test results (if required)",
            "Letters of recommendation, if requested",
            "Course descriptions or subject information, if applicable",
            "Work experience papers (if applicable)"
          ]
        },
        {
          "t": "p",
          "items": [
            "Additional financial and residence-permit documents may be requested after admission."
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
      "img": uniImg1
    },
    {
      "name": "University of Southern Denmark (SDU)",
      "location": "Odense, Denmark",
      "fee": "DKK 62,000 \u2013 115,000 / Year",
      "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
      "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can Indian students pursue International Business in Denmark after completing Class 12?",
      "a": "Yes. Students who meet the academic, subject and language requirements can apply for the eligible bachelor\u2019s programs."
    },
    {
      "q": "Q2. How long is International Business course in Denmark?",
      "a": "A bachelor\u2019s degree usually takes three years to complete and most master\u2019s programs two years."
    },
    {
      "q": "Q3. Is it possible to do a master's in International Business after a bachelor's in a different subject?",
      "a": "A number of programs will accept graduates from related disciplines whereas others will require a business, management or economics background. See the specific programme's prerequisites."
    },
    {
      "q": "Q4. How much does it cost to study International Business in Denmark?",
      "a": "On the rough estimate, a three-year bachelor\u2019s degree will cost \u20b947-92 lakh and a two-year master\u2019s degree will cost \u20b935-70 lakh, which includes tuition and living expenses."
    },
    {
      "q": "Q5. Are there International Business programs in Denmark taught in English?",
      "a": "Yes, especially at the master\u2019s level. At undergraduate level there may be fewer options so students should check the language of instruction for each course. **Edu-Hawk Worldwide** helps students explore international business study options, understand university admission requirements and plan their study-abroad applications."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function InternationalBusinessDenmark() {
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
      seoPath="/study-abroad/denmark/international-business"
    />
  );
}
