import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Ireland/Engineering_UG/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Ireland/Engineering_UG/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Ireland/Engineering_UG/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Ireland/Engineering_UG/cta_bg.webp";

// University images
import uniImg1 from "../../../../../Images/Abroad/Ireland/Engineering_UG/Dublin_City_University.webp";
import uniImg2 from "../../../../../Images/Abroad/Ireland/Engineering_UG/Galway_University.webp";
import uniImg3 from "../../../../../Images/Abroad/Ireland/Engineering_UG/University_College_Cork.webp";

const page = {
  name: "Undergraduate Engineering in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/ug/engineering",
  title: "Study Undergraduate Engineering in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to Undergraduate Engineering (BEng / MEng) in Ireland for Indian students: Top Irish universities (DCU, Galway, UCC), Engineers Ireland accreditation, tuition fees (€17,900 – €27,640 / year), and Stamp 1G work visa.",
  keywords: "Study Undergraduate Engineering in Ireland for Indian Students, Bachelor of Engineering in Ireland, BEng Courses in Ireland, Best Engineering Universities in Ireland, Engineers Ireland Accreditation, Cost of Studying Engineering in Ireland, Edu-Hawk Worldwide",
  introTitle: "UNDERGRADUATE ENGINEERING (BENG & MENG) IN IRELAND",
  heroParas: [
    "Studying Undergraduate Engineering in Ireland provides international students with industry-aligned degree programs (four-year Bachelor of Engineering - BEng / BE and five-year integrated Master of Engineering - MEng) accredited by Engineers Ireland. Hosted by leading universities like Dublin City University (DCU), the University of Galway, and University College Cork (UCC), programs blend scientific rigor, modern prototyping laboratories, and paid industrial placements (INTRA / Co-op), giving graduates unmatched career prospects across Europe's leading technology, biomedical, and advanced manufacturing sectors."
  ],
  overview: [
    "Ireland is recognized globally as an innovation and high-tech manufacturing hub, housing European headquarters for leading global aerospace, biomedical device, pharmaceutical, software, and semiconductor companies. Irish undergraduate engineering curricula reflect this industrial density, focusing on real-world design challenges, team project studios, and hands-on laboratory experimentation.",
    "Higher education institutions in Ireland offer four-year Bachelor of Engineering Honours degrees (NFQ Level 8) and five-year integrated Bachelor and Master of Engineering degrees (NFQ Level 9). Many institutions offer a flexible 'Common Entry' first year, allowing students to explore civil, mechanical, biomedical, electrical, chemical, and computer engineering before selecting their dedicated specialization in Year 2.",
    "Edu-Hawk Worldwide provides specialized counseling for Indian engineering applicants. Our advisors evaluate Class 12 mathematics and physics prerequisites, assist in crafting compelling Statements of Purpose, navigate university application systems, and guide students through the Irish student visa (Stamp 2) and post-study work authorization (Stamp 1G) procedures."
  ],
  level: "Bachelor of Engineering (BEng / BE - NFQ Level 8) & Integrated MEng (Level 9)",
  crumb: "Engineering & Technology / Undergraduate Engineering in Ireland",
  stats: [
    {
      label: "Degree Choices",
      value: "BEng (Hons) 4-Year & Integrated MEng 5-Year"
    },
    {
      label: "Course Duration",
      value: "4 Years (BEng) / 5 Years (MEng)"
    },
    {
      label: "Top Institutions",
      value: "Dublin City University, Galway University, UCC"
    },
    {
      label: "Professional License",
      value: "Engineers Ireland / Stamp 1G Graduate Work Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Choose Ireland",
      title: "Key Advantages of Studying Undergraduate Engineering in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Pursuing an undergraduate engineering degree in Ireland connects students directly with cutting-edge European research facilities and high-growth industrial employers:"
          ]
        },
        {
          t: "ul",
          items: [
            "Industry-Aligned Hands-On Curriculum: Master engineering fundamentals through laboratory practicals, machine shop fabrication, 3D CAD modeling, and capstone design projects.",
            "Engineers Ireland Accreditation: Programs satisfy the international educational standards of the Washington Accord and EUR-ACE, establishing a direct pathway to Chartered Engineer (CEng) status.",
            "Integrated Industrial Work Placements: Most four-year programs incorporate a paid 6 to 8-month industrial internship (INTRA / Co-op) within multinational engineering corporations.",
            "Common Entry Engineering Flexibility: Enter through a common foundational first year to discover personal engineering aptitudes before selecting a specialized branch in Year 2.",
            "Thriving Multinational Job Market: Work in proximity to major tech and engineering employers (Intel, Analog Devices, Boston Scientific, Medtronic, Pfizer, and Jacobs Engineering).",
            "Post-Study Work Authorization (Stamp 1G): BEng graduates receive a 12-month post-study work visa, while 5-year integrated MEng graduates receive 24 months to transition into full-time engineering careers."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Engineering Disciplines",
      title: "Popular Undergraduate Engineering Specializations in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish universities offer a wide spectrum of specialized engineering degrees tailored to emerging technological and infrastructure sectors:"
          ]
        },
        {
          t: "ul",
          items: [
            "Common Entry Engineering: An exploratory first-year program providing foundation modules in mathematics, physics, computing, mechanics, and design before choosing a discipline in Year 2.",
            "Mechanical Engineering (BEng / MEng): Focuses on thermodynamics, fluid dynamics, robotics, automated manufacturing, and mechanical design.",
            "Biomedical Engineering (BEng / MEng): Combines engineering principles with medical sciences, focusing on implant design, surgical robotics, and cardiovascular devices in Ireland's medtech capital.",
            "Civil, Structural & Environmental Engineering: Covers structural mechanics, geotechnical engineering, sustainable water systems, transportation, and low-carbon infrastructure.",
            "Electronic & Computer Engineering: Integrates microelectronics, VLSI chip design, embedded systems, IoT sensors, and computer architecture.",
            "Chemical & Bioprocess Engineering: Emphasizes industrial pharmaceutical production, bioreactor engineering, separation processes, and active ingredient manufacturing.",
            "Electrical & Energy Engineering: Focuses on renewable power grids, wind energy conversion, power electronics, and industrial energy efficiency."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Featured Universities",
      title: "Top Universities and Colleges for Engineering in Ireland",
      unis: [
        {
          name: "Dublin City University",
          city: "Dublin",
          state: "Leinster",
          desc: "Faculty of Engineering and Computing—widely recognized for innovative Common Entry Engineering, Biomedical Engineering, and mandatory INTRA paid industrial internships.",
          img: uniImg1
        },
        {
          name: "University of Galway",
          city: "Galway",
          state: "Connacht",
          desc: "College of Science and Engineering—housed in Ireland's largest engineering building, offering 4-year BEng and 5-year integrated MEng degrees with strong medtech industry links.",
          img: uniImg2
        },
        {
          name: "University College Cork",
          city: "Cork",
          state: "Munster",
          desc: "School of Engineering and Architecture—renowned for energy engineering, electrical engineering, process & chemical engineering, and sustainability research centers.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Irish university engineering departments are recognized for state-of-the-art facilities, including wind tunnels, cleanrooms, robotics testing arenas, and advanced material characterization suites."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Requirements for Undergraduate Engineering in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Admission into undergraduate engineering degrees in Ireland requires strong quantitative and analytical aptitude:"
          ]
        },
        {
          t: "ul",
          items: [
            "Academic Qualification: Successful completion of Class 12 (CBSE, ICSE, or State Boards) with an aggregate score of 75% to 85%+.",
            "Mandatory Subject Prerequisites: Minimum score of 75%–80%+ in Mathematics is strictly required, alongside strong scores in Physics and/or Chemistry.",
            "Alternative Secondary Diplomas: International Baccalaureate (IB) diploma with minimum 32–36 points, including Higher Level (HL) Mathematics and Physics with scores of 5 or 6.",
            "English Language Competence: IELTS Academic score of 6.5 overall (with no sub-band below 6.0) or equivalent TOEFL iBT (88–92+) / Pearson PTE Academic (63+).",
            "Special Mathematics Examination: Several Irish universities (such as DCU and Galway) offer an internal engineering mathematics examination for applicants who marginally miss the mathematics threshold."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Application Materials",
      title: "Admission Requirements & Application Materials",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following core application materials are gathered and certified before applying:"
          ]
        },
        {
          t: "ul",
          items: [
            "Certified Class 10 and Class 12 academic mark sheets and official board certificates.",
            "Valid International Passport with minimum 12 months validity.",
            "Personal Statement detailing your engineering passion, technological curiosity, and career objectives.",
            "Two Academic Letters of Recommendation (from mathematics and physics faculty).",
            "Official English language proficiency test scorecard (IELTS / TOEFL / PTE).",
            "Updated Curriculum Vitae (CV) highlighting relevant STEM projects, coding skills, or robotics competitions."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Cost & Budgeting",
      title: "Cost of Studying Undergraduate Engineering in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees for international non-EU students cover academic lectures, computational licenses, laboratory consumables, and workshop supervision:"
          ]
        },
        {
          t: "p",
          items: [
            "| Expense Category | Annual Indicative Cost Range | Key Budgeting Notes |",
            "| :--- | :--- | :--- |",
            "| **BEng Tuition (DCU)** | €17,900 / year (2026–2027) | High-value, career-focused 4-year programs |",
            "| **BEng Tuition (Galway / UCC)** | €25,500 – €27,640 / year | Includes advanced laboratory and cleanroom facilities |",
            "| **Student Living Expenses (Galway/Cork)** | €9,500 – €13,000 / year | Housing, food, transport, and utilities |",
            "| **Student Living Expenses (Dublin)** | €12,000 – €16,000 / year | Moderately higher private and student housing rents |",
            "| **Textbooks & Drafting Software** | €300 – €500 / year | CAD software licenses are typically provided by universities |",
            "| **Private Health Insurance** | €160 – €300 / year | Mandatory international student medical insurance |",
            "| **Irish Residence Permit (IRP)** | €300 registration fee | Mandatory immigration registration fee upon arrival |"
          ]
        },
        {
          t: "p",
          items: [
            "Paid Cooperative Work Experience: Engineering students undertaking an 8-month INTRA or Co-op placement in Year 3 earn a monthly salary (typically €1,800 to €2,500/month), which substantially offsets living costs."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Step-by-Step Admission Process for Engineering in Ireland",
      steps: [
        {
          title: "Select Your Engineering Discipline",
          desc: "Choose between specialized branches (Mechanical, Biomedical, Civil, Electronic, Chemical) or the versatile Common Entry track."
        },
        {
          title: "Review Mathematics Prerequisites",
          desc: "Confirm that your Class 12 mathematics score satisfies the required 75%–80%+ threshold alongside IELTS 6.5+."
        },
        {
          title: "Draft Personal Statement & Gather References",
          desc: "Compose an engineering-focused personal statement showcasing your problem-solving mindset, technical projects, and ambitions."
        },
        {
          title: "Submit Direct University Applications",
          desc: "Submit your online application through the international admissions portals of DCU, University of Galway, or UCC."
        },
        {
          title: "Receive & Accept Admission Offer",
          desc: "Review your conditional or unconditional offer letter, pay the required tuition deposit, and reserve your place."
        },
        {
          title: "Apply for Irish Student Visa (Stamp 2)",
          desc: "File your student visa application via the AVATS portal with comprehensive financial proof (€10,000+ living funds plus tuition fee receipt)."
        },
        {
          title: "Arrive in Ireland & Complete Registration",
          desc: "Travel to Ireland, attend engineering faculty induction, schedule your IRP immigration appointment, and begin your degree."
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Applications should be submitted between November and March to maximize eligibility for university merit scholarships."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Professional Recognition",
      title: "Accreditation, Engineers Ireland, and Global Professional Status",
      groups: [
        {
          t: "p",
          items: [
            "Engineering degrees in Ireland are governed by rigorous professional evaluation to ensure international equivalence:"
          ]
        },
        {
          t: "ul",
          items: [
            "Engineers Ireland Accreditation: Evaluates and accredits Irish engineering degrees to verify that curricula provide the theoretical foundation and practical skills needed for modern practice.",
            "Washington Accord Signatory: Because Engineers Ireland is a founding signatory of the Washington Accord, Irish-accredited engineering degrees are recognized across the US, UK, Canada, Australia, and India.",
            "Chartered Engineer (CEng) Pathway: An accredited 5-year integrated MEng (or 4-year BEng + accredited Master's) satisfies the full educational requirements for Chartered Engineer registration.",
            "EUR-ACE Quality Label: Accredited programs carry the EUR-ACE label, guaranteeing seamless professional mobility throughout the European Union."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Engineering Salaries and Career Opportunities in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Graduates of Irish engineering programs enjoy exceptional employment demand across technology, infrastructure, life sciences, and renewable energy sectors:"
          ]
        },
        {
          t: "ul",
          items: [
            "Mechanical Design Engineer: Designing thermal management systems, automated production lines, and robotic equipment.",
            "Biomedical Device Engineer: Developing cardiovascular stents, orthopedic implants, and diagnostic medical technologies.",
            "Civil & Structural Engineer: Designing bridges, commercial developments, coastal defenses, and transportation infrastructure.",
            "Electronics & Embedded Systems Engineer: Developing microchip architectures, telecommunications hardware, and automotive electronic control units.",
            "Chemical & Process Engineer: Optimizing biopharmaceutical production lines, reaction kinetics, and continuous pharmaceutical manufacturing.",
            "Energy & Sustainability Consultant: Designing renewable microgrids, building energy performance models, and carbon reduction systems."
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Salaries for Engineers in Ireland:",
            "• Graduate Engineer (Entry-Level): €34,000 – €44,000 / year",
            "• Experienced Project / Design Engineer: €48,000 – €68,000 / year",
            "• Senior Chartered Engineer (CEng): €70,000 – €95,000 / year",
            "• Engineering Manager / Technical Director: €90,000 – €135,000+ / year"
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Comprehensive Document Checklist for Engineering Applicants",
      groups: [
        {
          t: "p",
          items: [
            "Assemble the following verified documents before submitting your university application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid International Passport with biometric photo page.",
            "Class 10 and Class 12 mark sheets and certificates.",
            "Proof of prerequisite grades in Mathematics and Physics/Chemistry.",
            "English language proficiency scorecard (IELTS 6.5+ / TOEFL 88+).",
            "Statement of Purpose (SOP) tailored to your engineering discipline.",
            "Two Letters of Recommendation from mathematics or science teachers.",
            "Updated Curriculum Vitae (CV) emphasizing technical proficiencies.",
            "Proof of financial sufficiency for tuition and living expenses (€10,000+ living funds)."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Edu-Hawk Guidance",
      title: "How Edu-Hawk Worldwide Supports Your Irish Engineering Studies",
      groups: [
        {
          t: "p",
          items: [
            "Choosing the right engineering discipline and navigating international university admissions requires specialized advice. Edu-Hawk Worldwide provides comprehensive overseas guidance:",
            "• Branch Selection: Evaluating your math and physics strengths to choose between Common Entry, Mechanical, Biomedical, Civil, or Electronic Engineering.",
            "• SOP & Resume Mentorship: Helping you craft a standout technical Statement of Purpose that highlights your analytical projects and engineering ambitions.",
            "• Scholarship Applications: Guiding you through university merit scholarship applications (€2,000 to €5,000 discounts).",
            "• Stamp 2 Visa Processing: End-to-end assistance with AVATS visa filing, financial affidavit verification, and appointment scheduling.",
            "• Work Visa Guidance: Advising on the 1-to-2 year Stamp 1G post-study work scheme and Engineers Ireland graduate membership."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "How long does it take to complete an undergraduate Engineering degree in Ireland?",
      a: "A standard Bachelor of Engineering (BEng / BE) degree takes 4 years of full-time study (NFQ Level 8). Many universities also offer a 5-year integrated Bachelor and Master of Engineering (MEng) program (NFQ Level 9)."
    },
    {
      q: "Can Indian students study Engineering in Ireland after Class 12?",
      a: "Yes. Indian students who have completed Class 12 (CBSE, ICSE, or State Boards) with strong marks in science and mathematics (typically 75%–85%+, with 75%+ specifically in Mathematics) and an IELTS score of 6.5 can apply directly for BEng programs."
    },
    {
      q: "How much are tuition fees for undergraduate Engineering in Ireland?",
      a: "For international (non-EU) students, undergraduate engineering tuition fees generally range between €17,900 and €27,640 per year depending on the university (for example, DCU charges approximately €17,900 while the University of Galway charges €27,640). Living expenses average €9,500 to €15,000 per year."
    },
    {
      q: "Are Irish Engineering degrees accredited by Engineers Ireland?",
      a: "Yes. Leading Irish universities (such as DCU, Galway, and UCC) deliver engineering degree programs fully accredited by Engineers Ireland under the Washington Accord, ensuring their degrees are internationally recognized across the UK, USA, Canada, and Australia."
    },
    {
      q: "Can international engineering graduates work in Ireland after graduation?",
      a: "Yes. Under the Third Level Graduate Scheme, 4-year BEng graduates receive a 1-year post-study work visa (Stamp 1G), while 5-year integrated MEng graduates receive 2 years. Graduates can work full-time across Ireland's thriving engineering, biomedical, and tech sectors."
    }
  ]
};

export default function UndergraduateEngineeringAbroadIreland() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "Dublin City University",
        city: "Dublin",
        state: "Leinster",
        desc: "Faculty of Engineering and Computing—widely recognized for innovative Common Entry Engineering, Biomedical Engineering, and mandatory INTRA paid industrial internships.",
        img: uniImg1
      },
      {
        name: "University of Galway",
        city: "Galway",
        state: "Connacht",
        desc: "College of Science and Engineering—housed in Ireland's largest engineering building, offering 4-year BEng and 5-year integrated MEng degrees with strong medtech industry links.",
        img: uniImg2
      },
      {
        name: "University College Cork",
        city: "Cork",
        state: "Munster",
        desc: "School of Engineering and Architecture—renowned for energy engineering, electrical engineering, process & chemical engineering, and sustainability research centers.",
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
