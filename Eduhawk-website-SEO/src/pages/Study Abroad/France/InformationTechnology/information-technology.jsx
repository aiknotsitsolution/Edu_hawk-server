import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/France/InformationTechnology/hero.webp";
import heroBgImg from "../../../../Images/Abroad/France/InformationTechnology/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/France/InformationTechnology/side.webp";
import ctaBgImg from "../../../../Images/Abroad/France/InformationTechnology/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/France/InformationTechnology/Sorbonne_University.webp";
import uniImg2 from "../../../../Images/Abroad/France/InformationTechnology/Grenoble_Alpes_University_Grenoble.webp";
import uniImg3 from "../../../../Images/Abroad/France/InformationTechnology/Paris.webp";

const page = {
  name: "Information Technology in France",
  country: "France",
  slug: "study-abroad/france/information-technology",
  title: "Study Information Technology in France for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Information Technology in France for Indian students: Top French universities, admission requirements, tuition fees (€255 – €3,950 / year public), scholarships, and 2-year post-study work visa.",
  keywords: "Study Information Technology in France for Indian Students, Postgraduate Information Technology Courses in France for International Students, Best Universities for Information Technology PG in France, Master’s Degree in Information Technology in France, Information Technology PG Eligibility Requirements in France, Information Technology Admission Requirements for Indian Students, Information Technology PG Tuition Fees in France, Cost of Studying Information Technology in France, English-Taught Information Technology Master's Programmes in France, Data Science and Artificial Intelligence Courses in France, Information Technology at Sorbonne Université and Université Grenoble Alpes, Information Technology Jobs and Career Opportunities in France",
  introTitle: "INFORMATION TECHNOLOGY IN FRANCE",
  heroParas: [
    "Studying Information Technology in France equips international students with high-level technical expertise across software engineering, cybersecurity, cloud infrastructure, enterprise information systems, and artificial intelligence. French universities and elite engineering schools provide internationally recognized Master's and Diplôme d'Ingénieur degrees combining academic rigor with extensive industrial internships and research partnerships."
  ],
  overview: [
    "France is home to one of Europe's most vibrant digital economies, backed by government initiatives like French Tech and massive innovation campuses like Station F in Paris and Sophia Antipolis in the French Riviera. International students can pursue postgraduate IT programs offered under diverse specializations such as Computer Science, Informatics, Information Systems Management, Software Engineering, and Cloud Architecture.",
    "French public universities, Grandes Écoles, and CTI-accredited engineering schools offer an increasing number of Master's curricula taught entirely in English. Programs emphasize project-based pedagogy, software capstones, and mandatory 4-to-6-month enterprise internships, connecting students directly with global technology firms, defense contractors, and financial institutions.",
    "With affordable public university tuition fees, extensive scholarship schemes, and a 2-year post-study work permit (APS/RECE) for Indian graduates, France provides an outstanding pathway for launching an international tech career. EduHawk Worldwide consultancy offers comprehensive end-to-end guidance from university shortlisting and dossier preparation to Campus France interviews and visa processing."
  ],
  level: "Bachelor & Master in Information Technology & Systems (Licence / MSc / Diplôme d'Ingénieur)",
  crumb: "Technology / Information Technology",
  stats: [
    {
      label: "Degree Choices",
      value: "Master of Science (MSc) & Diplôme d'Ingénieur"
    },
    {
      label: "Course Duration",
      value: "1 to 2 Years (M1 + M2 / 120 ECTS)"
    },
    {
      label: "Top Institutions",
      value: "Sorbonne Université, Université Grenoble Alpes, Paris-Saclay"
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
      title: "Why Study Information Technology in France?",
      desc: "Information Technology studies in France combine rigorous scientific fundamentals with hands-on enterprise deployment across Europe's leading technological clusters.",
      items: [
        "Comprehensive Computing Curriculum: Access undergraduate, graduate, and specialized computing programs accredited across the European Higher Education Area.",
        "Advanced Technical Specializations: Specialize in cybersecurity, cloud platforms, full-stack software development, distributed systems, and enterprise data analytics.",
        "Practical & Internship-Centric Learning: Programs mandate 4-to-6-month industrial internships, live enterprise client projects, and alternance (work-study) contracts.",
        "European Tech & Startup Ecosystem: Seamless access to European technology giants (Thales, Capgemini, Dassault Systèmes, Atos) and startup incubators like Station F.",
        "Affordable Public Tuition: Subsidized national registration fees at public universities (€255/year for EU, €3,950/year for non-EU students).",
        "European Career Mobility: Indian graduates with a French Master’s degree benefit from a 2-year post-study work permit (APS/RECE) to seek employment across France and the EU.",
        "Direct Research & PhD Pathways: National Master's degrees and CTI engineering diplomas grant immediate eligibility for funded doctoral research and CIFRE industry doctorates."
      ]
    },
    {
      slot: "courses",
      eyebrow: "Program Disciplines",
      title: "Courses in Information Technology in France",
      desc: "In France, Information Technology programs are offered under titles such as Computer Science, Informatics, Information Systems, Software Engineering, and Network Engineering across multiple academic levels.",
      groups: [
        {
          title: "Popular Postgraduate IT Disciplines",
          items: [
            "Software Engineering: Full-stack application development, software design patterns, enterprise microservices, automated testing, and CI/CD pipelines.",
            "Cybersecurity & Information Assurance: Network security, cryptography, penetration testing, threat detection, ethical hacking, and risk management.",
            "Cloud Computing & Infrastructure: Virtualization, distributed architectures, AWS/Azure/GCP cloud platforms, and Docker/Kubernetes container orchestration.",
            "AI & Data Science: Machine learning algorithms, intelligent autonomous systems, statistical data modeling, and big data engineering.",
            "Networking & Systems Administration: Enterprise network protocols, system maintenance, Linux/Unix administration, and software-defined networking (SDN).",
            "Information Systems Management: Business technology integration, ERP systems, relational/NoSQL databases, and enterprise digital transformation.",
            "High-Performance Computing (HPC): Parallel processing, distributed computing clusters, GPU optimization, and large-scale data simulation."
          ]
        },
        {
          title: "Degree Types & Academic Durations",
          items: [
            "Licence Informatique (Bachelor's Degree): 3-year undergraduate degree awarding 180 ECTS credits.",
            "Master's Degree (Master Informatique / IT): 2-year postgraduate program awarding 120 ECTS credits over M1 and M2 cycles.",
            "Diplôme d'Ingénieur: 5-year post-secondary or 2-to-3-year post-bachelor elite engineering qualification accredited by CTI.",
            "Specialized Postgraduate Programs (MSc / Mastère Spécialisé): 1 to 2-year specialized professional programs accredited by the Conférence des Grandes Écoles (CGE)."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Top Universities for Information Technology PG in France",
      desc: "The following distinguished French universities and Grandes Écoles offer accredited Master's and engineering programs in Information Technology and Informatics:",
      unis: [
        {
          name: "Sorbonne Université",
          city: "Paris",
          state: "Île-de-France",
          desc: "World-class research university in central Paris offering the Master Informatique with specialized tracks in software technology, networks, cybersecurity, distributed systems, artificial intelligence, and enterprise data.",
          img: uniImg1
        },
        {
          name: "Université Grenoble Alpes (UGA)",
          city: "Grenoble",
          state: "Auvergne-Rhône-Alpes",
          desc: "Premier European technological center offering the two-year Master Informatique, including the prestigious Master of Science in Informatics at Grenoble (MoSIG) taught entirely in English for international students.",
          img: uniImg2
        },
        {
          name: "Université Paris-Saclay",
          city: "Gif-sur-Yvette (Paris-Saclay)",
          state: "Île-de-France",
          desc: "Ranked among the world's leading science and technology hubs, Paris-Saclay offers elite master's programs including Distributed, Parallel and Quantum Computing taught in English, connected with CEA and Inria.",
          img: uniImg3
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admission Criteria",
      title: "Eligibility for Admission to IT Programs in France",
      desc: "International applicants must demonstrate relevant undergraduate academic preparation, mathematical foundation, and technical competence.",
      items: [
        "Recognized Bachelor's Degree: 3-year or 4-year degree in Information Technology, Computer Science, Software Engineering, Computer Engineering, BCA, or a closely related discipline.",
        "Quantitative / Engineering Background: Candidates with degrees in Mathematics, Electronics, or Electrical Engineering are eligible if they possess verifiable computing and programming coursework.",
        "Core Academic Prerequisite Knowledge: Demonstrated competency in programming (Python, Java, or C/C++), data structures, algorithms, databases, operating systems, and discrete mathematics.",
        "English Language Proficiency: For English-taught tracks, minimum score of IELTS 6.5+ (no band below 6.0) or TOEFL iBT 85+ (CEFR B2 level).",
        "French Language Skills: DELF/DALF B2 certificate required only for programs taught partly or wholly in French."
      ],
      groups: [
        {
          title: "Application Dossier Requirements",
          items: [
            "Official Bachelor's degree certificate and consolidated academic transcripts (with certified French translations if applicable).",
            "Updated Curriculum Vitae (CV) emphasizing programming languages, technical projects, and internship experience.",
            "Statement of Purpose (SOP) or Letter of Motivation outlining career objectives and technical interests.",
            "Valid English proficiency scorecard (IELTS / TOEFL).",
            "Two Academic or Professional Letters of Recommendation (LORs).",
            "Technical portfolio, GitHub repository links, or capstone project documentation.",
            "Valid international passport (minimum 6 months validity)."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Fee Structure",
      title: "Cost of Studying Information Technology in France",
      desc: "Tuition fees in France depend on the institution type (public university vs. private Grande École) and student nationality. France offers heavily subsidized higher education rates.",
      groups: [
        {
          title: "Indicative Annual Tuition Fees (2026–2027 Academic Year)",
          items: [
            "Public University Master's Degree: €255 per year for EU/EEA students; €3,950 per year for Non-EU students under differentiated fee regulations (subsidized waivers apply at select universities).",
            "Public University Bachelor's (Licence): €178 per year (EU) | €2,902 per year (Non-EU).",
            "Doctorate (PhD) Registration: €398 per year for all students.",
            "Private Grandes Écoles & Specialized IT Schools: €6,000 to €15,000 per academic year.",
            "CVEC Campus Contribution: Approximately €103 per year (mandatory student life fee)."
          ]
        },
        {
          title: "Living Expenses & Financial Aid",
          items: [
            "Monthly Living Budget: €800 – €1,100 in regional student cities like Grenoble, Lyon, Toulouse, and Nancy; €1,200 – €1,600 in Paris.",
            "CAF Housing Subsidy: International students can claim the French government housing assistance (CAF/APL), reducing monthly rent by 30% to 40%.",
            "Scholarships & Grants: Indian students can apply for the Eiffel Excellence Scholarship, Charpak Master's Scholarship, Erasmus+ mobility grants, and university merit waivers."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Admissions Roadmap",
      title: "Process of Admission to Information Technology in France",
      desc: "Follow this structured 8-step roadmap to successfully secure university admission and student visa clearance:",
      steps: [
        {
          num: "1",
          title: "Choose a Program & Specialization",
          desc: "Identify IT Master's programs aligned with your background: software engineering, cybersecurity, cloud infrastructure, or data analytics."
        },
        {
          num: "2",
          title: "Verify Academic Eligibility",
          desc: "Review university entry requirements, programming syllabus prerequisites, language thresholds, and application deadlines."
        },
        {
          num: "3",
          title: "Assemble Application Documents",
          desc: "Gather official transcripts, degree certificates, CV, Statement of Purpose, recommendation letters, and language scorecards."
        },
        {
          num: "4",
          title: "Submit Portal Applications",
          desc: "Apply through the official university portal or the Études en France (Campus France) online platform before institutional deadlines."
        },
        {
          num: "5",
          title: "Participate in Selection Process",
          desc: "Complete online technical assessments or attend video motivation interviews if requested by the department admissions panel."
        },
        {
          num: "6",
          title: "Review & Accept Admission Offer",
          desc: "Review your acceptance letter, confirm your seat, and complete initial administrative deposit requirements."
        },
        {
          num: "7",
          title: "Campus France & Visa Formalities",
          desc: "Complete the Études en France academic interview, gather financial guarantee documentation, and apply for the Long-Stay Student Visa (VLS-TS)."
        },
        {
          num: "8",
          title: "Arrival & University Enrollment",
          desc: "Secure accommodation, validate your visa online with OFII upon arrival in France, register for French social security, and apply for CAF rent subsidy."
        }
      ]
    },
    {
      slot: "recognition",
      eyebrow: "Degree Framework",
      title: "Recognition and Accreditation Standards in France",
      desc: "Students should verify the exact qualification status and official accreditation awarded by their French institution.",
      items: [
        "Diplôme National de Master (DNM): Nationally accredited master's degree awarding 120 ECTS credits, fully recognized across Europe and internationally.",
        "Diplôme d'Ingénieur: Master-equivalent engineering diploma accredited by the Commission des Titres d'Ingénieur (CTI) and EUR-ACE label, highly valued in French industry.",
        "MSc (Master of Science): Programs accredited by the Conférence des Grandes Écoles (CGE), designed specifically for international industry deployment.",
        "Doctoral Eligibility: Both National Master's degrees and CTI engineering diplomas grant immediate access to PhD research in France and worldwide."
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Salary and Job Opportunities after Studying IT in France",
      desc: "A French Information Technology qualification opens diverse career opportunities across technology, finance, telecommunications, defense, consulting, and aerospace sectors.",
      groups: [
        {
          title: "Key Career Roles for IT Graduates",
          items: [
            "Software Developer / Enterprise Software Engineer",
            "Systems Administrator / IT Infrastructure Specialist",
            "Network Systems & Telecommunications Engineer",
            "Cybersecurity Analyst & Threat Mitigation Specialist",
            "Cloud Solutions Architect & DevOps Engineer",
            "Database Administrator / Big Data Engineer",
            "IT Project Coordinator & Technology Business Analyst",
            "R&D Systems Engineer & Doctoral (PhD) Researcher"
          ]
        },
        {
          title: "Salary Expectations & Post-Study Work Permit",
          items: [
            "Entry-Level Salary: Starting salaries for Master's/CTI IT graduates typically range from €38,000 to €46,000 gross per year.",
            "Mid-Career Growth: With 3 to 5 years of experience, salaries in cybersecurity, cloud architecture, and data engineering rise to €52,000 – €75,000+ per year.",
            "2-Year Post-Study Work Permit (APS/RECE): Indian Master’s graduates are eligible for a 2-year post-study work visa to seek skilled employment or establish a technology business in France."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Expert Guidance",
      title: "How EduHawk Worldwide Consultancy Helps You Study Abroad",
      desc: "EduHawk Worldwide offers complete, personalized end-to-end guidance for Indian students aspiring to study Information Technology in France.",
      items: [
        "University & Program Shortlisting: Identifying top-ranked French public universities and Grandes Écoles aligned with your technical background and career goals.",
        "Dossier & SOP Optimization: Professional guidance in preparing technical statements of purpose, IT CVs, and academic recommendation letters.",
        "Campus France Interview Coaching: In-depth preparation for the Études en France academic assessment and motivation interview.",
        "Visa Application Support: Comprehensive assistance with financial documentation, blocked accounts, and VFS visa appointment booking.",
        "Pre-Departure & Accommodation Support: Assistance with CROUS and private housing, CAF rent allowance filing, and travel briefing."
      ]
    }
  ],
  faqs: [
    {
      q: "Is France a good place to study Information Technology?",
      a: "Yes. France has an extensive network of public universities, Grandes Écoles, and specialized institutes providing world-class courses in software development, cybersecurity, cloud computing, networks, and data analytics. Programs combine rigorous mathematical foundations with hands-on industrial internships and strong corporate connections."
    },
    {
      q: "What is the cost of a master's in IT in France?",
      a: "For the 2026–2027 academic year, public university Master's tuition fees are €255/year for EU students and €3,950/year for non-EU students under differentiated fee regulations. Specialized international programs and private engineering schools typically charge between €6,000 and €15,000/year."
    },
    {
      q: "What bachelor's degree is required for an IT master's in France?",
      a: "A recognized Bachelor's degree (3-year or 4-year BTech, BE, BSc, or BCA) in Information Technology, Computer Science, Software Engineering, or Computer Engineering is required. Students with degrees in Mathematics, Electronics, or Physics are also eligible provided they have foundational coursework in programming and algorithms."
    },
    {
      q: "What jobs can I do after an IT master's degree in France?",
      a: "Graduates can work across France and Europe as software engineers, systems administrators, network engineers, cybersecurity analysts, cloud architects, database managers, data analysts, and IT project coordinators. Indian Master's graduates can also leverage the 2-year post-study work permit (APS/RECE) to transition into full-time employment."
    }
  ]
};

export default function InformationTechnologyinFrancePage() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    unis: [
      {
        name: "Sorbonne Université",
        city: "Paris",
        state: "Île-de-France",
        desc: "World-class research university in central Paris offering the Master Informatique with specialized tracks in software technology, networks, cybersecurity, distributed systems, artificial intelligence, and enterprise data.",
        img: uniImg1
      },
      {
        name: "Université Grenoble Alpes (UGA)",
        city: "Grenoble",
        state: "Auvergne-Rhône-Alpes",
        desc: "Premier European technological center offering the two-year Master Informatique, including the prestigious Master of Science in Informatics at Grenoble (MoSIG) taught entirely in English for international students.",
        img: uniImg2
      },
      {
        name: "Université Paris-Saclay",
        city: "Gif-sur-Yvette (Paris-Saclay)",
        state: "Île-de-France",
        desc: "Ranked among the world's leading science and technology hubs, Paris-Saclay offers elite master's programs including Distributed, Parallel and Quantum Computing taught in English, connected with CEA and Inria.",
        img: uniImg3
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
