import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/HospitalityManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/HospitalityManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/HospitalityManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/HospitalityManagement/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/HospitalityManagement/University_of_Galway.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/HospitalityManagement/University_of_Galway_2.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/HospitalityManagement/University_of_Galway_3.webp";

const page = {
  name: "Hospitality Management in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/hospitality-management",
  title: "Study Hospitality & Hotel Management in Ireland | Colleges, Fees & Visas 2026/27",
  description: "Complete guide to Hospitality Management in Ireland: Shannon College of Hotel Management, TU Dublin, undergraduate & MSc degrees, 2026/27 tuition fees, 100% employment records, and Stamp 1G post-study work visa.",
  keywords: "Study Hospitality Management in Ireland, Hotel Management Ireland, Shannon College Hotel Management Galway, TU Dublin Hospitality Management, BComm International Hotel Management, MSc Hospitality Management Ireland, Hospitality tuition fees Ireland 2026 2027, Stamp 1G post study work visa",
  introTitle: "HOSPITALITY MANAGEMENT STUDIES IN IRELAND",
  heroParas: [
    "Ireland is an internationally celebrated destination for hospitality and hotel management education, home to prestigious institutions like Shannon College of Hotel Management and a flourishing multi-billion euro global tourism and service economy."
  ],
  overview: [
    "Hospitality Management programs in Ireland fuse rigorous business administration with hands-on luxury hotel operations, food and beverage management, revenue optimization, event coordination, and cross-cultural guest relations. International students can pursue 3-to-4-year undergraduate qualifications (such as the Bachelor of Arts in Hospitality Management, BSc Honours in International Hospitality Management, or BComm in International Hotel Management) or intensive 1-year postgraduate MSc degrees.",
    "A distinguishing hallmark of Irish hospitality education is its mandatory, structured industry placements. Leading colleges maintain partnerships with five-star luxury hotel chains across Ireland, the UK, Europe, the United States, and the UAE, culminating in a 100% graduate employment record on graduation day for institutions like Shannon College.",
    "Under Ireland's Third Level Graduate Scheme (Stamp 1G), graduates of NFQ Level 8 Honours Bachelor programs receive 12 months (1 year) of unrestricted post-study employment permission, while Level 9 Master's graduates receive 24 months (2 full years) to secure managerial positions across Europe."
  ],
  level: "NFQ Level 7/8 (Bachelor) & Level 9 (Postgraduate Master's)",
  crumb: "Hospitality / Hospitality Management",
  stats: [
    {
      label: "Degree Framework",
      value: "NFQ Level 7, Level 8 & Level 9"
    },
    {
      label: "Course Duration",
      value: "3–4 Years (UG) / 1 Year (PG)"
    },
    {
      label: "Annual Tuition (2026/27)",
      value: "€12,500 – €16,000 / year"
    },
    {
      label: "Post-Study Work Visa",
      value: "1 Year (UG) / 2 Years (PG) Stamp 1G"
    }
  ],
  unis: [
    {
      name: "University of Galway (Shannon College of Hotel Management)",
      city: "Shannon / Galway",
      state: "Connacht / Munster, Ireland",
      desc: "One of the world's most prestigious hotel management colleges, founded in 1951. Offers the Bachelor of Business Studies (BBS) and Bachelor of Commerce (BComm) in International Hotel Management, maintaining a 100% employment rate on graduation day with global luxury placements.",
      img: uniImg1
    },
    {
      name: "Technological University Dublin (TU Dublin School of Hospitality)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Delivers comprehensive hospitality education at its state-of-the-art Grangegorman campus, offering the BA in Hospitality Management (€12,500), BSc (Honours) in International Hospitality Management (€13,500), and 1-year MSc in Hospitality Management (€13,500).",
      img: uniImg2
    },
    {
      name: "University of Galway (Postgraduate Hospitality Division)",
      city: "Galway",
      state: "Connacht, Ireland",
      desc: "Provides advanced executive postgraduate programs in Hospitality Management, Hospitality Leadership, and Revenue Management, bridging strategic financial leadership with international tourism destination planning.",
      img: uniImg3
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Ireland",
      title: "Why Study Hospitality Management in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Hospitality education in Ireland combines century-old traditions of warm Irish hospitality with cutting-edge international commercial management."
          ]
        },
        {
          t: "ul",
          items: [
            "Famed Global Reputation: Shannon College of Hotel Management and Irish universities are recognized worldwide by top luxury hospitality employers including Marriott, Hilton, Four Seasons, Ritz-Carlton, and Hyatt.",
            "Integrated Paid Industry Placements: Degree pathways embed 12 to 21 months of structured, paid corporate internships across premier international resorts and boutique properties.",
            "Complete Business Foundation: Programs cover financial accounting, business law, revenue management, human resource management, facilities planning, and data analytics alongside practical culinary and guest services.",
            "English-Speaking Tourism Hub: Studying in an English-speaking European country provides students with seamless communication skills for international hotel executive tracks.",
            "Universal Employment Portability: Irish hospitality qualifications carry worldwide recognition through QQI and international hospitality accreditation bodies.",
            "Third Level Graduate Scheme (Stamp 1G): Eligible graduates gain 1 to 2 years of unrestricted post-study employment authorization in Ireland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Pathways",
      title: "Hospitality Degree Levels & Core Specializations",
      groups: [
        {
          t: "p",
          items: [
            "Students can select from diverse award levels across the National Framework of Qualifications:",
            "Undergraduate Degrees (NFQ Level 7 & 8): 3-to-4-year programs including the Bachelor of Arts in Hospitality Management (Level 7), BSc (Honours) in International Hospitality Management (Level 8), and BComm in International Hotel Management (Level 8). These encompass hotel operations, guest relations, commercial food and beverage management, and marketing.",
            "Postgraduate Degrees (NFQ Level 9): 1-year full-time programs including MSc in Hospitality Management, MSc in International Hospitality Management, and Higher Diplomas for candidates from non-hospitality backgrounds seeking executive conversion.",
            "Core Functional Specializations: Luxury Hotel & Resort Operations, Revenue & Asset Management, Event & Conference Coordination, Hospitality Brand Marketing, Sustainable Tourism Development, and Food & Beverage Strategy."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for Hospitality Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admission standards evaluate secondary academic performance, personal motivation, and English communication skills:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate (Bachelor's Entry): Completion of Higher Secondary School Certificate (Class 12) from CBSE, CISCE, or state boards with an aggregate between 60% and 80%. Shannon College and select universities may also conduct a personal interview.",
            "Postgraduate (Master's Entry): A recognized 3-to-4-year Bachelor's degree with a minimum 55% to 60% aggregate. Many MSc hospitality programs welcome graduates from business, arts, humanities, and sciences.",
            "English Language Test Scores: Non-native English speakers must achieve IELTS Academic 6.0 to 6.5 overall (minimum 6.0 in each sub-test), TOEFL iBT 80–90, or PTE Academic 58–63.",
            "Industry Experience: Prior front-office, culinary, or customer service experience is advantageous for postgraduate applications, but not strictly mandatory."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Application Checklist",
      title: "Application & Documentation Checklist",
      groups: [
        {
          t: "p",
          items: [
            "Applicants must submit certified digital documents through university admissions portals:"
          ]
        },
        {
          t: "ul",
          items: [
            "Official Class 10 and Class 12 mark sheets and certificates (for undergraduate applicants).",
            "Bachelor's degree certificate and consolidated mark sheets (for postgraduate applicants).",
            "Valid International Passport with minimum 12 months validity.",
            "English Language proficiency scorecard (IELTS, TOEFL iBT, or PTE Academic).",
            "Statement of Purpose (SOP) articulating dedication to service excellence and hospitality career ambitions.",
            "Two Academic or Employer Letters of Recommendation (LORs).",
            "Curriculum Vitae (CV) highlighting guest service, event volunteering, culinary skills, or foreign language competency."
          ]
        }
      ]
    },
    {
      slot: "cost",
      eyebrow: "Fees & Budget",
      title: "Cost of Studying Hospitality in Ireland (2026/27 Intake)",
      groups: [
        {
          t: "p",
          items: [
            "Budget planning includes international tuition fees, student levies, accommodation, and personal living costs:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate Tuition Fees: Published non-EU tuition for 2026/27 includes €12,500/year for TU Dublin's BA Hospitality Management, €13,500/year for BSc (Honours) International Hospitality, and €16,000 for Year 1 at Shannon College (University of Galway).",
            "Postgraduate Tuition Fees: TU Dublin's 1-year MSc in Hospitality Management costs €13,500 total, representing exceptional European value.",
            "Living Costs (Dublin): Estimated at €1,000 to €1,400 monthly (€10,000 to €14,000 per academic year) for shared accommodation, groceries, and travel.",
            "Living Costs (Shannon / Galway / Regional): Approximately €750 to €1,050 per month (€7,500 to €10,500 per academic year), providing substantial savings.",
            "Paid Placement Earnings: During mandatory internships (e.g., Year 2 and Year 4 at Shannon College), students earn competitive wages, offsetting educational costs.",
            "Student Work Authorization: Non-EU students with Stamp 2 visas can work up to 20 hours per week during term time and 40 hours per week during holidays, earning at least the Irish minimum wage of €13.50 per hour."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Quality Standards",
      title: "Quality Accreditation & Global Industry Partnerships",
      groups: [
        {
          t: "p",
          items: [
            "Hospitality programs in Ireland are recognized under the National Framework of Qualifications (NFQ) and monitored by Quality and Qualifications Ireland (QQI):"
          ]
        },
        {
          t: "ul",
          items: [
            "NFQ Levels 7, 8 & 9: Ordinary Bachelor Degrees are Level 7 (180 ECTS), Honours Bachelor Degrees are Level 8 (240 ECTS), and Master of Science degrees are Level 9 (90 ECTS).",
            "The Shannon Legacy: Shannon College degrees are awarded by the University of Galway, combining ancient university prestige with intense professional vocational mastery.",
            "Irish Hospitality Institute (IHI): The professional institute for hospitality managers in Ireland, granting student and graduate memberships and professional networking access.",
            "Global Placement Network: Direct institutional ties with over 100 international luxury hotels across Europe, the US, and Asia, ensuring seamless international career mobility."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Hospitality Careers, Starting Salaries & Graduate Scope",
      groups: [
        {
          t: "p",
          items: [
            "Graduates enter an expansive global industry with rapid advancement into supervisory and general management tracks:"
          ]
        },
        {
          t: "ul",
          items: [
            "In-Demand Career Roles: Hotel Operations Manager, Front Office Manager, Guest Experience Executive, Food & Beverage Director, Revenue Manager, Conference & Event Coordinator, and Corporate Hospitality Sales Executive.",
            "Starting Salaries: Entry-level operational and supervisory roles typically offer gross starting salaries between €25,000 and €35,000 per year, rising quickly to €45,000–€60,000+ for experienced department heads and hotel managers.",
            "Stamp 1G Graduate Visa: 1 year (Level 8 Honours Bachelor) or 2 years (Level 9 Master's) of full-time, unrestricted employment authorization in Ireland.",
            "Unrivaled 100% Placement History: Shannon College of Hotel Management maintains an unbroken record of 100% employment on graduation day for every graduating class."
          ]
        }
      ]
    }
  ],
  steps: [
    {
      title: "Select Hospitality Degree Program",
      desc: "Determine your study route between an undergraduate Bachelor of Business/Commerce in International Hotel Management or a 1-year postgraduate MSc."
    },
    {
      title: "Check Academic Entry Standards",
      desc: "Verify meeting minimum secondary school grades (60%–80% aggregate) or Bachelor's degree criteria."
    },
    {
      title: "Complete English Proficiency Testing",
      desc: "Score minimum IELTS 6.0 to 6.5 (with no sub-band below 6.0), TOEFL iBT 80–90, or PTE Academic 58–63."
    },
    {
      title: "Draft SOP & Gather Recommendations",
      desc: "Compose an engaging Statement of Purpose showcasing your customer orientation and passion for hotel management."
    },
    {
      title: "Submit Online Applications",
      desc: "Apply through institutional international admissions portals prior to intake deadlines."
    },
    {
      title: "Attend Admissions Interview (If Applicable)",
      desc: "Participate in Shannon College or university virtual interviews to discuss your hospitality career motivations."
    },
    {
      title: "Accept Offer & Apply for Student Visa (Stamp 2)",
      desc: "Pay the required tuition deposit and submit your online AVATS visa application with financial documentation (€10,000–€12,000)."
    },
    {
      title: "Arrive in Ireland & Register for IRP",
      desc: "Fly to Ireland, settle into campus housing, complete orientation, and register with Immigration Service Delivery for your Irish Residence Permit."
    }
  ],
  table: {
    caption: "Indicative Hospitality Management Tuition Fees in Ireland (2026/27 Intake)",
    headers: ["Institution", "Degree Title", "NFQ Level", "Annual Tuition (Non-EU)"],
    rows: [
      ["Technological University Dublin (TU Dublin)", "BA in Hospitality Management", "Level 7 Ordinary", "€12,500 / year (3 Years)"],
      ["Technological University Dublin (TU Dublin)", "BSc (Hons) International Hospitality", "Level 8 Honours", "€13,500 / year (4 Years)"],
      ["Technological University Dublin (TU Dublin)", "MSc in Hospitality Management", "Level 9 Master's", "€13,500 (1 Year)"],
      ["University of Galway (Shannon College)", "BComm in International Hotel Management", "Level 8 Honours", "€16,000 (Yr 1 Tuition)"],
      ["University of Galway (Shannon College)", "BBS in International Hotel Management", "Level 8 Honours", "€15,640 / year (incl. levy)"],
      ["University of Galway", "Postgraduate Certificate in Hospitality Leadership", "Level 9 Award", "€9,000 – €11,000"]
    ]
  },
  faqs: [
    {
      q: "Is Ireland a good destination to study Hospitality and Hotel Management?",
      a: "Yes, Ireland is renowned worldwide for hospitality education. Institutions like Shannon College of Hotel Management (part of University of Galway) and TU Dublin offer internationally acclaimed programs that blend rigorous business finance and marketing with extensive luxury hotel internships, boasting an unbroken 100% employment rate on graduation day."
    },
    {
      q: "What is the course duration for Hospitality Management in Ireland?",
      a: "Undergraduate degrees typically take 3 to 4 years to complete, incorporating 12 to 21 months of structured paid industry internships. Postgraduate Master of Science (MSc) programs are completed in 1 year of full-time intensive study."
    },
    {
      q: "Can I study Hospitality Management in Ireland after Class 12?",
      a: "Yes, international students who have completed Class 12 or equivalent with an aggregate of 60% or higher from recognized boards can apply directly for undergraduate programs such as the BA in Hospitality Management, BSc in International Hospitality Management, or BComm in International Hotel Management."
    },
    {
      q: "What is the tuition fee for studying hospitality in Ireland in 2026/27?",
      a: "Non-EU tuition fees for 2026/27 include €12,500 per year for TU Dublin's BA Hospitality Management, €13,500 per year for BSc (Honours) International Hospitality Management, and €16,000 for Year 1 at Shannon College. TU Dublin's 1-year MSc in Hospitality Management is priced at €13,500. Living expenses average €7,500 to €14,000 per year depending on the study location."
    },
    {
      q: "What career roles and starting salaries do hospitality graduates achieve in Ireland?",
      a: "Graduates start as front-office supervisors, food and beverage managers, guest relations executives, revenue management associates, and event coordinators. Starting salaries typically range between €25,000 and €35,000 per year, rising quickly to €45,000 to €60,000+ for departmental managers and general managers."
    },
    {
      q: "How does EduHawk Worldwide Consultancy assist students in studying hospitality in Ireland?",
      a: "EduHawk Worldwide offers complete end-to-end guidance including university matching, interview preparation for Shannon College, SOP drafting, document verification, application submission, scholarship assistance, Irish student visa (Stamp 2) filing, and pre-departure accommodation briefings."
    }
  ]
};

export default function HospitalityManagementIreland() {
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
