import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/Nursing/Heidelberg_University.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/Nursing/Freiburg_University.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/Nursing/Goethe_University_of_Frankfurt.webp";
import uniImg4 from "../../../../Images/Abroad/Germany/Nursing/T_bingen_University.webp";
import cmsData from "../../../../data/study_abroad/germany/nursing.json";

const page = {
  name: "Nursing in Germany",
  country: "Germany",
  slug: "nursing",
  title: "Nursing in Germany for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Nursing in Germany for international students: Top German universities, admission requirements, zero-tuition public education, living expenses, and 18-month post-study work visa.",
  keywords: "Study Nursing in Germany for Indian Students, Nursing Courses in Germany for International Students, Nursing (Pflegefachkraft) in Germany, Ausbildung Nursing in Germany with Stipend, B.Sc. Nursing in Germany, Best Universities for Nursing in Germany, Nursing Eligibility Requirements in Germany, German Language Requirements for Nursing in Germany, Nursing Admission Requirements in Germany, Nursing Tuition Fees in Germany, Cost of Living for Nursing Students in Germany, Recognition of Foreign Nursing Qualifications in Germany",
  introTitle: "Why Study Nursing in Germany?",
  heroParas: [
    "Germany offers world-class clinical nursing education, cutting-edge healthcare infrastructure, and unmatched career security, featuring paid vocational dual training (Ausbildung with €1,150 to €1,400/month stipend) and university Bachelor of Science in Nursing programs with 100% graduate job placement."
  ],
  overview: [
    "Germany's contemporary healthcare system, extensive opportunities for hands-on clinical training, and critical demand for skilled **nursing professionals (Pflegekräfte)** make it a premier global destination for nursing education. In university hospitals and specialized clinics, students gain deep theoretical knowledge combined with intensive practical **clinical experience**.",
    "Among the primary advantages of nursing in Germany are:",
    "* **Superior Dual Nursing Education:** Standardized nationwide training under the German Nursing Act (Pflegeberufegesetz), qualifying graduates across inpatient, outpatient, and pediatric care.",
    "* **Monthly Paid Training Stipend:** Students in vocational dual training (Ausbildung) receive a guaranteed monthly stipend of **€1,150 to €1,400+ per month**, eliminating tuition and living expenses during training.",
    "* **Tuition-Free Academic Pathways:** Academic university programs (B.Sc. in Nursing / Pflegewissenschaft) at public universities charge **€0 tuition fee** across 15 German federal states.",
    "* **100% Employment Guarantee:** Germany faces an urgent shortage of over 200,000 healthcare professionals, ensuring permanent contracts upon qualification.",
    "* **EU-Wide Credential Portability:** German nursing licenses (Staatliche Anerkennung als Pflegefachkraft) are recognized throughout the European Union.",
    "**Edu Hawk Worldwide Consultancy** helps nursing students and licensed GNM/B.Sc. nurses evaluate admission requirements, achieve required German language certifications (B1/B2), secure hospital placement contracts, and manage the visa and licensing process."
  ],
  level: "B.Sc. in Nursing & Dual Vocational (Pflegefachkraft)",
  crumb: "Health Sciences / Nursing",
  stats: [
    {
      label: "Degree Choices",
      value: "B.Sc. in Nursing & Dual Vocational (Pflegefachkraft)"
    },
    {
      label: "Course Duration",
      value: "3 to 3.5 Years (Theoretical & Clinical Rotations)"
    },
    {
      label: "Top Institutions",
      value: "Uni Heidelberg, Uni Freiburg, Goethe Frankfurt, Uni Tübingen"
    },
    {
      label: "Post-Study Work",
      value: "German Nursing License & Permanent Residence Pathway"
    }
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "German Nursing Programs & Clinical Training Pathways",
      groups: [
        {
          t: "p",
          items: [
            "In Germany, nursing education is organized into two primary tracks governed by the Federal Nursing Professions Act:",
            "* **Vocational Dual Nursing (Ausbildung zur Pflegefachkraft - 3 Years):** A state-regulated, hospital-based dual education model combining 2,100 theoretical classroom hours with 2,500 clinical rotation hours in internal medicine, surgery, pediatrics, and intensive care. Students receive a monthly living stipend.",
            "* **Academic Nursing (Pflegewissenschaft - B.Sc. in Nursing - 3 to 3.5 Years):** University-level degree programs focusing on evidence-based nursing science, clinical leadership, healthcare ethics, advanced diagnostic assistance, and specialized research.",
            "Specialized postgraduate and continuous clinical training programs include:"
          ]
        },
        {
          t: "pills",
          items: [
            "Generalist Nursing Qualification (Pflegefachmann / Pflegefachfrau)",
            "Bachelor of Science in Nursing Science (Pflegewissenschaft - B.Sc.)",
            "Intensive Care & Anesthesia Nursing (Intensiv- und Anästhesiepflege)",
            "Pediatric & Neonatal Nursing (Kinderkrankenpflege)",
            "Geriatric & Long-Term Care Nursing (Altenpflege)",
            "Surgical Technical Assistant (OTA - Operationstechnischer Assistent)",
            "Oncology & Palliative Care Nursing (Onkologische Pflege)",
            "Emergency Care & Trauma Nursing (Notfallpflege)",
            "Master of Science in Healthcare Management & Advanced Nursing Practice"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top German Universities & Hospital Clinics",
      title: "Best German Universities & University Hospital Academies for Nursing",
      unis: [
        {
          name: "Heidelberg University Hospital (Universitätsklinikum Heidelberg)",
          city: "Heidelberg, Baden-Württemberg",
          qsRank: "Top-Ranked Medical & Nursing Faculty in Germany",
          tuition: "€0 Tuition (Public) | Paid Ausbildung stipend €1,150 - €1,350/month",
          programs: "B.Sc. in Interprofessional Healthcare, Ausbildung zur Pflegefachkraft",
          highlights: "One of Europe's largest medical centers; features the Academy of Healthcare Professions with cutting-edge clinical simulation labs and direct oncology/surgical rotations.",
          link: "https://www.klinikum.uni-heidelberg.de",
          img: uniImg1
        },
        {
          name: "University of Freiburg Medical Center (Universitätsklinikum Freiburg)",
          city: "Freiburg im Breisgau, Baden-Württemberg",
          qsRank: "Renowned Academic Medical Center | German Center of Excellence",
          tuition: "€0 Tuition (Public) | Paid Ausbildung stipend €1,150 - €1,380/month",
          programs: "B.Sc. in Nursing Science, Generalist Dual Nursing Apprenticeship",
          highlights: "Exceptional clinical nurse-to-patient ratios, dedicated international student mentorship programs, and advanced simulation-based resuscitation training.",
          link: "https://www.uniklinik-freiburg.de",
          img: uniImg2
        },
        {
          name: "Goethe University Frankfurt (University Hospital Frankfurt)",
          city: "Frankfurt am Main, Hesse",
          qsRank: "Major European Medical Center | Center for Clinical Nursing",
          tuition: "€0 Tuition (Public) | Paid Ausbildung stipend €1,190 - €1,400/month",
          programs: "B.Sc. in Nursing & Clinical Healthcare, Dual Nursing Ausbildung",
          highlights: "Situated in Frankfurt's dynamic metropolitan region; clinical practice spans 32 specialized university hospital departments and emergency trauma centers.",
          link: "https://www.kgu.de",
          img: uniImg3
        },
        {
          name: "University of Tübingen (Universitätsklinikum Tübingen)",
          city: "Tübingen, Baden-Württemberg",
          qsRank: "Excellence University Medical Center",
          tuition: "€0 Tuition (Public) | Paid Ausbildung stipend €1,150 - €1,350/month",
          programs: "B.Sc. in Nursing Practice, Generalist Clinical Nursing Education",
          highlights: "Renowned children's hospital (Kinderklinik), international health center, and leading academic research into digital nursing documentation and patient safety.",
          link: "https://www.medizin.uni-tuebingen.de",
          img: uniImg4
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Eligibility Criteria",
      title: "Qualifications for Nursing Education in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Eligibility criteria depend on whether you are pursuing university degree studies (B.Sc. Nursing), vocational dual training (Ausbildung), or foreign nurse license recognition:",
            "**Dual Vocational Nursing (Ausbildung) Eligibility:**",
            "* **Educational Qualification:** 10th or 12th standard passing certificate (recognized equivalent to German Realschulabschluss or Abitur).",
            "* **German Language Proficiency:** Minimum **CEFR B2 level** (Goethe-Zertifikat, telc Deutsch B2, or ÖSD B2). Solid German communication is legally required for patient safety.",
            "* **Age Requirement:** Minimum 18 years of age at the start of clinical training.",
            "* **Medical Fitness:** Official medical fitness certificate (Ärztliches Attest) and complete immunizations (Hepatitis B, Measles, Varicella).",
            "**Academic Nursing (B.Sc. Nursing) Eligibility:**",
            "* 12th standard certificate equivalent to the German Abitur (or 1-year Studienkolleg M-Kurs) plus German B2/C1 proficiency.",
            "**Recognition for Indian Nurses (GNM / B.Sc. Nursing):**",
            "* Nurses holding Indian GNM diplomas or B.Sc. Nursing degrees can undergo the **Defizitbescheid adaptation process (Anpassungslehrgang / Kenntnisprüfung)** in Germany to earn full professional recognition (**Anerkennung als Pflegefachkraft**) while working on a nursing visa."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Application Checklist",
      title: "Admission Requirements for Nursing in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Required documentation for German hospital training academies and university nursing faculties includes:",
            "* Valid Passport (minimum 12 months validity).",
            "* Certified 10th and 12th Marksheets & Certificates (notarized with German translation).",
            "* Nursing Diploma / Degree & Registration Certificate (for Indian GNM/B.Sc. applicants).",
            "* **Mandatory APS Certificate** (for academic university programs).",
            "* Official German Language Proficiency Certificate (B2 Goethe / telc).",
            "* Comprehensive Europass CV in German.",
            "* Statement of Purpose / Motivation Letter in German explaining commitment to nursing.",
            "* Medical Fitness Certificate (Ärztliche Bescheinigung über die gesundheitliche Eignung).",
            "* Police Clearance Certificate (Führungszeugnis).",
            "* Proof of prior healthcare internships or hospital volunteering (if applicable)."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Financial Planning",
      title: "Cost of Nursing Education in Germany & Monthly Stipends",
      groups: [
        {
          t: "p",
          items: [
            "Nursing education in Germany is financially self-sustaining, with students earning attractive monthly wages during training:",
            "* **Ausbildung Monthly Stipend:** Dual nursing apprentices are paid a state-regulated monthly gross allowance under public collective agreements (TVAöD-Pflege):",
            "  * 1st Year: **€1,150 to €1,200 / month**",
            "  * 2nd Year: **€1,200 to €1,280 / month**",
            "  * 3rd Year: **€1,300 to €1,450 / month**",
            "* **No Blocked Account Required for Ausbildung:** Because the monthly training salary exceeds the German statutory subsistence minimum, vocational nursing applicants are **exempt from the €11,904 blocked account requirement**.",
            "* **Tuition-Free Public Education:** Vocational hospital academies and public universities charge **€0 tuition fees**.",
            "* **Subsidized Hospital Housing:** Most university hospital campuses offer subsidized student nurse dormitories (€250 - €400/month), significantly reducing cost of living.",
            "* **Semester Contribution:** University B.Sc. students pay only the standard €150 to €350/semester administrative fee covering public transit."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Pathway",
      title: "Admission Procedure for Nursing in Germany",
      steps: [
        {
          num: "01",
          title: "Achieve German B1/B2 Proficiency",
          desc: "Complete intensive German language training from A1 through B2 level and obtain an accredited certification (Goethe or telc B2)."
        },
        {
          num: "02",
          title: "Prepare Certified German Translations",
          desc: "Translate academic certificates, transcripts, and nursing credentials into German via sworn translators and obtain notarization."
        },
        {
          num: "03",
          title: "Apply to Hospital Academies / Universities",
          desc: "Submit application dossiers to university hospital nursing schools for Ausbildung or universities for B.Sc. programs."
        },
        {
          num: "04",
          title: "Attend Online Video Interviews",
          desc: "Complete an online video interview in German with hospital nurse managers and training academy directors."
        },
        {
          num: "05",
          title: "Receive Training Contract (Ausbildungsvertrag)",
          desc: "Sign your official 3-year dual nursing training contract specifying your monthly salary, clinical rotations, and hospital benefits."
        },
        {
          num: "06",
          title: "Obtain Federal Employment Approval (ZAV)",
          desc: "The hospital academy secures pre-approval from the Federal Employment Agency (Bundesagentur für Arbeit - ZAV)."
        },
        {
          num: "07",
          title: "Apply for German Vocational Visa (Section 16a)",
          desc: "Submit your training contract and ZAV approval to the German Embassy/VFS for the Ausbildung visa (no blocked account required)."
        },
        {
          num: "08",
          title: "Relocate & Settle in Hospital Housing",
          desc: "Arrive in Germany, move into subsidized hospital accommodation, and register at the local city office (Anmeldung)."
        },
        {
          num: "09",
          title: "Complete 3-Year Dual Training",
          desc: "Undergo integrated classroom education and clinical hospital ward rotations across medical, surgical, and pediatric units."
        },
        {
          num: "10",
          title: "State Exam & Permanent Employment",
          desc: "Pass the Staatsexamen, obtain your official license (Staatliche Anerkennung als Pflegefachkraft), and transition to permanent staff nurse status."
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Licensing & Recognition",
      title: "German Nursing License (Staatliche Anerkennung) & Regulation",
      groups: [
        {
          t: "p",
          items: [
            "Nursing in Germany is a legally protected and strictly monitored medical profession:",
            "* **Nursing Professions Act (Pflegeberufegesetz):** Standardizes generalist nursing qualifications nationwide, ensuring professional standards align with European Directive 2005/36/EC.",
            "* **State Nursing Registration (Staatliche Anerkennung):** Upon clearing the final state examination, graduates are registered as licensed nurses (Pflegefachkraft), granting full legal autonomy in administering clinical medications, IV therapies, and patient care.",
            "* **Fast-Track Permanent Residence:** Under Germany's Skilled Immigration Act (Fachkräfteeinwanderungsgesetz), qualified nurses are eligible for German Permanent Residence (Niederlassungserlaubnis) after just 3 years of employment.",
            "* **EU Mobility:** The qualification is automatically recognized across all 27 EU member states, allowing international mobility throughout Europe."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Employment Outlook",
      title: "Career & Salary Opportunities for Nurses in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Germany has an immense national demand for qualified nurses across public university hospitals, municipal clinics, private care facilities, and specialized rehabilitation centers.",
            "Popular career profiles include:",
            "* **Staff Nurse (Gesundheits- und Krankenpfleger/in):** Delivering acute patient care across medical, surgical, and emergency hospital wards.",
            "* **Intensive Care Specialist Nurse (Intensivpflegekraft):** Managing mechanical ventilators, life-support monitors, and post-operative ICU care.",
            "* **Operating Room Nurse (OP-Pflege / OTA):** Assisting surgical procedures, maintaining sterile instrumentation, and patient positioning.",
            "* **Pediatric / Neonatal Nurse (Kinderkrankenpfleger/in):** Providing specialized care in pediatric polyclinics and neonatal intensive care units.",
            "* **Ward Manager / Head Nurse (Stationsleitung):** Overseeing nursing shift management, clinical quality audits, and hospital staffing.",
            "* **Clinical Nurse Specialist & Nurse Educator:** Teaching nursing students at healthcare academies or leading clinical research protocols.",
            "**Estimated Gross Annual Salaries in Germany (TVöD-P Pay Scale):**",
            "* **Starting Staff Nurse:** **€36,000 to €45,000** gross per year (~€2,900 to €3,500/month plus shift bonuses).",
            "* **Specialist Nurse (ICU, OR, Anesthesia - 3+ years):** **€48,000 to €60,000** gross per year.",
            "* **Ward Managers & Nursing Directors (Pflegedienstleitung):** **€62,000 to €80,000+** gross per year.",
            "Nurses in Germany receive additional tax-free shift allowances for night shifts, weekend duties, and public holidays, along with 30 days of paid annual leave."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Required Paperwork",
      title: "Documents Required to Study & Practice Nursing in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Ensure all documentation is neatly compiled, translated into German by a sworn translator, and notarized where applicable:",
            "* Valid Passport (minimum 12 months validity).",
            "* Secondary School Certificates (10th and 12th standards).",
            "* Nursing Diploma / Degree & Consolidated Transcripts (for Indian GNM/B.Sc. applicants).",
            "* State Nursing Council Registration Certificate (for licensed nurses).",
            "* **Mandatory APS Certificate** (for academic university programs).",
            "* Official German Language Proficiency Certificate (B2 Goethe / telc).",
            "* Signed Dual Training Contract (Ausbildungsvertrag) or University Admission Letter.",
            "* Federal Employment Agency Pre-Approval (ZAV-Vorabzustimmung).",
            "* Medical Fitness Certificate (Ärztliche Bescheinigung) and Immunization Record.",
            "* Police Clearance Certificate (Führungszeugnis).",
            "* Europass format CV and Motivation Letter in German."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Is nursing taught in English in Germany?",
      a: "No. Vocational nursing training (Ausbildung) and clinical Bachelor's degrees in Germany are taught entirely in German, as nurses must communicate directly with patients, physicians, and emergency teams. Applicants require German proficiency at the B2 level (Goethe or telc B2). Only select non-clinical Master's programs in International Healthcare Management are offered in English."
    },
    {
      q: "Do nursing students in Germany get paid during training?",
      a: "Yes. Students in vocational dual nursing training (Ausbildung zur Pflegefachkraft) receive a guaranteed monthly gross stipend of €1,150 to €1,450 per month across all 3 years of training. Because this salary covers living expenses, Ausbildung visa applicants do not need to open a blocked account."
    },
    {
      q: "How long does nursing education take in Germany?",
      a: "Both the vocational dual nursing program (Ausbildung zur Pflegefachkraft) and the university academic degree (B.Sc. in Nursing) take 3 to 3.5 years (6 to 7 semesters), combining comprehensive theoretical classroom instruction with practical clinical hospital ward rotations."
    },
    {
      q: "Can Indian GNM and B.Sc. Nurses work in Germany?",
      a: "Yes. Indian nurses with a recognized GNM diploma or B.Sc. Nursing degree can apply for credential recognition (Anerkennungsverfahren) in Germany. Nurses learn German up to the B2 level, enter Germany on a recognition visa, complete a short adaptation course or knowledge test (Anpassungslehrgang / Kenntnisprüfung), and receive their full German nursing license with permanent hospital employment."
    },
    {
      q: "What is the job guarantee and career prospects for nurses in Germany?",
      a: "Germany has an unprecedented national shortage of nursing staff, offering a 100% employment guarantee upon graduation. Starting salaries range between €36,000 and €45,000 per year plus shift bonuses, and nurses are eligible for German Permanent Residence after just 3 years."
    }
  ]
};

export default function NursingAbroadGermanyPage() {
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
    ctaBg: ctaBgImg
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      images={images}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/germany/mbbs-abroad/nursing"
    />
  );
}
