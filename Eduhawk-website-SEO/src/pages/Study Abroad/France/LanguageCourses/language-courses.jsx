import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/LanguageCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/LanguageCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/LanguageCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/LanguageCourses/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/LanguageCourses/Alliance_Franaise_network.webp";
import uniImg2 from "../../../../Images/Abroad/France/LanguageCourses/CAVILAM.webp";
import uniImg3 from "../../../../Images/Abroad/France/LanguageCourses/Institut_de_Touraine_Tours.webp";
import cmsData from "../../../../data/study_abroad/france/language_courses.json";

const page = {
  name: "Language Courses in France",
  country: "France",
  slug: "language-courses",
  title: "Study Language Courses in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to French language courses in France for Indian students: Top Qualité FLE centers (Alliance Française, CAVILAM, Institut de Touraine), CEFR levels (A1 to C2), DELF/DALF certifications, tuition costs, and student visa guidelines.",
  keywords: "Study Language Courses in France for Indian Students, Language Courses in France for International Students, French Language Courses in France for Beginners, French as a Foreign Language (FLE) Courses in France, Intensive French Language Courses in France, Academic French Courses in France, Business French Courses in France, Best Language Schools and Institutions in France, Language Course Eligibility Requirements for Indian Students, Language Course Admission Requirements in France, Cost of Studying French Language Courses in France, French Language Course Fees and Accommodation Costs, DELF and DALF Examination Preparation Courses in France, TCF and TEF French Language Test Preparation in France",
  introTitle: "LANGUAGE COURSES IN FRANCE FOR INDIAN STUDENTS",
  heroParas: [
    "Studying French language courses in France provides Indian students with complete cultural and linguistic immersion, accelerating mastery from beginner (A1) to advanced academic proficiency (C1/C2) across accredited Qualité FLE centers and university language institutes."
  ],
  overview: [
    "Studying French language courses in France is an unparalleled pathway for international students seeking to achieve authentic linguistic fluency, prepare for higher education degree admissions, or advance global careers in diplomacy, hospitality, luxury retail, and international commerce. Immersed directly in French society, learners practice language competencies in authentic everyday cultural contexts.",
    "France offers diverse language training pathways under the Common European Framework of Reference for Languages (CEFR)—spanning intensive summer bootcamps, semester-long University Diplomas in French Studies (DUEF), Business French, and specialized exam preparation for lifetime state certifications (DELF and DALF) and standardized tests (TCF and TEF).",
    "Through EduHawk Worldwide's dedicated educational advisory, Indian students receive end-to-end assistance in selecting Qualité FLE-certified centers, securing student visas (short-stay or VLS-TS for long-term programs), arranging homestay or university housing, and planning progression into French university degrees."
  ],
  level: "French Language Diplomas (DELF / DALF / TCF / FLE Programs)",
  crumb: "Languages / French Studies",
  stats: [
    {
      label: "Course Formats",
      value: "Intensive FLE | Academic Semester | DELF/DALF Prep"
    },
    {
      label: "Course Duration",
      value: "2 Weeks to 1 Academic Year (Flexible)"
    },
    {
      label: "Key Institutions",
      value: "Alliance Française Network, CAVILAM Vichy, Institut de Touraine"
    },
    {
      label: "Accreditation",
      value: "Qualité FLE Label & French Ministry of Education Diplomas"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Immersive Advantages",
      title: "Why Study French Language Courses in France?",
      groups: [
        {
          t: "p",
          items: [
            "Learning French in France accelerates language acquisition far beyond classroom study in India. Surrounded by native speakers in daily life, students develop natural conversational rhythm, authentic pronunciation, and rich cultural fluency.",
            "Key benefits of studying French language programs in France include:"
          ]
        },
        {
          t: "bullets",
          items: [
            "Total Linguistic & Cultural Immersion: Daily practice in authentic settings—from ordering at bakeries and attending theater to navigating public transit and socializing with local peers.",
            "Accredited Qualité FLE Institutions: Quality assurance through the official 'Qualité Français Langue Étrangère' certification, guaranteeing rigorous teaching standards, modern facilities, and student welfare.",
            "Gateway to French Higher Education: Reaching the DELF B2 level satisfies the French language prerequisite for tuition-subsidized bachelor's and master's degrees across all French public universities.",
            "Global Career Advancement: French is an official working language of the United Nations, European Union, WTO, International Olympic Committee, and international courts; highly valued by luxury brands (LVMH, Chanel, L'Oréal), aerospace (Airbus), and hospitality leaders.",
            "Lifetime Recognized State Diplomas: Direct preparation and testing for DELF (Diplôme d'Études en Langue Française) and DALF (Diplôme Approfondi de Langue Française), certificates that never expire.",
            "Rich Geographic Variety: Study in world-famous Paris, the historic Loire Valley (celebrated for purest French in Tours), the sunny Mediterranean coast (Nice, Montpellier), or thermal wellness cities like Vichy."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Program Architecture",
      title: "Types of Language Courses & CEFR Framework in France",
      groups: [
        {
          t: "p",
          items: [
            "Language programs in France adhere to the Common European Framework of Reference for Languages (CEFR), dividing proficiency into six distinct levels from basic beginner to bilingual mastery."
          ]
        },
        {
          t: "h4",
          items: ["CEFR Proficiency Levels"]
        },
        {
          t: "bullets",
          items: [
            "A1 – Discovery / Beginner: Basic everyday expressions, personal introductions, simple inquiries, and familiar survival vocabulary.",
            "A2 – Elementary: Routine social interactions, simple descriptive conversations, shopping, travel, and immediate environment comprehension.",
            "B1 – Intermediate: Independent communication, expressing opinions, discussing plans, describing events, and understanding work or travel situations.",
            "B2 – Vantage / Independent: Spontaneous conversation with native speakers, academic argumentation, technical discussions; standard admission requirement for French-taught university degrees.",
            "C1 – Effective Operational Proficiency: Fluent, flexible expression for complex academic, professional, and literary subjects with nuanced precision.",
            "C2 – Mastery: Bilingual-level comprehension, spontaneous and highly sophisticated articulation in any domain."
          ]
        },
        {
          t: "h4",
          items: ["Core Course Categories"]
        },
        {
          t: "bullets",
          items: [
            "General & Intensive FLE Courses: 15 to 30 hours per week focusing on the four core skills: speaking, listening, reading, and writing, combined with cultural workshops.",
            "Academic French & University Preparation (DUEF): Semester-long university programs preparing students for lecture comprehension, dissertation methodology, and academic presentations.",
            "Business & Professional French: Specialized vocabulary and communication for international law, corporate business, luxury hospitality, diplomacy, and medical French.",
            "Official Examination Preparation: Targeted training modules for DELF, DALF, TCF (Test de Connaissance du Français), and TEF (Test d'Évaluation de Français)."
          ]
        },
        {
          t: "h4",
          items: ["Comparison of Official French Certifications"]
        },
        {
          t: "table",
          headers: ["Certification", "Issuing Authority", "Target Levels", "Validity Period"],
          rows: [
            ["DELF (Diplôme d'Études en Langue Française)", "French Ministry of National Education", "A1, A2, B1, B2", "Lifetime (Never Expires)"],
            ["DALF (Diplôme Approfondi de Langue Française)", "French Ministry of National Education", "C1, C2", "Lifetime (Never Expires)"],
            ["TCF (Test de Connaissance du Français)", "France Éducation International", "A1 to C2 (Score-based)", "2 Years from Test Date"],
            ["TEF (Test d'Évaluation de Français)", "Paris Île-de-France Chamber of Commerce", "A1 to C2 (Score-based)", "2 Years from Test Date"]
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Premier Language Centers",
      title: "Top Language Schools & Institutions in France",
      unis: [
        {
          name: "Alliance Française Network",
          city: "Paris, Lyon, Bordeaux, Nice",
          state: "Multiple Campuses",
          desc: "The world's foremost network for French language and cultural education, Alliance Française centers in France offer cutting-edge multimedia language laboratories, intensive FLE modules, rich cultural excursions, and official in-house DELF/DALF testing centers.",
          img: uniImg1
        },
        {
          name: "CAVILAM – Alliance Française, Vichy",
          city: "Vichy",
          state: "Auvergne-Rhône-Alpes",
          desc: "Founded in 1964 and affiliated with the University of Clermont Auvergne, CAVILAM is internationally celebrated for innovative pedagogical methods, teacher training, and intensive cultural immersion inside a tranquil, safe UNESCO World Heritage spa town.",
          img: uniImg2
        },
        {
          name: "Institut de Touraine",
          city: "Tours",
          state: "Centre-Val de Loire",
          desc: "Located in the historic Loire Valley—globally renowned as the cradle of accent-free, classical French—the Institut de Touraine has welcomed international learners since 1897. It offers university-accredited French immersion surrounded by famous royal châteaux.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Other renowned French language institutions include university language centers (such as CCFS Sorbonne in Paris, CIEF at University of Lyon, and DEFLE in Bordeaux) and private academies holding the Qualité FLE label."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions & Visas",
      title: "Eligibility & Entry Requirements for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "Entry requirements for French language courses are accessible and open to students, professionals, and language enthusiasts from all academic backgrounds."
          ]
        },
        {
          t: "h4",
          items: ["Admissions Prerequisites"]
        },
        {
          t: "bullets",
          items: [
            "Minimum Age: Typically 16 or 18 years old depending on the institution and accommodation type selected (homestay vs. student residence).",
            "Prior Knowledge: No previous knowledge of French is required for general beginner (A1) programs. For intermediate or advanced courses, an online diagnostic placement test determines the appropriate class level.",
            "Academic Documents: Passport copy, completed registration form, and course registration deposit.",
            "University Language Programs (DUEF): High school completion certificate (Class 12) or university degree certificate."
          ]
        },
        {
          t: "h4",
          items: ["Visa Guidelines for Indian Students"]
        },
        {
          t: "bullets",
          items: [
            "Short-Stay Visa (Court Séjour - Schengen Visa): For courses up to 90 days. Ideal for summer intensive courses or holiday learning.",
            "Long-Stay Temporary Visa (VLS-T - Visa de Long Séjour Temporaire): For language courses lasting between 3 and 6 months; non-renewable, does not require OFII validation.",
            "Long-Stay Student Visa (VLS-TS - Étudiant): For language courses lasting more than 6 months or university pathway programs. Requires the Campus France 'Études en France' procedure and allows students to work part-time (up to 20 hrs/week) and receive CAF housing subsidies."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Fees & Budgeting",
      title: "Cost of Language Courses & Living Expenses in France",
      groups: [
        {
          t: "p",
          items: [
            "Costs depend on course intensity, program length, school type (private institute vs. university center), and campus location."
          ]
        },
        {
          t: "table",
          headers: ["Course Type / Duration", "Estimated Tuition Fee", "Key Features"],
          rows: [
            ["Short-Term Intensive (20 hrs/week)", "€220 – €350 / week", "Interactive classes, cultural outings, flexible start dates"],
            ["One-Month Intensive Bootcamp", "€800 – €1,300 / month", "Accelerated learning for travel or exam prep"],
            ["Semester Program (12–16 Weeks)", "€2,500 – €4,500 / semester", "Comprehensive level progression (e.g., A2 to B1)"],
            ["Academic Year University FLE (DUEF)", "€1,500 – €3,200 / year", "Subsidized public university center fees"],
            ["DELF / DALF Exam Fee", "€100 – €220 / examination", "Separate fee payable to official testing center"]
          ]
        },
        {
          t: "h4",
          items: ["Accommodation & Living Expenses"]
        },
        {
          t: "p",
          items: [
            "International language students typically choose from three accommodation types: French host family (homestay with half-board: €600–€900/month regional, €850–€1,200/month Paris), private student residences (€400–€700/month), or shared private apartments. Monthly food, transport, and personal expenses average €350 to €500 depending on the city."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions Roadmap",
      title: "Step-by-Step Guide to Enrolling in Language Courses in France",
      steps: [
        {
          title: "Step 1: Define Goals & Target Proficiency",
          desc: "Identify whether your aim is general fluency, DELF/DALF exam preparation, or academic French for degree enrollment."
        },
        {
          title: "Step 2: Select a Qualité FLE-Certified School",
          desc: "Compare accredited centers, regional locations (Paris vs. regional cities), teaching intensity, and student accommodation options."
        },
        {
          title: "Step 3: Submit Online Registration & Placement Test",
          desc: "Complete the online application form and complete the preliminary language diagnostic evaluation to assess your starting level."
        },
        {
          title: "Step 4: Receive Certificate of Registration (Attestation)",
          desc: "Remit the tuition deposit or full fee to receive the official Attestation d'Inscription required for your French student visa application."
        },
        {
          title: "Step 5: Arrange Housing & Student Support",
          desc: "Confirm your homestay, private studio, or university residence booking to secure proof of accommodation for visa filing."
        },
        {
          title: "Step 6: Complete Campus France & Visa Formalities",
          desc: "For courses over 90 days, create your Études en France profile, attend the Campus France interview, and apply for your visa via VFS Global."
        },
        {
          title: "Step 7: Travel to France & Take Oral Assessment",
          desc: "Arrive in France, complete your in-person speaking evaluation on orientation day, and receive your class schedule."
        },
        {
          title: "Step 8: Immersive Learning & Certification",
          desc: "Attend daily interactive lectures, participate in cultural activities, and sit for your official DELF/DALF examination."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career & Academic Pathways",
      title: "Opportunities After Completing French Language Courses",
      groups: [
        {
          t: "p",
          items: [
            "Achieving proficiency in French unlocks substantial global academic and professional opportunities for Indian students, providing a competitive edge across diverse industries."
          ]
        },
        {
          t: "h4",
          items: ["Academic Progression & Professional Sectors"]
        },
        {
          t: "bullets",
          items: [
            "Direct Admission to French Universities: Earning a DELF B2 diploma qualifies international students to enroll directly in tuition-subsidized degree courses across all public universities in France.",
            "International Diplomacy & NGOs: French is an essential working language in global governance bodies, the United Nations, UNESCO, Red Cross, and international human rights organizations.",
            "Luxury Brands & Fashion: High-value opportunities in brand management, merchandising, and corporate communications for French conglomerates (LVMH, Kering, Chanel, Hermès, L'Oréal).",
            "Aviation, Tourism & Hospitality: High demand in international airlines (Air France), hotel chains (AccorHotels), and luxury concierge services.",
            "Translation, Content & Corporate BPO: Lucrative career options in multilingual corporate advisory, technical translation, localization, and teaching French as a foreign language in India and abroad."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "Frequently Asked Questions",
      title: "Language Courses in France FAQs",
      faqs: [
        {
          q: "Can beginners learn French in France?",
          a: "Yes, absolutely. French language schools welcome complete beginners with dedicated A1-level classes. Centers conduct diagnostic assessments to ensure learners are placed in classes matching their exact baseline proficiency."
        },
        {
          q: "What is the duration of language courses in France?",
          a: "Course durations are highly flexible. Programs range from 2-week intensive holiday modules to full academic year diploma courses (9 to 12 months) covering multiple CEFR levels."
        },
        {
          q: "How much do French language courses cost in France?",
          a: "Tuition fees vary by format. Short-term intensive courses cost between €200 and €350 per week, while semester-long university language center programs (DUEF) typically cost between €1,500 and €3,200 per year."
        },
        {
          q: "Which French language certificate should I choose?",
          a: "For long-term academic and career recognition, DELF (A1–B2) and DALF (C1–C2) diplomas are recommended because they are issued by the French Ministry of Education and never expire. Standardized tests like TCF and TEF are valid for 2 years and are typically used for immediate university entry or immigration."
        },
        {
          q: "Can I get a French student visa for a language course?",
          a: "Yes. Courses lasting less than 90 days require a short-stay Schengen visa. For courses exceeding 3 months, students apply for a Long-Stay Student Visa (VLS-T or VLS-TS) backed by an official Attestation d'Inscription from an accredited French language center."
        }
      ]
    }
  ]
};

export default function LanguageCoursesPage() {
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

  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    uni1: uniImg1,
    uni2: uniImg2,
    uni3: uniImg3
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
