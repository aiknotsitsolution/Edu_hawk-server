import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/BBS/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/BBS/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/BBS/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/BBS/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/BBS/University_of_Galway.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/BBS/Trinity_College_Dublin.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/BBS/Trinity_College_Dublin_2.webp";

const page = {
  name: "BBS in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/bbs",
  title: "Study Bachelor of Business Studies (BBS) in Ireland | Fees, Colleges & Visas 2026/27",
  description: "Complete guide to studying Bachelor of Business Studies (BBS) in Ireland: top universities, DCU & Galway business schools, INTRA internships, NFQ Level 8 degrees, 2026/27 tuition fees, and 1-year Stamp 1G post-study work visa.",
  keywords: "Study BBS in Ireland, Bachelor of Business Studies Ireland, DCU BBS, Shannon College Hotel Management Galway, Trinity BBS, BBS tuition fees Ireland 2026 2027, undergraduate business Ireland, INTRA placement Ireland, Stamp 1G visa BBS",
  introTitle: "BACHELOR OF BUSINESS STUDIES IN IRELAND",
  heroParas: [
    "Ireland provides an internationally acclaimed pathway for students pursuing a Bachelor of Business Studies (BBS), merging rigorous commerce education with corporate work placements across Europe's leading commercial capital."
  ],
  overview: [
    "A Bachelor of Business Studies (BBS) in Ireland is a premier NFQ Level 8 Honours undergraduate degree designed to provide students with a comprehensive foundation across management, marketing, financial accounting, managerial economics, corporate finance, and business analytics. Across leading Irish universities and technological universities, BBS curricula combine rigorous foundational business theory with specialized final-year tracks and integrated cooperative work placements (INTRA internships).",
    "Depending on the institution, undergraduate business programs are awarded as Bachelor of Business Studies (BBS), Bachelor of Business (Honours), Bachelor of Commerce (BComm), or specialized joint honours such as Business Studies International. Renowned faculties such as DCU Business School, Shannon College of Hotel Management at University of Galway, and Trinity Business School partner directly with Fortune 500 corporations headquartered in Dublin, Cork, and Shannon.",
    "Graduates holding an accredited NFQ Level 8 BBS degree qualify for Ireland's Third Level Graduate Scheme (Stamp 1G), receiving 12 months of unrestricted post-study employment permission to launch high-trajectory business careers throughout the European Union."
  ],
  level: "NFQ Level 8 (Honours Bachelor Degree)",
  crumb: "Business / BBS",
  stats: [
    {
      label: "Degree Framework",
      value: "NFQ Level 8 Honours Bachelor"
    },
    {
      label: "Course Duration",
      value: "3 to 4 Years (Full-Time)"
    },
    {
      label: "Annual Tuition (2026/27)",
      value: "€15,640 – €22,580 / year"
    },
    {
      label: "Post-Study Work Visa",
      value: "1 Year Stamp 1G Graduate Scheme"
    }
  ],
  unis: [
    {
      name: "Dublin City University (DCU Business School)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Home to Ireland's flagship Bachelor of Business Studies (BBS) program, accredited by AACSB and AMBA. Features DCU's celebrated INTRA internship scheme providing up to 12 months of structured, paid enterprise experience with global corporations.",
      img: uniImg2
    },
    {
      name: "University of Galway (Shannon College of Hotel Management)",
      city: "Shannon / Galway",
      state: "Connacht / Munster, Ireland",
      desc: "Delivers the internationally prestigious BBS in International Hotel Management. Boasts a 100% graduate employment record on graduation day, combining intensive hotel operations with international professional internships worldwide.",
      img: uniImg1
    },
    {
      name: "Trinity College Dublin (Trinity Business School)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Holds Triple Crown accreditation (AACSB, AMBA, EQUIS). Delivers the Bachelor in Business Studies (BBS) and the interdisciplinary Business, Economic and Social Studies (BESS) degree, connecting students to Dublin's Silicon Docks.",
      img: uniImg3
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Ireland",
      title: "Why Study Bachelor of Business Studies in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Pursuing a BBS degree in Ireland equips international undergraduates with world-class academic knowledge and direct corporate connections across the European Union."
          ]
        },
        {
          t: "ul",
          items: [
            "Robust Business Ecosystem: Ireland hosts European headquarters for technology, finance, consulting, life sciences, and retail multinational enterprises, creating exceptional internship and graduate employment opportunities.",
            "Comprehensive Foundational Training: Students master the entire corporate lifecycle—including financial accounting, marketing dynamics, microeconomics, corporate governance, organizational psychology, and supply chains.",
            "Integrated Work Placements (INTRA): Programs frequently incorporate 6 to 12 months of fully accredited, paid enterprise internships, ensuring graduates enter the employment market with proven hands-on experience.",
            "Specialization Flexibility: After establishing core business competency, students can tailor their degree in fields such as International Business, Hospitality Management, Corporate Finance, Human Resources, or Digital Marketing.",
            "Multicultural Cross-Cultural Development: Studying alongside peers from over 100 nationalities cultivates essential cross-cultural communication, emotional intelligence, and executive team leadership.",
            "Global Post-Study Pathways: NFQ Level 8 BBS graduates easily articulate into elite European Master of Science (MSc) programs, MBA degrees, or immediate corporate employment via Stamp 1G."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Tracks",
      title: "Popular BBS & Undergraduate Business Options in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish universities offer several specialized iterations of the Bachelor of Business Studies framework:",
            "Bachelor of Business Studies (BBS): The core 3-to-4-year honours degree encompassing strategic management, commercial law, corporate financial management, business analytics, and marketing strategy.",
            "BBS in International Business: Emphasizes international marketing, multinational risk assessment, international trade economics, and foreign language fluency, often featuring a semester abroad under the Erasmus+ initiative.",
            "BBS in International Hotel Management: Offered through world-renowned faculties like Shannon College of Hotel Management (University of Galway), combining classical business administration with high-end hospitality operations and international corporate placements.",
            "Bachelor of Commerce (BComm): The parallel university qualification providing comprehensive academic grounding in commerce, economics, audit, taxation, and general management."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Entry Standards",
      title: "Eligibility Criteria for BBS Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admission to Irish BBS programs is competitive, evaluated on secondary school academic performance and language readiness."
          ]
        },
        {
          t: "ul",
          items: [
            "Secondary School Completion: Successful completion of Class 12 (Higher Secondary School Certificate) from recognized boards such as CBSE, CISCE, or State Boards, or equivalent international qualifications (IB Diploma, Cambridge A-Levels).",
            "Minimum Grade Requirements: General minimum aggregate of 70% to 85% across top subjects in Class 12, depending on the university and program competitiveness.",
            "Mathematics Requirement: A minimum standard in Class 10 or Class 12 Mathematics (typically 60% or Grade C/B) is mandatory due to quantitative requirements in economics, accounting, and business statistics.",
            "English Language Competency: Standard minimum scores for non-native speakers are IELTS Academic 6.5 overall (no individual band below 6.0), TOEFL iBT 88–90, or PTE Academic 61–63.",
            "Country-Specific Benchmarks: Indian board students with high marks in Class 12 English (80%+) may be eligible for English test waivers at designated universities."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Application Guide",
      title: "BBS Application & Documentation Process",
      groups: [
        {
          t: "p",
          items: [
            "Applicants must submit verified digital documentation through institutional online portals or designated representative systems:"
          ]
        },
        {
          t: "ul",
          items: [
            "Class 10 and Class 12 official mark sheets and school-leaving passing certificates.",
            "Valid International Passport with minimum 12 months validity beyond expected intake date.",
            "Official academic transcripts with certified English translations if originally issued in regional languages.",
            "Standardized English proficiency test scorecard (IELTS, TOEFL, or PTE Academic).",
            "Well-crafted Statement of Purpose (SOP) articulating passion for business studies, university selection rationale, and professional ambitions.",
            "Two Letters of Recommendation (LORs) from secondary school academic instructors or department heads.",
            "Detailed CV highlighting leadership roles, debate societies, school enterprise initiatives, or community work."
          ]
        }
      ]
    },
    {
      slot: "cost",
      eyebrow: "Tuition & Budget",
      title: "Cost of Studying BBS in Ireland (2026/27 Intake)",
      groups: [
        {
          t: "p",
          items: [
            "Budgeting for a BBS degree in Ireland encompasses annual tuition fees, student levies, housing, food, transportation, and health coverage."
          ]
        },
        {
          t: "ul",
          items: [
            "Annual Tuition Fees: Non-EU tuition fees for BBS and commerce degrees range from €15,640 to €22,580 per year for 2026/27 intakes.",
            "Student Contribution & Capitation Levies: Universities charge small annual student center and sport levies ranging from €210 to €300.",
            "Monthly Living Costs (Dublin): Estimated at €1,000 to €1,400 per month (€10,000 to €14,000 per academic year) for shared accommodation, groceries, and travel.",
            "Monthly Living Costs (Galway / Cork / Limerick): Approximately €800 to €1,100 per month (€8,000 to €11,000 per academic year), offering substantial savings over Dublin.",
            "Immigration & Healthcare Fees: €300 annual fee for the Irish Residence Permit (IRP) card plus private international student health insurance (€150 to €350 per year).",
            "Part-Time Work Permission: Non-EU students hold Stamp 2 student visas permitting up to 20 hours per week of paid employment during semester terms and 40 hours per week during vacation months at the Irish minimum wage (€13.50/hour)."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Degree Quality",
      title: "BBS Accreditation & Quality Standards",
      groups: [
        {
          t: "p",
          items: [
            "Degrees awarded by Irish universities undergo rigorous quality oversight ensuring international academic and career mobility:"
          ]
        },
        {
          t: "ul",
          items: [
            "National Framework of Qualifications (NFQ): The BBS is categorized as an NFQ Level 8 Honours Bachelor Degree (typically 180 to 240 ECTS credits).",
            "International Business School Accreditations: Leading faculties possess prestigious accreditations from AACSB (USA), AMBA (UK), and EQUIS (Europe).",
            "Professional Body Exemptions: Most BBS programs grant direct exemptions from foundational examination papers for ACCA, Chartered Accountants Ireland, CIMA, and the Marketing Institute of Ireland (MII).",
            "Global Portability: Recognized globally by employers, credential evaluation services (such as WES in Canada/USA), and international graduate business admissions."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "BBS Graduate Jobs, Career Prospects & Salaries",
      groups: [
        {
          t: "p",
          items: [
            "A Bachelor of Business Studies prepares graduates for agile corporate and commercial roles across multinational and domestic enterprises:"
          ]
        },
        {
          t: "ul",
          items: [
            "In-Demand Corporate Roles: Business Development Executive, Commercial Sales Associate, Digital Marketing Specialist, Operations Coordinator, Junior Financial Analyst, HR Associate, Customer Success Manager, and Hotel Operations Supervisor.",
            "Salary Expectations: Starting gross salaries for BBS graduates in Ireland typically fall between €28,000 and €40,000 per year, with fast-track promotion potential after completing the first year of employment.",
            "Third Level Graduate Scheme (Stamp 1G): Level 8 BBS graduates enjoy 12 months of full-time, unrestricted employment authorization in Ireland, providing an established route to Critical Skills or General Employment Permits.",
            "Postgraduate Progression: Many BBS graduates proceed to specialized MSc programs in Management, FinTech, Business Analytics, or Marketing before stepping into senior management positions."
          ]
        }
      ]
    }
  ],
  steps: [
    {
      title: "Select BBS Specialization Track",
      desc: "Identify whether your career path aligns with General Management, International Business, Hospitality & Hotel Management, or Accounting."
    },
    {
      title: "Verify Class 12 & Mathematics Eligibility",
      desc: "Check university grade benchmarks (typically 70%–85% aggregate) and verify meeting mathematics requirements in Class 10/12."
    },
    {
      title: "Achieve English Proficiency Scores",
      desc: "Prepare and sit for IELTS Academic (minimum 6.5 with no band below 6.0), TOEFL iBT (88+), or PTE Academic (61+)."
    },
    {
      title: "Draft SOP & Gather Recommendations",
      desc: "Compose an engaging Statement of Purpose and obtain academic recommendation letters from your secondary school instructors."
    },
    {
      title: "Submit Online University Applications",
      desc: "Apply through the official university application portals prior to international application cutoffs."
    },
    {
      title: "Receive Offer & Pay Deposit",
      desc: "Review your acceptance letter conditions and remit the required tuition fee deposit to reserve your seat in the program."
    },
    {
      title: "Apply for Irish Student Visa (Stamp 2)",
      desc: "Organize AVATS online application, fee receipts, private health insurance, and documentation proving required living sustenance funds."
    },
    {
      title: "Arrive in Ireland & Register IRP",
      desc: "Fly to Ireland, secure accommodation, complete campus orientation, and schedule your appointment for Irish Residence Permit (IRP) card registration."
    }
  ],
  table: {
    caption: "Published Tuition Fees for BBS & Undergraduate Business in Ireland (2026/27 Intake)",
    headers: ["Institution", "Degree Title", "NFQ Level", "Annual Tuition (Non-EU)"],
    rows: [
      ["Dublin City University (DCU)", "Bachelor of Business Studies (BBS)", "Level 8 Honours", "€17,000 / year"],
      ["University of Galway (Shannon College)", "BBS in International Hotel Management", "Level 8 Honours", "€15,640 / year (incl. levy)"],
      ["Trinity College Dublin (TCD)", "Bachelor in Business Studies (BBS) / BESS", "Level 8 Honours", "€22,580 / year"],
      ["University College Cork (UCC)", "Bachelor of Commerce (BComm Hons)", "Level 8 Honours", "€21,700 / year (+ €210 levy)"],
      ["University of Limerick (UL)", "Bachelor of Business Studies (BBS)", "Level 8 Honours", "€16,500 – €18,500 / year"],
      ["Technological University Dublin (TU Dublin)", "Bachelor of Business (Honours)", "Level 8 Honours", "€13,500 / year"]
    ]
  },
  faqs: [
    {
      q: "Can I study a Bachelor of Business Studies (BBS) in Ireland after Class 12?",
      a: "Yes. International students who have completed Class 12 (Higher Secondary School Certificate from CBSE, CISCE, or state boards) or international equivalents can apply directly for undergraduate BBS programs in Ireland, provided they fulfill the university's academic cutoffs, mathematics prerequisites, and English language proficiency requirements."
    },
    {
      q: "What is the tuition fee for BBS in Ireland for the 2026/27 academic year?",
      a: "Published tuition fees for international non-EU students for 2026/27 include €17,000 per year for DCU's Bachelor of Business Studies, €15,640 per year for University of Galway's BBS in International Hotel Management, and €22,580 per year for Trinity College Dublin's BBS/BESS courses. Living expenses average €8,000 to €14,000 annually depending on whether you live in Dublin or regional cities."
    },
    {
      q: "What are the core admission requirements for BBS in Ireland?",
      a: "Requirements include a completed Class 12 certificate with a 70% to 85% aggregate, certified mark sheets, a valid passport, proof of English proficiency (IELTS 6.5 or equivalent), a compelling Statement of Purpose, two academic letters of recommendation, and satisfactory grades in secondary school mathematics."
    },
    {
      q: "What kind of jobs and starting salaries can BBS graduates expect in Ireland?",
      a: "Graduates secure roles as business development executives, marketing associates, sales representatives, operations analysts, HR specialists, and hotel management executives. Starting annual gross salaries generally range between €28,000 and €40,000, with strong upward mobility in multinational firms."
    },
    {
      q: "What post-study work visa rights does an NFQ Level 8 BBS degree offer?",
      a: "Under the Irish Third Level Graduate Scheme (Stamp 1G), graduates of an NFQ Level 8 Honours Bachelor degree are granted 12 months (1 year) of unrestricted full-time employment permission in Ireland. This permit facilitates finding a career position that qualifies for longer-term Irish employment permits."
    },
    {
      q: "How does EduHawk Worldwide Consultancy support students applying for BBS in Ireland?",
      a: "EduHawk Worldwide provides dedicated end-to-end advisory services: university and course shortlisting, application filing, SOP enhancement, scholarship guidance, Irish student visa (Stamp 2) documentation, and pre-departure accommodation and banking support."
    }
  ]
};

export default function BBSIreland() {
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
