import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/aero_ug_hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/aero_ug_hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/aero_ug_windtunnel.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/aero_ug_cta_bg.webp";

// University Campus Images
import unswImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/UNSW_Sydney.webp";
import rmitImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/RMIT_University.webp";
import adelaideImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/University_of_Adelaide.webp";
import monashImg from "../../../../../../Images/Abroad/Australia/Engineering_UG/Aerospace/Monash_University.webp";

const page = {
  name: "Aerospace Engineering",
  country: "Australia",
  slug: "aerospace-engineering",
  title: "Undergraduate Aerospace Engineering in Australia | Edu-Hawk Worldwide",
  description:
    "Study Bachelor's in Aerospace Engineering in Australia for Indian students. Learn about top universities (UNSW, RMIT, Monash, Adelaide), eligibility, fees, accreditation, and career opportunities.",
  keywords:
    "Study Australia's Undergraduate Aerospace Engineering Program Best Universities for Aerospace Engineering in Australia Bachelor of Aerospace Engineering in Australia After 12th Aerospace Engineering Course Duration in Australia English Language Requirements for Aerospace Engineering in Australia Aerospace Engineering Specialisations in Australia Engineers Australia Accredited Aerospace Engineering Courses Career Opportunities After Aerospace Engineering in Australia",
  introTitle: "Study Australia's Undergraduate Aerospace Engineering Program",
  heroParas: [
    "Aerospace engineering encompasses the design, development, testing, and production of aircraft, spacecraft, satellites, drones, and advanced defense systems."
  ],
  overview: [
    "Australia's rapidly growing aerospace, space technology, and defense sectors offer world-class undergraduate aerospace engineering education accredited by Engineers Australia.",
    "Undergraduate programs focus on aerodynamics, propulsion systems, flight mechanics, orbital dynamics, composite materials, avionics, and autonomous aerospace systems."
  ],
  level: "UG",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Engineering (Honours)" },
    { label: "Course Duration", value: "4 Years Full-Time" },
    { label: "Top Institutions", value: "UNSW, RMIT, Monash, Adelaide" },
    { label: "Accreditation", value: "Engineers Australia & Washington Accord" }
  ],

  faqs: [
    {
      q: "Is it possible for Indian students to study aerospace engineering in Australia?",
      a: "Yes, qualified students completing Class 12 with senior secondary Mathematics and Physics are eligible to apply."
    },
    {
      q: "What is the duration of an Australian degree program in aerospace engineering?",
      a: "A standard Bachelor of Engineering (Honours) requires 4 years of full-time study."
    },
    {
      q: "Does aerospace engineering require mathematics?",
      a: "Yes, advanced mathematics and physics are mandatory prerequisites."
    },
    {
      q: "Which Australian colleges provide degrees specifically in aerospace engineering?",
      a: "Leading institutions include UNSW Sydney, RMIT University, Monash University, and The University of Adelaide."
    },
    {
      q: "How much does it cost to study aerospace engineering in Australia?",
      a: "Annual international tuition ranges from AUD 42,000 to AUD 55,000, depending on the university."
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
            "Aerospace engineering degrees develop cutting-edge skills in flight vehicle aerodynamics, jet and rocket propulsion, structural composite analysis, avionics, and space mission design."
          ]
        }
      ]
    },
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Aerospace Engineering?",
      groups: [
        {
          t: "ul",
          items: [
            "Rapidly expanding Australian Space Agency (ASA) and national defense aerospace programs",
            "Access to supersonic wind tunnels, flight simulators, and satellite fabrication cleanrooms",
            "Accreditation by Engineers Australia recognized globally under the Washington Accord",
            "Post-study work rights supporting international STEM careers"
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Aerospace Courses for Undergraduates",
      groups: [
        {
          t: "ul",
          items: [
            "Bachelor of Engineering (Honours) in Aerospace Engineering",
            "Bachelor of Engineering (Honours) in Aeronautical Engineering",
            "Bachelor of Engineering (Honours) in Mechanical and Aerospace Systems",
            "Bachelor of Engineering (Honours) in Space Engineering"
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Areas of Study",
      title: "Specializations in Aerospace Engineering",
      groups: [
        {
          t: "pills",
          items: [
            "Aerodynamics & Computational Fluid Dynamics",
            "Aircraft Propulsion & Gas Turbines",
            "Avionics & Flight Control Systems",
            "Spacecraft Systems & Orbital Mechanics",
            "Unmanned Aerial Vehicles (UAVs) & Drones",
            "Composite Materials & Structural Analysis"
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "The Best Australian Universities to Consider",
      lead: [
        "These premier Australian universities lead aerospace engineering education:"
      ],
      unis: [
        {
          name: "UNSW Sydney",
          img: unswImg,
          location: "Sydney, New South Wales, Australia",
          desc: "UNSW School of Mechanical and Manufacturing Engineering is a pioneer in aerospace and satellite systems, featuring world-record aerodynamic labs and close space industry links.",
          fee: "AUD 48,000–56,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.unsw.edu.au/"
        },
        {
          name: "University of RMIT",
          img: rmitImg,
          location: "Melbourne, Victoria, Australia",
          desc: "RMIT University delivers Australia's premier dedicated aerospace and aviation engineering programs, backed by flight testing facilities and extensive industrial placements.",
          fee: "AUD 42,000–50,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.rmit.edu.au/"
        },
        {
          name: "Adelaide University",
          img: adelaideImg,
          location: "Adelaide, South Australia",
          desc: "Located near the Australian Space Agency headquarters, The University of Adelaide offers world-class aerospace and space engineering degrees with direct space industry access.",
          fee: "AUD 44,000–52,000 / year",
          duration: "4 Years Bachelor of Engineering (Honours)",
          link: "https://www.adelaide.edu.au/"
        },
        {
          name: "University of Monas",
          img: monashImg,
          location: "Melbourne, Victoria, Australia",
          desc: "Monash Department of Mechanical and Aerospace Engineering provides cutting-edge research in hypersonic flight, unmanned aerial vehicles, and lightweight aero-structures.",
          fee: "AUD 45,000–53,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.monash.edu/"
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
            "Completion of Class 12 with high marks in Mathematics and Physics.",
            "Recognized board qualification (CBSE, ICSE, or State Boards).",
            "Competitive academic percentage (typically 75%–85%+).",
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
            "Acceptable tests include IELTS Academic (minimum 6.5 overall, 6.0 in all bands), PTE Academic (58+), or TOEFL iBT (79+)."
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
            "Annual tuition costs range between AUD 42,000 and AUD 56,000. Annual living expenses are estimated at AUD 25,000 to AUD 35,000."
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
            "Aerospace & Defense Industry Bursaries",
            "Faculty Academic Excellence Awards"
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Post-Aerospace Engineering Career Opportunities",
      groups: [
        {
          t: "ul",
          items: [
            "Aerodynamicist & Flight Vehicle Designer",
            "Propulsion Systems Specialist",
            "Avionics & Flight Systems Engineer",
            "Satellite & Space Systems Engineer",
            "UAV & Autonomous Flight Developer",
            "Structural Integrity & Materials Analyst",
            "Defense Aerospace Project Engineer"
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
            "Accredited by Engineers Australia, enabling professional engineering practice worldwide under the Washington Accord."
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
            "Select university and aerospace course.",
            "Verify mathematics and physics prerequisites.",
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
              q: "Is it possible for Indian students to study aerospace engineering in Australia?",
              a: "Yes, qualified students completing Class 12 with senior secondary Mathematics and Physics are eligible to apply."
            },
            {
              q: "What is the duration of an Australian degree program in aerospace engineering?",
              a: "A standard Bachelor of Engineering (Honours) requires 4 years of full-time study."
            },
            {
              q: "Does aerospace engineering require mathematics?",
              a: "Yes, advanced mathematics and physics are mandatory prerequisites."
            },
            {
              q: "Which Australian colleges provide degrees specifically in aerospace engineering?",
              a: "Leading institutions include UNSW Sydney, RMIT University, Monash University, and The University of Adelaide."
            },
            {
              q: "How much does it cost to study aerospace engineering in Australia?",
              a: "Annual international tuition ranges from AUD 42,000 to AUD 55,000, depending on the university."
            }
          ]
        }
      ]
    }
  ]
};

export default function AerospaceEngineeringUG() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/australia/ug/aerospace-engineering"
    />
  );
}
