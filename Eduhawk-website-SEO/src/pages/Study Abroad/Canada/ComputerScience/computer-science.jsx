import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Canada/ComputerScience/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Canada/ComputerScience/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Canada/ComputerScience/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Canada/ComputerScience/cta_bg.webp";
import UniversityOfWaterlooImg from "../../../../Images/Abroad/Canada/ComputerScience/University_of_Waterloo.webp";
import UniversityOfTorontoImg from "../../../../Images/Abroad/Canada/ComputerScience/University_of_Toronto.webp";
import UniversityOfBritishColumbiaImg from "../../../../Images/Abroad/Canada/ComputerScience/University_of_British_Columbia.webp";
import McGillUniversityImg from "../../../../Images/Abroad/Canada/ComputerScience/McGill_University.webp";
import cmsData from "../../../../data/study_abroad/canada/computer_science.json";

const page = {
  name: "Computer Science in Canada",
  country: "Canada",
  slug: "computer_science",
  title: "Study Computer Science in Canada for Indian Students | Edu-Hawk Worldwide",
  description: "Study Computer Science in Canada: Discover top universities (Waterloo, Toronto, UBC, McGill), specializations in AI, algorithms, and software engineering, tuition fees, eligibility criteria, and verified PGWP work permit pathways.",
  keywords: "Study Computer Science in Canada, Computer Science in Canada for Indian Students, Best Universities in Canada, Cost of Studying in Canada, Canada PGWP Computer Science",
  introTitle: "Computer Science in Canada for Indian Students",
  heroParas: [
    "Pursue world-class education in Computer Science at Canada's premier institutions, featuring cutting-edge artificial intelligence labs, industry-leading co-op internships, and globally recognized academic excellence. Indian students gain high-impact software engineering skills and access post-graduation work permit (PGWP) career pathways across major tech hubs."
  ],
  overview: [
    "Studying Computer Science in Canada offers Indian students an exceptional pathway into one of the world's most vibrant and innovative technology ecosystems. Canadian computer science education emphasizes rigorous theoretical foundations—including algorithm design, data structures, computational theory, and programming paradigms—alongside high-impact practical application in software engineering, artificial intelligence, and machine learning.",
    "Universities and university colleges across Canada provide versatile degrees, from Bachelor of Science (BSc) and Bachelor of Computer Science (BCS) programs to Master of Science (MSc) and research-intensive doctorates. Students delve into specialized computational disciplines such as distributed systems, computer vision, natural language processing, cryptography, human-computer interaction, and cloud architectures. A hallmark of Canadian computing education is its world-renowned co-operative education (co-op) model, allowing students to alternate academic study terms with paid, real-world industry internships in major innovation corridors like the Toronto-Waterloo tech hub, Vancouver, and Montreal.",
    "Graduates of eligible Canadian degree programs benefit from strong international credentials and valuable post-graduation career opportunities. Under current Immigration, Refugees and Citizenship Canada (IRCC) regulations, international students completing eligible full-time university degree programs of at least two years may qualify for a Post-Graduation Work Permit (PGWP) of up to three years, providing an invaluable bridge to gain skilled Canadian technology work experience."
  ],
  level: "Undergraduate & Postgraduate",
  crumb: "Technology & Computing",
  stats: [
    {
      label: "Degree Choices",
      value: "Undergraduate (BSc/BCS) & Postgraduate (MSc/PhD)"
    },
    {
      label: "Course Duration",
      value: "3 to 4 Years (UG) / 1 to 2 Years (PG)"
    },
    {
      label: "Top Institutions",
      value: "Waterloo, Toronto, British Columbia, McGill"
    },
    {
      label: "Medium of Study",
      value: "English & French Taught"
    }
  ],
  sections: [
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Computer Science Programs & Specializations in Canada",
      groups: [
        {
          t: "h4",
          text: "Core Computer Science Degree Pathways"
        },
        {
          t: "ul",
          items: [
            "Bachelor of Computer Science (BCS) & Bachelor of Science (BSc) in Computer Science (3 to 4 Years)",
            "Master of Science (MSc) in Computer Science (Thesis-based Research Stream, 2 Years)",
            "Master of Applied Computing / Professional Master's in CS (Course-based / Co-op Stream, 16 to 24 Months)",
            "Integrated Master's & Doctoral Programs (PhD in Computer Science, 4 to 5 Years)"
          ]
        },
        {
          t: "h4",
          text: "Specialization Streams in Computer Science"
        },
        {
          t: "ul",
          items: [
            "Artificial Intelligence, Machine Learning & Deep Learning",
            "Data Science, Big Data Analytics & Predictive Modeling",
            "Information Security, Cryptography & Network Defense",
            "Software Engineering & Large-Scale Systems Architecture",
            "Cloud Computing, Virtualization & High-Performance Computing",
            "Computer Graphics, Computer Vision & Augmented Reality",
            "Human-Computer Interaction (HCI) & Intelligent User Interfaces",
            "Robotics, Autonomous Systems & Cyber-Physical Systems",
            "Theoretical Computer Science, Algorithms & Computational Complexity"
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Top Canadian Institutions",
      title: "Canada's Best Universities to Consider for Computer Science",
      groups: [
        {
          t: "cards",
          items: [
            {
              name: "University of Waterloo",
              location: "Waterloo, Ontario, Canada",
              fee: "CAD $22,000 – $66,000 / Year",
              desc: "Home to the David R. Cheriton School of Computer Science, Waterloo operates the world's largest post-secondary co-op program, serving as a primary recruitment hub for top global tech companies and high-growth technology startups.",
              img: UniversityOfWaterlooImg
            },
            {
              name: "University of Toronto",
              location: "Toronto, Ontario, Canada",
              fee: "CAD $30,000 – $65,000 / Year",
              desc: "Consistently ranked among the world's top 10 computer science faculties, U of T is an international research powerhouse celebrated for pioneering deep learning, neural networks, and quantum computing in the heart of Toronto.",
              img: UniversityOfTorontoImg
            },
            {
              name: "University of British Columbia",
              location: "Vancouver, British Columbia, Canada",
              fee: "CAD $24,000 – $58,000 / Year",
              desc: "UBC's Department of Computer Science delivers internationally acclaimed research and flexible degree streams, with world-leading faculty in human-computer interaction, artificial intelligence, robotics, and high-performance computing.",
              img: UniversityOfBritishColumbiaImg
            },
            {
              name: "McGill University",
              location: "Montreal, Quebec, Canada",
              fee: "CAD $21,000 – $54,000 / Year",
              desc: "Situated in Montreal's world-famous AI hub with direct affiliations to the Mila Quebec AI Institute, McGill's School of Computer Science provides outstanding theoretical rigor and cutting-edge data systems innovation.",
              img: McGillUniversityImg
            }
          ]
        },
        {
          t: "h4",
          text: "Criteria for Selecting the Right Computer Science Program"
        },
        {
          t: "ul",
          items: [
            "Curriculum focus and specialization electives in modern computing disciplines (AI, Data Science, Distributed Systems).",
            "Research facilities, computing clusters, and faculty publication records in top-tier conferences (NeurIPS, ICML, CVPR, SIGMOD).",
            "Co-operative education (co-op) structure, paid internship terms, and access to the Canadian and North American tech job market.",
            "Career development services, corporate recruitment partnerships, and on-campus technology incubation centers.",
            "Total tuition investment, cost of living by province, and availability of international student entrance scholarships.",
            "Post-Graduation Work Permit (PGWP) eligibility as an authorized Designated Learning Institution (DLI)."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Computer Science Study Eligibility & Admission Requirements in Canada",
      groups: [
        {
          t: "h4",
          text: "Academic Qualifications & Subject Prerequisites"
        },
        {
          t: "ul",
          items: [
            "Undergraduate (BSc/BCS): Successful completion of Higher Secondary (10+2) with a strong overall academic percentage (typically 75%–85%+ for competitive institutions) with compulsory senior-level Mathematics and English.",
            "Postgraduate (MSc): A recognized 4-year Bachelor's degree in Computer Science, Computer Engineering, Mathematics, or a quantitative discipline with a minimum GPA of 75%–80%+ (First Class standing).",
            "Foundational Knowledge: Prior coursework in data structures, algorithms, discrete mathematics, and object-oriented programming is essential for graduate admissions.",
            "Programming Portfolio: Hands-on coding experience, GitHub repositories, competitive programming ranks, or research papers provide a distinct competitive advantage."
          ]
        },
        {
          t: "h4",
          text: "English Language Proficiency Benchmarks"
        },
        {
          t: "table",
          headers: ["Language Test", "Minimum Score Benchmark"],
          rows: [
            [
              "IELTS Academic",
              "Overall 6.5 (minimum 6.0 in each individual band; top universities may require 7.0)"
            ],
            [
              "TOEFL iBT",
              "Overall 86–100 (minimum 20–22 in each individual sub-score)"
            ],
            [
              "PTE Academic",
              "Overall 60–68 with no communicative skill below 58"
            ],
            [
              "Duolingo English Test (DET)",
              "Minimum 115–125 (accepted by select universities/programs)"
            ]
          ]
        },
        {
          t: "p",
          items: [
            "Note: The Graduate Record Examination (GRE) is optional at most Canadian universities, but strongly recommended or required for research-based master's programs at institutions like University of Toronto and McGill."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Computer Science Education & Living in Canada (2026–2027)",
      groups: [
        {
          t: "h4",
          text: "Estimated Annual Budget for International Students"
        },
        {
          t: "table",
          headers: ["Expense Category", "Estimated Annual Cost (CAD)"],
          rows: [
            [
              "Tuition Fees (Undergraduate CS)",
              "CAD $22,000 – $66,000 annually"
            ],
            [
              "Tuition Fees (Postgraduate MSc CS)",
              "CAD $20,000 – $48,000 annually"
            ],
            [
              "Accommodation (On-Campus / Shared Off-Campus)",
              "CAD $8,000 – $18,000 annually"
            ],
            [
              "Food, Groceries & Daily Meals",
              "CAD $3,500 – $6,500 annually"
            ],
            [
              "Mandatory Health Insurance (UHIP / Provincial)",
              "CAD $1,000 – $2,500 annually"
            ],
            [
              "Books, Software Licenses & Course Materials",
              "CAD $800 – $2,000 annually"
            ],
            [
              "Local Transportation & Public Transit Pass",
              "CAD $1,000 – $2,000 annually"
            ],
            [
              "Personal & Incidental Living Expenses",
              "CAD $1,800 – $3,500 annually"
            ]
          ]
        },
        {
          t: "p",
          items: [
            "Planning note: These estimates reflect general budgeting standards for international students in Canada. Living costs in urban tech hubs like Toronto and Vancouver are higher than in Montreal, Edmonton, or Atlantic Canada."
          ]
        },
        {
          t: "h4",
          text: "Scholarships & Financial Funding Opportunities"
        },
        {
          t: "ul",
          items: [
            "International Student Entrance Scholarships: Merit-based tuition reductions ranging from CAD $2,000 to $20,000 awarded at admission.",
            "Graduate Research Assistantships (RA): Stipends provided by faculty research grants for students pursuing thesis-based master's or PhD degrees.",
            "Graduate Teaching Assistantships (TA): Paid department appointments to lead undergraduate labs and grade assignments.",
            "External Scholarships: Competitive awards including Ontario Graduate Scholarships (OGS) and Vanier Canada Graduate Scholarships for eligible international applicants."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Step-by-Step Guide",
      title: "Canada's Computer Science Admission Process",
      groups: [
        {
          t: "steps",
          items: [
            {
              step: 1,
              title: "Define Your Target Specialization",
              desc: "Identify your core area of computing interest, such as artificial intelligence, cloud architectures, data science, software engineering, or computational theory."
            },
            {
              step: 2,
              title: "Shortlist Accredited Canadian Universities",
              desc: "Evaluate Canadian DLI institutions based on CS curriculum structure, faculty research prestige, co-op internship models, tuition fees, and campus location."
            },
            {
              step: 3,
              title: "Verify Eligibility & Math Prerequisites",
              desc: "Review high school or undergraduate academic transcripts, ensuring required mathematics, calculus, and programming prerequisites meet departmental standards."
            },
            {
              step: 4,
              title: "Complete Language Proficiency Tests",
              desc: "Take IELTS Academic, TOEFL iBT, or PTE Academic to attain the required band scores before institutional application deadlines."
            },
            {
              step: 5,
              title: "Assemble Application Dossier",
              desc: "Compile official academic transcripts, a compelling Statement of Purpose (SOP), 2–3 academic/professional reference letters, technical resume, and GitHub project portfolio."
            },
            {
              step: 6,
              title: "Submit University Applications",
              desc: "Submit your online application via institutional portals (or OUAC for Ontario undergraduate courses) and pay the applicable non-refundable application fees."
            },
            {
              step: 7,
              title: "Evaluate Offers & Confirm Acceptance",
              desc: "Review formal Letters of Acceptance (LOA), satisfy any conditional requirements, and pay the required tuition deposit before the offer deadline."
            },
            {
              step: 8,
              title: "Apply for Canadian Study Permit & PAL",
              desc: "Apply for your Canadian Study Permit under current IRCC regulations, including securing a Provincial Attestation Letter (PAL) where required and demonstrating proof of financial support."
            },
            {
              step: 9,
              title: "Pre-Departure & Campus Onboarding",
              desc: "Arrange student housing, university health insurance coverage, flight bookings, course registration, and participate in international student orientation."
            }
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Prospects",
      title: "Career Prospects in Canada Following Computer Science Study",
      groups: [
        {
          t: "h4",
          text: "Prominent Technology Job Roles in Canada"
        },
        {
          t: "ul",
          items: [
            "Software Development Engineer (SDE) & Full-Stack Developer",
            "Artificial Intelligence & Machine Learning Engineer",
            "Data Scientist, Big Data Architect & Analytics Consultant",
            "Cloud Solutions Architect & Cloud Infrastructure Engineer",
            "Cybersecurity Analyst, Security Architect & Penetration Tester",
            "DevOps Engineer & Site Reliability Engineer (SRE)",
            "Distributed Systems Engineer & Database Administrator",
            "Computer Vision Engineer & Robotics Software Developer",
            "Quality Assurance (QA) Automation Engineer & Systems Analyst"
          ]
        },
        {
          t: "h4",
          text: "Post-Graduation Work Permit (PGWP) Guidelines"
        },
        {
          t: "p",
          items: [
            "Graduates of eligible degree programs at Canadian Designated Learning Institutions (DLIs) may qualify for a Post-Graduation Work Permit (PGWP) of up to three years, subject to program duration, completion criteria, and current IRCC policy regulations (including qualifying language proficiency benchmarks). PGWP eligibility is subject to individual IRCC immigration assessment and is not automatically granted."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Documents Needed to Pursue Computer Science Education in Canada",
      groups: [
        {
          t: "h4",
          text: "Academic & Standardized Test Documents"
        },
        {
          t: "ul",
          items: [
            "Official secondary (10th & 12th) marks cards and certificates.",
            "Official undergraduate semester-wise marksheets, transcripts, and provisional/original degree certificates (for PG programs).",
            "Certified English translations of any non-English academic documents.",
            "Valid English language proficiency score report (IELTS / TOEFL / PTE).",
            "GRE score report (if required or submitted for graduate admissions)."
          ]
        },
        {
          t: "h4",
          text: "Institutional Application Documents"
        },
        {
          t: "ul",
          items: [
            "Valid international passport (must be valid for the entire proposed period of study).",
            "Statement of Purpose (SOP) tailored to your chosen Computer Science specialization and career aspirations.",
            "Two to three Letters of Recommendation (LORs) from professors or technical supervisors.",
            "Updated Technical Curriculum Vitae (CV) / Resume.",
            "Technical project portfolio, open-source GitHub repository links, or research abstracts (for relevant programs)."
          ]
        },
        {
          t: "h4",
          text: "Study Permit & Visa Documentation"
        },
        {
          t: "ul",
          items: [
            "Official Letter of Acceptance (LOA) issued by an authorized Canadian DLI.",
            "Provincial Attestation Letter (PAL) from the provincial education authority, if applicable under current IRCC policy.",
            "Proof of sufficient financial funds demonstrating ability to pay tuition and meet current IRCC living cost standards.",
            "Upfront immigration medical exam certificate (by an authorized panel physician) and biometric registration.",
            "Police Clearance Certificate (PCC) and completed visa application forms."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      groups: [
        {
          t: "faq",
          items: [
            {
              q: "Can Indian students pursue Computer Science in Canada after 12th or after graduation?",
              a: "Yes. Indian students can pursue undergraduate Computer Science degrees (BSc or BCS, 3 to 4 years) after completing 10+2 with strong mathematics performance. Graduates holding a recognized 4-year bachelor's degree in Computer Science, engineering, or a quantitative discipline can pursue postgraduate master's degrees (MSc in Computer Science or Master of Applied Computing, 1 to 2 years)."
            },
            {
              q: "What is the core academic difference between Computer Science, Information Technology, and Computer Engineering in Canada?",
              a: "Computer Science focuses primarily on mathematical principles, algorithm design, computational theory, artificial intelligence, and software systems. Information Technology focuses on applied infrastructure, systems administration, cloud configuration, and network security operations. Computer Engineering bridges electrical engineering and computer science, concentrating on hardware-software integration, microprocessor design, VLSI circuits, and embedded systems."
            },
            {
              q: "How do co-op programs work for international Computer Science students in Canada?",
              a: "Canadian universities like the University of Waterloo, UBC, and University of Toronto offer structured co-operative education (co-op) streams. Co-op allows students to alternate academic study semesters with paid, full-time professional internships (typically 4 to 8 months per term) at top technology corporations, gaining valuable industry experience, professional networks, and earnings to offset tuition costs."
            },
            {
              q: "What are the current Post-Graduation Work Permit (PGWP) rules for Computer Science graduates?",
              a: "Graduates of eligible full-time university degree programs (Bachelor's, Master's, or PhD) at Canadian Designated Learning Institutions (DLIs) can qualify for a Post-Graduation Work Permit (PGWP) of up to 3 years. Under current IRCC rules, university degree graduates must also meet designated language proficiency benchmarks. PGWP eligibility is evaluated by IRCC upon graduation and is not automatic."
            },
            {
              q: "How can Edu Hawk Worldwide assist students applying for Computer Science in Canada?",
              a: "Edu Hawk Worldwide provides end-to-end guidance including profile evaluation, selecting the most suitable universities and specializations (AI, Software Engineering, Data Science), optimizing Statements of Purpose and resumes, navigating admission deadlines, and advising on Canadian study permits and provincial attestation requirements."
            }
          ]
        }
      ]
    }
  ]
};

export default function ComputerScienceCanada() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle || page.name,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: (cmsData?.overview && cmsData.overview.length > 0 && cmsData.overview[0] !== "")
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
    seo: {
      title: cmsData?.seo?.title || page.title,
      description: cmsData?.seo?.description || page.description,
      keywords: cmsData?.seo?.keywords || page.keywords,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/canada/computer-science"
    />
  );
}
