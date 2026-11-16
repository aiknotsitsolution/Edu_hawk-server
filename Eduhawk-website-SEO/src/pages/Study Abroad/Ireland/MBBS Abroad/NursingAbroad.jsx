import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/Nursing/University_College_Cork.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/Nursing/Trinity_College_Dublin.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/Nursing/University_of_Galway.webp";

const page = {
  name: "Nursing in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/nursing",
  title: "Study Nursing in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to studying Nursing in Ireland for Indian students: Top Irish nursing colleges (UCC, Trinity, Galway), 4-year BSc degrees, NMBI registration, clinical hospital placements, and Stamp 1G graduate work visa.",
  keywords: "Study Nursing in Ireland for Indian Students, Bachelor of Science in Nursing in Ireland, NMBI Registration for International Nurses, Best Nursing Colleges in Ireland, Cost of Nursing Education in Ireland, Nurse Salary in Ireland, Edu-Hawk Worldwide",
  introTitle: "STUDY NURSING (BSC & MSC) IN IRELAND FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "Studying Nursing in Ireland provides international students with globally recognized healthcare education, extensive supervised hospital clinical placements, and direct eligibility for professional registration with the Nursing and Midwifery Board of Ireland (NMBI). Taught entirely in English at premier universities like University College Cork, Trinity College Dublin, and University of Galway, graduates develop advanced clinical competencies and enjoy immediate career opportunities across Ireland's Health Service Executive (HSE) and private hospital networks."
  ],
  overview: [
    "Ireland is recognized internationally for its high standard of healthcare education, cutting-edge clinical simulation centers, and compassionate patient-centered ethos. Nursing degrees in Ireland are delivered through academic university departments in close partnership with regional teaching hospitals, ensuring that students spend over 50% of their program in real-world clinical rotations across medical, surgical, pediatric, and critical care units.",
    "Undergraduate nursing programs typically take four years to complete (NFQ Level 8 Bachelor of Science Honours), leading directly to registration as a Registered General Nurse (RGN). Integrated curricula—such as Children's and General Integrated Nursing—take four and a half years, qualifying graduates in dual clinical scopes. For qualified nurses, Irish universities provide specialized Master of Science (MSc) degrees in advanced practice, intensive care, oncology, and nursing leadership.",
    "Edu-Hawk Worldwide offers expert step-by-step guidance for Indian nursing aspirants. Our overseas education counselors assist with evaluating Class 12 science qualifications, meeting NMBI and university English proficiency thresholds, navigating occupational health immunization and Garda vetting, and securing the Irish student visa (Stamp 2)."
  ],
  level: "BSc (Hons) Nursing (NFQ Level 8) & MSc Clinical Nursing (NFQ Level 9)",
  crumb: "Healthcare & Medicine / Nursing in Ireland",
  stats: [
    {
      label: "Degree Choices",
      value: "BSc (Hons) General, Pediatric & Mental Health Nursing"
    },
    {
      label: "Course Duration",
      value: "4 Years (BSc) / 4.5 Years (Dual Integrated)"
    },
    {
      label: "Top Institutions",
      value: "UCC Cork, Trinity College Dublin, University of Galway"
    },
    {
      label: "Professional License",
      value: "NMBI Registration / Stamp 1G Graduate Work Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Choose Ireland",
      title: "Key Advantages of Studying Nursing in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Pursuing nursing education in Ireland connects students directly with a modern, patient-focused European healthcare model, offering distinctive professional benefits:"
          ]
        },
        {
          t: "ul",
          items: [
            "NMBI Professional Accreditation: Successful completion of an NMBI-approved pre-registration degree entitles graduates to register as a Registered General Nurse (RGN) in Ireland without external qualification bridging.",
            "Substantial Supervised Clinical Hours: Complete over 2,000 hours of clinical rotations across public HSE university hospitals, maternity centers, community clinics, and pediatric wards.",
            "Specialized Undergraduate Streams: Choose specialized entry tracks in General Nursing, Children's & General Integrated Nursing, Mental Health Nursing, or Intellectual Disability Nursing.",
            "Paid Final-Year Clinical Internship: Fourth-year nursing students complete a 36-week continuous clinical roster placement with a rostered salary paid by the healthcare provider.",
            "High Demand & Rapid Employment: Ireland experiences sustained demand for qualified nurses, offering prompt job placements and sponsorship across HSE hospitals and private healthcare facilities.",
            "Post-Study Work Authorization (Stamp 1G): Bachelor's graduates qualify for a 12-month post-study work visa, while Master's graduates receive 24 months to transition into full-time clinical employment."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Program Specializations",
      title: "Nursing Degree Programs & Clinical Pathways in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish university nursing departments offer comprehensive degree pathways catering to undergraduate entrants and experienced registered nurses:"
          ]
        },
        {
          t: "ul",
          items: [
            "BSc (Hons) in General Nursing (4 Years): Foundational program preparing nurses to deliver acute medical, surgical, geriatric, and emergency care in hospital and community environments.",
            "BSc (Hons) in Children's & General Integrated Nursing (4.5 Years): Dual-qualification program equipping graduates to care for pediatric patients from neonates to adolescents as well as adult clinical patients.",
            "BSc (Hons) in Mental Health Nursing (4 Years): Dedicated to psychiatric assessment, crisis intervention, psychotherapy support, and recovery-oriented mental healthcare.",
            "BSc (Hons) in Intellectual Disability Nursing (4 Years): Focuses on holistic healthcare, functional independence, and specialized medical support for individuals with intellectual disabilities.",
            "MSc in Nursing / Advanced Clinical Practice (1–2 Years): Postgraduate programs for qualified nurses specializing in oncology, palliative care, perioperative nursing, emergency care, and healthcare leadership."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Featured Universities",
      title: "Top Universities and Nursing Colleges in Ireland",
      unis: [
        {
          name: "University College Cork",
          city: "Cork",
          state: "Munster",
          desc: "Globally ranked School of Nursing and Midwifery offering 4-year general, mental health, and 4.5-year integrated children's nursing degrees with leading clinical hospital partners.",
          img: uniImg1
        },
        {
          name: "Trinity College Dublin",
          city: "Dublin",
          state: "Leinster",
          desc: "Ireland's premier university providing world-class nursing science education through its School of Nursing and Midwifery, affiliated with St. James's Hospital and Tallaght University Hospital.",
          img: uniImg2
        },
        {
          name: "University of Galway",
          city: "Galway",
          state: "Connacht",
          desc: "Renowned School of Nursing & Midwifery offering state-of-the-art clinical skills suites, simulation laboratories, and extensive clinical rotations across Saolta University Health Care Group.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Irish nursing schools maintain intimate student-to-clinical-mentor ratios, ensuring individualized supervision during ward shifts and simulation laboratory drills."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Requirements for Nursing Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admission into pre-registration nursing programs in Ireland is competitive and requires verified academic aptitude, language clarity, and health suitability:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate BSc Nursing Applicants: Successful completion of Higher Secondary School Certificate (Class 12 / CBSE / ICSE / State Board) with a minimum aggregate of 75% to 85%, including mandatory credits in Biology and Chemistry or Physics.",
            "English Language Thresholds: IELTS Academic overall score of 7.0 (with minimum 7.0 in listening and speaking, and 6.5 in reading and writing) or equivalent TOEFL iBT (95–100+) / PTE Academic (68+). Flawless communication is mandatory for patient safety.",
            "Postgraduate Applicants: Recognized Bachelor of Nursing degree, proof of active nursing registration in your home country, and at least one year of verified post-registration clinical acute hospital experience.",
            "Health & Immunization Clearance: Proof of immunity or vaccination against Hepatitis B, MMR (Measles, Mumps, Rubella), Varicella, and negative screening for tuberculosis (Quantiferon/Mantoux).",
            "Garda Vetting: Mandatory criminal background screening clearance conducted via the National Vetting Bureau before undertaking clinical rotations."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Application Materials",
      title: "Admission Requirements & Clinical Clearance Documentation",
      groups: [
        {
          t: "p",
          items: [
            "To apply for an Irish nursing degree, applicants must prepare an extensive academic and clinical documentation file:"
          ]
        },
        {
          t: "ul",
          items: [
            "Certified Class 10 and Class 12 mark sheets and certificates (plus Bachelor's transcripts for PG applicants).",
            "Valid International Passport with minimum 12 months validity.",
            "Detailed Personal Statement illustrating your compassion, clinical interest, resilience, and commitment to the nursing profession.",
            "Two Letters of Recommendation (academic teachers or clinical nursing supervisors).",
            "Official English language proficiency scorecard (IELTS / TOEFL / PTE).",
            "Comprehensive Occupational Health Declaration and certified vaccination records.",
            "Police Clearance Certificate from your home country."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Cost & Budgeting",
      title: "Cost of Studying Nursing in Ireland (Tuition Fees & Living Costs)",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees for international non-EU students in nursing encompass academic lectures, clinical lab simulations, and hospital placement administration:"
          ]
        },
        {
          t: "p",
          items: [
            "| Expense Category | Annual Indicative Cost Range | Key Budgeting Notes |",
            "| :--- | :--- | :--- |",
            "| **Undergraduate Nursing Tuition** | €23,000 – €30,000 / year | E.g., UCC BSc Nursing approx. €24,400 / year (2026–2027) |",
            "| **Postgraduate Nursing Tuition** | €16,000 – €26,000 / year | 1-year clinical specialty Master's program |",
            "| **Student Living Expenses** | €10,000 – €15,000 / year | Covers accommodation, meals, transport, and utilities |",
            "| **Clinical Uniforms & Equipment** | €400 – €700 (one-off) | HSE-standard nursing tunics, stethoscope, fob watch, shoes |",
            "| **Occupational Health Screening** | €200 – €350 (one-off) | Blood titers, vaccinations, and physician sign-off |",
            "| **Private Health Insurance** | €160 – €300 / year | Mandatory international medical insurance policy |",
            "| **Irish Residence Permit (IRP)** | €300 registration fee | Paid at immigration appointment upon arrival |"
          ]
        },
        {
          t: "p",
          items: [
            "Paid Internship Advantage: During the 36-week clinical internship in Year 4, students receive an HSE rostered salary (approximately €20,000 to €24,000 pro-rata), which significantly helps offset final-year living expenses."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Step-by-Step Admission Process for Nursing in Ireland",
      steps: [
        {
          title: "Select Nursing Specialization",
          desc: "Decide between General Nursing (4 years), Children's & General Integrated Nursing (4.5 years), or Mental Health Nursing."
        },
        {
          title: "Review University Prerequisites",
          desc: "Verify that your Class 12 scores in Biology and Chemistry meet the required 75%–85% threshold, alongside IELTS 7.0."
        },
        {
          title: "Draft Personal Statement & Gather References",
          desc: "Compose a compelling statement outlining your clinical passion, resilience, and healthcare dedication, backed by academic references."
        },
        {
          title: "Submit Direct International Application",
          desc: "Submit your online application through university admissions portals or with Edu-Hawk Worldwide support before deadlines."
        },
        {
          title: "Complete Online Interview / Assessment",
          desc: "Participate in an admissions interview or clinical scenario assessment if required by the university nursing faculty."
        },
        {
          title: "Accept Offer & Remit Tuition Deposit",
          desc: "Review your conditional/unconditional offer letter, pay the required tuition deposit, and secure your clinical seat."
        },
        {
          title: "Complete Health Clearance & Garda Vetting",
          desc: "Undergo mandatory serology testing, immunization updates, and submit background police clearance forms."
        },
        {
          title: "Apply for Irish Student Visa (Stamp 2)",
          desc: "File your visa application via the AVATS portal with proof of funds (€10,000+ living expenses plus tuition fee receipt)."
        },
        {
          title: "Commence Nursing Studies in Ireland",
          desc: "Arrive in Ireland, attend clinical hospital induction, collect your uniform and badge, and begin pre-clinical simulation classes."
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Prospective students should begin their applications 8 to 10 months ahead of the September intake to allow sufficient time for clinical health compliance and visa processing."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Professional Regulation",
      title: "Accreditation, NMBI Registration, and European Mutual Recognition",
      groups: [
        {
          t: "p",
          items: [
            "Nursing education and practice in Ireland are strictly governed to protect public health and maintain the highest clinical standards:"
          ]
        },
        {
          t: "ul",
          items: [
            "Nursing and Midwifery Board of Ireland (NMBI): The statutory regulatory authority that accredits pre-registration programs and maintains the Register of Nurses and Midwives.",
            "Direct Registration Pathway: Graduates of approved Irish BSc programs are eligible to apply directly for NMBI candidate-to-registered nurse PIN conversion upon graduation.",
            "European Union Mobility: Irish nursing qualifications comply fully with European Union Directive 2005/36/EC, enabling automatic professional recognition across EU and EEA member states.",
            "UK Practice: Under the Common Travel Area (CTA) accord, Irish-registered nurses can seamlessly apply for registration with the UK Nursing and Midwifery Council (NMC)."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Nurse Salaries and Career Opportunities in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Graduates registered with the NMBI enjoy exceptional employment stability, structured salary scales, and clear progression ladders within the Health Service Executive (HSE) and private hospitals:"
          ]
        },
        {
          t: "ul",
          items: [
            "Staff Nurse (General / Surgical): Providing comprehensive bedside care, administering medications, managing post-operative recovery, and coordinating care plans.",
            "Pediatric Nurse: Caring for infants, children, and young adolescents in specialized pediatric hospitals (such as Children's Health Ireland).",
            "Mental Health Nurse: Delivering specialized inpatient and outpatient care for individuals experiencing psychological disorders and addiction.",
            "Clinical Nurse Specialist (CNS): Practicing advanced nursing care in specialized clinical domains such as cardiology, diabetes, oncology, or wound management.",
            "Advanced Nurse Practitioner (ANP): The highest tier of clinical nursing practice, entitled to diagnose conditions, order diagnostic tests, and prescribe medications autonomously.",
            "Clinical Nurse Manager (CNM): Overseeing hospital ward management, staffing rotas, clinical governance, and budget allocations."
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Salaries for Nurses in Ireland (HSE Consolidated Salary Scales):",
            "• Staff Nurse (Entry-Level Year 1): €33,900 – €38,500 / year (plus shift & weekend allowances)",
            "• Staff Nurse (Experienced / Senior): €42,000 – €52,000 / year",
            "• Clinical Nurse Specialist (CNS): €54,000 – €64,000 / year",
            "• Clinical Nurse Manager (CNM 2 / 3): €58,000 – €72,000+ / year",
            "• Advanced Nurse Practitioner (ANP): €66,000 – €82,000+ / year"
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Comprehensive Document Checklist for Nursing Applicants",
      groups: [
        {
          t: "p",
          items: [
            "Assemble the following verified documents to ensure smooth evaluation by university admissions and hospital placement boards:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid International Passport with biometric photo page.",
            "Class 10 and Class 12 mark sheets and certificates (plus Bachelor's transcripts for PG applicants).",
            "Proof of required science subjects (Biology and Chemistry) with strong passing grades.",
            "English language proficiency scorecard (IELTS 7.0+ / TOEFL 95+).",
            "Personal Statement detailing your clinical motivation and empathy.",
            "Two Letters of Recommendation (academic teachers or clinical mentors).",
            "Occupational Health & Immunization Records (Hep B, MMR, Varicella, TB).",
            "Police Clearance Certificate for Garda Vetting.",
            "Proof of financial sufficiency for tuition and living expenses (€10,000+ living funds)."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Edu-Hawk Guidance",
      title: "How Edu-Hawk Worldwide Supports Your Irish Nursing Studies",
      groups: [
        {
          t: "p",
          items: [
            "Nursing admissions involve multi-layered academic, clinical, and regulatory requirements. Edu-Hawk Worldwide provides comprehensive support for Indian applicants:",
            "• Academic Equivalency & Shortlisting: Matching your Class 12 marks to the admissions criteria of UCC, Trinity, and Galway.",
            "• Personal Statement Mentorship: Assisting you in drafting a standout essay highlighting your healthcare passion, ethical judgment, and communication skills.",
            "• Clinical Clearance Guidance: Step-by-step guidance on obtaining mandatory occupational health blood titers, vaccinations, and police clearances.",
            "• Stamp 2 Visa Processing: Thorough guidance on AVATS filing, financial documentation, and visa appointment management.",
            "• NMBI Licensing Guidance: Advice on understanding post-graduation registration protocols and career transitions into the Irish healthcare sector."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can Indian students study Nursing in Ireland after Class 12?",
      a: "Yes. Indian students who have completed Class 12 (CBSE, ICSE, or State Boards) with strong marks in science subjects (Biology and Chemistry, typically 75%–85%+) and achieve an IELTS score of 7.0 (with no band under 6.5/7.0) can apply directly for 4-year BSc (Hons) Nursing programs."
    },
    {
      q: "How much does it cost to study Nursing in Ireland?",
      a: "For international (non-EU) students, undergraduate BSc nursing tuition typically ranges between €23,000 and €30,000 per year (for example, UCC's tuition is approximately €24,400 per year). Living expenses range from €10,000 to €15,000 per year."
    },
    {
      q: "Can I practice as a registered nurse in Ireland after graduation?",
      a: "Yes. Graduates of accredited Irish university nursing degrees are eligible to register directly with the Nursing and Midwifery Board of Ireland (NMBI) as Registered General Nurses (RGN), allowing them to practice in HSE public hospitals, private clinics, and community healthcare."
    },
    {
      q: "Are clinical hospital placements included in the nursing degree?",
      a: "Yes. Irish nursing degrees incorporate over 2,000 hours of clinical hospital placements across all 4 years. In the final year, students complete a 36-week continuous paid clinical internship in healthcare facilities, earning an HSE rostered salary."
    },
    {
      q: "Can international nurses work in Ireland after completing their studies?",
      a: "Yes. Under the Third Level Graduate Scheme, BSc graduates receive a 1-year post-study work visa (Stamp 1G), while Master's graduates receive 2 years. Registered nurses can work full-time and readily transition to general employment permits sponsored by healthcare employers."
    }
  ]
};

export default function NursingAbroadIreland() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "University College Cork",
        city: "Cork",
        state: "Munster",
        desc: "Globally ranked School of Nursing and Midwifery offering 4-year general, mental health, and 4.5-year integrated children's nursing degrees with leading clinical hospital partners.",
        img: uniImg1
      },
      {
        name: "Trinity College Dublin",
        city: "Dublin",
        state: "Leinster",
        desc: "Ireland's premier university providing world-class nursing science education through its School of Nursing and Midwifery, affiliated with St. James's Hospital and Tallaght University Hospital.",
        img: uniImg2
      },
      {
        name: "University of Galway",
        city: "Galway",
        state: "Connacht",
        desc: "Renowned School of Nursing & Midwifery offering state-of-the-art clinical skills suites, simulation laboratories, and extensive clinical rotations across Saolta University Health Care Group.",
        img: uniImg3
      }
    ]
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
