import cmsData from "../../../../data/study_abroad/italy/mba.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Italy/MBA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Italy/MBA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Italy/MBA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Italy/MBA/cta_bg.webp";
import Graduate_School_of_Management_POLIMIImg from "../../../../Images/Abroad/Italy/MBA/Graduate_School_of_Management_POLIMI.webp";
import SDA_Bocconi_School_of_ManagementImg from "../../../../Images/Abroad/Italy/MBA/SDA_Bocconi_School_of_Management.webp";

const page = {
  "name": "MBA in Italy",
  "country": "Italy",
  "slug": "mba",
  "title": "MBA in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study MBA in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "MBA in Italy, Study MBA in Italy for Indian Students, Best MBA Colleges in Italy, SDA Bocconi MBA, MBA in Italy Fees",
  "introTitle": "MBA in Italy for Indian Students",
  heroParas: [
    "An MBA in Italy offers a globally accredited management credential, intensive leadership development, and strategic access to Europe's luxury, automotive, and industrial manufacturing champions."
  ],
  overview: [
    "Yes. Indian students can apply to eligible Italian business schools if they meet the academic, professional, language and other admission requirements of the program."
  ],
  "level": "Postgraduate",
  "crumb": "Business & Management",
  "stats": [
    {
      "label": "Degree Choices",
      "value": "Postgraduate"
    },
    {
      "label": "Course Duration",
      "value": "1 to 2 Years (PG) / 3 Years (UG)"
    },
    {
      "label": "Top Institutions",
      "value": "Milano, Sapienza University of Rome, Bologna"
    },
    {
      "label": "Medium of Study",
      "value": "English & Italian Taught"
    }
  ],
  "sections": [
    {
      "slot": "section-1",
      "eyebrow": "Details",
      "title": "Can Indian students pursue an MBA in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students can apply to eligible Italian business schools if they meet the academic, professional, language and other admission requirements of the program."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "How long does an MBA take in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "It is contingent upon the program. Full-time MBA programs tend to be around 12-15 months, though executive and part-time programs can take longer."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for MBA in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Graduate_School_of_Management_POLIMIImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: SDA_Bocconi_School_of_ManagementImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Graduate_School_of_Management_POLIMIImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Graduate_School_of_Management_POLIMIImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "How Much Does an MBA in Italy Cost?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Fees vary greatly between institutions. Some programs may cost in the illustrative planning range of €15,000-€25,000, while premium MBA programs may cost €45,000-€90,000 or more. Applicants should confirm the applicable fees with the business school of their choice.4. Is Work Experience Required for an MBA in Italy?",
            "Many traditional MBA programs require or prefer work experience. The requirement is not the same. Students with limited experience might consider doing a Master's in Management or another postgraduate business program."
          ]
        }
      ]
    },
    {
      "slot": "section-5",
      "eyebrow": "Details",
      "title": "Can I work in Italy after an MBA?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may seek employment in Italy in accordance with the applicable immigration and work permit regulations. Getting a job depends on your qualifications, work experience, language skills, what an employer wants and whether there are any jobs that fit you."
          ]
        }
      ]
    },
    {
      "slot": "admission",
      "eyebrow": "Step-by-Step Guide",
      "title": "Admission Process for MBA in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "For Indian students, the admission process for MBA in Italy typically comprises of the following steps.",
            "Select the right MBA program. Compare business schools, specializations, language of instruction, duration, tuition fees and work experience requirements.",
            "Verify eligibility. Please make sure that your undergraduate degree, academic record, professional experience and English proficiency meet the program requirements.",
            "Prepare for the mandatory tests. If your school requires it, take an English language exam or GMAT/GRE.",
            "Prepare your application papers. Order transcripts, your CV, essays, recommendations and anything else the business school requires.",
            "Application submission. Submit the application through the institution's official application portal and pay the application fee, if applicable.",
            "Go for an interview. If shortlisted, please elaborate on your career goals, professional achievements, reasons for choosing the program and plans after graduation.",
            "Accept the offer. Please read the offer of admission, tuition payment schedule, refund terms and scholarship conditions before confirming your place.",
            "Complete visa formalities. Follow the Italian student visa process that applies to your course and situation. For required documents and deadlines, please refer to the official consular instructions.",
            "Students are advised to start their preparations well in advance of the intended intake as application rounds, scholarship deadlines and visa processing timelines may vary.",
            "Universitaly is the official source of information on pre-enrolment in Italy. Students are also required to observe any specific instructions given by their university and by the appropriate Italian consular authorities."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Recognition of the MBA Degree in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "An MBA from an accredited business school in Italy can boost career advancement in management, consulting, finance, marketing, entrepreneurship, and international business. However students should know the difference between institutional recognition, program accreditation and professional acceptance by employers.",
            "Please check: before you sign up."
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport.",
            "Provisional or final Bachelor's degree certificate.",
            "Mark sheets and academic transcripts.",
            "Updated CV or r&eacute;sum&eacute;.",
            "MBA essays or statement of purpose",
            "Recommendation Letters.",
            "Results of English proficiency tests (if required).",
            "GMAT or GRE score report (if applicable).",
            "Employment certificate or work experience letters.",
            "Details of professional accomplishments, if any.",
            "Passport size photographs if required.",
            "Proof of payment of application fee, where applicable.",
            "Financial documents required for visa application.",
            "Admission or Offer letter for processing of visa."
          ]
        },
        {
          "t": "p",
          "items": [
            "Depending on the institution and the visa process, applicants may also have to provide translations, document authentication or additional declarations. Always use the current checklist provided by the university and the relevant Italian consulate."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Can Indian students pursue an MBA in Italy in English?",
        "a": "Yes. Leading Italian business schools like SDA Bocconi, POLIMI Graduate School of Management, and Luiss Business School teach full-time MBA programmes 100% in English."
    },
    {
        "q": "What is the duration of an MBA in Italy?",
        "a": "Most full-time MBA programmes in Italy are 12 to 15 months in duration, offering an intensive curriculum with lower opportunity costs."
    },
    {
        "q": "What are the tuition fees for an MBA in Italy?",
        "a": "Tuition at top-ranked private business schools ranges from €25,000 to €65,000, while public university MBA programmes cost between €8,000 and €18,000."
    },
    {
        "q": "Is work experience required for MBA admission in Italy?",
        "a": "Yes. Full-time MBA programmes typically require 2 to 3 years of post-graduation professional work experience along with GMAT/GRE or school-specific aptitude tests."
    },
    {
        "q": "Are scholarships available for MBA candidates in Italy?",
        "a": "Yes. Leading business schools offer merit-based scholarships, diversity grants, and leadership fellowships covering 20% to 100% of tuition."
    },
    {
        "q": "What are the post-MBA career prospects in Italy and Europe?",
        "a": "Graduates secure high-level roles in management consulting, luxury goods (Gucci, Prada), automotive leadership (Ferrari), and European finance."
    }
],
  faqTitle: "Frequently Asked Questions About MBA in Italy"
};

export default function MBAItaly() {
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
      showHeroStats={false}
      seoPath="/study-abroad/italy/mba"
    />
  );
}
