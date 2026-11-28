import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Germany/Architecture/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Germany/Architecture/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Germany/Architecture/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Germany/Architecture/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Germany/Architecture/1_The_Technical_University_of_Munic.webp";
import uniImg2 from "../../../../Images/Abroad/Germany/Architecture/University_image2.webp";
import uniImg3 from "../../../../Images/Abroad/Germany/Architecture/3_The_Karlsruhe_Institute_of_Techno.webp";
import uniImg4 from "../../../../Images/Abroad/Germany/Architecture/University_image4.webp";
import cmsData from "../../../../data/study_abroad/germany/architecture.json";

const page = {
  name: "Architecture in Germany",
  country: "Germany",
  slug: "architecture",
  title: "Architecture in Germany for Indian Students | Edu-Hawk Worldwide",
  description:
    "Complete guide to studying Architecture in Germany: Bachelor's and Master's degrees, top public universities (TUM, RWTH Aachen, KIT, Bauhaus Weimar), portfolio requirements, German Architektenkammer licensing, and career opportunities.",
  keywords:
    "Study Architecture in Germany for Indian Students, Best Universities for Architecture in Germany, Bachelor's in Architecture in Germany for International Students, Master's in Architecture in Germany, Architecture Courses in Germany in English, Architecture Eligibility Requirements in Germany, Architecture Admission Requirements for Indian Students, Architecture Portfolio Requirements for German Universities, IELTS and German Language Requirements for Architecture in Germany, Architecture Tuition Fees in Germany, Cost of Living for Architecture Students in Germany, Architecture Scholarships in Germany for International Students, Architecture Accreditation and Professional Recognition in Germany, Career Opportunities After Studying Architecture in Germany, Architect Salary and Job Opportunities in Germany",
  introTitle: "Study Architecture in Germany",
  heroParas: [
    "Germany's celebrated architectural heritage—from the birth of the Bauhaus movement to modern zero-emission urbanism—offers international students world-class design studios, cutting-edge building technology labs, and tuition-free public higher education with European professional licensure (*Architektenkammer*)."
  ],
  overview: [
    "**Key advantages of studying architecture in Germany:**",
    "* **Pioneering Sustainable Design:** Global leadership in Passivhaus engineering, green building certifications (DGNB), and climate-resilient urban planning.",
    "* **Zero Tuition at Public Universities:** Most public universities charge zero general tuition fees, requiring only a nominal semester contribution (€150–€350).",
    "* **Rich Design Pedagogy:** Direct studio culture blending advanced digital design tools (CAD, BIM, parametric modeling) with tactile material and structural experimentation.",
    "* **Protected Title & EU Licensure:** Pathway to register as a chartered architect (*Architekt/in*) recognized throughout the European Union.",
    "* **Flourishing Construction & Design Industry:** Direct career entry into top international architectural practices, engineering consultancies, and municipal planning authorities."
  ],
  level: "Bachelor of Arts / Science (B.A./B.Sc.) & Master (M.A./M.Sc.)",
  crumb: "Design & Built Environment / Architecture",
  stats: [
    {
      label: "Degree Formats",
      value: "B.A./B.Sc. (3–4 Yrs) & M.A./M.Sc. (1–2 Yrs)"
    },
    {
      label: "Tuition at Public Unis",
      value: "€0 / Free (Semester fee €150–€350)"
    },
    {
      label: "Language of Study",
      value: "German (UG) / English & German (PG)"
    },
    {
      label: "Post-Study Work Visa",
      value: "18-Month Jobseeker Visa"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Germany",
      title: "Why Study Architecture in Germany?",
      groups: [
        {
          t: "p",
          items: [
            "Germany represents a dynamic synthesis of architectural history and futuristic ecological construction. It is the birthplace of modern functionalist design (Bauhaus) and continues to set global benchmarks for sustainable urban transformation, energy-efficient building envelopes, and smart city infrastructure.",
            "Architecture students work in collaborative design studios under leading practicing architects, receiving comprehensive training across structural design, building construction, material science, computational design, and urban sociology."
          ]
        },
        {
          t: "points",
          title: "Core Advantages for International Students",
          items: [
            "**Tuition-Free Higher Education:** Elite technical universities (*TU9*) offer tuition-free bachelor's and master's programs in architecture.",
            "**Industry & Studio Integration:** Hands-on design studios, international competition workshops, and sponsored research with major construction contractors.",
            "**Advanced Digital Building Tools:** Intensive training in Building Information Modeling (BIM), algorithmic parametric design (Rhino/Grasshopper), and environmental simulation software.",
            "**18-Month Post-Study Visa:** Generous post-study residence rights allowing graduates to work in German architectural practices or real estate development firms."
          ]
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Degree Architectures",
      title: "German Architecture Courses & Degrees",
      text: "International students can pursue undergraduate design foundations or specialized Master's curricula:",
      cards: [
        {
          badge: "Undergraduate Degree",
          title: "Bachelor of Arts / Science (B.A. / B.Sc. in Architektur)",
          desc: "A 3- to 4-year (6 to 8 semesters) comprehensive foundational degree covering architectural design, construction technology, structural statics, architectural history, and freehand drawing. Taught primarily in German."
        },
        {
          badge: "Postgraduate Degree",
          title: "Master of Arts / Science (M.A. / M.Sc. in Architecture)",
          desc: "A 1.5- to 2-year advanced professional degree focusing on complex architectural typologies, conceptual studio projects, and building system integration. Many programs are available in English."
        },
        {
          badge: "Specialized Track",
          title: "M.Sc. in Sustainable Building & Urban Design",
          desc: "Focuses on zero-carbon building retrofitting, life-cycle carbon assessment, circular construction materials, renewable energy systems, and resilient urban planning."
        },
        {
          badge: "Technology Track",
          title: "M.Sc. in Building Information Modeling (BIM) & Computational Design",
          desc: "Integrates parametric modeling, robotics in construction, structural digital twins, and digital fabrication for advanced automated construction workflows."
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Top Universities for Architecture in Germany",
      text: "Germany's most prestigious universities and technical institutes for architecture and spatial planning:",
      cards: [
        {
          name: "Technical University of Munich (TUM)",
          city: "Munich, Bavaria",
          qsRank: "Germany #1 Architecture / QS World #22",
          tuition: "€0–€3,000/sem + €150 semester fee",
          programs: "B.Sc. & M.Sc. Architecture, M.Sc. Sustainable Resource Management",
          highlights:
            "World-renowned Department of Architecture emphasizing sustainable construction, digital fabrication, and high-performance building technology within Bavaria's booming industrial design center.",
          link: "https://www.tum.de/",
          img: uniImg1
        },
        {
          name: "RWTH Aachen University",
          city: "Aachen, North Rhine-Westphalia",
          qsRank: "Top Tier Germany (TU9)",
          tuition: "€0 / Free (Semester fee €320/sem)",
          programs: "B.Sc. & M.Sc. Architecture, M.Sc. Urban Planning & Transformation",
          highlights:
            "Famous for its rigorous structural and construction technology orientation, state-of-the-art timber and concrete research laboratories, and cross-border European studio projects.",
          link: "https://www.rwth-aachen.de/",
          img: uniImg2
        },
        {
          name: "Karlsruhe Institute of Technology (KIT)",
          city: "Karlsruhe, Baden-Württemberg",
          qsRank: "Top Tier Germany (TU9)",
          tuition: "€1,500/sem (Non-EU) + €180 semester fee",
          programs: "B.Sc. & M.Sc. Architecture",
          highlights:
            "Boasts exceptional workshops in digital design, architectural theory, and structural building design with a strong tradition of producing award-winning European architects.",
          link: "https://www.kit.edu/",
          img: uniImg3
        },
        {
          name: "Bauhaus-Universität Weimar",
          city: "Weimar, Thuringia",
          qsRank: "Historic Design & Architecture Beacon",
          tuition: "€0 / Free (Semester fee €220/sem)",
          programs: "B.Sc. & M.Sc. Architecture, M.Sc. MediaArchitecture",
          highlights:
            "The historic birthplace of the legendary Bauhaus movement, providing an experimental, artistically progressive design atmosphere combined with modern ecological urban planning.",
          link: "https://www.uni-weimar.de/",
          img: uniImg4
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Admissions Criteria",
      title: "Eligibility & Portfolio Requirements",
      text: "Admission to German architecture faculties is competitive and requires evidence of creative aptitude:",
      items: [
        "**Academic Qualifications:** High school leaving certificate (12th standard) for Bachelor's applicants (often requiring *Studienkolleg T-Kurs* or 1 year of recognized higher education). For Master's applicants, a recognized B.Arch or B.Sc. in Architecture (minimum 3–4 years).",
        "**Creative Design Portfolio (Mappe):** The most critical application component. A digital portfolio containing 10–20 high-quality projects showcasing freehand sketches, design drawings, physical models, photographs, and CAD/BIM renders.",
        "**Artistic Aptitude Test (Eignungsprüfung):** Many universities conduct an aptitude assignment or on-site/online creative design task prior to granting final admission.",
        "**German Language Proficiency:** For Bachelor's programs and German-taught Master's, certified C1 German (TestDaF 4x4, Goethe C1, or DSH-2).",
        "**English Language Proficiency:** For English-taught Master's degrees, an IELTS score of 6.5+ or TOEFL iBT of 90+.",
        "**APS Verification Certificate:** Mandatory academic evaluation certificate issued by the German Embassy / APS India for all Indian applicants."
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Cost of Education",
      title: "Tuition Structure & Living Costs",
      text: "Understanding the financial requirements for studying architecture in Germany:",
      items: [
        "**Tuition-Free Public Universities (€0):** Almost all German public universities charge zero general tuition fees for undergraduate and master's degrees.",
        "**Baden-Württemberg Non-EU Tuition (€1,500/semester):** Applicable only at public institutions within the state of Baden-Württemberg (e.g., KIT, University of Stuttgart).",
        "**Semester Contribution (€150–€380/semester):** Covers student social services, university sports, and a regional public transport pass (*Semesterticket*).",
        "**Studio & Model-Making Expenses (€50–€100/month):** Architecture students must budget for plotting, 3D printing, laser cutting, and model-making materials (cardboard, wood, acrylic).",
        "**Monthly Living Expenses (€900–€1,300/month):** Covers housing, food, student health insurance (~€125/month), and personal expenses.",
        "**German Blocked Account (Sperrkonto):** Proof of €11,904/year deposited in an official escrow blocked account for the student visa."
      ]
    },
    {
      slot: "timeline",
      eyebrow: "Step-by-Step Pathway",
      title: "Admission & Architect Registration Pathway",
      text: "Follow this 10-step roadmap to study architecture and achieve chartered status in Germany:",
      steps: [
        {
          num: "01",
          title: "Select Degree & Teaching Medium",
          desc: "Choose between an English-taught Master of Architecture (M.Arch/M.Sc.) or a German-medium Bachelor/Master track."
        },
        {
          num: "02",
          title: "Build Creative Design Portfolio",
          desc: "Curate a compelling design portfolio highlighting creative concept sketches, physical structural models, and digital renders."
        },
        {
          num: "03",
          title: "Language Testing & Certification",
          desc: "Acquire certified English test results (IELTS/TOEFL) or German language credentials (TestDaF/Goethe C1)."
        },
        {
          num: "04",
          title: "APS Verification Certificate",
          desc: "Obtain academic verification through the Academic Evaluation Centre (APS India) in New Delhi."
        },
        {
          num: "05",
          title: "Application & Aptitude Test",
          desc: "Submit portfolio and transcripts through uni-assist or the university portal; complete any required design aptitude test."
        },
        {
          num: "06",
          title: "Admission Offer Acceptance",
          desc: "Receive the official admission offer (*Zulassungsbescheid*) and confirm your study place."
        },
        {
          num: "07",
          title: "Blocked Account & Visa Application",
          desc: "Deposit €11,904 in a German blocked account, secure statutory health insurance, and apply for your National Student Visa."
        },
        {
          num: "08",
          title: "Studio Studies & Master's Thesis",
          desc: "Complete coursework in design studios, structural engineering, building physics, and defend your architectural Master's thesis."
        },
        {
          num: "09",
          title: "Practical Office Training (2 Years)",
          desc: "Work as an architectural associate (*Mitarbeiter/in*) under a registered architect across all design and construction phases (HOAI Phases 1–9)."
        },
        {
          num: "10",
          title: "Chamber Registration (Architektenkammer)",
          desc: "Register with the state Chamber of Architects to officially use the protected title *Architekt/in* and gain independent building submission authority."
        }
      ]
    },
    {
      slot: "cards",
      eyebrow: "Career Pathways",
      title: "Career Opportunities & Salary in Germany",
      text: "Graduates in architecture have extensive employment prospects across private and public built environment sectors:",
      cards: [
        {
          badge: "Design Practice",
          title: "Architectural Designer / Graduate Architect",
          desc: "Develop schematic drawings, digital visualizations, and working drawings in international architectural firms. Starting salary: €36,000–€46,000/year."
        },
        {
          badge: "Digital Construction",
          title: "BIM Manager & Computational Designer",
          desc: "Coordinate digital building information models, parametric optimization, and clash detection for complex infrastructure projects. Average salary: €50,000–€68,000/year."
        },
        {
          badge: "Project Leadership",
          title: "Project Architect & Construction Supervisor",
          desc: "Manage building construction phases, cost estimation, contractor tenders, and site supervision under HOAI regulations. Salary: €58,000–€78,000/year."
        },
        {
          badge: "Sustainable Planning",
          title: "Urban Planner & Sustainability Consultant",
          desc: "Advise municipalities and real estate funds on climate-resilient master plans and DGNB/LEED green building certifications. Senior salary: €65,000–€90,000+/year."
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Checklist",
      title: "Documents Required for Application & Visa",
      text: "Prepare the following documents for submission to German universities and the visa consulate:",
      items: [
        "Valid international passport with at least 12 months validity.",
        "School leaving certificates (10th & 12th) and university transcripts/degree certificates.",
        "Official digital APS Verification Certificate from APS India.",
        "Digital Creative Design Portfolio (*Arbeitsproben / Mappe*) in PDF format.",
        "English language certificate (IELTS/TOEFL) or German language certificate (TestDaF/Goethe C1).",
        "Detailed Academic Curriculum Vitae (*Tabellarischer Lebenslauf*).",
        "Letter of Motivation (Statement of Purpose) detailing design philosophy and study goals.",
        "Two letters of academic or professional recommendation.",
        "Proof of pre-study practical building internships (*Baustellenpraktikum*), if required.",
        "German Blocked Account confirmation (€11,904) and statutory health insurance coverage."
      ]
    }
  ],
  faqs: [
    {
      q: "Can I study Architecture in English in Germany?",
      a: "Yes. While almost all undergraduate Bachelor's degrees in architecture are taught in German, numerous postgraduate Master's degrees (such as M.Sc. in Architecture, Urban Design, Sustainable Building, and MediaArchitecture) are offered 100% in English at top universities like TUM, Bauhaus Weimar, and Dessau Institute of Architecture (DIA)."
    },
    {
      q: "What are the portfolio requirements for German architecture programs?",
      a: "A portfolio (*Mappe*) is mandatory for almost all architecture programs in Germany. It typically consists of 10 to 20 pages of original work showcasing spatial design thinking, hand sketches, architectural drawings, physical models, digital 3D renders, and conceptual project descriptions."
    },
    {
      q: "How can I become a licensed architect in Germany?",
      a: "In Germany, the title *Architekt/in* is legally protected. To register with the state Chamber of Architects (*Architektenkammer*), you need to complete a recognized 5-year university education (such as a 3-year Bachelor + 2-year Master), followed by at least 2 years of practical professional work under a licensed architect covering all design and construction phases (HOAI)."
    },
    {
      q: "Is architecture education in Germany tuition-free?",
      a: "Yes. Public universities in Germany do not charge general tuition fees for architecture programs. International students only pay a nominal semester contribution of €150 to €380 per semester, which covers student services and a regional public transport pass (except in the state of Baden-Württemberg, where non-EU students pay €1,500/semester)."
    },
    {
      q: "Can Indian students study Architecture in Germany after 12th standard?",
      a: "Yes. Indian students who have completed 12th standard with Mathematics and Physics can study architecture in Germany. Typically, a 1-year preparatory foundation course (*Studienkolleg T-Kurs*) in Germany or 1 year of a recognized university degree in India is required, along with a creative portfolio and German language proficiency (C1 level)."
    }
  ]
};

export default function Architecture() {
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
    sections: (page.sections || []).map(sec => {
      if ((sec.slot === 'universities' || sec.slot === 'unis') && cmsData?.universities && cmsData.universities.length > 0) {
        return {
          ...sec,
          unis: cmsData.universities.map((u, idx) => ({
            name: u.name,
            desc: u.desc || '',
            img: (sec.unis?.[idx]?.img || sec.unis?.[idx]?.image) || u.image || u.img
          }))
        };
      }
      return sec;
    }),
    universities: (cmsData?.universities && cmsData.universities.length > 0)
      ? cmsData.universities.map((u, idx) => ({
          ...u,
          image: page.universities?.[idx]?.image || u.image,
          img: page.universities?.[idx]?.img || u.img
        }))
      : page.universities,
    faqs: ((cmsData?.faq || cmsData?.faqs) && (cmsData?.faq || cmsData?.faqs).length > 0)
      ? (cmsData.faq || cmsData.faqs).map(f => ({ q: f.question || f.q, a: f.answer || f.a }))
      : page.faqs,
  };

  return (
    <AbroadCoursePage
      page={dynamicPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath="/study-abroad/germany/architecture"
    />
  );
}
