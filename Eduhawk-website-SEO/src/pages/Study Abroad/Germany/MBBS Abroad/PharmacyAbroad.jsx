import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/Pharmacy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/Pharmacy/The_University_of_Bonn.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/Pharmacy/The_University_of_Freiburg.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/Pharmacy/The_University_of_M_nster.webp";
import uniImg4 from "../../../../Images/Abroad/Germany/Pharmacy/The_University_of_T_bingen.webp";
import cmsData from "../../../../data/study_abroad/germany/pharmacy.json";

const page = {
  name: "Pharmacy in Germany",
  country: "Germany",
  slug: "pharmacy",
  title: "Pharmacy in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Pharmacy (Pharmazie) in Germany: Staatsexamen licensing, top public universities, eligibility, German language C1 requirements, tuition fees, and career opportunities.",
  keywords:
    "Study Pharmacy in Germany for Indian Students, Pharmacy Courses in Germany for International Students, Pharmacy (Pharmazie) in Germany, Pharmaceutical Sciences Courses in Germany, MSc in Pharmaceutical Sciences in Germany, Best Universities for Pharmacy in Germany, Pharmacy Eligibility Requirements in Germany, German Language Requirements for Pharmacy in Germany, Pharmacy Admission Requirements in Germany, Pharmacy Tuition Fees in Germany, Cost of Living for Pharmacy Students in Germany, Pharmacy Admission Process in Germany, Pharmacy Career Opportunities and Salary in Germany, Documents Required to Study Pharmacy in Germany",
  introTitle: "Study Pharmacy Courses in Germany",
  heroParas: [
    "Germany's powerhouse pharmaceutical industry, world-class research facilities, and tuition-free public universities make it an elite global destination for studying pharmacy (*Pharmazie*), pharmaceutical biotechnology, and clinical drug research with a direct path to European licensure (*Approbation*)."
  ],
  overview: [
    "**Key advantages of studying pharmacy in Germany:**",
    "* **World-Class Pharmaceutical Education:** Rigorous academic training governed by the federal *Approbationsordnung für Apotheker (AAppO)*.",
    "* **Zero Tuition Fees:** Most public universities charge zero general tuition fees, requiring only a nominal semester contribution (€150–€350) including transit passes.",
    "* **Global Industry Hub:** Germany is home to multinational pharmaceutical titans like Bayer, Boehringer Ingelheim, Merck KGaA, and BioNTech.",
    "* **Cutting-Edge Research:** Direct student participation in innovative drug discovery, pharmacology, biotechnology, and personalized medicine.",
    "* **Dual Career Paths:** Options to practice as a licensed state pharmacist (*Apotheker*) or work internationally in industrial R&D and pharmaceutical management."
  ],
  level: "State Examination in Pharmacy (Staatsexamen) / B.Sc. & M.Sc.",
  crumb: "Health Sciences / Pharmacy",
  stats: [
    {
      label: "Degree System",
      value: "Staatsexamen (4 yrs uni + 1 yr PJ) / M.Sc."
    },
    {
      label: "Tuition at Public Unis",
      value: "€0 / Free (Semester fee €150–€350)"
    },
    {
      label: "Language Requirement",
      value: "German C1 (Staatsexamen) / English (M.Sc.)"
    },
    {
      label: "Post-Study Work Visa",
      value: "18-Month Jobseeker Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Germany",
      title: "Why Study Pharmacy in Germany?",
      groups: [
        {
          t: "p",
          items: [
            "Germany is internationally recognized as the 'pharmacy of the world' (*Apotheke der Welt*), boasting a century-old heritage of pharmacological discovery, clinical innovation, and pharmaceutical engineering.",
            "Students gain profound expertise across pharmaceutical chemistry, biology, pharmacology and toxicology, clinical pharmacy, and pharmaceutical technology, supported by cutting-edge university laboratories and state-regulated practical clinical rotations."
          ]
        },
        {
          t: "points",
          title: "Core Advantages for International Students",
          items: [
            "**Tuition-Free Public Higher Education:** Zero universal tuition at world-renowned public universities (except state of Baden-Württemberg at €1,500/semester for non-EU students).",
            "**Federal Licensure (Approbation):** Completion of the Staatsexamen enables Indian and international graduates to receive their German license to practice as an independent community or hospital pharmacist across the EU.",
            "**Robust Job Market:** High domestic demand for pharmacists in public pharmacies (*Offizin-Apotheken*), clinical hospital pharmacies, and global pharmaceutical manufacturers.",
            "**Specialized Master's Pathways:** Opportunities to pursue English-taught M.Sc. in Pharmaceutical Sciences, Drug Discovery, and Industrial Pharmacy."
          ]
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Program Architecture",
      title: "German Pharmacy Study Options & Degrees",
      text: "International students can pursue state-regulated clinical qualification or research-driven university degree tracks:",
      cards: [
        {
          badge: "Clinical Track",
          title: "Pharmacy (Pharmazie — Staatsexamen)",
          desc: "The standard 4-year (8-semester) university curriculum covering Grundstudium (pre-clinical basics) and Hauptstudium (advanced clinical pharmacy), followed by 1 year of practical training (*Praktisches Jahr / PJ*) and 3 State Board Exams leading to *Approbation*."
        },
        {
          badge: "Postgraduate Degree",
          title: "M.Sc. in Pharmaceutical Sciences",
          desc: "A 1- to 2-year specialized Master's program focusing on molecular pharmacology, drug synthesis, nanotechnology delivery systems, and clinical trial design. Many programs are offered entirely in English."
        },
        {
          badge: "Biotech Track",
          title: "Pharmaceutical Biotechnology",
          desc: "Integrates recombinant DNA technology, cell culture engineering, biopharmaceuticals, and monoclonal antibody production for careers in modern biopharmaceutical and vaccine manufacturing."
        },
        {
          badge: "Industrial Track",
          title: "Industrial & Clinical Drug Research",
          desc: "Specialized postgraduate studies in regulatory affairs, pharmacovigilance, quality control (GMP/GLP), and healthcare economics tailored for multinational pharmaceutical corporations."
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities for Pharmacy in Germany",
      text: "Germany is home to some of the world's most prestigious institutes of pharmaceutical and biomedical science:",
      cards: [
        {
          name: "The University of Bonn",
          city: "Bonn, North Rhine-Westphalia",
          qsRank: "Top Tier Germany (QS #91)",
          tuition: "€0 / Free (Semester fee €330/sem)",
          programs: "Staatsexamen Pharmazie, M.Sc. Drug Research",
          highlights:
            "Home to the renowned PharmaCenter Bonn, offering cutting-edge laboratories in medicinal chemistry, pharmacology, and drug discovery alongside the German Federal Institute for Drugs and Medical Devices (BfArM).",
          link: "https://www.uni-bonn.de/",
          img: uniImg1
        },
        {
          name: "The University of Freiburg",
          city: "Freiburg im Breisgau, Baden-Württemberg",
          qsRank: "Top Tier Germany (QS #189)",
          tuition: "€1,500/sem (Non-EU) + €180 semester fee",
          programs: "Staatsexamen Pharmazie, M.Sc. Pharmaceutical Sciences",
          highlights:
            "Excellence University with an internationally acclaimed Institute of Pharmaceutical Sciences, pioneering research in epigenetics, biopharmaceutics, and clinical pharmacy practices.",
          link: "https://uni-freiburg.de/",
          img: uniImg2
        },
        {
          name: "The University of Münster (WWU)",
          city: "Münster, North Rhine-Westphalia",
          qsRank: "Top 200 Worldwide",
          tuition: "€0 / Free (Semester fee €320/sem)",
          programs: "Staatsexamen Pharmazie, M.Sc. Drug Sciences",
          highlights:
            "One of the largest and most well-equipped pharmacy departments in Germany with state-of-the-art analytical facilities and close integration with regional biotech clusters.",
          link: "https://www.uni-muenster.de/",
          img: uniImg3
        },
        {
          name: "The University of Tübingen",
          city: "Tübingen, Baden-Württemberg",
          qsRank: "Top Tier Germany (QS #213)",
          tuition: "€1,500/sem (Non-EU) + €180 semester fee",
          programs: "Staatsexamen Pharmazie, M.Sc. Cellular & Molecular Pharmacy",
          highlights:
            "World-renowned faculty with groundbreaking research programs in synthetic medicinal chemistry, natural product drug isolation, and oncology pharmacology.",
          link: "https://uni-tuebingen.de/",
          img: uniImg4
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Admissions Criteria",
      title: "Eligibility & Academic Qualifications",
      text: "Admission to pharmacy programs in Germany is highly competitive and regulated (often through *Numerus Clausus / NC* or uni-assist):",
      items: [
        "**Higher Secondary School Leaving Certificate:** 12th standard (Class XII) with excellent marks in Biology, Chemistry, Physics, and Mathematics.",
        "**Studienkolleg (M-Kurs) or 1 Year Higher Ed:** Indian 12-year schooling requires a 1-year preparatory foundation course (*Studienkolleg* Medicine/Biology track) and passing the *Feststellungsprüfung (FSP)*, or completion of 1 year of recognized university B.Sc. studies.",
        "**German Language Proficiency (C1 Level):** Essential for Staatsexamen Pharmazie since all patient interaction, legal regulations, and state exams are in German (TestDaF 4x4, Goethe-Zertifikat C1, or DSH-2).",
        "**English Language Proficiency:** For English-taught M.Sc. programs, IELTS 6.5+ or TOEFL iBT 90+.",
        "**APS Certificate:** Mandatory academic verification certificate from the German Embassy / APS India before visa and university submission.",
        "**Academic Motivation & Laboratory Record:** Strong SOP explaining clinical or pharmaceutical research interests and documented laboratory experience."
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Cost of Education",
      title: "Tuition Structure & Living Expenses",
      text: "Germany offers unmatched value for high-caliber medical and pharmaceutical training:",
      items: [
        "**Public University Tuition (€0 / Free):** 15 of 16 German federal states charge zero general tuition fees for undergraduate and Staatsexamen programs.",
        "**Baden-Württemberg Non-EU Tuition (€1,500/semester):** Applicable only at public universities within the state of Baden-Württemberg (e.g., Freiburg, Tübingen, Heidelberg).",
        "**Semester Contribution (€150–€350/semester):** Mandatory fee covering student union facilities, administrative processing, and a regional public transit ticket (*Semesterticket*).",
        "**Monthly Living Costs (€900–€1,300/month):** Covers student dormitory/apartment rent, food, mandatory statutory health insurance (~€125/month), books, and personal necessities.",
        "**German Blocked Account (Sperrkonto):** Proof of €11,904 per year deposited in an escrow blocked account to secure your German national student visa."
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Pathway",
      title: "Admission & Licensure Timeline for International Students",
      text: "Follow this systematic 10-step roadmap to study pharmacy and earn your license in Germany:",
      steps: [
        {
          num: "01",
          title: "Academic & Language Assessment",
          desc: "Evaluate 10+2 academic standing in Biology/Chemistry and begin German language training from A1 up to C1 level."
        },
        {
          num: "02",
          title: "APS Verification Certificate",
          desc: "Apply to the Academic Evaluation Centre (APS India) to verify academic credentials and obtain the official digital APS certificate."
        },
        {
          num: "03",
          title: "Select Course & Institutions",
          desc: "Identify prospective universities offering Staatsexamen Pharmazie or specialized English-taught M.Sc. Pharmaceutical Sciences."
        },
        {
          num: "04",
          title: "Foundation Studies (Studienkolleg M-Kurs)",
          desc: "If required, apply for university entrance examination (*Aufnahmeprüfung*) to complete the 1-year medical foundation M-Kurs."
        },
        {
          num: "05",
          title: "Application Submission",
          desc: "Submit official transcripts, translations, CV, and language credentials through uni-assist or directly via university portals."
        },
        {
          num: "06",
          title: "Admission Letter & Blocked Account",
          desc: "Secure your university admission offer (*Zulassungsbescheid*) and deposit living funds into a verified German blocked account (€11,904)."
        },
        {
          num: "07",
          title: "National Student Visa (Subtype D)",
          desc: "Book VFS appointment, complete student visa interview, and acquire German statutory health insurance."
        },
        {
          num: "08",
          title: "Academic Pharmacy Studies (4 Years)",
          desc: "Complete 8 semesters of rigorous university study: Grundstudium (Semesters 1-4, Exam 1) and Hauptstudium (Semesters 5-8, Exam 2)."
        },
        {
          num: "09",
          title: "Practical Year (Praktisches Jahr / PJ)",
          desc: "Complete 12 months of salaried practical internship (at least 6 months in a public community pharmacy, 6 months optional in hospital/industry)."
        },
        {
          num: "10",
          title: "Staatsexamen 3 & Approbation",
          desc: "Pass the 3rd State Examination and receive your permanent license (*Approbation*) to practice as a certified pharmacist across Germany and the EU."
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Career Pathways",
      title: "Career Opportunities & Salary in Germany",
      text: "German pharmacy graduates enjoy almost 100% employability across dynamic clinical, retail, and corporate sectors:",
      cards: [
        {
          badge: "Clinical / Retail",
          title: "Community & Hospital Pharmacist",
          desc: "Lead dispensing, medication safety, and clinical patient consults in Germany's 18,000+ public pharmacies or hospital clinic centers. Starting salary: €48,000–€62,000/year (tariff-bound by ADA/ADEXA)."
        },
        {
          badge: "Industry R&D",
          title: "Pharmaceutical Development Scientist",
          desc: "Conduct formulation research, synthesis of new chemical entities, and pre-clinical trials at multinational pharma giants like Bayer, Merck, and Boehringer. Starting salary: €58,000–€75,000/year."
        },
        {
          badge: "Compliance & Safety",
          title: "Regulatory Affairs & Pharmacovigilance",
          desc: "Manage marketing authorization dossiers, compliance with EMA/BfArM, and patient adverse event monitoring. Average salary: €60,000–€82,000/year."
        },
        {
          badge: "Quality Management",
          title: "Qualified Person (QP) & GMP Quality Assurance",
          desc: "Oversee batch release, production compliance, and laboratory sterility validation according to European Good Manufacturing Practice standards. Senior salary: €75,000–€100,000+/year."
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Checklist",
      title: "Documents Required for Application & Visa",
      text: "Ensure all documentation is translated into German or English by certified court translators:",
      items: [
        "Valid international passport with at least 12 months validity.",
        "Official secondary school leaving certificates (10th and 12th mark sheets).",
        "University transcripts and degree certificates (for Master's applicants).",
        "Official APS Verification Certificate from APS India.",
        "German language certificates (Goethe C1, TestDaF 4x4, or telc Deutsch C1 Hochschule).",
        "English language test report (IELTS/TOEFL) if applying for English-medium M.Sc.",
        "Detailed Academic Curriculum Vitae (Tabellarischer Lebenslauf).",
        "Statement of Purpose (Letter of Motivation) detailing career ambitions in pharmacy.",
        "German Blocked Account confirmation (€11,904) and statutory health insurance cover.",
        "Passport-size biometric photographs compliant with Schengen standards."
      ]
    }
  ],
  faqs: [
    {
      q: "Is English the primary language of pharmacy education in Germany?",
      a: "For the professional licensing pathway (*Pharmazie Staatsexamen*), the language of instruction and examination is exclusively German (requiring C1 proficiency). However, many research-focused Master's programs, such as M.Sc. in Pharmaceutical Sciences or Drug Discovery, are taught entirely in English."
    },
    {
      q: "What is the total duration of pharmacy education in Germany?",
      a: "The standard Staatsexamen pharmacy pathway takes approximately 5 years: 4 years (8 semesters) of university academic study, followed by a 1-year practical internship (*Praktisches Jahr / PJ*) and the 3rd State Examination before obtaining the *Approbation* license."
    },
    {
      q: "Does Germany offer tuition-free pharmacy education for international students?",
      a: "Yes. Most public universities in Germany charge no general tuition fees for international students, with students paying only a nominal semester contribution of €150 to €350 per semester. The only exception is the state of Baden-Württemberg, which charges non-EU students €1,500 per semester."
    },
    {
      q: "Can Indian students study Pharmacy in Germany after 12th standard?",
      a: "Yes. Indian students who have completed 12th standard with Physics, Chemistry, and Biology can study pharmacy in Germany. Since Indian high school is 12 years, students typically complete a 1-year preparatory foundation course (*Studienkolleg M-Kurs*) in Germany or 1 year of a recognized B.Sc. program in India before enrolling in the university degree."
    },
    {
      q: "Can foreign pharmacy graduates practice as licensed pharmacists in Germany?",
      a: "Yes. Foreign graduates can practice in Germany by applying for qualification recognition (*Anerkennung*) and passing the German medical language test (*Fachsprachenprüfung*) and knowledge exam (*Kenntnisprüfung*) to receive their German professional license (*Approbation*)."
    }
  ]
};

export default function PharmacyAbroad() {
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
    sections: (page.sections || []).map(sec => {
      if ((sec.slot === 'universities' || sec.slot === 'unis') && cmsData?.universities && cmsData.universities.length > 0) {
        return {
          ...sec,
          unis: cmsData.universities.map((u, idx) => ({
            name: u.name,
            desc: u.desc || '',
            img: (sec.unis?.[idx]?.img || sec.unis?.[idx]?.image) || u.image || u.img
          }))
        };
      }
      return sec;
    }),
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image,
          img: page.universities?.[idx]?.img || u.img
        }))
      : page.universities,
    faqs: ((cmsData?.faq || cmsData?.faqs) && (cmsData?.faq || cmsData?.faqs).length > 0)
      ? (cmsData.faq || cmsData.faqs).map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
      : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/germany/pharmacy"
    />
  );
}
