import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Architecture/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Architecture/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Architecture/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Architecture/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Architecture/cole_Nationale_Suprieure_dArchitecture_d.webp";
import uniImg2 from "../../../../Images/Abroad/France/Architecture/cole_Nationale_Suprieure_dArchitecture_d_2.webp";
import uniImg3 from "../../../../Images/Abroad/France/Architecture/cole_Nationale_Suprieure_dArchitecture_d_3.webp";
import cmsData from "../../../../data/study_abroad/france/architecture.json";

const page = {
  name: "Architecture in France",
  country: "France",
  slug: "architecture",
  title: "Study Architecture in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Architecture in France for Indian students: Top ENSA schools (Paris-Belleville, Versailles, Lyon), degrees (DEEA, DEA, HMONP), tuition fees, portfolio criteria, and 2-year post-study work visa.",
  keywords: "Study Architecture in France for Indian Students, Architecture Courses in France for International Students, Undergraduate Architecture Degrees in France (DEEA), Postgraduate Architecture Courses in France (DEA), Best Architecture Schools in France, Architecture Eligibility Requirements for Indian Students, Architecture Admission Requirements in France, Cost of Studying Architecture in France, Architecture Scholarships in France for Indian Students, Architecture Portfolio Requirements for French Schools, Sustainable Architecture Courses in France, Urban Design and Planning Courses in France, Building Information Modelling (BIM) Courses in France, Architecture Accreditation and Recognition in France, Architecture Jobs and Career Opportunities in France",
  introTitle: "STUDY ARCHITECTURE IN FRANCE FOR INDIAN STUDENTS",
  heroParas: [
    "Studying Architecture in France provides Indian students with prestigious professional training combining historic heritage conservation, cutting-edge sustainable urban design, and state-certified diplomas (DEEA and DEA) across France's elite Écoles Nationales Supérieures d'Architecture (ENSA)."
  ],
  overview: [
    "Architecture in France offers an exceptional educational avenue for Indian students passionate about architectural design, sustainable construction, metropolitan urban planning, and historic preservation. From classical Haussmannian boulevards and Gothic cathedrals to pioneering contemporary landmarks by Le Corbusier, Jean Nouvel, and Renzo Piano, France provides an incomparable living laboratory for built-environment scholars.",
    "Professional architectural education in France is organized within the national network of 20 public Écoles Nationales Supérieures d'Architecture (ENSA) overseen by the Ministry of Culture. Programs are structured on the European LMD system: the 3-year Diplôme d'Études en Architecture (DEEA, Bachelor equivalent), followed by the 2-year Diplôme d'État d'Architecte (DEA, Master equivalent), and the 1-year HMONP for independent professional licensure.",
    "Through EduHawk's dedicated study abroad mentorship, Indian architecture aspirants receive personalized guidance on portfolio curation, French language preparation (DELF B2/C1), ENSA selection, Campus France DAP procedure compliance, and student visa processing."
  ],
  level: "DEEA (Bachelor - 3 Yrs) | DEA (Master - 2 Yrs) | HMONP",
  crumb: "Design / Architecture",
  stats: [
    {
      label: "Degree Pathway",
      value: "DEEA (3 Yrs) | DEA (2 Yrs) | HMONP (1 Yr)"
    },
    {
      label: "ENSA Public Fees",
      value: "€373 (DEEA) – €512 (DEA) / Year (National)"
    },
    {
      label: "Premier Institutions",
      value: "ENSA Paris-Belleville, ENSA Versailles, ENSA Lyon"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Distinctive Advantages",
      title: "Why Study Architecture in France?",
      groups: [
        {
          t: "p",
          items: [
            "France offers a distinguished educational environment that balances profound theoretical discourse with rigorous studio-based design experimentation. Architecture schools in France are embedded within major cultural, artistic, and technological hubs, providing students with direct engagement in municipal urban transformations and green building initiatives.",
            "Key benefits of studying architecture in France include:"
          ]
        },
        {
          t: "bullets",
          items: [
            "Unrivaled Architectural Heritage: Study across centuries of architectural genius—from Roman monuments, Romanesque abbeys, and Renaissance châteaux to futuristic zero-carbon metropolitan districts.",
            "Studio-Focused Pedagogy: Immersive design studios form 50% of the curriculum, emphasizing hand-sketching, physical model-making, 3D visualization, and structural detailing.",
            "Global Leadership in Sustainable Architecture: Rigorous training in bioclimatic architecture, timber construction, low-carbon materials, circular construction, and RE2020 environmental building standards.",
            "Metropolitan & Territorial Planning: Strong multidisciplinary integration with urban geography, sociology, landscape architecture, public transit networks, and social housing policies.",
            "Advanced Digital & Computational Tools: Mastery of Building Information Modelling (BIM), parametric design (Rhino/Grasshopper), algorithmic generation, and environmental simulation software.",
            "Subsidized Public Higher Education: Highly affordable national registration fees at public ENSA schools compared to universities in the UK, USA, or Australia.",
            "Post-Study Career Rights: 2-year APS / RECE post-study work authorization for master-level DEA graduates, enabling young architects to work in European architectural practices."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Degrees",
      title: "Professional Architecture Degrees & Specializations in France",
      groups: [
        {
          t: "p",
          items: [
            "Professional architectural education in France is strictly regulated and structured across three progressive cycles leading to state-recognized professional qualifications."
          ]
        },
        {
          t: "h4",
          items: ["Cycle 1: Diplôme d'Études en Architecture (DEEA - 3 Years / 180 ECTS)"]
        },
        {
          t: "p",
          items: [
            "The DEEA confers the grade of Licence (Bachelor). It establishes fundamental spatial, artistic, and technical competencies required to conceptualize architectural projects."
          ]
        },
        {
          t: "bullets",
          items: [
            "Design Studios: Spatial composition, dwelling design, public pavilion design, and architectural proportion.",
            "Representation & Drawing: Freehand sketching, descriptive geometry, architectural drafting, photography, and digital CAD modeling.",
            "History & Theory: History of world and French architecture, urban history, and architectural philosophy.",
            "Building Technology: Building construction techniques, structural mechanics, statics, materials science (wood, stone, steel, concrete), and environmental physics.",
            "Urban Context: Introduction to urban morphology, public spaces, and territorial sociology."
          ]
        },
        {
          t: "h4",
          items: ["Cycle 2: Diplôme d'État d'Architecte (DEA - 2 Years / 120 ECTS)"]
        },
        {
          t: "p",
          items: [
            "The DEA confers the grade of Master. It prepares students for complex architectural synthesis, research methodologies, and multidisciplinary design leadership."
          ]
        },
        {
          t: "bullets",
          items: [
            "Complex Architectural Design: High-density mixed-use complexes, major cultural institutions, and adaptive reuse of heritage buildings.",
            "Urban & Regional Planning: Territorial strategies, sustainable mobility, urban renewal, and climate-resilient cities.",
            "Environmental Performance: Net-zero energy design, lifecycle carbon analysis, and circular economy in construction.",
            "Final Diploma Project (PFE) & Thesis: Independent master's research thesis accompanied by an in-depth architectural design project defended before an expert jury."
          ]
        },
        {
          t: "h4",
          items: ["Cycle 3: Professional Practice Authorization (HMONP - 1 Year)"]
        },
        {
          t: "p",
          items: [
            "The Habilitation à l'Exercice de la Maîtrise d'Œuvre en son Nom Propre (HMONP) involves 6 months of theoretical coursework combined with 6 months of paid professional practice in an architectural firm. It grants the legal right to register with the French Ordre des Architectes and independently sign building permits."
          ]
        },
        {
          t: "h4",
          items: ["Popular Architectural Specializations"]
        },
        {
          t: "bullets",
          items: [
            "Sustainable Architecture & Bioclimatic Design",
            "Urban Design, Regeneration & Territorial Planning",
            "Heritage Conservation, Restoration & Historic Monuments",
            "Landscape Architecture (Paysagisme)",
            "Building Information Modelling (BIM) & Digital Construction",
            "Interior Architecture & Spatial Design",
            "Parametric & Computational Architecture"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Premier French Institutions",
      title: "Top Architecture Schools (ENSA) in France",
      unis: [
        {
          name: "École Nationale Supérieure d'Architecture de Paris-Belleville (ENSAPB)",
          city: "Paris",
          state: "Île-de-France",
          desc: "ENSAPB is one of France's most prestigious public architecture schools, renowned for its strong intellectual tradition, architectural theory, urban integration, and social design. Located in vibrant eastern Paris, it maintains extensive international exchange partnerships.",
          img: uniImg1
        },
        {
          name: "École Nationale Supérieure d'Architecture de Versailles (ENSAV)",
          city: "Versailles",
          state: "Île-de-France",
          desc: "Housed in the historic Petites Écuries of the Palace of Versailles, ENSAV is globally celebrated for its unique intersection of historic heritage, landscape design, contemporary art, and innovative territory-wide urban planning initiatives.",
          img: uniImg2
        },
        {
          name: "École Nationale Supérieure d'Architecture de Lyon (ENSAL)",
          city: "Lyon",
          state: "Auvergne-Rhône-Alpes",
          desc: "ENSAL is a premier regional architecture academy celebrated for its advanced research in timber engineering, digital fabrication, bioclimatic design, and the complex transformation of metropolitan urban environments.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Other leading French architecture institutions include ENSA Paris-Malaquais, ENSA Paris-Val de Seine, ENSA Strasbourg (INSA Strasbourg - dual engineering/architecture), ENSA Bordeaux, ENSA Marseille, and the private École Spéciale d'Architecture (ESA Paris)."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions & Language",
      title: "Eligibility Requirements for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "Admission to French architecture schools is highly competitive and determined primarily by academic performance, creative portfolio strength, and language proficiency."
          ]
        },
        {
          t: "h4",
          items: ["Undergraduate Admissions (DEEA - Cycle 1)"]
        },
        {
          t: "bullets",
          items: [
            "Academic Qualification: Higher Secondary School Certificate (Class 12) from CBSE, ICSE, or State Boards with a minimum aggregate of 60% – 70% (Mathematics, Physics, or Arts preferred).",
            "Language Proficiency: Since virtually all public ENSA undergraduate programs are taught in French, applicants must hold a certified DELF B2 (or TCF B2 with writing score) certificate.",
            "Application Procedure: Non-EU international students applying to Year 1 must submit the Demande d'Admission Préalable (DAP Jaune) file via Campus France by mid-December of the preceding year.",
            "Creative Portfolio: A compilation of original hand drawings, spatial sketches, paintings, graphic design, photography, or physical models demonstrating creative perception and visual sensitivity."
          ]
        },
        {
          t: "h4",
          items: ["Postgraduate Admissions (DEA - Cycle 2)"]
        },
        {
          t: "bullets",
          items: [
            "Undergraduate Degree: Recognized 3-year or 5-year Bachelor of Architecture (B.Arch / B.Des) with strong academic standing (minimum 55% – 65% aggregate).",
            "Architectural Portfolio: Professional-standard design portfolio (A4/A3 format, maximum 20-30 pages) presenting concept development, site analysis, technical sections, structural details, and 3D renderings.",
            "Language Proficiency: DELF B2 or DALF C1 in French. For select specialized English-taught master's or post-master's degrees, IELTS Academic 6.5 or TOEFL 90+ is accepted.",
            "Supporting Documents: Comprehensive CV, Statement of Purpose explaining architectural philosophy, certified transcripts with syllabus copies, and 2 academic letters of recommendation."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Budgeting",
      title: "Cost of Studying Architecture & Living Expenses (2026–2027)",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees at France's public Écoles Nationales Supérieures d'Architecture (ENSA) are heavily subsidized by the French Ministry of Culture, making them remarkably affordable compared to global benchmarks."
          ]
        },
        {
          t: "table",
          headers: ["Institution & Program Level", "National Annual Tuition Fees", "Notes & Status"],
          rows: [
            ["Public ENSA - Cycle 1 (DEEA)", "€373 / year", "Subsidized by French Ministry of Culture"],
            ["Public ENSA - Cycle 2 (DEA)", "€512 / year", "Master-level national registration fee"],
            ["Public ENSA - Cycle 3 (HMONP)", "€627 / year", "Professional licensure cycle"],
            ["Private Architecture Schools (ESA Paris, Confluence)", "€9,000 – €14,000 / year", "Autonomous private academy rates"],
            ["Campus Student Contribution (CVEC)", "€103 / year", "Mandatory annual student services fee"]
          ]
        },
        {
          t: "h4",
          items: ["Studio Supplies & Living Expenses"]
        },
        {
          t: "p",
          items: [
            "Architecture students should budget an additional €500 to €1,000 per year for drafting materials, physical model-making supplies, high-resolution printing, and software licenses. General living costs range from €700 to €1,000 per month in regional cities (Versailles, Lyon, Strasbourg, Bordeaux) and €1,100 to €1,400 per month in Paris. The French government's CAF housing allowance reimburses up to 40% of monthly accommodation rent for eligible international students."
          ]
        },
        {
          t: "h4",
          items: ["Scholarships & Financial Aid"]
        },
        {
          t: "bullets",
          items: [
            "Charpak Master Scholarship: Prestigious French Embassy in India grant providing monthly living stipends, visa fee waivers, and social insurance.",
            "Eiffel Excellence Scholarships: Awarded by the Ministry of Europe and Foreign Affairs for top-tier international master's candidates.",
            "Franco-Indian Student Exchange Bursaries: Dedicated travel and living support for students participating in dual-degree or research exchange programs.",
            "Bank Education Loans: Low-interest study loans from Indian nationalized and private banking partners coordinated through EduHawk."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Step-by-Step Guide to Applying for Architecture in France",
      steps: [
        {
          title: "Step 1: Choose Qualification & Cycle",
          desc: "Decide whether to apply for Cycle 1 (DEEA - Year 1), Cycle 2 (DEA - Master level), or a specialized post-master's program (DPEA)."
        },
        {
          title: "Step 2: Research ENSA Architecture Schools",
          desc: "Compare curriculum orientations, studio themes, research laboratories, campus locations, and faculty specializations across France's 20 ENSA schools."
        },
        {
          title: "Step 3: Prepare Your Creative Portfolio",
          desc: "Curate a compelling portfolio highlighting design thought process, spatial drawings, technical drafting, material models, and conceptual clarity."
        },
        {
          title: "Step 4: Language Proficiency Certification",
          desc: "Obtain your official French language proficiency certificate (DELF B2 / TCF B2 minimum) well before application deadlines."
        },
        {
          title: "Step 5: Submit Campus France & DAP Application",
          desc: "For Year 1, submit the Demande d'Admission Préalable (DAP Jaune) file via Études en France by mid-December. For master's (DEA), apply via the Taïga/ENSA application portal."
        },
        {
          title: "Step 6: Admissions Interview & Studio Assessment",
          desc: "Shortlisted candidates may be invited for an online or in-person interview with ENSA faculty to discuss their portfolio and design philosophy."
        },
        {
          title: "Step 7: Admission Offer & Visa Processing",
          desc: "Accept the admission offer, receive the Attestation d'Admission, complete your Campus France visa interview, and obtain the VLS-TS student visa."
        },
        {
          title: "Step 8: Arrival, Studio Setup & Residency Validation",
          desc: "Arrive in France, secure your housing, validate your residency online via OFII, register for free French health insurance (Ameli), and begin your studio classes."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Prospects",
      title: "Career Opportunities & Salary Scope After Architecture in France",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of French architecture schools are prized internationally for their conceptual depth, rigorous studio discipline, and environmental mastery. Holding a DEA opens doors to top European design practices, engineering consultants, urban planning agencies, and real estate developers."
          ]
        },
        {
          t: "h4",
          items: ["Key Design Roles & Salary Benchmark in France"]
        },
        {
          t: "table",
          headers: ["Professional Role", "Entry-Level Starting Salary", "Mid-Level Professional (3-6 Years)"],
          rows: [
            ["Architectural Assistant / Designer", "€32,000 – €38,000 / year", "€42,000 – €52,000 / year"],
            ["Junior Project Architect (DEA)", "€35,000 – €42,000 / year", "€48,000 – €62,000 / year"],
            ["BIM Coordinator / Computational Designer", "€38,000 – €46,000 / year", "€52,000 – €68,000 / year"],
            ["Urban Design & Planning Consultant", "€36,000 – €44,000 / year", "€50,000 – €65,000 / year"],
            ["Sustainable Design & Low-Carbon Specialist", "€38,000 – €45,000 / year", "€55,000 – €72,000 / year"],
            ["Architectural 3D Visualizer / CGI Artist", "€34,000 – €40,000 / year", "€46,000 – €58,000 / year"],
            ["Senior Project Architect / Practice Director (HMONP)", "€55,000 – €70,000 / year", "€80,000 – €120,000+ / year"]
          ]
        },
        {
          t: "h4",
          items: ["Prominent Hiring Sectors & Employers"]
        },
        {
          t: "bullets",
          items: [
            "World-Renowned French & European Architecture Firms: Ateliers Jean Nouvel, Wilmotte & Associés, Renzo Piano Building Workshop (RPBW Paris), Dominique Perrault Architecture, Valode & Pistre, Lacaton & Vassal.",
            "Multinational Engineering & Construction Groups: Vinci Construction, Bouygues Immobilier, Eiffage, Egis, Setec, Artelia.",
            "Urban Planning & Municipal Agencies: APUR (Atelier Parisien d'Urbanisme), local urban planning agencies (AURA, etc.), public housing corporations.",
            "Heritage & Restoration Consultancies: Historic monument conservation practices, national park design teams, cultural heritage trusts."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "Frequently Asked Questions",
      title: "Architecture in France FAQs",
      faqs: [
        {
          q: "Is France a good destination to study architecture?",
          a: "Yes, France is considered one of the world's premier destinations for architecture education. It offers a unique fusion of historical heritage, contemporary urban innovation, cutting-edge sustainable design, and state-certified diplomas awarded by public Écoles Nationales Supérieures d'Architecture (ENSA) with remarkably affordable tuition fees."
        },
        {
          q: "How long does it take to study architecture in France?",
          a: "The standard professional architecture pathway consists of 3 years for the undergraduate DEEA (Diplôme d'Études en Architecture) followed by 2 years for the postgraduate DEA (Diplôme d'État d'Architecte). Graduates intending to register with the Ordre des Architectes and sign building permits complete an additional 1-year HMONP professional training program."
        },
        {
          q: "What are the eligibility requirements for architecture in France?",
          a: "Undergraduate applicants need a recognized Class 12 qualification (CBSE/ICSE/State Board) with good marks, a creative design portfolio, and DELF B2 French proficiency. Master-level applicants require a recognized Bachelor of Architecture (B.Arch) degree, an extensive academic and professional design portfolio, and DELF B2/C1 French certification."
        },
        {
          q: "Can I study architecture in France in English?",
          a: "While some specialized post-master's certificates, master's tracks in urban planning, and private architecture schools offer courses in English, the official professional DEEA and DEA degree programs at public ENSA schools are predominantly taught in French. Indian students must typically achieve a DELF B2 level before enrollment."
        },
        {
          q: "What career opportunities are available after studying architecture in France?",
          a: "Graduates can practice as architectural designers, project architects, BIM coordinators, urban planning consultants, sustainable construction advisors, and heritage restoration specialists in top European and multinational firms. International master's graduates are eligible for a 2-year post-study work authorization (APS / RECE) to work across France and the EU."
        }
      ]
    }
  ]
};

export default function ArchitecturePage() {
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
