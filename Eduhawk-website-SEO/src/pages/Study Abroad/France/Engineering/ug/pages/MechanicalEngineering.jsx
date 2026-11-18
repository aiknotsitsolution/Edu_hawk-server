import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/INSA_Lyon.webp";
import uniImg2 from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/INSA_Toulouse.webp";
import uniImg3 from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/University_of_Technology_of_Compiegne_UT.webp";
import uniImg4 from "../../../../../../Images/Abroad/France/Engineering_UG/Mechanical/University_of_Technology_of_Belfort.webp";
import cmsData from "../../../../../../data/study_abroad/france/mech_engg_pg.json";

const page = {
  name: "UG Mechanical Engineering in France",
  country: "France",
  slug: "study-abroad/france/ug/mechanical-engineering",
  title: "Study UG Mechanical Engineering in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to UG Mechanical Engineering in France: Top institutions (INSA Lyon, INSA Toulouse, UTC, UTBM), CTI Diplôme d'Ingénieur vs 3-year Bachelor, €178 – €2,902 tuition fees, admissions, and 2-year post-study work visa.",
  keywords: "Study Mechanical Engineering in France for Indian Students, Mechanical Engineering Courses in France for International Students, Best Universities for Mechanical Engineering in France, Undergraduate Mechanical Engineering in France, Bachelor’s Degree in Mechanical Engineering in France, Mechanical Engineering Eligibility Requirements in France, Mechanical Engineering Admission Requirements for Indian Students, Mechanical Engineering Tuition Fees in France 2026–2027, Cost of Studying Mechanical Engineering in France, English-Taught Mechanical Engineering Programmes in France, Automotive Engineering Courses in France, Aerospace and Manufacturing Engineering in France, Robotics and Automation Engineering Courses in France, CTI Accredited Engineering Schools in France, Mechanical Engineering Jobs and Career Opportunities in France",
  introTitle: "MECHANICAL ENGINEERING IN FRANCE",
  heroParas: [
    "Undergraduate Mechanical Engineering in France is a premier destination for international students seeking rigorous technical mastery and high-impact careers across aerospace, automotive innovation, advanced robotics, manufacturing, renewable energy systems, and industrial automation."
  ],
  overview: [
    "France boasts a world-renowned engineering education heritage, characterized by elite Grandes Écoles d'Ingénieurs and leading research universities that fuse profound scientific fundamentals with practical workshop training, state-of-the-art laboratory experimentation, computer-aided design (CAD/CAM), and direct industry exposure.",
    "Mechanical engineering programs across France focus on the comprehensive lifecycle of machines and mechanical systems—from conceptual design, thermodynamics, and materials science to finite element analysis, mechatronics, and sustainable industrial operations.",
    "Through EduHawk Worldwide study abroad guidance, international applicants receive end-to-end strategic mentorship, navigating institutional selection, Campus France (Études en France) procedures, portfolio preparation, scholarship avenues, and post-study career opportunities."
  ],
  level: "Bachelor / BUT / Diplôme d'Ingénieur (CTI)",
  crumb: "Engineering / Mechanical (UG)",
  stats: [
    {
      label: "Degree Pathways",
      value: "3-Yr Bachelor / BUT or 5-Yr Diplôme d'Ingénieur"
    },
    {
      label: "Tuition (Public)",
      value: "€178 (EU) / €2,902/yr (Non-EU Bachelor)"
    },
    {
      label: "Top Institutions",
      value: "INSA Lyon, INSA Toulouse, UTC, UTBM"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Why Study Mechanical Engineering in France",
      lead: [
        "France maintains an elite global standing in advanced engineering, serving as the European industrial powerhouse for aeronautics (Airbus, Safran, Dassault), automotive leadership (Renault, Stellantis), high-speed rail (TGV/Alstom), renewable power, and industrial automation."
      ],
      groups: [
        {
          t: "Industry-Focused Education",
          items: [
            "Curricula emphasize practical hands-on laboratory sessions, technical engineering projects, and mandatory industrial internships (stages en entreprise) connecting students directly with multinational engineering leaders."
          ]
        },
        {
          t: "Leading-Edge Research & Prototyping Facilities",
          items: [
            "Students gain day-to-day access to computer-aided design (CAD) suites, computational fluid dynamics (CFD) workstations, multi-axis CNC manufacturing hubs, additive manufacturing centers, materials testing rigs, and wind tunnels."
          ]
        },
        {
          t: "Broad Technical Specializations",
          items: [
            "Undergraduate students can tailor their technical trajectory across automotive engineering, aerospace propulsion, mechatronics, robotics, renewable thermal systems, and advanced composite materials."
          ]
        },
        {
          t: "International Learning Pathways",
          items: [
            "An expanding range of engineering institutions offer bilingual or English-taught tracks, supported by intensive French language immersion to prepare students for the European labor market."
          ]
        },
        {
          t: "Seamless Higher Education Progression",
          items: [
            "Graduates of 3-year bachelor's degrees and BUT programs can transition directly into specialized Master of Science (MSc) programs or complete the final cycle of the CTI-accredited Diplôme d'Ingénieur."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Specializations",
      title: "Mechanical Engineering Degrees and Courses Offered in France",
      lead: [
        "Undergraduate mechanical engineering courses in France focus on the design, mathematical modeling, manufacturing, testing, and lifecycle maintenance of complex mechanical and electromechanical systems."
      ],
      groups: [
        {
          t: "Popular Undergraduate Engineering Specializations",
          items: [
            "Mechanical Engineering Core: Machine design, engineering mechanics, kinematics, finite element analysis, and manufacturing processes.",
            "Automotive Engineering: Vehicle dynamics, internal combustion engines, electric and hybrid powertrains, autonomous vehicle sensors, and chassis design.",
            "Aerospace Engineering: Aerodynamics, aircraft structures, propulsion mechanics, orbital mechanics, and lightweight aerospace alloys.",
            "Manufacturing & Production Engineering: Computer-integrated manufacturing (CIM), industrial robotics, lean manufacturing, production scheduling, and total quality management.",
            "Robotics and Automation: Mechatronics, sensor integration, PLC programming, cyber-physical systems, and robotic manipulation.",
            "Materials Engineering: Metallurgy, polymer composites, mechanical characterization, fatigue analysis, and nanotechnology.",
            "Energy & Thermal Engineering: Thermodynamics, heat transfer, HVAC systems, power generation, fluid mechanics, and renewable energy conversion.",
            "Industrial Engineering: Process optimization, supply chain engineering, operations research, and industrial ergonomic design."
          ]
        },
        {
          t: "Program Formats & Typical Durations",
          items: [
            "Licence (BSc) in Mechanical Engineering: 3-year academic university degree (180 ECTS) offering rigorous theoretical foundations in mechanics, physics, and applied mathematics.",
            "Bachelor Universitaire de Technologie (BUT) in GMP: 3-year technological degree (Génie Mécanique et Productique) delivered at university technology institutes (IUT), focusing on applied workshop manufacturing, CAD, and industry placements.",
            "French Engineering School Integrated Program (Diplôme d'Ingénieur): 5-year comprehensive curriculum accredited by the CTI (300 ECTS, Master equivalent), comprising a 2-year foundational preparatory cycle followed by a 3-year specialized engineering cycle.",
            "English-Taught Bachelor of Science: 3-year specialized international engineering programs offered by select private and public engineering consortia."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Mechanical Engineering Universities & Engineering Schools in France",
      lead: [
        "France's Grandes Écoles d'Ingénieurs and technology universities provide state-of-the-art facilities, elite academic faculty, and unmatched industrial networks."
      ],
      unis: [
        {
          name: "INSA Lyon",
          city: "Villeurbanne (Lyon)",
          state: "Auvergne-Rhône-Alpes",
          desc: "A premier public Grande École d'Ingénieurs renowned for its mechanical engineering department, offering cutting-edge laboratories in solid mechanics, fluid dynamics, and automated manufacturing systems.",
          img: uniImg1
        },
        {
          name: "INSA Toulouse",
          city: "Toulouse",
          state: "Occitanie",
          desc: "Located in the heart of Europe's aerospace capital, INSA Toulouse delivers elite engineering education combining mechanical design, aerospace structures, and industrial systems with world-class industry connections.",
          img: uniImg2
        },
        {
          name: "University of Technology of Compiègne (UTC)",
          city: "Compiègne",
          state: "Hauts-de-France",
          desc: "A leading French university of technology renowned for its interdisciplinary engineering curricula, modern prototyping hubs, and strong partnerships with European automotive and mechanical leaders.",
          img: uniImg3
        },
        {
          name: "University of Technology of Belfort-Montbéliard (UTBM)",
          city: "Belfort / Montbéliard",
          state: "Bourgogne-Franche-Comté",
          desc: "Centrally positioned in a major industrial and transportation hub, UTBM specializes in mechanical engineering, vehicle design, mechatronics, and advanced energy systems with excellent international tracks.",
          img: uniImg4
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Requirements for Mechanical Engineering in France",
      lead: [
        "International applicants must satisfy clear academic prerequisites in mathematics and physical sciences, alongside relevant language certifications."
      ],
      groups: [
        {
          t: "Academic Requirements",
          items: [
            "Successful completion of 12 years of formal secondary education equivalent to the French Baccalauréat.",
            "Indian candidates must hold a recognized Higher Secondary Certificate (Class 12) from CBSE, CISCE, or State Boards with high standing in Mathematics and Physics.",
            "Chemistry, Computer Science, or Engineering Drawing backgrounds are advantageous for specialized mechanics and manufacturing admissions.",
            "Minimum aggregate marks typically range between 65% and 80% depending on the selectivity of the engineering school."
          ]
        },
        {
          t: "Language Proficiency Standards",
          items: [
            "English-Taught Programs: IELTS Academic score of 6.0 – 6.5, TOEFL iBT score of 80 – 90, or recognized equivalent proficiency certificate.",
            "French-Taught Programs: DELF B2 or TCF B2 minimum certification demonstrating fluency for technical coursework, laboratory discussions, and engineering exams.",
            "Bilingual tracks often offer dedicated preparatory French language immersion alongside first-year English-taught engineering modules."
          ]
        },
        {
          t: "Selection Assessments",
          items: [
            "Top engineering schools and Grandes Écoles may conduct mathematics and physics entrance assessments, review academic portfolios, and hold structured motivation interviews."
          ]
        }
      ]
    },
    {
      slot: "qualifications",
      eyebrow: "Documentation Checklist",
      title: "Qualifications & Required Application Documents",
      lead: [
        "Organizing a complete and certified dossier ensures smooth processing through university admissions portals and Campus France."
      ],
      groups: [
        {
          t: "Essential Application Documents",
          items: [
            "Valid international passport with at least 6 months validity beyond your planned stay.",
            "Certified mark sheets and passing certificates for Class 10 and Class 12.",
            "Official academic transcripts with grading scales and certified French or English translations.",
            "Valid score reports for English (IELTS/TOEFL) or French (DELF/TCF) language proficiency.",
            "Statement of Purpose (SOP) or Letter of Motivation outlining academic drive, career vision, and choice of France.",
            "Two academic letters of recommendation (LOR) from high school mathematics and physics teachers.",
            "Up-to-date Curriculum Vitae (CV) highlighting technical hobbies, robotics clubs, internships, or science competitions.",
            "Completed university application form and receipt of application fee payment.",
            "Official Études en France (EEF) procedure file registration number."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Financial Planning",
      title: "Tuition Fees and Cost of Studying Mechanical Engineering in France",
      lead: [
        "Studying engineering in France offers an exceptional value proposition compared to other Western destinations, supported by national public subsidies and housing assistance."
      ],
      table: {
        caption: "Annual Tuition Reference Fees in French Public Higher Education (2026–2027)",
        headers: ["Degree Level", "EU / EEA Students", "Non-EU / International Students"],
        rows: [
          ["Licence / Bachelor (3 Years)", "€178 / year", "€2,902 / year"],
          ["Master / Diplôme d'Ingénieur", "€255 – €630 / year", "€2,902 – €3,950 / year"],
          ["Doctorate / PhD (3 Years)", "€398 / year", "€398 / year"],
          ["Campus Life Contribution (CVEC)", "approx. €103 / year", "approx. €103 / year"]
        ]
      },
      groups: [
        {
          t: "Private Engineering School Tuition",
          items: [
            "Tuition fees at private engineering schools and specialized technical institutes generally range from €6,000 to €15,000 per academic year, depending on the school's corporate sponsorships and equipment infrastructure."
          ]
        },
        {
          t: "Monthly Living Expenses Breakdown",
          items: [
            "Student Accommodation: €350 to €750/month in regional university hubs (Lyon, Toulouse, Compiègne, Belfort) and €750 to €1,200/month in the Paris metropolitan region.",
            "CAF Housing Subsidy: International students are eligible to apply for the French government CAF (Caisse d'Allocations Familiales) rent reimbursement, offsetting €100 to €250/month.",
            "Food and Groceries: €200 to €350/month, supplemented by subsidized university CROUS restaurants offering balanced meals for approximately €3.30.",
            "Local Transportation: €30 to €75/month with discounted student transit passes across French city networks.",
            "Healthcare: Universal French Social Security (Sécurité Sociale) coverage is completely free for registered international students."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Guide",
      title: "Undergraduate Mechanical Engineering Admission Process in France",
      lead: [
        "Follow this comprehensive 10-step timeline to transition smoothly from course selection to enrollment at your French engineering campus."
      ],
      steps: [
        {
          title: "Select Specialization & Degree Pathway",
          desc: "Decide whether your career aligns with machine design, aerospace, automotive engineering, manufacturing systems, or robotics, and choose between a 3-year Bachelor/BUT or a 5-year Diplôme d'Ingénieur."
        },
        {
          title: "Shortlist Accredited Institutions",
          desc: "Compare CTI-accredited Grandes Écoles, public universities, and technology institutes based on faculty expertise, industrial partnerships, tuition costs, and location."
        },
        {
          title: "Verify Academic & Language Prerequisites",
          desc: "Confirm Class 12 mathematics and physics minimum scores alongside required IELTS/TOEFL or DELF B2 language score thresholds."
        },
        {
          title: "Establish Campus France Account",
          desc: "Create your profile on the Études en France (EEF) portal, the official centralized platform connecting international candidates with French universities."
        },
        {
          title: "Assemble Certified Application Dossier",
          desc: "Collect certified high school transcripts, passport copies, language test certificates, CV, letters of recommendation, and a tailored Statement of Purpose."
        },
        {
          title: "Submit University Applications",
          desc: "Apply either through the Études en France platform, Parcoursup (where applicable), or directly through engineering school consortium portals before institutional deadlines."
        },
        {
          title: "Participate in Academic Assessments & Interviews",
          desc: "Attend entrance written assessments or online technical and motivational interviews if required by selective engineering schools."
        },
        {
          title: "Accept Offer & Complete Campus France Interview",
          desc: "Confirm your admission offer, pay enrollment deposits, and complete the mandatory Campus France academic interview."
        },
        {
          title: "Apply for Long-Stay Student Visa (VLS-TS)",
          desc: "Submit your student visa application through the official France-Visas portal with proof of financial maintenance (minimum €615/month) and housing accommodation confirmation."
        },
        {
          title: "Arrival, CVEC & Campus Integration",
          desc: "Pay the CVEC contribution, finalize university registration, open a French bank account, register for free social security, and apply for your CAF housing subsidy."
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Quality Assurance",
      title: "Accreditation and Recognition of French Mechanical Engineering Degrees",
      lead: [
        "France enforces stringent quality assurance standards ensuring that engineering qualifications carry supreme international academic and professional prestige."
      ],
      groups: [
        {
          t: "Commission des Titres d’Ingénieur (CTI)",
          items: [
            "The CTI is the independent statutory body established by French law that evaluates and authorizes higher education institutions to award the prestigious Diplôme d'Ingénieur.",
            "A Diplôme d'Ingénieur confers an internationally recognized Master of Science equivalence (300 ECTS) and the EUR-ACE (European Accredited Engineer) quality label.",
            "Degrees awarded with CTI accreditation qualify graduates for direct admission into doctoral research programs globally and immediate professional engineering licensing."
          ]
        },
        {
          t: "Licence and BUT Qualifications",
          items: [
            "Standard 3-year university Licence degrees and BUT qualifications are nationally accredited by the Ministry of Higher Education and Research, fully recognized under the European Bologna Process (EHEA) for worldwide credit transfer."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Mechanical Engineering in France: Career Opportunities and Salary Outlook",
      lead: [
        "Mechanical engineering graduates enjoy strong demand across France and the European Union, propelled by high-tech manufacturing, defense, and green energy transitions."
      ],
      groups: [
        {
          t: "Key Industry Sectors",
          items: [
            "Aerospace & Aviation: Airbus, Safran, Dassault Aviation, Thales, ArianeGroup.",
            "Automotive & Mobility: Renault Group, Stellantis, Valeo, Michelin, Alstom.",
            "Energy & Power Generation: Électricité de France (EDF), TotalEnergies, Engie, Framatome.",
            "Industrial Equipment & Robotics: Schneider Electric, Legrand, Dassault Systèmes, Saint-Gobain."
          ]
        },
        {
          t: "Emerging Job Roles & Specializations",
          items: [
            "Mechanical Design Engineer (CAD/SolidWorks/CATIA expert).",
            "Junior Production & Manufacturing Operations Engineer.",
            "Automotive Powertrain & EV Systems Engineer.",
            "Mechatronics and Industrial Robotics Automation Engineer.",
            "Computational Fluid Dynamics (CFD) & Finite Element Analysis (FEA) Specialist.",
            "Quality Assurance, Testing & Structural Reliability Engineer."
          ]
        },
        {
          t: "Salary Expectations in France",
          items: [
            "Starting Graduate Salaries: €36,000 to €44,000 per year for junior engineers holding accredited qualifications.",
            "Experienced Professionals (3–7 years): €50,000 to €68,000 per year.",
            "Senior Engineering Managers & Technical Directors: €75,000 to €100,000+ per year.",
            "Post-Study Work Rights: Graduates of CTI engineering and master's programs are entitled to the 2-year RECE / APS post-study residence permit to seek employment across France."
          ]
        }
      ]
    },
    {
      slot: "eduhawk",
      eyebrow: "Consultancy Support",
      title: "How EduHawk Worldwide Consultancy Guides Your Study Abroad Journey",
      lead: [
        "EduHawk Worldwide delivers end-to-end expert guidance to turn your dream of studying mechanical engineering in France into reality."
      ],
      groups: [
        {
          t: "Strategic Profiling & University Shortlisting",
          items: [
            "Personalized counseling matching your academic background in mathematics and physics with the best-fit public universities, IUT institutes, and CTI Grandes Écoles."
          ]
        },
        {
          t: "Application Dossier & SOP Excellence",
          items: [
            "Expert editing and refinement of your Statement of Purpose (SOP), CV, and recommendation letters to satisfy rigorous French academic selection committees."
          ]
        },
        {
          t: "Campus France & Visa Guidance",
          items: [
            "Step-by-step assistance through the Études en France portal, mock interview preparation for your Campus France assessment, and flawless visa documentation."
          ]
        },
        {
          t: "Pre-Departure & Settlement Mentorship",
          items: [
            "Comprehensive guidance on finding student accommodation, understanding the CVEC fee, opening French bank accounts, and applying for CAF housing support."
          ]
        }
      ]
    },
    {
      slot: "faqs",
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      faqs: [
        {
          q: "Can Indian students pursue undergraduate Mechanical Engineering in France?",
          a: "Yes. Indian students who have completed Class 12 with strong standing in Mathematics and Physics can apply for 3-year bachelor's degrees, BUT programs, or 5-year integrated CTI engineering programs in France."
        },
        {
          q: "How many years does it take to complete undergraduate Mechanical Engineering in France?",
          a: "A university Licence or Bachelor of Science degree takes 3 years (180 ECTS). The traditional French Grande École engineering path leading to the CTI Diplôme d'Ingénieur takes 5 years (300 ECTS, Master equivalent), comprising a 2-year preparatory cycle and a 3-year specialized cycle."
        },
        {
          q: "Are there Mechanical Engineering courses in France taught in English?",
          a: "Yes. An increasing number of French engineering institutions and universities offer English-taught undergraduate engineering tracks or international pathways, accompanied by introductory French language classes."
        },
        {
          q: "What is the cost of studying undergraduate Mechanical Engineering in France?",
          a: "At public universities, published national differentiated tuition fees for non-EU students for 2026–2027 are €2,902 per year at the bachelor's level (compared to €178/year for EU students). Tuition at private engineering schools ranges from €6,000 to €15,000 per year."
        },
        {
          q: "What are the required subjects to study Mechanical Engineering in France?",
          a: "Admission requires a solid foundation in Mathematics and Physics. Chemistry, Computer Science, and Engineering Drawing are also beneficial depending on the specific curriculum."
        }
      ]
    }
  ]
};

export default function UGMechanicalEngineeringinFrancePage() {
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
        desc: "A premier public Grande École d'Ingénieurs offering state-of-the-art mechanical design and manufacturing laboratories."
      },
      {
        name: "INSA Toulouse",
        img: uniImg2,
        desc: "Located in Europe's aerospace hub, INSA Toulouse delivers elite mechanical and aerospace engineering education."
      },
      {
        name: "University of Technology of Compiegne (UTC)",
        img: uniImg3,
        desc: "Leading French university of technology renowned for interdisciplinary mechanical systems and industry partnerships."
      },
      {
        name: "University of Technology of Belfort (UTBM)",
        img: uniImg4,
        desc: "Specializes in mechanical engineering, vehicle design, and mechatronics in a major industrial corridor."
      }
    ]
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
