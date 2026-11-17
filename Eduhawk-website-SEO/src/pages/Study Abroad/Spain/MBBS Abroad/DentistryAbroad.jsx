import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Spain/Dentistry/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Spain/Dentistry/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Spain/Dentistry/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Spain/Dentistry/cta_bg.webp";
import Universitat_de_BarcelonaImg from "../../../../Images/Abroad/Spain/Dentistry/Universitat_de_Barcelona.webp";
import The_Catholic_University_of_ValenciaImg from "../../../../Images/Abroad/Spain/Dentistry/The_Catholic_University_of_Valencia.webp";
import cmsData from "../../../../data/study_abroad/spain/dentistry.json";

const page = {
  "name": "Dentistry in Spain",
  "country": "Spain",
  "slug": "dentistry",
  "title": "Dentistry in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Dentistry in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Dentistry in Spain, Dentistry in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "Dentistry in Spain for Indian Students",
  "heroParas": [
    "Studying Dentistry in Spain for Indian students is an opportunity to get a European dental qualification, develop clinical skills, and gain international academic exposure. Spanish universities provide undergraduate degrees in dentistry, called Grado en Odontología. These programs generally take five years to complete and are worth 300 ECTS credits."
  ],
  "overview": [
    "Studying Dentistry in Spain for Indian students is an opportunity to get a European dental qualification, develop clinical skills, and gain international academic exposure. Spanish universities provide undergraduate degrees in dentistry, called Grado en Odontología. These programs generally take five years to complete and are worth 300 ECTS credits.",
    "Students can investigate public and private universities, clinical training opportunities and selected Dentistry programs in Spain taught in English . But the language of instruction is especially important: many dentistry degrees in Spain are taught mostly in Spanish or a regional language and clinical placements require good communication with patients."
  ],
  "level": "Undergraduate & Graduate Entry",
  "crumb": "Healthcare & Dentistry",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Graduate Entry"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Universitat de Barcelona, University of València, The Catholic University of Valencia"
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
      "title": "Why Choose Dentistry in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "European education: Study in Spain's higher education system and gain international academic exposure.",
            "Clinical learning: Dentistry degrees will include practical training and clinical components.",
            "Five-year degree pathway: Most undergraduate Dentistry courses in Spain are structured in five years and 300 ECTS.",
            "English language options Some universities offer English language pathways. Availability and conditions vary.",
            "Specialization opportunities: Graduates can undertake postgraduate study in orthodontics, periodontology, oral surgery and implant dentistry.",
            "International experience: Live and study in Spain, and develop cross-cultural communication skills.",
            "Career flexibility. Graduates may seek further education and licensing opportunities in Spain, India or elsewhere, depending on applicable regulations."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Dental Courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "We offer Dentistry courses in Spain at undergraduate and postgraduate levels. The title of the course and entry requirements differ from university to university."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Typical length of time",
            "Primary focus"
          ],
          "rows": [
            [
              "Bachelor Degree in Dentistry",
              "5 yrs",
              "Oral health diagnosis prevention treatment and clinical practice"
            ],
            [
              "Master of Orthodontics",
              "Typically 1 to 3 years",
              "Straightening teeth and correcting bite problems."
            ],
            [
              "Master Degree in Periodontology",
              "Varies according to program",
              "Periodontal Treatment and Gum Health"
            ],
            [
              "Master of Science in Oral Surgery & Implantology",
              "Depends on the program",
              "Oral Surgery and Dental Implants"
            ],
            [
              "Advanced Dental Studies",
              "Program dependent",
              "Professional development and special clinical knowledge."
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The undergraduate degree in Dentistry is the main access route for students who want to be dentists. Most of the specialist programs will expect that you already have a dental qualification and some will expect you to have clinical experience."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Dentistry Schools in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Universitat de Barcelona",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Offers a five-year Dentistry degree in Spain worth 300 ECTS. The published curriculum is taught mainly in Catalan, with Spanish and a little English also included, so it is important to check language expectations before applying.",
              "img": Universitat_de_BarcelonaImg
            },
            {
              "name": "University of València",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Provides a 5-year Dentistry degree with 300 ECTS. The university lists Spanish, Valencian and English as languages of instruction; applicants should check the language mix for their cohort.",
              "img": The_Catholic_University_of_ValenciaImg
            },
            {
              "name": "The Catholic University of Valencia",
              "location": "Spain",
              "fee": "€2,000 – €18,000 / Year",
              "desc": "Publishes information on a five-year Dentistry degree with an international group in English. Please check with the university for the most recent intake, fees, teaching arrangements and clinical language requirements.",
              "img": The_Catholic_University_of_ValenciaImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who is eligible to study dentistry in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students will normally have to meet the university's academic entry requirements and the relevant international-student entry rules.",
            "Typical Dentistry eligibility in Spain for Indian students requirements may include:",
            "Class 12 qualification: Secondary education equivalent to the Spanish qualification for university entry.",
            "Science subjects Biology and Chemistry are especially important. Some universities may ask for other subjects.",
            "Academic performance: The academic or entrance exam scores required may differ for each institution and admission process.",
            "University admission assessment Applicants may be required to meet Spanish university entrance requirements, credential recognition or university-specific selection requirements.",
            "Language proficiency: May require use of Spanish or other language used in teaching and clinical practice.",
            "Passport and documents: A valid passport and correctly prepared academic documents are needed.",
            "There are some public universities that are hard to get in to. Don't assume that just because you have passed class 12 you will get admission."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Requirements for admission to Dentistry in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The process of applying may differ for public and private universities. Dentistry admission requirements in Spain might include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Certificate & Mark sheets of Class 10 and 12.",
            "Copy of passport.",
            "Academic credential recognition or equivalency documents as applicable.",
            "Results of Spanish university entrance examinations or other accepted admission credentials as appropriate.",
            "Proof of English or Spanish Language Proficiency.",
            "University application form.",
            "CV or personal statement if required.",
            "Certified translations and where required document legalization or apostille.",
            "Proof of financial resources for the visa.",
            "Any other documents requested by the university or the Spanish Consulate."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian applicants should have the university confirm which credential-evaluation and entrance route applies to their particular school-qualification."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "How much does it cost to study dentistry in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost of studying Dentistry in Spain can vary a lot between public and private schools. Fees at public universities may also vary for non-EU students, and private universities generally charge higher fees."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of university",
            "For instance, annual tuition",
            "Approx. INR"
          ],
          "rows": [
            [
              "Public university",
              "5,000",
              "&#8377;1.09 to &#8377;5.43 lakhs"
            ],
            [
              "Private University",
              "€12,000-€25,000+",
              "&#8377;13.03-&#8377;27.15 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are estimates for planning purposes and not firm fees. For the 2026 intake, the Catholic University of Valencia lists its Dentistry degree at €12,780, and UIC Barcelona lists first-year tuition for 2026–27 at €18,600, by reference.",
            "INR conversions are at illustrative rate of €1 &asymp; &#8377;108.60. University fees & real exchange rates may differ.",
            "Students should also budget separately for accommodation, food, transport, health insurance, visa formalities, dental instruments and other course related expenses. Ask the university for a full breakdown of fees before you accept an offer.",
            "Scholarships and financial aid might be available, but eligibility and funding vary widely from one institution to another and from one individual to another."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "How to Get Dental Care in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Step 1: Research (academics)",
            "Compare public vs. private institutions, language of instruction, tuition, clinical training, and admission requirements.",
            "Step 2: Check your academic eligibility",
            "Check whether you will need to take an entrance exam or need recognition of credentials. Find out how your Indian Class 12 qualification will be assessed.",
            "Step 3: Preparing papers",
            "Arrange academic records, passport, language evidence, translations and any equivalency needed.",
            "Step 4: Applying to university",
            "Submit the application, get through the selection process at the university and follow the instructions to accept an offer.",
            "Step 5: Visa formalities completed",
            "On arrival, check Spanish student-visa requirements and arrange accommodation, insurance and travel."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Recognition of Dentistry Degree and Certificates",
      "groups": [
        {
          "t": "p",
          "items": [
            "The undergraduate qualification in Spain is typically referred to as Grado en Odontología. Formal Dentistry programs in Spain are usually five years long, worth 300 ECTS credits, and involve clinical training.",
            "University of Barcelona +Indian students check the following before enrollment:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "The university and the specific program are officially recognized in Spain.",
            "The degree complies with the professional requirements in force in Spain.",
            "The program is documented in terms of training, duration and clinical aspects.",
            "The qualification meets the current requirements for professional registration in the country where the student intends to practice."
          ]
        },
        {
          "t": "p",
          "items": [
            "Return to India is important: A degree in Dentistry from Spain does not automatically qualify a graduate to practice dentistry in India. Foreign dental graduates must refer to current National Dental Commission / Dental Council requirements including applicable screening examinations and conditions of registration prior to admission.",
            "NITI Aayog +2 Official Reference: Dental Council of India / National Dental Commission website"
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "Salary and Job Opportunities After Studying Dentistry in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates, after completing an accredited Dentistry degree in Spain and satisfying the professional registration requirements, may pursue opportunities in dental clinics, hospitals, private practices, research and further specialization."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Stage in career",
            "Example of gross annual salary"
          ],
          "rows": [
            [
              "Junior dentist",
              "€25,000–€35,000"
            ],
            [
              "Dentist (experienced)",
              "€35,000-€50,000"
            ],
            [
              "Specialist or Established Practitioner",
              "€50,000 - €80,000+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are large representative numbers, not audited salary figures or guarantyd income. Your earnings will depend on where you work, your experience, your employment arrangements, your specialization and whether you are a dentist in practice or an employee.",
            "Possible career paths include:",
            "General Dentistry:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Orthodontics following suitable specialist training.",
            "Periodontology and dental implants.",
            "Oral surgery, subject to the relevant training and professional requirements . \"",
            "Academic and dental research.",
            "Public health, dental"
          ]
        },
        {
          "t": "p",
          "items": [
            "Graduates must meet the licensing and language requirements of the country where they intend to work."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed to Study Dentistry in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare the following documents required to study Dentistry in Spain as applicable to the chosen university:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 Marksheet and Certificate.",
            "Class 12th mark sheet and certificate.",
            "Valid passport.",
            "Equivalency certificates or recognition of academic credentials.",
            "Results of entrance examinations, where applicable.",
            "Language proficiency certificate if applicable.",
            "Passport size photographs.",
            "Application form and any statement of personal statement required.",
            "Certified translations and where required apostilled or legalized documents.",
            "\"University admission letter.",
            "Evidence of financial means and accommodation where required for the visa.",
            "Visa related documents i.e. health insurance."
          ]
        },
        {
          "t": "p",
          "items": [
            "The university and Spanish consulate should provide you with the final list of documents required for your application."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Dental care in Spain – questions and answers",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "How many years are required to study Dentistry in Spain?",
              "a": "The normal undergraduate Dentistry degree in Spain lasts for five years and consists of 300 ECTS credits. Universitat de Barcelona +Q2. Can Indian students pursue Dentistry in Spain in English? Yes, some universities have English language pathways or international cohorts. But many programs are conducted mostly in Spanish or a regional language. Students should also confirm the language requirements for clinical training."
            },
            {
              "q": "How much does Dentistry in Spain cost for Indian students?",
              "a": "Public universities charge tuition of €1,000–€5,000 per year, while private programs can cost €12,000–€25,000 or more. These are indicative estimates, please check the current fee schedule of the chosen university."
            },
            {
              "q": "After finishing Dentistry in Spain, can I practice in India?",
              "a": "Not by default . Before choosing a program, check the current requirements for recognition of foreign dental qualifications, screening examinations and registration in India."
            },
            {
              "q": "Do Indian students need NEET to study Dentistry in Spain?",
              "a": "For Indian students who want to study dentistry abroad and then practice in India, the NEET and other eligibility requirements are important to consider. Please check the latest applicable Indian regulations with the relevant regulator before admission. Please check the entry requirements of the Spanish University separately."
            }
          ]
        }
      ]
    }
  ]
};

export default function DentistryAbroadSpain() {
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
      seoPath="/study-abroad/spain/dentistry"
    />
  );
}
