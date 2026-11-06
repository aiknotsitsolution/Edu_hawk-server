import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";
import heroImg from "../../../../Images/Abroad/Finland/PublicHealth/public_health_finland_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/PublicHealth/public_health_finland_hero_bg.webp";
import researchImg from "../../../../Images/Abroad/Finland/PublicHealth/public_health_finland_research.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/PublicHealth/public_health_finland_cta_bg.webp";
import u0Img from "../../../../Images/Abroad/Finland/PublicHealth/University_of_Eastern_Finland.webp";
import u1Img from "../../../../Images/Abroad/Finland/PublicHealth/University_of_Helsinki.webp";

// Overview image
const sideImg = researchImg;

const page = {
  name: "Public Health in Finland",
  country: "Finland",
  slug: "public-health",
  title: "Public Health in Finland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Public Health in Finland: English-taught Master of Public Health (MPH) programmes, UEF and Helsinki, fees, scholarships, eligibility and global health careers.",
  keywords: "Study Public Health in Finland, Public Health in Finland for Indian Students, Universities in Finland, Cost of Studying in Finland",
  introTitle: "Public Health in Finland",
  heroParas: [],
  overview: [],
  level: "Master's & Post-Graduate",
  crumb: "MBBS Abroad",

  stats: [
    { label: "Degree Awarded", value: "Master of Public Health (MPH)" },
    { label: "Course Duration", value: "2 Years (120 ECTS)" },
    { label: "Top Universities", value: "Univ. of Eastern Finland, Helsinki" },
    { label: "Teaching Language", value: "100% English-Taught" },
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "Why Study Public Health in Finland?",
      groups: [
        {
          t: "p",
          items: [
            "**[Study Public Health in Finland](/courses/mbbs)** to learn from a world-renowned Nordic healthcare and research system that places strong national emphasis on disease prevention, health promotion, and evidence-based policy making.",
            "For Indian students, an English-taught **Public Health Master's in Finland** offers comprehensive education in epidemiology, global health, health policy, nutritional health, and environmental health. The curriculum prepares graduates to address pressing population-level healthcare challenges across international NGOs, government agencies, and research institutes.",
            "Finland offers internationally oriented, English-taught programmes such as the **Master's Degree Programme in Public Health** at the **University of Eastern Finland (UEF)**, a 2-year, 120 ECTS programme. With **[Edu-Hawk Worldwide](/services)**, students can explore international education opportunities and receive guidance on university selection, eligibility, documentation, and admission planning.",
            "**Benefits of Studying Public Health in Finland**"
          ]
        },
        {
          t: "dl",
          pairs: [
            {
              t: "Nordic Preventive Healthcare",
              d: "Learn within a country renowned for pioneering **preventive healthcare policies, health registries**, and population health interventions."
            },
            {
              t: "Epidemiological Research Rigor",
              d: "**Strong epidemiological and biostatistical training** connecting students directly with major public health research datasets."
            },
            {
              t: "100% English-Taught MPH",
              d: "Fully English-taught curriculum welcoming a global student body, eliminating undergraduate clinical language barriers."
            },
            {
              t: "Interdisciplinary Faculty",
              d: "Collaborative education bridging **medicine, environmental sciences, health economics, sociology**, and public policy."
            },
            {
              t: "Global Internship Opportunities",
              d: "Hands-on opportunities to complete **practical internships and field projects** with national institutes and international agencies."
            },
            {
              t: "International Health Career Pathways",
              d: "Exceptional career mobility across **WHO, European public health agencies, research foundations**, and global health consultancies."
            }
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Programs",
      title: "Public Health Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Public Health education in Finland is available primarily at the **Master's (MPH)** and doctoral levels.",
            "The **University of Eastern Finland (UEF)** offers a flagship Master's Degree Programme in Public Health taught entirely in English (**120 ECTS credits over 2 years**). The programme provides foundational training and advanced specialisation tracks.",
            "**Core Areas Covered in Public Health**",
            "Students study multidisciplinary modules including:"
          ]
        },
        {
          t: "pills",
          items: [
            "Epidemiology",
            "Biostatistics",
            "Global Health",
            "Health Promotion",
            "Public Health Nutrition",
            "Community Medicine",
            "Health Policy & Management",
            "Health Economics",
            "Occupational Health",
            "Environmental Health",
            "Qualitative Research Methods",
            "Health Informatics"
          ]
        },
        {
          t: "p",
          items: [
            "Students can also include elective studies, specialized track coursework, and an internship in their personal study plan.",
            "**Public Health Course Duration & Structure in Finland**"
          ]
        },
        {
          t: "table",
          headers: ["Parameter", "Programme Specification"],
          rows: [
            ["Course Duration", "Approximately **2 years** (full-time study)"],
            ["Degree Awarded", "**Master of Science in Public Health (MPH / TtM)**"],
            ["Total Study Volume", "**120 ECTS credits**"],
            ["Practical Internship", "Optional / integrated practical internship in public health organisations"],
            ["Instruction Language", "English (100% English-taught master's programme)"]
          ]
        },
        {
          t: "p",
          items: [
            "Students should review the specific track options (e.g. Epidemiology vs Global Health) before applying."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Where to study",
      title: "Top Universities for Public Health in Finland",
      lead: [
        "Students searching for the **Best Universities for Public Health in Finland** can explore Finnish institutions offering international master's and doctoral education in health sciences:"
      ],
      unis: [
        {
          name: "University of Eastern Finland (UEF)",
          desc: "Institute of Public Health and Clinical Nutrition at UEF (Kuopio) offers a 2-year English-taught Master of Public Health (120 ECTS). Also provides international programmes in Biomedicine and Toxicology.",
          img: u0Img
        },
        {
          name: "University of Helsinki",
          desc: "Faculty of Medicine and associated research institutes provide master's-level courses, epidemiology research, and doctoral education in public health sciences and global health.",
          img: u1Img
        }
      ],
      groups: [
        {
          t: "table",
          headers: ["University", "Faculty / Institute", "Degrees Offered", "Language of Instruction", "Location"],
          rows: [
            ["University of Eastern Finland", "Institute of Public Health & Clinical Nutrition", "Master of Public Health (120 ECTS), Ph.D.", "English", "Kuopio"],
            ["University of Helsinki", "Faculty of Medicine / Population Health", "Postgraduate public health research, Ph.D.", "English / Finnish", "Helsinki"]
          ]
        }
      ],
      note: [
        "Applicants should check current intake quotas and application deadlines on **Studyinfo.fi**. You can also reach out to **[Edu-Hawk Worldwide](/contact)** for expert application guidance."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility",
      title: "Eligibility to Study Public Health in Finland",
      img: researchImg,
      imgAlt: "Public Health Research and Analysis in Finland",
      imgPosition: "left",
      groups: [
        {
          t: "p",
          items: [
            "The **eligibility criteria for Public Health in Finland** depend on the university and programme level.",
            "For UEF's Master's in Public Health, applicants must hold a Bachelor's degree or equivalent higher-education qualification of at least **180 ECTS** from a recognised institution.",
            "**Accepted Academic Backgrounds**",
            "Eligible undergraduate fields for admission include:"
          ]
        },
        {
          t: "pills",
          items: [
            "Public Health",
            "Medicine (MBBS)",
            "Dentistry (BDS)",
            "Nursing (B.Sc. Nursing)",
            "Pharmacy (B.Pharm)",
            "Veterinary Medicine",
            "Food & Nutrition",
            "Environmental Sciences",
            "Health Economics",
            "Health Policy & Management",
            "Health Informatics",
            "Sociology",
            "Psychology"
          ]
        },
        {
          t: "p",
          items: [
            "This interdisciplinary flexibility makes the MPH programme highly accessible for graduates from clinical healthcare, biological sciences, and health-related social sciences.",
            "With **[Edu-Hawk Worldwide study-abroad guidance](/services)**, students can evaluate their profile and compare options alongside **[Nursing in Finland](/study-abroad/finland/nursing)**, **[Pharmacy in Finland](/study-abroad/finland/pharmacy)**, and **[Biotechnology in Finland](/study-abroad/finland/biotechnology)**."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission",
      title: "Admission Requirements for Public Health in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The **Public Health admission requirements in Finland** vary according to the institution.",
            "For UEF's Master's in Public Health, applicants must submit official academic records, proof of English proficiency, and specific supplementary evaluation documents.",
            "**General Admission Requirements**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Bachelor's degree certificate** and official graduation diploma",
            "**Academic transcripts** showing completed credits and grade point average",
            "**Proof of English language proficiency** (IELTS Academic, TOEFL iBT, or PTE Academic)",
            "**Comprehensive Curriculum Vitae (CV)** detailing academic and professional background",
            "**Research experience & publications details**, if applicable",
            "**Short motivation video / statement of purpose**, as required by UEF",
            "**Valid passport** with required validity",
            "**Official certified translations** if documents are not originally in English, Finnish, or Swedish"
          ]
        },
        {
          t: "p",
          items: [
            "UEF uses a merit-based competitive selection process and admits around **30 international students annually** to the Public Health Master's programme.",
            "Applicants should check exact deadlines on **Studyinfo.fi** or connect with the **[Edu-Hawk admissions desk](/contact)** for pre-submission application review."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Costs",
      title: "Cost of Studying Public Health in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The **Cost of Studying Public Health in Finland** depends on the university, nationality, and applicable scholarship awards.",
            "For the University of Eastern Finland's Master's Degree Programme in Public Health, the annual tuition fee for non-EU/EEA students is currently **€10,000 per academic year**.",
            "**Scholarships & Tuition Waivers at UEF**",
            "UEF provides substantial tuition fee incentives for non-EU/EEA students, including an **Early Bird discount** for the first academic year and performance-based tuition waivers for the second year. Finnish language proficiency waivers may also be accessible.",
            "**Financial Planning for Indian Students**",
            "Students should budget for tuition, housing, and general living costs as outlined below:"
          ]
        },
        {
          t: "table",
          headers: ["Expense Category", "Estimated Cost / Considerations for Indian Students"],
          rows: [
            ["Tuition Fee (UEF Public Health)", "**€10,000 per academic year** (scholarships available)"],
            ["Early Bird / Academic Waivers", "Up to **30% tuition fee reduction** based on promptness and study progress"],
            ["Student Housing (Kuopas)", "**€250 – €450 per month** (student housing in Kuopio)"],
            ["Food & Daily Living Costs", "**€250 – €350 per month** for groceries, transit, and personal expenses"],
            ["Student Health Service (FSHS)", "Mandatory student union & healthcare fee per academic term"],
            ["Private Health Insurance", "Comprehensive medical insurance policy required for Migri visa"],
            ["Residence Permit (Migri)", "**Finnish Immigration Service** student permit application fee"],
            ["Travel & Flights", "Round-trip international flights between India and Finland"]
          ]
        },
        {
          t: "p",
          items: [
            "Kuopio offers a significantly lower cost of living compared to the capital Helsinki region, making UEF a financially attractive study destination.",
            "Students should budget realistically for living expenses and other costs associated with **[studying abroad in Finland](/study-abroad)**."
          ]
        }
      ]
    },
    {
      slot: "steps",
      eyebrow: "Step by step",
      title: "Public Health Admission Process in Finland",
      lead: [
        "The **Public Health admission process in Finland** involves the following structured steps:"
      ],
      steps: [
        {
          title: "Select a Programme",
          text: "Research universities offering Public Health Master's programmes in Finland (such as UEF) and confirm eligibility criteria."
        },
        {
          title: "Check Your Eligibility",
          text: "Verify that your previous **bachelor's degree** (MBBS, BDS, Nursing, Pharmacy, or Life Sciences) matches the accepted background criteria."
        },
        {
          title: "Prepare Your Documents",
          text: "Assemble academic certificates, official transcripts, English test results (IELTS/TOEFL), an academic CV, and research summary."
        },
        {
          title: "Apply Through Studyinfo.fi",
          text: "Submit your online application via Finland's official national portal (**Studyinfo.fi**) during the joint application window in January."
        },
        {
          title: "Complete Programme-Specific Requirements",
          text: "Record and upload the requested **motivation video** and supplementary documentation requested by the faculty."
        },
        {
          title: "Receive the Admission Decision",
          text: "Successful applicants receive an official **admission offer** along with scholarship decisions and study place acceptance deadlines."
        },
        {
          title: "Arrange Tuition and Residence Permit",
          text: "Non-EU/EEA students pay their tuition deposit (if applicable) and apply for a **student residence permit** via Migri. With **[Edu-Hawk Worldwide study-abroad guidance](/services)**, you receive end-to-end support throughout your admissions journey. Connect with our **[advisors](/contact)** for expert counselling."
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Licensing & Regulation",
      title: "Public Health Professional Recognition in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Unlike regulated clinical healthcare professions such as medicine, dentistry, and nursing, a **Public Health Master's degree (MPH)** does not require a single statutory clinical healthcare licence to practice.",
            "Instead, career opportunities depend on the student's specialisation, previous qualifications, analytical skills, and chosen occupation.",
            "**Diverse Professional Fields for MPH Graduates**",
            "Public Health graduates work across diverse domains such as:"
          ]
        },
        {
          t: "pills",
          items: [
            "Epidemiological Research",
            "Health Promotion",
            "Healthcare Administration",
            "Health Policy Formulation",
            "Global Health Interventions",
            "Nutritional Epidemiology",
            "Environmental Health",
            "Non-Governmental Organisations",
            "Health Programme Management",
            "Academic Research"
          ]
        },
        {
          t: "p",
          items: [
            "Graduates with clinical backgrounds (such as Indian doctors, dentists, or nurses) can combine their clinical expertise with public health management, significantly broadening international healthcare career horizons.",
            "Explore related options like **[Dentistry in Finland](/study-abroad/finland/dentistry)**, **[Nursing in Finland](/study-abroad/finland/nursing)**, and **[MBBS Abroad](/courses/mbbs)**."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Salary",
      title: "Salary & Job Opportunities After Public Health in Finland",
      groups: [
        {
          t: "p",
          items: [
            "A **Master's in Public Health in Finland** opens rewarding career opportunities across healthcare organisations, research institutes, governmental bodies, and international agencies.",
            "**Key Career Roles for MPH Graduates**",
            "Graduates pursue dynamic roles such as:"
          ]
        },
        {
          t: "pills",
          items: [
            "Public Health Specialist",
            "Epidemiologist",
            "Health Promotion Specialist",
            "Health Policy Analyst",
            "Healthcare Administrator",
            "Health Programme Manager",
            "Health Educator",
            "Global Health Consultant",
            "Clinical Research Coordinator",
            "Environmental Health Officer",
            "Public Health Nutritionist",
            "Biostatistician"
          ]
        },
        {
          t: "p",
          items: [
            "The University of Eastern Finland states that its Public Health alumni work in diverse roles spanning epidemiological field work, scientific research, health administration, non-profit leadership, and health entrepreneurship.",
            "**Public Health Salaries in Finland**",
            "Salaries in Finland vary based on role, sector (public municipal healthcare, university research, or private consultancy), and experience. International graduates who develop **basic Finnish proficiency** enjoy enhanced access to Finnish public health agencies and municipal healthcare authorities."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Checklist",
      title: "Documents Required to Study Public Health in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Indian students applying for a **Public Health Master's in Finland** may need to prepare the following documents:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Bachelor's degree certificate** and provisional completion certificate",
            "**Academic transcripts** showing all completed undergraduate courses and grades",
            "**Class 10 and Class 12 certificates** and mark sheets",
            "**Valid passport** with required validity",
            "**Proof of English language proficiency** (IELTS, TOEFL, or PTE)",
            "**Curriculum Vitae (CV)** highlighting academic background and internships",
            "**Research experience and publication details**, if applicable",
            "**Motivation video / Statement of Purpose**, as required by the programme",
            "**Official certified translations** if documents are not originally in English",
            "**Financial documents** verifying funds for living and tuition fees",
            "**Student residence permit documents** following admission confirmation"
          ]
        },
        {
          t: "p",
          items: [
            "Application checklists should always be confirmed on Studyinfo.fi and the university programme page.",
            "For expert document verification and end-to-end application management, connect with **[Edu-Hawk Worldwide](/contact)**."
          ]
        }
      ]
    }
  ],

  faqs: [
    {
      q: "Can Indian students study Public Health in Finland?",
      a: "Yes, **Indian students can apply** for English-taught Public Health Master's programmes in Finland. Applicants with bachelor's degrees in medicine, dentistry, nursing, pharmacy, life sciences, or health-related social sciences are eligible."
    },
    {
      q: "Is Public Health taught in English in Finland?",
      a: "Yes, the **Master's Degree Programme in Public Health** at the University of Eastern Finland is **100% taught in English**, making it fully accessible to international students without prior Finnish language requirements."
    },
    {
      q: "What is the duration of a Master's in Public Health in Finland?",
      a: "The Master's in Public Health in Finland takes approximately **2 years (120 ECTS credits)** of full-time academic study, which includes coursework, a practical internship, and a Master's thesis."
    },
    {
      q: "What is the tuition fee for Public Health in Finland?",
      a: "At the University of Eastern Finland, the annual tuition fee for non-EU/EEA students is **€10,000 per year**. UEF offers generous **early bird discounts (up to 30%)** and academic progress waivers for second-year studies."
    },
    {
      q: "What can I do after a Master's in Public Health in Finland?",
      a: "Graduates pursue careers as **epidemiologists, health policy analysts, public health researchers, healthcare administrators**, and global health consultants across international organisations, NGOs, hospitals, and pharmaceutical firms."
    }
  ],
  faqTitle: "Frequently Asked Questions About Public Health in Finland"
};

const PublicHealthFinland = () => {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      sideImg={sideImg}
      heroBgImg={heroBgImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/finland/public-health"
    />
  );
};

export default PublicHealthFinland;
