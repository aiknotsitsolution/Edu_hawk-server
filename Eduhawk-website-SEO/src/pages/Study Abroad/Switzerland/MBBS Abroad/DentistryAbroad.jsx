import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Switzerland/Dentistry/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Switzerland/Dentistry/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Switzerland/Dentistry/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Switzerland/Dentistry/cta_bg.webp";

// University images
import University_of_ZurichImg from "../../../../Images/Abroad/Switzerland/Dentistry/University_of_Zurich.png";
import University_of_BaselImg from "../../../../Images/Abroad/Switzerland/Dentistry/University_of_Basel.png";
import University_of_BernImg from "../../../../Images/Abroad/Switzerland/Dentistry/University_of_Bern.png";
import cmsData from "../../../../data/study_abroad/switzerland/dentistry.json";

const page = {
  name: "Dentistry in Switzerland",
  country: "Switzerland",
  slug: "dentistry",
  title: "Dentistry in Switzerland for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Dentistry in Switzerland: Top dental universities like University of Zurich, Basel & Bern, 5-year BDS & Master's pathway, tuition fees (CHF 1,000–4,000/yr), admission criteria & visa guide.",
  keywords:
    "Dentistry in Switzerland for Indian Students, Study Dentistry in Switzerland, Dental Universities in Switzerland, Switzerland Dentistry Admission Requirements, Switzerland Dentistry Language Criteria, Dentistry Fees in Switzerland, Edu-Hawk Worldwide",
  introTitle: "Dentistry in Switzerland for Indian Students: All You Need to Know",
  heroParas: [
    "Switzerland is known for its high quality of healthcare, advanced medical facilities, and quality education. **Dentistry in Switzerland for Indian Students** can be an exciting opportunity for students who want to become a dentist, explore international education, and get exposed to modern dental practices."
  ],
  overview: [
    "Studying dentistry in Switzerland requires good planning. Admission is competitive, most dental programs are taught in local languages (German or French), and international applicants should verify that they meet the specific eligibility criteria of the target university.",
    "Switzerland boasts a solid education system, modern healthcare facilities, and a strong focus on practical learning. Students interested in Dentistry in Switzerland for Indian Students can take advantage of its advanced academic environment and dental education system.",
    "Swiss universities are attractive to international students. However, merely passing Class 12 does not guarantee a seat in a dental program, as strict cantonal entry quotas and language requirements apply.",
    "With the right guidance from **Edu-Hawk Worldwide**, students can explore suitable study options, get to know the admission process, and chart their course to international dental education."
  ],
  level: "Bachelor (3 Yrs) + Master (2 Yrs)",
  crumb: "Healthcare & Dentistry",
  stats: [
    {
      label: "Degree Choices",
      value: "BDS & Master in Dental Medicine"
    },
    {
      label: "Course Duration",
      value: "5 Years Total (3 Yrs UG + 2 Yrs PG)"
    },
    {
      label: "Top Institutions",
      value: "University of Zurich, Basel & Bern"
    },
    {
      label: "Indicative Fees",
      value: "CHF 1,000 – CHF 4,000 / Year"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Switzerland",
      title: "Why Switzerland for Dentistry?",
      groups: [
        {
          t: "p",
          items: [
            "Switzerland boasts a solid education system, modern healthcare facilities, and a strong focus on practical learning. Students interested in **Dentistry in Switzerland for Indian Students** can take advantage of its advanced academic environment and dental education system.",
            "**Key reasons why international students choose Switzerland for dental studies:**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Quality Education:** The universities in Switzerland are reputed for their high academic standards and structured education system.",
            "**State-of-the-Art Facilities:** Students are exposed to modern dental polyclinics with state-of-the-art dental technology, 3D imaging, and phantom simulation environments.",
            "**Research Opportunities:** Dental education covers cutting-edge scientific subjects and opportunities to explore breakthrough developments in oral healthcare.",
            "**International Exposure:** Studying in Switzerland exposes students to a high-standard European healthcare culture and a diverse, multinational society.",
            "**Professional Development:** The dental curriculum combines biomedical science foundations, dental theory, and extensive supervised patient clinical practice."
          ]
        },
        {
          t: "p",
          items: [
            "Swiss universities are attractive to international students. However, because dentistry involves direct clinical patient contact, applicants must meet stringent academic, language, and residency prerequisites."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Dental Studies in Switzerland",
      groups: [
        {
          t: "p",
          items: [
            "**Dentistry Courses in Switzerland** follow a structured university education pathway compliant with the European Bologna system. Dental professionals undergo training through sequential bachelor's and master's level studies."
          ]
        },
        {
          t: "table",
          headers: ["Degree Level", "Typical Duration", "Core Curriculum & Focus Areas"],
          rows: [
            [
              "Bachelor of Dental Medicine / BDS",
              "3 Years (180 ECTS)",
              "Human Anatomy & Physiology, Biochemistry, Microbiology, Oral Biology, Dental Materials, Basic Dental Sciences, and Preventive Dentistry."
            ],
            [
              "Master's Degree in Dental Medicine",
              "2 Years (120 ECTS)",
              "Clinical Dentistry, Surgical Dentistry, Orthodontics, Prosthodontics, Periodontics, Endodontics (Root Canal Therapy), Dental Radiology, and Restorative Dentistry."
            ],
            [
              "Postgraduate & Specialization",
              "1 to 3 Years",
              "Specialist training in Oral and Maxillofacial Surgery, Advanced Implantology, Periodontology, or Dental Research Doctorate (Dr. med. dent.)."
            ]
          ]
        },
        {
          t: "p",
          items: [
            "The full university dental qualification typically requires **five years** of continuous study plus any federal licensing examinations and clinical registration required to practice.",
            "Students should verify the exact structure of the program and the degree title with their chosen Swiss university."
          ]
        }
      ]
    },
    {
      slot: "universities",
      eyebrow: "Top Institutions",
      title: "Best Dental Universities in Switzerland",
      lead: "Compare academic requirements, language expectations, admission policies, and eligibility for international applicants at Switzerland's top dental faculties.",
      unis: [
        {
          name: "University of Zurich (UZH)",
          location: "Zurich, Switzerland",
          fee: "CHF 1,000 – CHF 4,000 / Year",
          desc: "The Center of Dental Medicine (ZZM) at the University of Zurich is internationally recognized for excellence in dental education, modern patient clinics, and cutting-edge oral research.",
          img: University_of_ZurichImg,
          link: "https://www.zzm.uzh.ch"
        },
        {
          name: "University of Basel",
          location: "Basel, Switzerland",
          fee: "CHF 1,000 – CHF 4,000 / Year",
          desc: "The University of Basel Faculty of Dental Medicine provides comprehensive clinical training in modern conservative dentistry, periodontology, oral surgery, and preclinical phantom simulation labs.",
          img: University_of_BaselImg,
          link: "https://www.unibas.ch"
        },
        {
          name: "University of Bern",
          location: "Bern, Switzerland",
          fee: "CHF 1,000 – CHF 4,000 / Year",
          desc: "The University of Bern Dental School (zmk bern) is renowned globally for its pioneering work in dental implantology, periodontics, and comprehensive clinical dental medicine training.",
          img: University_of_BernImg,
          link: "https://www.zmk.unibe.ch"
        }
      ],
      note: [
        "These are prestigious institutions in Switzerland where you can study dental medicine. Admission to Swiss universities may be subject to cantonal quota restrictions regarding nationality, residency status, prior education, and seat availability."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility Criteria",
      title: "Switzerland Dentistry Admission Requirements",
      groups: [
        {
          t: "p",
          items: [
            "Students planning to apply for **Switzerland Dentistry Admission** must understand the academic, entrance, and linguistic benchmarks prior to application:",
            "**Key eligibility criteria include:**"
          ]
        },
        {
          t: "ul",
          items: [
            "**Higher Secondary Completion:** Successful completion of Class 12 or an approved equivalent secondary school-leaving certificate.",
            "**Science Prerequisites:** A solid academic record in Biology, Chemistry, and Physics (with Mathematics frequently advantageous).",
            "**Recognized School Leaving Certificate:** Verification of equivalence from the Swiss higher education authority (swissuniversities).",
            "**Language Proficiency:** Verified proof of proficiency in German or French (typically C1 level) corresponding to the canton where the university is located.",
            "**Entrance & Aptitude Testing:** Taking aptitude tests (such as the EMS medical aptitude test) if mandated for the cohort.",
            "**Valid Passport & Verification:** Valid passport, certified academic transcripts, and legalized educational credentials."
          ]
        },
        {
          t: "p",
          items: [
            "Swiss public universities have strict policies regarding foreign students in medical and dental faculties. International applicants without Swiss residency or Swiss Matura qualifications must contact the university admissions office to verify qualification acceptance."
          ]
        }
      ]
    },
    {
      slot: "language",
      eyebrow: "Language Criteria",
      title: "Switzerland Dentistry Language Criteria",
      groups: [
        {
          t: "p",
          items: [
            "The language of instruction is one of the most critical factors when planning to **Study Dentistry in Switzerland**. Dental education is conducted primarily in the official language of the canton:",
            "**Language breakdown across Swiss dental faculties:**"
          ]
        },
        {
          t: "table",
          headers: ["University", "Canton / Region", "Primary Language of Instruction"],
          rows: [
            ["University of Zurich", "Zurich", "German (Deutsch C1)"],
            ["University of Basel", "Basel-Stadt", "German (Deutsch C1)"],
            ["University of Bern", "Bern", "German (Deutsch C1)"],
            ["University of Geneva", "Geneva", "French (Français C1)"]
          ]
        },
        {
          t: "p",
          items: [
            "A high level of fluency in German or French is essential not only to follow complex academic lectures and preclinical coursework, but also for mandatory clinical training and direct patient communication.",
            "English proficiency alone is **not sufficient** for undergraduate or clinical dental training in Switzerland. Applicants must submit recognized C1 certifications (such as Goethe-Zertifikat C1 or DALF C1)."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "6. Cost of Dental Education in Switzerland for Indian Students",
      groups: [
        {
          t: "p",
          items: [
            "Budgeting for **Dentistry Fees in Switzerland** and living costs is a crucial phase of study abroad planning. While public tuition is subsidized, living expenses in Swiss cities require realistic financial planning.",
            "*(Indicative rates for reference: CHF 1 ≈ ₹110; actual foreign exchange rates fluctuate.)*"
          ]
        },
        {
          t: "table",
          headers: ["Type of Institution", "Indicative Yearly Fees (CHF)", "Approx. Yearly Cost (INR)"],
          rows: [
            ["Public University (Subsidized)", "CHF 1,000 – CHF 4,000", "₹1.1 Lakh – ₹4.4 Lakh"],
            ["Special International Fee / Higher Surcharge", "CHF 4,000 – CHF 10,000+", "₹4.4 Lakh – ₹11 Lakh+"]
          ]
        },
        {
          t: "p",
          items: [
            "**Estimated Monthly Cost of Living in Switzerland:**"
          ]
        },
        {
          t: "table",
          headers: ["Expense Category", "Monthly Cost (CHF)", "Approx. Monthly Cost (INR)"],
          rows: [
            ["Accommodation & Utilities", "CHF 700 – CHF 1,500", "₹77,000 – ₹1,65,000"],
            ["Groceries & Meals", "CHF 300 – CHF 600", "₹33,000 – ₹66,000"],
            ["Local Public Transport", "CHF 70 – CHF 150", "₹7,700 – ₹16,500"],
            ["Personal Expenses & Discretionary", "CHF 200 – CHF 400", "₹22,000 – ₹44,000"],
            ["Estimated Total Monthly Cost", "CHF 1,270 – CHF 2,650", "₹1.40 Lakh – ₹2.92 Lakh"]
          ]
        },
        {
          t: "p",
          items: [
            "**Estimated Total 5-Year Budget:**",
            "Over a complete 5-year dental course (BDS + Master's), combined tuition and living costs typically range between **CHF 64,000 and CHF 169,000** (approximately **₹70.4 Lakh to ₹1.86 Crore** at illustrative conversion rates).",
            "This estimate excludes visa fees, return airfare, mandatory Swiss health insurance, books, clinical instruments, and personal security deposits."
          ]
        }
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Guide",
      title: "Dentistry in Switzerland Admission Procedure",
      groups: [
        {
          t: "timeline",
          items: [
            {
              title: "Research Universities & Regulations",
              desc: "Identify Swiss universities offering dental medicine (Zurich, Basel, Bern, Geneva) and confirm whether foreign applicant quotas are open for the academic intake."
            },
            {
              title: "Confirm Academic Eligibility",
              desc: "Verify Class 12 subject combinations (PCB) and verify secondary school-leaving equivalency through swissuniversities guidelines."
            },
            {
              title: "Complete Language Preparation",
              desc: "Achieve the mandatory C1 level certification in German or French depending on the location of your chosen university."
            },
            {
              title: "Prepare for Aptitude Assessments",
              desc: "Determine if aptitude evaluations, entrance assessments (EMS), or interview rounds are mandated for your application cohort."
            },
            {
              title: "Assemble and Translate Documents",
              desc: "Prepare certified translations and apostille legalizations of mark sheets, identity papers, CV, and motivational letters."
            },
            {
              title: "Submit Official Application",
              desc: "Submit your comprehensive application via the university portal before the published international deadlines."
            },
            {
              title: "Student Visa Formalities",
              desc: "Upon receiving your official letter of admission, apply for a Swiss National Visa (Type D) through the Swiss Embassy/Consulate with evidence of sufficient financial means and confirmed housing."
            }
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Checklist",
      title: "Documents Required for Dentistry Admission in Switzerland",
      groups: [
        {
          t: "p",
          items: [
            "Applicants should prepare a comprehensive dossier following the university and cantonal checklist:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid passport (with at least 6 months validity remaining).",
            "Class 10 mark sheet and certificate.",
            "Class 12 mark sheet and passing certificate (with detailed Biology, Chemistry, and Physics scores).",
            "Official academic transcripts and school-leaving qualification documents.",
            "Certificate of language proficiency in German or French (Goethe/TestDaF C1 or DELF/DALF C1).",
            "Duly completed university application form and receipt of application fee.",
            "Entrance exam or aptitude assessment scorecards (where applicable).",
            "Recent passport-sized photographs.",
            "Credential equivalence certificate issued by the competent recognition body (if required).",
            "Official university letter of acceptance / admission offer.",
            "Proof of sufficient financial resources (bank guarantee/statement required for visa).",
            "Proof of local Swiss accommodation and valid medical/health insurance coverage."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways",
      title: "Career Options Post Dentistry Studies in Switzerland",
      groups: [
        {
          t: "p",
          items: [
            "A Swiss qualification in dental medicine provides solid clinical foundations and opens doors across diverse professional avenues:",
            "**Potential professional practice and specialization areas:**"
          ]
        },
        {
          t: "pills",
          items: [
            "General Dental Practitioner",
            "Orthodontics & Dentofacial Orthopedics",
            "Oral & Maxillofacial Surgery",
            "Prosthodontics & CAD/CAM Restorations",
            "Periodontology & Implantology",
            "Endodontics (Root Canal Therapy)",
            "Pediatric Dentistry",
            "Academic Dental Research & Teaching",
            "Dental Public Health & Health Administration"
          ]
        },
        {
          t: "p",
          items: [
            "**Registration and Licensing:** Graduates who wish to practice in Switzerland must fulfill federal licensing and cantonal dental chamber registration requirements.",
            "**Returning to Practice in India:** Indian students must verify the latest guidelines, screening examinations, and recognition criteria with the **National Dental Commission (NDC)** and Ministry of Health. Foreign dental qualifications do not confer an automatic license to practice in India."
          ]
        }
      ]
    },
    {
      slot: "important",
      eyebrow: "Key Considerations",
      title: "Key Points Indian Students Need to Know Before Applying",
      groups: [
        {
          t: "p",
          items: [
            "Before embarking on an application for **Dentistry in Switzerland**, keep these practical considerations in mind:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Admission Restrictions:** Many Swiss public dental faculties have quota limitations (Numerus Clausus) that give priority to Swiss citizens and permanent residents.",
            "**Language Proficiency:** German or French fluency is vital. Ensure you begin language classes early to reach the certified C1 standard.",
            "**High Living Expenses:** Switzerland is one of Europe's most expensive study destinations; realistic budgeting for tuition, food, housing, and health insurance is essential.",
            "**Professional Recognition:** Confirm that your degree aligns with the registration norms of the country where you ultimately intend to practice.",
            "**Financial Verification:** The Swiss migration authorities require proof of adequate funds to issue the student visa (National Visa D)."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Can Indian Students Study Dentistry in Switzerland?",
      a: "Yes, subject to university and cantonal eligibility criteria. However, admission to dental medicine in Switzerland is highly competitive, and public universities often apply strict restrictions or quotas for non-resident international applicants."
    },
    {
      q: "How long does it take to become a dentist in Switzerland?",
      a: "The standard university path takes 5 years: a 3-year Bachelor of Dental Medicine followed by a 2-year Master of Dental Medicine. Additional time is needed for the federal licensing examination and clinical registration."
    },
    {
      q: "Is Dentistry taught in English in Switzerland?",
      a: "No. Professional dental medicine degrees in Switzerland are taught in the official regional languages (German in Zurich, Basel, and Bern; French in Geneva). Fluent C1 proficiency is required for both coursework and direct patient treatment."
    },
    {
      q: "How much does Dentistry in Switzerland cost for Indian students?",
      a: "Indicative annual tuition at public Swiss universities ranges from CHF 1,000 to CHF 4,000 (some cantons charge an international fee of CHF 4,000–10,000+). Monthly living costs average CHF 1,270 to CHF 2,650 depending on the canton and lifestyle."
    },
    {
      q: "Can I practice in India after studying Dentistry in Switzerland?",
      a: "Not automatically. Students must verify foreign qualification recognition, internship guidelines, and screening examination prerequisites with the National Dental Commission (NDC) in India before enrolling."
    }
  ],
  faqTitle: "11. Frequently Asked Questions About Dentistry in Switzerland"
};

export default function DentistryAbroadSwitzerland() {
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
      seoPath="/study-abroad/switzerland/dentistry"
    />
  );
}
