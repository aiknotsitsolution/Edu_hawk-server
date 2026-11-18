import cmsData from "../../../../../../data/study_abroad/australia/civil_engg_ug.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/civil_ug_hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/civil_ug_hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/civil_ug_site.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/civil_ug_cta_bg.webp";

// University Campus Images
import ecuImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/Edith_Cowan_University.webp";
import curtinImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/Curtin_University.webp";
import flindersImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Civil/Flinders_University.webp";

const page = {
  name: "Civil Engineering",
  country: "Australia",
  slug: "civil-engineering",
  title: "Undergraduate Civil Engineering in Australia | Edu-Hawk Worldwide",
  description:
    "Study Bachelor's in Civil Engineering in Australia for Indian students. Learn about top universities (Curtin, ECU, Flinders), eligibility, fees, Engineers Australia accreditation, and career opportunities.",
  keywords:
    "Study Civil Engineering in Australia for Indian Students Undergraduate Civil Engineering Courses in Australia Best Universities for Civil Engineering in Australia Bachelor of Civil Engineering in Australia After 12th Civil Engineering Eligibility in Australia for Indian Students Civil Engineering Admission Requirements in Australia Civil Engineering Fees in Australia for International Students Civil Engineering Scholarships in Australia for Indian Students Civil Engineering Course Duration in Australia English Language Requirements for Civil Engineering in Australia Civil Engineering Specialisations in Australia Civil Engineering Admission Process for Indian Students Engineers Australia Accredited Civil Engineering Courses Career Opportunities After Civil Engineering in Australia Australian Student Visa Requirements for Civil Engineering Students",
  introTitle: "undergraduate civil engineering in Australia.",
  heroParas: [
    "Civil engineering focuses on the design, construction, and maintenance of the built and natural environments, including roads, bridges, buildings, water supply systems, and transport networks."
  ],
  overview: [
    "Australia offers premier civil engineering programs recognized worldwide, backed by significant national infrastructure investment and accredited by Engineers Australia.",
    "Civil engineering education in Australia prepares students for leadership in structural design, geotechnical engineering, transport networks, water resources, and sustainable construction management."
  ],
  level: "UG",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Engineering (Honours)" },
    { label: "Course Duration", value: "4 Years Full-Time" },
    { label: "Top Institutions", value: "Curtin, ECU, Flinders" },
    { label: "Accreditation", value: "Engineers Australia & Washington Accord" }
  ],

  faqs: [
    {
      q: "Is it possible for Indian students to pursue undergraduate degrees in civil engineering in Australia?",
      a: "Yes. Qualified Indian students can apply after completing Class 12 with required mathematics and science subjects."
    },
    {
      q: "How long does it take to earn a degree in civil engineering in Australia?",
      a: "A standard Bachelor of Engineering (Honours) requires 4 years of full-time study."
    },
    {
      q: "Does civil engineering require mathematics?",
      a: "Yes, mathematics is a compulsory prerequisite for admission to Australian civil engineering programs."
    },
    {
      q: "Does Australia's Civil Engineering program require NEET?",
      a: "No, NEET is not required for engineering programs in Australia."
    },
    {
      q: "In Class 12, what percentage is necessary?",
      a: "Minimum academic requirements vary by university, typically ranging between 65% and 80% aggregate."
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
            "Civil engineering degrees combine structural mechanics, geotechnical analysis, hydrology, urban planning, and environmental impact assessment."
          ]
        }
      ]
    },
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Civil Engineering?",
      groups: [
        {
          t: "ul",
          items: [
            "Strong demand for civil and structural engineers across Australia's infrastructure boom",
            "Accreditation by Engineers Australia recognized globally under the Washington Accord",
            "Practical site visits, laboratory testing, and 12 weeks of mandatory industrial exposure",
            "Post-study work rights allowing graduates to gain Australian professional engineering experience"
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Courses in Undergraduate Civil Engineering",
      groups: [
        {
          t: "ul",
          items: [
            "Bachelor of Engineering (Honours) in Civil Engineering",
            "Bachelor of Engineering (Honours) in Civil and Construction Engineering",
            "Bachelor of Engineering (Honours) in Civil and Environmental Engineering",
            "Bachelor of Engineering (Honours) / Bachelor of Commerce (Dual Degree)"
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Civil Engineering",
      groups: [
        {
          t: "pills",
          items: [
            "Structural Engineering",
            "Geotechnical Engineering",
            "Transportation & Traffic Engineering",
            "Water Resources & Hydrology",
            "Environmental Engineering",
            "Construction Project Management"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "The Best Australian Universities",
      lead: [
        "These respected Australian universities offer accredited civil engineering programs:"
      ],
      unis: [
        {
          name: "Curtin University",
          img: curtinImg,
          location: "Perth, Western Australia",
          desc: "Curtin University is globally renowned for mineral and civil engineering, featuring state-of-the-art structural testing laboratories and strong industry connections with major infrastructure corporations.",
          fee: "AUD 39,000–47,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.curtin.edu.au/"
        },
        {
          name: "Edith Cowan University",
          img: ecuImg,
          location: "Perth, Western Australia",
          desc: "ECU's School of Engineering features modern heavy engineering facilities, small class sizes, and integrated professional placements for every engineering student.",
          fee: "AUD 36,000–43,000 / year",
          duration: "4 Years Bachelor of Engineering (Honours)",
          link: "https://www.ecu.edu.au/"
        },
        {
          name: "Flinders University",
          img: flindersImg,
          location: "Adelaide, South Australia",
          desc: "Flinders University offers innovative civil engineering degrees supported by the Tonsley Innovation District, featuring specialized autonomous transport and structural testbeds.",
          fee: "AUD 37,000–44,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.flinders.edu.au/"
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
            "Successful completion of Class 12 from CBSE, ICSE, or State Boards.",
            "Mandatory Mathematics prerequisite at senior secondary level.",
            "Physics and Chemistry recommended.",
            "Demonstrated English language proficiency."
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
            "Standard requirements: IELTS Academic 6.5 overall (minimum 6.0 in all bands), PTE Academic 58+, or TOEFL iBT 79+."
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
            "Annual tuition costs range from AUD 36,000 to AUD 48,000. Annual living costs range from AUD 25,000 to AUD 35,000."
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
            "International Student Merit Scholarships (15%–25% fee reduction)",
            "Western Australia / South Australia Regional Study Grants",
            "Faculty of Science and Engineering Academic Excellence Awards"
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Job Opportunities in Civil Engineering",
      groups: [
        {
          t: "ul",
          items: [
            "Civil Project Engineer",
            "Structural Design Engineer",
            "Geotechnical Consultant",
            "Transport Infrastructure Planner",
            "Hydrologist & Water Resources Engineer",
            "Construction Site Manager",
            "Urban Infrastructure Specialist"
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
            "Accreditation by Engineers Australia enables graduates to register as professional engineers and practice across Washington Accord signatory nations."
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
            "Select university and program.",
            "Verify subject requirements (Class 12 Math).",
            "Appear for English language test.",
            "Prepare transcripts, SOP, and passport.",
            "Apply via official admissions channel.",
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
            "Class 10 and Class 12 Certificates and Marksheets",
            "English Language Test Report",
            "Statement of Purpose (SOP)",
            "Confirmation of Enrolment (CoE)",
            "Overseas Student Health Cover (OSHC)",
            "Proof of Financial Support for Visa"
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
            "Australian Student Visa (Subclass 500) requires confirmed enrolment, proof of financial capacity, meeting Genuine Student criteria, and health examinations."
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
              q: "Is it possible for Indian students to pursue undergraduate degrees in civil engineering in Australia?",
              a: "Yes. Qualified Indian students can apply after completing Class 12 with required mathematics and science subjects."
            },
            {
              q: "How long does it take to earn a degree in civil engineering in Australia?",
              a: "A standard Bachelor of Engineering (Honours) requires 4 years of full-time study."
            },
            {
              q: "Does civil engineering require mathematics?",
              a: "Yes, mathematics is a compulsory prerequisite for admission to Australian civil engineering programs."
            },
            {
              q: "Does Australia's Civil Engineering program require NEET?",
              a: "No, NEET is not required for engineering programs in Australia."
            },
            {
              q: "In Class 12, what percentage is necessary?",
              a: "Minimum academic requirements vary by university, typically ranging between 65% and 80% aggregate."
            }
          ]
        }
      ]
    }
  ]
};

export default function CivilEngineeringUG() {
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
      seoPath="/study-abroad/australia/ug/civil-engineering"
    />
  );
}