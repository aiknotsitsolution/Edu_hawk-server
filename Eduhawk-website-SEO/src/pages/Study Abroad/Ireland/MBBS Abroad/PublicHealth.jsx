import React from "react";
import { AbroadCoursePage, withCmsData } from "../../../../component/CoursePageKit.jsx";
import cmsData from "../../../../data/study_abroad/ireland/public_health.json";

// Page layout images
import heroImg from "../../../../Images/Abroad/Ireland/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Ireland/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Ireland/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Ireland/PublicHealth/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Ireland/PublicHealth/University_College_Cork.webp";
import uniImg2 from "../../../../Images/Abroad/Ireland/PublicHealth/Galway_University.webp";
import uniImg3 from "../../../../Images/Abroad/Ireland/PublicHealth/Irelands_Royal_College_of_Surgeons.webp";

const page = {
  name: "Public Health in Ireland",
  country: "Ireland",
  slug: "study-abroad/ireland/public-health",
  title: "Study Public Health in Ireland for Indian Students | Edu-Hawk Worldwide",
  description: "Complete guide to studying Public Health (MPH) in Ireland for Indian students: Top Irish universities (UCC, Galway, RCSI), eligibility criteria, tuition fees (€16,700 / year), and 2-year Stamp 1G post-study work visa.",
  keywords: "Study Public Health in Ireland for Indian Students, Master of Public Health in Ireland, Best Universities for MPH in Ireland, Cost of Studying Public Health in Ireland, Public Health Careers in Ireland, Edu-Hawk Worldwide",
  introTitle: "MASTER OF PUBLIC HEALTH (MPH) IN IRELAND FOR INTERNATIONAL STUDENTS",
  heroParas: [
    "Studying Public Health in Ireland equips international students with specialized expertise in population health, biostatistics, epidemiological surveillance, and global healthcare policy. Offered across prestigious institutions such as University College Cork (UCC), the University of Galway, and RCSI University of Medicine and Health Sciences, the intensive one-year Master of Public Health (MPH) program prepares graduates to tackle complex global health inequities, manage infectious disease outbreaks, and lead health initiatives with full 2-year post-study work authorization (Stamp 1G)."
  ],
  overview: [
    "Public health is the science and art of preventing disease, prolonging life, and promoting health through organized societal efforts. In Ireland, public health education places central importance on addressing chronic disease epidemiology, social determinants of health, digital health informatics, and sustainable healthcare systems.",
    "Irish universities provide world-recognized Master of Public Health (MPH) and Master of Science (MSc) programs (NFQ Level 9). Typically completed over one intensive full-time calendar year, the curriculum offers specialized concentrations in health promotion, epidemiology, global health, health protection, and health economics. The degree welcomes graduates from diverse disciplinary backgrounds—including medicine, nursing, pharmacy, biology, statistics, psychology, and social sciences.",
    "Edu-Hawk Worldwide delivers comprehensive guidance for international applicants. Our expert counselors assist with academic profile evaluation, crafting persuasive Statements of Purpose that highlight population health vision, securing university admissions, and successfully navigating the Irish student visa (Stamp 2) application."
  ],
  level: "Master of Public Health (MPH - NFQ Level 9) & MSc Global Health",
  crumb: "Healthcare & Medicine / Public Health in Ireland",
  stats: [
    {
      label: "Degree Choices",
      value: "Master of Public Health (MPH) & MSc Global Health"
    },
    {
      label: "Course Duration",
      value: "1 Year Full-Time (NFQ Level 9)"
    },
    {
      label: "Top Institutions",
      value: "UCC Cork, University of Galway, RCSI Dublin"
    },
    {
      label: "Post-Study Work",
      value: "2 Years Stamp 1G (Graduate Scheme)"
    }
  ],
  sections: [
    {
      slot: "why",
      eyebrow: "Why Choose Ireland",
      title: "Key Advantages of Studying Public Health in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Studying public health in Ireland provides international students with a dynamic European healthcare perspective, robust epidemiological research training, and extensive career versatility:"
          ]
        },
        {
          t: "ul",
          items: [
            "Advanced Epidemiological & Biostatistical Skills: Master advanced statistical software (R, Stata, SPSS) to design observational studies, analyze health big data, and track disease trends.",
            "Multidisciplinary Learning Environment: Collaborate in seminar groups with physicians, nurses, environmental scientists, sociologists, and data analysts from across the world.",
            "European Health Policy Integration: Examine the evidence-based public health strategies employed by Ireland's Health Service Executive (HSE) and the European Centre for Disease Prevention and Control (ECDC).",
            "Broad Specialized Electives: Customize your MPH degree with advanced pathways in Epidemiology, Health Promotion, Health Protection, Infection Prevention, or Global Health Systems.",
            "High Employability Across Sectors: Transition into impactful roles across public health directorates, NGOs, clinical trial management, pharmaceutical health economics, and global agencies like the WHO.",
            "2-Year Post-Study Work Visa (Stamp 1G): As Level 9 Master's graduates, international students receive a 24-month post-study work authorization to pursue career opportunities in Ireland."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Program Specializations",
      title: "Public Health Degree Programs & Concentrations in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Irish universities offer structured postgraduate public health qualifications tailored to diverse academic and professional career trajectories:"
          ]
        },
        {
          t: "ul",
          items: [
            "Master of Public Health (MPH - 1 Year Full-Time): Core coursework covering epidemiology, biostatistics, public health policy, qualitative research methods, and a major dissertation project.",
            "MPH Pathway in Epidemiology & Biostatistics: Advanced concentration in clinical trial design, infectious disease surveillance, survival analysis, and causal inference modeling.",
            "MPH Pathway in Health Promotion: Dedicated to community lifestyle interventions, behavioral psychology, health communication, and workplace wellness programs.",
            "MSc in Global Health: Examines global disease burdens, migration health, humanitarian relief, and comparative health systems financing in low- and middle-income countries.",
            "MSc in Community Health: Focuses on primary healthcare delivery, community empowerment, chronic disease management, and localized prevention programs.",
            "Postgraduate Diploma in Public Health (9 Months): Offers foundational public health credentialing for working professionals without a thesis requirement."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Featured Universities",
      title: "Top Universities and Public Health Schools in Ireland",
      unis: [
        {
          name: "University College Cork",
          city: "Cork",
          state: "Munster",
          desc: "School of Public Health—a premier European public health research institute offering Ireland's flagship full-time MPH program with outstanding faculty expertise in cardiovascular and dietary epidemiology.",
          img: uniImg1
        },
        {
          name: "University of Galway",
          city: "Galway",
          state: "Connacht",
          desc: "College of Medicine, Nursing and Health Sciences, offering acclaimed postgraduate qualifications in public health, global health systems, and health promotion with designated WHO collaborative research centers.",
          img: uniImg2
        },
        {
          name: "Royal College of Surgeons in Ireland",
          city: "Dublin",
          state: "Leinster",
          desc: "RCSI School of Population Health delivers cutting-edge postgraduate education, healthcare leadership, and epidemiology research focusing on population healthcare improvement.",
          img: uniImg3
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Programs in Ireland maintain close research ties with the Health Protection Surveillance Centre (HPSC) and the National Suicide Research Foundation (NSRF)."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Admissions Criteria",
      title: "Eligibility Criteria for Public Health Programs in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Because public health is inherently multidisciplinary, Irish universities evaluate candidates from a broad variety of academic backgrounds:"
          ]
        },
        {
          t: "ul",
          items: [
            "Academic Degree Requirement: A recognized 3 or 4-year Bachelor's degree (NFQ Level 8 equivalent) with a minimum aggregate score of 60% to 65% (Second Class Honours, Grade 1 / 2.1 equivalent).",
            "Eligible Academic Disciplines: Medicine (MBBS), Nursing, Pharmacy, Dentistry, Physiotherapy, Biotechnology, Biological Sciences, Psychology, Sociology, Health Sciences, Environmental Health, Economics, or Statistics.",
            "Quantitative Preparation: Basic familiarity with mathematics or statistics is advantageous for epidemiology and biostatistics modules.",
            "English Language Proficiency: IELTS Academic overall score of 6.5 (with no individual band below 6.0; select schools require 7.0), or equivalent TOEFL iBT (88–95+) / Pearson PTE (63+).",
            "Work Experience: While fresh graduates are considered, relevant clinical, community, research, or NGO work experience significantly strengthens the application."
          ]
        }
      ]
    },
    {
      slot: "requirements",
      eyebrow: "Application Materials",
      title: "Admission Requirements & Application Dossier",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following core application documents are officially certified and compiled:"
          ]
        },
        {
          t: "ul",
          items: [
            "Certified undergraduate degree completion certificate and semester-wise academic transcripts.",
            "Valid International Passport with minimum 12 months validity.",
            "Statement of Purpose (SOP) articulating your understanding of public health challenges, reason for choosing Ireland, and prospective career vision.",
            "Two Academic or Professional Letters of Recommendation (from university professors or healthcare employers).",
            "Updated Curriculum Vitae (CV) emphasizing academic background, public health volunteering, or clinical research.",
            "Official English language proficiency test scorecard (IELTS / TOEFL / PTE).",
            "Proof of professional healthcare registration (if applicable, e.g., for doctors, nurses, or pharmacists)."
          ]
        }
      ]
    },
    {
      slot: "tuition",
      eyebrow: "Financial Overview",
      title: "Tuition Fees and Cost of Living for Public Health in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "Tuition fees for international non-EU students for the Master of Public Health (MPH) represent competitive value compared to the UK and North America:"
          ]
        },
        {
          t: "p",
          items: [
            "| Expense Category | Annual Indicative Cost Range | Key Budgeting Notes |",
            "| :--- | :--- | :--- |",
            "| **Full-Time MPH Tuition (UCC)** | €16,700 / year (2026–2027) | Plus standard non-EU fee charge (€210) |",
            "| **Full-Time MPH Tuition (Galway / RCSI)** | €17,500 – €24,000 / year | 1-year full-time postgraduate curriculum |",
            "| **Student Living Expenses (Cork / Galway)** | €9,500 – €13,000 / year | Accommodation, food, transit, and utilities |",
            "| **Student Living Expenses (Dublin)** | €12,000 – €16,000 / year | Moderate to higher private/student housing rentals |",
            "| **Books & Study Software** | €300 – €500 / year | Digital textbook subscriptions and statistical software |",
            "| **Private Health Insurance** | €160 – €300 / year | Mandatory international student medical insurance policy |",
            "| **Irish Residence Permit (IRP)** | €300 registration fee | Mandatory immigration registration fee upon arrival |"
          ]
        },
        {
          t: "p",
          items: [
            "Scholarship Opportunities: International MPH candidates can apply for the prestigious Government of Ireland International Education Scholarship (GOI-IES) providing a full tuition fee waiver plus €10,000 living stipend, as well as institutional merit scholarships (€2,000 to €5,000) offered by UCC and Galway."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Step-by-Step Admission Process for Public Health in Ireland",
      steps: [
        {
          title: "Select Specialization Pathway",
          desc: "Choose between general public health, epidemiology & biostatistics, global health, or health promotion."
        },
        {
          title: "Verify Academic Eligibility",
          desc: "Confirm that your undergraduate degree meets the required 60%–65% (2.1 Honours equivalent) threshold alongside IELTS 6.5+."
        },
        {
          title: "Craft a Visionary Statement of Purpose",
          desc: "Draft a personalized SOP detailing your commitment to disease prevention, population health equity, and healthcare leadership."
        },
        {
          title: "Obtain Letters of Recommendation",
          desc: "Secure two academic or professional references attesting to your critical thinking and research capabilities."
        },
        {
          title: "Submit Online University Application",
          desc: "Apply directly through the institutional postgraduate portals of UCC, University of Galway, or RCSI."
        },
        {
          title: "Accept Offer & Remit Tuition Deposit",
          desc: "Review your admission offer letter, pay the required tuition deposit, and obtain the formal visa acceptance receipt."
        },
        {
          title: "Apply for Irish Student Visa (Stamp 2)",
          desc: "File your visa application via the AVATS portal with proof of funds (€10,000+ living funds plus tuition fee receipt)."
        },
        {
          title: "Arrive in Ireland & Complete Registration",
          desc: "Travel to Ireland, attend postgraduate orientation, register for your Irish Residence Permit (IRP), and commence your MPH."
        }
      ],
      groups: [
        {
          t: "p",
          items: [
            "Applying early between November and March is strongly advised to secure international scholarship opportunities and university housing."
          ]
        }
      ]
    },
    {
      slot: "accreditation",
      eyebrow: "Academic Standards",
      title: "Accreditation, Quality Framework, and Global Recognition",
      groups: [
        {
          t: "p",
          items: [
            "Public Health degrees in Ireland are governed by rigorous national quality frameworks ensuring international prestige:"
          ]
        },
        {
          t: "ul",
          items: [
            "National Framework of Qualifications (NFQ Level 9): Master of Public Health degrees represent accredited Level 9 master's qualifications under Quality and Qualifications Ireland (QQI).",
            "APHEA Alignment: Curriculum benchmarks align with the Agency for Public Health Education Accreditation (APHEA) standards across Europe.",
            "Non-Clinical Recognition: The MPH is an academic and policy degree; medical graduates wishing to practice as public health medical specialists in Ireland must undergo separate clinical specialty training with the Royal College of Physicians of Ireland (RCPI).",
            "Global Mobility: Irish MPH degrees are internationally recognized, qualifying graduates for doctoral research (PhD) and senior health consulting roles worldwide."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Outcomes",
      title: "Public Health Salaries and Career Opportunities in Ireland",
      groups: [
        {
          t: "p",
          items: [
            "MPH graduates in Ireland find versatile employment opportunities across public health agencies, government departments, international NGOs, research institutes, and pharmaceutical corporations:"
          ]
        },
        {
          t: "ul",
          items: [
            "Epidemiologist & Surveillance Officer: Investigating infectious disease clusters, monitoring chronic illness trends, and modeling health outcomes.",
            "Health Promotion Officer: Designing, implementing, and evaluating community-wide lifestyle and preventative health interventions.",
            "Health Policy Analyst: Researching healthcare delivery models, evaluating health economic data, and drafting policy recommendations for governmental bodies.",
            "Clinical Research Coordinator (CRO): Managing clinical trial registries, patient safety data, and regulatory submissions in pharmaceutical enterprises.",
            "Global Health Project Manager: Leading disease eradication campaigns and humanitarian maternal-child health programs in international NGOs.",
            "Health Data Scientist: Analyzing national electronic health records and epidemiological datasets using statistical computing."
          ]
        },
        {
          t: "p",
          items: [
            "Indicative Annual Salaries for Public Health Professionals in Ireland:",
            "• Public Health Research Assistant / Project Officer: €34,000 – €46,000 / year",
            "• Health Promotion Officer / Epidemiologist: €42,000 – €56,000 / year",
            "• Health Policy Analyst / Health Economist: €48,000 – €68,000 / year",
            "• Senior Epidemiologist / Public Health Program Director: €65,000 – €90,000+ / year"
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Document Checklist",
      title: "Comprehensive Document Checklist for MPH Applicants",
      groups: [
        {
          t: "p",
          items: [
            "Ensure the following documents are officially prepared and certified before starting your public health application:"
          ]
        },
        {
          t: "ul",
          items: [
            "Valid International Passport with biographical data pages.",
            "Official undergraduate semester transcripts and degree completion certificate.",
            "Class 10 and Class 12 mark sheets and passing certificates.",
            "English language proficiency scorecard (IELTS 6.5+ / TOEFL 88+).",
            "Statement of Purpose (SOP) tailored to your chosen public health specialization.",
            "Two Letters of Recommendation (academic professors or workplace managers).",
            "Updated Curriculum Vitae (CV) emphasizing relevant health or research experience.",
            "Proof of financial sufficiency for tuition and living expenses (€10,000+ living funds).",
            "Private medical insurance policy."
          ]
        }
      ]
    },
    {
      slot: "consultancy",
      eyebrow: "Edu-Hawk Guidance",
      title: "How Edu-Hawk Worldwide Supports Your Irish Public Health Studies",
      groups: [
        {
          t: "p",
          items: [
            "Navigating public health admissions and aligning your academic background requires tailored counseling. Edu-Hawk Worldwide provides comprehensive overseas guidance:",
            "• Program Shortlisting: Identifying the ideal MPH or Global Health program based on your disciplinary background and career goals.",
            "• SOP Mentorship: Assisting you in drafting a standout Statement of Purpose that communicates your public health vision and analytical readiness.",
            "• Scholarship Application Support: Assisting with applications for the Government of Ireland (GOI-IES) and university merit scholarships.",
            "• Stamp 2 Visa Assistance: Complete guidance on the AVATS visa portal, financial affidavit documentation, and visa appointment management.",
            "• Post-Study Career Guidance: Helping you understand the 2-year Stamp 1G post-study work visa and employment avenues in Ireland."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      q: "How long is a Master's degree in Public Health in Ireland?",
      a: "A full-time Master of Public Health (MPH) in Ireland is typically 1 calendar year (12 months) in duration. Universities also offer 2-year part-time or online options for working healthcare professionals."
    },
    {
      q: "Can Indian students with a non-medical background apply for an MPH in Ireland?",
      a: "Yes. Irish universities welcome applicants from a wide variety of undergraduate backgrounds—including biology, biomedical sciences, psychology, nursing, pharmacy, social sciences, and statistics—provided they meet the minimum 60%–65% degree threshold and IELTS criteria."
    },
    {
      q: "How much does an MPH in Ireland cost for international students?",
      a: "Tuition fees for international (non-EU) students typically range from €16,700 to €24,000 for the full one-year program (for example, University College Cork's full-time MPH tuition is approximately €16,700 for 2026–2027). Living expenses average €9,500 to €15,000 per year."
    },
    {
      q: "Can international graduates work in Ireland after completing an MPH?",
      a: "Yes. Under the Third Level Graduate Scheme, Master's graduates (NFQ Level 9) receive a 2-year post-study work visa (Stamp 1G), allowing them to work full-time in public health agencies, hospital administration, epidemiological research, NGOs, and pharmaceutical corporations."
    },
    {
      q: "Which are the best universities for Public Health in Ireland?",
      a: "Top institutions offering recognized Master of Public Health (MPH) programs in Ireland include University College Cork (School of Public Health), University of Galway, and the Royal College of Surgeons in Ireland (RCSI)."
    }
  ]
};

const uniImages = {
  "hero.webp": heroImg,
  "hero_bg.webp": heroBgImg,
  "side.webp": sideImg,
  "cta_bg.webp": ctaBgImg,
  "University_College_Cork.webp": uniImg1,
  "Galway_University.webp": uniImg2,
  "Irelands_Royal_College_of_Surgeons.webp": uniImg3,
};

const cmsPage = withCmsData(page, cmsData, uniImages);


export default function PublicHealthAbroadIreland() {
  const images = {
    hero: heroImg,
    heroBg: heroBgImg,
    side: sideImg,
    ctaBg: ctaBgImg,
    universities: [
      {
        name: "University College Cork",
        city: "Cork",
        state: "Munster",
        desc: "School of Public Health—a premier European public health research institute offering Ireland's flagship full-time MPH program with outstanding faculty expertise in cardiovascular and dietary epidemiology.",
        img: uniImg1
      },
      {
        name: "University of Galway",
        city: "Galway",
        state: "Connacht",
        desc: "College of Medicine, Nursing and Health Sciences, offering acclaimed postgraduate qualifications in public health, global health systems, and health promotion with designated WHO collaborative research centers.",
        img: uniImg2
      },
      {
        name: "Royal College of Surgeons in Ireland",
        city: "Dublin",
        state: "Leinster",
        desc: "RCSI School of Population Health delivers cutting-edge postgraduate education, healthcare leadership, and epidemiology research focusing on population healthcare improvement.",
        img: uniImg3
      }
    ]
  };

  return (
    <AbroadCoursePage
      page={cmsPage}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
      seoPath={page.slug}
      images={images}
    />
  );
}
