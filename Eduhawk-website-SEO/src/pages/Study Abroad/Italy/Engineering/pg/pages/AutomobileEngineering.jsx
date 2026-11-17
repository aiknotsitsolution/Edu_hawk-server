import cmsData from "../../../../../../data/study_abroad/italy/auto_engg_pg.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/cta_bg.webp";
import Politecnico_di_MilanoImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/Politecnico_di_Milano.webp";
import University_of_Modena_and_Reggio_EmiliaImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/University_of_Modena_and_Reggio_Emilia.webp";
import Universit_di_BolognaImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Automobile/Universit_di_Bologna.webp";

const page = {
  "name": "Automobile Engineering - PG in Italy",
  "country": "Italy",
  "slug": "auto_engg_pg",
  "title": "Automobile Engineering - PG in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Automobile Engineering - PG in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Automobile Engineering in Italy, Master's in Automotive Engineering Italy, Motor Valley Italy Master's, Study Automobile Engineering Italy",
  "introTitle": "Automobile Engineering in Italy for Indian Students",
  heroParas: [
    "Pursuing a Master’s in Automobile Engineering in Italy places students in the heart of the world-famous 'Motor Valley', home to legendary automotive pioneers including Ferrari, Lamborghini, Maserati, Dallara, and Ducati."
  ],
  overview: [
    "Yes. Indian students can apply for eligible Master's programs in Automobile Engineering, Advanced Automotive Engineering, Vehicle Engineering or related subjects subject to meeting the university's academic and language requirements."
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
      "title": "Is it possible for Indian students to pursue Automobile Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students can apply for eligible Master's programs in Automobile Engineering, Advanced Automotive Engineering, Vehicle Engineering or related subjects subject to meeting the university's academic and language requirements."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "What is the duration of Master in Automobile Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Relevant Master's programs are usually two years long and contain 120 ECTS credits. Students should check the exact length and format of the program they choose."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Automobile Engineering - PG in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Politecnico_di_MilanoImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: University_of_Modena_and_Reggio_EmiliaImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Universit_di_BolognaImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Politecnico_di_MilanoImg
            }
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Is the automobile engineering course in Italy in English?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes, there are some post graduate programs that are taught in English only. For example, the Advanced Automotive Engineering program at the University of Bologna for the academic year 2026-2027 is listed as a two-year, English taught program."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "How much is the tuition fee for Automobile Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Fees will vary by university, program and student fee category. Check the official tuition schedule and see if you qualify for any scholarships or reductions in fees."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "What is the scope of Automobile Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can find opportunities in automotive design, electric vehicles, powertrain development, vehicle testing, manufacturing, motorsport and research and development. Job availability depends on technical skills, experience, language ability and work authorization."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Automobile Engineering Admission Process in Italy",
      "groups": [
        {
        "t": "timeline",
        "items": [
                {
                        "step": "1",
                        "title": "Select Your Program",
                        "desc": "Compare automotive engineering, motorsport engineering, vehicle engineering, and powertrain specialisations."
                },
                {
                        "step": "2",
                        "title": "Get Papers Ready",
                        "desc": "Gather transcripts, diplomas, CV, results of language tests and any other documents that are needed."
                },
                {
                        "step": "3",
                        "title": "Apply Online",
                        "desc": "Apply in the official university portal before the deadline."
                },
                {
                        "step": "4",
                        "title": "Step 4",
                        "desc": "Complete the assessment Attend any interview, academic evaluation or selection process that may be necessary."
                },
                {
                        "step": "5",
                        "title": "Complete The Visa Formalities",
                        "desc": "Follow the appropriate student-visa process and see if pre-enrolment through Universitaly is necessary."
                }
        ]
},
        {
          "t": "p",
          "items": [
            "For the 2026-2027 intake, please always consult the current program page and the official admission call, as deadlines and requirements might change."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Degree in Automobile Engineering - Recognition in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "A Master's degree in Automobile Engineering or Advanced Automotive Engineering from a recognized Italian university can offer advanced training in vehicle systems, mechanical design, powertrains, manufacturing and mobility technologies.",
            "Students may study vehicle simulation, electric propulsion, automotive electronics, vehicle dynamics and production engineering, depending on the curriculum.",
            "Graduates can look for work in Italy or abroad, depending on the requirements of the employer and the work authorization required. Students wanting to work in India should inquire are any qualification or recognition requirements for that specific role."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Automobile Engineering in Italy: Salary and Career Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduate career opportunities exist within automotive manufacturers, component suppliers, engineering consultancies, research centers, motorsport companies and electric-mobility businesses.",
            "Possible job titles:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport",
            "Bachelor's degree certificate or provisional certificate",
            "Academic transcripts and mark sheets",
            "Certificate of proficiency in English, if required",
            "CV or r&eacute;sum&eacute; (updated)",
            "Statement of purpose/letter of motivation (where applicable)",
            "Letters of recommendation (as requested)",
            "Course descriptions or syllabus documents as applicable",
            "Details of relevant project, internship or work experience",
            "Certified translations or legalized documents where applicable Scholarship application and financial documents if applicable",
            "Documents required for the pre-enrolment and student visa processes"
          ]
        },
        {
          "t": "p",
          "items": [
            "Not all universities require the same documents. Follow the official checklist of your chosen course and intake."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Why is Italy world-renowned for Automotive Engineering studies?",
        "a": "Italy is home to the legendary 'Motor Valley' in Emilia-Romagna, where universities partner directly with Ferrari, Lamborghini, Maserati, and Ducati through MUNER (Motorvehicle University of Emilia-Romagna)."
    },
    {
        "q": "What is the duration of a Master's in Automotive Engineering in Italy?",
        "a": "The Master's degree requires 2 years of full-time study (120 ECTS credits) including laboratory projects and an industry-sponsored thesis."
    },
    {
        "q": "What are the tuition fees for Automotive Engineering in Italy?",
        "a": "Tuition at public universities ranges from €1,000 to €3,800 per year, and eligible students can receive full fee waivers through regional scholarships."
    },
    {
        "q": "What are the entrance requirements for automotive master's in Italy?",
        "a": "Applicants need a Bachelor's degree in mechanical, automotive, electrical, or aerospace engineering with strong foundational grades and English proficiency (IELTS 6.5+)."
    },
    {
        "q": "What specializations are available in Italian automotive master's?",
        "a": "Specializations include High-Performance Car Design, Electric Powertrain & Battery Systems, Autonomous Driving Systems, and Racing Car Aerodynamics."
    },
    {
        "q": "What are the post-graduation employment opportunities?",
        "a": "Graduates secure high-level positions in motorsport engineering, vehicle testing, powertrain research, and smart mobility across Europe's leading automotive brands."
    }
],
  faqTitle: "Frequently Asked Questions About Automobile Engineering PG in Italy"
};

export default function AutomobileEngineeringPGItaly() {
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
      seoPath="/study-abroad/italy/pg/automobile-engineering"
    />
  );
}
