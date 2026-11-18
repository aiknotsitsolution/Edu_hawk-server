import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/INSA_Lyon.webp";
import uniImg2 from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/IPSA.webp";
import uniImg3 from "../../../../../../Images/Abroad/France/Engineering_UG/Aerospace/ELISA_Aerospace.webp";
import cmsData from "../../../../../../data/study_abroad/france/aero_engg_ug.json";

const page = {
  name: "UG Aerospace Engineering in France",
  country: "France",
  slug: "ug/aerospace-engineering",
  title: "Study UG Aerospace Engineering in France for Indian Students | Aeronautics Degrees",
  description: "Complete guide to Undergraduate Aerospace Engineering in France: 3-year Bachelor's and 5-year Diplôme d'Ingénieur, INSA Lyon, IPSA, ELISA Aerospace, tuition fees, eligibility, and aerospace careers.",
  keywords: "Study Aerospace Engineering in France for Indian Students, Undergraduate Aerospace Engineering Courses in France, Best Universities for Aerospace Engineering in France, Bachelor’s Degree in Aerospace Engineering in France, Aerospace Engineering Eligibility Requirements in France, Aerospace Engineering Admission Requirements for Indian Students, Aerospace Engineering Tuition Fees in France 2026–2027, Cost of Studying Aerospace Engineering in France, English-Taught Aerospace Engineering Programmes in France, Aeronautical Engineering Courses in France, Aircraft Design and Propulsion Engineering in France, Space Engineering and Satellite Technology Courses in France, INSA Lyon Aerospace Engineering Bachelor's Programme, IPSA and ELISA Aerospace Engineering Courses in France, Aerospace Engineering Jobs and Career Opportunities in France",
  introTitle: "AEROSPACE ENGINEERING UNDERGRADUATE (UG) IN FRANCE",
  heroParas: [
    "France is the epicentre of European aeronautics and astronautics, hosting global industry pioneers including Airbus, Safran, Dassault Aviation, Thales, and the European Space Agency (ESA). International students pursuing undergraduate aerospace engineering in France receive world-class technical education in aerodynamics, flight mechanics, propulsion systems, and orbital astronautics through 3-year Bachelor of Science degrees and 5-year integrated CTI-accredited Diplôme d'Ingénieur pathways, complete with English-taught options, wind-tunnel research facilities, and 2-year post-study work authorization."
  ],
  overview: [
    "Undergraduate aerospace engineering in France provides high-level academic training combining advanced mathematics, classical mechanics, thermodynamics, computer simulation, and aerospace structural design.",
    "The French aerospace ecosystem encompasses aircraft manufacturing hubs in Toulouse and Bordeaux, rocket propulsion facilities in Vernon and Kourou, and satellite engineering clusters across Paris and Cannes.",
    "International secondary school graduates can choose between an accredited 3-year Bachelor of Science (Licence - 180 ECTS) or a 5-year integrated engineering Grande École curriculum culminating in the prestigious Diplôme d'Ingénieur (Grade de Master - 300 ECTS), accredited by the Commission des Titres d'Ingénieur (CTI).",
    "EduHawk Worldwide study abroad consultancy provides specialized guidance for prospective aerospace engineers—assisting with program selection, Class 12 science portfolio preparation, Campus France interviews, scholarship applications, and student visa processing."
  ],
  level: "Bachelor of Science (180 ECTS) & Diplôme d'Ingénieur in Aerospace (300 ECTS)",
  crumb: "Engineering / Aerospace (UG)",
  stats: [
    {
      label: "Program Options",
      value: "3-Yr Bachelor / 5-Yr Diplôme d'Ingénieur"
    },
    {
      label: "Accreditation",
      value: "CTI & EUR-ACE European Quality Label"
    },
    {
      label: "Tuition Structure",
      value: "€2,902 / Yr (Public) to €9,200 / Yr (Specialized)"
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
      title: "Key Advantages of Studying Aerospace Engineering in France",
      lead: "France offers unmatched access to Europe's commercial aviation, defense aerospace, and space exploration industries.",
      groups: [
        {
          t: "ul",
          items: [
            "**Global Aerospace Capital:** Toulouse and the Île-de-France region represent the headquarters of Airbus, ATR, Dassault Aviation, Safran, and CNES (National Centre for Space Studies).",
            "**Comprehensive Technical Curriculum:** Students explore aerodynamics, flight dynamics, gas turbine propulsion, satellite orbits, avionics, and composite aerospace structures.",
            "**Hands-On Flight & Lab Testing:** Programs feature subsonic and supersonic wind-tunnel testing, flight simulation laboratories, propulsion test cells, and CAD/FEA structural modeling.",
            "**English-Taught Bachelor Options:** Leading institutes like INSA Lyon offer 3-year International Bachelor programs in Mechanical, Materials and Aerospace Engineering taught entirely in English.",
            "**High Career Mobility:** Aerospace engineering analytical skills translate seamlessly into high-value roles in Formula 1 automotive racing, energy turbines, robotics, and advanced manufacturing.",
            "**2-Year Post-Study Work Permit:** Graduates holding recognized bachelor's and engineering master's qualifications can activate the 2-year Autorisation Provisoire de Séjour (APS) / RECE permit."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Undergraduate Curricula",
      title: "Aerospace Engineering Courses & Specializations in France",
      lead: "From aerodynamics to orbital satellite systems, French aerospace programs blend foundational physics with advanced aeronautical technology.",
      groups: [
        {
          t: "p",
          items: [
            "French aerospace degree pathways are structured around rigorous European academic standards:",
            "**3-Year Bachelor's Degree (Licence - 180 ECTS):** Provides foundational training in fluid mechanics, thermodynamics, materials science, computer-aided design, and aerospace structures.",
            "**5-Year Integrated Engineering Program (300 ECTS):** Features two years of preparatory mathematics and physics followed by three years of specialized aeronautical and astronautical engineering leading to the CTI Diplôme d'Ingénieur.",
            "**International Bachelor Tracks:** 3-year programs designed for international students, bridging engineering mechanics with aerospace specialization and French language learning."
          ]
        },
        {
          t: "boxes",
          boxes: [
            {
              title: "Aerodynamics & Flight Mechanics",
              tag: "Core Specialization",
              desc: "Computational fluid dynamics (CFD), boundary layer theory, flight stability, aircraft performance, and transonic aerodynamics."
            },
            {
              title: "Propulsion & Powerplants",
              tag: "Core Specialization",
              desc: "Gas turbine jet engines, turboprops, ramjets, rocket combustion, and electric/hybrid aircraft propulsion systems."
            },
            {
              title: "Aerospace Structures & Materials",
              tag: "Core Specialization",
              desc: "Carbon-fiber composite materials, aeroelasticity, fracture mechanics, structural fatigue, and lightweight airframe design."
            },
            {
              title: "Avionics & Embedded Flight Systems",
              tag: "Core Specialization",
              desc: "Fly-by-wire flight control, navigation systems (GPS/Galileo), aircraft radar, telemetry, and safety-critical flight computers."
            },
            {
              title: "Space Engineering & Satellites",
              tag: "Core Specialization",
              desc: "Orbital mechanics, spacecraft thermal management, satellite communications, attitude determination, and launch vehicle design."
            },
            {
              title: "Autonomous Aerial Systems & UAVs",
              tag: "Core Specialization",
              desc: "Unmanned aerial vehicles (drones), autonomous obstacle avoidance, swarm navigation algorithms, and aerial payload integration."
            }
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Universities & Grandes Écoles for Aerospace Engineering",
      lead: "France's specialized aerospace institutes and applied science networks deliver world-class undergraduate aeronautics training.",
      unis: [
        {
          name: "INSA Lyon",
          city: "Lyon",
          state: "Auvergne-Rhône-Alpes, France",
          desc: "Offers a renowned 3-year International Bachelor in Mechanical, Materials and Aerospace Engineering taught entirely in English, combining rigorous engineering science with aerospace design.",
          img: uniImg1
        },
        {
          name: "IPSA (Institut Polytechnique des Sciences Avancées)",
          city: "Paris & Toulouse",
          state: "Île-de-France & Occitanie, France",
          desc: "A specialized Grande École dedicated exclusively to aeronautics and space engineering, offering both a 3-year aerospace bachelor and a 5-year CTI-accredited Diplôme d'Ingénieur.",
          img: uniImg2
        },
        {
          name: "ELISA Aerospace",
          city: "Saint-Quentin & Bordeaux",
          state: "Hauts-de-France & Nouvelle-Aquitaine, France",
          desc: "Grande École specializing in aerospace systems, embedded technologies, drone autonomy, and military aviation, partnering closely with Dassault and Safran.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for International & Indian Students",
      lead: "Admissions into aerospace engineering require exceptional mathematical ability and scientific reasoning.",
      groups: [
        {
          t: "ul",
          items: [
            "**Academic Background:** High School Graduation / Class 12 completion (French baccalauréat equivalent) with strong marks in Mathematics and Physics (Chemistry or Computer Science strongly recommended).",
            "**Grade Benchmarks:** Competitive candidates typically present 75% to 85%+ aggregate in Mathematics and Physics.",
            "**English Language Proficiency:** For English-taught programs (such as INSA Lyon's International Bachelor), IELTS (minimum 6.0 – 6.5) or TOEFL iBT (minimum 80 – 90) is required.",
            "**French Language Proficiency:** For French-taught tracks, a certified CEFR B2 score (DELF B2 or TCF) is mandatory.",
            "**Entrance Assessment & Interview:** Specialized aerospace schools may conduct online academic interviews evaluating problem-solving skills, spatial reasoning, and engineering motivation."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Costs",
      title: "Tuition Fees & Cost of Living in France (2026–2027)",
      lead: "Tuition fees vary depending on whether the program is offered by a public university, public institute, or private Grande École.",
      groups: [
        {
          t: "table",
          headers: ["Institution / Academic Cycle", "Approximate Annual Tuition", "Total Program Cost (3 Yrs)", "Frequency"],
          rows: [
            ["Public University Bachelor (Licence)", "€2,902 / year (Non-EU rate)", "€8,706 (3-Year Total)", "Annual"],
            ["INSA Lyon International Bachelor", "€7,300 / year (approx. €21,900 total)", "€21,900 (3-Year Total)", "Annual"],
            ["ELISA Aerospace (Engineering Cycle)", "€8,500 – €9,200 / year", "€25,500 – €27,600", "Annual"],
            ["IPSA Aerospace Bachelor / Cycle", "€8,200 – €9,500 / year", "€24,600 – €28,500", "Annual"],
            ["CVEC Student & Campus Life Fee", "€103 / year", "€103 / year", "Annual"],
            ["Living Expenses (Toulouse, Lyon, Bordeaux)", "€750 – €950 / month", "€750 – €950 / month", "Monthly"],
            ["Living Expenses (Paris & Île-de-France)", "€1,000 – €1,350 / month", "€1,000 – €1,350 / month", "Monthly"]
          ]
        },
        {
          t: "p",
          items: [
            "**CAF Housing Allowance:** All international students with a valid VLS-TS student visa qualify for monthly accommodation subsidies from the French Government (CAF), reducing monthly rent by up to 30% to 40%.",
            "**Paid Industrial Internships:** Mandatory 4-to-6-month corporate internships during undergraduate engineering studies in France are legally remunerated (minimum legal stipend of approx. €600+ per month)."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Application Roadmap",
      title: "10-Step Roadmap to Studying Aerospace Engineering in France",
      lead: "EduHawk Worldwide provides structured assistance throughout every stage of the admissions and visa process.",
      steps: [
        {
          title: "Specialization & Degree Selection",
          desc: "Choose between a 3-year Bachelor of Science or a 5-year integrated Diplôme d'Ingénieur in aerospace, aeronautics, or space systems."
        },
        {
          title: "Language Testing (IELTS / DELF)",
          desc: "Obtain required scores on IELTS/TOEFL for English-taught bachelor programs or DELF B2 for French-taught curricula."
        },
        {
          title: "Institute Shortlisting & Profiling",
          desc: "Evaluate curricula, industrial connections with Airbus and Safran, tuition structures, and laboratory assets at INSA Lyon, IPSA, and ELISA."
        },
        {
          title: "Campus France / Études en France Dossier",
          desc: "Submit high school transcripts, CV, and SOP on the official Études en France electronic application system."
        },
        {
          title: "Direct School Portal Application",
          desc: "Submit supplementary applications directly via institutional portals (e.g., Groupe INSA international admissions or IPSA/ELISA portals)."
        },
        {
          title: "Academic Interview & Evaluation",
          desc: "Complete video interviews assessing mathematical readiness, physics fundamentals, and aeronautical motivation."
        },
        {
          title: "Offer Acceptance & Registration",
          desc: "Accept the admission offer, pay the tuition deposit, and settle the compulsory annual CVEC student contribution."
        },
        {
          title: "French Long-Stay Student Visa (VLS-TS)",
          desc: "Submit the student visa application accompanied by proof of financial resources (€615+/month) and housing reservation."
        },
        {
          title: "Aerospace Engineering Studies & Lab Work",
          desc: "Engage in aerodynamic wind-tunnel testing, CAD simulation, aerospace materials analysis, and paid industrial internships."
        },
        {
          title: "Post-Study Work Permit (APS / RECE)",
          desc: "Graduate with European qualifications and activate your 2-year job search permit to enter the aerospace industry in France or Europe."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Aerospace Career Opportunities & Salary Expectations",
      lead: "Graduates in aerospace engineering from France are highly valued across aerospace manufacturing, defense, and high-tech industries.",
      groups: [
        {
          t: "ul",
          items: [
            "**Aerospace Design & CAD Engineer:** Developing aerodynamic airframes, wing components, and fuselage structures using CATIA (€42,000 – €58,000 / year).",
            "**Flight Mechanics & Aerodynamics Engineer:** Conducting wind-tunnel tests and numerical CFD simulations for flight stability and performance (€44,000 – €62,000 / year).",
            "**Aircraft Structural Analysis Engineer:** Performing finite element analysis (FEA), stress testing, and fatigue calculations on composite airframes (€42,000 – €60,000 / year).",
            "**Avionics & Embedded Flight Systems Engineer:** Programming flight control laws, autopilot algorithms, and cockpit instrumentation (€45,000 – €65,000 / year).",
            "**Spacecraft & Satellite Systems Engineer:** Designing orbital payloads, satellite structural frames, and attitude control systems (€46,000 – €68,000 / year).",
            "**Aviation Maintenance & Quality Assurance Engineer:** Overseeing aircraft airworthiness inspections, MRO procedures, and flight test compliance (€40,000 – €56,000 / year)."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Application Checklist",
      title: "Required Documents for Admission & Student Visa",
      lead: "Ensure all non-French or non-English documents are accompanied by certified sworn translations.",
      groups: [
        {
          t: "ul",
          items: [
            "Valid International Passport with at least 6 months validity beyond your planned stay.",
            "Certified Class 10 and Class 12 mark sheets and passing certificates.",
            "Detailed high school transcripts highlighting marks in Mathematics and Physics.",
            "Certified English language proficiency score (IELTS or TOEFL) or French DELF B2 certificate.",
            "French-standard Curriculum Vitae (CV) emphasizing scientific coursework, robotics projects, or aviation interests.",
            "Statement of Purpose (Letter of Motivation) detailing academic passions and long-term career goals in aerospace.",
            "Two Academic Letters of Recommendation from science and mathematics educators.",
            "Proof of Financial Means demonstrating at least €615/month for the academic year.",
            "Proof of Accommodation in France (university CROUS lease, student hostel confirmation, or private tenancy agreement)."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can I study aerospace engineering in France after Class 12?",
      a: "Yes. Indian students who have completed Class 12 with strong scores in Mathematics and Physics can apply directly to 3-year Bachelor of Science programs (such as the International Bachelor at INSA Lyon) or 5-year integrated Grande École engineering courses (Diplôme d'Ingénieur) across France."
    },
    {
      q: "How many years does an aerospace engineering degree take in France?",
      a: "A standard university Bachelor's degree (Licence) in aerospace engineering takes 3 academic years (180 ECTS). The traditional French Grande École engineering school route takes 5 years (conferring the prestigious Diplôme d'Ingénieur / Grade de Master - 300 ECTS). Bachelor graduates can also choose to enter the master's cycle after 3 years."
    },
    {
      q: "Are there aerospace engineering courses taught in English in France?",
      a: "Yes. The International Bachelor's program in Mechanical, Materials and Aerospace Engineering at INSA Lyon is taught 100% in English. Specialized aerospace schools such as IPSA and ELISA Aerospace also offer English-taught tracks and international exchange semesters alongside French language modules."
    },
    {
      q: "What is the tuition cost for aerospace engineering in France?",
      a: "Tuition fees depend on the institution. Public university bachelor's fees for non-EU students are approximately €2,902 per year. INSA Lyon's English-taught International Bachelor is approximately €7,300 per year (€21,900 for the full 3-year program). Specialized private aerospace schools like IPSA and ELISA charge between €8,500 and €9,500 per year."
    },
    {
      q: "What job opportunities exist in France for aerospace engineering graduates?",
      a: "France has Europe's largest aerospace industry, offering positions in aircraft design, aerodynamics, flight control avionics, satellite engineering, and composite materials. Major employers include Airbus, Safran, Dassault Aviation, Thales, ArianeGroup, MBDA, and international engineering consultancies."
    }
  ]
};

export default function AerospaceEngineeringinFrancePage() {
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
        desc: "Offers a renowned 3-year International Bachelor in Mechanical, Materials and Aerospace Engineering taught entirely in English, combining rigorous engineering science with aerospace design."
      },
      {
        name: "IPSA (Paris & Toulouse)",
        img: uniImg2,
        desc: "A specialized Grande École dedicated exclusively to aeronautics and space engineering, offering both a 3-year aerospace bachelor and a 5-year CTI-accredited Diplôme d'Ingénieur."
      },
      {
        name: "ELISA Aerospace",
        img: uniImg3,
        desc: "Grande École specializing in aerospace systems, embedded technologies, drone autonomy, and military aviation, partnering closely with Dassault and Safran."
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
      seoPath="/study-abroad/france/ug/aerospace-engineering"
    />
  );
}
