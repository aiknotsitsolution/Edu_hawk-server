import cmsData from "../../../../data/study_abroad/australia/public_health.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/PublicHealth/public_health_aus_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/PublicHealth/public_health_aus_hero_bg.webp";
import clinicalImg from "../../../../Images/Abroad/Australia/PublicHealth/public_health_aus_clinical.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/PublicHealth/public_health_aus_cta_bg.webp";

// University Campus Images
import queenslandImg from "../../../../Images/Abroad/Australia/PublicHealth/University_of_Queensland.webp";
import unswImg from "../../../../Images/Abroad/Australia/PublicHealth/UNSW_Sydney.webp";
import anuImg from "../../../../Images/Abroad/Australia/PublicHealth/Australian_National_University.webp";

const sideImg = clinicalImg;

const page = {
  name: "Public Health in Australia",
  country: "Australia",
  slug: "public-health",
  title: "Public Health in Australia for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Public Health in Australia for Indian students. Learn about Bachelor of Public Health, Master of Public Health (MPH), top universities (UQ, UNSW, ANU), eligibility, fees, career opportunities, and visa requirements.",
  keywords:
    "Study Public Health in Australia for Indian Students Best Public Health Universities in Australia Public Health Courses in Australia After 12th Master of Public Health in Australia for Indian Students Public Health Admission Requirements in Australia Public Health Fees in Australia for Indian Students Public Health Scholarships in Australia for International Students Public Health Course Duration in Australia IELTS and PTE Requirements for Public Health in Australia Public Health Specializations in Australia Public Health Admission Process in Australia for Indian Students Career Opportunities After Studying Public Health in Australia Public Health Courses in Australia for MBBS Graduates Public Health Research Programs in Australia for International Students Australian Student Visa Requirements for Indian Public Health Students",
  introTitle: "Public health in Australia",
  heroParas: [
    "Enhancing community and population health and well being is the main goal of public health. It entails avoiding illness, encouraging healthy lifestyles, analyzing health data, creating health policies, and addressing variables that have an impact on people's health."
  ],
  overview: [
    "Undergraduate degrees, graduate certificates, postgraduate degrees, diplomas, and research programs are all available in Australia for public health education. Indian students may find appropriate study options in fields like medical, nursing, pharmacy, physiotherapy, biological sciences, psychology, and environmental science."
  ],
  level: "Undergraduate & Postgraduate",
  crumb: "Healthcare & Public Health",

  stats: [
    { label: "Degree Choices", value: "BPubHlth, MPH, PhD" },
    { label: "Course Duration", value: "1 to 3 Years Full-Time" },
    { label: "Top Public Health Schools", value: "UQ, UNSW Sydney, ANU" },
    { label: "Recognition", value: "CAPHIA & Global Health Bodies" }
  ],

  faqs: [
    {
      q: "Is it possible for Indian students to study public health in Australia?",
      a: "Indeed. Subject to the entrance standards of each course, Indian students may apply to qualified Australian universities for undergraduate, graduate, and research programs."
    },
    {
      q: "What is the Master of Public Health?",
      a: "A postgraduate degree that covers topics including epidemiology, biostatistics, health promotion, global health, research methodologies, and health policy is the Master of Public Health."
    },
    {
      q: "Can I pursue a public health degree in India after earning my MBBS?",
      a: "Indeed. Subject to the university's admission standards, MBBS graduates may investigate Master of Public Health programs. Certain courses might provide chances for relevant research or electives."
    },
    {
      q: "Can students with backgrounds in physiotherapy, nursing, or pharmacy apply?",
      a: "Applicants from a variety of health-related fields are taken into consideration by numerous universities. The particular course and the applicant's educational history determine eligibility."
    },
    {
      q: "What is the duration of an Australian Master of Public Health program?",
      a: "Depending on the university, prior credentials, and available credit, many programs last one to two years."
    },
    {
      q: "Indian students looking to study public health in Australia might get assistance from Edu Hawk Worldwide Consultancy .",
      a: "Our advice could consist of: Recognizing undergraduate and graduate programs, Examining academic eligibility, Making a short list of appropriate universities, Comparing projected prices and course structures, Recognizing the English language requirements, Examining potential scholarships, Putting application materials in order, Giving advice on the paperwork for student visas, and assisting with pre-departure planning."
    }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Public Health?",
      groups: [
        {
          t: "p",
          items: [
            "Examine programs at reputable Australian universities for high-quality education."
          ]
        },
        {
          t: "ul",
          items: [
            "Practical Learning: Fieldwork, placements, group projects, and research are all part of several curricula.",
            "Examine health issues that impact communities in various nations from a global health perspective.",
            "Integrate your understanding of the social sciences, health sciences, statistics, and policy through interdisciplinary learning.",
            "Options for Specialization: Examine biostatistics, environmental health, global health, epidemiology, and health promotion.",
            "Research Opportunities: Gain expertise in disease prevention, health data analysis, and evidence-based decision-making.",
            "Career Diversity: Look into positions in research, policy, public health initiatives, healthcare institutions, and non-governmental organizations."
          ]
        },
        {
          t: "p",
          items: [
            "Edu Hawk Worldwide Consultancy helps students prepare for their international education journey, understand university admission requirements, and investigate international study possibilities."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Popular Courses",
      title: "Australian Public Health Courses",
      groups: [
        {
          t: "p",
          items: [
            "Australian universities offer world-renowned public health qualifications focusing on disease prevention, epidemiology, health policy, and global health leadership."
          ]
        },
        {
          t: "cards",
          items: [
            {
              level: "Undergraduate Degree",
              duration: "Typically 3 Years",
              title: "Public Health Bachelor's Degree",
              desc: "Population health, illness prevention, health promotion, health systems, and public health research are all covered in this undergraduate program.",
              eligibility: "Completion of Class 12 or equivalent qualification meeting institutional academic and English benchmarks."
            },
            {
              level: "Undergraduate Degree",
              duration: "Typically 3 Years",
              title: "Health Science Bachelor's Degree",
              desc: "A more comprehensive health-science degree that can cover community health, public health, health promotion, or health policy.",
              eligibility: "Secondary school graduation with science or social science background and university minimum GPA."
            },
            {
              level: "Postgraduate Degree",
              duration: "Typically 1.5 to 2 Years",
              title: "Public Health Master's Degree (MPH)",
              desc: "One of the primary alternatives for students who wish to pursue a career in public health. Epidemiology, biostatistics, health systems, health promotion, research techniques, and public health policy.",
              eligibility: "Recognised bachelor's degree in any discipline (or health-related field for accelerated 1.5-year duration) plus English proficiency."
            },
            {
              level: "Postgraduate Degree",
              duration: "Usually 1 to 2 Years",
              title: "Global Health Master's Program",
              desc: "Focuses on global health efforts, health systems, disease prevention, health disparities, international health concerns, and health services management.",
              eligibility: "Approved undergraduate degree in health, management, or social sciences with required English language scores."
            },
            {
              level: "Graduate Diploma",
              duration: "0.5 to 1 Year Full-Time",
              title: "Graduate Diploma in Public Health / Epidemiology",
              desc: "These credentials may be appropriate for students who wish to advance onto a relevant master's program with credit or develop specialized abilities in biostatistics and health promotion.",
              eligibility: "Relevant prior bachelor's degree or documented professional healthcare experience."
            },
            {
              level: "Doctoral Research",
              duration: "Typically 3 to 4 Years Full-Time",
              title: "Public Health Doctor of Philosophy (PhD)",
              desc: "Public Health Doctor of Philosophy, Doctor of Philosophy in Epidemiology, Global Health Doctor of Philosophy, and Doctor of Philosophy in Health Policy research initiatives.",
              eligibility: "Academic credentials, research preparedness, and the particular faculty supervisory requirements of the university."
            }
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Public Health",
      groups: [
        {
          t: "h4",
          text: "Core Disciplines & Specialization Pathways"
        },
        {
          t: "p",
          items: [
            "Depending on your professional background and career interests, Australian public health programs offer structured specializations across key disciplines:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Epidemiology:** The study of disease distribution, patterns, causation, and population-wide prevention.",
            "**Biostatistics:** Applying mathematical and statistical modeling to medical, epidemiological, and healthcare data.",
            "**Global Health:** Addressing health emergencies, health systems, and disparities that transcend international borders.",
            "**Health Promotion:** Developing community initiatives, preventive lifestyle interventions, and health education campaigns.",
            "**Environmental Health:** Assessing environmental risk factors, toxic exposures, sanitation, and planetary health protection.",
            "**Health Policy & Economics:** Analyzing healthcare financing, resource allocation, and laws shaping population welfare.",
            "**Health Services Management:** Enhancing hospital administration, healthcare leadership, and clinical service delivery.",
            "**Infectious Disease Control:** Disease surveillance, outbreak response, immunization policies, and pandemic preparedness.",
            "**Chronic Disease Prevention:** Evidence-based interventions for cardiovascular conditions, diabetes, and lifestyle illnesses.",
            "**Occupational Health & Safety:** Identifying workplace hazards, ergonomic risks, and occupational disease prevention."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities in Australia to Consider",
      lead: [
        "When conducting research on public health and associated programs, the following universities are good places to start."
      ],
      unis: [
        {
          name: "Queensland University",
          img: queenslandImg,
          location: "Brisbane, Queensland, Australia",
          desc: "The University of Queensland School of Public Health is consistently ranked among the world's leading public health institutions, offering world-class Master of Public Health (MPH) specialisations in epidemiology, global health, and health promotion.",
          fee: "AUD 38,000–46,000 / year",
          duration: "1.5 to 2 Years Master of Public Health",
          link: "https://www.uq.edu.au/"
        },
        {
          name: "New South Wales University",
          img: unswImg,
          location: "Sydney, New South Wales, Australia",
          desc: "UNSW Sydney's School of Population Health delivers renowned Master of Public Health and Master of Global Health degrees featuring advanced biostatistics, infectious disease control, and health systems leadership.",
          fee: "AUD 40,000–48,000 / year",
          duration: "1 to 2 Years Master of Public Health",
          link: "https://www.unsw.edu.au/"
        },
        {
          name: "National University of Australia",
          img: anuImg,
          location: "Canberra, ACT, Australia",
          desc: "The Australian National University National Centre for Epidemiology and Population Health delivers elite research and coursework degrees in public health, policy evaluation, and applied epidemiology.",
          fee: "AUD 42,000–50,000 / year",
          duration: "2 Years Master of Public Health",
          link: "https://www.anu.edu.au/"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Qualifications for Students from India",
      groups: [
        {
          t: "h4",
          text: "Courses in Undergraduate Public Health"
        },
        {
          t: "p",
          items: [
            "After Class 12, applicants might need to fulfill the following prerequisites:"
          ]
        },
        {
          t: "ul",
          items: [
            "Earning a Class 12 diploma or recognized equivalent credential.",
            "Academic standing that satisfies the minimum entry standards for admission to the university.",
            "Preparatory topics in biology, mathematics, or related science subjects.",
            "Demonstrated proficiency in English language testing.",
            "Any additional program-specific requirements specified by the faculty."
          ]
        },
        {
          t: "h4",
          text: "Public Health Master's (Postgraduate Entry)"
        },
        {
          t: "p",
          items: [
            "Universities maintain structured entry standards for postgraduate public health. Candidates holding a recognized bachelor's degree in a relevant or related discipline may be given consideration.",
            "Backgrounds that are pertinent could be:"
          ]
        },
        {
          t: "ul",
          items: [
            "Medicine, MBBS, and Allied Health Sciences",
            "Nursing and Midwifery",
            "Pharmacy and Pharmaceutical Sciences",
            "Physiotherapy and Occupational Therapy",
            "Dentistry and Oral Health",
            "Biological Sciences, Biotechnology, and Biochemistry",
            "Psychology and Behavioral Sciences",
            "Environmental Sciences and Ecology",
            "Health-related Social Sciences, Economics, and Statistics"
          ]
        },
        {
          t: "h4",
          text: "Research & Doctoral (PhD) Programs"
        },
        {
          t: "p",
          items: [
            "In general, candidates must hold an appropriate Master's degree (such as MPH or MSc) or first-class Honours degree with proven research preparation, an approved research proposal, and supervisor confirmation."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Language Testing",
      title: "English Proficiency Requirements",
      groups: [
        {
          t: "p",
          items: [
            "Because public health professionals communicate with diverse communities, evaluate scientific research, and author policy reports, strong English competency is essential for admission."
          ]
        },
        {
          t: "h4",
          text: "Accepted English Language Tests & Benchmarks"
        },
        {
          t: "table",
          headers: ["Language Examination", "Typical Undergraduate Benchmark", "Typical Postgraduate (MPH) Benchmark"],
          rows: [
            ["Academic IELTS", "Overall 6.5 (no sub-score < 6.0)", "Overall 6.5 – 7.0 (no sub-score < 6.5)"],
            ["Academic PTE", "Overall 58 (no communicative skill < 50)", "Overall 65 (no communicative skill < 58)"],
            ["TOEFL iBT", "Overall 79 (Writing 21)", "Overall 85 – 94 (Writing 24)"]
          ]
        }
      ]
    },
    {
      slot: "testing",
      eyebrow: "Selection & Entry",
      title: "Admission Tests and Selection",
      groups: [
        {
          t: "p",
          items: [
            "There is no single uniform entrance exam (such as NEET) required for international students to pursue public health programs in Australia."
          ]
        },
        {
          t: "h4",
          text: "Admission Could Be Determined By:"
        },
        {
          t: "ul",
          items: [
            "Prior educational background and academic transcript standing",
            "Grade-point average (GPA) or percentage in qualifying examinations",
            "Relevance of previous undergraduate courses and foundational science units",
            "Proficiency in English language assessments",
            "Relevant healthcare or community volunteer experience, where applicable",
            "Academic references, statement of purpose (SOP), and research proposal for research degrees"
          ]
        },
        {
          t: "p",
          items: [
            "Indian students should note that a degree in public health does not require NEET. Always verify specific course criteria with official institutional guidelines."
          ]
        }
      ]
    },
    {
      slot: "duration",
      eyebrow: "Study Timeline",
      title: "Duration of Public Health Courses",
      groups: [
        {
          t: "p",
          items: [
            "The duration of public health education in Australia varies depending on the level of entry, prior academic qualifications, and research commitments:"
          ]
        },
        {
          t: "table",
          headers: ["Degree / Program Level", "Typical Course Duration", "Study Format & Key Details"],
          rows: [
            ["Bachelor of Public Health", "3 Years Full-Time", "Comprehensive undergraduate foundation in illness prevention and community health"],
            ["Bachelor of Health Science", "3 Years Full-Time", "Broad health foundations with specialized majors in public health or health policy"],
            ["Master of Public Health (MPH)", "1.5 to 2 Years Full-Time", "Accelerated 1.5 years for cognate health degree holders; 2 years for general degree graduates"],
            ["Master of Global Health & Management", "1 to 2 Years Full-Time", "Specialist coursework covering international health systems, economics, and leadership"],
            ["Graduate Diploma in Public Health", "1 Year Full-Time", "Structured postgraduate diploma with credit transfer options into the master's program"],
            ["PhD in Public Health & Epidemiology", "3 to 4 Years Full-Time", "Terminal research degree including supervised dissertation and clinical research publications"]
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Living Expenses and Tuition Fees",
      groups: [
        {
          t: "p",
          items: [
            "The cost of international tuition varies depending on the school, degree, course load, campus city, and year of admission."
          ]
        },
        {
          t: "h4",
          text: "Estimated Annual Tuition Fees"
        },
        {
          t: "table",
          headers: ["Program Level", "Estimated Annual Tuition (AUD)", "Standard Course Duration"],
          rows: [
            ["Bachelor of Public Health", "AUD 34,000 – AUD 42,000 / year", "3 Years Full-Time"],
            ["Bachelor of Health Science", "AUD 34,000 – AUD 42,000 / year", "3 Years Full-Time"],
            ["Master of Public Health (MPH)", "AUD 36,000 – AUD 46,000 / year", "1.5 – 2 Years Full-Time"],
            ["Master of Global Health / Health Management", "AUD 36,000 – AUD 45,000 / year", "1.5 – 2 Years Full-Time"],
            ["Graduate Diploma in Public Health", "AUD 32,000 – AUD 40,000 / year", "1 Year Full-Time"],
            ["PhD in Public Health & Epidemiology", "AUD 34,000 – AUD 44,000 / year", "3 – 4 Years Full-Time"]
          ]
        },
        {
          t: "h4",
          text: "Estimated Living and Educational Expenses"
        },
        {
          t: "table",
          headers: ["Expense Category", "Estimated Cost (AUD)", "Details & Notes"],
          rows: [
            ["Living & Accommodation", "AUD 20,000 – AUD 29,710 / year", "Rental accommodation, utilities, groceries, and daily transit"],
            ["Overseas Student Health Cover (OSHC)", "AUD 600 – AUD 850 / year", "Mandatory medical and hospital insurance for student visa holders"],
            ["Study Guides, Software & Books", "AUD 600 – AUD 1,200 / year", "Statistical software (SPSS/R/Stata), public health textbooks, and journals"],
            ["Fieldwork & Practicum Clearances", "AUD 200 – AUD 450", "Community health placement verification, police checks & WWC check"],
            ["Daily Transit, Internet & Mobile", "AUD 2,000 – AUD 3,500 / year", "Public transport concessions, broadband internet, and phone connectivity"]
          ]
        },
        {
          t: "pills",
          items: [
            "Lodging and utilities",
            "Food and meals",
            "Public transportation",
            "Internet and mobile phone",
            "Study guides, software, and books",
            "Health Coverage for International Students (OSHC)",
            "Fieldwork & practicum clearances",
            "Travel and personal emergency costs"
          ]
        }
      ]
    },
    {
      slot: "scholarships",
      eyebrow: "Financial Aid",
      title: "Indian Students' Scholarships",
      groups: [
        {
          t: "p",
          items: [
            "The following financial options are available to Indian students:"
          ]
        },
        {
          t: "ul",
          items: [
            "Merit-based scholarships at universities",
            "Tuition-fee scholarships for international students",
            "Faculty-specific honors",
            "Scholarships for research for qualified postgraduate candidates",
            "scholarships provided by the government, when appropriate",
            "Opportunities for outside funding and sponsorship"
          ]
        },
        {
          t: "p",
          items: [
            "Scholarships may include research grants, fixed awards, or partial tuition reductions. While certain awards might be evaluated automatically, others might need a separate application."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Opportunities for Careers After Public Health",
      groups: [
        {
          t: "p",
          items: [
            "Career paths in health promotion, research, policy, program coordination, data analysis, and health services may be supported by a public health degree. The qualifications, experience, and employer requirements of the student determine the specific jobs.",
            "Among the potential career opportunities are:"
          ]
        },
        {
          t: "ul",
          items: [
            "Officer of Public Health",
            "Coordinator of Public Health Projects",
            "Officer of Health Promotion",
            "Research Assistant in Epidemiology",
            "Research Assistant in Public Health",
            "Officer of the Global Health Program",
            "Analyst of Health Policy",
            "Evaluator of Health Programs",
            "Coordinator of Community Health",
            "Coordinator of Research Projects",
            "Data Analyst for Public Health",
            "Project Officer for Health Services",
            "Roles in the Environmental Health Program",
            "Coordinator of Clinical Research",
            "Officer of Health Education",
            "roles in academia or research following more studies"
          ]
        },
        {
          t: "p",
          items: [
            "Certain specialized jobs, such as those of biostatistician and epidemiologist, could call for further education, sophisticated quantitative abilities, or research experience."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step",
      title: "Admission process",
      groups: [
        {
          t: "step",
          items: [
            {
              title: "Step 1: Select Your Study Route",
              text: "Choose from an undergraduate degree, a master's degree in public health, a global health program, a graduate diploma, or a research credential."
            },
            {
              title: "Step 2: Make a shortlist of colleges",
              text: "Examine the course material, length, location, cost of tuition, manner of delivery, and available specializations."
            },
            {
              title: "Step 3: Verify Your Eligibility",
              text: "Examine prerequisites, pertinent credentials, academic requirements, and English-language standards."
            },
            {
              title: "Step 4: Examine the Course Structure",
              text: "Verify if the program calls for a capstone project, internship, fieldwork, research project, or placement."
            },
            {
              title: "Step 5: Get Your Documents Ready",
              text: "Gather degree certificates, passport information, academic transcripts, English-language test scores, and any other materials needed."
            },
            {
              title: "Step 6: Send in Your Application",
              text: "Apply on the official university website or, if appropriate, through an authorized representative."
            },
            {
              title: "Step 7: Examine Your Offer",
              text: "Examine the course name, campus, cost of tuition, length, date of admission, terms, and deadline for acceptance."
            },
            {
              title: "Step 8: Look into Scholarships",
              text: "Examine the requirements and due dates for any scholarships that the university or other financing organizations offer."
            },
            {
              title: "Step 9: Set Up Finances and Medical Coverage",
              text: "Make plans for living expenses, travel, tuition, and the necessary overseas student health insurance."
            },
            {
              title: "Step 10: Submit a student visa application",
              text: "Provide the necessary paperwork and adhere to the current Australian Department of Home Affairs procedure."
            },
            {
              title: "Step 11: Get Ready to Leave",
              text: "Make plans for lodging, transportation, enrollment, and any orientation or placement needs unique to the university."
            }
          ]
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Required Records",
      title: "Checklist of Documents",
      groups: [
        {
          t: "p",
          items: [
            "Documents that are frequently requested could be:"
          ]
        },
        {
          t: "ul",
          items: [
            "A valid passport",
            "Certificates and marksheets for classes 10 and 12",
            "Academic transcripts and a bachelor's degree certificate",
            "Documents from a master's degree, if applicable",
            "Results of English language tests",
            "If necessary, a personal statement or a statement of purpose",
            "Curriculum vitae, upon request",
            "References from academic or professional sources, if necessary",
            "Proof of relevant job experience, if relevant",
            "Research proposal for specific research initiatives",
            "Application materials for scholarships, if relevant",
            "Financial records for the application for a visa",
            "Accept and confirm the enrollment.",
            "Evidence of overseas student health coverage",
            "Additional paperwork that the university or visa authorities requests"
          ]
        },
        {
          t: "p",
          items: [
            "The specific document checklist varies depending on the course, the school, and the particular situation."
          ]
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Visa Subclass 500",
      title: "Australia Student Visa",
      groups: [
        {
          t: "p",
          items: [
            "In order to enroll in an authorized full-time course, Indian students typically require the proper Australian student visa.",
            "Requirements for a visa could be:"
          ]
        },
        {
          t: "ul",
          items: [
            "Verification of Enrollment",
            "Proof of financial capability",
            "Requirement for genuine students",
            "Health Coverage for International Students",
            "Evidence in English, where appropriate",
            "Character and identity documents",
            "Exams for health, if requested"
          ]
        },
        {
          t: "p",
          items: [
            "Financial thresholds, fees, and visa requirements are subject to change. Before submitting an application, candidates should review the most recent regulations."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "FAQ",
      title: "FAQs",
      groups: [
        {
          t: "faq",
          items: [
            {
              q: "Is it possible for Indian students to study public health in Australia?",
              a: "Indeed. Subject to the entrance standards of each course, Indian students may apply to qualified Australian universities for undergraduate, graduate, and research programs."
            },
            {
              q: "What is the Master of Public Health?",
              a: "A postgraduate degree that covers topics including epidemiology, biostatistics, health promotion, global health, research methodologies, and health policy is the Master of Public Health."
            },
            {
              q: "Can I pursue a public health degree in India after earning my MBBS?",
              a: "Indeed. Subject to the university's admission standards, MBBS graduates may investigate Master of Public Health programs. Certain courses might provide chances for relevant research or electives."
            },
            {
              q: "Can students with backgrounds in physiotherapy, nursing, or pharmacy apply?",
              a: "Applicants from a variety of health-related fields are taken into consideration by numerous universities. The particular course and the applicant's educational history determine eligibility."
            },
            {
              q: "What is the duration of an Australian Master of Public Health program?",
              a: "Depending on the university, prior credentials, and available credit, many programs last one to two years."
            },
            {
              q: "Indian students looking to study public health in Australia might get assistance from Edu Hawk Worldwide Consultancy .",
              a: "Our advice could consist of: Recognizing undergraduate and graduate programs, Examining academic eligibility, Making a short list of appropriate universities, Comparing projected prices and course structures, Recognizing the English language requirements, Examining potential scholarships, Putting application materials in order, Giving advice on the paperwork for student visas, and assisting with pre-departure planning."
            }
          ]
        }
      ]
    }
  ]
};

export default function PublicHealthAustralia() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData?.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : cmsData.overview.split('\n\n'))
      : page.overview,
    sections: page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image
        }))
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/australia/public-health"
    />
  );
}