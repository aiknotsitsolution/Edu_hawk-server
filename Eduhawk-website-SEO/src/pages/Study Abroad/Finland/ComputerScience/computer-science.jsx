import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";
import heroImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_side.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/ComputerScience/cs_cta_bg.webp";
import ouluImg from "../../../../Images/Abroad/Finland/ComputerScience/oulu.webp";
import aaltoImg from "../../../../Images/Abroad/Finland/ComputerScience/aalto.webp";
import uefImg from "../../../../Images/Abroad/Finland/ComputerScience/uef.webp";
import helsinkiImg from "../../../../Images/Abroad/Finland/ComputerScience/helsinki.webp";
import lutImg from "../../../../Images/Abroad/Finland/ComputerScience/lut.webp";

const page = {
  name: "Computer Science",
  country: "Finland",
  slug: "computer-science",
  title: "Study Computer Science in Finland for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Computer Science in Finland: Top universities like Oulu, Aalto, UEF, Helsinki, and LUT. Explore Bachelor's and Master's in Computer Science Engineering, tuition fees, scholarships, eligibility, and post-study work visa.",
  keywords:
    "Master’s in Computer Science Engineering in Finland, Bachelor’s in Computer Science Engineering in Finland, Study Computer Science in Finland, Computer Science Universities in Finland, Computer Science Engineering in Finland for Indian Students, Computer Science Engineering in Finland Fees",
  introTitle: "Computer Science Engineering in Finland",
  heroParas: [
    "**Finland** is an attractive destination for international students pursuing **[Computer Science Engineering in Finland](/study-abroad/finland/computer-science)**. Renowned for world-class computing facilities, cutting-edge software research, artificial intelligence, and digital innovation, Finnish universities combine theoretical knowledge with practical learning and industry-oriented projects."
  ],
  overview: [
    "A **Bachelor’s or Master’s in Computer Science Engineering in Finland** provides a solid foundation for careers in software development, IT engineering, artificial intelligence, cybersecurity, and data science. Many programmes are offered 100% in English, making Finland an ideal destination for Indian students.",
    "**Edu-Hawk Worldwide** helps students explore suitable universities, understand admission requirements, compare tuition fees and scholarships, and prepare successful applications for studying in Finland."
  ],
  level: "Bachelor’s & Master’s",
  crumb: "Engineering & Technology",

  stats: [
    { label: "Degree Awarded", value: "B.Sc. (Tech) / M.Sc. (Tech)" },
    { label: "Course Duration", value: "3 Yrs (UG) / 2 Yrs (MS) / 5 Yrs (3+2)" },
    { label: "Top Institutions", value: "Oulu, Aalto, UEF, Helsinki, LUT" },
    { label: "Indicative Fees", value: "€10,000 – €17,000 / Year (~₹10.86L – ₹18.46L)" }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "1. Why Study Computer Science Engineering in Finland?",
      groups: [
        {
          t: "p",
          items: [
            "Finland is an attractive destination for students interested in computer science, software development, artificial intelligence, cybersecurity and digital technologies. Finnish universities combine theoretical knowledge with practical learning, research projects and modern computing facilities. Students can develop skills in programming, algorithms, computer systems, data science and emerging technologies.",
            "A **Bachelor’s in Computer Science Engineering in Finland** can provide a strong foundation for careers in software development, IT engineering, artificial intelligence and information technology. Many programmes are available in English, making Finland an option for international students, including students from India.",
            "Finland is known globally for its technology ecosystem, digital innovation and research in computing. Students pursuing postgraduate studies can explore advanced areas such as artificial intelligence, machine learning, software systems, cybersecurity, computer networks and data science.",
            "A **Master’s in Computer Science Engineering in Finland** can help graduates deepen their technical knowledge, develop research skills and prepare for specialised roles in the technology industry. Most relevant English-taught programmes take two years and require 120 ECTS credits. **Edu-Hawk Worldwide** helps students compare universities, understand eligibility requirements, review tuition fees and prepare applications for international study."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Specialisations",
      title: "2. Computer Science Engineering Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "**Bachelor’s Programmes** related to computer science and engineering generally take three years and involve approximately 180 ECTS credits. Some combined degree pathways allow students to continue directly into a master’s degree (3 + 2 years, 300 ECTS) after completing bachelor’s requirements.",
            "**Master’s Programmes** in computer science and related engineering fields allow students to specialise in particular technical areas, typically requiring 2 years and 120 ECTS credits.",
            "Popular study areas across undergraduate and postgraduate programmes include:"
          ]
        },
        {
          t: "ul",
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
            "Software Systems and Information Technology"
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
      title: "3. Top Universities for Computer Science Engineering in Finland",
      desc: "Finland's leading research universities offering world-class Bachelor's and Master's programmes in Computer Science and Engineering:",
      unis: [
        {
          name: "University of Oulu",
          location: "Oulu, Finland",
          desc: "Offers a Bachelor's and Master's in Computer Science and Engineering focusing on computing, programming, artificial intelligence, machine learning, and cybersecurity. Follows a combined 3 + 2 year structure (180 ECTS bachelor's + 120 ECTS master's).",
          fee: "€10,000 / Year (~₹10.86 Lakh)",
          duration: "3 + 2 Years (UG + PG)",
          exams: "SAT (for UG) / Bachelor's in CS (for PG), English proficiency",
          features: [
            "Degree: Bachelor of Science (Technology) & Master of Science (Technology)",
            "Language: English-taught",
            "Orientations in AI, Applied Computing, Computer Engineering & Cybersecurity"
          ],
          img: ouluImg,
          link: "https://www.oulu.fi/en/apply/bachelors-computer-science-and-engineering"
        },
        {
          name: "Aalto University",
          location: "Espoo, Greater Helsinki, Finland",
          desc: "Offers a Computer Engineering pathway at bachelor's level (hardware/software integration, embedded systems, microelectronics) and a world-renowned Master's Programme in Computer Science through the School of Science.",
          fee: "€12,000 / Year (UG) | €17,000 / Year (PG)",
          duration: "3 + 2 Years (Combined) or 2 Years (MS)",
          exams: "Academic merit, Mathematics background, English test",
          features: [
            "Top-ranked Finnish institution for computing systems, algorithms and AI",
            "Direct industry linkages with Espoo innovation and startup hubs",
            "State-of-the-art supercomputing and software laboratories"
          ],
          img: aaltoImg,
          link: "https://www.aalto.fi/en/study-options/computer-science-master-of-science-technology"
        },
        {
          name: "University of Eastern Finland (UEF)",
          location: "Joensuu / Kuopio, Finland",
          desc: "Offers a combined Bachelor's and Master's Degree Programme in Information Technology providing a strong foundation in computer science, software systems, and data-driven computing.",
          fee: "€10,000 / Year (~₹10.86 Lakh)",
          duration: "3 + 2 Years (180 + 120 ECTS)",
          exams: "Upper secondary qualification, English proficiency",
          features: [
            "Combined pathway with smooth progression into Master's level",
            "Generous early-bird tuition fee discounts available for international students",
            "Focus on software development, computing systems and modern IT"
          ],
          img: uefImg,
          link: "https://www.uef.fi/en/degree-programme/bachelors-and-masters-degree-programme-in-information-technology"
        },
        {
          name: "University of Helsinki",
          location: "Helsinki, Finland",
          desc: "Offers a Master's Programme in Computer Science with study tracks in algorithms, networks, and software. Renowned for computer science theory, secure digital services, and advanced AI research.",
          fee: "€15,000 / Year (~₹16.29 Lakh)",
          duration: "2 Years (120 ECTS)",
          exams: "Bachelor's in CS/related field, English proficiency",
          features: [
            "Study tracks: Algorithms, Networks, and Software Systems",
            "Historic university with global research standing",
            "Collaborations with Finnish Center for Artificial Intelligence (FCAI)"
          ],
          img: helsinkiImg,
          link: "https://www.helsinki.fi/en/degree-programmes/computer-science-masters-programme"
        },
        {
          name: "LUT University",
          location: "Lappeenranta / Lahti, Finland",
          desc: "Offers a Master's Programme in Software Engineering focusing on software engineering practices, software architecture, modern DevOps, and complex system engineering.",
          fee: "€15,000 / Year (~₹16.29 Lakh)",
          duration: "2 Years (120 ECTS)",
          exams: "Bachelor's in Engineering/Technology, English proficiency",
          features: [
            "Degree: Master of Science in Technology",
            "Practical focus on engineering methods and scalable software design",
            "High graduate employment rate in Nordic technology enterprises"
          ],
          img: lutImg,
          link: "https://www.lut.fi/en/studies/technology/masters-programmes-technology/masters-programme-software-engineering"
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Requirements",
      title: "4. Eligibility & Admission Requirements",
      groups: [
        {
          t: "p",
          items: [
            "**Requirements for Bachelor’s Programmes:**",
            "Students applying for a bachelor’s programme generally need:",
            "• A recognised secondary school qualification equivalent to Finnish upper secondary education (Class 12).",
            "• Completion of the required subjects (especially Mathematics and Physics/Science) for the selected programme.",
            "• Proof of English proficiency (IELTS, TOEFL, or university-accepted equivalent), if required.",
            "• SAT or another accepted admission qualification, where specified by the university (e.g. University of Oulu requires SAT for applicants using schooling qualifications other than IB/EB/Finnish credentials).",
            "• Academic documents meeting the institution’s requirements.",
            "**Requirements for Master’s Programmes:**",
            "Applicants for postgraduate studies generally need:",
            "• A recognised bachelor’s degree in Computer Science, Computer Engineering, Software Engineering, Information Technology or a closely related discipline.",
            "• Sufficient prior coursework in programming, algorithms, mathematics and relevant computing subjects.",
            "• Academic performance that meets the university’s admission criteria.",
            "• Proof of English-language proficiency, if required.",
            "• Curriculum vitae (CV), Statement of Purpose / Motivation letter, and academic recommendation letters where requested.",
            "**Edu-Hawk Worldwide** can help students shortlist suitable programmes, review application requirements and organise documents before submission."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living",
      title: "5. Cost of Studying Computer Science Engineering in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The total cost depends on the degree level, university, and city. Non-EU/EEA students generally pay tuition fees for English-taught degree programmes in Finland. Indicative currency conversion used: €1 ≈ ₹108.60.",
            "**Estimated Annual Tuition Fees (Bachelor’s & Master’s)**"
          ]
        },
        {
          t: "table",
          headers: ["University", "Level / Programme", "Annual Fee in EUR", "Approximate Fee in INR"],
          rows: [
            ["University of Oulu", "Bachelor's / Master's (CSE)", "€10,000", "₹10.86 lakh"],
            ["Aalto University", "Bachelor's in Computer Engineering", "€12,000", "₹13.03 lakh"],
            ["Aalto University", "Master's in Computer Science", "€17,000", "₹18.46 lakh"],
            ["University of Eastern Finland", "Bachelor's & Master's in IT/CS", "€10,000", "₹10.86 lakh"],
            ["University of Helsinki", "Master's in Computer Science", "€15,000", "₹16.29 lakh"],
            ["LUT University", "Master's in Software Engineering", "€15,000", "₹16.29 lakh"]
          ]
        },
        {
          t: "p",
          items: [
            "**Estimated Monthly Living Expenses for Students in Finland**"
          ]
        },
        {
          t: "table",
          headers: ["Expense Category", "Monthly Cost in EUR", "Approximate Monthly Cost in INR"],
          rows: [
            ["Accommodation", "€300 – €700", "₹32,580 – ₹76,020"],
            ["Food and groceries", "€200 – €350", "₹21,720 – ₹38,010"],
            ["Local transport", "€40 – €80", "₹4,344 – ₹8,688"],
            ["Personal expenses", "€100 – €200", "₹10,860 – ₹21,720"],
            ["Estimated Total Monthly Budget", "€640 – €1,330", "₹69,504 – ₹1,44,438"]
          ]
        },
        {
          t: "p",
          items: [
            "Actual living costs depend on the city (Helsinki and Espoo tend to be slightly higher than Oulu, Kuopio, or Lappeenranta), accommodation choices, and lifestyle. Students should also budget for student health insurance, residence permit fees, and study materials."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions",
      title: "6. Admission Process for Computer Science Engineering in Finland",
      groups: [
        {
          t: "step",
          num: "01",
          title: "Choose Your Programme",
          desc: "Compare bachelor's or master's degrees, course specialisations, research orientations, and tuition fees across Finnish universities."
        },
        {
          t: "step",
          num: "02",
          title: "Check Academic Eligibility",
          desc: "Review prerequisites (Class 12 for UG, relevant bachelor's degree with computing and mathematics coursework for PG) and any required entrance or SAT qualifications."
        },
        {
          t: "step",
          num: "03",
          title: "Prepare Your Documents",
          desc: "Compile official marksheets, degree certificates, valid passport, English language test results, CV, and statement of purpose."
        },
        {
          t: "step",
          num: "04",
          title: "Submit Your Application",
          desc: "Apply through Finland's centralized portal Studyinfo.fi or the university's designated admissions portal during the intake window (typically December to January)."
        },
        {
          t: "step",
          num: "05",
          title: "Check Scholarships & Tuition Waivers",
          desc: "Review early-bird discounts and merit-based tuition fee waiver opportunities offered by Finnish institutions."
        },
        {
          t: "step",
          num: "06",
          title: "Accept Offer & Enrol",
          desc: "Confirm your study place according to university instructions, pay the required tuition deposit, and obtain official acceptance."
        },
        {
          t: "step",
          num: "07",
          title: "Student Residence Permit & Travel",
          desc: "Apply for your Finnish student residence permit via Enter Finland, arrange student housing (such as HOAS, PSOAS), health insurance, and plan travel."
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Careers & Licensing",
      title: "7. Licensing, Jobs & Salary After Computer Science in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Computer science and software engineering are generally not licensed professions in Finland. Graduates can apply for relevant jobs based on their qualifications, technical knowledge and practical experience.",
            "Valuable skills include programming languages, software architecture, cloud computing, artificial intelligence, data engineering, cybersecurity, distributed systems and DevOps. Internships, university projects and personal technical portfolios significantly improve employability.",
            "**Common Job Roles for Graduates:**"
          ]
        },
        {
          t: "ul",
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
    }
  ],

  faqs: [
    {
      q: "Can Indian students study Computer Science Engineering in Finland?",
      a: "Yes. Indian students can apply to English-taught bachelor’s and master's programmes if they meet the university’s academic, language and documentation admission requirements."
    },
    {
      q: "What is the duration of a bachelor’s degree in computer science in Finland?",
      a: "A typical bachelor’s degree takes three years and covers approximately 180 ECTS credits. Some universities offer a combined bachelor’s and master’s pathway lasting five years (300 ECTS), while standalone master's degrees take two years (120 ECTS)."
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
