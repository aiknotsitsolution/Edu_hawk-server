import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/MarketingManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/MarketingManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/MarketingManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/MarketingManagement/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/MarketingManagement/Trinity_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/MarketingManagement/Trinity_College_Dublin_2.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/MarketingManagement/Technological_University_Dublin.webp";

const page = {
  name: "Marketing Management in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/marketing-management",
  title: "Study Marketing Management in Ireland | Fees, Universities & Visas 2026/27",
  description: "Complete guide to studying Marketing Management in Ireland: top business schools, undergraduate BSc & postgraduate MSc in Digital Marketing, 2026/27 tuition fees, Stamp 1G graduate work visa, and Silicon Docks corporate careers.",
  keywords: "Study Marketing Management in Ireland, MSc Marketing Ireland, Digital Marketing Courses Ireland, Trinity MSc Marketing, TU Dublin Marketing, University of Galway Marketing Management, Marketing tuition fees Ireland 2026 2027, Stamp 1G post study work visa",
  introTitle: "MARKETING MANAGEMENT COURSES IN IRELAND",
  heroParas: [
    "Ireland is Europe's premier technology and digital commercial capital, offering world-class Marketing Management degrees deeply integrated with multinational brand headquarters across Dublin's Silicon Docks."
  ],
  overview: [
    "Marketing Management in Ireland combines cutting-edge consumer psychology, brand strategy, digital campaign execution, omnichannel retail operations, and data analytics. Irish higher education institutions deliver both 3-to-4-year undergraduate degrees (such as the Bachelor of Business in Marketing Management) and 1-year intensive postgraduate degrees (such as the Master of Science in Marketing, Digital Marketing, or Management & Marketing).",
    "Curricula bridge creative brand storytelling with quantitative marketing analytics, marketing automation, SEO/SEM performance marketing, and social media strategy. Leading business faculties hold prestigious global accreditations (AACSB, AMBA, EQUIS) and direct accreditations from the Marketing Institute of Ireland (MII) and the Digital Marketing Institute (DMI), ensuring industry-standard certifications.",
    "Non-EU international graduates qualify for Ireland's Third Level Graduate Scheme (Stamp 1G), granting 12 months of post-study employment permission for NFQ Level 8 Honours Bachelor graduates and 24 months (2 full years) for NFQ Level 9 Master's graduates to build high-trajectory corporate careers across Europe."
  ],
  level: "NFQ Level 8 (Honours Bachelor) & Level 9 (Postgraduate Master's)",
  crumb: "Business / Marketing Management",
  stats: [
    {
      label: "Qualification Levels",
      value: "NFQ Level 8 (UG) & Level 9 (PG)"
    },
    {
      label: "Course Duration",
      value: "3–4 Years (UG) / 1 Year (PG)"
    },
    {
      label: "Annual Tuition (2026/27)",
      value: "€13,500 – €22,300 / year"
    },
    {
      label: "Post-Study Work Visa",
      value: "1 Year (UG) / 2 Years (PG) Stamp 1G"
    }
  ],
  unis: [
    {
      name: "Trinity College Dublin (Trinity Business School)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Holds prestigious Triple Crown accreditation (AACSB, AMBA, EQUIS). Delivers the world-ranked MSc in Marketing, emphasizing international marketing strategy, consumer insights, digital analytics, and brand communications within Dublin's multinational tech corridor.",
      img: uniImg1
    },
    {
      name: "Technological University Dublin (TU Dublin)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Offers the Bachelor of Business (Honours) with a specialized Marketing Management stream, alongside a popular 1-year conversion MSc in Marketing for non-business graduates, featuring affordable 2026/27 non-EU tuition of €13,500 per year.",
      img: uniImg3
    },
    {
      name: "University of Galway (J.E. Cairnes School of Business & Economics)",
      city: "Galway",
      state: "Connacht, Ireland",
      desc: "Delivers the acclaimed MSc in Marketing Management (€20,890/year) and MSc in Digital Marketing, combining rigorous marketing research with live client consulting practicums and professional accreditation through MII.",
      img: uniImg2
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Ireland",
      title: "Why Study Marketing Management in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Studying marketing management in Ireland connects students directly with global brands, digital advertising networks, and European commercial leaders."
          ]
        },
        {
          t: "ul",
          items: [
            "Silicon Docks Tech Ecosystem: Home to European headquarters for Google, Meta, TikTok, LinkedIn, HubSpot, and Salesforce, placing Ireland at the global forefront of digital marketing and advertising technology.",
            "Applied Data-Driven Curriculum: Programs move beyond traditional advertising into predictive consumer analytics, marketing automation, attribution modeling, CRM management, and AI in digital marketing.",
            "Industry Certifications: Curricula incorporate built-in exemptions and certifications from recognized bodies including the Marketing Institute of Ireland (MII), Digital Marketing Institute (DMI), and Google Marketing Platform.",
            "Conversion Pathways: Renowned 1-year MSc in Marketing programs welcome graduates from engineering, humanities, sciences, and arts who wish to transition into commercial marketing careers.",
            "Universal Industry Demand: Marketing graduates are hired across technology, FMCG, retail, pharmaceuticals, fintech, creative agencies, and public relations.",
            "Stamp 1G Graduate Visa Scheme: Honours Bachelor graduates gain 1 year, and Master's graduates receive 2 full years of unrestricted full-time employment authorization in Ireland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Specializations",
      title: "Marketing Degree Levels & Core Specializations",
      groups: [
        {
          t: "p",
          items: [
            "Irish universities provide diverse marketing pathways tailored to undergraduate school leavers and postgraduate career advancers:",
            "Undergraduate Marketing Degrees (NFQ Level 8): 3-to-4-year programs including Bachelor of Business (Honours) in Marketing, Bachelor of Commerce (Marketing Major), and BSc in Marketing with Digital Media, providing foundational knowledge in buyer behaviour, market research, and campaign planning.",
            "Postgraduate Master's Degrees (NFQ Level 9): 1-year full-time degrees including MSc in Marketing Management, MSc in Digital Marketing, MSc in Strategic Brand Management, and MSc in Management & Marketing, focusing on corporate strategy, omnichannel growth, and marketing leadership.",
            "Core Functional Specializations: Brand Equity Management, Digital Analytics & Performance Media, Search Engine Optimization (SEO & SEM), Consumer Behaviour & Neuromarketing, International Marketing Communications, and Strategic Customer Relationship Management (CRM)."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for Marketing in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admissions standards evaluate academic performance, analytical capability, and English language communication:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate (Bachelor's Entry): Completion of Higher Secondary School Certificate (Class 12) from CBSE, CISCE, or state boards with an aggregate between 65% and 85%. Basic mathematics competency in Class 10 or 12 is required.",
            "Postgraduate (Master's Entry): A recognized 3-to-4-year Bachelor's degree with a minimum 60% aggregate (Second Class Honours 2.1 or 2.2). Several MSc programs accept graduates from non-business disciplines without prior marketing background.",
            "English Language Test Scores: Non-native English speakers must achieve IELTS Academic 6.5 overall (no individual band below 6.0), TOEFL iBT 88–90, or PTE Academic 61–63.",
            "Work Experience: Not mandatory for most MSc in Marketing programs, though prior internships in digital media, content creation, or sales enhance applicant competitiveness."
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
            "Applicants must assemble and submit certified digital dossiers through university international application portals:"
          ]
        },
        {
          t: "ul",
          items: [
            "Official Class 10 and Class 12 mark sheets and school-leaving certificates (for undergraduate applicants).",
            "Bachelor's degree passing certificate and consolidated transcripts (for postgraduate applicants).",
            "Valid International Passport with minimum 12 months validity.",
            "Standardized English Language proficiency scorecard (IELTS, TOEFL, or PTE Academic).",
            "Statement of Purpose (SOP) articulating passion for brand marketing, creative strategy, and reasons for choosing the Irish institution.",
            "Two Academic or Professional Letters of Recommendation (LORs).",
            "Detailed Curriculum Vitae (CV) emphasizing digital campaigns, portfolio work, social media management, or extracurricular leadership."
          ]
        }
      ]
    },
    {
      slot: "cost",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Marketing in Ireland (2026/27 Tuition & Living)",
      groups: [
        {
          t: "p",
          items: [
            "Total study expenditure includes international tuition fees, student contribution levies, accommodation, and living costs:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate Tuition Fees: Non-EU undergraduate marketing tuition ranges from €10,000 to €22,000 per academic year, with technological universities offering competitive rates around €13,500.",
            "Postgraduate Tuition Fees: 1-year full-time MSc in Marketing tuition fees range from €13,500 at TU Dublin to €20,890 at University of Galway and €22,300 at UCC.",
            "Living Costs (Dublin): Estimated at €1,000 to €1,400 per month (€10,000 to €14,000 per academic year) for shared accommodation, groceries, and travel.",
            "Living Costs (Galway / Cork / Limerick): Approximately €800 to €1,100 per month (€8,000 to €11,000 per year), offering substantial savings over capital city rents.",
            "Immigration & Health Insurance: €300 annual fee for the Irish Residence Permit (IRP) card plus private health insurance (€150 to €350 per year).",
            "Student Employment Rights: International non-EU students on Stamp 2 visas are legally permitted to work up to 20 hours per week during academic semesters and 40 hours per week during holidays, earning at least €13.50 per hour."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Degree Quality",
      title: "Accreditation & Professional Industry Recognition",
      groups: [
        {
          t: "p",
          items: [
            "Marketing degrees in Ireland are validated under the National Framework of Qualifications (NFQ) and backed by premier professional bodies:"
          ]
        },
        {
          t: "ul",
          items: [
            "NFQ Framework Alignment: Bachelor of Business degrees are placed at NFQ Level 8 (180–240 ECTS credits). Master of Science programs are placed at NFQ Level 9 (90 ECTS credits).",
            "Marketing Institute of Ireland (MII): Ireland's professional association for marketing practitioners, providing professional membership, continuous professional development (CPD), and career mentorship.",
            "Digital Marketing Institute (DMI): Select Irish university curricula align directly with DMI Certified Digital Marketing Professional (CDMP) standards.",
            "Triple Crown Business Schools: Trinity Business School and UCD Smurfit hold elite Triple Crown accreditation (AACSB, AMBA, EQUIS), placing them in the top 1% of business schools worldwide."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Marketing Career Opportunities & Salary Expectations",
      groups: [
        {
          t: "p",
          items: [
            "Marketing graduates enter a robust corporate landscape with expansive hiring across multinational tech brands and advertising agencies:"
          ]
        },
        {
          t: "ul",
          items: [
            "Key Career Profiles: Digital Marketing Specialist, Brand Strategy Associate, Performance Media Executive, SEO/SEM Specialist, Market Research Analyst, Content Marketing Manager, CRM Specialist, and Marketing Communications Officer.",
            "Starting Salary Packages: Entry-level marketing roles in Ireland generally offer gross annual salaries between €28,000 and €38,000, rising to €42,000–€55,000 for digital analytics and performance marketing specialists.",
            "Senior Executive Salaries: Experienced marketing managers and brand directors in Dublin regularly command €65,000 to €85,000+ per year.",
            "Stamp 1G Graduate Visa: 1-year (NFQ Level 8) or 2-year (NFQ Level 9) post-study work authorization enables graduates to gain critical European commercial experience and transition onto permanent employment permits."
          ]
        }
      ]
    }
  ],
  steps: [
    {
      title: "Identify Marketing Specialization Track",
      desc: "Choose between general marketing management, digital marketing, strategic brand management, or marketing analytics."
    },
    {
      title: "Check Academic Entry Benchmarks",
      desc: "Confirm Class 12 aggregate (65%–85%) for undergraduate or Bachelor's degree (60%–65%) for postgraduate admissions."
    },
    {
      title: "Appear for English Proficiency Test",
      desc: "Score minimum IELTS 6.5 (no sub-band below 6.0), TOEFL iBT 88+, or PTE Academic 61+."
    },
    {
      title: "Prepare Compelling SOP & Dossier",
      desc: "Craft a tailored Statement of Purpose highlighting your creative and analytical marketing ambitions, and secure two recommendation letters."
    },
    {
      title: "Submit Direct Applications Online",
      desc: "Apply through institutional international portals prior to published application deadlines."
    },
    {
      title: "Review Offer Letter & Wire Deposit",
      desc: "Accept your admission offer and pay the required tuition deposit to confirm your seat in the program."
    },
    {
      title: "Apply for Irish Student Visa (Stamp 2)",
      desc: "Submit your online AVATS visa application with tuition receipts, private medical insurance, and proof of required living funds (€10,000–€12,000)."
    },
    {
      title: "Arrive in Ireland & Register for IRP",
      desc: "Travel to Ireland, finalize student housing, attend campus orientation, and register with Immigration Service Delivery for your Irish Residence Permit."
    }
  ],
  table: {
    caption: "Indicative Marketing Management Tuition Fees in Ireland (2026/27 Intake)",
    headers: ["Institution", "Degree Title", "NFQ Level", "Annual Tuition (Non-EU)"],
    rows: [
      ["Technological University Dublin (TU Dublin)", "MSc in Marketing", "Level 9 Master's", "€13,500 (1 Year)"],
      ["Technological University Dublin (TU Dublin)", "Bachelor of Business (Hons) - Marketing", "Level 8 Honours", "€13,500 / year (4 Years)"],
      ["University of Galway", "MSc in Marketing Management", "Level 9 Master's", "€20,890 (incl. levy)"],
      ["University College Cork (CUBS)", "MSc in Management and Marketing", "Level 9 Master's", "€22,300 (1 Year)"],
      ["Trinity College Dublin (Trinity Business School)", "MSc in Marketing", "Level 9 Master's", "€22,500 – €24,000 (1 Year)"],
      ["Dublin City University (DCU Business School)", "MSc in Digital Marketing", "Level 9 Master's", "€17,000 – €18,500 (1 Year)"]
    ]
  },
  faqs: [
    {
      q: "Is Ireland a good destination to study Marketing Management?",
      a: "Yes, Ireland is an exceptional study destination for Marketing Management. Known as the Silicon Valley of Europe, Dublin is the European headquarters for Meta, Google, TikTok, LinkedIn, and HubSpot, providing marketing students with world-class curriculum, cutting-edge digital marketing tools, and direct networking opportunities with global multinational brands."
    },
    {
      q: "What is the duration of Marketing Management degrees in Ireland?",
      a: "Undergraduate Bachelor's degrees in marketing typically span 3 to 4 years of full-time study. Postgraduate Master of Science (MSc) degrees in Marketing, Digital Marketing, or Brand Management are intensive full-time programs completed in 1 year (12 months)."
    },
    {
      q: "Can I study Marketing Management in Ireland after Class 12?",
      a: "Yes, international students who have successfully completed Class 12 (Higher Secondary Certificate from CBSE, CISCE, or state boards) with an aggregate between 65% and 85% can apply directly for undergraduate Bachelor of Business or BSc in Marketing programs in Ireland."
    },
    {
      q: "How much does a Marketing Management course cost in Ireland in 2026/27?",
      a: "Published non-EU tuition fees for 2026/27 include €13,500 for TU Dublin's 1-year MSc in Marketing, €20,890 for University of Galway's MSc Marketing Management, and €22,300 for UCC's MSc Management and Marketing. Undergraduate tuition generally ranges from €10,000 to €22,000 per year. Student living costs average €8,000 to €14,000 per academic year."
    },
    {
      q: "What are the job opportunities and starting salaries for marketing graduates in Ireland?",
      a: "Graduates secure roles as digital marketing specialists, brand managers, social media strategists, market research analysts, and performance media executives. Starting salaries generally range from €28,000 to €38,000 per year, with experienced digital and analytics specialists earning €45,000 to €60,000+."
    },
    {
      q: "How can EduHawk Worldwide Consultancy help me study marketing in Ireland?",
      a: "EduHawk Worldwide offers complete end-to-end guidance including university shortlisting, course matching, Statement of Purpose (SOP) drafting, application tracking, scholarship advisory, Irish student visa (Stamp 2) filing, and pre-departure accommodation assistance."
    }
  ]
};

export default function MarketingManagementIreland() {
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
