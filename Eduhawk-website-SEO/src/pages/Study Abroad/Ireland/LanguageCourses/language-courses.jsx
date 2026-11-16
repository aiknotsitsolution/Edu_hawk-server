import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/LanguageCourses/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/LanguageCourses/Trinity_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/LanguageCourses/University_of_Galway.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/LanguageCourses/University_College_Cork.webp";
import uniImg4 from "../../../../Images/Abroad/Ireland/LanguageCourses/University_College_Dublin.webp";

const images = {
  heroImg,
  heroBgImg,
  sideImg,
  ctaBgImg,
  uniImg1,
  uniImg2,
  uniImg3,
  uniImg4
};

const page = {
  name: "Language Courses in Ireland",
  country: "Ireland",
  slug: "language-courses",
  title: "Study Language Courses in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Language Courses in Ireland for Indian students: Top English language schools, university modern language degrees, IELTS preparation, 25-week Stamp 2 work-study visas, tuition fees, and EduHawk consultancy.",
  keywords: "Language Courses in Ireland for Indian Students, English Language Courses in Ireland for International Students, Top Universities for Language Courses in Ireland, General English Courses in Ireland for International Students, Intensive English Language Courses in Ireland, IELTS Preparation Courses in Ireland, Business English Courses in Ireland, Foreign Language Courses in Ireland, Undergraduate Language Degrees in Ireland, Postgraduate Linguistics and Translation Courses in Ireland, Language Course Eligibility Requirements in Ireland, English Language Course Fees in Ireland, Cost of Studying Languages in Ireland, Language Course Admission and Visa Requirements in Ireland",
  introTitle: "STUDY LANGUAGE COURSES IN IRELAND",
  heroParas: [
    "English and modern language courses in Ireland provide international students with immersive education across university departments, accredited language academies, and professional linguistics, translation, and business pathways in an authentic English-speaking environment."
  ],
  overview: [
    "Language courses in Ireland offer world-class opportunities for international students seeking to enhance their English proficiency, acquire a foreign language, or pursue academic degree programmes in linguistics, translation, and modern languages.",
    "Ireland features premier English-language schools accredited by ACELS and ELE Ireland, leading university language departments, and interdisciplinary degrees integrating languages with international business, law, and diplomacy.",
    "EduHawk worldwide study abroad guidance assists learners in navigating programme options, university pathways, entry requirements, and immigration procedures to achieve global academic and career success."
  ],
  level: "Certificate, Diploma, Bachelor's & Master's in Languages & Linguistics",
  crumb: "Special Courses / Language Courses",
  stats: [
    {
      label: "Degree Choices",
      value: "General English, IELTS, BA Modern Languages, MA Linguistics"
    },
    {
      label: "Course Duration",
      value: "2 to 25+ Weeks (Short Course) | 3 to 4 Years (Degree)"
    },
    {
      label: "Accreditation",
      value: "ACELS, ELE Ireland & QQI Recognized Providers"
    },
    {
      label: "Work Entitlement",
      value: "Stamp 2 Visa (20 hrs/week on qualifying 25-week courses)"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Study in Ireland",
      title: "Why Study Language Courses in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Students can not only study English in an authentic English-speaking environment but also explore Ireland’s rich culture, literary heritage, and international education opportunities, making it an attractive destination for language learning.",
            "The main advantages for international students include:"
          ]
        },
        {
          t: "ul",
          items: [
            "English Immersion: Students practice speaking, listening, reading, and writing in everyday real-world situations, accelerating conversational fluency.",
            "Flexible Course Options: Select from general English, intensive English, academic English, business communication, IELTS/Cambridge exam preparation, or university language degrees.",
            "Multilingual Education: University programmes provide high-demand languages including French, German, Spanish, Italian, Irish (Gaeilge), and Russian.",
            "Career Development: Advanced language and communication skills accelerate careers in translation, localization, tourism, education, international trade, and multinational business.",
            "Cultural Learning: Language programmes incorporate Irish cultural workshops, literature festivals, excursions along the Wild Atlantic Way, and global networking.",
            "Direct University Progression: Academic English pathway programmes provide direct progression into Irish undergraduate and postgraduate degree programmes without retaking external tests."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Programs",
      title: "Ireland Language Courses & Specializations",
      groups: [
        {
          t: "p",
          items: [
            "Language courses in Ireland span flexible short-term intensive training, professional certifications, and comprehensive university undergraduate and postgraduate degrees.",
            "English Language Training Programmes:"
          ]
        },
        {
          t: "ul",
          items: [
            "General English: Daily conversational fluency, functional grammar, listening comprehension, and practical vocabulary.",
            "Intensive English: 25 to 30 hours per week of accelerated immersive language training designed for rapid score and fluency gains.",
            "Academic English & University Pathways: Academic writing conventions, critical analysis, lecture comprehension, seminar discussions, and research citation skills.",
            "English for Business Communication: Professional correspondence, cross-border negotiation, executive presentations, and multinational corporate terminology.",
            "Examination Preparation: Rigorous coaching for IELTS Academic, Cambridge English (B2 First, C1 Advanced, C2 Proficiency), TOEFL iBT, and Duolingo English Test (DET)."
          ]
        },
        {
          t: "p",
          items: [
            "Foreign Language Courses:",
            "Students wishing to learn a modern foreign language can access courses in French, German, Spanish, Italian, Russian, and Irish (Gaeilge) through university departments, short certificate modules, and specialized language institutes.",
            "Undergraduate Language Degrees (NFQ Level 8, 3 to 4 Years):"
          ]
        },
        {
          t: "ul",
          items: [
            "BA Modern Languages (Joint Honours combining two or three European languages with literature and history)",
            "BA Global Languages (Trilingual immersion with built-in Erasmus+ study abroad or international internship)",
            "BA European Studies (Integrating modern languages with European politics, law, and economics)",
            "Languages and International Business (Combining language fluency with international marketing, finance, and trade)",
            "Languages and Law (Dual focus on civil/common law and professional legal translation)",
            "Linguistics and Translation Studies (Theoretical linguistics, phonetics, syntax, and intercultural communication)"
          ]
        },
        {
          t: "p",
          items: [
            "Postgraduate Language Programmes (NFQ Level 9, 1 to 2 Years):"
          ]
        },
        {
          t: "ul",
          items: [
            "MA in Applied Linguistics",
            "MSc in Translation Studies and Computer-Assisted Translation (CAT) Tools",
            "MA in Conference Interpreting",
            "MA in TESOL (Teaching English to Speakers of Other Languages)",
            "MSc in Speech Processing and Computational Linguistics",
            "MA in Intercultural Communication and International Relations"
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top Universities and Colleges for Language Courses in Ireland",
      unis: [
        {
          name: "Trinity College Dublin",
          desc: "Trinity College Dublin's School of Languages, Literatures and Cultural Studies offers prestigious undergraduate Modern Languages programmes and the Centre for English Language Learning & Teaching (CELLT).",
          imgKey: "uniImg_Trinity_College_Dublin_webp",
          imgIdentifier: "uniImg1",
          city: "Dublin, Ireland",
          rank: "Ranked #87 Worldwide (QS 2026)",
          tag: "Historic Excellence",
          img: uniImg1
        },
        {
          name: "University of Galway",
          desc: "The University of Galway features the innovative 4-year BA Global Languages programme, enabling students to master up to three languages including French, German, Spanish, Italian, and Irish with an integrated year abroad.",
          imgKey: "uniImg_University_of_Galway_webp",
          imgIdentifier: "uniImg2",
          city: "Galway, Ireland",
          rank: "Top 2% Globally (QS)",
          tag: "Global Languages Hub",
          img: uniImg2
        },
        {
          name: "University College Cork",
          desc: "UCC's Department of Modern Languages and dedicated UCC Language Centre deliver world-renowned academic English pathways, European language degrees, and high-impact intercultural communication curricula.",
          imgKey: "uniImg_University_College_Cork_webp",
          imgIdentifier: "uniImg3",
          city: "Cork, Ireland",
          rank: "QS World Top 300",
          tag: "Intercultural Leader",
          img: uniImg3
        },
        {
          name: "University College Dublin",
          desc: "UCD Applied Language Centre (ALC) and School of Languages, Cultures and Linguistics provide accredited university English pathways, BA/MA degrees in linguistics, and state-of-the-art computer-assisted translation labs.",
          imgKey: "uniImg_University_College_Dublin_webp",
          imgIdentifier: "uniImg4",
          city: "Dublin, Ireland",
          rank: "Ranked #126 Worldwide (QS)",
          tag: "Research & Applied Linguistics",
          img: uniImg4
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility for Language Courses in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Eligibility criteria for language programmes in Ireland vary depending on whether the student is enrolling in a private language academy, an academic pathway, or a full university degree programme.",
            "Eligibility for English Language Schools & Short Courses:"
          ]
        },
        {
          t: "ul",
          items: [
            "Open Admissions: General and intensive English courses welcome beginner, intermediate, and advanced learners without strict prior prerequisites.",
            "Valid Passport: Valid identification with minimum 6 to 12 months validity.",
            "Language Level Placement: Students complete an initial placement test upon arrival to allocate them to the appropriate CEFR level (A1 to C2).",
            "Age Criteria: Minimum age is typically 18 years for adult programmes; specialized summer junior camps accept learners aged 12 to 17.",
            "Stamp 2 Eligibility: Non-EEA students applying for a 25-week study-and-work visa must enrol in an ILEP-listed programme offering at least 15 hours of daytime tuition per week."
          ]
        },
        {
          t: "p",
          items: [
            "Eligibility for Undergraduate Language Degrees (NFQ Level 8):"
          ]
        },
        {
          t: "ul",
          items: [
            "Academic Background: Recognized secondary school qualification equivalent to the Irish Leaving Certificate (CBSE/ICSE Class 12 with 70% to 80% aggregate).",
            "English Proficiency: Minimum IELTS 6.5 (no band below 6.0), TOEFL iBT 90, PTE Academic 63, or Duolingo DET 120.",
            "Language Prerequisites: Certain advanced literature tracks require prior high school study of the target language; however, many Irish degrees offer ab initio (complete beginner) tracks in German, Spanish, Italian, and Irish."
          ]
        },
        {
          t: "p",
          items: [
            "Eligibility for Postgraduate Programmes (NFQ Level 9):"
          ]
        },
        {
          t: "ul",
          items: [
            "Bachelor's Degree: Recognized honours bachelor's degree (NFQ Level 8 or international equivalent) with minimum 60% or 2:1 honours.",
            "Linguistic Competence: Evidence of advanced competence in at least one or two working languages for translation and interpreting programmes.",
            "English Language Threshold: Minimum IELTS 6.5 to 7.0 (with 6.5 in writing and speaking), or equivalent TOEFL/PTE scores.",
            "Professional Experience: Relevant teaching, translation, or corporate communications background is advantageous for specialized TESOL and linguistics tracks."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Documentation Checklist",
      title: "Admission Requirements for Ireland Language Courses",
      groups: [
        {
          t: "p",
          items: [
            "Documentary requirements differ between private language academies and competitive university degree faculties.",
            "For English Language Schools & Pathway Centres:"
          ]
        },
        {
          t: "ul",
          items: [
            "Completed online application form with chosen course track and start date.",
            "Copy of valid passport biographical page.",
            "Initial diagnostic English placement assessment (online or on arrival).",
            "Proof of tuition deposit or full fee payment.",
            "Proof of comprehensive learner protection and private medical insurance."
          ]
        },
        {
          t: "p",
          items: [
            "For University Degree Programmes (Undergraduate & Postgraduate):"
          ]
        },
        {
          t: "ul",
          items: [
            "Official academic mark sheets, high school transcripts, and bachelor's degree certificates.",
            "Certified English language proficiency scorecard (IELTS Academic, TOEFL iBT, PTE Academic, or Duolingo DET).",
            "Statement of Purpose (SOP) articulating linguistic motivation, academic ambitions, and career goals.",
            "Two academic or professional letters of recommendation on institutional letterheads.",
            "Updated curriculum vitae (CV) detailing professional translation, teaching, or intercultural experience.",
            "Writing sample or language portfolio (where required for specialized translation or creative writing tracks)."
          ]
        },
        {
          t: "p",
          items: [
            "English Proficiency & Immigration Standards:",
            "Please note that the university's academic English entry threshold (typically IELTS 6.5) is distinct from the minimum immigration requirement. International students must ensure they satisfy both institutional criteria and Irish Immigration Service Delivery guidelines."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Language Courses in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "The cost of studying language courses in Ireland depends on whether you choose a short-term intensive course, a 25-week work-study English programme, or an academic university degree.",
            "Indicative Tuition Fees (2026–2027 Academic Year):"
          ]
        },
        {
          t: "ul",
          items: [
            "General English (Private Language School): €180 to €350 per week (depending on course intensity).",
            "Intensive English Course (25–30 hours/week): €250 to €450 per week.",
            "25-Week Academic Year English Programme (Stamp 2 Eligible): €4,500 to €8,500 total course fee.",
            "Undergraduate Degree in Languages (NFQ Level 8): €12,000 to €25,000 per academic year.",
            "Postgraduate Degree in Linguistics / Translation (NFQ Level 9): €14,000 to €26,000 per year."
          ]
        },
        {
          t: "p",
          items: [
            "Estimated Living Expenses in Ireland:",
            "Students should budget between €10,000 and €15,000 per academic year (€900 to €1,400 per month) for living expenses depending on the city:"
          ]
        },
        {
          t: "ul",
          items: [
            "Student Accommodation: €550 to €1,100 per month (host families, shared apartments, or student halls).",
            "Food and Groceries: €250 to €350 per month.",
            "Public Transportation (Student Leap Card): €65 to €120 per month with national student discounts.",
            "Study Materials and Exam Fees: €200 to €500 per year.",
            "Private Medical Insurance: €160 to €350 per year (mandatory for international visa holders).",
            "Irish Residence Permit (IRP) Registration: €300 one-time fee upon arrival in Ireland."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step Roadmap",
      title: "Language Course Admission Procedure in Ireland",
      steps: [
        {
          title: "Define Your Educational Goal",
          desc: "Determine whether your priority is daily conversational fluency, IELTS exam score enhancement, a 25-week work-study programme, or an academic degree in modern languages and linguistics."
        },
        {
          title: "Select Course & Accredited Provider",
          desc: "Compare curriculum structure, weekly teaching hours, ACELS/ELE accreditation, university rankings, campus locations (Dublin, Cork, Galway, Limerick), and all-inclusive fee packages."
        },
        {
          title: "Verify Academic & Immigration Eligibility",
          desc: "Confirm minimum academic qualifications, current language assessment scores, and ensure 25-week programmes are officially recognized on the Irish ILEP list for Stamp 2 student visa eligibility."
        },
        {
          title: "Prepare Certified Documentation",
          desc: "Gather your valid passport, academic transcripts, updated CV, Statement of Purpose (SOP), recommendation letters, and financial documentation demonstrating sufficient living funds."
        },
        {
          title: "Submit Official Applications",
          desc: "Complete the online application through the institution's official admissions portal or via EduHawk's direct institutional application channel."
        },
        {
          title: "Receive Offer & Remit Tuition Fees",
          desc: "Review your letter of offer, course commencement dates, refund policies, and process the required tuition deposit or full programme fee securely via PayToStudy or bank transfer."
        },
        {
          title: "Apply for Irish Student Visa",
          desc: "Submit your Irish study visa application (Short Stay 'C' visa for courses under 90 days, or Long Stay 'D' study visa for courses exceeding 3 months) with full proof of funds (€10,000/year)."
        },
        {
          title: "Pre-Departure, Accommodation & Arrival",
          desc: "Confirm host family or student residence booking, purchase mandatory private medical insurance, attend orientation, and register with immigration for your Irish Residence Permit (IRP) card."
        }
      ]
    },
    {
      slot: "career",
      eyebrow: "Career Pathways",
      title: "Salary and Job Opportunities for Language Graduates in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Advanced language proficiency, translation competence, and intercultural communication skills open rewarding career pathways across Ireland's thriving multinational tech, financial, and tourism hubs.",
            "Career Opportunities for Language Professionals:"
          ]
        },
        {
          t: "ul",
          items: [
            "Professional Translator and Subtitling Specialist (€35,000 – €55,000 / year)",
            "Conference and Courtroom Interpreter (€45,000 – €75,000 / year)",
            "Multilingual Customer Success Manager at Tech Multinationals (€38,000 – €58,000 / year)",
            "Localization Project Manager (€48,000 – €72,000 / year)",
            "TESOL / English Language Instructor in Ireland and Abroad (€32,000 – €48,000 / year)",
            "International Sales and Export Marketing Executive (€42,000 – €65,000 / year)",
            "Diplomatic Affairs, NGO, and Cultural Programme Officer (€40,000 – €68,000 / year)",
            "Computational Linguistics and NLP Content Specialist (€55,000 – €85,000 / year)"
          ]
        },
        {
          t: "p",
          items: [
            "Post-Study Work Visas & Student Working Rights:",
            "Non-EEA students enrolled in qualifying full-time 25-week English courses on the ILEP hold Stamp 2 permission, permitting up to 20 hours of part-time work per week during term and 40 hours per week during peak holiday periods (June–September and December 15–January 15). Graduates of NFQ Level 8 honours bachelor's degrees qualify for 1 year of Third Level Graduate Scheme (Stamp 1G), while NFQ Level 9 master's graduates receive 2 full years of Stamp 1G post-study work entitlement."
          ]
        }
      ]
    }
  ],
  table: {
    caption: "Ireland Language Courses & University Degrees: Fee Comparison (2026–2027)",
    headers: ["Program Category", "Duration", "Average Tuition Fee", "Immigration & Work Status"],
    rows: [
      [
        "General / Intensive English",
        "2 to 12 Weeks",
        "€180 – €450 / week",
        "Short Stay 'C' Visa (No employment permitted)"
      ],
      [
        "Academic Year English (ILEP Listed)",
        "25 Weeks Tuition + 8 Weeks Holiday",
        "€4,500 – €8,500 / course",
        "Stamp 2 Student Visa (20 hrs/week part-time work)"
      ],
      [
        "IELTS / Cambridge Exam Preparation",
        "4 to 16 Weeks",
        "€220 – €420 / week",
        "Short Stay 'C' or Stamp 2 (depending on duration)"
      ],
      [
        "BA Modern Languages / Global Languages",
        "3 to 4 Years (NFQ Level 8)",
        "€12,000 – €25,000 / year",
        "Stamp 2 Visa + 1-Year Stamp 1G Graduate Work Visa"
      ],
      [
        "MA Applied Linguistics / Translation Studies",
        "1 to 2 Years (NFQ Level 9)",
        "€14,000 – €26,000 / year",
        "Stamp 2 Visa + 2-Year Stamp 1G Graduate Work Visa"
      ],
      [
        "Living Expenses (Dublin)",
        "Per Month",
        "€1,000 – €1,400 / month",
        "Includes housing, food, transport, and utilities"
      ],
      [
        "Living Expenses (Cork / Galway / Limerick)",
        "Per Month",
        "€800 – €1,100 / month",
        "Cost of living in regional university cities"
      ]
    ]
  },
  faqs: [
    {
      q: "What kind of language courses are available to study in Ireland?",
      a: "Students can choose from general English, intensive English, academic English pathways, IELTS/Cambridge exam preparation, business English, modern language degrees (French, German, Spanish, Italian, Irish), applied linguistics, translation studies, and conference interpreting programmes."
    },
    {
      q: "How long does it take to complete a language course in Ireland?",
      a: "Short English courses last anywhere from 2 to 12 weeks. Qualifying academic-year English programmes run for 25 weeks of tuition plus holiday periods (total 8 months). Undergraduate language degrees take 3 to 4 years (NFQ Level 8), while postgraduate master's programmes take 1 to 2 years (NFQ Level 9)."
    },
    {
      q: "How much do language courses in Ireland cost?",
      a: "Private English language courses cost between €180 and €450 per week depending on intensity. A 25-week academic-year programme costs approximately €4,500 to €8,500. University language degrees cost between €12,000 and €25,000 per year for undergraduate studies and €14,000 to €26,000 for master's degrees."
    },
    {
      q: "Can I study English in Ireland without IELTS?",
      a: "Yes. Private English language schools accept students of all proficiency levels without an official IELTS score by administering their own placement test on arrival. However, direct admission to university undergraduate or postgraduate degree programmes in languages requires an official test such as IELTS (6.5), TOEFL, PTE, or Duolingo."
    },
    {
      q: "Can I work while studying a language course in Ireland?",
      a: "Non-EEA students enrolled in full-time qualifying 25-week English language programmes listed on the official Interim List of Eligible Programmes (ILEP) hold Stamp 2 student permission, allowing them to work up to 20 hours per week during term time and up to 40 hours per week during designated holiday seasons (June–September and December 15–January 15). Short courses under 90 days on a 'C' visa do not permit employment."
    },
    {
      q: "How can EduHawk Worldwide Consultancy assist me in studying language courses in Ireland?",
      a: "EduHawk provides end-to-end guidance including personalized course and institution selection, ILEP verification, application submission, documentation review, accommodation booking assistance, and comprehensive visa filing support to ensure a seamless study abroad experience in Ireland."
    }
  ]
};

export default function LanguageCoursesIreland() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={true}
      seoPath="/study-abroad/ireland/language-courses"
      images={images}
    />
  );
}
