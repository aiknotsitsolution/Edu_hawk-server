import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/Biotechnology/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/Biotechnology/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/Biotechnology/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/Biotechnology/cta_bg.webp";

// University images
import karolinskaImg from "../../../../Images/Abroad/Sweden/Biotechnology/karolinska.webp";
import kthImg from "../../../../Images/Abroad/Sweden/Biotechnology/kth.webp";
import lundImg from "../../../../Images/Abroad/Sweden/Biotechnology/lund.webp";
import uppsalaImg from "../../../../Images/Abroad/Sweden/Biotechnology/uppsala.webp";
import chalmersImg from "../../../../Images/Abroad/Sweden/Biotechnology/chalmers.webp";

import cmsData from "../../../../data/study_abroad/sweden/biotechnology.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/Biotechnology/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/Biotechnology/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/Biotechnology/image3.webp";


const page = {
  "name": "Biotechnology",
  "country": "Sweden",
  "slug": "biotechnology",
  "title": "Biotechnology in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Biotechnology in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Biotechnology in Sweden, Biotechnology in Sweden for Indian Students, Best Universities in Sweden, Sweden Biotechnology Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Biotechnology in Sweden for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Biotechnology in Sweden for Indian students."
  ],
  "overview": [
    "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for Biotechnology in Sweden."
  ],
  "level": "Bachelor & Master of Biotechnology",
  "crumb": "Science & Biotechnology",
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
      "title": "Why Study in Sweden for Biotech?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden is a great destination for students interested in biotechnology, life sciences, genetic engineering and biomedical research. The country has a strong research environment, modern laboratories and close collaboration between universities, health care institutions and biotechnology companies.",
            "In Sweden, students studying biotechnology can study molecular biology, microbiology, genetics, bioinformatics, pharmaceutical development and industrial biotechnology. Many universities offer research-based programs that combine theory with laboratory work and practical projects.",
            "Sweden also has a strong life-sciences sector, where you can find opportunities to explore careers in pharmaceutical research, diagnostics, medical technology, food science and environmental biotechnology.",
            "The major benefits for international students are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Facilities for modern scientific research.",
            "Research opportunities and participation in lab projects.",
            "A broad spectrum of life-science specializations.",
            "International cooperation in research and learning environments.",
            "Opportunities for doctoral studies and careers in biotechnology."
          ]
        },
        {
          "t": "p",
          "items": [
            "Sweden is also an attractive option for international applicants as many Master\u2019s programs are taught in English. But students must check the language, admission criteria, tuition fees and career opportunities of each program before applying. **Biotechnology in Sweden for Indian Students** can be an opportunity to gain international academic experience and explore research-based education. **Edu-Hawk Worldwide** can help students understand their study options."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Biotechnology Courses in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Swedish universities have education in biotechnology on bachelor, masters and doctoral level. The programs available and the degree names vary from one institution to another. Students exploring **Biotechnology Courses in Sweden** can consider the following study options.",
            "**Bachelor of Biotechnology**",
            "At the bachelor level, students learn biology, chemistry, mathematics, genetics, microbiology and laboratory methods. Students develop scientific problem solving skills and an understanding of how biological systems can be applied to medicine, agriculture, industry and environmental applications.",
            "**Master\u2019s in Bio-Technology**",
            "The Master\u2019s programs provide students the opportunity to specialize in advanced biotechnology and related fields. Depending on the university, options may be molecular biotechnology, industrial biotechnology, medical biotechnology and bioinformatics.",
            "**Biotechnology in Medicine**",
            "This is the use of biology in medicine. Topics may include the mechanisms of disease, molecular diagnosis, drug discovery, cell processes and the development of novel therapeutic approaches.",
            "**Industrial Biotechnology**",
            "Industrial biotechnology is the study of how microorganisms, enzymes and biological processes can be used to produce products more efficiently. Applications include bio-based chemicals, sustainable materials, food production and renewable energy.",
            "**Molecular Biology and Gene Engineering**",
            "These fields study genes and proteins, cells and biological mechanisms. Students learn techniques used in genetic analysis, molecular research, biotechnology development, and biomedical laboratories.",
            "**Computational Biology and Bioinformatics**",
            "These fields use biology, statistics, and computing to study biological data. Students can explore genomic data, computational modeling, biological databases and data-driven research.",
            "**PhD Biotech**",
            "Students interested in academic research or advanced scientific development may consider doctoral studies, subject to the requirements of the respective university. PhD places are usually attached to particular projects and supervisors.",
            "Students interested in **Study Biotechnology in Sweden** can compare these specializations according to their academic background and career goals. **Edu-Hawk Worldwide** can help students explore suitable **Biotechnology Courses in Sweden**."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Biotechnology in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Biotechnology in Sweden programmes, world-class research facilities, and international student support.",
      "unis": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "image": karolinskaImg,
          "img": karolinskaImg
        },
        {
          "name": "KTH Royal Institute of Technology",
          "location": "Stockholm, Sweden",
          "fee": "SEK 120,000 \u2013 160,000 / Year",
          "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
          "image": kthImg,
          "img": kthImg
        },
        {
          "name": "Lund University",
          "location": "Lund, Sweden",
          "fee": "SEK 90,000 \u2013 150,000 / Year",
          "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
          "image": lundImg,
          "img": lundImg
        },
        {
          "name": "Uppsala University",
          "location": "Uppsala, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
          "image": uppsalaImg,
          "img": uppsalaImg
        },
        {
          "name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 130,000 \u2013 170,000 / Year",
          "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
          "image": chalmersImg,
          "img": chalmersImg
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Study Biotechnology in Sweden Entry Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Who is eligible? Students who have graduated from an eligible university. In general students must satisfy the following requirements. Understanding **Biotechnology Eligibility in Sweden** is important before applying.",
            "**For Undergraduate Programs**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Completion of secondary education corresponding to Swedish upper-secondary qualifications.",
            "The necessary academic preparation in subjects such as mathematics, chemistry and biology depending on the program.",
            "English language proficiency where required by the program.",
            "Other university subject-specific requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "**For Master\u2019s Programs**"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor\u2019s degree in biotechnology, biology, biochemistry, molecular biology, bioengineering, chemical engineering or other related field.",
            "Sufficient credits in subjects such as Biology, Chemistry, Maths or related sciences.",
            "English language skills, normally proven by accepted qualifications or recognized exemptions.",
            "Satisfactory academic record and completion of any programme-specific requirements."
          ]
        },
        {
          "t": "p",
          "items": [
            "For example, biotechnology masters programs may require a relevant science or engineering background. Instead, applicants should check the specific prerequisites rather than assuming any bachelor's degree will be sufficient.",
            "**PhD programs**",
            "Candidates generally require a relevant master's degree or equivalent, a suitable research background, and the capacity to meet the requirements of specific doctoral positions. Some positions require a research proposal or experience in the laboratory.",
            "**Biotechnology Eligibility in Sweden** varies according to the degree level and university. **Edu-Hawk Worldwide** can help students understand the academic and subject requirements for **Biotechnology in Sweden for Indian Students**."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Biotechnology Admission Requirements in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "When universities consider your application, they look at your academic qualifications, subject knowledge and language proficiency. The requirements can vary from one biotechnology specialization to another.",
            "Typical **Biotechnology Admission Requirements in Sweden** are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Academic transcripts and certificates.",
            "A recognized bachelor's degree for entry to postgraduate study.",
            "Relevant courses in biology, chemistry, biotechnology or engineering.",
            "Proof of English language proficiency where required.",
            "A CV or statement of purpose (if applicable).",
            "Letters of recommendation where applicable.",
            "For some PhD positions, a research proposal or proof of research experience."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some courses may require a specific number of credits in math, chemistry, biology or other technical subjects. Students must read the official program page carefully and check their previous coursework satisfies these conditions.",
            "The application period for several master's programs in biotechnology at KTH opens on 16 October 2026 and the deadline for the 2027 intake is 15 January 2027. There are other deadlines for documents and fees, so applicants should check the details for the course they wish to study. **Edu-Hawk Worldwide** can assist students in understanding the application process and **Biotechnology Admission Requirements in Sweden**."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Biotechnology Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The total cost of studying biotechnology in Sweden will vary depending on the university, the program, accommodation and your own lifestyle. Students planning **Biotechnology in Sweden for Indian Students** should understand the expected **Biotechnology Fees in Sweden** before applying.",
            "**Tuition Fee**",
            "Students from outside the EU/EEA and Switzerland normally have to pay tuition fees, unless they qualify for an exemption. The precise amount will vary depending on the university and the course.",
            "For a rough estimate to help with initial planning, many science and engineering master\u2019s programs might be budgeted around SEK 100,000\u2013200,000 per academic year for international students. This is only a ballpark figure and is not a guaranteed fee for all biotech programs. Check the official program fee always.",
            "**Cost of Living**",
            "Students should also budget for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Accommodation and services.",
            "Groceries and food.",
            "Public transportation.",
            "Books, laboratory-related study materials, and other academic expenses.",
            "Telephone, Internet and Personal expenses.",
            "Insurance and any other applicable costs."
          ]
        },
        {
          "t": "p",
          "items": [
            "Depending on the city and housing arrangement, a general planning range can be around 9,000\u201313,000 SEK per month. Costs could be higher or lower.",
            "**Additional Costs**",
            "Other possible costs include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Application fees where applicable.",
            "Tests in English language.",
            "Travel and arrival expenses in Sweden.",
            "Fees for residence permits, where applicable.",
            "Translation and certification of documents.",
            "Initial deposits for security."
          ]
        },
        {
          "t": "p",
          "items": [
            "Students should calculate tuition and living costs for the whole duration of the program. Please check the current financial requirement for a residence permit for Sweden. **Biotechnology Fees in Sweden** should be checked with the selected university before making financial plans. **Edu-Hawk Worldwide** can help students understand the cost of studying abroad."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Sweden Admission Procedure for Biotechnology",
      "groups": [
        {
          "t": "p",
          "items": [
            "Students can take the following steps to prepare their applications:",
            "**Select a specialization.** Are you interested in medical biotechnology, molecular biotechnology, industrial biotechnology, bioinformatics or another related field?",
            "**Shortlist Universities** Compare course modules, laboratory facilities, research projects, duration of program and language of instruction.",
            "**Verify eligibility.** Check the academic requirements, the subject requirements and the English language requirements.",
            "**Prepare the paperwork.** Collect academic certificates, transcripts, identification, language-test results and other required items.",
            "**Apply via the official portal.** Apply through the designated university admissions platform (UniversityAdmissions.se). Rank your preferred programmes in order of preference in accordance with the instructions.",
            "**Submit documents and pay the required fee.** Please respect the deadlines and documentation guidelines of your application round.",
            "**See the admission decision.** If your application is successful you will need to accept your place and enroll according to the procedures of the university.",
            "**Sort out finances and immigration procedures.** Check deadlines for tuition payment, accommodation options and residence permit requirements where applicable.",
            "Students interested in PhD study should also look at advertized research positions and contact relevant research groups as appropriate. The admission procedure for doctoral programs may differ from the admission procedure for regular bachelor\u2019s and master\u2019s programs.",
            "Students planning to **Study Biotechnology in Sweden** should follow the official university application instructions and deadlines. **Edu-Hawk Worldwide** can help Indian applicants prepare for the admission process."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Biotechnology Certification and Postgraduate Studies in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Unlike other professions such as medicine or physiotherapy, there is no universal professional licence for biotechnology careers. Requirements vary by job, research area and employer.",
            "**Education Qualification**",
            "Some employers may require a bachelor\u2019s degree for entry-level laboratory or technical positions. A master\u2019s degree can be useful for specialized research, product development, bioinformatics and biotechnology engineering positions.",
            "**Research and Laboratory Skills**",
            "Students may improve their profiles by gaining practical experience in:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Molecular biology and genetics.",
            "Microbiology and cell culture.",
            "Laboratory Quality Control and Record Keeping.",
            "Scientific data analysis and biostatistics.",
            "Computational tools and bioinformatics.",
            "Research methodology and experimental design."
          ]
        },
        {
          "t": "p",
          "items": [
            "The exact techniques required depend on the specialization chosen.",
            "**Knowledge of Quality and Regulatory**",
            "Students with an interest in pharmaceutical or medical biotechnology may find it useful to learn about Good Laboratory Practice (GLP), Good Manufacturing Practice (GMP), quality assurance and regulatory standards. They are important for some roles in industry but are not universal requirements for all biotechnology graduates.",
            "**Further study at university**",
            "Graduates wishing to pursue a career in research may consider a PhD in biotechnology, molecular biology, biomedical sciences, bioinformatics or a related discipline. Admission is typically based on relevant academic qualifications and the specific research position."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Biotechnology Graduates Salary and Jobs in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Biotechnology graduates can work in research, pharmaceutical development, medical diagnostics, industrial production and environmental applications. Job opportunities are based on qualifications, technical skills, Swedish language skills where relevant and employer requirements.",
            "**Potential Career Paths**",
            "**Biotechnology Research Scientist:** Performs experiments and assists in the creation of biological products and technologies.",
            "**Research Associate:** Supports research teams in experiments, data collection and recording of scientific results.",
            "**Laboratory Analyst** Conducts laboratory testing, measurements and analysis of samples.",
            "**Quality control analyst:** Checks materials and products for conformance to established standards.",
            "**Bioprocess Engineer:** Specializes in biological production processes, process optimization and manufacturing.",
            "**Bioinformatics Analyst:** Uses computational and statistical methods to analyze biological data.",
            "**Pharmaceutical Research Professional:** Assists in the discovery, development, testing or production of pharmaceuticals.",
            "**Environmental Biotech Specialist:** Applies biological techniques to conserve the environment, treat waste, or reclaim resources.",
            "**Clinical Research Professional:** Provides support to research studies and clinical development activities, depending on the qualifications of the position.",
            "**What to Expect in Terms of Salary**",
            "Biotechnology salaries in Sweden range widely depending on the position, education, experience, location and industry. Laboratory employees at the entry level may earn less than research scientists, experienced specialists and professionals in technical or managerial positions.",
            "Students should take a look at current Swedish job ads and salary statistics for the specific job title they want to pursue, to get realistic salary expectations. A degree from a Swedish university does not guarantee a certain salary or employment outcome."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Required Documents to Study Biotechnology in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants should prepare their documents following the official university admissions checklist.",
            "Documents usually required include:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or acceptable identification.",
            "High school certificate and transcripts for undergrad applications.",
            "Master\u2019s applications require bachelor\u2019s degree certificate and transcripts.",
            "Where applicable, proof of proficiency in English language.",
            "Course descriptions or syllabi if asked to evaluate subject pre-requisites.",
            "CV or r\u00e9sum\u00e9 where relevant.",
            "Letter of motivation or purpose statement (if required).",
            "Letters of recommendation, if any are requested.",
            "Research proposal or research statement for some doctoral positions.",
            "Certified translations of documents when required.",
            "Proof of application fee payment, if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Upon admission, students who require a residence permit may also be required to provide documentation regarding tuition payment, financial support and other immigration requirements.",
            "Always use the current checklist from the university. Missing documents or late submissions can affect your application."
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
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "KTH Royal Institute of Technology",
      "location": "Stockholm, Sweden",
      "fee": "SEK 120,000 \u2013 160,000 / Year",
      "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "Lund University",
      "location": "Lund, Sweden",
      "fee": "SEK 90,000 \u2013 150,000 / Year",
      "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "Uppsala University",
      "location": "Uppsala, Sweden",
      "fee": "SEK 90,000 \u2013 145,000 / Year",
      "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "Chalmers University of Technology",
      "location": "Gothenburg, Sweden",
      "fee": "SEK 130,000 \u2013 170,000 / Year",
      "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
      "image": uniImg2, "img": uniImg2
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Biotechnology in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Biotechnology in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Biotechnology in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function BiotechnologySweden() {
  const uniImages = {
    "Karolinska Institutet": karolinskaImg,
    "KTH Royal Institute of Technology": kthImg,
    "Lund University": lundImg,
    "Uppsala University": uppsalaImg,
    "Chalmers University of Technology": chalmersImg,
  };

  const dynamicPage = {
    ...page,
    name: page.name,
    introTitle: cmsData.hero?.title || page.introTitle,
    heroParas: cmsData.hero?.subtitle ? [cmsData.hero.subtitle] : page.heroParas,
    overview: cmsData.overview
      ? (Array.isArray(cmsData.overview) ? cmsData.overview : [cmsData.overview])
      : page.overview,
    stats: (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
      .filter(s => s.label && s.value).length > 0
      ? (cmsData.stats || []).map(s => ({ label: s.l || s.label, value: s.n || s.value || s.val, val: s.n || s.value || s.val }))
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
      uniImages={uniImages}
      seoPath="/study-abroad/sweden/biotechnology"
    />
  );
}
