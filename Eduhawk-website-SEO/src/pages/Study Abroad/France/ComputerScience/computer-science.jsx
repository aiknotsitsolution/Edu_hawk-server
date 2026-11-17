import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/ComputerScience/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/ComputerScience/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/ComputerScience/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/ComputerScience/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/ComputerScience/Paris.webp";
import uniImg2 from "../../../../Images/Abroad/France/ComputerScience/University_of_Grenoble_Alpes.webp";
import uniImg3 from "../../../../Images/Abroad/France/ComputerScience/Sorbonne_University.webp";
import cmsData from "../../../../data/study_abroad/france/computer_science.json";

const page = {
  name: "Computer Science in France",
  country: "France",
  slug: "study-abroad/france/computer-science",
  title: "Study Computer Science in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Computer Science in France for Indian students: Top French universities, admission requirements, tuition fees (€178 – €3,950 / year public), scholarships, and 2-year post-study work visa.",
  keywords: "Studying Computer Science in France, France Computer Science Courses, Top universities for UG and PG in Computer Science in France, Bachelor’s Degree in Computer Science in France, Master’s Degree in Computer Science in France, Eligibility criteria to study computer science in France, Computer Science in France Admission Requirements, Computer Science Jobs and Career Opportunities in France",
  introTitle: "COMPUTER SCIENCE IN FRANCE",
  heroParas: [
    "Studying Computer Science in France offers international students world-class academic training across programming, artificial intelligence, cybersecurity, cloud computing, and software engineering. French public universities, Grandes Écoles, and CTI-accredited institutes deliver cutting-edge undergraduate Licence (BSc) and postgraduate Master’s programs closely integrated with European tech giants and leading research laboratories."
  ],
  overview: [
    "France is home to one of Europe's most dynamic digital ecosystems, combining rigorous mathematical foundations with practical, industry-driven computer science education. Students can pursue standard academic pathways starting with a 3-year Licence Informatique (180 ECTS) or enter directly into 2-year Master of Science (120 ECTS) and 5-year Diplôme d'Ingénieur programs with a relevant undergraduate degree.",
    "French universities maintain strong research partnerships with national institutes like Inria, CNRS, and CEA, as well as European technology leaders (Dassault Systèmes, Thales, Capgemini, Atos, and Ubisoft) and global hubs like Station F in Paris. Programs emphasize project-based learning, research seminars, and mandatory 4-to-6-month enterprise internships.",
    "With affordable public university tuition fees, extensive English-taught Master's degrees, and a 2-year post-study work visa (APS/RECE) for Indian graduates, France is a premier destination for aspiring tech professionals. EduHawk Worldwide provides end-to-end consultancy for university shortlisting, portfolio preparation, Campus France interviews, and visa processing."
  ],
  level: "Bachelor of Science (Licence / BSc) & Master of Science (MSc / Diplôme d'Ingénieur) in Computer Science",
  crumb: "Technology / Computer Science",
  stats: [
    {
      label: "Degree Choices",
      value: "Licence (BSc), Master (MSc) & Diplôme d'Ingénieur"
    },
    {
      label: "Course Duration",
      value: "3 Years (UG / 180 ECTS) | 2 Years (PG / 120 ECTS)"
    },
    {
      label: "Top Institutions",
      value: "Université Paris-Saclay, Université Grenoble Alpes, Sorbonne Université"
    },
    {
      label: "Post-Study Work",
      value: "2-Year APS / RECE Post-Study Work Permit"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why France",
      title: "Why Study Computer Science in France?",
      desc: "France offers exceptional technological infrastructure, high-caliber scientific faculties, and deep integration with Europe's thriving software, artificial intelligence, and startup sectors.",
      items: [
        "Academic & Research Excellence: Benefit from world-leading mathematics and computing faculties affiliated with Inria, CNRS, and top European laboratories.",
        "Cutting-Edge Specializations: Access advanced tracks in artificial intelligence, machine learning, data science, cybersecurity, cloud architectures, and quantum computing.",
        "Industry-Oriented Pedagogy: Curriculum combines core algorithmic rigor with live coding capstones, research projects, and mandatory industrial internships.",
        "Thriving Tech & Startup Hub: Direct connections to Station F (the world's largest startup campus in Paris) and major technology corporations across Europe.",
        "Affordable Public Tuition: Highly subsidized national university tuition rates (€178/year for Licence, €255/year for Master's, or €2,902 – €3,950 for non-EU students).",
        "Progression to Doctoral Studies: A national Master’s degree or CTI engineering diploma grants direct eligibility for funded PhD research and CIFRE industrial doctorates.",
        "2-Year Post-Study Work Visa: Indian graduates holding a Master's degree in France can secure a 2-year post-study work permit (APS/RECE) to seek employment across the European Union."
      ]
    },
    {
      slot: "courses",
      eyebrow: "Program Structure",
      title: "France Computer Science Courses: UG & PG Pathways",
      desc: "French higher education provides diverse computer science pathways tailored to both theoretical research and applied industry deployment.",
      groups: [
        {
          title: "Undergraduate Computer Science (Licence / BUT Informatique)",
          desc: "The standard undergraduate qualification is the 3-year Licence Informatique (180 ECTS credits), balancing computational theory and software engineering. Practical-oriented Bachelor Universitaire de Technologie (BUT Informatique) tracks are also available.",
          items: [
            "Software Development & Object-Oriented Programming (Java, C++, Python)",
            "Data Structures, Algorithms & Computational Complexity",
            "Discrete Mathematics, Linear Algebra & Combinatorics",
            "Computer Architecture & Low-Level Hardware Systems",
            "Operating Systems (Linux/Unix internals, Process Management & Concurrency)",
            "Information Systems, Relational Databases & SQL/NoSQL",
            "Computer Networking & Internet Protocols (TCP/IP, Socket Programming)",
            "Web Development, Mobile Applications & Agile Software Engineering"
          ]
        },
        {
          title: "Postgraduate Computer Science (Master's / Diplôme d'Ingénieur)",
          desc: "A national Master's degree spans 2 years (120 ECTS) over the M1 and M2 cycles, with specialized tracks taught extensively in English for international students.",
          items: [
            "Artificial Intelligence & Machine Learning: Deep learning, natural language processing (NLP), reinforcement learning, and neural network architectures.",
            "Big Data & Data Science: Distributed data processing (Spark, Hadoop), predictive modeling, statistical learning, and data pipelines.",
            "Software Engineering & Systems Architecture: Enterprise software design, microservices, DevOps, CI/CD pipelines, and software verification.",
            "Information Security & Cybersecurity: Cryptographic protocols, ethical hacking, network defense, secure code development, and digital forensics.",
            "Computer Networks & Distributed Systems: Distributed algorithms, cloud networking, peer-to-peer systems, and fault-tolerant computing.",
            "Cloud Computing & High-Performance Computing (HPC): Containerization (Docker, Kubernetes), serverless computing, and parallel supercomputing architectures.",
            "Robotics & Computer Vision: Image analysis, 3D scene reconstruction, visual SLAM algorithms, and autonomous robotics perception.",
            "Human-Computer Interaction (HCI): User experience (UX) engineering, interactive multimodal interfaces, and cognitive design.",
            "Quantum Computing & Information: Quantum algorithms, quantum cryptographic protocols, and qubit computation models.",
            "Theoretical Computer Science (TCS): Formal language theory, automata, computability, and algorithmic game theory."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top Universities for UG and PG in Computer Science in France",
      desc: "The following distinguished French universities and Grandes Écoles offer internationally recognized computer science programs at undergraduate and postgraduate levels:",
      unis: [
        {
          name: "Université Paris-Saclay",
          city: "Gif-sur-Yvette (Paris)",
          state: "Île-de-France",
          desc: "Ranked among the world's premier universities for mathematics and science, Paris-Saclay offers top-ranked Licence Informatique and master's tracks in AI, data science, cybersecurity, distributed systems, and quantum computing.",
          img: uniImg1
        },
        {
          name: "Université Grenoble Alpes (UGA)",
          city: "Grenoble",
          state: "Auvergne-Rhône-Alpes",
          desc: "Leading European technological research hub offering the prestigious Master of Science in Informatics at Grenoble (MoSIG) taught entirely in English, backed by Inria, Ensimag, and CNRS laboratories.",
          img: uniImg2
        },
        {
          name: "Sorbonne Université",
          city: "Paris",
          state: "Île-de-France",
          desc: "Historic research powerhouse in central Paris offering world-class undergraduate scientific tracks and master's programs in software engineering, computational data science, and theoretical computing research.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility Criteria to Study Computer Science in France",
      desc: "Admission criteria depend on the degree level (UG vs. PG), language of instruction, and the student's previous academic preparation.",
      groups: [
        {
          title: "Undergraduate (Licence / BUT) Eligibility",
          items: [
            "Academic Qualification: Completion of 10+2 / Higher Secondary School Certificate equivalent to the French Baccalauréat (minimum 65% – 70% aggregate).",
            "Subject Background: Strong academic performance in Mathematics and Physics or Computer Science.",
            "Language Proficiency: DELF B2 certificate required for French-taught tracks; IELTS 6.0+ or TOEFL iBT 75+ required for English-taught bachelor's programs."
          ]
        },
        {
          title: "Postgraduate (Master's / Diplôme d'Ingénieur) Eligibility",
          items: [
            "Academic Qualification: Recognized Bachelor’s degree (BTech, BE, BSc Computer Science, IT, BCA, Software Engineering, or Mathematics).",
            "Foundational Coursework: Academic preparation in Algorithms, Data Structures, Linear Algebra, Calculus, Databases, Operating Systems, and Networking.",
            "English Language Proficiency: For English-taught tracks, minimum score of IELTS 6.5+ (no band below 6.0) or TOEFL iBT 85+ (CEFR B2/C1).",
            "French Language Skills: DELF/DALF B2 required only if applying for programs taught in French."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Living Costs",
      title: "Computer Science Tuition Fees & Living Expenses in France",
      desc: "Tuition fees in France are highly competitive due to substantial government subsidies for public higher education.",
      groups: [
        {
          title: "Public University Reference Tuition Fees (2026–2027 Academic Year)",
          items: [
            "Undergraduate (Licence): €178 per year for EU/EEA students; €2,902 per year for Non-EU students under differentiated fee regulations.",
            "Postgraduate (National Master's): €255 per year for EU/EEA students; €3,950 per year for Non-EU students (partial/full fee waivers available at participating universities).",
            "Grandes Écoles & Specialized Engineering Schools: €6,000 to €15,000 per academic year depending on the institution.",
            "CVEC Student Contribution: Approximately €103 per year (mandatory campus life contribution)."
          ]
        },
        {
          title: "Cost of Living & Housing Subsidies",
          items: [
            "Monthly Living Budget: €800 – €1,100 in student cities like Grenoble, Lyon, Toulouse, and Strasbourg; €1,200 – €1,600 in Paris.",
            "CAF Housing Allowance: All international students can apply for French government housing assistance (CAF/APL), reducing monthly rent by 30% to 40%.",
            "Scholarship Opportunities: International students can apply for the French Eiffel Excellence Scholarship, Charpak Master's Scholarship, Erasmus+ grants, and university merit waivers."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions Roadmap",
      title: "Admission Procedure for Computer Science in France",
      desc: "Follow this structured 10-step roadmap to navigate applications and student visa formalities smoothly:",
      steps: [
        {
          num: "1",
          title: "Choose Degree Level & Specialization",
          desc: "Decide between an undergraduate Licence/BUT or a specialized Master's program in AI, cybersecurity, software engineering, or data science."
        },
        {
          num: "2",
          title: "Shortlist Target Universities",
          desc: "Compare public universities, Grandes Écoles, teaching languages, lab affiliations, and post-study employment statistics."
        },
        {
          num: "3",
          title: "Verify Academic & Language Eligibility",
          desc: "Ensure your math/programming background meets entry prerequisites and register early for IELTS, TOEFL, or DELF."
        },
        {
          num: "4",
          title: "Check the Application Channel",
          desc: "Determine whether to apply through Parcoursup (UG 1st year), Études en France (Campus France), or directly via university online portals."
        },
        {
          num: "5",
          title: "Prepare Application Dossier",
          desc: "Gather academic transcripts, degree certificates, CV, Statement of Purpose (SOP), recommendation letters, and coding portfolio."
        },
        {
          num: "6",
          title: "Submit Official Applications",
          desc: "Complete your online application and submit all required documents prior to institutional intake deadlines."
        },
        {
          num: "7",
          title: "Attend Academic Interviews",
          desc: "Complete virtual technical assessments or motivation interviews if requested by the department admissions panel."
        },
        {
          num: "8",
          title: "Review & Accept Admission Offer",
          desc: "Verify admission conditions, confirm your acceptance, and pay initial registration or tuition deposits."
        },
        {
          num: "9",
          title: "Campus France & Visa Formalities",
          desc: "Schedule the Études en France academic interview, assemble financial guarantees, and apply for the Long-Stay Student Visa (VLS-TS)."
        },
        {
          num: "10",
          title: "Arrival & University Enrollment",
          desc: "Secure accommodation, validate your visa online with OFII upon arrival in France, register for French healthcare, and apply for CAF rent subsidy."
        }
      ]
    },
    {
      slot: "recognition",
      eyebrow: "Degree Standards",
      title: "Recognition and European Academic Framework",
      desc: "French higher education degrees in computer science comply with the European Bologna Process, guaranteeing seamless global recognition.",
      items: [
        "Licence Informatique: 3-year bachelor's degree awarding 180 ECTS credits, fully recognized across Europe and internationally.",
        "Diplôme National de Master (DNM): 2-year postgraduate qualification awarding 120 ECTS credits, granting international equivalence and doctoral research access.",
        "Diplôme d'Ingénieur: 5-year integrated or 3-year post-bachelor engineering degree accredited by the CTI (Commission des Titres d'Ingénieur) and EUR-ACE label.",
        "MSc & Mastère Spécialisé: Industry-focused advanced Master's degrees accredited by the Conférence des Grandes Écoles (CGE)."
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Computer Science Salary and Job Opportunities in France",
      desc: "Graduates of French computer science programs are in high demand across tech companies, financial institutions, telecommunications, defense, and consulting firms.",
      groups: [
        {
          title: "Undergraduate (Licence / BUT) Career Roles",
          items: [
            "Junior Software Developer / Programmer",
            "Front-End / Back-End Web Developer",
            "Software Quality Assurance (QA) & Test Automation Engineer",
            "IT Technical Support & Systems Technician",
            "Junior Database Administrator / Data Analyst"
          ]
        },
        {
          title: "Postgraduate (Master's / Diplôme d'Ingénieur) Career Roles",
          items: [
            "Software Engineer & Systems Architect",
            "Data Scientist & Big Data Engineer",
            "Artificial Intelligence & Machine Learning Engineer",
            "Cybersecurity Consultant & Ethical Hacker",
            "Cloud Infrastructure & DevOps Engineer",
            "Computer Vision & Robotics Perception Engineer",
            "R&D Engineer & Doctoral (PhD) Researcher"
          ]
        },
        {
          title: "Salary Expectations & Work Authorization",
          items: [
            "Entry-Level Graduate Salaries: Typically range from €38,000 to €48,000 gross per year for Master's/engineering graduates.",
            "Mid-Level & Specialist Salaries: Software architects, AI engineers, and cybersecurity specialists earn between €55,000 and €80,000+ per year with 3 to 5 years of experience.",
            "2-Year Post-Study Work Visa (APS/RECE): Indian Master’s graduates are eligible for a 2-year post-study work permit to search for employment or launch a technology startup in France."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Expert Guidance",
      title: "How EduHawk Worldwide Consultancy Helps You Study in France",
      desc: "EduHawk Worldwide offers complete, personalized end-to-end guidance for Indian students aspiring to study Computer Science in France.",
      items: [
        "University & Program Shortlisting: Identifying top-ranked French public universities and Grandes Écoles aligned with your technical focus and career goals.",
        "Dossier & SOP Optimization: Professional assistance in crafting technical statements of purpose, computing CVs, and recommendation letters.",
        "Campus France Interview Coaching: In-depth preparation for the Études en France academic assessment and motivation interview.",
        "Visa Application Support: Comprehensive assistance with financial documentation, blocked accounts, and VFS visa appointment booking.",
        "Pre-Departure & Housing Assistance: Help with securing CROUS or private student accommodation, CAF rent allowance guidance, and travel briefing."
      ]
    }
  ],
  faqs: [
    {
      q: "How long does Computer Science take at UG and PG levels in France?",
      a: "A standard undergraduate Licence (BSc) usually lasts 3 years (180 ECTS credits). Following a relevant bachelor’s degree, a national Master’s degree typically takes 2 years (120 ECTS credits). Integrated engineering programs (Diplôme d'Ingénieur) take 5 years from high school or 2 to 3 years after a bachelor's."
    },
    {
      q: "Can international students study Computer Science in English in France?",
      a: "Yes. Many French universities, engineering schools, and Grandes Écoles offer Master’s programs in computer science, artificial intelligence, data science, and cybersecurity taught entirely in English. While most undergraduate Licence programs are taught in French, an increasing number of English-taught bachelor's tracks are available."
    },
    {
      q: "What is the tuition fee for Computer Science in France?",
      a: "For the 2026–2027 academic year, public university tuition fees are €178/year for a Licence and €255/year for a Master’s for EU students. Under differentiated fee regulations, non-EU students typically pay €2,902/year for a Licence and €3,950/year for a Master’s, though many universities offer fee exemptions. Private engineering schools charge between €6,000 and €15,000/year."
    },
    {
      q: "What are the best universities to study Computer Science in France?",
      a: "Top institutions include Université Paris-Saclay (ranked #1 in France for mathematics and computer science), Université Grenoble Alpes (famous for its MoSIG program), Sorbonne Université in Paris, and Université de Strasbourg. Students should compare specific curricula, research laboratories, teaching language, and admission criteria."
    },
    {
      q: "Can you pursue a Master's in France after completing an undergraduate degree in Computer Science?",
      a: "Yes. Students holding a recognized 3-year or 4-year bachelor’s degree (BTech, BE, BSc Computer Science/IT, BCA) with solid foundational coursework in mathematics, algorithms, and programming are eligible to apply for postgraduate master's programs in France."
    }
  ]
};

export default function ComputerScienceinFrancePage() {
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

  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    unis: [
      {
        name: "Université Paris-Saclay",
        city: "Gif-sur-Yvette (Paris)",
        state: "Île-de-France",
        desc: "Ranked among the world's premier universities for mathematics and science, Paris-Saclay offers top-ranked Licence Informatique and master's tracks in AI, data science, cybersecurity, distributed systems, and quantum computing.",
        img: uniImg1
      },
      {
        name: "Université Grenoble Alpes (UGA)",
        city: "Grenoble",
        state: "Auvergne-Rhône-Alpes",
        desc: "Leading European technological research hub offering the prestigious Master of Science in Informatics at Grenoble (MoSIG) taught entirely in English, backed by Inria, Ensimag, and CNRS laboratories.",
        img: uniImg2
      },
      {
        name: "Sorbonne Université",
        city: "Paris",
        state: "Île-de-France",
        desc: "Historic research powerhouse in central Paris offering world-class undergraduate scientific tracks and master's programs in software engineering, computational data science, and theoretical computing research.",
        img: uniImg3
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
