import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Spain/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Spain/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Spain/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Spain/PublicHealth/cta_bg.webp";
import Universidad_de_ValenciaImg from "../../../../Images/Abroad/Spain/PublicHealth/Universidad_de_Valencia.webp";
import University_of_GranadaImg from "../../../../Images/Abroad/Spain/PublicHealth/University_of_Granada.webp";
import University_of_Barcelona_AutonomousImg from "../../../../Images/Abroad/Spain/PublicHealth/University_of_Barcelona_Autonomous.webp";
import cmsData from "../../../../data/study_abroad/spain/public_health.json";

const page = {
  "name": "Public Health in Spain",
  "country": "Spain",
  "slug": "public_health",
  "title": "Public Health in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Public Health in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Public Health in Spain, Public Health in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "Public Health in Spain for Indian Students",
  "heroParas": [
    "Public Health in Spain for Indian Students provides an opportunity to study disease prevention, health promotion, epidemiology, healthcare policy and community health management in a European healthcare setting."
  ],
  "overview": [
    "Public Health in Spain for Indian Students provides an opportunity to study disease prevention, health promotion, epidemiology, healthcare policy and community health management in a European healthcare setting. Spain is an interesting destination for students who want to develop knowledge of population health, health care systems, medical research and international health challenges.",
    "In Spain, a Master's in Public Health is normally a suitable option for students who have a recognized bachelor's degree in a relevant subject. Spanish Universities offer postgraduate courses in Public Health , Epidemiology, Global Health, Preventive Medicine and Health Management, depending on the institution and the time of the year.",
    "Students interested in Studying Public Health in Spain can choose from a range of specializations covering disease prevention, biostatistics, healthcare administration and community health. Some programs accept graduates from a wide range of disciplines, while others require a background in healthcare or science.",
    "For students seeking European education, research opportunities and pathways into public health organizations, Spain may be an option. Admission requirements, tuition fees and job opportunities differ from university to university and program to program.",
    "Edu-Hawk Worldwide helps students to explore international education opportunities and understand the process of pursuing postgraduate programs abroad with right university selection and admission planning."
  ],
  "level": "Postgraduate & Master",
  "crumb": "Healthcare & Public Health",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Postgraduate & Master"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG)"
    },
    {
      "label": "Top Institutions",
      "value": "Universidad de Valencia, University of Granada, University of Barcelona Autonomous"
    },
    {
      "label": "Medium of Study",
      "value": "English & Spanish Taught"
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Spain",
      "title": "Why Study Public Health in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The decision to Study Public Health in Spain gives students the academic knowledge and practical understanding of population health, healthcare systems, disease prevention and global health issues.",
            "Key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "European Studies: Understand the Spanish higher education system and investigate public health issues in Europe.",
            "Specialised Curriculum: Study epidemiology, health promotion, preventive medicine, biostatistics and healthcare management.",
            "Research Opportunities: Develop research and analytical abilities through projects, dissertation work and academic activities, depending on the program.",
            "Career Diversity: Health research, community programs, healthcare organizations and policy development.",
            "International Exposure: Experience different healthcare approaches and learn alongside students from different backgrounds.",
            "Further Study Options: Progress to doctoral research or specialized postgraduate education where eligible."
          ]
        },
        {
          "t": "p",
          "items": [
            "Public Health education uses scientific knowledge, research, healthcare planning, and population-based approaches to improve health outcomes. Students will learn skills that are applicable to a variety of healthcare and research environments."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Public Health Courses Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Public Health in Spain for Indian Students is one area where students can find programs at different levels of academic study. Many are offered as dedicated programs at masters level with specializations in epidemiology, global health, preventive medicine and health care administration."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Typical Duration Time",
            "Suitable For"
          ],
          "rows": [
            [
              "Bachelors in Related Health or Science Field",
              "3-4 Years",
              "Students After Class 12"
            ],
            [
              "Master of Public Health",
              "1-2 years",
              "Graduates of eligible disciplines"
            ],
            [
              "MSc in Epidemiology",
              "1-2 years",
              "Students interested in researching diseases and data"
            ],
            [
              "Preventive Medicine and Public Health",
              "Depending on the program",
              "Students interested in disease prevention and research"
            ],
            [
              "Public Health and Health Management",
              "1 year in some programs",
              "Students interested in healthcare systems and administration"
            ],
            [
              "Global Health",
              "1-2 years",
              "Students interested in global health issues"
            ],
            [
              "PhD in Public Health or Related Field",
              "Usually takes 3 to 5 years",
              "Best for students who want to do advanced research."
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Program titles, teaching languages and duration vary by institution. In Spain, a master's program may be listed under a specialized title rather than simply Public Health.",
            "Students should check the curriculum, research opportunities, eligibility criteria and the degree structure before choosing a program."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Public Health in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Universidad de Valencia",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Master in Public Health and Health Management from the University of Valencia The official program is 60 ECTS credits and lasts one year.",
              "img": Universidad_de_ValenciaImg
            },
            {
              "name": "University of Granada",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "The University of Granada has a Master's Degree in Research and Advances in Preventive Medicine and Public Health.",
              "img": University_of_GranadaImg
            },
            {
              "name": "University of Barcelona Autonomous",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Students have the opportunity to explore postgraduate study options in public health, epidemiology and health research at the Autonomous University of Barcelona.",
              "img": University_of_Barcelona_AutonomousImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who is eligible to study Public Health in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The eligibility for admission will depend on the program, university and previous educational qualifications of the applicant. Indian students should be aware of the academic requirements before applying.",
            "For Bachelor's Degree Studies:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 12th pass from recognized board.",
            "Courses and marks fulfilling the criteria of the selected university.",
            "Any required qualification recognition, equivalency or university admission procedure.",
            "Proof of proficiency in Spanish or English depending on the language of instruction."
          ]
        },
        {
          "t": "p",
          "items": [
            "For a Master's Degree in Public Health:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "An accredited bachelor's degree.",
            "Relevant backgrounds could be in medicine, nursing, pharmacy, biology, biomedical sciences, physiotherapy, veterinary science, statistics or other related disciplines.",
            "Some programs are open to graduates from a broader range of academic disciplines, while others favor health science graduates.",
            "Relevant work experience or research experience may be helpful or required for some programs.",
            "Must be fluent in Spanish or English."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, the Public Health and Health Management master's at the University of Valencia is aimed at applicants with relevant health-science qualifications.",
            "Eligibility criteria vary from university to university. Please check the official entry requirements for your chosen program before you apply."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Spain Public Health Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process usually includes submitting academic qualifications, proof of language proficiency and supporting documents. Indian students are advised to keep their paperwork ready well in advance so that they do not face any delay in applying.",
            "Universities may ask for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Recognized academic qualifications and transcripts.",
            "Certificate of Bachelor's degree for admission to Master.",
            "Passport, documents of personal identification.",
            "Proof of Spanish proficiency in courses taught in Spanish, if necessary.",
            "IELTS, TOEFL or other accepted English-language test for the programs that require it.",
            "Purpose statement or letter of motivation.",
            "CV or résumé, especially for postgraduate applications.",
            "Letter of recommendation if requested.",
            "If applicable, relevant certificates of employment or research.",
            "Other documents needed for foreign degree equivalency/admission."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some programs may require specific subject or professional qualifications as pre-requisites. Satisfying the general eligibility criteria does not guaranty admission."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "Fees for Public Health in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Public Health Fees in Spain is an essential consideration for Indian students planning their post graduate education budget. Tuition varies by university, program type, residency category, and academic year."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of Institution",
            "Sample Annual Tuition",
            "Approx INR"
          ],
          "rows": [
            [
              "Public University",
              "€1,000–€8,000",
              "&#8377;1.09–&#8377;8.69 lakh"
            ],
            [
              "Private University",
              "€6,000–€20,000+",
              "&#8377;5.52 lac to &#8377;17.72 lac+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are rough planning estimates not confirmed fees for each and every program. The actual cost for non-EU students can vary greatly depending on the university and the region.",
            "Illustration: University of Valencia",
            "The University of Valencia's Public Health and Health Management master's degree is worth 60 ECTS credits and charges non-EU students in the appropriate fee bracket €70.68 per credit for first enrollment, according to the published rate.",
            "This works out to about €4,241 (&#8377;4.61 lakh) for 60 credits, not including any additional fees. Students are advised to consult the official fee schedule for the year of intended intake when planning a budget.",
            "When comparing Public Health Fees in Spain , students should include other costs such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Costs of accommodation and hostel.",
            "Food and living expenses",
            "Transport in the area.",
            "Medical Insurance.",
            "Formalities for student visa.",
            "Educational materials and resources.",
            "Charges of university administrators."
          ]
        },
        {
          "t": "p",
          "items": [
            "Scholarships and tuition reductions may be available, but eligibility and funding are not assured. Students should check individual university scholarship schemes and closing dates for applications."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "How to Apply for Public Health Programs in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students who want to Study Public Health in Spain need to follow a structured admission process to be able to select the right program and complete their applications successfully.",
            "Step 1: Pick Your Specialisation",
            "Choose Public Health, Epidemiology, Global Health, Preventive Medicine, or Health Management.",
            "Step 2: Create a list of Universities",
            "Compare: program length, tuition fees, language of instruction, curriculum, research opportunities, eligibility requirements.",
            "Step 3: Check the Eligibility Criteria",
            "Check if your Indian degree needs to be recognized, if equivalency or other documentation is required.",
            "Step 4: Get your application ready",
            "Gather academic transcripts, degree certificates, language scores, CV, statement of purpose and other required documents.",
            "Step 5: Submit Application to University",
            "You can submit your application either via the university portal or the relevant regional admission system.",
            "Step 6: Get Your Admission Decision",
            "Complete any further institution requirements and check your admission conditions.",
            "Step 7: Sort out finances",
            "Please confirm tuition payment and any scholarship award before making any financial commitments.",
            "Step 8: Apply for a Student Visa",
            "Check current Spanish student visa requirements for Indian applicants.",
            "Step 9: Gather Your Bags",
            "Book accommodation, insurance, travel and university registration.",
            "Universities have different deadlines. Start early to avoid delays in your plans due to verification of documents, translation and visa preparation.",
            "Edu-Hawk Worldwide can assist students in understanding the university admission procedures, documentation and essential steps in planning their international education."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Recognition of Public Health Degree in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students should ensure that the institution and the qualification of their choice align with their academic and career aspirations before they enroll.",
            "Key checks are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The Spanish official recognition of the university and the program.",
            "Whether the qualification is a university master's degree officially recognized as such or a university continuing-education qualification.",
            "If the course is required for the requirements of doctoral study or some job.",
            "Whether employers in the country you are going to will recognize the qualification.",
            "Whether you need professional registration or credential evaluation as well."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian Students",
            "A master's in Public Health will not qualify you to practice as a doctor, nurse, pharmacist or other regulated healthcare professional.",
            "For those of you who plan to return to India for clinical practice, check the requirements of the relevant Indian professional council separately. Students need to distinguish between the academic qualifications in Public Health and the professional licences that are required for regulated clinical occupations."
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "Career and Salary Outlook of Public Health in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates with a suitable postgraduate qualification can enter public health research, disease prevention, community health, health data, policy and program management.",
            "Potential career roles and indicative gross annual salaries are:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Career",
            "Example Gross Yearly Salary"
          ],
          "rows": [
            [
              "Public Health Project Assistant",
              "€20,000–28,000"
            ],
            [
              "Public Health Research Coordinator",
              "€24,000-€36,000"
            ],
            [
              "Health Data Analyst or Epidemiologist",
              "€25,000–€40,000"
            ],
            [
              "Health Program Manager",
              "&pound;30,000-&pound;45,000"
            ],
            [
              "Research or Health Policy Specialist",
              "28,000 - 45,000 €"
            ],
            [
              "Senior Public Health Consultant",
              "&pound;40,000 - &pound;60,000+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Salary figures are approximations based upon third party submissions to SimplyHired or its affiliates. Real salaries may be lower or higher depending on employer, region, experience, specialization and role.",
            "Possible Areas of Employment"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Health agencies and public health departments.",
            "Hospitals and health care systems",
            "Universities and research establishments.",
            "NGOs and community health organizations.",
            "Clinical research and pharmaceutical organizations.",
            "Consulting in health policy and healthcare.",
            "International health and development projects"
          ]
        },
        {
          "t": "p",
          "items": [
            "Fluency in Spanish is especially useful in community-oriented, public sector and many locally-based jobs. Some research or international positions may be in English, but do not assume that job opportunities will be, so check individual vacancies."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed to Study Public Health in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students should prepare their academic, identification and supporting documents as per their university and visa route.",
            "Commonly requested documents include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport in date.",
            "Certificate of Class 10 and Class 12 (if applicable).",
            "Certificate of Bachelor's Degree and transcripts.",
            "Spanish certified translations, if necessary.",
            "Recognition of qualifications or equivalency documents when requested.",
            "Results of an English or Spanish language test.",
            "Letter of purpose/motivation.",
            "Curriculum vitae (CV) or résumé.",
            "Letters of recommendation if required.",
            "Certificates of work or research experience if any.",
            "Supporting financial documents and the visa proof of funds;",
            "Health insurance and other documents required by the Spanish visa authorities."
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact list depends on the university, program and visa requirements. Use the latest official checklist, not just a general list."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Public health frequently asked questions in Spain",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "Can Indian students do Public Health in Spain?",
              "a": "Yes. As an Indian student, if you meet the academic, language and documentation requirements of the university, you may apply for eligible undergraduate or postgraduate programs."
            },
            {
              "q": "How long does a Public Health masters in Spain last?",
              "a": "Some official master's programs take one academic year and are worth 60 ECTS credits, but others can be longer. Always verify the specific course structure and duration."
            },
            {
              "q": "Do I need IELTS for Public Health in Spain?",
              "a": "Not necessarily. The requirements depend on the programme's language of instruction and the university's policy. Courses taught in English may require IELTS, TOEFL or alternative accepted test; courses taught in Spanish may require Spanish-language proficiency."
            },
            {
              "q": "Public Health Fees in Spain for Indian Students?",
              "a": "Public-university fees can be quite reasonable, but the actual cost depends on the region, university, program and fee category for international students. Private universities can be more expensive. Please refer to the official fee schedule before applying."
            },
            {
              "q": "What are the job opportunities after studying Public Health in Spain?",
              "a": "Graduates are prepared for careers in public health research, epidemiology, community health, health program coordination, policy research, and healthcare management. Some positions may require Spanish language proficiency, additional credentials or relevant work experience. Edu-Hawk Worldwide: Your Portal to Study Public Health Abroad Want to know about Public Health in Spain for Indian Students ? Choosing the right university, knowing the eligibility criteria, collecting documents and completing admission formalities are crucial steps to realize your international education dreams. Edu-Hawk Worldwide helps students to discover options in international education, understand university admission needs and map out their study abroad trip. Edu-Hawk Worldwide is your first step toward global education ambitions. Public Health in Spain for Indian Students Study Public Health in Spain Studying Public Health in Spain Public Health Courses Spain Public Health Universities in Spain Public Health Fees in Spain Edu-Hawk Worldwide"
            }
          ]
        }
      ]
    }
  ]
};

export default function PublicHealthSpain() {
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
      seoPath="/study-abroad/spain/public-health"
    />
  );
}
