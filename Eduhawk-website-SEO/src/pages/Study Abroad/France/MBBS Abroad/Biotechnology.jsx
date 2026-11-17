import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/Biotechnology/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/Biotechnology/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/Biotechnology/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/Biotechnology/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/Biotechnology/Sorbonne_University.webp";
import uniImg2 from "../../../../Images/Abroad/France/Biotechnology/Grenoble_Alpes_University_Grenoble_Franc.webp";
import uniImg3 from "../../../../Images/Abroad/France/Biotechnology/Universit_Paris.webp";
import cmsData from "../../../../data/study_abroad/france/biotechnology.json";

const pageData = {
  name: "Biotechnology in France",
  country: "France",
  slug: "biotechnology",
  title: "Study Biotechnology in France for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Biotechnology in France for Indian students: Top French universities, admission requirements, tuition fees (€255 – €3,950 / year public), scholarships, and 2-year post-study work visa.",
  keywords:
    "Study Biotechnology in France, Biotechnology Courses in France, Top Universities for Biotechnology in France, Bachelor’s Degree in Biotechnology in France, Master’s in Biotechnology in France, Cost of Studying Biotechnology in France, English-Taught Biotechnology Programmes in France, Pharmaceutical and Medical Biotechnology in France, Sorbonne Université Biotechnology Programmes, Biotechnology Student Visa Requirements for France, Biotechnology Jobs and Career Opportunities in France",
  introTitle: "BIOTECHNOLOGY IN FRANCE FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "France is a global leader in life sciences, biopharmaceutical research, and genetic engineering, offering international students world-class Bachelor's, Master's, and PhD programs in biotechnology with highly subsidized public tuition fees, cutting-edge laboratory training, and up to a 2-year post-study work visa (APS/RECE).",
  ],
  overview: [
    "Biotechnology represents the collective application of biology, chemistry, genetics, and advanced engineering technologies to develop transformative products and processes for healthcare, pharmaceutical manufacturing, sustainable agriculture, food production, and environmental protection. For ambitious students seeking world-class training in life sciences, genetic engineering, drug discovery, and industrial innovation, France offers an unparalleled academic and scientific destination.",
    "Studying Biotechnology in France equips students with rigorous scientific knowledge and extensive hands-on laboratory expertise required for flourishing careers in biomedical research, biopharmaceutical manufacturing, clinical diagnostics, and novel therapeutic development. French universities and Grandes Écoles maintain deep research ties with world-renowned research institutes such as INSERM, CNRS, and the Institut Pasteur, providing international students with unmatched exposure to live research projects and bioclusters across Paris, Lyon, and Grenoble.",
    "Key Advantages of Studying Biotechnology in France:\n• World-Class Research Opportunities: Work directly in cutting-edge laboratories exploring molecular biology, functional genomics, microbiology, immunology, cellular biology, and industrial bioprocessing.\n• Industry-Oriented Education: Benefit from integrated internships, corporate R&D partnerships, and work-study opportunities with leading European biotechnology and biopharma giants.\n• Healthcare & Biomedical Innovation: Master advanced therapeutic concepts including biologic medicines, recombinant vaccines, gene and cell therapies, and diagnostic technologies.\n• Diverse Specialisations: Tailor your academic trajectory across medical biotechnology, pharmaceutical biotechnology, industrial bioprocesses, agricultural innovations, and environmental biotechnology.\n• Subsidized Public Education: Access high-standard European higher education with government-regulated tuition fees (€178 to €3,950/year in public universities under the national reference regime).\n• Global Post-Study Pathways: Eligible master's graduates benefit from France's 2-year post-study residence authorization (APS / RECE) to launch international scientific careers.",
    "With dedicated overseas counselling from EduHawk Worldwide, students receive step-by-step guidance on university selection, Campus France / Études en France portal submissions, scholarship applications, and French student visa processing.",
  ],
  level: "Licence (BSc), Master of Science (MSc) & PhD in Biotechnology",
  crumb: "Life Sciences / Biotechnology",
  stats: [
    {
      label: "Degree Choices",
      value: "Licence (BSc), Master (MSc), PhD",
    },
    {
      label: "Course Duration",
      value: "3 Years (Licence) | 2 Years (Master)",
    },
    {
      label: "ECTS Credits",
      value: "180 ECTS (Licence) | 120 ECTS (Master)",
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Work Permit",
    },
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Academic Pathways",
      title: "Biotechnology Courses in France",
      groups: [
        {
          t: "p",
          items: [
            "Biotechnology education in France is structured under the European Bologna system across undergraduate (Licence), postgraduate (Master), and doctoral (Doctorat) levels. Whether students seek entry-level laboratory capabilities or advanced specialized research leadership, French institutions provide flexible, accredited study pathways.",
          ],
        },
        {
          t: "card",
          items: [
            {
              title: "Bachelor of Science in Biotechnology (Licence - 3 Years)",
              desc: "A French Licence in Biotechnology or Life Sciences spans 3 years (180 ECTS). Students build robust foundational skills across molecular and cellular biology, genetics, genomics, biochemistry, microbiology, laboratory analytical methods, and introductory bioinformatics. Graduates qualify for entry-level lab analyst roles or seamless progression into European Master's programs.",
            },
            {
              title: "Master of Science in Biotechnology (Master - 2 Years)",
              desc: "The standard French national Master's degree requires 2 years of study (120 ECTS credits) following a relevant scientific bachelor's degree. It combines advanced classroom instruction with a mandatory 6-month laboratory research internship or corporate R&D project, preparing students for specialist industry and research roles.",
            },
            {
              title: "Doctorate / PhD in Biotechnology (3 Years)",
              desc: "For research-focused scientists, French doctoral schools offer 3-year PhD programs funded through university contracts, CIFRE industrial research grants, or EU research fellowships. Research spans synthetic biology, gene therapy, immunotherapy, oncological drug discovery, and metabolic bioprocessing.",
            },
          ],
        },
        {
          t: "h3",
          items: ["Key Master's Specialisations Available in France:"],
        },
        {
          t: "bullet",
          items: [
            "Medical Biotechnology: Focuses on biomedical research, immunology, diagnostic kit development, and advanced therapeutic technologies.",
            "Pharmaceutical Biotechnology: Concentrates on biologic drugs, monoclonal antibodies, recombinant protein production, and downstream purification.",
            "Industrial Biotechnology: Explores large-scale microbial fermentation, industrial enzyme engineering, and sustainable biomanufacturing technology.",
            "Molecular Biotechnology: Covers advanced genetic engineering, CRISPR gene editing, cellular biology, and high-throughput laboratory research.",
            "Agricultural Biotechnology: Addresses plant genomics, crop disease resistance, sustainable agricultural innovations, and biofertilizers.",
            "Environmental Biotechnology: Applies biological systems for environmental bioremediation, wastewater treatment, bioenergy, and environmental monitoring.",
            "Bioprocess Engineering: Specializes in bioreactor design, scale-up protocols, process optimization, and industrial quality assurance.",
          ],
        },
      ],
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Biotechnology Universities in France",
      lead: [
        "France's world-ranked universities provide specialized master's tracks, state-of-the-art laboratory research infrastructure, and high-impact industry collaboration.",
      ],
      unis: [
        {
          name: "Sorbonne University – Paris",
          city: "Paris",
          state: "Île-de-France",
          desc: "Sorbonne Université offers elite studies in biotechnology through its prestigious Master’s in Molecular and Cellular Biology. The specialised R&D Biotech track prepares students for high-level careers in healthcare, pharmaceuticals, diagnostics, and cosmetic biotechnology.",
          img: uniImg1,
        },
        {
          name: "Université Grenoble Alpes (UGA)",
          city: "Grenoble",
          state: "Auvergne-Rhône-Alpes",
          desc: "Located in the heart of the French Alps, UGA is recognized for health engineering with dedicated tracks in Pharmaceutical Biotechnology and Biotechnology Management, integrating clinical research and industrial bioproduction.",
          img: uniImg2,
        },
        {
          name: "Université Paris-Saclay",
          city: "Paris-Saclay",
          state: "Île-de-France",
          desc: "A powerhouse in European scientific innovation, Paris-Saclay offers advanced pathways in Pharmaceutical Biotechnology and Innovative Therapies, focusing on biologic drugs, gene and cell therapies, and biomedical product engineering.",
          img: uniImg3,
        },
      ],
    },
    {
      slot: "requirements",
      eyebrow: "Admission Criteria",
      title: "Eligibility & Admission Requirements",
      groups: [
        {
          t: "p",
          items: [
            "Admission to French biotechnology programs depends on academic qualifications, scientific prerequisites, and language competency. Both English-taught and French-taught tracks are available across public universities and private institutes.",
          ],
        },
        {
          t: "h3",
          items: ["Academic Eligibility by Program Level:"],
        },
        {
          t: "bullet",
          items: [
            "Bachelor's / Licence Entry: Completion of 10+2 / Higher Secondary qualification equivalent to the French Baccalauréat, with strong grades in Biology, Chemistry, and Mathematics or Physics.",
            "Master's Entry: An accredited Bachelor's degree (3 or 4 years) in Biotechnology, Biology, Biochemistry, Microbiology, Life Sciences, or Pharmaceutical Sciences with minimum 60% – 65% aggregate.",
            "Doctoral / PhD Entry: A relevant Master's degree (MSc / MTech) with proven laboratory research experience, academic publications, and an approved research proposal or host laboratory agreement.",
          ],
        },
        {
          t: "h3",
          items: ["Language Proficiency Standards:"],
        },
        {
          t: "bullet",
          items: [
            "English-Taught Programs: IELTS Academic score of 6.5 (no band below 6.0) or TOEFL iBT 88 – 90. Some institutions accept university medium-of-instruction (MOI) certificates.",
            "French-Taught Programs: DELF B2 or DALF C1 certificate demonstrating proficient academic French comprehension and communication.",
          ],
        },
        {
          t: "h3",
          items: ["Essential Application Documents:"],
        },
        {
          t: "bullet",
          items: [
            "Official academic transcripts and degree certificates with certified French or English translations.",
            "Curriculum Vitae (CV) highlighting academic achievements, laboratory skills, and internship experience.",
            "Statement of Purpose (Lettre de Motivation) detailing scientific interests and career objectives.",
            "Two academic letters of recommendation from science professors or research mentors.",
            "Valid passport copy, passport-sized photographs, and Campus France registration dossier.",
          ],
        },
      ],
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying Biotechnology in France",
      groups: [
        {
          t: "p",
          items: [
            "France remains one of the most cost-effective study destinations globally due to substantial government subsidies for higher education. Public universities operate under the national reference tuition regime, keeping fees remarkably low compared to the US, UK, or Australia.",
          ],
        },
        {
          t: "table",
          headers: ["Study Level", "EU / EEA Tuition Fees", "Non-EU Tuition (National Reference)", "Typical Duration"],
          rows: [
            ["Licence / Bachelor", "€178 / year", "€2,902 / year", "3 Years (180 ECTS)"],
            ["Master's Degree", "€255 / year", "€3,950 / year", "2 Years (120 ECTS)"],
            ["Doctorate / PhD", "€398 / year", "€398 / year (subsidized for all)", "3 Years"],
            ["CVEC Student Contribution", "€103 / year", "€103 / year", "Mandatory Annual Fee"],
          ],
        },
        {
          t: "p",
          items: [
            "Note: Certain public universities grant non-EU tuition waivers reducing non-EU fees down to national EU reference rates (€255/year for Master's). Specialized private institutes and engineering schools (Grandes Écoles) may charge between €8,000 and €16,000 annually.",
          ],
        },
        {
          t: "h3",
          items: ["Estimated Monthly Living Expenses for Indian Students:"],
        },
        {
          t: "bullet",
          items: [
            "Paris & Île-de-France Region: €1,100 – €1,400 / month (covering accommodation, food, transport, and utilities).",
            "Regional Cities (Grenoble, Lyon, Montpellier, Toulouse): €750 – €950 / month.",
            "CAF Housing Subsidy: International students in France are eligible for CAF (Caisse d'Allocations Familiales) rent reimbursement, saving up to €150 – €250 per month on accommodation.",
            "Scholarship Opportunities: Indian applicants can apply for the prestigious Charpak Scholarship, Eiffel Excellence Fellowship, and university-specific merit waivers.",
          ],
        },
      ],
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Guide",
      title: "Application & Admission Process for France",
      steps: [
        {
          title: "Select Specialisation & Career Goal",
          desc: "Define your biotechnology track—such as medical biopharma, industrial fermentation, bioinformatics, or genomics.",
        },
        {
          title: "Shortlist Accredited Universities",
          desc: "Compare university curricula, laboratory facilities, faculty research papers, and industrial internship networks.",
        },
        {
          title: "Verify Academic Prerequisites",
          desc: "Ensure your secondary or bachelor's academic background satisfies the ECTS credit requirements of the host faculty.",
        },
        {
          title: "Determine the Official Portal",
          desc: "Check whether your course requires application via Études en France (EEF), Mon Master, or direct university portal.",
        },
        {
          title: "Prepare Certified Academic Dossier",
          desc: "Gather transcripts, syllabus descriptions, SOP, CV, recommendation letters, and certified translations.",
        },
        {
          title: "Complete Language Testing",
          desc: "Appear for IELTS/TOEFL for English-taught courses or DELF/DALF B2 for French-taught academic tracks.",
        },
        {
          title: "Submit Campus France EEF File",
          desc: "Complete the Études en France online file and attend the mandatory Campus France academic interview.",
        },
        {
          title: "Receive Letter of Acceptance",
          desc: "Secure your unconditional admission offer (Attestation d'Admission) from the university.",
        },
        {
          title: "Pay CVEC & Finalize Housing",
          desc: "Pay the €103 annual CVEC campus contribution fee and book student accommodation (CROUS or private).",
        },
        {
          title: "Obtain French Student Visa (VLS-TS)",
          desc: "Submit your Long-Stay Student Visa application through France-Visas and VFS Global, then travel to France.",
        },
      ],
    },
    {
      slot: "careers",
      eyebrow: "Employment Outlook",
      title: "Biotechnology Salary and Career Opportunities in France",
      groups: [
        {
          t: "p",
          items: [
            "France boasts one of Europe's largest biopharmaceutical ecosystems, housing multinational pharmaceutical giants, innovative biotech startups, and clinical research organizations (CROs). Master's graduates enjoy outstanding employment outcomes in clinical development, biomanufacturing, quality control, and scientific research.",
          ],
        },
        {
          t: "bullet",
          items: [
            "Bioprocess Development Associate / Engineer: €38,000 – €48,000 / year",
            "Quality Assurance (QA) & Quality Control (QC) Specialist: €35,000 – €45,000 / year",
            "R&D Scientist / Molecular Biologist: €40,000 – €52,000 / year",
            "Regulatory Affairs Associate: €38,000 – €50,000 / year",
            "Clinical Research Coordinator: €36,000 – €46,000 / year",
            "Bioinformatics Analyst: €42,000 – €55,000 / year",
          ],
        },
        {
          t: "p",
          items: [
            "International graduates from French master's programs can apply for the 2-year APS / RECE post-study work authorization, allowing them to work full-time in France and transition to a European Talent Passport (Passeport Talent) or standard salaried work visa.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can international students study biotechnology in France?",
      a: "Yes. International students from India and across the world can apply to accredited undergraduate, master's, and doctoral biotechnology programs in France provided they satisfy the academic, language, and visa prerequisites.",
    },
    {
      q: "How long does it take to study biotechnology in France?",
      a: "A Bachelor's (Licence) degree in France takes 3 years (180 ECTS). A Master's degree requires 2 additional years (120 ECTS), and a PhD generally takes 3 years of focused doctoral research.",
    },
    {
      q: "Is IELTS required for studying biotechnology in France?",
      a: "For English-taught biotechnology programs, universities typically require an IELTS score of 6.5 or equivalent TOEFL iBT. For French-taught programs, DELF/DALF B2 is required instead of IELTS.",
    },
    {
      q: "What is the cost of studying biotechnology in France for non-EU students?",
      a: "Under the national reference tuition regime in public universities, annual tuition for non-EU students is €2,902 for Licence and €3,950 for Master's programs, plus €103/year for CVEC. Many universities also grant partial waivers matching EU rates (€255/year).",
    },
    {
      q: "How can EduHawk Worldwide help with my France biotechnology admission?",
      a: "EduHawk Worldwide offers complete assistance including university shortlisting, SOP and CV optimization, Études en France / Campus France portal processing, scholarship applications, housing guidance, and French student visa filing.",
    },
  ],
};

export default function Biotechnology() {
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
      page={pageData}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/france/biotechnology"
    />
  );
}
