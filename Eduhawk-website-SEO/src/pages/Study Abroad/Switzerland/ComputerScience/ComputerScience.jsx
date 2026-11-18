import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/ComputerScience/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/ComputerScience/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/ComputerScience/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/ComputerScience/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/ComputerScience/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/ComputerScience/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/ComputerScience/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/computer-science.json";

const page = {
  name: "Study Computer Science in Switzerland",
  country: "Switzerland",
  slug: "computer-science",
  title: "Study Computer Science in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study Computer Science in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study Computer Science in Switzerland, Computer Science in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland Computer Science Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Master\u2019s in Computer Science Engineering in Switzerland for Indian Students",
  heroParas: [
    "Pursuing a **Masters in Computer Science Engineering in Switzerland for Indian Students** is a great option for those students who want to pursue higher studies in computing, software development, artificial intelligence, data science, and cybersecurity."
],
  overview: [
    "Switzerland is a favorite destination for Indian students wishing to pursue a master\u2019s degree in computer science, software engineering, artificial intelligence, data science, cybersecurity or any other related technology fields. Swiss universities are known for their research-led education, strong ties with technology companies and opportunities to work on advanced computing projects.",
    "Students should be aware that depending on the university, the program may be called Computer Science, Computer Engineering or Computer Science and Engineering. Please check the particular program title, admission requirements, language of instruction and eligibility for international students before applying.",
    "Currency conversion was CHF 1 \u2248 INR 110\\. This is a planning rate estimate. University fees and exchange rates may change.",
    "**Masters in Computer Science Engineering in Switzerland for Indian Students** provides an opportunity to explore advanced computing specializations and research-oriented education."
],
  level: "M.Sc. & B.Sc. in Computer Science",
  crumb: "Computer Science",
  stats: [
    {
        "label": "Degree Choices",
        "value": "B.Sc. & M.Sc. in Computer Science"
    },
    {
        "label": "Course Duration",
        "value": "1.5 to 2 Years (90\u2013120 ECTS)"
    },
    {
        "label": "Top Institutions",
        "value": "ETH Zurich, EPFL & USI"
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
      title: "Why Pursuing a Master in Computer Science in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Study a Masters in Computer Science in Switzerland** and explore advanced computing, research opportunities and specializations driven by technology.",
                        "Strong Technical Training: Study algorithms, software systems, computing theory and advanced engineering.",
                        "Possible specializations: AI, machine learning, data science, robotics, computer systems, security, distributed computing.",
                        "Research opportunities: Work on emerging technology projects applied in the real world.",
                        "International environment: Study together with students and researchers from other countries.",
                        "Industry exposure: Switzerland has employers and research organizations in software, finance, robotics, healthcare technology and engineering.",
                        "Career development: After graduation students may seek employment in Switzerland or elsewhere in international markets subject to work-permit regulations and employer specifications.",
                        "Master's in Computer Science Engineering in Switzerland for Indian Students allows you to explore advanced computing specializations and research-oriented education.",
                        "**Master's degrees and specializations**",
                        "**Computer Science Courses in Switzerland** cover several areas of computing, software development and advanced technology.",
                        "Specialization What you might study Computer Science Algorithms, theory, programming languages and systemsSoftware Engineering Software Architecture, Testing, Development and MaintenanceArtificial Intelligence Machine learning, intelligent systems and deep learning Data Science Statistical learning, data processing and analytics Cybersecurity Network security, cryptography and secure systems Computer Engineering Hardware, embedded systems and computer architecture Robotics and Autonomous Systems Control, perception, automation and intelligent machines Distributed Systems and Cloud Computing Networks, scalable systems and cloud infrastructure Human-Computer InteractionDesigning Interactive Systems: User Centered",
                        "Availability of each specialization depends on the degree and university chosen. Students planning to **Study Master\u2019s in Computer Science in Switzerland** should compare the specializations and course structures available before applying."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Universities for Masters in Computer Science in Switzerland",
      lead: "Explore leading Swiss universities offering accredited Computer Science programs, modern facilities, and global career pathways.",
      unis: [
        {
          name: "ETH Zurich",
          location: "Zurich, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Offers MSc in Computer Science with specializations in Machine Intelligence, Data Management Systems, Secure and Reliable Systems, Visual and Interactive Computing and Theoretical Computer Science. The program is delivered in English and consists of 120 ECTS over 2 years.",
          img: uniImg1
        },
        {
          name: "EPFL",
          location: "Lausanne, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Lausanne's leading technical university, graduate studies and research in computing. Refer to the current program catalog and select the program that best aligns with your interests in computer science, computer engineering, data science, or a related field.",
          img: uniImg2
        },
        {
          name: "Universit\u00e0 della Svizzera italiana (USI)",
          location: "Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "USI offers a Master of Science in Informatics . The program is intended to provide the foundations of theory and practical skills relevant to the software industry. For further information about the present curriculum, language requirements, fees and admission criteria, please see the program page. These universities are very selective to admit students. University reputation is no guaranty of admission and associated programs may have different course prerequisites. Edu-Hawk Worldwide can help students to choose the right university and understand the application process for studying in Switzerland. Students exploring Computer Science Universities in Switzerland can compare available programs and university requirements.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Eligibility Requirements",
      groups: [
        {
                "t": "p",
                "items": [
                        "Subject knowledge: **Computer Science Eligibility in Switzerland** depends on the university admission requirements and previous academic qualification of the applicant.",
                        "Indian students will generally need to meet the following criteria:",
                        "A recognized university bachelor\u2019s degree in computer science, computer engineering, IT or a closely related field.- Solid background in mathematics, algorithms, data structures, programming and core CS topics.",
                        "Academic results in line with the specific requirements of the university program.",
                        "English language skills, if applicable.- Additional prerequisite courses if the previous degree is not an exact match for the program.",
                        "The required level of academic and technical knowledge of the chosen area of specialization.",
                        "ETH Zurich expects a solid background in computer science and mathematics. Applicants from related disciplines will be considered, subject to academic record and the demands of the program.",
                        "Check the **Computer Science Eligibility in Switzerland** against the academic requirements of the specific university and specialization."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Requirements for entry",
      groups: [
        {
                "t": "p",
                "items": [
                        "**Computer Science Admissions Requirements in Switzerland** include academic documents, proof of language proficiency and other programme-specific application materials.",
                        "Universities may take applications into account on the basis of:",
                        "Undergraduate degree and university transcript.",
                        "knowledge of the subject and related coursework.",
                        "English language skills",
                        "Personal statement / letter of motivation",
                        "Letters of recommendation from academicians, if applicable.",
                        "Curriculum vitae and research or project experience, as appropriate.",
                        "For example, the MSc in Computer Science at ETH Zurich asks for English proficiency (C1 level), two letters of recommendation and a motivation letter. Check the official application page for specific requirements and the list of accepted language tests.",
                        "The **Computer Science Admissions Requirements in Switzerland** can differ among universities. Therefore, applicants are advised to review the official application instructions before submitting their documents."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "How Much Does It Cost to Study a Master\u2019s in Computer Science in Switzerland?",
      groups: [
        {
                "t": "p",
                "items": [
                        "Switzerland is a very expensive country especially in cities like Zurich and Lausanne. Plan for university fees and the cost of living on a daily basis.",
                        "Estimated tuition prices",
                        "University / CategoryEstimated feesETH Zurich \u2013 international tuition group CHF 2,190 per semester (\u2248 \u20b92.41 lakh) ETH Zurich \u2013 four semestersCHF 8,760 (\u2248 Rs 9.64 lakh)Other Swiss universitiesVaries by institution and student group",
                        "ETH Zurich is part of other tuition fee groups. Many international students not eligible for the lower-fee group pay CHF 2,190 per semester under its current rules. Please check your fee category directly with the university .",
                        "Estimate of cost of living per annum",
                        "ExpenseAnnual estimate in CHFApprox. annual cost in INRAccommodationCHF 7,200-12,000\u20b97.92-13.20 lakhFood and groceriesCHF 3,600-6,000\u20b93.96-6.60 lakhTransportation CHF 600-1,200\u20b966,000-\u20b91.32 lakhHealth insurance and medical costsCHF 1,500\u20133,000\u20b91.65\u20133.30 lakhPersonal and study expenses: CHF 2,000-5,000 \\| \u20b92.20-5.50 lakh Estimated total per year: CHF 14,900-27,200 \\| \u20b916.39-29.92 lakh",
                        "This is a planning estimate, not a formal quote. Actual costs will vary depending on city, accommodation, insurance arrangements, lifestyle and current University charges.",
                        "Estimated two-year budget: Considering the above living cost range and international tuition for four semesters from ETH Zurich, budget for \\~ \u20b942.42-69.48 lakh, before any scholarships, extra charges, travel, or other one-off expenses. Totals will vary at other universities.",
                        "**Edu-Hawk Worldwide** can help Indian students to plan their study budget and understand the fee structure of universities in Switzerland."
                ]
        }
]
    },
    {
      slot: "timeline",
      eyebrow: "Admission Procedure",
      title: "Application for a Job",
      groups: [
        {
                "t": "p",
                "items": [
                        "Choose your program: Compare Computer Science, Computer Engineering, Artificial Intelligence, Data Science, and Cybersecurity programs.",
                        "Confirm eligibility. Check the official admission requirements and compare your bachelor\u2019s coursework to the program.",
                        "Prepare documents: Gather transcripts, degree certificates, language test results, references and your letter of motivation, if applicable.",
                        "Complete the online application: Submit your application to the university and pay any application fees.",
                        "Answering Requests for Admission: Submitting requested further academic information or documentation.",
                        "Get your money and immigration sorted: Once you are admitted, get your finances, accommodation and the relevant Swiss student visa or residence permit sorted.- Full registration: Follow the university\u2019s registration and arrival instructions.",
                        "Each program and intake has a different application deadline. Please check the official calendar of the university you are applying to before you submit your application.",
                        "**Edu-Hawk Worldwide** can also guide students through application preparation and the steps involved in applying to Swiss universities."
                ]
        }
]
    },
    {
      slot: "careers",
      eyebrow: "Degree Recognition & Careers",
      title: "Career scope of the degree",
      groups: [
        {
                "t": "p",
                "items": [
                        "A master\u2019s from a Swiss university can open the door to a career in software development, data engineering, AI, cybersecurity, research and technology consulting. Employers will also consider technical skills, project experience, language skills and work authorization.",
                        "Indian students who wish to return to India should verify employer and professional or academic recognition requirements, if applicable. In Switzerland, graduation does not automatically lead to a job or work permit; immigration rules and eligibility requirements apply.",
                        "For Indian students, **Masters in Computer Science Engineering in Switzerland** can be an academic pathway toward careers in software development, artificial intelligence, data science and cybersecurity.",
                        "**Masters in Computer Science Engineering in Switzerland for Indian Students** can be an academic pathway for students looking for advanced computing education and international career opportunities."
                ]
        }
]
    },
    {
      slot: "salary",
      eyebrow: "Salaries & Opportunities",
      title: "Salary and Job Prospects Post Graduation",
      groups: [
        {
                "t": "p",
                "items": [
                        "Roles can include:",
                        "Job RoleIndicative salary per year gross in SwtizerlandApprox. Equivalent in INR Software Engineer CHF 80,000-110,000 \u20b988 lakh-\u20b91.21 crore Data Engineer CHF 85,000-115,000 \u20b993.50 lakh-\u20b91.27 crore Machine Learning Engineer CHF 90,000-125,000 \u20b999 lakh-\u20b91.38 crore Cybersecurity Engineer CHF 85,000-120,000 \u20b993.50 lakh-\u20b91.32 crore Cloud or DevOps Engineer CHF 85,000-115,000 \u20b993.50 lakh-\u20b91.27 crore Research Engineer CHF 75,000-105,000 \u20b982.50 lakh-\u20b91.16 crore",
                        "The salary ranges listed are a guide only and not guarantyd offers or confirmed starting salaries. The amount you actually earn will depend on your experience, location, employer, the job you do and the market. Figures are gross (before tax and social contribution). INR equivalents based on Chf 1= \\` 110\\. No take home pay."
                ]
        }
]
    },
    {
      slot: "documents",
      eyebrow: "Required Documentation",
      title: "Documents needed",
      groups: [
        {
                "t": "p",
                "items": [
                        "Prepare the following as per the checklist of each university:",
                        "A passport.",
                        "Provisional Certificate or Bachelor\u2019s Degree.",
                        "Official academic transcripts and grade scale information.",
                        "R\u00e9sum\u00e9 or CV",
                        "Motivation Letter or Letter of Purpose.",
                        "Letters of recommendation, if there are any.",
                        "English language test results, if available.",
                        "Course descriptions or syllabi are available upon request for academic evaluation.",
                        "Research, internship, or project information as appropriate.",
                        "If documents do not accept original language, certified translations.- Visa or Residency process financial and immigration documents as applicable.",
                        "**Edu-Hawk Worldwide** can help students to know what documents are required and help them prepare their university applications.",
                        "Questions and Answers 12\\.",
                        "Can Indian students pursue Masters in Computer Science in Switzerland?",
                        "Yes, Indian students can apply if they meet the university\u2019s academic, language, documentation and other admission requirements.",
                        "How long does a Master in Computer Science last in Switzerland?",
                        "Length varies with program. ETH Zurich\u2019s MSc Computer Science is a 2 years 120 ECTS program."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "3. Is IELTS required for admission?"
                ]
        },
        {
                "t": "p",
                "items": [
                        "Not necessarily for all the programs. Universities state what English language evidence they will accept and whether an exemption is in place. The MSc in Computer Science at ETH Zurich requires you to have English at C1 level."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "4. What is the cost of a Master\u2019s in Computer Science in Switzerland?"
                ]
        },
        {
                "t": "p",
                "items": [
                        "It really depends on the university and the life style. Tuition and living expenses can run into several tens of lakhs of rupees for two years. So planning is crucial. Please check the current fees and guidance on the cost of living before you apply.",
                        "Can I work in Switzerland after completing my degree?",
                        "Graduates are welcome to apply for jobs, but eligibility for employment and residency is subject to applicable Swiss laws, eligibility and individual circumstances. \"Having a degree in itself does not guaranty a job or a work permit.",
                        "The **Masters in Computer Science Engineering in Switzerland for Indian Students** is a good option for students who are looking for higher education in computing and international career prospects. **Edu-Hawk Worldwide** can help students explore study options and application process."
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Is IELTS or TOEFL mandatory for studying Computer Science in Switzerland?",
        "a": "Requirements vary by institution and program level. English-taught programs generally require IELTS (6.5+) or TOEFL (90+), while German/French programs require proof of proficiency at B2/C1 levels."
    },
    {
        "q": "Can Indian students work part-time while studying Computer Science in Switzerland?",
        "a": "Yes, international students are permitted to work up to 15 hours per week during academic semesters and full-time during official vacation periods after completing 6 months of study in Switzerland."
    },
    {
        "q": "What is the average tuition fee for Computer Science in Swiss public universities?",
        "a": "Public universities in Switzerland offer highly subsidized tuition, typically ranging from CHF 1,000 to CHF 4,000 per year, making it one of the most cost-effective study destinations in Europe."
    },
    {
        "q": "Are degrees from Swiss universities recognized globally and in India?",
        "a": "Yes, degrees awarded by Swiss cantonal and federal universities are accredited by the Swiss government and recognized globally, including by the Association of Indian Universities (AIU) and international employers."
    }
]
};

export default function ComputerScienceSwitzerland() {
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
