import cmsData from "../../../../data/study_abroad/australia/pharmacy.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/Pharmacy/pharmacy_aus_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/Pharmacy/pharmacy_aus_hero_bg.webp";
import clinicalImg from "../../../../Images/Abroad/Australia/Pharmacy/pharmacy_aus_clinical.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/Pharmacy/pharmacy_aus_cta_bg.webp";

// University Campus Images
import monashImg from "../../../../Images/Abroad/Australia/Pharmacy/Monash_University.webp";
import queenslandImg from "../../../../Images/Abroad/Australia/Pharmacy/University_of_Queensland.webp";
import qutImg from "../../../../Images/Abroad/Australia/Pharmacy/Queensland_University_of_Technology.webp";
import tasmaniaImg from "../../../../Images/Abroad/Australia/Pharmacy/University_of_Tasmania.webp";

const sideImg = clinicalImg;

const page = {
  name: "Pharmacy in Australia",
  country: "Australia",
  slug: "pharmacy",
  title: "Pharmacy in Australia for Indian Students | Edu-Hawk Worldwide",
  description:
    "Explore Pharmacy in Australia for Indian students. Learn about Bachelor of Pharmacy, Master of Pharmacy, top universities (Monash, Queensland, QUT, Tasmania), eligibility, fees, pharmacist registration, and career opportunities.",
  keywords:
    "Study Pharmacy in Australia for Indian Students Best Pharmacy Universities in Australia Pharmacy Courses in Australia After 12th Bachelor of Pharmacy in Australia for International Students Pharmacy Admission Requirements in Australia Pharmacy Fees in Australia for Indian Students Pharmacy Scholarships in Australia for International Students Master of Pharmacy in Australia Pharmacy Course Duration in Australia IELTS and PTE Requirements for Pharmacy in Australia Pharmacy Specializations in Australia Pharmacy Admission Process in Australia for Indian Students Pharmacist Registration Requirements in Australia Career Opportunities After Studying Pharmacy in Australia Pharmaceutical Science Courses in Australia for International Students",
  introTitle: "Indian Students Study Pharmacy in Australia",
  heroParas: [
    "Students interested in medications, healthcare, pharmaceutical research, and patient care might pursue pharmacy education in Australia. Pharmacy programs prepare students for a variety of occupations in the pharmaceutical and healthcare industries by combining scientific knowledge, hands-on laboratory work, medication management, and professional training."
  ],
  overview: [
    "Undergraduate pharmacy degrees, graduate-entry programs, postgraduate degrees, research degrees, and specialized pharmaceutical science courses are all available to Indian students."
  ],
  level: "Undergraduate & Postgraduate",
  crumb: "Healthcare & Pharmacy",

  stats: [
    { label: "Degree Choices", value: "BPharm, MPharm, PhD" },
    { label: "Course Duration", value: "3 to 4 Years Full-Time" },
    { label: "Top Pharmacy Schools", value: "Monash, Queensland, QUT, Tasmania" },
    { label: "Accreditation", value: "Pharmacy Board of Australia & APC" }
  ],

  faqs: [
    {
      q: "After Class 12, are Indian students able to pursue pharmacy studies in Australia?",
      a: "Indeed. If they fulfill the academic, subject, and English language requirements of the university, Indian students may apply for a suitable undergraduate pharmacy program."
    },
    {
      q: "In Australia, how long does it take to study pharmacy?",
      a: "The duration of many Bachelor of Pharmacy (Honors) programs is approximately four years. The duration of graduate-entry and integrated paths may differ."
    },
    {
      q: "How much does a pharmacy cost Indian students in Australia?",
      a: "The cost of tuition varies by course and university. Some programs may cost between AUD 35,000 and AUD 65,000 or more annually, excluding living expenses, according to a general planning estimate. Examine the official pricing structure for the intake you have selected."
    },
    {
      q: "In Australia, is chemistry required for pharmacy?",
      a: "Many pharmacy programs include chemistry, though specific requirements differ. Students should review each university's precise admissions requirements."
    },
    {
      q: "Does studying pharmacy in Australia require taking the IELTS?",
      a: "IELTS Academic, PTE Academic, TOEFL iBT, and other authorized exams may be accepted by universities. The course determines the necessary score, and registration requirements need to be verified independently."
    },
    {
      q: "How can I study abroad with the assistance of Edu Hawk Worldwide Consultancy?",
      a: "Students may plan their study abroad experience, organize their application materials, research appropriate universities, and comprehend admission requirements with the assistance of Edu Hawk Worldwide. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs."
    }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Pharmacy?",
      groups: [
        {
          t: "p",
          items: [
            "Pursue accredited Pharmacy programs in Australia, combining advanced pharmaceutical chemistry, pharmacotherapy, and clinical patient care in modern hospital and community settings. Indian students prepare for registration with the Pharmacy Board of Australia and diverse healthcare careers."
          ]
        },
        {
          t: "ul",
          items: [
            "Education Relevant to Industry",
            "Training in a Practical Laboratory",
            "Exposure to Professional Practice",
            "Different Study Routes",
            "Possibilities for Research",
            "Diversity in Careers",
            "Global Educational Setting"
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
      title: "Australian Pharmacy Courses",
      groups: [
        {
          t: "p",
          items: [
            "Numerous degrees connected to pharmacy are offered by Australian universities. The institution determines the course title, length, and professional conclusion."
          ]
        },
        {
          t: "cards",
          items: [
            {
              level: "Undergraduate Degree",
              duration: "Usually 4 Years",
              title: "Pharmacy Bachelor's Degree with Honors",
              desc: "A popular route for individuals who have finished Class 12 or an equivalent degree to enter the workforce is the Bachelor of Pharmacy (Honors).",
              eligibility: "Class 12 or above, subject to academic and English language criteria relevant to the university. There may be prerequisites in chemistry and other science courses."
            },
            {
              level: "Undergraduate Degree",
              duration: "Varies by University",
              title: "Pharmacy Bachelor's Degree",
              desc: "The title Bachelor of Pharmacy or a similarly related degree is used by several universities, focusing on foundational pharmacy training.",
              eligibility: "Qualifications from secondary school and the academic and English language criteria of the institution are prerequisites for eligibility."
            },
            {
              level: "Graduate Entry",
              duration: "Accelerated Program",
              title: "Pharmacy Graduate-Entry Programs",
              desc: "Students who already have an approved bachelor's degree or the other prerequisites may be eligible for graduate-entry pathways.",
              eligibility: "An approved bachelor's degree or specified prerequisite coursework."
            },
            {
              level: "Integrated Program",
              duration: "Up to 5 Years",
              title: "Advanced Combined Degrees and a Bachelor of Pharmacy with Honors",
              desc: "A postgraduate pharmacy degree and an undergraduate honors degree are combined in some universities' integrated pharmacy programs.",
              eligibility: "Academic standards for integrated entry as specified by the university."
            },
            {
              level: "Postgraduate Degree",
              duration: "Typically 2 Years",
              title: "Pharmacy Master's Degree",
              desc: "Graduates who fulfill the necessary and prior degree requirements of a university may be qualified for a Master of Pharmacy covering clinical pharmacy, treatments, pharmacology, and patient safety.",
              eligibility: "Prior degree requirements and prerequisite standards of the university."
            },
            {
              level: "Doctoral Degree",
              duration: "3 to 4 Years Full-Time",
              title: "Pharmacy and Pharmaceutical Science Doctoral Programs",
              desc: "Students who want to pursue professions in academia or advanced research (Pharmacy PhD, Pharmaceutical Sciences PhD, Pharmacology PhD, medication discovery/delivery).",
              eligibility: "Depending on the university and research project, relevant postgraduate credentials."
            }
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Australia's Pharmacy Specializations",
      groups: [
        {
          t: "p",
          items: [
            "Depending on your career goals and qualification level, Australian pharmacy education and practice encompass several specialized pathways:"
          ]
        },
        {
          t: "pills",
          items: [
            "Clinical Pharmacy",
            "Hospital Pharmacy Practice",
            "Community & Retail Pharmacy",
            "Industrial Pharmacy & Formulation",
            "Pharmacology & Toxicology",
            "Drug Discovery & Development",
            "Clinical Trials Management",
            "Regulatory Affairs & Pharmacovigilance",
            "Pharmaceutical Quality Assurance",
            "Health Economics & Outcomes Research"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Australia's Best Universities to Consider for Pharmacy",
      lead: [
        "When conducting research on pharmacy and pharmaceutical sciences, the following organizations are helpful places to start. Before submitting an application, students should verify the current course title, campus, intake, international eligibility, and professional approval."
      ],
      unis: [
        {
          name: "Monash University",
          img: monashImg,
          location: "Melbourne, Victoria, Australia",
          desc: "Monash University is globally renowned as a world leader in Pharmacy and Pharmacology, offering world-class pharmaceutical laboratories and accredited Bachelor of Pharmacy (Honours) / Master of Pharmacy degree pathways.",
          fee: "AUD 45,000–55,000 / year",
          duration: "4 to 5 Years Full-Time",
          link: "https://www.monash.edu/"
        },
        {
          name: "Queensland University",
          img: queenslandImg,
          location: "Brisbane, Queensland, Australia",
          desc: "The University of Queensland School of Pharmacy delivers comprehensive accredited pharmacy education with world-class pharmacotherapy teaching laboratories and extensive clinical placements.",
          fee: "AUD 44,000–52,000 / year",
          duration: "4 Years Bachelor of Pharmacy (Honours)",
          link: "https://www.uq.edu.au/"
        },
        {
          name: "University of Technology in Queensland",
          img: qutImg,
          location: "Brisbane, Queensland, Australia",
          desc: "Queensland University of Technology provides modern clinical training, advanced simulation dispensaries, and extensive industry-partnered hospital and community pharmacy internships.",
          fee: "AUD 38,000–46,000 / year",
          duration: "4 Years Bachelor of Pharmacy",
          link: "https://www.qut.edu.au/"
        },
        {
          name: "Tasmania University",
          img: tasmaniaImg,
          location: "Hobart, Tasmania, Australia",
          desc: "University of Tasmania School of Pharmacy and Pharmacology offers high-quality accredited pharmacy education with personalised student support, state-of-the-art compounding facilities, and regional healthcare training.",
          fee: "AUD 36,000–42,000 / year",
          duration: "4 Years Bachelor of Pharmacy with Honours",
          link: "https://www.utas.edu.au/"
        }
      ],
      note: [
        "**How to Pick the Best University for Pharmacy**",
        "Prior to making a short selection of universities:",
        "• Professional Approval: Check if the specific program is authorized for registration as a pharmacist.",
        "• International Eligibility: Verify whether the course is open to students from other countries.",
        "• Academic Prerequisites: Verify the necessary courses and minimum grades.",
        "• English prerequisites: Examine the prerequisites for professional registration and university entrance individually.",
        "• Course Length: Verify the years and the entire study plan.",
        "• Practical Training: Examine the requirements for supervised practice, laboratory facilities, and placements.",
        "• Tuition Fees: Examine the annual and overall program expenses.",
        "• Location: Take lodging, transportation, and living costs into account.",
        "• Career Outcome: Differentiate between pharmaceutical science degrees and pharmacist registration pathways."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Qualifications for Studying Pharmacy in Australia",
      groups: [
        {
          t: "p",
          items: [
            "Each university, course, and intake has different requirements for eligibility.",
            "**Post-Class 12 Academic Requirements**",
            "In general, applicants to undergraduate pharmacy programs may require:"
          ]
        },
        {
          t: "ul",
          items: [
            "completion of Class 12 or a recognized equivalent.",
            "academic standing that satisfies the prerequisites for admission to the university.",
            "Depending on the curriculum, chemistry and other necessary science courses may be included.",
            "evidence of English language ability, if necessary.",
            "academic records, including transcripts.",
            "a current passport to study abroad."
          ]
        },
        {
          t: "p",
          items: [
            "Universities have different criteria for subjects. Before submitting your application, confirm the precise prerequisite courses and recognized Indian credentials.",
            "**Qualifications for Graduate-Entry Pharmacy**",
            "Candidates might require:"
          ]
        },
        {
          t: "ul",
          items: [
            "an acknowledged bachelor's degree.",
            "completion of the required courses.",
            "academic performance that satisfies the standards for admission to the program.",
            "proficiency in English.",
            "Extra records or evaluations, if necessary."
          ]
        },
        {
          t: "p",
          items: [
            "**Qualifications for Graduate Pharmacy**",
            "Depending on the program, candidates might require:"
          ]
        },
        {
          t: "ul",
          items: [
            "a suitable bachelor's degree or certification in pharmacy.",
            "degree certificates and academic transcripts.",
            "When necessary, professional registration or job experience may be needed.",
            "proficiency in English.",
            "When required, a research proposal, resume, or statement of aim."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Language Testing",
      title: "Language Requirements in English",
      groups: [
        {
          t: "p",
          items: [
            "Proficiency in English is essential for professional practice, patient communication, and academic research.",
            "**Exams in English for Admission to Universities**",
            "The following tests may be allowed, depending on the institution:"
          ]
        },
        {
          t: "ul",
          items: [
            "Academic IELTS",
            "Academic PTE",
            "iBT for the TOEFL",
            "Additional authorized examinations or assessments unique to a university"
          ]
        },
        {
          t: "p",
          items: [
            "Each course has a different minimum overall score and component criteria."
          ]
        }
      ]
    },
    {
      slot: "docs",
      eyebrow: "Application Papers",
      title: "Australian Pharmacy Admission Requirements",
      groups: [
        {
          t: "p",
          items: [
            "**Documents for Prospective Undergraduates**",
            "Documents that are frequently requested could be:"
          ]
        },
        {
          t: "ul",
          items: [
            "Mark sheet and certificate for class 10",
            "Mark sheet and certificate for class 12",
            "A valid passport",
            "Test results in English, if needed",
            "Application for a university",
            "If requested, a statement of purpose or another supporting statement",
            "Extra documents that the university has specified"
          ]
        },
        {
          t: "p",
          items: [
            "**Documents for Postgraduate Candidates**",
            "Depending on the course, candidates might require:"
          ]
        },
        {
          t: "ul",
          items: [
            "Prior pharmacy training or a bachelor's degree",
            "Degree certificates and academic records",
            "Curriculum vitae, if necessary",
            "A statement of intent",
            "Research proposal for research initiatives",
            "Proof of job experience or professional registration, if applicable",
            "Test results in English, if relevant"
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "The cost of Pharmacy Education in Australia",
      groups: [
        {
          t: "p",
          items: [
            "The university, subject, site, length of study, and lifestyle all affect the overall cost.",
            "**Estimated Cost of Tuition**",
            "As a general planning guide, the annual tuition costs for pharmacy or pharmaceutical science may be between AUD 35,000 and AUD 65,000 or higher for overseas students. This is not a confirmed price for each course; rather, it is an indicative range.",
            "**Additional Costs**",
            "Additionally, students should set aside money for:"
          ]
        },
        {
          t: "pills",
          items: [
            "Lodging and utilities",
            "Food and groceries",
            "Public transportation",
            "Health Coverage for International Students (OSHC)",
            "Study aids, stationery, and books",
            "Equipment for the lab and additional resources needed for the course",
            "Travel expenses and the application for a visa",
            "Emergency funds and personal costs"
          ]
        }
      ]
    },
    {
      slot: "scholarships",
      eyebrow: "Financial Aid",
      title: "Australian Pharmacy Scholarships",
      groups: [
        {
          t: "p",
          items: [
            "International students who meet the requirements can apply for scholarships from certain Australian universities. The institution, academic standing, program, and admission all influence availability and award values.",
            "**Potential Sources of Funding**"
          ]
        },
        {
          t: "ul",
          items: [
            "Scholarships Based on Merit",
            "Scholarships for International Students",
            "Awards for Faculty or Programs",
            "Scholarships for Research"
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step",
      title: "Australia's Pharmacy Admission Process",
      groups: [
        {
          t: "step",
          items: [
            {
              title: "Step 1: Select Your Course",
              text: "Choose between a pharmaceutical science degree, research degree, Master of Pharmacy, Bachelor of Pharmacy, or graduate-entry program."
            },
            {
              title: "Step 2: Make a shortlist of colleges",
              text: "Examine the course design, location, cost, prerequisites, and possibilities for hands-on training."
            },
            {
              title: "Step 3: Confirm Expert Approval",
              text: "Verify if the specific course is authorized for the planned pathway if you want to become a registered pharmacist."
            },
            {
              title: "Step 4: Verify Your Qualifications",
              text: "Examine your academic records, prior credentials, English language skills, and topics from Class 12."
            },
            {
              title: "Step 5: Get Your Documents Ready",
              text: "Gather passport information, transcripts, certificates, English test results, and any other documents that are needed."
            },
            {
              title: "Step 6: Send in Your Application",
              text: "Use an approved application method or the university's official admissions webpage."
            },
            {
              title: "Step 7: Examine Your Offer",
              text: "Examine the course name, campus, enrollment, tuition costs, terms, due dates, and refund policies."
            },
            {
              title: "Step 8: Obtain a Student Visa",
              text: "Prepare the necessary visa paperwork and adhere to the Australian Department of Home Affairs' procedure."
            },
            {
              title: "Step 9: Get Ready for Hands-on Training",
              text: "Finish any induction, safety instruction, health examinations, or placement paperwork that the institution specifies."
            }
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Australia's Career Opportunities After Pharmacy",
      groups: [
        {
          t: "p",
          items: [
            "Career alternatives are determined by company requirements, experience, professional registration, and qualifications.",
            "**Possible Career Paths**"
          ]
        },
        {
          t: "ul",
          items: [
            "Local Pharmacist",
            "Pharmacist in a hospital",
            "Pharmacist in clinical practice",
            "Pharmaceutical Investigator",
            "Expert in Quality Assurance",
            "Regulatory Affairs Expert",
            "Associate in Clinical Research",
            "Associate in Pharmacovigilance",
            "Professional in Pharmaceutical Manufacturing",
            "Professional in academia or research"
          ]
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Required Records",
      title: "Documents Needed for Pharmacy in Australia",
      groups: [
        {
          t: "p",
          items: [
            "The university and program determine the precise list of documents.",
            "**Academic Records**"
          ]
        },
        {
          t: "ul",
          items: [
            "Mark sheet and certificate for class 10",
            "Mark sheet and certificate for class 12",
            "Transcripts from prior schools and, if relevant, degrees",
            "When necessary, official translations into English"
          ]
        },
        {
          t: "p",
          items: [
            "**Documents of Identity and Application**"
          ]
        },
        {
          t: "ul",
          items: [
            "A valid passport",
            "A recent photo, upon request",
            "Application for a university",
            "If necessary, a statement of purpose",
            "References and curriculum vitae for specific postgraduate programs, if relevant"
          ]
        },
        {
          t: "p",
          items: [
            "**Documents in the English Language**"
          ]
        },
        {
          t: "ul",
          items: [
            "If necessary, the results of the TOEFL iBT, PTE Academic, IELTS Academic, or another recognized test",
            "Extra proof allowed per the university's English-language policy"
          ]
        },
        {
          t: "p",
          items: [
            "**Financial and Visa Documents**"
          ]
        },
        {
          t: "ul",
          items: [
            "Documentation for offers and enrollment",
            "When appropriate, Confirmation of Enrollment (CoE)",
            "Proof of cash and other documentation needed to comply with current visa regulations",
            "Evidence of Overseas Student Health Cover (OSHC), where needed",
            "Additional records that the Department of Home Affairs has sought"
          ]
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Visa Subclass 500",
      title: "Australia's Pharmacy Student Visa Requirements",
      groups: [
        {
          t: "p",
          items: [
            "When enrolled in an appropriate full-time program, international students must typically fulfill the requirements for the Australian student visa.",
            "**Crucial Steps in Visa Preparation**"
          ]
        },
        {
          t: "ul",
          items: [
            "Accept an offer and finish the necessary enrollment procedure.",
            "When necessary, obtain a current Confirmation of Enrollment (CoE).",
            "Prepare the necessary paperwork and proof of financial capability.",
            "fulfill the relevant health and genuine student criteria.",
            "As needed, set up Overseas Student Health Cover (OSHC).",
            "Send in the required supporting documentation along with the visa application."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "FAQ",
      title: "FAQs, or frequently asked questions",
      groups: [
        {
          t: "faq",
          items: [
            {
              q: "After Class 12, are Indian students able to pursue pharmacy studies in Australia?",
              a: "Indeed. If they fulfill the academic, subject, and English language requirements of the university, Indian students may apply for a suitable undergraduate pharmacy program."
            },
            {
              q: "In Australia, how long does it take to study pharmacy?",
              a: "The duration of many Bachelor of Pharmacy (Honors) programs is approximately four years. The duration of graduate-entry and integrated paths may differ."
            },
            {
              q: "How much does a pharmacy cost Indian students in Australia?",
              a: "The cost of tuition varies by course and university. Some programs may cost between AUD 35,000 and AUD 65,000 or more annually, excluding living expenses, according to a general planning estimate. Examine the official pricing structure for the intake you have selected."
            },
            {
              q: "In Australia, is chemistry required for pharmacy?",
              a: "Many pharmacy programs include chemistry, though specific requirements differ. Students should review each university's precise admissions requirements."
            },
            {
              q: "Does studying pharmacy in Australia require taking the IELTS?",
              a: "IELTS Academic, PTE Academic, TOEFL iBT, and other authorized exams may be accepted by universities. The course determines the necessary score, and registration requirements need to be verified independently."
            },
            {
              q: "How can I study abroad with the assistance of Edu Hawk Worldwide Consultancy?",
              a: "Students may plan their study abroad experience, organize their application materials, research appropriate universities, and comprehend admission requirements with the assistance of Edu Hawk Worldwide. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs."
            }
          ]
        }
      ]
    }
  ]
};

export default function PharmacyAustralia() {
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
      seoPath="/study-abroad/australia/pharmacy"
    />
  );
}