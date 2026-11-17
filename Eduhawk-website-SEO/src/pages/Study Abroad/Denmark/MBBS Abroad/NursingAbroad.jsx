import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Denmark/Nursing/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Denmark/Nursing/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Denmark/Nursing/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Denmark/Nursing/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Denmark/Nursing/image1.png";
import uniImg2 from "../../../../Images/Abroad/Denmark/Nursing/image2.png";
import uniImg3 from "../../../../Images/Abroad/Denmark/Nursing/image3.png";
import cmsData from "../../../../data/study_abroad/denmark/nursing.json";

const page = {
  "name": "Nursing",
  "country": "Denmark",
  "slug": "nursing",
  "title": "Nursing in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Nursing in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Nursing in Denmark, Nursing in Denmark for Indian Students, Best Universities in Denmark, Denmark Nursing Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Nursing in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Nursing in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Nursing."
  ],
  "level": "B.Sc. & M.Sc. in Nursing",
  "crumb": "MBBS Abroad",
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
      "title": "Why Choose to Study Nursing in Denmark?",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Nursing in Denmark** can be an attractive option for students interested in a well-developed healthcare system, high levels of patient care and a strong focus on evidence-based medicine. In Denmark, nursing students gain theoretical knowledge and practical skills through classroom study and supervised clinical placements.",
            "The key benefits are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Quality education:** Gain knowledge of modern nursing practices and patient-care techniques.",
            "**Clinical experience:** Get practical experience in healthcare settings throughout the duration of the program.",
            "**Advanced healthcare system:** Learn about patient safety, preventive care and healthcare technology.",
            "**Research opportunities:** Discover research in healthcare and evidence-based nursing.",
            "**Global exposure:** Be part of a multicultural academic environment.",
            "**Career development:** Prepare for a career in nursing and other health-related fields that require professional authorization."
          ]
        },
        {
          "t": "p",
          "items": [
            "Most professional nursing programs in Denmark are taught in Danish. Clinical placements involve direct contact with patients, so international students should check language requirements before applying. Students exploring **Nursing in Denmark for Indian students** should understand these requirements while planning their education."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Nursing Programs in Denmark",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark provides undergraduate education in nursing and postgraduate education in nursing-related and wider healthcare subjects. The availability, duration, language and eligibility of **Nursing programs in Denmark** vary by institution.",
            "A bachelor's-level nursing program usually lasts about 3.5 years. It combines theoretical education with clinical placements under supervision.",
            "Common topics include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Human Anatomy and Physiology",
            "Fundamentals of nursing and patient assessment",
            "Surgical and medical nursing",
            "Pharmacology and safe use of medications",
            "Mental health nursing",
            "Preventive and community healthcare",
            "Clinical and patient communication practice",
            "Ethical principles and healthcare research"
          ]
        },
        {
          "t": "p",
          "items": [
            "The normal length of a full-time Master\u2019s is about two years, though there is some variation. Related fields of study include nursing science, public health, health sciences, clinical research, healthcare management and health promotion.",
            "Not all institutions offer a degree with the title Master\u2019s in Nursing. Some programs require an appropriate bachelor's degree, professional nursing qualifications or work experience.",
            "Students interested in **Nursing programs in Denmark** should compare course structures, academic requirements and teaching languages before selecting an institution. Understanding the available undergraduate and postgraduate options can help students plan their academic pathway."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Nursing in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Nursing programmes, modern campuses, and international student support.",
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
      "title": "Who Can Study Nursing in Denmark?",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Nursing eligibility in Denmark** criteria vary by course level and institution. Applicants should check the academic qualifications, language requirements and additional conditions for their chosen program."
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized secondary-school qualification that corresponds to the required Danish entry qualification.",
            "Academic grades and the subjects required by the institute.",
            "Danish language skills for Danish-taught nursing programs.",
            "Any additional academic prerequisites required by the institution.",
            "Documents to support the assessment of overseas qualifications."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students should check that their Class 12 qualifications meet the entry requirements of the institution. Students considering **Nursing in Denmark for Indian students** should also verify whether additional subject documentation or qualification assessment is required."
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor's degree in nursing or an equivalent field.",
            "Academic qualifications that meet the entry requirements of the program.",
            "Professional nursing qualifications or experience, if required.",
            "English or Danish proficiency, depending on the program.",
            "Institution-required documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "Meeting the minimum eligibility criteria does not guarantee admission. Applicants should review the **Nursing eligibility in Denmark** conditions for their selected institution before submitting an application."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Nursing Admission in Denmark",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants are required to meet the academic and language requirements of the chosen institution. The **Nursing admission in Denmark** process depends on the course level, applicant qualifications and selection criteria of the institution.",
            "**Academic qualifications:** Universities and university colleges will take into account your previous education, grades, the relevance of your subjects and the equivalence of your qualification.",
            "**Language requirements:** Generally, Danish is required for professional nursing programs with clinical placements. Some postgraduate healthcare programs may be taught in English, but applicants should check the language requirements for their specific course.",
            "**Application assessment:** Selection may include consideration of academic performance, subject prerequisites, language proficiency and other programme-specific criteria.",
            "**Deadlines:** The application deadline will vary depending on the institution and the type of applicant. International students are advised to start preparing early enough to allow adequate time for the assessment of qualifications and verification of documents.",
            "Always refer to the official institution website for the most up-to-date admission requirements. Understanding the **Nursing admission in Denmark** process early can help students prepare their academic records, language evidence and other application documents on time.",
            "Edu-Hawk Worldwide provides study-abroad guidance, university selection information and application planning support for students exploring international education opportunities, including nursing-related courses."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Nursing Course Fees in Denmark",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Nursing course fees in Denmark** and overall education expenses are comprised of tuition fees, accommodation, food, transport, study materials and personal expenses.",
            "Tuition fees vary depending on your citizenship and program type. EU/EEA students generally have different tuition rules from non-EU/EEA students. Indian applicants should check whether tuition fees are applicable and obtain the latest fee structure directly from the institution."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Cost",
            "Projected Cost"
          ],
          "rows": [
            [
              "Monthly accommodation",
              "\u20b940,000\u2013\u20b975,000"
            ],
            [
              "Food and groceries per month",
              "\u20b915,000\u2013\u20b925,000"
            ],
            [
              "Monthly transport",
              "\u20b94,000\u2013\u20b98,000"
            ],
            [
              "Utilities (phone, internet) per month",
              "\u20b95,000\u2013\u20b910,000"
            ],
            [
              "Personal and other miscellaneous expenses per month",
              "\u20b910,000\u2013\u20b922,000"
            ],
            [
              "**Estimated monthly cost of living**",
              "**\u20b974,000\u2013\u20b91,40,000**"
            ],
            [
              "**Estimated cost of living per year**",
              "**\u20b98.9 lakh\u2013\u20b916.8 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are indicative budgeting estimates and not official university figures. You may have to pay more in Copenhagen and other high-cost areas.",
            "Students should also allow for travel, accommodation deposits, residence-permit costs and other initial expenses. Funding is competitive, and scholarships may be available to eligible students but should not be assumed.",
            "Students planning **Nursing in Denmark for Indian students** should prepare a separate estimate for tuition fees and living expenses. Understanding the **Nursing course fees in Denmark** and additional costs can help applicants plan their finances before beginning the admission process."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Nursing Admission Denmark",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Here is a general outline of the admission process for students interested in **Nursing in Denmark**:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Select a program:** Decide if you want a bachelor\u2019s degree in nursing or a master\u2019s degree in nursing or a related healthcare field.",
            "**Shortlist institutions:** Identify institutions that offer your desired program and accept international students.",
            "**Verify eligibility:** Check academic qualifications, subject and language requirements.",
            "**Prepare documents:** Prepare transcripts, certificates, passport details and language evidence.",
            "**Send your application:** Submit your application through the institution's application process by the deadline.",
            "**Fulfil additional criteria:** Supply any additional documents or information requested.",
            "**Get the admission decision:** Check the offer, program conditions and tuition arrangements.",
            "**Organize immigration formalities:** After admission, proceed with the relevant residence-permit procedure.",
            "**Get ready to study:** Arrange accommodation, finances and any required clinical-placement documentation."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants must verify all deadlines and procedures with the institution to which they apply. The **Nursing admission in Denmark** process may differ depending on the course and applicant category, so students should follow the official instructions carefully."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Nursing License in Denmark",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "It is not possible to work automatically as a nurse in Denmark after having completed a nursing education. Depending on the applicant\u2019s education and situation, the requirements for professional licensing and recognition of qualifications are different.",
            "Internationally trained nurses may have to pass qualification assessment and meet other requirements, such as Danish language proficiency and other professional requirements.",
            "Indian students wishing to work in Denmark after graduation should:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Check whether the qualification entitles you to professional authorization.",
            "See the current requirements from the relevant Danish health authorities.",
            "Learn about the requirements for professional practice in Danish.",
            "Think about any further testing, training or documentation that is required.",
            "Check the immigration and work-permit conditions separately."
          ]
        },
        {
          "t": "p",
          "items": [
            "The requirements may change, and applicants should therefore contact the official Danish health authorities before making decisions about employment or professional registration. Students planning **Nursing in Denmark for Indian students** should consider professional recognition and licensing requirements as part of their long-term career planning."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Denmark Nursing Salary and Job Opportunities",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Nursing graduates may be employed in hospitals, community healthcare, elderly care, rehabilitation, mental healthcare and other healthcare services. Depending on qualifications and experience, related opportunities may also be available in public health, healthcare research and administration."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Registered nurse, subject to professional registration.",
            "Nurse, hospital.",
            "Community health professional.",
            "Nurse (elderly care).",
            "Rehabilitative care provider.",
            "Mental healthcare professional, with appropriate qualifications.",
            "Healthcare researcher/coordinator, if applicable.",
            "Healthcare administration professional."
          ]
        },
        {
          "t": "p",
          "items": [
            "Nursing salaries differ depending on experience, employer, location, specialization, working hours and applicable employment agreements. Students should consult recent salary information in Denmark for the job they are planning to work in, instead of relying on a single salary figure.",
            "International graduates should also consider professional authorization, Danish language skills and work eligibility. A degree does not guarantee a job or a certain salary. Students interested in **Nursing in Denmark** should understand the professional requirements and employment conditions before making career decisions."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Needed to Study Nursing in Denmark",
      "lead": "Essential details regarding nursing in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The specific document checklist will vary according to the program and institution. The documents most often requested are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or accepted ID.",
            "Secondary-school certificates and transcripts for admission to bachelor programs.",
            "Master's admission bachelor's degree certificate and transcript.",
            "Proof of required subjects studied.",
            "Where applicable, evidence of proficiency in Danish or English language.",
            "Curriculum Vitae (if required).",
            "Statement of purpose/motivation letter, if applicable.",
            "Documents of professional registration or work experience for relevant postgraduate courses.",
            "Certified translation of documents, if needed.",
            "Completed application forms and institution-specific supporting documents."
          ]
        },
        {
          "t": "p",
          "items": [
            "Further documentation may be required after admission for immigration, financial evidence, accommodation or clinical placements. Students applying for **Nursing in Denmark for Indian students** should check the document requirements for international applicants and prepare their paperwork according to the institution's instructions."
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
      "q": "Q1. What is the duration of nursing study in Denmark?",
      "a": "A professional bachelor\u2019s program in nursing typically lasts approximately 3.5 years. Master's courses in related healthcare fields usually take about two years, depending on the course."
    },
    {
      "q": "Q2. Is Nursing in Denmark possible for Indian students?",
      "a": "Yes. Indian students can apply if they meet the institution\u2019s academic, language and other admission requirements. They will have to be assessed according to the rules of the institution."
    },
    {
      "q": "Q3. Is the nursing program in Denmark offered in English?",
      "a": "Many professional nursing programs are taught in Danish due to clinical placements involving interaction with patients. Some postgraduate healthcare programs may be taught in English. Students should check the language of instruction for individual courses."
    },
    {
      "q": "Q4. How much does it cost to study nursing in Denmark in Indian Rupees?",
      "a": "The estimated living expenses are \u20b98.9 lakh to \u20b916.8 lakh annually. Tuition fees depend on the program and student citizenship. Students should contact their institution for the latest fee information."
    },
    {
      "q": "Q5. Are Indian nursing graduates eligible to work in Denmark?",
      "a": "Indian nursing graduates may be eligible subject to meeting relevant qualification recognition, professional authorization, language, immigration and employment requirements. Graduates are advised to check the present rules before they commence practice. Choosing **Nursing in Denmark** requires careful planning around university selection, program availability, academic eligibility, language proficiency, tuition fees and professional licensing. Students should compare institutional requirements and verify the latest information before applying. Edu-Hawk Worldwide helps students explore international education opportunities through study-abroad guidance, university selection and application planning. Students interested in pursuing nursing abroad can seek information about their available study options and prepare for their next academic journey with Edu-Hawk Worldwide."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function NursingDenmark() {
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
      seoPath="/study-abroad/denmark/nursing"
    />
  );
}
