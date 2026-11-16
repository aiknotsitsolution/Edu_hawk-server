import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/Pharmacy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/Pharmacy/Trinity_College_Dublin.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/Pharmacy/University_College_Cork.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/Pharmacy/The_Royal_College_of_Surgeons.webp";

const page = {
  name: "Pharmacy in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/pharmacy",
  title: "Study Pharmacy in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to studying Pharmacy in Ireland for Indian students: 5-year integrated MPharm degree, PSI accreditation, top schools (Trinity, UCC, RCSI), tuition fees, and Stamp 1G post-study work visa.",
  keywords: "Study Pharmacy in Ireland for Indian Students, Master of Pharmacy MPharm Ireland, Best Pharmacy Schools in Ireland, Pharmaceutical Society of Ireland PSI Accreditation, Pharmacist Salary in Ireland, Cost of Pharmacy Education in Ireland, Edu-Hawk Worldwide",
  introTitle: "STUDY PHARMACY (MPHARM) IN IRELAND FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "Studying Pharmacy in Ireland provides international students with a prestigious, five-year integrated Master of Pharmacy (MPharm) degree accredited by the Pharmaceutical Society of Ireland (PSI). Delivered by Ireland's top healthcare institutions—Trinity College Dublin, University College Cork, and the Royal College of Surgeons in Ireland (RCSI)—the curriculum seamlessly bridges medicinal chemistry, clinical pharmacology, and structured hospital rotations, qualifying graduates for direct pharmacist registration and high-impact careers in Europe's premier biopharmaceutical hub."
  ],
  overview: [
    "Ireland is recognized across the globe as a powerhouse for pharmaceutical sciences, combining world-class clinical pharmacy training with a thriving industrial biomanufacturing corridor that produces many of the world's leading medicines. Pharmacy education in Ireland places equal emphasis on patient-centered clinical decision-making, pharmacology, and industrial drug development.",
    "The official professional pathway to practice as a licensed pharmacist in Ireland is the five-year integrated Master of Pharmacy (MPharm) program (NFQ Level 9). Students complete four foundational undergraduate years (BSc in Pharmacy) followed immediately by a fifth master's year that includes an intensive eight-month paid clinical internship. For students interested purely in drug development, Irish universities also offer focused four-year undergraduate and one-year postgraduate programs in pharmaceutical science.",
    "Edu-Hawk Worldwide supports Indian students through every stage of their pharmacy application. Our specialized advisors help evaluate Class 12 chemistry and biology scores, assemble competitive Statements of Purpose, meet PSI and university health clearance requirements, and secure the Irish student visa (Stamp 2)."
  ],
  level: "5-Year Integrated Master of Pharmacy (MPharm - NFQ Level 9)",
  crumb: "Healthcare & Medicine / Pharmacy in Ireland",
  stats: [
    {
      label: "Degree Choices",
      value: "Integrated MPharm (NFQ Level 9) & BSc Pharmaceutical Science"
    },
    {
      label: "Course Duration",
      value: "5 Years (Integrated BSc + MPharm)"
    },
    {
      label: "Top Institutions",
      value: "Trinity College Dublin, UCC Cork, RCSI"
    },
    {
      label: "Professional License",
      value: "PSI Pharmacist Registration / Stamp 1G Work Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Choose Ireland",
      title: "Key Advantages of Studying Pharmacy in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Pursuing pharmacy in Ireland combines clinical patient care with unprecedented exposure to the global pharmaceutical manufacturing industry:"
          ]
        },
        {
          t: "ul",
          items: [
            "PSI Statutory Accreditation: Graduating from an accredited Irish MPharm program provides direct eligibility to register with the Pharmaceutical Society of Ireland (PSI) as a licensed pharmacist.",
            "Integrated Master's Structure: Complete both your Bachelor's and Master's qualifications within a unified five-year continuous curriculum without needing separate post-graduate applications.",
            "Extensive Clinical Placements: Undertake structured practical rotations across community pharmacies, regional hospital dispensaries, and industrial pharmaceutical companies.",
            "Paid 8-Month Internship: The fifth year incorporates a paid 8-month clinical training placement governed by the Affiliated Pharmacy Programs (APP) consortium.",
            "Booming Pharmaceutical Hub: Ireland is home to 24 of the world's top 25 biotech and pharma firms, offering high-paying career avenues in clinical trials, regulatory affairs, and quality assurance.",
            "Post-Study Work Authorization (Stamp 1G): As Master's graduates (NFQ Level 9), pharmacy students receive 24 months of full-time post-study work permission upon course completion."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Academic Pathways",
      title: "Pharmacy & Pharmaceutical Science Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish institutions provide distinct academic tracks depending on whether you wish to practice clinically as a registered pharmacist or work in pharmaceutical drug manufacturing:"
          ]
        },
        {
          t: "ul",
          items: [
            "5-Year Integrated Master of Pharmacy (MPharm): The standard professional qualification leading to statutory pharmacist registration, covering pharmacology, pharmaceutics, medicinal chemistry, clinical practice, and pharmacy law.",
            "BSc in Pharmaceutical Sciences (4 Years): Non-clinical undergraduate science degree focusing on drug discovery, analytical chemistry, formulation design, and industrial bioprocessing.",
            "MSc in Industrial Pharmacy / Biopharmaceutical Sciences: Advanced postgraduate degree preparing scientists for leadership roles in commercial drug manufacture, cleanroom operations, and validation.",
            "MSc in Clinical Pharmacy: Advanced hospital-based program for practicing pharmacists seeking specialist consultant competencies in clinical pharmacokinetics and therapeutic drug monitoring.",
            "PhD in Pharmaceutical Sciences: 3 to 4-year doctoral research program focusing on novel drug delivery systems, nanomedicine, and molecular therapeutics."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Accredited Institutions",
      title: "Top Universities and Pharmacy Schools in Ireland",
      unis: [
        {
          name: "Trinity College Dublin",
          city: "Dublin",
          state: "Leinster",
          desc: "School of Pharmacy and Pharmaceutical Sciences—consistently ranked among the top 30 pharmacy schools globally—offering the 5-year integrated MPharm program with world-leading drug research facilities.",
          img: uniImg1
        },
        {
          name: "University College Cork",
          city: "Cork",
          state: "Munster",
          desc: "Renowned School of Pharmacy offering an innovative integrated MPharm program with close proximity to Cork's major biopharmaceutical and active pharmaceutical ingredient (API) manufacturing plants.",
          img: uniImg2
        },
        {
          name: "Royal College of Surgeons in Ireland",
          city: "Dublin",
          state: "Leinster",
          desc: "RCSI School of Pharmacy and Biomolecular Sciences delivers a patient-centric, hospital-aligned MPharm curriculum utilizing advanced simulated community and hospital pharmacies.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "These three institutions are the only universities in Ireland offering the statutory MPharm degree accredited by the Pharmaceutical Society of Ireland."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Criteria for Pharmacy Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Entry requirements for pharmacy degrees in Ireland demand outstanding scientific proficiency, particularly in chemistry:"
          ]
        },
        {
          t: "ul",
          items: [
            "Secondary School Leavers (Integrated MPharm): Completion of Class 12 (CBSE, ICSE, or State Boards) with an aggregate score of 80% to 85%+, with mandatory scores of 80%+ in Chemistry and at least one other science subject (Biology, Physics, or Mathematics).",
            "Alternative Secondary Diplomas: International Baccalaureate (IB) diploma with minimum 34–36 points, including Higher Level (HL) Chemistry with a score of 5 or 6.",
            "English Language Proficiency: IELTS Academic overall score of 6.5 (with no individual band below 6.0; some schools require 7.0), or equivalent TOEFL iBT (88–95+) / Pearson PTE Academic (63+).",
            "Postgraduate Pharmaceutical Science Applicants: Recognized 3 or 4-year Bachelor's degree (NFQ Level 8) in pharmacy, chemistry, pharmacology, or chemical engineering with minimum 60%–65% aggregate.",
            "Health & Placement Clearance: Mandatory blood serology tests (Hepatitis B, C, TB) and background vetting via the National Vetting Bureau."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Application Materials",
      title: "Admission Requirements & Application Materials",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following core application materials are gathered and certified before applying:"
          ]
        },
        {
          t: "ul",
          items: [
            "Class 10 and Class 12 mark sheets and certificates (plus Bachelor's transcripts for PG programs).",
            "Valid International Passport with minimum 12 months validity.",
            "Statement of Purpose (SOP) articulating your passion for pharmaceutical science and commitment to healthcare.",
            "Two Letters of Recommendation (from chemistry and biology teachers or academic mentors).",
            "Official English language proficiency test scorecard (IELTS / TOEFL / PTE).",
            "Certified vaccination records and health declarations for clinical placements.",
            "Police Clearance Certificate for student visa and placement clearance."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Financial Overview",
      title: "Tuition Fees and Cost of Living for Pharmacy in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "International student tuition fees for the MPharm program cover classroom instruction, specialized laboratory chemicals, and clinical placement supervision:"
          ]
        },
        {
          t: "p",
          items: [
            "| Expense Category | Annual Indicative Cost Range | Key Budgeting Notes |",
            "| :--- | :--- | :--- |",
            "| **Undergraduate MPharm Tuition** | €20,000 – €28,000 / year | Non-EU international tuition rate (Years 1 to 4) |",
            "| **MPharm 5th Year Tuition** | €16,000 – €24,000 | Professional master's year with 8-month paid placement |",
            "| **BSc Pharmaceutical Science Tuition** | €16,000 – €24,000 / year | 4-year non-clinical scientific degree |",
            "| **Living Expenses (Dublin)** | €12,000 – €16,000 / year | University accommodation, meals, transit, and utilities |",
            "| **Living Expenses (Cork)** | €9,500 – €13,000 / year | Regional campus living offering reduced accommodation costs |",
            "| **Private Health Insurance** | €160 – €300 / year | Mandatory international student medical insurance |",
            "| **Irish Residence Permit (IRP)** | €300 registration fee | Mandatory immigration registration fee upon arrival |"
          ]
        },
        {
          t: "p",
          items: [
            "Paid Clinical Placement Offset: During the 8-month clinical internship in Year 5, students receive a statutory trainee placement stipend that substantially offsets final-year living costs."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Step-by-Step Admission Process for Pharmacy in Ireland",
      steps: [
        {
          title: "Select Your Career Track",
          desc: "Decide whether your goal is clinical pharmacist registration (5-year MPharm) or pharmaceutical industry drug manufacturing (BSc Pharmaceutical Sciences)."
        },
        {
          title: "Verify Subject Prerequisites",
          desc: "Confirm that your Class 12 scores in Chemistry and Biology/Maths satisfy the university's 80%+ threshold alongside IELTS 6.5+."
        },
        {
          title: "Prepare Personal Statement & References",
          desc: "Draft a focused Statement of Purpose showcasing your scientific curiosity, analytical aptitude, and healthcare dedication."
        },
        {
          title: "Submit Direct International Application",
          desc: "Submit your online application through the international portals of Trinity College Dublin, UCC, or RCSI."
        },
        {
          title: "Receive & Accept Admission Offer",
          desc: "Review your conditional or unconditional offer letter, pay the required tuition deposit, and secure your place."
        },
        {
          title: "Complete Clinical Health Screening",
          desc: "Undergo mandatory serology testing, immunization updates, and complete police background clearance forms."
        },
        {
          title: "Apply for Irish Student Visa (Stamp 2)",
          desc: "File your visa application via the AVATS portal with comprehensive financial proof (€10,000+ living funds plus tuition fee receipt)."
        },
        {
          title: "Arrive in Ireland & Complete IRP Registration",
          desc: "Travel to Ireland, attend campus induction, obtain your Irish Residence Permit (IRP), and begin laboratory coursework."
        },
        {
          title: "Complete 5-Year Pathway & PSI Registration",
          desc: "Complete the 4-year BSc plus 5th-year MPharm internship, pass professional competency examinations, and register with the PSI."
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Applicants should submit their dossiers between November and February to ensure priority consideration for competitive MPharm seats."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Statutory Standards",
      title: "Accreditation, PSI Registration, and Global Recognition",
      groups: [
        {
          t: "p",
          items: [
            "The practice of pharmacy is legally protected and overseen by national and European regulatory authorities:"
          ]
        },
        {
          t: "ul",
          items: [
            "Pharmaceutical Society of Ireland (PSI): The statutory pharmacy regulator in Ireland that accredits MPharm degree curricula, oversees clinical internship placements, and maintains the Register of Pharmacists.",
            "European Union Mutual Recognition: Under EU Directive 2005/36/EC, Irish MPharm graduates hold qualifications recognized across European Economic Area (EEA) member states.",
            "Practice in the UK: Under the Common Travel Area (CTA) agreement, Irish-registered pharmacists can apply for reciprocity recognition with the UK General Pharmaceutical Council (GPhC).",
            "Practice in India: Indian graduates wishing to practice in India must check current recognition protocols and registration criteria with the Pharmacy Council of India (PCI)."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Pharmacist Salaries and Career Opportunities in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of Irish pharmacy programs enjoy versatile career pathways spanning community practice, hospital clinical wards, and multinational biopharmaceutical enterprises:"
          ]
        },
        {
          t: "ul",
          items: [
            "Community Pharmacist: Dispensing prescription medications, managing minor ailment schemes, conducting medication reviews, and administering vaccinations in retail pharmacies.",
            "Hospital Clinical Pharmacist: Collaborating with multidisciplinary clinical teams in hospital wards to optimize drug therapy, calculate intravenous dosages, and manage hospital formularies.",
            "Industrial Quality Assurance (QA) & QC Specialist: Ensuring pharmaceutical manufacturing batches strictly conform to Good Manufacturing Practice (GMP) regulations.",
            "Regulatory Affairs Specialist: Compiling medicinal drug dossiers, coordinating product license applications with the HPRA (Health Products Regulatory Authority) and EMA.",
            "Pharmacovigilance & Drug Safety Scientist: Monitoring adverse drug reactions, evaluating safety profiles, and ensuring patient pharmacovigilance compliance.",
            "Clinical Research Associate (CRA): Overseeing phase I–IV clinical drug trials across European medical centers."
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Salaries in Ireland's Pharmacy & Biopharma Sector:",
            "• Newly Registered Pharmacist (Year 1–2): €42,000 – €55,000 / year",
            "• Experienced Supervising Pharmacist: €58,000 – €78,000+ / year",
            "• Senior Hospital Pharmacist: €60,000 – €82,000 / year",
            "• Regulatory Affairs / Pharmacovigilance Associate: €38,000 – €62,000 / year",
            "• Industrial Pharmaceutical Production / QA Manager: €65,000 – €95,000+ / year"
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Comprehensive Document Checklist for Pharmacy Applicants",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following documents are officially prepared and certified before starting your pharmacy application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid International Passport with biometric photo page.",
            "Class 10 and Class 12 mark sheets and passing certificates.",
            "Verification of required science subjects (Chemistry and Biology/Physics/Maths).",
            "English language proficiency scorecard (IELTS 6.5+ / TOEFL 88+).",
            "Academic Statement of Purpose (SOP) tailored to pharmacy and healthcare.",
            "Two Letters of Recommendation (academic science teachers or laboratory supervisors).",
            "Occupational Health & Immunization Records (Hep B, MMR, TB screening).",
            "Police Clearance Certificate for Garda Vetting.",
            "Financial statements proving tuition and living cost funding capacity (€10,000+ living funds)."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Edu-Hawk Guidance",
      title: "How Edu-Hawk Worldwide Supports Your Irish Pharmacy Studies",
      groups: [
        {
          t: "p",
          items: [
            "Pharmacy admissions require meticulous academic alignment and strict regulatory compliance. Edu-Hawk Worldwide offers comprehensive overseas guidance:",
            "• Institution Selection: Matching your academic profile with the MPharm programs of Trinity, UCC, and RCSI.",
            "• SOP & Essay Mentorship: Helping you craft a standout Statement of Purpose highlighting your chemistry aptitude and healthcare passion.",
            "• Health Clearance Assistance: Guiding you through the required occupational health immunizations and Garda vetting procedures.",
            "• Student Visa (Stamp 2) Support: Expert assistance with the AVATS portal, financial affidavit documentation, and appointment booking.",
            "• Post-Study Work Guidance: Advising on the 2-year Stamp 1G graduate work visa and navigating PSI registration requirements."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "What is the duration of a Pharmacy degree in Ireland?",
      a: "The professional pathway to becoming a licensed pharmacist in Ireland is a 5-year integrated Master of Pharmacy (MPharm) program. It comprises a 4-year undergraduate Bachelor of Science in Pharmacy followed immediately by a 1-year Master of Pharmacy including an 8-month paid clinical internship."
    },
    {
      q: "Can Indian students study Pharmacy in Ireland after Class 12?",
      a: "Yes. Indian students who have completed Class 12 (CBSE, ICSE, or State Boards) with strong marks in science (especially Chemistry and Biology/Maths, typically 80%–85%+) and meet English language proficiency (IELTS 6.5+) can apply directly for 5-year integrated MPharm programs."
    },
    {
      q: "How much does it cost to study Pharmacy in Ireland?",
      a: "Tuition fees for international (non-EU) students range between €20,000 and €28,000 per year for the undergraduate phase (Years 1 to 4) and €16,000 to €24,000 for the final Master's year. Living expenses average €10,000 to €15,000 per year."
    },
    {
      q: "Can I practice as a pharmacist in Ireland after completing the MPharm?",
      a: "Yes. Graduates who successfully complete the 5-year PSI-accredited MPharm program and pass the professional registration examinations are eligible to register directly with the Pharmaceutical Society of Ireland (PSI) as licensed pharmacists and work full-time under the 2-year Stamp 1G graduate work visa."
    },
    {
      q: "Which universities offer accredited Pharmacy degrees in Ireland?",
      a: "Only three universities in Ireland offer PSI-accredited MPharm programs leading to pharmacist registration: Trinity College Dublin, University College Cork (UCC), and the Royal College of Surgeons in Ireland (RCSI)."
    }
  ]
};

export default function PharmacyAbroadIreland() {
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
        desc: "School of Pharmacy and Pharmaceutical Sciences—consistently ranked among the top 30 pharmacy schools globally—offering the 5-year integrated MPharm program with world-leading drug research facilities.",
        img: uniImg1
      },
      {
        name: "University College Cork",
        city: "Cork",
        state: "Munster",
        desc: "Renowned School of Pharmacy offering an innovative integrated MPharm program with close proximity to Cork's major biopharmaceutical and active pharmaceutical ingredient (API) manufacturing plants.",
        img: uniImg2
      },
      {
        name: "Royal College of Surgeons in Ireland",
        city: "Dublin",
        state: "Leinster",
        desc: "RCSI School of Pharmacy and Biomolecular Sciences delivers a patient-centric, hospital-aligned MPharm curriculum utilizing advanced simulated community and hospital pharmacies.",
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
