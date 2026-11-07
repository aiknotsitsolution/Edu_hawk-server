import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images (preserved exactly as original)
import heroImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_side.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_cta_bg.webp";

// Authentic university campus images from user folder
import ouluImg from "../../../../Images/Abroad/Finland/ComputerScience/University-of-Oulu-image3.png";
import aaltoImg from "../../../../Images/Abroad/Finland/ComputerScience/Aalto-University-image5.png";
import uefImg from "../../../../Images/Abroad/Finland/ComputerScience/University-of-Eastern-Finland-image2.png";
import helsinkiImg from "../../../../Images/Abroad/Finland/ComputerScience/University-of-Helsinki-image9.png";
import lutImg from "../../../../Images/Abroad/Finland/ComputerScience/LTU-universityimage7.png";

const page = {
  name: "Computer Science",
  country: "Finland",
  slug: "computer-science",
  title: "Study Computer Science in Finland for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Computer Science in Finland: Top universities like Oulu, Aalto, UEF, Helsinki, and LUT. Explore Bachelor's and Master's in Computer Science Engineering, tuition fees, scholarships, eligibility, and post-study work visa.",
  keywords:
    "Master's in Computer Science Engineering in Finland, Bachelor's in Computer Science Engineering in Finland, Study Computer Science in Finland, Computer Science Universities in Finland, Computer Science Engineering in Finland for Indian Students, Computer Science Engineering in Finland Fees",
  introTitle: "Computer Science Engineering in Finland",
  heroParas: [
    "**Finland** is an attractive destination for students interested in computer science, software development, artificial intelligence, cybersecurity and digital technologies. Finnish universities combine theoretical knowledge with practical learning, research projects and modern computing facilities. Students can develop skills in programming, algorithms, computer systems, data science and emerging technologies.",
    "A **Bachelor's or Master's in Computer Science Engineering in Finland** can provide a strong foundation for careers in software development, IT engineering, artificial intelligence and information technology. Many programmes are available in English, making Finland an option for international students, including students from India."
  ],
  overview: [
    "Finland is known globally for its technology ecosystem, digital innovation and research in computing. Students pursuing studies in Finland can explore advanced areas such as artificial intelligence, machine learning, software systems, cybersecurity, computer networks and data science.",
    "A Bachelor's or Master's in Computer Science Engineering in Finland can help students develop practical engineering capabilities, deepen technical knowledge, and prepare for specialised roles in the global technology industry. Edu-Hawk Worldwide helps students explore suitable universities, understand admission requirements, compare tuition fees and prepare their applications for studying abroad."
  ],
  level: "Bachelor's & Master's",
  crumb: "Engineering & Technology",

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "Why Study Computer Science Engineering in Finland?",
      groups: [
        {
          t: "dl",
          pairs: [
            {
              t: "Bachelor's in Computer Science Engineering in Finland",
              d: "Finland is an attractive destination for students interested in computer science, software development, artificial intelligence, cybersecurity and digital technologies. Finnish universities combine theoretical knowledge with practical learning, research projects and modern computing facilities. Students can develop skills in programming, algorithms, computer systems, data science and emerging technologies.\n\nA Bachelor's in Computer Science Engineering in Finland can provide a strong foundation for careers in software development, IT engineering, artificial intelligence and information technology. Many programmes are available in English, making Finland an option for international students, including students from India. Edu-Hawk Worldwide helps students explore suitable universities, understand admission requirements, compare tuition fees and prepare their applications for studying abroad."
            },
            {
              t: "Master's in Computer Science Engineering in Finland",
              d: "Finland is known for its high-technology ecosystem, digital innovation and research in computing. Students pursuing postgraduate studies can explore advanced areas such as artificial intelligence, machine learning, software systems, cybersecurity, computer networks and data science.\n\nA Master's in Computer Science Engineering in Finland can help graduates deepen their technical knowledge, develop research skills and prepare for specialised roles in the technology industry. Most relevant English-taught programmes take two years and require 120 ECTS credits. Edu-Hawk Worldwide helps students compare universities, understand eligibility requirements, review tuition fees and prepare applications for international study."
            }
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Specialisations",
      title: "Computer Science Engineering Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Bachelor's programmes related to computer science and engineering generally take three years and involve approximately 180 ECTS credits. Some combined degree pathways allow students to continue directly into a master's degree after completing the bachelor's requirements.",
            "Master's programmes in computer science and related engineering fields allow students to specialise in particular technical areas, typically requiring 2 years and 120 ECTS credits.",
            "**Popular study areas include:**"
          ]
        },
        {
          t: "pills",
          items: [
            "Computer Science and Engineering",
            "Software Development and Programming",
            "Artificial Intelligence and Machine Learning",
            "Cybersecurity and Information Security",
            "Data Science and Data Analytics",
            "Computer Systems and Embedded Technology",
            "Computer Networks and Communications",
            "Algorithms and Software Systems",
            "Networks and Distributed Systems",
            "Software Systems and Technology"
          ]
        },
        {
          t: "p",
          items: [
            "Students should check the programme curriculum to determine whether it focuses on computer science, software engineering, computer hardware or broader information technology."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities for Computer Science Engineering in Finland",
      lead: [
        "Finland's leading research universities offering world-class Bachelor's and Master's programmes in Computer Science and Engineering:"
      ],
      unis: [
        {
          name: "University of Oulu",
          location: "Oulu, Finland",
          desc: "The University of Oulu offers a Bachelor's in Computer Science and Engineering, designed to develop knowledge in computing, programming, artificial intelligence, machine learning and cybersecurity. The programme follows a combined bachelor's and master's structure, with 180 ECTS credits at bachelor's level and 120 ECTS credits at master's level.",
          fee: "€10,000 per year, approximately ₹10.86 lakh",
          duration: "3 + 2 years",
          exams: "SAT (for UG) / Bachelor's in CS (for PG), English proficiency",
          features: [
            "Degree: Bachelor of Science (Technology) and Master of Science (Technology)",
            "Duration: 3 + 2 years",
            "Language: English",
            "Tuition fee: €10,000 per year, approximately ₹10.86 lakh"
          ],
          img: ouluImg,
          link: "https://www.oulu.fi/en/apply/bachelors-computer-science-and-engineering"
        },
        {
          name: "Aalto University",
          location: "Espoo, Greater Helsinki, Finland",
          desc: "Aalto University offers a Computer Engineering pathway within its bachelor's-level technology studies and a Master's Programme in Computer Science through the School of Science. Students learn about hardware and software integration, computer architecture, embedded systems, programming and microelectronics.",
          fee: "€12,000 / year (UG) | €17,000 / year (PG)",
          duration: "3 + 2 years (UG) / 2 years (PG)",
          exams: "Academic merit, Mathematics background, English test",
          features: [
            "Degree: Bachelor of Science (Technology) and Master of Science (Technology)",
            "Duration: 3 + 2 years (UG) / 2 years (PG)",
            "Language: English",
            "Tuition fee: €12,000/yr (UG, ~₹13.03 lakh) | €17,000/yr (PG, ~₹18.46 lakh)"
          ],
          img: aaltoImg,
          link: "https://www.aalto.fi/en/study-options/computer-engineering-bachelor-of-science-and-master-of-science-technology"
        },
        {
          name: "University of Eastern Finland",
          location: "Joensuu / Kuopio, Finland",
          desc: "The University of Eastern Finland offers a combined Bachelor's and Master's Degree Programme in Information Technology. The programme provides a foundation in computer science and can be suitable for students interested in software development, computing systems and information technology.",
          fee: "€10,000 per year, approximately ₹10.86 lakh",
          duration: "3 + 2 years",
          exams: "Upper secondary qualification, English proficiency",
          features: [
            "Degree pathway: Bachelor's and Master's in Information Technology",
            "Duration: 3 + 2 years",
            "Language: English",
            "Tuition fee: €10,000 per year, approximately ₹10.86 lakh"
          ],
          img: uefImg,
          link: "https://www.uef.fi/en/degree-programme/bachelors-and-masters-degree-programme-in-information-technology"
        },
        {
          name: "University of Helsinki",
          location: "Helsinki, Finland",
          desc: "The University of Helsinki offers a Master's Programme in Computer Science with study tracks in algorithms, networks and software. Renowned for theoretical foundations, advanced computing systems, AI research, and data science.",
          fee: "€15,000 per year, approximately ₹16.29 lakh",
          duration: "2 years (120 ECTS)",
          exams: "Bachelor's in CS / related field, English proficiency",
          features: [
            "Degree: Master of Science",
            "Duration: 2 years (120 ECTS credits)",
            "Language: English",
            "Tuition fee: €15,000 per year, approximately ₹16.29 lakh"
          ],
          img: helsinkiImg,
          link: "https://www.helsinki.fi/en/degree-programmes/computer-science-masters-programme"
        },
        {
          name: "LUT University",
          location: "Lappeenranta / Lahti, Finland",
          desc: "LUT University offers a Master's Programme in Software Engineering focusing on software engineering practices, software architecture, modern DevOps, cloud computing and complex digital transformation.",
          fee: "€15,000 per year, approximately ₹16.29 lakh",
          duration: "2 years (120 ECTS)",
          exams: "Bachelor's in Engineering/Technology, English proficiency",
          features: [
            "Degree: Master of Science in Technology",
            "Duration: 2 years (120 ECTS credits)",
            "Language: English",
            "Tuition fee: €15,000 per year, approximately ₹16.29 lakh"
          ],
          img: lutImg,
          link: "https://www.lut.fi/en/studies/technology/masters-programmes-technology/masters-programme-software-engineering"
        }
      ],
      note: [
        "Programme details and tuition fees are based on published information for the 2027 intake and should be reconfirmed before applying."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Requirements",
      title: "Eligibility to Study Computer Science Engineering in Finland",
      groups: [
        {
          t: "p",
          items: [
            "**Bachelor's Programme Eligibility:**",
            "Students applying for a bachelor's programme generally need:"
          ]
        },
        {
          t: "ul",
          items: [
            "A recognised secondary school qualification equivalent to Finnish upper secondary education.",
            "Completion of the required subjects for the selected programme.",
            "Proof of English proficiency, if required.",
            "SAT or another accepted admission qualification, where specified by the university.",
            "Academic documents meeting the institution's requirements."
          ]
        },
        {
          t: "p",
          items: [
            "Admission criteria differ by university. For example, the University of Oulu requires an SAT for applicants using qualifications other than specified recognised qualifications, including Finnish matriculation, IB, EB or DIA/RP credentials. Applicants should check the exact admission route applicable to their schooling.",
            "**Master's Programme Eligibility:**",
            "Applicants for postgraduate studies generally need:"
          ]
        },
        {
          t: "ul",
          items: [
            "A recognised bachelor's degree in Computer Science, Computer Engineering, Software Engineering, Information Technology or a closely related discipline.",
            "Sufficient prior coursework in programming, algorithms, mathematics and relevant computing subjects.",
            "Academic performance that meets the university's admission criteria.",
            "Proof of English-language proficiency, if required.",
            "Curriculum vitae (CV), Statement of Purpose / Motivation letter, and academic recommendation letters where requested."
          ]
        },
        {
          t: "p",
          items: [
            "Edu-Hawk Worldwide can help students shortlist suitable programmes, review application requirements and organise documents before submission."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Documentation",
      title: "Admission Requirements for Computer Science Engineering in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Students planning to study Computer Science Engineering in Finland should prepare the following, depending on the university:"
          ]
        },
        {
          t: "ul",
          items: [
            "Class 10 and Class 12 marksheets or equivalent academic records (for Bachelor's) / Bachelor's degree and transcripts (for Master's).",
            "School-leaving or graduation certificate, where applicable.",
            "Valid passport.",
            "English-language test results, if required.",
            "SAT score, if required for the chosen admission route.",
            "Curriculum Vitae (CV) and Statement of Purpose / Motivation letter (for Master's).",
            "Recommendation letters (for Master's).",
            "Application form and any university-specific supporting documents."
          ]
        },
        {
          t: "p",
          items: [
            "Some universities assess applicants through entrance examinations, SAT scores or academic qualifications. Students should not assume that every university uses the same selection method.",
            "Edu-Hawk Worldwide can help students shortlist suitable programmes, review application requirements and organise documents before submission."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living",
      title: "Cost of Studying Computer Science Engineering in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The total cost depends on the university, programme and city. Non-EU/EEA students generally pay tuition fees for English-taught degree programmes.",
            "**Estimated Annual Tuition Fees (Bachelor's & Master's)**"
          ]
        },
        {
          t: "table",
          headers: ["University", "Annual fee in EUR", "Approximate annual fee in INR"],
          rows: [
            ["University of Oulu", "€10,000", "₹10.86 lakh"],
            ["Aalto University (Bachelor's)", "€12,000", "₹13.03 lakh"],
            ["Aalto University (Master's)", "€17,000", "₹18.46 lakh"],
            ["University of Eastern Finland", "€10,000", "₹10.86 lakh"],
            ["University of Helsinki (Master's)", "€15,000", "₹16.29 lakh"],
            ["LUT University (Master's)", "€15,000", "₹16.29 lakh"]
          ]
        },
        {
          t: "p",
          items: [
            "The INR amounts are estimates based on €1 ≈ ₹108.60. Tuition fees may change between academic years. Selected programmes may offer early-bird discounts or tuition-fee waivers subject to eligibility and payment conditions.",
            "**Estimated Monthly Living Expenses**"
          ]
        },
        {
          t: "table",
          headers: ["Expense", "Monthly cost in EUR", "Approximate monthly cost in INR"],
          rows: [
            ["Accommodation", "€300–€700", "₹32,580–₹76,020"],
            ["Food and groceries", "€200–€350", "₹21,720–₹38,010"],
            ["Local transport", "€40–€80", "₹4,344–₹8,688"],
            ["Personal expenses", "€100–€200", "₹10,860–₹21,720"],
            ["Estimated total", "€640–€1,330", "₹69,504–₹1,44,438"]
          ]
        },
        {
          t: "p",
          items: [
            "Actual living costs depend on the city, accommodation and lifestyle. Students should also budget for insurance, travel, study materials and residence-permit expenses."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions",
      title: "Admission Process for Computer Science Engineering in Finland",
      groups: [
        {
          t: "step",
          num: "01",
          title: "Choose your programme",
          desc: "Compare universities, course modules, teaching language and tuition fees across bachelor's and master's levels."
        },
        {
          t: "step",
          num: "02",
          title: "Check eligibility",
          desc: "Review the academic qualifications, English-language requirements and any SAT or entrance-test requirements."
        },
        {
          t: "step",
          num: "03",
          title: "Prepare documents",
          desc: "Collect academic records, passport details, required test scores, CV and motivation letters."
        },
        {
          t: "step",
          num: "04",
          title: "Submit your application",
          desc: "Apply through Studyinfo.fi or the university's designated application portal during the application intake window."
        },
        {
          t: "step",
          num: "05",
          title: "Check scholarships",
          desc: "Review any available tuition discounts, early-bird waivers or scholarship opportunities."
        },
        {
          t: "step",
          num: "06",
          title: "Receive your decision",
          desc: "Follow the university's instructions to accept an offer, pay the tuition fee deposit and complete enrolment."
        },
        {
          t: "step",
          num: "07",
          title: "Prepare for departure",
          desc: "Apply for a Finnish first residence permit for studies, arrange student accommodation, health insurance and travel."
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Professional Recognition",
      title: "Medical Licensing Examination & Professional Registration",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of computer science and software engineering programmes in Finland do not require a medical licence or mandatory professional registration to work in IT. Computer science, data science and software engineering are generally open professional fields where hiring is based on technical competence, problem-solving ability, academic degree and practical portfolio rather than professional licensing board examinations.",
            "Employers evaluate candidates through coding assessments, technical interviews, practical project experience and domain knowledge. Graduates with degrees in technology can apply directly for engineering and IT positions in Finland and across the European Union."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Salary",
      title: "Job Opportunities and Average Salary for Computer Science Engineering Graduates in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Finland has a strong technology sector with demand for skilled IT professionals across software engineering, cloud computing, cybersecurity and artificial intelligence. Graduates of computer science engineering programmes can explore diverse career paths in Finnish enterprises, multinational tech firms, research institutes and fast-growing startups.",
            "Valuable skills include programming languages (such as Python, Java, C++, TypeScript, Rust), software architecture, cloud platforms (AWS, Azure, Google Cloud), artificial intelligence, machine learning, data engineering, cybersecurity and DevOps practices.",
            "**Common Job Roles for Graduates**"
          ]
        },
        {
          t: "pills",
          items: [
            "Software Developer / Software Engineer",
            "AI and Machine Learning Engineer",
            "Data Scientist / Data Engineer",
            "Cybersecurity Specialist / Information Security Analyst",
            "Cloud Infrastructure Engineer",
            "Software Architect / Systems Developer",
            "DevOps Engineer / Systems Engineer",
            "Web and Mobile Application Developer",
            "Technology Consultant / Research Scientist"
          ]
        },
        {
          t: "p",
          items: [
            "Salaries vary according to role, technical expertise, employer, and location. International students benefit from Finland's generous 2-year post-study work permit upon graduation to build their professional careers in Europe."
          ]
        },
        {
          t: "cta",
          badge: "Global Education Pathway",
          tagline: "Start in India. Continue Abroad. Graduate Globally.",
          desc: "Connect with Edu-Hawk Worldwide and take the next step towards your international education goals in Finland.",
          phone: "+91 96307 36070",
          email: "eduhawk.global@gmail.com",
          site: "eduhawk.in",
          buttonText: "Connect With Us",
          buttonLink: "https://api.whatsapp.com/send?phone=919630736070"
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Residence Permit",
      title: "Documents Required for Visa (Finnish Residence Permit for Studies)",
      groups: [
        {
          t: "p",
          items: [
            "Non-EU/EEA students admitted to degree programmes in Finland must apply for a Finnish first residence permit for studies (opiskelijan oleskelulupa) through the Finnish Immigration Service (Migri) via the Enter Finland portal.",
            "**Key Documents Required**"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid passport with valid validity period.",
            "Official letter of acceptance from the Finnish higher education institution.",
            "Proof of tuition fee payment or scholarship award documentation.",
            "Proof of sufficient financial funds (at least €800 per month or €9,600 per year in the applicant's personal bank account).",
            "Comprehensive student health insurance policy covering medical treatments in Finland.",
            "Passport photo complying with Finnish passport photo guidelines.",
            "Biometric verification appointment at the nearest Finnish Embassy or VFS Global application centre."
          ]
        },
        {
          t: "p",
          items: [
            "Edu-Hawk Worldwide provides end-to-end guidance for the Finnish student residence permit application, documentation review and pre-departure preparation."
          ]
        }
      ]
    }
  ],

  faqs: [
    {
      q: "Can Indian students study Computer Science Engineering in Finland?",
      a: "Yes. Indian students can apply to English-taught bachelor's and master's programmes if they meet the university's academic, language and documentation admission requirements."
    },
    {
      q: "What is the duration of a bachelor's degree in computer science in Finland?",
      a: "A typical bachelor's degree takes three years and covers approximately 180 ECTS credits. Some universities offer a combined bachelor's and master's pathway lasting five years (300 ECTS), while standalone master's degrees take two years (120 ECTS)."
    },
    {
      q: "What is the tuition fee for Computer Science Engineering in Finland?",
      a: "Annual tuition fees range from approximately €10,000 to €17,000 per year (around ₹10.86 lakh to ₹18.46 lakh). Selected universities offer early-bird discounts and merit scholarships."
    },
    {
      q: "Is IELTS mandatory for admission?",
      a: "Not necessarily. English-language requirements differ by university, and some institutions accept alternative qualifications or tests (such as TOEFL, PTE Academic, or Cambridge English). Students should confirm the accepted options for their selected programme."
    },
    {
      q: "Which university is best for computer science in Finland?",
      a: "The best option depends on your preferred specialisation, academic background, budget and career goals. Aalto University, the University of Oulu, the University of Helsinki, and LUT University offer distinct specialisations in AI, computing theory, software engineering, and applied computer systems."
    },
    {
      q: "How can Edu-Hawk Worldwide help with admission?",
      a: "Edu-Hawk Worldwide guides students in programme selection, university comparisons, eligibility assessments, document preparation, tuition fee waivers, and the complete application and Finnish residence permit process."
    }
  ]
};

export default function ComputerScienceFinland() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/finland/computer-science"
    />
  );
}
