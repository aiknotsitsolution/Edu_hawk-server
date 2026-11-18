import cmsData from "../../../../../../data/study_abroad/italy/ece_engg_pg.json";
import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/cta_bg.webp";
import Padua_UniversityImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/Padua_University.webp";
import Politecnico_di_MilanoImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/Politecnico_di_Milano.webp";
import Politecnico_di_TorinoImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Electronics/Politecnico_di_Torino.webp";

const page = {
  "name": "Electronics & Communication - PG in Italy",
  "country": "Italy",
  "slug": "ece_engg_pg",
  "title": "Electronics & Communication - PG in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Electronics & Communication - PG in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Study Electronics & Communication - PG in Italy, Electronics & Communication - PG in Italy for Indian Students, Best Universities in Italy, Cost of Studying in Italy",
  "introTitle": "Electronics Engineering in Italy for Indian Students",
  heroParas: [
    "Studying a Master’s in Electronics and Communication Engineering in Italy prepares students for leading-edge careers in telecommunications, photonics, wireless networks, and semiconductor microelectronics across Europe's premier technical universities."
  ],
  overview: [
    "Yes. Indian students with a relevant undergraduate qualification can apply to eligible Italian universities, provided they meet academic, language and program specific requirements."
  ],
  "level": "Postgraduate",
  "crumb": "Engineering",
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
      "title": "Are there opportunities for Indian students to pursue Electronics Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Indian students with a relevant undergraduate qualification can apply to eligible Italian universities, provided they meet academic, language and program specific requirements."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "How long is a Master's in Electronics Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Most master's programs last two years and are worth 120 ECTS credits. Confirm this on the official program page."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "How to Enrolll in an Electronics Engineering School in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Padua_UniversityImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: Politecnico_di_MilanoImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Politecnico_di_TorinoImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Padua_UniversityImg
            }
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Are there Electronics Engineering courses taught in English in Italy ?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. Politecnico di Milano has a two-year Electronics Engineering master's program in English. The Politecnico di Torino also lists Italian and English as program languages for its master's in Electronic Engineering, but language requirements change depending on the curriculum."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "What is the fee of Electronics Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition depends on the university and the student's situation. Illustrative estimates vary from €1,000 (₹1,08,600) to €8,000 (₹8,68,800) per year but these are not official fees for any specific program."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "What are the job opportunities after Electronics Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Electronic design, microelectronics, semiconductor technology, embedded systems, hardware development, telecommunications and engineering research are among the career paths available to graduates. Employment prospects vary with skills, experience, language ability and work authorization."
          ]
        }
      ]
    },
    {
      "slot": "licensing",
      "eyebrow": "Licensing & Standards",
      "title": "Degree in Electronics Engineering and its recognition in Italy",
      "groups": [
        {
          "t": "p",
          "items": [
            "An Italian Master's in Electronics Engineering is usually a two-year course and is worth 120 ECTS credits. Curriculum, language of instruction and degree title are university-dependent.",
            "The program can lead to more advanced skills in the design of electronic circuits, semiconductor technology, integrated circuits, electronic systems and instrumentation. Laboratory works, research, internship, final thesis - all these depend on the curriculum.",
            "Graduates may be eligible for technical employment or further study including research at doctoral level, subject to relevant entry requirements. Students intending to practise in a regulated professional role should consult the relevant registration and professional authorization rules in the relevant country of intended employment."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "Italy Salary and Job Opportunities in Electronics Engineering",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates may pursue careers in semiconductor technology, electronics manufacturing, telecommunications, automotive electronics, industrial automation, and research and development.",
            "Possible job titles:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Passport valid.",
            "Bachelor's degree certificate or provisional certificate",
            "Academic transcripts & mark sheets.",
            "Certificate in English or Italian language, if required.",
            "CV or Resume, if applicable.",
            "Statement of purpose or letter of motivation (if required).",
            "If requested, letters of recommendation.",
            "Course descriptions or syllabus documents (as appropriate).",
            "Passport size photographs if required.",
            "Documents needed for pre-enrolment and the student visa application."
          ]
        },
        {
          "t": "p",
          "items": [
            "Depending on the university and visa process, you may also require certified translations, legalization or verification of your academic documents, proof of financial means and insurance documentation. Please adhere to the official requirements for your intended intake."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
        "q": "Is Electronics and Communication Engineering offered in English in Italy?",
        "a": "Yes. Leading Italian universities offer English-taught master's degrees in Electronics Engineering and Telecommunications Engineering."
    },
    {
        "q": "How long does the Master's programme take in Italy?",
        "a": "The programme requires 2 years of full-time study comprising 120 ECTS credits, culminating in a comprehensive master's research thesis."
    },
    {
        "q": "What are the tuition costs for ECE in Italy?",
        "a": "Annual tuition at public universities ranges from €1,000 to €3,800, with extensive need-based scholarship options available through DSU."
    },
    {
        "q": "What specializations are offered in Italian ECE programmes?",
        "a": "Specializations include Microelectronics & Chip Design, 5G/6G Wireless Networks, Photonic Technologies, RF & Microwave Engineering, and Internet of Things (IoT)."
    },
    {
        "q": "What are the entry criteria for Indian degree holders?",
        "a": "A Bachelor's degree in electronics, telecommunications, or electrical engineering, strong foundational grades in circuit theory, and IELTS/TOEFL scores."
    },
    {
        "q": "What career opportunities exist for graduates in Italy and Europe?",
        "a": "Graduates work as RF engineers, semiconductor designers (STMicroelectronics), telecom systems architects, and embedded hardware developers."
    }
],
  faqTitle: "Frequently Asked Questions About Electronics & Communication PG in Italy"
};

export default function ElectronicsCommunicationPGItaly() {
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
      seoPath="/study-abroad/italy/pg/electronics-communication"
    />
  );
}
