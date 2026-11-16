import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/PublicHealth/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/PublicHealth/EHESP_Rennes_School_of_Public_Health.webp";
import uniImg2 from "../../../../Images/Abroad/France/PublicHealth/Paris_Cit_University_Paris.webp";
import uniImg3 from "../../../../Images/Abroad/France/PublicHealth/University_of_Strasbourg.webp";

const page = {
  name: "Public Health in France",
  country: "France",
  slug: "public-health",
  title: "Study Public Health in France for International Students | MPH Degrees Guide",
  description: "Complete guide to studying Public Health in France: Master of Public Health (MPH), EHESP School of Public Health, top universities, tuition fees (€255 – €3,950/yr), English-taught programs, and global career opportunities.",
  keywords: "Study Public Health in France for Indian Students, Public Health Courses in France for International Students, Top Universities for Public Health in France, Master’s in Public Health in France, Public Health Eligibility Requirements in France, Public Health Admission Requirements for Indian Students, Public Health Tuition Fees in France 2026–2027, Cost of Studying Public Health in France for International Students, English-Taught Public Health Programmes in France, French Language Requirements for Public Health Courses, Global Health and Health Policy Programmes in France, Public Health Student Visa Requirements for France, Public Health Jobs and Career Opportunities in France",
  introTitle: "PUBLIC HEALTH (MPH) IN FRANCE FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "France is a premier global destination for public health education, renowned for its universal healthcare architecture, world-leading epidemiological institutes like Inserm and Institut Pasteur, and progressive health policy research. International students can pursue English-taught and bilingual Master of Public Health (MPH) degrees with affordable tuition rates, extensive research internships, and 2-year post-study work authorization across Europe."
  ],
  overview: [
    "Public health education in France focuses on population-level disease prevention, healthcare systems evaluation, biostatistical modeling, and global health diplomacy.",
    "Academic programs seamlessly integrate biomedical sciences, quantitative epidemiology, health economics, environmental sustainability, and public administration, training future leaders to tackle infectious outbreaks, non-communicable disease burdens, and health inequities.",
    "French public universities and specialized grandes écoles offer national Master of Public Health degrees adhering to the European Bologna standard (2 years / 120 ECTS), featuring collaborative research projects with hospital networks, national health surveillance agencies (Santé publique France), and international organizations (WHO, OECD).",
    "EduHawk Worldwide study abroad consultancy provides specialized application guidance for international and Indian aspirants—covering English-taught university selection, statement of purpose curation, Campus France interviews, scholarship applications (Eiffel Excellence), and post-study career placement."
  ],
  level: "Master of Public Health (MPH / 120 ECTS) & Doctorate (PhD)",
  crumb: "Health Sciences / Public Health",
  stats: [
    {
      label: "Degree Levels",
      value: "Licence (180 ECTS) / Master (120 ECTS) / PhD"
    },
    {
      label: "Program Duration",
      value: "2 Years (MPH) / 3 Years (PhD)"
    },
    {
      label: "Tuition (Public)",
      value: "€255 (EU) / €3,950 (Non-EU) / Year"
    },
    {
      label: "Post-Study Visa",
      value: "2-Year APS / RECE Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Key Advantages of Studying Public Health in France",
      lead: "France combines cutting-edge biomedical research with one of the world's most resilient and equitable universal healthcare systems.",
      groups: [
        {
          t: "ul",
          items: [
            "**Global Health & Policy Hub:** Study in the European heartland of international health governance, proximate to the World Health Organization (WHO Europe), OECD, and leading global NGOs.",
            "**World-Class Epidemiological Research:** Collaborate directly with premier research institutes including Inserm, CNRS, and Institut Pasteur on infectious disease surveillance, biostatistics, and genomics.",
            "**Wide Choice of Specializations:** Choose from focused disciplines including Epidemiology, Biostatistics & Health Data Science, Global Health Policy, Health Economics, Environmental & Occupational Health, and Health Promotion.",
            "**English-Taught Master's Tracks:** Numerous French public universities and institutes (including EHESP and Université Paris Cité) offer 100% English-taught MPH tracks catering specifically to international cohorts.",
            "**Highly Subsidized European Tuition:** National public university tuition reference fees are fixed at just €255/year (EU) or €3,950/year (Non-EU), making elite European public health education exceptionally accessible.",
            "**2-Year Post-Study Work Permit:** Graduates holding a national master's degree qualify for the 2-year Autorisation Provisoire de Séjour (APS) / RECE permit to launch careers in France and the Schengen zone."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degree Framework",
      title: "Public Health Academic Pathways & Specializations in France",
      lead: "From undergraduate health sciences foundations to advanced research doctorates, French public health curricula provide robust multidisciplinary training.",
      groups: [
        {
          t: "p",
          items: [
            "Public health education in France is organized into three primary academic cycles:",
            "**Undergraduate Foundation (Licence - 3 Years / 180 ECTS):** Baccalaureate graduates build quantitative and biological foundations through degrees in Life Sciences, Health Sciences, Sociology, or Applied Mathematics/Statistics before specializing at the postgraduate level.",
            "**Master of Public Health (MPH - 2 Years / 120 ECTS):** The flagship international degree, structured into M1 (core foundational disciplines) and M2 (advanced specialization and a 5-to-6-month research or clinical internship).",
            "**Doctorate in Public Health (PhD - 3 Years / 180 ECTS):** Advanced doctoral research conducted within accredited university doctoral schools focusing on population health, cancer epidemiology, health inequalities, or global health systems."
          ]
        },
        {
          t: "boxes",
          boxes: [
            {
              title: "Epidemiology & Biostatistics",
              tag: "Master (M1 + M2)",
              desc: "Quantitative modeling, infectious disease outbreak surveillance, clinical trial design, cohort studies, and advanced health data informatics."
            },
            {
              title: "Global Health & Health Policy",
              tag: "Master (M1 + M2)",
              desc: "Comparative healthcare systems, international health development, pandemic preparedness, pharmaceutical policies, and global diplomacy."
            },
            {
              title: "Environmental & Occupational Health",
              tag: "Master (M1 + M2)",
              desc: "Toxicology, climate change health impact assessment, workplace health hazards, and urban environmental epidemiology."
            },
            {
              title: "Health Economics & Management",
              tag: "Master (M1 + M2)",
              desc: "Healthcare finance, cost-effectiveness analysis, hospital administration, technology assessment, and resource allocation."
            }
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Universities & Schools for Public Health in France",
      lead: "France's leading public universities and specialized health institutes offer globally recognized public health training.",
      unis: [
        {
          name: "EHESP Rennes School of Public Health",
          city: "Rennes & Paris",
          state: "Brittany & Île-de-France, France",
          desc: "France's official National School of Public Health, renowned across Europe for English-taught MPH programs, health services management, and environmental health research.",
          img: uniImg1
        },
        {
          name: "Université Paris Cité",
          city: "Paris",
          state: "Île-de-France, France",
          desc: "A premier global health university in central Paris, closely affiliated with Inserm research hubs and top teaching hospitals, offering leading epidemiology and health policy tracks.",
          img: uniImg2
        },
        {
          name: "University of Strasbourg",
          city: "Strasbourg",
          state: "Grand Est, France",
          desc: "Renowned European university situated near EU institutions, specializing in health economics, pharmacology, public health administration, and cross-border healthcare research.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria for International & Indian Students",
      lead: "Admission requirements depend on the chosen academic cycle, program language, and quantitative prerequisites.",
      groups: [
        {
          t: "ul",
          items: [
            "**Undergraduate Gateway:** Completion of Higher Secondary Certificate (Class 12 / French baccalaureate equivalent) with strong results in Biology, Mathematics, and Chemistry.",
            "**Master's Program (MPH):** An accredited 3- or 4-year Bachelor’s degree in Medicine (MBBS), Nursing, Pharmacy, Life Sciences, Biology, Statistics, Economics, or Social Sciences with a competitive GPA.",
            "**Quantitative Background:** Strong foundational coursework in biostatistics, mathematics, or empirical research methodology is highly recommended for epidemiology and health data science tracks.",
            "**English Language Proficiency:** For English-taught MPH tracks, applicants must provide IELTS (minimum 6.5 overall with no band under 6.0) or TOEFL iBT (minimum 90).",
            "**French Language Proficiency:** For French-taught or bilingual tracks, students must demonstrate CEFR B2 or C1 proficiency (DELF B2, DALF C1, or TCF).",
            "**Doctoral Program (PhD):** An accredited Master of Science or Master of Public Health degree, strong academic publications or research credentials, and an approved doctoral research proposal."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Costs",
      title: "Tuition Fees & Cost of Living in France (2026–2027)",
      lead: "France offers substantial government tuition subsidies for public universities, maintaining exceptional affordability for international scholars.",
      groups: [
        {
          t: "table",
          headers: ["Academic Level / Expense", "National EU / EEA Rate", "National Non-EU Rate", "Frequency"],
          rows: [
            ["Licence / Bachelor Level", "€178 / year", "€2,902 / year", "Annual"],
            ["Master of Public Health (MPH)", "€255 / year", "€3,950 / year", "Annual"],
            ["Doctorate / PhD Level", "€398 / year", "€398 / year", "Annual"],
            ["CVEC Student & Campus Life Fee", "€103", "€103", "Annual"],
            ["Student Social Security (Health Insurance)", "Free (100% French Sécurité Sociale)", "Free (100% French Sécurité Sociale)", "Annual"],
            ["Living Expenses (Paris & Île-de-France)", "€1,000 – €1,350 / month", "€1,000 – €1,350 / month", "Monthly"],
            ["Living Expenses (Rennes, Strasbourg, Bordeaux)", "€750 – €950 / month", "€750 – €950 / month", "Monthly"]
          ]
        },
        {
          t: "p",
          items: [
            "**Eiffel Excellence Scholarships:** Highly qualified international students applying for master's or PhD programs in public health can apply for the prestigious French Government Eiffel Excellence Scholarship, providing monthly living stipends of €1,181 (Master) to €1,800 (PhD), return flights, and healthcare coverage.",
            "**CAF Housing Assistance:** All international students are eligible for monthly accommodation subsidies from the French Government (CAF), reducing monthly rent by 30% to 40%."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Application Roadmap",
      title: "10-Step Roadmap to Studying Public Health in France",
      lead: "EduHawk Worldwide guides candidates through every phase of the French university application and visa process.",
      steps: [
        {
          title: "Specialization & Track Identification",
          desc: "Select your desired public health discipline—Epidemiology, Biostatistics, Global Health, Health Economics, or Environmental Health."
        },
        {
          title: "Language Exam Preparation",
          desc: "Complete IELTS/TOEFL for English-taught programs or DELF B2/DALF C1 for French-taught curricula."
        },
        {
          title: "University & Grande École Shortlisting",
          desc: "Compare curriculum content, research institute affiliations (Inserm/CNRS), and tuition structures at EHESP, Paris Cité, Strasbourg, and Bordeaux."
        },
        {
          title: "Campus France & Études en France Dossier",
          desc: "Submit academic transcripts, CV, and SOP on the official Études en France portal and schedule the academic interview."
        },
        {
          title: "Institutional Application Submission",
          desc: "Submit supplementary applications directly via university portals or specialized national platforms (e.g., Mon Master or EHESP portal)."
        },
        {
          title: "Academic Interview & Selection",
          desc: "Participate in admissions committee interviews or submit a quantitative portfolio where required by the faculty."
        },
        {
          title: "Admission Acceptance & Housing Confirmation",
          desc: "Accept your admission offer, secure university CROUS lodging or private student accommodation, and pay the CVEC contribution."
        },
        {
          title: "French Long-Stay Student Visa (VLS-TS)",
          desc: "Submit consular visa paperwork with proof of minimum financial resources (€615+/month) and confirmed French housing."
        },
        {
          title: "2-Year MPH Study & Research Internship",
          desc: "Complete 120 ECTS of coursework alongside a mandatory 5- to 6-month capstone internship in an epidemiology lab, hospital, or global health agency."
        },
        {
          title: "Post-Study Work Visa (APS / RECE) Activation",
          desc: "Graduate with an accredited European master's degree and transition to the 2-year job search and professional work permit."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Public Health Career Opportunities & Salary Expectations",
      lead: "Graduates with French public health degrees enter high-impact positions across European and international health sectors.",
      groups: [
        {
          t: "ul",
          items: [
            "**Epidemiologist & Outbreak Surveillance Analyst:** Designing cohort studies, analyzing infectious transmission patterns, and managing disease registries at public health agencies (€40,000 – €58,000 / year).",
            "**Health Policy Analyst & Health Economist:** Evaluating hospital reimbursement models, conducting health technology assessments (HTA), and advising ministries of health (€42,000 – €64,000 / year).",
            "**Biostatistician & Health Data Scientist:** Applying statistical machine learning, survival analysis, and big-data analytics to pharmaceutical clinical trials and population registries (€46,000 – €72,000 / year).",
            "**Global Health Program Officer:** Coordinating international health development, immunization initiatives, and humanitarian relief programs with WHO, UNICEF, OECD, or Médecins Sans Frontières (€44,000 – €68,000 / year).",
            "**Clinical Research Project Manager:** Managing multi-center pharmaceutical trials, monitoring regulatory compliance, and overseeing patient cohort logistics (€38,000 – €55,000 / year).",
            "**Hospital Healthcare Quality & Operations Director:** Managing clinical service quality, infection control protocols, and administrative workflows in teaching hospital trusts (€45,000 – €66,000 / year)."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Application Checklist",
      title: "Required Documents for Admission & Student Visa",
      lead: "Ensure all non-English or non-French academic documents are translated by certified sworn translators.",
      groups: [
        {
          t: "ul",
          items: [
            "Valid International Passport with at least 6 months validity beyond your planned stay.",
            "Certified Class 10 and Class 12 certificates and mark sheets.",
            "Official Bachelor’s degree certificate and consolidated academic transcripts (with ECTS credit conversions where applicable).",
            "English or French language proficiency score report (IELTS, TOEFL, DELF, or DALF).",
            "Standard French-formatted Curriculum Vitae (CV) emphasizing scientific, healthcare, or quantitative research experience.",
            "Compelling Statement of Purpose (Letter of Motivation) detailing academic interests, relevant experience, and post-study career goals.",
            "Two Academic or Professional Letters of Recommendation on official letterhead.",
            "Research Proposal or writing sample (required for research master's or PhD applicants).",
            "Proof of Financial Means demonstrating at least €615/month for the academic year (bank statements, sponsorship, or scholarship letter).",
            "Proof of Accommodation in France (university CROUS lease, student residence booking, or certificate of lodging)."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can international students study Public Health in France in English?",
      a: "Yes. Leading French institutions, including EHESP French School of Public Health, Université Paris Cité, and the University of Bordeaux, offer 100% English-taught Master of Public Health (MPH) programs. International applicants to these tracks do not require French proficiency for admission, although learning conversational French is encouraged for daily life."
    },
    {
      q: "How long does a Public Health degree take in France?",
      a: "A standard Master of Public Health (MPH) in France takes two academic years (four semesters, totaling 120 ECTS credits). Candidates with an advanced degree (e.g., MBBS or equivalent 4-year health science bachelor's plus professional experience) may occasionally qualify for direct entry into the 1-year M2 specialization track. Doctoral (PhD) programs typically span 3 to 4 years."
    },
    {
      q: "Do I need IELTS to study Public Health in France?",
      a: "For English-taught public health programs, an official English language certificate (such as IELTS with a minimum score of 6.5 or TOEFL iBT 90+) is generally required. If you choose a French-taught public health degree, you will need to submit a French language test result (such as DELF B2 or DALF C1) instead."
    },
    {
      q: "What are the tuition fees for Public Health programs in France?",
      a: "Public university national reference tuition fees for 2026–2027 are €255 per year for European/EEA students and €3,950 per year for non-EU students at the master's level (€398 per year for PhD degrees). Certain specialized grande école programs or double degrees may have institute-specific fees ranging between €5,000 and €10,000 per year."
    },
    {
      q: "What career opportunities are available after graduating with an MPH in France?",
      a: "Graduates can pursue high-demand international careers as epidemiologists, health policy analysts, biostatisticians, clinical research coordinators, hospital quality managers, and global health project officers. Employers include international agencies (WHO, OECD), pharmaceutical companies, research organizations (Inserm, Institut Pasteur), consulting firms, and public healthcare networks."
    }
  ]
};

export default function PublicHealthinFrancePage() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "EHESP Rennes School of Public Health",
        img: uniImg1,
        desc: "France's official National School of Public Health, renowned across Europe for English-taught MPH programs, health services management, and environmental health research."
      },
      {
        name: "Université Paris Cité",
        img: uniImg2,
        desc: "A premier global health university in central Paris, closely affiliated with Inserm research hubs and top teaching hospitals, offering leading epidemiology and health policy tracks."
      },
      {
        name: "University of Strasbourg",
        img: uniImg3,
        desc: "Renowned European university situated near EU institutions, specializing in health economics, pharmacology, public health administration, and cross-border healthcare research."
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={page}
      images={images}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/france/public-health"
    />
  );
}
