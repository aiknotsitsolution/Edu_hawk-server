import cmsData from "../../../../data/study_abroad/australia/law.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Australia/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/Law/cta_bg.webp";

// University Campus Images
import adelaideImg from "../../../../Images/Abroad/Australia/Law/University_of_Adelaide.webp";
import latrobeImg from "../../../../Images/Abroad/Australia/Law/La_Trobe_University.webp";
import griffithImg from "../../../../Images/Abroad/Australia/Law/Griffith_College.webp";
import uowImg from "../../../../Images/Abroad/Australia/Law/University_of_Wollongong.webp";

const page = {
  name: "Law",
  country: "Australia",
  slug: "law",
  title: "Study Law in Australia for Indian Students | Edu-Hawk Worldwide",
  description: "Study Law in Australia for Indian students. Learn about LLB, Juris Doctor (JD), LLM, top law schools (Adelaide, La Trobe, Griffith, Wollongong), Priestley 11 criteria, and legal practice.",
  keywords: "Study Law in Australia for Indian Students Law Courses in Australia for Indian Students Best Universities to Study Law in Australia Bachelor of Laws (LLB) in Australia for Indian Students Master of Laws (LLM) in Australia for Indian Students Study Law in Australia After 12th Study Law in Australia After LLB in India Cost of Studying Law in Australia for Indian Students Law Scholarships in Australia for International Students Admission Requirements for Law Courses in Australia",
  introTitle: "Australian Law for Indian Students",
  heroParas: [
    "The study of legal systems, laws, rules, rights, obligations, conflict resolution, and the values that guide people, organizations and governments is known as law."
  ],
  overview: [
    "Students can explore Australian law, legal research, advocacy, constitutional principles, commercial rules, criminal justice, and international legal frameworks when studying law in Australia.",
    "The Bachelor of Laws, Juris Doctor, Master of Laws, and specialized programs in commercial law, international law, and legal studies are just a few of the courses available in Australian universities.",
    "Your academic background and job objectives will determine which course is best for you. Students who wish to practice law in Australia must fulfill the necessary professional entry requirements and select a suitable qualifying law track.",
    "Important Highlights",
    "Learn about judicial decision-making and legal ideas.",
    "Recognize laws, rules, and legal organizations",
    "Develop your analytical and legal research abilities.",
    "Learn about criminal law, contracts, and constitutional law.",
    "Develop your ability to argue and communicate in writing.",
    "Examine corporate, business, and international law.",
    "Develop your ability to negotiate and resolve conflicts.",
    "Examine professions in business, policy, compliance, and law."
  ],
  level: "Undergraduate & Juris Doctor / LLM",
  crumb: "Law & Legal Studies",

  stats: [
    {
        "label": "Degree Choices",
        "value": "Bachelor of Laws (LLB), Juris Doctor (JD) & LLM"
    },
    {
        "label": "Course Duration",
        "value": "3 to 4 Years (LLB/JD) / 1 Year (LLM)"
    },
    {
        "label": "Top Law Schools",
        "value": "Adelaide, La Trobe, Griffith, Wollongong"
    },
    {
        "label": "Accreditation",
        "value": "Legal Admissions Board & Priestley 11"
    }
],

  faqs: [
    {
        "q": "Is it possible for Indian students to study law in Australia?",
        "a": "Yes. Subject to the academic, English language, and other requirements of the selected university, eligible Indian students may apply to undergraduate or graduate law studies."
    },
    {
        "q": "What distinguishes a Juris Doctor from an LLB?",
        "a": "Generally speaking, an LLB is a law degree for undergraduates. After earning a bachelor's degree, students typically pursue a Juris Doctor, a postgraduate-entry legal degree."
    },
    {
        "q": "How much time does it take to study law in Australia?",
        "a": "Following an undergraduate degree, an LLB typically takes four years, a JD often takes three years, and an LLM typically takes one year. The length varies depending on the course structure and the school."
    },
    {
        "q": "Is the IELTS necessary to practice law in Australia?",
        "a": "In most cases, international students must fulfill the English language requirements of the university. Relatively high scores may be required for law programs, especially in speech and writing."
    },
    {
        "q": "Is it possible for an Indian lawyer to practice in Australia?",
        "a": "Perhaps, however, the appropriate Australian admitting authorities must evaluate the graduate's credentials. There may be further courses, hands-on training, or other prerequisites."
    },
    {
        "q": "After studying law, what professional opportunities are there?",
        "a": "Legal practice upon admission, paralegal work, legal research, corporate governance, policy, contract management, compliance, and other law-related positions are possible options."
    }
],

  sections: [
    {
        "slot": "overview",
        "eyebrow": "Course Scope",
        "title": "Overview of the Course",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The study of legal systems, laws, rules, rights, obligations, conflict resolution, and the values that guide people, organizations and governments is known as law.",
                    "Students can explore Australian law, legal research, advocacy, constitutional principles, commercial rules, criminal justice, and international legal frameworks when studying law in Australia.",
                    "The Bachelor of Laws, Juris Doctor, Master of Laws, and specialized programs in commercial law, international law, and legal studies are just a few of the courses available in Australian universities.",
                    "Your academic background and job objectives will determine which course is best for you. Students who wish to practice law in Australia must fulfill the necessary professional entry requirements and select a suitable qualifying law track.",
                    "Important Highlights"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Learn about judicial decision-making and legal ideas.",
                    "Recognize laws, rules, and legal organizations",
                    "Develop your analytical and legal research abilities.",
                    "Learn about criminal law, contracts, and constitutional law.",
                    "Develop your ability to argue and communicate in writing.",
                    "Examine corporate, business, and international law.",
                    "Develop your ability to negotiate and resolve conflicts.",
                    "Examine professions in business, policy, compliance, and law."
                ]
            }
        ]
    },
    {
        "slot": "why",
        "eyebrow": "Why Australia",
        "title": "Why Study Law in Australia?",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Legal theory, research, case analysis, and hands-on learning are all combined in Australian law curricula. Additionally, students may have access to industry engagement opportunities, legal clinics, internships, and mooting competitions, depending on the university.",
                    "Principal Advantages"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Gain a thorough understanding of legal systems",
                    "Boost organized reasoning and critical thinking",
                    "Understand how to interpret laws and court rulings.",
                    "Develop your professional writing and legal research abilities.",
                    "Examine business, international, and corporate legal concerns.",
                    "When practical projects are accessible, gain experience through them.",
                    "Develop your advocacy and negotiating abilities.",
                    "Examine additional coursework and specialized legal employment options."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Students who like reading, research, writing, logical analysis, debate, and comprehending how institutions and laws impact society can benefit from studying law.",
                    "Edu Hawk Worldwide Consultancy helps students prepare for their international education journey, understand university admission requirements, and investigate international study possibilities."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Australia's Most Popular Law Courses",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Bachelor's degree in Law",
                    "The Bachelor of Laws is an undergraduate legal degree that is frequently called the LLB. . Legal research, court systems, legislation, and fundamental legal concepts are all introduced to pupils.",
                    "The degree may be offered as a stand-alone credential or as a component of a combined degree, depending on the university.",
                    "Bachelor of Laws with Honors",
                    "The Bachelor of Laws (Honours), which may contain advanced coursework or research components in addition to fundamental legal courses, is offered by certain Australian universities.",
                    "The university and its authorized course arrangements determine the precise format, length, and professional recognition.",
                    "Combined Bachelor of Laws Degree",
                    "With a combined law degree, students can study law in addition to another subject, like:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Bachelor of Arts and Bachelor of Laws",
                    "Bachelor of Commerce and Bachelor of Laws",
                    "Bachelor of Business and Bachelor of Laws",
                    "Bachelor of International Relations and Bachelor of Laws",
                    "Bachelor of Science and Bachelor of Laws"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Although combined degrees may necessitate lengthier study times than a single degree, they might offer more comprehensive academic understanding.",
                    "Master of Law",
                    "A postgraduate degree called the Master of Laws (LLM) enables qualified law graduates to specialize in fields including corporate law, international law, taxation, or human rights.",
                    "For candidates who have not yet fulfilled the relevant academic requirements for legal admission, an LLM is often not a replacement for an initial qualifying law degree.",
                    "Master's Program in International Law",
                    "The legal concerns pertaining to nations, international organizations, treaties, human rights, international trade, and global governance are the main focus of this qualification.",
                    "Master's Program in Business law",
                    "This course examines business-related legal matters, including contracts, corporate governance, business transactions, and regulatory compliance.",
                    "Graduate Diploma or Graduate Certificate in Law",
                    "These credentials offer concentrated study in particular legal topics. They might be appropriate for professional growth, but students need to make sure the course satisfies any particular legal entrance requirements that are pertinent to their objectives."
                ]
            }
        ]
    },
    {
        "slot": "specializations",
        "eyebrow": "Specializations",
        "title": "Popular Specializations in Law",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Students may investigate the following topics, depending on the course and university:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Commercial and Corporate Law",
                    "Criminal Law",
                    "Constitutional Law",
                    "International Law",
                    "Human Rights Law",
                    "Business Law",
                    "Contractual Law",
                    "Family Law",
                    "Workplace and Employment Law",
                    "Law Concerning Intellectual Property",
                    "Environmental Law",
                    "Tax Law",
                    "Finance and Banking Law",
                    "Consumer Law and Competition",
                    "Real Estate and Property Law",
                    "Law of Administration",
                    "Law Concerning Immigration",
                    "Arbitration and Dispute Resolution",
                    "Privacy Law and Technology",
                    "Data Protection and Cybersecurity Law"
                ]
            },
            {
                "t": "p",
                "items": [
                    "While some disciplines are available as electives or specialized postgraduate programs, others are part of the core curriculum."
                ]
            }
        ]
    },
    {
        "slot": "section-6",
        "eyebrow": "Details",
        "title": "Qualifications for Students from India",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The course level, university, academic background, and intended qualification all influence the prerequisites for admission.",
                    "Eligibility for Undergraduate Law",
                    "In general, applicants for undergraduate law degrees may require:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "completing Class 12 successfully from an accredited Indian board",
                    "Academic performance that satisfies the prerequisites for admission to the university",
                    "Evidence of English language competency, if necessary",
                    "Any further criteria for selection that the institution specifies",
                    "A valid passport and the necessary paperwork"
                ]
            },
            {
                "t": "p",
                "items": [
                    "There isn't a set Class 12 percentage criterion that all Australian universities must meet. Strong academic performance may be necessary for competitive programs, and entry requirements vary.",
                    "Depending on the requirements set by the university, students from various academic paths could be qualified.",
                    "Qualifications for Master of Laws",
                    "Generally speaking, candidates must have a recognized law degree or equivalent credential that the university will accept. Additional prerequisites pertaining to prior coursework or work experience may apply to some specialized programs."
                ]
            }
        ]
    },
    {
        "slot": "language",
        "eyebrow": "Language Requirements",
        "title": "Language Requirements in English",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Strong reading, writing, communication, and English comprehension skills are necessary for law programs.",
                    "In most cases, foreign applicants must pass an approved exam or receive an exemption in order to meet the university's English language requirements.",
                    "Tests that are frequently accepted include:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Academic IELTS",
                    "iBT for the TOEFL",
                    "Academic PTE",
                    "Additional exams that the university accepts"
                ]
            }
        ]
    },
    {
        "slot": "exams",
        "eyebrow": "Entrance Exams",
        "title": "Exams for Admission and Selection Requirements",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Every Australian law program has a different admission exam.",
                    "Academic performance, English proficiency, and other selection factors may be used to evaluate applicants, depending on the institution and qualification.",
                    "Possible prerequisites consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Academic performance in class 12 for admission to undergraduate programs",
                    "Results for postgraduate-entry law courses for bachelor's degrees",
                    "Results of English language tests, when needed",
                    "If asked, a personal statement",
                    "Extra admissions evaluations, if appropriate",
                    "Certificates and academic transcripts",
                    "Additional documentation that the institution requires"
                ]
            },
            {
                "t": "p",
                "items": [
                    "There may be competitive entry requirements or particular selection processes for some legal programs. Before applying, students should review the current course page."
                ]
            }
        ]
    },
    {
        "slot": "courses",
        "eyebrow": "Course Options",
        "title": "Duration of the Course",
        "groups": [
            {
                "t": "p",
                "items": [
                    "The duration of a law course varies depending on the university and degree.",
                    "Bachelor of Laws: Depending on the school and course design, this degree typically requires four years of full-time study.",
                    "Combined Law Degree: Depending on the combination, it often takes five years or more.",
                    "After earning an undergraduate degree, a Juris Doctor typically requires three years of full-time study.",
                    "Master of Laws: Typically requires a year of full-time study, while some programs require more time.",
                    "Graduate Certificate or Graduate Diploma: The length of time varies according to the course and amount of study.",
                    "Rather than being universal durations, these are common planning ranges. The overall duration may vary according to specific course formats, credit exemptions, and part-time study.",
                    "10 . Living Expenses and Tuition",
                    "The university, degree, length of the course, location, and way of life all affect how much it costs to study law in Australia.",
                    "Principal costs consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "The cost of tuition",
                    "Lodging and utilities",
                    "Food and groceries",
                    "Public transportation",
                    "Health Coverage for International Students",
                    "Books and resources for legal education",
                    "A laptop and additional study tools",
                    "The cost of applying for a visa",
                    "Emergency and personal costs"
                ]
            },
            {
                "t": "p",
                "items": [
                    "There are significant differences in law tuition costs between colleges and degree programs. The cost structures for a Master of Laws, an undergraduate LLB, and a Juris Doctor may differ.",
                    "Students should determine the approximate cost of tuition for the full course by consulting the official university website for the most recent international student fee schedule.",
                    "The city, housing arrangement, transportation requirements, and individual expenditure will all affect living expenses. The current financial-capacity requirements of the Australian government should be reviewed by students planning an application for a student visa."
                ]
            }
        ]
    },
    {
        "slot": "scholarships",
        "eyebrow": "Scholarships",
        "title": "Indian Students Scholarships",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Indian students who meet the requirements may be able to apply for financial aid or scholarships at Australian universities.",
                    "Possible choices consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Merit grants for international students",
                    "Awards for academic excellence",
                    "Scholarships specific to faculty",
                    "Scholarships for law school",
                    "Tuition cost reductions related to a course",
                    "Scholarships from outside sources for qualified candidates"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Institutions differ in terms of scholarship availability, grant value, eligibility, and renewal requirements. While some prizes are evaluated automatically, others demand for a special application.",
                    "Students should verify whether the scholarship covers a portion of their tuition or other costs, as well as whether it is applicable to their particular law degree and intake."
                ]
            }
        ]
    },
    {
        "slot": "careers",
        "eyebrow": "Career Opportunities",
        "title": "Opportunities for Careers After Law School",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Careers in legal practice and other fields where legal knowledge, research, compliance, and policy skills are valuable can be supported by a law degree.",
                    "Possible job paths consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "After fulfilling the necessary prerequisites for admission and practice, a lawyer",
                    "Barrister, subject to applicable professional and admissions criteria",
                    "Assistant for Legal Research",
                    "Paralegal",
                    "Officer of Legal Administration",
                    "Analyst for Compliance",
                    "Officer of Contract Management",
                    "Assistant for Corporate Governance",
                    "Officer of Policy Research",
                    "Coordinator of Legal Operations",
                    "Officer of Risk and Regulatory Compliance",
                    "Professional in Mediation or Dispute Resolution Assistance",
                    "Internal Legal Team Assistance",
                    "Academic or researcher in law, with other credentials as needed",
                    "Certain positions require professional admission, registration, practicing privileges, or other credentials, especially those providing legal advice or representation."
                ]
            },
            {
                "t": "p",
                "items": [
                    "Sectors to explore"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Law firms",
                    "Departments of corporate law",
                    "Financial services and banking",
                    "Public administration and government",
                    "Organizations that oversee regulations and compliance",
                    "Insurance",
                    "Advising",
                    "Technology that is legal",
                    "Non-governmental organizations",
                    "International organizations",
                    "Legal research and education"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Subject to the professional recognition regulations of the jurisdiction in which they plan to work, graduates can also investigate legal positions in India or other nations."
                ]
            }
        ]
    },
    {
        "slot": "admission",
        "eyebrow": "Step-by-Step Guide",
        "title": "Admission Procedure",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Step 1: Determine Your Career Objective",
                    "Choose if you wish to study law for a non-practicing job, specialize after an existing legal degree, pursue a postgraduate-entry law qualification, or continue your education after Class 12.",
                    "Step 2: Choose the Correct Qualification",
                    "Compare the Juris Doctor, Master of Laws, LLB, combined law degrees, and similar credentials.",
                    "Step 3: Make a shortlist of colleges",
                    "Examine the curriculum, cost of tuition, length of courses, campus, specializations, and professional recognition.",
                    "Step 4: Verify Your Eligibility",
                    "Examine the English language proficiency requirements, academic admission requirements, and any other selection criteria.",
                    "Step 5: Get Your Documents Ready",
                    "Gather academic credentials, transcripts, passport information, English language proficiency scores, and any other paperwork the university requests.",
                    "Step 6: Send in Your Application",
                    "Apply via an approved method or the university's official application webpage.",
                    "Step 7: Examine the Offer",
                    "Verify the requirements for enrollment, tuition costs, deadlines for payments, and admittance conditions.",
                    "Step 8: Fulfill Enrollment Conditions",
                    "Accept the offer and finish the necessary paperwork and payment processes.",
                    "Step 9: If necessary, apply for a student visa",
                    "Prepare your supporting documentation and adhere to the current Australian government visa application procedure.",
                    "Step 10: Make a Study and Career Plan",
                    "Verify that the course you have selected satisfies the academic standards specific to the state or territory where you plan to apply for admission if your objective is to practice law."
                ]
            }
        ]
    },
    {
        "slot": "documents",
        "eyebrow": "Checklist",
        "title": "Documents Needed",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Candidates may require the following, depending on the institution and qualification:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "A valid passport",
                    "Certificates in Classes 10 and 12 for undergraduate candidates",
                    "Certificate of bachelor's degree for postgraduate applications",
                    "Transcripts of academic work",
                    "Results of any necessary English language tests",
                    "When required, a personal statement or a statement of purpose",
                    "Curriculum vitae or resume, if appropriate",
                    "Evidence of employment or professional experience, if necessary",
                    "Financial records in order to obtain a visa",
                    "Verification of Enrollment, if necessary for a student visa",
                    "Evidence of overseas student health coverage"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Additional records that the university or pertinent authorities have sought",
                    "Institutions and courses have different requirements. Candidates should adhere to the official checklist and turn in correct documentation by the deadlines."
                ]
            }
        ]
    },
    {
        "slot": "visa",
        "eyebrow": "Visa Requirements",
        "title": "Student Visa for Australia",
        "groups": [
            {
                "t": "p",
                "items": [
                    "In general, Indian students must fulfill the conditions for the Australian student visa (subclass 500) in order to enrolll in an authorized course.",
                    "Depending on the situation, requirements could be:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Enrollment records",
                    "Proof that satisfies the Genuine Student criterion",
                    "Evidence of financial capacity",
                    "Evidence in English, if applicable",
                    "Health Coverage for International Students",
                    "Requirements for character and health",
                    "Identity records and corroborating information"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Documentation requirements, processing periods, and visa fees are subject to change. Before applying, students should visit the official website of the Australian Department of Home Affairs.",
                    "Acceptance into a university does not ensure that a visa will be granted. Additionally, a student visa by itself does not grant permission to practice law."
                ]
            }
        ]
    },
    {
        "slot": "assistance",
        "eyebrow": "Consultancy Support",
        "title": "How Edu Hawk Worldwide Consultancy Can Assist",
        "groups": [
            {
                "t": "p",
                "items": [
                    "Edu Hawk provides individualized course shortlisting and admission assistance to Indian students who are considering studying abroad.",
                    "Our assistance may consist of:"
                ]
            },
            {
                "t": "ul",
                "items": [
                    "Examining educational background and professional objectives",
                    "Making a list of appropriate law and legal studies programs",
                    "Comparing tuition costs, course lengths, and universities",
                    "Assisting students in comprehending the conditions for admission",
                    "Describe how the LLB, JD, and LLM routes differ from one another.",
                    "Assisting students with the application materials",
                    "Assisting candidates in comprehending the terms of the offer",
                    "Giving general advice on pre-departure preparation and visa paperwork"
                ]
            },
            {
                "t": "p",
                "items": [
                    "Before selecting a university or degree, students who want to practice law should look into professional recognition and admission standards."
                ]
            }
        ]
    }
],

  universitiesEyebrow: "Institutions",
  universitiesTitle: "Top Universities in Australia to Explore",
  universitiesIntro: "Indian students can explore the following leading universities and institutions in Australia.",
  universities: [
    {
      name: "Adelaide Law School (University of Adelaide)",
      location: "Adelaide, South Australia",
      image: adelaideImg,
      desc: "One of Australia’s oldest and most respected law schools with comprehensive legal clinics."
    },
    {
      name: "La Trobe Law School",
      location: "Melbourne, Victoria",
      image: latrobeImg,
      desc: "Renowned for social justice, human rights, and practical dispute resolution skills."
    },
    {
      name: "Griffith University / Griffith Law",
      location: "Brisbane & Gold Coast, Queensland",
      image: griffithImg,
      desc: "Consistently ranked among the world’s top law faculties for clinical training."
    },
    {
      name: "School of Law (University of Wollongong)",
      location: "Wollongong, New South Wales",
      image: uowImg,
      desc: "Integrated legal internship program and real-world moot court training."
    }
  ]
};

export default function LawAustralia() {
  const dynamicPage = {
    ...page,
    title: cmsData?.seo?.title || page.title,
    description: cmsData?.seo?.description || page.description,
    introTitle: cmsData?.hero?.title || page.introTitle,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData?.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : cmsData.overview.split('\n\n'))
      : page.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0)
      ? cmsData.sections
      : page.sections,
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image
        }))
      : page.universities,
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
    />
  );
}