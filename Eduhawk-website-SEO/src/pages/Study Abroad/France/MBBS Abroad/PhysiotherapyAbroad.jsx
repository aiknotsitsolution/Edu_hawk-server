import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Physiotherapy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Physiotherapy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Physiotherapy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Physiotherapy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Physiotherapy/IFMK_Saint.webp";
import uniImg2 from "../../../../Images/Abroad/France/Physiotherapy/University_2.webp";
import uniImg3 from "../../../../Images/Abroad/France/Physiotherapy/IFMK_Universit_Cte_dAzur.webp";
import cmsData from "../../../../data/study_abroad/france/physiotherapy.json";

const page = {
  name: "Physiotherapy in France",
  country: "France",
  slug: "physiotherapy",
  title: "Study Physiotherapy in France for International Students | DEMK Degree Guide",
  description: "Complete guide to studying Physiotherapy (Kinésithérapie) in France: 5-year State Diploma (DEMK), IFMK institutes, university pathways, tuition fees, eligibility, and career opportunities.",
  keywords: "Study Physiotherapy in France for Indian Students, Physiotherapy Courses in France for International Students, Top Physiotherapy Institutes in France, French State Diploma in Physiotherapy, Physiotherapy Eligibility Requirements in France, French Language Requirements for Physiotherapy Studies in France, Physiotherapy Admission Requirements for Indian Students, Physiotherapy Tuition Fees in France 2026–2027, Cost of Studying Physiotherapy in France for International Students, Physiotherapy Clinical Training and Internship in France, Physiotherapy Student Visa Requirements for France, Physiotherapy Jobs and Salary in France, Career Opportunities after Physiotherapy in France",
  introTitle: "PHYSIOTHERAPY (KINÉSITHÉRAPIE) FOR INTERNATIONAL STUDENTS IN FRANCE",
  heroParas: [
    "France offers world-renowned physiotherapy education, known locally as kinésithérapie, blending advanced biomechanics and neuromuscular rehabilitation with extensive supervised clinical hospital placements. International students earn the prestigious French State Diploma in Physiotherapy (Diplôme d'État de Masseur-Kinésithérapeute - DEMK), a master's-level qualification delivering unrestricted practice rights across France and the European Union."
  ],
  overview: [
    "In France, physiotherapy education combines scientific rigour, cutting-edge rehabilitation technology, and intensive patient interaction across teaching hospitals and rehabilitation clinics.",
    "Physiotherapists in France work autonomously to evaluate, treat, and rehabilitate patients suffering from physical injuries, post-surgical movement limitations, chronic musculoskeletal disorders, and neurological or respiratory conditions.",
    "The standard academic pathway spans five years following secondary education: one foundational year at an accredited French university in health sciences, biology, or STAPS (sports science), followed by four years of specialized professional training in an authorized Institut de Formation en Masso-Kinésithérapie (IFMK).",
    "EduHawk Worldwide study abroad consultancy provides Indian and international candidates with strategic guidance through every phase—from initial university pathway selection and French B2/C1 language coaching to Campus France dossier preparation, visa clearance, and clinical licensing registration."
  ],
  level: "State Diploma in Masseur-Kinésithérapeute (DEMK / Grade de Master)",
  crumb: "Health Sciences / Physiotherapy",
  stats: [
    {
      label: "Degree Awarded",
      value: "Diplôme d'État (DEMK - 300 ECTS)"
    },
    {
      label: "Program Duration",
      value: "5 Years (1 Yr University + 4 Yrs IFMK)"
    },
    {
      label: "Tuition Structure",
      value: "€178/yr Public to €9,200/yr IFMK"
    },
    {
      label: "Post-Study Visa",
      value: "2-Year APS / RECE Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Key Advantages of Studying Physiotherapy in France",
      lead: "France provides an exceptional clinical training ground combining European medical standards with expansive career mobility.",
      groups: [
        {
          t: "ul",
          items: [
            "**Hands-On Clinical Mastery:** Practical workshops and hospital rotations allow students to hone clinical diagnostic skills, manual therapy, functional rehabilitation, and therapeutic exercise techniques from early study years.",
            "**Official French State Diploma (DEMK):** The Diplôme d'État de Masseur-Kinésithérapeute confers official Grade de Master recognition (300 ECTS credits), providing automatic authorization to practice across France and European Union member states.",
            "**Premier Hospital Placements:** Trainees undertake structured internships across university hospital trusts (CHU), private clinics, specialized trauma institutes, and elite athletic performance centers.",
            "**Advanced Clinical Specialisations:** Graduates can pursue post-graduate specializations in sports rehabilitation, pediatric physiotherapy, neurological re-education, cardiopulmonary therapy, and musculoskeletal recovery.",
            "**High Career Flexibility & Autonomy:** Licensed French kinésithérapeutes practice flexibly as salaried hospital staff, rehabilitation center specialists, or independent private practitioners (kinésithérapeutes libéraux).",
            "**Dedicated EduHawk Global Guidance:** Comprehensive admission support ensures international applicants navigate university health pathways, linguistic criteria, and clinical documentation smoothly."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Academic Framework",
      title: "Physiotherapy Study Routes & Academic Structure in France",
      lead: "Physiotherapy training follows a rigorous 5-year structured progression integrating university science education with professional institute training.",
      groups: [
        {
          t: "p",
          items: [
            "The standard route to practicing physiotherapy in France requires 5 years of post-secondary study, totaling 300 ECTS credits:",
            "**Year 1 — University Preparatory Gateway:** Students complete an accredited first year of university study in Health Access (PASS), a disciplinary bachelor's with health option (L.AS), STAPS (Sports and Movement Sciences), or Life Sciences. Entry into physiotherapy training institutes is competitive based on academic standing.",
            "**Years 2 to 5 — Professional IFMK Training (Cycle 1 & Cycle 2):** Four years of specialized education at an Institut de Formation en Masso-Kinésithérapie (IFMK). The curriculum balances classroom biomechanics, anatomy, and pathology with 1,470+ hours of mandatory clinical hospital internships."
          ]
        },
        {
          t: "boxes",
          boxes: [
            {
              title: "State Diploma (DEMK)",
              tag: "5 Years / 300 ECTS",
              desc: "The mandatory national credential for licensed physiotherapy practice in France. Combines clinical pathology, kinesiology, exercise physiology, and hospital rotations."
            },
            {
              title: "Master in Movement Sciences",
              tag: "2 Years / 120 ECTS",
              desc: "Post-graduate university research degrees focusing on biomechanics, human motor performance, neurorehabilitation, and clinical kinesiology research."
            },
            {
              title: "Sports Rehabilitation",
              tag: "Post-Graduate DU / DIU",
              desc: "Specialized university diplomas focusing on sports traumatology, high-performance athletic recovery, and biomechanical injury prevention."
            },
            {
              title: "Neurological & Musculoskeletal Rehab",
              tag: "Clinical Specialization",
              desc: "Targeted advanced clinical training covering post-stroke re-education, spinal injury management, chronic orthopedic rehabilitation, and pediatric therapy."
            }
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Physiotherapy Training Institutes (IFMK) in France",
      lead: "Professional physiotherapy training is delivered through specialized Instituts de Formation en Masso-Kinésithérapie (IFMK) partnered with leading French university medical faculties.",
      unis: [
        {
          name: "IFMK Saint-Michel — Paris",
          city: "Paris",
          state: "Île-de-France, France",
          desc: "Historic Parisian training institute awarding the French State Diploma in Physiotherapy (DEMK) with extensive clinical teaching hospital networks across the capital.",
          img: uniImg1
        },
        {
          name: "AP-HP Physiotherapy Training Institute — Paris",
          city: "Paris",
          state: "Île-de-France, France",
          desc: "Operating within the Assistance Publique–Hôpitaux de Paris (AP-HP), Europe's largest public hospital trust, offering students unrivaled clinical immersion in acute care and trauma.",
          img: uniImg2
        },
        {
          name: "IFMK — Université Côte d’Azur",
          city: "Nice",
          state: "Provence-Alpes-Côte d'Azur, France",
          desc: "Renowned Mediterranean university institute offering cutting-edge human movement research laboratories, sports recovery units, and specialized rehabilitation pathways.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Requirements for International & Indian Students",
      lead: "Admission into French physiotherapy programs requires strong scientific foundations, high linguistic proficiency, and university gateway completion.",
      groups: [
        {
          t: "ul",
          items: [
            "**Secondary Education Qualification:** Higher Secondary Certificate (Class 12 / standard French baccalaureate equivalent) with top scores in Biology, Physics, and Chemistry.",
            "**First-Year University Pathway:** Direct entry into IFMK from high school is not permitted under French law. Candidates must successfully complete an eligible first year of university study (PASS, L.AS, or STAPS) in France.",
            "**Competitive Institute Selection:** Admission to an IFMK depends on performance rankings in the university gateway year and institutional quota availability.",
            "**French Language Proficiency:** Strong French skills (minimum CEFR B2, with C1 strongly recommended) are mandatory. Clinical tutorials, hospital rounds, patient evaluations, and licensure examinations are conducted entirely in French.",
            "**Prior Degree Holders (Foreign Physiotherapists):** Candidates who already hold a foreign physiotherapy qualification (e.g., Bachelor of Physiotherapy / BPT from India) may apply through specialized credential equivalency committees (commission d'équivalence) for partial curriculum exemptions."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Cost Analysis",
      title: "Tuition Fees & Cost of Living in France (2026–2027)",
      lead: "France provides highly subsidized higher education, though physiotherapy institute training fees vary by institutional status and region.",
      groups: [
        {
          t: "table",
          headers: ["Expense Category", "Public University / Subsidized IFMK", "Private / Autonomous IFMK", "Frequency"],
          rows: [
            ["University Gateway Year (PASS/L.AS)", "€178 – €2,902", "€178 – €2,902", "Annual"],
            ["IFMK Professional Training Fees", "Subsidized (€300 – €1,500)", "€6,500 – €9,200 (e.g. IFMK Saint-Michel)", "Annual"],
            ["CVEC Student & Campus Life Contribution", "€103", "€103", "Annual"],
            ["Student Social Security (Health Insurance)", "Free (100% French Sécurité Sociale)", "Free (100% French Sécurité Sociale)", "Annual"],
            ["Living Expenses (Paris & Île-de-France)", "€1,000 – €1,400 / month", "€1,000 – €1,400 / month", "Monthly"],
            ["Living Expenses (Regional Cities: Nice, Lille)", "€750 – €950 / month", "€750 – €950 / month", "Monthly"]
          ]
        },
        {
          t: "p",
          items: [
            "**CAF Housing Allowance:** International students holding a valid VLS-TS student visa are entitled to monthly rental subsidies of up to 30% to 40% through France's Caisse d'Allocations Familiales (CAF).",
            "**Part-Time Work Rights:** International students are legally authorized to work up to 964 hours per academic year (equivalent to 60% of annual full-time employment) to support living expenses."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Roadmap to Practice",
      title: "10-Step Roadmap to Studying Physiotherapy in France",
      lead: "EduHawk guides prospective physiotherapists through every milestone from academic planning to clinical licensing.",
      steps: [
        {
          title: "Academic & Science Evaluation",
          desc: "Assess Class 12 science transcripts (Biology, Physics, Chemistry) and confirm eligibility for French higher education."
        },
        {
          title: "French Language Mastery",
          desc: "Complete intensive French language training and achieve CEFR B2/C1 certification (DELF B2 or DALF C1)."
        },
        {
          title: "University Gateway Selection",
          desc: "Identify accredited French universities offering PASS, L.AS, or STAPS programs partnered with leading IFMK institutes."
        },
        {
          title: "Campus France & Études en France",
          desc: "Create and submit the official Études en France electronic application dossier and complete the consular academic interview."
        },
        {
          title: "First-Year University Enrolment",
          desc: "Receive university admission, finalize registration formalities, and pay national enrolment fees and CVEC contribution."
        },
        {
          title: "French Student Visa (VLS-TS)",
          desc: "Submit visa application with proof of financial maintenance (€615+/month), housing certification, and health insurance."
        },
        {
          title: "Competitive First-Year Studies",
          desc: "Excel in health sciences and biomechanics courses to secure a competitive allocation rank for IFMK entry."
        },
        {
          title: "IFMK Institute Enrolment & Health Clearance",
          desc: "Formally enroll in the affiliated IFMK and submit compulsory medical certificates, immunization records (Hepatitis B), and clinical dossier."
        },
        {
          title: "4-Year Clinical & Didactic Training",
          desc: "Complete 1,470+ hours of hospital internships and rigorous classroom training leading to the State Diploma (DEMK - 300 ECTS)."
        },
        {
          title: "Professional Licensure & Practice",
          desc: "Register with the Conseil National de l'Ordre des Masseurs-Kinésithérapeutes (CNOMK) and activate the 2-year post-study work permit."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways",
      title: "Physiotherapy Career Opportunities & Salary Expectations",
      lead: "France faces strong demand for licensed physiotherapists across public hospital trusts, athletic organizations, and private clinics.",
      groups: [
        {
          t: "ul",
          items: [
            "**Hospital Staff Physiotherapist:** Delivering acute rehabilitation, post-surgical mobilization, and intensive care re-education in public and private hospitals (€32,000 – €44,000 / year).",
            "**Rehabilitation Center Specialist:** Treating neurological conditions, severe orthopedic trauma, spinal injuries, and geriatric mobility loss in specialized re-education institutes (€36,000 – €50,000 / year).",
            "**Independent Private Practitioner (Kinésithérapeute Libéral):** Operating an autonomous private clinical cabinet, contracting with the French national healthcare system (€45,000 – €75,000+ / year).",
            "**Sports Physiotherapy & Athletic Performance:** Working with professional sports clubs, athletic training centers, and elite sports federations to manage musculoskeletal injuries (€40,000 – €65,000 / year).",
            "**Pediatric & Respiratory Care Practitioner:** Specialized private and hospital practice catering to neonatal development, asthma, cystic fibrosis, and pediatric orthopedic recovery.",
            "**Academic & Biomechanical Research:** Teaching in physiotherapy institutes or contributing to university clinical research in biomechanics and motor neuroscience."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Required Documents for Admission & Visa Application",
      lead: "All non-French documentation must be translated by a certified sworn translator (traducteur assermenté).",
      groups: [
        {
          t: "ul",
          items: [
            "Valid International Passport with at least 6 months validity beyond the intended period of stay.",
            "Certified Class 10 and Class 12 mark sheets and high school completion certificates.",
            "Official university transcripts and degree certificates (for post-graduate applicants or BPT degree holders).",
            "Official French language proficiency certificate (DELF B2, DALF C1, or TCF equivalent).",
            "Comprehensive Curriculum Vitae (CV) formatted to French academic standards highlighting health and science coursework.",
            "Letter of Motivation (Projet de Formation Motivé) detailing academic motivations and professional objectives in France.",
            "Formal proof of financial resources demonstrating minimum living funds of €615/month for the academic year.",
            "Proof of accommodation in France (university CROUS lodging contract, private lease, or certificate of hosting).",
            "Complete medical record, including up-to-date immunizations (DTP, Hepatitis B, BCG) required for clinical hospital entry."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "How many years does it take to study physiotherapy in France?",
      a: "In France, the standard physiotherapy pathway requires five years of post-secondary study (300 ECTS credits). Students complete one foundational preparatory year at an accredited university (such as PASS, L.AS, or STAPS) followed by four years of specialized professional training in an authorized Institut de Formation en Masso-Kinésithérapie (IFMK)."
    },
    {
      q: "Can Indian students study physiotherapy in France?",
      a: "Yes, Indian students who have completed Class 12 with strong marks in Biology, Physics, and Chemistry and possess French language proficiency (minimum CEFR B2) can apply for the first-year university pathway. Indian students already holding a Bachelor of Physiotherapy (BPT) may apply for credential equivalency through regional health committees for partial curriculum exemptions."
    },
    {
      q: "Do I have to speak French to study physiotherapy in France?",
      a: "Yes, French language proficiency is mandatory for professional physiotherapy training. Clinical tutorials, hospital internships, direct patient communication, and national licensure examinations are conducted entirely in French. Institutions typically require a minimum of DELF B2 or DALF C1."
    },
    {
      q: "What are the tuition fees for physiotherapy training in France?",
      a: "Tuition fees depend on institutional status. Public university foundational years carry standard registration fees (€178 to €2,902 per year). Professional IFMK training fees range from subsidized rates (€300 to €1,500/year) in certain public university hospital institutes to approximately €6,500 to €9,200 per year in private or autonomous training centers (e.g., IFMK Saint-Michel published €9,200 for 2025–2026)."
    },
    {
      q: "How can EduHawk Worldwide Consultancy assist me in studying abroad?",
      a: "EduHawk Worldwide provides comprehensive end-to-end guidance for international students. Our services include academic profile assessment, university and IFMK selection, French language preparation, Campus France dossier submission, scholarship applications, student visa clearance, and clinical registration guidance."
    }
  ]
};

export default function PhysiotherapyinFrancePage() {
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
        name: "IFMK Saint-Michel — Paris",
        img: uniImg1,
        desc: "Historic Parisian training institute awarding the French State Diploma in Physiotherapy (DEMK) with extensive clinical teaching hospital networks across the capital."
      },
      {
        name: "AP-HP Physiotherapy Training Institute — Paris",
        img: uniImg2,
        desc: "Operating within the Assistance Publique–Hôpitaux de Paris (AP-HP), Europe's largest public hospital trust, offering students unrivaled clinical immersion in acute care and trauma."
      },
      {
        name: "IFMK — Université Côte d’Azur",
        img: uniImg3,
        desc: "Renowned Mediterranean university institute offering cutting-edge human movement research laboratories, sports recovery units, and specialized rehabilitation pathways."
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      images={images}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/france/physiotherapy"
    />
  );
}
