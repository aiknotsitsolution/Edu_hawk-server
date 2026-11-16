import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Denmark/Architecture/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Denmark/Architecture/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Denmark/Architecture/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Denmark/Architecture/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Denmark/Architecture/image1.png";
import uniImg2 from "../../../../Images/Abroad/Denmark/Architecture/image2.png";
import uniImg3 from "../../../../Images/Abroad/Denmark/Architecture/image3.png";

const page = {
  "name": "Architecture",
  "country": "Denmark",
  "slug": "architecture",
  "title": "Architecture in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Architecture in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Architecture in Denmark, Architecture in Denmark for Indian Students, Best Universities in Denmark, Denmark Architecture Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Architecture in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Architecture in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Architecture."
  ],
  "level": "Bachelor & Master of Architecture",
  "crumb": "Architecture",
  "stats": [
    {
      "val": "DKK 60K-130K",
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
      "val": "20 Hrs/Week",
      "label": "Part-Time Work"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World Top-100 Universities",
      "desc": "Study in globally respected Danish institutions including University of Copenhagen, DTU, and Aarhus University."
    },
    {
      "icon": "FaGraduationCap",
      "title": "Innovative PBL Learning",
      "desc": "Problem-Based Learning model focusing on collaborative projects, real-world applications, and critical analysis."
    },
    {
      "icon": "FaFileAlt",
      "title": "High Living Standard & Safety",
      "desc": "Denmark consistently ranks among the happiest, safest, and most progressive countries in the world."
    },
    {
      "icon": "FaCheckCircle",
      "title": "Post-Study Work Visa",
      "desc": "Non-EU graduates are eligible for post-study residence permits to seek employment and build global careers."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Denmark",
      "title": "Why study Architecture in Denmark???",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark is an attractive destination for students who are interested in architecture, sustainable design, urban planning and innovative solutions in building. Danish architecture is characterized by functionality, minimalism, environmental responsibility and human-focused spaces.",
            "Students in Denmark who study architecture can learn how buildings and cities are designed to fit modern ways of living, as well as coping with sustainability and climate change. Students can look into architectural design, construction technology, landscape integration and urban development.",
            "Choosing **Architecture in Denmark** gives students an opportunity to explore sustainable architectural practices, modern design concepts and innovative construction approaches.",
            "Key benefits are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "exposure to sustainable and modern design in architecture",
            "Studio learning and design practice projects.",
            "Opportunities to explore urban planning and green buildings.",
            "Development of skills in technical drawing, visualization and problem solving.",
            "Career preparation in architecture, design and the built environment."
          ]
        },
        {
          "t": "p",
          "items": [
            "**Edu-Hawk Worldwide** helps students explore hospitality and tourism study options, understand university requirements and plan their study-abroad applications"
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Denmark Architecture Courses",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Architecture education is available in Denmark at Bachelor and Master level, and program names and admission routes vary between institutions. Students exploring **Architecture courses in Denmark** can consider different academic pathways according to their interests and qualifications.",
            "Bachelor-level programs and pathways may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Architecture & Architectural Design",
            "Construction Management and Architectural Technology",
            "Design & Construction \\- Building",
            "Fundamentals of Urban Design",
            "Sustainable Building Design",
            "Spatial and Landscape Design"
          ]
        },
        {
          "t": "p",
          "items": [
            "Master\u2019s programs can include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "M.Arch. (Master of Architecture)",
            "Design Architecture",
            "Sustainable Architecture",
            "Planning and Urban Design",
            "Landscape Architecture",
            "Environmental Design and Building Technology",
            "Computational Design and Digital Architecture",
            "Conservation and Reuse of Heritage"
          ]
        },
        {
          "t": "p",
          "items": [
            "A bachelor\u2019s degree or professional route in architecture can take three to five years depending on the institution and qualification. Usually, master's programs are two years long. Students should verify the structure of the program and whether a relevant degree in architecture is a prerequisite.",
            "The availability and duration of **Architecture courses in Denmark** can vary depending on the university, degree level and specialization selected by the student."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities and Institutions to Study Architecture in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Architecture programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Copenhagen (UCPH)",
          "location": "Copenhagen, Denmark",
          "fee": "DKK 65,000 \u2013 120,000 / Year",
          "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
          "img": uniImg1
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Kongens Lyngby, Denmark",
          "fee": "DKK 75,000 \u2013 115,000 / Year",
          "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
          "img": uniImg2
        },
        {
          "name": "Aarhus University (AU)",
          "location": "Aarhus, Denmark",
          "fee": "DKK 60,000 \u2013 110,000 / Year",
          "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
          "img": uniImg3
        },
        {
          "name": "Aalborg University (AAU)",
          "location": "Aalborg, Denmark",
          "fee": "DKK 58,000 \u2013 105,000 / Year",
          "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg2
        }
      ],
      "unis_data": [
        {
          "name": "University of Copenhagen (UCPH)",
          "location": "Copenhagen, Denmark",
          "fee": "DKK 65,000 \u2013 120,000 / Year",
          "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
          "img": uniImg1
        },
        {
          "name": "Technical University of Denmark (DTU)",
          "location": "Kongens Lyngby, Denmark",
          "fee": "DKK 75,000 \u2013 115,000 / Year",
          "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
          "img": uniImg2
        },
        {
          "name": "Aarhus University (AU)",
          "location": "Aarhus, Denmark",
          "fee": "DKK 60,000 \u2013 110,000 / Year",
          "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
          "img": uniImg3
        },
        {
          "name": "Aalborg University (AAU)",
          "location": "Aalborg, Denmark",
          "fee": "DKK 58,000 \u2013 105,000 / Year",
          "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "Odense, Denmark",
          "fee": "DKK 62,000 \u2013 115,000 / Year",
          "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
          "img": uniImg2
        }
      ],
      "note": [
        "Tuition fees are indicative and subject to annual review by Danish higher education institutions.",
        "EU/EEA students may study tuition-free; international fees apply to non-EU/EEA citizens."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility for the Denmark Architecture Study",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning to study **Architecture in Denmark** should understand the academic qualifications, language requirements and portfolio criteria specified by their chosen institution. Checking **Architecture eligibility in Denmark** before selecting a program can help applicants understand the qualifications needed for admission.",
            "Applicants typically require:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "12th Pass or equivalent.",
            "Academic results that meet the institution's entry requirements.",
            "Mandatory subjects if required by the program.",
            "English language proficiency (if required) for English-taught programs",
            "Danish language proficiency for Danish taught programs.",
            "Portfolio, entrance assignment or aptitude assessment (if required)."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants normally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized architecture or closely related Bachelor degree.",
            "Relevant academic background in architectural design and related fields.",
            "A design portfolio that showcases creative and technical skill.",
            "English language skills, if required.",
            "Other project documentation or interview as appropriate."
          ]
        },
        {
          "t": "p",
          "items": [
            "Architecture programs can have very particular admissions requirements, especially for portfolios and prior design education.",
            "The **Architecture eligibility in Denmark** for bachelor's and master's applicants may differ according to the selected institution and program. Students should also confirm their academic qualifications and portfolio suitability when reviewing **Architecture eligibility in Denmark**."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Denmark Architecture Admission requirements",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "At the bachelor level, institutions may consider school qualifications, design aptitude, portfolio and language skills. Some schools of architecture use creative assignments or other selection procedures.",
            "Master's applicants usually need to submit a bachelor's degree certificate, transcripts and a portfolio of architectural projects. Some programs may also ask for a CV, motivation letter, course descriptions or evidence of relevant professional experience.",
            "Before applying, applicants are advised to verify if their prior degree is relevant to the Master's program they intend to apply for.",
            "Understanding the **Architecture admission requirements in Denmark** helps students prepare their academic documents, portfolios and language test results before submitting an application. The **Architecture admission requirements in Denmark** may include additional assessments, interviews or creative assignments depending on the institution. Applicants should carefully review the latest **Architecture admission requirements in Denmark** before completing their university applications."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Architecture Studies in Denmark: Cost",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Here are some approximate planning estimates for Indian students. The actual fees will vary between institutions and courses. Students comparing **Architecture fees in Denmark** should consider tuition fees, accommodation, daily expenses and additional academic costs."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Price",
            "Bachelor's",
            "Master's"
          ],
          "rows": [
            [
              "Tuition fees per annum",
              "\u20b96-15 lakhs",
              "\u20b98-18 lakhs"
            ],
            [
              "Monthly living expenses",
              "\u20b980,000 \u2013 \u20b91.30 lakh",
              "\u20b980,000 \u2013 \u20b91.30 lakh"
            ],
            [
              "Cost of living per year",
              "\u20b99.6 \\- 15.6 lakh",
              "\u20b99.6 \\- 15.6 lakh"
            ],
            [
              "Typical Length",
              "3-5 years, depending on pathway",
              "About 2 years"
            ],
            [
              "Estimated total budget",
              "\u20b947 lakh\u2013\u20b91.53 crore",
              "\u20b935\u201370 lakhs"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The bachelor\u2019s is a wide estimate and factors in various potential program lengths, but is not an official fee quote. The actual costs will vary depending on your tuition and living arrangements.",
            "Students should also allow for design materials, model making, specialist software, printing, travel and other academic costs. Eligible applicants may apply for scholarships and tuition-fee exemptions.",
            "The overall **Architecture fees in Denmark** depend on the selected university, program duration and living arrangements. Students should compare tuition and estimated living expenses while planning their budgets. Reviewing the **Architecture fees in Denmark** in advance can help Indian students prepare a realistic financial plan."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to get admission in Architecture in Denmark",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process for **Architecture in Denmark** generally involves selecting a suitable program, checking eligibility and preparing the required application documents.",
            "Select a program: Choose a degree in architecture, architectural design, or a related field of the built environment. Compare available **Architecture courses in Denmark** to identify a program that matches your academic interests.",
            "Eligibility Check: Check academic requirements, language of instruction and portfolio requirements.",
            "Build a portfolio. Include selected design projects, drawings, models, creative work and project explanations as needed.",
            "Gather documents: Prepare academic transcripts, certificates, passport details and language test results, if required.",
            "Send the application: Apply via the university\u2019s official admission portal.",
            "Conduct assessments: If requested, attend interviews or submit design assignments.",
            "Receive the decision on admission: Review the offer and the conditions.",
            "Organize travel and immigration: Follow the relevant Danish student residence-permit process and get accommodation.",
            "Students can also seek guidance from **Edu-Hawk Worldwide** to understand program selection, application preparation and the study-abroad admission process."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Accreditation and Professional Recognition",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Before registering, check that the institution is recognized and that the exact qualification awarded is given. In some countries architecture is a controlled profession and a degree that allows for progression within academia does not necessarily also allow for professional registration.",
            "Students who plan to apply for registration as licensed architects in Denmark or India should investigate the professional requirements, recognition of degrees, supervised experience and registration procedures before choosing a program."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities in Architecture",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can pursue careers with architecture firms, construction companies, property development, urban planning and sustainable design.",
            "Possible job titles include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Architectural Designer (Architectural Design)",
            "Architect Junior",
            "Architectural Assistant",
            "Design Consultant \u2013 Sustainability",
            "Assistant in Urban Design",
            "BIM Modeler or Coordinator Architectural Visualizer Building Design Consultant Landscape Design Professional Construction Project Coordinator"
          ]
        },
        {
          "t": "p",
          "items": [
            "Career progression is based on qualifications, portfolio quality, technical skills, practical experience and professional registration requirements."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents",
      "lead": "Essential details regarding architecture in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "ul",
          "items": [
            "Passport valid",
            "Marksheets of Class 10 and Class 12",
            "Certificate of School Leaving",
            "Mandatory courses and grade certificates",
            "English-language test results, if needed",
            "Portfolio of design or entrance task, as required",
            "Letter of Motivation (if required)",
            "Certified translations where applicable"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A valid passport",
            "Certificate of Bachelor Degree",
            "Academic records",
            "Portfolio of design or architecture",
            "CV or resume update",
            "Statement of purpose or motivation letter English-language test results (if required)",
            "Recommendation Letters, if applicable",
            "Course descriptions or documentation of professional experience, if any"
          ]
        },
        {
          "t": "p",
          "items": [
            "Additional residence permit and financial documents may be required after admission."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Copenhagen (UCPH)",
      "location": "Copenhagen, Denmark",
      "fee": "DKK 65,000 \u2013 120,000 / Year",
      "desc": "Denmark's oldest and highest-ranking research university, renowned for world-class biomedical, life science, and humanities research.",
      "img": uniImg1
    },
    {
      "name": "Technical University of Denmark (DTU)",
      "location": "Kongens Lyngby, Denmark",
      "fee": "DKK 75,000 \u2013 115,000 / Year",
      "desc": "Leading European polytechnic institution specializing in high-impact engineering, sustainable technology, and computer sciences.",
      "img": uniImg2
    },
    {
      "name": "Aarhus University (AU)",
      "location": "Aarhus, Denmark",
      "fee": "DKK 60,000 \u2013 110,000 / Year",
      "desc": "Top-100 global comprehensive university offering cutting-edge programs in sciences, business, healthcare, and engineering.",
      "img": uniImg3
    },
    {
      "name": "Aalborg University (AAU)",
      "location": "Aalborg, Denmark",
      "fee": "DKK 58,000 \u2013 105,000 / Year",
      "desc": "Internationally acclaimed for its Problem-Based Learning (PBL) model and world-leading engineering, IT, and environmental programs.",
      "img": uniImg1
    },
    {
      "name": "University of Southern Denmark (SDU)",
      "location": "Odense, Denmark",
      "fee": "DKK 62,000 \u2013 115,000 / Year",
      "desc": "Modern comprehensive institution renowned for robotics, health sciences, and cross-disciplinary innovation.",
      "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can the Indian students study Architecture in Denmark after Class 12?",
      "a": "Yes, if they meet the entry requirements of the chosen architecture or related bachelor\u2019s program. A portfolio or design assessment is required by some institutions."
    },
    {
      "q": "Q2. How long is the Architecture study in Denmark?",
      "a": "Time is according to the qualification. Some undergraduate courses last for three years, and professional architecture education may take longer. Master\u2019s programs are usually about two years long."
    },
    {
      "q": "Q3. Is portfolio required for architecture admission?",
      "a": "Most architecture courses will require a portfolio or some kind of creative assessment, especially if you are applying for a masters level course. Requirements vary by school."
    },
    {
      "q": "Q4. What is the cost of studying Architecture in Denmark?",
      "a": "The tuition fees and living costs will depend on the university, and also on the length of the course. \\*Use the estimates above as a rough guide, and verify fees with the institution directly."
    },
    {
      "q": "Q5. After finishing my graduation in Denmark, am I eligible to work as an architect in India?",
      "a": "Perhaps, but professional registration is subject to applicable Indian recognition and qualification requirements. You might want to check with the Council of Architecture in India if you want to be professionally registered before you enroll."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ArchitectureDenmark() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/denmark/architecture"
    />
  );
}
