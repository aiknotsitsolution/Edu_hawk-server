import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Italy/ComputerScience/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Italy/ComputerScience/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Italy/ComputerScience/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Italy/ComputerScience/cta_bg.webp";
import Bologna_UniversityImg from "../../../../Images/Abroad/Italy/ComputerScience/Bologna_University.webp";
import Polytechnic_of_MilanImg from "../../../../Images/Abroad/Italy/ComputerScience/Polytechnic_of_Milan.webp";
import Universit_di_PadovaImg from "../../../../Images/Abroad/Italy/ComputerScience/Universit_di_Padova.webp";

const page = {
  "name": "Computer Science in Italy",
  "country": "Italy",
  "slug": "computer_science",
  "title": "Computer Science in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Computer Science in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Computer Science in Italy, Study Computer Science in Italy, Best Computer Science Universities in Italy, MS in Computer Science in Italy, Computer Science Fees in Italy",
  "introTitle": "Computer Science Engineering in Italy for Indian Students",
  heroParas: [
    "Studying Computer Science in Italy provides international students with strong algorithmic foundations, advanced software engineering training, and exposure to Europe's rapidly expanding digital and tech innovation hubs."
  ],
  overview: [
    "Yes. Indian students who have successfully completed Class 12 or an equivalent qualification are eligible to apply for Bachelor's programs. They have to meet the academic, language and entrance-test requirements of the university they have chosen."
  ],
  "level": "Undergraduate & Postgraduate",
  "crumb": "Technology & Computing",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Undergraduate & Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 Years (UG)"
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
      "title": "Yes, Indian students can study Computer Science Engineering in Italy after Class 12.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students who have successfully completed Class 12 or an equivalent qualification are eligible to apply for Bachelor's programs. They have to meet the academic, language and entrance-test requirements of the university they have chosen."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "Duration of the Bachelor in Computer Science Engineering in Italy:",
      "groups": [
        {
          "t": "p",
          "items": [
            "The standard duration of a Bachelor's degree in Italy is usually three years. Each university will have a different course name, language and entry requirements."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Computer Science in Italy",
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
              img: Universit_di_PadovaImg
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
      "title": "How long does it take to do Master in Computer Science Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "A standard Italian Master's degree usually takes two years and usually gives 120 ECTS credits."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Does Computer Science Engineering have English programs in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "A number of programs are taught in English, especially at Masters level. Many Bachelor engineering programs are however taught in Italian. Politecnico di Milano's Master's in Computer Science and Engineering is taught in English, while its Bachelor's in Engineering of Computing Systems is listed as Italian-taught."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "How much is it to study Computer Science Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition varies according to university, level of degree, and applicable fee. Students should review official fee schedules and inquire concerning scholarships or reductions in tuition for which they might be eligible."
          ]
        }
      ]
    },
    {
      "slot": "section-7",
      "eyebrow": "Details",
      "title": "Computer Science Engineering Admission In Italy",
      "groups": [
        {
        "t": "timeline",
        "items": [
                {
                        "step": "1",
                        "title": "Pick Your Degree Level",
                        "desc": "You'll have to decide whether you want to pursue a Bachelor's post Class 12 or a Master's after an under-graduate degree."
                },
                {
                        "step": "2",
                        "title": "Check Eligibility",
                        "desc": "School subject requirements for Bachelor's programs or subject credit requirements for Master's programs."
                },
                {
                        "step": "3",
                        "title": "Gather Documents",
                        "desc": "Collect academic transcripts, identification, language test scores, and other necessary documents."
                },
                {
                        "step": "4",
                        "title": "Entrance Test / Academic Evaluation",
                        "desc": "Follow pattern given by university."
                },
                {
                        "step": "5",
                        "title": "Apply",
                        "desc": "Complete your application on the university's official portal before the deadline."
                },
                {
                        "step": "6",
                        "title": "Accept Your Offer And Scholarships",
                        "desc": "Follow the instructions to accept your offer, enroll and apply for funding."
                },
                {
                        "step": "7",
                        "title": "Step 7",
                        "desc": "Visa requirements You need to follow the proper Italian student-visa procedure and check if you have to pre-enrol through Universitaly."
                }
        ]
},
        {
          "t": "p",
          "items": [
            "For the 2026-2027 intake, please contact the university directly for the most up-to-date application dates and procedures. If you're applying for a Bachelor's, you need to pay attention to entrance tests and language of instruction requirements."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Degree in Computer Science Engineering and Recognition in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "Italian Universities award qualifications recognized in the Italian higher education system. A Bachelor's degree usually provides basic knowledge and may be required for further education. A Master's degree provides advanced technical and specialized training.",
            "Students should be able to differentiate between the following qualifications:"
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Document Needed to Study Computer Science Engineering in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "For applicants for a Bachelors Degree"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport (valide)",
            "Class 10 and Class 12 Marksheets or Certificates as required",
            "School leaving certificate or equivalent qualification",
            "Entrance test marks (if applicable)",
            "Certificate of language proficiency (if applicable)",
            "If required, academic translations or legalization",
            "Documents required for pre-enrolment and student visa application"
          ]
        },
        {
          "t": "p",
          "items": [
            "For Master's Students"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Bachelor's degree or provisional degree certificate",
            "Academic transcripts and mark sheets",
            "Resume or CV",
            "Certificate of proficiency in English if required",
            "Statement of purpose/motivation letter (if applicable)",
            "Letters of recommendation (if required)",
            "Course descriptions or syllabus documents, if required for academic assessment",
            "Details of project or work experience where applicable",
            "Scholarship and financial documents, if applicable",
            "Documents for pre-enrolment and application for student visa."
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact list will depend on the university, the applicant's qualifications and the procedures in force. Always use the official checklist for the intended intake."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students study Computer Science in Italy in English?",
        "a": "Yes. Premier institutions including Politecnico di Milano, University of Bologna, and Sapienza University offer English-taught Computer Science degrees."
    },
    {
        "q": "What is the duration of Computer Science programmes in Italy?",
        "a": "Undergraduate bachelor's degrees take 3 years (180 ECTS), and postgraduate Master of Science (M.Sc.) degrees take 2 years (120 ECTS)."
    },
    {
        "q": "What are the tuition fees for Computer Science in Italy?",
        "a": "Public university fees range between €1,000 and €3,800 annually, with additional fee reductions available through DSU income assessments."
    },
    {
        "q": "What entrance tests are required for Computer Science in Italy?",
        "a": "Bachelor's applicants typically take the TOLC-I or English TOLC-E, while master's applicants are evaluated based on undergraduate credit alignment and GPA."
    },
    {
        "q": "What specializations are available in Italian Computer Science programmes?",
        "a": "Popular specializations include Artificial Intelligence, Data Science, Cybersecurity, Cloud Computing, and Software Architecture."
    },
    {
        "q": "What are the job prospects for Computer Science graduates in Italy?",
        "a": "Graduates are in high demand across European technology firms, fintech hubs in Milan and Turin, and automotive tech research centers."
    }
],
  faqTitle: "Frequently Asked Questions About Computer Science in Italy"
};

export default function ComputerScienceItaly() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/italy/computer-science"
    />
  );
}
