import React from "react";
import { Link } from "react-router-dom";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Australia/Engineering_UG/General/eng_ug_hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Australia/Engineering_UG/General/eng_ug_hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Australia/Engineering_UG/General/eng_ug_study.webp";
import ctaBgImg from "../../../../../Images/Abroad/Australia/Engineering_UG/General/eng_ug_cta_bg.webp";

// University Campus Images
import unswImg from "../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/UNSW_Sydney.webp";
import melbourneImg from "../../../../../Images/Abroad/Australia/Engineering_UG/Computer/The_University_of_Melbourne.webp";
import sydneyImg from "../../../../../Images/Abroad/Australia/Engineering_UG/Computer/The_University_of_Sydney.webp";
import monashImg from "../../../../../Images/Abroad/Australia/Engineering_UG/Electrical/Monash_University.webp";

const page = {
  name: "Bachelor's in Engineering",
  country: "Australia",
  slug: "ug-engineering",
  title: "Engineering in Australia for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Bachelor's in Engineering in Australia for Indian students. Learn about Bachelor of Engineering (Honours), top universities (UNSW, Melbourne, Sydney, Monash), eligibility, fees, Engineers Australia accreditation, and career opportunities.",
  keywords:
    "Study Engineering in Australia for Indian Students Best Engineering Universities in Australia Engineering Courses in Australia After 12th Bachelor of Engineering in Australia for International Students Engineering Admission Requirements in Australia Engineering Fees in Australia for Indian Students Engineering Scholarships in Australia for International Students Engineering Course Duration in Australia IELTS and PTE Requirements for Engineering in Australia Engineering Specializations in Australia Engineering Admission Process in Australia for Indian Students Engineers Australia Accreditation Career Opportunities After Studying Engineering in Australia Australian Student Visa Requirements for Indian Engineering Students",
  introTitle: "For Indian Students, Study Engineering in Australia",
  heroParas: [
    "Engineering programs in civil, mechanical, electrical, software, chemical, aerospace, and emerging technology domains are available in Australia. Undergraduate, graduate, diploma, certificate, and research options are available to Indian students."
  ],
  overview: [
    "Australian universities deliver globally recognized engineering education accredited by Engineers Australia under the Washington Accord. Students benefit from modern research facilities, practical design projects, industry internships, and international career opportunities."
  ],
  level: "Undergraduate",
  crumb: "Engineering",

  stats: [
    { label: "Degree Awarded", value: "Bachelor of Engineering (Honours)" },
    { label: "Course Duration", value: "3 to 4 Years Full-Time" },
    { label: "Top Institutions", value: "UNSW, Melbourne, Sydney, Monash" },
    { label: "Accreditation", value: "Engineers Australia & Washington Accord" }
  ],

  faqs: [
    {
      q: "After Class 12, are Indian students able to pursue engineering studies in Australia?",
      a: "Yes, if they fulfill the academic, subject, and English language requirements of the university."
    },
    {
      q: "What is the duration of an Australian engineering degree?",
      a: "While master's programs typically take one to two years, many bachelor's degrees require three to four years."
    },
    {
      q: "Is it necessary to learn mathematics?",
      a: "Mathematics is a prerequisite for many engineering programs, and some also call for physics or other science courses."
    },
    {
      q: "Is taking the IELTS required?",
      a: "The university's English language requirements must be met by students, while there are several exceptions and acceptable tests."
    },
    {
      q: "What is the approximate cost of tuition?",
      a: "Depending on the course and school, many programs cost between AUD 35,000 and AUD 70,000 or more annually."
    }
  ],

  sections: [
    {
      slot: "courses",
      eyebrow: "Engineering Programs",
      title: "Engineering Programs in Australia",
      groups: [
        {
          t: "p",
          items: [
            "Australia offers diverse English-taught undergraduate engineering degree pathways:"
          ]
        },
        {
          t: "ul",
          items: [
            "Engineering bachelor's degree with honors",
            "Civil engineering bachelor's degree with honors",
            "Mechanical engineering bachelor's degree with honors",
            "Electrical engineering bachelor's degree with honors",
            "Software engineering bachelor's degree with honors",
            "Chemical engineering bachelor's degree with honors",
            "Mechatronics engineering bachelor's degree with honors",
            "Aerospace engineering bachelor's degree with honors"
          ]
        }
      ]
    },
    {
      slot: "specializations",
      eyebrow: "Specializations",
      title: "Specializations in Engineering",
      groups: [
        {
          t: "p",
          items: [
            "Students can choose from specialized engineering majors and career tracks across Australian universities:"
          ]
        },
        {
          t: "pills",
          items: [
            "Structural and Civil Engineering",
            "Electrical and Electronic Engineering",
            "Mechanical Engineering",
            "Computer engineering and software",
            "Robotics and Mechatronics",
            "Aerospace Engineering",
            "Chemical Engineering",
            "Environmental engineering",
            "Mining and petroleum engineering",
            "Biomedical engineering",
            "Renewable energy engineering",
            "Industrial and Manufacturing Engineering",
            "Telecommunications Engineering",
            "Automation and Artificial Intelligence"
          ]
        }
      ]
    },
    {
      slot: "branches",
      eyebrow: "Explore Branches",
      title: "Undergraduate Engineering Branches in Australia",
      groups: [
        {
          t: "p",
          items: [
            "Explore detailed guides for each Bachelor's in Engineering discipline available in Australia:"
          ]
        },
        {
          t: "custom",
          render: () => (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              {[
                { name: "Computer Engineering", path: "/study-abroad/australia/ug/computer-engineering", desc: "Hardware systems, microprocessors, IoT & embedded programming." },
                { name: "Mechanical Engineering", path: "/study-abroad/australia/ug/mechanical-engineering", desc: "Machine design, thermodynamics, robotics & advanced manufacturing." },
                { name: "Civil Engineering", path: "/study-abroad/australia/ug/civil-engineering", desc: "Structural analysis, geotechnical design & urban infrastructure." },
                { name: "Electrical Engineering", path: "/study-abroad/australia/ug/electrical-engineering", desc: "Power distribution, renewable energy grids & electronics." },
                { name: "Electronics & Communication", path: "/study-abroad/australia/ug/electronics-communication", desc: "Semiconductors, signal processing & wireless telecommunications." },
                { name: "Chemical Engineering", path: "/study-abroad/australia/ug/chemical-engineering", desc: "Process design, biochemical reactions & sustainable materials." },
                { name: "Aerospace Engineering", path: "/study-abroad/australia/ug/aerospace-engineering", desc: "Aerodynamics, flight propulsion & spacecraft systems." },
                { name: "Biomedical Engineering", path: "/study-abroad/australia/ug/biomedical-engineering", desc: "Medical devices, tissue engineering & clinical technologies." },
                { name: "Automobile Engineering", path: "/study-abroad/australia/ug/automobile-engineering", desc: "Vehicle dynamics, automotive electronics & EV propulsion." }
              ].map((branch, idx) => (
                <Link
                  key={idx}
                  to={branch.path}
                  className="p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group block"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-base mb-1.5">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{branch.desc}</p>
                </Link>
              ))}
            </div>
          )
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities for Engineering in Australia",
      lead: [
        "Australia features leading research universities delivering accredited engineering education under the Washington Accord."
      ],
      unis: [
        {
          name: "UNSW Sydney",
          img: unswImg,
          location: "Sydney, New South Wales, Australia",
          desc: "UNSW Engineering is Australia's largest and top-ranked engineering faculty, offering world-class research facilities and comprehensive Bachelor of Engineering (Honours) degrees.",
          fee: "AUD 45,000–55,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.unsw.edu.au/"
        },
        {
          name: "The University of Melbourne",
          img: melbourneImg,
          location: "Melbourne, Victoria, Australia",
          desc: "Melbourne School of Engineering is Australia's oldest engineering school, offering internationally acclaimed engineering pathways with state-of-the-art laboratory complexes.",
          fee: "AUD 44,000–52,000 / year",
          duration: "3 to 4 Years Full-Time",
          link: "https://www.unimelb.edu.au/"
        },
        {
          name: "The University of Sydney",
          img: sydneyImg,
          location: "Sydney, New South Wales, Australia",
          desc: "The University of Sydney Faculty of Engineering delivers accredited engineering honours degrees with strong industrial placements and innovative capstone project tracks.",
          fee: "AUD 46,000–54,000 / year",
          duration: "4 Years Full-Time",
          link: "https://www.sydney.edu.au/"
        },
        {
          name: "Monash University",
          img: monashImg,
          location: "Melbourne, Victoria, Australia",
          desc: "Monash University provides cutting-edge engineering programs supported by the Monash Makerspace, high-performance computing clusters, and global alumni networks.",
          fee: "AUD 43,000–51,000 / year",
          duration: "4 Years Bachelor of Engineering (Honours)",
          link: "https://www.monash.edu/"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Indian Students' Eligibility",
      groups: [
        {
          t: "p",
          items: [
            "Undergraduate: Completion of class 12, necessary grades, pertinent science and math courses, and fluency in English. The course determines the prerequisites."
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
            "Universities may accept TOEFL iBT, PTE Academic, or IELTS Academic. IELTS Academic 6.5 overall is a popular beginning point, however specific scores and component requirements differ depending on the subject and school."
          ]
        }
      ]
    },
    {
      slot: "testing",
      eyebrow: "Selection & Entry",
      title: "Admission Tests",
      groups: [
        {
          t: "p",
          items: [
            "English language skills and academic credentials are typically evaluated in Australian engineering programs."
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
            "Professional engineering honors degrees often take four years, while bachelor's degrees typically take three to four years."
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
            "Estimates for indicative international tuition planning:",
            "Undergraduate engineering: around AUD 35,000 to AUD 65,000+ annually."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step",
      title: "The Admission Procedure",
      groups: [
        {
          t: "p",
          items: [
            "Select your area of expertise in engineering."
          ]
        },
        {
          t: "ul",
          items: [
            "Make a short list of colleges and courses.",
            "Verify the qualifications for math and academics.",
            "fulfilll the English language requirements.",
            "Get your passport and academic paperwork ready.",
            "Send in your application to the university.",
            "Examine the tuition costs and the offer.",
            "Look into scholarships and make financial arrangements.",
            "Obtain enrollment confirmation and set up health insurance.",
            "Apply for the relevant student visa for Australia.",
            "Make travel and lodging arrangements."
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
            "A valid passport",
            "Marksheets for Classes 10 and 12",
            "Transcripts of the bachelor's degree and, if relevant, the results of the English language exam",
            "Curriculum vitae, if necessary",
            "If necessary, a statement of purpose",
            "Academic citations, if necessary",
            "Research proposal for degrees in related fields",
            "Financial records in order to obtain a visa",
            "Offer letter and enrollment confirmation",
            "Evidence of overseas student health coverage"
          ]
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Visa Subclass 500",
      title: "Visa for Students",
      groups: [
        {
          t: "p",
          items: [
            "In general, students must have the proper student visa, an enrollment confirmation, overseas student health insurance, and any supporting documentation that the Australian government requires."
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
              q: "After Class 12, are Indian students able to pursue engineering studies in Australia?",
              a: "Yes, if they fulfill the academic, subject, and English language requirements of the university."
            },
            {
              q: "What is the duration of an Australian engineering degree?",
              a: "While master's programs typically take one to two years, many bachelor's degrees require three to four years."
            },
            {
              q: "Is it necessary to learn mathematics?",
              a: "Mathematics is a prerequisite for many engineering programs, and some also call for physics or other science courses."
            },
            {
              q: "Is taking the IELTS required?",
              a: "The university's English language requirements must be met by students, while there are several exceptions and acceptable tests."
            },
            {
              q: "What is the approximate cost of tuition?",
              a: "Depending on the course and school, many programs cost between AUD 35,000 and AUD 70,000 or more annually."
            }
          ]
        }
      ]
    }
  ]
};

export default function UndergraduateEngineeringAustralia() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/australia/ug/engineering"
    />
  );
}
