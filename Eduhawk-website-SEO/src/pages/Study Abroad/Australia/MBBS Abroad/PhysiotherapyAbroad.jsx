import cmsData from "../../../../data/study_abroad/australia/physiotherapy.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/Physiotherapy/physiotherapy_aus_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/Physiotherapy/physiotherapy_aus_hero_bg.webp";
import clinicalImg from "../../../../Images/Abroad/Australia/Physiotherapy/physiotherapy_aus_clinical.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/Physiotherapy/physiotherapy_aus_cta_bg.webp";

// University Campus Images
import latrobeImg from "../../../../Images/Abroad/Australia/Physiotherapy/La_Trobe_University.webp";
import canberraImg from "../../../../Images/Abroad/Australia/Physiotherapy/University_of_Canberra.webp";
import acuImg from "../../../../Images/Abroad/Australia/Physiotherapy/Australian_Catholic_University.webp";
import cduImg from "../../../../Images/Abroad/Australia/Physiotherapy/Charles_Darwin_University.webp";

const sideImg = clinicalImg;

const page = {
  name: "Physiotherapy in Australia",
  country: "Australia",
  slug: "physiotherapy",
  title: "Physiotherapy in Australia for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Physiotherapy in Australia for Indian students. Learn about Bachelor of Physiotherapy, Doctor of Physiotherapy, top universities (La Trobe, Canberra, ACU, CDU), eligibility, fees, registration, and career opportunities.",
  keywords:
    "Study Physiotherapy in Australia for Indian Students Best Physiotherapy Universities in Australia Physiotherapy Courses in Australia After 12th Bachelor of Physiotherapy in Australia for International Students Physiotherapy Admission Requirements in Australia Physiotherapy Fees in Australia for Indian Students Physiotherapy Scholarships in Australia for International Students Doctor of Physiotherapy in Australia for Indian Students Physiotherapy Course Duration in Australia IELTS and PTE Requirements for Physiotherapy in Australia Physiotherapy Specializations in Australia Physiotherapy Admission Process in Australia for Indian Students Physiotherapist Registration Requirements in Australia Career Opportunities After Studying Physiotherapy in Australia Physiotherapy Student Visa Requirements for Indian Students",
  introTitle: "Physiotherapy for Indian Students in Australia",
  heroParas: [
    "The goals of the medical field of physiotherapy are to assist individuals recover from illnesses, injuries, and physical disabilities as well as to improve movement, manage pain, and restore physical function."
  ],
  overview: [
    "Study Physiotherapy programs in Australia incorporate classroom instruction, the development of practical skills, and clinical internships under supervision. After finishing an appropriate bachelor's degree, Indian students can pursue postgraduate entry programs or undergraduate degrees following Class 12."
  ],
  level: "Undergraduate & Graduate Entry",
  crumb: "Healthcare & Physiotherapy",

  stats: [
    { label: "Degree Choices", value: "BPhysio, DPT, MPhysio" },
    { label: "Course Duration", value: "3 to 4 Years Full-Time" },
    { label: "Top Physiotherapy Schools", value: "La Trobe, Canberra, ACU, CDU" },
    { label: "Accreditation", value: "Australian Physiotherapy Council & PBA" }
  ],

  faqs: [
    {
      q: "After completing their 12th grade education, are Indian students able to pursue physiotherapy in Australia?",
      a: "Indeed. After Class 12, qualified students can apply to undergraduate physiotherapy programs, according to the academic, subject, and English language criteria of each university."
    },
    {
      q: "In Australia, how long does physiotherapy take?",
      a: "It typically takes four years to get an undergraduate degree in physiotherapy. The length of graduate-entry professional programs may vary."
    },
    {
      q: "What is the price of studying physiotherapy in Australia?",
      a: "For undergraduate programs, tuition can often range from AUD 40,000 to AUD 65,000 or more each year. Living expenses are extra, and fees differ depending on the institution."
    },
    {
      q: "Is taking the IELTS required for physiotherapy in Australia?",
      a: "Students must fulfilll the recognized English language criteria of the university. High minimum scores are required for several physiotherapy programs, and there is an additional English language requirement for professional registration."
    },
    {
      q: "Does admission to physiotherapy in Australia need NEET?",
      a: "For Australian physiotherapy programs, NEET is not always a prerequisite for admission. Verify the specific program's and university's prerequisites."
    },
    {
      q: "Indian students interested in physiotherapy in Australia can receive assistance from Edu Hawk.",
      a: "Our advice could consist of: Recognizing undergraduate and graduate programs, Examining academic eligibility, Making a short list of appropriate universities, Comparing projected prices and course structures, Recognizing the English language requirements, Examining potential scholarships, Putting application materials in order, Giving advice on the paperwork for student visas, and assisting with pre-departure planning."
    }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Study Physiotherapy in Australia?",
      groups: [
        {
          t: "p",
          items: [
            "Advance your career with accredited Physiotherapy degrees in Australia, integrating biomechanics, musculoskeletal rehabilitation, and extensive supervised clinical practice across public hospitals and private clinics. Prepare for professional registration with the Physiotherapy Board of Australia (AHPRA)."
          ]
        },
        {
          t: "ul",
          items: [
            "Clinical learning: Through hands-on training and assignments, hone your abilities in evaluation, treatment planning, patient care, and rehabilitation.",
            "Options for specialization: Look into musculoskeletal treatment, neurological rehabilitation, sports physiotherapy, and other fields.",
            "Research opportunities: Study movement science, rehabilitation research, and evidence-based treatment.",
            "Career diversity: Take into account options in community health, private clinics, sports environments, hospitals, and rehabilitation facilities.",
            "Discover the multicultural setting of Australia's international student population.",
            "Additional study: Pursue postgraduate degrees or conduct research in the health sciences relevant to physiotherapy."
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
      title: "Australian Physiotherapy Courses",
      groups: [
        {
          t: "p",
          items: [
            "Australian universities offer globally accredited physiotherapy degrees combining biomechanics, clinical evaluation, musculoskeletal rehabilitation, and extensive hospital internships."
          ]
        },
        {
          t: "cards",
          items: [
            {
              level: "Undergraduate Degree",
              duration: "Typically 4 Years",
              title: "Physiotherapy Bachelor's Degree",
              desc: "Anatomy, physiology, biomechanics, mobility, clinical evaluation, therapeutic exercise, and rehabilitation are all included in this entry-level professional degree.",
              eligibility: "Completion of Class 12 or equivalent with Science subjects (Physics, Chemistry, Biology/Mathematics) and English proficiency."
            },
            {
              level: "Undergraduate (Honours)",
              duration: "Typically 4 Years",
              title: "Physiotherapy Bachelor's Degree with Honors",
              desc: "A professional undergraduate degree that involves advanced coursework, clinical instruction under supervision, and research components.",
              eligibility: "High academic ranking in Class 12 science subjects or strong academic performance in initial study years."
            },
            {
              level: "Graduate Entry",
              duration: "Typically 3 Years",
              title: "Doctor of Physiotherapy (Graduate Entry)",
              desc: "For candidates who have previously earned a relevant bachelor's degree, professional entry-to-practice Doctor of Physiotherapy programs offered by leading Australian universities.",
              eligibility: "Recognised bachelor's degree in exercise science, kinesiology, or health science with prerequisite human anatomy and physiology units."
            },
            {
              level: "Graduate Entry",
              duration: "Typically 2 Years",
              title: "Physiotherapy Master's Degree (Entry to Practice)",
              desc: "Accelerated graduate-entry physiotherapy program enabling qualified graduates to transition into professional clinical practice with comprehensive clinical placements.",
              eligibility: "Relevant prior bachelor's degree meeting specific anatomy, biomechanics, and physiology prerequisite benchmarks."
            },
            {
              level: "Postgraduate Specialist",
              duration: "1 to 2 Years",
              title: "Master of Clinical / Sports / Musculoskeletal Physiotherapy",
              desc: "Advanced programs for registered physiotherapists seeking specialization in sports physiotherapy, musculoskeletal care, neurological rehabilitation, or pediatric physiotherapy.",
              eligibility: "Recognised physiotherapy qualification, current physiotherapy registration, and documented clinical work experience."
            },
            {
              level: "Doctoral Research",
              duration: "Typically 3 to 4 Years",
              title: "PhD in Physiotherapy & Rehabilitation Sciences",
              desc: "Advanced research doctorate focused on evidence-based rehabilitation, musculoskeletal recovery, clinical biomechanics, and neurological physical therapy.",
              eligibility: "Relevant Master's by research or first-class Honours degree with research proposal and institutional supervisor approval."
            }
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Physiotherapy",
      groups: [
        {
          t: "p",
          items: [
            "Students can investigate topics like:"
          ]
        },
        {
          t: "pills",
          items: [
            "Physiotherapy for the Musculoskeletal System",
            "Physiotherapy for Sports",
            "Physiotherapy for the nervous system",
            "Physiotherapy for Cardiorespiratory Conditions",
            "Physiotherapy for Children",
            "Physical therapy for the elderly",
            "Rehabilitation for Orthopedics",
            "Physiotherapy for Women's Health",
            "Support for Rehabilitation and Disability",
            "Pain Control",
            "Physiotherapy in the Community",
            "Research and Academic Practice in Exercise and Movement Science"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "The Best Australian Universities to Consider",
      lead: [
        "When looking into physiotherapy education, the following universities are good places to start. Before applying, confirm the program's current accreditation, intake availability, and international eligibility."
      ],
      unis: [
        {
          name: "University of La Trobe",
          img: latrobeImg,
          location: "Melbourne, Victoria, Australia",
          desc: "La Trobe University is a recognized leader in health sciences, offering accredited Bachelor of Physiotherapy (Honours) and Master of Physiotherapy Practice degrees with comprehensive clinical placements.",
          fee: "AUD 42,000–50,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.latrobe.edu.au/"
        },
        {
          name: "Canberra University",
          img: canberraImg,
          location: "Canberra, ACT, Australia",
          desc: "University of Canberra delivers premier accredited physiotherapy programs featuring hands-on training at the dedicated University of Canberra Hospital for Specialised Rehabilitation.",
          fee: "AUD 38,000–46,000 / year",
          duration: "4 Years Bachelor of Physiotherapy",
          link: "https://www.canberra.edu.au/"
        },
        {
          name: "Australian Catholic University",
          img: acuImg,
          location: "Brisbane, Sydney, Melbourne, Australia",
          desc: "ACU's School of Allied Health delivers accredited Bachelor of Physiotherapy programs supported by modern simulation suites and extensive clinical fieldwork across public healthcare networks.",
          fee: "AUD 39,000–47,000 / year",
          duration: "4 Years Bachelor of Physiotherapy",
          link: "https://www.acu.edu.au/"
        },
        {
          name: "Charles Darwin University",
          img: cduImg,
          location: "Darwin, Northern Territory, Australia",
          desc: "CDU provides high-calibre physiotherapy training with specialized regional, rural, and remote healthcare placements, offering distinct clinical exposure in tropical medicine and community rehabilitation.",
          fee: "AUD 36,000–42,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.cdu.edu.au/"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Qualifications for Undergraduate Physiotherapy",
      groups: [
        {
          t: "p",
          items: [
            "In general, applicants must fulfill the academic and subject requirements of the university following Class 12.",
            "Requirements could consist of:"
          ]
        },
        {
          t: "ul",
          items: [
            "Earning a Class 12 diploma or its equivalent.",
            "Biology and chemistry are common examples of pertinent scientific courses; some programs may focus on mathematics or physics.",
            "Necessary academic credentials or a comparable selection score.",
            "Proficiency in English.",
            "any further requirements unique to the university."
          ]
        },
        {
          t: "p",
          items: [
            "**Graduate-level physical therapy**",
            "Graduate-entry program applicants may require:"
          ]
        },
        {
          t: "ul",
          items: [
            "an acknowledged bachelor's degree.",
            "Anatomy, physiology, and other specific disciplines are examples of prerequisite university courses.",
            "a minimal grade-point average.",
            "proficiency in English.",
            "more records, interviews, or evaluations as necessary."
          ]
        },
        {
          t: "p",
          items: [
            "The requirements for a graduate-entry program might not always be met by a bachelor's degree in an unrelated discipline."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Language Testing",
      title: "English language proficiency requirements",
      groups: [
        {
          t: "p",
          items: [
            "The English language proficiency requirements for physiotherapy may be higher than those for certain other courses because it requires direct patient communication.",
            "IELTS Academic, PTE Academic, TOEFL iBT, and other authorized exams may be accepted by universities. The program and institution determine the necessary scores.",
            "There is a specific English language requirement for professional registration. Instead of presuming that university entrance scores will be adequate for registration, applicants should review the current Physiotherapy Board of Australia standards."
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
            "There isn't a single entrance exam used by all Australian universities for physiotherapy admissions.",
            "Selection may take into account:"
          ]
        },
        {
          t: "ul",
          items: [
            "Academic scores for class 12.",
            "requirements for relevant subjects.",
            "academic results comparable to those of a university.",
            "Prior bachelor's degree outcomes for graduate-level courses.",
            "test results in English.",
            "interviews or other evaluations, if necessary."
          ]
        }
      ]
    },
    {
      slot: "duration",
      eyebrow: "Study Timeline",
      title: "Duration of Course",
      groups: [
        {
          t: "p",
          items: [
            "**Physiotherapy Bachelor's degree:** Typically, four years",
            "**Physiotherapy Bachelor's degree with honors:** Typically, four years",
            "**Doctor of Physiotherapy with Graduate Entry:** Typically, three years",
            "**Master's program with graduate entry:** varies; some are about two years old.",
            "**PhD in rehabilitation research or physiotherapy:** Typically, three to four years"
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
            "The university, program level, campus location, and year of admission all affect international tuition and living expenses in Australia."
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
            ["Bachelor of Physiotherapy", "AUD 38,000 – AUD 48,000 / year", "4 Years Full-Time"],
            ["Bachelor of Physiotherapy (Honours)", "AUD 39,000 – AUD 49,000 / year", "4 Years Full-Time"],
            ["Doctor of Physiotherapy (DPT)", "AUD 46,000 – AUD 56,000 / year", "3 Years Full-Time"],
            ["Master of Physiotherapy (Graduate Entry)", "AUD 44,000 – AUD 54,000 / year", "2 Years Full-Time"],
            ["Master of Specialist Physiotherapy", "AUD 40,000 – AUD 50,000 / year", "1 – 2 Years Full-Time"],
            ["PhD in Physiotherapy & Rehabilitation", "AUD 36,000 – AUD 46,000 / year", "3 – 4 Years Full-Time"]
          ]
        },
        {
          t: "h4",
          text: "Estimated Living and Clinical Expenses"
        },
        {
          t: "table",
          headers: ["Expense Category", "Estimated Cost (AUD)", "Details & Notes"],
          rows: [
            ["Living & Accommodation", "AUD 20,000 – AUD 29,710 / year", "Rental accommodation, utilities, groceries, and daily transit"],
            ["Overseas Student Health Cover (OSHC)", "AUD 600 – AUD 850 / year", "Mandatory medical and hospital insurance for student visa holders"],
            ["Clinical Uniforms & Equipment", "AUD 300 – AUD 650", "Clinical polo, scrubs, reflex hammer, stethoscope & goniometer"],
            ["Immunisations & Placement Clearances", "AUD 300 – AUD 600", "Hospital placement verification, Working with Children Check & CPR"],
            ["Textbooks & Study Supplies", "AUD 500 – AUD 1,000 / year", "Anatomy atlases, medical journals, and digital simulation access"]
          ]
        },
        {
          t: "pills",
          items: [
            "Lodging and utilities",
            "Food and meals",
            "Public transportation",
            "Internet and mobile phone",
            "Textbooks, tools, and study supplies",
            "Health Coverage for International Students (OSHC)",
            "Clinical placement uniforms & kits",
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
            "Students could investigate:"
          ]
        },
        {
          t: "ul",
          items: [
            "Merit scholarships at universities",
            "Scholarships for international students' tuition",
            "Faculty-specific honors",
            "Scholarships for research for qualified postgraduate candidates",
            "Funding programs for external education"
          ]
        },
        {
          t: "p",
          items: [
            "Additional honors listed by specific colleges",
            "Scholarships may include research support, fixed financial awards, or partial tuition reductions. Academic achievement, nationality, course level, and other factors may determine eligibility."
          ]
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Accreditation & Practice",
      title: "Australian Physiotherapist Registration",
      groups: [
        {
          t: "p",
          items: [
            "Those who want to work as physiotherapists in Australia must register as professionals.",
            "Indian students should confirm the following before enrolling:"
          ]
        },
        {
          t: "ul",
          items: [
            "if the Australian Physiotherapy Council currently accredits the program.",
            "whether the Physiotherapy Board of Australia has approved the program for the appropriate registration pathway.",
            "Whether clinical education and placements are necessary for the course.",
            "Is there anything else grads need to do in order to register?",
            "whether the candidate satisfies the relevant English language requirement.",
            "if their particular situation calls for any further registration procedures."
          ]
        },
        {
          t: "p",
          items: [
            "Physiotherapy education is accredited by the Australian Physiotherapy Council. With administrative assistance from Ahpra, the Physiotherapy Board of Australia is in charge of professional regulation and registration criteria."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Career possibilities in Physiotherapy",
      groups: [
        {
          t: "p",
          items: [
            "Career possibilities may include the following, depending on qualifications, registration, and experience:"
          ]
        },
        {
          t: "ul",
          items: [
            "Physiotherapist in a hospital",
            "Physiotherapist in Private Practice",
            "Physiotherapist for Rehabilitation",
            "Roles in sports physical therapy",
            "Physiotherapist for Community Health",
            "Roles in musculoskeletal physical therapy",
            "Roles in Neurological Rehabilitation",
            "Roles in pediatric physical therapy",
            "Roles in Aged-Care Physiotherapy",
            "Rehabilitation science research assistant",
            "Coordinator of Clinical Research",
            "Research positions in academia or universities following additional studies",
            "Support roles for health programs and rehabilitation"
          ]
        },
        {
          t: "p",
          items: [
            "While comparable research or support roles may have differing qualifications, certain positions need registration as a physiotherapist. Registration, experience, employer requirements, and open positions all play a role in employment."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step",
      title: "Indian Students Admission Procedure",
      groups: [
        {
          t: "step",
          items: [
            {
              title: "Step 1: Select your route",
              text: "Choose between applying through a graduate-entry program after earning a bachelor's degree or studying physiotherapy after Class 12."
            },
            {
              title: "Step 2: Verify your academic eligibility",
              text: "Examine academic equivalency, subject prerequisites, grades, and any other selection requirements."
            },
            {
              title: "Step 3: Confirm your professional certification",
              text: "Verify the precise course and campus using the most recent official accreditation and approval data."
            },
            {
              title: "Step 4: Evaluate colleges and prices",
              text: "Examine the length of the course, the cost of tuition, the location, clinical placements, scholarships, and living expenses."
            },
            {
              title: "Step 5: Fulfilll the English language requirements",
              text: "Verify the university's score criteria, including component scores, by taking an approved exam."
            },
            {
              title: "Step 6: Get your paperwork ready",
              text: "Gather academic records, passport information, English-language test results, and any other paperwork the school requests."
            },
            {
              title: "Step 7: Send in the application",
              text: "Apply on the official university website or, if appropriate, through an authorized representative."
            },
            {
              title: "Step 8: Examine your proposal",
              text: "Verify the program's name, campus, costs, terms, admission date, and acceptance deadline."
            },
            {
              title: "Step 9: Make financial and medical arrangements",
              text: "Make plans for living expenses, travel, tuition, and the necessary overseas student health insurance."
            },
            {
              title: "Step 10: Submit a student visa application",
              text: "Provide the necessary paperwork and adhere to the most recent Australian Department of Home Affairs procedure."
            },
            {
              title: "Step 11: Get ready to go",
              text: "Make travel, lodging, enrollment, and any placement or compliance checks required by the university."
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
            "Transcripts and a bachelor's degree certificate, if any, as well as the results of any English language tests",
            "If necessary, a personal statement or a statement of purpose",
            "Academic citations, if necessary",
            "Curriculum vitae for appropriate graduate courses",
            "Proof of prerequisite courses",
            "Financial records for the application for a visa",
            "Application materials for scholarships, if relevant",
            "Accept and confirm the enrollment.",
            "Health of International Students Cover the evidence",
            "Any health, vaccination, police check, or placement paperwork that the university requests"
          ]
        },
        {
          t: "p",
          items: [
            "The program and the student's situation determine the final checklist."
          ]
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Visa Subclass 500",
      title: "Australian Student Visa",
      groups: [
        {
          t: "p",
          items: [
            "In order to enroll in an authorized full-time course, Indian students typically require the proper Australian student visa.",
            "Requirements could consist of:"
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
            "Character and identity documents"
          ]
        },
        {
          t: "p",
          items: [
            "Health examinations, if requested Visa regulations, fees, and application processes are subject to change. An education consultant cannot guarantee admission or visa acceptance; that choice is made by the Australian Government."
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
              q: "After completing their 12th grade education, are Indian students able to pursue physiotherapy in Australia?",
              a: "Indeed. After Class 12, qualified students can apply to undergraduate physiotherapy programs, according to the academic, subject, and English language criteria of each university."
            },
            {
              q: "In Australia, how long does physiotherapy take?",
              a: "It typically takes four years to get an undergraduate degree in physiotherapy. The length of graduate-entry professional programs may vary."
            },
            {
              q: "What is the price of studying physiotherapy in Australia?",
              a: "For undergraduate programs, tuition can often range from AUD 40,000 to AUD 65,000 or more each year. Living expenses are extra, and fees differ depending on the institution."
            },
            {
              q: "Is taking the IELTS required for physiotherapy in Australia?",
              a: "Students must fulfilll the recognized English language criteria of the university. High minimum scores are required for several physiotherapy programs, and there is an additional English language requirement for professional registration."
            },
            {
              q: "Does admission to physiotherapy in Australia need NEET?",
              a: "For Australian physiotherapy programs, NEET is not always a prerequisite for admission. Verify the specific program's and university's prerequisites."
            },
            {
              q: "Indian students interested in physiotherapy in Australia can receive assistance from Edu Hawk.",
              a: "Our advice could consist of: Recognizing undergraduate and graduate programs, Examining academic eligibility, Making a short list of appropriate universities, Comparing projected prices and course structures, Recognizing the English language requirements, Examining potential scholarships, Putting application materials in order, Giving advice on the paperwork for student visas, and assisting with pre-departure planning."
            }
          ]
        }
      ]
    }
  ]
};

export default function PhysiotherapyAustralia() {
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
      seoPath="/study-abroad/australia/physiotherapy"
    />
  );
}