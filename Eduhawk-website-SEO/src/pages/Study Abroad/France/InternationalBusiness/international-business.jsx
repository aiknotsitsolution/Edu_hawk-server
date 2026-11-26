import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/InternationalBusiness/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/InternationalBusiness/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/InternationalBusiness/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/InternationalBusiness/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/InternationalBusiness/University_1.webp";
import uniImg2 from "../../../../Images/Abroad/France/InternationalBusiness/ESSEC_Business_School.webp";
import uniImg3 from "../../../../Images/Abroad/France/InternationalBusiness/ESCP_Business_School.webp";
import cmsData from "../../../../data/study_abroad/france/international_business.json";

const page = {
  name: "International Business in France",
  country: "France",
  slug: "international-business",
  title: "Study International Business in France for Indian Students | EduHawk",
  description: "Complete guide to studying International Business in France: Top French business schools (IÉSEG, ESSEC, ESCP), Bachelor (BIB) and Master (MIB / MSc) programs, tuition fees, eligibility, and global career opportunities.",
  keywords: "Study International Business in France, International Business in France for Indian Students, International Business Courses in France, Bachelor’s Degree in International Business in France, Master’s in International Business in France, Best Business Schools for International Business in France, Top Universities for International Business in France, International Business Eligibility Requirements in France, International Business Admission Requirements in France, Cost of Studying International Business in France, International Business Tuition Fees in France, International Business Scholarships in France for Indian Students, English-Taught International Business Programmes in France, International Business Specialisations in France, Career Opportunities After International Business in France",
  "introTitle": "International Business in France for Indian Students",
  "heroParas": [
    "Pursue an accredited degree in International Business in France, mastering global market expansion, multinational corporate strategy, cross-border supply chains, and foreign trade. International students acquire cross-cultural leadership skills and access post-study stay-back authorizations under French immigration policy."
  ],
  overview: [
    "France is one of Europe's most influential commercial epicenters, home to global industry powerhouses in luxury goods, aerospace, automotive engineering, retail, banking, and digital technology. International business programs in France provide immersive cross-cultural business training taught entirely in 100% English.",
    "Academic pathways are structured under 3-year Bachelor programs (Grade de Licence, 180 ECTS) and 1 to 2-year Master programs (Grade de Master / MSc, 90 to 120 ECTS). Students engage in mandatory corporate internships, overseas exchange semesters, and hands-on consulting projects, gaining immediate employability across multinational corporations.",
    "**EduHawk Worldwide Study Abroad Guidance** provides comprehensive advisory services for Indian candidates—evaluating academic profiles, shortlisting top-tier French business schools, assisting with application essays and video pitches, and guiding students through Campus France visa processing."
  ],
  level: "Bachelor & Master in International Business (BIB / MIB / MSc / Bac+5)",
  crumb: "Business & Management / International Business",
  stats: [
    {
      label: "Degree Formats",
      value: "Bachelor (BIB, 180 ECTS) & Master (MIB / MSc, 90 – 120 ECTS)"
    },
    {
      label: "Course Duration",
      value: "Undergraduate: 3 Years | Postgraduate: 1 to 2 Years"
    },
    {
      label: "Top Institutions",
      value: "IÉSEG School of Management, ESSEC, ESCP"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Strategic Advantages",
      title: "Why Study International Business in France?",
      groups: [
        {
          t: "p",
          items: [
            "France offers a gateway to European and transatlantic commerce, combining world-ranked Grandes Écoles with deep connections to multinational corporate headquarters.",
            "**Key Advantages of Studying International Business in France:**",
            "• **Global Business Epicenter:** Learn within a dynamic European market home to industry leaders such as L'Oréal, LVMH, Airbus, TotalEnergies, BNP Paribas, and Danone.",
            "• **100% English-Taught Programs:** Complete your entire degree in English with zero initial French language requirement for admission.",
            "• **Cross-Cultural Cohorts:** Collaborate on projects with classmates from over 60 nationalities, building intercultural management competencies essential for multinational leadership.",
            "• **Mandatory Paid Internships:** French regulations mandate remuneration for internships exceeding two months, providing students with real-world corporate experience across France and the EU.",
            "• **Triple Crown Accreditations:** Study at institutions holding AACSB, EQUIS, and AMBA accreditations, confirming world-class pedagogical excellence.",
            "• **Two-Year Post-Study Work Visa:** Master's graduates qualify for the 2-year APS / RECE permit to pursue professional corporate employment across France."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "International Business Degrees & Academic Pathways",
      groups: [
        {
          t: "p",
          items: [
            "Undergraduate and postgraduate international business degrees in France synthesize core commercial acumen with specialized cross-border modules.",
            "**Undergraduate Programs (Bachelor in International Business - BIB):**",
            "A 3-year bachelor's degree (180 ECTS) introducing commercial operations and international trade fundamentals:",
            "• Global Business Fundamentals & Organizational Behavior",
            "• International Marketing & Consumer Insights",
            "• Managerial Accounting & Corporate Finance",
            "• World Trade Law & Export-Import Regulations",
            "• Cross-Cultural Negotiation Dynamics",
            "• Global Supply Chain & Logistics Management",
            "• Business Analytics & Applied Quantitative Statistics",
            "**Postgraduate Programs (Master in International Business - MIB / MSc):**",
            "A 1 to 2-year advanced master's (90 to 120 ECTS) tailored for strategic global leadership:",
            "• International Corporate Strategy & Competitive Advantage",
            "• Global Financial Management & International M&A",
            "• Cross-Border Market Entry & Global Expansion Strategies",
            "• Omnichannel Brand Strategy & International Marketing",
            "• Geopolitical Risk Analysis & International Compliance",
            "• Digital Transformation in Global Supply Chains",
            "• International Business Consulting Fieldwork"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Premier Business Schools",
      title: "Top Business Schools for International Business in France",
      groups: [
        {
          t: "p",
          items: [
            "France is home to several top-tier business schools renowned globally for their international business and management programs."
          ]
        }
      ],
      unis: [
        {
          name: "IÉSEG School of Management",
          city: "Lille & Paris",
          state: "Hauts-de-France / Île-de-France",
          desc: "Triple-accredited Grandes Écoles offering both the Bachelor in International Business (BIB) and Master in International Business (MIB) in 100% English with exceptional corporate placement rates.",
          img: uniImg1
        },
        {
          name: "ESSEC Business School",
          city: "Cergy / Paris",
          state: "Île-de-France",
          desc: "World-leading business school delivering the prestigious Master in Strategy & Management of International Business (SMIB), ranked #2 globally by the Financial Times.",
          img: uniImg2
        },
        {
          name: "ESCP Business School",
          city: "Paris",
          state: "Île-de-France",
          desc: "The world's oldest business school with pan-European campus mobility across Paris, London, Berlin, Madrid, and Turin, offering cutting-edge international management programs.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility & Language Requirements for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "Admissions criteria vary depending on whether applicants are seeking undergraduate or postgraduate entry.",
            "**Bachelor's Degree (BIB) Eligibility:**",
            "• Completion of Class 12 from CBSE, ISC, State Boards, or IB with a minimum aggregate of 60% – 65%+.",
            "• Open to students from Commerce, Science, or Humanities backgrounds; basic mathematics is advantageous.",
            "• English language proficiency: IELTS 6.0 – 6.5 or TOEFL iBT 80+ (or equivalent).",
            "**Master's Degree (MIB / MSc) Eligibility:**",
            "• A recognized Bachelor's degree (3-year or 4-year degree) in business, engineering, economics, or humanities with strong academic standing (typically 60%+ aggregate).",
            "• English proficiency scores: IELTS Academic 6.5+, TOEFL iBT 85+, TOEIC 850+, or Duolingo 115+.",
            "• Updated professional CV and detailed Statement of Purpose (SOP) demonstrating career motivation in international commerce.",
            "• Two letters of recommendation (LOR) and an interactive video or virtual admissions interview."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Costs",
      title: "Cost of Studying International Business in France & Living Expenses",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees reflect the distinction between state-subsidized public universities and private Grandes Écoles.",
            "**Indicative Program Tuition Investments:**",
            "• **Public Universities (National Reference Fees 2026–2027):**",
            "  - Bachelor's (Licence): €178/year (EU) vs. €2,902/year (Non-EU).",
            "  - Master's Degree: €255/year (EU) vs. €3,950/year (Non-EU).",
            "• **Private Business Schools & Grandes Écoles:**",
            "  - **IÉSEG Bachelor in International Business:** Approx. €12,100 per year.",
            "  - **IÉSEG Master in International Business:** €26,800 (Fast Track) to €29,800 (Regular Track) total program tuition.",
            "  - **ESSEC / ESCP Master's Programs:** Approx. €16,000 to €28,000 per year.",
            "**Living Expenses & Student Aid:**",
            "• Average monthly student expenditure ranges from €750 to €1,000 in regional cities and €1,100 to €1,400 in the Paris region.",
            "• All international students qualify for French CAF housing assistance, reimbursing up to 40% of monthly accommodation rent.",
            "• Annual student campus life contribution (CVEC) is approx. €103/year.",
            "**Scholarships for International Students:**",
            "Business schools offer merit-based scholarships and early-bird tuition reductions granting 15% to 50% fee waivers."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Application Roadmap",
      title: "Step-by-Step International Business Application Process",
      groups: [
        {
          t: "p",
          items: [
            "Applying for international business programs in France involves structured institutional application rounds and Campus France visa validation."
          ]
        }
      ],
      steps: [
        {
          title: "Select Academic Degree Level",
          desc: "Choose between a 3-year Bachelor in International Business (BIB) or a 1 to 2-year Master in International Business (MIB / MSc) based on your educational background."
        },
        {
          title: "Compare Target Business Schools",
          desc: "Evaluate institutions such as IÉSEG, ESSEC, and ESCP considering campus locations, rankings, tuition fees, and corporate internship networks."
        },
        {
          title: "Verify Academic Prerequisites",
          desc: "Ensure your Class 12 or Bachelor's degree percentage, course transcripts, and language credentials fulfill the business school's criteria."
        },
        {
          title: "Assemble Application Portfolio",
          desc: "Prepare your academic CV, personal statement of motivation (SOP), two letters of recommendation (LOR), and certified degree transcripts."
        },
        {
          title: "Complete Language Testing",
          desc: "Appear for your IELTS Academic (minimum 6.5) or TOEFL iBT (minimum 85+) exam."
        },
        {
          title: "Submit Online Application",
          desc: "Finalize and submit the application through the institution's official admissions portal before the round deadlines."
        },
        {
          title: "Admissions Interview / Video Pitch",
          desc: "Participate in an interactive virtual interview or submit a recorded video pitch articulating your cross-cultural drive and career vision."
        },
        {
          title: "Accept Offer & Visa Processing",
          desc: "Receive your admission letter, pay the seat reservation deposit, complete Campus France 'Etudes en France' verification, and secure your VLS-TS student visa."
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Quality Standards",
      title: "International Accreditation & Degree Recognition",
      groups: [
        {
          t: "p",
          items: [
            "Verifying official recognition guarantees that your international business degree is respected by global employers and government bodies.",
            "**Key Recognition Benchmarks:**",
            "• **Grade de Licence & Grade de Master:** Official state-recognized degree titles granted by the French Ministry of Higher Education, guaranteeing European Bologna compliance and full ECTS portability.",
            "• **RNCP Registration:** Level 6 (Bachelor) or Level 7 (Master) certification in the French National Directory of Professional Certifications.",
            "• **The Triple Crown:** Prestigious international accreditations from AACSB (USA), EQUIS (Europe), and AMBA (UK), held by premier French business schools."
          ]
        }
      ]
    },
    {
      slot: "career",
      eyebrow: "Career Horizons",
      title: "Career Opportunities & Salary Expectations",
      groups: [
        {
          t: "p",
          items: [
            "An International Business degree from France opens global career pathways across multinational corporations, trade agencies, and consulting firms.",
            "**Prominent Career Roles:**",
            "• **International Business Development Manager**",
            "• **Global Export-Import Coordinator**",
            "• **International Sales & Key Account Executive**",
            "• **Global Brand & Marketing Strategist**",
            "• **International Supply Chain & Logistics Analyst**",
            "• **Global Market Research Consultant**",
            "• **Cross-Border Procurement & Sourcing Specialist**",
            "• **Regional Commercial Director**",
            "**Target Industries:**",
            "Graduates excel across luxury goods & fashion, international trade, manufacturing, consumer retail, banking, logistics, and management consulting.",
            "**Salary Expectations in France:**",
            "Starting salaries for international business graduates range from **€42,000 to €62,000 per year**, with rapid upward progression for bilingual professionals with multinational internship experience."
          ]
        }
      ]
    },
    {
      slot: "docs",
      eyebrow: "Checklist",
      title: "Documents Required for International Business Admission",
      groups: [
        {
          t: "p",
          items: [
            "Applicants should prepare the following documentation for admissions review:",
            "1. Valid international passport.",
            "2. Academic mark sheets and certificates (Class 10 & 12 for Bachelor; Bachelor's degree for Master's).",
            "3. Statement of Purpose (SOP) explaining your motivation for international business and France.",
            "4. Comprehensive professional Curriculum Vitae (CV).",
            "5. English proficiency test scorecard (IELTS / TOEFL / TOEIC / Duolingo).",
            "6. Two letters of recommendation from academic instructors or employers.",
            "7. Proof of professional work experience or internships (if applicable).",
            "8. Recorded video pitch or motivation statement (if requested by the institution).",
            "9. Certified translations for any non-English documentation.",
            "10. Receipt of application fee payment."
          ]
        }
      ]
    },
    {
      slot: "eduhawk",
      eyebrow: "Consultancy Support",
      title: "How EduHawk Supports Your International Business Journey",
      groups: [
        {
          t: "p",
          items: [
            "Choosing the right business school in France requires strategic evaluation of curriculum focus, campus location, tuition, and post-study opportunities.",
            "**EduHawk Worldwide Comprehensive Services:**",
            "• **Targeted Business School Matching:** Profiling your academic strengths against premier French business schools including IÉSEG, ESSEC, and ESCP.",
            "• **SOP & Video Pitch Mentorship:** Expert guidance on crafting compelling personal statements, activity profiles, and video responses.",
            "• **Interview Coaching:** Comprehensive mock interviews to prepare you for faculty panel screenings.",
            "• **Scholarship Applications:** Identifying institutional fee waivers and early-bird discounts to minimize study expenses.",
            "• **Campus France & Visa Filing:** Complete step-by-step handling of Etudes en France procedures, financial paperwork, and visa approval."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Is France a good place to study International Business?",
      a: "Yes. France is home to some of Europe's top-ranked business schools. It offers world-class international business training, 100% English-taught curriculums, mandatory paid internships, and direct exposure to major European commercial markets."
    },
    {
      q: "What is the duration of an International Business degree in France?",
      a: "An undergraduate Bachelor in International Business (BIB) typically spans 3 years (180 ECTS). Postgraduate Master in International Business (MIB / MSc) programs span 1 to 2 years (90 to 120 ECTS), including corporate internships and consulting assignments."
    },
    {
      q: "What are the eligibility criteria for Indian students?",
      a: "For Bachelor's programs, students need completion of Class 12 with a minimum 60%+ aggregate. For Master's programs, a recognized 3-year or 4-year Bachelor's degree with 60%+ is required, along with an English proficiency test such as IELTS (6.5+) or TOEFL (85+)."
    },
    {
      q: "Is it possible for Indian students to study International Business in France in English?",
      a: "Yes. Premier French business schools deliver their international business degrees entirely in 100% English. Indian students do not need prior knowledge of French for admission, though French language modules are included to aid local integration."
    },
    {
      q: "What career opportunities open after completing International Business in France?",
      a: "Graduates secure roles as International Business Development Managers, Export-Import Specialists, Global Supply Chain Analysts, and Trade Consultants with starting salaries ranging from €42,000 to €62,000/year, supported by a 2-year post-study work permit (APS / RECE)."
    }
  ]
};

export default function InternationalBusinessinFrancePage() {
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
        name: "IÉSEG School of Management",
        city: "Lille & Paris",
        state: "Hauts-de-France / Île-de-France",
        desc: "Triple-accredited Grandes Écoles offering both the Bachelor in International Business (BIB) and Master in International Business (MIB) in 100% English with exceptional corporate placement rates.",
        img: uniImg1
      },
      {
        name: "ESSEC Business School",
        city: "Cergy / Paris",
        state: "Île-de-France",
        desc: "World-leading business school delivering the prestigious Master in Strategy & Management of International Business (SMIB), ranked #2 globally by the Financial Times.",
        img: uniImg2
      },
      {
        name: "ESCP Business School",
        city: "Paris",
        state: "Île-de-France",
        desc: "The world's oldest business school with pan-European campus mobility across Paris, London, Berlin, Madrid, and Turin, offering cutting-edge international management programs.",
        img: uniImg3
      }
    ]
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
