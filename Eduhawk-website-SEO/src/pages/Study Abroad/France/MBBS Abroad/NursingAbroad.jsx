import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Nursing/University_1.webp";
import uniImg2 from "../../../../Images/Abroad/France/Nursing/IFSI_Lille_University_Hospital_CHU_de_Li.webp";
import uniImg3 from "../../../../Images/Abroad/France/Nursing/IFSI_Pellegrin_Bordeaux_University_Hospi.webp";
import cmsData from "../../../../data/study_abroad/france/nursing.json";

const page = {
  name: "Nursing in France",
  country: "France",
  slug: "nursing",
  title: "Study Nursing in France for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Nursing in France for Indian students: 3-year Diplôme d'État d'Infirmier (DEI), top IFSI nursing institutes, hospital rotations, tuition fees, and nurse licensing.",
  keywords:
    "Study Nursing in France, Nursing Courses in France, Top Nursing Colleges in France, IFSI Nursing Schools France, Diplôme d'État d'Infirmier, Nursing Eligibility France, Nursing Tuition Fees in France 2026–2027, Nursing Jobs and Salary in France, Nurse Visa Requirements France",
  introTitle: "STUDY NURSING IN FRANCE FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "France delivers internationally acclaimed nursing education through its 3-year State Diploma in Nursing (Diplôme d'État d'Infirmier - DEI), granting 180 ECTS credits at licence level with immersive hospital rotations across Europe's leading healthcare networks at highly subsidized tuition rates.",
  ],
  overview: [
    "International students pursuing nursing education in France benefit from hands-on clinical training, high healthcare standards, and a curriculum recognized across the European Union. Nursing education in France is organized within university-affiliated nursing training institutes known as IFSI (Instituts de Formation en Soins Infirmiers), working in close integration with major university teaching hospitals (Centres Hospitaliers Universitaires - CHU).",
    "The primary nursing qualification is the Diplôme d'État d'Infirmier (DEI), a 3-year professional degree conferring 180 ECTS credits, placing it at the academic rank of a French university Licence (Bachelor's degree). Throughout the 3 years, theoretical lectures in medical sciences, pharmacology, and nursing care are equally balanced with 2,100 hours of clinical hospital placements across medicine, surgery, mental health, and community home care.",
    "Key Advantages of Studying Nursing in France:\n• State-Recognized Professional Credential: The Diplôme d'État d'Infirmier is a state-guaranteed healthcare license authorizing practice across all French and EU healthcare institutions.\n• Immersive Hospital Placements: Complete mandatory clinical rotations in emergency medicine, intensive care, oncology, pediatrics, and surgical suites.\n• Highly Affordable Education: Public university registration rates remain remarkably low (€178/year under the national reference tuition schedule for Licence-level studies).\n• Specialisation & Postgraduate Horizons: Qualified nurses can advance into specialized nursing tracks including Nurse Anesthetist (IADE), Operating Room Nurse (IBODE), Pediatric Nurse (Puéricultrice), or Master's-level Advanced Practice Nurse (IPA).\n• High Employment Demand: France faces continuous demand for skilled healthcare practitioners, offering excellent clinical job stability and post-study career progression.",
    "Through EduHawk Worldwide, Indian students receive professional overseas counselling covering prerequisite verification, French language certification pathways (DELF B2), application dossier assembly, Campus France interview preparation, and French student visa processing.",
  ],
  level: "Diplôme d'État d'Infirmier - DEI (State Diploma in Nursing - 3 Years / 180 ECTS)",
  crumb: "Health Sciences / Nursing",
  stats: [
    {
      label: "Degree Awarded",
      value: "Diplôme d'État d'Infirmier (DEI)",
    },
    {
      label: "Course Duration",
      value: "3 Years (6 Semesters / 180 ECTS)",
    },
    {
      label: "Clinical Rotations",
      value: "2,100 Hours of Supervised Practice",
    },
    {
      label: "Language",
      value: "French (B2 Level Required)",
    },
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Program Architecture",
      title: "Nursing Curriculum & Training Framework in France",
      groups: [
        {
          t: "p",
          items: [
            "Nursing studies in France are delivered through accredited IFSI institutes affiliated with regional university medical faculties. The curriculum is divided equally into 2,100 hours of theoretical instruction and 2,100 hours of clinical hospital internships over 3 years.",
          ],
        },
        {
          t: "card",
          items: [
            {
              title: "Year 1: Foundational Sciences & Fundamental Nursing Care",
              desc: "Focuses on human anatomy, physiology, cellular biology, pharmacology foundations, hygiene standards, patient psychology, ethics, and basic clinical nursing care protocols, accompanied by 15 weeks of hospital internships.",
            },
            {
              title: "Year 2: Clinical Pathology & Acute Care Nursing",
              desc: "Covers medical-surgical pathologies, infectious diseases, emergency interventions, mental health nursing, and therapeutic administration, complemented by 20 weeks of specialized hospital ward rotations.",
            },
            {
              title: "Year 3: Complex Care, Leadership & Final Thesis",
              desc: "Centers on critical care, intensive care unit protocols, palliative care, health team management, and completion of the mandatory professional nursing research dissertation (Mémoire de fin d'études).",
            },
          ],
        },
        {
          t: "h3",
          items: ["Specialized Nursing Pathways After Graduation:"],
        },
        {
          t: "bullet",
          items: [
            "Nurse Anesthetist (IADE - Infirmier Anesthésiste): 2-year master's-level training for surgical and critical anesthesia care.",
            "Operating Room Nurse (IBODE - Infirmier de Bloc Opératoire): Specialized training in sterile surgical instrumentation and robotic surgery support.",
            "Pediatric Nurse (Puéricultrice): Focused specialty in neonatal intensive care, pediatric hospital care, and maternal-infant health.",
            "Advanced Practice Nurse (IPA - Infirmier en Pratique Avancée): University Master's degree granting clinical autonomy in chronic disease management and oncology.",
          ],
        },
      ],
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Nursing Colleges & IFSI Institutes in France",
      lead: [
        "France's premier nursing training institutes are attached to major university hospital networks (CHU), providing state-of-the-art simulation labs and immediate clinical immersion.",
      ],
      unis: [
        {
          name: "AP-HP Institutes of Nursing Training, Paris",
          city: "Paris",
          state: "Île-de-France",
          desc: "Assistance Publique – Hôpitaux de Paris (AP-HP) is Europe's largest hospital trust. Its affiliated IFSI institutes train nurses across prestigious teaching hospitals including Pitié-Salpêtrière, Necker-Enfants Malades, and Saint-Louis, offering unmatched clinical case diversity.",
          img: uniImg1,
        },
        {
          name: "IFSI, Lille University Hospital (CHU de Lille)",
          city: "Lille",
          state: "Hauts-de-France",
          desc: "Attached to the renowned Lille University Hospital Center, this IFSI offers comprehensive clinical education featuring advanced simulation medical units, pediatric hospital rotations, and strong research integration with the University of Lille.",
          img: uniImg2,
        },
        {
          name: "IFSI Pellegrin, Bordeaux University Hospital",
          city: "Bordeaux",
          state: "Nouvelle-Aquitaine",
          desc: "Located on the extensive Pellegrin hospital campus of CHU de Bordeaux, this institute provides world-class instruction in emergency nursing, trauma care, intensive care rotations, and community health nursing.",
          img: uniImg3,
        },
      ],
    },
    {
      slot: "requirements",
      eyebrow: "Admission Criteria",
      title: "Eligibility to Study Nursing in France",
      groups: [
        {
          t: "p",
          items: [
            "Admission to French IFSI institutes is based on secondary school academic credentials, French language proficiency, and meeting mandatory healthcare immunization criteria.",
          ],
        },
        {
          t: "h3",
          items: ["Academic Qualifications for Indian Students:"],
        },
        {
          t: "bullet",
          items: [
            "Completion of Class 12 / Higher Secondary Education equivalent to the French Baccalauréat from recognized Indian boards (CBSE, ISC, or State Boards).",
            "Strong academic preparation in science subjects, with coursework in Biology, Chemistry, and Physics or Mathematics.",
            "Submission of detailed secondary marksheets with certified French translations by sworn translators.",
          ],
        },
        {
          t: "h3",
          items: ["Mandatory French Language Proficiency:"],
        },
        {
          t: "bullet",
          items: [
            "Because clinical hospital training and communication with French-speaking patients and doctors are central to the degree, applicants must possess a certified French language diploma: DELF B2 (minimum) or DALF C1 / TCF B2.",
            "Fluency in both written and spoken medical French is required before clinical placements commence.",
          ],
        },
        {
          t: "h3",
          items: ["Medical & Health Clearances:"],
        },
        {
          t: "bullet",
          items: [
            "Proof of up-to-date mandatory immunizations for healthcare trainees in France: Hepatitis B (with antibody titer proof), DTP (Diphtheria, Tetanus, Polio), and tuberculosis screening (BCG/Mantoux).",
            "Medical certificate of physical and psychological aptitude for nursing issued by an authorized physician.",
          ],
        },
      ],
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Nursing in France",
      groups: [
        {
          t: "p",
          items: [
            "Nursing education in France is highly cost-effective compared to nursing programs in English-speaking destinations like the UK, Australia, or USA. The French government heavily subsidizes public healthcare training.",
          ],
        },
        {
          t: "table",
          headers: ["Expense Category", "Standard Cost / Year", "Coverage & Frequency"],
          rows: [
            ["Public University Registration (Licence Level)", "€178 / year", "Annual Academic Registration"],
            ["IFSI Institute Training Fees", "€0 – €2,500 / year", "Varies by Regional Council Subsidies"],
            ["CVEC Student Life Contribution", "€103 / year", "Mandatory Campus Health & Amenities"],
            ["Medical Equipment & Uniforms", "€150 – €300 (one-time)", "Stethoscopes, Nursing Scrubs, Badges"],
          ],
        },
        {
          t: "p",
          items: [
            "Note: Some regional councils cover institute operating training costs for enrolled international students, while others charge moderate pedagogical fees. Students receive minor monthly indemnities during clinical hospital internship rotations in Years 2 and 3.",
          ],
        },
        {
          t: "h3",
          items: ["Estimated Monthly Living Costs in France:"],
        },
        {
          t: "bullet",
          items: [
            "Accommodation: €300 – €700 / month (CROUS student housing or private rentals).",
            "Food & Daily Living: €200 – €350 / month.",
            "Local Transportation: €25 – €65 / month with student travel discounts.",
            "Health Insurance: Fully covered under French Social Security (Assurance Maladie) at zero cost for international students.",
            "CAF Rent Subsidy: Students can receive CAF housing assistance, subsidizing between €100 and €220 of monthly accommodation costs.",
          ],
        },
      ],
    },
    {
      slot: "timeline",
      eyebrow: "Application Steps",
      title: "Application & Admission Procedure for Nursing in France",
      steps: [
        {
          title: "Select Accredited IFSI Institutes",
          desc: "Compare nursing training institutes attached to major teaching hospitals (CHU) across French regions.",
        },
        {
          title: "Achieve DELF B2 Certification",
          desc: "Attain French language proficiency diploma (DELF B2 or DALF C1) required for healthcare training.",
        },
        {
          title: "Prepare Academic Dossier",
          desc: "Assemble Class 10 and 12 marksheets, syllabus documentation, CV, and detailed motivation letter.",
        },
        {
          title: "Get Certified French Translations",
          desc: "Obtain sworn translations of all academic transcripts and identity documents into French.",
        },
        {
          title: "Register on Campus France / Parcoursup",
          desc: "Submit your application through the appropriate international portal or direct IFSI international admission path.",
        },
        {
          title: "Complete Admission Evaluation",
          desc: "Participate in the institute's motivation interview or academic dossier review if requested.",
        },
        {
          title: "Receive Admission Letter",
          desc: "Secure your official Attestation d'Admission from the chosen nursing training institute.",
        },
        {
          title: "Complete Health & Vaccine Dossier",
          desc: "Fulfill mandatory medical certifications including Hepatitis B antibody titer and fitness certificates.",
        },
        {
          title: "Pay CVEC & Book Accommodation",
          desc: "Pay the €103 annual CVEC fee and confirm your student lodging (CROUS or private residence).",
        },
        {
          title: "Obtain Long-Stay Visa (VLS-TS)",
          desc: "Finalize your French student visa with France-Visas and VFS Global, then travel to France.",
        },
      ],
    },
    {
      slot: "careers",
      eyebrow: "Employment Outlook",
      title: "Nursing Salaries & Career Opportunities in France",
      groups: [
        {
          t: "p",
          items: [
            "Upon earning the French State Diploma in Nursing (DEI) and registering with the Ordre National des Infirmiers (ONI), graduates enjoy guaranteed employability across French and European healthcare systems.",
          ],
        },
        {
          t: "bullet",
          items: [
            "Staff Nurse (Infirmier en Soins Généraux - Public Hospital): €28,000 – €36,000 / year (starting grade)",
            "Experienced Clinical Staff Nurse: €35,000 – €44,000 / year",
            "Specialized Nurse (Operating Room / Anesthesia / Pediatrics): €40,000 – €55,000 / year",
            "Advanced Practice Nurse (IPA): €45,000 – €60,000 / year",
            "Private Duty / Independent Nurse (Infirmier Libéral): €45,000 – €70,000+ / year",
          ],
        },
        {
          t: "p",
          items: [
            "Practicing in India or Globally: Graduates returning to India should verify current recognition and licensing requirements with the Indian Nursing Council (INC). International graduates also have access to France's 2-year post-study residence permit (APS / RECE) to work professionally in French hospitals.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does nursing training last in France?",
      a: "The standard initial nursing program in France takes 3 years (6 semesters) and leads to the state-recognized Diplôme d'État d'Infirmier (DEI), granting 180 ECTS credits equivalent to a university Licence degree.",
    },
    {
      q: "Can international students study nursing in France?",
      a: "Yes. International students from India and across the globe are eligible to apply to accredited IFSI nursing institutes, provided they meet academic prerequisites (Class 12 science) and demonstrate required French language skills.",
    },
    {
      q: "Is French language fluency mandatory for studying nursing in France?",
      a: "Yes. Because classroom lectures, patient communications, and hospital clinical placements are conducted entirely in French, all IFSI institutes require verified French proficiency at DELF B2 level (minimum) or DALF C1.",
    },
    {
      q: "How much does nursing education cost in France?",
      a: "Public university registration for the Licence-level nursing program is approximately €178 per year under the national reference tuition regime, plus €103/year for CVEC. Some IFSI institutes may charge moderate regional pedagogical training fees.",
    },
    {
      q: "Can international graduates work as nurses in France after graduation?",
      a: "Yes. Graduates holding the Diplôme d'État d'Infirmier (DEI) who register with the Ordre National des Infirmiers (ONI) can apply for hospital employment and obtain French professional work authorization (or 2-year APS/RECE post-study visa).",
    },
  ],
};

export default function NursingAbroad() {
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
      seoPath="/study-abroad/france/nursing"
    />
  );
}
