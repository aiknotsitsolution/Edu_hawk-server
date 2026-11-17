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
      eyebrow: "Degrees & Pathways",
      title: "Australian Public Health Courses",
      groups: [
        {
          t: "p",
          items: [
            "**Programs for Undergraduates**",
            "**Public health bachelor's degree**",
            "Population health, illness prevention, health promotion, health systems, and public health research are all covered in this undergraduate program.",
            "**Health Science Bachelor's degree**",
            "A more comprehensive health-science degree that can cover community health, public health, health promotion, or health policy.",
            "**Public Health-focused Bachelor of Health Sciences degree**",
            "Certain colleges provide more comprehensive degrees that allow students to choose pertinent majors or public health courses.",
            "**Postgraduate Courses**",
            "**Public health master's degree (MPH)**",
            "One of the primary alternatives for students who wish to pursue a career in public health. Epidemiology, biostatistics, health systems, health promotion, research techniques, and public health policy may all be covered in the curriculum.",
            "**Global Health Master's Program**",
            "focuses on global health efforts, health systems, disease prevention, health disparities, and international health concerns.",
            "**Health Services Management Master's Program**",
            "focuses on healthcare organizations, management, leadership, service delivery, and the enhancement of the health system.",
            "**Environmental Health Sciences Master's Program**",
            "examines risk assessment, environmental health policy, public health protection, and environmental threats.",
            "**Graduate Diplomas and Certificates**"
          ]
        },
        {
          t: "ul",
          items: [
            "Public Health Graduate Certificate",
            "Public Health Graduate Diploma",
            "Global Health Graduate Certificate",
            "Health Promotion Graduate Diploma",
            "Graduate Certificate in Epidemiology",
            "Health Services Management Graduate Diploma",
            "Environmental Health Graduate Certificate"
          ]
        },
        {
          t: "p",
          items: [
            "These credentials may be appropriate for students who wish to advance onto a relevant master's program with credit or, if the university allows it, develop specialized abilities.",
            "**Research Initiatives**"
          ]
        },
        {
          t: "ul",
          items: [
            "Public Health Master of Philosophy",
            "Public Health Doctor of Philosophy",
            "Doctor of Philosophy in Epidemiology",
            "Global Health Doctor of Philosophy",
            "Doctor of Philosophy in Health Policy",
            "Doctor of Philosophy in Research for Health Services"
          ]
        },
        {
          t: "p",
          items: [
            "Academic credentials, research preparedness, and the particular needs of the university are typically the determining factors for research admittance."
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
          t: "p",
          items: [
            "The following topics are available for students to investigate:"
          ]
        },
        {
          t: "pills",
          items: [
            "Epidemiology is the study of disease distribution, causation, and prevention.",
            "Applying statistical techniques to medical and health data is known as biostatistics.",
            "Addressing health issues that transcend national boundaries is known as global health.",
            "Creating initiatives to enhance community health is known as health promotion.",
            "Environmental health is the study of how human health is affected by environmental factors.",
            "Health Policy: Recognizing and assessing the laws that influence population health and healthcare.",
            "Examining healthcare expenses, resource distribution, and economic assessment is known as health economics.",
            "Enhancing healthcare organizations and service provision is known as health services management.",
            "Indigenous Health: Recognizing the disparities and health needs that Indigenous populations face.",
            "Studying disease surveillance, prevention, and outbreak response is known as infectious disease control.",
            "Preventing chronic diseases includes treating ailments like diabetes and heart disease.",
            "Occupational Health: Examining health risks and prevention in the workplace.",
            "Designing investigations and evaluating data to enhance health outcomes is known as public health research."
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
          t: "p",
          items: [
            "**Courses in Undergraduate Public Health**",
            "After Class 12, applicants might need to fulfill the following prerequisites:"
          ]
        },
        {
          t: "ul",
          items: [
            "earning a Class 12 diploma or its equivalent.",
            "academic standing that satisfies the minimum standards for admission to the university.",
            "topics that are pertinent to the program.",
            "proficiency in English.",
            "any further requirements for admission related to the course."
          ]
        },
        {
          t: "p",
          items: [
            "**Public Health Master's**",
            "Universities have different standards for admission. Candidates holding a recognized bachelor's degree in a relevant or recognized field may be given consideration.",
            "Backgrounds that are pertinent could be:"
          ]
        },
        {
          t: "ul",
          items: [
            "Allied health sciences and medicine",
            "Nursing",
            "Pharmacy",
            "Physical therapy",
            "Dental care",
            "The biological sciences",
            "Psychology",
            "Science of the environment",
            "Health-related sciences",
            "Social sciences or other fields that the university has approved"
          ]
        },
        {
          t: "p",
          items: [
            "**Research and PhD Programs**",
            "In general, candidates must have an appropriate postgraduate degree or a comparable educational background. It can be necessary to have research experience, a research plan, and proof of research aptitude."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Language Testing",
      title: "English Proficiency Requirement",
      groups: [
        {
          t: "p",
          items: [
            "IELTS Academic, PTE Academic, TOEFL iBT, and other authorized English language assessments are accepted by Australian universities.",
            "IELTS Academic 6.5 overall, with minimal component scores, may be required for a normal postgraduate program. However, various scores may be needed for different courses and universities."
          ]
        }
      ]
    },
    {
      slot: "testing",
      eyebrow: "Selection & Entry",
      title: "Admission Tests",
      groups: [
        {
          t: "p",
          items: [
            "There isn't a single uniform entry exam for international students in the majority of Australian public health programs.",
            "Admission could be determined by:"
          ]
        },
        {
          t: "ul",
          items: [
            "Prior educational background",
            "Grade-point average or academic grades",
            "Professional background or pertinent themes",
            "Proficiency in English",
            "Work experience, if necessary",
            "Academic references and research proposals for research degrees"
          ]
        },
        {
          t: "p",
          items: [
            "Indian students shouldn't believe that a degree in public health requires NEET. Verify the program's exact requirements."
          ]
        }
      ]
    },
    {
      slot: "duration",
      eyebrow: "Study Timeline",
      title: "Duration of the course",
      groups: [
        {
          t: "p",
          items: [
            "**Public health bachelor's degree:** Typically, three years",
            "**Health Science Bachelor's degree:** Typically, three years",
            "**Public Health Master's:** Typically, one to two years",
            "**Global Health Master's Program:** Usually 1-2 years",
            "**Master of Epidemiology:** Usually 1-2 years",
            "**Public Health PhD:** Typically, three to four years full-time"
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: ".Living expenses and tuition fees",
      groups: [
        {
          t: "p",
          items: [
            "**Estimated Cost of Tuition**",
            "The cost of international tuition varies depending on the school, degree, course load, and year of admission.",
            "**Estimated Cost of Living**",
            "Students ought to prepare for:"
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
            "Health Coverage for International Students",
            "Travel and personal costs"
          ]
        },
        {
          t: "p",
          items: [
            "Depending on the city and way of life, a preliminary planning budget of AUD 25,000–35,000 or more annually can be helpful. The real expenses can be more."
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
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
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