import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../data/study_abroad/ireland/dentistry.json";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/Dentistry/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/Dentistry/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/Dentistry/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/Dentistry/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/Dentistry/Trinity_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/Dentistry/University_College_Cork.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/Dentistry/RCSI_University_of_Medicine_and_Health_Sciences.webp";
import uniImg4 from "../../../../Images/Abroad/Ireland/Dentistry/The_University_of_Galway.webp";

const page = {
  name: "Dentistry in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/dentistry",
  title: "Study Dentistry in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to studying Dentistry in Ireland for Indian students: Top Irish dental schools (Trinity College Dublin, UCC, RCSI), 5-year BDS programs, Dental Council of Ireland accreditation, tuition fees, and career pathways.",
  keywords: "Study Dentistry in Ireland for Indian Students, Bachelor of Dental Surgery in Ireland, Best Dental Schools in Ireland, Dentistry Eligibility Requirements Ireland, Dental Council of Ireland Accreditation, Dentist Salary and Job Opportunities Ireland, Cost of Dental Training in Ireland, Edu-Hawk Worldwide",
  introTitle: "STUDY DENTISTRY (BDS) IN IRELAND FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "Studying Dentistry in Ireland offers international students world-class clinical dental education, early direct patient care, and globally accredited qualifications (Bachelor of Dental Surgery - BDS / Dental Science). Delivered entirely in English across prestigious institutions like Trinity College Dublin, University College Cork, and RCSI, graduates benefit from state-of-the-art university dental hospitals, advanced restorative facilities, and high clinical employability throughout Ireland, the UK, and Europe."
  ],
  overview: [
    "Ireland has earned an international reputation for academic rigor and clinical excellence in dental healthcare education. Irish dental faculties integrate foundational biomedical sciences, dental simulation laboratories, and supervised clinical practice within major university dental hospitals, ensuring that students develop superior diagnostic and procedural confidence.",
    "The primary dental qualification in Ireland is a comprehensive five-year Bachelor of Dental Science (B.Dent.Sc) or Bachelor of Dental Surgery (BDS) degree (NFQ Level 8). For qualified dental practitioners, Irish institutions also offer specialized postgraduate clinical doctorates and Master's degrees in orthodontics, periodontics, pediatric dentistry, prosthodontics, and oral surgery.",
    "Edu-Hawk Worldwide provides comprehensive support for Indian applicants navigating the selective admissions process for Irish dental schools. From assessing academic subject prerequisites in Chemistry and Biology to advising on admissions assessments, clinical shadowing documentation, fee planning, and visa procedures, our specialist advisors streamline your dental education journey."
  ],
  level: "Bachelor of Dental Surgery (BDS / B.Dent.Sc) & Postgraduate Clinical Specialties",
  crumb: "Healthcare & Medicine / Dentistry in Ireland",
  stats: [
    {
      label: "Degree Choices",
      value: "BDS / B.Dent.Sc (NFQ Level 8) & Clinical Doctorates"
    },
    {
      label: "Course Duration",
      value: "5 Years (BDS) / 3 Years (Specialty Doctorates)"
    },
    {
      label: "Top Institutions",
      value: "Trinity College Dublin, UCC Cork, RCSI"
    },
    {
      label: "Accreditation",
      value: "Dental Council of Ireland / EU Mutual Recognition"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Choose Ireland",
      title: "Key Advantages of Studying Dentistry in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish dental schools stand among the most respected in Europe, combining cutting-edge clinical technology with an emphasis on evidence-based dentistry and holistic patient communication:"
          ]
        },
        {
          t: "ul",
          items: [
            "Direct Clinical Patient Care: Students transition into dedicated university dental hospitals early in the curriculum, treating diverse patient cases under the direct supervision of leading dental consultants.",
            "Modern Simulation Facilities: Train on advanced dental phantom heads, haptic virtual reality simulators, digital intraoral scanners, and 3D dental radiography units.",
            "100% English-Medium Education: Study, converse, and treat patients entirely in English, eliminating the clinical communication barriers common in non-Anglophone European destinations.",
            "Rigorous Professional Standards: Accredited by the Dental Council of Ireland, ensuring adherence to the highest international criteria for patient safety and clinical ethics.",
            "Global License Mobility: Irish dental qualifications are widely recognized across the European Union, the UK (General Dental Council), and serve as a solid foundation for licensing exams in North America and India.",
            "Postgraduate Specialization Opportunities: Seamless progression into competitive specialist registrar positions and clinical doctorates in orthodontics, oral medicine, and pediatric dentistry."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Pathways",
      title: "Dentistry Programs & Clinical Specializations in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Dental education in Ireland accommodates both secondary school leavers entering undergraduate studies and qualified dentists pursuing clinical specialization:"
          ]
        },
        {
          t: "ul",
          items: [
            "Bachelor of Dental Science (B.Dent.Sc) / BDS (NFQ Level 8): 5-year full-time undergraduate program providing comprehensive training in conservative dentistry, periodontology, oral surgery, pediatric dentistry, and orthodontics.",
            "Doctor of Clinical Dentistry (D.Ch.Dent / ClinDent): 3-year specialist residency program for registered dentists covering Orthodontics, Periodontics, Prosthodontics, Paediatric Dentistry, or Oral Surgery.",
            "MSc in Dental Public Health: Advanced postgraduate degree focusing on oral health epidemiology, preventive community oral health programs, and healthcare management.",
            "Master's by Research / PhD in Oral Health Sciences: Advanced research programs dedicated to oral immunology, biomaterials, oral cancer genetics, and antimicrobial coatings."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Featured Dental Schools",
      title: "Top Universities and Dental Schools in Ireland",
      unis: [
        {
          name: "Trinity College Dublin",
          city: "Dublin",
          state: "Leinster",
          desc: "Offers the 5-year Bachelor in Dental Science (B.Dent.Sc) based at the state-of-the-art Dublin Dental University Hospital, renowned for clinical excellence and world-class dental research.",
          img: uniImg1
        },
        {
          name: "University College Cork",
          city: "Cork",
          state: "Munster",
          desc: "Hosts the historic Cork University Dental School and Hospital, offering the 5-year BDS degree with extensive clinical patient contact and advanced restorative dental suites.",
          img: uniImg2
        },
        {
          name: "RCSI University of Medicine and Health Sciences",
          city: "Dublin",
          state: "Leinster",
          desc: "Globally acclaimed medical and healthcare institution introducing an innovative, patient-centered BDS dental degree alongside clinical postgraduate surgical fellowships.",
          img: uniImg3
        },
        {
          name: "University of Galway",
          city: "Galway",
          state: "Connacht",
          desc: "Premier university providing high-impact medical, biomedical, and health sciences research infrastructure supporting postgraduate dental science investigations.",
          img: uniImg4
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Admission into Irish dental schools is highly competitive, with strictly limited places allocated for non-EU international students each academic year."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Requirements for Dentistry in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Due to the intense clinical demands and patient responsibilities, dental school admission criteria in Ireland are exceptionally selective:"
          ]
        },
        {
          t: "ul",
          items: [
            "Undergraduate BDS Applicants (Secondary School Leavers): Successful completion of Class 12 (CBSE, ICSE, or equivalent State Boards) with an overall score of 85% to 90%+, including mandatory individual scores of 85%+ in Chemistry and Biology or Physics.",
            "Alternative Qualifications: International Baccalaureate (IB) diploma with 36–38+ points, including Higher Level (HL) Chemistry and Biology with scores of 6 or 7.",
            "Admissions Tests & Interviews: Depending on the university, non-EU candidates may be required to take admissions tests (such as the UCAT or HPAT-Ireland equivalent) and participate in a structured Multiple Mini Interview (MMI) assessing ethical judgment, communication, and manual dexterity.",
            "English Language Competence: IELTS Academic score of 7.0 overall with no band score below 6.5 (some schools require 7.0 in all bands), or equivalent TOEFL iBT (100+) / PTE Academic (68+).",
            "Health & Immunization Clearance: Candidates must complete hepatitis B, hepatitis C, tuberculosis, and varicella screening, along with mandatory Garda / police background vetting."
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
            "Applicants must provide a comprehensive portfolio verifying academic excellence and dedication to the dental profession:"
          ]
        },
        {
          t: "ul",
          items: [
            "Certified Class 10 and Class 12 academic mark sheets and official board certificates.",
            "Valid International Passport with minimum 12 months validity.",
            "Personal Statement detailing your motivation for pursuing dentistry, understanding of patient-centered care, and manual dexterity skills.",
            "Documented Clinical Observational Experience: Reports or confirmation letters of shadowing general dental practitioners or hospital dental departments.",
            "Two Letters of Recommendation from science teachers or academic mentors.",
            "Official English language proficiency test scorecard (IELTS / TOEFL).",
            "Proof of Health Screenings and required immunization documentation."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Financial Overview",
      title: "Cost of Studying Dentistry in Ireland (Tuition Fees & Living Expenses)",
      groups: [
        {
          t: "p",
          items: [
            "Dentistry is one of the most resource-intensive degree programs in higher education owing to clinical hospital facilities, specialized dental kits, and low student-to-tutor clinical ratios:"
          ]
        },
        {
          t: "table",
          headers: [
            "Expense Category",
            "Annual Indicative Cost Range",
            "Key Budgeting Notes"
          ],
          rows: [
            [
              "**Undergraduate BDS Tuition**",
              "€50,000 – €62,000 / year",
              "Non-EU international student tuition rate"
            ],
            [
              "**Clinical Kit & Equipment**",
              "€2,000 – €3,500 (one-off)",
              "Dental instruments, scrubs, magnifying loupes, models"
            ],
            [
              "**Living Expenses (Dublin)**",
              "€12,000 – €16,000 / year",
              "Housing, food, transport, and utilities"
            ],
            [
              "**Living Expenses (Cork)**",
              "€9,500 – €13,000 / year",
              "Moderate rental costs in regional student accommodations"
            ],
            [
              "**Medical & Malpractice Insurance**",
              "€250 – €450 / year",
              "Required for student clinical practice in hospital wards"
            ],
            [
              "**Irish Residence Permit (IRP)**",
              "€300 registration fee",
              "Mandatory immigration registration fee upon arrival"
            ]
          ]
        },
        {
          t: "p",
          items: [
            "Financial Planning Notice: Dental students should plan their financial resources for the entire 5-year duration of study. While international students are permitted to work up to 20 hours per week during term time, the rigorous schedule of clinical rotas leaves limited time for part-time work."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Roadmap",
      title: "Step-by-Step Admission Process for Irish Dental Schools",
      steps: [
        {
          title: "Verify Academic Prerequisites",
          desc: "Confirm that your Class 12 scores in Chemistry, Biology, and Physics meet the strict 85%+ threshold required for competitive entry."
        },
        {
          title: "Gain Clinical Dental Shadowing",
          desc: "Spend time shadowing licensed dentists to gain firsthand appreciation of restorative, surgical, and preventive clinical dental care."
        },
        {
          title: "Take English Language Examinations",
          desc: "Achieve the necessary IELTS (7.0+ overall) or TOEFL score required for international healthcare registration."
        },
        {
          title: "Prepare Personal Statement & References",
          desc: "Draft a compelling personal statement detailing your empathy, manual dexterity, and scientific passion, supported by academic references."
        },
        {
          title: "Submit Direct University Applications",
          desc: "Submit your application through the international admissions portals of Trinity College Dublin, UCC, or RCSI before the February deadlines."
        },
        {
          title: "Participate in Multiple Mini Interviews (MMI)",
          desc: "Complete the mandatory virtual or in-person admissions interview assessing situational communication, ethical dilemmas, and motivation."
        },
        {
          title: "Receive & Formally Accept Dental Offer",
          desc: "Review your conditional/unconditional offer, sign the student dental charter, and remit the required seat acceptance deposit."
        },
        {
          title: "Complete Health & Background Screening",
          desc: "Undergo mandatory blood serology screenings (Hepatitis B/C), Mantoux testing, and police criminal record clearance."
        },
        {
          title: "Apply for Irish Student Visa (Stamp 2)",
          desc: "Submit your student visa application via AVATS with comprehensive proof of financial capability (€10,000+ living funds plus tuition)."
        },
        {
          title: "Commence Pre-Clinical Studies in Ireland",
          desc: "Arrive in Ireland, register with your university hospital, receive your clinical instruments, and begin laboratory simulation training."
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Applying early in the cycle (between October and January) is critical, as interview shortlists and non-EU dental seats fill rapidly."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Professional Standards",
      title: "Accreditation, Dental Council of Ireland, and International Licensing",
      groups: [
        {
          t: "p",
          items: [
            "Dentistry is a strictly regulated healthcare profession governed by national statutes and international professional directives:"
          ]
        },
        {
          t: "ul",
          items: [
            "Dental Council of Ireland: Primary dental degrees from Trinity College Dublin, UCC, and RCSI are fully accredited by the Dental Council, entitling graduates to apply for direct registration to practice as a dentist in Ireland.",
            "European Union Mutual Recognition: Under EU Directive 2005/36/EC, primary dental qualifications from Ireland are recognized across European Economic Area (EEA) member states.",
            "Practice in the UK: Under the Common Travel Area (CTA) agreement, Irish dental graduates can register with the UK General Dental Council (GDC) to practice in England, Scotland, Wales, and Northern Ireland.",
            "Practice in India: Indian graduates seeking to return and practice in India must satisfy the current registration requirements and screening regulations of the Dental Council of India (DCI)."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways",
      title: "Dentist Salaries and Career Opportunities in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Graduates who secure registration with the Dental Council of Ireland enjoy outstanding career prospects across primary care practices, hospital dental departments, and public healthcare:"
          ]
        },
        {
          t: "ul",
          items: [
            "General Dental Practitioner (GDP): Providing restorative, endodontic, prosthetic, and preventive care in private practice or community clinics.",
            "Hospital Dental Surgeon: Managing complex dental trauma, oral oncology patients, and medically compromised individuals in regional hospitals.",
            "Specialist Orthodontist: Diagnosing and correcting malocclusion using fixed appliances, clear aligners, and orthognathic surgical planning.",
            "Periodontist & Implantologist: Treating advanced periodontal disease, performing soft tissue grafting, and placing dental implants.",
            "Oral & Maxillofacial Surgeon: Performing surgical tooth extractions, biopsies, bone grafting, and orthognathic corrective surgery.",
            "Dental Academic & Researcher: Teaching dental undergraduates and conducting breakthrough research in dental biomaterials and oral disease."
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Earnings for Dentists in Ireland:",
            "• Associate Dentist (Entry-Level): €45,000 – €65,000 / year",
            "• Experienced General Dentist: €65,000 – €95,000 / year",
            "• Specialist Dentist (Orthodontics / Oral Surgery): €95,000 – €140,000+ / year",
            "• Dental Practice Principal / Owner: €120,000 – €220,000+ / year"
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Application Checklist",
      title: "Required Documents for Irish Dental School Admissions",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following documents are officially prepared and certified before starting your dental application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid International Passport with biographical data pages.",
            "Class 10 and Class 12 academic mark sheets and official certificates.",
            "Verification of prerequisite grades in Chemistry, Biology, and Physics.",
            "English language proficiency scorecard (IELTS 7.0+ / TOEFL 100+).",
            "Personal Statement detailing dental passion, dexterity, and clinical understanding.",
            "Clinical Observation / Dental Shadowing verification letters.",
            "Two Academic Letters of Recommendation from science faculty.",
            "Complete Immunization and Serology Records (Hepatitis B, C, TB, Varicella).",
            "Police Clearance Certificate / Garda Vetting forms.",
            "Financial statements proving tuition fee and living cost funding capacity."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Edu-Hawk Worldwide",
      title: "How Edu-Hawk Worldwide Guides Your Irish Dental Education",
      groups: [
        {
          t: "p",
          items: [
            "Securing admission into an accredited dental program in Ireland requires strategic planning and flawless execution. Edu-Hawk Worldwide offers dedicated guidance for aspiring dental students:",
            "• Academic Eligibility Audit: Evaluating your secondary school scores against the specific subject grade requirements of Trinity, UCC, and RCSI.",
            "• Personal Statement & Shadowing Guidance: Helping you articulate meaningful clinical insights from your dental observation experiences.",
            "• MMI Interview Preparation: Mock interview coaching to prepare you for Multiple Mini Interview stations and ethical judgment questions.",
            "• Visa & Health Documentation: Comprehensive assistance with AVATS visa filing, medical documentation compliance, and police clearances.",
            "• Accommodation & Relocation Support: Securing student accommodation near university hospital campuses in Dublin and Cork."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "How long is a Dentistry degree in Ireland?",
      a: "The standard undergraduate degree in dentistry—Bachelor of Dental Surgery (BDS) or Bachelor of Dental Science (B.Dent.Sc)—takes 5 years of full-time academic and clinical study. Postgraduate specialist clinical doctorates take an additional 3 years."
    },
    {
      q: "Can Indian students study Dentistry in Ireland after Class 12?",
      a: "Yes. Indian students who have completed Class 12 with top marks in science (Chemistry and Biology, typically 85%+) and achieve an IELTS score of 7.0+ can apply directly for 5-year BDS programs at Trinity College Dublin, UCC, or RCSI."
    },
    {
      q: "How much does it cost to study Dentistry in Ireland for international students?",
      a: "Tuition fees for international (non-EU) students range between €50,000 and €62,000 per year due to the high costs of hospital facilities and specialized dental equipment. Living costs range from €9,500 to €15,000 per year depending on the city."
    },
    {
      q: "Can I practice as a dentist in Ireland after graduating?",
      a: "Yes. Graduates from accredited Irish dental schools (Trinity, UCC, RCSI) are eligible to register directly with the Dental Council of Ireland, enabling them to practice as licensed dentists in Ireland, and benefit from the Third Level Graduate Scheme (Stamp 1G work visa)."
    },
    {
      q: "Can I return to India and practice dentistry after completing BDS in Ireland?",
      a: "Indian students wishing to practice in India upon graduation must satisfy the current regulations and registration examinations stipulated by the Dental Council of India (DCI). It is advisable to consult DCI guidelines before commencing studies."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "Trinity_College_Dublin.webp": uniImg1,
  "University_College_Cork.webp": uniImg2,
  "RCSI_University_of_Medicine_and_Health_Sciences.webp": uniImg3,
  "The_University_of_Galway.webp": uniImg4,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function DentistryAbroadIreland() {
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
        desc: "Offers the 5-year Bachelor in Dental Science (B.Dent.Sc) based at the state-of-the-art Dublin Dental University Hospital, renowned for clinical excellence and world-class dental research.",
        img: uniImg1
      },
      {
        name: "University College Cork",
        city: "Cork",
        state: "Munster",
        desc: "Hosts the historic Cork University Dental School and Hospital, offering the 5-year BDS degree with extensive clinical patient contact and advanced restorative dental suites.",
        img: uniImg2
      },
      {
        name: "RCSI University of Medicine and Health Sciences",
        city: "Dublin",
        state: "Leinster",
        desc: "Globally acclaimed medical and healthcare institution introducing an innovative, patient-centered BDS dental degree alongside clinical postgraduate surgical fellowships.",
        img: uniImg3
      },
      {
        name: "University of Galway",
        city: "Galway",
        state: "Connacht",
        desc: "Premier university providing high-impact medical, biomedical, and health sciences research infrastructure supporting postgraduate dental science investigations.",
        img: uniImg4
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
