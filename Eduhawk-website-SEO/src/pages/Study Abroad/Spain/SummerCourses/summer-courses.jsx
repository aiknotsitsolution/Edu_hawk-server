import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Spain/SummerCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Spain/SummerCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Spain/SummerCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Spain/SummerCourses/cta_bg.webp";
import Universitat_Politecnica_de_CatalunyaImg from "../../../../Images/Abroad/Spain/Engineering_UG/Mechanical/Universitat_Politecnica_de_Catalunya.webp";
import Universidad_Politecnica_de_MadridImg from "../../../../Images/Abroad/Spain/Engineering_UG/Aerospace/Universidad_Politecnica_de_Madrid.webp";
import Universitat_de_BarcelonaImg from "../../../../Images/Abroad/Spain/Dentistry/Universitat_de_Barcelona.webp";
import Universitat_Politecnica_de_ValenciaImg from "../../../../Images/Abroad/Spain/Engineering_UG/General/Universitat_Politecnica_de_Valencia.webp";
import cmsData from "../../../../data/study_abroad/spain/summer_courses.json";

const page = {
  "name": "Summer Courses in Spain",
  "country": "Spain",
  "slug": "summer_courses",
  "title": "Summer Courses in Spain for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Summer Courses in Spain: Top universities, English-taught programs, tuition fees (€2,000–€18,000/yr), scholarships, eligibility criteria, and post-study work permit opportunities.",
  "keywords": "Study Summer Courses in Spain, Summer Courses in Spain for Indian Students, Best Universities in Spain, Cost of Studying in Spain",
  "introTitle": "Summer Courses for Indian Students in Spain",
  "heroParas": [
    "Summer Courses in Spain for Indian Students offer the chance to acquire new skills, experience European culture, enhance language abilities, and gain international academic exposure during the summer break."
  ],
  "overview": [
    "Summer Courses in Spain for Indian Students offer the chance to acquire new skills, experience European culture, enhance language abilities, and gain international academic exposure during the summer break. Spanish universities and other higher education institutions provide short-term courses in business, Spanish language, engineering, architecture, hospitality, arts, international relations and technology. These Summer Courses in Spain for Indian Students allow learners to explore different academic interests during their summer break.",
    "Depending on the institution, subject and course structure, these programs can take anywhere from a few weeks to several months. Students can choose from university summer schools, cultural immersion programs, professional workshops, and specialized academic courses.",
    "Summer Courses in Spain is a good option for Indian students to pursue their academic interests and gain exposure to a different academic setting, without committing to a full degree program. Students who want to Study Summer Courses in Spain can explore short-term options according to their interests and academic goals."
  ],
  "level": "Short-term & Seasonal Programs",
  "crumb": "Programs & Pathways / Summer Courses",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Short-term & Seasonal Programs"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 to 4 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Universitat Politècnica de Catalunya (UPC), Universidad Politécnica de Madrid (UPM), Universitat de Barcelona"
    },
    {
      "label": "Medium of Study",
      "value": "English & Spanish Taught"
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Spain",
      "title": "Why study in Spain during the summer?",
      "groups": [
        {
          "t": "p",
          "items": [
            "\"Spain allows students to combine a short-term academic study experience with cultural immersion and international engagement.\" Some of the main advantages are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Short-term international education: Get an international learning experience without committing to a full degree program.",
            "Cultural immersion: Learn about Spanish traditions, history, food, architecture and lifestyle.",
            "Language development: Practice your English or improve your Spanish in an international language-learning environment.",
            "Discover academic interests: Try out a subject before deciding on a bachelor's or master's specialization.",
            "International Networking: Connect with students, educators & professionals across the globe.",
            "Hands-on learning: Get involved in workshops, group projects, lectures and field visits when they are available.",
            "International academic exposure: Get exposure to the European academic environment and teaching methodologies."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Types of Summer Courses Offered in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can try out summer programs in a wide range of academic, cultural and professional fields. They will make the decision based on their interests, academic background and future goals.",
            "The Summer Study Programs in Spain may include the following options. Students exploring Summer Study Programs in Spain can compare different subjects and course durations before selecting a program:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "Summer Course",
            "Normal Time",
            "Core Learning Topics"
          ],
          "rows": [
            [
              "Spanish Language",
              "2-8 weeks",
              "Speaking, grammar, reading and cultural communication"
            ],
            [
              "Business and Management – 2 to 6 weeks – Leadership, marketing, strategy and entrepreneurship",
              "",
              ""
            ],
            [
              "International Business",
              "2-6 weeks",
              "Developing international business, global trade and international markets"
            ],
            [
              "Engineering and Technology",
              "2–8 weeks",
              "Innovation, robotics, sustainability and new technologies"
            ],
            [
              "Computer Science and AI",
              "2-8 weeks",
              "Programming, AI and digital innovation"
            ],
            [
              "Architecture and Design",
              "2–6 weeks",
              "Urban design, architecture and creative projects"
            ],
            [
              "Hospitality and Tourism",
              "2–6 weeks",
              "Hotel management, tourism, and destination marketing"
            ],
            [
              "Arts & Culture",
              "1-6 weeks",
              "Art history, music, design and cultural studies"
            ],
            [
              "International Relations",
              "2-6 weeks",
              "Diplomacy, European affairs and global policy"
            ],
            [
              "Law and Human Rights",
              "2–6 weeks",
              "International law, human rights and legal systems"
            ],
            [
              "Medicine and Public Health",
              "Various",
              "Public health, health care issues, research-based learning"
            ],
            [
              "Environmental Studies",
              "2-8 weeks",
              "Sustainability, climate action and environmental management"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "*Durations and availability are indicative. Some of the programs are academic courses, some are workshops or cultural events. * Eligibility requirements may also apply to clinical placements and regulated professional training."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities and Schools to Consider for Summer Courses in Spain",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Universitat Politècnica de Catalunya (UPC)",
              "location": "Barcelona, Spain",
              "fee": "€2,500 – €16,000 / Year",
              "desc": "Top technical university in Spain renowned for high-impact engineering, tech, and architecture research.",
              "img": Universitat_Politecnica_de_CatalunyaImg
            },
            {
              "name": "Universidad Politécnica de Madrid (UPM)",
              "location": "Madrid, Spain",
              "fee": "€2,000 – €15,000 / Year",
              "desc": "Prestigious engineering and technical institution offering comprehensive degrees with European industry ties.",
              "img": Universidad_Politecnica_de_MadridImg
            },
            {
              "name": "Universitat de Barcelona",
              "location": "Barcelona, Spain",
              "fee": "€2,800 – €18,000 / Year",
              "desc": "Leading research university in Spain with global reputation in sciences, business, and humanities.",
              "img": Universitat_de_BarcelonaImg
            },
            {
              "name": "Universitat Politècnica de València (UPV)",
              "location": "Valencia, Spain",
              "fee": "€2,200 – €14,000 / Year",
              "desc": "Leading Mediterranean technical university known for innovation, entrepreneurship, and international programs.",
              "img": Universitat_Politecnica_de_ValenciaImg
            }
          ]
        }
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility for Summer Courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility varies by institution, level of program, subject and duration. Many short-term programs have less rigid academic requirements than full degree courses. Understanding Summer Course Eligibility in Spain can help Indian students identify programs that match their academic background and interests.",
            "Eligibility in General",
            "Indian students may have to meet the following criteria:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Possess a valid passport;",
            "Satisfy the minimum educational requirements for the chosen program.",
            "Show an interest in the selected subject.",
            "Meet English language requirements if the course is taught in English and the provider asks for proof of proficiency.",
            "Fluent in Spanish for classes that require prior knowledge.",
            "Meet the minimum age requirement of the institution.",
            "Possess the appropriate academic background for advanced/specialised programs."
          ]
        },
        {
          "t": "p",
          "items": [
            "Age and Education Requirements",
            "Summer schools vary: some are open to high school students, while others are restricted to college students, graduates or working professionals.",
            "For graduate study in engineering, business, research and other specialized fields, prior academic knowledge or related experience may be required. Students are encouraged to check the eligibility requirements for the program before applying."
          ]
        }
      ]
    },
    {
      "slot": "criteria",
      "eyebrow": "Admission Criteria",
      "title": "Spanish Summer Course Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "The application process varies from university to university. Applicants may be required to submit the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completed application form on-line.",
            "Copy of valid passport.",
            "Recent photo if necessary.",
            "Academic transcripts or school certificates if applicable.",
            "CV/résumé for specialized programs.",
            "Statement of motivation, if required.",
            "Certificate of English or Spanish language, if required.",
            "Proof of application fee or payment of course.",
            "Parental consent of eligible minors, where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some courses, particularly technical or research-based or of a higher academic level, may require previous studies in the relevant subject. Students are required to read the official program instructions prior to applying."
          ]
        }
      ]
    },
    {
      "slot": "costs",
      "eyebrow": "Tuition & Living Costs",
      "title": "Price of Summer Courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Total cost varies depending on the duration of the program, subject, institution and city as well as whether accommodation, meals or cultural activities are included in the tuition fee. Understanding Summer Course Fees in Spain can help students plan their budgets and compare different programs before applying."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Indicative Cost"
          ],
          "rows": [
            [
              "Short summer course",
              "€300-€1.500"
            ],
            [
              "Specialized or university summer school",
              "€1,000-€3,500+"
            ],
            [
              "Accommodation",
              "€400-€900 per month"
            ],
            [
              "Food & groceries",
              "€200-350 / month"
            ],
            [
              "Local transport",
              "€30-€80 a month"
            ],
            [
              "Personal costs",
              "€100-€200 a month"
            ],
            [
              "Flights from India",
              "Varies with dates and airline"
            ],
            [
              "Visa, insurance and administration",
              "Depending on the circumstances"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are indicative budget estimates and are not confirmed prices for a particular program. Some of the top-rated summer schools include accommodation, meals, excursions or course materials in the course fee, while others make a separate charge for such extras.",
            "For rough financial planning, 1€ is about &#8377;109. Exchange rates may fluctuate and students should check the current conversion rate when drawing up their final budget."
          ]
        }
      ]
    },
    {
      "slot": "process",
      "eyebrow": "How to Apply",
      "title": "How to enrolll in summer courses in Spain",
      "groups": [
        {
          "t": "p",
          "items": [
            "Below are some general steps Indian students can use while applying for a summer program:"
          ]
        },
        {
          "t": "ol",
          "items": [
            "Select a subject: Indicate your career goals, field of study or academic interests.",
            "Choose a programme: Compare course length, syllabus, location, language of instruction and fees.",
            "Check eligibility: Check the age limit, academic background and language skills.",
            "Check application deadlines: Summer programs can have early deadlines or limited space, so look up the schedule ahead of time.",
            "Apply: Fill out the official application form and submit the required documentation.",
            "Confirm Admission: Go through the admission offer, payment details and course schedule.",
            "Find accommodation: Determine whether the institution provides student housing or partner accommodation.",
            "Check whether you need a visa: Check the relevant consular information for Spain depending on your nationality and length of course.",
            "Book Flights, Insurance and Arrival Details: Verify the requirements and complete your flight, insurance and arrival arrangements.",
            "Participate in the programme: Attend classes, workshops, academic activities and approved extra-curricular programs."
          ]
        },
        {
          "t": "p",
          "items": [
            "Important Visa Note: Visa requirements vary according to the nature and duration of the program and the individual circumstances of the student. Indian students are advised to check the latest official Spanish consular instructions before making any non-refundable payments for travel or accommodation."
          ]
        }
      ]
    },
    {
      "slot": "recognition",
      "eyebrow": "Global Recognition",
      "title": "Benefits of summer classes: academics and career",
      "groups": [
        {
          "t": "p",
          "items": [
            "Summer programs can help students to enhance their academic records, explore potential career interests and gain skills that can help them to pursue higher education or professional advancement.",
            "Some of the potential benefits include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Knowledge building about the subject(s).",
            "Enhancing communication and intercultural skills.",
            "Studying a possible bachelor's or master's specialization",
            "Creating international academic links.",
            "Hands-on learning through workshops and group projects."
          ]
        },
        {
          "t": "ol",
          "items": [
            "Knowledge of European industries and professional practices."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Certificate of completion, if provided by the institution."
          ]
        },
        {
          "t": "p",
          "items": [
            "Advantages of summer course in Spain can be of benefit to students if they pick up programs which match their academic interests and future plans.",
            "A summer-course certificate, however, is not a full university degree. It does not automatically guaranty admission into university, employment or professional recognition. The credit transfer will depend on the student's home institution and program."
          ]
        }
      ]
    },
    {
      "slot": "career",
      "eyebrow": "Career & Prospects",
      "title": "When is the best time to apply for Summer Courses in Spain?",
      "groups": [
        {
          "t": "p",
          "items": [
            "The majority of summer programs take place during the European summer, typically from June until August. However, exact dates and application deadlines vary by institution and academic year."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Period",
            "Suggested Activity"
          ],
          "rows": [
            [
              "January to March",
              "Research programs, compare fees, and prepare documents"
            ],
            [
              "March-May",
              "Submit applications when deadlines allow and plan travel"
            ],
            [
              "May–June",
              "Confirm admission, accommodation and any applicable visa requirements"
            ],
            [
              "June–August",
              "Take part in the chosen summer program"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are recommended planning windows, not everyone's deadline. Some institutions open applications earlier and popular programs can fill their available places quickly.",
            "Students should consult the official program calendar and apply as early as possible to allow adequate time for admission and travel arrangements."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Document Checklist",
      "title": "Documentation Required for Spain Summer Courses",
      "groups": [
        {
          "t": "p",
          "items": [
            "The documents required will depend on the course, institution and the student's circumstances. You could be asked for documents like"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport in order.",
            "Application form completed.",
            "School certificates or academic transcripts.",
            "Results of language skills, if applicable.",
            "CV or letter of motivation if required.",
            "Confirmation of course admission/enrolment.",
            "Proof of payment of course fee.",
            "Lodging information, if available.",
            "Travel or health insurance, if applicable.",
            "Financial and other supporting documents for visa application, as applicable.",
            "Parental consent forms for minors where applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should consult the official course checklist and Spanish consular instructions to confirm final documentation requirements."
          ]
        }
      ]
    },
    {
      "slot": "faq",
      "eyebrow": "FAQ",
      "title": "Popular Questions About Summer Courses in Spain",
      "groups": [
        {
          "t": "faq",
          "items": [
            {
              "q": "Can Indian students apply for summer courses in Spain?",
              "a": "Sure. Indian students are eligible to apply for suitable short-term programs offered by Spanish universities and educational institutions, subject to the admission requirements of the program and the applicable visa regulations."
            },
            {
              "q": "How long are summer courses in Spain?",
              "a": "The majority of programs last from two to eight weeks but some are shorter or may last several months. How long that takes varies by subject and institution."
            },
            {
              "q": "What is the price of summer courses in Spain?",
              "a": "The price will vary depending on the institution, the subject and the length of the course. Short programs might cost in the region of €300-€1,500, while specialized university summer schools can be in the region of €1,000-€3,500 or more. There may be additional living expenses not included in the program fee."
            },
            {
              "q": "Will I need IELTS to join a summer course in Spain?",
              "a": "Not always. IELTS might not be required for all short-term programs. Some institutions will accept alternative evidence of English proficiency and others may not require a formal language test. Students must check the requirements for the specific course."
            },
            {
              "q": "Can I get college credit for a summer school course in Spain?",
              "a": "Some programs grant academic credits, while others just a certificate of completion. Students should check the credit structure with the Spanish institution and their home university before enrolling."
            },
            {
              "q": "Can high school students apply for summer programs in Spain?",
              "a": "Some summer programs are for high school students, while others are only for university students or graduates. There may be age restrictions, parental consents and supervision arrangements. Edu-Hawk Worldwide – Plan Your Summer Study Experience A summer program in Spain can provide an opportunity to study new subjects, gain practical skills, experience another culture and build international connections. Selecting the right institution and course is important to ensure the experience is valuable both academically and personally. Edu-Hawk Worldwide guides students in the international education opportunity and study-abroad application process. We assist students throughout the journey, from finding the right programs to preparing the eligibility and admission documents. Reach out to Edu-Hawk Worldwide to find out about summer learning programs in Spain and start your journey to an international academic experience."
            }
          ]
        }
      ]
    }
  ]
};

export default function SummerCoursesSpain() {
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
      seoPath="/study-abroad/spain/summer-courses"
    />
  );
}
