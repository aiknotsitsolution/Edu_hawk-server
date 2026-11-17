import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../../../data/study_abroad/ireland/elec_engg_ug.json";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/University_College_Cork.webp";
import uniImg2 from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/University_College_Cork_2.webp";
import uniImg3 from "../../../../../../Images/Abroad/Ireland/Engineering_UG/Electrical/University_College_Cork_3.webp";

const page = {
  name: "Electrical Engineering in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/ug/electrical-engineering",
  title: "Study Electrical Engineering in Ireland for Indian Students | EduHawk",
  description: "Complete guide to undergraduate Electrical Engineering in Ireland: Top universities (Galway, UCC, DCU), eligibility, tuition fees (€17,900 – €27,640/yr), salaries, and Stamp 1G post-study work visa.",
  keywords: "Study Electrical Engineering in Ireland for Indian Students, Top Universities for Electrical Engineering in Ireland, Bachelor of Electrical Engineering Courses in Ireland, Electrical and Electronic Engineering Programmes in Ireland, Electrical Engineering Eligibility Requirements in Ireland, Electrical Engineering Admission Requirements for Indian Students, IELTS Requirements for Electrical Engineering Courses in Ireland, Electrical Engineering Tuition Fees in Ireland for International Students, Cost of Living for Electrical Engineering Students in Ireland, Engineers Ireland Accredited Electrical Engineering Courses, Power Systems and Renewable Energy Engineering in Ireland, Electrical Engineering Work Placement Opportunities in Ireland, Electrical Engineer Career Opportunities in Ireland, Electrical Engineer Salary in Ireland for Graduates",
  introTitle: "ELECTRICAL ENGINEERING IN IRELAND",
  heroParas: [
    "Electrical Engineering in Ireland trains students in power systems, renewable energy grids, industrial automation, analog and digital electronics, and electric vehicle technology. Driven by Ireland's ambitious targets for 80% renewable electricity by 2030 and accredited by Engineers Ireland, undergraduate programs offer 4-year BEng and 5-year integrated MEng pathways at top faculties like Galway, UCC, and DCU, featuring competitive tuition (€17,900 – €27,640/year) and up to 2 years of post-study graduate work rights under Stamp 1G."
  ],
  overview: [
    "Electrical Engineering is at the forefront of the global energy transition, smart grid transformation, industrial automation, and high-tech electronic systems. Ireland provides an ideal environment for electrical engineering students, driven by multi-billion-euro investments in offshore wind energy, solar arrays, battery storage networks, and modern grid reinforcement by national utilities such as EirGrid and the Electricity Supply Board (ESB).",
    "At Irish universities, electrical engineering programs are commonly titled Electrical and Electronic Engineering, Electronic and Computer Engineering, or Energy Engineering. Undergraduate options encompass 4-year Honours Bachelor degrees (BEng or BE, NFQ Level 8) or 5-year integrated Master of Engineering tracks (MEng, NFQ Level 9). Many institutions also feature a Common Entry engineering first year, allowing students to explore electrical systems before selecting their final pathway.",
    "Students develop robust theoretical and hands-on skills in electrical circuit theory, power electronics, synchronous machines, high-voltage transmission, microcontrollers, control engineering, and renewable energy conversion. Degree programs integrate practical power lab testing, simulation software (MATLAB / Simulink / PSCAD), and structured 6- to 8-month paid industrial placements.",
    "Irish electrical engineering degrees are professionally accredited by Engineers Ireland under the international Washington Accord, ensuring full reciprocal recognition worldwide and establishing a clear trajectory toward Chartered Engineer (CEng) status. EduHawk Worldwide offers dedicated guidance—assisting students with university shortlisting, application dossiers, and Irish visa processing."
  ],
  level: "Bachelor of Engineering (BEng / BE Hons) & Integrated Master's (MEng) in Electrical & Electronic Engineering (NFQ Level 8 / 9)",
  crumb: "Engineering / Electrical Engineering",
  stats: [
    {
      label: "Degree Pathways",
      value: "4-Year BEng / 5-Year MEng"
    },
    {
      label: "Clean Energy Focus",
      value: "80% Renewable Electricity Target"
    },
    {
      label: "Tuition Range",
      value: "€17,900 – €27,640 / Year"
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
      title: "Why Study Electrical Engineering in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "With major investments in green electricity infrastructure and advanced electronic manufacturing, Ireland offers outstanding prospects for electrical engineers. Key advantages include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Robust Energy & Tech Opportunities: Rapidly growing demand for electrical engineers in renewable generation, smart grids, automation, semiconductor manufacturing, and engineering consultancies.",
            "Practical Laboratory Education: State-of-the-art power machines labs, high-voltage test suites, power electronics prototyping, and embedded system design benches.",
            "Clean Energy & Sustainability Leadership: Pioneering research and training in wind energy integration, solar photovoltaic systems, battery energy storage, and industrial energy efficiency.",
            "Professional Engineering Accreditation: Programs accredited by Engineers Ireland, facilitating reciprocal professional recognition across the UK, USA, Australia, Canada, and India.",
            "Postgraduate Progression: Direct pathways into specialized Level 9 MEng and MSc programs in sustainable electrical energy systems, power electronics, and control engineering."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Programs",
      title: "Electrical Engineering Programs & Technical Modules",
      groups: [
        {
          t: "p",
          items: [
            "Undergraduate engineering pathways in Ireland balance strong core principles with cutting-edge power and electronics modules:",
            "Key Course Pathways:"
          ]
        },
        {
          t: "ul",
          items: [
            "Bachelor of Engineering (BEng / BE Hons): 4-year undergraduate degree (NFQ Level 8) emphasizing electrical power, circuit design, machines, and control systems.",
            "Integrated Master of Engineering (MEng): 5-year integrated pathway (NFQ Level 9) offering advanced smart grid dynamics, power system economics, and full Chartered Engineer accreditation eligibility."
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
            "Engineering Mathematics, Calculus & Complex Network Analysis",
            "Electrical Circuit Theory, Electromagnetic Fields & Measurements",
            "Electrical Machines: Transformers, Induction Motors & Synchronous Generators",
            "Power Electronics, Inverters, Rectifiers & Motor Drive Systems",
            "Electrical Power Generation, High-Voltage Transmission & Distribution Grids",
            "Renewable Energy Technologies: Wind Turbine Generation & Solar PV Integration",
            "Analog and Digital Electronics, Operational Amplifiers & Circuit Simulation",
            "Control Systems Engineering, Feedback Dynamics & Automation",
            "Microcontrollers, Embedded Systems & Industrial Sensor Instrumentation",
            "Communications, Signal Processing & Digital Systems",
            "Engineering Project Management, Safety Standards & Capstone Power System Design"
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
            "Mathematics Prerequisite: Excellent academic performance in Mathematics (typically 75%+ or Grade A/B) is strictly mandatory for admission into Irish electrical engineering programs.",
            "Science Requirements: Physics is strongly recommended or required. Chemistry or Computer Science is also advantageous for direct entry.",
            "English Language Thresholds: Standardized test scores required for non-EU applicants include IELTS Academic (minimum overall 6.5, with no band below 6.0), TOEFL iBT (minimum 85 – 90), or PTE Academic (minimum 61 – 63).",
            "Application Portfolio: Certified Class 10 and 12 marksheets, Statement of Purpose (SOP) articulating passion for electrical power or electronics, academic recommendation letters (LORs), and passport copy."
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
            "Professional accreditation confirms that an engineering qualification meets rigorous educational criteria for international engineering practice:",
            "Accreditation Benchmarks:"
          ]
        },
        {
          t: "ul",
          items: [
            "Engineers Ireland Accreditation: Evaluates and accredits programs against Chartered Engineer (CEng) and Associate Engineer (AEng) professional standards.",
            "Washington Accord Reciprocity: Enables accredited Irish electrical engineering degrees to be recognized mutually by ABET in the USA, the Engineering Council / IET in the UK, Engineers Australia, and the National Board of Accreditation (NBA) in India.",
            "Chartered Engineer Trajectory: Graduating from an accredited 5-year integrated MEng satisfies the complete educational requirements for professional CEng registration."
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
            "With massive national grid expansions and a flourishing semiconductor and electronics manufacturing ecosystem, electrical engineering graduates in Ireland enjoy outstanding employment rates.",
            "Popular Career Paths:"
          ]
        },
        {
          t: "ul",
          items: [
            "Electrical Design & Systems Engineer",
            "Power Systems & Grid Integration Engineer",
            "Renewable Energy (Wind / Solar) Project Engineer",
            "Automation, PLC & Control Systems Engineer",
            "Power Electronics & Drives Development Engineer",
            "Electrical Maintenance & Asset Management Engineer",
            "Instrumentation & Calibration Engineer",
            "Testing & Commissioning Field Engineer"
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
            "Graduate / Entry-Level Roles: €30,000 – €40,000 per year",
            "Early Career Engineers (3–5 Years Experience): €40,000 – €55,000 per year",
            "Experienced Senior Engineers & Technical Leads: €55,000 – €75,000+ per year"
          ]
        },
        {
          t: "p",
          items: [
            "Electrical engineers working in multinational renewable energy development, high-voltage transmission utilities, and automated pharma manufacturing frequently receive performance bonuses and rapid salary advancement."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "EduHawk Guidance",
      title: "How EduHawk Worldwide Supports Your Ireland Engineering Journey",
      groups: [
        {
          t: "p",
          items: [
            "EduHawk Worldwide is an established global study abroad consultancy empowering students to achieve their educational aspirations across Ireland. Our services include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Comprehensive university program matching across Galway, UCC, and DCU electrical engineering faculties.",
            "Clarifying degree specializations (Power Systems vs Electronic Engineering vs Energy Systems).",
            "Professional mentoring for technical Statements of Purpose (SOP) and academic resumes.",
            "Direct application submission through university international portals and priority scholarship follow-up.",
            "Complete Irish student visa (Stamp 2) guidance, financial document verification, and medical insurance support.",
            "Pre-departure advice covering housing arrangements, student Leap cards, and 20 hours/week part-time work rights."
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
      desc: "Offers internationally accredited Bachelor and Master of Engineering degrees in Electrical and Electronic Engineering. Features specialized laboratories in smart grids, renewable energy integration, power electronics, and embedded instrumentation at €27,640/year.",
      img: uniImg1
    },
    {
      name: "University College Cork (UCC)",
      city: "Cork",
      state: "Munster",
      desc: "Delivers an acclaimed BE (Honours) in Electrical and Electronic Engineering with direct progression into an integrated Master of Engineering (MEng). Features deep industry ties across Ireland's southern power and tech corridor at €27,000/year (+ €210 capitation).",
      img: uniImg2
    },
    {
      name: "Dublin City University (DCU)",
      city: "Dublin",
      state: "Leinster",
      desc: "Provides high-impact BEng and MEng programs in Electronic and Computer Engineering with Common Entry pathways. Delivers extensive coursework in control systems, robotics, and semiconductor hardware alongside 6-month paid INTRA internships at €17,900/year (Y1–Y4).",
      img: uniImg3
    }
  ],
  steps: [
    {
      title: "University & Specialization Research",
      desc: "Compare electrical, power systems, renewable energy, and electronic engineering curricula across Galway, UCC, and DCU."
    },
    {
      title: "Academic & Math Eligibility Verification",
      desc: "Confirm your Class 12 marks meet target thresholds, ensuring minimum 75% in Mathematics and strong marks in Physics."
    },
    {
      title: "English Proficiency Certification",
      desc: "Achieve required English threshold scores on IELTS Academic (6.5 overall), TOEFL iBT (85+), or PTE Academic (61+)."
    },
    {
      title: "Document & Technical SOP Preparation",
      desc: "Compile certified academic marksheets, academic recommendation letters, and a technical Statement of Purpose (SOP)."
    },
    {
      title: "University Application Submission",
      desc: "Submit applications directly via institutional international admissions portals prior to deadlines, paying application fees."
    },
    {
      title: "Offer Acceptance & Tuition Deposit",
      desc: "Review admission offer letters, apply for institutional merit scholarships, accept your seat, and remit the initial tuition deposit."
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
    caption: "Estimated Annual Cost of Studying Electrical Engineering in Ireland (2026–2027)",
    headers: ["Expense Category", "Estimated Cost (EUR)", "Details & Notes"],
    rows: [
      [
        "Undergraduate Tuition Fees",
        "€17,900 – €27,640+ / year",
        "DCU: €17,900/yr (Y1–4), €19,400 (Y5 MEng); UCC: €27,000/yr (+ €210 capitation); University of Galway: €27,640/yr"
      ],
      [
        "Lodging & Utilities",
        "€7,000 – €14,000 / year",
        "On-campus student residences or private shared apartments"
      ],
      [
        "Food & Grocery Products",
        "€2,500 – €4,000 / year",
        "Self-catered groceries, campus dining, and daily food"
      ],
      [
        "Public Transportation",
        "€600 – €1,200 / year",
        "Subsidized student travel with Student Leap Card"
      ],
      [
        "Books, Laptop & Study Materials",
        "€1,000 – €2,000 / year",
        "Textbooks, circuit simulation software, lab components, and academic tools"
      ],
      [
        "Medical Insurance",
        "€160 – €300 / year",
        "Mandatory private healthcare insurance for non-EU students"
      ],
      [
        "Immigration & IRP Registration",
        "€300 / year",
        "Mandatory annual immigration registration fee"
      ],
      [
        "Estimated Total Annual Budget",
        "€29,000 – €49,440+ / year",
        "Comprehensive annual living and educational cost estimate"
      ]
    ]
  },
  faqs: [
    {
      q: "How many years is an Electrical Engineering degree in Ireland?",
      a: "Standard undergraduate Honours Bachelor of Engineering (BEng or BE) degrees in Ireland take 4 years (NFQ Level 8). Integrated Master of Engineering (MEng, NFQ Level 9) tracks require 5 years, providing full educational fulfillment for Chartered Engineer (CEng) accreditation."
    },
    {
      q: "What is the eligibility criteria for Indian students?",
      a: "Candidates must have completed Class 12 from a recognized board (CBSE, CISCE, or state boards) with strong grades in Mathematics (typically 75%+) and Physics or other physical science subjects, alongside certified English language proficiency (IELTS 6.5 or equivalent)."
    },
    {
      q: "What are the tuition fees for international students in Electrical Engineering?",
      a: "For 2026/2027, non-EU undergraduate tuition fees typically range from €17,900 to €27,640 per year. For example, Dublin City University (DCU) charges €17,900 per year for Years 1–4, UCC charges €27,000 per year plus capitation, and the University of Galway lists €27,640 per year."
    },
    {
      q: "Is Electrical Engineering a recognized profession in Ireland?",
      a: "Yes. Electrical Engineering is a prestigious, formally regulated profession in Ireland. Programs accredited by Engineers Ireland satisfy international standards under the Washington Accord, enabling graduates to work toward the Chartered Engineer (CEng) designation with global recognition."
    },
    {
      q: "What jobs can I get after studying Electrical Engineering in Ireland?",
      a: "Graduates pursue high-impact careers in electrical design, power systems engineering, renewable energy development (wind and solar grids), industrial automation, power electronics, instrumentation, and testing across Ireland's energy utilities, tech campuses, and manufacturing sectors."
    },
    {
      q: "How does EduHawk Worldwide assist students applying to Ireland?",
      a: "EduHawk Worldwide provides expert, personalized consultancy: helping students evaluate university options, compile Statements of Purpose, submit international applications, apply for merit scholarships, and successfully obtain their Irish student visa (Stamp 2)."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "University_College_Cork.webp": uniImg1,
  "University_College_Cork_2.webp": uniImg2,
  "University_College_Cork_3.webp": uniImg3,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function ElectricalEngineeringUGIreland() {
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
