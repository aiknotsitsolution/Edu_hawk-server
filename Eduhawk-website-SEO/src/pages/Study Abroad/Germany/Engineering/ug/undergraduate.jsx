import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Germany/Engineering_UG/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Germany/Engineering_UG/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Germany/Engineering_UG/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Germany/Engineering_UG/cta_bg.webp";

// University images
import uniImg1 from "../../../../../Images/Abroad/Germany/Engineering_UG/RWTH_Aachen_University_Mechanical_e.webp";
import uniImg2 from "../../../../../Images/Abroad/Germany/Engineering_UG/The_Karlsruhe_Institute_of_Technolo.webp";
import uniImg3 from "../../../../../Images/Abroad/Germany/Engineering_UG/University_image3.webp";
import cmsData from "../../../../../data/study_abroad/germany/ug_hub.json";

const page = {
  name: "Undergraduate Engineering in Germany",
  country: "Germany",
  slug: "ug/engineering",
  title: "Undergraduate Engineering in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to Undergraduate Engineering in Germany for international students: Top German universities, admission requirements, zero-tuition public education, living expenses, and 18-month post-study work visa.",
  keywords:
    "Study Undergraduate Engineering in Germany for Indian Students, Engineering UG Courses in Germany for International Students, Bachelor’s in Engineering in Germany, Best Universities for Undergraduate Engineering in Germany, RWTH Aachen, KIT, Hochschule Esslingen, Engineering Eligibility Requirements in Germany After Class 12, German Language Requirements for Engineering in Germany, English-Taught Engineering Courses in Germany, Engineering Tuition Fees in Germany, Cost of Living for Engineering Students in Germany, Engineering Career Opportunities and Salary in Germany",
  introTitle: "Why Study Engineering in Germany?",
  heroParas: [
    "Germany is recognized worldwide as the premier destination for undergraduate engineering education, offering globally acclaimed TU9 technical universities, cutting-edge laboratory infrastructure, tuition-free public higher education, and an 18-month post-study work visa across mechanical, automotive, electrical, civil, and computer engineering disciplines."
  ],
  overview: [
    "**The primary advantages of studying bachelor's engineering in Germany include:**",
    "* **Excellence in Engineering Education:** Globally acclaimed TU9 technical universities and top universities of applied sciences (Fachhochschulen) with state-of-the-art laboratory facilities.",
    "* **Strong Industry Linkages:** Robust partnerships between academia and global industry leaders like Siemens, Bosch, BMW, Volkswagen, BASF, and SAP.",
    "* **Practical Project Work & Internships:** Integrated mandatory practical semesters (Praxissemester) and industry thesis projects providing hands-on engineering competence.",
    "* **Tuition-Free Higher Education:** Most public universities charge zero general tuition fees across 15 of 16 federal states, requiring only a modest administrative semester contribution.",
    "* **Booming Career Pathways:** Outstanding international graduate employment across automotive, manufacturing, renewable energy, construction, robotics, and IT.",
    "**Edu Hawk Worldwide Consultancy** guides students through every phase of their German study journey—from university selection and APS verification to visa processing and accommodation."
  ],
  level: "Bachelor of Engineering / Bachelor of Science (B.Eng. / B.Sc.)",
  crumb: "Engineering / Undergraduate Hub",
  stats: [
    {
      label: "Degree Choices",
      value: "B.Sc. / B.Eng. in Engineering Disciplines"
    },
    {
      label: "Course Duration",
      value: "3 to 3.5 Years (6 to 7 Semesters)"
    },
    {
      label: "Top Institutions",
      value: "RWTH Aachen, KIT, TUM, HS Esslingen"
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
      title: "Bachelor Engineering Courses in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Bachelor-level engineering studies in Germany are offered by traditional research universities (Universitäten) and universities of applied sciences (Fachhochschulen / Hochschulen für Angewandte Wissenschaften).",
            "Bachelor's programs generally take **3 to 3.5 years** (6 to 7 semesters) to complete, with Fachhochschulen typically including a mandatory practical semester in industry.",
            "While select **English-taught bachelor options** are available, the majority of undergraduate engineering degrees in Germany are taught in **German**.",
            "**Popular undergraduate engineering disciplines include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Mechanical Engineering (B.Eng. / B.Sc.)",
            "Electrical Engineering (B.Eng. / B.Sc.)",
            "Civil Engineering (B.Eng. / B.Sc.)",
            "Automotive Engineering (B.Eng. / B.Sc.)",
            "Computer Engineering (B.Eng. / B.Sc.)",
            "Chemical Engineering (B.Eng. / B.Sc.)",
            "Biomedical Engineering (B.Eng. / B.Sc.)",
            "Aerospace Engineering (B.Eng. / B.Sc.)",
            "Electronics & Communication Engineering (B.Eng. / B.Sc.)",
            "Mechatronics & Robotics (B.Eng. / B.Sc.)",
            "Industrial Engineering (Wirtschaftsingenieurwesen)",
            "Environmental Engineering (B.Eng. / B.Sc.)"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top German Universities",
      title: "Germany's Top Engineering Universities and Institutions",
      unis: [
        {
          name: "RWTH Aachen University",
          location: "Aachen, North Rhine-Westphalia",
          desc: "Germany's largest TU9 technical university, renowned worldwide for mechanical, electrical, civil, and industrial engineering education.",
          fee: "€0 / Semester (Public tuition-free)",
          duration: "3 Years (6 Semesters)",
          exams: "APS, German B2/C1, or IELTS 6.5",
          features: [
            "Leading European engineering university with cutting-edge research facilities and laboratories",
            "World-class programs in mechanical, electrical, civil, and materials engineering",
            "Unrivaled industry connections with global automotive, aerospace, and energy corporations"
          ],
          img: uniImg1,
          link: "https://www.rwth-aachen.de"
        },
        {
          name: "Karlsruhe Institute of Technology (KIT)",
          location: "Karlsruhe, Baden-Württemberg",
          desc: "Elite TU9 technical university and Helmholtz research center specializing in chemical, mechanical, electrical, and computer engineering.",
          fee: "€1,500 / Semester (State non-EU fee)",
          duration: "3 Years (6 Semesters)",
          exams: "APS, German B2/C1 (TestDaF/DSH)",
          features: [
            "Carl Benz School of Engineering offering specialized English-taught undergraduate engineering tracks",
            "Pioneering research in autonomous mobility, energy systems, and advanced robotics",
            "Direct campus recruitment by premier European engineering and tech firms"
          ],
          img: uniImg2,
          link: "https://www.kit.edu"
        },
        {
          name: "Hochschule Esslingen (University of Applied Sciences)",
          location: "Esslingen am Neckar, Baden-Württemberg",
          desc: "One of Germany's premier universities of applied sciences, situated in the heart of the automotive industry near Stuttgart.",
          fee: "€1,500 / Semester (State non-EU fee)",
          duration: "3.5 Years (7 Semesters)",
          exams: "APS, German B2/C1",
          features: [
            "Specialized excellence in automotive engineering, mechatronics, and precision manufacturing",
            "Mandatory practical internship semesters integrated directly with Daimler, Porsche, and Bosch",
            "Small class sizes, practice-oriented laboratory training, and exceptional graduate employability"
          ],
          img: uniImg3,
          link: "https://www.hs-esslingen.de"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Eligibility Requirements for Undergraduate Engineering Studies in Germany",
      groups: [
        {
          t: "p",
          items: [
            "International applicants must meet official German Higher Education Entrance Qualifications (Hochschulzugangsberechtigung - HZB):"
          ]
        },
        {
          t: "ul",
          items: [
            "**Academic Credentials:** Completion of Class 12 (Higher Secondary Certificate) or its equivalent with strong foundations in Mathematics and Science subjects (especially Physics).",
            "**Higher Education Entrance Qualification (HZB):** A recognized secondary school credential satisfying German university entrance criteria.",
            "**Studienkolleg Requirement:** Indian applicants completing the standard 12-year school curriculum generally require a one-year preparatory foundation course (**Studienkolleg - T-Kurs**) and must pass the assessment test (**Feststellungsprüfung - FSP**).",
            "**Direct Entry Exemption:** Direct entry without Studienkolleg may be granted if the applicant has completed 1 year of recognized bachelor's study in India, or holds qualifying scores in JEE Advanced.",
            "**German Language Proficiency:** Compulsory for German-taught programs, typically requiring **B2 to C1 level** (TestDaF 4x4, DSH-2, Goethe-Zertifikat C1, or telc Deutsch C1 Hochschule).",
            "**English Language Proficiency:** Required for English-taught programs, demonstrated through TOEFL iBT (80–90+) or IELTS Academic (6.0–6.5+)."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for Undergraduate Engineering in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Universities require official documentation confirming academic preparation, language competency, and legal identity:",
            "Some universities have their own application portals while others use **uni-assist** to process international applications. Students should verify course-specific prerequisites well in advance."
          ]
        },
        {
          t: "ul",
          items: [
            "Official Class 10 and Class 12 mark sheets and certificates.",
            "Mandatory APS Certificate issued by the German Embassy Academic Evaluation Centre in New Delhi.",
            "Recognized German or English language proficiency test scores.",
            "Valid international passport (with at least 12 months remaining validity).",
            "Statement of Purpose (Letter of Motivation) and tabular Academic CV (Lebenslauf).",
            "Studienkolleg admission letter or FSP examination certificate (where applicable).",
            "Program-specific aptitude assessments (such as TestAS for Engineering) if mandated."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition Fees & Living Costs",
      title: "Cost of Undergraduate Engineering Studies in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Tuition costs depend on the university type, federal state regulations, and local living standards."
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
              "Tuition-free education for domestic and international students across almost all German federal states."
            ],
            [
              "Public Universities (Baden-Württemberg)",
              "€1,500 / Semester",
              "Statutory tuition fee for non-EU students studying in Baden-Württemberg (e.g., KIT, HS Esslingen)."
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
              "Estimated budget for student accommodation (€350–€650), groceries, health insurance, and personal expenses."
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
            "Students should also budget for study materials, flight expenses, health insurance, and visa application fees. Merit-based scholarships such as the DAAD scholarship programs and Deutschlandstipendium are available for qualified students."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Timeline & Steps",
      title: "Engineering Undergraduate Admission Process in Germany",
      groups: [
        {
          t: "p",
          items: [
            "The standard admission procedure for engineering undergraduate applicants consists of nine systematic stages:"
          ]
        },
        {
          t: "timeline",
          items: [
            {
              step: "Step 01",
              title: "Shortlist Universities & Engineering Specializations",
              desc: "Research recognized German universities and select your preferred engineering disciplines and language of instruction."
            },
            {
              step: "Step 02",
              title: "Verify Academic Eligibility & HZB",
              desc: "Determine whether your Class 12 credentials qualify for direct university entry or require a 1-year Studienkolleg (T-Kurs) foundation pathway."
            },
            {
              step: "Step 03",
              title: "Obtain APS India Certification",
              desc: "Submit academic transcripts and certificates to the Academic Evaluation Centre (APS) in New Delhi to obtain the mandatory APS certificate."
            },
            {
              step: "Step 04",
              title: "Prepare Language Certifications",
              desc: "Achieve required language proficiency scores in German (B2/C1) or English (IELTS/TOEFL) matching target university standards."
            },
            {
              step: "Step 05",
              title: "Submit University Applications",
              desc: "Apply via uni-assist or directly through individual university portals prior to application deadlines (typically July 15 for Winter semester)."
            },
            {
              step: "Step 06",
              title: "Complete Entrance Assessments",
              desc: "Sit for the Studienkolleg entrance examination (Aufnahmetest) or program-specific aptitude assessments where mandated."
            },
            {
              step: "Step 07",
              title: "Accept Offer & Pay Semester Fee",
              desc: "Confirm your formal admission letter (Zulassungsbescheid) and pay the initial semester contribution (Semesterbeitrag) to enroll."
            },
            {
              step: "Step 08",
              title: "Open Blocked Account & Insurance",
              desc: "Deposit €11,904 into a federally recognized German Blocked Account (Sperrkonto) and arrange statutory German student health insurance."
            },
            {
              step: "Step 09",
              title: "Apply for German Student Visa",
              desc: "Book your National Visa (Type D) appointment at the German diplomatic mission or VFS center and complete visa processing."
            }
          ]
        },
        {
          t: "p",
          items: [
            "Students should start preparation 9 to 12 months ahead, as learning German, verifying credentials, and completing preparatory courses require ample time."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Accreditation & Quality Standards",
      title: "Engineering Accreditation and Recognition in Germany",
      groups: [
        {
          t: "p",
          items: [
            "Students should verify that the program and university are accredited, and that the degree will satisfy their academic and career aspirations before submitting an application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Engineering degree programs in Germany undergo stringent quality accreditation by statutory agencies like **ASIIN** under the German Accreditation Council (Akkreditierungsrat), adhering to the European EUR-ACE quality framework.",
            "Degrees issued by accredited German universities enjoy universal global recognition under the international Bologna Process.",
            "While engineering is not a strictly state-licensed profession in Germany, the professional title **'Ingenieur'** is legally protected under state engineering laws (Ingenieurgesetze), requiring an accredited university degree.",
            "Graduates intending to practice internationally will find their German engineering degrees widely respected and recognized worldwide."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Prospects & Salary",
      title: "Pay and Employment Options in Germany After Undergraduate Engineering",
      groups: [
        {
          t: "p",
          items: [
            "Engineering graduates in Germany benefit from exceptional career opportunities across automotive, manufacturing, energy, construction, electronics, and industrial software sectors.",
            "**Key career roles for engineering graduates include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Mechanical Engineer",
            "Electrical Engineer",
            "Civil Engineer",
            "Automotive Engineer",
            "Chemical Engineer",
            "Biomedical Engineer",
            "Computer Engineer",
            "Aerospace Engineer",
            "Quality Assurance Engineer",
            "Process & Systems Engineer"
          ]
        },
        {
          t: "ul",
          items: [
            "Indicative starting salaries for entry-level engineers range between **€40,000 and €55,000 gross per year**, depending on the engineering discipline, region, and industry sector.",
            "Engineers with relevant technical expertise, practical internships, and professional experience can command significantly higher earnings.",
            "Speaking German greatly increases employment opportunities, especially in manufacturing, construction, and companies serving the domestic European market.",
            "International graduates are entitled to an **18-month post-study work visa (Jobseeker Residence Permit)** to secure relevant employment and transition toward an EU Blue Card or permanent residency."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Documents for Undergraduate Engineering Studies in Germany",
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
            "Official Class 10 and Class 12 mark sheets and passing certificates.",
            "Proof of Higher Education Entrance Qualification (HZB) and official APS Certificate.",
            "Recognized German language certification (Goethe, TestDaF, DSH, telc) or English test scorecard (IELTS/TOEFL).",
            "Sworn, certified translations into German or English for all regional-language documents.",
            "Tabular Curriculum Vitae (Lebenslauf) and personalized Statement of Purpose (Letter of Motivation).",
            "Studienkolleg application proof or FSP examination certificate (if applicable).",
            "Official University Letter of Admission (Zulassungsbescheid).",
            "Proof of financial resources (€11,904 blocked account deposit) and statutory German student health insurance."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can an Indian student pursue engineering in Germany after 12th standard?",
      a: "Yes. Direct admission is based on the academic credentials of the student and the rules of recognition which apply to their educational background. Indian students completing standard 12-year schooling typically complete a 1-year preparatory foundation course (Studienkolleg T-Kurs) and pass the Feststellungsprüfung (FSP). Students with one year of recognized bachelor's study in India or eligible JEE Advanced scores qualify for direct university admission."
    },
    {
      q: "Is engineering free in Germany for international students?",
      a: "Yes. Many public universities in Germany charge zero general tuition fees for eligible bachelor's programs, requiring only a semester contribution between €150 and €400 covering administrative fees and a regional transit pass. Non-EU international students pay €1,500 per semester in Baden-Württemberg, and private universities set their own tuition fees."
    },
    {
      q: "Is it possible to study an engineering undergraduate degree in Germany in English?",
      a: "Yes, there are select English-taught undergraduate engineering programs available at universities of applied sciences and specialized institutes like KIT's Carl Benz School of Engineering. Learning German (B2 to C1) opens up substantially more university options and enhances career prospects across Germany."
    },
    {
      q: "How long is an engineering undergraduate degree in Germany?",
      a: "The length of study depends on the university type and degree format, but most undergraduate engineering programs take between 3 and 3.5 years (6 to 7 semesters) to complete, often including an integrated practical internship semester."
    },
    {
      q: "What is the expected salary in Germany after earning an undergraduate degree in engineering?",
      a: "Depending on the engineering discipline, industry sector, location, and practical internship experience, entry-level gross salaries typically range from €40,000 to €55,000 per year, with experienced engineers commanding substantially more."
    },
    {
      q: "How can I study abroad with the assistance of Edu Hawk Worldwide Consultancy?",
      a: "Edu Hawk Worldwide assists students with university shortlisting, Studienkolleg / HZB guidance, APS verification, application submission via uni-assist, SOP & CV tailoring, blocked account setup, and German student visa preparation. Contact our overseas education advisors to start your German engineering journey."
    }
  ]
};

export default function UndergraduateEngineeringGermanyHubPage() {
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
      seoPath="/study-abroad/germany/ug/engineering"
    />
  );
}
