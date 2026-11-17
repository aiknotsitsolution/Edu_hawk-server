import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Canada/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Canada/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Canada/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Canada/PublicHealth/cta_bg.webp";
import McGillUniversityImg from "../../../../Images/Abroad/Canada/PublicHealth/McGill_University.webp";
import WaterlooUniversityImg from "../../../../Images/Abroad/Canada/PublicHealth/Waterloo_University.webp";
import SaskatchewanUniversityImg from "../../../../Images/Abroad/Canada/PublicHealth/Saskatchewan_University.webp";
import TheUniversityOfAlbertaImg from "../../../../Images/Abroad/Canada/PublicHealth/The_University_of_Alberta.webp";
import cmsData from "../../../../data/study_abroad/canada/public_health.json";

const page = {
  "name": "Public Health in Canada",
  "country": "Canada",
  "slug": "public_health",
  "title": "Public Health in Canada for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Public Health in Canada: Top universities, English-taught programs, tuition fees (CAD $18,000–$45,000/yr), scholarships, eligibility criteria, and post-graduation work permit (PGWP) opportunities.",
  "keywords": "Study Public Health in Canada, Public Health in Canada for Indian Students, Best Universities in Canada, Cost of Studying in Canada",
  "introTitle": "Indian Students Can Study Public Health in Canada",
  "heroParas": [
    "Disease prevention, health promotion, epidemiology, healthcare systems, environmental health, and population well-being are among the many public health programs in Canada available in Canada. These courses equip students to comprehend public health issues and create evidence-based solutions."
  ],
  "overview": [
    "Disease prevention, health promotion, epidemiology, healthcare systems, environmental health, and population well-being are among the many public health programs in Canada available in Canada. These courses equip students to comprehend public health issues and create evidence-based solutions.",
    "The key advantages for studying public health in Canada are:",
    "Clinical medicine and public health are not the same. Instead of actively diagnosing and treating individual patients, many positions concentrate on population health, research, policy, education, and prevention."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Healthcare & Public Health",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "McGill University, Waterloo University, Saskatchewan University"
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
      "title": "Why Study Public Health in Canada ?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Disease prevention, health promotion, epidemiology, healthcare systems, environmental health, and population well-being are among the many public health programs in Canada available in Canada. These courses equip students to comprehend public health issues and create evidence-based solutions.",
            "The key advantages for studying public health in Canada are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Learn from universities that provide interdisciplinary training, research, and education in public health.",
            "Practical Learning: Certain public health courses in Canada offer opportunities for practical research, fieldwork, internships, and community initiatives.",
            "Explore epidemiology, global health, health policy, biostatistics, environmental health and health promotion.",
            "Research opportunities include studying chronic illnesses, infectious diseases, health disparities and health issues at the community level.",
            "Career Opportunities: Graduates can work in epidemiology, policy analysis, public health research, health program coordination and healthcare administration.",
            "Examine public health concerns that impact various communities and healthcare systems worldwide.",
            "Graduates who meet the requirements can pursue specialized research programs or doctoral studies."
          ]
        },
        {
          "t": "p",
          "items": [
            "Clinical medicine and public health are not the same. Instead of actively diagnosing and treating individual patients, many positions concentrate on population health, research, policy, education, and prevention.",
            "Edu Hawk worldwide consultancy assists students in exploring international study options, comprehending university admission standards, and getting ready for the overseas education journey.."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Courses in Public Health in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "Public health-related undergraduate, graduate, diploma, certificate, and PhD programs are offered by Canadian universities. Depending on their educational background and professional aspirations, Indian students can explore public health courses in Canada for international students."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Public health principles, disease prevention, and community health are introduced throughout the three to four-year Bachelor of Public Health program.",
            "Health systems, human health, and associated scientific topics are covered in the three to four-year Bachelor of Health Sciences program.",
            "Health, society, health promotion, and population well-being are the main topics of the three to four-year Bachelor of Science in Health Studies program.",
            "Master of Public Health (MPH) - 1-2 years - Expands understanding of public health practice, disease prevention, epidemiology, and health policy.",
            "Master of Science in Public Health - 1-2 years - May concentrate on specialized public health issues, data analysis, and research.",
            "Healthcare leadership, administration, and service delivery are the main topics of this 1-2 year Master of Health Administration program.",
            "Master of Health Sciences - 1-2 years - Provides advanced training in fields linked to health.",
            "Graduate Certificate in Public Health - Several months to a year - Offers targeted instruction in particular public health subjects.",
            "Focused on advanced research and academic advancement, the Doctor of Philosophy in Public Health or a Related Field takes from four to six years to complete. |"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Canada's best Public Health Universities",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "McGill University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Public Health.",
              img: McGillUniversityImg
            },
            {
              "name": "Waterloo University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Public Health.",
              img: WaterlooUniversityImg
            },
            {
              "name": "Saskatchewan University",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "Top-ranked Canadian institution offering world-class education and research opportunities in Public Health.",
              img: SaskatchewanUniversityImg
            },
            {
              "name": "University of Alberta",
              "location": "Canada",
              "fee": "CAD $18,000 – $45,000 / Year",
              "desc": "For information on available public health programs , eligibility for international students, tuition costs, course structure, and application dates, visit the official websites of each university before submitting an application. Admission requirements and program availability may differ depending on intake and qualifications.",
              img: TheUniversityOfAlbertaImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Qualifications for Public Health Studies in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "The university, program, and course level all affect the eligibility requirements for public health in Canada.",
            "Regarding Undergraduate Courses",
            "Certain undergraduate programs in public health, health sciences, or health studies may accept applications from Indian students after Class 12.",
            "Common prerequisites consist of:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completing Class 12 at an accredited board.",
            "The university's required academic grades.",
            "Depending on the curriculum, pertinent courses like biology, chemistry, mathematics, or English.",
            "Proficiency in English, if necessary.",
            "Any further prerequisites unique to the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "For a Master of Public Health (MPH) degree",
            "Typically, applicants require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A bachelor's degree from an approved university is recognized.",
            "The minimal GPA or percentage that the university demands.",
            "Proficiency in English, if applicable.",
            "If the program calls for it, relevant work experience or educational background.",
            "A purpose statement or additional application documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "Public health, medical, nursing, pharmacy, biology, health sciences, social sciences, statistics, environmental science, and other related fields are among the undergraduate backgrounds that qualify. But every university has its own prerequisites for admission.",
            "Before applying, students should confirm the MPH entrance criteria in Canada because some programs can have particular requirements for work experience or academic background."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Canada's Public Health Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Academic credentials, English language ability, experience, and program-specific standards are all taken into consideration by universities when evaluating applications. The following could be among the admission requirements for public health in Canada for overseas students:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Academic Requirement",
            "Class 12 for bachelor's programs that qualify; a recognized bachelor's degree for the majority of master's programs.",
            ""
          ],
          "rows": [
            [
              "Academic Performance",
              "The institution's minimum GPA or percentage.",
              ""
            ],
            [
              "English Language Proficiency",
              "If necessary, take the TOEFL iBT, IELTS Academic, or similar recognized exam.",
              ""
            ],
            [
              "Work Experience",
              "Not always necessary, but preferred for some professional MPH programs.",
              ""
            ],
            [
              "Statement of Purpose",
              "Describes academic pursuits, professional aspirations, and motivations for selecting public health.",
              ""
            ]
          ]
        },
        {
          "t": "ul",
          "items": [
            "Recommendation letters and professional or academic references can be needed.",
            "A CV or resume may be necessary, especially for postgraduate applications.",
            "Research proposals are frequently needed for master's and doctorate programs that focus on research.",
            "Depending on the selection procedure, interviews may be necessary for some programs."
          ]
        },
        {
          "t": "p",
          "items": [
            "Because admission requirements might vary significantly, applicants should confirm whether the program they have chosen is course-based, research-based, or practice-oriented."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "The cost of Public Health Education in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "The university, city, length of the course, and whether the program is undergraduate, professional, or research-based all affect how much it costs for Indian students to study public health in Canada.",
            "Projected Annual Costs for Foreign Students",
            "Tuition Costs - CAD 18,000-50,000+",
            "Lodging - CAD 10,000-24,000",
            "Food and groceries - CAD 3,600-7,200",
            "Local Transportation - CAD 1,000-2,400",
            "Books and Study Guides - CAD 500-1,500",
            "Personal Expenses and Health Insurance - CAD 2,000-5,000",
            "Estimated Annual Total - CAD 35,100-90,100+",
            "These are not official university fee quotations, but rather general planning estimations. The actual cost of tuition for public health in Canada varies depending on the program and institution. While research-based programs may provide funding to qualified students, some professional master's programs may charge significantly more.",
            "Extra Costs",
            "Additionally, students should set aside money for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The cost of applying to universities.",
            "Tests of English language competency.",
            "Biometrics fees and study permits.",
            "The cost of traveling to Canada.",
            "The first deposit for lodging.",
            "Health insurance and other fees unique to the university.",
            "Expenses for fieldwork, research, or placement, as appropriate."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Canada's Public Health Admission Procedure",
      "groups": [
        {
          "t": "p",
          "items": [
            "To comprehend the admission procedure for public health courses in Canada , follow these steps.",
            "Step 1: Select Your Level of Study",
            "Choose if you wish to pursue a PhD, graduate certificate, research-based master's, bachelor's degree, or MPH.",
            "Step 2: Choose Your Area of Expertise",
            "Select a field such as biostatistics, environmental health, global health, epidemiology, health promotion, health policy, or healthcare administration.",
            "Step 3: Make a shortlist of universities",
            "Examine the program's structure, costs, location, qualifications for entrance, length of the course, and eligibility for overseas students.",
            "Step 4 : Verify your academic eligibility.",
            "Examine the prerequisite courses, minimum grades, degree requirements, and any applicable work experience requirements.",
            "Step 5 : Prepare the English Language Scores",
            "If the institution requires it, take an approved English proficiency test.",
            "Step 6 : Prepare the application documents",
            "Gather academic records, certifications, passport information, a statement of purpose, references, a resume, and, if necessary, a research proposal.",
            "Step 7: Send in the application",
            "Before the applicable deadline, submit an application using the university's official admissions portal.",
            "Step 8: Fulfill Extra Requirements",
            "If the program calls for it, participate in an interview, send in more paperwork, or get in touch with a possible supervisor.",
            "Step 9: Accept the Offer",
            "Examine the terms of the offer, the tuition deposit, the due dates for payments, and the available financing.",
            "Step 10 : apply for a study permit in Canada.",
            "Assemble the necessary immigration paperwork and proof of financial assistance. Observe Immigration, Refugees and Citizenship Canada's most recent guidelines."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Accreditation & Standards",
      "title": "Registration and Licensing",
      "groups": [
        {
          "t": "p",
          "items": [
            "The majority of general public health positions in Canada do not require a single universal professional license because public health is such a large field. Registration requirements, however, vary by province and vocation.",
            "For Graduates in Public Health",
            "Depending on their credentials and expertise, graduates may find employment in research, health promotion, policy, program coordination, data analysis, community health, or health administration.",
            "Specialized training, real-world experience, professional qualification, or local regulations may be necessary for some jobs.",
            "For Positions in Clinical Healthcare",
            "A medical, nursing, pharmacy, or other regulated clinical license is not granted by an MPH.",
            "For instance, Indian MBBS graduates must follow a different medical licensure procedure if they wish to practice medicine in Canada. In a similar vein, all regulated professionals, including nurses and pharmacists, must adhere to the regulations set forth by their respective authorities.",
            "."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Pay and career opportunities in Canada After Public Health",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates of public health programs in Canada might look for work in government agencies, hospitals, universities, research facilities, nonprofits, consulting businesses, and healthcare organizations.",
            "The following are possible public health positions in Canada"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Coordinator of Public Health Programs",
            "Assists with organizing, carrying out and assessing community or population health initiatives.",
            ""
          ],
          "rows": []
        },
        {
          "t": "ul",
          "items": [
            "Supports disease monitoring, research investigations, and health data analysis as an epidemiology research assistant. |",
            "Examines health trends, assesses programs, and creates reports to help with decision-making as a public health analyst. |"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Health Promotion Specialist",
            "Creates programs to raise health consciousness and promote better habits.",
            ""
          ],
          "rows": [
            [
              "Health Policy Analyst",
              "Investigates population health challenges, healthcare systems, and health policy.",
              ""
            ],
            [
              "Research Coordinator",
              "Oversees project activities, research documentation, and public health studies.",
              ""
            ]
          ]
        },
        {
          "t": "ul",
          "items": [
            "Research and public health planning are supported by the analysis of health data by biostatistics or data analysts. Quantitative training may be necessary for advanced roles. |",
            "Environmental health specialists, according to local regulations and role-specific credentials, work on environmental variables that impact health. |",
            "Supports public health initiatives and international health programs as a global health project officer. |",
            "Planning, operations, service delivery, and management in healthcare organizations are all supported by healthcare administrators. |"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Academic or University Researcher",
            "Teaches public health or does research, frequently requiring postgraduate credentials.",
            ""
          ],
          "rows": []
        },
        {
          "t": "p",
          "items": [
            "Expectations for Salary",
            "Canada's public health pay differs according to experience, education, employer, province, and job title. The pay ranges for entry-level research and program support positions may differ from those of seasoned analysts, epidemiologists, or managers."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed to Learn Public Health in Canada",
      "groups": [
        {
          "t": "p",
          "items": [
            "The specific paperwork varies depending on the program and university. In Canada, the following documents are frequently needed for public health admission:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A current passport.",
            "Certificates and mark sheets for Classes 10 and 12, if appropriate.",
            "Academic transcripts and a bachelor's degree certificate are required for postgraduate entrance.",
            "Transcripts from master's degrees are required for some doctoral applicants.",
            "Results of any necessary English language proficiency tests.",
            "A personal statement or statement of purpose.",
            "Letters of endorsement.",
            "A current curriculum vitae or resume.",
            "A research proposal for pertinent initiatives that rely on research.",
            "If necessary, proof of job experience.",
            "Writing a portfolio or sample, upon request.",
            "Payment confirmation and application forms.",
            "Documentation proving financing or scholarship, if relevant.",
            "A letter of offer from the university and proof of the tuition deposit, if applicable.",
            "Examine the permit paperwork.",
            "Any further paperwork that the university or Canadian immigration authorities request."
          ]
        },
        {
          "t": "p",
          "items": [
            "Candidates must adhere to the translation and document format guidelines set forth by the university. Certified translations may be required for academic publications published in languages other than those recognized by the organization."
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
              "q": "After Class 12, are Indian students able to pursue a career in public health in Canada?",
              "a": "Yes,. Applications for bachelor's degrees in public health, health sciences, or health studies are accepted from Indian students. The majority of MPH programs demand a bachelor's degree."
            },
            {
              "q": "Does studying public health in Canada require NEET?",
              "a": "For public health programs, NEET is typically not a prerequisite for entrance. Academic credentials and course-specific admission requirements are used by universities to evaluate applicants."
            },
            {
              "q": "How long does an MPH take in Canada?",
              "a": "Depending on the university, course structure, internship or practicum requirements, and study method, many MPH programs take one to two years."
            },
            {
              "q": "How much does it cost to study public health in Canada?",
              "a": "In general, living expenditures and tuition could come to at least CAD 35,100-90,100 annually. Applicants should refer to official fee schedules as actual costs differ by city and university."
            },
            {
              "q": "After earning an MPH, can I get employment in Canada?",
              "a": "Graduates may seek for pertinent positions in healthcare administration, epidemiology support, research, public health initiatives, and health policy. Qualifications, experience, work authorization, company criteria, and the job market all influence employment. A job or permanent residence are not guaranteed by an MPH alone. Use Edu Hawk worldwide consultancy to Plan Your Public Health Education in Canada Careful consideration of university options, eligibility, tuition costs, and professional objectives is necessary while selecting a course. Students can research alternatives and be ready for the application procedure with the aid of Edu Hawk. If you want to study public health in Canada as an Indian student, do your homework ahead of time and ask the university directly about the most recent prerequisites for admission. Study Public Health in Canada Study Public Health in Canada for Indian Students Public Health Courses in Canada Public Health Universities in Canada MPH in Canada for Indian Students Master of Public Health in Canada Public Health Admission Requirements in Canada Public Health Eligibility in Canada Cost of Studying Public Health in Canada Public Health Tuition Fees in Canada Public Health Jobs in Canada"
            }
          ]
        }
      ]
    }
  ]
};

export default function PublicHealthCanada() {
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
      seoPath="/study-abroad/canada/public-health"
    />
  );
}
