import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Spain/Biotechnology/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Spain/Biotechnology/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Spain/Biotechnology/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Spain/Biotechnology/cta_bg.webp";
import Universitat_de_BarcelonaImg from "../../../../Images/Abroad/Spain/Biotechnology/Universitat_de_Barcelona.webp";
import Universitat_Autonoma_de_BarcelonaImg from "../../../../Images/Abroad/Spain/Biotechnology/Universitat_Autonoma_de_Barcelona.webp";
import Universidad_Autonoma_de_MadridImg from "../../../../Images/Abroad/Spain/Biotechnology/Universidad_Autonoma_de_Madrid.webp";
import cmsData from "../../../../data/study_abroad/spain/biotechnology.json";

const page = {
  "name": "Biotechnology in Spain",
  "country": "Spain",
  "slug": "biotechnology",
  "title": "Biotechnology in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Biotechnology in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Biotechnology in Spain, Biotechnology in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "Biotechnology in Spain for Indian Students",
  "heroParas": [
    "Biotechnology in Spain for Indian Students provides the Indian students with the opportunity to explore modern biological sciences, genetics, molecular biology, microbiology, pharmaceutical research and biotechnological innovation."
  ],
  "overview": [
    "Biotechnology in Spain for Indian Students provides the Indian students with the opportunity to explore modern biological sciences, genetics, molecular biology, microbiology, pharmaceutical research and biotechnological innovation. Universities in Spain offer undergraduate and postgraduate courses in biotechnology and related disciplines, with specializations including biomedical research, industrial biotechnology and bioinformatics and molecular biology.",
    "A Bachelor's in Biotechnology in Spain is generally ideal for students who have completed Class 12 with science subjects, while a Master's in Biotechnology in Spain is targeted toward graduates of biotechnology, biology, biochemistry, biomedical sciences and related disciplines.",
    "Studying Biotechnology in Spain may be an option for students interested in European higher education, laboratory-based learning and opportunities for research in biotechnology. The students must compare the tuition fees, program language, laboratory facilities, eligibility requirements, and further study or job opportunities before applying.",
    "Edu-Hawk Worldwide helps students explore international education opportunities and understand university selection and admission planning for studying abroad."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Healthcare & Biotechnology",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG)"
    },
    {
      "label": "Top Institutions",
      "value": "Universitat de Barcelona, Universitat Aut&ograve;noma de Barcelona, Universidad Autónoma de Madrid"
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
      "title": "Why Study Biotechnology in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Studying Biotechnology in Spain will give you the chance to acquire scientific knowledge and practical skills in an exciting field that links biology, technology, medicine and industry together.",
            "Some of the key benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Strong science base: Learn genetics, molecular biology, microbiology, biochemistry and cell biology.",
            "Laboratory experience: Acquire experimental and analytical abilities through lab classes and research projects.",
            "Healthcare applications: Discover the applications of biotechnology in diagnostics, pharmaceuticals, vaccines and biomedical research.",
            "Industrial applications: Learn how biotechnology is applied in food production, agriculture, environmental protection and sustainable manufacturing.",
            "Research pathways: Prepare for postgraduate study and research careers in universities, laboratories and biotechnology companies.",
            "European academic exposure: Get to know the Spanish university system and discover opportunities for further education in Europe."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Courses on Biotechnology in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Biotechnology Courses in Spain are offered at both undergraduate and postgraduate levels."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Course",
            "Normal Duration",
            "Best Suited For"
          ],
          "rows": [
            [
              "Bachelor's in Biotechnology",
              "4 years",
              "Students after Class 12"
            ],
            [
              "Master of Science in Biotechnology",
              "1-2 years",
              "Degree in biotechnology or related science"
            ],
            [
              "MSc Biomedical Biotechnology",
              "1-2 years",
              "Students interested in medical/biomedical research"
            ],
            [
              "Master of Health Biotechnology",
              "1 year in some programs",
              "Health care applications for graduates who are interested"
            ],
            [
              "Master of Science in Pharmaceutical Biotechnology",
              "1-2 years",
              "Students studying drug development and pharmaceutical research"
            ],
            [
              "MSc Molecular and Cellular Biotechnology",
              "1–2 years",
              "Students who are interested in molecular biology and cellular processes"
            ],
            [
              "PhD in Biotechnologies",
              "3-5 years normally",
              "Research students at an advanced level"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Duration varies with university, credit requirements and program structure.",
            "Typical topics include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Genetics and Molecular Biology",
            "Microbiology and Biochemistry",
            "Cell Biology and Genetic Manipulation",
            "Bioinformatics and immunology",
            "Engineering in Life and Environment",
            "Biotechnology in Pharmaceuticals and Biomedicine",
            "Biotechnology in Agriculture and Environment",
            "Research Methodology & Laboratory Techniques"
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities in Spain for Biotechnology",
      "lead": "Explore top-ranked Spanish universities offering internationally accredited biotechnology programs, state-of-the-art research laboratories, and English-taught pathways.",
      "unis": [
        {
          "name": "Universitat de Barcelona",
          "location": "Barcelona, Spain",
          "fee": "€2,000 – €18,000 / Year",
          "desc": "Offers a 4-year Bachelor's Degree in Biotechnology (240 ECTS credits) covering biological sciences, molecular biotechnology, industrial applications, and environmental sustainability.",
          "img": Universitat_de_BarcelonaImg
        },
        {
          "name": "Universitat Autònoma de Barcelona",
          "location": "Barcelona, Spain",
          "fee": "€2,000 – €18,000 / Year",
          "desc": "Offers world-class biotechnology training with interdisciplinary laboratory focus on living organisms, genomics, and advanced biotechnology production processes.",
          "img": Universitat_Autonoma_de_BarcelonaImg
        },
        {
          "name": "Universidad Autónoma de Madrid",
          "location": "Madrid, Spain",
          "fee": "€2,000 – €18,000 / Year",
          "desc": "Offers a prestigious one-year Master's in Biotechnology (60 ECTS credits) in English and Spanish, focused on biomedical research and pharmaceutical development.",
          "img": Universidad_Autonoma_de_MadridImg
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Is it possible to study Biotechnology in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on whether you apply for a bachelor's or a master's program, your eligibility will differ.",
            "Bachelor's degree:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Pass in Class 12 from a recognized board.",
            "A background in science is generally preferred, especially in the areas of Biology, Chemistry, Physics and Mathematics.",
            "Academic marks to meet the university's admission requirements.",
            "International applicants have fulfilled the relevant admission and qualification recognition processes.",
            "Spanish language skills for Spanish-taught programs (where applicable)."
          ]
        },
        {
          "t": "p",
          "items": [
            "For a master's degree:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor's degree in Biotechnology, Biology, Biochemistry, Biomedical Sciences, Microbiology, Pharmacy or a related discipline.",
            "Possible prerequisite subjects or laboratory knowledge, depending upon the program.",
            "Degree certificates and academic transcripts.",
            "Language of instruction of the course English or Spanish",
            "Research or professional experience, as required by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students coming from another undergraduate field should verify their eligibility before applying, as certain biotechnology master's programs require a specific scientific background."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Admission Requirements for Spain Biotechnology",
      "groups": [
        {
          "t": "p",
          "items": [
            "In general, Indian students will need to prepare the following Biotechnology Admission Requirements in Spain :"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic transcripts and certificates.",
            "Class 12 documents for admission in bachelors.",
            "Bachelor's degree certificate for admission to master's degree.",
            "Passport and identity documents.",
            "Proof of proficiency in English or Spanish, if required.",
            "Statement of purpose/motivation letter, when asked.",
            "CV or résumé for post-graduate applications.",
            "Letters of recommendation, if required.",
            "Research/work experience certificates (if any).",
            "Recognition of qualifications, equivalency or translated documents upon request."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students might have to follow the relevant foreign-secondary-qualification recognition and university admission procedures in Spain for undergraduate admission. The process depends on the qualifications of the applicant and the institution."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "Biotechnology in Spain: Cost of Studies",
      "groups": [
        {
          "t": "p",
          "items": [
            "Biotechnology Fees in Spain vary by university, program, region and student fee category."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Type of University",
            "Sample Annual Tuition",
            "Approx. in INR p.a."
          ],
          "rows": [
            [
              "Public university",
              "€1,000–€8,000",
              "&#8377;1.09-&#8377;8.69 lakh"
            ],
            [
              "Private University",
              "€6,000 - €15,000+",
              "&#8377;6.52 - &#8377;16.29 lakh+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are broad planning estimates, not guarantyd fees. Some universities charge non-EU students a different rate and some courses may fall outside of these ranges.",
            "For instance, the University of Barcelona offers its Bachelor's in Biotechnology at a price of €17.69 per credit. That works out to about €1,061 (or &#8377;1.15 lakh) for 60 credits at the listed credit rate, exclusive of other charges. Actual costs for international students should be verified with the appropriate fee schedule.",
            "The Autonomous University of Madrid places its master's in Biotechnology at about €5,079 for students who are not EU residents, according to the fee conditions that are applicable.",
            "Students also need to separately budget for accommodation, food, transport, insurance, visa expenses and study materials. Funding Scholarships and fee waivers may be available, but are subject to eligibility and university decisions."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "Admission to Biotechnology in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning Biotechnology in Spain for Indian Students should follow these steps:"
          ]
        },
        {
          "t": "ol",
          "items": [
            "Select your study level: Choose between a bachelor's, master's or research degree.",
            "Choose a specialization: Think of biomedical, pharmaceutical, molecular, agricultural, industrial or environmental biotechnology.",
            "Universities to shortlist: Compare curriculum, tuition fees, lab facilities, language of teaching and admission requirements.",
            "Check the eligibility criteria: Please confirm the procedure for recognition or evaluation of your Indian academic qualifications.",
            "Prepare papers: Arrange transcripts, certificates, language scores and supporting documents.",
            "Apply here: Apply through the official university portal or the relevant admission system.",
            "Get an admission decision: Complete any further assessment or documentation requirements.",
            "Get funding and visa: Confirm your finances and check the latest Spanish student visa requirements.",
            "Prepare to sign up: Book accommodation, travel, insurance and registration with the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "The application timelines vary for different institutions, so students should check the deadlines for their desired intake before they begin the process."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Recognition of Biotechnology Degree in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students must ensure that the university and degree selected meet their educational and career goals before registering.",
            "See below:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "If the university and the program are officially recognized in Spain.",
            "Whether it is a university degree or a university-specific continuing education qualification.",
            "Whether the qualification is a progression to further study or research for a doctorate.",
            "Whether employers in the target country accept the qualification.",
            "More credential evaluation needed on return to India."
          ]
        },
        {
          "t": "p",
          "items": [
            "Important: A degree in biotechnology is typically an academic or scientific qualification, rather than a licence to practise a regulated healthcare profession. If you want to work in a regulated role, check the specific professional requirements separately."
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "Biotechnology Salary and Job Prospects in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Biotechnology degrees can lead to careers in research, pharmaceuticals, healthcare technology, agriculture, food science, and industrial production."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Job Title",
            "Illustrative Gross Annual Base Salary"
          ],
          "rows": [
            [
              "Laboratory Technician",
              "€20,000-€28,000"
            ],
            [
              "Biotechnology Research Assistant",
              "22,000 - 32,000 €"
            ],
            [
              "Quality Control Analyst",
              "€23,000-€34,000"
            ],
            [
              "Bioprocess/Production Specialist",
              "€25,000 - €38,000"
            ],
            [
              "Research Scientist",
              "28000-45000"
            ],
            [
              "Senior Biotechnology Specialist",
              "€40,000 – €60,000+"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are broad, illustrative salary ranges; they are not verified salary statistics or guarantyd earnings. Salaries will depend on location, employer, experience, specialization and qualifications. Master's or PhD may be required for research scientist and senior positions.",
            "Potential areas of employment include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Biotech and pharmaceutical companies.",
            "Research laboratories in biomedical and life sciences.",
            "Clinical research organizations.",
            "The biotechnology of agriculture and food.",
            "Environmental biotechnology and sustainability",
            "Quality control and quality assurance.",
            "Biomanufacturing and Industrial Biotechnology",
            "Universities and public or private research centers."
          ]
        },
        {
          "t": "p",
          "items": [
            "Spanish may be important for local employment, while some international research teams and companies work in English. Students should also look at work-authorisation requirements after graduation."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Requirements to Study Biotechnology in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "The documents most commonly requested are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Undergraduate applicants – Class 10 and Class 12 certificates.",
            "Applicants for master's degrees: bachelor's degree certificate and transcripts.",
            "Certified translations of academic documents if necessary.",
            "Qualification recognition or equivalency documents, if applicable.",
            "English or Spanish language test results, if any.",
            "Statement of purpose / Letter of motivation",
            "Updated CV / resume.",
            "Letters of recommendation (if requested)",
            "Certificates of work or research experience (if available).",
            "Financial documents for visa purpose (proof of funds).",
            "Health insurance and other documents required by Spanish authorities."
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact list of documents differs between universities, programs and visa processes. Always use the official current checklist."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Frequently Asked Questions on Biotechnology in Spain",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "Can Indian students pursue Biotechnology in Spain after 12th?",
              "a": "Yes. After Class 12, Indian students can pursue a bachelor's degree in Biotechnology, subject to meeting the university's academic, qualification recognition, and language requirements."
            },
            {
              "q": "How long does it take to finish Biotechnology in Spain?",
              "a": "A bachelor's degree usually takes four years to complete, and many master's programs take one or two years. Research degrees usually take longer."
            },
            {
              "q": "Do I need IELTS for Biotechnology in Spain?",
              "a": "Not always. Requirements vary depending on the language of instruction and the university policy. Spanish taught programs may require Spanish proficiency, whereas English taught programs may ask for IELTS, TOEFL or an acceptable alternative."
            },
            {
              "q": "How much does it cost to study Biotechnology in Spain?",
              "a": "Tuition depends on the school and the type of student. Public university tuition is similar, but lower. Private universities can charge more. Students should refer to the official fee schedule for their exact course and intake."
            },
            {
              "q": "What are the job opportunities after Biotechnology in Spain?",
              "a": "Graduates can find employment in biotechnology research, pharmaceuticals, quality control, laboratory science, biomanufacturing, food science and environmental biotechnology. Some advanced research positions require post-graduate qualifications. Begin Your Study Abroad Journey with Edu-Hawk Worldwide Planning Biotechnology in Spain for Indian Students ? Choosing the right university, understanding eligibility requirements, preparing documents and completing admission formalities are important steps toward your international education goals. Edu-Hawk Worldwide helps students explore international education options, understand university admission requirements and plan their study abroad journey. Take your first step toward your global education dreams with Edu-Hawk Worldwide . Biotechnology in Spain for Indian Students Studying Biotechnology in Spain Biotechnology Courses in Spain Best Universities in Spain for Biotechnology Biotechnology Admission Requirements in Spain Biotechnology Fees in Spain Edu-Hawk Worldwide"
            }
          ]
        }
      ]
    }
  ]
};

export default function BiotechnologySpain() {
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
      seoPath="/study-abroad/spain/biotechnology"
    />
  );
}
