import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/Technical_University_in_Berlin_prov.webp";
import uniImg2 from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/Braunschweig_University_renowned_fo.webp";
import uniImg3 from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/The_University_of_Bremen_provides_c.webp";
import uniImg4 from "../../../../../../Images/Abroad/Germany/Engineering_PG/Aerospace/The_University_of_Applied_Sciences.webp";
import cmsData from "../../../../../../data/study_abroad/germany/aero_engg_pg.json";

const page = {
  name: "Postgraduate Aerospace Engineering in Germany",
  country: "Germany",
  slug: "pg/aerospace-engineering",
  title: "Postgraduate Aerospace Engineering in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to Postgraduate Aerospace Engineering (M.Sc.) in Germany for international students: Top German universities, admission requirements, zero-tuition public education, living expenses, and 18-month post-study work visa.",
  keywords:
    "Study Master's in Aerospace Engineering in Germany for Indian Students, Postgraduate Aerospace Engineering Courses in Germany, Best Universities for Aerospace Engineering in Germany, TU Berlin, TU Braunschweig, University of Bremen, FH Aachen, MSc Aerospace Engineering Programmes in Germany, Aerospace Engineering Specialisations in Germany, Eligibility Requirements for Master's in Aerospace Engineering in Germany, Admission Requirements for Aerospace Engineering in Germany, English-Taught Aerospace Engineering Courses in Germany, IELTS and TOEFL Requirements for Aerospace Engineering in Germany, Aerospace Engineering Tuition Fees in Germany, Cost of Living for Master's Students in Germany, Aerospace Engineering Scholarships in Germany for International Students, Aerospace Engineering Accreditation and Degree Recognition in Germany, Aerospace Engineering Career Opportunities and Salary in Germany, German Student Visa Requirements for Aerospace Engineering Students",
  introTitle: "Why Study Aerospace Engineering in Germany?",
  heroParas: [
    "Germany's world-leading **aerospace industry**, cutting-edge research infrastructure, premier **aircraft manufacturing** ecosystem (Airbus, MTU, DLR), and expanding **space technology sector** make it an elite global destination for **Master's (M.Sc.) Aerospace Engineering studies**."
  ],
  overview: [
    "Postgraduate students gain advanced specialization across **aerodynamics, autonomous flight control, propulsion systems, spacecraft engineering, satellite navigation, and lightweight composite structures** at top technical universities with zero general tuition fees and an 18-month post-study work visa.",
    "**The primary advantages of studying postgraduate aerospace engineering in Germany include:**",
    "* **World-Class Technical Education:** Renowned technical universities (TU9) offering state-of-the-art master's programs in aeronautics, astronautics, and computational fluid mechanics.",
    "* **Leading European Aerospace Hub:** Direct research collaboration with giants such as Airbus, MTU Aero Engines, the German Aerospace Center (DLR), and the European Space Agency (ESA).",
    "* **Advanced Research Infrastructure:** Direct access to hypersonic wind tunnels, atmospheric flight simulators, propulsion test stands, and high-performance computing (CFD/FEA) clusters.",
    "* **Tuition-Free Higher Education:** Most state-funded public universities charge zero general tuition fees for consecutive master's degrees, requiring only a modest administrative semester contribution.",
    "* **Space & Satellite Technology:** Leading university research groups developing microsatellites, planetary rovers, orbital propulsion, and space mission architectures.",
    "* **International Career Trajectories:** Exceptional employability in R&D, commercial aviation, satellite telecommunications, and defense aerospace systems.",
    "**Edu Hawk Worldwide Consultancy** provides comprehensive guidance on program selection, ECTS credit matching, GRE/language prerequisites, and German student visa processing."
  ],
  level: "M.Sc. in Aerospace Engineering (Luft- und Raumfahrttechnik)",
  crumb: "Engineering / PG Aerospace Engineering",
  stats: [
    {
      label: "Degree Choices",
      value: "M.Sc. in Aerospace Engineering (Luft- und Raumfahrttechnik)"
    },
    {
      label: "Course Duration",
      value: "1.5 to 2 Years (3 to 4 Semesters, 90–120 ECTS)"
    },
    {
      label: "Top Institutions",
      value: "TU Berlin, TU Braunschweig, Uni Bremen, FH Aachen"
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
      title: "Courses in Aerospace Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Postgraduate aerospace engineering programs in Germany typically last **1.5 to 2 years** (3 to 4 semesters) and require completion of **90 to 120 ECTS credits**, concluding with a research-intensive master's thesis.",
            "Programs are offered across specialized designations including **Aerospace Engineering, Aeronautical Engineering, Space Engineering, Aircraft Systems Engineering, and Computational Mechanics**.",
            "A substantial number of Master of Science programs in aerospace engineering are taught entirely in **English**.",
            "**Popular postgraduate degree tracks and specializations include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "M.Sc. in Aerospace Engineering",
            "M.Sc. in Aeronautical Engineering",
            "M.Sc. in Space Engineering & Technology",
            "M.Sc. in Spacecraft Systems & Astronautics",
            "M.Sc. in Aircraft Design & Optimization",
            "M.Sc. in Flight Guidance, Navigation & Control (GNC)",
            "M.Sc. in Aerospace Propulsion Systems",
            "M.Sc. in Computational Fluid Dynamics (CFD)",
            "M.Sc. in Lightweight Aerospace Structures & Composites",
            "M.Sc. in Aviation Systems & Air Traffic Management"
          ]
        },
        {
          t: "p",
          items: [
            "**Core curriculum modules typically covered:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Advanced Aerodynamics & Fluid Mechanics",
            "Aircraft Materials, Fatigue & Aeroelasticity",
            "Flight Mechanics, Performance & Stability",
            "Multidisciplinary Aircraft Design Optimization",
            "Gas Turbines, Rocket Engines & Propulsion",
            "Computational Fluid Dynamics (CFD)",
            "Finite Element Analysis (FEA)",
            "Guidance, Navigation, and Control (GNC)",
            "Orbital Mechanics & Spacecraft Subsystems",
            "Avionics, Sensors & Flight Control Systems",
            "Advanced Aerospace Manufacturing Technologies",
            "Scientific Research Methodology & Master's Thesis"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top German Universities",
      title: "Germany's Best Universities and Institutions for Aerospace Engineering",
      unis: [
        {
          name: "Technical University of Berlin (TU Berlin)",
          location: "Berlin",
          desc: "Premier TU9 technical university with pioneering research in aviation technologies, space engineering, satellite constellations, and jet propulsion.",
          fee: "€0 / Semester (Public tuition-free)",
          duration: "2 Years (4 Semesters, 120 ECTS)",
          exams: "APS, English (IELTS 6.5–7.0) or German (B2/C1)",
          features: [
            "Department of Aeronautics and Astronautics with university-operated small satellite missions (TUBSAT/BEESAT)",
            "State-of-the-art subsonic and supersonic wind tunnels and flight simulation facilities",
            "Direct cooperation with Rolls-Royce, DLR, and leading European aerospace research clusters"
          ],
          img: uniImg1,
          link: "https://www.tu.berlin"
        },
        {
          name: "TU Braunschweig (Braunschweig University of Technology)",
          location: "Braunschweig, Lower Saxony",
          desc: "Renowned TU9 university at the center of Europe's most active aerospace research cluster, working in immediate partnership with the German Aerospace Center (DLR).",
          fee: "€0 / Semester (Public tuition-free)",
          duration: "2 Years (4 Semesters, 120 ECTS)",
          exams: "APS, English (IELTS 6.5) or German (B2/C1)",
          features: [
            "World-class Research Airport (Forschungsflughafen) with dedicated research aircraft and radar testing sites",
            "Pioneering research in autonomous flight systems, aeroacoustics, and active wing technologies",
            "Comprehensive Master of Science in Aerospace Engineering with high industry recruitment"
          ],
          img: uniImg2,
          link: "https://www.tu-braunschweig.de"
        },
        {
          name: "University of Bremen",
          location: "Bremen",
          desc: "Germany's 'City of Space' university, world-renowned for space exploration systems, satellite engineering, and microgravity research at the ZARM Drop Tower.",
          fee: "€0 / Semester (Public tuition-free)",
          duration: "2 Years (4 Semesters, 120 ECTS)",
          exams: "APS, English (IELTS 6.5–7.0) or German (B2/C1)",
          features: [
            "Home to ZARM (Center of Applied Space Technology and Microgravity) and its iconic 146-meter Drop Tower",
            "Specialized Master of Science in Space Engineering and Space Sciences",
            "Direct linkages with Airbus Defence and Space, ArianeGroup, and OHB SE"
          ],
          img: uniImg3,
          link: "https://www.uni-bremen.de"
        },
        {
          name: "FH Aachen (University of Applied Sciences)",
          location: "Aachen, North Rhine-Westphalia",
          desc: "One of Germany's leading universities of applied sciences for aeronautical and astronautical engineering, emphasizing practice-driven development.",
          fee: "€0 / Semester (Public tuition-free)",
          duration: "1.5 to 2 Years (3 to 4 Semesters)",
          exams: "APS, English (IELTS 6.5) or German (B2/C1)",
          features: [
            "Specialized Faculty of Aerospace Engineering with modern flight simulators and wind tunnels",
            "Integrated practical project phases and industrial master thesis partnerships",
            "Zero tuition fees and close collaboration with aerospace suppliers across the Benelux-German border"
          ],
          img: uniImg4,
          link: "https://www.fh-aachen.de"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Qualifications for Studying Aerospace Engineering (PG) in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Candidates for a postgraduate Aerospace Engineering program in Germany must fulfill stringent academic and subject-credit prerequisites:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Academic Degree:** A recognized Bachelor's degree (B.Tech / B.E. / B.Sc.) in Aerospace Engineering, Aeronautical Engineering, Mechanical Engineering, or a closely related discipline.",
            "**Prerequisite Subject Credits:** Prior comprehensive coursework and specified minimum ECTS credits in Advanced Mathematics, Engineering Mechanics, Thermodynamics, Fluid Dynamics, Materials Science, and Control Systems.",
            "**Academic Performance:** Minimum CGPA thresholds set by universities, typically requiring a German GPA equivalence of 2.5 or better (approx. 65–70%+ in Indian undergraduate degrees).",
            "**English Language Proficiency:** For English-taught master's programs, official scores from IELTS Academic (6.5–7.0+) or TOEFL iBT (90–100+).",
            "**German Language Proficiency:** For German-taught or bilingual programs, proof of proficiency at B2 or C1 level (TestDaF 4x4, DSH-2, or Goethe-Zertifikat C1).",
            "**Aptitude Testing:** Select universities require GRE scores (specifically quantitative reasoning) or conduct technical aptitude interviews."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for Postgraduate Aerospace Engineering",
      groups: [
        {
          t: "p",
          items: [
            "Institutions evaluate applicants on completed credits in core engineering subjects, technical course depth, and undergraduate GPA:",
            "Applications are submitted either through the central **uni-assist** portal or directly via individual university admissions platforms."
          ]
        },
        {
          t: "ul",
          items: [
            "Validated Bachelor’s degree certificate and consolidated mark sheets / transcripts.",
            "Official APS Certificate issued by the German Embassy Academic Evaluation Centre in New Delhi.",
            "Undergraduate syllabus / Module Handbook (Modulhandbuch) detailing course descriptions and credit hours.",
            "Recognized English (IELTS / TOEFL) or German (TestDaF / DSH) language proficiency certificates.",
            "Tabular Curriculum Vitae (Lebenslauf) and customized Statement of Purpose (Letter of Motivation).",
            "Two Academic Letters of Recommendation (LORs) from university professors.",
            "Official GRE scorecard (if required by target universities).",
            "Valid international passport (with at least 12 months validity).",
            "Documentation of internships, technical publications, or industry experience (if available)."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition Fees & Living Costs",
      title: "Cost of Studying Master’s in Aerospace Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "The overall expenditure for postgraduate aerospace studies in Germany is substantially lower than in the US or UK due to state-subsidized public higher education."
          ]
        },
        {
          t: "table",
          headers: [
            "Expense Category",
            "Estimated Amount (EUR)",
            "Details & Regulations"
          ],
          rows: [
            [
              "Public Universities (15 of 16 States)",
              "€0 / Semester",
              "Tuition-free higher education for domestic and international students in almost all federal states."
            ],
            [
              "Public Universities (Baden-Württemberg)",
              "€1,500 / Semester",
              "Statutory tuition fee for non-EU international master students studying in Baden-Württemberg (e.g., Uni Stuttgart)."
            ],
            [
              "Private Universities",
              "€5,000 – €20,000 / Year",
              "Tuition rates set independently by private institutions based on program and facilities."
            ],
            [
              "Semester Contribution (Semesterbeitrag)",
              "€150 – €400 / Semester",
              "Mandatory fee covering administrative costs, student services (Studierendenwerk), and regional public transit pass."
            ],
            [
              "Monthly Living Expenses",
              "€900 – €1,300 / Month",
              "Estimated budget for student accommodation (€350–€650), meals, health insurance, and personal expenses."
            ],
            [
              "Mandatory Blocked Account (Sperrkonto)",
              "€11,904 / Year (€992/month)",
              "Official statutory financial requirement to prove living expense coverage for German student visa issuance."
            ]
          ]
        },
        {
          t: "p",
          items: [
            "Based on monthly expenses of €900–€1,300, the estimated living expenditure for a two-year master's degree is around €21,600 to €31,200. Merit-based scholarships from DAAD, DLR fellowships, and the Deutschlandstipendium are accessible to top international students."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Timeline & Steps",
      title: "German Admission Process for Master’s in Aerospace Engineering",
      groups: [
        {
          t: "p",
          items: [
            "The admission roadmap for international postgraduate aerospace applicants comprises ten systematic steps:"
          ]
        },
        {
          t: "timeline",
          items: [
            {
              step: "Step 01",
              title: "Select Specialization & Focus Area",
              desc: "Choose your focus area across aerodynamics, propulsion, spacecraft engineering, flight control, or aircraft structural design."
            },
            {
              step: "Step 02",
              title: "Shortlist Target Universities",
              desc: "Compare university curricula, laboratory access, wind tunnel facilities, DLR/industry linkages, and language of instruction."
            },
            {
              step: "Step 03",
              title: "Verify ECTS Subject Eligibility",
              desc: "Review the program's ECTS course requirements in mathematics, fluid mechanics, and thermodynamics against your bachelor transcript."
            },
            {
              step: "Step 04",
              title: "Obtain APS India Certification",
              desc: "Submit your degree documents and transcripts to the Academic Evaluation Centre (APS) in New Delhi to secure the mandatory APS certificate."
            },
            {
              step: "Step 05",
              title: "Complete Language Testing",
              desc: "Attain required scores in IELTS Academic (6.5–7.0) or TOEFL iBT (90+), and German (B2/C1) if applicable."
            },
            {
              step: "Step 06",
              title: "Prepare Application Dossier",
              desc: "Assemble your transcript, module handbook, Statement of Purpose (SOP), CV (Europass), and academic recommendation letters."
            },
            {
              step: "Step 07",
              title: "Submit University Applications",
              desc: "Apply via uni-assist or directly through institutional portals before deadlines (typically May 31 / July 15 for Winter semester)."
            },
            {
              step: "Step 08",
              title: "Receive Admission Offer (Zulassung)",
              desc: "Accept the formal university admission offer (Zulassungsbescheid) and review enrollment conditions and deadlines."
            },
            {
              step: "Step 09",
              title: "Open Blocked Account & Health Insurance",
              desc: "Deposit €11,904 into a federally approved German Blocked Account (Sperrkonto) and arrange statutory student health insurance."
            },
            {
              step: "Step 10",
              title: "Apply for German Student Visa",
              desc: "Schedule your National Visa (Type D) appointment at the German diplomatic mission or VFS center and complete visa processing."
            }
          ]
        },
        {
          t: "p",
          items: [
            "Because application deadlines and credit verification procedures differ by university, prospective students should begin preparations 9 to 12 months in advance."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Accreditation & Quality Standards",
      title: "Accreditation and Recognition of Aerospace Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Before enrolling in a postgraduate aerospace engineering program, international students should verify program accreditation and statutory quality benchmarks:"
          ]
        },
        {
          t: "ul",
          items: [
            "Master's programs undergo rigorous accreditation by statutory agencies such as **ASIIN** under the German Accreditation Council (Akkreditierungsrat), adhering to the European EUR-ACE quality framework.",
            "Degrees issued by accredited German universities enjoy universal global recognition under the international Bologna Process (awarding 90 to 120 ECTS credits).",
            "The professional title **'Ingenieur'** is legally protected under German state engineering laws (Ingenieurgesetze), requiring an accredited university degree.",
            "Graduates seeking employment globally or returning to India will find German M.Sc. degrees fully recognized by academic institutions, research councils, and aerospace corporations worldwide."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Prospects & Salary",
      title: "Salary and Employment Prospects in Germany Following Aerospace Master’s",
      groups: [
        {
          t: "p",
          items: [
            "A postgraduate aerospace qualification opens exceptional career pathways in aircraft manufacturing, aviation systems, satellite technology, defense aerospace, and advanced R&D.",
            "**Key career roles for aerospace engineering graduates include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Aerospace Design Engineer",
            "Aerodynamics & CFD Engineer",
            "Aircraft Structural Analyst",
            "Propulsion Systems Engineer",
            "Flight Control & Systems Engineer",
            "Spacecraft & Satellite Systems Engineer",
            "Guidance, Navigation, and Control (GNC) Specialist",
            "Avionics & Embedded Software Engineer",
            "Lightweight Materials & Composites Engineer",
            "Aerospace Research & Development (R&D) Specialist"
          ]
        },
        {
          t: "ul",
          items: [
            "Indicative entry-level gross salaries for Master’s graduates typically range between **€45,000 and €60,000 per year**.",
            "Experienced aerospace specialists, systems architects, and technical project leads regularly command salaries exceeding **€65,000 to €90,000+ annually**.",
            "Major employers in Germany include Airbus Group, MTU Aero Engines, DLR (German Aerospace Center), ESA, OHB SE, Diehl Aviation, Liebherr Aerospace, and Rolls-Royce Deutschland.",
            "German language proficiency substantially widens job options, particularly for positions involving defense research, system integration, and customer-facing engineering.",
            "International graduates are entitled to an **18-month post-study work visa (Jobseeker Residence Permit)** to secure relevant employment and transition toward an EU Blue Card."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Documents Required for Master’s in Aerospace Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "A comprehensive document dossier is necessary for university applications and visa processing:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid international passport (with at least 12 months validity).",
            "Official Bachelor’s degree certificate and consolidated mark sheets / transcripts.",
            "Mandatory APS Certificate issued by the German Embassy Academic Evaluation Centre in New Delhi.",
            "Undergraduate syllabus / Module Handbook (Modulhandbuch) detailing course descriptions and credit hours.",
            "Recognized English (IELTS / TOEFL) or German (TestDaF / DSH) language proficiency certificates.",
            "Tabular Curriculum Vitae (Lebenslauf) and customized Statement of Purpose (Letter of Motivation).",
            "Two Academic Letters of Recommendation (LORs) from university professors.",
            "Official GRE scorecard (if required by target universities).",
            "Official University Letter of Admission (Zulassungsbescheid).",
            "Proof of financial resources (€11,904 blocked account deposit) and statutory German student health insurance."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Is it possible for Indian students to study aerospace engineering for a master's degree in Germany?",
      a: "Yes. Indian students holding a recognized Bachelor's degree in Aerospace Engineering, Aeronautical Engineering, or Mechanical Engineering can apply for an M.Sc. in Germany. Applicants must fulfill specific ECTS subject requirements in mathematics, mechanics, thermodynamics, and fluid dynamics, as well as English or German language proficiency."
    },
    {
      q: "Is it free to pursue a master's degree in aerospace engineering in Germany?",
      a: "Yes. Most public universities across 15 of 16 German federal states do not charge general tuition fees for consecutive master's degrees. Students pay only an administrative semester contribution of €150 to €400 covering student services and a regional transit pass. Non-EU international students pay €1,500 per semester in Baden-Württemberg, and private universities set their own tuition fees."
    },
    {
      q: "What is the typical duration of a German master's program in aerospace engineering?",
      a: "Depending on the university and program structure, most master's programs last 1.5 to 2 years (3 to 4 semesters) and comprise 90 or 120 ECTS credits, culminating in an independent research-based master's thesis."
    },
    {
      q: "Does Germany require the IELTS exam for aerospace engineering master's programs?",
      a: "For English-taught master's programs, universities typically require official IELTS Academic (6.5 to 7.0) or TOEFL iBT (90+) scorecards. For German-taught programs, proof of German language proficiency at B2 or C1 level (TestDaF 4x4 or DSH-2) is required."
    },
    {
      q: "What career opportunities are available after earning an M.Sc. in Aerospace Engineering in Germany?",
      a: "Graduates can pursue high-demand roles in aircraft design, aerodynamics, propulsion systems, flight controls, structural simulation, spacecraft systems, and R&D. Employers include aerospace leaders such as Airbus, MTU Aero Engines, DLR, ESA, OHB SE, and specialized engineering consultancies."
    },
    {
      q: "How can I study abroad with the assistance of Edu Hawk Worldwide Consultancy?",
      a: "Edu Hawk Worldwide assists students with profile evaluation, university and course shortlisting, ECTS credit matching, APS verification, application submission via uni-assist, SOP & CV tailoring, blocked account setup, and German student visa preparation. Contact our overseas education advisors to start your German aerospace journey."
    }
  ]
};

export default function AerospaceEngineeringPGGermanyPage() {
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
      seoPath="/study-abroad/germany/pg/aerospace-engineering"
    />
  );
}
