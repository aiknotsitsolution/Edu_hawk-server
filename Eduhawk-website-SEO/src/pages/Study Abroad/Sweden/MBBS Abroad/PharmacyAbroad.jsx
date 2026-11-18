import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/Pharmacy/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/Pharmacy/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/Pharmacy/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/Pharmacy/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/pharmacy.json";

const page = {
  "name": "Pharmacy",
  "country": "Sweden",
  "slug": "pharmacy",
  "title": "Pharmacy in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Pharmacy in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Pharmacy in Sweden, Pharmacy in Sweden for Indian Students, Best Universities in Sweden, Sweden Pharmacy Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Pharmacy in Sweden for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Pharmacy in Sweden for Indian students."
  ],
  "overview": [
    "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for Pharmacy in Sweden."
  ],
  "level": "B.Pharm & M.Pharm",
  "crumb": "MBBS Abroad",
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
      "title": "Why are you studying Pharmacy in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden is a good place for pharmaceutical education, scientific research and healthcare innovation. Students will be taught about medicines, drug development, pharmaceutical chemistry, pharmacology and safe medication use. Swedish universities combine scientific education with research-oriented teaching and opportunities to gain knowledge of current pharmaceutical practice.",
            "**Pharmacy in Sweden for Indian Students** can be a useful option for students who are interested in community pharmacy, hospital pharmacy, pharmaceutical research, drug safety or the pharmaceutical industry. Students planning to **Study Pharmacy in Sweden** should understand the available programs and their professional outcomes. However, international applicants should be aware of the difference between pharmaceutical science programs taught in English and professional pharmacy programs preparing graduates for licensing. The main professional pharmacy programs at Uppsala University are in Swedish, and this means that language preparation is an important consideration for students from India.",
            "With guidance from **Edu-Hawk Worldwide**, students can understand the available pharmacy study options and prepare for the application process."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Pharmacy Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden offers **Pharmacy Courses in Sweden** at undergraduate, postgraduate and research level.",
            "**Bachelor\u2019s in Pharmacy:** A three-year course covering pharmaceutical sciences, medicines, pharmacology and related subjects.",
            "**Master of Science in Pharmacy:** A five year professional program intended for students who wish to qualify as a pharmacist, subject to licensing requirements.",
            "**Pharmaceutical Sciences:** Explore drug discovery, formulation, pharmaceutical chemistry, and medicine development.",
            "**Pharmacology:** Learn how medicines interact with the human body and how their effects are measured.",
            "**Clinical Pharmacy:** Find out more about medication management, patient safety and the appropriate use of medicines.",
            "**Pharmaceutical Research:** Examine drug development, biotechnology, quality assurance and pharmaceutical innovation.",
            "Programs differ in terms of course availability, language of instruction, entry requirements and professional outcomes. Students should verify whether a degree qualifies for pharmacy registration or is more research oriented. Understanding the different **Pharmacy Courses in Sweden** helps students select a program that matches their academic background and career goals."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Pharmacy Degree in Sweden Top Universities",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Pharmacy in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "img_var": "null"
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "img_var": "null"
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "img_var": "null"
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "img_var": "null"
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "img_var": "null"
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Who Can Study Pharmacy In Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "For students applying to a pharmaceutical program in Sweden, the university will have certain academic and language requirements that need to be fulfilled. Understanding **Pharmacy Eligibility in Sweden** is important for Indian applicants.",
            "**Qualification:** Successful completion of class 12 or equivalent upper-secondary qualification.",
            "**Science Subjects:** Appropriate qualifications in Chemistry, Biology, Mathematics, Physics depending on the program.",
            "**Swedish Language Proficiency:** Professional pharmacy programs usually require advanced level proficiency in Swedish.",
            "**English Language Requirements:** Applicants must satisfy the relevant English language requirements.",
            "**Academic Performance:** Applicants must meet general admission and programme-specific subject requirements.",
            "**International Qualifications:** Indian school certificates required to be equivalent to Swedish and to include certain subjects.",
            "For example, Uppsala University\u2019s three-year Bachelor\u2019s Program in Pharmacy requires general eligibility and specific levels of Mathematics and Science Studies. Its five-year professional program has varying entry requirements. Students should carefully check **Pharmacy Eligibility in Sweden** before starting their application. **Edu-Hawk Worldwide** can assist students in understanding the academic and language requirements."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Pharmacy Admission Requirements in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "In general, applicants must prepare the following documents and meet the university admission conditions:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Mark sheets and certificates of Class 10 and Class 12\\.",
            "Evidence of required subjects in science and math.",
            "Fluency in the Swedish language where required.",
            "Proof of English language proficiency where applicable.",
            "A valid passport or accepted identification.",
            "Official translations of academic documents, where necessary.",
            "Filled out the online application.",
            "Other documents required by the university."
          ]
        },
        {
          "t": "p",
          "items": [
            "Indian students should verify that their academic qualifications meet the specific entry requirements. If you are applying for a pharmaceutical science program delivered in English, please refer to the separate language requirements. Meeting the **Pharmacy Admission Requirements in Sweden** is an important step for students planning to study pharmacy in the country."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Tuition Fee of Studying Pharmacy in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The total cost depends on the university, the length of the program, tuition-fee status and accommodation. Students exploring **Pharmacy Fees in Sweden** should consider the following expenses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Estimated cost"
          ],
          "rows": [
            [
              "Bachelor's in Pharmacy Uppsala University Tuition",
              "SEK 450,000 in total"
            ],
            [
              "Food and accommodation",
              "Additional living costs"
            ],
            [
              "Travel and personal expense",
              "Depends on location and life style"
            ],
            [
              "Application fee",
              "SEK 900 in general for fee-paying applicants"
            ],
            [
              "Residence permit and traveling costs",
              "Depends on the circumstances of the individual"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "Uppsala University\u2019s three-year bachelor\u2019s program in pharmacy charges a total tuition fee of 450,000 SEK for non-EU/EEA students paying fees. The professional pharmacy program is of five years duration and has a different fee structure.",
            "Students need to check the latest fees with the university they want to attend and budget separately for accommodation, food, travel, insurance and Swedish-language preparation. The overall **Pharmacy Fees in Sweden** can vary according to the university and selected program. **Edu-Hawk Worldwide** can help students understand tuition fees and other expenses before applying."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "How to get into Pharmacy in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students planning **Pharmacy in Sweden for Indian Students** should follow these important admission steps:",
            "**Select a program:** Decide whether you want to study for a bachelor's degree, a professional qualification in pharmacy or a pharmaceutical science program.",
            "**Research universities:** Examine course offerings, language of instruction, tuition costs, and career prospects.",
            "**See if you qualify:** Check your academic qualifications and required science subjects.",
            "**Language requirements:** Be prepared to meet Swedish or English language requirements depending on the program.",
            "**Get documents ready:** Collect academic certificates, transcripts, ID and any language proof that may be needed.",
            "**Send in your application:** Apply via the official Swedish admissions system or the university\u2019s specified application route.",
            "**Secure funding and travel arrangements:** Once accepted, confirm tuition fees, accommodation and relevant immigration rules.",
            "Students from India should start their planning early, particularly if the professional program they have chosen requires knowledge of the Swedish language. **Edu-Hawk Worldwide** can assist students in understanding the admission process and planning their study abroad journey."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Pharmacy License in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Pharmacists who wish to practise professionally in Sweden need the appropriate licence or authorization from the Swedish National Board of Health and Welfare (Socialstyrelsen).",
            "For pharmacy qualifications outside the EU/EEA, including India, the process to obtain a licence generally involves:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Evaluation of credentials.",
            "A proficiency test.",
            "A course in laws and regulations in Sweden.",
            "Clinical training or practical experience, depending on the path to licensure.",
            "Evidence of the required proficiency in Swedish.",
            "Submission of professional license application."
          ]
        },
        {
          "t": "p",
          "items": [
            "The process and time frames vary depending on the applicant\u2019s educational background and chosen route. A BPharm or MPharm degree from India does not qualify one to work as a licensed pharmacist in Sweden.",
            "Official source: Socialstyrelsen \u2014 Pharmacists educated outside the EU/EEA"
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Pharmacist Salary & Job Opportunities in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates in pharmacy can find jobs in community pharmacies, hospitals, pharmaceutical companies, research and regulatory affairs. Opportunities are based on qualifications, professional licensing, language proficiency, and experience.",
            "**Community Pharmacist:** Dispense medicines and inform patients on safe and appropriate use.",
            "**Hospital Pharmacist:** Assist with medication management and work with other healthcare professionals.",
            "**Pharmaceutical Industry:** Work in drug development, production, quality assurance, or regulatory affairs.",
            "**Clinical Research:** Participate in drug research and clinical trials.",
            "**Pharmacovigilance:** Help monitor the safety of medicines and assess adverse drug reactions.",
            "**Research and Academia:** Seek opportunities in scientific research, postgraduate study or teaching.",
            "Pay varies depending on experience, employer, location and position. Students should consult current salary statistics for Sweden and distinguish between employment as a licensed pharmacist and other positions in the pharmaceutical sector."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required for Pharmacy Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the university, applicants may need the following documents:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Mark sheets of class 10 and class 12\\.",
            "School leaving certificate or equivalent qualification.",
            "Academic transcripts with appropriate science and math subjects.",
            "Proof of Swedish language skills, if applicable.",
            "Proof of English Language Ability (if applicable).",
            "When official translations of documents are required.",
            "Filled out application form.",
            "University requested additional supporting documents.",
            "Admission confirmation and, where applicable, evidence of tuition payment.",
            "Relevant residence permit documentation."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants should ensure that all documents adhere to the official university requirements and are submitted by the application deadline."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "Karolinska Institutet",
      "location": "Stockholm, Sweden",
      "fee": "SEK 140,000 \u2013 200,000 / Year",
      "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
      "img_var": "null"
    },
    {
      "name": "KTH Royal Institute of Technology",
      "location": "Stockholm, Sweden",
      "fee": "SEK 120,000 \u2013 160,000 / Year",
      "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
      "img_var": "null"
    },
    {
      "name": "Lund University",
      "location": "Lund, Sweden",
      "fee": "SEK 90,000 \u2013 150,000 / Year",
      "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
      "img_var": "null"
    },
    {
      "name": "Uppsala University",
      "location": "Uppsala, Sweden",
      "fee": "SEK 90,000 \u2013 145,000 / Year",
      "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
      "img_var": "null"
    },
    {
      "name": "Chalmers University of Technology",
      "location": "Gothenburg, Sweden",
      "fee": "SEK 130,000 \u2013 170,000 / Year",
      "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
      "img_var": "null"
    }
  ],
  "faqs": [
    {
      "q": "Q1. Can Indian students pursue pharmacy studies in Sweden?",
      "a": "Yes. Indian students can apply if they meet academic, subject specific and language requirements. Most professional pharmacy programs require knowledge of Swedish. **Pharmacy in Sweden for Indian Students** requires careful planning of academic qualifications and language preparation."
    },
    {
      "q": "Q2. Are there pharmacies in English in Sweden?",
      "a": "Some pharmaceutical science and related research programs may be taught in English language. Uppsala University offers the main professional programs in pharmacy in Swedish. A degree in pharmaceutical science taught in English does not necessarily lead to a licence to practise as a pharmacist."
    },
    {
      "q": "Q3. What is the duration of the pharmacy degree in Sweden?",
      "a": "Uppsala University offers a three-year Pharmacy program leading to a Bachelor\u2019s degree. The program amounts to 180 ECTS credits. Its professional Master of Science Program in Pharmacy is a 300 credit, five-year program."
    },
    {
      "q": "Q4. How much does it cost to study pharmacy in Sweden?",
      "a": "For non-EU/EEA students required to pay tuition fees, the three-year bachelor\u2019s pharmacy program at Uppsala University has a total tuition fee of SEK 450,000. The five-year professional program has a separate fee structure and students should confirm the latest official fees. Students should check the latest **Pharmacy Fees in Sweden** before making their study plans."
    },
    {
      "q": "Q5. After BPharm or MPharm, can Indian pharmacy graduates work in Sweden?",
      "a": "Possibly. Indian pharmacy graduates must fulfill the relevant qualification assessment and Swedish licensing requirements including language skills and any required tests or further training. A degree in pharmacy does not automatically confer a right to practice professionally in Sweden."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function PharmacySweden() {
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
      seoPath="/study-abroad/sweden/pharmacy"
    />
  );
}
