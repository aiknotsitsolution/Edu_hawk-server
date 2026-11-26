import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../data/study_abroad/ireland/international_business.json";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/InternationalBusiness/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/InternationalBusiness/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/InternationalBusiness/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/InternationalBusiness/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/InternationalBusiness/University_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/InternationalBusiness/University_College_Cork.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/InternationalBusiness/University_College_Cork_2.webp";

const page = {
  name: "International Business in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/international-business",
  title: "Study International Business in Ireland | Top Universities, Fees & Visas 2026/27",
  description: "Complete guide to studying International Business in Ireland: undergraduate BSc/BA & postgraduate MSc degrees, top Irish business schools, 2026/27 tuition fees, Stamp 1G work permits, and multinational corporate career opportunities.",
  keywords: "Study International Business in Ireland, MSc International Business Ireland, BSc International Business with Languages, UCD International Business, UCC CUBS International Business, TU Dublin International Business, tuition fees Ireland 2026 2027, Stamp 1G post study work visa",
  "introTitle": "International Business in Ireland for Indian Students",
  "heroParas": [
    "Pursue an accredited degree in International Business in Ireland, mastering global market expansion, multinational corporate strategy, cross-border supply chains, and foreign trade. International students acquire cross-cultural leadership skills and access post-study work opportunities under the Irish Third Level Graduate Scheme, subject to official immigration regulations."
  ],
  overview: [
    "International Business programs in Ireland equip students with advanced expertise in cross-border trade, multinational financial strategy, global supply chains, international marketing, and cross-cultural organizational leadership. Across Ireland's leading universities, students can pursue undergraduate qualifications (such as the 3-to-4-year Bachelor of Commerce International or BSc in International Business with Languages) or intensive 1-year postgraduate degrees (such as the Master of Science in International Business or International Management).",
    "Many Irish international business curricula integrate an Erasmus+ foreign study exchange or accredited overseas corporate placement, combining academic business mastery with bilingual proficiency in French, German, Spanish, Italian, or Mandarin. Leading business schools hold elite international accreditations (AACSB, AMBA, EQUIS) and partner directly with multinationals across Dublin's Silicon Docks, Cork's biopharma corridor, and Shannon's aviation hub.",
    "Graduates qualify for Ireland's Third Level Graduate Scheme (Stamp 1G), granting 12 months of post-study work authorization for NFQ Level 8 Honours Bachelor graduates and 24 months (2 full years) for NFQ Level 9 Master's graduates to launch high-impact global corporate careers."
  ],
  level: "NFQ Level 8 (Honours Bachelor) & Level 9 (Postgraduate Master's)",
  crumb: "Business / International Business",
  stats: [
    {
      label: "Degree Framework",
      value: "NFQ Level 8 (UG) & Level 9 (PG)"
    },
    {
      label: "Program Duration",
      value: "3–4 Years (UG) / 1 Year (PG)"
    },
    {
      label: "Annual Tuition (2026/27)",
      value: "€13,500 – €24,500 / year"
    },
    {
      label: "Post-Study Work Visa",
      value: "1 Year (UG) / 2 Years (PG) Stamp 1G"
    }
  ],
  unis: [
    {
      name: "University College Dublin (UCD Smurfit / Quinn School of Business)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Ireland's leading business faculty holding Triple Crown accreditation (AACSB, AMBA, EQUIS). Offers the prestigious Bachelor of Commerce International and the internationally ranked MSc in International Business, connecting graduates directly to Fortune 500 European headquarters.",
      img: uniImg1
    },
    {
      name: "University College Cork (Cork University Business School - CUBS)",
      city: "Cork",
      state: "Munster, Ireland",
      desc: "Delivers the acclaimed BSc in International Business with Languages and the MSc in International Sustainable Business. Combines global market analysis with mandatory international study abroad terms and integrated multinational company projects.",
      img: uniImg2
    },
    {
      name: "Technological University Dublin (TU Dublin)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Offers modern, industry-focused programs including the Bachelor of Business (Honours) in International Business and the MSc in International Business, emphasizing applied global trade simulations, digital export marketing, and corporate internships.",
      img: uniImg3
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Ireland",
      title: "Why Study International Business in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Pursuing an International Business degree in Ireland connects students to the heart of European commerce and multinational corporate headquarters."
          ]
        },
        {
          t: "ul",
          items: [
            "Global Multinational Nexus: Ireland serves as the European headquarters for Google, Meta, Apple, Pfizer, Microsoft, LinkedIn, and Stripe, generating unprecedented demand for cross-border business talent.",
            "English-Speaking EU Member: Following Brexit, Ireland is the primary native English-speaking economy within the European Union, offering unrestricted commercial access to the EU Single Market.",
            "Integrated Foreign Language & Exchange: Many Irish degrees combine commerce studies with foreign language fluency and structured Erasmus+ academic semesters across Europe, North America, or Asia.",
            "Applied Cross-Border Case Studies: Curricula incorporate live global consulting projects, international supply chain modeling, export strategy simulations, and trade policy workshops.",
            "Flexible Degree Pathways: Students can enroll at undergraduate (NFQ Level 8 Bachelor) or postgraduate (NFQ Level 9 Master's) levels, with conversion routes available for non-business bachelor's degree holders.",
            "Stamp 1G Post-Study Work Scheme: Honours Bachelor graduates gain 1 year, while Master's graduates gain 2 years of unrestricted employment authorization in Ireland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Tracks",
      title: "Undergraduate & Postgraduate Degree Pathways",
      groups: [
        {
          t: "p",
          items: [
            "Higher education institutions in Ireland offer recognized international business credentials across multiple academic levels:",
            "Undergraduate Bachelor Degrees (NFQ Level 8): 3-to-4-year honours programs including the Bachelor of Business in International Business, Bachelor of Commerce International, and BA in International Business and Languages. They cover global economics, international marketing, cross-cultural management, and trade logistics.",
            "Postgraduate Master's Degrees (NFQ Level 9): 1-year full-time intensive programs including the MSc in International Business, MSc in Global Business Strategy, and MSc in International Management. These advanced degrees emphasize multinational strategic planning, cross-border mergers and acquisitions, emerging market dynamics, and global supply chain resilience.",
            "Postgraduate Diplomas (NFQ Level 9): Specialized 1-year conversion credentials for professionals seeking to reorient their careers into international commerce and export management."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Entry Criteria",
      title: "Eligibility Criteria for International Business in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admissions requirements vary based on the degree level, university ranking, and applicant background:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate (Bachelor's Entry): Successful completion of Higher Secondary School Certificate (Class 12) from CBSE, CISCE, or state boards with an aggregate of 70% to 85%. Minimum grade in mathematics (typically 60%+ in Class 10 or 12) is standard.",
            "Postgraduate (Master's Entry): A recognized 3-to-4-year Bachelor's degree in business, economics, engineering, humanities, or social sciences with an aggregate of 60% to 65% (Second Class Honours 2.1 or 2.2). Many MSc programs welcome non-business graduates as conversion applicants.",
            "English Language Test Scores: Non-native English applicants require IELTS Academic 6.5 overall (minimum 6.0 in each sub-band), TOEFL iBT 88–92, or PTE Academic 61–65.",
            "Work Experience: Relevant corporate experience is not mandatory for MSc International Business admissions, although professional internships significantly strengthen candidate profiles."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Application Guide",
      title: "Application & Documentation Checklist",
      groups: [
        {
          t: "p",
          items: [
            "International applicants must compile and upload verified digital files through institutional direct application systems:"
          ]
        },
        {
          t: "ul",
          items: [
            "Official Class 10 and Class 12 certificates and mark sheets (for undergraduate applicants).",
            "Bachelor's degree certificate and semester-by-semester official transcripts (for postgraduate applicants).",
            "Valid International Passport with at least 12 months validity.",
            "English Language proficiency certificate (IELTS, TOEFL iBT, or PTE Academic).",
            "Well-articulated Statement of Purpose (SOP) outlining career aspirations in global trade, program alignment, and rationale for choosing Ireland.",
            "Two Letters of Recommendation (LORs) from academic professors or professional supervisors.",
            "Curriculum Vitae (CV) showcasing academic achievements, leadership initiatives, and international exposure."
          ]
        }
      ]
    },
    {
      slot: "cost",
      eyebrow: "Tuition & Living",
      title: "Cost of Studying International Business in Ireland (2026/27 Intake)",
      groups: [
        {
          t: "p",
          items: [
            "Tuition and living costs depend on program level, duration, and institution location:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate Tuition Fees: Non-EU tuition fees for undergraduate international business degrees range from €13,500 to €22,500 per academic year.",
            "Postgraduate Tuition Fees: 1-year MSc in International Business tuition fees range from €14,500 to €24,500 for the full program.",
            "Living Costs (Dublin): Budget approximately €1,000 to €1,400 monthly (€10,000 to €14,000 per academic year) for student accommodation, food, transport, and utilities.",
            "Living Costs (Regional Hubs): In cities such as Cork, Galway, and Limerick, student living expenses average €800 to €1,100 per month (€8,000 to €11,000 per year).",
            "Immigration & Health Insurance: €300 annual fee for the Irish Residence Permit (IRP) card plus private health insurance (€150 to €350 per year).",
            "Part-Time Student Work: Non-EU students with Stamp 2 visas can work up to 20 hours per week during term time and 40 hours per week during vacations, earning at least the Irish minimum wage of €13.50 per hour."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Quality Standards",
      title: "Accreditation & Qualifications Framework (NFQ)",
      groups: [
        {
          t: "p",
          items: [
            "International business programs in Ireland undergo statutory quality validation through Quality and Qualifications Ireland (QQI):"
          ]
        },
        {
          t: "ul",
          items: [
            "NFQ Level 8 vs Level 9: Undergraduate honours degrees are placed at NFQ Level 8 (3–4 years, 180–240 ECTS credits). Master of Science programs are placed at NFQ Level 9 (1 year, 90 ECTS credits).",
            "Triple Crown International Accreditations: UCD Smurfit School and Trinity Business School hold Triple Crown status (AACSB, AMBA, EQUIS). DCU Business School and CUBS hold AACSB accreditation.",
            "Professional Global Affiliations: Programs align with international trade bodies, including the Chartered Institute of Marketing (CIM) and the Irish Exporters Association (IEA).",
            "ECTS Credit Mobility: Facilitates worldwide credential recognition by universities, multinational corporate employers, and international credential evaluators like WES."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Salaries",
      title: "Career Opportunities & Salary Expectations in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of Irish International Business programs enter a vibrant job market driven by Ireland's status as a global export and tech capital:"
          ]
        },
        {
          t: "ul",
          items: [
            "In-Demand Corporate Roles: International Business Development Manager, Global Trade & Customs Analyst, Export Compliance Officer, Cross-Border Supply Chain Coordinator, Digital Marketing Strategist, Management Consultant, and Global Account Executive.",
            "Starting Salary Packages: Entry-level gross annual salaries for international business graduates typically range from €32,000 to €45,000. Experienced professionals and corporate strategy consultants command €50,000 to €65,000+.",
            "Stamp 1G Post-Study Work Scheme: Honours Bachelor graduates receive 1 year and Master's graduates receive 2 years of full-time, unrestricted employment authorization in Ireland, paving the way toward Critical Skills Employment Permits (CSEP).",
            "Global Mobility: Irish business credentials allow seamless transition into corporate roles across the European Union, UK, Middle East, and North America."
          ]
        }
      ]
    }
  ],
  steps: [
    {
      title: "Choose Degree Level & Specialization",
      desc: "Select between an undergraduate Bachelor of Commerce International / BSc or an intensive 1-year postgraduate MSc in International Business."
    },
    {
      title: "Confirm Academic & Language Eligibility",
      desc: "Verify your Class 12 aggregate (70%–85%) or Bachelor's degree marks (60%–65%), alongside mathematics prerequisites."
    },
    {
      title: "Undertake English Proficiency Exam",
      desc: "Achieve the required score in IELTS Academic (6.5 overall with 6.0 in each band), TOEFL iBT (88+), or PTE Academic (61+)."
    },
    {
      title: "Draft SOP & Gather Academic References",
      desc: "Write a compelling Statement of Purpose outlining your international career vision and secure 2 academic or professional recommendation letters."
    },
    {
      title: "Submit University Applications",
      desc: "Complete your online application through university international admissions portals ahead of institutional cutoffs."
    },
    {
      title: "Accept Offer & Pay Deposit",
      desc: "Review your acceptance letter conditions and wire the required tuition deposit to secure your university place."
    },
    {
      title: "Apply for Irish Student Visa (Stamp 2)",
      desc: "Prepare your AVATS visa application, proof of tuition payment, private medical insurance, and required living sustenance funds (€10,000–€12,000)."
    },
    {
      title: "Arrive in Ireland & Register IRP",
      desc: "Travel to Ireland, arrange student accommodation, attend campus orientation, and register with Immigration Service Delivery for your Irish Residence Permit."
    }
  ],
  table: {
    caption: "Indicative International Business Tuition Fees in Ireland (2026/27 Intake)",
    headers: ["Institution", "Degree Title", "NFQ Level", "Annual Tuition (Non-EU)"],
    rows: [
      ["University College Dublin (UCD)", "MSc in International Business", "Level 9 Master's", "€22,500 – €24,500 (1 Year)"],
      ["University College Cork (CUBS)", "BSc International Business with Languages", "Level 8 Honours", "€21,700 / year (4 Years)"],
      ["University College Cork (CUBS)", "MSc in International Sustainable Business", "Level 9 Master's", "€18,500 (1 Year)"],
      ["Technological University Dublin (TU Dublin)", "Bachelor of Business (Hons) - Int'l Business", "Level 8 Honours", "€13,500 / year (3–4 Years)"],
      ["Technological University Dublin (TU Dublin)", "MSc in International Business", "Level 9 Master's", "€14,500 (1 Year)"],
      ["University of Galway", "MSc in International Management", "Level 9 Master's", "€18,500 (1 Year)"]
    ]
  },
  faqs: [
    {
      q: "Is Ireland a good destination to study International Business?",
      a: "Yes, Ireland is an exceptional destination for studying International Business. It is the primary native English-speaking economy in the European Union and hosts European headquarters for over 1,000 global multinationals, providing international students with unmatched exposure to global trade, digital commercial strategy, and cross-border corporate internships."
    },
    {
      q: "What is the duration of International Business degrees in Ireland?",
      a: "Undergraduate Bachelor degrees (such as the Bachelor of Commerce International or BSc in International Business with Languages) typically take 3 to 4 years to complete, often including an Erasmus+ foreign study semester. Postgraduate Master's degrees (such as the MSc in International Business) are full-time intensive programs completed in 1 year (12 months)."
    },
    {
      q: "What are the core eligibility requirements for International Business in Ireland?",
      a: "For undergraduate entry, applicants require a recognized Class 12 certificate with a 70% to 85% aggregate and a minimum standard in mathematics. For postgraduate MSc programs, applicants require a recognized Bachelor's degree (minimum 60%–65% aggregate) in business or related fields. International applicants must also demonstrate English proficiency through IELTS (6.5), TOEFL iBT (88+), or PTE (61+)."
    },
    {
      q: "How much does it cost to study International Business in Ireland in 2026/27?",
      a: "Annual non-EU tuition fees for undergraduate programs range from €13,500 to €22,500 per year. Postgraduate 1-year MSc tuition fees range from €14,500 to €24,500. Additionally, students should budget approximately €8,000 to €14,000 per academic year for living expenses depending on whether they study in Dublin or regional cities."
    },
    {
      q: "What post-study work visa permissions do graduates receive in Ireland?",
      a: "Under Ireland's Third Level Graduate Scheme (Stamp 1G), graduates of NFQ Level 8 Honours Bachelor programs receive 12 months (1 year) of unrestricted full-time employment permission. Graduates of NFQ Level 9 Master's programs receive 24 months (2 full years) of full-time employment authorization to secure roles qualifying for long-term employment permits."
    },
    {
      q: "How does EduHawk Worldwide Consultancy assist students in studying in Ireland?",
      a: "EduHawk Worldwide provides comprehensive end-to-end support including personalized university selection, course matching, SOP drafting, document verification, application submission, scholarship guidance, Irish student visa (Stamp 2) filing, and pre-departure accommodation briefings."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "University_College_Dublin.webp": uniImg1,
  "University_College_Cork.webp": uniImg2,
  "University_College_Cork_2.webp": uniImg3,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function InternationalBusinessIreland() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg
  };

  return (
    <AbroadCoursePage
      page={cmsPage}
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
