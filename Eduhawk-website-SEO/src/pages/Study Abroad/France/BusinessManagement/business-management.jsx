import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/BusinessManagement/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/BusinessManagement/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/BusinessManagement/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/BusinessManagement/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/BusinessManagement/HEC_Paris.webp";
import uniImg2 from "../../../../Images/Abroad/France/BusinessManagement/ESSEC_Business_School.webp";
import uniImg3 from "../../../../Images/Abroad/France/BusinessManagement/ESCP_Business_School.webp";
import cmsData from "../../../../data/study_abroad/france/business_hub.json";

const page = {
  name: "Business Management in France",
  country: "France",
  slug: "study-abroad/france/business-management",
  title: "Study Business Management in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Business Management in France for Indian students: Top French business schools (HEC, ESSEC, ESCP), admission requirements, tuition fees, scholarships, and 2-year post-study work visa.",
  keywords: "Study Business Management in France, Business Management course in France, Courses in Business Management in France, Top PG Colleges in Business Management in France, Eligibility to Study PG Business Management In France, The Cost of Studying Business Management in France, Business Management Scholarships for International Students in France, Business Management Jobs and Career Opportunities in France",
  "introTitle": "Business Management in France for Indian Students",
  "heroParas": [
    "Study Business Management in France, acquiring comprehensive expertise across organizational strategy, financial analysis, operational leadership, and corporate governance. International students master real-world business acumen and access post-study stay-back authorizations under French immigration policy."
  ],
  overview: [
    "France is a premier destination for business and management education, combining historic academic prestige with modern business innovation. International students can choose between highly subsidized public university management faculties (IAE networks) and world-renowned, triple-accredited Grandes Écoles such as HEC Paris, ESSEC Business School, ESCP, and EDHEC.",
    "Business Management programs in France provide rigorous training in strategic planning, marketing, corporate finance, human resources, operations, and cross-cultural leadership. With an emphasis on practical pedagogy—including Harvard-style case studies, corporate consulting projects, and mandatory industrial internships or alternance (work-study) contracts—graduates develop high-level executive competence.",
    "With generous post-study work rights (a 2-year APS / RECE visa for Indian Master's graduates), direct recruiting pipelines into CAC 40 and Fortune 500 multinationals, and affordable living support (CAF housing allowances), France is an ideal launchpad for global business leaders. EduHawk Worldwide consultancy delivers personalized, end-to-end guidance from school shortlisting and GMAT/SOP preparation to Campus France interviews and visa filing."
  ],
  level: "Bachelor & Master in Business Management (BBA / Master in Management / MSc / MBA)",
  crumb: "Business / Management",
  stats: [
    {
      label: "Degree Choices",
      value: "BBA, Master in Management (MiM), MSc & MBA"
    },
    {
      label: "Course Duration",
      value: "1 to 2 Years (Master's / MiM) | 3 Years (BBA)"
    },
    {
      label: "Top Institutions",
      value: "HEC Paris, ESSEC Business School, ESCP Business School"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Why Study Business Management in France?",
      desc: "France is a global powerhouse in management education, home to more top-ranked business schools than almost any other European country.",
      items: [
        "World-Renowned Business Schools: Learn at elite institutions that consistently dominate the Financial Times rankings and hold prestigious Triple Crown accreditation (AACSB, EQUIS, AMBA).",
        "Comprehensive Program Spectrum: Access undergraduate BBA, flagship Master in Management (MiM), specialized MSc, and executive MBA degrees.",
        "Real-World Pedagogical Approach: Gain practical business experience through corporate case studies, live consulting projects, and mandatory enterprise internships.",
        "Multi-Campus European Mobility: Many French business schools feature campuses across London, Berlin, Madrid, and Singapore, offering truly international exposure.",
        "Global Corporate Recruitment: Top management consultancies (McKinsey, BCG, Bain), investment banks, luxury groups (LVMH, Kering, L'Oréal), and tech giants recruit directly on campus.",
        "Affordable Public & Elite Private Options: Options range from subsidized university IAE institutes (€255/year for EU, €3,950/year for non-EU) to prestigious private Grandes Écoles.",
        "2-Year Post-Study Work Visa: Indian Master's graduates benefit from a 2-year Autorisation Provisoire de Séjour (APS) / RECE permit to work across France and the European Union."
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Pathways",
      title: "Courses in Business Management in France",
      desc: "French institutions offer business management programs structured for various career stages, from undergraduate foundations to executive leadership.",
      groups: [
        {
          title: "Popular Business Management Programs",
          items: [
            "Bachelor of Business Administration (BBA): 3 to 4-year undergraduate degree providing comprehensive foundations in accounting, economics, marketing, and organizational management.",
            "Master in Management (MiM / Programme Grande École): Prestigious 2-year pre-experience master's degree (120 ECTS) ranked among the best worldwide, covering general management and leadership.",
            "Master of International Business (MIB): Focused on international trade, cross-border corporate strategy, global supply chains, and multinational market entry.",
            "Master of Marketing Management (MSc): Covers consumer psychology, digital omnichannel marketing, brand strategy, and France's world-leading luxury brand management.",
            "Master in Human Resource Management (HRM): Strategic talent acquisition, leadership development, organizational behavior, and global labor relations.",
            "Master of Science (MSc) in Strategic Management: Corporate strategy, business transformation, management consulting, and competitive analysis.",
            "Master of Business Administration (MBA / International MBA): 1 to 2-year intensive program designed for experienced professionals seeking leadership acceleration or career transformation.",
            "Master’s in Entrepreneurship & Innovation: Venture creation, corporate innovation management, business incubation, and venture capital financing."
          ]
        },
        {
          title: "Course Duration & Structure",
          items: [
            "Bachelor's Degree (BBA / Licence): Typically 3 years (180 ECTS credits).",
            "Master in Management (MiM): 2 years (120 ECTS credits), often including a gap year for corporate internships.",
            "Specialized Master / MSc: 1 to 2 years depending on previous degree and ECTS requirements.",
            "MBA Programs: 1 to 2 years of intensive executive and general management training."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top PG Colleges in Business Management in France",
      desc: "France is internationally acclaimed for its Grandes Écoles and top-ranked management institutions:",
      unis: [
        {
          name: "HEC Paris",
          city: "Jouy-en-Josas (Paris)",
          state: "Île-de-France",
          desc: "Consistently ranked #1 in Europe by the Financial Times, HEC Paris offers world-leading English-taught Master in Management (MiM), MBA, and specialized finance/strategy degrees with unmatched corporate placement.",
          img: uniImg1
        },
        {
          name: "ESSEC Business School",
          city: "Cergy (Paris)",
          state: "Île-de-France",
          desc: "World-renowned Grande École offering the highly flexible Master in Management (Programme Grande École) with customizable tracks, international campuses in Singapore and Morocco, and corporate apprenticeship programs.",
          img: uniImg2
        },
        {
          name: "ESCP Business School",
          city: "Paris",
          state: "Île-de-France",
          desc: "The world's oldest business school (est. 1819), featuring a distinctive pan-European multi-campus model across Paris, London, Berlin, Madrid, Turin, and Warsaw for cross-cultural management training.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility to Study PG Business Management in France",
      desc: "Admission criteria vary between public universities and elite Grandes Écoles, but most management master's programs welcome diverse undergraduate disciplines.",
      items: [
        "Recognized Bachelor's Degree: 3-year or 4-year undergraduate degree in any discipline (Engineering, Commerce, Science, Arts, or Economics) from a recognized university.",
        "Academic Standing: Competitive undergraduate academic performance (minimum 60% – 65% aggregate or equivalent CGPA).",
        "English Language Proficiency: IELTS 6.5+ – 7.0 (no band below 6.0) or TOEFL iBT 90+ – 100 for English-taught tracks.",
        "Standardized Entrance Tests: GMAT, GRE, or TAGE MAGE scores required by top Grandes Écoles (competitive GMAT score: 640+).",
        "Professional Work Experience: Pre-experience MiM and MSc programs require little to no full-time work experience; MBA and executive programs require 2 to 5 years of professional experience."
      ],
      groups: [
        {
          title: "Application Dossier Checklist",
          items: [
            "Official Bachelor's degree certificate and consolidated mark sheets (with certified French translations if applicable).",
            "Professional Curriculum Vitae (CV) highlighting leadership, internships, and extracurricular achievements.",
            "Statement of Purpose (SOP) or tailored application essays outlining career vision and school alignment.",
            "Valid English proficiency scorecard (IELTS / TOEFL).",
            "Two Letters of Recommendation (LORs) from academic professors or professional managers.",
            "GMAT, GRE, or TAGE MAGE official scorecard (if applicable).",
            "Valid international passport (minimum 6 months validity)."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Living Costs",
      title: "The Cost of Studying Business Management in France",
      desc: "Tuition fees depend heavily on the type of institution (public university IAEs vs. private Grandes Écoles) and the degree level.",
      groups: [
        {
          title: "Tuition Fee Structure (2026–2027 Academic Year)",
          items: [
            "Public University Master's in Management (IAE Network): €255 per year for EU students; €3,950 per year for Non-EU students under differentiated fee regulations.",
            "Public University Bachelor's Degree: €178 per year (EU) | €2,902 per year (Non-EU).",
            "Top Business Schools (Grandes Écoles - MiM & MSc): €14,000 to €32,000 per academic year depending on the institution.",
            "MBA Programs at Elite Schools: €35,000 to €85,000+ total tuition depending on the school (HEC, INSEAD, ESSEC).",
            "CVEC Campus Contribution: Approximately €103 per year (mandatory student life fee)."
          ]
        },
        {
          title: "Living Expenses & Accommodation",
          items: [
            "Monthly Living Budget: €800 – €1,100 in regional university cities like Lyon, Lille, Bordeaux, and Toulouse; €1,200 – €1,600 in Paris.",
            "CAF Housing Subsidy: International students are eligible for French government housing assistance (CAF/APL), reimbursing 30% to 40% of monthly rent.",
            "Scholarships & Financial Aid: Indian students can apply for the Eiffel Excellence Scholarship, Charpak Master's Scholarship, and institutional merit scholarships (covering 20% to 50% of tuition)."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions Roadmap",
      title: "Business Management Admission Process in France",
      desc: "Follow this structured 9-step timeline to ensure successful business school admission and visa clearance:",
      steps: [
        {
          num: "1",
          title: "Choose Degree & Specialization",
          desc: "Decide between an undergraduate BBA, a pre-experience Master in Management (MiM), a specialized MSc, or an MBA."
        },
        {
          num: "2",
          title: "Shortlist Target Business Schools",
          desc: "Compare Grandes Écoles (HEC, ESSEC, ESCP, EDHEC, emlyon) and IAEs by curriculum, corporate partnerships, tuition, and FT rankings."
        },
        {
          num: "3",
          title: "Prepare for Standardized Tests",
          desc: "Register early and prepare for GMAT/GRE entrance exams and English language assessments (IELTS / TOEFL)."
        },
        {
          num: "4",
          title: "Craft Application Dossier & Essays",
          desc: "Write compelling application essays, statement of purpose, updated CV, and secure strong academic/professional LORs."
        },
        {
          num: "5",
          title: "Submit Online Applications",
          desc: "Apply through individual business school portals or centralized application systems like Join a School in France."
        },
        {
          num: "6",
          title: "Attend Admissions Interviews",
          desc: "Prepare for video and personal interview rounds evaluating your motivation, leadership potential, and business acumen."
        },
        {
          num: "7",
          title: "Review Offer & Confirm Seat",
          desc: "Accept your admission offer, review scholarship awards, and pay the required seat confirmation deposit."
        },
        {
          num: "8",
          title: "Campus France & Visa Formalities",
          desc: "Complete the Études en France academic assessment and apply for the Long-Stay Student Visa (VLS-TS)."
        },
        {
          num: "9",
          title: "Arrival & Campus Enrollment",
          desc: "Secure student accommodation, validate your visa online with OFII upon arrival in France, and register for French social security."
        }
      ]
    },
    {
      slot: "recognition",
      eyebrow: "Accreditation",
      title: "Recognition and European Quality Accreditation",
      desc: "Before accepting an offer, students should confirm the qualification's official recognition and accreditation status.",
      items: [
        "Triple Crown Accreditation: Top French business schools hold triple accreditation from AACSB (USA), EQUIS (Europe), and AMBA (UK)—a distinction held by less than 1% of business schools worldwide.",
        "Grade de Master: The highest academic distinction awarded by the French Ministry of Higher Education, guaranteeing Master's equivalence across Europe.",
        "RNCP Level 7 Certification: Professional degree certification registered in the Répertoire National des Certifications Professionnelles.",
        "Doctoral Pathways: Master's degrees and Grade de Master qualifications grant direct eligibility for doctoral studies (DBA / PhD in Management) in France and internationally."
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Business Management in France: Salary and Job Opportunities",
      desc: "Graduates of French business schools are highly sought after by multinational corporations, strategy consultancies, investment banks, and technology leaders across Europe.",
      groups: [
        {
          title: "Key Career Roles for Management Graduates",
          items: [
            "Management / Strategy Consultant (McKinsey, BCG, Bain, Big 4)",
            "Business Development Executive & Corporate Strategist",
            "Brand Manager & Product Marketing Specialist",
            "Financial Analyst & Corporate M&A Associate",
            "Operations & Global Supply Chain Manager",
            "Human Resources Specialist & Talent Acquisition Partner",
            "Project Manager & Technology Transformation Lead",
            "Venture Capital Analyst & Startup Founder / Entrepreneur"
          ]
        },
        {
          title: "Salary Expectations & Post-Study Work Permit",
          items: [
            "Entry-Level Salary: Fresh MiM and specialized MSc graduates typically earn between €42,000 and €55,000 gross per year.",
            "Experienced & MBA Salaries: MBA graduates and experienced strategy consultants earn €65,000 – €110,000+ per year.",
            "2-Year Post-Study Work Visa (APS/RECE): Indian Master’s and Grandes Écoles graduates receive a 2-year post-study work visa to secure full-time employment or launch a business venture in France."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Expert Guidance",
      title: "How EduHawk Worldwide Consultancy Helps You Study Abroad",
      desc: "EduHawk Worldwide offers complete, personalized end-to-end guidance for Indian students aspiring to study Business Management in France.",
      items: [
        "Business School Shortlisting: Identifying top Grandes Écoles and public IAE programs matching your GMAT score, budget, and career goals.",
        "Application Essay & SOP Editing: Professional coaching on crafting impactful personal statements, CVs, and school-specific essays.",
        "Interview Preparation: Rigorous mock interview rounds to prepare for behavioral, situational, and motivational interviews.",
        "Campus France & Visa Guidance: Complete assistance with Études en France procedures, financial proofs, and VFS visa appointment booking.",
        "Pre-Departure & Accommodation Support: Assistance with finding student housing, CROUS options, CAF allowance application, and travel planning."
      ]
    }
  ],
  faqs: [
    {
      q: "Is France a good country for studying Business Management?",
      a: "Yes. France is home to some of the world's highest-ranked business schools (HEC Paris, ESSEC, ESCP, INSEAD, EDHEC), which consistently dominate the Financial Times rankings. Programs feature world-class faculty, extensive international exposure, multi-campus European mobility, and direct recruitment pipelines into multinational corporations."
    },
    {
      q: "What is the cost of Business Management in France?",
      a: "For the 2026–2027 academic year, public university Master's programs (IAE network) cost €255/year for EU students and €3,950/year for non-EU students. Private Grandes Écoles typically charge between €14,000 and €32,000 per year for Master in Management (MiM) and MSc programs, while elite MBA programs range from €35,000 to €85,000+."
    },
    {
      q: "Do you need work experience to get a Master's in Business Management?",
      a: "Not necessarily. The flagship Master in Management (MiM) and specialized MSc programs are pre-experience degrees designed for recent graduates with little or no full-time work experience. However, MBA and Executive MBA programs generally require 2 to 5 years of professional work experience."
    },
    {
      q: "What jobs can I do after studying Business Management in France?",
      a: "Graduates work across Europe and worldwide in strategy consulting, investment banking, brand management, international business development, supply chain operations, financial analysis, and technology project management. Indian Master's graduates can also leverage the 2-year post-study work permit (APS/RECE) to transition into full-time employment."
    }
  ]
};

export default function BusinessManagementinFrancePage() {
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
    unis: [
      {
        name: "HEC Paris",
        city: "Jouy-en-Josas (Paris)",
        state: "Île-de-France",
        desc: "Consistently ranked #1 in Europe by the Financial Times, HEC Paris offers world-leading English-taught Master in Management (MiM), MBA, and specialized finance/strategy degrees with unmatched corporate placement.",
        img: uniImg1
      },
      {
        name: "ESSEC Business School",
        city: "Cergy (Paris)",
        state: "Île-de-France",
        desc: "World-renowned Grande École offering the highly flexible Master in Management (Programme Grande École) with customizable tracks, international campuses in Singapore and Morocco, and corporate apprenticeship programs.",
        img: uniImg2
      },
      {
        name: "ESCP Business School",
        city: "Paris",
        state: "Île-de-France",
        desc: "The world's oldest business school (est. 1819), featuring a distinctive pan-European multi-campus model across Paris, London, Berlin, Madrid, Turin, and Warsaw for cross-cultural management training.",
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
