import cmsData from "../../../../../../data/study_abroad/australia/elec_engg_ug.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/ee_ug_hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/ee_ug_hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/ee_ug_circuits.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/ee_ug_cta_bg.webp";

// University Campus Images
import monashImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/Monash_University.webp";
import unswImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/UNSW_Sydney.webp";
import qutImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/Queensland_University_of_Technology.webp";
import uqImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/University_of_Queensland.webp";

const page = {
  name: "Electrical Engineering",
  country: "Australia",
  slug: "electrical-engineering",
  title: "Undergraduate Electrical Engineering in Australia | Edu-Hawk Worldwide",
  description:
    "Study Bachelor's in Electrical Engineering in Australia for Indian students. Learn about top universities (Monash, UNSW, QUT, UQ), eligibility, fees, Engineers Australia accreditation, and career opportunities.",
  keywords:
    "Study Australian undergraduate electrical engineering programs Best Universities for Electrical Engineering in Australia Bachelor of Electrical Engineering in Australia After 12th Electrical Engineering Course Duration in Australia English Language Requirements for Electrical Engineering in Australia Electrical Engineering Specialisations in Australia Electrical Engineering Admission Process for Indian Students Engineers Australia Accredited Electrical Engineering Courses Career Opportunities After Electrical Engineering in Australia Australian Student Visa Requirements for Electrical Engineering Students",
  introTitle: "Study Australian undergraduate electrical engineering programs.",
  heroParas: [
    "Electrical engineering focuses on power generation, renewable energy systems, electronics, telecommunications, and digital automation."
  ],
  overview: [
    "Australia is a global leader in clean energy transition, microgrid technologies, and smart infrastructure, offering world-class electrical engineering education accredited by Engineers Australia.",
    "Undergraduate electrical engineering programs in Australia integrate fundamental circuit analysis, power systems, renewable energy, control systems, and advanced electronics."
  ],
  level: "UG",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Engineering (Honours)" },
    { label: "Course Duration", value: "4 Years Full-Time" },
    { label: "Top Institutions", value: "Monash, UNSW, QUT, UQ" },
    { label: "Accreditation", value: "Engineers Australia & Washington Accord" }
  ],

  faqs: [
    {
      q: "Is it possible for Indian students to study electrical engineering in Australia?",
      a: "Yes, qualified students with Class 12 mathematics and physics can apply for accredited Bachelor of Engineering (Honours) programs."
    },
    {
      q: "What is the duration of an Australian degree in electrical engineering?",
      a: "A standard Bachelor of Engineering (Honours) takes 4 years of full-time study."
    },
    {
      q: "Does electrical engineering require mathematics?",
      a: "Yes, senior secondary mathematics is an essential prerequisite for admission."
    },
    {
      q: "Do Australian universities require NEET for electrical engineering?",
      a: "No, NEET is exclusively for medical degrees and is not required for engineering programs."
    },
    {
      q: "How much does electrical engineering cost in Australia?",
      a: "Annual international tuition typically ranges from AUD 40,000 to AUD 55,000, depending on the university."
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
            "Electrical engineering curriculums encompass circuit theory, electromagnetic fields, electrical machines, power electronics, signal processing, and renewable energy integration."
          ]
        }
      ]
    },
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Electrical Engineering?",
      groups: [
        {
          t: "ul",
          items: [
            "Pioneering research in solar photovoltaics, renewable microgrids, and battery storage",
            "Full accreditation by Engineers Australia providing global Washington Accord recognition",
            "Extensive industry partnerships with power utilities, automation firms, and tech giants",
            "High graduate employability and clear post-study work visa pathways"
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Electrical Engineering Courses for Undergraduates",
      groups: [
        {
          t: "ul",
          items: [
            "Bachelor of Engineering (Honours) in Electrical Engineering",
            "Bachelor of Engineering (Honours) in Electrical and Renewable Energy Engineering",
            "Bachelor of Engineering (Honours) in Electrical and Computer Systems",
            "Bachelor of Engineering (Honours) / Bachelor of Science (Dual Degree)"
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Electrical Engineering",
      groups: [
        {
          t: "pills",
          items: [
            "Power Systems & High Voltage Engineering",
            "Renewable Energy & Smart Grids",
            "Control Systems & Automation",
            "Electronics & Embedded Systems",
            "Telecommunications & Wireless Signals",
            "Robotics & Autonomous Systems"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "The Best Australian Universities to Consider",
      lead: [
        "These prestigious Australian universities lead in electrical and electronic engineering education:"
      ],
      unis: [
        {
          name: "Monash University",
          img: monashImg,
          location: "Melbourne, Victoria, Australia",
          desc: "Monash Department of Electrical and Computer Systems Engineering features world-leading smart grid and wireless communications research laboratories.",
          fee: "AUD 44,000–52,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.monash.edu/"
        },
        {
          name: "New South Wales University",
          img: unswImg,
          location: "Sydney, New South Wales, Australia",
          desc: "UNSW School of Electrical Engineering and Telecommunications is globally renowned for world-record solar cell technology and clean energy microgrids.",
          fee: "AUD 47,000–55,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.unsw.edu.au/"
        },
        {
          name: "University of Technology in Queensland",
          img: qutImg,
          location: "Brisbane, Queensland, Australia",
          desc: "QUT delivers modern electrical engineering degrees integrated with hands-on power lab testing, renewable energy integration, and corporate internships.",
          fee: "AUD 39,000–46,000 / year",
          duration: "4 Years Bachelor of Engineering (Honours)",
          link: "https://www.qut.edu.au/"
        },
        {
          name: "Queensland University",
          img: uqImg,
          location: "Brisbane, Queensland, Australia",
          desc: "The University of Queensland School of ITEE offers cutting-edge electrical engineering programs featuring advanced power electronics and transmission research.",
          fee: "AUD 43,000–50,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.uq.edu.au/"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Indian Students Eligibility",
      groups: [
        {
          t: "ul",
          items: [
            "Completion of Class 12 with strong academic performance in Mathematics and Physics.",
            "Recognized board credential (CBSE, ICSE, or State Boards).",
            "Minimum percentage matching chosen university requirements (typically 70%–85%).",
            "Proof of English proficiency."
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
            "Accepted examinations include IELTS Academic (minimum 6.5 overall, 6.0 in all bands), PTE Academic (58+), or TOEFL iBT (79+)."
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
            "Tuition fees range between AUD 39,000 and AUD 55,000 per year. Living expenses in major Australian cities range between AUD 25,000 and AUD 35,000 annually."
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
          t: "ul",
          items: [
            "University International Merit Scholarships (up to AUD 10,000/year or 25% fee waiver)",
            "Faculty of Engineering Dean's Scholarships",
            "Women in STEM Engineering Scholarships"
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Job Opportunities in Electrical Engineering",
      groups: [
        {
          t: "ul",
          items: [
            "Electrical Power Systems Engineer",
            "Renewable Energy Project Specialist",
            "Smart Grid & Substation Engineer",
            "Control Systems & Automation Engineer",
            "Electronics Design Engineer",
            "High-Voltage Transmission Consultant",
            "Telecommunications Network Engineer"
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
            "Accredited by Engineers Australia, enabling professional engineering registration and international mobility via the Washington Accord."
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
          t: "ul",
          items: [
            "Choose university and engineering course.",
            "Verify subject requirements (Class 12 Math & Physics).",
            "Take approved English language test.",
            "Gather documents, transcripts, and passport.",
            "Submit online application.",
            "Accept offer, secure CoE, arrange OSHC, and apply for Visa Subclass 500."
          ]
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Required Records",
      title: "Documents Needed",
      groups: [
        {
          t: "ul",
          items: [
            "Valid Passport",
            "Class 10 and 12 Certificates and Marksheets",
            "English Language Test Scores",
            "Statement of Purpose (SOP)",
            "Confirmation of Enrolment (CoE)",
            "Overseas Student Health Cover (OSHC)",
            "Proof of Financial Capacity"
          ]
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Visa Subclass 500",
      title: "Student Visa for Australia",
      groups: [
        {
          t: "p",
          items: [
            "Australian Student Visa (Subclass 500) requires confirmed full-time enrolment, proof of financial support, and meeting health and character checks."
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
              q: "Is it possible for Indian students to study electrical engineering in Australia?",
              a: "Yes, qualified students with Class 12 mathematics and physics can apply for accredited Bachelor of Engineering (Honours) programs."
            },
            {
              q: "What is the duration of an Australian degree in electrical engineering?",
              a: "A standard Bachelor of Engineering (Honours) takes 4 years of full-time study."
            },
            {
              q: "Does electrical engineering require mathematics?",
              a: "Yes, senior secondary mathematics is an essential prerequisite for admission."
            },
            {
              q: "Do Australian universities require NEET for electrical engineering?",
              a: "No, NEET is exclusively for medical degrees and is not required for engineering programs."
            },
            {
              q: "How much does electrical engineering cost in Australia?",
              a: "Annual international tuition typically ranges from AUD 40,000 to AUD 55,000, depending on the university."
            }
          ]
        }
      ]
    }
  ]
};

export default function ElectricalEngineeringUG() {
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
      seoPath="/study-abroad/australia/ug/electrical-engineering"
    />
  );
}