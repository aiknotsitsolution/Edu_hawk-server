import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../data/study_abroad/ireland/law.json";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/Law/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/Law/Trinity_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/Law/University_College_Cork.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/Law/University_of_Galway.webp";
import uniImg4 from "../../../../Images/Abroad/Ireland/Law/Dublin_City_University.webp";

const page = {
  name: "Law in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/law",
  title: "Study Law in Ireland | Top Law Schools, LLB & LLM Degrees 2026/27",
  description: "Complete guide to studying Law in Ireland: top law faculties (Trinity, UCC, Galway, DCU), LLB, BCL & LLM degrees, Law Society FE-1 & King's Inns pathways, 2026/27 fees, and Stamp 1G graduate visa.",
  keywords: "Study Law in Ireland, LLB in Ireland, BCL Law Ireland, LLM in Ireland, Trinity School of Law, UCC Law, Galway Law Human Rights, DCU Law, Law tuition fees Ireland 2026 2027, Law Society FE-1 Ireland, Kings Inns Barrister Ireland",
  introTitle: "STUDY LAW IN IRELAND",
  heroParas: [
    "Ireland is the premier English-speaking common law jurisdiction within the European Union, offering prestigious law degrees deeply integrated with European jurisprudence, international human rights, and global corporate legal practice."
  ],
  overview: [
    "Law degrees in Ireland provide comprehensive academic foundations across constitutional law, criminal law, contract law, torts, equity, company law, and European Union law. Higher education institutions offer recognized 3-to-4-year undergraduate qualifications—including the Bachelor of Laws (LLB) and Bachelor of Civil Law (BCL Honours)—as well as intensive 1-year postgraduate Master of Laws (LLM) degrees specializing in International Commercial Law, Intellectual Property, FinTech & Technology Law, and International Human Rights.",
    "Graduating with an Irish law degree provides direct eligibility to sit the competitive entrance examinations for the two branches of the legal profession: Solicitors (via the Law Society of Ireland's Final Examination Part 1 / FE-1) and Barristers (via the Honourable Society of King's Inns). Irish legal qualifications are respected across common law jurisdictions worldwide, including the UK, USA (New York and California Bar eligibility), Canada, India, and Australia.",
    "Non-EU international graduates qualify for Ireland's Third Level Graduate Scheme (Stamp 1G), granting 12 months of post-study employment permission for NFQ Level 8 Honours Bachelor graduates and 24 months (2 full years) for NFQ Level 9 Master's graduates to launch high-trajectory legal and corporate advisory careers."
  ],
  level: "NFQ Level 8 (Honours LLB / BCL) & Level 9 (Postgraduate LLM)",
  crumb: "Law / Law",
  stats: [
    {
      label: "Legal System",
      value: "Common Law Jurisdiction (EU Member)"
    },
    {
      label: "Program Duration",
      value: "3–4 Years (LLB/BCL) / 1 Year (LLM)"
    },
    {
      label: "Annual Tuition (2026/27)",
      value: "€16,000 – €22,580 / year"
    },
    {
      label: "Post-Study Work Visa",
      value: "1 Year (UG) / 2 Years (PG) Stamp 1G"
    }
  ],
  unis: [
    {
      name: "Trinity College Dublin (School of Law)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Founded in 1740, Trinity School of Law is consistently ranked among the top 100 law schools worldwide. Delivers the prestigious 4-year LLB, Law and Business, and specialized LLM programs, maintaining deep ties with international corporate law firms and the Four Courts.",
      img: uniImg1
    },
    {
      name: "University College Cork (UCC School of Law)",
      city: "Cork",
      state: "Munster, Ireland",
      desc: "Ranked among the top 100 globally (QS World Subject Rankings). Offers the BCL (Law), BCL (Law and Business), BCL (Clinical Law), and specialized LLM degrees in Business Law, Environmental Law, and Law of Technology and Innovation.",
      img: uniImg2
    },
    {
      name: "University of Galway (School of Law & Irish Centre for Human Rights)",
      city: "Galway",
      state: "Connacht, Ireland",
      desc: "Internationally renowned for the BCL Law, BCL (Law and Human Rights), and its world-leading LLM in International Human Rights Law at the Irish Centre for Human Rights, training legal advocates for international tribunals and public policy.",
      img: uniImg3
    },
    {
      name: "Dublin City University (DCU School of Law and Government)",
      city: "Dublin",
      state: "Leinster, Ireland",
      desc: "Offers innovative, policy-focused law pathways including the BCL (Law and Society) and BA in Economics, Politics and Law, bridging corporate compliance, EU digital regulation, and public administration.",
      img: uniImg4
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Ireland",
      title: "Why Study Law in Ireland?",
      groups: [
        {
          t: "p",
          items: [
            "Studying law in Ireland offers unmatched exposure to common law jurisprudence within the European Union's largest corporate and financial services hub."
          ]
        },
        {
          t: "ul",
          items: [
            "Primary Native English Common Law Hub in the EU: Following Brexit, Ireland is the leading common law country in the European Union, making Irish law schools the top choice for international corporate and European commercial legal studies.",
            "World-Class Academic Ranking: Trinity College Dublin, UCC, and UCD consistently rank among the top 100 law schools globally, boasting alumni who hold high judicial and corporate leadership roles.",
            "Direct Professional Practice Pathways: Law curricula are carefully structured to cover all core subjects required for the Law Society of Ireland (FE-1 exams) and King's Inns (Barrister-at-Law entrance examinations).",
            "Specialized Master of Laws (LLM) Degrees: Intensive 1-year programs allow graduates to specialize in high-growth fields including Corporate & Financial Services Law, Artificial Intelligence & Data Privacy Regulation, Maritime Law, and International Human Rights.",
            "Global Transferability: Irish law degrees provide eligibility routes to qualify for bar examinations in the UK, the US (including New York and California State Bar Exams), and common law jurisdictions internationally.",
            "Stamp 1G Graduate Visa Scheme: Honours Bachelor graduates gain 1 year and LLM Master's graduates gain 2 full years of unrestricted full-time employment authorization in Ireland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Structures",
      title: "Law Degree Pathways in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish institutions provide law qualifications at undergraduate, graduate-entry, and postgraduate levels:",
            "Undergraduate Law Degrees (NFQ Level 8): 3-to-4-year honours programs including the Bachelor of Laws (LLB) and Bachelor of Civil Law (BCL). Popular joint honours include BCL Law and Business, BCL Law and French/German (with study abroad), and BCL Law and Human Rights.",
            "Graduate-Entry LLB (NFQ Level 8): Accelerated 2-to-3-year law programs designed for candidates who already hold a recognized Bachelor's degree in a non-law discipline, fast-tracking their legal qualification.",
            "Master of Laws - LLM (NFQ Level 9): 1-year full-time intensive postgraduate degrees including LLM in International Commercial Law, LLM in Intellectual Property & Information Technology, LLM in International Human Rights Law, and LLM in Environmental Law.",
            "Postgraduate Diplomas in Law: Conversion credentials for non-law graduates focusing on foundational common law principles and statutory compliance."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for Law Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admissions standards evaluate secondary school academic excellence, analytical reasoning, and English language communication:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate (LLB / BCL Entry): Higher Secondary School Certificate (Class 12) from CBSE, CISCE, or state boards with an aggregate of 75% to 85% across top academic subjects. Prior study of law is not required.",
            "Postgraduate (LLM Entry): A recognized 3-to-4-year Bachelor's degree in Law (LLB / BCL) with a minimum 60% aggregate (Second Class Honours 2.1). Several interdisciplinary LLM programs accept graduates from political science, international relations, or business backgrounds.",
            "English Language Test Scores: Non-native English speakers must achieve IELTS Academic 6.5 to 7.0 overall (minimum 6.0–6.5 in writing and reading), TOEFL iBT 90–100, or PTE Academic 63–68.",
            "Analytical & Writing Proficiency: Due to extensive essay writing, case law analysis, and statutory interpretation, strong academic writing ability is critical."
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
            "International applicants must compile and upload verified digital files through institutional portals:"
          ]
        },
        {
          t: "ul",
          items: [
            "Official Class 10 and Class 12 mark sheets and school-leaving certificates (for undergraduate applicants).",
            "Bachelor's degree certificate and consolidated academic transcripts (for postgraduate applicants).",
            "Valid International Passport with minimum 12 months validity.",
            "Official English Language proficiency test scorecard (IELTS, TOEFL iBT, or PTE Academic).",
            "Statement of Purpose (SOP) articulating passion for legal jurisprudence, chosen specialization, and professional career goals.",
            "Two Letters of Recommendation (LORs) from academic law professors or legal professionals.",
            "Curriculum Vitae (CV) showcasing moot court competitions, legal research publications, debate achievements, or legal internships."
          ]
        }
      ]
    },
    {
      slot: "cost",
      eyebrow: "Tuition & Costs",
      title: "Cost of Studying Law in Ireland (2026/27 Tuition & Living)",
      groups: [
        {
          t: "p",
          items: [
            "Budget planning includes international non-EU tuition fees, student levies, legal textbooks, and living expenses:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate Tuition Fees: Non-EU tuition fees for undergraduate law degrees (LLB/BCL) range from €16,000 to €22,580 per academic year.",
            "Postgraduate Tuition Fees: 1-year LLM tuition fees range from €17,000 to €21,500 at major research universities like UCC, University of Galway, and Trinity College Dublin.",
            "Living Costs (Dublin): Estimated at €1,000 to €1,400 monthly (€10,000 to €14,000 per academic year) for shared student accommodation, groceries, and travel.",
            "Living Costs (Cork & Galway): Approximately €800 to €1,100 per month (€8,000 to €11,000 per academic year), providing affordable living standards.",
            "Legal Textbooks & Subscriptions: Budget approximately €400 to €700 per year for law textbooks and commercial legal database access (Westlaw, LexisNexis).",
            "Student Employment Rights: International non-EU students on Stamp 2 visas can work up to 20 hours per week during semester terms and 40 hours per week during vacations, earning at least the Irish minimum wage of €13.50 per hour."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Professional Licensure",
      title: "Professional Legal Qualification Pathways in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "In Ireland, the legal profession is divided into two distinct branches, each regulated by its own professional body:"
          ]
        },
        {
          t: "ul",
          items: [
            "Solicitors (Law Society of Ireland): Solicitors provide general legal advice, draft contracts, handle corporate transactions, and instruct barristers. Qualification requires passing the 8 FE-1 examination papers, securing a 2-year training contract with a law firm, and completing the Professional Practice Course (PPC) at the Law Society.",
            "Barristers (Honourable Society of King's Inns): Barristers specialize in court advocacy and independent legal opinion. Qualification requires completing the Barrister-at-Law degree at King's Inns followed by a minimum of 1 year of pupillage (devilling) under an experienced Master.",
            "Direct Academic Recognition: Irish LLB and BCL degrees cover all prerequisite subjects required for entry into both the Law Society FE-1 and King's Inns entrance exams.",
            "International Bar Eligibility: Irish law graduates are recognized as holding qualifying common law degrees to sit the New York State Bar Exam, California Bar Exam, and Solicitors Qualifying Examination (SQE) in England and Wales."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Law Careers, Starting Salaries & Graduate Scope",
      groups: [
        {
          t: "p",
          items: [
            "Law graduates in Ireland enter a wide array of prestigious legal practices, multinational tech legal departments, financial compliance units, and public institutions:"
          ]
        },
        {
          t: "ul",
          items: [
            "In-Demand Career Profiles: Trainee Solicitor, Legal Executive, Corporate Compliance Analyst, Contract Specialist, Data Protection & Privacy Officer (GDPR), In-House Legal Counsel, Policy Advisor, and International Human Rights Advocate.",
            "Starting Salaries: Entry-level legal support and corporate compliance roles typically offer gross annual salaries between €28,000 and €40,000. Trainee solicitors at premier Dublin corporate law firms earn €45,000 to €55,000+, rising to €70,000–€100,000+ upon qualification.",
            "Top Legal Employers: Ireland's leading corporate law firms (Arthur Cox, A&L Goodbody, Matheson, McCann FitzGerald, William Fry) and European legal headquarters for Google, Meta, Pfizer, and Citi.",
            "Stamp 1G Graduate Visa: 1 year (for Level 8 LLB/BCL) or 2 years (for Level 9 LLM) of full-time, unrestricted employment authorization in Ireland."
          ]
        }
      ]
    }
  ],
  steps: [
    {
      title: "Select Law Degree & Specialization",
      desc: "Determine your pathway between an undergraduate LLB/BCL (3–4 years), Graduate-Entry LLB, or specialized 1-year LLM Master's."
    },
    {
      title: "Check Academic Entry Standards",
      desc: "Confirm Class 12 aggregate (75%–85%) or Bachelor's degree (60%–65%), and ensure strong analytical and writing foundations."
    },
    {
      title: "Appear for English Proficiency Test",
      desc: "Achieve minimum IELTS 6.5 to 7.0 overall (with 6.0–6.5 in writing and reading), TOEFL iBT 90+, or PTE Academic 63+."
    },
    {
      title: "Draft SOP & Assemble Academic Dossier",
      desc: "Write an articulate Statement of Purpose highlighting your legal ambitions and secure two academic letters of recommendation."
    },
    {
      title: "Submit Direct University Applications",
      desc: "Apply through institutional international admissions portals prior to published cutoff deadlines."
    },
    {
      title: "Accept Offer & Remit Tuition Deposit",
      desc: "Review your acceptance letter, confirm your offer, and wire the required tuition deposit to secure your university seat."
    },
    {
      title: "Apply for Irish Student Visa (Stamp 2)",
      desc: "Prepare your AVATS visa application with fee payment receipts, private health insurance, and documentation of living funds (€10,000–€12,000)."
    },
    {
      title: "Arrive in Ireland & Register with ISD",
      desc: "Travel to Ireland, arrange student accommodation, attend law orientation, and schedule your Irish Residence Permit (IRP) appointment."
    }
  ],
  table: {
    caption: "Indicative Law Tuition Fees in Ireland (2026/27 Intake)",
    headers: ["Institution", "Degree Title", "NFQ Level", "Annual Tuition (Non-EU)"],
    rows: [
      ["Trinity College Dublin (School of Law)", "Bachelor of Laws (LLB)", "Level 8 Honours", "€22,580 / year (4 Years)"],
      ["University College Cork (School of Law)", "BCL Law (Honours)", "Level 8 Honours", "€21,700 / year (3–4 Years)"],
      ["University College Cork (School of Law)", "LLM in Business Law / Tech Law", "Level 9 Master's", "€19,700 (1 Year)"],
      ["University of Galway (School of Law)", "BCL Law / Human Rights", "Level 8 Honours", "€19,390 / year (incl. levy)"],
      ["University of Galway (Irish Centre for HR)", "LLM in International Human Rights Law", "Level 9 Master's", "€18,500 (1 Year)"],
      ["Dublin City University (DCU)", "BCL (Law and Society)", "Level 8 Honours", "€16,000 – €17,500 / year"]
    ]
  },
  faqs: [
    {
      q: "Is Ireland a good country to study Law?",
      a: "Yes, Ireland is an exceptional destination for legal education. As the primary native English-speaking common law jurisdiction within the European Union, Ireland offers internationally recognized law degrees combining common law foundations with European commercial and human rights law, with universities like Trinity College Dublin and UCC ranked among the top 100 law schools worldwide."
    },
    {
      q: "How many years does it take to study Law in Ireland?",
      a: "Undergraduate law degrees (LLB or BCL) take 3 to 4 years of full-time study. Graduate-entry LLB programs for non-law degree holders take 2 to 3 years. Postgraduate Master of Laws (LLM) degrees are completed in 1 year of intensive full-time study."
    },
    {
      q: "Can I study Law in Ireland after Class 12?",
      a: "Yes, international students who have completed Class 12 (Higher Secondary Certificate from CBSE, CISCE, or state boards) with an aggregate between 75% and 85% can apply directly for undergraduate Bachelor of Laws (LLB) or Bachelor of Civil Law (BCL) degrees in Ireland without needing prior law studies."
    },
    {
      q: "How much does it cost to study Law in Ireland in 2026/27?",
      a: "Published non-EU tuition fees for 2026/27 range from €16,000 to €22,580 per year for undergraduate LLB/BCL degrees and €17,000 to €21,500 for 1-year postgraduate LLM programs. Living expenses average €8,000 to €14,000 per academic year depending on whether you live in Dublin or regional cities."
    },
    {
      q: "Can I qualify as a solicitor or barrister after studying Law in Ireland?",
      a: "Yes, an Irish law degree provides direct academic qualification to enter the professional training routes. To practice as a solicitor, graduates pass the FE-1 exams and complete a training contract with the Law Society of Ireland. To practice as a barrister, graduates complete the Barrister-at-Law degree at King's Inns followed by pupillage (devilling)."
    },
    {
      q: "How does EduHawk Worldwide Consultancy help students study law in Ireland?",
      a: "EduHawk Worldwide provides expert end-to-end advisory services including law school shortlisting, SOP and essay drafting, document verification, application submission, scholarship assistance, Irish student visa (Stamp 2) filing, and pre-departure accommodation briefings."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "Trinity_College_Dublin.webp": uniImg1,
  "University_College_Cork.webp": uniImg2,
  "University_of_Galway.webp": uniImg3,
  "Dublin_City_University.webp": uniImg4,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function LawIreland() {
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
