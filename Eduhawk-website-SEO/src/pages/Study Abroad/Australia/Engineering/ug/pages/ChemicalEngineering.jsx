import cmsData from "../../../../../../data/study_abroad/australia/chem_engg_ug.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Chemical/chem_ug_hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Chemical/chem_ug_hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Chemical/chem_ug_lab.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Chemical/chem_ug_cta_bg.webp";

// University Campus Images
import adelaideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Chemical/University_of_Adelaide.webp";
import federationImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Chemical/Federation_University_Australia.webp";

const page = {
  name: "Chemical Engineering",
  country: "Australia",
  slug: "chemical-engineering",
  title: "Undergraduate Chemical Engineering in Australia | Edu-Hawk Worldwide",
  description:
    "Study Bachelor's in Chemical Engineering in Australia for Indian students. Learn about top universities (Adelaide, Federation), eligibility, fees, accreditation, and career opportunities.",
  keywords:
    "Study Chemical Engineering in Australia for Indian Students Undergraduate Chemical Engineering Courses in Australia Best Universities for Chemical Engineering in Australia Bachelor of Chemical Engineering in Australia After 12th Chemical Engineering Eligibility in Australia for Indian Students Chemical Engineering Course Duration in Australia English Language Requirements for Chemical Engineering in Australia Chemical Engineering Specialisations in Australia Engineers Australia Accredited Chemical Engineering Courses Career Opportunities After Chemical Engineering in Australia",
  introTitle: "Study Australian undergraduate chemical engineering programs.",
  heroParas: [
    "Chemical engineering transforms raw materials into valuable products such as clean fuels, pharmaceuticals, advanced materials, food products, and green chemicals."
  ],
  overview: [
    "Australia offers world-class chemical engineering education backed by thriving energy, biotechnology, minerals, and sustainability sectors, accredited by Engineers Australia.",
    "Undergraduate programs focus on chemical reaction engineering, thermodynamics, mass and heat transfer, process design, biochemical engineering, and environmental sustainability."
  ],
  level: "UG",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Engineering (Honours)" },
    { label: "Course Duration", value: "4 Years Full-Time" },
    { label: "Top Institutions", value: "Adelaide, Federation University" },
    { label: "Accreditation", value: "Engineers Australia & IChemE" }
  ],

  faqs: [
    {
      q: "Is it possible for Indian students to study Chemical Engineering in Australia?",
      a: "Yes, students completing Class 12 with Chemistry, Mathematics, and Physics can apply for accredited Bachelor of Engineering (Honours) programs."
    },
    {
      q: "How long does it take to earn a degree in Chemical Engineering in Australia?",
      a: "A standard Bachelor of Engineering (Honours) requires 4 years of full-time study."
    },
    {
      q: "Does Chemical Engineering require Chemistry?",
      a: "Yes, Chemistry and Mathematics are compulsory prerequisites for admission."
    },
    {
      q: "Do Indian students have access to scholarships?",
      a: "Yes, Australian universities offer competitive international student merit scholarships covering up to 15%–30% of tuition fees."
    },
    {
      q: "Is employment or permanent residency in Australia guaranteed by a degree in Chemical Engineering?",
      a: "No degree guarantees employment or residency, but chemical engineering is on Australia's skilled occupations lists with strong career pathways."
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
            "Chemical engineering combines chemical sciences with physical engineering to design, optimize, and operate industrial-scale manufacturing and processing plants."
          ]
        }
      ]
    },
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Chemical Engineering?",
      groups: [
        {
          t: "ul",
          items: [
            "Accreditation by Engineers Australia and the Institution of Chemical Engineers (IChemE)",
            "World-leading research in clean hydrogen, carbon capture, water treatment, and mineral processing",
            "Practical laboratory learning, pilot plant operations, and industrial internships",
            "Post-study work rights supporting international engineering careers"
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Chemical Engineering Courses for Undergraduates",
      groups: [
        {
          t: "ul",
          items: [
            "Bachelor of Engineering (Honours) in Chemical Engineering",
            "Bachelor of Engineering (Honours) in Chemical and Biomolecular Engineering",
            "Bachelor of Engineering (Honours) in Chemical and Sustainable Energy",
            "Bachelor of Engineering (Honours) / Bachelor of Science (Dual Degree)"
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Chemical Engineering",
      groups: [
        {
          t: "pills",
          items: [
            "Biochemical & Biomedical Engineering",
            "Energy & Sustainable Process Engineering",
            "Mineral & Metallurgical Processing",
            "Environmental Chemical Engineering",
            "Polymer & Nanotechnology Materials",
            "Food & Bioprocess Technology"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "The Best Australian Universities to Consider",
      lead: [
        "These Australian universities offer distinguished chemical engineering education:"
      ],
      unis: [
        {
          name: "Adelaide University",
          img: adelaideImg,
          location: "Adelaide, South Australia",
          desc: "The University of Adelaide School of Chemical Engineering is a global leader in clean energy, mineral processing, and advanced sustainable technologies.",
          fee: "AUD 44,000–52,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.adelaide.edu.au/"
        },
        {
          name: "Australia's Federation University",
          img: federationImg,
          location: "Ballarat & Berwick, Victoria, Australia",
          desc: "Federation University provides industry-cooperative engineering programs featuring extensive paid industrial placements and personalized learning support.",
          fee: "AUD 34,000–41,000 / year",
          duration: "4 Years Bachelor of Engineering (Honours)",
          link: "https://www.federation.edu.au/"
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
            "Completion of Class 12 with Chemistry, Mathematics, and Physics.",
            "Recognized board credential (CBSE, ICSE, or State Boards).",
            "Meeting required cut-off scores (typically 65%–80%).",
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
            "IELTS Academic 6.5 overall (minimum 6.0 in all bands), PTE Academic 58+, or TOEFL iBT 79+."
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
            "Annual tuition costs range between AUD 34,000 and AUD 52,000. Annual living costs range between AUD 25,000 and AUD 35,000."
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
            "University International Merit Scholarships (15%–30% fee reduction)",
            "Faculty of Engineering Academic Excellence Awards",
            "Regional Australia Study Grants"
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Job Opportunities in Chemical Engineering",
      groups: [
        {
          t: "ul",
          items: [
            "Process Design Engineer",
            "Biochemical Production Engineer",
            "Petroleum & Refining Engineer",
            "Environmental Process Consultant",
            "Pharmaceutical Manufacturing Specialist",
            "Water Treatment & Desalination Engineer",
            "Materials Development Scientist"
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
            "Accredited by Engineers Australia and IChemE, enabling professional engineering registration and international mobility via the Washington Accord."
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
            "Select university and chemical engineering program.",
            "Verify Chemistry and Mathematics prerequisites.",
            "Take approved English language test.",
            "Assemble academic documents, SOP, and passport.",
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
            "Financial Evidence for Visa"
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
              q: "Is it possible for Indian students to study Chemical Engineering in Australia?",
              a: "Yes, students completing Class 12 with Chemistry, Mathematics, and Physics can apply for accredited Bachelor of Engineering (Honours) programs."
            },
            {
              q: "How long does it take to earn a degree in Chemical Engineering in Australia?",
              a: "A standard Bachelor of Engineering (Honours) requires 4 years of full-time study."
            },
            {
              q: "Does Chemical Engineering require Chemistry?",
              a: "Yes, Chemistry and Mathematics are compulsory prerequisites for admission."
            },
            {
              q: "Do Indian students have access to scholarships?",
              a: "Yes, Australian universities offer competitive international student merit scholarships covering up to 15%–30% of tuition fees."
            },
            {
              q: "Is employment or permanent residency in Australia guaranteed by a degree in Chemical Engineering?",
              a: "No degree guarantees employment or residency, but chemical engineering is on Australia's skilled occupations lists with strong career pathways."
            }
          ]
        }
      ]
    }
  ]
};

export default function ChemicalEngineeringUG() {
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
      seoPath="/study-abroad/australia/ug/chemical-engineering"
    />
  );
}