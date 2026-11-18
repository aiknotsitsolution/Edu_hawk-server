import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Denmark/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Denmark/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Denmark/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Denmark/Pharmacy/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Denmark/Pharmacy/image1.png";
import uniImg2 from "../../../../Images/Abroad/Denmark/Pharmacy/image2.png";
import uniImg3 from "../../../../Images/Abroad/Denmark/Pharmacy/image3.png";
import cmsData from "../../../../data/study_abroad/denmark/pharmacy.json";

const page = {
  "name": "Pharmacy",
  "country": "Denmark",
  "slug": "pharmacy",
  "title": "Pharmacy in Denmark for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Pharmacy in Denmark: Top universities, course duration, tuition fees in DKK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Pharmacy in Denmark, Pharmacy in Denmark for Indian Students, Best Universities in Denmark, Denmark Pharmacy Admission, Cost of Studying in Denmark, Edu-Hawk Worldwide",
  "introTitle": "Pharmacy in Denmark for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Pharmacy in Denmark for Indian students."
  ],
  "overview": [
    "Explore top accredited Danish universities, tuition costs, eligibility, and visa procedures for Pharmacy."
  ],
  "level": "B.Pharm & M.Pharm",
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
      "title": "Why Study Pharmacy in Denmark?",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Pharmacy in Denmark** can be a good option for students interested in pharmaceutical sciences, drug development, medicine safety and healthcare research. Denmark boasts a strong life sciences sector, featuring modern research facilities and pharmaceutical companies active in drug discovery, biotechnology and medicine production.",
            "Studying pharmacy in Denmark can help students develop scientific knowledge and an understanding of how medicines are developed, tested, manufactured and used safely. Depending on the program, students may study pharmaceutical chemistry, pharmacology, clinical pharmacy, drug formulation and pharmaceutical technology.",
            "The main benefits of studying pharmacy in Denmark are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Quality Education:** Gain a strong foundation in pharmaceutical sciences and medicine.",
            "**Research Opportunities:** Explore drug discovery, pharmaceutical development and medical research.",
            "**Modern Labs:** Gain practical experience of laboratory techniques and scientific methods through relevant coursework.",
            "**Life-Sciences Industry:** Learn more about Denmark's pharmaceutical and biotechnology industries.",
            "**International Exposure:** Learn in a country with a strong research and innovation environment.",
            "**Career Flexibility:** Prepare for opportunities in pharmaceutical research, industry, quality assurance, regulatory affairs and other related fields."
          ]
        },
        {
          "t": "p",
          "items": [
            "International students should carefully check the language of instruction. Some courses are taught in Danish, and Danish language proficiency may be required for patient-facing pharmacy work and professional registration. Students considering **Pharmacy in Denmark for Indian students** should understand these language and professional requirements before selecting a course.",
            "Edu-Hawk Worldwide provides study-abroad guidance and university selection information for students exploring international education opportunities in pharmaceutical and healthcare-related fields."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Pharmacy Courses in Denmark",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Denmark has undergraduate and postgraduate study options in pharmacy and related pharmaceutical sciences. The course title, length, language and professional recognition depend on the institution. Students exploring **Pharmacy courses in Denmark** should understand the difference between professional pharmacy education and pharmaceutical science programs.",
            "Bachelor\u2019s degree programs or other related pharmaceutical science pathways provide basic knowledge in chemistry, biology, drugs and laboratory techniques. Depending on the program, study may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Organic and pharmaceutical chemistry.",
            "Biology and human physiology.",
            "Basics of pharmacology.",
            "Pharmaceutical technology and drug formulation.",
            "Laboratory methods and analytical chemistry.",
            "Quality and safety of medicine.",
            "Microbiology and biochemistry."
          ]
        },
        {
          "t": "p",
          "items": [
            "Graduates with a bachelor\u2019s degree in pharmaceutical sciences are not automatically eligible to practise as pharmacists. Students must verify whether the program is part of the recognized professional pharmacy track in Denmark.",
            "Master\u2019s-level programs provide advanced study in pharmaceutical science, drug development, research and related disciplines. Relevant areas of study may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Pharmaceutical science.",
            "Pharmacology and medicinal chemistry.",
            "Pharmacology and toxicology.",
            "Drug delivery and formulation.",
            "Drug technology.",
            "Clinical pharmacy and drug use.",
            "Biotechnology and drug development.",
            "Quality management and regulatory science."
          ]
        },
        {
          "t": "p",
          "items": [
            "This varies by course, but a full-time master's program is often about two years in length. For entry-level positions, students may need a relevant bachelor's degree and courses in chemistry, biology, pharmacy or other sciences.",
            "Not all institutions offer all specializations, and some programs are taught in Danish rather than English. Applicants should compare **Pharmacy courses in Denmark** based on their academic background, preferred specialization and future career goals."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Pharmacy Universities in Denmark",
      "lead": "Explore leading universities and institutions in Denmark offering accredited Pharmacy programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Copenhagen",
          "location": "University of Copenhagen, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "The University of Copenhagen provides pharmaceutical education through its School of Pharmaceutical Sciences. * **Bachelor in Pharmacy:** A Danish-taught program. * **Master's in Pharmacy:** A Danish-taught program that builds on undergraduate education in pharmacy. * **MSc in Pharmaceutical Sciences (Global):** A two-year English-taught program focusing on pharmaceutical science and the development of medicines. The English-taught Pharmaceutical Sciences program is relevant for students who want to pursue a career in the pharmaceutical industry and research. It does not qualify graduates to work as pharmacists in community or hospital pharmacy.",
          "img": uniImg1
        },
        {
          "name": "Aarhus University",
          "location": "Aarhus University, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "Aarhus University conducts education and research in pharmaceutical-related scientific disciplines such as medicinal chemistry and molecular sciences. Students interested in drug discovery and pharmaceutical research should look at its program catalogue to see whether their academic background meets the admission requirements.",
          "img": uniImg2
        },
        {
          "name": "How to Select the Right University",
          "location": "How to Select the Right University, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "When choosing a university, consider the language of instruction, curriculum, laboratory facilities, admission requirements, tuition fees and professional recognition of the program. Students who want to practise as pharmacists should ensure that the chosen qualification satisfies the relevant Danish authorization requirements. Before applying, compare **Pharmacy universities in Denmark** and check the official course information to understand program availability, academic conditions and professional opportunities.",
          "img": uniImg3
        }
      ],
      "unis_data": [
        {
          "name": "University of Copenhagen",
          "location": "University of Copenhagen, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "The University of Copenhagen provides pharmaceutical education through its School of Pharmaceutical Sciences. * **Bachelor in Pharmacy:** A Danish-taught program. * **Master's in Pharmacy:** A Danish-taught program that builds on undergraduate education in pharmacy. * **MSc in Pharmaceutical Sciences (Global):** A two-year English-taught program focusing on pharmaceutical science and the development of medicines. The English-taught Pharmaceutical Sciences program is relevant for students who want to pursue a career in the pharmaceutical industry and research. It does not qualify graduates to work as pharmacists in community or hospital pharmacy.",
          "img": uniImg1
        },
        {
          "name": "Aarhus University",
          "location": "Aarhus University, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "Aarhus University conducts education and research in pharmaceutical-related scientific disciplines such as medicinal chemistry and molecular sciences. Students interested in drug discovery and pharmaceutical research should look at its program catalogue to see whether their academic background meets the admission requirements.",
          "img": uniImg2
        },
        {
          "name": "How to Select the Right University",
          "location": "How to Select the Right University, Denmark",
          "fee": "DKK 60,000 \u2013 120,000 / Year",
          "desc": "When choosing a university, consider the language of instruction, curriculum, laboratory facilities, admission requirements, tuition fees and professional recognition of the program. Students who want to practise as pharmacists should ensure that the chosen qualification satisfies the relevant Danish authorization requirements. Before applying, compare **Pharmacy universities in Denmark** and check the official course information to understand program availability, academic conditions and professional opportunities.",
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
      "title": "You Can Study Pharmacy in Denmark If You:",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "You must meet the requirements of the course level, university and type of qualification. **Pharmacy eligibility in Denmark** varies according to the selected program and the applicant's previous education.",
            "In general, applicants must have:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized secondary-school qualification corresponding to the Danish matriculation requirements.",
            "A solid academic background in chemistry and other related sciences.",
            "The subject levels and grades required by the university.",
            "Proficiency in Danish language for pharmacy programs taught in Danish.",
            "Supporting academic documents for the evaluation of international qualifications."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students must see whether their Class 12 subjects and scores are in line with the requirements of the institution they are applying to. Admission is not automatic after completing Class 12 in a science stream. Students interested in **Pharmacy in Denmark for Indian students** should review the subject requirements and qualification assessment process before applying.",
            "Usually, applicants need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor's degree in pharmacy, chemistry, biochemistry, medicinal chemistry or another relevant scientific discipline, as applicable to the program.",
            "Credits in chemistry, biology, biochemistry or a comparable field.",
            "English language proficiency for English-taught programs.",
            "Proficiency in Danish for Danish-language programs.",
            "Other academic papers or supporting information required by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, the University of Copenhagen's MSc in Pharmaceutical Sciences (Global) specifies relevant academic courses and an English language requirement. Applicants should check their transcripts against the official criteria.",
            "Meeting the minimum **Pharmacy eligibility in Denmark** requirements does not guarantee admission. Students should review the course-specific conditions and prepare the required academic evidence."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Denmark Pharmacy Admission Requirements",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants should refer to the official admission requirements before applying. The **Pharmacy admission requirements in Denmark** depend on the course, university, academic qualifications and language of instruction.",
            "**Academic qualifications:** Universities consider previous education, grades, relevant subjects and course credits. Applicants for master's programs may be required to show appropriate chemistry and biological sciences coursework in their bachelor's degrees.",
            "**Language of instruction:** Danish is required for programs taught in Danish. Postgraduate programs taught in English may require proof of English proficiency through accepted qualifications or tests.",
            "**Application deadlines:** Deadlines differ by program, type of applicant and intake. For example, the University of Copenhagen has a deadline of 15 January for some master's programs beginning in September for applicants from outside the EU/EEA and Switzerland. Always check the exact course deadline and intake.",
            "**Selection process:** Some programs have limited places and rank eligible candidates on the basis of academic performance or other published criteria. Meeting minimum requirements does not guarantee admission.",
            "**Recognition of qualifications:** Applicants with Indian qualifications may be asked to provide detailed transcripts, grading information, course descriptions and certified translations where applicable.",
            "Understanding the **Pharmacy admission requirements in Denmark** early can help international students prepare their academic records, language evidence and other supporting documents. Edu-Hawk Worldwide can provide study-abroad guidance and application planning information to students exploring pharmacy and pharmaceutical science programs abroad."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Pharmacy in Denmark",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The total **Cost of studying pharmacy in Denmark** includes tuition fees, accommodation, food, transport, study materials and personal expenses. Costs will vary depending on the university, city, program and student's citizenship.",
            "Tuition fees are dependent on the institution and course. Students from outside the EU/EEA pay different tuition fees than students inside the EU/EEA. Indian students should check the current fee for their specific program.",
            "Non-EU/EEA students may be liable to pay tuition fees for English-taught master's programs. There may be scholarships available to qualified applicants, but they are competitive and should not be assumed.",
            "The figures below are preliminary budget estimates, not official university quotations."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Cost",
            "Estimated Expenses"
          ],
          "rows": [
            [
              "Monthly accommodation",
              "\u20b940,000\u2013\u20b975,000"
            ],
            [
              "Groceries and food in a month",
              "\u20b915,000\u2013\u20b925,000"
            ],
            [
              "Local transport monthly",
              "\u20b94,000\u2013\u20b98,000"
            ],
            [
              "Utilities, internet and phone monthly",
              "\u20b95,000\u2013\u20b910,000"
            ],
            [
              "Monthly personal and incidental expenses",
              "\u20b910,000\u2013\u20b922,000"
            ],
            [
              "**Estimated monthly living expenses**",
              "**\u20b974,000\u2013\u20b91,40,000**"
            ],
            [
              "**Average annual cost of living**",
              "**\u20b98.9 lakh\u2013\u20b916.8 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Cost of living may be higher in Copenhagen and other expensive areas. Students should also plan for the cost of travel, accommodation deposits, residence permit fees and initial setup costs.",
            "Determine the total cost of tuition and living expenses for the entire course before accepting admission. A realistic **Cost of studying pharmacy in Denmark** budget should include both academic expenses and everyday living costs. Indian applicants should also confirm the applicable tuition category and scholarship conditions before making financial decisions."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Pharmacy School Admission Denmark",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Here\u2019s how students who wish to study pharmacy in Denmark can go about it:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose a program:** Choose between professional pharmacy education and pharmaceutical sciences or research-oriented programs.",
            "**Shortlist universities:** Find institutions that offer the qualification you want and check if you are eligible to apply as an international student.",
            "**Review academic requirements:** Look at the required subjects, grades and prerequisite credits.",
            "**Check the teaching language:** Determine whether you need Danish or English.",
            "**Prepare documents:** Obtain transcripts, certificates, passport information and proof of language proficiency.",
            "**Apply:** Submit your application through the university\u2019s admission portal before the deadline.",
            "**Meet other requirements:** Submit course descriptions, grading information or other materials as requested.",
            "**Review the admission offer:** Check the program duration, tuition fees and any conditions attached to admission.",
            "**Complete immigration formalities:** After admission, follow the procedure for obtaining a Danish residence permit.",
            "**Prepare for enrolment:** Organize accommodation, finances and any practical or laboratory requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants should check official university information for deadlines and application instructions, as procedures can vary between programs. Students planning **Pharmacy in Denmark for Indian students** should allow enough time for qualification assessment and document preparation.",
            "Edu-Hawk Worldwide supports students in exploring study-abroad opportunities and understanding university selection and application planning for international courses."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Danish Pharmacy Licensing",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students who want to become a pharmacist in Denmark should be aware that there is a difference between a pharmaceutical science qualification and a professional qualification in pharmacy.",
            "Graduates with a pharmaceutical sciences degree are prepared to work in research, pharmaceutical development or industry settings. However, this degree does not qualify a graduate to practise as a pharmacist. Professional pharmacy work is regulated by the relevant Danish qualification and authorization rules.",
            "International graduates should:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Ensure their qualification is appropriate for practising pharmacy professionally.",
            "Check the latest rules for recognition of foreign pharmacy qualifications.",
            "Confirm Danish language requirements for patient-facing roles.",
            "Determine whether there is a need for any further examinations, training or documentation.",
            "Check work conditions and residence-permit conditions separately."
          ]
        },
        {
          "t": "p",
          "items": [
            "If you have a pharmacy degree in India and want to work in Denmark later, make sure to check the recognition process with the relevant Danish authorities before planning your career. Students exploring **Pharmacy in Denmark for Indian students** should consider professional licensing requirements alongside their academic choices."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Pharmacy Graduates: Jobs and Salary in Denmark",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "Pharmacy and pharmaceutical science graduates may find employment in the healthcare industry, research, pharmaceutical production, biotechnology and drug development. The available roles depend on qualifications, work experience, language skills and professional recognition.",
            "**Community and Hospital Pharmacy:** Pharmacists who are suitably qualified and registered can counsel patients and healthcare professionals on the safe and effective use of medicines.",
            "**Pharmaceutical Research:** Graduates may be involved in drug discovery, laboratory research, formulation development and scientific studies.",
            "**Drug Development and Biotechnology:** Opportunities exist in research support, development projects and work with pharmaceutical or biotechnology companies.",
            "**Quality Assurance and Quality Control:** Professionals may be involved in testing, documentation, manufacturing standards and product quality.",
            "**Regulatory Affairs:** Roles include pharmaceutical documentation, compliance, product registration and regulatory procedures.",
            "**Clinical Research:** Suitable graduates can assist in clinical trials, research coordination and drug safety activities.",
            "**Pharmaceutical Manufacturing:** Opportunities may include production, process development, validation and technical operations.",
            "Salaries depend on the role, experience, employer, location and professional qualifications. Positions in research and industry may have different salary structures than pharmacist positions in community or hospital settings.",
            "Instead of relying on a single guaranteed salary figure, students are encouraged to search for current Danish salary information for the job they want. A degree does not guarantee employment, and professional authorization may be required for regulated pharmacy roles."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required for Studying Pharmacy in Denmark",
      "lead": "Essential details regarding pharmacy in Denmark, covering key requirements, procedures, and guidance for international applicants.",
      "groups": [
        {
          "t": "p",
          "items": [
            "The exact list of required documents depends on the university and the program. Common documents requested include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or accepted ID.",
            "Certificates and transcripts of Class 10 and Class 12 for admission to bachelor's programs.",
            "For admission to a master's program: bachelor's degree certificate and transcript.",
            "Detailed course descriptions or syllabus information, if applicable.",
            "Evidence of relevant academic subjects and credit hours.",
            "Proof of knowledge of Danish or English language, as applicable.",
            "Curriculum Vitae, upon request.",
            "Motivation letter or statement of purpose, if required.",
            "Details about grading scales for international qualifications.",
            "Certified translations of documents, if necessary.",
            "Completed application forms and other documentation specific to the program."
          ]
        },
        {
          "t": "p",
          "items": [
            "On admission to the school, students may be required to provide further documentation related to immigration, proof of finances, accommodation and other administrative requirements. Applicants should check the institution's document checklist to ensure that all academic and supporting records are prepared correctly."
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
      "desc": "The University of Copenhagen provides pharmaceutical education through its School of Pharmaceutical Sciences. * **Bachelor in Pharmacy:** A Danish-taught program. * **Master's in Pharmacy:** A Danish-taught program that builds on undergraduate education in pharmacy. * **MSc in Pharmaceutical Sciences (Global):** A two-year English-taught program focusing on pharmaceutical science and the development of medicines. The English-taught Pharmaceutical Sciences program is relevant for students who want to pursue a career in the pharmaceutical industry and research. It does not qualify graduates to work as pharmacists in community or hospital pharmacy.",
      "img": uniImg1
    },
    {
      "name": "Aarhus University",
      "location": "Aarhus University, Denmark",
      "fee": "DKK 60,000 \u2013 120,000 / Year",
      "desc": "Aarhus University conducts education and research in pharmaceutical-related scientific disciplines such as medicinal chemistry and molecular sciences. Students interested in drug discovery and pharmaceutical research should look at its program catalogue to see whether their academic background meets the admission requirements.",
      "img": uniImg2
    },
    {
      "name": "How to Select the Right University",
      "location": "How to Select the Right University, Denmark",
      "fee": "DKK 60,000 \u2013 120,000 / Year",
      "desc": "When choosing a university, consider the language of instruction, curriculum, laboratory facilities, admission requirements, tuition fees and professional recognition of the program. Students who want to practise as pharmacists should ensure that the chosen qualification satisfies the relevant Danish authorization requirements. Before applying, compare **Pharmacy universities in Denmark** and check the official course information to understand program availability, academic conditions and professional opportunities.",
      "img": uniImg3
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can Indian students study pharmacy in Denmark?",
      "a": "Yes. Indian students are eligible to apply if they fulfil the academic, language and other admission requirements. They should check whether their qualifications are accepted for the chosen course. Students exploring **Pharmacy in Denmark for Indian students** should also review professional recognition requirements if they plan to work as pharmacists."
    },
    {
      "q": "Q2. Are pharmacy studies in Denmark taught in English?",
      "a": "Many professional pharmacy programs at the University of Copenhagen are taught in Danish. There are, however, postgraduate options in pharmaceutical sciences taught in English. Students should refer to the language of instruction for the particular program."
    },
    {
      "q": "Q3. How many years does it take to study pharmacy in Denmark?",
      "a": "The professional pharmacy pathway at the University of Copenhagen includes bachelor's and master's studies. A separate master's in pharmaceutical sciences can take around two years, depending on the program. Students are advised to consult the official course structure before applying."
    },
    {
      "q": "Q4. How much does it cost to study pharmacy in Denmark in Indian rupees?",
      "a": "The estimated cost of living can vary from \u20b98.9 lakh to \u20b916.8 lakh a year. Tuition fees depend on the university, program and nationality. Students should contact the institution for current fee schedules."
    },
    {
      "q": "Q5. Can I work as a pharmacist after graduation in Denmark?",
      "a": "Possibly, if you satisfy the relevant professional qualification, authorization, language and employment requirements. Having a degree in pharmaceutical science does not automatically qualify you to work as a professional pharmacist. Choosing **Pharmacy in Denmark** requires careful consideration of the available programs, university selection, academic eligibility, language requirements, tuition fees and professional recognition. Students should compare the official information provided by universities and understand the difference between pharmaceutical science and professional pharmacy qualifications before applying. Edu-Hawk Worldwide provides study-abroad guidance and application planning information to students interested in international education. With the right academic preparation and understanding of admission requirements, students can make informed decisions about their pharmaceutical education and future career opportunities."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function PharmacyDenmark() {
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
      seoPath="/study-abroad/denmark/pharmacy"
    />
  );
}
