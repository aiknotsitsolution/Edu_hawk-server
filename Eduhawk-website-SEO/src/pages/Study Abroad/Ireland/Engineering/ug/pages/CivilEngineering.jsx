import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../../../data/study_abroad/ireland/ug_civil_engineering.json";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/Galway_University.webp";
import uniImg2 from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/University_College_Cork.webp";
import uniImg3 from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Civil/Technological_University_Dublin.webp";

const page = {
  name: "Civil Engineering in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/ug/civil-engineering",
  title: "Study Civil Engineering in Ireland for Indian Students | EduHawk",
  description: "Complete guide to undergraduate Civil Engineering in Ireland: Top universities (Galway, UCC, TU Dublin), eligibility, fees (€14,000 – €27,640/yr), salaries, and Stamp 1G post-study work visa.",
  keywords: "Study Civil Engineering in Ireland for Indian Students, Best Universities for Civil Engineering in Ireland, Bachelor of Civil Engineering Courses in Ireland, Undergraduate Civil Engineering Programmes for International Students, Civil Engineering Eligibility Requirements in Ireland, Civil Engineering Admission Requirements for Indian Students, IELTS Requirements for Civil Engineering Courses in Ireland, Civil Engineering Tuition Fees in Ireland for International Students, Cost of Living for Civil Engineering Students in Ireland, Engineers Ireland Accredited Civil Engineering Courses, Civil Engineering Career Opportunities in Ireland, Civil Engineer Salary in Ireland for Graduates, Ireland Student Visa Requirements for Civil Engineering Students",
  introTitle: "CIVIL ENGINEERING IN IRELAND",
  heroParas: [
    "Civil Engineering in Ireland prepares students to design, construct, and manage critical modern infrastructure—including transportation corridors, bridges, energy-efficient buildings, and sustainable water systems. Offering accredited 4-year BEng and 5-year integrated MEng pathways at world-ranked institutions like the University of Galway, UCC, and TU Dublin, Ireland delivers extensive fieldwork, competitive tuition (€14,000 – €27,640/year), and up to 2 years of post-study graduate work rights under Stamp 1G."
  ],
  overview: [
    "Civil Engineering is the foundational discipline dedicated to designing, building, and maintaining essential physical infrastructure that sustains human society. Ireland provides an exemplary ecosystem for civil engineering education, driven by massive national infrastructure capital investments under Project Ireland 2040 and the National Development Plan—spanning public transit modernization, offshore wind port facilities, flood defense schemes, and smart green urban regeneration.",
    "Undergraduate education in Ireland spans 4-year Honours Bachelor degrees (BEng or BE, NFQ Level 8) or 5-year integrated Master of Engineering programs (MEng, NFQ Level 9). Leading engineering faculties offer specialized streams in Civil Engineering, Structural Engineering, Geotechnical Engineering, Transportation Engineering, and Environmental Water Engineering.",
    "Students acquire rigorous practical and computational competence through site surveying, geotechnical soil mechanics labs, concrete and timber testing, hydraulic flume simulations, and Building Information Modeling (BIM / Revit / AutoCAD). Cooperative education programs provide 6- to 8-month paid industrial placements with major European construction contractors and international engineering consultancies.",
    "Degrees are professionally accredited by Engineers Ireland under the international Washington Accord, ensuring worldwide recognition and establishing a direct pathway to Chartered Engineer (CEng) status. EduHawk Worldwide provides personalized overseas education counseling—guiding students through university shortlisting, application dossiers, and Irish visa processing."
  ],
  level: "Bachelor of Engineering (BEng / BE Hons) & Integrated Master's (MEng) in Civil, Structural & Environmental Engineering (NFQ Level 8 / 9)",
  crumb: "Engineering / Civil Engineering",
  stats: [
    {
      label: "Degree Pathways",
      value: "4-Year BEng / 5-Year MEng"
    },
    {
      label: "Accreditation",
      value: "Engineers Ireland (Washington Accord)"
    },
    {
      label: "Tuition Range",
      value: "€14,000 – €27,640 / Year"
    },
    {
      label: "Post-Study Work",
      value: "1 to 2 Years (Stamp 1G)"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Study in Ireland",
      title: "Why Should You Study Civil Engineering in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "With substantial multi-billion-euro national investment in modern infrastructure and sustainability, Ireland is an outstanding hub for civil engineering students. Core benefits include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Practical & Field-Based Learning: Integrated coursework featuring surveying camp field trips, structural mechanics laboratories, and real-world infrastructure design projects.",
            "Booming Infrastructure Sector: High-demand career opportunities across commercial construction, high-speed rail and road networks, coastal protection, and water treatment utilities.",
            "Sustainability & Climate Resilience Focus: Specialized curricula covering low-carbon building materials, environmental impact assessment, flood risk management, and circular construction.",
            "Professional Accreditation: Directly accredited by Engineers Ireland, providing international mobility across the UK, USA, Canada, Australia, and India.",
            "Postgraduate Progression: Direct progression routes into specialized Level 9 MEng programs in structural engineering, transportation planning, or construction project management."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Programs",
      title: "Civil Engineering Programs & Curriculum Structure",
      groups: [
        {
          t: "p",
          items: [
            "Irish universities offer versatile academic routes catering to both 4-year professional degrees and 5-year integrated master's tracks:",
            "Key Course Pathways:"
          ]
        },
        {
          t: "ul",
          items: [
            "Bachelor of Engineering (BEng / BE Hons): 4-year undergraduate degree (NFQ Level 8) emphasizing core civil, structural, and environmental engineering principles.",
            "Integrated Master of Engineering (MEng): 5-year integrated program (NFQ Level 9) offering advanced structural dynamics, finite element modeling, and full Chartered Engineer accreditation."
          ]
        },
        {
          t: "p",
          items: [
            "Core Curriculum Modules & Topics Covered:"
          ]
        },
        {
          t: "ul",
          items: [
            "Engineering Mathematics, Mechanics of Solids & Structural Analysis",
            "Properties of Construction Materials: Concrete, Steel, Timber & Masonry",
            "Soil Mechanics, Foundation Engineering & Geotechnical Site Investigation",
            "Fluid Mechanics, Hydraulics & Open-Channel Water Resource Systems",
            "Highway Engineering, Urban Transportation Planning & Traffic Systems",
            "Land Surveying, Geomatics, GPS Mapping & Spatial Data Analysis",
            "Construction Project Management, Health & Safety, Contracts & Estimation",
            "Environmental Engineering, Water & Wastewater Treatment Technologies",
            "Computer-Aided Design (CAD), Building Information Modeling (BIM) & FEA",
            "Comprehensive Capstone Structural / Infrastructure Design Group Project"
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Entry Criteria",
      title: "Admission & Eligibility Requirements",
      groups: [
        {
          t: "p",
          items: [
            "Admission prerequisites are established by individual university engineering faculties. Standard entry criteria include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Academic Qualification: Completion of Class 12 (Higher Secondary School Certificate) from CBSE, CISCE, or state boards with a competitive overall average of 70% – 85%.",
            "Mathematics Prerequisite: Strong academic performance in Mathematics (typically 70%+ or Grade A/B) is strictly mandatory for admission into Irish civil engineering programs.",
            "Science Requirements: Physics or Chemistry is required or strongly recommended depending on the university.",
            "English Language Thresholds: Standardized test scores required for non-EU international applicants include IELTS Academic (minimum overall 6.5, with no band below 6.0), TOEFL iBT (minimum 85 – 90), or PTE Academic (minimum 61 – 63).",
            "Application Portfolio: Certified Class 10 and 12 marksheets, Statement of Purpose (SOP) articulating passion for structural or infrastructure engineering, academic letters of recommendation (LORs), and passport copy."
          ]
        }
      ]
    },
    {
      slot: "recognition",
      eyebrow: "Professional Standards",
      title: "Accreditation & Engineers Ireland Recognition",
      groups: [
        {
          t: "p",
          items: [
            "Accreditation is an essential benchmark when evaluating an engineering qualification. In Ireland, Engineers Ireland is the statutory authority that audits and accredits engineering education against international professional standards:",
            "Key Accreditation Benchmarks:"
          ]
        },
        {
          t: "ul",
          items: [
            "Chartered Engineer Pathway: An accredited 5-year integrated MEng (or an accredited 4-year BEng plus an approved Master's) fully satisfies the educational requirements for Chartered Engineer (CEng) status.",
            "Washington Accord Signatory: Accredited Irish degrees enjoy full mutual recognition with the Institution of Civil Engineers (ICE) in the UK, ABET in the United States, Engineers Australia, and the National Board of Accreditation (NBA) in India.",
            "Continuing Professional Development (CPD): Graduates enter formal graduate training schemes with chartered status support across multinational contractors."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Job Market & Salaries",
      title: "Career Opportunities & Salary Prospects in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Driven by Ireland's National Development Plan, housing demand, and climate-resilient water infrastructure, civil engineering graduates enjoy near 100% graduate employment.",
            "Popular Career Paths:"
          ]
        },
        {
          t: "ul",
          items: [
            "Civil & Structural Design Engineer",
            "Site Engineer & Construction Manager",
            "Geotechnical & Foundation Engineer",
            "Transportation & Highway Systems Engineer",
            "Water Resources & Environmental Engineer",
            "Construction Project Engineer / Site Agent",
            "Infrastructure Planning & BIM Coordinator",
            "Quantity Surveying & Cost Estimation Engineer"
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Salaries in Ireland:"
          ]
        },
        {
          t: "ul",
          items: [
            "Graduate / Junior Civil Engineer: €30,000 – €40,000 per year",
            "Early Career Engineer (3–5 Years Experience): €40,000 – €55,000 per year",
            "Experienced Senior Engineer & Project Manager: €55,000 – €75,000+ per year"
          ]
        },
        {
          t: "p",
          items: [
            "Chartered Civil Engineers (CEng) and specialized geotechnical or structural consultants frequently earn in excess of €80,000–€100,000 annually with leading international firms."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "EduHawk Guidance",
      title: "How EduHawk Worldwide Guides Your Civil Engineering Aspirations",
      groups: [
        {
          t: "p",
          items: [
            "EduHawk Worldwide is an established global study abroad consultancy dedicated to helping students secure admission into Ireland's top engineering universities. Our end-to-end guidance includes:"
          ]
        },
        {
          t: "ul",
          items: [
            "Evaluating university course structures, faculty specializations, and co-op placement networks across Galway, Cork, and Dublin.",
            "Clarifying BEng vs MEng qualification levels and Engineers Ireland accreditation standing.",
            "Crafting high-impact Statements of Purpose (SOP) and engineering resume development.",
            "Managing international portal applications and tracking decision timelines.",
            "Complete Irish student visa (Stamp 2) guidance, financial dossier review, and medical insurance arrangement.",
            "Pre-departure orientation covering student accommodation, Leap travel cards, and part-time work regulations (20 hours/week)."
          ]
        }
      ]
    }
  ],
  unis: [
    {
      name: "University of Galway",
      city: "Galway",
      state: "Connacht",
      desc: "Offers world-ranked Bachelor of Engineering (BEng Hons) and integrated Master of Engineering (MEng) in Civil Engineering. Features Ireland's largest Alice Perry Engineering building, state-of-the-art structural testing flumes, and a non-EU fee of €27,640/year.",
      img: uniImg1
    },
    {
      name: "University College Cork (UCC)",
      city: "Cork",
      state: "Munster",
      desc: "Delivers an acclaimed BE (Honours) in Civil, Structural and Environmental Engineering with direct progression into an integrated MEng. Renowned for environmental hydraulics and sustainable construction research, with non-EU tuition of €27,000/year (+ €210 capitation).",
      img: uniImg2
    },
    {
      name: "Technological University Dublin (TU Dublin)",
      city: "Dublin",
      state: "Leinster",
      desc: "Renowned for career-focused, highly practical civil and structural engineering education. Features extensive surveying field camps, industry co-op placements, and accessible non-EU tuition fees ranging from €14,000 to €15,500/year.",
      img: uniImg3
    }
  ],
  steps: [
    {
      title: "University & Specialization Research",
      desc: "Compare civil, structural, geotechnical, and environmental engineering programs across Galway, UCC, and TU Dublin."
    },
    {
      title: "Academic & Math Eligibility Verification",
      desc: "Confirm your Class 12 score satisfies university requirements, ensuring high achievement in Mathematics and Physics."
    },
    {
      title: "English Proficiency Examination",
      desc: "Achieve required English threshold scores on IELTS Academic (6.5 overall), TOEFL iBT (85+), or PTE Academic (61+)."
    },
    {
      title: "Application Dossier Preparation",
      desc: "Compile certified academic marksheets, academic recommendation letters, and a tailored Statement of Purpose (SOP)."
    },
    {
      title: "University Portal Application",
      desc: "Submit online applications via institutional international portals well before priority deadlines, paying application fees."
    },
    {
      title: "Offer Acceptance & Tuition Deposit",
      desc: "Review admission offer letters, apply for merit scholarships, accept your seat, and remit the initial tuition deposit."
    },
    {
      title: "Irish Student Visa (Stamp 2) Lodgement",
      desc: "Lodge your study visa application with comprehensive proof of financial capacity, police clearance, and medical insurance."
    },
    {
      title: "Travel, Accommodation & Enrolment",
      desc: "Arrange student accommodation, arrive for orientation, register for classes, and obtain your Irish Residence Permit (IRP)."
    }
  ],
  table: {
    caption: "Estimated Annual Cost of Studying Civil Engineering in Ireland (2026–2027)",
    headers: ["Expense Category", "Estimated Cost (EUR)", "Details & Notes"],
    rows: [
      [
        "Undergraduate Tuition Fees",
        "€14,000 – €27,640+ / year",
        "University of Galway: €27,640/yr; UCC: €27,000/yr (+ €210 capitation); TU Dublin: €14,000–€15,500/yr"
      ],
      [
        "Student Housing & Communal Services",
        "€7,000 – €14,000 / year",
        "On-campus student residences or shared private apartments"
      ],
      [
        "Groceries & Food",
        "€2,500 – €4,000 / year",
        "Self-catered groceries, university dining, and meal prep"
      ],
      [
        "Public Transportation",
        "€600 – €1,200 / year",
        "Subsidized student travel with Student Leap Card"
      ],
      [
        "Laptop, Books & Fieldwork Materials",
        "€1,000 – €2,000 / year",
        "Textbooks, CAD software licenses, safety boots, and surveying gear"
      ],
      [
        "Healthcare Insurance",
        "€160 – €300 / year",
        "Mandatory private medical insurance for non-EU international students"
      ],
      [
        "Irish Residence Permit (IRP) Registration",
        "€300 / year",
        "Mandatory annual immigration registration fee"
      ],
      [
        "Estimated Total Annual Budget",
        "€25,500 – €49,440+ / year",
        "Comprehensive annual living and educational cost estimate"
      ]
    ]
  },
  faqs: [
    {
      q: "How long is a civil engineering degree in Ireland?",
      a: "Standard undergraduate Honours Bachelor of Engineering (BEng or BE) degrees in Ireland are 4 years in duration (NFQ Level 8). Many universities also offer integrated 5-year Master of Engineering (MEng, NFQ Level 9) tracks that fulfill the full educational requirements for Chartered Engineer (CEng) accreditation."
    },
    {
      q: "What are the eligibility criteria for Indian students?",
      a: "Candidates must have successfully completed Class 12 from a recognized board (CBSE, CISCE, or state boards) with strong grades in Mathematics (typically 70%+) and Physics or other physical science subjects, alongside certified English language proficiency (IELTS 6.5 or equivalent)."
    },
    {
      q: "What is the tuition fee for international students in Civil Engineering?",
      a: "For 2026/2027, undergraduate non-EU tuition fees range from €14,000 to €27,640 per year. For example, TU Dublin charges approximately €14,000–€15,500/year, whereas the University of Galway lists €27,640/year (inclusive of levy) and UCC lists €27,000/year plus capitation."
    },
    {
      q: "Is Civil Engineering in Ireland accredited internationally?",
      a: "Yes. Major Irish civil engineering programs are accredited by Engineers Ireland under the Washington Accord, which ensures full international reciprocity with professional bodies including the Institution of Civil Engineers (ICE) in the UK, ABET in the USA, and Engineers Australia."
    },
    {
      q: "What type of jobs can I get after studying Civil Engineering in Ireland?",
      a: "Graduates secure high-demand roles in structural design, site engineering, construction project management, transportation planning, geotechnical engineering, water resource management, and environmental infrastructure projects across both Irish and multinational firms."
    },
    {
      q: "How does EduHawk Worldwide assist students applying to Ireland?",
      a: "EduHawk Worldwide offers complete end-to-end guidance: matching students with the right universities, reviewing Statement of Purpose (SOP) documents, submitting international applications, securing merit scholarships, and guiding students step-by-step through the Irish student visa process."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "Galway_University.webp": uniImg1,
  "University_College_Cork.webp": uniImg2,
  "Technological_University_Dublin.webp": uniImg3,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function CivilEngineeringUGIreland() {
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
      page={cmsPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
