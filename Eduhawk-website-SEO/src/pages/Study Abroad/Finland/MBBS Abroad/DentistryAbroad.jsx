import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";
import heroImg from "../../../../Images/Abroad/Finland/Dentistry/dentistry_finland_hero.webp";
import langImg from "../../../../Images/Abroad/Finland/Dentistry/finland-dentisrty-img3.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/Dentistry/finland-dentisrty-img1-hero-background.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/Dentistry/finland-dentisrty-img4-bottom-card.webp";
import u0Img from "../../../../Images/Abroad/Finland/Dentistry/University_of_Helsinki.webp";
import u1Img from "../../../../Images/Abroad/Finland/Dentistry/University_of_Turku.webp";
import u2Img from "../../../../Images/Abroad/Finland/Dentistry/University_of_Oulu.webp";
import u3Img from "../../../../Images/Abroad/Finland/Dentistry/University_of_Eastern_Finland.webp";

// Overview image
const sideImg = u1Img;

const page = {
  name: "Dentistry in Finland",
  country: "Finland",
  slug: "dentistry",
  title: "Dentistry in Finland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Dentistry in Finland: Licentiate of Dentistry, top dental universities (Helsinki, Turku, Oulu, UEF), eligibility, fees, admission process and careers for Indian students.",
  keywords: "Study Dentistry in Finland, Dentistry in Finland for Indian Students, Universities in Finland, Cost of Studying in Finland",
  introTitle: "Dentistry in Finland",
  heroParas: [],
  overview: [],
  level: "Undergraduate & Licentiate",
  crumb: "MBBS Abroad",

  stats: [
    { label: "Degree Awarded", value: "Licentiate of Dentistry" },
    { label: "Course Duration", value: "5.5 Years (~330 ECTS)" },
    { label: "Top Universities", value: "Helsinki, Turku, Oulu, UEF" },
    { label: "Teaching Language", value: "Finnish & Swedish (Clinical)" },
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "Why Study Dentistry in Finland?",
      groups: [
        {
          t: "p",
          items: [
            "**[Study Dentistry in Finland](/study-abroad/finland/dentistry)** to experience a highly developed education system that focuses on **practical training**, research, **modern dental technology**, and patient-centred healthcare. Finland is an attractive destination for students interested in building a **career in dentistry** and gaining exposure to **[European healthcare practices](/study-abroad)**.",
            "For Indian students, understanding the **eligibility criteria**, **language requirements**, **admission process**, and **cost of education** is essential before choosing this destination. **Dentistry in Finland for Indian students** offers an opportunity to explore professional dental education in a country known for its emphasis on **evidence-based dentistry** and **preventive oral healthcare**.",
            "Finnish dental education combines **theoretical knowledge**, **simulation-based learning**, and **clinical patient training**. At the **University of Oulu**, for example, students progress from foundational studies to clinical training and practical work in dental healthcare settings.",
            "**Benefits of Studying Dentistry in Finland**"
          ]
        },
        {
          t: "dl",
          pairs: [
            {
              t: "High-Quality Dental Education",
              d: "**High-quality dental education** in Finland with comprehensive academic curricula and European healthcare standards."
            },
            {
              t: "Clinical & Simulation Training",
              d: "**Modern clinical and simulation-based training** designed to prepare students for real-world patient dental procedures."
            },
            {
              t: "Evidence-Based Dentistry",
              d: "Strong focus on **evidence-based dentistry** and scientifically validated diagnosis, treatment, and oral care."
            },
            {
              t: "Research-Oriented Environment",
              d: "**Research-oriented learning environment** connecting students with active university clinical and laboratory studies."
            },
            {
              t: "Preventive Healthcare Focus",
              d: "National emphasis on **preventive oral healthcare** and community-wide dental health preservation."
            },
            {
              t: "International Clinical Exposure",
              d: "Valuable opportunity to gain **European clinical healthcare exposure** within world-class Nordic facilities."
            }
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Programs",
      title: "Dentistry Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The primary professional qualification in Finland is the **Licentiate of Dentistry**.",
            "The **Dentistry course in Finland** generally takes around **5.5 years** and consists of approximately **330 ECTS credits**. The programme combines **Bachelor's-level studies** with the **Licentiate of Dentistry** qualification. For example, the **University of Oulu** describes its Dentistry programme as a **5.5-year programme** consisting of **three years of Bachelor's studies** followed by **2.5 years of Licentiate studies**.",
            "**Major Areas Covered in Dentistry**",
            "Students may study subjects such as:"
          ]
        },
        {
          t: "pills",
          items: [
            "Oral Biology",
            "Dental Anatomy",
            "Oral Pathology",
            "Periodontology",
            "Prosthodontics",
            "Orthodontics",
            "Endodontics",
            "Paediatric Dentistry",
            "Oral Radiology",
            "Oral & Maxillofacial Surgery",
            "Preventive Dentistry",
            "Clinical Dentistry"
          ]
        },
        {
          t: "p",
          items: [
            "The curriculum also includes **practical and clinical training** to help students develop professional dental skills.",
            "**Dentistry Course Duration in Finland**"
          ]
        },
        {
          t: "table",
          headers: ["Parameter", "Programme Specification"],
          rows: [
            ["Course Duration", "Approximately **5.5 years**"],
            ["Qualification Awarded", "**Licentiate of Dentistry** (Hammaslääketieteen lisensiaatti)"],
            ["Study Structure", "Foundational, theoretical, and clinical education (**3 years Bachelor + 2.5 years Licentiate**)"],
            ["Total Study Volume", "Approximately **330 ECTS credits**"],
            ["Language of Instruction", "Primarily **Finnish and/or Swedish** for undergraduate professional programmes, depending on the university"]
          ]
        },
        {
          t: "p",
          items: [
            "Students should verify the current programme structure and language requirements before applying."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Where to study",
      title: "Top Universities for Dentistry in Finland",
      lead: [
        "Students searching for the **best universities for Dentistry in Finland** can explore Finnish universities offering professional dental education."
      ],
      unis: [
        {
          name: "University of Helsinki",
          desc: "Offers a Dentistry programme leading to the **Licentiate of Dentistry** qualification (~**5.5 years**, **330 ECTS credits**).",
          img: u0Img
        },
        {
          name: "University of Turku",
          desc: "Provides professional dental education with a focus on theoretical knowledge and **clinical training** in **Finnish or Swedish**.",
          img: u1Img
        },
        {
          name: "University of Oulu",
          desc: "Offers a **5.5-year Dentistry programme** (~**330 ECTS credits**) with **clinical patient training** leading to the **Licentiate of Dentistry**.",
          img: u2Img
        },
        {
          name: "University of Eastern Finland",
          desc: "Provides education and specialist training in dentistry through its **School of Medicine**.",
          img: u3Img
        }
      ],
      groups: [
        {
          t: "table",
          headers: ["University", "Degree / Qualification", "Duration & Credits", "Instruction Language", "Location"],
          rows: [
            ["University of Helsinki", "**Licentiate of Dentistry**", "5.5 years (~330 ECTS)", "Finnish / Swedish", "Helsinki"],
            ["University of Turku", "**Licentiate of Dentistry**", "5.5 years (~330 ECTS)", "Finnish / Swedish", "Turku"],
            ["University of Oulu", "**Licentiate of Dentistry**", "5.5 years (~330 ECTS)", "Finnish", "Oulu"],
            ["University of Eastern Finland", "**Licentiate of Dentistry**", "5.5 years (School of Medicine)", "Finnish", "Kuopio"]
          ]
        }
      ],
      note: [
        "Before selecting a university, applicants should compare programme details, admission criteria, teaching language, and current application deadlines. You can also consult **[Edu-Hawk Worldwide](/services)** for detailed university guidance."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility",
      title: "Eligibility to Study Dentistry in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The **eligibility criteria for Dentistry in Finland** depend on the university, admission route, and applicant's previous education.",
            "**Indian students** generally need an educational qualification that provides **eligibility for higher education** and must meet the programme-specific admission requirements.",
            "**Common Eligibility Criteria**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Class 12 or equivalent qualification** with strong academic standing",
            "**Required academic performance** in science stream subjects",
            "**Science subjects**, where applicable (Physics, Chemistry, Biology)",
            "**Finnish or Swedish language proficiency** (required for clinical patient interaction)",
            "**Entrance examination requirements** (faculties conduct competitive medical/dental exams)",
            "**University-specific eligibility criteria** verified via official admissions portals"
          ]
        }
      ]
    },
    {
      slot: "language",
      eyebrow: "Language Proficiency",
      title: "Language Requirements for Dentistry in Finland",
      img: langImg,
      imgAlt: "Language Requirements for Dentistry in Finland",
      imgPosition: "left",
      groups: [
        {
          t: "p",
          items: [
            "**Language proficiency** is one of the most important considerations for international applicants. Undergraduate **Dentistry in Finland** is generally **not offered as an English-taught professional degree**.",
            "For example, the **University of Oulu** lists **Finnish** as the language of instruction, while the **University of Turku** requires **Finnish proficiency** for its undergraduate Dentistry programme and specifies relevant language requirements for admission.",
            "Therefore, students should not assume they can complete an undergraduate Dentistry degree in Finland using only English. For students planning language preparation, explore **[Finnish language courses](/study-abroad/finland/language-courses)** or confirm the language requirements directly with the selected university before beginning the application process."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission",
      title: "Admission Requirements for Dentistry in Finland",
      groups: [
        {
          t: "p",
          items: [
            "**Admission requirements** can vary between universities and programmes. Applicants should check whether their chosen programme uses **entrance examinations**, **certificate-based admission**, or a combination of methods.",
            "**General Admission Requirements**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Valid passport** and personal identification documents",
            "**Higher secondary school certificate** or equivalent secondary qualification",
            "**Academic transcripts** showing completed coursework and grades",
            "**Proof of Finnish or Swedish language proficiency**, depending on the programme",
            "**Participation in the relevant entrance examination**, if applicable",
            "**Any programme-specific prerequisites** specified by the faculty"
          ]
        },
        {
          t: "p",
          items: [
            "Because requirements may change each academic year, applicants should review the current admission guide published by the university or through the official Finnish admissions portal (**Studyinfo.fi**). You can also connect with **[Edu-Hawk admissions desk](/contact)** for deadline updates."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Costs & Aid",
      title: "Cost of Studying Dentistry in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The **cost of studying Dentistry in Finland** depends on the programme, student's citizenship, and applicable tuition-fee regulations.",
            "Finland generally charges tuition fees to **non-EU/EEA students** for eligible English-taught Bachelor's and Master's programmes. However, **Finnish- or Swedish-taught programmes** follow different rules. The applicable tuition-fee policy must be verified for the specific Dentistry programme.",
            "The Finnish national **Studyinfo** database lists the relevant Dentistry programme without a tuition fee under the applicable non-EU/EEA tuition-fee category. Students should verify the current programme listing and fee conditions before making financial decisions.",
            "**Financial Planning for Indian Students**",
            "When preparing a study budget, students should consider:"
          ]
        },
        {
          t: "table",
          headers: ["Expense Head", "Considerations for Indian Students"],
          rows: [
            ["Application-related expenses", "**University application processing** and entrance examination fees"],
            ["Language preparation", "**Finnish or Swedish language preparation** and proficiency certification"],
            ["Accommodation", "**Student housing** (HOAS, TOAS, PSOAS) or private rental apartments"],
            ["Daily living expenses", "**Food, grocery, transport**, and daily living costs in Finland"],
            ["Health insurance & healthcare", "**Student health service (FSHS)** fee and comprehensive private health insurance"],
            ["Residence permit expenses", "**Finnish Immigration Service (Migri)** residence permit application and renewal fees"],
            ["Travel & transportation", "**International flights to Finland** and local municipal student transport"],
            ["Study materials & personal expenses", "**Dental instruments**, academic textbooks, study supplies, and personal upkeep"]
          ]
        },
        {
          t: "p",
          items: [
            "The overall budget will depend on the student's location, accommodation arrangements, lifestyle, and individual requirements.",
            "**Important:** Avoid relying on a single fixed tuition-fee figure without confirming the university's current fee policy. Students should also budget for **living expenses** and other costs associated with **[studying abroad in Finland](/study-abroad)**."
          ]
        }
      ]
    },
    {
      slot: "steps",
      eyebrow: "Step by step",
      title: "Dentistry Admission Process in Finland",
      lead: [
        "The **admission process** involves several stages, from checking eligibility to completing enrolment and immigration formalities."
      ],
      steps: [
        {
          title: "Check Eligibility",
          text: "Review your **academic qualifications** and confirm that you meet the selected university's admission criteria."
        },
        {
          title: "Meet the Language Requirements",
          text: "Identify the required **Finnish or Swedish proficiency level** and plan your language preparation accordingly."
        },
        {
          title: "Select a University",
          text: "Compare universities, programme structures, locations, admission requirements, and teaching languages."
        },
        {
          title: "Prepare for the Entrance Examination",
          text: "If an **entrance examination** is required, prepare according to the university's current examination and selection criteria."
        },
        {
          title: "Prepare Your Documents",
          text: "Collect **academic certificates**, transcripts, language certificates, identification documents, and any additional documents requested by the university."
        },
        {
          title: "Submit the Application",
          text: "Submit your application through the relevant Finnish university or official application system (**Studyinfo.fi**) within the specified deadline."
        },
        {
          title: "Receive the Admission Decision",
          text: "Successful applicants receive information about their **admission offer** and the next steps for enrolment."
        },
        {
          title: "Complete Immigration Formalities",
          text: "Non-EU students should complete the applicable **residence permit** requirements and other pre-arrival formalities. With **[Edu-Hawk Worldwide study-abroad guidance](/services)**, students can plan these stages systematically and better understand the requirements involved in applying to international universities. Reach out to our **[admissions team](/contact)** for personalised support."
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Licensing & Practice",
      title: "Dentistry Licensing in Finland",
      groups: [
        {
          t: "p",
          items: [
            "**Dentistry is a regulated healthcare profession in Finland**. Students who want to work as dentists must meet the relevant **professional qualification and authorisation requirements**.",
            "Graduates who complete their dental education in Finland must fulfil the applicable **professional authorisation requirements** before practising as dentists.",
            "For **Indian BDS graduates** planning to work in Finland, the process is different. A **foreign dental qualification** may need to undergo **qualification recognition** and professional licensing procedures through Valvira. Additional requirements can apply to qualifications obtained outside the EU/EEA. Explore our guides on **[Nursing in Finland](/study-abroad/finland/nursing)** and **[MBBS Abroad](/courses/mbbs)** to understand broader healthcare licensing pathways in Europe.",
            "**Important Considerations for Indian BDS Graduates**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Qualification recognition** by Finnish supervisory authorities",
            "**Professional authorisation** to practice clinical dentistry",
            "**Finnish or Swedish language requirements** for healthcare workers",
            "**Practical training requirements** under Finnish clinical supervision",
            "**Competence examinations**, where applicable",
            "**Current Finnish regulatory requirements** and healthcare compliance"
          ]
        },
        {
          t: "p",
          items: [
            "Therefore, pursuing **Dentistry in Finland after Class 12** and moving from a **BDS qualification in India** to professional practice in Finland are two different pathways.",
            "Students should consult the relevant Finnish authorities (**Valvira**) for the latest licensing requirements before planning their careers."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Salary",
      title: "Salary and Job Opportunities for Dentists in Finland",
      groups: [
        {
          t: "p",
          items: [
            "After obtaining the required professional authorisation, graduates can explore **dentist jobs in Finland** and career opportunities within the country's healthcare system.",
            "**Career Opportunities After Dentistry in Finland**",
            "Graduates may explore roles in:"
          ]
        },
        {
          t: "pills",
          items: [
            "General Dentistry",
            "Public Dental Healthcare",
            "Private Dental Clinics",
            "Paediatric Dentistry",
            "Orthodontics",
            "Periodontology",
            "Prosthodontics",
            "Oral Surgery",
            "Dental Research",
            "Academic Dentistry"
          ]
        },
        {
          t: "p",
          items: [
            "Students may also pursue **specialisation in dentistry** after meeting the relevant requirements. Finnish universities offer specialist education in several dental fields.",
            "**Dentist Salary in Finland**",
            "The **dentist salary in Finland** varies according to professional experience, specialisation, employer, location, and whether the dentist works in the **public or private sector**.",
            "Salary expectations may also depend on **working arrangements** and **professional qualifications**.",
            "Students researching career opportunities should consult current, reliable labour-market data rather than relying on a fixed salary estimate. Internationally qualified dentists must also account for **professional authorisation** and **language requirements** before entering the Finnish job market."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Checklist",
      title: "Documents Required to Study Dentistry in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Students applying for **Dentistry in Finland for Indian students** may need to prepare the following documents:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Valid passport** with required validity",
            "**Class 10 certificate** and mark sheet",
            "**Class 12 certificate** (Higher Secondary Education)",
            "**Academic transcripts** showing completed coursework",
            "**Proof of educational qualifications**",
            "**Finnish or Swedish language certificate**, as required",
            "**Entrance examination-related documents**",
            "**Certified translations**, if documents are not in English, Finnish, or Swedish",
            "**Identification documents**",
            "**Financial documents** showing sufficient funds for tuition and living",
            "**Residence permit documents** after receiving admission"
          ]
        },
        {
          t: "p",
          items: [
            "The exact documents required depend on the university, application route, and applicant's qualifications. Students should always verify the latest document checklist before submitting an application.",
            "Proper documentation and timely submission can help applicants manage the **[university admission process](/services)** more efficiently. For personalised document verification, reach out to **[Edu-Hawk Worldwide](/contact)**."
          ]
        }
      ]
    }
  ],

  faqs: [
    {
      q: "Can Indian students study Dentistry in Finland?",
      a: "Yes, **Indian students can apply** if they meet the relevant academic, language, and admission requirements. Undergraduate Dentistry programmes require particular attention to **Finnish or Swedish language proficiency**."
    },
    {
      q: "Is Dentistry in Finland taught in English?",
      a: "Generally, undergraduate Dentistry programmes in Finland are **not English-taught professional programmes**. Most clinical dentistry degrees are taught in **Finnish or Swedish**. Applicants should check the official university information for the current language of instruction."
    },
    {
      q: "How long is the Dentistry course in Finland?",
      a: "The Dentistry course generally takes approximately **5.5 years** and includes around **330 ECTS credits** for the **Licentiate of Dentistry** qualification."
    },
    {
      q: "Can Indian BDS graduates work as dentists in Finland?",
      a: "It may be possible, but an **Indian BDS degree** does not automatically grant the right to practise dentistry in Finland. Foreign-trained dentists must follow the applicable **qualification recognition** and **professional authorisation** process through Valvira, including language proficiency examinations."
    },
    {
      q: "Is Finland a good destination for Dentistry for Indian students?",
      a: "Finland can be an option for students prepared to meet the academic, admission, and **local language requirements**. However, students specifically seeking an English-taught BDS programme in Europe should compare Finland with other destinations before making a decision. Explore our **[Study Abroad guidance](/study-abroad)** or contact **[Edu-Hawk Worldwide](/contact)** for personalised advice."
    }
  ],
  faqTitle: "Frequently Asked Questions About Dentistry in Finland"
};

const DentistryFinland = () => {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      sideImg={sideImg}
      heroBgImg={heroBgImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/finland/dentistry"
    />
  );
};

export default DentistryFinland;
