import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/Physiotherapy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/Physiotherapy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/Physiotherapy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/Physiotherapy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/Physiotherapy/Hochschule_Furtwangen_University.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/Physiotherapy/Alice_Salomon_University_of_Applied.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/Physiotherapy/Osnabr_ck_University_of_Applied_Sci.webp";
import cmsData from "../../../../data/study_abroad/germany/physiotherapy.json";

const page = {
  name: "Physiotherapy in Germany",
  country: "Germany",
  slug: "physiotherapy",
  title: "Physiotherapy in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Physiotherapy in Germany: B.Sc. degrees, dual vocational Ausbildung training, state licensing under MPhG, top universities, tuition fees, and career opportunities.",
  keywords:
    "Study Physiotherapy in Germany for Indian Students, Physiotherapy Courses in Germany for International Students, Physiotherapy Vocational Training in Germany, Bachelor's in Physiotherapy in Germany, Master's in Physiotherapy in Germany, Best Universities for Physiotherapy in Germany, Physiotherapy Eligibility Requirements in Germany, German Language Requirements for Physiotherapy in Germany, Physiotherapy Admission Requirements in Germany, Physiotherapy Tuition Fees in Germany, Cost of Living for Physiotherapy Students in Germany, Physiotherapy Career Opportunities and Salary in Germany, Documents Required to Study Physiotherapy in Germany",
  introTitle: "Study German Physiotherapy Courses in Germany",
  heroParas: [
    "Germany offers world-renowned orthopedic rehabilitation facilities, evidence-based academic degrees, and dual vocational training (*Ausbildung*) in physiotherapy, providing international students with hands-on clinical experience, low or zero tuition fees, and state licensing (*Staatliche Anerkennung*) to practice across Europe."
  ],
  overview: [
    "**Key advantages of studying physiotherapy in Germany:**",
    "* **State-Regulated Medical Standards:** Governed by the federal *Masseur- und Physiotherapeutengesetz (MPhG)* ensuring elite EU-wide professional accreditation.",
    "* **Practical Clinical Immersion:** Over 1,600 hours of mandatory supervised clinical internships in orthopedic centers, university hospitals, and sports clinics.",
    "* **Dual Vocational Stipends:** Students enrolled in hospital-based vocational *Ausbildung* programs receive a monthly training stipend (€1,050 to €1,300/month).",
    "* **Zero or Low Tuition:** Public universities of applied sciences (*Fachhochschulen*) charge no universal tuition fees, requiring only semester contributions.",
    "* **High Employment Demand:** Rapidly aging demographics and active sports cultures ensure high demand for certified physiotherapists in clinics, private practices, and rehabilitation resorts."
  ],
  level: "Bachelor of Science (B.Sc.) / Dual Ausbildung / M.Sc.",
  crumb: "Health Sciences / Physiotherapy",
  stats: [
    {
      label: "Program Types",
      value: "B.Sc. (3–4 Yrs) / Dual Ausbildung (3 Yrs)"
    },
    {
      label: "Tuition / Stipend",
      value: "€0 Tuition / €1,050–€1,300/mo Stipend"
    },
    {
      label: "Language Needed",
      value: "German B2 (Clinical & Patient Care)"
    },
    {
      label: "Post-Study Visa",
      value: "18-Month Jobseeker Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Germany",
      title: "Why Study Physiotherapy in Germany?",
      groups: [
        {
          t: "p",
          items: [
            "Germany is a global pioneer in physical medicine, trauma rehabilitation, and orthopedic sports science. State-of-the-art rehabilitation clinics and university medical centers provide unmatched clinical training environments.",
            "Physiotherapy students gain mastery over musculoskeletal therapy, neurological recovery (Bobath/Vojta concepts), cardiorespiratory physiotherapy, and pediatric movement rehabilitation, supported by modern biomechanical laboratories."
          ]
        },
        {
          t: "points",
          title: "Core Benefits for International Candidates",
          items: [
            "**Direct Clinical Exposure:** Immediate integration into real patient care through clinical rotations in university hospitals and trauma centers.",
            "**Tuition-Free Academic Degrees:** Public universities offer accredited Bachelor of Science (B.Sc.) degrees without tuition fees (except state of Baden-Württemberg).",
            "**Earn While Learning:** Hospital-affiliated *Ausbildung* training programs pay an attractive gross monthly allowance, significantly reducing the cost of living.",
            "**EU-Wide Professional Freedom:** The German state title *Staatlich anerkannte/r Physiotherapeut/in* permits professional practice throughout Germany and member states of the European Union."
          ]
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Study Models",
      title: "German Physiotherapy Course Pathways",
      text: "International students can choose between dual clinical apprenticeship and university academic tracks:",
      cards: [
        {
          badge: "Vocational Track",
          title: "Vocational Training (Ausbildung - 3 Years)",
          desc: "Three-year hospital-based professional training combining 2,900 theoretical hours with 1,600 practical clinical hours. Graduates earn the state professional title and receive monthly stipends ranging from €1,050 to €1,300."
        },
        {
          badge: "University Degree",
          title: "Bachelor of Science (B.Sc. Physiotherapie - 3 to 4 Years)",
          desc: "Academic degree offered at Universities of Applied Sciences (*Fachhochschulen*), often combining the vocational state license exam with advanced research in evidence-based clinical therapy, biomechanics, and healthcare management."
        },
        {
          badge: "Postgraduate Degree",
          title: "Master of Science (M.Sc. Physiotherapie - 1.5 to 2 Years)",
          desc: "Advanced postgraduate specialization in sports physiotherapy, clinical neurorehabilitation, manual therapy, and health services research for senior clinical and university lecturing positions."
        },
        {
          badge: "International Conversion",
          title: "Foreign Qualification Recognition (Anerkennung)",
          desc: "Structured adaptation programs (*Anpassungslehrgang*) or knowledge exams (*Kenntnisprüfung*) enabling international BPT graduates to convert their foreign degrees into German state licenses."
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities & Institutions for Physiotherapy",
      text: "Germany's prominent universities of applied sciences offering accredited physiotherapy programs:",
      cards: [
        {
          name: "Hochschule Furtwangen University (HFU)",
          city: "Furtwangen, Baden-Württemberg",
          qsRank: "Top Applied Sciences University",
          tuition: "€1,500/sem (Non-EU) + €140 semester fee",
          programs: "B.Sc. Physiotherapy, M.Sc. Interdisciplinary Health Promotion",
          highlights:
            "Known for cutting-edge biomechanical motion analysis laboratories and strong cooperation with regional clinical therapy networks in southern Germany.",
          link: "https://www.hs-furtwangen.de/",
          img: uniImg1
        },
        {
          name: "Alice Salomon University of Applied Sciences (ASH Berlin)",
          city: "Berlin",
          qsRank: "Premier Health Sciences Institution",
          tuition: "€0 / Free (Semester fee €315/sem)",
          programs: "B.Sc. Physiotherapie / Ergotherapie, M.Sc. Public Health",
          highlights:
            "One of Germany's most venerable institutions for healthcare and social professions, offering dual-degree physiotherapy tracks integrated with Berlin's major hospital networks.",
          link: "https://www.ash-berlin.eu/",
          img: uniImg2
        },
        {
          name: "Osnabrück University of Applied Sciences",
          city: "Osnabrück, Lower Saxony",
          qsRank: "Leading Applied Research University",
          tuition: "€0 / Free (Semester fee €360/sem)",
          programs: "B.Sc. Physiotherapie, M.Sc. Musculoskeletal Therapy",
          highlights:
            "Pioneered evidence-based academic physiotherapy in Germany, boasting world-class sports diagnostics equipment and strong clinical research partnerships.",
          link: "https://www.hs-osnabrueck.de/",
          img: uniImg3
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Admissions Criteria",
      title: "Eligibility & Language Requirements",
      text: "Entry criteria vary between vocational training schools and universities of applied sciences:",
      items: [
        "**Academic Qualification:** High school leaving certificate (12th standard) recognized as equivalent to the German *Abitur* (for B.Sc. programs, *Studienkolleg* or 1-year university study may be required). For vocational *Ausbildung*, a secondary school certificate (*Realschulabschluss* / 10th-12th) is accepted.",
        "**German Language Proficiency (B2 Level):** Mandatory requirement since all clinical rotations, patient communications, and state board exams are held exclusively in German (Goethe B2, telc B2, or TestDaF).",
        "**Medical Fitness Certificate (Ärztliches Attest):** Official physician's certificate confirming physical suitability and immunization status (Hepatitis B, Measles) for direct patient contact.",
        "**Police Clearance Certificate (Führungszeugnis):** Clean criminal record verification required by state health authorities for medical student registration.",
        "**Prior Pre-Study Internship (Vorpraktikum):** Many institutions recommend or require a 4- to 12-week observational internship in a hospital or physiotherapy practice."
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Cost of Education",
      title: "Tuition Fees & Financial Overview",
      text: "Studying physiotherapy in Germany offers outstanding financial viability:",
      items: [
        "**Tuition-Free Public Universities (€0):** Public *Fachhochschulen* charge no general tuition fees; students pay only a nominal semester contribution (€150–€360/semester) which includes regional public transit.",
        "**Monthly Training Stipend in Dual Programs:** Hospital-based *Ausbildung* programs pay students a gross monthly salary: Year 1 (~€1,050/mo), Year 2 (~€1,150/mo), Year 3 (~€1,250–€1,350/mo).",
        "**Living Costs (€900–€1,300/month):** Covers student accommodation, groceries, statutory health insurance (~€125/month), study materials, and personal expenses.",
        "**German Blocked Account (Sperrkonto):** When applying for an academic degree without a training stipend, proof of €11,904/year in a blocked account is required for the student visa. (Stipend-paying dual contracts often waive or reduce this requirement)."
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Pathway Roadmap",
      title: "Admission & Licensing Timeline in Germany",
      text: "Follow this structured 10-step process to secure admission and earn your German physiotherapy license:",
      steps: [
        {
          num: "01",
          title: "Select Program Track",
          desc: "Choose between an academic B.Sc. in Physiotherapy at a university of applied sciences or a salaried hospital vocational *Ausbildung*."
        },
        {
          num: "02",
          title: "German Language Preparation",
          desc: "Intensive German language study reaching certified B2 proficiency (Goethe-Zertifikat B2 or telc Deutsch B2)."
        },
        {
          num: "03",
          title: "Document Legalization & Translations",
          desc: "Acquire certified German translations of high school mark sheets, transcripts, medical fitness, and police clearance certificates."
        },
        {
          num: "04",
          title: "APS Verification Certificate",
          desc: "Obtain academic verification through the Academic Evaluation Centre (APS India) for university degree applications."
        },
        {
          num: "05",
          title: "Clinical Pre-Internship (Vorpraktikum)",
          desc: "Complete a 4- to 8-week clinical observation internship in physiotherapy to strengthen your application."
        },
        {
          num: "06",
          title: "Application & Interview",
          desc: "Submit applications directly to hospital training schools or via uni-assist for universities, followed by an online/in-person interview."
        },
        {
          num: "07",
          title: "Training Contract & Visa",
          desc: "Receive the training contract (*Ausbildungsvertrag*) or university offer (*Zulassungsbescheid*) and apply for the German national visa."
        },
        {
          num: "08",
          title: "Classroom & Clinical Studies (3–4 Years)",
          desc: "Complete coursework in anatomy, physiology, biomechanics, pathology, and complete supervised clinical hospital rotations."
        },
        {
          num: "09",
          title: "State Board Examination (Staatsexamen)",
          desc: "Pass the written, oral, and practical state board examinations before the state medical examination board (*Landesprüfungsamt*)."
        },
        {
          num: "10",
          title: "State Certification & Employment",
          desc: "Receive your official license (*Staatliche Anerkennung als Physiotherapeut/in*) and begin working in hospitals, clinics, or private rehabilitation practices."
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Career Pathways",
      title: "Career Opportunities & Salary in Germany",
      text: "Certified physiotherapists in Germany enjoy exceptional job security and versatile career settings:",
      cards: [
        {
          badge: "Clinical Practice",
          title: "Hospital & Rehabilitation Physiotherapist",
          desc: "Provide inpatient and outpatient therapy in orthopedic trauma clinics, stroke recovery units, and university hospitals. Starting salary: €36,000–€46,000/year (tariff TVöD-VKA)."
        },
        {
          badge: "Private Practice",
          title: "Outpatient Physiotherapy Practice",
          desc: "Treat private and statutory health insurance patients in outpatient physiotherapy practices (*Physiotherapiepraxis*). Experienced practitioners earn €42,000–€55,000/year."
        },
        {
          badge: "Sports Medicine",
          title: "Sports & Athletic Physiotherapist",
          desc: "Work with professional sports teams, Olympic training centers, and fitness resorts managing injury prevention and athlete recovery. Average salary: €45,000–€62,000/year."
        },
        {
          badge: "Independent Practice",
          title: "Practice Owner / Independent Therapist",
          desc: "Found an independent licensed physiotherapy clinic or specialized neuro-rehabilitation center. Annual earnings: €60,000–€90,000+/year."
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Checklist",
      title: "Documents Required for Application & Visa",
      text: "Prepare the following verified documents for submission to training providers and the German embassy:",
      items: [
        "Valid international passport with at least 12 months validity.",
        "Secondary school leaving certificates and marks sheets (10th and 12th standard) with certified German translations.",
        "German Language Certificate at B2 level (Goethe, telc, or TestDaF).",
        "Official Medical Certificate of physical and psychological fitness (*Ärztliches Attest*).",
        "Police Clearance Certificate (*Führungszeugnis*) apostilled and translated.",
        "Detailed Tabular Curriculum Vitae (*Lebenslauf*) in German.",
        "Statement of Purpose (Letter of Motivation) detailing dedication to the physiotherapy profession.",
        "Proof of clinical internships or observation work (*Praktikumsnachweis*), if available.",
        "Signed Training Contract (*Ausbildungsvertrag*) or University Admission Letter (*Zulassungsbescheid*).",
        "Proof of health insurance and financial resources (blocked account or training stipend contract)."
      ]
    }
  ],
  faqs: [
    {
      q: "What is the duration of physiotherapy training in Germany?",
      a: "Vocational training (*Ausbildung*) in physiotherapy lasts 3 years and combines theoretical classroom study with practical clinical hospital rotations. Academic Bachelor of Science (B.Sc.) degree programs typically take 3 to 4 years (6 to 8 semesters)."
    },
    {
      q: "Is German language proficiency mandatory to study physiotherapy in Germany?",
      a: "Yes. German language proficiency of at least B2 level (Goethe-Zertifikat B2 or telc B2) is mandatory for both academic degrees and vocational Ausbildung programs because students interact directly with German patients during clinical hospital placements from the first year."
    },
    {
      q: "Does Germany offer free physiotherapy education?",
      a: "Yes. Public universities of applied sciences charge no general tuition fees, requiring only a nominal semester contribution (€150 to €360/semester). Furthermore, hospital-based vocational Ausbildung programs are tuition-free and actually pay students a monthly training stipend of €1,050 to €1,300 per month."
    },
    {
      q: "Can Indian students study physiotherapy in Germany after 12th standard?",
      a: "Yes. Indian students who have completed 12th standard with Biology and Physics/Chemistry can apply for physiotherapy in Germany. For the vocational Ausbildung track, a 12th standard certificate and B2 German are directly accepted. For university B.Sc. programs, students may need to complete a 1-year preparatory foundation course (*Studienkolleg*) or have 1 year of recognized higher education."
    },
    {
      q: "Can foreign-trained physiotherapists work in Germany?",
      a: "Yes. Foreign physiotherapists with a Bachelor of Physiotherapy (BPT) from abroad can practice in Germany by applying for professional recognition (*Anerkennung*) under the *Masseur- und Physiotherapeutengesetz (MPhG)*, completing any required adaptation courses (*Anpassungslehrgang*), and demonstrating B2 German proficiency to receive their German state license."
    }
  ]
};

export default function PhysiotherapyAbroad() {
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

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/germany/physiotherapy"
    />
  );
}
