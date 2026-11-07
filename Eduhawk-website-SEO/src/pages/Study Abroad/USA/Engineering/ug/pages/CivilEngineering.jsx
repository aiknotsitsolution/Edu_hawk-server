import React from "react";
import { EngineeringBranchPage } from "../../../../../../component/CoursePageKit";
import heroImg from "../../../../../../Images/Abroad/USA/Engineering_UG/civil-engineering.webp";
import gatechImg from "../../../../../../Images/Abroad/USA/Engineering_UG/CivilEngineeringUG/Georgia Institute of Technology.webp";
import mitImg from "../../../../../../Images/Abroad/USA/Engineering_UG/CivilEngineeringUG/Massachusetts Institute of Technology.webp";
import purdueImg from "../../../../../../Images/Abroad/USA/Engineering_UG/CivilEngineeringUG/Purdue University.webp";
import ucbImg from "../../../../../../Images/Abroad/USA/Engineering_UG/CivilEngineeringUG/University of California, Berkeley.webp";
import illinoisImg from "../../../../../../Images/Abroad/USA/Engineering_UG/CivilEngineeringUG/University of Illinois Urbana-Champaign.webp";

const branch = {
  name: "Civil Engineering",
  slug: "civil-engineering",
  title: "Civil Engineering in USA for Indian Students | UG 2026 | Edu Hawk",
  description: "Study Bachelor's in Civil Engineering in the USA after Class 12. Eligibility, tuition fees, top universities, scholarships, careers and visa process for Indian students with Edu Hawk Worldwide.",
  keywords:
    "Civil Engineering in USA for Indian Students, Best Civil Engineering Universities in USA, Bachelor's in Civil Engineering in USA, Study Civil Engineering in USA After 12th, Civil Engineering Courses in USA, Civil Engineering Admission Requirements in USA, Civil Engineering Tuition Fees in USA, Civil Engineering Scholarships for Indian Students, Top Civil Engineering Colleges in America, Civil Engineering Eligibility for Indian Students, SAT Requirements for Civil Engineering in USA, English Language Tests for US Universities, Career Opportunities After Civil Engineering, Structural Engineering and Construction Management in USA, USA Student Visa for Civil Engineering Students",
  heroIntro: (
    <>
      <strong>Undergraduate Civil Engineering programs in the US</strong> combine
      fundamental engineering concepts with hands-on learning, analysis of modern
      infrastructure, and chances for intellectual inquiry.. Participants acquire
      competencies in planning, designing, constructing, and preserving built
      environments including structures, spans, thoroughfares, hydraulic
      installations, and mobility networks.
    </>
  ),
  heroSub:
    "Edu Hawk Worldwide helps you shortlist universities, understand admission requirements and plan your complete study-abroad journey.",

  whyLead: ["Primary advantages encompass:"],
  whyPoints: [
    "Utilization of state-of-the-art civil engineering laboratories and computational design environments.",
    "Experiential education via capstone initiatives, on-site investigations, and practical laboratory instruction.",
    "Familiarity with cutting-edge construction methodologies and infrastructure technological innovations.",
    "Avenues to investigate environmentally responsible construction practices and intelligent infrastructure systems.",
    "Educational pathways in structural mechanics, mobility systems, and ecological engineering.",
    "Career paths that include engineering innovation, technical consulting, infrastructure development, and construction management.",
  ],
  whyNote: [
    "Edu Hawk worldwide assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey..",
  ],

  coursesLead: [
    "International scholars from India may investigate multiple undergraduate degree pathways within civil engineering disciplines.",
    "Prevalent degree classifications include:",
  ],
  courses: [
    "Bachelor of Science in Civil Engineering",
    "Bachelor of Engineering in Civil Engineering",
    "Bachelor of Science in Civil and Environmental Engineering",
    "Bachelor of Science in Civil Engineering Technology",
    "Bachelor of Science in Construction Engineering",
  ],
  coursesNote: [
    "Program nomenclature and specialized concentrations differ across institutions. Prospective students must verify that their chosen curriculum aligns with their scholarly aspirations and vocational objectives.",
    "Edu Hawk worldwide can help students understand the available Civil Engineering education pathways and shortlist universities according to their qualifications and career goals.",
  ],

  duration: [
    "An undergraduate Civil Engineering degree within the **United States** typically necessitates **four years** of full-time study.",
    "The academic framework customarily encompasses mathematics, physics, engineering mechanics, structural investigation, construction material science, soil mechanics, transportation systems, hydrodynamics, and ecological engineering.",
    "Participants may additionally undertake experimental investigations, design-oriented projects, field-based research, professional internships, or alternating work-study arrangements.",
  ],

  eligibilityLead: [
    "Indian applicants are typically expected to satisfy the subsequent prerequisites:",
  ],
  eligibility: [
    "Successful completion of **Class 12 examinations** administered by an accredited educational institution.",
    "Proficiency in **mathematics and physics**, supplemented by any supplementary disciplines mandated by the target university.",
    "Academic performance that aligns with the institution's admission standards.",
    "Demonstrated competency in the English language where applicable.",
    "Standardized examination scores from the **SAT or ACT**, contingent upon institutional requirements.",
    "Official **academic records** and requisite supporting documentation for the application process.",
  ],

  englishLead: [
    "International candidates may be obligated to substantiate English language competency through an officially recognized assessment instrument",
    ".",
    "Widely recognized assessment instruments encompass:",
  ],
  englishTests: [
    "IELTS Academic",
    "TOEFL iBT",
    "PTE Academic",
    "Duolingo English Test, where recognized by the institution",
  ],
  englishNote: [
    "Minimum score thresholds differ across universities. Under specific conditions, some institutions may be excluded from this obligation.",
  ],

  testsNote: [
    "**SAT or ACT** score requirements are contingent upon the specific university and the particular admission cycle. Certain universities mandate or encourage submission of scores, whereas others implement test-optional admission policies.",
    "No universally mandated entrance examination exists across all **United States** universities for undergraduate Civil Engineering programs. Applicants must ascertain current assessment policies, application submission deadlines, and discipline-specific program requirements..",
  ],

  costsLead: [
    "The aggregate expenditure for pursuing an undergraduate degree in Civil Engineering within the **United States** fluctuates based on institutional selection, geographic location, and residential arrangements.",
    "Primary cost components encompass",
  ],
  costs: [
    "Tuition and institutional academic fees.",
    "Residential accommodation and meal provisions.",
    "Medical insurance coverage.",
    "Textbooks, experimental equipment, and educational materials.",
    "Regional transit and miscellaneous personal expenditures.",
    "Immigration documentation, airfare, and relocation expenses.",
  ],
  costsNote: [
    "Prospective students are advised to evaluate the comprehensive annual cost of attendance in its entirety rather than examining **tuition fees** in isolation. Prospective students should consult current fee schedules via institutional websites.",
  ],

  scholarshipsLead: [
    "Numerous American universities extend scholarship opportunities and monetary assistance to qualified international undergraduate applicants.",
    "Available mechanisms include:",
  ],
  scholarships: [
    "Academic merit-based scholarship awards.",
    "International student-focused scholarship programs.",
    "Institution-specific tuition reduction initiatives.",
    "Financial assistance contingent upon demonstrated financial necessity, accessible to international students meeting criteria.",
    "Financial support administered by qualifying external organizations.",
    "Prospective recipients should thoroughly examine qualification prerequisites, submission timelines, monetary awards, and conditions for continued funding. Financial aid provision remains contingent and is not universally assured.",
  ],
  scholarshipsNote: [],

  universitiesLead: [
    "The Best institutions merit comprehensive investigation for undergraduate Civil Engineering curricula or allied disciplinary programs:",
  ],
  universities: [
    {
      name: "University of California, Berkeley",
      location: "Berkeley, California",
      img: ucbImg,
    },
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, Massachusetts",
      img: mitImg,
    },
    {
      name: "Georgia Institute of Technology",
      location: "Atlanta, Georgia",
      img: gatechImg,
    },
    {
      name: "University of Illinois Urbana-Champaign",
      location: "Urbana-Champaign, Illinois",
      img: illinoisImg,
    },
    {
      name: "Purdue University",
      location: "West Lafayette, Indiana",
      img: purdueImg,
    },
  ],
  universitiesNote: [
    "Through each university's official institutional webpage, prospective applicants should verify the specific undergraduate degree awarded, institutional admission requirements, tuition costs, and curriculum accreditation status.",
  ],

  careerIntro:
    "Graduates possess the opportunity to pursue entry-level positions across construction, infrastructure, engineering design, transportation, and project support sectors. As a **STEM-designated degree program**, civil engineering graduates are eligible for up to **3 years of OPT (Optional Practical Training)** under an **F-1 student visa**.",
  careerLead: ["Prospective career positions encompass:"],
  careers: [
    "Junior Civil Engineer",
    "Structural Design Engineer",
    "Site Engineer",
    "Construction Engineer",
    "Transportation Engineer",
    "Geotechnical Engineering Assistant",
    "Environmental Engineering Assistant",
    "CAD or Civil Design Engineer",
    "Project Engineering Assistant",
    "Construction Planning Coordinator",
  ],
  careerNote: [
    "Some jobs require advanced training, more experience, or professional licensure.Career trajectories are contingent upon the graduate's competencies, employer specifications, and pertinent work authorization status.",
  ],

  visaLead: [
    "When admitted to a US university, Indian students usually have to go through the necessary **F-1 student visa** application process.",
    "Standard procedural steps include:",
  ],
  visaSteps: [
    "Investigate universities providing undergraduate Civil Engineering curricula.",
    "Verify Class 12 subject prerequisites and academic prerequisites.",
    "Examine English-language proficiency and standardized examination requirements.",
    "Compile transcripts, examination scores, and ancillary documentation.",
    "Submit applications in accordance with established deadlines.",
    "Assess admission determinations and financial obligations.",
    "Procure essential student documentation from the institution.",
    "Remit the applicable **SEVIS fee** and finalize visa application materials.",
    "Participate in the visa interview, when applicable, and arrange travel logistics following authorization.",
  ],
  visaNote: [
    "Visa authorization remains uncertain. Students must adhere to prevailing US governmental directives and institutional counsel.",
  ],

  faqs: [
    {
      q: "Are Indian students eligible to pursue undergraduate Civil Engineering studies in the United States following Class 12 completion?",
      a: "Yes, Indian students may apply subsequent to Class 12 provided they satisfy the institution's academic, curricular, and linguistic requirements.",
    },
    {
      q: "What duration is required for an undergraduate Civil Engineering degree in the United States?",
      a: "The majority of undergraduate Civil Engineering programs necessitate approximately four years for completion.",
    },
    {
      q: "Is the SAT compulsory for undergraduate Civil Engineering?",
      a: "No. SAT requirements vary by university and admission cycle. Some institutions are test-optional.",
    },
    {
      q: "Are scholarships available for Indian undergraduate students?",
      a: "Yes. Some universities offer merit-based scholarships and other financial support to eligible international students. Availability and award amounts vary.",
    },
    {
      q: "5, How can Edu Hawk worldwide help me study Civil Engineeing in abroad?",
      a: "Edu Hawk worldwide can help students explore suitable universities, understand admission requirements, organise application documents, and plan their study-abroad journey. Students should verify academic, financial, immigration, and licensing requirements with the relevant official authorities.",
    },
  ],
};

const imgDims = { w: 1280, h: 960 };
const heroAlt = `${branch.name} students in the USA`;
const coursesTitle = `${branch.name} Courses in the USA`;
const unisTitle = `Top Universities for ${branch.name} in the USA`;
const careersTitle = `Career Opportunities After ${branch.name}`;
const faqTitle = `Frequently Asked Questions — ${branch.name} in the USA`;

// UI is rendered by the shared polished course template (CoursePageKit).
// All content strings above are unchanged.
const CivilEngineeringUG = () => (
  <EngineeringBranchPage
    branch={branch}
    level="UG"
    heroImg={heroImg}
    imgDims={imgDims}
    seoPath="/study-abroad/usa/ug/civil-engineering"
    heroAlt={heroAlt}
    coursesTitle={coursesTitle}
    unisTitle={unisTitle}
    testsEyebrow="Standardised tests"
    testsTitle="SAT & Other Admission Tests"
    careersTitle={careersTitle}
    faqTitle={faqTitle}
  />
);

export default CivilEngineeringUG;
