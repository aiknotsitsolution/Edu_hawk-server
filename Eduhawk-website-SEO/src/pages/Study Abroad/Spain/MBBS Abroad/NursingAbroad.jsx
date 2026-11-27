import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Spain/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Spain/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Spain/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Spain/Nursing/cta_bg.webp";
import Universidad_Autonoma_de_MadridImg from "../../../../Images/Abroad/Spain/Nursing/Universidad_Autonoma_de_Madrid.webp";
import University_of_BarcelonaImg from "../../../../Images/Abroad/Spain/Nursing/University_of_Barcelona.webp";
import University_of_AlicanteImg from "../../../../Images/Abroad/Spain/Nursing/University_of_Alicante.webp";
import cmsData from "../../../../data/study_abroad/spain/nursing.json";

const page = {
  "name": "Nursing in Spain",
  "country": "Spain",
  "slug": "nursing",
  "title": "Nursing in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Nursing in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Nursing in Spain, Nursing in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "Nursing in Spain for Indian Students",
  "heroParas": [
    "Nursing in Spain for Indian students gives you the opportunity to earn a European healthcare qualification, get practical clinical training and explore global career opportunities. The Grado en Enfermería (undergraduate nursing degree in Spain) generally takes 4 years to complete and is made up of 240 ECTS credits."
  ],
  "overview": [
    "Nursing in Spain for Indian students gives you the opportunity to earn a European healthcare qualification, get practical clinical training and explore global career opportunities. The Grado en Enfermería (undergraduate nursing degree in Spain) generally takes 4 years to complete and is made up of 240 ECTS credits.",
    "Spanish universities combine classroom learning with laboratory practice, clinical placements and patient-care training. Most of the Nursing courses in Spain are in Spanish, but there are some universities that offer courses with English or specific international paths. Indian students should check the teaching language, tuition fees for non-EU students, Nursing admission requirements in Spain and professional registration rules carefully before applying.",
    "Edu-Hawk Worldwide supports Indian students who wish to explore international education opportunities, including Nursing in Spain for Indian Students . From selecting suitable universities and understanding admission requirements to preparing application documents and exploring study-abroad opportunities, Edu-Hawk Worldwide helps students navigate their international education journey."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Healthcare & Nursing",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "4 Years (UG) / 1 to 2 Years (PG)"
    },
    {
      "label": "Top Institutions",
      "value": "Universidad Autónoma de Madrid, University of Barcelona, University of Alicante"
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
      "title": "Why Study Nursing in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Professional and academic advantages for Indian students studying Nursing in Spain :",
            "European education: Study in Spain's recognized higher education system.",
            "Practical clinical experience: Gain patient-care skills in supervised placements and laboratory sessions.",
            "Four-year degree: Most undergraduate Nursing programs in Spain last four years, and are 240-ECTS.",
            "International exposure: Exposure to a different health care system and multicultural learning environment.",
            "Career opportunities: Opportunities in healthcare careers, subject to meeting the relevant requirements for professional registration.",
            "Further study: Think about postgraduate study such as critical care, community health, pediatrics and public health.",
            "Transferable Skills: Develop skills in communication, teamwork, clinical reasoning and patient management.",
            "One of the important things to consider for students planning to study Nursing in Spain is the language proficiency. Spanish fluency is critical in clinical training and professional practice because nurses interact directly with patients, families and health care teams."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Nursing Studies in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Spanish universities offer undergraduate nursing degrees in Spain and postgraduate specializations in various healthcare fields. Indian students can explore the following Nursing courses in Spain , depending on their academic qualifications and career aspirations."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Typical duration",
            "Primary focus"
          ],
          "rows": [
            [
              "Bachelor's Degree in Nursing",
              "4 years",
              "General nursing and clinical practice"
            ],
            [
              "Master's in Nursing Science",
              "1–2 years, depending on the program",
              "Advanced nursing knowledge and research"
            ],
            [
              "Critical Care Nursing",
              "Varies by program",
              "Care for critically ill patients"
            ],
            [
              "Pediatric Nursing",
              "Varies by program",
              "Healthcare for infants, children and adolescents"
            ],
            [
              "Community Health Nursing",
              "Varies by program",
              "Community health and disease prevention"
            ],
            [
              "Geriatric Nursing",
              "Varies by program",
              "Care for older adults"
            ],
            [
              "Public Health",
              "Varies by program",
              "Population health, prevention and healthcare planning"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The traditional route into nursing is a four-year undergraduate degree. Specialist courses may need professional registration or a nursing degree and/or previous clinical experience. Students from India who are looking at Nursing in Spain should check the eligibility criteria for the courses they want to apply to before submitting an application."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Nursing Colleges in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Universidad Autónoma de Madrid",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Offers a four-year Nursing degree for 240 ECTS credits. El programa se imparte en español. For the academic year, the university's standard fee category charges a first enrollment fee of about €1,241, while non-EU students pay €8,186.",
              "img": Universidad_Autonoma_de_MadridImg
            },
            {
              "name": "University of Barcelona",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Four-year, 240-ECTS degree in Nursing. The published language breakdown is about 80.8% Catalan, 18.7% Spanish and 0.5% English so students should consider if they can study and do their clinical training in the required languages.",
              "img": University_of_BarcelonaImg
            },
            {
              "name": "University of Alicante",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Provides a Nursing degree with 240 credits over four years. The university cites Spanish, Valencian and English as languages of instruction. Find out the real language distribution and actual tuition for non EU students.",
              "img": University_of_AlicanteImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Nursing Study Requirements in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "In general, Indian students will have to meet the academic admission requirements of the university and the relevant entry regulations for university in Spain. Students who want to pursue a degree in nursing should know about the Nursing eligibility in Spain .",
            "Typical eligibility factors include:",
            "Class 12 qualification: Secondary education equivalent to the relevant Spanish entry qualification.",
            "Academic Subjects: Biology, Chemistry and other science subjects may be useful or required, depending on the university.",
            "Academic performance: Admission can be competitive, especially for public universities.",
            "Recognition of credentials: applicants may need to go through an equivalency process for Spanish secondary education qualifications or university admission.",
            "Entrance assessment: Some routes into the course require results from recognized exams or further assessment.",
            "Language skills: Spanish is often a requirement for nursing study and clinical placements.",
            "Documentation: Submit academic transcripts, identity documents and any other certificates as required.",
            "Eligibility and selection rules differ according to each autonomous region and university. Graduating Class 12 in India does not mean you are automatically admitted. Students must verify the Nursing admission requirements in Spain with the university of their choice."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Requirements for Access to Nursing in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The Nursing admission requirements in Spain differ depending on the university, admission route and the program. Universities may request one or more of the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 and Class 12 Mark Sheet and Certificate.",
            "Passport valid.",
            "Academic credential recognition or equivalency documents, if applicable.",
            "Results of university entrance or entrance examinations, if applicable.",
            "Evidence of proficiency in the Spanish language, if applicable.",
            "University application form (completed).",
            "Certified translations. Legalization or apostille, if required.",
            "Passport photos.",
            "Other documents as required by the selected institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some universities may also require health-related documentation or other prerequisites prior to clinical placements. Before applying for Nursing in Spain for Indian Students , do confirm the exact checklist from the admissions office."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "What Is the Cost of Studying Nursing in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The price of studying Nursing in Spain depends on the university, the region and the student's category. Some public universities may charge non-EU students a lot more than EU or domestic fee categories. Indian applicants should not make a decision based on the lowest advertized public tuition only."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of university",
            "Indicative annual tuition",
            "Approx. in INR"
          ],
          "rows": [
            [
              "Public university",
              "€1,000-€8,500",
              "&#8377;1.09-&#8377;9.23 lakh"
            ],
            [
              "Private university",
              "€6,000-€15,000+",
              "&#8377;6.52-&#8377;16.29 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These ranges are indicative of planning costs and not confirmed fees at each university. For example, the Autonomous University of Madrid lists approximately 8,186€ for the first enrollment of non-EU students in its Nursing degree .",
            "INR conversions are based on an illustrative exchange rate of €1 &asymp; &#8377;108.60. Actual fees and exchange rates may vary.",
            "Other costs may include accommodation, food, transport, health insurance, visa formalities, study materials and clinical placement requirements. Look out for extra administration charges on university fee estimates.",
            "Scholarships and financial aid may be available, but eligibility for international students depends on the institution and the funding program. Students who are Planning Nursing in Spain for Indian students should prepare a complete budget that includes tuition fees and living expenses."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "Admission to Nursing in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Nursing in Spain for Indian students The students can study by following the admission steps:",
            "Step 1: Select a university",
            "Compare the language of the program, tuition fees, clinical training, admission requirements and location.",
            "Step 2: Assess your academic eligibility",
            "Check evaluation of your Indian Class 12 qualification and if you need to get your credentials recognized or write an entrance exam.",
            "Step 3: Fulfilll the language requirements",
            "Find out what level of Spanish is required and what language is used on clinical placements.",
            "Step 4: Apply",
            "Submit the required academic documents, ID documents, entrance test results and other documents by the deadline.",
            "Step 5: Fulfilll visa formalities",
            "Once admitted, check the relevant Spanish student-visa requirements and arrange accommodation, insurance and travel.",
            "Students can also seek study-abroad guidance from Edu-Hawk Worldwide when exploring university options and preparing for the application process."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Recognition of Nursing Degrees and Certification in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The Spanish Grado en Enfermería is a university baccalaureate degree that trains students for professional nursing practice. Graduates must fulfill the relevant requirements to practice in Spain.",
            "Indian students must check the following before taking admission in Nursing in Spain ."
          ]
        },
        {
          "t": "ul",
          "items": [
            "The university and its nursing program are accredited.",
            "The program provides the required clinical training.",
            "The degree satisfies the relevant professional criteria.",
            "The qualification can be assessed according to the rules of the country in which the student wishes to work."
          ]
        },
        {
          "t": "p",
          "items": [
            "For Indian students who are planning to return to India: Please do not assume that a Spanish nursing qualification automatically qualifies you to register or work as a nurse in India. Before selecting a program, please check the latest requirements with the Indian Nursing Council and the concerned State Nursing Registration Council.",
            "Official reference: Indian Nursing Council"
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "Nursing Salary in Spain and Nursing Job Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates who have completed an appropriate qualification and meet the professional registration and language requirements may seek employment in hospitals, clinics, community health services and other health care settings. Indian students thinking of Nursing in Spain for Indian students should be aware that the career prospects vary according to the professional recognition, language skills and job requirements."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Career stage",
            "Sample gross annual salary"
          ],
          "rows": [
            [
              "Entry-level nurse",
              "€22,000–€28,000"
            ],
            [
              "Experienced nurse",
              "€28,000–€38,000"
            ],
            [
              "Advanced or specialized roles",
              "€35,000–€45,000+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are rough illustrative estimates, not verified salary statistics or guarantyd earnings. Your real salary depends on region, employer, your experience, shift allowances, collective agreements and specialization.",
            "Possible career fields are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Clinical and hospital nursing.",
            "Critical & emergency care.",
            "Pediatric Nursing.",
            "Community and geriatric medicine.",
            "Health education and public health.",
            "Nursing research and other scholarly inquiry."
          ]
        },
        {
          "t": "p",
          "items": [
            "In Spain nursing is a regulated profession. Foreign-qualified applicants seeking degree recognition must meet the relevant professional requirements. The Spanish Ministry of Science, Innovation and Universities has advice on foreign nursing qualifications.",
            "Official source: Spain's official guidance for Nursing qualification recognition"
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Paperwork for Studying Nursing in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Nursing in Spain for Indian students needs to prepare the below documents as applicable for the university and visa application:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "10th pass certificate & mark sheet.",
            "Mark sheet and certificate of class 12.",
            "Valid passport.",
            "Academic equivalency or credential-recognition papers, if applicable.",
            "Results of entrance examinations, if applicable.",
            "Certificate of Spanish language if applicable.",
            "I have finished my university application.",
            "Passport size photographs.",
            "Certified translations and where applicable, legalized or apostilled documents.",
            "Letter of University Admission.",
            "Proof of financial means and accommodation if required for visa.",
            "Health insurance and other necessary visa paperwork."
          ]
        },
        {
          "t": "p",
          "items": [
            "The final list will depend on the university, the route through which you apply and the visa requirements. Make sure you check this before you submit your application."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Most Common Questions About Nursing in Spain",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "How long does a Nursing study last in Spain?",
              "a": "Most Nursing degrees at undergraduate level are four years in duration and carry 240 ECTS credits."
            },
            {
              "q": "Is it possible for Indian students to study Nursing in Spain in English?",
              "a": "Some programs may have English-language components or international pathways. But many degrees are taught mostly in Spanish or a regional language. Please check teaching language and clinical-placement requirements before applying."
            },
            {
              "q": "What is the tuition fee of studying Nursing in Spain for Indian students?",
              "a": "Tuition is highly variable. Public-university fees may be relatively affordable for some student categories, but fees for non-EU students can be higher. Private programs may be more costly. Always consult the official fee schedule for Indian applicants."
            },
            {
              "q": "What is the difference between a financial advisor and a financial planner? Can I work in Spain after Nursing?",
              "a": "Graduates may explore nursing employment after gaining the relevant professional qualification, registration, language and immigration requirements. A degree does not guaranty a job or permission to work."
            },
            {
              "q": "Do you need NEET to study Nursing in Spain?",
              "a": "NEET is not necessarily necessary for everyone, nor is it necessarily unnecessary for everyone. Please check the entry requirements of the chosen Spanish University along with the current Indian regulations pertaining to your intended course of study and possible future professional registration. Nursing in Spain for Indian Students Nursing Studies in Spain Top Nursing Schools in Spain Nursing Admission in Spain Entry Requirements for Nursing Courses in Spain Cost of Nursing Education in Spain Edu-Hawk Worldwide"
            }
          ]
        }
      ]
    }
  ]
};

export default function NursingAbroadSpain() {
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
      seoPath="/study-abroad/spain/nursing"
    />
  );
}
