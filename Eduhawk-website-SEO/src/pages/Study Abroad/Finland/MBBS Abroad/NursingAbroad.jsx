import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";
import heroImg from "../../../../Images/Abroad/Finland/Nursing/nursing_finland_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/Nursing/nursing_finland_hero_bg.webp";
import clinicalImg from "../../../../Images/Abroad/Finland/Nursing/nursing_finland_clinical.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/Nursing/nursing_finland_cta_bg.webp";
import u0Img from "../../../../Images/Abroad/Finland/Nursing/Laurea_University_of_Applied_Sciences.webp";
import u1Img from "../../../../Images/Abroad/Finland/Nursing/Metropolia_University_of_Applied_Sciences.webp";

// Overview image
const sideImg = clinicalImg;

const page = {
  name: "Nursing in Finland",
  country: "Finland",
  slug: "nursing",
  title: "Nursing in Finland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Nursing in Finland: English-taught and bilingual Bachelor of Health Care, top UAS universities (Laurea, Metropolia), clinical training, fees and licensing for Indian students.",
  keywords: "Study Nursing in Finland, Nursing in Finland for Indian Students, Universities in Finland, Cost of Studying in Finland",
  introTitle: "Nursing in Finland",
  heroParas: [
    "If you are planning to **[Study Nursing in Finland](/courses/mbbs)**, the country offers internationally oriented nursing programmes, modern clinical training, and pathways towards working as a registered nurse. Finland has English-taught and bilingual nursing programmes designed to combine theoretical education with practical healthcare experience."
  ],
  overview: [
    "For Indian students, **studying nursing in Finland** can provide exposure to a modern European healthcare system, simulation-based learning, and multicultural clinical environments. However, applicants should carefully understand tuition fees, Finnish language requirements, eligibility criteria, and professional licensing before choosing a programme.",
    "**[Edu-Hawk Worldwide](/services)** helps students explore international education opportunities and understand the university selection, admission, and study-abroad planning process."
  ],
  level: "Undergraduate",
  crumb: "MBBS Abroad",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Health Care (Nursing)" },
    { label: "Course Duration", value: "3.5 Years (210 ECTS)" },
    { label: "Top Universities", value: "Laurea, Metropolia UAS" },
    { label: "Teaching Language", value: "English & Bilingual (Finnish)" },
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "Why Study Nursing in Finland?",
      groups: [
        {
          t: "p",
          items: [
            "**[Study Nursing in Finland](/courses/mbbs)** to gain professional healthcare education in a modern European healthcare environment. Finnish nursing programmes combine theoretical learning with simulation, practical skills, and extensive clinical placements.",
            "For Indian students, **Nursing in Finland for Indian Students** can be an attractive option because several universities of applied sciences offer programmes with English-language instruction alongside Finnish-language development. This provides exposure to a modern European healthcare system, simulation-based learning, and multicultural clinical environments.",
            "**Laurea University of Applied Sciences**, for example, includes **90 ECTS of clinical placements** in its Bachelor of Nursing programme and prepares students for registered nursing practice. With **[Edu-Hawk Worldwide](/services)**, students can explore nursing education opportunities abroad and understand the important steps involved in planning their international education journey.",
            "**Benefits of Studying Nursing in Finland**"
          ]
        },
        {
          t: "dl",
          pairs: [
            {
              t: "High-Quality Nursing Education",
              d: "**High-quality nursing education** in Finland with modern curricula aligned with European Union directives and healthcare standards."
            },
            {
              t: "Simulation & Clinical Training",
              d: "**Modern simulation and clinical training** facilities designed to replicate emergency, paediatric, and surgical hospital wards."
            },
            {
              t: "Multicultural Learning",
              d: "**International and multicultural learning environment** with global student cohorts and English-language instruction."
            },
            {
              t: "Extensive Hospital Placements",
              d: "Up to **90 ECTS of practical clinical healthcare experience** in Finnish hospitals, health centres, and specialist clinics."
            },
            {
              t: "Diverse Clinical Settings",
              d: "Hands-on opportunities to work across **acute care, intensive care, elderly care**, and community healthcare settings."
            },
            {
              t: "European Career Pathways",
              d: "Valuable potential to build a career in Finland and other **[European healthcare systems](/study-abroad)** upon professional licensing."
            }
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Programs",
      title: "Nursing Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The main undergraduate pathway is the **Bachelor of Health Care in Nursing**.",
            "A typical **Nursing Course in Finland** takes approximately **3.5 years** and comprises **210 ECTS credits**. Both **Laurea** and **Metropolia** list nursing bachelor's programmes with this duration and credit structure.",
            "**Popular Nursing Study Areas**",
            "Students may study subjects such as:"
          ]
        },
        {
          t: "pills",
          items: [
            "Fundamentals of Nursing",
            "Anatomy and Physiology",
            "Medical-Surgical Nursing",
            "Mental Health Nursing",
            "Paediatric Nursing",
            "Gerontological Nursing",
            "Community Health Nursing",
            "Emergency Nursing",
            "Medication Management",
            "Health Promotion",
            "Clinical Decision-Making",
            "Patient Safety",
            "Nursing Research",
            "Professional Finnish for Healthcare"
          ]
        },
        {
          t: "p",
          items: [
            "Nursing programmes combine theoretical education, simulation training, and clinical practice. **Metropolia University of Applied Sciences**, for example, provides simulation environments covering paediatric care, emergency care, intensive care, and surgical nursing.",
            "**Nursing Course Duration in Finland**"
          ]
        },
        {
          t: "table",
          headers: ["Parameter", "Programme Specification"],
          rows: [
            ["Course Duration", "Approximately **3.5 years** (full-time studies)"],
            ["Qualification Awarded", "**Bachelor of Health Care (Sairaanhoitaja AMK)**"],
            ["Total Study Volume", "Approximately **210 ECTS credits**"],
            ["Clinical Practice", "Extensive clinical placements (approx. **75–90 ECTS**) in real healthcare settings"],
            ["Language of Instruction", "English-taught and bilingual English-Finnish pathways"]
          ]
        },
        {
          t: "p",
          items: [
            "Students should confirm the programme structure and admission requirements with their chosen institution before applying."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Where to study",
      title: "Top Universities for Nursing in Finland",
      lead: [
        "Students searching for the **Best Universities for Nursing in Finland** can explore universities of applied sciences that offer nursing education to international applicants.",
        "Important: Always verify whether a programme is accepting international students and whether it is fully English-taught or bilingual before applying."
      ],
      unis: [
        {
          name: "Laurea University of Applied Sciences",
          desc: "Laurea offers an English-taught Bachelor's Degree Programme in Nursing (~3.5 years, 210 ECTS). Combines theoretical studies with 90 ECTS of clinical placements. Check current language criteria before applying.",
          img: u0Img
        },
        {
          name: "Metropolia University of Applied Sciences",
          desc: "Metropolia offers a Bachelor of Health Care in Nursing through a bilingual English-Finnish programme (~3.5 years, 210 ECTS). Students develop professional Finnish alongside clinical training.",
          img: u1Img
        }
      ],
      groups: [
        {
          t: "table",
          headers: ["University", "Degree / Qualification", "Duration & Credits", "Instruction Language", "Campus Location"],
          rows: [
            ["Laurea UAS", "**Bachelor of Health Care (Nursing)**", "3.5 years (210 ECTS)", "English", "Espoo / Vantaa"],
            ["Metropolia UAS", "**Bachelor of Health Care (Nursing)**", "3.5 years (210 ECTS)", "Bilingual (English / Finnish)", "Helsinki (Myllypuro)"]
          ]
        }
      ],
      note: [
        "Students should also explore current nursing programmes in Finland through the official **Studyinfo.fi** portal, which provides updated programme details, eligibility criteria, and application information. Connect with **[Edu-Hawk Worldwide](/contact)** for personalised university shortlisting."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility",
      title: "Eligibility to Study Nursing in Finland",
      img: clinicalImg,
      imgAlt: "Clinical Training for Nursing in Finland",
      imgPosition: "left",
      groups: [
        {
          t: "p",
          items: [
            "The **eligibility criteria for Nursing in Finland** depend on the university and admission route.",
            "For **Indian students**, the basic requirement is generally a recognised upper-secondary qualification that provides **eligibility for higher education** in India and Finland.",
            "**Common Eligibility Requirements**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Class 12 or equivalent qualification** with strong academic performance",
            "**Academic transcripts** showing completed higher secondary coursework",
            "**Required academic subjects**, where applicable (Science or general stream)",
            "**English language proficiency** (B2 level via IELTS, TOEFL, or UAS exam)",
            "**Finnish language proficiency**, where required by the specific programme",
            "**Entrance examination** (such as the International UAS Exam) or certificate-based selection",
            "**Health and functional capacity requirements** relevant to clinical nursing studies (SORA legislation)"
          ]
        },
        {
          t: "p",
          items: [
            "For example, **Laurea** requires an upper-secondary qualification, B2-level English, and B1-level Finnish for its Nursing programme because students work with Finnish-speaking patients during clinical placements.",
            "**Metropolia's bilingual programme** currently allows students to apply without prior Finnish skills and develop their Finnish during the degree, subject to the programme's admission criteria. You can also prepare via **[Finnish language courses](/study-abroad/finland/language-courses)**.",
            "**Nursing in Finland After 12th**",
            "Indian students who have completed Class 12 with a qualification that meets higher-education entry requirements can explore bachelor's-level nursing programmes in Finland.",
            "With **[Edu-Hawk Worldwide study-abroad guidance](/services)**, students can compare available healthcare programmes, including **[Dentistry in Finland](/study-abroad/finland/dentistry)** and **[Pharmacy in Finland](/study-abroad/finland/pharmacy)**, and prepare systematic applications."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission",
      title: "Admission Requirements for Nursing in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The **Nursing Admission Requirements in Finland** vary depending on the institution and admission route.",
            "**General Admission Requirements**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Valid passport** and personal identification documents",
            "**Class 10 certificate** and mark sheet",
            "**Class 12 certificate** (Higher Secondary School Certificate)",
            "**Academic transcripts** showing completed grades",
            "**Proof of English proficiency** (IELTS, TOEFL, or International UAS Exam)",
            "**Finnish language certificate**, if required by the intake",
            "**Entrance examination or selection test results**",
            "**Any university-specific documents** requested during the application"
          ]
        },
        {
          t: "p",
          items: [
            "Some Finnish universities of applied sciences use the **International UAS Exam**, a digital entrance examination conducted in English for bachelor's-level programmes. Metropolia lists this as one of its primary admission routes.",
            "**English Language Requirements**",
            "English-taught nursing programmes require verified proof of English proficiency. For example, Laurea requires B2-level English for its Nursing programme. Students should check which language certificates and assessment methods are accepted for their intended intake.",
            "**Finnish Language Requirements**",
            "Students should pay particular attention to **Finnish language requirements** when applying for nursing in Finland. Even when the academic programme is taught in English, Finnish is essential for clinical placements and future employment in Finnish healthcare. Laurea requires B1-level Finnish, while Metropolia integrates Finnish throughout its bilingual Nursing programme.",
            "Applicants should verify current language requirements directly with the institution or contact the **[Edu-Hawk admissions desk](/contact)** before applying."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Costs",
      title: "Cost of Studying Nursing in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The **Cost of Studying Nursing in Finland** depends on the university, programme, and student's nationality.",
            "For English-taught bachelor's programmes, **non-EU/EEA students** generally pay tuition fees. Finland's official Study in Finland portal states that tuition fees for English-taught bachelor's programmes typically range from **€9,000 to €20,000 per year**, depending on the university and programme.",
            "**Financial Planning for Indian Students**",
            "When budgeting for nursing studies in Finland, consider the following tuition fee benchmarks and living costs:"
          ]
        },
        {
          t: "table",
          headers: ["Expense Category", "Estimated Cost / Considerations for Indian Students"],
          rows: [
            ["Laurea UAS Tuition Fee", "**€9,500 per academic year** for non-EU/EEA degree students"],
            ["Metropolia UAS Tuition Fee", "**€11,000 to €11,500 per academic year** depending on study commencement date"],
            ["Student Housing (Accommodation)", "**€350 – €600 per month** (HOAS student apartments or shared flats)"],
            ["Food & Daily Living Expenses", "**€250 – €400 per month** for groceries, municipal transport, and meals"],
            ["Health Insurance & Healthcare", "**FSHS student healthcare fee** + mandatory private health insurance for Migri"],
            ["Residence Permit (Migri)", "**Finnish Immigration Service** student residence permit application fees"],
            ["Study Materials & Uniforms", "Nursing uniforms, stethoscopes, medical supplies, and textbooks"],
            ["Travel & Transportation", "International flights between India and Finland plus local transit passes"]
          ]
        },
        {
          t: "p",
          items: [
            "Fees and eligibility conditions may change, so applicants should verify the current official programme information before making financial commitments.",
            "**Important:** Do not plan your entire budget around part-time employment. Finding work in Finland can be challenging, particularly without Finnish or Swedish language skills. Students should prepare a realistic budget covering tuition fees, living expenses, and other education-related costs associated with **[studying abroad in Finland](/study-abroad)**."
          ]
        }
      ]
    },
    {
      slot: "steps",
      eyebrow: "Step by step",
      title: "Nursing Admission Process in Finland",
      lead: [
        "The **Nursing Admission Process in Finland** involves several stages, from checking eligibility to completing immigration formalities."
      ],
      steps: [
        {
          title: "Check Your Eligibility",
          text: "Review your **academic qualifications** and verify that your Class 12 credential meets the university's higher-education eligibility requirements."
        },
        {
          title: "Choose a Nursing Programme",
          text: "Compare university options, teaching language (English vs bilingual), tuition fees, duration, admission criteria, and clinical training partnerships."
        },
        {
          title: "Check English and Finnish Requirements",
          text: "Verify the required **language certificates**, minimum scores (e.g. IELTS/TOEFL), and any Finnish language proficiency requirements for clinical placements."
        },
        {
          title: "Prepare for the Entrance Examination",
          text: "If your chosen admission route requires an entrance examination (such as the **International UAS Exam**), prepare according to the applicable examination criteria."
        },
        {
          title: "Submit Your Application",
          text: "Submit your application through **Studyinfo.fi** during the joint application period (usually in January). Confirm exact intake deadlines on the official portal."
        },
        {
          title: "Receive Your Admission Decision",
          text: "After successful selection, follow the university's instructions for accepting your study place and completing formal enrolment."
        },
        {
          title: "Apply for Your Residence Permit",
          text: "Non-EU/EEA students should complete the applicable **residence permit process** through the Finnish Immigration Service (Migri). With **[Edu-Hawk Worldwide study-abroad guidance](/services)**, students can navigate every step with confidence. Connect with our **[counselling desk](/contact)** for personalised support."
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Licensing & Regulation",
      title: "Nursing Licensing in Finland",
      groups: [
        {
          t: "p",
          items: [
            "**Nursing is a regulated healthcare profession in Finland**.",
            "After completing a qualifying nursing degree, graduates must apply for the relevant **right to practise as a registered nurse in Finland** through the National Supervisory Authority for Welfare and Health (**Valvira**).",
            "Metropolia states that its Bachelor of Health Care in Nursing follows the requirements of the **EU professional qualification framework**, enabling graduates to apply for the right to practise nursing through the relevant Finnish supervisory authority.",
            "Students should verify the current authority and application procedure before graduation, as regulatory responsibilities and procedures may change. Also explore related healthcare fields like **[Physiotherapy in Finland](/study-abroad/finland/physiotherapy)** and **[Public Health in Finland](/study-abroad/finland/public-health)**.",
            "**Language Skills for Nursing Jobs in Finland**",
            "Language proficiency is particularly important for healthcare professionals. Even if you complete an English-taught nursing course in Finland, developing **professional Finnish** is crucial because nurses communicate directly with patients, families, and multidisciplinary healthcare teams.",
            "Metropolia's programme integrates Finnish language learning throughout the degree to help prepare students for work in Finnish healthcare settings."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Salary",
      title: "Salary and Job Opportunities for Nurses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "After completing the required qualification and obtaining professional authorisation, graduates can explore various **nursing jobs in Finland** across the public and private sectors.",
            "**Career Opportunities After Nursing in Finland**",
            "Registered nurses can work in diverse settings such as:"
          ]
        },
        {
          t: "pills",
          items: [
            "Hospitals",
            "Primary Healthcare",
            "Emergency Departments",
            "Intensive Care Units",
            "Surgical Departments",
            "Elderly Care",
            "Home Healthcare",
            "Mental Health Services",
            "Rehabilitation Centers",
            "Private Healthcare Clinics",
            "Community Healthcare",
            "Health Technology Consultancy"
          ]
        },
        {
          t: "p",
          items: [
            "Metropolia identifies career opportunities across specialised healthcare, primary healthcare, private services, third-sector organisations, health technology, and health consultancy.",
            "**Nurse Salary in Finland**",
            "The **salary of a nurse in Finland** depends on several factors, including professional experience, job position, specialisation, employer, location, shift work differentials, and the applicable collective employment agreement.",
            "Salary information should be updated periodically using reliable Finnish labour-market data rather than relying on a fixed figure. Internationally trained nurses should also consider the **professional authorisation** and **language requirements** that apply before entering the Finnish healthcare workforce."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Checklist",
      title: "Documents Required to Study Nursing in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Students applying for **Nursing in Finland for Indian Students** may need to prepare the following documents:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Valid passport** with required validity",
            "**Class 10 certificate** and mark sheet",
            "**Class 12 certificate** (Higher Secondary School Certificate)",
            "**Academic transcripts** showing completed coursework and grades",
            "**Proof of English proficiency** (IELTS, TOEFL, or International UAS Exam score)",
            "**Finnish language certificate**, where required by the specific programme",
            "**Entrance examination documents** and invitation letter",
            "**Certified translations**, if documents are not originally in English, Finnish, or Swedish",
            "**Financial documents** verifying funds for tuition and living expenses",
            "**Residence permit documents** after receiving formal admission"
          ]
        },
        {
          t: "p",
          items: [
            "The exact documents required depend on the university and admission pathway. Students should check the current requirements on the official university website and Studyinfo portal before applying.",
            "Preparing documents in advance can help applicants manage application deadlines and avoid delays. Contact **[Edu-Hawk Worldwide](/contact)** for personalised guidance."
          ]
        }
      ]
    }
  ],

  faqs: [
    {
      q: "Can Indian students study Nursing in Finland?",
      a: "Yes, **Indian students can study nursing in Finland** if they meet the academic, language, and admission requirements of the selected institution. Finland offers English-taught and bilingual nursing programmes available to international students."
    },
    {
      q: "Is Nursing in Finland taught in English?",
      a: "Yes, several nursing programmes in Finland are taught in English, while others are bilingual. For example, **Laurea UAS** offers an English-taught Nursing programme, while **Metropolia UAS** offers a bilingual English-Finnish programme."
    },
    {
      q: "How long is the Nursing course in Finland?",
      a: "A Bachelor's Degree in Nursing generally takes approximately **3.5 years** and comprises **210 ECTS credits**. Both Laurea and Metropolia list nursing programmes with this duration and credit structure."
    },
    {
      q: "Is Finnish language required to study Nursing in Finland?",
      a: "It depends on the programme. Some programmes require basic Finnish before admission, while others (like Metropolia's bilingual track) allow students to begin without prior Finnish and learn it during their studies. However, **Finnish language skills** are essential for clinical training and future nursing employment in Finland."
    },
    {
      q: "Can Indian students work as nurses in Finland after graduation?",
      a: "Yes. Graduates of qualifying Finnish nursing programmes can apply for professional authorisation from **Valvira** to practise as registered nurses in Finland. They must meet the applicable professional and Finnish language proficiency requirements."
    }
  ],
  faqTitle: "Frequently Asked Questions About Nursing in Finland"
};

const NursingFinland = () => {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      sideImg={sideImg}
      heroBgImg={heroBgImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/finland/nursing"
    />
  );
};

export default NursingFinland;
