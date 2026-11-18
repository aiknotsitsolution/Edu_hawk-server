import React from "react";
import { AbroadCoursePage } from "../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../Images/Abroad/Denmark/Engineering_UG/hero.webp";
import heroBgImg from "../../../../../Images/Abroad/Denmark/Engineering_UG/hero_bg.webp";
import sideImg from "../../../../../Images/Abroad/Denmark/Engineering_UG/side.webp";
import ctaBgImg from "../../../../../Images/Abroad/Denmark/Engineering_UG/cta_bg.webp";

// University images
import uniImg1 from "../../../../../Images/Abroad/Denmark/Engineering_UG/image1.png";
import uniImg2 from "../../../../../Images/Abroad/Denmark/Engineering_UG/image2.png";
import uniImg3 from "../../../../../Images/Abroad/Denmark/Engineering_UG/image3.png";
import cmsData from "../../../../../data/study_abroad/denmark/ug_engineering.json";

const page = {
  "name": "Undergraduate Engineering",
  "country": "Denmark",
  "slug": "ug/engineering",
  "title": "Undergraduate Engineering in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Undergraduate Engineering in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Undergraduate Engineering in Denmark, Undergraduate Engineering in Denmark for Indian Students, Best Universities in Denmark, Denmark Undergraduate Engineering Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Undergraduate Engineering in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Undergraduate Engineering in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Undergraduate Engineering."
  ],
  "level": "B.Eng / B.Sc. in Engineering",
  "crumb": "Engineering / UG Engineering",
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
      "title": "Why Study a Bachelor's Degree in Denmark?",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark is a popular country among international students. It offers a modern education system, practical learning methods and international academic environment. Danish universities and university colleges emphasize critical thinking, independent study, teamwork and real-world relevance. International students, who study a Bachelor's degree in Denmark, get the chance to experience a different academic environment and acquire skills for their future careers.",
            "Students can choose from undergraduate programmes in engineering, computer science, business, healthcare, design and other subjects. Many programmes include project work, research activities and the opportunity to work with industry. The availability of English-taught bachelor's degrees, however, depends on the subject and the institution.",
            "**Main advantages of studying in Denmark:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Modern methods of education and hands-on learning.",
            "Chance to build problem-solving and communication skills.",
            "International student communities and exposure to multiculturalism.",
            "Industry-selected projects and internship opportunities.",
            "Postgraduate study options after a bachelor's degree.",
            "A high standard of living and well-developed public transport."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students must check the language of instruction, programme accreditation, total cost and eligibility for international applicants before selecting a course. **Bachelor in Denmark for Indian students** can be an opportunity to gain international exposure and build a strong academic foundation.",
            "Students can also seek **study abroad guidance from Edu-Hawk Worldwide** to understand university options, admission requirements and the application process."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Bachelor Courses Offered in Denmark",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark offers a diverse selection of undergraduate qualifications to suit students\u2019 academic interests and career aspirations. International students wishing to pursue a Bachelor course in Denmark can choose either academic or professional degree pathways, based on their qualifications and career goals.",
            "Typically, a university bachelor's degree lasts three years and has an academic, research and subject-based focus. It can prepare students for the job market or for further education at master's level.",
            "A professional bachelor's degree normally lasts between three and four and a half years, depending on the course of study. It includes theory and practice and may include work-based placements."
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Engineering:** Mechanical, civil, electrical and selected technology-related disciplines.",
            "**Computer Science and IT:** Programming, software development, data science and artificial intelligence, subject to programme availability.",
            "**Business and Management:** International business, marketing, business administration and economics.",
            "**Design and Architecture:** Product design, visual communication and chosen creative domains.",
            "**Life Sciences:** Biotechnology, biology, environmental science and related subjects.",
            "**Social Sciences:** International studies, communication and other humanities or social sciences disciplines."
          ]
        },
        {
          "t": "p",
          "items": [
            "Not all bachelor's-level courses are taught in English. On Denmark's official study portal, students can find programmes that match their qualifications and preferred language.",
            "The choice of **Bachelor courses in Denmark** should depend on the student's academic background, preferred subject and future career plans. Students should also compare the course duration, practical learning opportunities and possibilities for postgraduate education."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities in Denmark for Bachelors",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Undergraduate Engineering programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Copenhagen",
          "location": "University of Copenhagen, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "Offers bachelor's programmes in the fields of sciences, humanities, social sciences and other academic disciplines. Many programmes require Danish language skills.",
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "University of Southern Denmark (SDU)",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "The University of Southern Denmark has bachelor's programmes, including some English-taught ones, such as Artificial Intelligence.",
          "img": uniImg2
        },
        {
          "name": "IT University of Copenhagen",
          "location": "IT University of Copenhagen, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "Undergraduate degrees are offered in software development, data science, digital design and other related IT areas. Students need to shortlist the institutions on the basis of their subject of study, language of instruction, entry requirements and tuition budget. When comparing the **Best universities in Denmark for bachelor's**, international applicants should also check whether their preferred programme is available in English and accepts international students.",
          "img": uniImg3
        }
      ],
      "unis_data": [
        {
          "name": "University of Copenhagen",
          "location": "University of Copenhagen, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "Offers bachelor's programmes in the fields of sciences, humanities, social sciences and other academic disciplines. Many programmes require Danish language skills.",
          "img": uniImg1
        },
        {
          "name": "University of Southern Denmark (SDU)",
          "location": "University of Southern Denmark (SDU)",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "The University of Southern Denmark has bachelor's programmes, including some English-taught ones, such as Artificial Intelligence.",
          "img": uniImg2
        },
        {
          "name": "IT University of Copenhagen",
          "location": "IT University of Copenhagen, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "Undergraduate degrees are offered in software development, data science, digital design and other related IT areas. Students need to shortlist the institutions on the basis of their subject of study, language of instruction, entry requirements and tuition budget. When comparing the **Best universities in Denmark for bachelor's**, international applicants should also check whether their preferred programme is available in English and accepts international students.",
          "img": uniImg3
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
      "title": "Can You Study for a Bachelor's in Denmark?",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants must meet the general admission requirements, the programme-specific requirements and the language requirements as stipulated by the institution. Understanding **Bachelor eligibility in Denmark** is important before beginning the application process."
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Academic requirements:** Students are usually required to have completed Class 12 or an equivalent upper-secondary qualification recognised for admission to Danish higher education.",
            "**Subject requirements:** Engineering and science programmes may require mathematics, physics, chemistry or other subjects at specified academic levels.",
            "**Academic results:** No single percentage requirement applies to all Danish universities. Selection is based on the programme's standards, the student's qualifications and the selection process.",
            "**English proficiency:** Those applying for English-language programmes may need to have IELTS, TOEFL or another accepted qualification. The required score is different for each university.",
            "**Danish language:** Applicants for courses taught in Danish must meet the relevant Danish language requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some qualifications gained outside Europe may have to be assessed individually or require additional education. Applicants should check whether their Indian Class 12 qualification is sufficient for their chosen programme.",
            "Indian students should also verify subject combinations, academic equivalence and language requirements before applying for a **Bachelor's degree in Denmark**."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Criteria for a Bachelor's in Denmark",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Each institution and course has different requirements and documents. The **Bachelor admission requirements in Denmark** should be checked carefully before submitting an application.",
            "Often students are asked to prepare:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Mark sheets and certificates of Class 10th and Class 12th.",
            "Copies of academic transcripts and certified translations, if applicable.",
            "A valid passport.",
            "Results of the language test in English or Danish, if applicable.",
            "Prerequisite records and subject-specific qualifications.",
            "A motivation letter or any other application material upon request.",
            "Relevant examinations or supplementary courses, where relevant.",
            "Evidence of additional academic qualifications, if required."
          ]
        },
        {
          "t": "p",
          "items": [
            "In Denmark, many undergraduate programmes have a coordinated admission procedure. Some institutions may have additional requirements for international applicants. Check the official application route and deadline for the selected programme.",
            "Students applying for **Bachelor in Denmark for Indian students** should prepare their academic documents in advance and confirm whether additional assessment of their Class 12 qualification is necessary.",
            "**Edu-Hawk Worldwide** can provide study abroad guidance to help students understand admission criteria, organise documents and plan their university applications."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "How Much Does a Bachelor's Study Cost in Denmark?",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The cost depends on the university, the course, the city and your accommodation. The majority of applicants from India are from outside the EU/EEA and normally pay tuition fees unless they receive an exemption."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Estimated Cost in INR"
          ],
          "rows": [
            [
              "Tuition Fees",
              "\u20b95 lakh\u2013\u20b915 lakh and more"
            ],
            [
              "Accommodation",
              "\u20b94 lakh\u2013\u20b98 lakh"
            ],
            [
              "Groceries and Food",
              "\u20b92 lakh\u2013\u20b93 lakh"
            ],
            [
              "Transport",
              "\u20b940,000\u2013\u20b91 lakh"
            ],
            [
              "Personal and Study Expenditure",
              "\u20b91 lakh\u2013\u20b92 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The price ranges shown are for indicative budget purposes only. Some programmes are more costly. For example, IT University of Copenhagen has an annual tuition fee of \u20ac16,500 for non-EU/EEA students admitted in 2026\\.",
            "Students should also plan for the costs of visa and residence permit fees, travel, insurance (where applicable) and initial accommodation deposits.",
            "Some institutions have scholarships or tuition waivers for qualifying international students. Availability varies by university and programme. Not every university offers undergraduate scholarships. Students should verify the conditions with their chosen institution.",
            "The overall **Cost of studying for a Bachelor's in Denmark** depends on tuition fees, accommodation, daily expenses and the city where students choose to live. Students should prepare a complete budget before accepting an admission offer.",
            "For Indian applicants, it is important to consider currency fluctuations and additional initial expenses. **Edu-Hawk Worldwide** can guide students in understanding the financial planning involved in pursuing a bachelor's degree abroad."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Procedure to Take Bachelor Admission in Denmark",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process usually includes the following steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Select your course:** Pick your preferred subject and degree type.",
            "**Shortlist institutions:** Compare programmes, fees, location and language of instruction.",
            "**Verify eligibility:** Check if your Class 12 qualification and subjects are relevant.",
            "**Prepare for language tests:** Take an accepted English or Danish test, if required.",
            "**Gather documents:** Prepare academic records, passport details and other application documents.",
            "**Apply:** Apply via the official university portal or the respective national application system.",
            "**Review your admission offer:** Check admission requirements, tuition fees and deadlines for payment.",
            "**Secure funding:** Budget for tuition, housing and daily living costs.",
            "**Apply for a residence permit:** Follow the official immigration process in Denmark.",
            "**Prepare for departure:** Arrange accommodation, transport and university enrolment."
          ]
        },
        {
          "t": "p",
          "items": [
            "Undergraduate programmes often have deadlines months before the academic year starts, so students should start early.",
            "Applicants planning **Bachelor admission in Denmark** should follow the official instructions of their selected university and check whether their application must be submitted through a coordinated admission system."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Denmark Student Visa & Residence Permit",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Typically, students from India who wish to take a full-time degree in Denmark will need the relevant residence permit for study.",
            "You might have to provide:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Acceptance confirmation from an approved institution.",
            "Proof of payment of tuition fees, if applicable.",
            "Proof of sufficient financial means according to current regulations.",
            "A valid passport and the necessary application documents.",
            "Proof that they satisfy the language requirements of the programme."
          ]
        },
        {
          "t": "p",
          "items": [
            "The self-support amount for 2026 is DKK 7,426/month according to the Danish immigration authority, but be aware of the rules and exemptions that apply. Students should review the official requirements for their individual situation prior to application.",
            "A residence permit does not mean that you will be offered a permanent job after graduation. Students should consider current work rights and post-study options when choosing a programme.",
            "Indian students planning **Bachelor in Denmark for Indian students** should carefully understand the student residence permit process and ensure that they meet the applicable financial and documentation requirements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Job Prospects After a Bachelor's Degree in Denmark",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the subject and qualifications, a bachelor's degree can lead graduates to employment or further education. Students completing a **Bachelor's degree in Denmark** can explore different career paths based on their academic specialisation and professional skills."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Study Area",
            "Possible Career Positions"
          ],
          "rows": [
            [
              "Engineering",
              "Junior Engineer, Design Engineer"
            ],
            [
              "Computer Science",
              "IT Support Specialist, Software Developer"
            ],
            [
              "Business",
              "Marketing Coordinator, Business Analyst"
            ],
            [
              "Data Science",
              "Junior Data Analyst, Data Technician"
            ],
            [
              "Art and Design",
              "UX/UI Designer, Product Design Assistant"
            ],
            [
              "Environmental Studies",
              "Sustainability Assistant, Environmental Analyst"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The job you get will depend on your technical skills, language skills, experience you have in the area and the needs of the employer. Some positions require you to speak Danish, while others in international companies may require English.",
            "International graduates must also comply with Danish work-permit and immigration regulations. Students should not assume a degree equals a job; they should research the job prospects for their chosen field.",
            "Students should also explore whether their chosen bachelor's qualification supports further master's-level study and professional specialisation."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents You Need to Study a Bachelor's in Denmark",
      "lead": "Essential details regarding undergraduate engineering in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students should prepare the following documents according to their university's checklist."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Certificates and mark sheets of Class 10 and Class 12\\.",
            "Transcripts and certified translations, if required.",
            "Subject-specific qualifications or further course records."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Completed application form.",
            "Language test scores, where required.",
            "Letter of motivation or other supporting documents upon request."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Letter of admission.",
            "Tuition payment confirmation, where applicable.",
            "Bank statements or other acceptable evidence of financial status, if necessary.",
            "Residence permit application files."
          ]
        },
        {
          "t": "p",
          "items": [
            "Requirements vary by institution, programme and applicant category. Students are advised to follow the official university and Danish immigration guidance when preparing their applications.",
            "Applicants planning **Bachelor admission in Denmark** should ensure that their documents are complete, accurate and submitted before the relevant deadlines."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Copenhagen",
      "location": "University of Copenhagen, Denmark",
      "fee": "DKK 60,000 \u2013 120,000 / Year",
      "desc": "Offers bachelor's programmes in the fields of sciences, humanities, social sciences and other academic disciplines. Many programmes require Danish language skills.",
      "img": uniImg1
    },
    {
      "name": "University of Southern Denmark (SDU)",
      "location": "University of Southern Denmark (SDU)",
      "fee": "DKK 60,000 \u2013 120,000 / Year",
      "desc": "The University of Southern Denmark has bachelor's programmes, including some English-taught ones, such as Artificial Intelligence.",
      "img": uniImg2
    },
    {
      "name": "IT University of Copenhagen",
      "location": "IT University of Copenhagen, Denmark",
      "fee": "DKK 60,000 \u2013 120,000 / Year",
      "desc": "Undergraduate degrees are offered in software development, data science, digital design and other related IT areas. Students need to shortlist the institutions on the basis of their subject of study, language of instruction, entry requirements and tuition budget. When comparing the **Best universities in Denmark for bachelor's**, international applicants should also check whether their preferred programme is available in English and accepts international students.",
      "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Undergraduate Engineering in Denmark?",
      "a": "Yes, Indian students meeting the academic eligibility prerequisites and English language proficiency requirements (IELTS/TOEFL) can apply to Danish higher education institutions."
    },
    {
      "q": "What is the medium of instruction for Undergraduate Engineering in Denmark?",
      "a": "Programmes designed for international students across Danish universities are taught entirely in English."
    },
    {
      "q": "What are the typical tuition fees for Undergraduate Engineering in Denmark?",
      "a": "Tuition fees for non-EU international students typically range from DKK 60,000 to DKK 120,000 per year, depending on the programme and university."
    },
    {
      "q": "Can international students work part-time in Denmark?",
      "a": "Yes, non-EU international students holding a valid Danish residence permit are legally permitted to work up to 20 hours per week during term and full-time in June, July, and August."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function UndergraduateEngineeringDenmark() {
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
      seoPath="/study-abroad/denmark/ug/engineering"
    />
  );
}
