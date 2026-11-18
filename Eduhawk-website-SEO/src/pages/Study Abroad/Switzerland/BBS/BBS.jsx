import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/BBS/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/BBS/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/BBS/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/BBS/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Switzerland/BBS/image1.png";
import uniImg2 from "../../../../Images/Abroad/Switzerland/BBS/image2.png";
import uniImg3 from "../../../../Images/Abroad/Switzerland/BBS/image3.png";
import cmsData from "../../../../data/study_abroad/switzerland/bbs.json";

const page = {
  name: "Study BBS in Switzerland",
  country: "Switzerland",
  slug: "bbs",
  title: "Study BBS in Switzerland in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description: "Study BBS in Switzerland: Top universities, course duration, tuition fees, eligibility criteria, admission process & visa requirements for Indian students.",
  keywords: "Study BBS in Switzerland, BBS in Switzerland for Indian Students, Best Universities in Switzerland, Switzerland BBS Admission, Cost of Studying in Switzerland, Edu-Hawk Worldwide",
  introTitle: "1\\. Why study BBS in Switzerland?",
  heroParas: [
    "Switzerland is a great place for students who want to study international business and have the chance for a global career. Bachelor of Business Studies (BBS) in Switzerland offers students to learn about management, marketing, finance, accounting, entrepreneurship, and business communication. International business students can learn about global markets and prepare for careers in multinational companies, consulting, banking and business development."
],
  overview: [
    "**BBS in Switzerland for Indian Students** provides an opportunity to gain international business education and establish a foundation for a global career. **Edu-Hawk Worldwide** helps students find the best undergraduate business programs. **BBS in Switzerland for Indian Students** can also assist students to explore international academic opportunities and prepare for the future business careers."
],
  level: "Bachelor of Business Studies (BBS)",
  crumb: "BBS",
  stats: [
    {
        "label": "Degree Choices",
        "value": "Bachelor of Business Studies"
    },
    {
        "label": "Course Duration",
        "value": "3 Years (180 ECTS)"
    },
    {
        "label": "Top Institutions",
        "value": "Uni of St. Gallen, UZH & Uni of Geneva"
    },
    {
        "label": "Indicative Fees",
        "value": "CHF 1,500 \u2013 CHF 4,500 / Year"
    }
],
  sections: [
    {
      slot: "courses",
      eyebrow: "Curriculum & Specializations",
      title: "BBS Studies in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The students may choose from the following undergraduate programs in business studies:",
                        "Bachelor of Business Studies (BBS)",
                        "Bachelor of Business Administration (BBA)",
                        "Bachelor of Business Administration Bachelor of International Business Bachelor of Finance and Accounting Bachelor of Marketing Management Bachelor of Entrepreneurship Bachelor of International Management Bachelor of Business Analytics Bachelor of Human Resource Management",
                        "The name of the degree and the specializations offered will differ by school. For example, United International Business School offers Bachelor in Business Studies . \\<escape\\>\\<Cite refs={\\[\"turn934331search1\"\\]}/\\>\\</escape\\>",
                        "If you are a student looking to pursue **BBS in Switzerland**, you should compare the course structure, specializations and degree titles to select a program. When searching for **BBS Courses in Switzerland**, students should also check the curriculum and available specializations. Students comparing **BBS Courses in Switzerland** should review the subjects and specializations offered by each institution."
                ]
        }
]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Universities for BBS in Switzerland",
      lead: "Explore leading Swiss universities offering accredited BBS programs, modern facilities, and global career pathways.",
      unis: [
        {
          name: "University of St. Gallen !",
          location: "St. Gallen, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in BBS.",
          img: uniImg1
        },
        {
          name: "University of Zurich !",
          location: "Zurich, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in BBS.",
          img: uniImg2
        },
        {
          name: "University of Geneva !",
          location: "Geneva, Switzerland",
          fee: "CHF 1,000 \u2013 CHF 4,000 / Year",
          desc: "Renowned academic institution in Switzerland known for quality faculty, modern facilities, and industry connections in BBS.",
          img: uniImg3
        }
      ],
      note: ["Students should check the exact eligibility requirements, cantonal residency criteria, and language prerequisites for international applicants before applying."]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "BBS in Switzerland \\- Is it possible?",
      groups: [
        {
                "t": "p",
                "items": [
                        "In India, most students need to have completed Class 12 or an equivalent level of secondary school to apply for an undergraduate business degree.",
                        "Typical eligibility criteria include:",
                        "Secondary education completed. Recognized.",
                        "Academic grades that meet the institution\u2019s requirements.",
                        "English language skills for courses delivered in English.",
                        "Knowledge of German, French or Italian for programs taught in those languages.",
                        "Additional entrance examinations or evaluations, if any.",
                        "Minimum age or work experience for selected programs",
                        "Note: Entry requirements for Swiss public universities are different than private ones. Some public universities may require international students to have additional qualifications or relevant work experience. \\<escape\\>\\<Cite refs={\\[\"turn934331search3\",\"turn934331search5\"\\]}/\\>\\</escape\\>",
                        "**BBS Eligibility in Switzerland** helps the Indian applicants to check their academic qualifications and language requirements before applying. Understanding **BBS Eligibility in Switzerland** can help students to prepare for the requirements of their selected institutions."
                ]
        }
]
    },
    {
      slot: "requirements",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for BBS in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "Generally applicants need to submit the following documents:",
                        "10th Certificate 12th Certificate",
                        "Academic transcripts and certifications. \\- passport is valid.",
                        "English language test results if applicable.",
                        "statement of purpose/letter of motivation (if required).",
                        "If required, CV or r\u00e9sum\u00e9.",
                        "Letters of recommendation (if relevant).",
                        "Passport size photo.",
                        "Any other documents required by the school.",
                        "Some institutions may require an interview, entrance test or assessment of previous qualifications. Students should consult the official admission checklist and application deadlines before applying.",
                        "Students looking for **BBS Admission in Switzerland** should prepare their documents and check the application deadlines of their selected institutions. Knowing the requirements of **BBS Admission in Switzerland** helps applicants organize their documents before applying."
                ]
        }
]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "Cost of Studying BBS in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The cost of pursuing BBS in Switzerland varies depending on the institution and the duration and type of study.",
                        "Tuition fees per year:",
                        "Public universities: Rs. 1 lakh to Rs. 10 lakh approx.",
                        "Institutes of Applied Sciences: Rs 2 lakh to Rs 12 lakh (approx).",
                        "Private business schools: Between \u20b98 lakh-\u20b925 lakh or more.",
                        "These estimates are for general budgeting purposes only and are not actual fees charged for any specific BBS program. Some institutions may charge higher fees and there may be registration, examination or other administrative charges.",
                        "Students should also keep Rs 1.2 lakh to Rs 2.5 lakh per month for living expenses depending on accommodation, city, health insurance, transportation and lifestyle.",
                        "Scholarships and financial aid may be available to eligible students depending on the institution and the program. **BBS in Switzerland for Indian Students** applicants need to plan their tuition fees and living expenses before applying."
                ]
        },
        {
                "t": "ul",
                "items": [
                        "7. Calling a BBS in Switzerland"
                ]
        },
        {
                "t": "p",
                "items": [
                        "The admission process usually includes the following steps:",
                        "Choose a program: Explore undergraduate business programs at BBS and other institutions.",
                        "Verify your eligibility: Verify academic qualifications, language requirements and other conditions.",
                        "Shortlisted Institutions: Assess tuition, course format, accreditation, and location.",
                        "Get documents ready: Collect academic certificates, transcripts, passport information and other required documents.",
                        "Submit application: The institution is admitting through the official admission portal.",
                        "Do more tests: Attend an interview or entrance assessment if required.",
                        "Get your admission decision Read the offer letter and fulfilll any requirements.",
                        "Get your money right: Prepare your tuition payment and proof of sufficient funds.",
                        "Get the right visa or residence permit: In your situation, follow the relevant current Swiss requirements.",
                        "Prepare to GO: Book your accommodation, insurance, travel and registration formalities.",
                        "The students should begin early enough to take care of the admissions and visa documentation.",
                        "Students can get help with their applications and guidance on planning their studies abroad from **Edu-Hawk Worldwide**. **BBS in Switzerland for Indian Students** applicants can get assistance in preparing their applications to universities.",
                        "\\#8. Job After BBS in Switzerland",
                        "A Bachelor of Business Studies can be good preparation for entry-level jobs in business, management and administration.",
                        "Career options:",
                        "Sales Executive Business Operations Coordinator Human Resources Assistant Junior Business Analyst Finance/Accounts Assistant Customer Relations Executive Project Coordinator Business Development Executive Entrepreneur or Business Owner Marketing Executive",
                        "Graduates may also continue their studies, e.g. a master in management, international business, finance or some other specialized field of business."
                ]
        }
]
    },
    {
      slot: "salary",
      eyebrow: "Salaries & Opportunities",
      title: "Salary & Job Opportunities After BBS in Switzerland",
      groups: [
        {
                "t": "p",
                "items": [
                        "The career possibilities you have after BBS in Switzerland will depend on your practical skills, your internships, your language skills, your previous experience and your eligibility to work in Switzerland.",
                        "Salaries depend on the job role, the employer, the industry, the location, experience and language skills.",
                        "Some broad indicative gross annual salary estimates for business related roles could include As a rough guide during initial planning:",
                        "Entry level jobs: Rs.40 lakh \\- Rs.65 lakh.",
                        "55 lakh to \u20b990 lakh Professionals with appropriate experience.",
                        "Experienced specialists or managers: \u20b980 lakh-\u20b91.3 crore and over.",
                        "These are just rough guesses and not actual salary averages or what you can expect to get when graduating from BBS program. Actual starting salaries may be higher or lower. Do not forget taxes, the cost of living in Switzerland, the competition for jobs and work permits.",
                        "International graduates have to abide by the relevant Swiss employment and immigration regulations. \\# 10\\. A BBS degree does not mean you automatically get a job or a work permit.",
                        "BBS in Switzerland \u2013 Documents needed",
                        "The most popular documents are:",
                        "Valid passport. 5\\. 10th class certificate and marks sheet.",
                        "Class 12 mark sheet & certificate.",
                        "Student Records .",
                        "English language proficiency results (if applicable).",
                        "Statement of purpose or letter of motivation (if applicable)",
                        "CV or r\u00e9sum\u00e9 if required.",
                        "Recommendation letters (if applicable)",
                        "Photos for Passport.",
                        "Financial documents for visa purposes.",
                        "Additional documents as required by the University.",
                        "Students should determine if they require certified translations, legalized documents or other educational evaluations.",
                        "**Edu-Hawk Worldwide** can assist learners in comprehending the required documents and organize their university application materials. **BBS in Switzerland for Indian Students** is one of the best academic options for the students who want to make career in international business education.",
                        "BBS Switzerland \u2013 Frequently Asked Questions",
                        "**Q1. After 12th, is BBS in Switzerland possible for Indian students?**",
                        "Yes. Indian students can apply to eligible undergraduate business programs after Class 12 as long as they meet the academic, language and other admission requirements of the institution.",
                        "**Q2. Is BBA offered in Switzerland?**",
                        "Yes, there are institutions that provide the Bachelor in Business Studies qualification. For example, United International Business School offers a BBS program. Students should check with the institution offering the qualification and the qualification details before applying for a course. \\<escape\\>\\<Cite refs={\\[\"turn934331search1\"\\]}/\\>\\</escape\\>",
                        "Q3. What is the cost of BBS study in Switzerland?",
                        "Costs vary by institution and program. You will need to do separate calculations for tuition fees, accommodation, insurance, transportation and personal expenses using current information from your chosen institution.",
                        "Q4. Is IELTS needed for BBS in Switzerland?",
                        "Not all the time. Requirements will vary by institution, language of instruction and exemptions accepted. If you choose to study a program taught in English, you will need to provide proof of your English language proficiency, such as your IELTS, TOEFL or other accepted test results.",
                        "Q5. **How can Edu-Hawk Worldwide assist me in pursuing BBS in Switzerland?**",
                        "**Edu-Hawk Worldwide** assists students in identifying suitable business programs, comprehending the eligibility requirements, preparing admission documents, evaluating the cost of studying, and managing the university application process. Get international education opportunities at [www\\.eduhawk.in](http://www.eduhawk.in)"
                ]
        }
]
    }
  ],
  faqs: [
    {
        "q": "Is IELTS or TOEFL mandatory for studying BBS in Switzerland?",
        "a": "Requirements vary by institution and program level. English-taught programs generally require IELTS (6.5+) or TOEFL (90+), while German/French programs require proof of proficiency at B2/C1 levels."
    },
    {
        "q": "Can Indian students work part-time while studying BBS in Switzerland?",
        "a": "Yes, international students are permitted to work up to 15 hours per week during academic semesters and full-time during official vacation periods after completing 6 months of study in Switzerland."
    },
    {
        "q": "What is the average tuition fee for BBS in Swiss public universities?",
        "a": "Public universities in Switzerland offer highly subsidized tuition, typically ranging from CHF 1,000 to CHF 4,000 per year, making it one of the most cost-effective study destinations in Europe."
    },
    {
        "q": "Are degrees from Swiss universities recognized globally and in India?",
        "a": "Yes, degrees awarded by Swiss cantonal and federal universities are accredited by the Swiss government and recognized globally, including by the Association of Indian Universities (AIU) and international employers."
    }
]
};

export default function BBSSwitzerland() {
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
