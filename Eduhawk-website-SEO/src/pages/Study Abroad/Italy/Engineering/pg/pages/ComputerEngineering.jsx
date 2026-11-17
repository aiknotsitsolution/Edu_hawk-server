import cmsData from "../../../../../../data/study_abroad/italy/comp_engg_pg.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/cta_bg.webp";
import Bologna_UniversityImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/Bologna_University.webp";
import Polytechnic_of_MilanImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/Polytechnic_of_Milan.webp";
import Turin_Polytechnic_UniversityImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Computer/Turin_Polytechnic_University.webp";

const page = {
  "name": "Computer Engineering - PG in Italy",
  "country": "Italy",
  "slug": "comp_engg_pg",
  "title": "Computer Engineering - PG in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Computer Engineering - PG in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Computer Engineering in Italy, Master's in Computer Engineering Italy, Study Computer Engineering Italy, Computer Engineering Fees in Italy",
  "introTitle": "Computer Engineering in Italy for Indian Students",
  heroParas: [
    "A Master’s in Computer Engineering in Italy combines computer architecture, embedded hardware design, artificial intelligence, and cybersecurity in Europe's top-tier technical universities."
  ],
  overview: [
    "Yes. Indian students with relevant bachelor's degrees can apply for admission to the university if they meet its academic, language and programme-specific admission requirements."
  ],
  "level": "Postgraduate",
  "crumb": "Engineering",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "3 to 4 Years (UG) / 2 Years (PG)"
    },
    {
      "label": "Top Institutions",
      "value": "Milano, Sapienza University of Rome, Bologna"
    },
    {
      "label": "Medium of Study",
      "value": "English & Italian Taught"
    }
  ],
  "sections": [
    {
      "slot": "section-1",
      "eyebrow": "Details",
      "title": "Can Indian students pursue Masters in Computer Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students with relevant bachelor's degrees can apply for admission to the university if they meet its academic, language and programme-specific admission requirements."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "How Long Does a Master's in Computer Engineering Take in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Most Italian master's programs are two years long and have 120 ECTS. 2. Check the duration of the specific program on the university's official website."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Computer Engineering - PG in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Bologna_UniversityImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: Polytechnic_of_MilanImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Turin_Polytechnic_UniversityImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Bologna_UniversityImg
            }
          ]
        }
      ]
    },
    {
      "slot": "section-3",
      "eyebrow": "Details",
      "title": "Is it possible to Study Computer Engineering in Italy in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yeah. Politecnico di Milano offers English-taught options such as the MSc in Computer Science and Engineering. The Politecnico di Torino and the University of Bologna also offer relevant programs, with a range of language options depending on the course."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "How much does it cost to study Computer Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition depends on the university and the students' situation. For example, the annual budgeting estimates are €1,000 (₹1,08,600), €2,500 (₹2,71,500), €5,000 (₹5,43,000), €8,000 (₹8,68,800). These are not official university fee quotations."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "What can I do after a Master in Computer Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "After the completion of the course, graduates can apply for the below job roles - Software Engineer Computer Engineer AI Engineer Embedded Systems Engineer Cybersecurity Engineer Cloud Engineer Data Engineer Career opportunities may depend on technical skills, experience, language proficiency and employer requirements."
          ]
        }
      ]
    },
    {
      "slot": "section-7",
      "eyebrow": "Details",
      "title": "Admission Procedure for Computer Engineering in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "How to Earn a Master's Degree In Computer Engineering in Italy.",
            "Choose your specialty: Decide whether you want to focus on software, AI, embedded systems, cybersecurity, networks or another area of computing.",
            "Shortlist universities: Compare course content, language of instruction, fees and scholarship options.",
            "Academic eligibility: Check the undergraduate subjects, credits and minimum grades needed.",
            "Prepare your documents: Collect your degree certificate, transcripts, CV, language scores and supporting documents.",
            "Apply for programs: Submit your application via the official university admissions portal within the application window.",
            "Complete selection requirements: Attend any required interviews and provide any additional academic information.",
            "Accept your offer: Follow the instructions from the university to confirm your admission and make any necessary payments."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Recognition of Computer Engineering Degree in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "A recognized Master's degree in Computer Engineering from Italy can provide advanced academic preparation for careers in technology and engineering.",
            "Before you sign up, check that:",
            "The official name and level of qualification of the degree",
            "The university's accredited status",
            "Requirements for Length and Credit",
            "The program offered curriculum & specializations",
            "Whether the qualification allows further study including doctoral research",
            "Any professional registration requirements that are relevant to your career plans",
            "Private technology sector computer engineering roles depend on employer requirements, technical expertise and experience. Students going back to India should check any qualification-recognition requirements that apply to their intended role or further education."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Computer Engineering Salary and Job Opportunities in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates of a Master's in Computer Engineering in Italy can find employment in software development, AI, telecommunications, cybersecurity, embedded systems and technology research.",
            "Possible career paths include:",
            "Computer Engineer: Designs, develops, and maintains computer based systems.",
            "Software Engineer - Designs, builds and tests software applications and platforms.",
            "Machine Learning and AI Engineer: Creates intelligent systems and machine-learning applications.",
            "Embedded Systems Engineer: Design of software that integrates with hardware systems.",
            "Cybersecurity Engineer: Helps protect networks, applications and computing infrastructure.",
            "Cloud Engineer: Creates and manages cloud-based platforms and services.",
            "Computer Networks Engineer: Works with network architecture, connectivity and infrastructure.",
            "Data Engineer: Builds data pipelines, information-processing systems.",
            "Systems Engineer: Integrates hardware and software and other technical elements.",
            "Research and Development Engineer: Assists in the development and testing of new technology.",
            "Indicative Expected Salary",
            "Here are rough annual gross salary figures for Italy. They are not guarantyd earnings, nor are they official salary statistics.",
            "Stage in careerGross annual salary indicative",
            "Junior position€28,000-€35,000 (approx Rs 30.41-38.01 lakh)",
            "Experienced professional€35,000-€50,000 (roughly ₹38.01-₹54.30 lakh)",
            "Specialist or experienced engineers€50,000-€70,000+ (approx. ₹54.30-₹76.02 lakh+)",
            "The INR equivalents use €1 &asymp; ₹108.60. Real wages depend on the position, place, employer, experience, language skills and technical specialization. Figures before tax and deduction.",
            "Graduates can also find opportunities in automotive technology, industrial automation, telecommunications, financial technology and embedded computing. The number of jobs available depends on how many people are needed in the market, the skills and qualifications of the individual, and the rules about who can work there."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documents Needed to Study Computer Engineering in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Indian students applying for a master's degree may need:",
            "Passport valid",
            "Provisional Certificate / Bachelor's Degree Certificate",
            "Marksheets and academic transcripts (with semester-wise)",
            "Detailed description of subject or syllabus, if requested",
            "Certificate of proficiency in English language (if applicable)",
            "Current CV or Resume",
            "Motivation letter / Statement of purpose",
            "Recommendation letters if needed",
            "Passport Size Photographs",
            "Other Documents for Verification of Academic Qualifications",
            "Financial documents and proof of funds for the visa application",
            "Insurance documents or other documents relating to the visa",
            "Official translations or legalization if required",
            "The list of required documents differs from university to university and depends on the qualifications of the applicant. Please see the latest official university and visa checklists."
          ]
        }
      ]
    },
    {
      "slot": "section-11",
      "eyebrow": "Details",
      "title": "Common Questions Regarding Computer Engineering in Italy",
      "groups": []
    }
  ],
  faqs: [
    {
        "q": "Is Computer Engineering taught in English in Italy?",
        "a": "Yes. Universities like Politecnico di Milano, Politecnico di Torino, and University of Padua offer English-taught Master of Science degrees in Computer Engineering."
    },
    {
        "q": "What is the duration of a Master's in Computer Engineering in Italy?",
        "a": "The programme requires 2 years of full-time academic study totaling 120 ECTS credits."
    },
    {
        "q": "What are the tuition fees for Computer Engineering in Italy?",
        "a": "Annual tuition at public universities is between €1,000 and €3,800, with income-based fee reductions and full DSU scholarships available."
    },
    {
        "q": "What is the difference between Computer Science and Computer Engineering in Italy?",
        "a": "Computer Engineering integrates computer hardware, digital electronic design, and embedded systems alongside advanced software engineering, whereas Computer Science emphasizes algorithms and software systems."
    },
    {
        "q": "What are the admission requirements for Indian students?",
        "a": "A Bachelor's degree in Computer Engineering, Electrical Engineering, or related technical disciplines, strong academic marks, and English certification (IELTS 6.5+)."
    },
    {
        "q": "What career paths are available after graduation?",
        "a": "Graduates work as embedded systems engineers, AI hardware designers, robotics specialists, network architects, and cybersecurity analysts across Europe."
    }
],
  faqTitle: "Frequently Asked Questions About Computer Engineering PG in Italy"
};

export default function ComputerEngineeringPGItaly() {
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
      seoPath="/study-abroad/italy/pg/computer-engineering"
    />
  );
}
