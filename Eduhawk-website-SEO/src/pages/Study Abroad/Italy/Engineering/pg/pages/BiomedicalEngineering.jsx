import React from "react";
import { AbroadCoursePage } from "../../../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/hero.webp";
import heroBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/hero_bg.webp";
import sideImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/side.webp";
import ctaBgImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/cta_bg.webp";
import Politecnico_MilanoImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/Politecnico_Milano.webp";
import Rome_University_of_Tor_VergataImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/Rome_University_of_Tor_Vergata.webp";
import Universit_di_PisaImg from "../../../../../../Images/Abroad/Italy/Engineering_PG/Biomedical/Universit_di_Pisa.webp";

const page = {
  "name": "Biomedical Engineering - PG in Italy",
  "country": "Italy",
  "slug": "biomed_engg_pg",
  "title": "Biomedical Engineering - PG in Italy for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Biomedical Engineering - PG in Italy: Top universities, English-taught programs, tuition fees (€1,000–€4,000/yr), scholarships, eligibility criteria, and post-study work opportunities.",
  "keywords": "Top 6 SEO Keywords",
  "introTitle": "Master's in Biomedical Engineering in Italy for Indian Students",
  "heroParas": [
    "Yes. If Indian students have a Bachelor's degree in Biomedical Engineering or related engineering or science discipline that is recognized, they can apply provided they satisfy the eligibility criteria of the university."
  ],
  "overview": [
    "Yes. If Indian students have a Bachelor's degree in Biomedical Engineering or related engineering or science discipline that is recognized, they can apply provided they satisfy the eligibility criteria of the university."
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
      "value": "3 to 4 Years (UG) / 2 Years (PG)"
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
      "title": "Is it possible for an Indian student to study Masters in Biomedical Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes. If Indian students have a Bachelor's degree in Biomedical Engineering or related engineering or science discipline that is recognized, they can apply provided they satisfy the eligibility criteria of the university."
          ]
        }
      ]
    },
    {
      "slot": "section-2",
      "eyebrow": "Details",
      "title": "Master's in Biomedical Engineering Duration in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "In Italy, the majority of Master's programs last for two years and are typically worth 120 ECTS credits."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Universities for Biomedical Engineering - PG in Italy",
      "groups": [
        {
          "t": "cards",
          "items": [
            {
              "name": "Politecnico di Milano",
              "location": "Milan, Italy",
              "fee": "€1,000 – €3,900 / Year",
              "desc": "Leading technical university in Italy renowned for engineering and design.",
              img: Politecnico_MilanoImg
            },
            {
              "name": "Sapienza University of Rome",
              "location": "Rome, Italy",
              "fee": "€1,000 – €3,000 / Year",
              "desc": "One of the oldest and largest prestigious research universities in Europe.",
              img: Rome_University_of_Tor_VergataImg
            },
            {
              "name": "University of Bologna",
              "location": "Bologna, Italy",
              "fee": "€1,000 – €3,500 / Year",
              "desc": "The world’s oldest continuously operating university with excellent international programs.",
              img: Universit_di_PisaImg
            },
            {
              "name": "University of Padua",
              "location": "Padua, Italy",
              "fee": "€1,000 – €2,800 / Year",
              "desc": "Historic university offering high-ranking English-taught degrees and research facilities.",
              img: Politecnico_MilanoImg
            }
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "How much is the tuition fee for Biomedical Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Tuition fees at public universities can vary anywhere from around €1,000 to €4,000 per year depending on the university and the fee structure applicable."
          ]
        }
      ]
    },
    {
      "slot": "section-4",
      "eyebrow": "Details",
      "title": "Do I need IELTS to get admission?",
      "groups": [
        {
          "t": "p",
          "items": [
            "English-taught programs may require IELTS or an accepted English proficiency test. Depends on the university."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Prospects",
      "title": "What are the job opportunities after the Biomedical Engineering in Italy?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Graduates can work in medical device development, clinical engineering, medical imaging, biomaterials, research, and healthcare technology."
          ]
        }
      ]
    },
    {
      "slot": "section-6",
      "eyebrow": "Details",
      "title": "Are there scholarships for Indian students?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Yes, Indian students may be eligible for DSU regional scholarships, university scholarships and other financial assistance programs, depending on the applicable conditions.",
            "Top 6 SEO Keywords"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Master's in Biomedical Engineering in Italy",
            "Biomedical Engineering in Italy for Indian Students",
            "Biomedical Engineering Courses in Italy",
            "Best Schools for Biomedical Engineering in Italy",
            "Biomedical Engineering Admission in Italy",
            "Tuition Fees of Biomedical Engineering in Italy"
          ]
        }
      ]
    }
  ]
};

export default function BiomedicalEngineeringPGItaly() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={false}
      seoPath="/study-abroad/italy/pg/biomedical-engineering"
    />
  );
}
