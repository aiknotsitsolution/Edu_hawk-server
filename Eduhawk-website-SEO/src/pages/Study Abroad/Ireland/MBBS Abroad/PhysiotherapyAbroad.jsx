import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../data/study_abroad/ireland/physiotherapy.json";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/Physiotherapy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/Physiotherapy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/Physiotherapy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/Physiotherapy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/Physiotherapy/Trinity_College_in_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/Physiotherapy/Limerick_University.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/Physiotherapy/Irelands_Royal_College_of_Surgeons.webp";

const page = {
  name: "Physiotherapy in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/physiotherapy",
  title: "Study Physiotherapy in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to studying Physiotherapy in Ireland for Indian students: Top Irish universities (Trinity, UL, RCSI), CORU accreditation, 4-year BSc and 2-year graduate-entry MSc programs, tuition fees, and Stamp 1G work visa.",
  keywords: "Study Physiotherapy in Ireland for Indian Students, Bachelor of Physiotherapy in Ireland, CORU Approved Physiotherapy Courses Ireland, Graduate Entry Physiotherapy Ireland, Physiotherapist Salary in Ireland, Cost of Physiotherapy Courses in Ireland, Edu-Hawk Worldwide",
  introTitle: "STUDY PHYSIOTHERAPY (BSC & MSC) IN IRELAND FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "Studying Physiotherapy in Ireland provides international students with elite academic instruction, over 1,000 hours of supervised hospital and sports clinical placements, and direct eligibility for registration with CORU, the statutory regulator for health and social care professionals in Ireland. Delivered entirely in English across world-leading institutions like Trinity College Dublin, the University of Limerick, and RCSI, graduates develop advanced expertise in musculoskeletal rehabilitation, neurological physiotherapy, and sports medicine with seamless career pathways across Ireland, the UK, and Europe."
  ],
  overview: [
    "Ireland is renowned across Europe for clinical excellence and innovation in physiotherapy education, movement sciences, and physical rehabilitation. Irish physiotherapy degree programs blend rigorous biomechanical, physiological, and anatomical theory with over 1,000 hours of mandatory supervised clinical practice across acute university hospitals, sports injury institutes, pediatric clinics, and community healthcare settings.",
    "Higher education in Ireland offers two primary routes into the physiotherapy profession: a four-year undergraduate Bachelor of Science Honours (BSc Hons) degree (NFQ Level 8) for school leavers, and an intensive two-year Graduate-Entry Master of Science (MSc) in Physiotherapy (NFQ Level 9) for applicants who already hold a relevant science or kinesiology degree. Both pathways are accredited by CORU and qualify graduates for professional practice.",
    "Edu-Hawk Worldwide delivers expert counseling for Indian candidates aspiring to study physiotherapy in Ireland. From evaluating Class 12 biology, physics, and mathematics prerequisites or undergraduate anatomy credits to advising on competitive personal statements, clinical observational portfolios, health immunization compliance, and student visa processing, our advisors guide you every step of the way."
  ],
  level: "BSc (Hons) Physiotherapy (NFQ Level 8) & Graduate-Entry MSc (NFQ Level 9)",
  crumb: "Healthcare & Medicine / Physiotherapy in Ireland",
  stats: [
    {
      label: "Degree Choices",
      value: "BSc (Hons) Physiotherapy & 2-Year Graduate Entry MSc"
    },
    {
      label: "Course Duration",
      value: "4 Years (BSc) / 2 Years (Graduate Entry MSc)"
    },
    {
      label: "Top Institutions",
      value: "Trinity College Dublin, Univ. of Limerick, RCSI"
    },
    {
      label: "Professional License",
      value: "CORU Registration / Stamp 1G Graduate Work Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Choose Ireland",
      title: "Key Advantages of Studying Physiotherapy in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Physiotherapy education in Ireland is designed to meet the highest European and international clinical benchmarks, offering unparalleled training benefits:"
          ]
        },
        {
          t: "ul",
          items: [
            "CORU Statutory Accreditation: Completion of an approved Irish physiotherapy qualification provides direct eligibility to register with CORU (Physiotherapists Registration Board) without foreign credential bridging.",
            "1,000+ Hours of Clinical Placements: Undertake extensive hands-on rotations across cardiovascular and respiratory care, neurology, musculoskeletal rehabilitation, pediatrics, and elderly care.",
            "Multiple Academic Entry Routes: Apply as a secondary school leaver for a 4-year BSc or as a university graduate with a relevant degree for a fast-track 2-year pre-registration MSc.",
            "Modern Biomechanical & Movement Labs: Train in state-of-the-art motion analysis suites, force-plate gait laboratories, hydrotherapy pools, and human performance centers.",
            "High Global License Mobility: Irish physiotherapy qualifications are recognized across the European Union and the UK (Health and Care Professions Council - HCPC), and provide solid foundation credentials for licensure in Canada, Australia, and the US.",
            "Post-Study Work Authorization (Stamp 1G): BSc graduates receive a 1-year work visa, while Master's graduates receive 2 years to practice full-time in Ireland's expanding public and private healthcare systems."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Academic Pathways",
      title: "Physiotherapy Degree Programs & Specializations in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish universities provide structured clinical pathways aligned with the National Framework of Qualifications (NFQ):"
          ]
        },
        {
          t: "ul",
          items: [
            "BSc (Hons) in Physiotherapy (4 Years - NFQ Level 8): Direct-entry undergraduate degree covering anatomy, biomechanics, neuroanatomy, exercise prescription, clinical pathology, and five structured clinical placement blocks.",
            "MSc in Physiotherapy (Pre-Registration / Graduate Entry - 2 Years - NFQ Level 9): Accelerated professional master's degree designed for graduates of kinesiology, sports science, physiology, or biological sciences seeking primary professional licensure.",
            "MSc in Sports and Exercise Physiotherapy: Specialized advanced program for licensed physiotherapists focusing on elite athletic injury prevention, return-to-play protocols, and pitch-side emergency care.",
            "MSc in Neurological Rehabilitation: Advanced clinical program dedicated to stroke rehabilitation, spinal cord injuries, Parkinson's disease, and neurodegenerative disorders.",
            "PhD in Physiotherapy & Rehabilitation Sciences: 3 to 4-year doctoral research program advancing evidence-based rehabilitation protocols, robotics in physiotherapy, and chronic pain management."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Featured Universities",
      title: "Top Universities and Physiotherapy Schools in Ireland",
      unis: [
        {
          name: "Trinity College Dublin",
          city: "Dublin",
          state: "Leinster",
          desc: "School of Medicine - Discipline of Physiotherapy, offering a prestigious 4-year BSc in Physiotherapy with clinical placements at St. James's Hospital, Tallaght Hospital, and leading rehabilitation centers.",
          img: uniImg1
        },
        {
          name: "University of Limerick",
          city: "Limerick",
          state: "Munster",
          desc: "School of Allied Health, delivering both the 4-year BSc in Physiotherapy and the acclaimed 2-year Graduate Entry MSc in Physiotherapy with cutting-edge sports and movement science facilities.",
          img: uniImg2
        },
        {
          name: "Royal College of Surgeons in Ireland",
          city: "Dublin",
          state: "Leinster",
          desc: "RCSI School of Physiotherapy delivers a patient-focused BSc (Hons) in Physiotherapy, integrating small-group anatomy dissection and clinical simulation with Ireland's premier teaching hospitals.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "All three institutions deliver programs fully approved by the Physiotherapists Registration Board at CORU and accredited by the Irish Society of Chartered Physiotherapists (ISCP)."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Criteria for Physiotherapy Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Entry requirements for Irish physiotherapy courses depend on your entry route (undergraduate vs. graduate-entry master's):"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate BSc Applicants: Completion of Class 12 (CBSE, ICSE, or State Boards) with an aggregate of 80% to 85%+, including strong individual grades in at least one laboratory science (Physics, Chemistry, or Biology) and Mathematics.",
            "Graduate Entry MSc Applicants: A recognized Bachelor's degree (NFQ Level 8 equivalent) in kinesiology, biological sciences, physiology, physical education, or biomedical sciences with minimum 60%–65% (Upper Second Class Honours equivalent), including foundational coursework in human anatomy and physiology.",
            "English Language Competence: IELTS Academic overall score of 7.0 (with no band score below 6.5) or equivalent TOEFL iBT (100+) / Pearson PTE Academic (68+). Flawless communication is mandatory for patient rehabilitation.",
            "Health & Clinical Placement Clearance: Complete blood serology testing (Hepatitis B, C, TB, Varicella) and police background clearance via the National Vetting Bureau."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Application Materials",
      title: "Admission Requirements & Clinical Documentation",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following core application documents are prepared and certified before applying:"
          ]
        },
        {
          t: "ul",
          items: [
            "Certified Class 10 and Class 12 mark sheets and certificates (plus Bachelor's transcripts and degree certificates for graduate-entry applicants).",
            "Valid International Passport with minimum 12 months validity.",
            "Personal Statement detailing your motivation for pursuing physiotherapy, understanding of rehabilitation, and interpersonal empathy.",
            "Documented Clinical Observational Experience: Evidence of shadowing a licensed physiotherapist in an outpatient clinic or hospital setting.",
            "Two Letters of Recommendation (academic science professors or clinical supervisors).",
            "Official English language proficiency test scorecard (IELTS / TOEFL / PTE).",
            "Certified Occupational Health Screening & Immunization records.",
            "Police Clearance Certificate for Garda vetting."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Cost & Budgeting",
      title: "Tuition Fees and Cost of Living for Physiotherapy in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees for international non-EU students cover university tuition, specialized biomechanics laboratories, and clinical placement supervision:"
          ]
        },
        {
          t: "p",
          items: [
            "| Expense Category | Annual Indicative Cost Range | Key Budgeting Notes |",
            "| :--- | :--- | :--- |",
            "| **Undergraduate BSc Physiotherapy Tuition** | €25,000 – €35,000 / year | E.g., Trinity College Dublin approx. €26,880 / year (2026–2027) |",
            "| **Graduate Entry MSc Tuition** | €25,000 – €32,000 / year | 2-year fast-track pre-registration program |",
            "| **Living Expenses (Dublin)** | €12,000 – €16,000 / year | Purpose-built student accommodation, meals, and transport |",
            "| **Living Expenses (Limerick)** | €8,500 – €12,000 / year | Affordable regional campus accommodation in Limerick |",
            "| **Clinical Uniform & Plinth Kit** | €300 – €500 (one-off) | Clinical polo tunics, reflex hammer, goniometer, stethoscope |",
            "| **Private Health Insurance** | €160 – €300 / year | Mandatory international student medical insurance policy |",
            "| **Irish Residence Permit (IRP)** | €300 registration fee | Mandatory immigration registration fee upon arrival |"
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Step-by-Step Admission Process for Physiotherapy in Ireland",
      steps: [
        {
          title: "Select Your Entry Route",
          desc: "Choose between the direct-entry 4-year BSc in Physiotherapy (after Class 12) or the accelerated 2-year Graduate Entry MSc (after a science bachelor's degree)."
        },
        {
          title: "Verify Academic Prerequisites",
          desc: "Confirm that your science subject scores (Biology/Physics/Maths) satisfy the university's 80%+ threshold alongside IELTS 7.0."
        },
        {
          title: "Gain Clinical Shadowing Experience",
          desc: "Spend time shadowing chartered physiotherapists to develop a comprehensive understanding of musculoskeletal and neurological therapy."
        },
        {
          title: "Prepare Personal Statement & References",
          desc: "Draft a focused Statement of Purpose showcasing your diagnostic curiosity, empathy, and athletic or clinical problem-solving skills."
        },
        {
          title: "Submit Direct University Applications",
          desc: "Submit your online application through the international portals of Trinity, UL, or RCSI before the February deadlines."
        },
        {
          title: "Participate in Admissions Interview",
          desc: "Complete a structured online interview or Multiple Mini Interview (MMI) assessing clinical communication and ethical judgment."
        },
        {
          title: "Accept Offer & Remit Tuition Deposit",
          desc: "Review your conditional/unconditional offer, pay the required tuition deposit, and reserve your clinical seat."
        },
        {
          title: "Complete Health Clearance & Garda Vetting",
          desc: "Undergo mandatory serology testing, immunization updates, and submit background police clearance forms."
        },
        {
          title: "Apply for Irish Student Visa (Stamp 2)",
          desc: "File your student visa application via the AVATS portal with proof of funds (€10,000+ living funds plus tuition fee receipt)."
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Early application (between October and January) is strongly advised due to limited clinical placement quotas for international students."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Statutory Standards",
      title: "Accreditation, CORU Registration, and International Licensure",
      groups: [
        {
          t: "p",
          items: [
            "The physiotherapy profession in Ireland is governed by statutory legislation to ensure the highest standards of clinical safety and competence:"
          ]
        },
        {
          t: "ul",
          items: [
            "CORU Statutory Oversight: The Physiotherapists Registration Board at CORU is the legal authority responsible for accrediting degree programs and maintaining the Register of Physiotherapists.",
            "Irish Society of Chartered Physiotherapists (ISCP): The professional body representing chartered physiotherapists in Ireland, offering member benefits, legal protection, and clinical interest groups.",
            "European Union Recognition: Under EU Directive 2005/36/EC, Irish physiotherapy qualifications are recognized across all European Union and European Economic Area (EEA) member states.",
            "UK Practice: Under the Common Travel Area (CTA) agreement, Irish graduates can register smoothly with the Health and Care Professions Council (HCPC) to practice in the United Kingdom."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Physiotherapist Salaries and Career Opportunities in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Registered physiotherapists in Ireland enjoy high clinical demand across public hospitals, community health networks, sports franchises, and private clinics:"
          ]
        },
        {
          t: "ul",
          items: [
            "Musculoskeletal Physiotherapist: Diagnosing and rehabilitating spinal disorders, joint injuries, arthritis, and post-orthopedic surgical cases.",
            "Neurological Rehabilitation Specialist: Retraining motor function in patients recovering from stroke, traumatic brain injury, and spinal cord trauma.",
            "Cardiorespiratory Physiotherapist: Providing airway clearance and intensive pulmonary rehabilitation in hospital ICUs and cardiac wards.",
            "Sports & Exercise Physiotherapist: Managing acute sports injuries, biomechanical screening, and rehabilitation for professional athletic teams and sporting bodies.",
            "Pediatric Physiotherapist: Supporting infants and children with developmental delays, cerebral palsy, and neuromuscular conditions.",
            "Private Practice Principal: Establishing and running independent outpatient physiotherapy and rehabilitation clinics."
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Salaries for Physiotherapists in Ireland (HSE Consolidated Scales):",
            "• Staff Grade Physiotherapist (Newly Qualified): €38,000 – €46,000 / year",
            "• Experienced / Senior Physiotherapist: €48,000 – €62,000 / year",
            "• Clinical Specialist Physiotherapist: €62,000 – €76,000 / year",
            "• Physiotherapy Practice Owner / Private Consultant: €65,000 – €110,000+ / year"
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Comprehensive Document Checklist for Physiotherapy Applicants",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following documents are officially prepared and certified before submitting your application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid International Passport with biometric photo page.",
            "Class 10 and Class 12 mark sheets and certificates (plus Bachelor's transcripts for graduate-entry applicants).",
            "Verification of required science credits (Biology, Physics, Chemistry, Mathematics).",
            "English language proficiency scorecard (IELTS 7.0+ / TOEFL 100+).",
            "Personal Statement detailing your passion for rehabilitation, empathy, and manual skills.",
            "Clinical Shadowing verification letters from a licensed physiotherapist.",
            "Two Academic Letters of Recommendation.",
            "Certified Immunization & Occupational Health records (Hep B, MMR, TB).",
            "Police Clearance Certificate for Garda Vetting.",
            "Proof of financial sufficiency for tuition and living expenses (€10,000+ living funds)."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Edu-Hawk Guidance",
      title: "How Edu-Hawk Worldwide Supports Your Irish Physiotherapy Studies",
      groups: [
        {
          t: "p",
          items: [
            "Securing admission into a CORU-approved physiotherapy degree in Ireland requires strategic planning. Edu-Hawk Worldwide offers dedicated guidance for international applicants:",
            "• Route Selection: Evaluating whether the 4-year undergraduate BSc or 2-year Graduate Entry MSc aligns best with your academic background.",
            "• Personal Statement Mentorship: Helping you present compelling clinical observation insights and articulate your diagnostic passion.",
            "• Interview Coaching: Conducting mock interview sessions for admissions assessments and Multiple Mini Interviews (MMI).",
            "• Clinical Clearance Guidance: Step-by-step assistance with occupational health blood titers, vaccinations, and police clearances.",
            "• Student Visa (Stamp 2) Support: Comprehensive guidance on AVATS filing, financial documentation verification, and visa appointment management."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "What is the duration of a Physiotherapy degree in Ireland?",
      a: "The standard undergraduate degree—BSc (Hons) in Physiotherapy—takes 4 years to complete. For students who already hold a relevant science or kinesiology bachelor's degree, Ireland also offers an accelerated 2-year Graduate Entry MSc in Physiotherapy."
    },
    {
      q: "Can Indian students study Physiotherapy in Ireland after Class 12?",
      a: "Yes. Indian students who have completed Class 12 (CBSE, ICSE, or State Boards) with strong marks in science subjects (Physics, Biology, Chemistry, or Mathematics, typically 80%–85%+) and achieve an IELTS score of 7.0 can apply directly for 4-year BSc (Hons) programs."
    },
    {
      q: "How much does it cost to study Physiotherapy in Ireland?",
      a: "Tuition fees for international (non-EU) students range between €25,000 and €35,000 per year (for example, Trinity College Dublin tuition is approximately €26,880 for the first year). Living expenses average €9,000 to €15,000 per year depending on the city."
    },
    {
      q: "Can I practice as a physiotherapist in Ireland after graduation?",
      a: "Yes. Graduates from CORU-approved programs at Trinity, UL, and RCSI are directly eligible to register with CORU (Physiotherapists Registration Board), entitling them to practice as licensed physiotherapists and work full-time under the Stamp 1G graduate work visa."
    },
    {
      q: "Which universities offer CORU-approved Physiotherapy degrees in Ireland?",
      a: "The premier universities offering CORU-approved physiotherapy qualifications are Trinity College Dublin (4-year BSc), University of Limerick (4-year BSc and 2-year Graduate Entry MSc), and RCSI University of Medicine and Health Sciences (4-year BSc)."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "Trinity_College_in_Dublin.webp": uniImg1,
  "Limerick_University.webp": uniImg2,
  "Irelands_Royal_College_of_Surgeons.webp": uniImg3,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function PhysiotherapyAbroadIreland() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "Trinity College Dublin",
        city: "Dublin",
        state: "Leinster",
        desc: "School of Medicine - Discipline of Physiotherapy, offering a prestigious 4-year BSc in Physiotherapy with clinical placements at St. James's Hospital, Tallaght Hospital, and leading rehabilitation centers.",
        img: uniImg1
      },
      {
        name: "University of Limerick",
        city: "Limerick",
        state: "Munster",
        desc: "School of Allied Health, delivering both the 4-year BSc in Physiotherapy and the acclaimed 2-year Graduate Entry MSc in Physiotherapy with cutting-edge sports and movement science facilities.",
        img: uniImg2
      },
      {
        name: "Royal College of Surgeons in Ireland",
        city: "Dublin",
        state: "Leinster",
        desc: "RCSI School of Physiotherapy delivers a patient-focused BSc (Hons) in Physiotherapy, integrating small-group anatomy dissection and clinical simulation with Ireland's premier teaching hospitals.",
        img: uniImg3
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={cmsPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
