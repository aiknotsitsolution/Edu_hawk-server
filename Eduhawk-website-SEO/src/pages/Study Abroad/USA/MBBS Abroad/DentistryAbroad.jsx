import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// University campus photos
import Michigan_School_of_Dentistry from "../../../../Images/Abroad/USA/Dentistry_USA/Michigan_School_of_Dentistr.webp";
import San_Francisco_School_of_Dentistry from "../../../../Images/Abroad/USA/Dentistry_USA/San_Francisco_School_of_Dentistry.webp";
import Pennsylvania_School_of_Dental_Medicine from "../../../../Images/Abroad/USA/Dentistry_USA/Pennsylvania_School_of_Dental_Medicine.webp";
import University_College_of_Dentistry from "../../../../Images/Abroad/USA/Dentistry_USA/University_College_of_Dentistry.webp";

// Clinical layout images
import heroImg from "../../../../Images/Abroad/USA/Dentistry_USA/hero.webp";
import heroBgImg from "../../../../Images/Abroad/USA/Dentistry_USA/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/USA/Dentistry_USA/side.webp";
import ctaBgImg from "../../../../Images/Abroad/USA/Dentistry_USA/cta_bg.webp";

import cmsData from "../../../../data/study_abroad/usa/dentistry.json";

const fallbackPage = {
  name: "Dentistry",
  country: "USA",
  slug: "dentistry",
  title: "Study Dentistry in the USA for Indian Students | DDS, DMD & INBDE Guide",
  description: "Explore dentistry in the USA for Indian students. Learn about DDS, DMD programs, Advanced Standing for BDS graduates, top dental schools (Michigan, UCSF, Penn, NYU), DAT, fees, and INBDE licensing.",
  keywords: "Study Dentistry in the USA, DDS in USA, DMD in USA, Advanced Standing Dental Programs, Best Dental Schools in the USA, INBDE Exam, Cost of Dental School in USA",
  introTitle: "Study Dentistry in the USA",
  heroParas: [
    "Earn a prestigious Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD) degree in the United States, featuring cutting-edge clinical facilities and research-driven education. Indian BDS graduates can access accelerated 2–3 year Advanced Standing programs leading to US dental licensure."
  ],
  level: "Doctoral & Advanced Standing",
  crumb: "Healthcare & Dentistry",
  stats: [
    { label: "Degree Choices", value: "DDS, DMD & Advanced Standing" },
    { label: "Course Duration", value: "4 Years (DDS) / 2–3 Years (Advanced Standing)" },
    { label: "Top Dental Schools", value: "Univ. of Michigan, UCSF, Penn Dental, NYU" },
    { label: "Medium of Study", value: "English Taught" }
  ]
};

export default function DentistryAbroad() {
  const universityImgMap = {
    "University of Michigan School of Dentistry": Michigan_School_of_Dentistry,
    "Michigan_School_of_Dentistry": Michigan_School_of_Dentistry,
    "University of California, San Francisco School of Dentistry": San_Francisco_School_of_Dentistry,
    "UCSF School of Dentistry": San_Francisco_School_of_Dentistry,
    "San_Francisco_School_of_Dentistry": San_Francisco_School_of_Dentistry,
    "University of Pennsylvania School of Dental Medicine": Pennsylvania_School_of_Dental_Medicine,
    "Penn Dental Medicine": Pennsylvania_School_of_Dental_Medicine,
    "Pennsylvania_School_of_Dental_Medicine": Pennsylvania_School_of_Dental_Medicine,
    "New York University College of Dentistry": University_College_of_Dentistry,
    "NYU College of Dentistry": University_College_of_Dentistry,
    "University_College_of_Dentistry": University_College_of_Dentistry,
  };

  const dynamicPage = {
    ...fallbackPage,
    title: cmsData?.seo?.title || fallbackPage.title,
    description: cmsData?.seo?.description || fallbackPage.description,
    introTitle: cmsData?.hero?.title || fallbackPage.introTitle || fallbackPage.name,
    heroParas: cmsData?.hero?.subtitle ? [cmsData.hero.subtitle] : fallbackPage.heroParas,
    stats: (cmsData?.stats && cmsData.stats.length > 0) ? cmsData.stats : fallbackPage.stats,
    overview: (cmsData?.overview && cmsData.overview.length > 0 && cmsData.overview[0] !== "")
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : fallbackPage.overview,
    sections: (cmsData?.sections && cmsData.sections.length > 0
      ? cmsData.sections
      : fallbackPage.sections
    ).map((s) => {
      if (s.slot === "universities" || s.unis) {
        const rawUnis = (s.unis && s.unis.length > 0) ? s.unis : (cmsData?.universities || []);
        return {
          ...s,
          unis: rawUnis.map((u) => ({
            ...u,
            img: universityImgMap[u.name] || u.img || u.image,
            image: universityImgMap[u.name] || u.image || u.img,
          })),
        };
      }
      return s;
    }),
    universities: ((cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities
      : [
          {
            name: "University of Michigan School of Dentistry",
            location: "Ann Arbor, Michigan",
            fee: "USD $70,000 – $95,000 / Year",
            desc: "Consistently ranked among the top dental schools in the world, Michigan Dentistry provides world-leading oral health sciences research, modern simulation facilities, and pioneering patient care.",
          },
          {
            name: "UCSF School of Dentistry",
            location: "San Francisco, California",
            fee: "USD $68,000 – $92,000 / Year",
            desc: "A preeminent public academic health center renowned for clinical innovation, craniofacial biology research, community outreach clinics, and competitive postgraduate dental residencies.",
          },
          {
            name: "Penn Dental Medicine",
            location: "Philadelphia, Pennsylvania",
            fee: "USD $75,000 – $105,000 / Year",
            desc: "University of Pennsylvania's prestigious Ivy League dental institution featuring historic clinical leadership, cutting-edge digital dentistry pavilions, and specialized advanced-standing tracks.",
          },
          {
            name: "NYU College of Dentistry",
            location: "New York, New York",
            fee: "USD $80,000 – $115,000 / Year",
            desc: "The largest dental school in the United States, educating nearly 10% of American dentists with massive clinical patient exposure, advanced specialty clinics, and dedicated global programs.",
          },
        ]
    ).map((u) => ({
      ...u,
      img: universityImgMap[u.name] || u.img || u.image,
      image: universityImgMap[u.name] || u.image || u.img,
    })),
    faqs: (cmsData?.faqs && cmsData.faqs.length > 0)
      ? cmsData.faqs.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
      : (cmsData?.faq && cmsData.faq.length > 0)
        ? cmsData.faq.map(f => ({ q: f.q || f.question, a: f.a || f.answer, question: f.q || f.question, answer: f.a || f.answer }))
        : [],
    seo: {
      title: cmsData?.seo?.title || fallbackPage.title,
      description: cmsData?.seo?.description || fallbackPage.description,
      keywords: cmsData?.seo?.keywords || fallbackPage.keywords,
    },
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      showHeroStats={true}
      seoPath="/study-abroad/usa/dentistry"
    />
  );
}
