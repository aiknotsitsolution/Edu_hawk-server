import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/InformationTechnology/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/InformationTechnology/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/InformationTechnology/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/InformationTechnology/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/information-technology.json";

// University campus images
import kthImg from "../../../../Images/Abroad/Sweden/InformationTechnology/image1.webp";
import gothenburgImg from "../../../../Images/Abroad/Sweden/InformationTechnology/image2.webp";
import borasImg from "../../../../Images/Abroad/Sweden/InformationTechnology/image3.webp";

const page = {
  "name": "Information Technology",
  "country": "Sweden",
  "slug": "information-technology",
  "title": "Information Technology in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Information Technology in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Information Technology in Sweden, Information Technology in Sweden for Indian Students, Best Universities in Sweden, Sweden Information Technology Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Information Technology in Sweden for Indian Students",
  heroParas: [
    "Join Sweden's world-famous tech innovation ecosystem at top-ranked institutes of technology like KTH and Chalmers. Indian students master sustainable enterprise IT infrastructure, cloud architectures, and access post-study residence permits to seek skilled employment."
  ],
  overview: [
    "Sweden is globally celebrated as an innovation and digital technology powerhouse, pioneering sustainable cloud computing, green data centers, and advanced telecommunications. Studying Information Technology in Sweden provides Indian students with direct exposure to an egalitarian, English-speaking professional culture committed to open-source innovation, system resilience, and enterprise digital sustainability.",
    "Leading Swedish institutions—including KTH Royal Institute of Technology, Chalmers University of Technology, and the University of Gothenburg—deliver world-class English-taught Master's degrees in Information Technology, Network Services, and Enterprise Information Systems. Curricula emphasize distributed cloud platforms, enterprise network security, database administration, and digital service management, backed by close partnerships with Sweden's telecommunications and software giants.",
    "Under Swedish Migration Agency (Migrationsverket) regulations, international graduates completing an accredited Bachelor's or Master's degree in Sweden can apply for a post-study residence permit for up to 12 months to seek employment or explore business startup opportunities, provided they satisfy self-sufficiency maintenance funds (SEK 10,656/month for applications submitted in 2026) and comprehensive health insurance requirements. Doctoral graduates may be granted up to 18 months for job seeking, or can apply for Swedish permanent residency if they have held doctoral study permits for at least 4 of the past 7 years, completed their PhD, and satisfy statutory employment, income self-sufficiency, and conduct criteria."
  ],
  "level": "B.Sc. & M.Sc. in IT",
  "crumb": "Information Technology",
  "stats": [
    {
      "value": "SEK 80K-150K",
      "val": "SEK 80K-150K",
      "label": "Tuition / Year"
    },
    {
      "value": "Permitted",
      "val": "Permitted",
      "label": "Part-Time Work"
    },
    {
      "value": "3-4 Years",
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "value": "English",
      "val": "English",
      "label": "Medium of Study"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "World-Class Nordic Innovation",
      "desc": "Study in Sweden's globally ranked universities renowned for pioneering scientific breakthroughs, design thinking, and sustainable research."
    },
    {
      "icon": "FaGraduationCap",
      "title": "English-Taught Degrees",
      "desc": "Over 1,000 bachelor's and master's degree programs delivered entirely in English with international accreditation."
    },
    {
      "icon": "FaFileAlt",
      "title": "Generous Post-Study Work",
      "desc": "Sweden offers residence permits after graduation for students to seek employment or start innovative businesses."
    },
    {
      "icon": "FaCheckCircle",
      "title": "High Quality of Life",
      "desc": "Ranked among the top nations globally for safety, equality, environmental sustainability, and student well-being."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Sweden",
      "title": "Why Study Information Technology in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden is an attractive destination for students interested in **software systems, IT infrastructure, cloud computing, cybersecurity, data management and digital transformation**. Swedish universities emphasise independent thinking, practical projects, teamwork and the use of technology to solve real-world challenges.",
            "Students can choose a bachelor's degree to develop foundational IT skills or pursue a master's degree to specialise in areas such as information systems, AI management, digital learning and data-driven IT management.",
            "**Key benefits include:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "English-taught options at selected bachelor's and master's levels.",
            "Hands-on learning through programming and technology projects.",
            "Opportunities to explore cloud systems, cybersecurity and data analytics.",
            "Exposure to Sweden's technology and digital services sector.",
            "Career pathways in IT consulting, software development, systems analysis and technology management."
          ]
        },
        {
          "t": "p",
          "items": [
            "**Important:** Swedish universities may offer programmes under titles such as Information and Communication Technology, Information Systems, or Information Technology and Learning rather than a degree simply called \u201cInformation Technology\u201d. Students should review the curriculum and specialisations to ensure that the programme matches their academic and career goals.",
            "Through Edu Hawk worldwide study abroad guidance, students can explore suitable IT programmes and understand the requirements for studying in Sweden."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Bachelor's and Master's Degrees in Information Technology in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can choose undergraduate or postgraduate programmes depending on their previous qualifications and career interests.",
            "A bachelor's degree generally takes three years to complete and consists of 180 ECTS credits. Related programmes may include Information and Communication Technology, Information Systems Development, Software Engineering or Digital Systems.",
            "**Typical areas of study include:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Programming and Software Development",
            "Computer Networks and IT Infrastructure",
            "Database Management",
            "Web and Application Development",
            "Business Processes and Information Systems",
            "Operating Systems and Cloud Computing Basics",
            "Introduction to Cybersecurity",
            "Data Management and Analytics",
            "Systems Analysis and Design",
            "Project Management and Digital Services"
          ]
        },
        {
          "t": "p",
          "items": [
            "A master's programme can take one or two years, depending on the university and whether the qualification consists of 60 or 120 ECTS credits.",
            "**Typical areas of study include:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Information Systems and IT Management",
            "Data-Driven IT Management",
            "AI Management and Governance",
            "Distributed Systems and Cloud Computing",
            "Cybersecurity and Information Assurance",
            "Digital Transformation",
            "Learning Technologies and IT",
            "Enterprise Systems and Digital Services",
            "Research Methods and Master's Thesis"
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact subjects, duration and specialisations vary by university and programme. Applicants should check the official curriculum before choosing a course."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Bachelor's and Master's in Information Technology in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Information Technology in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 90,000 – 160,000 / Year",
          "desc": "**Bachelor's:** KTH offers a BSc in Information and Communication Technology. The three-year programme is taught in English and includes programming, electronics, computer science, mathematics and communication technology. It is a relevant option for students interested in technical IT, digital systems, artificial intelligence and communication technologies.",
          "image": kthImg,
          "img": kthImg
        },
        {
          "name": "University of Gothenburg",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 90,000 – 160,000 / Year",
          "desc": "**Master's:** The university offers an International Master's Programme in Information Technology and Learning. This two-year, English-taught programme focuses on digital technologies, learning environments, data analysis and the role of IT in organisations. It may suit students interested in digital learning, IT implementation, research and technology-enabled organisational development.",
          "image": gothenburgImg,
          "img": gothenburgImg
        },
        {
          "name": "University of Borås",
          "location": "Borås, Sweden",
          "fee": "SEK 90,000 – 160,000 / Year",
          "desc": "**Master's:** The University of Borås offers relevant master's programmes in Information Systems, including **AI Management** (relevant for students interested in artificial intelligence and AI governance) and **Data-Driven IT Management** (suitable for IT strategy, data-driven decision-making, and digital transformation). One-year and two-year options are available.",
          "image": borasImg,
          "img": borasImg
        }
      ],
      "note": [
        "**Choosing the right university:** KTH is a relevant choice for students seeking a technical bachelor's degree in Information and Communication Technology. The University of Gothenburg and University of Borås offer postgraduate options with different academic focuses. Students interested in digital learning, information systems, data-driven management or AI-related management should compare these master's programmes carefully. These are specialised information systems and technology management degrees rather than conventional computer engineering programmes.",
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Information Technology Eligibility in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility requirements vary according to the study level, university and programme.",
            "Applicants normally need to complete upper-secondary education that meets Swedish university admission requirements.",
            "**Typical requirements include:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Recognised Class 12 or equivalent qualification.",
            "Mathematics qualifications at the level required by the university.",
            "English-language proficiency as specified by the programme.",
            "Academic documents and official translations, where required."
          ]
        },
        {
          "t": "p",
          "items": [
            "For admission to KTH's BSc in Information and Communication Technology, applicants need completed upper-secondary education and English proficiency equivalent to Swedish English 6\\.",
            "Admission can be competitive, and meeting the minimum requirements does not guarantee a place.",
            "Applicants generally need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognised bachelor's degree, usually equivalent to 180 ECTS credits.",
            "Academic qualifications relevant to the selected programme.",
            "English proficiency equivalent to the university's requirements, such as Swedish English 6 or English 2, where applicable.",
            "Any required thesis, research methods coursework or programme-specific academic credits."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, the University of Bor\u00e5s' two-year AI Management programme requires a bachelor's degree, an independent academic thesis or equivalent work of at least 15 ECTS credits, and 7.5 ECTS credits in Information Systems.",
            "Requirements differ between programmes, so applicants should verify the exact academic prerequisites before applying."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Information Technology Admission Requirements in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The admission process depends on the study level and university selected.",
            "Applicants may need to submit:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 10 and Class 12 certificates and mark sheets, as applicable.",
            "Evidence of the required mathematics and English qualifications.",
            "Valid passport details and application information.",
            "Any additional documents requested by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants may need:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Bachelor's degree certificate or accepted proof of completed studies.",
            "Official university transcripts.",
            "Proof of English-language proficiency, where applicable.",
            "CV or r\u00e9sum\u00e9, if requested.",
            "Statement of purpose or motivation letter, where required.",
            "Research documents or other programme-specific supporting materials, if applicable.",
            "Course descriptions or syllabi to verify prerequisite subjects, when requested."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should follow the official application instructions of their chosen university, as individual programmes may require additional documents beyond the general admissions checklist."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying IT in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **Cost of Studying IT in Sweden** depends on the university, programme duration and living arrangements. Indian students should budget for tuition fees, accommodation, food, transportation, application fees and personal expenses.",
            "The following INR estimates use an illustrative exchange rate of SEK 1 \u2248 \u20b99.50. Actual exchange rates and bank charges may vary.",
            "For students required to pay tuition fees, the total tuition fee for KTH's BSc in Information and Communication Technology is stated as SEK 423,000 for the three-year programme.",
            "KTH indicates that scholarships are not available for this particular bachelor's programme."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Cost in SEK",
            "Approximate cost in INR"
          ],
          "rows": [
            [
              "Total tuition for three years",
              "SEK 423,000",
              "\u20b940.19 lakh"
            ],
            [
              "Application fee, if applicable",
              "SEK 900",
              "\u20b98,550"
            ],
            [
              "Monthly living expenses",
              "SEK 10,000\u201314,000",
              "\u20b995,000\u2013\u20b91.33 lakh"
            ],
            [
              "Living expenses for three years",
              "SEK 360,000\u2013504,000",
              "\u20b934.20\u2013\u20b947.88 lakh"
            ],
            [
              "**Estimated total for three years**",
              "**SEK 783,900\u2013927,900**",
              "**\u20b974.47\u2013\u20b988.15 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The following are examples of relevant programmes and their stated tuition fee estimates:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and programme",
            "Duration",
            "Total tuition fee in SEK",
            "Approximate cost in INR"
          ],
          "rows": [
            [
              "University of Gothenburg \u2013 IT and Learning",
              "2 years",
              "SEK 298,000",
              "\u20b928.31 lakh"
            ],
            [
              "University of Bor\u00e5s \u2013 AI Management",
              "2 years",
              "SEK 235,000",
              "\u20b922.33 lakh"
            ],
            [
              "University of Bor\u00e5s \u2013 Data-Driven IT Management",
              "1 year",
              "SEK 117,500",
              "\u20b911.16 lakh"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These figures should be checked against the official university fee information for the intended intake."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "One-year programme",
            "Two-year programme"
          ],
          "rows": [
            [
              "Tuition fee",
              "SEK 117,500",
              "SEK 235,000\u2013298,000"
            ],
            [
              "Living expenses",
              "SEK 120,000\u2013168,000",
              "SEK 240,000\u2013336,000"
            ],
            [
              "Application fee",
              "SEK 900",
              "SEK 900"
            ],
            [
              "**Estimated total in SEK**",
              "**SEK 238,400\u2013286,400**",
              "**SEK 475,900\u2013634,900**"
            ],
            [
              "**Approximate total in INR**",
              "**\u20b922.65\u2013\u20b927.21 lakh**",
              "**\u20b945.21\u2013\u20b960.32 lakh**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are planning estimates, not confirmed quotations for every IT programme. They exclude flights, residence permit-related expenses, accommodation deposits and other one-time costs. Students should verify the exact tuition fee for their selected programme before applying.",
            "Eligible students may also explore university scholarships, subject to the relevant eligibility criteria and scholarship conditions."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Sweden Information Technology Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning to **Study Information Technology in Sweden** can follow these general application steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Select your study level:** Choose a bachelor's programme after Class 12 or a master's programme after completing a relevant bachelor's degree.",
            "**Shortlist universities:** Compare courses, specialisations, tuition fees and eligibility criteria.",
            "**Review academic requirements:** Confirm mathematics, previous degree subjects and English-language requirements.",
            "**Prepare documents:** Organise certificates, transcripts, passport details and other supporting documents.",
            "**Apply online:** Follow the university's instructions and use Sweden's national admissions website where applicable.",
            "**Pay the application fee:** Complete payment if required.",
            "**Submit supporting documents:** Ensure all documents are submitted before the deadline.",
            "**Check the admission decision:** Monitor your application account and follow the university's instructions.",
            "**Prepare for Sweden:** Arrange tuition fees, accommodation, finances and the appropriate residence permit."
          ]
        },
        {
          "t": "p",
          "items": [
            "KTH provides the following application dates for its bachelor's programme for the Autumn 2027 intake:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Application stage",
            "Date"
          ],
          "rows": [
            [
              "Applications open",
              "16 October 2026"
            ],
            [
              "Applications close",
              "15 January 2027"
            ],
            [
              "Supporting documents and applicable fee deadline",
              "1 February 2027"
            ],
            [
              "Admission results",
              "8 April 2027"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The University of Gothenburg's Information Technology and Learning master's programme also lists an application period from 16 October 2026 to 15 January 2027.",
            "Applicants should verify the dates and deadlines for their specific programme through the official university website before applying."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Additional Studies and Professional Development",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a bachelor's degree, students can pursue a master's programme or begin working in an IT-related position. Master's graduates may continue towards doctoral research or develop specialised professional skills through technical training, certifications and industry experience.",
            "**Potential areas for further study include:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Cloud Computing and Infrastructure",
            "Cybersecurity and Network Management",
            "Artificial Intelligence and Data Analytics",
            "Information Systems and IT Strategy",
            "Software Engineering",
            "IT Management and Digital Transformation",
            "Business Technology and Enterprise Systems",
            "Digital Learning Technologies"
          ]
        },
        {
          "t": "p",
          "items": [
            "Further study should reflect each student's interests, whether in technical development, systems administration, data management, information security or technology management."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Salary and Job Opportunities After Studying Information Technology in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Information technology graduates can explore opportunities in technology companies, financial services, manufacturing, telecommunications, consulting, public services and digital businesses.",
            "**Potential job roles include:**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "IT Support Engineer",
            "Systems Administrator",
            "Information Technology Consultant",
            "Information Systems Analyst",
            "Network Engineer",
            "Database Administrator",
            "Cloud Engineer",
            "Cybersecurity Analyst",
            "Data or Business Analyst",
            "IT Project Coordinator",
            "IT Services Manager"
          ]
        },
        {
          "t": "p",
          "items": [
            "Technical knowledge, practical project experience, communication and problem-solving skills can strengthen a graduate's employment profile.",
            "Salaries vary according to experience, job role, employer and location. Some positions may also require knowledge of Swedish, depending on the employer and responsibilities."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents for Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Document requirements vary depending on whether applicants are applying for a bachelor's or master's programme."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Class 10 and Class 12 certificates and mark sheets, as applicable.",
            "Proof of required mathematics and English qualifications.",
            "Additional programme-specific documents, if requested.",
            "Official translations, where necessary."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Bachelor's degree certificate or accepted proof of completed studies.",
            "Official university transcripts and mark sheets.",
            "Proof of English-language proficiency, where required.",
            "CV or r\u00e9sum\u00e9, where applicable.",
            "Statement of purpose or motivation letter, if required.",
            "Course descriptions or syllabi, if needed to verify prerequisites.",
            "Evidence of thesis or research methods coursework, where applicable.",
            "Official translations of documents not issued in an accepted language."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants should always follow the official document checklist provided by their chosen university."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "KTH Royal Institute of Technology",
      "location": "Stockholm, Sweden",
      "fee": "SEK 90,000 – 160,000 / Year",
      "desc": "**Bachelor's:** KTH offers a BSc in Information and Communication Technology. The three-year programme is taught in English and includes programming, electronics, computer science, mathematics and communication technology. It is a relevant option for students interested in technical IT, digital systems, artificial intelligence and communication technologies.",
      "image": kthImg,
      "img": kthImg
    },
    {
      "name": "University of Gothenburg",
      "location": "Gothenburg, Sweden",
      "fee": "SEK 90,000 – 160,000 / Year",
      "desc": "**Master's:** The university offers an International Master's Programme in Information Technology and Learning. This two-year, English-taught programme focuses on digital technologies, learning environments, data analysis and the role of IT in organisations. It may suit students interested in digital learning, IT implementation, research and technology-enabled organisational development.",
      "image": gothenburgImg,
      "img": gothenburgImg
    },
    {
      "name": "University of Borås",
      "location": "Borås, Sweden",
      "fee": "SEK 90,000 – 160,000 / Year",
      "desc": "**Master's:** The University of Borås offers relevant master's programmes in Information Systems, including **AI Management** (relevant for students interested in artificial intelligence and AI governance) and **Data-Driven IT Management** (suitable for IT strategy, data-driven decision-making, and digital transformation). One-year and two-year options are available.",
      "image": borasImg,
      "img": borasImg
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Information Technology in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Information Technology in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Information Technology in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function InformationTechnologySweden() {
  const dynamicPage = {
    ...page,
    name: "Information Technology",
    introTitle: cmsData.hero?.title || page.introTitle || "Information Technology in Sweden for Indian Students",
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      .filter(s => s.label && (s.value || s.val)).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
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
      seoPath="/study-abroad/sweden/information-technology"
    />
  );
}
