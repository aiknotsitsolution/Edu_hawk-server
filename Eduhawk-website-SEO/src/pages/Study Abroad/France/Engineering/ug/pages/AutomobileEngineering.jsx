import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/ESTACA_School_of_Engineering.webp";
import uniImg2 from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/University_of_Technology_of_Belfort.webp";
import uniImg3 from "../../../../../../Images/Abroad/France/Engineering_UG/Automobile/Polytech_Orlans.webp";
import cmsData from "../../../../../../data/study_abroad/france/auto_engg_ug.json";

const page = {
  name: "UG Automobile Engineering in France",
  country: "France",
  slug: "ug/automobile-engineering",
  title: "Study UG Automobile Engineering in France for Indian Students | Vehicle Engineering Degrees",
  description: "Complete guide to Undergraduate Automobile Engineering in France: 3-year Bachelor's and 5-year Diplôme d'Ingénieur, ESTACA, UTBM, Polytech Orléans, tuition fees, EV technology, and career opportunities.",
  keywords: "Study Automobile Engineering in France for Indian Students, Undergraduate Automobile Engineering Courses in France, Best Universities for Automobile Engineering in France, Bachelor’s Degree in Automobile Engineering in France, Automobile Engineering Eligibility Requirements in France, Automobile Engineering Admission Requirements for Indian Students, Automobile Engineering Tuition Fees in France 2026–2027, Cost of Studying Automobile Engineering in France, Electric Vehicle Engineering in France, ESTACA Automotive Engineering, Automotive Engineering Jobs and Career Opportunities in France",
  introTitle: "AUTOMOBILE ENGINEERING UNDERGRADUATE (UG) IN FRANCE",
  heroParas: [
    "France is at the forefront of the global automotive revolution, driving next-generation electric mobility, autonomous vehicle intelligence, hybrid propulsion, and sustainable transport design. Home to multinational automotive giants like Renault Group, Stellantis, Michelin, and Valeo, France offers international undergraduates cutting-edge automotive engineering training through 3-year Bachelor of Science degrees and 5-year integrated CTI-accredited Diplôme d'Ingénieur pathways, complete with world-class prototyping facilities and 2-year European post-study work authorization."
  ],
  overview: [
    "Undergraduate automotive engineering in France prepares students for advanced vehicle systems design, internal combustion and electric powertrain optimization, and smart mobility solutions.",
    "French automotive engineering education emphasizes hands-on prototyping, wind-tunnel aerodynamics, crash safety simulations, battery pack architecture, and connected vehicle cybersecurity.",
    "Students can enter either through a 3-year Bachelor of Science (Licence - 180 ECTS) in mechanical or mobility engineering, or through a specialized 5-year integrated Grande École pathway leading to the prestigious national Diplôme d'Ingénieur (Grade de Master - 300 ECTS), accredited by the Commission des Titres d'Ingénieur (CTI).",
    "EduHawk Worldwide study abroad consultancy provides complete support for international and Indian students—from selecting the ideal automotive engineering institute and preparing technical portfolios to navigating Campus France and securing French student visas."
  ],
  level: "Bachelor of Science (180 ECTS) & Diplôme d'Ingénieur in Automotive (300 ECTS)",
  crumb: "Engineering / Automobile (UG)",
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
      label: "Tuition Structure",
      value: "€2,902 / Yr (Public) to €9,500 / Yr (Specialized)"
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
      title: "Key Advantages of Studying Automobile Engineering in France",
      lead: "France is a European automotive powerhouse leading the global shift toward electric mobility, connected cars, and autonomous driving.",
      groups: [
        {
          t: "ul",
          items: [
            "**World-Leading Automotive Hub:** Direct access to major automakers including Renault Group, Stellantis (Peugeot, Citroën, DS), Bugatti, Alpine, and tier-one suppliers like Valeo and Forvia.",
            "**Focus on Electric & Sustainable Mobility:** Deep immersion in lithium-ion battery management, hydrogen fuel-cell propulsion, regenerative braking, and lightweight composite chassis design.",
            "**Practical Prototyping & Vehicle Testing:** Students participate in hands-on vehicle build projects, Formula Student electric racing teams, and advanced dynamometer testing.",
            "**Specialized Transport Grandes Écoles:** Dedicated institutes such as ESTACA and ISAT focus exclusively on transportation systems and automotive engineering excellence.",
            "**Transferable Engineering Skills:** Technical skills in vehicle dynamics, CAD/CAM modeling, and structural mechanics provide flexible pathways across motorsport, aerospace, and robotics.",
            "**2-Year Post-Study Work Permit:** Graduates holding recognized French bachelor's and engineering master's qualifications qualify for the 2-year Autorisation Provisoire de Séjour (APS) / RECE work visa."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Undergraduate Curricula",
      title: "Automotive Engineering Courses & Specializations in France",
      lead: "From vehicle dynamics to embedded autonomous driving systems, French programs cover the entire spectrum of automotive technology.",
      groups: [
        {
          t: "p",
          items: [
            "Undergraduate automotive engineering in France is structured around rigorous theoretical and practical learning:",
            "**3-Year Bachelor's Degree (Licence - 180 ECTS):** Core mechanics, thermodynamics, fluid dynamics, manufacturing processes, and automotive electronics.",
            "**5-Year Integrated Engineering Program (300 ECTS):** A 2-year integrated preparatory cycle (classes préparatoires intégrées) followed by a 3-year professional engineering cycle conferring the CTI Diplôme d'Ingénieur.",
            "**Foundation via Mechanical Engineering:** Many students start with a broader Bachelor in Mechanical Engineering before specializing in vehicle systems or electric mobility."
          ]
        },
        {
          t: "boxes",
          boxes: [
            {
              title: "Vehicle Dynamics & Chassis",
              tag: "Core Major",
              desc: "Suspension geometry, steering kinematics, tire-road modeling, braking performance, and electronic stability control (ESC)."
            },
            {
              title: "Electric & Hybrid Powertrains",
              tag: "Core Major",
              desc: "Electric motor design, battery pack thermal management, inverters, power electronics, and hydrogen fuel cells."
            },
            {
              title: "Autonomous Driving & ADAS",
              tag: "Core Major",
              desc: "LiDAR and radar sensor fusion, camera computer vision, path planning algorithms, and vehicle-to-everything (V2X) communication."
            },
            {
              title: "Automotive Design & Aerodynamics",
              tag: "Core Major",
              desc: "Automotive body styling, aerodynamic drag reduction, wind-tunnel testing, and crashworthiness structural simulation."
            },
            {
              title: "Automotive Manufacturing & Industry 4.0",
              tag: "Core Major",
              desc: "Automated robotic assembly lines, digital twin simulation, lean production systems, and automotive quality assurance."
            },
            {
              title: "Motorsport & High Performance",
              tag: "Core Major",
              desc: "Aerodynamic downforce optimization, race telemetry analysis, lightweight composite structures, and powertrain tuning."
            }
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Universities & Grandes Écoles for Automobile Engineering",
      lead: "France's leading automotive engineering institutes provide world-class vehicle design and powertrain laboratories.",
      unis: [
        {
          name: "ESTACA — School of Engineering",
          city: "Saint-Quentin-en-Yvelines & Laval",
          state: "Île-de-France & Pays de la Loire, France",
          desc: "France's premier Grande École dedicated specifically to transport engineering, offering specialized automotive tracks in electric powertrains, autonomous vehicles, and motorsport.",
          img: uniImg1
        },
        {
          name: "UTBM (University of Technology of Belfort-Montbéliard)",
          city: "Belfort & Montbéliard",
          state: "Bourgogne-Franche-Comté, France",
          desc: "Located in the heart of France's historic automotive manufacturing valley, UTBM offers renowned engineering degrees in vehicle design, energy systems, and automotive production.",
          img: uniImg2
        },
        {
          name: "Polytech Orléans",
          city: "Orléans",
          state: "Centre-Val de Loire, France",
          desc: "Accredited public engineering school closely affiliated with ISAT, delivering cutting-edge mechanical and automotive engineering programs focused on sustainable mobility.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for International & Indian Students",
      lead: "Admission requires strong analytical capabilities and robust secondary school performance in mathematics and sciences.",
      groups: [
        {
          t: "ul",
          items: [
            "**Academic Preparation:** Higher Secondary Certificate (Class 12 / French baccalauréat equivalent) with strong performance in Mathematics and Physics (Chemistry or Computer Science recommended).",
            "**Academic Benchmarks:** Competitive automotive engineering programs generally look for 70% to 85%+ in Mathematics and Physics.",
            "**French Language Proficiency:** For French-taught engineering curricula, a certified CEFR B2 level (DELF B2 or TCF) is required.",
            "**English Language Proficiency:** For English-taught programs or international bachelor tracks, IELTS (minimum 6.0 – 6.5) or TOEFL iBT (minimum 80 – 90) is required.",
            "**Entrance Tests & Interviews:** Selective engineering schools (such as ESTACA or UTBM) may conduct online interviews evaluating mechanical curiosity and mathematical aptitude."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Costs",
      title: "Tuition Fees & Cost of Living in France (2026–2027)",
      lead: "France provides exceptionally affordable public university tuition, while specialized private engineering schools set institutional rates.",
      groups: [
        {
          t: "table",
          headers: ["Institution / Academic Track", "EU / EEA National Rate", "Non-EU Differentiated Rate", "Frequency"],
          rows: [
            ["Public University Bachelor (Licence)", "€178 / year", "€2,902 / year", "Annual"],
            ["Public Engineering School (CTI Rate)", "€630 / year", "€2,902 – €3,950 / year", "Annual"],
            ["ESTACA / Private Transport Grandes Écoles", "€8,000 – €9,500 / year", "€8,500 – €9,800 / year", "Annual"],
            ["CVEC Student & Campus Life Fee", "€103", "€103", "Annual"],
            ["Student Social Security (Health Insurance)", "Free (100% French Sécurité Sociale)", "Free (100% French Sécurité Sociale)", "Annual"],
            ["Living Expenses (Belfort, Orléans, Laval)", "€650 – €850 / month", "€650 – €850 / month", "Monthly"],
            ["Living Expenses (Paris & Île-de-France)", "€1,000 – €1,350 / month", "€1,000 – €1,350 / month", "Monthly"]
          ]
        },
        {
          t: "p",
          items: [
            "**CAF Housing Allowance:** All international students holding a valid VLS-TS student visa are entitled to monthly rental subsidies from the French Government (CAF), reducing housing expenses by up to 30% to 40%.",
            "**Remunerated Corporate Internships:** Mandatory engineering internships lasting over 2 months in France carry a legally mandated minimum stipend of approx. €600+ per month."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Application Roadmap",
      title: "10-Step Roadmap to Studying Automobile Engineering in France",
      lead: "EduHawk Worldwide provides expert counseling from university selection to arrival in France.",
      steps: [
        {
          title: "Program & Institution Identification",
          desc: "Select between a 3-year Bachelor in Mechanical/Automotive Engineering or a 5-year integrated Diplôme d'Ingénieur at ESTACA or UTBM."
        },
        {
          title: "Language Testing (IELTS / DELF)",
          desc: "Attain required scores on IELTS/TOEFL for English-taught degrees or DELF B2 for French-medium engineering tracks."
        },
        {
          title: "University & Grande École Shortlisting",
          desc: "Compare automotive laboratories, partnerships with Renault/Stellantis, formula student projects, and tuition fees."
        },
        {
          title: "Campus France & Études en France Dossier",
          desc: "Submit your academic profile, CV, and SOP on the official Études en France electronic portal and schedule the academic interview."
        },
        {
          title: "Direct School Portal Submission",
          desc: "Submit supplementary institutional applications directly via school portals (e.g., ESTACA admissions or UTBM network portal)."
        },
        {
          title: "Academic Interview & Evaluation",
          desc: "Participate in online video interviews assessing mechanical reasoning, vehicle enthusiasm, and problem-solving skills."
        },
        {
          title: "Admission Acceptance & Registration",
          desc: "Accept the admission offer, pay the tuition deposit, and pay the mandatory annual CVEC student contribution."
        },
        {
          title: "French Long-Stay Student Visa (VLS-TS)",
          desc: "Submit your visa application with proof of sufficient living funds (€615+/month) and confirmed student housing."
        },
        {
          title: "Undergraduate Automotive Engineering Studies",
          desc: "Complete coursework, CAD vehicle modeling, chassis dynamometer testing, and a mandatory paid corporate internship."
        },
        {
          title: "Post-Study Work Permit (APS / RECE)",
          desc: "Upon graduation, activate the 2-year job search permit to launch your automotive engineering career in France or Europe."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Automotive Career Opportunities & Salary Expectations",
      lead: "Automotive engineering graduates from France are in high demand across vehicle manufacturers, tier-one suppliers, and mobility startups.",
      groups: [
        {
          t: "ul",
          items: [
            "**Automotive Design & CAD Engineer:** Designing vehicle chassis, aerodynamic body panels, and interior ergonomics using CATIA (€40,000 – €56,000 / year).",
            "**Vehicle Dynamics & Suspension Engineer:** Optimizing ride comfort, handling kinematics, steering responsiveness, and braking performance (€42,000 – €60,000 / year).",
            "**Electric Vehicle Systems Engineer:** Designing battery thermal management systems, electric traction drives, and power inverters (€44,000 – €64,000 / year).",
            "**Powertrain & Propulsion Engineer:** Developing hybrid combustion systems, hydrogen fuel-cell powerplants, and transmission gearboxes (€42,000 – €62,000 / year).",
            "**Autonomous Vehicle Software Engineer:** Developing LiDAR perception algorithms, path planning, and autonomous steering control systems (€46,000 – €68,000 / year).",
            "**Automotive Test & Validation Engineer:** Conducting track testing, climatic chamber environmental trials, and crash safety assessments (€38,000 – €54,000 / year)."
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
            "Detailed high school transcripts highlighting marks in Mathematics and Physics.",
            "Certified English language proficiency score (IELTS or TOEFL) or French DELF B2 certificate.",
            "Comprehensive Curriculum Vitae (CV) formatted to French academic standards highlighting technical or automotive projects.",
            "Statement of Purpose (Letter of Motivation) detailing automotive career goals and interest in French mobility engineering.",
            "Two Academic Letters of Recommendation from science and mathematics educators.",
            "Proof of Financial Maintenance demonstrating at least €615/month for the academic year.",
            "Proof of Accommodation in France (university CROUS lease, student residence confirmation, or private rental contract)."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can I study automobile engineering in France after Class 12?",
      a: "Yes. Indian students who have completed Class 12 with strong scores in Mathematics and Physics can apply directly to 3-year Bachelor of Science programs (in Mechanical or Mobility Engineering) or 5-year integrated Grande École engineering courses (Diplôme d'Ingénieur) across France."
    },
    {
      q: "How many years does an automobile engineering degree take in France?",
      a: "A standard university Bachelor’s degree (Licence) takes 3 academic years (180 ECTS). The specialized French Grande École engineering school route takes 5 years (conferring the prestigious Diplôme d'Ingénieur / Grade de Master - 300 ECTS). Bachelor graduates can also choose to enter the master's cycle after 3 years."
    },
    {
      q: "Is automobile engineering taught in English in France?",
      a: "At the undergraduate level, many engineering tracks are taught in French (requiring DELF B2), while several institutions offer bilingual tracks or English-taught international bachelor degrees. At the master's level, specialized programs like the Master in Automotive Engineering for Sustainable Mobility are taught 100% in English."
    },
    {
      q: "What is the tuition cost for automobile engineering in France?",
      a: "Tuition fees depend on the institution. Non-EU students at public universities pay standard reference fees of €2,902 per year for bachelor's level programs (€630/year for EU students). Specialized private engineering schools like ESTACA charge approximately €8,000 to €9,800 per year."
    },
    {
      q: "What job opportunities exist after graduating with an automotive engineering degree?",
      a: "Graduates work as automotive design engineers, vehicle dynamics specialists, electric powertrain engineers, autonomous driving developers, and testing engineers. Major employers in France include Renault, Stellantis, Michelin, Valeo, Forvia, Alstom, and international engineering consultancies."
    }
  ]
};

export default function AutomobileEngineeringinFrancePage() {
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
        name: "ESTACA — School of Engineering",
        img: uniImg1,
        desc: "France's premier Grande École dedicated specifically to transport engineering, offering specialized automotive tracks in electric powertrains, autonomous vehicles, and motorsport."
      },
      {
        name: "University of Technology of Belfort (UTBM)",
        img: uniImg2,
        desc: "Located in the heart of France's historic automotive manufacturing valley, UTBM offers renowned engineering degrees in vehicle design, energy systems, and automotive production."
      },
      {
        name: "Polytech Orléans",
        img: uniImg3,
        desc: "Accredited public engineering school closely affiliated with ISAT, delivering cutting-edge mechanical and automotive engineering programs focused on sustainable mobility."
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
      seoPath="/study-abroad/france/ug/automobile-engineering"
    />
  );
}
