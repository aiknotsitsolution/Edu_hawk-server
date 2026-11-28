import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/Dentistry/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/Dentistry/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/Dentistry/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/Dentistry/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/Dentistry/Munich_s_Ludwig_Maximilian_Universi.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/Dentistry/The_University_of_Freiburg.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/Dentistry/The_University_of_Bonn.webp";
import uniImg4 from "../../../../Images/Abroad/Germany/Dentistry/The_University_of_Hamburg.webp";
import cmsData from "../../../../data/study_abroad/germany/dentistry.json";

const page = {
  name: "Dentistry in Germany",
  country: "Germany",
  slug: "dentistry",
  title: "Dentistry in Germany for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Dentistry in Germany for international students: Top German universities, admission requirements, zero-tuition public education, living expenses, and 18-month post-study work visa.",
  keywords: "Study Dentistry in Germany for Indian Students, Best Universities for Dentistry in Germany, Dentistry Courses in Germany for International Students, Dentistry (Zahnmedizin) in Germany, Dental Technology Courses in Germany, Oral and Maxillofacial Surgery in Germany, Dentistry Eligibility Requirements in Germany, German Language Requirements for Dentistry in Germany, Dentistry Admission Requirements in Germany, Dentistry Tuition Fees in Germany, Cost of Living for Dentistry Students in Germany, Dentistry Admission Process in Germany, Dentistry Career Opportunities and Salary in Germany, Recognition of Foreign Dental Qualifications in Germany",
  introTitle: "Why Study Dentistry in Germany?",
  heroParas: [
    "Germany offers world-class dental education (Zahnmedizin), sophisticated clinical simulation facilities, and comprehensive patient training, leading to the prestigious German State Examination (Staatsexamen) and licensing (Approbation) with tuition-free options at premier public medical faculties."
  ],
  overview: [
    "Germany provides sophisticated clinical facilities, hands-on preclinical training, and **exceptional dental education (Zahnmedizin)** that ranks among the finest in Europe. While modest semester contributions and living expenses apply, dental education at public universities is tuition-free across 15 of Germany's 16 federal states.",
    "Because dental practitioners directly interact with patients and adhere to statutory federal medical codes (Zahnärztliche Approbationsordnung - ZÄPrO), dentistry degree programs are conducted in **German (requiring C1 proficiency)**.",
    "Key highlights of studying dentistry in Germany include:",
    "* **State-of-the-Art Clinical Polyclinics:** Direct patient care experience in university dental hospitals equipped with digital CAD/CAM dentistry, 3D imaging, and phantom simulation units.",
    "* **Rigorous 5- to 6-Year Curriculum:** Balanced combination of pre-clinical sciences (anatomy, physiology, dental materials) and clinical disciplines (prosthodontics, orthodontics, periodontology, oral surgery).",
    "* **State Examination & Licensure (Approbation):** Successful completion awards the German Dental License (Approbation), recognized throughout the European Union and internationally.",
    "* **Specialist Pathways in Oral Surgery:** Seamless progression into maxillofacial surgery, advanced implantology, or academic dental research (Dr. med. dent.).",
    "**Edu Hawk Worldwide Consultancy** helps students navigate university entrance requirements, Studienkolleg preparation, medical German language pathways, and credential recognition for an overseas medical education."
  ],
  level: "State Examination in Dentistry (Zahnmedizin - Staatsexamen)",
  crumb: "Health Sciences / Dentistry",
  stats: [
    {
      label: "Degree Choices",
      value: "State Examination (Zahnmedizin - Staatsexamen)"
    },
    {
      label: "Course Duration",
      value: "5 to 6 Years (10-11 Semesters + Exams)"
    },
    {
      label: "Top Institutions",
      value: "LMU Munich, Uni Freiburg, Uni Bonn, Uni Hamburg"
    },
    {
      label: "Post-Study Work",
      value: "German Dental License (Approbation) & 18-Mo Visa"
    }
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "German Dentistry Courses & Clinical Structure",
      groups: [
        {
          t: "p",
          items: [
            "Dental education in Germany is regulated by the federal licensing act for dentists (Zahnärztliche Approbationsordnung). The full curriculum spans 10 to 11 semesters (5 to 5.5 years) plus final state board examinations.",
            "The curriculum is divided into two comprehensive phases:",
            "* **Pre-Clinical Phase (Vorklinischer Abschnitt - Semesters 1 to 5):** Covers general medical foundations (anatomy, histology, physiology, biochemistry, pathology) combined with dental propaedeutics, dental materials science, and intensive phantom head laboratory courses (Zahnärztliche Vorprüfung / Physikum).",
            "* **Clinical Phase (Klinischer Abschnitt - Semesters 6 to 10):** Direct supervised patient diagnosis and treatment covering conservative dentistry, endodontics, prosthetics, periodontology, pediatric dentistry, orthodontics, and oral surgery, culminating in the Zahnärztliche Prüfung (State Examination).",
            "Specialized and postgraduate pathways include:"
          ]
        },
        {
          t: "pills",
          items: [
            "Zahnmedizin (Dental Medicine - Staatsexamen)",
            "Pre-Clinical Dental Propaedeutics & Phantom Courses",
            "Conservative Dentistry & Endodontics",
            "Prosthodontics & CAD/CAM Dental Technology",
            "Periodontology & Oral Implantology",
            "Orthodontics & Dentofacial Orthopedics",
            "Oral and Maxillofacial Surgery (Mund-, Kiefer- und Gesichtschirurgie)",
            "Dental Research Doctorate (Dr. med. dent.)",
            "Public Health Dentistry & Dental Biomaterials"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top German Universities",
      title: "Best German Universities & Medical Faculties for Dentistry",
      unis: [
        {
          name: "Ludwig Maximilian University of Munich (LMU Munich)",
          city: "Munich, Bavaria",
          qsRank: "Top 40 Worldwide | Leading German Medical Faculty",
          tuition: "€0 Tuition (Public) | ~€150/semester contribution (incl. transit ticket)",
          programs: "Zahnmedizin (State Examination), Postgraduate Specialization in Oral Surgery",
          highlights: "One of Europe's premier medical and dental centers; features high-tech clinical polyclinics, advanced 3D diagnostics, and extensive clinical research labs.",
          link: "https://www.lmu.de",
          img: uniImg1
        },
        {
          name: "University of Freiburg (Albert-Ludwigs-Universität)",
          city: "Freiburg im Breisgau, Baden-Württemberg",
          qsRank: "Renowned Center for Operative Dentistry & Periodontology",
          tuition: "€1,500/semester (Baden-Württemberg non-EU fee) + ~€180 semester fee",
          programs: "Zahnmedizin (State Examination), Dr. med. dent. Research",
          highlights: "State-of-the-art dental simulation phantom centers, award-winning faculty in periodontology, and intimate clinical training groups.",
          link: "https://www.uni-freiburg.de",
          img: uniImg2
        },
        {
          name: "University of Bonn (Rheinische Friedrich-Wilhelms-Universität)",
          city: "Bonn, North Rhine-Westphalia",
          qsRank: "German University of Excellence | Top Biomedical Center",
          tuition: "€0 Tuition (Public) | ~€330/semester contribution (incl. state transit pass)",
          programs: "Zahnmedizin (State Examination), Maxillofacial Surgery Training",
          highlights: "Modern Center for Dental, Oral, and Craniomaxillofacial Medicine; outstanding patient clinic ratio and international research partnerships.",
          link: "https://www.uni-bonn.de",
          img: uniImg3
        },
        {
          name: "University of Hamburg (UKE - University Medical Center Hamburg-Eppendorf)",
          city: "Hamburg",
          qsRank: "Top-Ranked Northern German Medical Center",
          tuition: "€0 Tuition (Public) | ~€340/semester contribution",
          programs: "Zahnmedizin (State Examination), Oral Implantology & Biomaterials",
          highlights: "Integrated campus at UKE with cutting-edge dental polyclinics, advanced dental implantology research, and interdisciplinary oral oncology teams.",
          link: "https://www.uke.de",
          img: uniImg4
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Eligibility Criteria",
      title: "Qualifications for Studying Dentistry in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Dentistry in Germany is subject to nationwide restricted admissions (**Numerus Clausus - NC**) due to extreme competition. Candidates must meet rigorous academic and linguistic standards:",
            "* **Higher Secondary Qualification:** A recognized school-leaving certificate equivalent to the German Abitur with top percentile grades in Biology, Chemistry, Physics, and Mathematics.",
            "* **Studienkolleg & FSP:** Indian applicants with 12th-grade schooling generally complete a 1-year medical preparatory course (**Studienkolleg M-Kurs**) and pass the **Feststellungsprüfung (FSP)** with exceptional grades (1.0 to 1.3 on the German grading scale), unless possessing 1 year of recognized university-level science education in India or an IB Diploma.",
            "* **Advanced German Language Proficiency:** Because instruction, examinations, and clinical patient treatments are in German, applicants must achieve **CEFR C1 level proficiency** (TestDaF 4x4 or 5, DSH-2 or DSH-3, or Goethe-Zertifikat C1/C2).",
            "* **Test for Medical Studies (TMS):** Taking the TMS (Test für Medizinische Studiengänge) is strongly recommended to enhance admission chances at competitive universities.",
            "* **Foreign Trained Dentists:** Qualified dentists from India holding a recognized BDS degree can apply for the **Approbation recognition process (Gleichwertigkeitsprüfung / Kenntnisprüfung)** in Germany to receive their medical license."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Application Checklist",
      title: "Admission Requirements for Dental Programs in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Applications for dentistry are processed through **Uni-Assist** or the central medical admissions portal **Hochschulstart.de** (depending on state quotas and applicant nationality).",
            "Indian candidates must prepare the following certified documentation:",
            "* Valid Passport (minimum 12 months validity).",
            "* Certified 10th and 12th Secondary School Marksheets & Passing Certificates.",
            "* BDS Degree Certificate and complete clinical transcripts (for foreign dentist license recognition).",
            "* **Mandatory APS Certificate** issued by APS India.",
            "* Advanced German Language Certificate (C1 level: TestDaF, DSH-2/3, or Goethe C1).",
            "* Feststellungsprüfung (FSP) certificate from a recognized Studienkolleg (M-Kurs).",
            "* Proof of medical internships, dental assistant shadowing, or hospital volunteering.",
            "* Statement of Purpose (SOP) written in German detailing dedication to dental medicine.",
            "* Europass format CV in German.",
            "* Medical fitness certificate and complete immunization records (Hepatitis B, Measles, etc.)."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Financial Planning",
      title: "Cost of Dental Education in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Studying dentistry at German public universities is virtually tuition-free, making it one of the most accessible top-tier dental programs worldwide:",
            "* **Public Universities:** Preclinical and clinical dental degree programs across 15 of Germany's 16 federal states charge **€0 tuition fee** for domestic and international students alike.",
            "* **Baden-Württemberg State Tuition:** Public medical faculties in Baden-Württemberg (e.g., Freiburg, Heidelberg) charge **€1,500 per semester** for non-EU international students.",
            "* **Semester Contribution (Semesterbeitrag):** Public universities require a mandatory administrative fee of **€150 to €400 per semester**, which includes an all-inclusive public transportation ticket (Semesterticket).",
            "* **Dental Instruments & Materials Fee:** Dental students must budget approximately **€2,000 to €5,000 one-time** during preclinical semesters for specialized dental instrument kits, articulators, phantom course materials, and turbine handpieces.",
            "* **Monthly Living Expenses:** Budget approximately **€900 to €1,300 per month** covering student housing (€350 - €600), statutory health insurance (~€125 - €130), food, books, and personal necessities.",
            "* **German Blocked Account (Sperrkonto):** For student visa processing, international students must deposit **€11,904 per year** into an approved German blocked account as proof of financial resources."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Pathway",
      title: "Admission Procedure for Dentistry in Germany",
      steps: [
        {
          num: "01",
          title: "Achieve German C1 Proficiency",
          desc: "Master the German language from A1 to C1 level (TestDaF 4x4 or DSH-2), as dentistry in Germany is exclusively taught and practiced in German."
        },
        {
          num: "02",
          title: "Secure APS Certificate",
          desc: "Submit your academic records early to APS India to obtain the mandatory APS verification certificate."
        },
        {
          num: "03",
          title: "Complete Studienkolleg (M-Kurs)",
          desc: "Enroll in a 1-year medical foundation program (Studienkolleg M-Kurs) in Germany and pass the Feststellungsprüfung (FSP) with top honors."
        },
        {
          num: "04",
          title: "Take Medical Aptitude Test (TMS)",
          desc: "Appear for the Test für Medizinische Studiengänge (TMS) to substantially boost your admission rank across public medical faculties."
        },
        {
          num: "05",
          title: "Submit University Applications",
          desc: "Apply via Uni-Assist or directly to university portals before the strict July 15 (Winter Intake) deadline."
        },
        {
          num: "06",
          title: "Obtain Nursing / Clinical Pre-Internship",
          desc: "Complete the mandatory 1-month nursing pre-internship (Krankenpflegedienst) and first aid training required before preclinical registration."
        },
        {
          num: "07",
          title: "Receive Admission Offer (Zulassungsbescheid)",
          desc: "Accept your official university admission letter and complete preliminary registration requirements."
        },
        {
          num: "08",
          title: "Open Blocked Account & Secure Visa",
          desc: "Deposit €11,904 in a German blocked account (Sperrkonto), obtain statutory health insurance, and apply for the National Student Visa (Subtype 16b)."
        },
        {
          num: "09",
          title: "Matriculate & Purchase Dental Instrument Kit",
          desc: "Complete university matriculation (Immatrikulation), city registration (Anmeldung), and acquire preclinical dental phantom instrument sets."
        },
        {
          num: "10",
          title: "Complete 5-Year Curriculum & State Exam",
          desc: "Complete pre-clinical and clinical dental training, pass the Staatsexamen, and receive your German Dental License (Approbation)."
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Licensing & Regulation",
      title: "Accreditation and License to Practice Dentistry (Approbation) in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Dentistry in Germany is a strictly regulated medical profession governed by federal legislation:",
            "* **Federal Dental Licensing Regulations (ZÄPrO):** Sets the standardized nationwide curriculum, exam criteria, and clinical training mandates.",
            "* **Approbation als Zahnarzt:** Upon passing the final State Examination (Zahnärztliche Prüfung), graduates receive the permanent German Dental License (Approbation), granting the legal right to practice independently throughout Germany and the European Union.",
            "* **State Dental Chambers (Landeszahnärztekammer):** All dentists are registered with their respective state dental chamber, ensuring ethical standards and continuing professional education (Fortbildungspflicht).",
            "* **Recognition for Indian BDS Graduates:** Dentists with Indian qualifications can apply to the regional health authority (Regierungspräsidium) for licensure assessment. If substantial equivalence is identified, candidates clear a Medical German exam (Fachsprachenprüfung - C1) and a clinical knowledge assessment (Kenntnisprüfung) to receive their full German Approbation."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Employment Outlook",
      title: "Career & Salary Opportunities After Dentistry in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Qualified dentists in Germany enjoy outstanding prestige, job security, and high earning potential. Germany has an aging demographic and robust statutory dental insurance coverage (Kassenzahnärztliche Vereinigung).",
            "Popular career profiles include:",
            "* **Employed Dentist (Angestellter Zahnarzt):** Working in established dental group practices (MVZ) or private clinics.",
            "* **Private Practice Owner (Praxisinhaber):** Establishing or acquiring an independent dental practice (Niederlassung in eigener Praxis).",
            "* **Hospital Dental Surgeon:** Providing emergency dental medicine, maxillofacial care, and trauma surgery in university hospital clinics.",
            "* **Specialist Orthodontist (Fachzahnarzt für Kieferorthopädie):** Specializing in malocclusion, braces, and dentofacial orthopedics after a 3-year residency.",
            "* **Specialist Oral Surgeon (Fachzahnarzt für Oralchirurgie):** Performing implantology, bone grafting, and complex wisdom tooth extractions.",
            "* **Academic Researcher & University Lecturer:** Pursuing a dental doctorate (Dr. med. dent.) and clinical research in dental biomaterials.",
            "**Estimated Gross Annual Salaries in Germany:**",
            "* **Preparatory / Assistant Dentist (Vorbereitungsassistent):** **€40,000 to €52,000** per year (mandatory 2-year post-graduation residency).",
            "* **Employed Associate Dentist:** **€65,000 to €95,000** per year.",
            "* **Private Dental Practice Owners / Specialists:** **€110,000 to €220,000+** net profit per year."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Required Paperwork",
      title: "Documents Required for Dentistry in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Ensure all documentation is neatly compiled, translated into German by a certified sworn translator, and notarized where applicable:",
            "* Valid Passport (minimum 12 months validity).",
            "* Secondary School Certificates & Marksheets (10th & 12th standards).",
            "* Studienkolleg Certificate and Feststellungsprüfung (FSP) scorecard (M-Kurs).",
            "* BDS Degree Certificate, Internship Completion Certificate, and Transcripts (for Indian dentist license recognition).",
            "* **Mandatory APS Certificate** issued by APS India.",
            "* German Language Proficiency Certificate (TestDaF 4x4 or DSH-2/3, CEFR C1).",
            "* TMS (Test für Medizinische Studiengänge) score report (if taken).",
            "* Proof of Nursing Pre-Internship (Krankenpflegedienst) and First Aid Training.",
            "* Medical Fitness Certificate and Comprehensive Immunization Record (Hepatitis B, MMR).",
            "* Certificate of Good Standing from the Dental Council of India (for BDS license applicants).",
            "* Europass format CV and Statement of Purpose (SOP) in German.",
            "* Blocked Account Confirmation (€11,904) and German Statutory Health Insurance."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Does dental education in Germany take place in English?",
      a: "No. Undergraduate dentistry programs (Zahnmedizin - Staatsexamen) in Germany are conducted entirely in German, as students must communicate directly with patients during clinical rotations. Applicants require advanced German proficiency at the C1 level (TestDaF 4x4 or DSH-2). Only select postgraduate research degrees (M.Sc. in Biomaterials or specialized PhDs) are offered in English."
    },
    {
      q: "How long does it take to complete dentistry studies in Germany?",
      a: "The full dentistry curriculum in Germany takes 5 to 6 years (10 to 11 semesters), encompassing 5 semesters of preclinical sciences and phantom lab training, followed by 5 semesters of clinical patient treatment and the final State Examination (Zahnärztliche Prüfung)."
    },
    {
      q: "Is dental education tuition-free in Germany?",
      a: "Yes. Public universities across 15 of Germany's 16 federal states charge zero tuition fees for both EU and non-EU international students, requiring only a modest semester contribution of €150 to €400. In Baden-Württemberg, public universities charge €1,500 per semester. Students must also budget a one-time fee of €2,000 to €5,000 for their preclinical dental instrument kit."
    },
    {
      q: "Can Indian students pursue dentistry in Germany after 12th grade?",
      a: "Yes. Indian students with a strong background in Biology, Chemistry, Physics, and Mathematics can apply. Indian students typically complete a 1-year preparatory Studienkolleg (M-Kurs), pass the Feststellungsprüfung (FSP) with top grades, and achieve German C1 proficiency before entering university dentistry programs."
    },
    {
      q: "Can Indian BDS graduates practice dentistry in Germany?",
      a: "Yes. Indian BDS graduates can apply for medical license recognition (Approbation als Zahnarzt). The process involves credential evaluation by state health authorities, passing a Medical German exam (Fachsprachenprüfung - C1), and clearing a clinical equivalency examination (Kenntnisprüfung) to receive their full license to practice in Germany."
    }
  ]
};

export default function DentistryAbroadGermanyPage() {
  const dynamicPage = {
    ...page,
    name: "Dentistry",
    introTitle: cmsData.hero?.title || page.introTitle,
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
      seoPath="/study-abroad/germany/dentistry"
    />
  );
}
