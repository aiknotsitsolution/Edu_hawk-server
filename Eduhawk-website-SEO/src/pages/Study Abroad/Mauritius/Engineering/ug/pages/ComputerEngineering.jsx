import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/cta_bg.webp";

// University images
import uniImg1 from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/image1.png";
import uniImg2 from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/image2.png";
import uniImg3 from "../../../../../../Images/Abroad/Mauritius/Engineering_UG/Computer/image3.png";
import cmsData from "../../../../../../data/study_abroad/mauritius/ug_computer-engineering.json";

const page = {
  "name": "Computer Engineering (UG)",
  "country": "Mauritius",
  "slug": "ug/computer-engineering",
  "title": "Computer Engineering (UG) in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Computer Engineering (UG) in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Computer Engineering (UG) in Mauritius, Computer Engineering (UG) in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Computer Engineering (UG) Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Computer Engineering (UG) in Mauritius for Indian Students",
  "heroParas": [
    "A **Bachelor\u2019s in Computer Engineering in Mauritius for Indian Students** can be a good option for students interested in computer hardware, software, embedded systems, digital electronics, computer architecture and intelligent devices. The course combines engineering principles with computing to prepare students for careers in technology, electronics, telecommunications and computer systems. Students who want to **Study Computer Engineering in Mauritius** can explore the available undergraduate programme and compare its curriculum with their career goals."
  ],
  "overview": [
    "One directly relevant option is the BTech Computer Engineering programme at VIT Mauritius, which lists an August 2026 intake and tuition fees of \u20ac5,000 per year. Students should confirm the latest intake, degree-awarding arrangements and complete fee schedule before applying."
  ],
  "level": "B.Eng / B.Sc. Computer Engineering",
  "crumb": "Engineering / UG Engineering",
  "stats": [
    {
      "val": "MUR 150K-350K",
      "label": "Tuition / Year"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "Bilingual & English Degrees",
      "desc": "Study in English with recognized qualifications from national institutions and global UK/Australian branch campuses."
    },
    {
      "icon": "FaGraduationCap",
      "title": "Affordable Tuition & Living",
      "desc": "High quality tertiary education with tuition fees and living costs substantially lower than Western Europe."
    },
    {
      "icon": "FaFileAlt",
      "title": "Safe & Multicultural Island",
      "desc": "Consistently ranked as the safest and most politically stable nation in Africa with close cultural ties to India."
    },
    {
      "icon": "FaCheckCircle",
      "title": "Simplified Visa Process",
      "desc": "Streamlined student visa procedures arranged directly through recognized higher education institutions."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Mauritius",
      "title": "Why Study Computer Engineering in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Hardware and software knowledge:** Learn how computer systems are designed, programmed and integrated.",
            "**Practical engineering:** Develop skills through laboratory sessions, technical projects and applied learning.",
            "**Emerging technologies:** Explore embedded systems, networking, automation and intelligent computing.",
            "**International environment:** Study in a multicultural setting with access to regional and international education options.",
            "**Career flexibility:** Prepare for opportunities in computer systems, electronics, software, telecommunications and related technical fields.",
            "**Further study:** Progress to a master\u2019s degree in computer engineering, computer science, robotics or another relevant specialisation.",
            "Before choosing a university, compare the actual curriculum carefully. A degree in computer science or software engineering is related to computer engineering, but may offer less emphasis on electronics and hardware. Students planning to **Study Computer Engineering in Mauritius** should check the course content before selecting a programme."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Computer Engineering Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Computer Engineering Courses in Mauritius** generally combine mathematics, computing, electronics and systems design."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Subject area",
            "What you may study"
          ],
          "rows": [
            [
              "Computer architecture",
              "Processors, memory and computer organisation"
            ],
            [
              "Programming",
              "Programming languages, algorithms and software development"
            ],
            [
              "Digital electronics",
              "Logic circuits, digital systems and hardware fundamentals"
            ],
            [
              "Embedded systems",
              "Microcontrollers and hardware-software integration"
            ],
            [
              "Computer networks",
              "Communication systems, network protocols and connectivity"
            ],
            [
              "Operating systems",
              "System resources, processes and software-hardware interaction"
            ],
            [
              "Engineering mathematics",
              "Calculus, algebra, statistics and technical modelling"
            ],
            [
              "Final-year projects",
              "Designing, implementing and testing engineering solutions"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact modules, laboratory facilities and internship requirements depend on the university and degree structure."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Computer Engineering in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Computer Engineering (UG) programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": ". VIT Mauritius",
          "location": ". VIT Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a four-year Bachelor of Engineering (Honours) in Computer Engineering, with related specialisations in Data Science and Artificial Intelligence and Machine Learning. The programme includes programming, electrical and electronics engineering, embedded systems and a final-year project or internship.",
          "img": uniImg1
        },
        {
          "name": ". University of Mauritius",
          "location": ". University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers related computing and engineering programmes, including Computer Science, Applied Computing and Software Engineering. These are alternatives to investigate if you are open to a computing-focused degree rather than a dedicated computer engineering qualification.",
          "img": uniImg2
        },
        {
          "name": ". University of Technology, Mauritius",
          "location": ". University of Technology, Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Students can investigate related technology and computing courses. Confirm the current programme catalogue before treating any course as a direct computer engineering degree. VIT Mauritius is the clearest direct computer engineering option identified in the official programme listings. The University of Mauritius and University of Technology, Mauritius, are included as related alternatives, not as confirmed providers of the same degree. Students comparing **Computer Engineering Universities in Mauritius** should distinguish dedicated computer engineering degrees from related computing programmes.",
          "img": uniImg3
        }
      ],
      "unis_data": [
        {
          "name": ". VIT Mauritius",
          "location": ". VIT Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers a four-year Bachelor of Engineering (Honours) in Computer Engineering, with related specialisations in Data Science and Artificial Intelligence and Machine Learning. The programme includes programming, electrical and electronics engineering, embedded systems and a final-year project or internship.",
          "img": uniImg1
        },
        {
          "name": ". University of Mauritius",
          "location": ". University of Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Offers related computing and engineering programmes, including Computer Science, Applied Computing and Software Engineering. These are alternatives to investigate if you are open to a computing-focused degree rather than a dedicated computer engineering qualification.",
          "img": uniImg2
        },
        {
          "name": ". University of Technology, Mauritius",
          "location": ". University of Technology, Mauritius",
          "fee": "MUR 160,000 \u2013 350,000 / Year",
          "desc": "Students can investigate related technology and computing courses. Confirm the current programme catalogue before treating any course as a direct computer engineering degree. VIT Mauritius is the clearest direct computer engineering option identified in the official programme listings. The University of Mauritius and University of Technology, Mauritius, are included as related alternatives, not as confirmed providers of the same degree. Students comparing **Computer Engineering Universities in Mauritius** should distinguish dedicated computer engineering degrees from related computing programmes.",
          "img": uniImg3
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study Computer Engineering in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Computer Engineering Eligibility in Mauritius** for the B.Eng. (Hons) Computer Engineering programme at VIT Mauritius includes:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of Class 12 or an equivalent qualification.",
            "Mathematics and Physics as compulsory subjects.",
            "A third subject from Chemistry, Computer Science, Electronics or Biotechnology.",
            "At least 45% aggregate in the specified subjects.",
            "English studied at higher-secondary level or education in an English-medium school.",
            "An equivalency marks card where required."
          ]
        },
        {
          "t": "p",
          "items": [
            "Requirements may change, so confirm your eligibility with the admissions office before applying."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Computer Engineering in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Computer Engineering Admission Requirements in Mauritius** should be checked before submitting an application. Applicants should prepare to provide:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 and Class 12 certificates and mark sheets.",
            "Proof of Mathematics and Physics qualifications.",
            "Evidence of English-language study, if requested.",
            "Passport and identity documents for international applicants.",
            "An equivalency or grading document, where required.",
            "Application forms and any additional documents requested by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should also confirm the application deadline, seat availability, scholarship eligibility and the exact degree-awarding institution."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Computer Engineering in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Computer Engineering Fees in Mauritius** depend on the university, programme and applicable student category. The published tuition fee at VIT Mauritius is \u20ac5,000 per year, payable in two instalments. The programme is four years long. The following conversions are estimates for planning, using illustrative exchange rates of \u20ac1 \u2248 MUR 51 and \u20ac1 \u2248 \u20b9105; actual rates will fluctuate.",
            "**Estimated tuition fee**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "\u20ac5,000 per year"
          ]
        },
        {
          "t": "p",
          "items": [
            "**In Mauritian rupees**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MUR 255,000",
            "Per year, approximately"
          ]
        },
        {
          "t": "p",
          "items": [
            "**In Indian rupees**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "\u20b95.25 lakh",
            "Per year, approximately"
          ]
        },
        {
          "t": "p",
          "items": [
            "**Estimated tuition for the full four-year degree**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "MUR 1,020,000",
            "Approximately MUR 10.2 lakh",
            "\u20b921 lakh",
            "Approximately INR 21 lakh"
          ]
        },
        {
          "t": "p",
          "items": [
            "These figures cover tuition only, not living expenses or other charges."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Additional expense",
            "What to budget for"
          ],
          "rows": [
            [
              "Application and registration",
              "Confirm the latest charges with the university"
            ],
            [
              "Accommodation",
              "Hostel or private rental"
            ],
            [
              "Food and groceries",
              "Monthly living expenses"
            ],
            [
              "Local transport",
              "Public transport and commuting"
            ],
            [
              "Study materials",
              "Laptop, books and engineering equipment"
            ],
            [
              "Insurance and travel",
              "Health cover, flights and student-entry expenses"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "VIT Mauritius also advertises merit-based and need-based scholarships. Ask whether you qualify and whether the award changes the published tuition fee. Students comparing **Computer Engineering Fees in Mauritius** should confirm the complete fee schedule and scholarship conditions directly with the university."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process for Computer Engineering in Mauritius",
      "groups": [
        {
          "t": "ul",
          "items": [
            "**Select your programme:** Choose Computer Engineering or a related specialisation.",
            "**Check eligibility:** Ensure your Class 12 subjects and marks meet the entry requirements.",
            "**Confirm accreditation:** Verify the programme and awarding body through the relevant higher-education authority.",
            "**Calculate the budget:** Include tuition, accommodation, living expenses and travel.",
            "**Prepare documents:** Collect academic records, passport details and any equivalency documents.",
            "**Apply online:** Use the university's official admissions portal.",
            "**Review your offer:** Confirm tuition instalments, scholarships, course duration and enrolment conditions."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options After Computer Engineering",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree, graduates may consider postgraduate study in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Computer Engineering",
            "Computer Science",
            "Artificial Intelligence and Machine Learning",
            "Data Science",
            "Robotics and Automation",
            "Embedded Systems",
            "Cybersecurity",
            "Internet of Things (IoT)",
            "Computer Networks",
            "Electronics and Communication Engineering"
          ]
        },
        {
          "t": "p",
          "items": [
            "Entry requirements depend on the master's programme and the student's academic background."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities After Computer Engineering",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may pursue opportunities in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Computer hardware and systems engineering",
            "Embedded systems development",
            "Software and systems programming",
            "Network engineering",
            "Electronics and digital systems",
            "Robotics and automation",
            "Artificial intelligence and data technologies",
            "Cybersecurity",
            "Technical research and product development",
            "IT infrastructure and systems integration"
          ]
        },
        {
          "t": "p",
          "items": [
            "Practical projects, internships and relevant technical certifications can help students develop job-ready skills. Employment opportunities depend on experience, employer requirements and work authorisation."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required to Apply",
      "groups": [
        {
          "t": "p",
          "items": [
            "Prepare the following documents, subject to the university's official checklist:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 and Class 12 certificates.",
            "Academic mark sheets and transcripts.",
            "Proof of Mathematics and Physics subjects.",
            "English-medium or English-language evidence, if required.",
            "Equivalency marks card, where applicable.",
            "Passport-size photographs.",
            "Completed application form.",
            "Scholarship application documents, if applying.",
            "Any additional documents requested by admissions staff."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": ". VIT Mauritius",
      "location": ". VIT Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers a four-year Bachelor of Engineering (Honours) in Computer Engineering, with related specialisations in Data Science and Artificial Intelligence and Machine Learning. The programme includes programming, electrical and electronics engineering, embedded systems and a final-year project or internship.",
      "img": uniImg1
    },
    {
      "name": ". University of Mauritius",
      "location": ". University of Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Offers related computing and engineering programmes, including Computer Science, Applied Computing and Software Engineering. These are alternatives to investigate if you are open to a computing-focused degree rather than a dedicated computer engineering qualification.",
      "img": uniImg2
    },
    {
      "name": ". University of Technology, Mauritius",
      "location": ". University of Technology, Mauritius",
      "fee": "MUR 160,000 \u2013 350,000 / Year",
      "desc": "Students can investigate related technology and computing courses. Confirm the current programme catalogue before treating any course as a direct computer engineering degree. VIT Mauritius is the clearest direct computer engineering option identified in the official programme listings. The University of Mauritius and University of Technology, Mauritius, are included as related alternatives, not as confirmed providers of the same degree. Students comparing **Computer Engineering Universities in Mauritius** should distinguish dedicated computer engineering degrees from related computing programmes.",
      "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Computer Engineering (UG) in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Computer Engineering (UG) in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Computer Engineering (UG) in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ComputerEngineeringUGMauritius() {
  const dynamicPage = {
    ...page,
    name: cmsData.hero?.title || page.name,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value }))
      : page.stats,
    seo: {
      title: cmsData.seo?.title || page.title,
      description: cmsData.seo?.description || page.description,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/mauritius/ug/computer-engineering"
    />
  );
}
