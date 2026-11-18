import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/Law/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/Law/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/Law/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/Law/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/Law/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/Law/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/Law/image3.png";
import uniImg4 from "../../../../Images/Abroad/Switzerland/Law/image4.png";
import cmsData from "../../../../data/study_abroad/switzerland/law.json";

const page = {
  name: "Study Law in Switzerland",
  country: "Switzerland",
  slug: "law",
  title: "Study Law in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Law in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Law in Switzerland, Law in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Law Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Swiss Law for Indian Students",
  heroParas: [
    "Switzerland provides an international learning environment for students interested in law, business regulations, human rights and international relations. Its universities offer the chance to study legal systems, corporate law and international legal issues."
],
  overview: [
    "Main advantages are:",
    "International exposure & Multicultural Learning.  \nOpportunities to specialize in international and business law.  \nAccess to legal and interdisciplinary research.  \nExposure to international organizations, compliance and corporate governance.  \nOpportunities to develop legal research, analytical and communication skills ."
],
  level: "Bachelor & Master of Laws (LL.B / LL.M)",
  crumb: "Law",
  stats: [
    {
        "label": "Degree Choices",
        "value": "Bachelor of Law & LL.M Programs"
    },
    {
        "label": "Course Duration",
        "value": "3 Years (LL.B) / 1\u20132 Yrs (LL.M)"
    },
    {
        "label": "Top Institutions",
        "value": "Uni of Geneva, UZH, Lausanne & Basel"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,000 \u2013 CHF 3,000 / Year"
    }
],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Study Law in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Switzerland provides an international learning environment for students interested in law, business regulations, human rights and international relations. Its universities offer the chance to study legal systems, corporate law and international legal issues.",
                        "Main advantages are:",
                        "International exposure & Multicultural Learning.",
                        "Opportunities to specialize in international and business law.",
                        "Access to legal and interdisciplinary research.",
                        "Exposure to international organizations, compliance and corporate governance.",
                        "Opportunities to develop legal research, analytical and communication skills .",
                        "**Law in Switzerland for Indian Students** provides an opportunity to study international legal systems, business laws, and niche areas of law. **Law in Switzerland for Indian Students** can also help students explore international academic and research opportunities. **Edu-Hawk Worldwide** helps students understand available study options and admission pathways. Students can explore **Law in Switzerland for Indian Students** to compare programs and plan their higher education journey."
                ]
        }
]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "Bachelor and Master of Laws in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Bachelor of Laws (LLB)",
                        "Students in a bachelor\u2019s program are introduced to legal principles, constitutional law, civil law, criminal law and legal research.",
                        "Duration: Usually 3 years depending on the program.",
                        "Eligibility: Recognized qualification of class 12 or equivalent. University specific requirements may apply.",
                        "Language: Mostly in German, French or Italian. Some related programs may be available in English.",
                        "Subjects: Constitutional Law, Civil Law, Criminal Law, Contract Law, International Law.",
                        "LL.M. (Legum Magister)",
                        "A master\u2019s program offers advanced knowledge of legal systems and areas of law.",
                        "Length: Usually 1-2 years depending on the program.",
                        "Eligibility: A recognized bachelor\u2019s degree in law or other accepted discipline depending on the course.",
                        "Language: English, German, French or Italian depending on the institution.",
                        "Specialties: International Law, Business Law, European Law, Human Rights Law, Corporate Law and Intellectual Property Law.",
                        "Note: LLM is a specific postgraduate qualification, and not all Swiss universities provide the same title.",
                        "Students can compare bachelor\u2019s and master\u2019s programs in **Law Courses in Switzerland**. Specializations, teaching languages and study durations. **Law Courses in Switzerland** may vary according to the university and level of study. **Edu-Hawk Worldwide** can guide students in understanding course options and application requirements."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "The Best Law Schools in Switzerland",
      lead: "Explore leading Swiss universities offering accredited Law programs, modern facilities, and global career pathways.",
      unis: [
        {
          name: "University of Lausanne",
          location: "Lausanne, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Law.",
          img: uniImg1
        },
        {
          name: "University of Basel",
          location: "Basel, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Law.",
          img: uniImg2
        },
        {
          name: "University of Fribourg",
          location: "Fribourg, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Law.",
          img: uniImg3
        },
        {
          name: "University of Lucerne",
          location: "Lucerne, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in Law.",
          img: uniImg4
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Eligibility to Study Law in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "For undergraduate courses:",
                        "Recognized Class 12 qualification or equivalent.",
                        "Academic performance at the university grade level.",
                        "Language proficiency required.",
                        "Additional study or credentials, if applicable.",
                        "For master\u2019s programs:",
                        "Recognized bachelor degree in law or other acceptable discipline.",
                        "Academic certificates and transcripts.",
                        "Language abilities.",
                        "Letter of motivation, CV or other documents if necessary.",
                        "Swiss universities may not automatically recognize Indian Class 12 qualifications for admission. Applicants should check their eligibility with the institution of their choice.",
                        "**Law Eligibility in Switzerland** helps Indian applicants to understand the academic qualifications, language proficiency and other requirements to apply for their chosen course. Understanding **Law Eligibility in Switzerland** before applying can help students prepare the required academic documents. **Edu-Hawk Worldwide** can help applicants understand the general eligibility and documentation process."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Prerequisites for studying law in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Common admission requirements are:",
                        "Academic Transcripts and Academic certificates.",
                        "Valid passport.",
                        "Language skills in English, German, French or Italian as appropriate.",
                        "Online application form completed.",
                        "CV/r\u00e9sum\u00e9.",
                        "Motivation letter / Statement of purpose.",
                        "Letters of recommendation (if applicable).",
                        "Application fee.",
                        "Additional writing samples or tests for selected programs.",
                        "Law Admission in Switzerland Students should prepare their academic records, language certificates, and supporting documents as per the application guidelines of the chosen university. **Law Admission in Switzerland** requirements may differ by institution, degree level and program. **Edu-Hawk Worldwide** can assist students in understanding the application process and preparing for their study plans."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Studying Law in Switzerland: Costs",
      groups: [
        {
                "t": "p",
                "items": [
                        "The following are indicative estimates in Indian rupees and not confirmed fees for a specific university.",
                        "Tuition Fees Program Estimated annual tuition Bachelor's in Law \u20b91 lakh\u2013\u20b96 lakh Master's in Law \u20b91 lakh\u2013\u20b98 lakh Specialized postgraduate programs \u20b93 lakh\u2013\u20b920 lakh or more",
                        "Monthly Living Expenses \\| Expense \\| Estimated monthly cost \\| \\|---\\|---\\| \\| Accommodation \\| \u20b960,000\u2013\u20b91,30,000 \\| \\| Food \\| \u20b925,000\u2013\u20b945,000 \\| \\| Transport \\| \u20b95,000\u2013\u20b912,000 \\| \\| Health insurance \\| \u20b915,000\u2013\u20b935,000 \\| \\| Personal expenses \\| \u20b910,000\u2013\u20b925,000 \\|",
                        "Estimated total budget per year: Approximately \u20b912 lakh- \u20b930 lakh and above, including tuition and living expenses.",
                        "The actual cost depends on the university, city, fee structure for international students and exchange rate. Always check the latest fees and financial requirements for visas."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "How to get into Law in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Choose a bachelor or master program.",
                        "\u201cCheck university eligibility and language requirements.",
                        "Prepare academic papers and other application materials.",
                        "Complete the online application by the deadline.",
                        "Complete any required interview/assessment.",
                        "Get the offer of admission and accept it.",
                        "Sort out accommodation and money.",
                        "Apply for the right Swiss student visa and residence permit.",
                        "Admission and visa approval are separate decisions and cannot be guaranteed."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Degree Recognition & Careers",
      title: "Career Options Post Law in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Possible careers for graduates are:",
                        "\u201cLegal research.",
                        "Corporate legal support.",
                        "3\\. Compliance and risk management.",
                        "Contract Administration.",
                        "International Law Research.",
                        "Research on policy and human rights.",
                        "Data protection and privacy regulation compliance.",
                        "Support for arbitration and dispute resolution.",
                        "Research and teaching \\- academia.",
                        "Legal work may require recognized qualifications, licensing, local language proficiency and work authorization.",
                        "Important for Indian students: A Swiss law degree does not automatically qualify you to practice as an advocate in India. Kindly verify the current Bar Council of India regulations and the applicable recognition prerequisites prior to admission."
                ]
        }
]
    },
    {
      slot: "salary",
      eyebrow: "Salaries & Opportunities",
      title: "Salary and Job Opportunities After Law in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "These numbers are not guarantyd salaries. Cost of living is high in Switzerland . Employment depends on qualifications, language skills, market conditions and eligibility to work."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Documents Needed to Study Law in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "10th and 12th certificates for admission in bachelor\u2019s.",
                        "Master's admission: Bachelor's degree certificate and transcripts.",
                        "Passport in order.",
                        "Mark Sheets and Academic Transcripts.",
                        "Language proficiency certificates if required.",
                        "Cover letter & CV.",
                        "Letters of recommendation (if requested).",
                        "Application form and fee payment receipt.",
                        "Evidence of funds.",
                        "Acceptance letter to university and visa papers.",
                        "Certified translations if required.",
                        "The final document checklist is different for each university and the requirements for a Swiss visa."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "What is the duration of the Law course in Switzerland?",
        "a": "Typically, a bachelor\u2019s degree takes about 3 years and a master\u2019s degree about 1-2 years, depending on the institution."
    },
    {
        "q": "How much do you pay for studying law in Switzerland?",
        "a": "The estimated annual tuition and living expenses for students are around \u20b912 lakh to \u20b930 lakh or more depending on the university and city."
    },
    {
        "q": "Is it possible for Indian students to study Law in Switzerland after Class 12?",
        "a": "Yes, provided that the university accepts Indian qualifications and there are no other academic or language requirements."
    },
    {
        "q": "Do I need IELTS for Law in Switzerland?",
        "a": "Not all the time. The requirements depend on the language of instruction of the program and the university\u2019s admission policy."
    },
    {
        "q": "I have studied in Switzerland, can I practice law in India?",
        "a": "No, not by default. The foreign law qualifications and professional eligibility need to be examined under the applicable Indian rules. Law in Switzerland for Indian Students is an option worth exploring for applicants interested in international legal education. Edu-Hawk Worldwide can help students explore study options and understand the steps involved in applying to universities in Switzerland."
    }
]
};

export default function LawSwitzerland() {
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
    />
  );
}
