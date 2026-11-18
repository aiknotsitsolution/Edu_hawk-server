import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/PublicHealth/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/PublicHealth/Bielefeld_University_is_well_known.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/PublicHealth/The_University_of_Bremen_provides_a.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/PublicHealth/Opportunities_in_epidemiology_medic.webp";
import uniImg4 from "../../../../Images/Abroad/Germany/PublicHealth/Research_opportunities_in_health_sc.webp";
import cmsData from "../../../../data/study_abroad/germany/public_health.json";

const page = {
  name: "Public Health in Germany",
  country: "Germany",
  slug: "public-health",
  title: "Public Health in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Master of Public Health (MPH) and M.Sc. Public Health in Germany: English-taught programs, top universities, tuition-free education, admission eligibility, and global career opportunities.",
  keywords:
    "Study Public Health in Germany for Indian Students, Public Health Courses in Germany for International Students, Bachelor's in Public Health in Germany, Master of Public Health (MPH) in Germany, MSc Public Health in Germany, Best Universities for Public Health in Germany, Public Health Eligibility Requirements in Germany, English-Taught Public Health Courses in Germany, German Language Requirements for Public Health in Germany, Public Health Admission Requirements in Germany, Public Health Tuition Fees in Germany, Cost of Living for Public Health Students in Germany, Documents Required to Study Public Health in Germany",
  introTitle: "Study Public Health in Germany",
  heroParas: [
    "Germany is a premier European destination for studying Public Health and Health Sciences, offering globally accredited Master of Public Health (MPH) and M.Sc. programs, extensive English-medium coursework, tuition-free public education, and direct research integration with top international health organizations like the WHO and Robert Koch Institute."
  ],
  overview: [
    "**Key advantages of studying public health in Germany:**",
    "* **World-Class Epidemiological Infrastructure:** Learn within Germany's robust national healthcare system alongside prestigious bodies like the Robert Koch Institute (RKI).",
    "* **Extensive English-Taught Offerings:** Numerous postgraduate degrees (MPH, M.Sc. Global Health, M.Sc. Epidemiology) are taught 100% in English.",
    "* **Zero Tuition Fees:** Public universities charge zero general tuition fees (nominal semester contribution of €150–€350 includes public transport).",
    "* **Multidisciplinary Curricula:** Deep coverage of biostatistics, health economics, environmental health, disease prevention, and digital healthcare technologies.",
    "* **Global Career Trajectories:** High demand across WHO centers, European health agencies, multinational NGOs, pharmaceutical clinical trial consultancies, and health ministries."
  ],
  level: "Master of Public Health (MPH) / M.Sc. / B.Sc. / Ph.D.",
  crumb: "Health Sciences / Public Health",
  stats: [
    {
      label: "Degree System",
      value: "MPH / M.Sc. (1–2 Yrs) | B.Sc. (3 Yrs) | Ph.D."
    },
    {
      label: "Public Uni Tuition",
      value: "€0 / Free (Semester fee €150–€360)"
    },
    {
      label: "Teaching Medium",
      value: "English (Master's/MPH) & German"
    },
    {
      label: "Post-Study Work Visa",
      value: "18-Month Jobseeker Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Germany",
      title: "Why Study Public Health in Germany?",
      groups: [
        {
          t: "p",
          items: [
            "Germany maintains one of the world's most resilient and sophisticated universal healthcare systems, making it an extraordinary living laboratory for studying health policy, epidemiology, disease prevention, and global health economics.",
            "International students benefit from rigorous empirical research methodologies, cross-disciplinary health analytics, and practical internships embedded in public health departments (*Gesundheitsämter*), university medical centers, and international research alliances."
          ]
        },
        {
          t: "points",
          title: "Major Benefits for International Scholars",
          items: [
            "**Tuition-Free Public Higher Education:** Nearly all public universities charge no general tuition fees, democratizing elite European education.",
            "**International English Degrees:** Widely available English-taught Master of Public Health (MPH), M.Sc. Global Health, and M.Sc. Epidemiology programs.",
            "**Leading Research Institutes:** Close ties with the Robert Koch Institute (RKI), German Cancer Research Center (DKFZ), and WHO Hub for Pandemic and Epidemic Intelligence in Berlin.",
            "**18-Month Post-Study Visa:** Outstanding post-study residence rights allowing graduates to secure health analytics, consulting, and administrative positions across Germany and the EU."
          ]
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Academic Pathways",
      title: "German Public Health Degree Programs",
      text: "Students can choose from undergraduate foundations to specialized postgraduate degrees:",
      cards: [
        {
          badge: "Postgraduate Degree",
          title: "Master of Public Health (MPH)",
          desc: "A 1- to 2-year professional Master's curriculum designed for medical doctors, health administrators, and social scientists focusing on population health, health systems management, and leadership. Often offered entirely in English."
        },
        {
          badge: "Research Master",
          title: "M.Sc. in Epidemiology / Global Health",
          desc: "Specialized scientific track concentrating on infectious and non-communicable disease surveillance, quantitative statistical modeling, clinical trial methodologies, and international health disparities."
        },
        {
          badge: "Economics & Policy",
          title: "M.Sc. in Health Economics & Management",
          desc: "Interdisciplinary degree covering healthcare financing, resource allocation, health technology assessment (HTA), and hospital operations in public and private medical sectors."
        },
        {
          badge: "Undergraduate Degree",
          title: "B.Sc. in Public Health & Health Sciences",
          desc: "A 3- to 3.5-year foundational Bachelor's program (primarily taught in German) covering human biology, epidemiology, healthcare sociology, and health communication."
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities for Public Health in Germany",
      text: "Explore Germany's premier universities renowned for public health and biomedical sciences:",
      cards: [
        {
          name: "Bielefeld University",
          city: "Bielefeld, North Rhine-Westphalia",
          qsRank: "Top Health Sciences Faculty",
          tuition: "€0 / Free (Semester fee €320/sem)",
          programs: "B.Sc. Health Communication, M.Sc. Public Health, European MPH",
          highlights:
            "Home to Germany's first independent School of Public Health, recognized globally as a pioneering WHO Collaborating Center for health literacy, epidemiology, and health administration.",
          link: "https://www.uni-bielefeld.de/",
          img: uniImg1
        },
        {
          name: "The University of Bremen",
          city: "Bremen",
          qsRank: "Top Research Hub in Health Sciences",
          tuition: "€0 / Free (Semester fee €380/sem)",
          programs: "B.Sc. Public Health, M.Sc. Public Health, M.Sc. Epidemiology",
          highlights:
            "Houses the Institute for Public Health and Nursing Research (IPP) and the Leibniz Institute for Prevention Research and Epidemiology (BIPS), driving national cohort studies.",
          link: "https://www.uni-bremen.de/",
          img: uniImg2
        },
        {
          name: "Heidelberg University",
          city: "Heidelberg, Baden-Württemberg",
          qsRank: "Germany #1 / QS World #84",
          tuition: "€1,500/sem (Non-EU) + €180 semester fee",
          programs: "M.Sc. International Health (tropEd accredited), M.Sc. Global Health",
          highlights:
            "Heidelberg Institute of Global Health (HIGH) is one of the world's most prestigious centers for tropical medicine, maternal health, and epidemiological intervention research in developing nations.",
          link: "https://www.uni-heidelberg.de/",
          img: uniImg3
        },
        {
          name: "Technical University of Munich (TUM)",
          city: "Munich, Bavaria",
          qsRank: "Germany #1 Technical / QS World #28",
          tuition: "€0–€3,000/sem + €150 semester fee",
          programs: "M.Sc. Health Science, M.Sc. Sport & Exercise Science",
          highlights:
            "Excellence University offering elite interdisciplinary health research with strong links to biomedical informatics, public health monitoring, and artificial intelligence in medicine.",
          link: "https://www.tum.de/",
          img: uniImg4
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Admissions Criteria",
      title: "Eligibility & Language Requirements",
      text: "Admission requirements depend on the qualification level and language of instruction:",
      items: [
        "**Master's / MPH Programs:** Recognized Bachelor's degree (3 or 4 years) in public health, medicine, nursing, pharmacy, biology, life sciences, statistics, or social sciences from an accredited university.",
        "**Work Experience:** Professional MPH tracks often require 1 to 2 years of relevant post-degree work experience in clinical care, public health agencies, or healthcare administration.",
        "**English Language Proficiency:** For English-taught programs, an IELTS score of 6.5–7.0+ or TOEFL iBT of 90–100+ is mandatory.",
        "**German Language Proficiency:** For German-taught degrees, certified B2 or C1 proficiency (TestDaF 4x4, Goethe C1, or DSH-2) is required.",
        "**APS Verification Certificate:** Official digital verification certificate issued by the Academic Evaluation Centre (APS India) required for Indian applicants prior to visa processing.",
        "**Statement of Purpose & CV:** Well-articulated Letter of Motivation explaining professional vision in public health, accompanied by an updated academic CV and 2 letters of recommendation."
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Cost of Education",
      title: "Tuition Fees & Cost of Living",
      text: "Germany offers unmatched affordability for world-class public health education:",
      items: [
        "**Zero General Tuition (€0):** The vast majority of public universities in Germany charge no general tuition fees for undergraduate and master's degrees.",
        "**Baden-Württemberg Non-EU Tuition (€1,500/semester):** Applicable only at public institutions within the state of Baden-Württemberg (e.g., Heidelberg University).",
        "**Semester Contribution (€150–€380/semester):** Mandatory student fee covering administrative services, student unions, and a regional public transportation ticket (*Semesterticket*).",
        "**Monthly Living Costs (€900–€1,300/month):** Covers student accommodation (dormitories or shared apartments), food, statutory student health insurance (~€125/month), books, and leisure.",
        "**German Blocked Account (Sperrkonto):** Requirement of €11,904 per year deposited in a recognized escrow blocked account to secure the German national student visa."
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Roadmap",
      title: "Admission & Visa Timeline for International Students",
      text: "Follow this systematic 10-step guide to secure admission to a German public health program:",
      steps: [
        {
          num: "01",
          title: "Select Course & Teaching Medium",
          desc: "Choose between an English-taught MPH / M.Sc. in Global Health or a German-medium health science degree."
        },
        {
          num: "02",
          title: "Language Certification",
          desc: "Obtain standardized English test scores (IELTS/TOEFL) or German language credentials (TestDaF/Goethe) matching university entry requirements."
        },
        {
          num: "03",
          title: "APS Verification Certificate",
          desc: "Submit academic transcripts, degrees, and certificates to APS India to obtain the mandatory digital APS verification."
        },
        {
          num: "04",
          title: "Document Compilation",
          desc: "Prepare certified translations, Academic CV, Statement of Purpose, and letters of recommendation from academic or clinical supervisors."
        },
        {
          num: "05",
          title: "Application Submission",
          desc: "Submit formal applications via uni-assist or directly through university online portals before the semester deadlines (July 15 for Winter, January 15 for Summer)."
        },
        {
          num: "06",
          title: "Interview / Assessment",
          desc: "Participate in online academic interviews or complete subject assessments if required by the university admissions committee."
        },
        {
          num: "07",
          title: "Admission Letter Acceptance",
          desc: "Receive the official university offer letter (*Zulassungsbescheid*) and confirm your enrollment place."
        },
        {
          num: "08",
          title: "Blocked Account & Insurance",
          desc: "Deposit €11,904 into a German blocked account (Expatrio, Fintiba, or Coracle) and obtain mandatory statutory student health insurance."
        },
        {
          num: "09",
          title: "National Student Visa Application",
          desc: "Book a visa appointment at VFS / German Consulate, attend the biometric interview, and receive your National Student Visa (Subtype D)."
        },
        {
          num: "10",
          title: "Enrollment & Master's Thesis",
          desc: "Complete coursework, participate in empirical public health field internships, defend your Master's thesis, and transition to the 18-month jobseeker visa."
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Career Pathways",
      title: "Career Opportunities & Salary in Germany",
      text: "Public Health graduates possess highly sought-after analytical, managerial, and policy competencies:",
      cards: [
        {
          badge: "Policy & Governance",
          title: "Health Policy & Programme Officer",
          desc: "Design and implement disease prevention frameworks and health promotion strategies in national health ministries and municipal health offices. Starting salary: €42,000–€55,000/year (tariff TVöD)."
        },
        {
          badge: "Data & Research",
          title: "Epidemiologist & Biostatistician",
          desc: "Conduct clinical trial data modeling, outbreak investigations, and demographic health analytics at research centers, pharmaceutical companies, and CROs. Average salary: €52,000–€70,000/year."
        },
        {
          badge: "Global Agencies",
          title: "Global Health Project Coordinator",
          desc: "Direct international development programs, maternal-child health campaigns, and epidemic response initiatives with the WHO, UNICEF, GIZ, and global NGOs. Annual salary: €55,000–€78,000/year."
        },
        {
          badge: "Corporate & Consulting",
          title: "Health Economics & Market Access Consultant",
          desc: "Evaluate health technology assessments (HTA), cost-effectiveness of new pharmaceuticals, and pricing reimbursement for multinational healthcare consultancies. Senior salary: €70,000–€95,000+/year."
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Checklist",
      title: "Documents Required for Application & Visa",
      text: "Assemble the following verified credentials for university applications and the German embassy:",
      items: [
        "Valid international passport with at least 12 months validity.",
        "Official undergraduate degree certificates and complete semester mark sheets.",
        "Official digital APS Verification Certificate from APS India.",
        "English language test report (IELTS 6.5–7.0+ or TOEFL iBT 90+).",
        "German language certificate (if applying for German-taught modules).",
        "Detailed Academic Curriculum Vitae (Tabellarischer Lebenslauf).",
        "Well-structured Statement of Purpose (Letter of Motivation).",
        "Two letters of academic or professional recommendation.",
        "Documented proof of relevant healthcare or research experience (if applicable).",
        "German Blocked Account confirmation (€11,904) and statutory health insurance coverage."
      ]
    }
  ],
  faqs: [
    {
      q: "Can international students study Public Health in English in Germany?",
      a: "Yes. Germany offers numerous English-taught postgraduate degrees in public health, including Master of Public Health (MPH), M.Sc. in Global Health, and M.Sc. in Epidemiology. However, most undergraduate Bachelor's degrees in health sciences are taught in German."
    },
    {
      q: "What is the typical duration of public health degrees in Germany?",
      a: "A Master's degree or MPH typically takes 1 to 2 years (2 to 4 semesters), while a Bachelor's degree takes 3 to 3.5 years (6 to 7 semesters). Doctoral programs (Ph.D. or Dr. P.H.) usually require 3 to 5 years of independent research."
    },
    {
      q: "Are public health courses in Germany tuition-free?",
      a: "Yes. Most public universities in Germany charge no general tuition fees for domestic and international students alike. Students pay only a nominal semester contribution (€150 to €360 per semester) which includes campus services and regional public transport. (Only the state of Baden-Württemberg charges non-EU students €1,500/semester)."
    },
    {
      q: "Can Indian medical graduates (MBBS, BDS, BAMS, BHMS) apply for an MPH in Germany?",
      a: "Yes. Indian medical and dental graduates (MBBS, BDS, BAMS, BHMS, BPT, B.Pharm) are eligible to apply for MPH and M.Sc. Public Health programs in Germany. Their clinical backgrounds are highly valued in epidemiology, global health, and clinical trial research."
    },
    {
      q: "What career opportunities are available after completing an MPH in Germany?",
      a: "Graduates can work as epidemiologists, health policy advisors, biostatisticians, health economists, and global health project coordinators in government health departments (*Gesundheitsämter*), research institutes (Robert Koch Institute, DKFZ), pharmaceutical corporations, healthcare consulting firms, and international organizations like the WHO."
    }
  ]
};

export default function PublicHealth() {
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
      seoPath="/study-abroad/germany/public-health"
    />
  );
}
