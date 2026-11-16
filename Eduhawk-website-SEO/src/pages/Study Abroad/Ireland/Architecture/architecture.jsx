import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/Architecture/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/Architecture/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/Architecture/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/Architecture/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/Architecture/University_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/Architecture/University_College_Cork.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/Architecture/University_College_Cork_2.webp";

const page = {
  name: "Architecture in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/architecture",
  title: "Study Architecture in Ireland | RIAI Accredited BArch & MArch Degrees 2026/27",
  description: "Complete guide to Architecture in Ireland: RIAI, RIBA & NAAB accredited BArch & MArch degrees, UCD, TU Dublin & CCAE, portfolio criteria, 2026/27 tuition fees, and Stamp 1G post-study work visa.",
  keywords: "Study Architecture in Ireland, BArch in Ireland, Master of Architecture Ireland, MArch UCD, TU Dublin Architecture, RIAI accreditation Ireland, Architecture portfolio Ireland, Architecture tuition fees Ireland 2026 2027, Stamp 1G post study work visa",
  introTitle: "IRELAND ARCHITECTURE COURSES",
  heroParas: [
    "Architecture in Ireland merges world-class spatial design studios, environmental sustainability, structural innovation, and heritage conservation, underpinned by prestigious Royal Institute of the Architects of Ireland (RIAI) professional accreditation."
  ],
  overview: [
    "Architecture education in Ireland is structured across rigorous design studio pathways that integrate artistic vision, digital parametric modeling, structural engineering, environmental building performance, and statutory building regulations. International students can pursue 5-year professional undergraduate degrees (such as the Bachelor of Architecture - BArch Honours, 300 ECTS credits) or intensive 1.5-to-2-year Master of Architecture (MArch, 90–120 ECTS credits) postgraduate programs.",
    "A vital requirement for professional architectural practice in Ireland is accreditation by the Royal Institute of the Architects of Ireland (RIAI), with major programs at UCD also holding RIBA (Royal Institute of British Architects) and NAAB Substantial Equivalency (USA) credentials. Leading schools like UCD, the Dublin School of Architecture at TU Dublin, and the Cork Centre for Architectural Education (CCAE - UCC/MTU) maintain active links with European architecture practices and urban planning authorities.",
    "Graduates holding an accredited NFQ Level 8 Honours degree gain 12 months (1 year), while graduates of an NFQ Level 9 Master of Architecture receive 24 months (2 full years) of unrestricted post-study employment authorization under Ireland's Third Level Graduate Scheme (Stamp 1G)."
  ],
  level: "NFQ Level 8 (Honours BArch) & Level 9 (Postgraduate MArch RIAI)",
  crumb: "Architecture / Architecture",
  stats: [
    {
      label: "Accrediting Body",
      value: "RIAI (Royal Institute of the Architects of Ireland)"
    },
    {
      label: "Program Duration",
      value: "5 Years (BArch) / 1.5–2 Years (MArch)"
    },
    {
      label: "Annual Tuition (2026/27)",
      value: "€14,500 – €29,500 / year"
    },
    {
      label: "Post-Study Work Visa",
      value: "1 Year (UG) / 2 Years (PG) Stamp 1G"
    }
  ],
  unis: [
    {
      name: "University College Dublin (UCD School of Architecture)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Ireland's premier architecture school holding triple professional recognition from the RIAI, RIBA, and NAAB (Substantial Equivalency). Delivers the 5-year BArch and 2-year Master of Architecture (MArch), distinguished by international faculty, advanced fabrication labs, and global exchange semesters.",
      img: uniImg1
    },
    {
      name: "Technological University Dublin (Dublin School of Architecture - TU Dublin)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Delivers the RIAI-accredited 5-year Bachelor of Architecture (Honours) at €14,500/year and the 1.5-year 90 ECTS Master of Architecture at €21,750 total, emphasizing urban density, low-energy building performance, and hands-on studio design.",
      img: uniImg2
    },
    {
      name: "Cork Centre for Architectural Education (CCAE - UCC & MTU)",
      city: "Cork",
      state: "Munster, Ireland",
      desc: "A joint initiative combining the historic academic prestige of University College Cork with the technological strengths of Munster Technological University. Offers the RIAI-accredited BSc (Hons) Architecture and Master of Architecture (MArch).",
      img: uniImg3
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Ireland",
      title: "Why Study Architecture in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Architecture in Ireland offers international students a creative European platform emphasizing contemporary sustainable design and historic preservation."
          ]
        },
        {
          t: "ul",
          items: [
            "RIAI Professional Accreditation: Irish professional architecture degrees meet strict standards set by the Royal Institute of the Architects of Ireland (RIAI), providing mutual recognition across the European Union under EU Directive 2005/36/EC.",
            "Studio-Led Creative Pedagogy: Studio projects constitute over 50% of the curriculum, emphasizing hand sketching, physical scale modeling, 3D laser scanning, and computational design.",
            "Sustainable Building Leadership: Ireland's rigorous Near Zero Energy Building (NZEB) regulations ensure students master climate-responsive envelope design, embodied carbon calculation, and passive solar engineering.",
            "International Portability (RIBA / NAAB): Major programs hold British (RIBA Part 1 & Part 2) and American (NAAB Substantial Equivalency) recognition, accelerating international licensure.",
            "Flourishing Construction Sector: Continued capital infrastructure investments across Dublin, Cork, and Galway create immense demand for architectural designers, urban planners, and BIM coordinators.",
            "Third Level Graduate Scheme (Stamp 1G): Level 8 graduates receive 1 year and Level 9 MArch graduates receive 2 full years of post-study employment permission in Ireland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Structures",
      title: "Architecture Degree Pathways & Specializations",
      groups: [
        {
          t: "p",
          items: [
            "The professional pathway to becoming a registered architect in Ireland requires completing recognized academic degrees followed by practical experience:",
            "5-Year Bachelor of Architecture (BArch / BArch Honours, NFQ Level 8): An integrated professional degree (300 ECTS credits) encompassing architectural design studios, history and theory, building technology, structural mechanics, environmental physics, and professional practice.",
            "Master of Architecture (MArch, NFQ Level 9): A 1.5-to-2-year full-time postgraduate degree (90 to 120 ECTS credits) required for students holding a 3-year foundational architecture degree, completing RIAI Part 2 educational recognition.",
            "BSc in Architectural Technology (NFQ Level 7 & 8): Focuses on technical detail, construction documentation, building regulations compliance, and Building Information Modeling (BIM).",
            "Specialized Architectural Streams: Sustainable & Low-Carbon Building Design, Urban Design & Spatial Planning, Architectural Conservation & Heritage, Landscape Architecture, and Computational Parametric Modeling."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility & Portfolio Requirements for Architecture",
      groups: [
        {
          t: "p",
          items: [
            "Admissions to architecture schools in Ireland evaluate academic achievement, creative portfolio quality, and English proficiency:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate (BArch Entry): Successful completion of Higher Secondary School Certificate (Class 12) from recognized boards (CBSE, CISCE, state boards) with an aggregate of 75% to 85%. Mathematics and physics or art subjects are highly recommended.",
            "Postgraduate (MArch Entry): A recognized Bachelor's degree in Architecture (BSc Arch or BA Arch) from an accredited institution with a minimum aggregate of 60% to 65% (Second Class Honours 2.1).",
            "Creative Design Portfolio: A mandatory requirement for both undergraduate and postgraduate applicants. Portfolios should showcase 10 to 15 creative pieces (freehand drawings, spatial sketches, scale models, photography, digital rendering, and conceptual design development).",
            "English Language Test Scores: Non-native English applicants require IELTS Academic 6.5 overall (no band below 6.0), TOEFL iBT 88–90, or PTE Academic 61–63.",
            "Admissions Interview: Shortlisted candidates may be invited for an online portfolio interview to discuss design methodologies and architectural interests."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Application Guide",
      title: "Application Dossier & Documentation Checklist",
      groups: [
        {
          t: "p",
          items: [
            "International applicants must assemble verified digital dossiers for submission through university portals:"
          ]
        },
        {
          t: "ul",
          items: [
            "Official Class 10 and Class 12 mark sheets and certificates (for undergraduate applicants).",
            "Bachelor's degree certificate and consolidated architecture transcripts (for postgraduate applicants).",
            "Comprehensive Digital Design Portfolio (PDF format, adhering to university file size and page constraints).",
            "Valid International Passport with minimum 12 months validity.",
            "English Language proficiency scorecard (IELTS, TOEFL iBT, or PTE Academic).",
            "Statement of Purpose (SOP) explaining architectural design philosophy, artistic influences, and career aspirations.",
            "Two Letters of Recommendation (LORs) from academic architecture professors or practicing architects.",
            "Curriculum Vitae (CV) detailing architectural internships, digital software proficiencies (Revit, Rhino, AutoCAD, Adobe Creative Cloud), and design awards."
          ]
        }
      ]
    },
    {
      slot: "cost",
      eyebrow: "Tuition & Costs",
      title: "Cost of Studying Architecture in Ireland (2026/27 Intake)",
      groups: [
        {
          t: "p",
          items: [
            "Budget planning includes international tuition fees, specialized studio materials, software licenses, and living expenses:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate Tuition Fees: Non-EU tuition fees for 5-year BArch programs range from €14,500/year at TU Dublin to €21,700/year at CCAE and €26,000–€28,500/year at UCD.",
            "Postgraduate Tuition Fees: TU Dublin's 1.5-year MArch costs €21,750 overall, while UCD's 2-year MArch is published at €29,500 for the first year.",
            "Studio Materials & Software: Architecture students should budget approximately €800 to €1,500 per year for drafting equipment, 3D printing, laser-cutting fees, physical model supplies, and rendering software licenses.",
            "Living Expenses (Dublin): Estimated at €1,000 to €1,400 monthly (€10,000 to €14,000 per academic year) for student accommodation, food, and transit.",
            "Living Expenses (Cork / Regional): Approximately €800 to €1,100 per month (€8,000 to €11,000 per academic year).",
            "Student Employment Rights: International non-EU students on Stamp 2 visas can work up to 20 hours per week during semester terms and 40 hours per week during vacations, earning at least the Irish minimum wage of €13.50 per hour."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Professional Licensure",
      title: "RIAI Professional Accreditation & Pathways to Registration",
      groups: [
        {
          t: "p",
          items: [
            "Understanding the professional registration framework ensures international students understand how to become a Registered Architect in Ireland:"
          ]
        },
        {
          t: "ul",
          items: [
            "The Royal Institute of the Architects of Ireland (RIAI): Under the Building Control Act 2007, the RIAI is the statutory registration body for architects in Ireland.",
            "Three-Stage Licensure Route: Stage 1: Recognized Bachelor's degree (RIAI Part 1). Stage 2: Recognized Master of Architecture or 5-year BArch (RIAI Part 2). Stage 3: Minimum 2 years of approved post-graduate professional practical experience followed by the RIAI Examination in Professional Practice (Part 3).",
            "European Recognition: Degrees accredited by the RIAI are recognized across all European Union member states under EU Directive 2005/36/EC.",
            "International Mobility: Graduates holding RIAI-accredited credentials possess recognized standing for registration in the UK (via RIBA / ARB mutual pathways), Canada, Australia, and the US."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Architecture Careers, Starting Salaries & Graduate Scope",
      groups: [
        {
          t: "p",
          items: [
            "Architecture graduates secure positions across architectural design firms, multidisciplinary engineering consultancies, property development companies, and urban planning agencies:"
          ]
        },
        {
          t: "ul",
          items: [
            "In-Demand Career Profiles: Graduate Architect, Architectural Assistant, BIM Coordinator, Sustainable Design Consultant, Urban Design Associate, Architectural Technologist, and Heritage Conservation Specialist.",
            "Starting Salaries: Entry-level graduate architects in Ireland typically earn between €32,000 and €42,000 gross per year, with experienced registered architects and project leaders earning €50,000 to €75,000+.",
            "Stamp 1G Graduate Visa: 1 year (for Level 8 BArch) or 2 years (for Level 9 MArch) of full-time, unrestricted employment authorization in Ireland, enabling graduates to fulfill their mandatory RIAI Part 3 practical experience requirements.",
            "Leading Employers: Renowned Irish practices (O'Donnell + Tuomey, Grafton Architects - Pritzker Prize laureates, Henry J Lyons, Reddy Architecture) and global engineering consultancies (Arup, Buro Happold, AECOM)."
          ]
        }
      ]
    }
  ],
  steps: [
    {
      title: "Select Architecture Degree Pathway",
      desc: "Choose between an integrated 5-year Bachelor of Architecture (BArch) or a postgraduate 1.5–2-year Master of Architecture (MArch)."
    },
    {
      title: "Develop Creative Design Portfolio",
      desc: "Curate 10 to 15 creative works demonstrating spatial awareness, hand drafting, physical modeling, and conceptual design thinking."
    },
    {
      title: "Confirm Academic & Language Criteria",
      desc: "Verify Class 12 aggregate (75%–85%) or Bachelor's degree marks, and score minimum IELTS 6.5 (or TOEFL iBT 88+ / PTE 61+)."
    },
    {
      title: "Draft SOP & Architecture Statement",
      desc: "Write an inspiring Statement of Purpose explaining your architectural interests, design influences, and alignment with the university's studio approach."
    },
    {
      title: "Submit Direct Applications & Digital Portfolio",
      desc: "Upload transcripts, portfolio, and references through institutional international application portals prior to portfolio deadlines."
    },
    {
      title: "Attend Virtual Portfolio Interview",
      desc: "Participate in university design interviews to discuss your portfolio concepts and creative problem-solving approach."
    },
    {
      title: "Accept Offer & Remit Tuition Deposit",
      desc: "Review your acceptance conditions, confirm your place, and wire the requisite tuition fee deposit."
    },
    {
      title: "Apply for Irish Student Visa (Stamp 2)",
      desc: "Submit your online AVATS application with fee receipts, private medical insurance, and proof of required living funds (€10,000–€12,000)."
    }
  ],
  table: {
    caption: "Indicative Architecture Tuition Fees in Ireland (2026/27 Intake)",
    headers: ["Institution", "Degree Title", "Accreditation", "Annual Tuition (Non-EU)"],
    rows: [
      ["Technological University Dublin (TU Dublin)", "Bachelor of Architecture (Honours)", "RIAI Accredited", "€14,500 / year (5 Years)"],
      ["Technological University Dublin (TU Dublin)", "Master of Architecture (MArch)", "RIAI Accredited", "€21,750 total (1.5 Years)"],
      ["University College Dublin (UCD)", "Master of Architecture (MArch)", "RIAI, RIBA, NAAB", "€29,500 (Year 1)"],
      ["Cork Centre for Architectural Education (CCAE)", "BSc (Hons) in Architecture", "RIAI Accredited", "€21,700 / year (4 Years)"],
      ["Cork Centre for Architectural Education (CCAE)", "Master of Architecture (MArch)", "RIAI Accredited", "€18,500 (1 Year)"],
      ["University of Limerick (SAUL)", "Bachelor of Architecture (BArch)", "RIAI Accredited", "€18,500 / year (5 Years)"]
    ]
  },
  faqs: [
    {
      q: "Is Ireland a good destination to study Architecture?",
      a: "Yes, Ireland is an internationally acclaimed destination for architecture education. Renowned globally for producing Pritzker Prize laureates (Grafton Architects) and Royal Gold Medalists (O'Donnell + Tuomey), Irish architecture schools like UCD and TU Dublin combine rigorous studio training with sustainability leadership and full professional accreditation from the Royal Institute of the Architects of Ireland (RIAI)."
    },
    {
      q: "What is the duration of Architecture programs in Ireland?",
      a: "Professional undergraduate degrees (such as the Bachelor of Architecture - BArch Honours) take 5 years to complete (300 ECTS credits). Postgraduate Master of Architecture (MArch) programs take 1.5 to 2 years (90 to 120 ECTS credits) of full-time intensive studio study."
    },
    {
      q: "Do I need a portfolio to apply for Architecture in Ireland?",
      a: "Yes, a design portfolio is a mandatory requirement for admission into professional architecture degrees in Ireland. The portfolio should include 10 to 15 examples of creative work such as freehand drawings, sketches, painting, physical model photographs, photography, and digital design work demonstrating creative potential and spatial thinking."
    },
    {
      q: "How much does it cost to study Architecture in Ireland in 2026/27?",
      a: "Published non-EU tuition fees for 2026/27 range from €14,500 per year at TU Dublin to €21,700 at CCAE and €26,000–€29,500 at UCD. Additionally, students should budget €800 to €1,500 annually for drafting and modeling materials, alongside €8,000 to €14,000 per academic year for living expenses."
    },
    {
      q: "Can I qualify as a registered architect after studying in Ireland?",
      a: "Yes. Graduating from an RIAI-accredited program satisfies the educational requirements (Part 1 and Part 2) for professional registration. To become fully registered with the RIAI and use the legal title of 'Architect', graduates must complete a minimum of 2 years of approved professional practical experience and pass the RIAI Examination in Professional Practice (Part 3)."
    },
    {
      q: "How does EduHawk Worldwide Consultancy help students study architecture in Ireland?",
      a: "EduHawk Worldwide provides comprehensive support including architecture school shortlisting, portfolio guidance and curation advice, Statement of Purpose (SOP) refinement, direct application submission, scholarship assistance, Irish student visa (Stamp 2) filing, and pre-departure accommodation briefings."
    }
  ]
};

export default function ArchitectureIreland() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg
  };

  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={true}
      seoPath={page.slug}
      images={images}
    />
  );
}
