import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Law/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Law/University_of_Strasbourg.webp";
import uniImg2 from "../../../../Images/Abroad/France/Law/Jean_Moulin_Lyon_3_University.webp";
import uniImg3 from "../../../../Images/Abroad/France/Law/Toulouse_Capitole_University.webp";

const page = {
  name: "Law in France",
  country: "France",
  slug: "law",
  title: "Study Law in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to studying Law in France for Indian students: Top law faculties (Strasbourg, Lyon 3, Toulouse Capitole), degrees (Licence en Droit, Master en Droit, LL.M in English), tuition fees (€255 – €3,950 public), and international legal career scope.",
  keywords: "Study Law in France for Indian Students, Law Courses in France for International Students, Undergraduate Law Degrees in France (Licence en droit), Postgraduate Law Courses in France, Master en droit and Doctoral Programmes in France, Best Universities for Law in France, Law Eligibility Requirements for Indian Students in France, Law Admission Requirements in France, Cost of Studying Law in France for International Students, English-Taught Law Programmes in France, Law Scholarships in France for Indian Students, International and European Law Courses in France, Business and Corporate Law in France, Law Degree Recognition in France, Career Opportunities After Studying Law in France",
  introTitle: "STUDY LAW IN FRANCE FOR INDIAN STUDENTS",
  heroParas: [
    "Studying Law in France offers Indian students profound training in civil law systems, European Union jurisprudence, international commercial arbitration, and corporate compliance across world-renowned public law faculties and prestigious Grandes Écoles."
  ],
  overview: [
    "France stands as the historic bedrock of continental civil law, having shaped global legal traditions through the monumental Napoleonic Code. For Indian law graduates and aspirants, studying law in France offers a gateway into European Union jurisprudence, international business contracts, transnational arbitration, and comparative international law.",
    "French legal education follows the European LMD (Licence, Master, Doctorat) structure. It encompasses the 3-year foundational Licence en droit (180 ECTS), the specialized 2-year Master en droit (M1 and M2, 120 ECTS), and an expanding portfolio of English-taught Master of Laws (LL.M.) degrees tailored specifically for international corporate lawyers, arbitral specialists, and policy analysts.",
    "Through EduHawk Worldwide's dedicated international legal education advisory, Indian students receive strategic guidance on university selection, French civil law fundamentals, Campus France Études en France compliance, scholarship acquisition, and post-study international careers."
  ],
  level: "Licence en Droit (UG - 3 Yrs) | Master en Droit & LL.M (PG - 1-2 Yrs)",
  crumb: "Law / Legal Studies",
  stats: [
    {
      label: "Degree Levels",
      value: "Licence en Droit (3 Yrs) | Master / LL.M (1-2 Yrs) | PhD"
    },
    {
      label: "Public Tuition",
      value: "€178 – €2,902 (UG) | €255 – €3,950 (PG) / Year"
    },
    {
      label: "Top Institutions",
      value: "University of Strasbourg, Jean Moulin Lyon 3, Toulouse Capitole"
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
      title: "Why Study Law in France?",
      groups: [
        {
          t: "p",
          items: [
            "France has played an instrumental role in formulating modern legal systems, human rights treaties, and European governance. Today, Paris stands as the undisputed global capital of international commercial arbitration (housing the International Chamber of Commerce - ICC), while Strasbourg serves as the diplomatic heartbeat of European human rights and legislative jurisprudence.",
            "Key benefits for Indian students pursuing law in France include:"
          ]
        },
        {
          t: "bullets",
          items: [
            "Centuries-Old Legal Prestige: Study at public universities founded over seven centuries ago with world-renowned faculties in private, public, and international law.",
            "Epicenter of European & International Institutions: Direct proximity to the European Court of Human Rights (ECHR), the Council of Europe, the European Parliament in Strasbourg, and UNESCO and ICC headquarters in Paris.",
            "Global Hub for International Commercial Arbitration: Paris is globally recognized as the preferred seat for international dispute resolution and transnational business litigation.",
            "English-Taught Master of Laws (LL.M.) Tracks: Specialized LL.M. programs in International Business Law, Cross-Border M&A, Competition Law, and Intellectual Property taught 100% in English.",
            "Comparative Law Mastery: Bridges the common law training received in India with continental civil law expertise, equipping graduates for multinational corporate counsel and international policy roles.",
            "Subsidized Higher Education: Highly economical national tuition fees at public universities (€255 to €3,950 per year) with access to French government scholarships and free national healthcare.",
            "Post-Study Work Authorization: 2-year post-study work authorization (APS / RECE) for master's degree graduates to seek professional corporate, consulting, or compliance employment."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Academic Architecture",
      title: "Law Degrees & Specializations in France",
      groups: [
        {
          t: "p",
          items: [
            "Legal studies in France are organized within the standardized Bologna LMD framework. While undergraduate degrees concentrate on foundational national civil and public law, postgraduate master's degrees provide intensive specialization."
          ]
        },
        {
          t: "h4",
          items: ["Undergraduate Programs (Licence en Droit - 3 Years / 180 ECTS)"]
        },
        {
          t: "p",
          items: [
            "The Licence en Droit provides comprehensive grounding in the French civil law tradition, constitutional mechanisms, and judicial methodology."
          ]
        },
        {
          t: "bullets",
          items: [
            "Foundational Legal Fields: Constitutional Law, General Civil Law (Persons and Family), Criminal Law & Criminal Procedure, and General Administrative Law.",
            "Commercial & Private Law: Law of Obligations and Contracts, Commercial Law, Property Law, and Labor & Employment Law.",
            "Supranational Systems: Introduction to European Union Law, Public International Law, and French Legal History."
          ]
        },
        {
          t: "h4",
          items: ["Postgraduate Programs (Master en Droit & LL.M. - 1 to 2 Years / 60–120 ECTS)"]
        },
        {
          t: "p",
          items: [
            "French master's degrees are divided into Master 1 (M1, advanced general foundation) and Master 2 (M2, specialized master's involving a professional internship or research thesis). Concurrently, top universities offer specialized English-taught LL.M. degrees designed specifically for international law graduates."
          ]
        },
        {
          t: "h4",
          items: ["Popular Law Specializations for International Students"]
        },
        {
          t: "bullets",
          items: [
            "International Business Law & Cross-Border Transactions: Cross-border contracts, transnational mergers & acquisitions, and global trade law.",
            "International Commercial Arbitration & ADR: ICC arbitration procedures, investment treaty dispute resolution, and international litigation.",
            "European Union Law & Competition Law: Single market regulation, antitrust enforcement, and state aid control.",
            "Intellectual Property & Digital Technologies Law: Patents, copyright, trademark management, AI governance, and EU GDPR data privacy compliance.",
            "International Human Rights & Humanitarian Law: Jurisprudence of the ECHR, refugee law, international criminal tribunals, and NGO advocacy.",
            "International Tax Law & Wealth Management: Cross-border tax treaties, transfer pricing, and corporate financial structuring."
          ]
        },
        {
          t: "h4",
          items: ["Doctoral Studies (Doctorat en Droit - 3 to 4 Years)"]
        },
        {
          t: "p",
          items: [
            "Dedicated research doctoral programs supervised within university legal research laboratories (Écoles Doctorales), preparing scholars for academic chairs, international institutional research, and supreme court consultancies."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Premier Faculties",
      title: "Top Universities for Law in France",
      unis: [
        {
          name: "University of Strasbourg (Université de Strasbourg)",
          city: "Strasbourg",
          state: "Grand Est",
          desc: "Located alongside the European Court of Human Rights and the European Parliament, the Faculty of Law at Strasbourg is an international powerhouse for European Law, International Human Rights, and Intellectual Property Law through its world-renowned CEIPI center.",
          img: uniImg1
        },
        {
          name: "Jean Moulin Lyon 3 University (Université Jean Moulin)",
          city: "Lyon",
          state: "Auvergne-Rhône-Alpes",
          desc: "Jean Moulin Lyon 3 houses one of France's largest and most respected law faculties. It is celebrated for its excellence in business law, private civil law, international commercial law, and English-taught LL.M. programs with strong corporate ties.",
          img: uniImg2
        },
        {
          name: "Toulouse Capitole University (Université Toulouse Capitole)",
          city: "Toulouse",
          state: "Occitanie",
          desc: "Toulouse Capitole is globally distinguished for law and economics, European competition law, intellectual property, and international business law. It is closely affiliated with the world-leading Toulouse School of Economics (TSE).",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Other prestigious French law faculties include Panthéon-Assas University (Paris II), Paris 1 Panthéon-Sorbonne University, Aix-Marseille University, Sciences Po Law School (Paris), and the University of Bordeaux."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Requirements for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "Admissions requirements vary based on the degree cycle, the medium of instruction (French vs. English), and the institution's specific selection criteria."
          ]
        },
        {
          t: "h4",
          items: ["Undergraduate Eligibility (Licence en Droit)"]
        },
        {
          t: "bullets",
          items: [
            "Academic Qualification: Higher Secondary School Certificate (Class 12) from CBSE, ICSE, or State Boards with a minimum of 60% – 70% aggregate.",
            "French Language Proficiency: Because undergraduate law degrees in France are taught almost entirely in French, applicants must present a minimum certified DELF B2 (or DALF C1) examination score.",
            "Admissions Route: Non-EU students apply through the Demande d'Admission Préalable (DAP Blanc) file via Campus France."
          ]
        },
        {
          t: "h4",
          items: ["Postgraduate Eligibility (Master en Droit / LL.M.)"]
        },
        {
          t: "bullets",
          items: [
            "Academic Qualification: Recognized 3-year LL.B. or 5-year integrated law degree (B.A. LL.B. / B.B.A. LL.B.) from a Bar Council of India (BCI) recognized university with minimum 55% – 60% aggregate.",
            "English Proficiency (for English LL.M.): IELTS Academic overall band score of 6.5 – 7.0 (with no band below 6.0) or TOEFL iBT of 90+.",
            "French Proficiency (for French Master 1/2): Minimum DELF B2 or DALF C1 certificate.",
            "Application Dossier: Official academic transcripts with certified translations, detailed CV, Statement of Purpose articulating legal career vision, and 2 letters of academic/professional recommendation."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Budgeting",
      title: "Cost of Studying Law & Living Expenses (2026–2027)",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees at France's public law faculties are heavily subsidized by the French state, representing extraordinary value for international students."
          ]
        },
        {
          t: "table",
          headers: ["Program Level & Institution Type", "EU / EEA National Fees", "Non-EU / International Student Fees"],
          rows: [
            ["Public University - Licence en Droit (UG)", "€178 / year", "€2,902 / year"],
            ["Public University - Master en Droit (PG)", "€255 / year", "€3,950 / year"],
            ["Public University - Doctorate (PhD)", "€398 / year", "€398 / year"],
            ["Specialized English LL.M. Programs (Assas, Lyon 3, etc.)", "€6,000 – €14,000 / year", "€8,000 – €18,000 / year"],
            ["Private Law Institutes / Grandes Écoles", "€10,000 – €20,000 / year", "€12,000 – €22,000 / year"],
            ["Campus Student Contribution (CVEC)", "€103 / year", "€103 / year"]
          ]
        },
        {
          t: "h4",
          items: ["Living Expenses & Student Subsidies"]
        },
        {
          t: "p",
          items: [
            "Monthly living expenses range from €700 to €1,000 in regional university hubs (Strasbourg, Lyon, Toulouse, Bordeaux) and €1,100 to €1,400 in Paris. Indian students in France benefit from universal French social healthcare (Ameli) and the government's CAF (Caisse d'Allocations Familiales) housing allowance, which reimburses up to 40% of monthly accommodation rent."
          ]
        },
        {
          t: "h4",
          items: ["Scholarships for Indian Law Students"]
        },
        {
          t: "bullets",
          items: [
            "French Embassy Charpak Master's Scholarship: Flagship scholarship covering monthly living stipends, student visa fee waivers, and social insurance coverage.",
            "Eiffel Excellence Scholarship: Highly prestigious French Ministry of Foreign Affairs award for top-tier master's and doctoral scholars in law and political science.",
            "University Merit Waivers: Many French universities offer partial or full tuition fee waivers to high-achieving non-EU applicants.",
            "Education Bank Loans: Tailored study loan options from major Indian nationalized and private banking partners coordinated via EduHawk."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions Roadmap",
      title: "Step-by-Step Guide to Applying for Law in France",
      steps: [
        {
          title: "Step 1: Program & Medium Selection",
          desc: "Decide whether an English-taught LL.M. (International Business Law, Arbitration) or a French-taught Master en Droit aligns with your career trajectory."
        },
        {
          title: "Step 2: Check Academic & Language Prerequisites",
          desc: "Verify undergraduate law degree requirements, GPA thresholds, and necessary language credentials (IELTS/TOEFL for English; DELF/DALF for French)."
        },
        {
          title: "Step 3: Dossier & Document Compilation",
          desc: "Prepare certified degree transcripts, legal writing samples, updated legal CV, tailored Statement of Purpose (SOP), and academic letters of recommendation."
        },
        {
          title: "Step 4: Campus France 'Études en France' Submission",
          desc: "Submit your application dossiers through the official Campus France online portal and directly to individual university admissions systems."
        },
        {
          title: "Step 5: Admissions Review & Interview",
          desc: "Complete any required online interviews or video questionnaires with law faculty admissions committees evaluating legal reasoning and motivation."
        },
        {
          title: "Step 6: Offer Acceptance & Deposit Payment",
          desc: "Review admission offers, remit the required enrollment confirmation deposit, and obtain your official Attestation d'Admission."
        },
        {
          title: "Step 7: Campus France NOC & Long-Stay Visa (VLS-TS)",
          desc: "Complete your in-person Campus France academic interview, obtain clearance, and submit your student visa application via VFS Global."
        },
        {
          title: "Step 8: Arrival, Housing & Residency Formalities",
          desc: "Arrive in France, validate your VLS-TS visa online via OFII, apply for CAF housing assistance, and commence your legal studies."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Professional Outcomes",
      title: "Career Opportunities & Salary Scope After Law in France",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of French law faculties and LL.M. programs are prized for their rigorous analytical methodology, dual civil-common law literacy, and supranational regulatory expertise. Careers span multinational corporate legal departments, international arbitration chambers, non-governmental organizations, and global consulting firms."
          ]
        },
        {
          t: "h4",
          items: ["Key Roles & Salary Progression in France & Europe"]
        },
        {
          t: "table",
          headers: ["Professional Designation", "Starting Salary (Entry-Level)", "Mid-to-Senior Level (3-6 Years)"],
          rows: [
            ["Corporate Legal Counsel / In-House Counsel", "€42,000 – €50,000 / year", "€65,000 – €90,000 / year"],
            ["International Commercial Arbitration Associate", "€45,000 – €55,000 / year", "€70,000 – €110,000 / year"],
            ["Regulatory Compliance & Risk Analyst", "€40,000 – €48,000 / year", "€60,000 – €80,000 / year"],
            ["Contract Management Specialist", "€38,000 – €46,000 / year", "€55,000 – €75,000 / year"],
            ["Data Protection Officer (DPO) / Privacy Counsel", "€45,000 – €52,000 / year", "€70,000 – €95,000 / year"],
            ["International Policy / Human Rights Officer", "€36,000 – €44,000 / year", "€52,000 – €72,000 / year"],
            ["Partner / Senior International Legal Advisor", "€70,000 – €90,000 / year", "€120,000 – €200,000+ / year"]
          ]
        },
        {
          t: "h4",
          items: ["Bar Admission & Professional Practice Note"]
        },
        {
          t: "p",
          items: [
            "Academic legal degrees (Licence, Master, LL.M.) qualify graduates for corporate in-house counsel, arbitration consultancy, and international advisory roles. Practicing as an independent courtroom advocate (Avocat) in France requires passing the regional French Bar entrance examination (CRFPA) and CAPA certification, or qualifying under reciprocal foreign lawyer provisions (Article 100 for foreign-qualified lawyers)."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "Frequently Asked Questions",
      title: "Law in France FAQs",
      faqs: [
        {
          q: "Can international students study law in France?",
          a: "Yes, international students are fully eligible to apply for undergraduate Licence en Droit, postgraduate Master en Droit, specialized Master of Laws (LL.M.), and doctoral law programs across public universities and private law schools in France."
        },
        {
          q: "Is an LLB available in France?",
          a: "The French equivalent of a common-law Bachelor of Laws (LL.B.) is the Licence en Droit, which takes 3 years to complete (180 ECTS credits). While some international institutes offer bilingual double degrees titled LL.B., the standard French national undergraduate degree is the Licence en Droit."
        },
        {
          q: "Can I study law in France in English?",
          a: "Yes, many leading French universities and business schools offer specialized Master of Laws (LL.M.) programs taught 100% in English in areas such as International Business Law, Cross-Border Transactions, and Commercial Arbitration. However, standard undergraduate Licence programs are taught primarily in French."
        },
        {
          q: "How much does it cost to study law in France?",
          a: "At public universities, published national tuition rates are €178 per year for a Licence and €255 per year for a Master's for EU students, while standard non-EU differentiated rates are €2,902 and €3,950 per year respectively. English-taught LL.M. programs at specialized public and private law institutes typically range from €8,000 to €18,000 per year."
        },
        {
          q: "Can I become a lawyer in France after studying law?",
          a: "Completing a law degree (Master 1 or Master 2) is the academic prerequisite for taking the French Bar entrance examination (CRFPA). To practice as an Avocat, candidates must complete 18 months of training at an École d'Avocats (EDA) and pass the CAPA bar exam. Alternatively, foreign lawyers may qualify via the Article 100 conversion examination."
        }
      ]
    }
  ]
};

export default function LawPage() {
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
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
