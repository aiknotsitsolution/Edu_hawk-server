import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/Paris.webp";
import uniImg2 from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/Gustave_Eiffel_University.webp";
import uniImg3 from "../../../../../../Images/Abroad/France/Engineering_PG/Civil/INSA_Lyon.webp";
import cmsData from "../../../../../../data/study_abroad/france/civil_engg_pg.json";

const page = {
  name: "PG Civil Engineering in France",
  country: "France",
  slug: "study-abroad/france/pg/civil-engineering",
  title: "Study PG Civil Engineering in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to PG Civil Engineering in France for Indian students: Top universities (Paris-Saclay, Gustave Eiffel, INSA Lyon), admission criteria, public tuition fees (€255–€3,950/yr), CTI engineering diplomas, and 2-year post-study work visa.",
  keywords: "PG Civil Engineering in France, Master in Civil Engineering in France, Study in France, French Engineering Grandes Ecoles, Paris Saclay, Gustave Eiffel University, INSA Lyon, Edu Hawk Worldwide",
  introTitle: "CIVIL ENGINEERING POST GRADUATION IN FRANCE FOR INDIAN STUDENTS",
  heroParas: [
    "Studying Postgraduate (PG) Civil Engineering in France offers Indian and international engineering graduates world-class training in structural mechanics, earthquake engineering, BIM computational modeling, geotechnical infrastructure, and sustainable smart-city construction across France's elite public research universities and CTI-accredited Grandes Écoles."
  ],
  overview: [
    "Students looking to gain advanced technical mastery and executive leadership skills in structural engineering, modern construction technology, geotechnical engineering, transportation infrastructure, and sustainable building design will find studying Postgraduate (PG) Civil Engineering in France an exceptional academic path. France boasts a globally respected higher education system, cutting-edge civil infrastructure research facilities, and direct industrial partnerships with world-leading European construction conglomerates.",
    "A Master in Civil Engineering in France combines foundational scientific rigor, practical laboratory projects, advanced numerical modeling (FEM and BIM), and mandatory industrial internships. International students can specialize in structural mechanics, geotechnics, low-carbon building materials, environmental water systems, and infrastructure project management, preparing them for high-impact international civil engineering careers.",
    "With comprehensive guidance from EduHawk Worldwide Study Abroad Consultancy, prospective students can evaluate the best civil engineering master's programs in France, navigate admission prerequisites, secure scholarships, and manage student visa procedures with confidence."
  ],
  level: "Postgraduate / Master's Degree (MSc / MEng / Diplôme d'Ingénieur)",
  crumb: "Engineering / Civil (PG)",
  stats: [
    {
      label: "Degree Choices",
      value: "MSc, MEng & CTI Diplôme d'Ingénieur"
    },
    {
      label: "Course Duration",
      value: "1 to 2 Years (M1 + M2 / 60–120 ECTS)"
    },
    {
      label: "Tuition Benchmark",
      value: "€255 – €3,950/yr (Public) | €6,000–€16,000 (Grandes Écoles)"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Study in France",
      title: "Why Study Civil Engineering in France?",
      groups: [
        {
          t: "p",
          items: [
            "France is home to some of the world's most formidable civil engineering and construction pioneers—including Vinci, Bouygues, and Eiffage—making it an unparalleled hub for graduate engineering education:"
          ]
        },
        {
          t: "bullets",
          items: [
            "**Globally Recognised Qualifications:** French public universities award nationally accredited Master's degrees (Diplôme National de Master), while elite engineering schools award the prestigious Diplôme d'Ingénieur accredited by CTI (Commission des Titres d'Ingénieur) and EUR-ACE.",
            "**Advanced Technical Specialisations:** Graduate tracks span structural dynamics, seismic design, geomechanics, durable materials, finite element modeling, and low-carbon infrastructure.",
            "**Research & Practical Synthesis:** Intensive laboratory projects, structural testing wind tunnels, collaborative design studios, and mandatory 6-month industrial master's theses.",
            "**Sustainable & Circular Infrastructure:** French engineering curricula lead Europe in energy-positive buildings (Bâtiments à Énergie Positive - BEPOS), timber-concrete composites, and eco-friendly urban mobility.",
            "**English-Taught International Tracks:** An increasing selection of master's programs in civil and structural engineering are taught entirely in English, accompanied by integrated French language classes.",
            "**Global Career Opportunities:** Direct pathways into multinational construction contracting firms, infrastructure planning consultancies, transportation networks, and doctoral research laboratories."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Specializations",
      title: "PG Courses & Specializations in Civil Engineering",
      groups: [
        {
          t: "p",
          items: [
            "A standard French national Master's degree in Civil Engineering spans two academic years: Master 1 (M1 - advanced mechanics, thermodynamics, and mathematics) and Master 2 (M2 - advanced specialization and 6-month capstone thesis/internship), totaling 120 ECTS credits. Direct entry into M2 is accessible for applicants holding a 4-year B.Tech or equivalent postgraduate credits."
          ]
        },
        {
          t: "bullets",
          items: [
            "**Structural Mechanics & Structural Engineering:** Non-linear structural analysis, Eurocode standards, steel-concrete composite structures, and bridge engineering.",
            "**Concrete & Advanced Construction Materials:** High-performance concrete (UHPC), self-healing materials, geopolymer cements, and durability testing.",
            "**Soil Mechanics & Geotechnical Engineering:** Foundation design, slope stability, underground tunnels, retaining structures, and soil-structure interaction.",
            "**Structural Safety & Earthquake Engineering:** Seismic hazard assessment, base isolation systems, dynamic vibration analysis, and structural health monitoring.",
            "**Sustainable Construction & Energy Performance:** Life-cycle assessment (LCA), thermal building physics, HVAC integration, and passive house engineering.",
            "**Transportation & Infrastructure Engineering:** High-speed railway engineering (TGV networks), highway pavement design, airport design, and port structures.",
            "**Hydraulic & Water Resources Engineering:** Urban stormwater management, flood risk modeling, river hydraulics, and coastal defense systems.",
            "**Computational Mechanics & Structural Simulation:** Finite Element Analysis (FEA), numerical homogenization, and computational plasticity.",
            "**BIM & Construction Project Management:** Building Information Modeling (Revit, Navisworks), 4D/5D scheduling, site logistics, lean construction, and contract law."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions in France",
      title: "Top Civil Engineering Institutions in France",
      unis: [
        {
          name: "Université Paris-Saclay",
          city: "Orsay / Paris",
          state: "Île-de-France, France",
          desc: "Université Paris-Saclay offers a globally renowned Master in Civil Engineering with specialized tracks in materials, structures, and geomechanics for sustainable construction. Students benefit from access to world-class mechanics laboratories, numerical simulation clusters, and extensive industry partnerships throughout the Greater Paris region.",
          img: uniImg1
        },
        {
          name: "Université Gustave Eiffel",
          city: "Champs-sur-Marne",
          state: "Marne-la-Vallée, France",
          desc: "Born from the merger of UPEM and IFSTTAR (the French institute of science and technology for transport, development and networks), Université Gustave Eiffel is France's premier research university for civil engineering, transportation infrastructure, geotechnical engineering, and sustainable urban construction.",
          img: uniImg2
        },
        {
          name: "INSA Lyon",
          city: "Villeurbanne",
          state: "Auvergne-Rhône-Alpes, France",
          desc: "Institut National des Sciences Appliquées (INSA) de Lyon is one of France's top public engineering Grande Écoles. Its Department of Civil Engineering and Urbanism provides CTI-accredited master's and engineering programs in structural mechanics, urban acoustics, environmental geotechnics, and smart building management.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic & Language Criteria",
      title: "Eligibility Criteria for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "French universities and engineering Grandes Écoles assess candidates based on undergraduate technical preparation, mathematical rigor, and engineering coursework:"
          ]
        },
        {
          t: "bullets",
          items: [
            "**Undergraduate Degree:** A recognized 3-year or 4-year Bachelor's degree (B.Tech, B.E., or B.Sc. Engineering) in Civil Engineering, Structural Engineering, Construction Technology, Geotechnical Engineering, or Environmental Engineering.",
            "**Core Academic Foundation:** Strong undergraduate background in structural analysis, solid mechanics, fluid mechanics, soil mechanics, construction materials, and calculus.",
            "**Academic Performance:** Minimum overall academic aggregate of 60% – 70% or equivalent CGPA (typically 6.5/10 or higher).",
            "**English Language Proficiency:** For English-taught tracks, accepted test scores include IELTS Academic (overall 6.0 to 6.5 with no band below 5.5) or TOEFL iBT (80 to 90). Some institutions offer waivers for applicants holding degrees completed entirely in English.",
            "**French Language Proficiency:** For French-taught programs, DELF B2 or DALF C1 is required. English-taught master's programs do not require prior French for admission, though basic French (A1/A2) is strongly recommended for daily life and internship placement."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Application Checklist",
      title: "Required Documents for Application",
      groups: [
        {
          t: "p",
          items: [
            "Indian candidates applying for postgraduate Civil Engineering in France must assemble a complete academic and administrative dossier:"
          ]
        },
        {
          t: "bullets",
          items: [
            "Valid international passport (valid for at least 6 months beyond intended program completion).",
            "Official Bachelor's degree certificate or provisional degree certificate.",
            "Consolidated mark sheets and semester-wise transcripts of undergraduate coursework.",
            "Detailed CV / Resume showcasing engineering projects, software skills (AutoCAD, Revit, SAP2000, ETABS, ABAQUS), and internship experience.",
            "Statement of Purpose (SOP) / Letter of Motivation highlighting academic background, research interests, and career objectives.",
            "Two Letters of Recommendation (LORs) from university professors or engineering employers.",
            "English or French language proficiency score certificates (IELTS, TOEFL, or DELF).",
            "Syllabus or module descriptions of undergraduate civil engineering coursework (if required for credit evaluation).",
            "Portfolio or summary of technical design projects, capstone thesis, or publications.",
            "Certified English or French translations of any non-English academic documents."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Cost of Living",
      title: "Tuition Fees & Living Expenses in France",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees in France are heavily subsidized by the French state, making it one of the most accessible destinations in Europe for advanced engineering education:"
          ]
        },
        {
          t: "bullets",
          items: [
            "**Public Universities (National Fees):** For the 2026–2027 academic year, the benchmark statutory tuition for a national Master's degree (DNM) is €255/year for EU students and €3,950/year for non-EU students. Many public universities offer partial fee waivers reducing non-EU fees down to €255/year.",
            "**Grandes Écoles & Specialized Engineering Schools:** Tuition for CTI-accredited Diplôme d'Ingénieur or specialized Master of Science (MSc) programs generally ranges between €6,000 and €16,000 per academic year.",
            "**Campus Contribution (CVEC):** Mandatory annual student life and campus contribution fee of approximately €103.",
            "**Monthly Living Expenses:** Average living costs range from €800 to €1,100 per month in regional engineering centers (Lyon, Toulouse, Nantes) and €1,200 to €1,500 per month in the Paris metropolitan region, covering rent, food, public transit, and health insurance.",
            "**CAF Housing Allowance:** All international students with a valid visa are entitled to apply for the French government's CAF (APL) rental subsidy, refunding 20% to 40% of monthly accommodation rent.",
            "**Scholarships:** Qualified international applicants can apply for the prestigious Eiffel Excellence Scholarship, Charpak Master Scholarship, and university-specific merit awards."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admission Timeline",
      title: "Step-by-Step PG Admission Process",
      steps: [
        {
          step: "01",
          title: "Research & Program Shortlisting",
          desc: "Compare Civil Engineering master's degrees (DNM vs Diplôme d'Ingénieur) across French universities, evaluating structural, geotechnical, and BIM curricula."
        },
        {
          step: "02",
          title: "Prerequisite & Credit Check",
          desc: "Verify that your undergraduate engineering coursework and credit equivalents meet the admission prerequisites for M1 or direct M2 entry."
        },
        {
          step: "03",
          title: "Prepare Dossier & Exams",
          desc: "Take IELTS/TOEFL if required, craft a tailored Statement of Purpose, obtain academic recommendation letters, and translate credentials."
        },
        {
          step: "04",
          title: "Submit Applications",
          desc: "Apply via the official Études en France portal (Campus France) and direct university online portals before program deadlines."
        },
        {
          step: "05",
          title: "Interviews & Technical Assessments",
          desc: "Participate in academic video interviews or technical assessments conducted by university faculty admissions committees."
        },
        {
          step: "06",
          title: "Receive Offer & Confirm Seat",
          desc: "Review admission offers, accept the preferred university placement, and complete tuition deposit or registration procedures to lock in your seat."
        },
        {
          step: "07",
          title: "Financial Planning & Scholarships",
          desc: "Finalize financial backing, prepare living expense guarantees, and apply for French government or institutional scholarships."
        },
        {
          step: "08",
          title: "Campus France & Visa Interview",
          desc: "Complete the Études en France pre-consular academic interview and apply for the long-stay student visa (VLS-TS) at the French consulate/VFS."
        },
        {
          step: "09",
          title: "Arrival, Housing & University Registration",
          desc: "Secure CROUS or private student housing, travel to France, finalize university enrollment, pay the CVEC fee, and validate your VLS-TS visa with OFII."
        }
      ]
    },
    {
      slot: "jobs",
      eyebrow: "Career Pathways",
      title: "Career Opportunities & Salary in France",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of a Master's in Civil Engineering in France are recruited heavily across Europe's leading construction contractors, infrastructure operators, and engineering consultancies:"
          ]
        },
        {
          t: "bullets",
          items: [
            "**Structural Design Engineer:** Design reinforced concrete, steel, and timber structures according to Eurocodes (€40,000 – €50,000 / year).",
            "**Geotechnical Engineer:** Supervise foundation design, soil characterization, tunneling, and retaining structures (€42,000 – €52,000 / year).",
            "**BIM Engineer / BIM Coordinator:** Manage digital modeling, clash detection, and collaborative building lifecycle workflows (€40,000 – €52,000 / year).",
            "**Construction Project Manager / Site Engineer:** Oversee on-site construction operations, procurement, subcontractor coordination, and quality assurance (€42,000 – €55,000 / year).",
            "**Transportation Infrastructure Engineer:** Design railway, highway, and bridge networks for high-speed transit and urban development (€42,000 – €54,000 / year).",
            "**Building Sustainability & Energy Specialist:** Perform energy modeling, thermal simulations, and carbon footprint reduction audits (€38,000 – €48,000 / year)."
          ]
        },
        {
          t: "p",
          items: [
            "**Leading Employers:** Vinci, Bouygues Construction, Eiffage, Systra, Egis, Setec, Spie Batignolles, and Eurovia. Graduates of master's programs are eligible for the 2-year APS / RECE post-study work visa in France."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "EduHawk Guidance",
      title: "How EduHawk Worldwide Supports Your Journey",
      groups: [
        {
          t: "p",
          items: [
            "Navigating French university applications and visa procedures requires seasoned guidance. EduHawk Worldwide Study Abroad Consultancy provides end-to-end support for civil engineering aspirants:"
          ]
        },
        {
          t: "bullets",
          items: [
            "**University & Specialization Selection:** Shortlisting the best French public universities and Grandes Écoles aligned with your academic background and career goals.",
            "**Dossier & SOP Optimization:** Tailoring your Statement of Purpose, CV, and project descriptions to meet French academic evaluation criteria.",
            "**Études en France Support:** Managing your Campus France account, document uploads, and application submissions smoothly.",
            "**Scholarship Assistance:** Identifying and applying for French government scholarships (Eiffel, Charpak) and regional fee waivers.",
            "**Campus France Interview & Visa Preparation:** Comprehensive mock interview sessions and detailed financial document vetting for the VLS-TS visa.",
            "**Pre-Departure & Accommodation Support:** Assistance with securing student housing (CROUS/private), CAF rental allowance applications, and settling in France."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "How long does a civil engineering postgraduate course in France last?",
      a: "A national Master's degree in Civil Engineering (DNM) or a CTI-accredited engineering diploma in France typically lasts 2 years (Master 1 and Master 2), totaling 120 ECTS credits. Students holding a 4-year bachelor's degree or prior postgraduate coursework may be considered for direct entry into the 1-year M2 program."
    },
    {
      q: "Can Indian students pursue a Master's in Civil Engineering in France?",
      a: "Yes. Indian students holding a recognized Bachelor's degree (B.Tech, B.E., or B.Sc. Engineering) in Civil Engineering or related disciplines are eligible to apply, provided they meet academic prerequisites, language requirements, and visa criteria."
    },
    {
      q: "Is IELTS required for a Civil Engineering Master's in France?",
      a: "For English-taught master's programs, French universities generally require IELTS Academic (overall 6.0–6.5) or TOEFL iBT (80–90). Some institutions offer waivers if your undergraduate degree was taught entirely in English. French-taught programs require B2 or C1 proficiency in French (DELF/DALF)."
    },
    {
      q: "What are the tuition fees for Civil Engineering PG in France?",
      a: "At public universities subject to the national tuition system, master's fees for the 2026–2027 academic year are €255/year for EU students and €3,950/year for non-EU students (with many public universities granting fee exemptions down to €255/year). Specialized engineering schools and Grandes Écoles charge between €6,000 and €16,000 per academic year."
    },
    {
      q: "Which French universities have top postgraduate programs in Civil Engineering?",
      a: "Leading institutions include Université Paris-Saclay, Université Gustave Eiffel, and INSA Lyon, alongside prestigious civil engineering schools such as École des Ponts ParisTech and ESTP Paris."
    }
  ]
};

export default function CivilEngineering() {
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
    unis: [uniImg1, uniImg2, uniImg3]
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
