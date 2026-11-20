import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/Architecture/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/Architecture/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/Architecture/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/Architecture/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/architecture.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/Architecture/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/Architecture/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/Architecture/image3.webp";


const page = {
  "name": "Architecture",
  "country": "Sweden",
  "slug": "architecture",
  "title": "Architecture in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Architecture in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Architecture in Sweden, Architecture in Sweden for Indian Students, Best Universities in Sweden, Sweden Architecture Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Architecture in Sweden for Indian Students",
  "heroParas": [
    "**Architecture in Sweden** is an attractive study option for students interested in architectural design, sustainable buildings, urban development and innovative construction. Swedish architectural education combines creative design with technical knowledge, environmental considerations and an understanding of how buildings interact with people and their surroundings."
  ],
  "overview": [
    "Indian students can explore undergraduate architecture programmes after completing Class 12 or apply for postgraduate programmes after obtaining a recognised bachelor's degree. Sweden offers several master's programmes taught in English, including the two-year MSc in Architecture at KTH Royal Institute of Technology. Undergraduate architecture education is also available, but students should carefully check the language of instruction and the qualification pathway required for professional practice.",
    "Through Edu Hawk worldwide study abroad guidance, students can explore suitable universities, understand admission requirements and compare architecture programmes in Sweden."
  ],
  "level": "Bachelor & Master of Architecture",
  "crumb": "Architecture",
  "stats": [
    {
      "val": "SEK 80K-150K",
      "label": "Tuition / Year"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
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
      "title": "Why Study Architecture in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden is known for its emphasis on sustainable development, innovative design and modern urban planning. Students can explore several areas of architectural education and develop skills relevant to the changing construction industry."
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Sustainable Design:** Learn about green buildings, environmentally responsible materials, energy efficiency and sustainable urban development.",
            "**Design-Led Education:** Develop creative ideas through architectural studios, drawings, models and design projects.",
            "**Technology and Innovation:** Understand how digital tools, construction technologies and modern design methods influence contemporary architecture.",
            "**Urban Development:** Explore the relationship between architecture, public spaces, housing, transportation and community needs.",
            "**International Learning Environment:** Study alongside students from different countries through selected English-taught programmes.",
            "**Specialisation Opportunities:** Progress into areas such as architectural design, urban design, sustainable architecture and the built environment."
          ]
        },
        {
          "t": "p",
          "items": [
            "A Swedish qualification can support an international career, but professional registration requirements differ between countries. Students planning to practise in India or elsewhere should check degree recognition and licensing requirements with the relevant professional authority."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Architecture Courses and Study Options in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Architecture courses in Sweden** generally include design studios, architectural history, construction technology, materials, environmental design and project development. Programme titles, structures and durations vary between universities."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Degree or Programme",
            "Typical Duration",
            "Main Areas of Study"
          ],
          "rows": [
            [
              "Bachelor's or undergraduate architecture programme",
              "Usually 3\u20135 years, depending on the qualification structure",
              "Design principles, drawing, architectural history, materials and building technology"
            ],
            [
              "Master's in Architecture",
              "Usually 2 years",
              "Advanced architectural design, professional practice, research, urban context and sustainability"
            ],
            [
              "MSc in Architectural Design",
              "Usually 2 years",
              "Design methods, spatial analysis, contextual design and architectural projects"
            ],
            [
              "Master's in Urban Design or Sustainable Built Environment",
              "Usually 1\u20132 years",
              "Urban planning, public spaces, environmental performance and built-environment strategy"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "**Important:** A three-year bachelor's degree alone may not satisfy the academic requirements for professional architect registration in every country. Students should understand the complete qualification pathway before enrolling, particularly if they intend to practise as licensed architects."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Architecture in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Architecture in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "\Ume\u00e5 University",
          "location": "\Ume\u00e5 University, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* Offers a five-year Architecture Programme worth 300 credits. * The programme is taught in English. * It combines architectural design, history, technology, sustainability and urban planning. * It leads to a professional degree in architecture according to the programme information.  This option may suit students looking for a longer undergraduate-level architecture pathway.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "\KTH Royal Institute of Technology",
          "location": "\KTH Royal Institute of Technology, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* Offers a two-year MSc in Architecture taught in English. * The programme explores architecture through design, technology, aesthetics, social conditions and sustainability. * Applicants generally need a relevant undergraduate degree in architecture. * An architectural portfolio is an important part of the application.",
          "image": uniImg2, "img": uniImg2
        },
        {
          "name": "",
          "location": ", Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "Recognized institution in Sweden providing accredited degree programs and research facilities for international students.",
          "image": uniImg3, "img": uniImg3
        },
        {
          "name": "\Chalmers University of Technology",
          "location": "\Chalmers University of Technology, Sweden",
          "fee": "SEK 90,000 \u2013 160,000 / Year",
          "desc": "* Offers an MSc in Architectural Design for students who want to develop advanced architectural design skills. * Applicants must meet the academic prerequisites. * A portfolio demonstrating architectural design ability is required as part of the admission process.  **Choosing the Right University:** Ume\u00e5 University is worth exploring for its five-year architecture pathway taught in English. Students who already hold a relevant undergraduate architecture qualification can consider KTH and Chalmers for postgraduate specialisation. These institutions offer different qualification pathways. Students should verify programme availability, degree titles, language requirements and professional recognition on the official university websites.",
          "image": uniImg1, "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility to Study Architecture in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility depends on the degree level, university and programme-specific requirements.",
            "Students applying after Class 12 generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Complete Class 12 or an equivalent recognised school qualification.",
            "Meet the university's mathematics and science subject requirements.",
            "Demonstrate the required English language proficiency, where applicable.",
            "Submit academic records and any additional application materials requested."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, Ume\u00e5 University's Architecture Programme has published requirements relating to mathematics, science studies and civics at specified Swedish-equivalent levels. Indian students should check how their subjects and grades are assessed against these requirements.",
            "Applicants generally need to:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Hold a recognised bachelor's degree in architecture, usually equivalent to at least 180 ECTS credits.",
            "Meet the university's English language requirements.",
            "Submit an architectural portfolio containing relevant academic design work.",
            "Provide degree certificates and academic transcripts.",
            "Meet programme-specific academic and selection requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "For KTH, the portfolio is an important part of the selection process and must follow the university's prescribed format."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements for Architecture in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "**Admission requirements for Architecture in Sweden** can be more detailed than those for many other degree programmes because universities assess both academic preparation and design ability.",
            "Applicants should check:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Class 12 academic qualifications.",
            "Mathematics and science subject requirements.",
            "Accepted school qualifications for international applicants.",
            "Language of instruction and English or Swedish proficiency requirements.",
            "Additional university-specific admission conditions."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some undergraduate architecture programmes in Sweden are taught in Swedish. For example, Chalmers states that its bachelor's programmes are taught in Swedish. English-speaking international applicants should therefore confirm the language of instruction before applying.",
            "Universities may assess:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Previous architectural education and academic credits.",
            "Design projects and the quality of the portfolio.",
            "Understanding of architectural concepts and technical principles.",
            "English language proficiency.",
            "Academic transcripts and degree certificates."
          ]
        },
        {
          "t": "p",
          "items": [
            "A portfolio is an important selection component for many master's programmes. It allows universities to assess an applicant's design ability, creativity and understanding of architectural concepts.",
            "For example, KTH's MSc Architecture application requires an anonymous PDF portfolio of up to nine project pages, along with a cover page. Applicants must follow the exact portfolio instructions published for their intended intake, as requirements may change."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Architecture in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The **cost of studying Architecture in Sweden** depends on the university, programme duration and individual living expenses. Students from outside the EU/EEA and Switzerland generally pay tuition fees unless they qualify for an exemption."
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and Programme",
            "Total Tuition Fee (SEK)",
            "Approximate Tuition Fee (INR)"
          ],
          "rows": [
            [
              "KTH \u2013 MSc in Architecture, 2 years",
              "642,000",
              "\u20b960.99 lakh"
            ],
            [
              "Ume\u00e5 University \u2013 Architecture Programme, 5 years",
              "Confirm current programme fee",
              "Intake-dependent"
            ],
            [
              "Chalmers \u2013 MSc in Architectural Design",
              "Confirm current programme fee",
              "Intake-dependent"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The published total tuition fee for fee-paying students at KTH is **SEK 642,000** for the MSc in Architecture. INR conversion is based on an illustrative exchange rate of **SEK 1 \\= \u20b99.50**. Actual costs may change with exchange rates and university fee revisions."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Approximate Monthly Cost"
          ],
          "rows": [
            [
              "Accommodation",
              "SEK 4,000\u20137,000 (\u20b938,000\u2013\u20b966,500)"
            ],
            [
              "Food and groceries",
              "SEK 2,000\u20133,000 (\u20b919,000\u2013\u20b928,500)"
            ],
            [
              "Local transportation",
              "SEK 600\u20131,000 (\u20b95,700\u2013\u20b99,500)"
            ],
            [
              "Personal and study expenses",
              "SEK 1,000\u20133,000 (\u20b99,500\u2013\u20b928,500)"
            ],
            [
              "**Estimated monthly total**",
              "**SEK 10,000\u201314,000 (\u20b995,000\u2013\u20b91.33 lakh)**"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should also budget for architecture-related expenses such as materials, model-making, printing, software, travel and other course-related costs that may not be included in tuition fees.",
            "Living costs depend on the city, accommodation and personal lifestyle. Students should also account for insurance where applicable, residence permit fees and other one-time expenses."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Procedure for Architecture Programmes in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning to apply can generally follow these steps:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Choose Your Study Pathway:** Decide whether you need an undergraduate professional architecture qualification or a specialised master's degree.",
            "**Check the Language of Instruction:** Confirm whether the programme is taught in English or Swedish and ensure that you meet the language requirements.",
            "**Review Academic Eligibility:** Check the school-subject requirements for undergraduate programmes or degree and credit requirements for master's programmes.",
            "**Prepare Your Portfolio:** For programmes requiring a portfolio, select strong academic projects and clearly explain your design process, concepts and individual contribution.",
            "**Apply Through the Official Portal:** Many international applicants apply through UniversityAdmissions.se and follow the instructions for their selected programme.",
            "**Submit Documents and Pay Required Fees:** Upload transcripts, certificates, proof of English proficiency, identification and other requested documents.",
            "**Prepare for Your Move:** After admission, plan tuition payments, accommodation, finances and a Swedish residence permit for studies, if required."
          ]
        },
        {
          "t": "p",
          "items": [
            "Application deadlines vary by university, programme and intake. There is no single deadline for all architecture programmes. Students should check the official university website and application portal for the relevant academic year."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Studies and Professional Development",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing an architecture qualification, students can pursue advanced studies or develop specialist knowledge in areas such as:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Architectural Design",
            "Sustainable Architecture",
            "Urban Planning and Urban Design",
            "Landscape Architecture",
            "Building Technologies",
            "Building Information Modelling (BIM) and Digital Design",
            "Heritage Conservation",
            "Real Estate and Construction Management"
          ]
        },
        {
          "t": "p",
          "items": [
            "**Sustainable architecture** focuses on designing buildings and structures that reduce environmental impact while supporting the health and well-being of occupants.",
            "It involves using resource-efficient and durable materials, improving energy efficiency, incorporating natural lighting and ventilation, and considering the long-term environmental and social impact of construction.",
            "Important concepts include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "**Green Building:** Designing and constructing environmentally responsible, resource-efficient buildings.",
            "**Energy-Efficient Design:** Reducing energy consumption through suitable building materials, insulation and efficient systems.",
            "**Passive Design Strategies:** Using natural sunlight, ventilation and vegetation to improve indoor conditions and reduce energy requirements.",
            "**Renewable Energy:** Incorporating energy sources such as solar and wind power where appropriate.",
            "**Sustainable Materials:** Using recycled, renewable or locally sourced materials to reduce environmental impact.",
            "**Adaptable Buildings:** Designing spaces that can be modified or repurposed as future needs change."
          ]
        },
        {
          "t": "p",
          "items": [
            "Professional development can also involve learning architectural software, building a strong design portfolio, gaining experience in architecture studios and understanding local building regulations and sustainability standards.",
            "Students planning to work as registered architects outside Sweden should check how their degree is recognised by the relevant regulator. Completing an academic qualification does not automatically guarantee professional registration in another country."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Salary and Career Opportunities After Studying Architecture in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Architecture graduates may explore employment opportunities in architecture practices, engineering consultancies, construction companies, property development firms, urban planning organisations and public-sector bodies."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Architectural Designer",
            "Junior Architect",
            "Urban Planner",
            "BIM Engineer",
            "Sustainable Building Design Consultant",
            "Architectural Visualisation Specialist",
            "Project Coordinator",
            "Construction and Design Consultant"
          ]
        },
        {
          "t": "p",
          "items": [
            "As a broad planning estimate, early-career architecture-related positions may offer around **SEK 32,000\u201340,000 per month before tax**. Experienced architects and specialists may earn more, depending on their responsibilities and area of expertise.",
            "These figures are indicative estimates, not verified or guaranteed salary bands for every role. Actual earnings depend on professional experience, portfolio quality, employer, location, responsibilities and language skills.",
            "Some positions may require Swedish language proficiency. The use of professional architect titles and registration may also be subject to national regulations and qualification requirements."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required for Admission",
      "groups": [
        {
          "t": "p",
          "items": [
            "Applicants should prepare the documents requested by their selected university and programme. Common requirements may include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or accepted identification document.",
            "Class 10 and Class 12 certificates and mark sheets for undergraduate applicants.",
            "Bachelor's degree certificate and academic transcripts for master's applicants.",
            "Proof of English language proficiency, where required.",
            "Architectural portfolio, if requested.",
            "CV or r\u00e9sum\u00e9, where applicable.",
            "Statement of purpose or motivation letter, if required.",
            "Course descriptions or evidence of relevant academic credits, where requested.",
            "Official translations of documents, where necessary."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students applying for master's programmes in architecture should carefully review the portfolio instructions. Universities may specify:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Maximum page limits.",
            "File size and PDF format.",
            "Anonymous assessment requirements.",
            "Types of academic projects that can be included.",
            "Presentation and submission guidelines."
          ]
        },
        {
          "t": "p",
          "items": [
            "KTH, for example, has specific rules for portfolio format and content. Applicants should follow the latest instructions for their chosen intake."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "\Ume\u00e5 University",
      "location": "\Ume\u00e5 University, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* Offers a five-year Architecture Programme worth 300 credits. * The programme is taught in English. * It combines architectural design, history, technology, sustainability and urban planning. * It leads to a professional degree in architecture according to the programme information.  This option may suit students looking for a longer undergraduate-level architecture pathway.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "\KTH Royal Institute of Technology",
      "location": "\KTH Royal Institute of Technology, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* Offers a two-year MSc in Architecture taught in English. * The programme explores architecture through design, technology, aesthetics, social conditions and sustainability. * Applicants generally need a relevant undergraduate degree in architecture. * An architectural portfolio is an important part of the application.",
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "",
      "location": ", Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "Recognized institution in Sweden providing accredited degree programs and research facilities for international students.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "\Chalmers University of Technology",
      "location": "\Chalmers University of Technology, Sweden",
      "fee": "SEK 90,000 \u2013 160,000 / Year",
      "desc": "* Offers an MSc in Architectural Design for students who want to develop advanced architectural design skills. * Applicants must meet the academic prerequisites. * A portfolio demonstrating architectural design ability is required as part of the admission process.  **Choosing the Right University:** Ume\u00e5 University is worth exploring for its five-year architecture pathway taught in English. Students who already hold a relevant undergraduate architecture qualification can consider KTH and Chalmers for postgraduate specialisation. These institutions offer different qualification pathways. Students should verify programme availability, degree titles, language requirements and professional recognition on the official university websites.",
      "image": uniImg2, "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Architecture in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Architecture in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Architecture in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function ArchitectureSweden() {
  const dynamicPage = {
    ...page,
    name: page.name,
    introTitle: cmsData.hero?.title || page.introTitle,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      .filter(s => s.label && s.value).length > 0
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
      seoPath="/study-abroad/sweden/architecture"
    />
  );
}
