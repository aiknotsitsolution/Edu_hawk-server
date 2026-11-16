import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Pharmacy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Pharmacy/Universit_Paris.webp";
import uniImg2 from "../../../../Images/Abroad/France/Pharmacy/pharmaceutical_research.webp";
import uniImg3 from "../../../../Images/Abroad/France/Pharmacy/Aix.webp";

const pageData = {
  name: "Pharmacy in France",
  country: "France",
  slug: "pharmacy",
  title: "Study Pharmacy in France for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Pharmacy in France for Indian students: 6-year Diplôme d'État de Docteur en Pharmacie, PASS/L.AS health tracks, top universities, tuition fees, and pharmacist licensing.",
  keywords:
    "Study Pharmacy in France for Indian Students, Pharmacy Courses in France for International Students, Top Universities for Pharmacy in France, Doctor of Pharmacy in France for International Students, Diplôme d’État de Docteur en Pharmacie in France, PASS and L.AS Admission Pathways for Pharmacy in France, Pharmacy Eligibility Requirements in France, French Language Requirements for Pharmacy Courses in France, Pharmacy Admission Requirements for Indian Students, Pharmacy Tuition Fees in France 2026–2027, Cost of Studying Pharmacy in France for International Students, Master’s in Pharmaceutical Sciences in France, Pharmacy at Université Paris Cité and Paris-Saclay, Pharmacy Student Visa Requirements for France, Pharmacist Jobs and Career Opportunities in France",
  introTitle: "STUDY PHARMACY IN FRANCE FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "France is a world capital in pharmaceutical innovation, drug development, and healthcare clinical care, offering international students the prestigious 6-year State Doctor of Pharmacy degree (Diplôme d'État de Docteur en Pharmacie) at highly subsidized public tuition fees with comprehensive laboratory training and clinical hospital internships.",
  ],
  overview: [
    "Studying Pharmacy in France combines rigorous pharmaceutical sciences, clinical pharmacology, organic chemical synthesis, biopharmaceutical technology, and extensive professional placements. French pharmacy education is organized within university faculties of pharmacy in close partnership with university hospital centers (CHU) and multinational pharmaceutical companies.",
    "The core professional pharmacist credential is the Diplôme d’État de Docteur en Pharmacie, requiring a minimum of 6 years of university study. Students access pharmacy faculties through competitive first-year health pathways—PASS (Parcours d'accès spécifique santé) or L.AS (Licence avec accès santé). Beyond community pharmacy, France provides world-leading specialized pathways in industrial pharmacy, clinical research, medical biology, toxicology, and regulatory affairs.",
    "Key Advantages of Studying Pharmacy in France:\n• State-Guaranteed Professional Credential: The French State Doctor of Pharmacy degree is universally recognized across the European Union, granting full licensing to practice upon registration with the Ordre National des Pharmaciens.\n• Global Biopharma Hub: France is home to major pharmaceutical leaders (such as Sanofi, Servier, and Pierre Fabre) and research powerhouses like INSERM and CNRS.\n• Subsidized Public University Fees: Benefit from French government-regulated reference registration fees (€178 to €255/year for standard public university health degrees).\n• Multiple Career Orientations: Choose from Year 4 between Community Pharmacy (Officine), Industrial Pharmacy & R&D (Industrie/Recherche), or the competitive 4-year Pharmacy Residency (Internat en Pharmacie).\n• Post-Study Work Visa: Eligible master's and doctoral graduates benefit from France's 2-year post-study residence authorization (APS / RECE) to start their scientific careers in Europe.",
    "EduHawk Worldwide assists Indian students with course selection, French language preparation (DELF B2/DALF C1), Campus France India / Études en France portal submissions, scholarship applications, and French student visa processing.",
  ],
  level: "Diplôme d'État de Docteur en Pharmacie (Doctor of Pharmacy - 6 Years)",
  crumb: "Health Sciences / Pharmacy",
  stats: [
    {
      label: "Degree Awarded",
      value: "Diplôme d'État de Docteur en Pharmacie",
    },
    {
      label: "Course Duration",
      value: "6 Years (PASS/L.AS + 5 Years Pharmacy)",
    },
    {
      label: "Language",
      value: "French (B2 / C1 Proficiency Required)",
    },
    {
      label: "Annual Tuition",
      value: "€178 – €255 / Year (Public Universities)",
    },
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Program Architecture",
      title: "Pharmacy Courses & Academic Pathways in France",
      groups: [
        {
          t: "p",
          items: [
            "French pharmacy education is structured under the national health sciences curriculum across three successive cycles, combining theoretical lectures, advanced analytical laboratories, and hospital and community dispensary internships.",
          ],
        },
        {
          t: "card",
          items: [
            {
              title: "Cycle 1: Health Access & Pharmaceutical Foundations (Years 1 to 3)",
              desc: "Starts with the health gateway year: PASS (Parcours d'accès spécifique santé) or L.AS (Licence avec accès santé). Admitted students complete Years 2 and 3 (DFGSP - Diplôme de Formation Générale en Sciences Pharmaceutiques), covering organic chemistry, pharmacology, biochemistry, botany, physiology, and a mandatory 4-week community pharmacy placement.",
            },
            {
              title: "Cycle 2: Specialized Formations (Years 4 and 5)",
              desc: "Leads to the DFASP (Diplôme de Formation Approfondie en Sciences Pharmaceutiques). In Year 5, students complete full-time hospital residency rotations (stage hospitalier) and select their career stream: Officine (Community), Industrie/Recherche (Pharmaceutical Industry), or Internat.",
            },
            {
              title: "Cycle 3: Short Cycle (Year 6) or National Pharmacy Internat (4 Years)",
              desc: "Students in Officine or Industrie complete a 6-month specialized internship and publicly defend their doctoral thesis to earn the Diplôme d'État de Docteur en Pharmacie. Internat students undertake a 4-year hospital residency in Medical Biology, Hospital Pharmacy, or Innovation.",
            },
          ],
        },
        {
          t: "h3",
          items: ["Key Pharmaceutical Disciplines Studied:"],
        },
        {
          t: "bullet",
          items: [
            "Pharmacology & Pharmacokinetics: Mechanisms of drug action, receptor binding, and metabolic biotransformation.",
            "Medicinal & Organic Chemistry: Chemical synthesis, molecular modeling, and structure-activity relationships (SAR).",
            "Galenic Pharmacy & Drug Formulation: Nanotechnology delivery systems, tablets, injectables, and biopharmaceutical formulations.",
            "Toxicology & Environmental Health: Clinical toxicology, adverse drug reactions, and pharmacovigilance regulations.",
            "Industrial Quality Assurance & Regulatory Affairs: Good Manufacturing Practices (GMP), clinical trials oversight, and EMA/ANSM compliance.",
            "Clinical Pharmacy & Patient Care: Prescription analysis, drug interactions, therapeutic monitoring, and public health counseling.",
          ],
        },
      ],
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Universities for Pharmacy in France",
      lead: [
        "France's prestigious public university faculties of pharmacy feature world-class biomedical research laboratories, state-of-the-art cleanrooms, and strong ties with European pharmaceutical manufacturers.",
      ],
      unis: [
        {
          name: "Université Paris Cité – Paris",
          city: "Paris",
          state: "Île-de-France",
          desc: "The Faculty of Pharmacy at Université Paris Cité is one of the world's most distinguished pharmaceutical education centers. It offers elite programs in hospital pharmacy, medicinal chemistry, clinical pharmacology, and cutting-edge drug discovery research.",
          img: uniImg1,
        },
        {
          name: "Université Paris-Saclay",
          city: "Paris-Saclay",
          state: "Île-de-France",
          desc: "Ranked among Europe's finest research institutions, Paris-Saclay's Faculty of Pharmacy in Châtenay-Malabry/Orsay is renowned for pharmaceutical technology, therapeutic innovation, biopharmaceutics, and close collaboration with Paris-Saclay biocluster industries.",
          img: uniImg2,
        },
        {
          name: "Aix-Marseille University – Marseille",
          city: "Marseille",
          state: "Provence-Alpes-Côte d'Azur",
          desc: "Aix-Marseille University's Faculty of Pharmacy provides premier education in pharmaceutical chemistry, industrial health engineering, medical biology, and oncology pharmacology, supported by Marseille's extensive CHU hospital network.",
          img: uniImg3,
        },
      ],
    },
    {
      slot: "requirements",
      eyebrow: "Admission Criteria",
      title: "Eligibility to Study Pharmacy in France",
      groups: [
        {
          t: "p",
          items: [
            "Admission to French pharmacy faculties is competitive. Candidates must satisfy academic prerequisites in scientific disciplines and demonstrate strong French language fluency.",
          ],
        },
        {
          t: "h3",
          items: ["Academic Qualifications for Indian Students:"],
        },
        {
          t: "bullet",
          items: [
            "Completion of Class 12 (Higher Secondary School Certificate) equivalent to the French Baccalauréat from recognized boards (CBSE, ISC, or State Boards).",
            "Strong academic preparation in science subjects, with exceptional marks in Chemistry, Biology, and Physics or Mathematics.",
            "Submission of certified French translations of high school marksheets and graduation diplomas.",
          ],
        },
        {
          t: "h3",
          items: ["French Language Proficiency Standards:"],
        },
        {
          t: "bullet",
          items: [
            "Because pharmacy courses, laboratory instructions, and clinical hospital rotations are conducted in French, international applicants must possess a certified French language diploma: DELF B2 (minimum) or DALF C1 / TCF with level B2/C1.",
            "Fluent oral and written communication in French is essential for pharmacology exams, laboratory reports, and patient interaction.",
          ],
        },
        {
          t: "h3",
          items: ["Transfer Students & Foreign Qualifications:"],
        },
        {
          t: "bullet",
          items: [
            "Students holding non-EU pharmacy degrees (such as B.Pharm from India) cannot transfer directly into the final clinical year of French pharmacy. Access to practice licensing requires passing the national Épreuves de Vérification des Connaissances (EVC) organized by the French Ministry of Health.",
          ],
        },
      ],
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Pharmacy in France",
      groups: [
        {
          t: "p",
          items: [
            "Public higher education in France is heavily subsidized by the French state, making French pharmacy degrees extraordinarily affordable compared to private pharmacy colleges in the UK, USA, or Australia.",
          ],
        },
        {
          t: "table",
          headers: ["Study Cycle", "Standard Public Registration Fee", "Duration", "Core Focus"],
          rows: [
            ["First Cycle (PASS/L.AS & DFGSP)", "€178 / year", "Years 1 to 3", "Biomedical, Chemical & Basic Pharmacy Labs"],
            ["Second Cycle (DFASP)", "€255 / year", "Years 4 and 5", "Hospital Rotations & Industry/Officine Tracks"],
            ["Third Cycle (Doctorate Thesis)", "€255 / year", "Year 6", "Specialized Internships & Doctoral Thesis Defense"],
            ["CVEC Student Life Contribution", "€103 / year", "Annual Mandatory", "Campus Health & Student Amenities"],
          ],
        },
        {
          t: "p",
          items: [
            "Note: Non-EU students should verify with their chosen university whether differentiated tuition fees apply or if institution-level waivers matching EU rates are granted. Students in Year 5 hospital rotations receive monthly student stipends.",
          ],
        },
        {
          t: "h3",
          items: ["Monthly Living Expense Estimates in France:"],
        },
        {
          t: "bullet",
          items: [
            "Accommodation: €300 – €700 / month (CROUS university student dorms or private rentals).",
            "Food & Daily Living: €200 – €350 / month.",
            "Local Transportation: €25 – €65 / month with student discount passes.",
            "Healthcare Insurance: Covered 100% free of charge under the French national health system (Sécurité Sociale).",
            "CAF Housing Assistance: Eligible international students can receive CAF rent reimbursement, recovering between €100 and €220 per month.",
          ],
        },
      ],
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Guide",
      title: "Application & Admission Procedure for Pharmacy in France",
      steps: [
        {
          title: "Select Pharmacy Faculties",
          desc: "Research French universities offering pharmacy through PASS or L.AS health access entry pathways.",
        },
        {
          title: "Achieve DELF B2 Certification",
          desc: "Obtain official French language proficiency diploma (DELF B2 or DALF C1) required for health studies.",
        },
        {
          title: "Register on Campus France / DAP",
          desc: "Create your Études en France portal profile under the Demande d'Admission Préalable (DAP) procedure.",
        },
        {
          title: "Assemble Certified Academic Dossier",
          desc: "Compile Class 10 and 12 marksheets, syllabus details, French language certificate, SOP, and CV.",
        },
        {
          title: "Obtain Sworn French Translations",
          desc: "Translate all non-French academic certificates into French through accredited certified translators.",
        },
        {
          title: "Submit University Applications",
          desc: "Select preferred university health access tracks and submit your dossier before national deadlines.",
        },
        {
          title: "Attend Campus France Interview",
          desc: "Participate in the academic evaluation interview at your regional Campus France India branch.",
        },
        {
          title: "Receive Admission Offer",
          desc: "Accept the provisional admission offer for the first year of health studies (PASS or L.AS).",
        },
        {
          title: "Secure French Student Visa (VLS-TS)",
          desc: "Apply for your Long-Stay Student Visa with proof of sufficient maintenance funds and housing.",
        },
        {
          title: "Pay CVEC & Complete Enrollment",
          desc: "Pay the €103 annual CVEC fee, finalize administrative enrollment on campus, and begin your studies.",
        },
      ],
    },
    {
      slot: "careers",
      eyebrow: "Employment Outlook",
      title: "Pharmacist Salaries & Career Opportunities in France",
      groups: [
        {
          t: "p",
          items: [
            "Holders of the French State Doctor of Pharmacy degree (Diplôme d'État de Docteur en Pharmacie) who register with the Ordre National des Pharmaciens enjoy versatile career pathways across healthcare, hospital practice, and the biopharmaceutical industry.",
          ],
        },
        {
          t: "bullet",
          items: [
            "Community Pharmacist (Pharmacien d'Officine): €38,000 – €55,000 / year (starting to experienced)",
            "Hospital Clinical Pharmacist (Pharmacien Hospitalier): €45,000 – €75,000 / year",
            "Industrial Pharmaceutical R&D Scientist: €42,000 – €65,000 / year",
            "Regulatory Affairs Manager: €48,000 – €75,000+ / year",
            "Quality Assurance (QA) / Quality Control (QC) Director: €50,000 – €80,000 / year",
            "Medical Biology / Clinical Pathologist (Biologiste Médical): €60,000 – €100,000+ / year",
          ],
        },
        {
          t: "p",
          items: [
            "Practice in India or Overseas: Indian students planning to return to India must check current qualification recognition and registration requirements with the Pharmacy Council of India (PCI). International graduates can also utilize France's 2-year post-study work visa (APS/RECE) to establish their careers in the European biopharmaceutical sector.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How many years does it take to study pharmacy in France?",
      a: "The standard professional pharmacy pathway in France lasts a minimum of 6 years (1 year of PASS/L.AS health gateway + 5 years of pharmaceutical studies), culminating in the Diplôme d'État de Docteur en Pharmacie. The specialized hospital Internat route takes 4 additional years (total 9 years).",
    },
    {
      q: "Can international students study pharmacy in France?",
      a: "Yes. International students from India and across the world are eligible to apply for first-year health access tracks (PASS/L.AS) leading into pharmacy faculties, provided they meet academic prerequisites and language standards.",
    },
    {
      q: "Is French language fluency mandatory for studying pharmacy in France?",
      a: "Yes. Classroom lectures, pharmaceutical chemistry laboratories, and patient clinical placements are conducted in French. Universities require verified French language proficiency at DELF B2 (minimum) or DALF C1.",
    },
    {
      q: "How much does pharmacy tuition cost in French public universities?",
      a: "Standard public university registration fees under the French national reference fee regime are approximately €178 per year for the first cycle and €255 per year for advanced pharmaceutical cycles, plus the €103 annual CVEC contribution.",
    },
    {
      q: "Can I practice as a pharmacist in India after studying in France?",
      a: "To practice as a pharmacist in India with a foreign qualification, graduates must apply to the Pharmacy Council of India (PCI) for recognition and fulfill any required registration exams or statutory formalities.",
    },
  ],
};

export default function PharmacyAbroad() {
  return (
    <AbroadCoursePage
      page={pageData}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/france/pharmacy"
    />
  );
}
