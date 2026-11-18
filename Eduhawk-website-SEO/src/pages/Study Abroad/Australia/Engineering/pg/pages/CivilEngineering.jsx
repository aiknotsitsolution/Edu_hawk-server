import cmsData from "../../../../../../data/study_abroad/australia/civil_engg_pg.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/civil_pg_hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/civil_pg_hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/civil_pg_site.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/civil_pg_cta_bg.webp";

// University Campus Images
import melbImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/The_University_of_Melbourne.webp";
import unswImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/UNSW_Sydney.webp";
import uqImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/University_of_Queensland.webp";
import curtinImg from "../../../../../../Images/Abroad/Australia/Engineering_PG/Civil/Curtin_University.webp";

const page = {
  name: "Civil Engineering",
  country: "Australia",
  slug: "civil-engineering",
  title: "Postgraduate Civil Engineering in Australia | Edu-Hawk Worldwide",
  description: "Study Master's in Civil Engineering in Australia for Indian students. Learn about top universities (Melbourne, UNSW, Queensland, Curtin, QUT), eligibility, fees, structural specializations, and career pathways.",
  keywords: "Postgraduate Civil Engineering in Australia Master of Civil Engineering in Australia MS in Civil Engineering Australia for Indian Students Top Civil Engineering Universities in Australia Structural Engineering Geotechnical Engineering Engineers Australia Accreditation",
  introTitle: "Postgraduate Civil Engineering in Australia | Edu-Hawk Worldwide",
  heroParas: ["Study Master's in Civil Engineering in Australia for Indian students. Learn about top universities (Melbourne, UNSW, Queensland, Curtin, QUT), eligibility, fees, structural specializations, and career pathways."],
  overview: [
    "Australian universities deliver globally recognized postgraduate civil engineering education accredited by Engineers Australia under the Washington Accord. Students gain advanced design skills, research expertise, and international employment opportunities."
  ],
  level: "Postgraduate",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Master of Engineering (M.Eng / M.Sc)" },
    { label: "Course Duration", value: "1 to 2 Years Full-Time" },
    { label: "Top Institutions", value: "Melbourne, UNSW, Sydney, Monash" },
    { label: "Accreditation", value: "Engineers Australia & Washington Accord" }
  ],

  faqs: [
    {
        "q": "Is it possible for Indian students to pursue postgraduate studies in civil engineering in Australia?",
        "a": ""
    }
],

  sections: [
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "COMMON COURSE CHOICES",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "Master of Professional Engineering Master of Civil Engineering",
                    "Structural Engineering Master&#39;s degree",
                    "Construction Management Master&#39;s Program",
                    "Geotechnical Engineering Master&#39;s degree",
                    "Environmental Engineering Master&#39;s degree",
                    "Water Engineering Master&#39;s degree",
                    "Infrastructure Engineering Master&#39;s degree",
                    "Each university has different course titles and availability."
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Typically, applicants require",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "a valid bachelor&#39;s degree in civil engineering or a related field.",
                    "academic standing that satisfies the basic standards set by the university.",
                    "prerequisite courses that are pertinent, if any.",
                    "proof of English language competency, unless there is an exception.",
                    "For many programs, additional credentials or work experience are required."
                ]
            }
        ]
    },
    {
        "slot": "english",
        "eyebrow": "Proficiency Tests",
        "title": "LANGUAGE AND ENGLISH REQUIREMENTS",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "IELTS Academic",
                    "TOEFL iBT",
                    "PTE Academic",
                    "and other authorized English language assessments may be accepted by universities."
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Fundamental Topics",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "Advanced Analysis of Structures",
                    "Building Supplies",
                    "Engineering Geotechnical",
                    "Engineering for Transportation",
                    "Engineering of Water Resources",
                    "Engineering for the Environment",
                    "Planning for Infrastructure",
                    "Management of Construction Projects",
                    "Methods of Engineering Research",
                    "Research Project or Capstone"
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "The university, length of the program, city, and way of life all affect study expenses.",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "Tuition Fees: Verify the most recent international student pricing schedule for the chosen course.",
                    "Living Expenses: Set aside money for lodging, food, utilities, transportation, study supplies, and personal costs.",
                    "Overseas Student Health Cover (OSHC), visa-related fees, airfare, and initial settlement costs are examples of additional costs."
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Students who qualify may explore -",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "Merit grants for international students",
                    "Scholarships for academic achievement",
                    "Scholarships for engineering faculty",
                    "Tuition fee reductions at universities",
                    "Opportunities for qualified outside funding"
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Possible Job Positions",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "Engineer in Civil Engineering",
                    "Engineer of Structure",
                    "Engineer in Geotechnical",
                    "Engineer for Transportation",
                    "Engineer for Water Resources",
                    "Infrastructure Engineer, Site Engineer, Environmental Engineer, and Construction Project Engineer",
                    "Engineer for Design",
                    "Engineering Consultant and Project Coordinator"
                ]
            }
        ]
    },
    {
        "slot": "documents",
        "eyebrow": "Checklist",
        "title": "NEEDED DOCUMENTS",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "A valid passport",
                    "Certificates for Classes 10 and 12, upon request",
                    "Certificate of bachelor&#39;s degree or temporary certificate",
                    "Marksheets and academic transcripts English language test scores, if necessary",
                    "updated curriculum vitae or resume",
                    "If requested, a statement of purpose",
                    "Letters of recommendation, if necessary",
                    "Certificates of employment or internship, if applicable Scholarship documentation",
                    "The institution has sought additional documents."
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Edu Hawk helps students from India with",
        "groups": [
            {
                "t": "ul",
                "items": [
                    "Shortlisting for courses and universities",
                    "Evaluation of academic eligibility",
                    "Curriculum comparison and specialization",
                    "Advice on tuition and scholarships",
                    "Preparing applications and documents",
                    "Guidance on offer letters",
                    "Advice on applying for a student visa",
                    "Planning prior to departure",
                    "Universities decide who gets admitted, and the Australian government decides who gets a visa."
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Yes, after fulfilling the university&#39;s admission standards, qualified Indian students can apply to appropriate postgraduate programs.",
        "groups": [
            {
                "t": "p",
                "items": [
                    "2. How long does a master&#39;s degree in civil engineering take?"
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Depending on the course design and prerequisites, many programs last between one and two years.",
        "groups": [
            {
                "t": "p",
                "items": [
                    "3. What kind of bachelor&#39;s degree is necessary?"
                ]
            }
        ]
    },
    {
        "slot": "general",
        "eyebrow": "Information",
        "title": "Typically, one needs a degree in civil engineering or related recognized fields.",
        "groups": [
            {
                "t": "p",
                "items": [
                    "4. Is taking the IELTS required?"
                ]
            }
        ]
    },
    {
        "slot": "english",
        "eyebrow": "Proficiency Tests",
        "title": "Evidence of English language proficiency is required by several universities. Exemption requirements and accepted tests differ.",
        "groups": [
            {
                "t": "p",
                "items": [
                    "5. Is employment or permanent residency guaranteed by this degree?"
                ]
            }
        ]
    }
]
};

export default function CivilEngineeringPGAustralia() {
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
      heroImage={heroImg}
      heroBgImage={heroBgImg}
      sideImage={sideImg}
      ctaBgImage={ctaBgImg}
      topUniversities={[
        {
          name: "Melbourne University",
          location: "Melbourne, Victoria",
          desc: "Globally accredited Master of Engineering programs with advanced research laboratories and strong industry networks.",
          image: melbImg,
          href: "/study-abroad/australia/pg/civil-engineering"
        },
        {
          name: "New South Wales University (UNSW Sydney)",
          location: "Sydney, New South Wales",
          desc: "Globally accredited Master of Engineering programs with advanced research laboratories and strong industry networks.",
          image: unswImg,
          href: "/study-abroad/australia/pg/civil-engineering"
        },
        {
          name: "University of Queensland (UQ)",
          location: "Brisbane, Queensland",
          desc: "Globally accredited Master of Engineering programs with advanced research laboratories and strong industry networks.",
          image: uqImg,
          href: "/study-abroad/australia/pg/civil-engineering"
        },
        {
          name: "Curtin University",
          location: "Perth, Western Australia",
          desc: "Globally accredited Master of Engineering programs with advanced research laboratories and strong industry networks.",
          image: curtinImg,
          href: "/study-abroad/australia/pg/civil-engineering"
        }
      ]}
    />
  );
}