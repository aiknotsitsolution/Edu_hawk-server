import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/BBS/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/BBS/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/BBS/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/BBS/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/BBS/ESSEC_Business_School.webp";
import uniImg2 from "../../../../Images/Abroad/France/BBS/EDHEC_Business_School.webp";
import uniImg3 from "../../../../Images/Abroad/France/BBS/Emlyon_business_school.webp";
import cmsData from "../../../../data/study_abroad/france/bbs.json";

const page = {
  name: "BBS in France",
  country: "France",
  slug: "bbs",
  title: "Study BBS in France for Indian Students | EduHawk",
  description: "Complete guide to Bachelor of Business Studies (BBS) and Bachelor in Management in France for Indian students: Top business schools (ESSEC, EDHEC, Emlyon), tuition fees, admission requirements, and career opportunities.",
  keywords: "Study BBS in France, BBS in France for Indian Students, Bachelor of Business Studies in France, BBS Courses in France, Best Business Schools in France for BBS, Top Universities for Business Studies in France, BBS Eligibility in France, BBS Admission Requirements in France, BBS in France After Class 12, Cost of Studying BBS in France, BBS Tuition Fees in France, BBS Scholarships in France, Bachelor in Management in France, BBA and International Business Courses in France, Career Opportunities After BBS in France",
  "introTitle": "BBS in France for Indian Students",
  "heroParas": [
    "Earn a comprehensive Bachelor of Business Studies (BBS) in France, integrating core management principles, business economics, quantitative analysis, and corporate strategy. International students build strong business acumen and access post-study stay-back authorizations under French immigration policy."
  ],
  overview: [
    "In the French higher education landscape, undergraduate business studies are commonly structured as a **Bachelor in Management**, **BBA**, or **Licence en Gestion**. These programs bridge academic business theory with practical European corporate exposure, offering English-taught tracks that welcome international and Indian students directly after high school.",
    "Curriculums emphasize analytical thinking, organizational leadership, financial budgeting, and cross-cultural communication. Students complete corporate internships, industry-sponsored consulting projects, and international exchange semesters, laying a solid foundation for corporate careers or progression into elite European Master in Management (MiM) programs.",
    "**EduHawk Worldwide Study Abroad Guidance** assists candidates in navigating program nomenclature, matching academic profiles with accredited French institutions, preparing admissions dossiers, and securing student visas through Campus France."
  ],
  level: "Bachelor of Business Studies (BBS / Bachelor in Management / Grade de Licence)",
  crumb: "Business & Management / BBS",
  stats: [
    {
      label: "Degree Equivalents",
      value: "BBS / Bachelor in Management / Global BBA (180 – 240 ECTS)"
    },
    {
      label: "Course Duration",
      value: "3 to 4 Years (Undergraduate / Bac+3 or Bac+4)"
    },
    {
      label: "Top Institutions",
      value: "ESSEC, EDHEC, Emlyon Business School"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Authorization"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Strategic Advantages",
      title: "Why Pursue a Bachelor of Business Studies in France?",
      groups: [
        {
          t: "p",
          items: [
            "France is a premier destination for business education, blending affordable public university options with prestigious, triple-accredited Grandes Écoles.",
            "**Key Advantages of Studying Business in France:**",
            "• **Comprehensive Business Foundations:** Master organizational strategy, financial analysis, micro/macro economics, consumer psychology, and supply chain management.",
            "• **Multidisciplinary Specialization:** Customize your degree with focus tracks in International Business, Digital Marketing, Corporate Finance, and Entrepreneurship.",
            "• **Global Classroom Diversity:** Study alongside peers representing over 50 nationalities, developing cross-cultural team management and communication skills.",
            "• **Applied Experiential Learning:** Mandatory corporate internships, company-backed case studies, and business incubators provide hands-on commercial experience.",
            "• **Clear Postgraduate Pathways:** Direct academic eligibility to transition into top-ranked Master in Management (MiM) and specialized Master of Science (MSc) programs.",
            "• **Immediate Corporate Readiness:** Gain the functional competencies necessary for corporate roles in international sales, marketing, operations, and business development."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "BBS Program Formats & Core Business Modules",
      groups: [
        {
          t: "p",
          items: [
            "Because 'BBS' is an international denomination, French institutions offer this comprehensive curriculum through related accredited bachelor's qualifications.",
            "**Key Undergraduate Business Formats in France:**",
            "• **Bachelor of Business Studies / General Management:** Introduces corporate operations, accounting frameworks, economic policies, and commercial legal principles.",
            "• **Bachelor in Management (BiM):** Emphasizes general business administration, corporate leadership, organizational dynamics, marketing, and business strategy.",
            "• **Bachelor of Business Administration (BBA):** Comprehensive 4-year degree integrating international exchange semesters, business incubation, and global electives.",
            "• **International Business Degree:** Focuses on global market entry, cross-border commercial logistics, multinational negotiations, and trade regulations.",
            "**Core Curricular Modules:**",
            "• **Principles of Management & Organizational Behavior:** Group dynamics, corporate culture, change management, and leadership ethics.",
            "• **Financial Accounting & Managerial Budgeting:** Balance sheet analysis, cost management, capital budgeting, and financial reporting.",
            "• **Marketing & Business Development:** Customer relationship management, brand strategy, digital promotional campaigns, and market analysis.",
            "• **Corporate Strategy & Innovation:** Competitive advantage analysis, enterprise scaling, and startup development.",
            "**Course Durations & ECTS Credits:**",
            "French bachelor programs typically span 3 years (180 ECTS credits, Licence equivalent) or 4 years (240 ECTS credits, Global BBA format)."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Premier Business Schools",
      title: "Top Business Schools & Universities for BBS in France",
      groups: [
        {
          t: "p",
          items: [
            "French business schools are globally recognized for excellence in management pedagogy, international employer ties, and diverse campus environments."
          ]
        }
      ],
      unis: [
        {
          name: "ESSEC Business School",
          city: "Cergy / Paris",
          state: "Île-de-France",
          desc: "Triple-accredited Grandes Écoles delivering the world-renowned 4-year Global BBA with global mobility across Paris, Singapore, and Morocco.",
          img: uniImg1
        },
        {
          name: "EDHEC Business School",
          city: "Lille & Nice",
          state: "Hauts-de-France / PACA",
          desc: "Offers the International BBA with specialized majors in Business Management and Global Business, providing practical corporate exposure and global exchange tracks.",
          img: uniImg2
        },
        {
          name: "Emlyon Business School",
          city: "Lyon / Paris",
          state: "Auvergne-Rhône-Alpes",
          desc: "Leading European business school delivering an innovative Global BBA focused on digital transformation, entrepreneurship, and international business development.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "BBS Eligibility & Admission Standards for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "Indian high school students are eligible for direct admission to French undergraduate business programs based on standard academic benchmarks.",
            "**General Eligibility Criteria:**",
            "• **Secondary School Completion:** Completion of Class 12 from a recognized board (CBSE, ISC, State Boards, or IB) with a strong academic record (typically 60%+ aggregate).",
            "• **Subject Stream:** Open to candidates from Commerce, Science, or Humanities backgrounds with foundational competence in mathematics and English.",
            "• **English Language Proficiency:** For English-taught tracks: IELTS score of 6.0 – 6.5, TOEFL iBT of 80 – 90+, or recognized Medium of Instruction (MOI) certification.",
            "• **French Language Requirements:** DELF B1/B2 certification is only required for French-taught programs. English-medium programs require zero prior French proficiency.",
            "• **Selection Screening:** Online application review, academic transcript analysis, statement of motivation, and video interview assessing communication and business drive."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Costs",
      title: "Tuition Fees, Public University Costs & Living Expenses",
      groups: [
        {
          t: "p",
          items: [
            "Tuition costs in France vary widely between state-subsidized public universities and private Grandes Écoles.",
            "**Annual Registration Fees at Public Universities (2026–2027):**",
            "• **Licence (Bachelor's Degree):** €178/year (EU/EEA students) vs. €2,902/year (Non-EU students) under the national differential fee structure.",
            "**Tuition at Private Grandes Écoles (BBA / Management Programs):**",
            "• **ESSEC Global BBA:** Approx. €15,000 – €20,000/year (€80,340 total 4-year tuition).",
            "• **EDHEC International BBA:** €15,900/year (Business Management) to €23,900/year (Global Business).",
            "• **Emlyon Global BBA:** Approx. €15,500/year for first-year entry.",
            "**Living Costs & Student Subsidies:**",
            "• Monthly living expenses average €700 to €1,000 in regional cities (Lyon, Lille, Toulouse) and €1,100 to €1,400 in Paris.",
            "• International students benefit from French state CAF rent subsidies covering up to 40% of housing costs.",
            "• Annual CVEC campus student contribution is approximately €103/year.",
            "**Financial Aid & Scholarships:**",
            "Merit-based entrance scholarships covering 15% to 50% of tuition are offered by business schools for high-achieving international applicants."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Application Roadmap",
      title: "Step-by-Step BBS Application & Enrollment Roadmap",
      groups: [
        {
          t: "p",
          items: [
            "The application pathway for business studies in France follows structured institutional rounds and Campus France visa validation."
          ]
        }
      ],
      steps: [
        {
          title: "Course & Program Selection",
          desc: "Identify whether a 3-year Bachelor in Management or 4-year Global BBA aligns best with your career vision, budget, and desired specializations."
        },
        {
          title: "Select & Compare Business Schools",
          desc: "Evaluate institutions based on faculty reputation, global rankings, language of instruction, internship placements, and international partner universities."
        },
        {
          title: "Verify Academic Eligibility",
          desc: "Confirm your Class 12 credentials, minimum percentage thresholds, and English language test requirements with EduHawk advisors."
        },
        {
          title: "Prepare Admissions Portfolio",
          desc: "Draft a compelling statement of purpose (SOP), update your academic CV, and secure two teacher letters of recommendation (LOR)."
        },
        {
          title: "Language Proficiency Exams",
          desc: "Appear for IELTS, TOEFL, or secure your high school Medium of Instruction (MOI) English certificate."
        },
        {
          title: "Submit Online Application",
          desc: "Complete the online application portal of the selected business school and submit certified academic transcripts."
        },
        {
          title: "Admissions Interview",
          desc: "Participate in an admissions video interview discussing your background, extracurricular interests, and motivation for studying in France."
        },
        {
          title: "Offer Letter & Deposit",
          desc: "Review your acceptance letter, confirm your seat by paying the institutional registration deposit, and review scholarship awards."
        },
        {
          title: "Campus France 'Etudes en France'",
          desc: "Create an Etudes en France account, submit your admission documentation, and attend the mandatory Campus France academic interview."
        },
        {
          title: "Visa Filing & Pre-Departure",
          desc: "Apply for your VLS-TS student visa at VFS, organize student housing, secure travel insurance, and attend EduHawk pre-departure briefings."
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Quality Standards",
      title: "Accreditation & State Recognition of French Business Degrees",
      groups: [
        {
          t: "p",
          items: [
            "Confirming degree recognition ensures your qualification holds official academic and professional weight across Europe and worldwide.",
            "**Key Recognition Credentials:**",
            "• **Grade de Licence:** The state-approved degree title conferred by the French Ministry of Higher Education, guaranteeing mutual European credit transfer (ECTS).",
            "• **RNCP Level 6:** Registration in the Répertoire National des Certifications Professionnelles, verifying accredited bachelor-level vocational competencies.",
            "• **Conférence des Grandes Écoles (CGE):** Certification of elite educational standards within France's top higher education institutions.",
            "• **International Triple Crown (AACSB, EQUIS, AMBA):** The gold standard of global business education, verifying faculty quality and rigorous research output."
          ]
        }
      ]
    },
    {
      slot: "career",
      eyebrow: "Career Horizons",
      title: "Career Opportunities & Salary Expectations After BBS",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of business studies programs in France possess cross-functional commercial skills highly valued across international corporations.",
            "**Key Entry-Level Job Roles:**",
            "• **Business Development Assistant (BDA)**",
            "• **Marketing & Social Media Coordinator**",
            "• **International Sales Executive**",
            "• **Customer Relations & Account Specialist**",
            "• **Human Resources (HR) Associate**",
            "• **Business Operations & Logistics Coordinator**",
            "• **Junior Financial & Business Analyst**",
            "• **Venture Incubation & Startup Associate**",
            "**Salary Expectations in France:**",
            "Entry-level graduates command starting salaries ranging between **€32,000 and €45,000 per year**, influenced by location, French language fluency, and corporate internship track records.",
            "**Postgraduate Study Trajectories:**",
            "Graduates frequently advance into competitive Master in Management (MiM), MSc in International Business, or MSc in Finance programs at Europe's top Grandes Écoles."
          ]
        }
      ]
    },
    {
      slot: "docs",
      eyebrow: "Checklist",
      title: "Documents Required for BBS Admission in France",
      groups: [
        {
          t: "p",
          items: [
            "Applicants should prepare the following dossier for their application:",
            "1. Valid international passport.",
            "2. Class 10 and Class 12 mark sheets and certificates (predicted grades for current Class 12 students).",
            "3. Comprehensive academic Curriculum Vitae (CV).",
            "4. Statement of Purpose (SOP) detailing your academic background and professional aspirations.",
            "5. English language proficiency certificate (IELTS/TOEFL) or MOI letter.",
            "6. Two letters of recommendation from high school faculty.",
            "7. Extracurricular, leadership, or sports certificates.",
            "8. Certified English or French translations of any non-English documents.",
            "9. Recent passport-sized digital photographs.",
            "10. Proof of application fee payment."
          ]
        }
      ]
    },
    {
      slot: "eduhawk",
      eyebrow: "Consultancy Support",
      title: "How EduHawk Supports Your Study Abroad Journey",
      groups: [
        {
          t: "p",
          items: [
            "Choosing the right business school in France requires in-depth evaluation of curriculum structure, accreditation, costs, and career goals.",
            "**EduHawk Worldwide Comprehensive Advisory Services:**",
            "• **Institutional Matching:** Personalized selection of top French Grandes Écoles and universities aligned with your profile and financial budget.",
            "• **Application & Essay Mentorship:** Expert guidance in crafting standout personal statements, activity profiles, and recommendation letters.",
            "• **Interview Coaching:** Mock interview practice to ensure candidates articulate their career drive effectively to admissions committees.",
            "• **Scholarship Acquisition:** Guidance on institutional fee reductions and external grant applications.",
            "• **Campus France & Visa Guidance:** End-to-end management of Etudes en France filings, financial sponsorship paperwork, and visa interview preparation."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "What is BBS and how is it structured in France?",
      a: "BBS stands for Bachelor of Business Studies. In France, it is offered under titles such as Bachelor in Management (BiM), Bachelor of Business Administration (BBA), or Licence en Gestion, spanning 3 to 4 years (180 to 240 ECTS credits) of comprehensive management and international commerce education."
    },
    {
      q: "Is it possible to study BBS in France in English?",
      a: "Yes. Leading French business schools offer 100% English-taught undergraduate business programs. Prior French language knowledge is not mandatory for admission, though French language classes are incorporated into the curriculum for daily integration and European networking."
    },
    {
      q: "How much does a BBS program cost in France?",
      a: "Standard registration fees at public universities for non-EU students are €2,902/year. Private business schools charge between €14,000 and €23,900/year. Students also qualify for French state CAF housing subsidies that reduce living costs by 20% to 40%."
    },
    {
      q: "What are the eligibility criteria for Indian students?",
      a: "Indian students must have completed Class 12 from CBSE, ISC, State Boards, or IB with a competitive academic aggregate (typically 60%+), along with proof of English proficiency (IELTS 6.0–6.5 or TOEFL 80+) and satisfactory admissions interview performance."
    },
    {
      q: "What career opportunities are available after completing BBS in France?",
      a: "Graduates secure roles as Business Development Assistants, Marketing Coordinators, Sales Executives, Junior Financial Analysts, and Operations Associates with starting salaries of €32,000 to €45,000/year, or gain admission to top European Master in Management (MiM) programs."
    }
  ]
};

export default function BBSinFrancePage() {
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
        name: "ESSEC Business School",
        city: "Cergy / Paris",
        state: "Île-de-France",
        desc: "Triple-accredited Grandes Écoles delivering the world-renowned 4-year Global BBA with global mobility across Paris, Singapore, and Morocco.",
        img: uniImg1
      },
      {
        name: "EDHEC Business School",
        city: "Lille & Nice",
        state: "Hauts-de-France / PACA",
        desc: "Offers the International BBA with specialized majors in Business Management and Global Business, providing practical corporate exposure and global exchange tracks.",
        img: uniImg2
      },
      {
        name: "Emlyon Business School",
        city: "Lyon / Paris",
        state: "Auvergne-Rhône-Alpes",
        desc: "Leading European business school delivering an innovative Global BBA focused on digital transformation, entrepreneurship, and international business development.",
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
