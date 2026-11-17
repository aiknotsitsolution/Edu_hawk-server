import cmsData from "../../../../data/study_abroad/australia/architecture.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/Architecture/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/Architecture/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Australia/Architecture/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/Architecture/cta_bg.webp";

// University Campus Images
import adelaideImg from "../../../../Images/Abroad/Australia/Architecture/University_of_Adelaide.webp";
import melbImg from "../../../../Images/Abroad/Australia/Architecture/Melbourne_University.webp";
import curtinImg from "../../../../Images/Abroad/Australia/Architecture/Curtin_University.webp";
import unswImg from "../../../../Images/Abroad/Australia/Architecture/UNSW_Sydney.webp";

const page = {
  name: "Architecture",
  country: "Australia",
  slug: "architecture",
  title: "Study Architecture in Australia for Indian Students | Edu-Hawk Worldwide",
  description: "Study Architecture in Australia for Indian students. Learn about B.Arch, M.Arch pathways, top design schools (Adelaide, Melbourne, Curtin, UNSW), AACA accreditation, and licensing.",
  keywords: "Study Architecture in Australia for Indian Students Architecture Courses in Australia for Indian Students Bachelor of Architecture in Australia After 12th Master of Architecture in Australia for Indian Students Best Universities to Study Architecture in Australia Cost of Studying Architecture in Australia for Indian Students Architecture Admission Requirements in Australia Architecture Scholarships in Australia for Indian Students Study Architecture in Australia with IELTS Architecture Career Opportunities in Australia for International Students",
  introTitle: "Indian Students Studying Architecture in Australia",
  heroParas: [
    "Architecture is the study of building design, space planning, construction concept development, and the creation of environments that are safe, sustainable, esthetically pleasing, and functional."
  ],
  overview: [
    "Students can explore architectural design, building technology, construction techniques, urban planning, environmental sustainability, digital modeling, and the interaction between structures and their environments when studying architecture in Australia.",
    "The Bachelor of Architectural Studies, Bachelor of Design in Architecture, Master of Architecture, and specialized programs in landscape architecture, urban design, and sustainable building design are among the undergraduate and graduate architecture programs offered by Australian universities.",
    "Important Points",
    "Learn about building planning and architectural design.",
    "Recognize building technique and construction materials.",
    "Gain expertise in technical drawing and design presentation.",
    "Explore CAD, digital design tools, and 3D modeling.",
    "Examine energy-efficient structures and sustainable architecture.",
    "Comprehend construction principles and building laws.",
    "Examine landscape design and urban planning.",
    "Develop your ability to think creatively, solve problems, and manage projects."
  ],
  level: "Undergraduate & Master's",
  crumb: "Architecture & Built Environment",

  stats: [
    {
        "label": "Degree Options",
        "value": "Bachelor of Design & Master of Architecture"
    },
    {
        "label": "Course Duration",
        "value": "3 + 2 Years (5-Year Professional Pathway)"
    },
    {
        "label": "Top Architecture Schools",
        "value": "Adelaide, Melbourne, Curtin, UNSW"
    },
    {
        "label": "Accreditation",
        "value": "AACA & State Architects Registration Boards"
    }
],

  faqs: [
    {
        "q": "Is it possible for Indian students to study architecture in Australia?",
        "a": "Indeed. Subject to the academic, English language, portfolio, and other entrance standards of the university, qualified Indian students may apply to undergraduate and graduate architecture programs."
    },
    {
        "q": "How much time does it take to study architecture in Australia?",
        "a": "An authorized Master of Architecture typically requires two years following a suitable undergraduate degree, however many undergraduate degrees in architecture typically take three years. Each institution and entry road has a different exact duration."
    },
    {
        "q": "In Australia, is a bachelor's degree sufficient to work as an architect?",
        "a": "Not always. A suitable undergraduate degree, an approved Master of Architecture, pertinent real-world experience, the Architectural Practice Examination, and registration with the appropriate state or territory board are all typically required for the traditional professional pathway."
    },
    {
        "q": "Does studying architecture in Australia require taking the IELTS?",
        "a": "Generally speaking, international students must fulfill the English language criteria of the university of their choice. While there may be other tests or authorized exemptions, IELTS Academic is one widely recognized exam. Question 5. Are portfolios required for architectural courses in Australia? While some architecture programs might have different selection criteria, others might demand a design portfolio. Students should review the specific requirements for the course they have selected. Question 6. Can graduates of Indian architectural schools register as architects in Australia? Registration is not automatic, but it is possible. In addition to meeting extra academic, practical experience, examination, and registration requirements, their qualifications would need to be evaluated."
    }
],

  sections: [
    {
        "slot": "overview",
        "eyebrow": "Course Scope",
        "title": "Overview of the Course",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Architecture is the study of building design, space planning, construction concept development, and the creation of environments that are safe, sustainable, esthetically pleasing, and functional.",
                    "Students can explore architectural design, building technology, construction techniques, urban planning, environmental sustainability, digital modeling, and the interaction between structures and their environments when studying architecture in Australia.",
                    "The Bachelor of Architectural Studies, Bachelor of Design in Architecture, Master of Architecture, and specialized programs in landscape architecture, urban design, and sustainable building design are among the undergraduate and graduate architecture programs offered by Australian universities.",
                    "Important Points"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Learn about building planning and architectural design.",
                    "Recognize building technique and construction materials.",
                    "Gain expertise in technical drawing and design presentation.",
                    "Explore CAD, digital design tools, and 3D modeling.",
                    "Examine energy-efficient structures and sustainable architecture.",
                    "Comprehend construction principles and building laws.",
                    "Examine landscape design and urban planning."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Develop your ability to think creatively, solve problems, and manage projects."
                ]
            }
        ]
    },
    {
        "slot": "why",
        "eyebrow": "Why Australia",
        "title": "Why Study Architecture in Australia ?",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Study Architecture in Australia has integrate technical expertise, research, creative design, and hands-on project work. Students may take part in design studios, workshops, industry projects, research activities, and professional engagement possibilities, depending on the university.",
                    "Principal Advantages"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Gain a solid foundation in architectural design.",
                    "Learn how to design environments that are both esthetically pleasing and functional.",
                    "Examine contemporary building materials and technologies.",
                    "Recognize ecologically conscious and sustainable design.",
                    "Gain expertise in digital modeling and architectural software.",
                    "Acquire expertise through practical tasks and studio projects.",
                    "Examine the design of public, commercial, and residential buildings.",
                    "Recognize global urban development and architectural trends."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Students who like drawing, design, creativity, arithmetic, technology, problem-solving, and comprehending how structures affect people's lives can benefit from studying architecture.",
                    "Edu Hawk Worldwide Consultancy assists students in understanding university admission requirements, researching overseas study options, and getting ready for their international education journey."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Australia's Most Popular Architecture Courses",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Bachelor's in Architectural Studies"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Architectural design, design philosophy, construction principles, building technology, architectural history, and digital representation are all included in this undergraduate degree.",
                    "Depending on the university and course design, it could be the beginning of a lengthy academic route to professional architecture credentials."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Bachelor of Design in Architecture"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Design thinking, spatial planning, architectural principles, digital visualization, and the interaction between people and the built environment are the main topics of this study.",
                    "Students can investigate technical drawing, model-making, design studios, and sustainable design concepts."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Bachelor's in Architectural Science"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "The technical and scientific facets of structures, such as building performance, construction technology, environmental systems, and architectural design principles, are the main focus of this degree.",
                    "The institution determines the specific curriculum and alternatives for advancement."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Combined Bachelor of Architecture-Related Degree"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "In addition to architecture, several colleges offer courses in engineering, design, construction management, or real estate.",
                    "Although the study period may be lengthier, a combined degree may aid students in gaining a more comprehensive understanding of the built environment."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Master of Architecture"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Students who have earned a suitable undergraduate degree in architecture or an approved equivalent are eligible to pursue the Master of Architecture, a postgraduate degree.",
                    "Students may study advanced architectural design, professional practice, construction systems, sustainability, urban settings, and research-based design, depending on the curriculum.",
                    "In order to register as architects, students should confirm that the master's program in question is currently accredited for the planned career path."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Master of Landscape Architecture"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "The design of parks, outdoor settings, public places, landscapes, and urban green spaces is the main focus of this program.",
                    "Students might investigate sustainable development, ecological systems, landscape design, and environmental planning."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Master's in Urban Design"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "The planning and design of cities, neighborhoods, public areas, and urban settings are all examined in this postgraduate study.",
                    "It might address public infrastructure, transportation links, urban development, spatial planning, and sustainable communities."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Master of Built Environment or Sustainable Design"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Students may study climate-responsive design, green building principles, environmental performance, sustainable construction, and energy-efficient buildings, depending on the university.",
                    "Although graduates of these programs are not automatically eligible to register as architects, they might be appropriate for students interested in occupations related to sustainability.",
                    "Australian universities differ in terms of professional reputation, admission standards, and course titles."
                ]
            }
        ]
    },
    {
        "slot": "specializations",
        "eyebrow": "Specializations",
        "title": "Popular Specializations in Architecture",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Students may investigate the following topics, depending on the university and degree:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Architectural Design",
                    "The Architecture of Home",
                    "Commercial Building DesigN",
                    "Eco-Friendly Architecture",
                    "Architecture of the Landscape",
                    "Urban Planning",
                    "Interior Design",
                    "Construction Technology",
                    "Building and Material Research",
                    "The Architecture of Digital",
                    "BIM, or building information modeling",
                    "CAD, or computer-aided design",
                    "3D Visualization and Modeling",
                    "Conservation of Heritage",
                    "The Design of the Environment",
                    "Climate-Adaptive Design",
                    "Planning Urban Areas",
                    "Community Design and Housing",
                    "Design of Public Spaces",
                    "Architectural Theory and History",
                    "The Management of Construction",
                    "Intelligent Structures and Building Efficiency"
                ]
            },
            {
                "t": "p",
                "items": [
                    "While some courses are provided as electives, research areas, or specialized degrees, others are part of the main curriculum."
                ]
            }
        ]
    },
    {
        "slot": "section-6",
        "eyebrow": "Details",
        "title": "Qualifications for Students from India",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The university, course level, academic background, and portfolio criteria all affect admission requirements.",
                    "Eligibility for Undergraduate Architecture",
                    "In general, bachelor's degree applicants may require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Completing Class 12 successfully from an accredited Indian board.",
                    "Academic performance that satisfies the standards for admission to the university.",
                    "Evidence of English language competency, if necessary.",
                    "If required by the course, a design portfolio.",
                    "Prerequisites in mathematics or other subjects, if relevant.",
                    "A current passport and any necessary paperwork.",
                    "Extra selection materials, upon request."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Certain architecture-related courses may be open to students from several academic streams, but topic requirements differ. Certain programs can include prerequisites related to design, mathematics, or portfolios.",
                    "Eligibility for Postgraduate Architecture",
                    "In general, candidates for a Master of Architecture program might require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "A recognized bachelor's degree in architecture or an accepted comparable certificate.",
                    "Academic performance that satisfies the requirements of the course.",
                    "When necessary, a design portfolio showcasing prior work.",
                    "Evidence of English language competency.",
                    "A personal declaration or statement of intent, upon request.",
                    "A curriculum vitae or resume, if appropriate.",
                    "The university requires additional papers."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Not all undergraduates with degrees in architecture or design are eligible to enrolll in professional Master of Architecture programs. Candidates should verify any mandatory design courses and the necessary prior degree."
                ]
            }
        ]
    },
    {
        "slot": "language",
        "eyebrow": "Language Requirements",
        "title": "Language Requirements in English",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Generally speaking, international students must fulfill the English language criteria of the Australian university of their choice.",
                    "Tests that are frequently accepted include:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "IELTS Academic",
                    "The TOEFL iBT",
                    "PTE Academic",
                    "Other English language assessments that the organization accepts"
                ]
            },
            {
                "t": "p",
                "items": [
                    "For some university programs, an IELTS Academic score of roughly 6.5 overall may be utilized as a starting point for preparation. This isn't a general prerequisite, though. Higher marks, minimal performance in specific components, or different proof of English competence may be required for some courses.",
                    "Before applying, students should review the current prerequisites for the university, intake, and course they have chosen."
                ]
            }
        ]
    },
    {
        "slot": "exams",
        "eyebrow": "Entrance Exams",
        "title": "Exams for Admission and Selection Requirements",
        "groups": [
            {
                "t": "p",
                "items": [
                    "In Australia, there isn't a single entrance exam that is used for all architecture programs.",
                    "Academic achievement, English language skills, design aptitude, portfolio quality, and other course-specific requirements may be used by universities to evaluate applicants.",
                    "Depending on the organization, candidates can require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Academic performance in class 12 for entrance to undergraduate programs.",
                    "Results from a bachelor's degree for entrance to a postgraduate program.",
                    "The results of any necessary English language tests.",
                    "A portfolio of designs or artistic creations.",
                    "A personal or mission statement.",
                    "Certificates and academic transcripts.",
                    "An interview or further evaluation, if necessary.",
                    "The institution has sought additional documents."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Requirements for Portfolios"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "A portfolio showcasing creativity, visual communication, design thinking, or prior project experience is required for several architectural schools.",
                    "Depending on the requirements of the school, a portfolio may include drawings, sketches, models, design projects, photos of creative work, and digital presentations.",
                    "Institutions have different standards for portfolios. Regarding format, content, file size, and submission deadlines, students should adhere to the university's published guidelines."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Duration of the Course",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The length of an architecture course is determined by the degree, university, credit systems, and workload.",
                    "For many undergraduate pathways connected to architecture, a bachelor's degree typically takes three years.",
                    "After earning a suitable undergraduate degree, a master's degree in architecture typically takes two years, though this varies depending on the school and previous coursework.",
                    "Depending on the total number of qualifications, the combined degree could take four to six years or more.",
                    "These are not guaranteed lengths, but rather broad planning ranges. Students should verify whether the selected pathway aligns with their academic and professional objectives by consulting the official course information."
                ]
            }
        ]
    },
    {
        "slot": "fees",
        "eyebrow": "Tuition & Living Costs",
        "title": "Living Expenses and Tuition",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The university, degree, length of the course, city, and way of life all affect the total cost of studying architecture in Australia.",
                    "Principal Costs"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "The cost of tuition",
                    "Accommodations and utilities",
                    "Food and groceries",
                    "Public transportation",
                    "Overseas Student Health Coverage (OSHC)",
                    "Materials for architectural drawings and model-making",
                    "Design software and a laptop",
                    "Project costs, studio supplies, and printing",
                    "The cost of applying for a visa",
                    "Emergency and personal costs"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Additional costs for studio work, model-making, printing, software, and project submissions may be associated with architecture courses. These prices differ depending on the course and the institution.",
                    "The cost of tuition can vary significantly between colleges and between undergraduate and graduate programs. Students should determine the total cost of tuition for the duration of their studies by consulting the most recent international student fee schedule for the chosen course.",
                    "The city, lodging options, transportation needs, and individual spending patterns all affect living expenses. The present financial capacity requirements of the Australian government should be reviewed by students applying for a student visa."
                ]
            }
        ]
    },
    {
        "slot": "scholarships",
        "eyebrow": "Scholarships",
        "title": "Indian Students Scholarships",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Indian students who meet the requirements may be able to apply for financial aid or scholarships provided by Australian universities.",
                    "Potential choices include of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Merit grants for international students",
                    "Awards for academic excellence",
                    "Scholarships tailored to a particular faculty",
                    "Scholarships in architecture or design, if offered",
                    "Reductions in tuition fees specific to courses",
                    "Scholarships for postgraduate research students who meet the requirements",
                    "Scholarships from outside sources are offered to qualified candidates."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Institutions differ in terms of scholarship eligibility, grant amounts, application dates, and renewal requirements. While some scholarships require a separate application, others are evaluated automatically.",
                    "Students should verify whether a scholarship covers tuition, living expenses, or other educational costs, as well as whether it is applicable to their selected architecture degree and intake."
                ]
            }
        ]
    },
    {
        "slot": "careers",
        "eyebrow": "Career Opportunities",
        "title": "Career opportunities",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Opportunities in architectural design, building, urban development, design consulting and the broader built-environment industry may be explored by architecture graduates.",
                    "Possible Career Routes"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Architectural Assistant",
                    "When the position and title are suitable, a graduate architect",
                    "Architectural Designer",
                    "Assistant for Building Design",
                    "A CAD specialist",
                    "Technician for Building Information Modeling (BIM)",
                    "A specialist in 3D visualization",
                    "Architectural Drafting Expert",
                    "Assistant for Urban Design",
                    "Assistant for Landscape Design",
                    "Consultant for Sustainable Design",
                    "Analyst of Building Performance",
                    "Coordinator of the Design Project",
                    "Coordinator of Construction Projects",
                    "Assistant for Heritage and Conservation",
                    "When suitably qualified, an interior architect"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Certain positions demand a certain level of education, experience, registration, or professional title. Graduates should review the prerequisites for the jobs they want to pursue.",
                    "Sectors to explore"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Design and architecture firms",
                    "Building and real estate development",
                    "Urban development and planning",
                    "Consultancies for engineering and design",
                    "Design of interiors and landscapes",
                    "Designing sustainable structures and environments",
                    "Planning departments of the government",
                    "Infrastructure and real estate",
                    "Conservation of cultural heritage",
                    "Digital design and building technologies",
                    "Construction consultancy and project management",
                    "Higher education and research"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Qualifications, real-world experience, portfolio quality, software proficiency, communication, employer demands, and labor market conditions all affect career prospects. Obtaining a degree does not ensure employment, professional registration, or successful immigration."
                ]
            }
        ]
    },
    {
        "slot": "admission",
        "eyebrow": "Step-by-Step Guide",
        "title": "Admission Procedure",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Step 1: Determine Your Learning Objectives",
                    "Choose whether you wish to specialize in a related topic like urban design or sustainable architecture, seek a professional architecture degree after graduation, or continue studying architecture after Class 12.",
                    "Step 2: Choose the Correct Qualification",
                    "Based on your educational background and professional goals, compare undergraduate architecture degrees, graduate architecture programs, and relevant built-environment courses.",
                    "Step 3: Make a University Shortlist",
                    "Examine professional accreditation, tuition costs, campus locations, studio amenities, design specializations, and course format.",
                    "Step 4: Verify Your Qualifications",
                    "Examine postgraduate admission standards, portfolio requirements, English language proficiency requirements, and academic prerequisites.",
                    "Step 5: Get Your Documents Ready",
                    "Gather academic credentials, transcripts, passport information, English test scores, portfolio materials, and any other supporting documentation that the university requests.",
                    "Step 6: Send in Your Application",
                    "Apply via an approved application channel or the university's official application portal.",
                    "Step 7: Examine the Offer",
                    "Verify the terms of admission, the start date of the course, the cost of tuition, the due dates for payments, and the qualifications for enrollment.",
                    "Step 8: Fulfill Enrollment Conditions",
                    "Accept the offer and finish the necessary paperwork and payment processes.",
                    "Step 9: If necessary, apply for a student visa",
                    "Prepare the required supporting documentation and adhere to the current Australian Government visa application procedure.",
                    "Step 10: Make a Study and Career Plan",
                    "Plan your trip, lodging, health insurance, money, and pre-departure needs. Before enrolling in the course, confirm the accreditation and registration process if your objective is to become a registered architect."
                ]
            }
        ]
    },
    {
        "slot": "documents",
        "eyebrow": "Checklist",
        "title": "Documents Needed",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Candidates may require the following, depending on the university and qualification:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "A valid passport",
                    "Certificates in Classes 10 and 12 for undergraduate programs",
                    "Certificate of bachelor's degree for postgraduate applications",
                    "Academic records",
                    "The results of any necessary English language tests",
                    "If necessary, a design portfolio",
                    "A personal statement or a declaration of intent, if requested",
                    "a curriculum vitae or resume, if appropriate",
                    "If necessary, proof of relevant work experience",
                    "Financial records in order to obtain a visa",
                    "When necessary for a student visa, Confirmation of Enrollment (CoE)",
                    "Evidence of overseas student health coverage",
                    "Extra documentation that the university or other appropriate authorities seek"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Each course and school has different needs for documents. Before the pertinent deadlines, students should submit accurate documents and adhere to the official application checklist."
                ]
            }
        ]
    },
    {
        "slot": "visa",
        "eyebrow": "Visa Requirements",
        "title": "Student Visa for Australia",
        "groups": [
            {
                "t": "p",
                "items": [
                    "In general, Indian students must fulfill the conditions for the Australian student visa (subclass 500) in order to enrolll in an authorized course.",
                    "Requirements could include the following, depending on the applicant's circumstances:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Verification of Enrollment Records",
                    "Proof that satisfies the Genuine Student criterion",
                    "Proof of financial capability",
                    "Evidence in the English language, if applicable",
                    "Health Coverage for International Students",
                    "Requirements for character and health",
                    "Identity records and corroborating documentation"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Financial criteria, processing times, documentation requirements, and visa fees are subject to change. Before filing an application, students should visit the official website of the Australian Department of Home Affairs.",
                    "Acceptance into an architecture program does not ensure that a visa will be granted. Additionally, professional registration as an architect is not provided by a student visa alone."
                ]
            }
        ]
    },
    {
        "slot": "assistance",
        "eyebrow": "Consultancy Support",
        "title": "How Edu Hawk Worldwide Can Assist",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Edu Hawk Worldwide Consultancy provides individualized course shortlisting and admission assistance to Indian students who are considering studying abroad.",
                    "Our assistance may consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Examining educational background and professional objectives.",
                    "Making a short selection of appropriate built-environment and architectural curricula.",
                    "Comparing tuition costs, course lengths, and universities.",
                    "Assisting pupils in comprehending academic and English language requirements.",
                    "Describe the requirements for the portfolio and the application process.",
                    "Educating students on the distinctions between professional master's degrees and undergraduate degrees in architecture.",
                    "Assisting students with the application process.",
                    "Assisting candidates in comprehending enrollment requirements and admissions offers.",
                    "Giving general advice on pre-departure planning and visa paperwork.",
                    "Before choosing a course, students are encouraged to confirm professional certification and registration pathways."
                ]
            },
            {
                "t": "p",
                "items": [
                    "We assist students in exploring the educational options that complement their long-term professional goals, budgetary plans, design interests, and academic background."
                ]
            }
        ]
    }
],

  universitiesEyebrow: "Institutions",
  universitiesTitle: "Top Universities in Australia to Explore",
  universitiesIntro: "Indian students can explore the following leading universities and institutions in Australia.",
  universities: [
    {
      name: "University of Adelaide",
      location: "Adelaide, South Australia",
      image: adelaideImg,
      desc: "Historic architecture school known for design innovation and sustainable urbanism."
    },
    {
      name: "Melbourne School of Design (University of Melbourne)",
      location: "Melbourne, Victoria",
      image: melbImg,
      desc: "Globally ranked architectural design, structural technology, and landscape studios."
    },
    {
      name: "Curtin University",
      location: "Perth, Western Australia",
      image: curtinImg,
      desc: "Accredited architecture curriculum with state-of-the-art digital fabrication labs."
    },
    {
      name: "UNSW Built Environment (Sydney)",
      location: "Sydney, New South Wales",
      image: unswImg,
      desc: "World-renowned architecture and computational design programs in Sydney."
    }
  ]
};

export default function ArchitectureAustralia() {
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
    />
  );
}