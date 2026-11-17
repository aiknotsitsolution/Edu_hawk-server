import cmsData from "../../../../../../data/study_abroad/australia/comp_engg_ug.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/ce_ug_hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/ce_ug_hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/ce_ug_hardware.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/ce_ug_cta_bg.webp";

// University Campus Images
import melbourneImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/The_University_of_Melbourne.webp";
import deakinImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/Deakin_University.webp";
import rmitImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/RMIT_University.webp";
import sydneyImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Computer/The_University_of_Sydney.webp";

const page = {
  name: "Computer Engineering",
  country: "Australia",
  slug: "computer-engineering",
  title: "Undergraduate Computer Engineering in Australia | Edu-Hawk Worldwide",
  description:
    "Study Bachelor's in Computer Engineering in Australia for Indian students. Learn about top universities (Melbourne, Deakin, RMIT, Sydney), eligibility, fees, Engineers Australia accreditation, and career opportunities.",
  keywords:
    "Study Undergraduate Computer Engineering in Australia for Indian Students Best Computer Engineering Universities in Australia Computer Engineering Courses in Australia After 12th Bachelor of Computer Engineering in Australia for International Students Computer Engineering Admission Requirements in Australia Computer Engineering Fees in Australia for Indian Students Computer Engineering Scholarships in Australia for International Students Computer Engineering Course Duration in Australia",
  introTitle: "Indian Students Pursuing Undergraduate Computer Engineering in Australia",
  heroParas: [
    "A branch of engineering called computer engineering blends computer science and electrical engineering to create, build, and maintain computer software, hardware, and networks."
  ],
  overview: [
    "Computer engineering programs are available at top universities in Australia, providing cutting-edge facilities, knowledgeable faculty, and high-quality education. Indian students will have access to career opportunities worldwide, industry-aligned coursework, and an internationally recognized degree.",
    "Undergraduate computer engineering programs in Australia emphasize designing and developing hardware, software engineering, embedded computing, microprocessors, and high-performance computing systems."
  ],
  level: "UG",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Engineering (Honours)" },
    { label: "Course Duration", value: "4 Years Full-Time" },
    { label: "Top Institutions", value: "Melbourne, Sydney, RMIT, Deakin" },
    { label: "Accreditation", value: "Engineers Australia & Washington Accord" }
  ],

  faqs: [
    {
      q: "Can students from India pursue computer engineering studies in Australia after completing their 12th grade education?",
      a: "Indeed. Students who fulfill the academic, subject, and English language requirements of the university are eligible to apply."
    },
    {
      q: "Does computer engineering require mathematics?",
      a: "Mathematics is often necessary. Depending on the school and course, physics might also be required."
    },
    {
      q: "How long does it take to earn a degree in computer engineering as an undergraduate?",
      a: "Four years of full-time study are required for many Bachelor of Engineering (Honors) programs. Combined degrees could require more time."
    },
    {
      q: "How much does computer engineering education cost in Australia?",
      a: "AUD 40,000–65,000+ year is a general planning estimate. The university and year of admission determine the actual costs."
    },
    {
      q: "How can I study overseas with the assistance of Edu Hawk Worldwide Consultancy?",
      a: "Students may plan their study abroad experience, organize their application materials, research appropriate universities, and comprehend admission requirements with the assistance of Edu Hawk Worldwide. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs."
    }
  ],

  sections: [
    {
      slot: "overview",
      eyebrow: "Course Scope",
      title: "Overview of the Course",
      groups: [
        {
          t: "p",
          items: [
            "Undergraduate computer engineering programs emphasize:"
          ]
        },
        {
          t: "ul",
          items: [
            "Designing and developing hardware",
            "Software development and computer programming",
            "Systems for embedded computing and microprocessors",
            "Data communication and networking",
            "Cyber security and data management",
            "Machine learning and artificial intelligence",
            "Control systems and robotics",
            "Cloud computing and internet of things"
          ]
        }
      ]
    },
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Computer Engineering?",
      groups: [
        {
          t: "p",
          items: [
            "Indian students choose Australia for computer engineering due to:"
          ]
        },
        {
          t: "ul",
          items: [
            "High-quality education",
            "Programs that are industry-aligned",
            "Global employment opportunities",
            "Advanced research facilities",
            "A multicultural atmosphere",
            "Practical learning",
            "Opportunities for post-study employment"
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Computer Engineering Courses for Undergraduates",
      groups: [
        {
          t: "p",
          items: [
            "Australian universities offer varied computer engineering qualifications:"
          ]
        },
        {
          t: "ul",
          items: [
            "Computer Engineering Bachelor of Engineering (Honors)",
            "Software Engineering Bachelor of Engineering (Honors)",
            "Electrical and Computer Engineering Bachelor of Engineering (Honors)",
            "Bachelor of Engineering (Honors) / Bachelor of Computer Science (Dual Degree)"
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Computer Engineering",
      groups: [
        {
          t: "pills",
          items: [
            "Hardware Systems & Microprocessors",
            "Embedded Systems & IoT",
            "Software Systems & Cybersecurity",
            "AI & Machine Learning",
            "Computer Networks & Telecommunications",
            "Robotics & Automation"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "The Best Australian Universities to Consider",
      lead: [
        "When looking for undergraduate degrees in computer engineering and allied engineering, the following colleges are good places to start."
      ],
      unis: [
        {
          name: "Melbourne University",
          img: melbourneImg,
          location: "Melbourne, Victoria, Australia",
          desc: "The University of Melbourne offers world-class computing and hardware engineering degrees backed by cutting-edge computer systems and microelectronics research suites.",
          fee: "AUD 46,000–54,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.unimelb.edu.au/"
        },
        {
          name: "Deakin University",
          img: deakinImg,
          location: "Geelong & Melbourne, Victoria, Australia",
          desc: "Deakin University provides project-oriented Bachelor of Software/Computer Engineering programs with state-of-the-art virtual reality and digital design labs.",
          fee: "AUD 38,000–44,000 / year",
          duration: "4 Years Bachelor of Engineering (Honours)",
          link: "https://www.deakin.edu.au/"
        },
        {
          name: "RMIT University",
          img: rmitImg,
          location: "Melbourne, Victoria, Australia",
          desc: "RMIT delivers hands-on engineering programs in computer and network engineering with extensive industry project placements across Melbourne's technology sector.",
          fee: "AUD 40,000–48,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.rmit.edu.au/"
        },
        {
          name: "University of Sydney",
          img: sydneyImg,
          location: "Sydney, New South Wales, Australia",
          desc: "Sydney Faculty of Engineering offers prestigious Bachelor of Engineering Honours in Computer Engineering with specialized tracks in AI, cyber security, and autonomous systems.",
          fee: "AUD 47,000–55,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.sydney.edu.au/"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Indian Students Eligibility",
      groups: [
        {
          t: "p",
          items: [
            "In Australia, applicants for undergraduate computer engineering programs must meet the academic and English language standards of the university of their choice.",
            "Academic prerequisites: Typically, applicants require:"
          ]
        },
        {
          t: "ul",
          items: [
            "earning a Class 12 diploma or its equivalent.",
            "the university's required minimum academic score.",
            "typically at the necessary level of mathematics.",
            "Where applicable, physics or other science courses.",
            "proficiency in English."
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
            "Universities require demonstrated English proficiency. Acceptable examinations include IELTS Academic, PTE Academic, and TOEFL iBT, with typical requirements being IELTS 6.5 overall (no band less than 6.0)."
          ]
        }
      ]
    },
    {
      slot: "duration",
      eyebrow: "Study Timeline",
      title: "Study Plan and Course Duration",
      groups: [
        {
          t: "p",
          items: [
            "Standard Bachelor of Engineering (Honors) in Computer Engineering requires 4 years of full-time study (32 units / 192 credit points). Dual degree options typically take 5 years."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Living expenses and tuition",
      groups: [
        {
          t: "p",
          items: [
            "Indicative tuition fees for international students range between AUD 40,000 and AUD 65,000+ per year. Living expenses in Australia are estimated at AUD 25,000 to AUD 35,000 annually."
          ]
        }
      ]
    },
    {
      slot: "scholarships",
      eyebrow: "Financial Aid",
      title: "Indian Students Scholarships",
      groups: [
        {
          t: "p",
          items: [
            "Australian universities offer competitive merit-based scholarships, international student fee discounts, and STEM faculty bursaries ranging from 15% to 50% tuition reduction."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Career Prospects Following Computer Engineering",
      groups: [
        {
          t: "p",
          items: [
            "Graduates can pursue high-demand roles across hardware and software engineering sectors:"
          ]
        },
        {
          t: "ul",
          items: [
            "Computer Hardware Engineer",
            "Embedded Systems Engineer",
            "Firmware Developer",
            "Software Engineer & Architect",
            "Network Systems Engineer",
            "Cybersecurity Specialist",
            "IoT Solutions Architect",
            "AI & Machine Learning Engineer"
          ]
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Accreditation & Practice",
      title: "Accreditation for Professionals",
      groups: [
        {
          t: "p",
          items: [
            "Australian Bachelor of Engineering (Honours) degrees are professionally accredited by Engineers Australia, providing global recognition under the Washington Accord."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step",
      title: "Indian Students' Admission Procedure",
      groups: [
        {
          t: "p",
          items: [
            "Follow these key steps to apply for undergraduate computer engineering in Australia:"
          ]
        },
        {
          t: "ul",
          items: [
            "Select specialized computer engineering programs.",
            "Verify mathematics, physics, and academic prerequisites.",
            "Appear for approved English proficiency test (IELTS/PTE).",
            "Prepare academic transcripts, certificates, and passport.",
            "Submit application through university portal or authorized representative.",
            "Review admission offer letter and tuition deposit requirements.",
            "Accept offer, receive Confirmation of Enrolment (CoE).",
            "Arrange Overseas Student Health Cover (OSHC).",
            "Apply for Australian Student Visa (subclass 500).",
            "Finalize accommodation and pre-departure arrangements."
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
          t: "ul",
          items: [
            "Valid Passport",
            "Class 10 Marksheet and Certificate",
            "Class 12 Marksheet and Certificate",
            "English Language Proficiency Score Card (IELTS/PTE/TOEFL)",
            "Statement of Purpose (SOP)",
            "Letters of Recommendation (LOR), if required",
            "Financial Capability Documents for Visa",
            "Confirmation of Enrolment (CoE)",
            "Overseas Student Health Cover (OSHC) Certificate"
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
            "International students must obtain the Australian Student visa (subclass 500). Requirements include a valid CoE, Genuine Student (GS) assessment, evidence of sufficient funds, and mandatory OSHC health coverage."
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
              q: "Can students from India pursue computer engineering studies in Australia after completing their 12th grade education?",
              a: "Indeed. Students who fulfill the academic, subject, and English language requirements of the university are eligible to apply."
            },
            {
              q: "Does computer engineering require mathematics?",
              a: "Mathematics is often necessary. Depending on the school and course, physics might also be required."
            },
            {
              q: "How long does it take to earn a degree in computer engineering as an undergraduate?",
              a: "Four years of full-time study are required for many Bachelor of Engineering (Honors) programs. Combined degrees could require more time."
            },
            {
              q: "How much does computer engineering education cost in Australia?",
              a: "AUD 40,000–65,000+ year is a general planning estimate. The university and year of admission determine the actual costs."
            },
            {
              q: "How can I study overseas with the assistance of Edu Hawk Worldwide Consultancy?",
              a: "Students may plan their study abroad experience, organize their application materials, research appropriate universities, and comprehend admission requirements with the assistance of Edu Hawk Worldwide. Students should check with the appropriate official authorities on their academic, financial, immigration, and licensing needs."
            }
          ]
        }
      ]
    }
  ]
};

export default function ComputerEngineeringUG() {
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
      seoPath="/study-abroad/australia/ug/computer-engineering"
    />
  );
}