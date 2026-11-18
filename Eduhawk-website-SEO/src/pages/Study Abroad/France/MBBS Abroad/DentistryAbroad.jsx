import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Dentistry/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Dentistry/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Dentistry/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Dentistry/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Dentistry/University_of_Lille.webp";
import uniImg2 from "../../../../Images/Abroad/France/Dentistry/University_of_Montpellier.webp";
import uniImg3 from "../../../../Images/Abroad/France/Dentistry/University_of_Rennes.webp";
import cmsData from "../../../../data/study_abroad/france/dentistry.json";

const page = {
  name: "Dentistry in France",
  country: "France",
  slug: "dentistry",
  title: "Study Dentistry in France for Indian Students | Edu-Hawk Worldwide",
  description:
    "Comprehensive guide to studying Dentistry in France for Indian students: 6-year Diplôme d'État de Docteur en Chirurgie Dentaire, PASS/L.AS health tracks, top universities, fees, and dental surgeon licensing.",
  keywords:
    "Study Dentistry in France, Dentistry Courses in France, Top Universities for Dentistry in France, Dentistry Eligibility Requirements in France, Dentistry Admission Requirements for Indian Students in France, Dentistry Tuition Fees in France 2026–2027, Cost of Studying Dentistry in France for International Students, Dentistry Student Visa Requirements for France, Dentist Career Opportunities and Salary in France",
  introTitle: "DENTISTRY IN FRANCE FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "France offers world-renowned medical and dental education through its 6-year state dental program (Diplôme d’État de Docteur en Chirurgie Dentaire), combining rigorous oral biology, advanced simulation training, and supervised hospital clinical care in highly subsidized public universities.",
  ],
  overview: [
    "Pursuing dental education in France provides international students with an exceptional blend of scientific theory, cutting-edge biomedical technology, advanced simulation laboratories, and extensive supervised patient care. Dental education in France is organized under the national healthcare framework, leading to the prestigious Diplôme d’État de docteur en chirurgie dentaire (Doctor of Dental Surgery). Upon graduation and state registration with the Ordre National des Chirurgiens-Dentistes, practitioners are authorized to practice as licensed dental surgeons across France and the European Union.",
    "Unlike countries offering standalone BDS or DDS degrees, French dental studies are integrated into the national medical and health sciences curriculum. Aspiring dentists begin through competitive health access pathways—PASS (Parcours d'accès spécifique santé) or L.AS (Licence avec accès santé)—before advancing into specialized odontologie faculties at leading public medical universities.",
    "Main Advantages of Studying Dentistry in France:\n• Rigorous Academic & Clinical Framework: Complete extensive clinical rotations in university dental hospitals (CHU) covering restorative dentistry, periodontics, oral surgery, and pediatric dentistry.\n• Highly Subsidized Tuition: Benefit from France's public higher education system with standard national registration fees (€178 to €255/year under the national reference fee schedule).\n• Advanced Clinical Technology: Train on high-fidelity dental simulators, digital CAD/CAM milling units, 3D cone-beam computed tomography (CBCT), and laser treatment systems.\n• Specialisation Pathways: Pursue advanced dental internat specializations in orthodontics (orthopédie dento-faciale), oral medicine, and maxillofacial dento-alveolar surgery.\n• Global Career Opportunities: Gain an EU-recognized dental degree qualifying graduates for clinical practice, academic research, and hospital dentistry worldwide.",
    "EduHawk Worldwide provides expert overseas education counselling, helping Indian students evaluate academic prerequisites, navigate the Campus France India preliminary admission (DAP) process, achieve required French proficiency (DELF B2/DALF C1), and prepare robust visa files.",
  ],
  level: "Diplôme d'État de Docteur en Chirurgie Dentaire (Doctor of Dental Surgery - 6 Years)",
  crumb: "Health Sciences / Dentistry",
  stats: [
    {
      label: "Degree Awarded",
      value: "Diplôme d'État de Docteur en Chirurgie Dentaire",
    },
    {
      label: "Course Duration",
      value: "6 Years (PASS/L.AS + 5 Years Dental Studies)",
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
      title: "Dentistry Curriculum & Study Structure in France",
      groups: [
        {
          t: "p",
          items: [
            "Dental education in France (Odontologie) spans a minimum of 6 years divided into three consecutive cycles, combining rigorous biomedical theory, pre-clinical phantom head simulations, and extensive hospital patient care.",
          ],
        },
        {
          t: "card",
          items: [
            {
              title: "Cycle 1: Health Access & Pre-Clinical Foundations (Years 1 to 3)",
              desc: "Starts with the health gateway year: PASS (Parcours d'accès spécifique santé) or L.AS (Licence avec accès santé). Students selected for Odontologie complete Years 2 and 3 (DFGSO - Diplôme de Formation Générale en Sciences Odontologiques), covering dental anatomy, human physiology, oral biology, biomaterials, and simulation phantom-head labs.",
            },
            {
              title: "Cycle 2: Clinical Training & Hospital Rotations (Years 4 and 5)",
              desc: "Leads to the DFASO (Diplôme de Formation Approfondie en Sciences Odontologiques). Students treat patients under faculty supervision in university hospital dental centers (CHU), mastering endodontics, prosthodontics, periodontology, oral radiology, and emergency dental surgery.",
            },
            {
              title: "Cycle 3: Short Cycle (Year 6) or Specialist Internat (3 to 4 Years)",
              desc: "Students choose between the Cycle Court (1 year of comprehensive general practice, culminating in public thesis defense for the Diplôme d'État de Docteur en Chirurgie Dentaire) or the competitive national Internat en Odontologie for 3 to 4 years of advanced specialization.",
            },
          ],
        },
        {
          t: "h3",
          items: ["Core Subjects Studied in French Odontologie:"],
        },
        {
          t: "bullet",
          items: [
            "Dental Anatomy, Morphometry & Craniofacial Biology",
            "Human Pathology, General Histology, and Pharmacology",
            "Oral Microbiology, Immunology, and Infection Control",
            "Restorative & Operative Dentistry, Cariology, and Biomaterials",
            "Endodontics (Root Canal Therapy) and Advanced Rotary Instrumentation",
            "Periodontology (Gum Disease Diagnosis and Surgical Management)",
            "Fixed, Removable, and Implant-Supported Prosthodontics",
            "Oral Diagnosis, Digital Dental Radiology, and Preventive Public Health Dentistry",
          ],
        },
      ],
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Universities for Dentistry in France",
      lead: [
        "France's prestigious public university faculties of dental medicine offer world-class clinical training centers, modern dental hospital complexes, and cutting-edge research laboratories.",
      ],
      unis: [
        {
          name: "University of Lille",
          city: "Lille",
          state: "Hauts-de-France",
          desc: "The Faculty of Dental Surgery at the University of Lille is one of Northern Europe's leading centers for dental education and oral health research. It offers advanced simulation suites, a high-volume university dental hospital, and renowned specializations in restorative dentistry and orthodontics.",
          img: uniImg1,
        },
        {
          name: "University of Montpellier",
          city: "Montpellier",
          state: "Occitanie",
          desc: "Montpellier boasts the oldest continuous medical school tradition in the Western world. Its Faculty of Odontology combines historic clinical prestige with cutting-edge dental biotechnology laboratories and extensive CHU hospital rotation opportunities.",
          img: uniImg2,
        },
        {
          name: "University of Rennes",
          city: "Rennes",
          state: "Brittany",
          desc: "The Dental Medicine Department at the University of Rennes is celebrated for excellence in clinical pedagogy, digital dentistry workflows, biomaterials research, and comprehensive pediatric and geriatric dental training.",
          img: uniImg3,
        },
      ],
    },
    {
      slot: "requirements",
      eyebrow: "Eligibility & Entry",
      title: "Eligibility to Study Dentistry in France",
      groups: [
        {
          t: "p",
          items: [
            "Admission to French dental schools is competitive and conducted through national selection frameworks. Candidates must demonstrate academic excellence in natural sciences and advanced French language proficiency.",
          ],
        },
        {
          t: "h3",
          items: ["Academic Qualifications for Indian Students:"],
        },
        {
          t: "bullet",
          items: [
            "Completion of Class 12 (Higher Secondary Certificate) equivalent to the French Baccalauréat from recognized boards (CBSE, ISC, or State Boards).",
            "Strong academic preparation in science subjects, with high marks in Biology, Chemistry, and Physics or Mathematics.",
            "Demonstrated capacity to meet demanding health sciences entrance standards and PASS/L.AS selection criteria.",
          ],
        },
        {
          t: "h3",
          items: ["French Language Proficiency Requirement:"],
        },
        {
          t: "bullet",
          items: [
            "Because clinical training and patient consultations are conducted entirely in French, international applicants must possess a certified French language diploma: DELF B2 (minimum) or DALF C1 / TCF with level B2/C1.",
            "Strong communication skills in French are mandatory before entering clinical hospital wards to ensure patient safety and effective care delivery.",
          ],
        },
        {
          t: "h3",
          items: ["Transfer Students & Foreign Dental Qualifications:"],
        },
        {
          t: "bullet",
          items: [
            "Students who have completed dental studies in non-EU countries cannot transfer directly into advanced years of French odontologie. Recognition of prior studies and access to licensing exams (Épreuves de Vérification des Connaissances - EVC) is strictly governed by the French Ministry of Health.",
          ],
        },
      ],
    },
    {
      slot: "costs",
      eyebrow: "Fees & Budgeting",
      title: "Cost of Studying Dentistry in France",
      groups: [
        {
          t: "p",
          items: [
            "French public dental faculties offer extraordinarily affordable tuition compared to dental schools in the UK, USA, Canada, or private colleges in Eastern Europe, thanks to substantial French state funding.",
          ],
        },
        {
          t: "table",
          headers: ["Study Stage", "Standard Public Registration Fee", "Duration", "Key Focus"],
          rows: [
            ["First Cycle (PASS/L.AS & DFGSO)", "€178 / year", "Years 1 to 3", "Biomedical & Pre-Clinical Phantom Labs"],
            ["Second Cycle (DFASO)", "€255 / year", "Years 4 and 5", "Supervised Clinical Hospital Rotations"],
            ["Third Cycle (Doctorate Thesis)", "€255 / year", "Year 6", "General Clinical Practice & Thesis Defense"],
            ["CVEC Student Life Contribution", "€103 / year", "Annual Mandatory", "Campus Healthcare & Student Amenities"],
          ],
        },
        {
          t: "p",
          items: [
            "Note: Non-EU students should confirm with their chosen university whether the differentiated tuition fee regime applies or if institution-level waivers are granted. Dental instruments and protective clinical kits may require an initial equipment deposit.",
          ],
        },
        {
          t: "h3",
          items: ["Monthly Living Cost Breakdown in France:"],
        },
        {
          t: "bullet",
          items: [
            "Accommodation: €300 – €700 / month (CROUS university dorms or private student rentals).",
            "Food & Daily Groceries: €200 – €350 / month.",
            "Local Transportation: €25 – €65 / month with student transit discount cards.",
            "Personal Expenses & Study Materials: €100 – €200 / month.",
            "CAF Rent Subsidy: International students are eligible to apply for CAF housing assistance, recovering €100 to €220 monthly on rent.",
          ],
        },
      ],
    },
    {
      slot: "timeline",
      eyebrow: "Application Steps",
      title: "Application & Admission Procedure for Dentistry in France",
      steps: [
        {
          title: "Research Dental Faculties",
          desc: "Identify French public universities offering odontologie through PASS or L.AS health access pathways.",
        },
        {
          title: "Achieve French Language Proficiency",
          desc: "Obtain DELF B2 or DALF C1 certificate to satisfy mandatory healthcare communication standards.",
        },
        {
          title: "Campus France India / DAP Registration",
          desc: "Register on the Études en France portal under the Demande d'Admission Préalable (DAP) procedure.",
        },
        {
          title: "Assemble Academic Credentials",
          desc: "Compile Class 10 and 12 marksheets, syllabus details, French language certificate, SOP, and CV.",
        },
        {
          title: "Get Certified Translations",
          desc: "Translate all non-French academic certificates into French through sworn, certified translators.",
        },
        {
          title: "Submit University Applications",
          desc: "Select preferred university health access tracks and submit the complete dossier before the national deadline.",
        },
        {
          title: "Attend Campus France Interview",
          desc: "Complete the academic evaluation interview at your regional Campus France India branch.",
        },
        {
          title: "Receive Admission Decision",
          desc: "Accept the provisional admission offer for the first year of health studies (PASS or L.AS).",
        },
        {
          title: "Secure French Student Visa (VLS-TS)",
          desc: "Submit your long-stay student visa application with proof of financial maintenance and accommodation.",
        },
        {
          title: "Finalize University Enrollment & CVEC",
          desc: "Pay the €103 CVEC campus fee, complete on-campus administrative enrollment, and begin your studies.",
        },
      ],
    },
    {
      slot: "careers",
      eyebrow: "Professional Practice",
      title: "Dentist Career Opportunities & Salary in France",
      groups: [
        {
          t: "p",
          items: [
            "Graduates holding the French Diplôme d'État de Docteur en Chirurgie Dentaire who register with the Ordre National des Chirurgiens-Dentistes can practice as licensed dental surgeons across private dental clinics, hospital dental departments, and community health centers.",
          ],
        },
        {
          t: "bullet",
          items: [
            "Associate General Dental Surgeon: €45,000 – €65,000 / year (early career)",
            "Experienced Dental Practitioner (Private Practice): €75,000 – €130,000+ / year",
            "Orthodontist / Oral Surgery Specialist: €90,000 – €160,000+ / year",
            "Hospital Dental Surgeon (Praticien Hospitalier): €50,000 – €85,000 / year",
            "Academic Researcher / University Lecturer: €42,000 – €68,000 / year",
          ],
        },
        {
          t: "p",
          items: [
            "Practice in India or Other Countries: Indian graduates returning to India must fulfill the licensing examination and registration regulations established by the Dental Council of India (DCI). International graduates can also leverage France's 2-year post-study work permit (APS/RECE) to establish their professional clinical careers.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How many years does it take to study dentistry in France?",
      a: "The standard route to the French state dental diploma (Diplôme d’État de Docteur en Chirurgie Dentaire) requires 6 years: 1 year of health gateway studies (PASS/L.AS), followed by 5 years of dental medical training. Additional specialist training (Internat) takes 3 to 4 more years.",
    },
    {
      q: "Can Indian students pursue dentistry in France after Class 12?",
      a: "Yes. Indian students with strong Class 12 science qualifications (Biology, Chemistry, Physics) can apply for the first year of health studies through the Campus France India Études en France DAP procedure, provided they possess DELF B2/DALF C1 French proficiency.",
    },
    {
      q: "Do I need NEET to study dentistry in France?",
      a: "French universities do not require NEET for admission; selection is based on your secondary school science record, French proficiency, and performance in the first-year PASS/L.AS health modules. However, if you plan to return to India to practice, you must check current Dental Council of India (DCI) regulatory mandates.",
    },
    {
      q: "Is dentistry taught in English in France?",
      a: "No. Undergraduate dental education and hospital patient clinical rotations in France are taught almost entirely in French. Applicants must demonstrate verified B2 or C1 level French proficiency before starting clinical training.",
    },
    {
      q: "How much does dental tuition cost in French public universities?",
      a: "Standard public university tuition under the French national reference fee schedule is approximately €178 per year for the first cycle and €255 per year for advanced dental cycles, plus the mandatory €103 annual CVEC contribution.",
    },
  ],
};

export default function DentistryAbroad() {
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
      seoPath="/study-abroad/france/dentistry"
    />
  );
}
