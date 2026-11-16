import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/Toulouse_INSA.webp";
import uniImg2 from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/INSA_Strasbourg.webp";
import uniImg3 from "../../../../../../Images/Abroad/France/Engineering_UG/Civil/ESTP_Special_School_of_Public_Works.webp";

const page = {
  name: "UG Civil Engineering in France",
  country: "France",
  slug: "study-abroad/france/ug/civil-engineering",
  title: "Study UG Civil Engineering in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to undergraduate Civil Engineering in France for international students: top engineering Grandes Écoles, CTI-accredited degrees, fees, admission requirements, and career prospects.",
  keywords: "Study Civil Engineering in France for Indian Students, Civil Engineering Courses in France for International Students, Best Universities for Civil Engineering in France, Undergraduate Civil Engineering in France, Bachelor’s Degree in Civil Engineering in France, Civil Engineering Eligibility Requirements in France, Civil Engineering Admission Requirements for Indian Students, Civil Engineering Tuition Fees in France 2026–2027, Cost of Studying Civil Engineering in France, English-Taught Civil Engineering Programmes in France, Structural Engineering Courses in France, Construction and Infrastructure Engineering in France, Geotechnical and Transportation Engineering in France, CTI Accredited Civil Engineering Schools in France, Civil Engineering Jobs and Career Opportunities in France",
  introTitle: "CIVIL ENGINEERING UG IN FRANCE",
  heroParas: [
    "France is renowned for its iconic civil engineering, transport infrastructure, and sustainable urban construction, offering international students prestigious 3-year Licence degrees and 5-year CTI-accredited Diplôme d'Ingénieur qualifications. Combining structural mechanics, geotechnics, BIM technology, and hands-on site management, French civil engineering programs provide a direct gateway to global infrastructure careers and a 2-year post-study work visa."
  ],
  overview: [
    "Undergraduate civil engineering in France is an exceptional choice for students interested in construction, structural design, transportation networks, bridges, roads, water management, and sustainable urban development.",
    "French universities and Grandes Écoles d'Ingénieurs offer programs that blend scientific fundamentals, modern computer-aided design (CAD/BIM), practical on-site projects, and direct industry collaboration. Students can pursue either a three-year university Bachelor's degree (Licence) or an integrated five-year Grande École qualification (Diplôme d'Ingénieur, carrying European Master's degree status).",
    "Edu-Hawk Worldwide study abroad guidance assists international and Indian students in exploring these opportunities, navigating Campus France Études en France procedures, securing institutional admissions, and completing student visa formalities."
  ],
  level: "Undergraduate (Licence / Diplôme d'Ingénieur)",
  crumb: "Engineering / Civil (UG)",
  stats: [
    {
      label: "Degree Choices",
      value: "3-Yr Licence / 5-Yr Diplôme d'Ingénieur"
    },
    {
      label: "Accreditation",
      value: "CTI & French Ministry of Higher Education"
    },
    {
      label: "Public Tuition (Non-EU)",
      value: "€2,902 / Yr (Licence) | €630–€3,950 (Eng.)"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Why Study Civil Engineering in France?",
      lead: [
        "Civil engineering has longstanding, world-renowned traditions in France, highlighted by historic bridges, advanced high-speed railway (TGV) networks, underground transit systems, and iconic sustainable public works."
      ],
      groups: [
        {
          t: "bullet",
          title: "Key Benefits for International Students",
          items: [
            "**Engineering-Oriented Education:** Master core disciplines including structural mechanics, building materials, soil mechanics, hydraulics, reinforced concrete, and building physics.",
            "**Practical Industry Experience:** Curricula feature extensive laboratory experiments, real-world structural design projects, site-related field study, and mandatory corporate internships.",
            "**Diverse Specialisations:** Tailor your career with specializations in structural engineering, geotechnics, transport infrastructure, construction management, and ecological infrastructure.",
            "**Global Career Mobility:** Civil engineering qualifications from French institutions are recognized internationally, opening pathways into multinational construction firms, consulting groups, and urban planning agencies.",
            "**Pathways to Master's Degrees:** An undergraduate degree provides direct progression routes to competitive Master of Science and Diplôme d'Ingénieur cycles throughout Europe.",
            "**Language & International Environment:** While most undergraduate civil engineering courses are taught in French (requiring CEFR B2 proficiency), some institutions offer English-taught international foundation modules or bilingual tracks."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Specializations",
      title: "Civil Engineering Courses & Sub-Disciplines in France",
      lead: [
        "Undergraduate civil engineering education in France covers the planning, structural design, construction, and sustainable maintenance of the built environment."
      ],
      groups: [
        {
          t: "bullet",
          title: "Core Undergraduate Modules & Disciplines",
          items: [
            "**Civil Engineering (Génie Civil):** Principles of construction technology, engineering materials, surveying, structural integrity, and project architecture.",
            "**Structural Engineering:** Advanced structural analysis, reinforced and prestressed concrete, steel and timber structures, and seismic design.",
            "**Construction Engineering & Management:** Construction scheduling, project cost estimation, building information modeling (BIM), contract law, and site safety management.",
            "**Geotechnical Engineering:** Soil mechanics, foundation design, ground investigation, earth retaining structures, and slope stability.",
            "**Transportation Engineering:** Design and management of highways, railway corridors, bridge engineering, and multi-modal urban mobility systems.",
            "**Water and Environmental Engineering:** Hydrology, urban drainage networks, hydraulics, wastewater treatment, and climate-resilient water infrastructure.",
            "**Urban Infrastructure:** Public utilities, land development, urban revitalization, and smart city infrastructure."
          ]
        },
        {
          t: "p",
          items: [
            "**Program Duration:** Standard university Licence programs span **3 years (180 ECTS)**, whereas integrated Grande École engineering tracks span **5 years (300 ECTS)** post-secondary school, awarding the prestigious CTI-accredited Diplôme d'Ingénieur."
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Civil Engineering Undergraduate Schools in France",
      lead: [
        "France hosts premier public engineering institutes and specialized Grandes Écoles offering world-class infrastructure and civil engineering training."
      ],
      unis: [
        {
          name: "INSA Toulouse (Institut National des Sciences Appliquées)",
          city: "Toulouse",
          state: "Occitanie",
          desc: "INSA Toulouse provides a prestigious 5-year integrated CTI engineering specialization in Civil Engineering (Génie Civil). The program covers building design, infrastructure engineering, public works, and sustainable urban development with extensive laboratory and industrial internship exposure.",
          img: uniImg1
        },
        {
          name: "INSA Strasbourg",
          city: "Strasbourg",
          state: "Grand Est",
          desc: "Part of the prestigious INSA Group, INSA Strasbourg offers top-ranked civil engineering education focusing on structural design, building materials, geotechnics, hydraulics, topometry/surveying, and urban construction over a 5-year CTI track.",
          img: uniImg2
        },
        {
          name: "ESTP Paris (École Spéciale des Travaux Publics)",
          city: "Cachan / Paris",
          state: "Île-de-France",
          desc: "ESTP is France's leading Grande École specializing in construction, civil engineering, transport infrastructure, and the built environment. Renowned for its unparalleled industry connections with global construction giants like Vinci, Bouygues, and Eiffage.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Entry Standards",
      title: "Eligibility Criteria for UG Civil Engineering in France",
      lead: [
        "Admissions criteria depend on the applicant's educational qualification, the selective nature of the engineering school, and the medium of instruction."
      ],
      groups: [
        {
          t: "bullet",
          title: "General Eligibility Requirements",
          items: [
            "**Secondary School Completion:** Equivalent to the French Baccalauréat (such as Higher Secondary Certificate / CBSE / ISC Class 12 for Indian applicants).",
            "**Academic Science Background:** Demonstrated strong academic achievement in Physics and Mathematics; Chemistry or computer science coursework is beneficial.",
            "**Language Proficiency:** French proficiency at CEFR B2 level (DELF B2 or TCF) for programs delivered in French; English proficiency (IELTS 6.0–6.5 or TOEFL iBT 80+) for English-taught international pathways.",
            "**Academic Assessments:** Selective Grandes Écoles may conduct dossier reviews, written entrance tests, or video admissions interviews."
          ]
        },
        {
          t: "p",
          items: [
            "**Note for Indian Applicants:** Completing Class 12 with Physics, Chemistry, and Mathematics (PCM) qualifies students to apply for university bachelor's programs and integrated preparatory engineering cycles (Cycle Préparatoire Intégré)."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Application Checklist",
      title: "Admission Requirements for International Applicants",
      lead: [
        "Engineering admissions boards evaluate mathematical proficiency, physics background, problem-solving aptitude, and motivation."
      ],
      groups: [
        {
          t: "bullet",
          title: "Required Application Dossier",
          items: [
            "Official Class 10 and Class 12 mark sheets and certificates of completion.",
            "Certified academic transcripts detailing coursework in Mathematics and Physics.",
            "Certified French or English translations of all documents not issued in the original language.",
            "Valid international passport copy with validity extending at least 6 months beyond intended stay.",
            "Official proof of language proficiency (DELF/DALF/TCF for French; IELTS/TOEFL for English).",
            "Statement of Purpose (Motivation Letter) detailing career objectives and reasons for selecting France.",
            "Updated Curriculum Vitae (CV) in standard European Europass format.",
            "Two Letters of Recommendation from science and mathematics teachers.",
            "Online application submission confirmation and payment of any applicable evaluation fee."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Financial Planning",
      title: "Tuition Fees & Cost of Studying Civil Engineering in France",
      lead: [
        "Tuition at French public universities and institutes is highly subsidized by the state, providing exceptional educational quality at an accessible cost."
      ],
      table: {
        caption: "Civil Engineering Undergraduate Tuition Benchmarks (2026–2027)",
        headers: ["Institution / Degree Track", "Eligible EU/EEA Students", "Non-EU Students (Standard / Differentiated)"],
        rows: [
          ["Public University Licence (Bachelor - 3 Years)", "€178 / year", "€2,902 / year"],
          ["Public Engineering Schools (Ministry of Higher Education)", "€630 / year", "€630 – €2,902 / year"],
          ["Grandes Écoles d'Ingénieurs (Diplôme d'Ingénieur)", "€630 – €3,500 / year", "€2,902 – €6,500 / year"],
          ["Private Civil Engineering Institutions (e.g., ESTP)", "€8,000 – €14,000 / year", "€8,000 – €14,000 / year"],
          ["Mandatory Campus Life Contribution (CVEC)", "approx. €103 / year", "approx. €103 / year"]
        ]
      },
      groups: [
        {
          t: "p",
          items: [
            "**Cost of Living:** Living expenses vary depending on the city. In regional student cities (Toulouse, Strasbourg, Lyon), monthly living costs average between **€700 and €1,000**, covering housing, food, transport, and utilities. In the Paris metropolitan region, monthly budgets typically range from **€1,200 to €1,600**.",
            "**CAF Housing Benefit:** All international students with a valid VLS-TS student visa can apply for CAF (Caisse d'Allocations Familiales) housing aid, which reimburses up to 40% of monthly accommodation rental costs.",
            "**Scholarships:** International applicants can apply for Charpak scholarships (for Indian students), French government Eiffel excellence grants, and institutional tuition fee waiver scholarships."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step",
      title: "Admission Procedure for Civil Engineering in France",
      lead: [
        "International students should follow a structured 10-step application and immigration roadmap for smooth transition to France."
      ],
      steps: [
        {
          title: "Select Specialisation Track",
          desc: "Define your interest among structural design, construction management, transportation infrastructure, geotechnics, or environmental water infrastructure."
        },
        {
          title: "Shortlist Institutions",
          desc: "Compare 3-year university Licence programs and 5-year integrated CTI engineering Grandes Écoles (such as INSA Toulouse, INSA Strasbourg, and ESTP Paris)."
        },
        {
          title: "Verify Language Requirements",
          desc: "Ascertain whether the course requires French CEFR B2 proficiency (DELF/TCF) or English proficiency (IELTS 6.0+)."
        },
        {
          title: "Check Application Channel",
          desc: "Determine if applications are submitted through Études en France (Campus France procedure), Parcoursup, or direct institutional portals."
        },
        {
          title: "Assemble Academic Dossier",
          desc: "Prepare certified mark sheets, sworn translations, motivation letters, CV, and teacher recommendation letters."
        },
        {
          title: "Submit Online Application",
          desc: "Submit your application before institutional deadlines (typically November to January for autumn intake) and pay application fees."
        },
        {
          title: "Attend Academic Interview",
          desc: "Complete admissions interviews, aptitude assessments, or entrance tests if required by the institution or Campus France."
        },
        {
          title: "Accept Admission Offer",
          desc: "Receive your official admission letter and confirm your enrollment by paying any required tuition deposit."
        },
        {
          title: "Campus France & Visa Processing",
          desc: "Complete the Campus France appointment, obtain NOC, pay the CVEC contribution (€103), and submit your Long-Stay Student Visa (VLS-TS) application via VFS."
        },
        {
          title: "Arrival & French Settlement",
          desc: "Fly to France, complete university on-site registration, validate your VLS-TS permit online with OFII, open a bank account, and apply for CAF housing assistance."
        }
      ]
    },
    {
      eyebrow: "Quality Assurance",
      title: "Accreditation and CTI Recognition in France",
      lead: [
        "Accreditation is vital when selecting between a standard university Bachelor and an engineering Grande École diploma."
      ],
      groups: [
        {
          t: "bullet",
          title: "Essential Accreditation Standards",
          items: [
            "**CTI Accreditation:** The *Diplôme d'Ingénieur* must be authorized and accredited by the **Commission des Titres d'Ingénieur (CTI)**, ensuring full European Master's degree status (300 ECTS) and the title of Ingénieur Diplômé.",
            "**National Bachelor Recognition:** Standard 3-year programs must carry the *Diplôme National de Licence* from the French Ministry of Higher Education or be registered on the RNCP.",
            "**ECTS Credit Allocation:** Ensure the program confers 180 ECTS (Licence) or 300 ECTS (integrated engineering track), guaranteeing complete credit portability across the European Higher Education Area (EHEA).",
            "**Mandatory Site Training:** Accredited French civil engineering programs incorporate compulsory site internships, design studio projects, and laboratory research modules."
          ]
        }
      ]
    },
    {
      eyebrow: "Career Outcomes",
      title: "Career & Employment Opportunities after Civil Engineering UG",
      lead: [
        "Civil engineering graduates from French institutions are recruited by global construction groups, engineering consultancies, transport authorities, and urban development agencies."
      ],
      groups: [
        {
          t: "bullet",
          title: "Popular Career Pathways & Job Roles",
          items: [
            "**Civil Engineer / Structural Engineer:** Design and oversee structural integrity of buildings, bridges, and infrastructure projects.",
            "**Site & Construction Engineer (Ingénieur Travaux):** Supervise on-site construction operations, team logistics, subcontractor safety, and quality execution.",
            "**BIM & CAD Coordinator:** Model digital building information systems and coordinate architectural and structural technical plans.",
            "**Geotechnical Engineer:** Analyze ground stability, soil properties, retaining walls, and specialized foundation works.",
            "**Transport Infrastructure Engineer:** Plan and design road networks, rail lines, airports, and urban transit systems.",
            "**Cost Estimator / Quantity Surveyor:** Manage project budgets, material procurement, tendering, and cost optimization.",
            "**Hydraulics & Environmental Specialist:** Design urban drainage, water supply systems, flood prevention, and ecological infrastructure."
          ]
        },
        {
          t: "p",
          items: [
            "**Salary Expectations:** Civil engineering graduates holding a Diplôme d'Ingénieur or Master's degree typically start at **€38,000 to €44,000 gross per year** in France, with salaries rising to **€55,000 to €75,000+** for senior site managers and project directors.",
            "**Post-Study Work Permit:** Indian and international students graduating with a Master's or Diplôme d'Ingénieur are entitled to a **2-year post-study work visa (RECE / APS)** in France."
          ]
        }
      ]
    },
    {
      eyebrow: "Application Essentials",
      title: "Documents Required for Civil Engineering Applications",
      lead: [
        "Ensure all documents are certified, translated, and organized according to official Campus France guidelines."
      ],
      groups: [
        {
          t: "bullet",
          title: "Complete Documentation Checklist",
          items: [
            "Valid international passport (photo, personal details, and signature pages).",
            "Class 10 and Class 12 secondary school certificates and detailed mark sheets.",
            "Official academic transcripts demonstrating high performance in Mathematics and Physics.",
            "Certified French or English translations of all academic documents.",
            "Proof of language proficiency (DELF/DALF/TCF for French; IELTS/TOEFL for English).",
            "Curriculum Vitae (CV) formatted to European standards.",
            "Statement of Purpose (Motivation Letter) tailored to civil and structural engineering.",
            "Two Letters of Recommendation from mathematics, physics, or engineering instructors.",
            "Proof of financial resources (€615+ per month living support required for French consular visa).",
            "Passport-size photographs and Schengen-compliant international medical insurance."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Expert Guidance",
      title: "Edu-Hawk Worldwide Study Abroad Guidance for France",
      lead: [
        "Navigating French engineering admissions, Grandes Écoles selection, and Campus France visa requirements demands specialized expertise."
      ],
      groups: [
        {
          t: "p",
          items: [
            "Edu-Hawk Worldwide Consultancy provides dedicated end-to-end guidance for Indian and international students aspiring to study civil engineering in France. From profiling suitable Grandes Écoles and university departments to managing Études en France applications, drafting compelling statements of purpose, and preparing for consular visa interviews, Edu-Hawk ensures a seamless and successful study-abroad journey."
          ]
        }
      ]
    },
    {
      slot: "faqs",
      eyebrow: "Frequently Asked Questions",
      title: "Frequently Asked Questions – UG Civil Engineering in France",
      lead: [
        "Clear answers to common questions regarding undergraduate civil and structural engineering studies in France."
      ]
    }
  ],
  faqs: [
    {
      q: "Is it possible for Indian students to study Undergraduate Civil Engineering in France?",
      a: "Yes. Indian students with Class 12 qualifications in Physics, Chemistry, and Mathematics (PCM) can study civil engineering in France by applying to 3-year university Licence programs or 5-year integrated CTI engineering Grande École tracks."
    },
    {
      q: "How long is the Civil Engineering Bachelor's degree in France?",
      a: "A standard university Bachelor's degree (Licence) is 3 years long (180 ECTS). The traditional French engineering Grande École track (Diplôme d'Ingénieur) is an integrated 5-year program (300 ECTS), combining 2 preparatory years with 3 years of advanced engineering specialization."
    },
    {
      q: "Are courses in Civil Engineering in France taught in English?",
      a: "The majority of traditional undergraduate civil engineering programs at French public universities and Grandes Écoles are taught in French, generally requiring CEFR B2 proficiency. However, some institutions offer international foundation modules or bilingual tracks with English instruction in the initial years."
    },
    {
      q: "What is the cost of studying Civil Engineering undergraduate in France?",
      a: "For the 2026–2027 academic year, published differentiated tuition for non-EU students at public universities is €2,902 per year at the Licence level (€178/year for EU students). In public engineering schools, fees range from €630 to €3,950 per year. Private specialized Grandes Écoles (such as ESTP) range from €8,000 to €14,000 per year."
    },
    {
      q: "How can Edu-Hawk Worldwide Consultancy help me study in France?",
      a: "Edu-Hawk Worldwide assists students with university and Grande École shortlisting, Études en France portal registration, sworn document translations, statement of purpose crafting, Charpak scholarship applications, and French student visa processing."
    }
  ]
};

export default function UGCivilEngineeringinFrancePage() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "INSA Toulouse (Institut National des Sciences Appliquées)",
        img: uniImg1,
        desc: "Prestigious 5-year CTI-accredited civil engineering program covering structural design, infrastructure engineering, and public works with intensive corporate internships."
      },
      {
        name: "INSA Strasbourg",
        img: uniImg2,
        desc: "Top-ranked French engineering institute offering specialized civil engineering education in building materials, geotechnics, hydraulics, and surveying."
      },
      {
        name: "ESTP Paris (École Spéciale des Travaux Publics)",
        img: uniImg3,
        desc: "France's leading Grande École for construction and civil engineering, renowned for strong industry partnerships with multinational contractors like Vinci, Bouygues, and Eiffage."
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
