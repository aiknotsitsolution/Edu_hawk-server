import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/France/Engineering_UG/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/France/Engineering_UG/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/France/Engineering_UG/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/France/Engineering_UG/cta_bg.webp";

// University images
import uniImg1 from "../../../../../Images/Abroad/France/Engineering_UG/INSA_Lyon.webp";
import uniImg2 from "../../../../../Images/Abroad/France/Engineering_UG/Toulouse_INSA.webp";
import uniImg3 from "../../../../../Images/Abroad/France/Engineering_UG/Belfort.webp";
import cmsData from "../../../../../data/study_abroad/france/ug_hub.json";

const page = {
  name: "Undergraduate Engineering in France",
  country: "France",
  slug: "ug/engineering",
  title: "Study Undergraduate Engineering in France for Indian Students | BTech & Diplôme d'Ingénieur",
  description: "Complete guide to studying Undergraduate (UG) Engineering in France: CTI-accredited degrees, 3-year Bachelor's & 5-year Diplôme d'Ingénieur, English-taught programs, INSA institutes, tuition fees, and career pathways.",
  keywords: "Study Undergraduate Engineering in France for Indian Students, Engineering Courses in France for International Students, Best Universities for Engineering in France, Bachelor’s Degree in Engineering in France, French Engineering School Admission for Indian Students, Engineering Eligibility Requirements in France, Engineering Admission Requirements for Indian Students, Undergraduate Engineering Tuition Fees in France 2026–2027, CTI Accredited Engineering Schools in France, Engineering Jobs and Career Opportunities in France",
  introTitle: "UNDERGRADUATE ENGINEERING (UG) IN FRANCE",
  heroParas: [
    "France is a premier global destination for undergraduate engineering education, renowned for its prestigious Grandes Écoles d'Ingénieurs accredited by the Commission des Titres d'Ingénieur (CTI), state-of-the-art research laboratories, and direct industrial partnerships with aerospace, automotive, energy, and digital tech leaders. International students benefit from 3-year Bachelor of Science (Licence) and 5-year integrated Diplôme d'Ingénieur pathways, English-taught international curricula, subsidized European tuition fees, and generous 2-year post-study work rights."
  ],
  overview: [
    "Undergraduate engineering in France combines rigorous mathematics, foundational natural sciences, hands-on workshop design, and immersive industrial apprenticeships.",
    "French engineering education is closely linked to world-class European industrial clusters—including Airbus and Safran in aerospace, Renault and Stellantis in automotive, TotalEnergies and Schneider Electric in power systems, and Dassault Systèmes in advanced digital manufacturing.",
    "Students can choose between a standard 3-year Bachelor of Science (Licence - 180 ECTS) or the prestigious 5-year integrated engineering school route leading directly to the national Diplôme d'Ingénieur (Grade de Master - 300 ECTS), fully accredited by the CTI and recognized across Europe and North America.",
    "EduHawk Worldwide study abroad consultancy assists students in exploring engineering specializations, preparing competitive Class 12 mathematics portfolios, clearing Campus France academic interviews, and securing European student visas."
  ],
  level: "Bachelor of Science (Licence - 180 ECTS) & Diplôme d'Ingénieur (300 ECTS)",
  crumb: "Engineering / Undergraduate",
  stats: [
    {
      label: "Program Options",
      value: "3-Yr Bachelor / 5-Yr Diplôme d'Ingénieur"
    },
    {
      label: "Accreditation",
      value: "CTI & EUR-ACE European Recognized"
    },
    {
      label: "Tuition (Public)",
      value: "€2,902 / Year (Non-EU Bachelor Rate)"
    },
    {
      label: "Post-Study Visa",
      value: "2-Year APS / RECE Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Key Advantages of Studying Engineering in France",
      lead: "France provides an elite engineering training model combining theoretical mathematics with practical industrial immersion.",
      groups: [
        {
          t: "ul",
          items: [
            "**Globally Recognized CTI Accreditation:** Engineering diplomas accredited by the Commission des Titres d'Ingénieur (CTI) carry the European EUR-ACE quality label, granting chartered engineer status worldwide.",
            "**Diverse Study Pathways:** Choose between a 3-year university Bachelor's degree (Licence) or a 5-year integrated engineering curriculum at a Grande École with integrated preparatory classes (classes préparatoires intégrées).",
            "**Deep Industrial Integration:** Programs mandate real-world industrial projects, prototyping laboratories, and 6- to 12-month paid corporate internships with international industrial conglomerates.",
            "**High-Demand Specializations:** Specialize from undergraduate years in aerospace, robotics, automotive engineering, computer science & AI, civil infrastructure, or renewable energy.",
            "**English-Taught International Tracks:** Elite engineering networks like INSA and UTBM offer 100% English-taught International Bachelor programs tailored for global high-school graduates.",
            "**Seamless Master's Progression:** Bachelor graduates can transition directly into European Master of Science or Diplôme d'Ingénieur programs without prerequisite entrance exams."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Engineering Disciplines",
      title: "Undergraduate Engineering Specializations & Pathways",
      lead: "France offers diverse engineering majors blending scientific fundamentals with cutting-edge technological applications.",
      groups: [
        {
          t: "p",
          items: [
            "Undergraduate engineering degrees in France follow structured European credit frameworks:",
            "**Bachelor's Degree / Licence (3 Years / 180 ECTS):** Focuses on technical fundamentals, mathematical analysis, computer modeling, and experimental physics.",
            "**Integrated Diplôme d'Ingénieur (5 Years / 300 ECTS):** Two years of foundational scientific preparation followed by three years of advanced engineering specialization, conferring a master's equivalent degree.",
            "**International Bachelor Programs (3 Years):** English-taught degrees designed specifically for international cohorts, combining engineering science with French language and cultural immersion."
          ]
        },
        {
          t: "boxes",
          boxes: [
            {
              title: "Mechanical & Materials",
              tag: "3 to 5 Years",
              desc: "Thermodynamics, machine design, CAD/CAM prototyping, industrial automation, and advanced materials engineering."
            },
            {
              title: "Computer Engineering & AI",
              tag: "3 to 5 Years",
              desc: "Software architecture, algorithms, embedded systems, cyber-physical networks, and artificial intelligence applications."
            },
            {
              title: "Aerospace & Propulsion",
              tag: "3 to 5 Years",
              desc: "Aerodynamics, flight mechanics, aircraft avionics, satellite structures, and space propulsion systems."
            },
            {
              title: "Civil & Infrastructure",
              tag: "3 to 5 Years",
              desc: "Structural mechanics, green building design, geotechnical engineering, transport networks, and urban hydrology."
            },
            {
              title: "Electrical & Electronics",
              tag: "3 to 5 Years",
              desc: "Power electronics, microelectronics, automated control systems, signal processing, and telecommunications."
            },
            {
              title: "Robotics & Smart Manufacturing",
              tag: "3 to 5 Years",
              desc: "Industrial robotics, sensory control, autonomous systems, mechatronics, and smart Industry 4.0 production."
            }
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Undergraduate Engineering Universities & Grandes Écoles",
      lead: "France's leading engineering institutes offer international bachelor's degrees and integrated engineering tracks.",
      unis: [
        {
          name: "INSA Lyon (National Institute of Applied Sciences)",
          city: "Lyon",
          state: "Auvergne-Rhône-Alpes, France",
          desc: "France's premier Grande École for integrated engineering, offering an acclaimed International Bachelor in Mechanical, Materials and Aerospace Engineering taught entirely in English.",
          img: uniImg1
        },
        {
          name: "INSA Toulouse",
          city: "Toulouse",
          state: "Occitanie, France",
          desc: "Located in the capital of European aerospace, INSA Toulouse provides elite engineering tracks in electronics, biotechnology, computer science, and aeronautical systems.",
          img: uniImg2
        },
        {
          name: "UTBM (Belfort-Montbéliard University of Technology)",
          city: "Belfort & Montbéliard",
          state: "Bourgogne-Franche-Comté, France",
          desc: "A prominent technological university delivering specialized engineering degrees in automotive engineering, energy systems, computer engineering, and smart manufacturing.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for International & Indian Students",
      lead: "Undergraduate engineering admissions require strong mathematical and physical science preparation.",
      groups: [
        {
          t: "ul",
          items: [
            "**Academic Preparation:** Successful completion of Higher Secondary Certificate (Class 12 / French baccalauréat equivalent) with high marks in Mathematics and Physics (Chemistry or Computer Science strongly recommended).",
            "**Minimum Grade Standards:** Competitive engineering schools generally look for 70% to 85%+ aggregate in core science and mathematics subjects.",
            "**English Language Proficiency:** For English-taught bachelor programs, candidates must submit IELTS (minimum 6.0 – 6.5) or TOEFL iBT (minimum 80 – 90).",
            "**French Language Proficiency:** For French-taught engineering courses, applicants must provide certified proof of CEFR B2 proficiency (DELF B2 or TCF).",
            "**Academic Review & Interview:** Many selective engineering schools (such as the INSA Group or UT Network) conduct online academic interviews or entrance assessments."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Costs",
      title: "Tuition Fees & Cost of Living in France (2026–2027)",
      lead: "France offers some of the most competitive higher education tuition rates in the Western world.",
      groups: [
        {
          t: "table",
          headers: ["Institution Type / Expense", "EU / EEA National Rate", "Non-EU Differentiated Rate", "Frequency"],
          rows: [
            ["Public University Bachelor (Licence)", "€178 / year", "€2,902 / year", "Annual"],
            ["Public Engineering School (CTI Rate)", "€630 / year", "€2,902 – €3,950 / year", "Annual"],
            ["Private / Specialized Engineering Schools", "€6,000 – €10,000 / year", "€6,000 – €12,000 / year", "Annual"],
            ["CVEC Student & Campus Life Contribution", "€103", "€103", "Annual"],
            ["Student Social Security (Health Insurance)", "Free (100% French Sécurité Sociale)", "Free (100% French Sécurité Sociale)", "Annual"],
            ["Living Expenses (Paris & Île-de-France)", "€1,000 – €1,350 / month", "€1,000 – €1,350 / month", "Monthly"],
            ["Living Expenses (Lyon, Toulouse, Belfort)", "€700 – €900 / month", "€700 – €900 / month", "Monthly"]
          ]
        },
        {
          t: "p",
          items: [
            "**CAF Housing Allowance:** All international students with a valid VLS-TS student visa qualify for monthly accommodation subsidies from the French Government (CAF), reducing monthly rent by up to 30% to 40%.",
            "**Part-Time Employment:** Students are legally permitted to work up to 964 hours per year (60% of annual full-time work) during their studies."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Roadmap",
      title: "10-Step Roadmap to Studying Engineering in France",
      lead: "EduHawk Worldwide provides systematic guidance throughout the French engineering application journey.",
      steps: [
        {
          title: "Engineering Major & Track Selection",
          desc: "Choose your undergraduate engineering discipline, degree type (3-year Bachelor vs. 5-year Diplôme d'Ingénieur), and language of instruction."
        },
        {
          title: "Standardized Language Testing",
          desc: "Complete IELTS/TOEFL for English-taught degrees or DELF B2 for French-taught curricula."
        },
        {
          title: "University & Grande École Shortlisting",
          desc: "Compare curriculum specializations, CTI accreditation, tuition fees, and campus locations across INSA, UTBM, and public university faculties."
        },
        {
          title: "Campus France & Études en France Dossier",
          desc: "Submit academic transcripts, SOP, and CV via the Études en France electronic portal and schedule the consular academic interview."
        },
        {
          title: "Consortium / Institutional Application",
          desc: "Complete direct portal applications for specific engineering school networks (e.g., Groupe INSA, UTBM portal, or Parcoursup where applicable)."
        },
        {
          title: "Academic Interview & Entrance Assessment",
          desc: "Participate in online faculty interviews evaluating mathematical foundations, scientific reasoning, and motivation."
        },
        {
          title: "Offer Acceptance & Enrolment",
          desc: "Accept the official admission offer, pay the registration deposit, and settle the annual CVEC student contribution."
        },
        {
          title: "French Student Visa (VLS-TS)",
          desc: "Submit the long-stay student visa application with proof of sufficient living funds (€615+/month) and confirmed housing."
        },
        {
          title: "Undergraduate Engineering Studies",
          desc: "Complete theoretical coursework, computer simulation labs, prototyping workshops, and mandatory corporate internships."
        },
        {
          title: "Post-Study Work Visa (APS / RECE)",
          desc: "Upon graduation, activate the 2-year post-study work permit to begin your professional engineering career in France or Europe."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Engineering Career Opportunities & Salary Expectations",
      lead: "Engineering graduates from French institutions are recruited heavily across European manufacturing, aerospace, and IT sectors.",
      groups: [
        {
          t: "ul",
          items: [
            "**Mechanical & Systems Design Engineer:** Designing automotive components, industrial machinery, and HVAC equipment (€38,000 – €52,000 / year).",
            "**Software & Embedded Systems Engineer:** Developing real-time firmware, IoT sensor networks, and industrial software systems (€42,000 – €60,000 / year).",
            "**Aerospace & Aeronautical Engineer:** Working on flight mechanics, composite structures, and propulsion systems at Airbus, Safran, or Thales (€44,000 – €65,000 / year).",
            "**Electrical & Automation Engineer:** Designing power distribution grids, industrial PLC automation, and electric vehicle powertrain systems (€40,000 – €56,000 / year).",
            "**Civil & Construction Engineer:** Managing infrastructure projects, geotechnical assessments, and sustainable building construction (€38,000 – €54,000 / year).",
            "**Robotics & Smart Manufacturing Specialist:** Implementing automated assembly lines, collaborative robots (cobots), and smart manufacturing workflows (€42,000 – €62,000 / year)."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Application Checklist",
      title: "Required Documents for Admission & Student Visa",
      lead: "All non-French documentation must be translated by a certified sworn translator (traducteur assermenté).",
      groups: [
        {
          t: "ul",
          items: [
            "Valid International Passport with at least 6 months validity beyond your planned stay.",
            "Certified Class 10 and Class 12 mark sheets and passing certificates.",
            "Official high school transcripts highlighting marks in Mathematics, Physics, and Chemistry.",
            "Certified English language proficiency score (IELTS or TOEFL) or French DELF B2 certificate.",
            "Detailed Curriculum Vitae (CV) formatted to French academic standards showcasing technical projects or competitions.",
            "Statement of Purpose (Letter of Motivation) detailing career ambitions in engineering and interest in France.",
            "Two Academic Letters of Recommendation from mathematics and physics teachers.",
            "Proof of Financial Maintenance demonstrating at least €615/month for the academic year.",
            "Proof of Accommodation in France (university residence booking, CROUS agreement, or private rental contract)."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can Indian students pursue undergraduate engineering in France?",
      a: "Yes. Indian students who have completed Class 12 with strong marks in Mathematics, Physics, and Chemistry can apply for both 3-year Bachelor of Science (Licence) programs and 5-year integrated Grande École engineering courses (Diplôme d'Ingénieur) across France."
    },
    {
      q: "How long does it take to study undergraduate engineering in France?",
      a: "A standard university Bachelor’s degree in engineering (Licence) takes 3 years (180 ECTS). The traditional French engineering Grande École route takes 5 years (conferring the prestigious Diplôme d'Ingénieur / Grade de Master - 300 ECTS). Specialized international bachelor degrees also take 3 years."
    },
    {
      q: "Are engineering courses in France taught in English?",
      a: "Yes. Many French engineering institutions offer undergraduate programs taught entirely in English, including international bachelor degrees at INSA Lyon, Centrale Nantes, and various technological universities. French language modules are included to help students adapt and qualify for local internships."
    },
    {
      q: "What is the tuition cost for undergraduate engineering in France?",
      a: "For 2026–2027, the national reference registration fee for non-EU students at public institutions is €2,902 per year for bachelor's level programs (€630/year for EU students). Certain specialized grandes écoles and private engineering institutes charge between €6,000 and €12,000 per year."
    },
    {
      q: "What is CTI accreditation and why is it important?",
      a: "The Commission des Titres d'Ingénieur (CTI) is the French official body that evaluates and accredits engineering education. A CTI-accredited Diplôme d'Ingénieur guarantees elite academic standards, European EUR-ACE quality recognition, and immediate international recognition as a chartered professional engineer."
    }
  ]
};

export default function UndergraduateEngineeringinFrancePage() {
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
    universities: [
      {
        name: "INSA Lyon",
        img: uniImg1,
        desc: "France's premier Grande École for integrated engineering, offering an acclaimed International Bachelor in Mechanical, Materials and Aerospace Engineering taught entirely in English."
      },
      {
        name: "INSA Toulouse",
        img: uniImg2,
        desc: "Located in the capital of European aerospace, INSA Toulouse provides elite engineering tracks in electronics, biotechnology, computer science, and aeronautical systems."
      },
      {
        name: "UTBM (Belfort-Montbéliard)",
        img: uniImg3,
        desc: "A prominent technological university delivering specialized engineering degrees in automotive engineering, energy systems, computer engineering, and smart manufacturing."
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      images={images}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/france/ug/engineering"
    />
  );
}
