import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/cta_bg.webp";
import UniversityOfManitobaImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/University_of_Manitoba.webp";
import TorontoMetropolitanUniversityImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/Toronto_Metropolitan_University.webp";
import QueensUniversityImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/Queens_University.webp";
import UniversityOfOttawaImg from "../../../../../Images/Abroad/Canada/Engineering_UG/General/University_of_Ottawa.webp";
import cmsData from "../../../../../data/study_abroad/canada/ug_hub.json";

const page = {
  "name": "Undergraduate Engineering in Canada",
  "country": "Canada",
  "slug": "ug_hub",
  "title": "Undergraduate Engineering in Canada for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Undergraduate Engineering in Canada: Top universities, English-taught programs, tuition fees (CAD $18,000–$45,000/yr), scholarships, eligibility criteria, and post-graduation work permit (PGWP) opportunities.",
  "keywords": "Study Undergraduate Engineering in Canada, Undergraduate Engineering in Canada for Indian Students, Best Universities in Canada, Cost of Studying in Canada",
  "introTitle": "Study Undergraduate Engineering Studies in Canada",
  "heroParas": [
    "Students interested in engineering, technology, innovation, and applied sciences are drawn to Canada. Undergraduate engineering programs in Canada are offered by Canadian institutions and integrate theoretical education, lab work, design projects, and real-world experience."
  ],
  "overview": [
    "Students interested in engineering, technology, innovation, and applied sciences are drawn to Canada. Undergraduate engineering programs in Canada are offered by Canadian institutions and integrate theoretical education, lab work, design projects, and real-world experience.",
    "After Class 12, studying engineering in Canada can lay the groundwork for jobs in a variety of fields, including technology, infrastructure, manufacturing, construction and energy. The chosen specialization, abilities, job experience, and company criteria all influence career options."
  ],
  "level": "Undergraduate",
  "crumb": "Engineering",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate"
    },
    {
      "label": "Course Duration",
      "value": "4 Years (UG) / 2 Years (PG)"
    },
    {
      "label": "Top Institutions",
      "value": "Manitoba, Toronto Metropolitan University, Queen's University"
    },
    {
      "label": "Medium of Study",
      "value": "English & French Taught"
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Canada",
      "title": "Why Study Engineering Canada?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students interested in engineering, technology, innovation, and applied sciences are drawn to Canada. Undergraduate engineering programs in Canada are offered by Canadian institutions and integrate theoretical education, lab work, design projects, and real-world experience.",
            "Key advantages for studying engineering in Canada are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Learn engineering fundamentals through labs, design-based learning, and formal academic programs.",
            "Mechanical, civil, electrical, computer, chemical, aerospace, biomedical, and environmental engineering are just a few of the many specializations available.",
            "Design projects, lab sessions, industry projects, and co-ops are all common components of engineering courses in Canada.",
            "Opportunities to obtain workplace experience through internships and co-ops are offered by certain colleges.",
            "Examine topics including advanced manufacturing, robotics, renewable energy, automation, and artificial intelligence.",
            "Research Opportunities: Undergraduate students who meet the requirements can take part in laboratory work and research projects.",
            "Study with students from various academic and cultural backgrounds in an international setting.",
            "Graduates can pursue research programs, master's degrees, or specialized engineering credentials."
          ]
        },
        {
          "t": "p",
          "items": [
            "After Class 12, studying engineering in Canada can lay the groundwork for jobs in a variety of fields, including technology, infrastructure, manufacturing, construction and energy. The chosen specialization, abilities, job experience, and company criteria all influence career options."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Canada's Undergraduate Engineering Programs",
      "groups": [
        {
          "t": "p",
          "items": [
            "Undergraduate engineering degrees in a variety of specializations are available at Canadian universities. Depending on their interests and educational background, Indian students can explore the following Bachelor of Engineering degrees in Canada."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Civil Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Computer Engineering",
            "Chemical Engineering",
            "Software Engineering",
            "Aerospace Engineering",
            "Biomedical Engineering",
            "Environmental Engineering",
            "Industrial Engineering",
            "Mechatronics Engineering"
          ]
        },
        {
          "t": "p",
          "items": [
            "Universities differ in terms of course titles, availability, and length. Before students choose their specialization, several universities provide a generic first-year engineering program."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Canada's Best Universities for Undergraduate Engineering",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "University of Manitoba",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Toronto Metropolitan University Engineering disciplines including computer, aerospace, mechanical, electrical, and civil",
              img: UniversityOfManitobaImg
            },
            {
              "name": "Toronto Metropolitan University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Toronto Metropolitan University Engineering disciplines including computer, aerospace, mechanical, electrical, and civil",
              img: TorontoMetropolitanUniversityImg
            },
            {
              "name": "Queen's University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Queen's University Civil, mechanical, electrical, chemical, computer, and other engineering disciplines",
              img: QueensUniversityImg
            },
            {
              "name": "University of Ottawa",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Toronto Metropolitan University Engineering disciplines including computer, aerospace, mechanical, electrical, and civil",
              img: UniversityOfOttawaImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Qualifications for Undergraduate Engineering Education in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "Class 12 graduates from India are eligible to apply to undergraduate engineering programs in Canada for overseas students",
            "Educational prerequisites",
            "Typically, applicants require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completing Class 12 at an accredited Indian board.",
            "Physics and mathematics.",
            "English, chemistry, and other courses that the particular university requires.",
            "Excellent academic standing, particularly in required courses.",
            "Proficiency in English, where necessary."
          ]
        },
        {
          "t": "p",
          "items": [
            "While competitive engineering schools may demand much higher scores than the minimum eligibility barrier, some universities set minimum grades in specific courses.",
            "Students should verify that their selected institution's specific requirements are met by the combination of subjects they are taking in Class 12.",
            "Additional Eligibility Factors"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The prerequisites for subjects and grades may differ for applicants with multinational curricula.",
            "Prior to specialization, several colleges provide a first-year general engineering program.",
            "Different considerations may be given to Advanced Placement, International Baccalaureate or other qualifications.",
            "Transfer students could be required to submit course descriptions and university transcripts.",
            "If prerequisites are not met, bridge courses in science or mathematics may be necessary."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Canada's Undergraduate Engineering Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Academic achievement, necessary courses, English language skills, and application materials are evaluated by universities. Each program and school has different admission requirements for engineering in Canada after Class 12."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 12 Certificate",
            "Academic Transcripts",
            "Physics and mathematics are necessary for the majority of engineering curricula.",
            "Chemistry is a prerequisite for several disciplines, depending on the university.",
            "English Language Proficiency , If necessary, take the TOEFL iBT, IELTS Academic or similar recognized exam.",
            "Minimum Grades, Subject averages and minimum grades related to the university.",
            "Some programs or colleges require a personal statement or supplemental application.",
            "Recommendation letters are only necessary for some programs or in particular admission situations."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Additional Assessment or Interview",
            "May be applicable to certain programs."
          ],
          "rows": [
            [
              "Portfolio or Design Work",
              "Usually not necessary for admission to a conventional engineering program, but it might be asked for in some."
            ]
          ]
        },
        {
          "t": "ul",
          "items": [
            "Application fees vary depending on the application system and university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Language Requirements in English",
            "IELTS Academic, TOEFL iBT, and other recognized English proficiency exams are accepted by numerous colleges. Under certain circumstances, certain institutions might waive the requirement.",
            "The program and university determine the necessary score. Instead of depending on a single universal score for all Canadian engineering universities, students should review the most recent English language requirements for engineering in Canada."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "The cost of Undergraduate Engineering Education in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the university, province, program, and academic year, the cost of studying engineering in Canada for Indian students varies greatly.",
            "Projected Annual Costs"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Tuition Costs - CAD 35,000-75,000+",
            "Lodging - CAD 10,000-24,000",
            "Food and groceries - CAD 3,600-7,200",
            "Local Transportation - CAD 1,000-2,400",
            "Study materials, software, and books - CAD 800-1,800",
            "Personal Expenses and Health Insurance - CAD 2,000-5,000",
            "Average Annual Total - CAD 52,400-115,400+"
          ]
        },
        {
          "t": "p",
          "items": [
            "These are not official quotes for university fees; rather, they are general planning estimates. The institution, program, and academic year all affect the actual undergraduate engineering tuition fees in Canada.",
            "Extra Costs",
            "Additionally, students should set aside money for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The cost of applying to universities.",
            "English language assessments.",
            "Biometrics fees and study permits.",
            "The cost of traveling to Canada.",
            "The first deposit for lodging.",
            "Any applicable laboratory fees, software, or engineering equipment.",
            "Expenses associated with co-ops or internships, if applicable.",
            "University-specific fees and health insurance."
          ]
        },
        {
          "t": "p",
          "items": [
            "Always determine the total cost of the degree by consulting the university's current foreign tuition schedule."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Canada's Undergraduate Engineering Admissions Procedure",
      "groups": [
        {
          "t": "p",
          "items": [
            "To comprehend the undergraduate engineering admission procedure in Canada, follow these steps.",
            "Step 1 : Selecting Your Engineering Specialization",
            "Exploring engineering fields such as computer, mechanical, electrical, chemical, software, aerospace, biomedical, and environmental.",
            "Step 2: Make a shortlist of universities",
            "Examine the cost of tuition, location, course design, specializations, co-ops, lab facilities, and eligibility for international students.",
            "Step 3: Verify Your Eligibility for Class 12",
            "Examine each university's minimal grade requirements for math, physics, chemistry, and English.",
            "Step 4: Verify Your English Language Proficiency",
            "Determine the minimal scores for the approved English tests. If necessary, set up a test.",
            "Step 5 : Prepare the application materials",
            "Gather certifications, passport information, academic transcripts, English test results, and any additional application materials.",
            "Step 6: Send in Your University Applications",
            "Apply using the appropriate provincial application system or the university's official portal, adhering to the guidelines for foreign applicants.",
            "Step 7: Fulfill Any Further Requirements",
            "If the institution requests additional paperwork, personal statements, or other documentation, provide them.",
            "Step 8: Examine the Offer of Admission",
            "Examine the degree, admission requirements, tuition costs, scholarship information, deposit due dates, and acceptance guidelines.",
            "Step 9: Make Funding Arrangements",
            "Make a reasonable budget for living expenses such as insurance, travel, lodging, food, and tuition.",
            "Step 10: apply for a study permit in Canada.",
            "Prepare the necessary paperwork and financial proof in accordance with Immigration, Refugees and Citizenship Canada's most recent guidelines.",
            "Step 11: Get Ready to Arrive",
            "Make travel, lodging, health insurance, and university enrollment arrangements. Examine any prerequisites for co-op participation or lab access."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Accreditation & Standards",
      "title": "Professional Recognition and Accreditation",
      "groups": [
        {
          "t": "p",
          "items": [
            "When selecting an undergraduate program, engineering accreditation in Canada is a crucial factor to take into account. Through its accreditation system, Engineers Canada grants accreditation to qualified undergraduate engineering programs. The academic prerequisites utilized in the Canadian professional engineering licensure process are linked to accreditation.",
            "Verify the degree program's accreditation status and whether it relates to the appropriate graduation year before accepting an offer.",
            "Canadian Professional Engineering Licensing",
            "Provinces and territories have different requirements, although they often consist of:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A respectable educational background.",
            "Work experience in engineering that is relevant.",
            "Proficiency in both professional and ethical matters.",
            "Any necessary tests or evaluations.",
            "Submission to the appropriate engineering authority at the provincial or territorial level.",
            "To obtain a license, international students who complete a Canadian engineering program must fulfill the conditions set forth by the relevant regulator."
          ]
        },
        {
          "t": "p",
          "items": [
            "A professional engineering license is not always granted after earning an engineering degree."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Pay and career opportunities in Canada Following Undergraduate Engineering",
      "groups": [
        {
          "t": "p",
          "items": [
            "Careers in technology, construction, manufacturing, energy, transportation, telecommunications, aerospace, and other areas are available to graduates of undergraduate engineering schools in Canada.",
            "The following are possible engineering jobs in Canada for graduates"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Mechanical Engineer - Product design, production, machinery, and mechanical systems",
            "Civil Engineer - Construction projects, buildings, transportation, and infrastructure",
            "Electrical Engineer - Electronic equipment, power generation, and electrical systems",
            "Computer Engineer - Computing technologies, embedded systems, and computer hardware",
            "Software Engineer - System design, application engineering, and software development",
            "Chemical Engineer - Chemical processes, materials, and industrial production"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Aerospace Engineer",
            "Aerospace systems, aircraft, and associated technologies"
          ],
          "rows": []
        },
        {
          "t": "ul",
          "items": [
            "Biomedical Engineer - Biomedical systems, healthcare technologies, and medical devices",
            "Environmental Engineer - Pollution control, water systems, and environmental protection"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Industrial Engineer",
            "Production systems, operations, and process enhancement"
          ],
          "rows": []
        },
        {
          "t": "ul",
          "items": [
            "Mechatronics Engineer - Robotics, automation, and integrated mechanical-electronic systems"
          ]
        },
        {
          "t": "p",
          "items": [
            "Expectations for Salary",
            "In Canada, engineering salaries differ according to specialization, province, company, experience, and professional duties. The pay ranges for software, civil, mechanical, electrical, and other engineering jobs vary."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed for Canadian Undergraduate Engineering Studies",
      "groups": [
        {
          "t": "p",
          "items": [
            "Different documentation may be needed by immigration officials and the university. The following documents are often needed for engineering admission in Canada:",
            "Documents for University Applications"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A current passport.",
            "The certificate and mark sheet for Class 10.",
            "Mark sheets and certificates for Class 12, or anticipated grades if approved.",
            "Academic records.",
            "Results of any necessary English language proficiency tests.",
            "The application for a university.",
            "Confirmation of application fee payment.",
            "If necessary, a personal statement or additional application.",
            "Letters of recommendation, upon request.",
            "Information on any additional requirements, if any.",
            "Scholarship application materials, if necessary.",
            "A letter of offer from the university and proof of the tuition deposit, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Preparing Documents for Study Permits",
            "Typical documentation for preparing a study permit could be:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A valid travel document or passport.",
            "The Canadian institution's admission letter.",
            "Evidence of funding.",
            "If necessary and not exempt, a provincial or territorial attestation letter (PAL/TAL).",
            "Examine the application forms and supporting documentation for permits.",
            "Biometrics, if necessary.",
            "A medical checkup or other documentation, if the immigration authorities need it."
          ]
        },
        {
          "t": "p",
          "items": [
            "Before submitting an application, candidates should review the official university instructions and the most recent Canadian immigration guidelines as requirements are subject to change."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "FAQs",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "After Class 12, are Indian students able to pursue engineering studies in Canada?",
              "a": "Indeed. After Class 12, Indian students who fulfill the academic, subject, and English language requirements of the university are eligible to apply for undergraduate engineering programs. In general, physics and mathematics are necessary requirements."
            },
            {
              "q": "Is JEE a prerequisite for admission to Canadian undergraduate engineering programs?",
              "a": "For entrance to Canadian undergraduate engineering programs, JEE is typically not a prerequisite. Class 12 results and other institution-specific requirements are typically evaluated by universities. Examine each university's admissions policy."
            },
            {
              "q": "How long does a Canadian undergraduate engineering degree take?",
              "a": "Engineering undergraduate degrees typically require four years to complete. Co-ops and extended study arrangements are features of several programs that might lengthen the overall time."
            },
            {
              "q": "How much does it cost Indian students to study engineering in Canada?",
              "a": "As a general planning estimate, living expenditures and tuition might come to at least CAD 52,400-115,400 annually. The actual costs differ depending on the program, city, and university."
            },
            {
              "q": "After earning my engineering degree, can I get employment in Canada?",
              "a": "Subject to employer criteria and relevant immigration regulations, graduates may investigate career options in engineering and related areas. The student's program, school, and the immigration laws in force at the time of application all affect their eligibility for a post-graduation work visa. Obtaining a degree does not ensure employment, a work permit, or permanent residency. Use Edu Hawk worldwide consulting to Plan Your Engineering Studies in Canada Comparing universities, tuition costs, specializations, eligibility requirements, and career objectives is necessary while selecting the best engineering school. Students can research study alternatives and be ready for the application process with the aid of Edu Hawk. If you want to study undergraduate engineering in Canada as an Indian student, start looking into universities as soon as possible and ask your chosen university directly about the most recent prerequisites for admission."
            }
          ]
        }
      ]
    }
  ]
};

export default function UndergraduateEngineeringCanada() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle || page.name,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: (cmsData?.overview && cmsData.overview.length > 0 && cmsData.overview[0] !== "")
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
    seo: {
      title: cmsData?.seo?.title || page.title,
      description: cmsData?.seo?.description || page.description,
      keywords: cmsData?.seo?.keywords || page.keywords,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/canada/ug/engineering"
    />
  );
}
