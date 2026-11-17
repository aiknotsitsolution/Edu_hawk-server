import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/INSA_Lyon.webp";
import uniImg2 from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/Universit_Grenoble_Alpes_IUT_1.webp";
import uniImg3 from "../../../../../../Images/Abroad/France/Engineering_UG/Electrical/Universit_Grenoble_Alpes.webp";
import cmsData from "../../../../../../data/study_abroad/france/elec_engg_ug.json";

const page = {
  name: "UG Electrical Engineering in France",
  country: "France",
  slug: "study-abroad/france/ug/electrical-engineering",
  title: "Study UG Electrical Engineering in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to undergraduate Electrical Engineering in France for international students: top Grandes Écoles, CTI-accredited degrees, fees, admission requirements, and career prospects.",
  keywords: "Study Electrical Engineering in France for Indian Students, Undergraduate Electrical Engineering Courses in France for International Students, Best Universities for Electrical Engineering in France, Bachelor’s Degree in Electrical Engineering in France, Electrical Engineering Eligibility Requirements in France, Electrical Engineering Admission Requirements for Indian Students, Electrical Engineering Tuition Fees in France 2026–2027, Cost of Studying Electrical Engineering in France, English-Taught Electrical Engineering Programmes in France, Electrical Engineering and Industrial Computing (GEII) in France, Electrical Power Systems and Renewable Energy Courses in France, Electronics Engineering Courses in France, Automation and Control Engineering Programmes in France, Electrical Engineering Jobs and Career Opportunities in France",
  introTitle: "UG ELECTRICAL ENGINEERING IN FRANCE",
  heroParas: [
    "France is an international pioneer in electrical engineering, smart grids, renewable energy, and industrial automation, offering undergraduate students 3-year Licence and BUT degrees as well as prestigious 5-year CTI-accredited Diplôme d'Ingénieur qualifications. Combining advanced circuit design, power systems, electric mobility, and hands-on lab training with European tech leaders, French electrical engineering opens pathways to high-growth global careers and a 2-year post-study work visa."
  ],
  overview: [
    "Undergraduate electrical engineering in France is a compelling choice for students interested in electrical power grids, electronics, industrial automation, renewable energy, telecommunications, and electric vehicle technology.",
    "French universities, university technology institutes (IUTs), and engineering Grandes Écoles offer flexible pathways, from 3-year Bachelor's degrees (Licence or Bachelor Universitaire de Technologie - BUT) to comprehensive 5-year integrated engineering tracks (Diplôme d'Ingénieur, carrying European Master's degree status). Notably, institutions like INSA Lyon offer specialized English-taught undergraduate bachelor's degrees focusing on electrical network infrastructure.",
    "Edu-Hawk Worldwide study abroad guidance assists international and Indian students in exploring these opportunities, selecting suitable institutions, meeting Campus France Études en France criteria, and securing student visas."
  ],
  level: "Undergraduate (Licence / BUT / Diplôme d'Ingénieur)",
  crumb: "Engineering / Electrical (UG)",
  stats: [
    {
      label: "Degree Choices",
      value: "3-Yr Licence / BUT or 5-Yr Diplôme d'Ingénieur"
    },
    {
      label: "Accreditation",
      value: "CTI & French Ministry of Higher Education"
    },
    {
      label: "Public Tuition (Non-EU)",
      value: "€2,902 / Yr (Licence) | €630–€3,950 (Eng.)"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Why Study Electrical Engineering in France?",
      lead: [
        "In France, engineering institutions are closely integrated with world-leading industrial sectors, including energy (EDF, Schneider Electric), high-speed rail and transport (Alstom), aerospace (Airbus), and microelectronics (STMicroelectronics)."
      ],
      groups: [
        {
          t: "bullet",
          title: "Key Advantages for International Students",
          items: [
            "**Advanced Technical Education:** Study electric circuits, electrical power machines, power electronics, digital signal processing, and control automation.",
            "**Industry-Connected Practical Training:** Undergraduate curricula incorporate intensive experimental laboratory sessions, industrial design projects, and mandatory corporate internships.",
            "**Cutting-Edge Specialisations:** Focus on renewable energy integration, smart electrical grids, electric vehicle powertrains, industrial robotics, and IoT embedded systems.",
            "**English & French Pathways:** While the majority of public university courses are taught in French, select programs—such as INSA Lyon's Bachelor in Electrical Network Infrastructure—are delivered in English.",
            "**Seamless Master's Progression:** An undergraduate degree provides direct eligibility to enter prestigious Master of Science (MSc) and Diplôme d'Ingénieur cycles across Europe.",
            "**Broad Career Transferability:** Electrical engineering skills are in massive demand across energy networks, semiconductor fabrication, electric automotive manufacturing, and renewable power infrastructure."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Specializations",
      title: "Electrical Engineering Courses & Curriculum Tracks in France",
      lead: [
        "Undergraduate electrical engineering programs in France train students to design, simulate, operate, and maintain advanced electrical, electronic, and automated systems."
      ],
      groups: [
        {
          t: "bullet",
          title: "Core Undergraduate Disciplines & Modules",
          items: [
            "**Electrical Engineering (Génie Électrique):** Electrical circuit analysis, electrical machines, electromagnetics, power distribution, and electrical installations.",
            "**Electronics Engineering (Électronique):** Analog and digital circuit design, semiconductor devices, sensors, power converters, and microelectronic systems.",
            "**Electrical Power Engineering:** Power generation (nuclear, hydro, thermal), high-voltage transmission, smart grid distribution, and energy conversion.",
            "**Renewable Energy Engineering:** Solar photovoltaics, wind energy conversion, battery energy storage, and grid synchronization.",
            "**Automation & Control Engineering (Automatique):** Industrial control systems, PLC programming, instrumentation, feedback control, and robotics automation.",
            "**Embedded Systems:** Microcontroller programming, hardware-software co-design, real-time operating systems, and connected electronic devices.",
            "**Electrical Engineering & Industrial Computing (BUT GEII):** A hands-on 3-year technology degree blending electrical systems, automation, and industrial computing.",
            "**Telecommunications & Signal Processing:** Communication networks, RF electronics, wireless systems, and digital signal modulation."
          ]
        },
        {
          t: "p",
          items: [
            "**Program Durations:** Standard university Licence and BUT degrees span **3 years (180 ECTS)**. The classic French engineering Grande École route spans **5 years (300 ECTS)** post-secondary school, awarding the CTI-accredited Diplôme d'Ingénieur."
          ]
        }
      ]
    },
    {
      eyebrow: "Top Institutions",
      title: "Top Electrical Engineering Undergraduate Universities in France",
      lead: [
        "France features premier public engineering institutes and top technological universities offering specialized electrical and electronic engineering degrees."
      ],
      unis: [
        {
          name: "INSA Lyon (Institut National des Sciences Appliquées)",
          city: "Lyon",
          state: "Auvergne-Rhône-Alpes",
          desc: "France's top-ranked public engineering institute, INSA Lyon offers an internationally oriented 3-year Bachelor in Science and Engineering in Electrical Engineering and Civil Engineering, featuring a specialized English-taught track in electrical network infrastructure.",
          img: uniImg1
        },
        {
          name: "Université Grenoble Alpes — IUT 1 (BUT GEII)",
          city: "Grenoble",
          state: "Auvergne-Rhône-Alpes",
          desc: "Located in France's 'Silicon Valley', UGA's IUT 1 delivers a renowned 3-year Bachelor Universitaire de Technologie in Electrical Engineering and Industrial Computing (GEII), with specializations in energy management, automation, and embedded systems.",
          img: uniImg2
        },
        {
          name: "Université Grenoble Alpes – Licence EEA",
          city: "Grenoble",
          state: "Auvergne-Rhône-Alpes",
          desc: "Université Grenoble Alpes offers the prestigious foundational Licence Mention EEA (Électronique, Énergie Électrique, Automatique), providing a rigorous 3-year theoretical and laboratory foundation for direct entry into Master's and engineering cycles.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Entry Standards",
      title: "Eligibility Criteria for UG Electrical Engineering in France",
      lead: [
        "Admissions criteria depend on the applicant's mathematical preparation, physics coursework, and language capability."
      ],
      groups: [
        {
          t: "bullet",
          title: "General Eligibility Requirements",
          items: [
            "**Secondary School Completion:** Equivalent to the French Baccalauréat (such as Higher Secondary Certificate / CBSE / ISC Class 12 for Indian students).",
            "**Strong Mathematics & Physics Foundation:** Proven high academic marks in Mathematics and Physics; chemistry or computer science coursework is advantageous.",
            "**Language Proficiency:** French proficiency at CEFR B2 level (DELF B2 or TCF) for French-taught programs; English proficiency (IELTS 6.0–6.5 or TOEFL iBT 80+) for English-taught international pathways.",
            "**Academic Evaluations:** Selective engineering schools (such as INSA Lyon) evaluate academic dossiers, conduct technical interviews, or administer entrance assessments."
          ]
        },
        {
          t: "p",
          items: [
            "**Note for Indian Students:** Completing Class 12 with Physics, Chemistry, and Mathematics (PCM) qualifies students to apply for 3-year university Licence/BUT programs and integrated 5-year engineering Grande École cycles."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Application Checklist",
      title: "Admission Requirements for International Applicants",
      lead: [
        "Admissions committees assess analytical background, technical coursework, motivation, and language capability."
      ],
      groups: [
        {
          t: "bullet",
          title: "Required Application Dossier",
          items: [
            "Official Class 10 and Class 12 mark sheets and passing certificates.",
            "Detailed academic transcripts demonstrating high performance in Mathematics and Physics.",
            "Certified French or English translations of all academic credentials by a sworn translator.",
            "Valid international passport copy with at least 6 months validity.",
            "Proof of language proficiency (DELF/DALF/TCF for French; IELTS/TOEFL for English).",
            "Statement of Purpose (Motivation Letter) outlining career ambitions in power systems, electronics, or renewable energy.",
            "Updated Curriculum Vitae (CV) in standard Europass format.",
            "Two Letters of Recommendation from mathematics and physics instructors.",
            "Completed application form and proof of payment of any institutional application fee."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Financial Planning",
      title: "Tuition Fees & Cost of Studying Electrical Engineering in France",
      lead: [
        "Tuition fees in French public universities and institutes are heavily subsidized by the government, ensuring world-class technical education at a modest cost."
      ],
      table: {
        caption: "Electrical Engineering Undergraduate Tuition Benchmarks (2026–2027)",
        headers: ["Institution / Degree Track", "Eligible EU/EEA Students", "Non-EU Students (Standard / Differentiated)"],
        rows: [
          ["Public University Licence / BUT (3 Years)", "€178 / year", "€2,902 / year"],
          ["Public Engineering Schools (Ministry of Higher Education)", "€630 / year", "€630 – €2,902 / year"],
          ["Grandes Écoles d'Ingénieurs (Diplôme d'Ingénieur)", "€630 – €3,500 / year", "€2,902 – €6,500 / year"],
          ["Private Engineering Grandes Écoles", "€7,000 – €14,000 / year", "€7,000 – €14,000 / year"],
          ["Mandatory Campus Life Contribution (CVEC)", "approx. €103 / year", "approx. €103 / year"]
        ]
      },
      groups: [
        {
          t: "p",
          items: [
            "**Living Costs:** Students should budget between **€700 and €1,000 per month** in regional tech hubs (Grenoble, Lyon, Toulouse) and **€1,200 to €1,600 per month** in Paris. Costs cover student accommodation, food, public transit, books, and healthcare top-up.",
            "**CAF Housing Benefit:** All international students with a valid VLS-TS student visa can apply for CAF (Caisse d'Allocations Familiales) housing aid, which reimburses up to 40% of monthly accommodation rental costs.",
            "**Paid Internships (Gratification):** In France, mandatory engineering internships exceeding 2 months are legally paid (minimum €600+ to €1,200+ per month), allowing electrical engineering students to offset living costs during their industrial placements."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step",
      title: "Admission Procedure for Electrical Engineering in France",
      lead: [
        "International students should follow a structured 10-step application and immigration roadmap for smooth transition to France."
      ],
      steps: [
        {
          title: "Select Specialisation Track",
          desc: "Define your interest among electrical power systems, electronics, industrial automation, renewable energy, or embedded systems."
        },
        {
          title: "Shortlist Institutions",
          desc: "Compare 3-year university Licence / BUT programs and 5-year integrated CTI engineering Grandes Écoles (such as INSA Lyon and Université Grenoble Alpes)."
        },
        {
          title: "Verify Language Medium",
          desc: "Ascertain if the course requires French CEFR B2 proficiency (DELF/TCF) or English proficiency (IELTS 6.0+ for English-taught tracks)."
        },
        {
          title: "Check Application Channel",
          desc: "Determine if applications are submitted via Études en France (Campus France procedure), Parcoursup, or direct institutional portals."
        },
        {
          title: "Assemble Academic Dossier",
          desc: "Gather certified mark sheets, sworn translations, CV, statement of purpose, and teacher recommendation letters."
        },
        {
          title: "Submit Online Application",
          desc: "Complete the online application and submit all required documentation prior to institutional deadlines."
        },
        {
          title: "Attend Academic Interview",
          desc: "Complete admissions interviews, aptitude assessments, or entrance tests if required by the institution or Campus France."
        },
        {
          title: "Receive & Accept Admission Offer",
          desc: "Receive your official admission letter and confirm your enrollment by paying any required tuition deposit."
        },
        {
          title: "Campus France & Visa Processing",
          desc: "Complete the mandatory Campus France appointment, pay CVEC (€103), and submit your Long-Stay Student Visa (VLS-TS) application via VFS."
        },
        {
          title: "Arrival & French Settlement",
          desc: "Fly to France, complete university on-site registration, validate your VLS-TS permit online with OFII, open a bank account, and apply for CAF housing assistance."
        }
      ]
    },
    {
      eyebrow: "Quality Assurance",
      title: "Accreditation and CTI Recognition in France",
      lead: [
        "Verifying accreditation standards ensures global degree recognition and smooth progression to postgraduate studies or professional licensure."
      ],
      groups: [
        {
          t: "bullet",
          title: "Essential Accreditation Standards",
          items: [
            "**CTI Accreditation:** The *Diplôme d'Ingénieur* must be authorized and accredited by the **Commission des Titres d'Ingénieur (CTI)**, conferring full European Master's degree status (300 ECTS) and the title of Ingénieur Diplômé.",
            "**National Bachelor Recognition:** 3-year programs must carry the *Diplôme National de Licence* or *Grade de Licence* from the French Ministry of Higher Education or be registered on the RNCP.",
            "**European ECTS System:** Degrees confer 180 ECTS (Licence/BUT) or 300 ECTS (integrated engineering track), guaranteeing complete credit portability across the European Higher Education Area (EHEA).",
            "**Mandatory Industrial Training:** Accredited French electrical engineering programs incorporate compulsory industrial internships, laboratory design projects, and industry-partnered technical challenges."
          ]
        }
      ]
    },
    {
      eyebrow: "Career Outcomes",
      title: "Career Opportunities & Salary Expectations for Graduates",
      lead: [
        "Electrical engineering graduates from French institutions are recruited by global energy utilities, semiconductor leaders, transport networks, and automation giants."
      ],
      groups: [
        {
          t: "bullet",
          title: "Popular Career Pathways & Roles",
          items: [
            "**Electrical Design Engineer:** Design electrical power distribution systems, industrial wiring, and high-voltage grid infrastructure.",
            "**Power Systems Engineer:** Manage electrical grid transmission, substation automation, and power quality for energy utilities (EDF, RTE).",
            "**Electronics Design Engineer:** Develop analog/digital circuit boards, microelectronic components, and sensor interfaces.",
            "**Renewable Energy Engineer:** Integrate solar PV, wind farms, and battery energy storage into national power networks.",
            "**Automation & Control Engineer:** Program industrial robotics, PLCs, and SCADA monitoring systems for automated manufacturing.",
            "**Electric Vehicle Powertrain Specialist:** Design EV battery management systems, electric traction motors, and smart charging stations.",
            "**Embedded Hardware Engineer:** Program microcontrollers and firmware for IoT devices, aerospace avionics, and medical devices."
          ]
        },
        {
          t: "p",
          items: [
            "**Salary Expectations:** Starting salaries for electrical engineering graduates holding a Master's degree or Diplôme d'Ingénieur typically range from **€39,000 to €46,000 gross per year** in France, rising to **€55,000 to €75,000+** with industry experience and project leadership.",
            "**Post-Study Work Permit:** Indian and international graduates holding a Master's degree or CTI Diplôme d'Ingénieur are entitled to a **2-year post-study work visa (RECE / APS)** in France."
          ]
        }
      ]
    },
    {
      eyebrow: "Application Essentials",
      title: "Documents Required for Electrical Engineering Applications",
      lead: [
        "Ensure all documents are certified, translated, and organized according to official Campus France guidelines."
      ],
      groups: [
        {
          t: "bullet",
          title: "Complete Documentation Checklist",
          items: [
            "Valid international passport (photo, personal details, and signature pages).",
            "Class 10 and Class 12 secondary school certificates and detailed mark sheets.",
            "Official academic transcripts demonstrating high performance in Mathematics and Physics.",
            "Certified French or English translations of all academic records.",
            "Proof of language proficiency (DELF/DALF/TCF for French; IELTS/TOEFL for English).",
            "Professional Curriculum Vitae (CV) formatted to European standards.",
            "Statement of Purpose (Motivation Letter) tailored to electrical and power engineering.",
            "Two Letters of Recommendation from mathematics and physics faculty.",
            "Proof of financial resources (€615+ per month living support required for French consular visa).",
            "Passport-size photographs and Schengen-compliant international medical insurance."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Expert Guidance",
      title: "Edu-Hawk Worldwide Study Abroad Guidance for France",
      lead: [
        "Navigating French engineering admissions, English-taught pathways, and Campus France visa requirements demands specialized expertise."
      ],
      groups: [
        {
          t: "p",
          items: [
            "Edu-Hawk Worldwide Consultancy provides dedicated end-to-end guidance for Indian and international students aspiring to study electrical engineering in France. From profiling suitable Grandes Écoles and English-taught Bachelor programs to managing Études en France applications, drafting compelling statements of purpose, and preparing for consular visa interviews, Edu-Hawk ensures a seamless and successful study-abroad journey."
          ]
        }
      ]
    },
    {
      slot: "faqs",
      eyebrow: "Frequently Asked Questions",
      title: "Frequently Asked Questions – UG Electrical Engineering in France",
      lead: [
        "Clear answers to common questions regarding undergraduate electrical and electronic engineering studies in France."
      ]
    }
  ],
  faqs: [
    {
      q: "Can Indian students pursue Undergraduate Electrical Engineering in France?",
      a: "Yes. Indian students with Class 12 qualifications in Physics, Chemistry, and Mathematics (PCM) can study electrical engineering in France by applying to eligible 3-year Bachelor's/BUT programs or 5-year integrated CTI engineering Grande École cycles."
    },
    {
      q: "How many years does an undergraduate Electrical Engineering degree take in France?",
      a: "A standard university Bachelor's degree (Licence) or BUT in electrical engineering takes 3 years (180 ECTS). The classic French engineering Grande École route (Diplôme d'Ingénieur) takes 5 years (300 ECTS) post-secondary school, awarding European Master's degree status."
    },
    {
      q: "Are French Electrical Engineering courses taught in English?",
      a: "Some programs are taught in English. For example, INSA Lyon offers a specialized 3-year Bachelor's program in Electrical Engineering and Electrical Network Infrastructure taught in English. Many other public university programs are taught in French, requiring CEFR B2 proficiency."
    },
    {
      q: "What is the cost of undergraduate Electrical Engineering in France?",
      a: "For the 2026–2027 academic year, published differentiated tuition for non-EU students at public universities is €2,902 per year at the Bachelor level (€178/year for EU students). In public engineering schools, fees range from €630 to €3,950 per year. Private engineering Grandes Écoles range from €7,000 to €14,000 per year."
    },
    {
      q: "How can Edu-Hawk Worldwide Consultancy help me study in France?",
      a: "Edu-Hawk Worldwide assists with institution shortlisting, Études en France portal registration, sworn document translations, statement of purpose crafting, Charpak scholarship applications, and French student visa interview preparation."
    }
  ]
};

export default function UGElectricalEngineeringinFrancePage() {
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

  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "INSA Lyon (Institut National des Sciences Appliquées)",
        img: uniImg1,
        desc: "Top-ranked French public engineering institute offering a specialized English-taught Bachelor's program in Electrical Engineering and Electrical Network Infrastructure."
      },
      {
        name: "Université Grenoble Alpes — IUT 1 (BUT GEII)",
        img: uniImg2,
        desc: "Renowned 3-year Bachelor Universitaire de Technologie in Electrical Engineering and Industrial Computing (GEII), specializing in energy management, automation, and embedded systems."
      },
      {
        name: "Université Grenoble Alpes – Licence EEA",
        img: uniImg3,
        desc: "Prestigious 3-year university foundation degree in Electronics, Electrical Energy, and Automation (EEA), preparing students for Master's and engineering cycles."
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
