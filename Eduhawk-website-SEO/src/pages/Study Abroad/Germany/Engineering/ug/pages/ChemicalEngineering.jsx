import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/The_Karlsruhe_Institute_of_Technolo.webp";
import uniImg2 from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/Berlin_Technical_University_renowne.webp";
import uniImg3 from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/TU_Dresden_provides_possibilities_t.webp";
import uniImg4 from "../../../../../../Images/Abroad/Germany/Engineering_UG/Chemical/Stuttgart_University_possesses_skil.webp";
import cmsData from "../../../../../../data/study_abroad/germany/chem_engg_ug.json";

const page = {
  name: "Undergraduate Chemical Engineering in Germany",
  country: "Germany",
  slug: "ug/chemical-engineering",
  title: "Undergraduate Chemical Engineering in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to Undergraduate Chemical Engineering in Germany for international students: Top German technical universities, admission requirements, zero-tuition public education, living costs, and 18-month post-study work visa.",
  keywords:
    "Study Chemical Engineering in Germany for Indian Students, Chemical Engineering at the Bachelor Level in Germany, Bachelor of Science in Chemical Engineering Germany, Top Universities for Chemical Engineering in Germany, Karlsruhe Institute of Technology, TU Berlin, TU Dresden, University of Stuttgart, Courses in Process Engineering in Germany, Biochemical and Chemical Process Engineering in Germany, Eligibility Criteria for Chemical Engineering in Germany, German Language Requirements for Chemical Engineering, Tuition Fees for Chemical Engineering in Germany, Living Expenses for Engineering Students in Germany",
  introTitle: "Why Study Chemical Engineering in Germany?",
  heroParas: [
    "Germany is one of Europe’s leading superpowers for studying **chemical manufacturing, industrial research, pharmaceuticals, materials science, and sustainable production technologies**."
  ],
  overview: [
    "Undergraduate students acquire world-class technical expertise in **chemical processes, industrial synthesis, plant design, energy systems, and environmental engineering** at renowned German technical universities with zero general tuition fees and an 18-month post-study work visa.",
    "**The primary benefits of studying chemical engineering in Germany include:**",
    "* **World-Class Technical Education:** German universities are internationally celebrated for their rigorous scientific research and cutting-edge engineering programs.",
    "* **Thriving Chemical & Pharma Industry:** Germany hosts Europe's largest chemical ecosystem (including BASF, Bayer, Evonik, and Merck) offering unmatched internship and career pathways.",
    "* **Extensive Practical Experience:** Students gain invaluable hands-on expertise through **laboratory work, process simulations, plant design projects, and industrial placements**.",
    "* **Tuition-Free Public Education:** Most public universities charge zero general tuition for undergraduate programs, requiring only nominal semester contributions.",
    "* **Pioneering Research Topics:** Opportunities to conduct research in sustainable green chemistry, advanced novel materials, circular economy, and industrial decarbonization.",
    "* **High Employability Across Sectors:** Graduates excel across **chemicals, pharmaceuticals, energy, food processing, environmental engineering, and high-tech manufacturing**.",
    "This discipline is ideal for students with strong foundations in **chemistry, mathematics, physics, and industrial problem-solving** aiming to design sustainable production systems.",
    "**Edu Hawk Worldwide Consultancy** guides students through every phase of their German study journey—from academic eligibility evaluation to university applications, blocked accounts, and visa filing."
  ],
  level: "B.Sc. / B.Eng. in Chemieingenieurwesen / Verfahrenstechnik",
  crumb: "Engineering / UG Chemical Engineering",
  stats: [
    {
      label: "Degree Choices",
      value: "B.Sc. / B.Eng. in Chemical & Process Engineering"
    },
    {
      label: "Course Duration",
      value: "3 to 3.5 Years (6 to 7 Semesters)"
    },
    {
      label: "Top Institutions",
      value: "KIT, TU Berlin, TU Dresden, Uni Stuttgart"
    },
    {
      label: "Post-Study Work",
      value: "18-Month Jobseeker Residence Permit"
    }
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "German Study Courses in Chemical Engineering",
      groups: [
        {
          t: "p",
          items: [
            "A **Bachelor’s degree in Chemical Engineering in Germany** typically takes **3 to 3.5 years** (6 to 7 semesters) to complete, depending on the university and course structure.",
            "German universities offer dedicated degrees in Chemical Engineering as well as interdisciplinary branches like **Process Engineering (Verfahrenstechnik), Chemical Technology, Energy and Process Engineering, or Biochemical Engineering**.",
            "**Common undergraduate degree pathways include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "B.Sc. / B.Eng. in Chemical Engineering (Chemieingenieurwesen)",
            "B.Sc. in Chemical and Process Engineering (Verfahrenstechnik)",
            "Biochemical Engineering & Biotechnology",
            "Industrial Chemistry & Chemical Technology",
            "Energy and Process Systems Engineering",
            "Environmental and Process Engineering",
            "Sustainable Materials & Polymer Engineering"
          ]
        },
        {
          t: "p",
          items: [
            "**Core curriculum topics typically covered:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Higher Mathematics & Engineering Physics",
            "Inorganic, Organic & Physical Chemistry",
            "Technical Thermodynamics & Heat Transfer",
            "Fluid Mechanics & Fluidized Beds",
            "Mass Transfer & Separation Techniques",
            "Chemical Reaction Engineering & Kinetics",
            "Process Instrumentation and Control Systems",
            "Plant Design, Safety & Risk Analysis",
            "Green Chemistry & Environmental Engineering",
            "Process Modeling, Simulation & Optimization"
          ]
        },
        {
          t: "p",
          items: [
            "Each university establishes its own specialized curriculum. When selecting a program, students should review specific laboratory course modules and industrial training partnerships."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top German Universities",
      title: "Top German Universities & Schools for Chemical Engineering",
      lead: [
        "Germany is home to some of the world's most distinguished institutions in chemical engineering, process technology, and industrial research:"
      ],
      unis: [
        {
          name: "Karlsruhe Institute of Technology (KIT)",
          location: "Karlsruhe, Baden-Württemberg, Germany",
          desc: "Renowned European center for scientific research and engineering excellence, celebrated worldwide for cutting-edge chemical and process engineering.",
          fee: "€0 Tuition (€1,500/sem state tuition in Baden-Württemberg for non-EU students)",
          duration: "3 Years (6 Semesters)",
          exams: "Class 12 / Studienkolleg, German B2/C1",
          features: [
            "Degree: B.Sc. in Chemical and Process Engineering (CIW)",
            "Member of the German Excellence Initiative and TU9 alliance",
            "State-of-the-art chemical synthesis and micro-process engineering facilities",
            "Direct research tie-ups with BASF, Evonik, and international chemical consortia"
          ],
          img: uniImg1,
          link: "https://www.kit.edu"
        },
        {
          name: "Technical University of Berlin (TU Berlin)",
          location: "Berlin, Germany",
          desc: "World-class TU9 institution internationally acclaimed for top-tier teaching, chemical technology, and sustainable industrial process innovation.",
          fee: "€0 Tuition (Semester contribution approx. €315/sem)",
          duration: "3 Years (6 Semesters)",
          exams: "Class 12 / Studienkolleg, German B2/C1",
          features: [
            "Degree: B.Sc. in Chemical Engineering (Chemieingenieurwesen)",
            "Comprehensive training in reaction kinetics, thermodynamics, and plant design",
            "Extensive industry networking opportunities in Germany's capital",
            "Modern laboratory complexes for renewable fuels and green process design"
          ],
          img: uniImg2,
          link: "https://www.tu.berlin"
        },
        {
          name: "TU Dresden (Dresden University of Technology)",
          location: "Dresden, Saxony, Germany",
          desc: "Top-ranked University of Excellence offering comprehensive programs in chemical technology, process engineering, and natural materials technology.",
          fee: "€0 Tuition (Semester contribution approx. €290/sem)",
          duration: "3.5 to 5 Years (Bachelor / Diplom-Ingenieur)",
          exams: "Class 12 / Studienkolleg, German B2/C1",
          features: [
            "Degree: B.Sc. / Diplom in Process Engineering (Verfahrenstechnik)",
            "Member of the German Excellence Initiative with high research output",
            "Specialized institutes in energy process engineering and sustainable chemistry",
            "Intensive practical training with integrated industrial internships"
          ],
          img: uniImg3,
          link: "https://tu-dresden.de"
        },
        {
          name: "University of Stuttgart",
          location: "Stuttgart, Baden-Württemberg, Germany",
          desc: "Distinguished research university renowned for engineering prowess, industrial research partnerships, and advanced process systems engineering.",
          fee: "€0 Tuition (€1,500/sem state tuition in Baden-Württemberg for non-EU students)",
          duration: "3 Years (6 Semesters)",
          exams: "Class 12 / Studienkolleg, German B2/C1",
          features: [
            "Degree: B.Sc. in Chemical and Bio-Engineering (Verfahrenstechnik)",
            "Close integration with southwest Germany's high-tech industrial base",
            "Leading research institutes in biochemical engineering and thermodynamic modeling",
            "High-performance computing resources for process simulation"
          ],
          img: uniImg4,
          link: "https://www.uni-stuttgart.de"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Eligibility for Chemical Engineering Study in Germany",
      groups: [
        {
          t: "p",
          items: [
            "International applicants seeking admission to undergraduate Chemical Engineering programs in Germany must meet specific academic and linguistic criteria:",
            "**Academic eligibility standards:**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Higher Secondary Completion:** Successful completion of 12 years of formal schooling (Class 12 / Higher Secondary Certificate).",
            "**Subject Prerequisites:** Strong academic background in **Mathematics and Chemistry**, with **Physics** as a strongly recommended or required foundation.",
            "**Academic Performance:** Competitive minimum grades as established by the university's faculty admission council.",
            "**German Language Proficiency:** For German-taught bachelor's programs, recognized B2 or C1 level certifications (TestDaF, DSH-2, Goethe-Zertifikat C1, or telc Deutsch C1 Hochschule).",
            "**English Language Proficiency:** For English-taught programs, proof of English fluency via TOEFL iBT (80-90+), IELTS Academic (6.0-6.5+), or approved equivalents.",
            "**Educational Qualification Recognition:** Based on Indian Class 12 credentials, students typically require a 1-year preparatory **Studienkolleg (T-Kurs)** followed by the **Feststellungsprüfung (FSP)**, unless qualifying through JEE Advanced or equivalent 1-year university education in India."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for Chemical Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Admission requirements vary slightly across universities, but applicants are generally required to provide:",
            "Applicants should verify whether their university requires applications through **Uni-Assist** or directly via the university's own application portal."
          ]
        },
        {
          t: "ul",
          items: [
            "A recognized secondary school leaving certificate such as **Class 12 for Indian applicants**.",
            "Official academic marksheets and certified German/English translations.",
            "Documented high-school coursework in Mathematics, Chemistry, and Physics.",
            "Official proof of language proficiency in German (TestDaF/DSH) or English (IELTS/TOEFL) corresponding to the instruction medium.",
            "Valid international passport with at least 18 months of remaining validity.",
            "Statement of Purpose (Letter of Motivation) and updated Academic Curriculum Vitae (CV).",
            "APS (Akademische Prüfstelle) certificate (mandatory for Indian applicants applying to German institutions)."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition Fees & Living Costs",
      title: "Cost of Studying Chemical Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "The cost of studying **Chemical Engineering** in Germany is among the most affordable in the world for international students, with public universities charging zero general tuition fees.",
            "Below is a detailed breakdown of estimated academic and living expenses:"
          ]
        },
        {
          t: "table",
          headers: [
            "Expense Category",
            "Estimated Amount (EUR)",
            "Applicability & Guidelines"
          ],
          rows: [
            [
              "Public University Tuition",
              "€0 / Free",
              "Public universities in 15 of 16 German states charge no tuition. Baden-Württemberg levies €1,500/semester for non-EU students."
            ],
            [
              "Semester Contribution (Semesterbeitrag)",
              "€150 – €400 per semester",
              "Mandatory fee covering administrative costs, student union support, and a semester public transit ticket (Semesterticket)."
            ],
            [
              "Private University Tuition",
              "€5,000 – €20,000+ per year",
              "Applies only if attending private institutions with specialized English curricula."
            ],
            [
              "Monthly Living Expenses",
              "€900 – €1,300 per month",
              "Encompasses student accommodation, groceries, local transport, utilities, and personal essentials."
            ],
            [
              "Statutory Health Insurance",
              "€120 – €140 per month",
              "Mandatory health cover required for university enrollment and German student visa approval."
            ],
            [
              "Blocked Account (Sperrkonto)",
              "€11,904 per year (€992/mo)",
              "Official statutory financial requirement mandated by the German Federal Foreign Office to cover one year's living expenses."
            ]
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Timeline & Steps",
      title: "German Admission Procedure for Chemical Engineering",
      groups: [
        {
          t: "timeline",
          items: [
            {
              step: "Step 1",
              title: "Research Appropriate Programs",
              desc: "Explore German public universities offering Bachelor degrees in Chemical Engineering (Chemieingenieurwesen), Process Engineering (Verfahrenstechnik), or related disciplines via DAAD and university portals."
            },
            {
              step: "Step 2",
              title: "Confirm Your Eligibility & Pathway",
              desc: "Check whether your school-leaving certificate qualifies for direct university entrance or requires a 1-year Studienkolleg preparatory course (T-Kurs) followed by the Feststellungsprüfung (FSP)."
            },
            {
              step: "Step 3",
              title: "Verify the Language of Instruction",
              desc: "Determine whether the program is taught in German or English. Complete required proficiency exams (TestDaF / DSH for German, IELTS / TOEFL for English)."
            },
            {
              step: "Step 4",
              title: "Prepare Your Application & APS Certificate",
              desc: "Obtain your mandatory APS certificate from the German Embassy in New Delhi, gather academic transcripts, passport copies, language certificates, CV, and SOP."
            },
            {
              step: "Step 5",
              title: "Submit Your University Applications",
              desc: "Submit applications via Uni-Assist or directly through university portals before official deadlines (typically July 15 for Winter semester, January 15 for Summer semester)."
            },
            {
              step: "Step 6",
              title: "Complete Any Required Assessments",
              desc: "Take entrance exams, Studienkolleg Aufnahmeprüfung, or faculty aptitude tests if mandated by your chosen institution."
            },
            {
              step: "Step 7",
              title: "Receive Admission Decision (Zulassungsbescheid)",
              desc: "Receive your official admission offer, review all enrollment conditions, and confirm acceptance within the specified deadline."
            },
            {
              step: "Step 8",
              title: "Open Blocked Account & Secure Student Visa",
              desc: "Deposit €11,904 into a recognized German Blocked Account (Sperrkonto), arrange statutory health insurance, and apply for your National Student Visa (Type D)."
            },
            {
              step: "Step 9",
              title: "Arrive in Germany & University Enrollment",
              desc: "Travel to Germany, register your address at the local Bürgeramt, complete university enrollment (Immatrikulation), and begin your studies."
            }
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Accreditation & Quality Standards",
      title: "Accreditation and Recognition of Chemical Engineering Programs",
      groups: [
        {
          t: "p",
          items: [
            "Before enrolling, international students should verify the institutional accreditation and official state recognition of their prospective university.",
            "**Key quality assurance benchmarks include:**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Official Institutional Recognition:** State approval by the Science Ministry of the respective German federal state.",
            "**Program Accreditation:** Formal accreditation by recognized agencies such as ASIIN (Specialized Accreditation Agency for Engineering & Natural Sciences) or ZEvA under the German Accreditation Council (Akkreditierungsrat).",
            "**Bologna Process Compliance:** ECTS (European Credit Transfer and Accumulation System) alignment ensuring worldwide mutual degree recognition.",
            "**Industry & Research Infrastructure:** Cutting-edge chemical laboratories, modern pilot plant facilities, and structured industry internship programs.",
            "**Global Professional Acceptance:** Chemical engineering degrees from accredited German technical universities are recognized internationally, enabling seamless career paths or postgraduate study worldwide."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Prospects & Salary",
      title: "Salary and Job Opportunities for Chemical Engineers in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Chemical engineering graduates enjoy exceptional career prospects across Germany's manufacturing, pharmaceutical, energy, food technology, advanced materials, and environmental engineering sectors.",
            "**Common job roles for graduates include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Process Design & Simulation Engineer",
            "Chemical Production Engineer",
            "Plant Operations & Maintenance Engineer",
            "Quality Assurance & Quality Control (QA/QC) Specialist",
            "Environmental Compliance & Safety Engineer",
            "R&D Pharmaceutical Process Engineer",
            "Energy & Sustainability Engineer",
            "Materials Development Engineer"
          ]
        },
        {
          t: "p",
          items: [
            "**Indicative salary benchmarks in Germany:**",
            "* **Entry-Level Positions:** Starting salaries generally range from **€45,000 to €60,000 gross per year**.",
            "* **Experienced Professionals:** With 3 to 5+ years of industry experience, professionals earn between **€60,000 and €85,000+ gross per year**.",
            "Graduates find exciting opportunities with leading chemical and pharma giants (BASF, Bayer, Evonik, Merck, Covestro, Henkel), engineering consultancies, energy corporations, and research institutions like the Fraunhofer and Max Planck Institutes.",
            "Proficiency in the German language significantly broadens career opportunities, workplace integration, and fast-track eligibility for the EU Blue Card and German permanent residency."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Documentation Required for Admission and Visa",
      groups: [
        {
          t: "p",
          items: [
            "Students are required to compile and submit comprehensive documentation for university applications and the subsequent German student visa application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid international passport (with at least 18 months validity and blank visa pages).",
            "Class 10 and Class 12 certificates and detailed mark sheets.",
            "Official academic transcripts and certified German or English translations.",
            "Mandatory APS Certificate (Akademische Prüfstelle) for Indian applicants.",
            "Proof of university admission qualification or Studienkolleg / Feststellungsprüfung results.",
            "Official language test scorecards (German: TestDaF / DSH / Goethe; English: IELTS / TOEFL).",
            "Curriculum Vitae (CV) in standard Europass format.",
            "Statement of Purpose / Letter of Motivation detailing academic and career objectives.",
            "Official University Admission Letter (Zulassungsbescheid).",
            "Proof of financial resources: German Blocked Account (Sperrkonto) confirming €11,904.",
            "Proof of recognized statutory or private travel health insurance."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can Indian students study Chemical Engineering in Germany after 12th?",
      a: "Yes. Indian students who have completed Class 12 with Physics, Chemistry, and Mathematics are eligible. Depending on the university and board, students typically attend a 1-year preparatory Studienkolleg (T-Kurs) and pass the Feststellungsprüfung (FSP), or qualify directly if they possess recognized equivalent qualifications such as JEE Advanced rank or 1 year of completed bachelor study."
    },
    {
      q: "Is Chemical Engineering tuition-free in Germany?",
      a: "Yes. Most public universities in Germany charge €0 tuition for undergraduate bachelor's degree programs, regardless of nationality. Students only pay a nominal semester contribution (Semesterbeitrag) of €150 to €400 per semester, which includes public transportation tickets and campus administration services. (Baden-Württemberg charges €1,500/semester for non-EU students)."
    },
    {
      q: "Is it necessary to speak German fluently for Chemical Engineering?",
      a: "For German-taught bachelor's programs, proof of B2 or C1 level German proficiency (TestDaF, DSH, or Goethe) is mandatory. For the growing number of English-taught bachelor's programs, an IELTS or TOEFL certificate is required. However, learning conversational German is highly recommended for daily living, internships, and post-study career success."
    },
    {
      q: "How long does a bachelor’s degree in Chemical Engineering take in Germany?",
      a: "Most bachelor’s degree programs in Germany take 3 to 3.5 years (6 to 7 semesters) of full-time study. If a student requires a 1-year preparatory Studienkolleg, the total duration from arrival to degree completion is approximately 4 to 4.5 years."
    },
    {
      q: "What are the career opportunities in Germany after Chemical Engineering?",
      a: "Graduates are in high demand across Germany's robust chemical, pharmaceutical, automotive, energy, and environmental sectors. Typical roles include Process Engineer, Plant Operations Specialist, R&D Engineer, and Environmental Consultant, with entry salaries ranging from €45,000 to €60,000 gross per year and post-study visa rights for 18 months."
    },
    {
      q: "How can Edu Hawk Worldwide Consultancy assist me in studying abroad?",
      a: "Edu Hawk Worldwide provides end-to-end guidance including profile evaluation, university and course shortlisting, application preparation via Uni-Assist, APS assistance, blocked account setup, SOP guidance, and German student visa documentation."
    }
  ]
};

export default function ChemicalEngineeringUGGermanyPage() {
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
    sections: (page.sections || []).map(sec => {
      if ((sec.slot === 'universities' || sec.slot === 'unis') && cmsData?.universities && cmsData.universities.length > 0) {
        return {
          ...sec,
          unis: cmsData.universities.map((u, idx) => ({
            name: u.name,
            desc: u.desc || '',
            img: (sec.unis?.[idx]?.img || sec.unis?.[idx]?.image) || u.image || u.img
          }))
        };
      }
      return sec;
    }),
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image,
          img: page.universities?.[idx]?.img || u.img
        }))
      : page.universities,
    faqs: ((cmsData?.faq || cmsData?.faqs) && (cmsData?.faq || cmsData?.faqs).length > 0)
      ? (cmsData.faq || cmsData.faqs).map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
      : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="study-abroad/germany/ug/chemical-engineering"
    />
  );
}
