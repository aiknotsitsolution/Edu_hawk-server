import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Sweden/PublicHealth/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Sweden/PublicHealth/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Sweden/PublicHealth/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Sweden/PublicHealth/cta_bg.webp";
import cmsData from "../../../../data/study_abroad/sweden/public-health.json";
// University campus images
import uniImg1 from "../../../../Images/Abroad/Sweden/PublicHealth/image1.webp";
import uniImg2 from "../../../../Images/Abroad/Sweden/PublicHealth/image2.webp";
import uniImg3 from "../../../../Images/Abroad/Sweden/PublicHealth/image3.webp";


const page = {
  "name": "Public Health",
  "country": "Sweden",
  "slug": "public-health",
  "title": "Public Health in Sweden for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Public Health in Sweden: Top universities, course duration, tuition fees in SEK & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Public Health in Sweden, Public Health in Sweden for Indian Students, Best Universities in Sweden, Sweden Public Health Admission, Cost of Studying in Sweden, Edu-Hawk Worldwide",
  "introTitle": "Public Health in Sweden for Indian Students",
  "heroParas": [
    "Comprehensive guide to studying Public Health in Sweden for Indian students."
  ],
  "overview": [
    "Explore top accredited institutions, tuition costs, eligibility, and visa procedures in Sweden for Public Health in Sweden."
  ],
  "level": "MPH / Master of Public Health",
  "crumb": "Healthcare & Public Health",
  "stats": [
    {
      "val": "SEK 140K–200K",
      "label": "Tuition / Year"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    },
    {
      "val": "2 Years (120 ECTS MPH)",
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
      "title": "Why Study Public Health in Sweden?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Sweden is a good choice for students interested in public health, given its emphasis on disease prevention, health promotion, healthcare research, and social well-being. Public health programs examine the effects of social, economic, environmental and behavioral factors on the health of people and their communities.",
            "In Sweden, students studying public health can learn skills in epidemiology, health policy, biostatistics, research methods, health inequalities, and disease prevention. These skills are transferable to careers in government agencies, hospitals, research institutions, non-governmental organizations (NGOs) and international health organizations.",
            "At Swedish universities you get an interdisciplinary education that combines healthcare with social sciences, data analysis and public policy. Some master\u2019s programs are taught in English and open to international applicants who meet the academic and language requirements. For instance, the University of Gothenburg offers a two-year Master\u2019s Program in Public Health Science in English.",
            "**Public Health in Sweden for Indian Students** can offer students from India and other countries the opportunity to gain international academic experience and prepare for careers dedicated to improving population health. **Study Public Health in Sweden** with guidance from **Edu-Hawk Worldwide** to understand available programs and admission options."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Courses in Public Health in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "In Sweden there are public health courses available at different levels, and especially at the master\u2019s level there are many options in English language. Program availability, duration and admission requirements vary by university. Students exploring **Public Health Courses in Sweden** can consider the following options.",
            "Typical study options include:",
            "**Bachelor\u2019s Degree in Public Health Studies:** Equips students with knowledge of community health, health education, health promotion, epidemiology, and social determinants of health. Students should consult individual universities regarding relevant bachelor\u2019s programs and their language requirements.",
            "**Master\u2019s in Public Health:** Involves public health research, health disparities, disease prevention, health policy, and population-level health outcomes.",
            "**Master of Public Health Sciences:** Combines research methods, social science perspectives, health determinants, and evidence-based approaches to public health problems.",
            "**Master\u2019s in Global Health:** Concentrates on international health problems, health systems, infectious and non-communicable diseases and inequalities among populations.",
            "**Public Health Epidemiology:** Examines patterns of disease, statistical analysis, risk factors, and methods for evaluating public health interventions.",
            "**Health Promotion and Prevention:** Looks at strategies that foster healthier behaviors, decrease health risks and boost well-being in communities.",
            "In Sweden most master programs are two years of full-time study, equivalent to 120 ECTS credits, although there are some variations in the structure of programs. Students need to determine whether the chosen course is a professional qualification in public health, a research degree or a specialist program in global health. **Edu-Hawk Worldwide** can help students explore suitable **Public Health Courses in Sweden**."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Best Universities for Public Health in Sweden",
      "lead": "Explore leading universities and institutions in Sweden offering accredited Public Health in Sweden programmes, world-class research facilities, and international student support.",
      "unis_data": [
        {
          "name": "Karolinska Institutet",
          "location": "Stockholm, Sweden",
          "fee": "SEK 140,000 \u2013 200,000 / Year",
          "desc": "One of the world's foremost medical universities and research centers, renowned for awarding the Nobel Prize in Physiology or Medicine.",
          "image": uniImg1, "img": uniImg1
        },
        {
          "name": "University of Gothenburg",
          "location": "Gothenburg, Sweden",
          "fee": "SEK 95,000 \u2013 150,000 / Year",
          "desc": "Offers a two-year English-taught Master's Programme in Public Health Science focusing on epidemiology, health equality, and global health.",
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
          "name": "Ume\u00e5 University",
          "location": "Ume\u00e5, Sweden",
          "fee": "SEK 90,000 \u2013 145,000 / Year",
          "desc": "Internationally recognized for its Department of Epidemiology and Global Health, offering specialized Master's programmes in Public Health.",
          "image": uniImg2, "img": uniImg2
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Requirements for Studying Public Health in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Eligibility varies depending on whether you are applying for a bachelor\u2019s program, a master\u2019s program or a specialized public health course.",
            "The following are the typical requirements for applicants to a master's degree in public health. Understanding **Public Health Eligibility in Sweden** is important before starting the application process:",
            "**Bachelor\u2019s degree:** An undergraduate degree which is recognized as equivalent to a Swedish bachelor\u2019s degree. The subject background accepted is programme-specific.",
            "**Relevant academic background:** Some programs accept graduates from all disciplines, others require previous studies in public health, medicine, healthcare, social sciences or related fields.",
            "**English language proficiency:** Applicants must show English-language proficiency at a level required by the university.",
            "**Academic performance:** Universities will take into account previous academic qualifications and may take into account grades, relevant experience and motivation when selecting candidates.",
            "**Further program requirements:** Some institutions require a specific CV format, statement of intent or other supporting documents.",
            "A degree comprising at least 180 credits and English proficiency equivalent to Swedish English 6 is required for Stockholm University's program. Its selection process can include academic grades, relevant work/research experience, motivation and relevance of previous studies.",
            "Students are advised to read the eligibility criteria of each program carefully. Holding a bachelor\u2019s degree in medicine, nursing, pharmacy, biology, social sciences or any other subject does not guaranty admission. **Public Health Eligibility in Sweden** can differ between universities and programs. **Edu-Hawk Worldwide** can help students understand the academic requirements."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Public Health Admission Requirements Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "Academic documents are usually required for international students, as well as proof of language proficiency. Additional requirements apply depending on the program selected.",
            "Typical **Public Health Admission Requirements in Sweden** are:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "A recognized bachelor\u2019s degree for entry to Masters level.",
            "Academic transcripts showing courses completed and grades earned.",
            "Proof of English language proficiency by accepted qualification or test, if required.",
            "A CV including education, work experience, internships and research experience where applicable.",
            "a statement of purpose / motivation letter (if asked).",
            "University CV form or other programme-specific application forms.",
            "Evidence of relevant academic or professional experience as required by the course."
          ]
        },
        {
          "t": "p",
          "items": [
            "Some accept students from a wide variety of backgrounds; others require that you have studied public health or a comparable field previously. For example, the program from Karolinska Institutet has specific academic eligibility criteria and uses a program CV form in the selection process.",
            "Applicants should also verify that their prior education meets the general requirements for admission to masters programs in Sweden. **Edu-Hawk Worldwide** can assist students preparing documents and understanding **Public Health Admission Requirements in Sweden**."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Studying Public Health in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "The total cost of studying for a public health degree in Sweden will depend on the university, the length of the program, housing and lifestyle. International students must break down tuition and living costs separately. Understanding **Public Health Fees in Sweden** can help students prepare their study budget.",
            "**Tuition fees**",
            "Students from outside the EU/EEA and Switzerland normally pay tuition fees, unless they are eligible for an exemption. Examples of published total tuition fees for selected programs are:"
          ]
        },
        {
          "t": "table",
          "headers": [
            "University and program",
            "Total published tuition"
          ],
          "rows": [
            [
              "Karolinska Institutet \\- Public Health Sciences",
              "360 000 kr"
            ],
            [
              "University of Gothenburg, Public Health Sciences",
              "324.000 kr"
            ],
            [
              "Stockholm University \\- Public Health Sciences",
              "243 000 kr"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are figures announced for the program and are not a universal fee range. Always check the current schedule of payments and receipts with the university.",
            "**Cost of living**",
            "Students need to plan for:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Accommodation and services.",
            "Groceries and food.",
            "Public transportation.",
            "Books, study material, Internet.",
            "Personal and leisure expenses.",
            "Insurance and other applicable fees."
          ]
        },
        {
          "t": "p",
          "items": [
            "Housing and living costs can differ by city and type of housing. Accommodation availability can make a big difference to costs. You may need to budget more for Stockholm than for smaller university towns.",
            "**Other costs**",
            "Also, you may incur additional costs for the application fee, English-language testing, document translation, travel, and residence-permit fees, where applicable.",
            "Plan a budget for the entire study period and consult the current financial requirements for a residence permit in Sweden. **Public Health Fees in Sweden** should be checked with the selected university before applying. **Edu-Hawk Worldwide** can help students understand tuition and living expenses."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Swedish Public Health Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Usually, the admission process is as follows:",
            "**Select an appropriate program.** Compare public health, public health sciences, and global health courses based on your interests and career goals.",
            "**Verify eligibility:** Please review your degree prerequisites, educational background, English language proficiency and any other requirements.",
            "**Get your paperwork ready.** Collect transcripts, degree certificates, language test results and any program specific forms.",
            "**Submit online.** Most international applicants for English-taught programs apply through Universityadmissions.se. See instructions that are unique to the course you choose.",
            "**Give supporting evidence.** Please submit the required documents and application fee (if applicable) by the deadline.",
            "**Watch the selection process.** Universities select applicants on the basis of their academic qualifications and criteria of selection specific to the program.",
            "**Take the job and sort out the money.** Follow admission instructions and make plans for tuition payments, housing and travel.",
            "**Apply for a residence permit if necessary.** Students from outside the EU/EEA who need a permit, should check the current requirements of the Swedish Migration Agency.",
            "For international students, applications for autumn intake may open much earlier than the semester. Dates vary by intake and application round, consult the official admissions calendar. Students planning **Public Health in Sweden for Indian Students** should start preparing their applications early. **Edu-Hawk Worldwide** can guide students through the admission process."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Sweden Public Health Certification and Professional Recognition",
      "groups": [
        {
          "t": "p",
          "items": [
            "Public health is much broader than regulated clinical professions like medicine or physiotherapy and there is not a single professional licence that is required for every job.",
            "Requirements vary by position and responsibilities.",
            "**Public health research:** Job vacancies may require a master\u2019s degree or, for higher-level academic positions, a PhD.",
            "**Epidemiology and data analysis:** Employers may want to see training in statistics, research methods, epidemiology, and relevant data tools.",
            "**Health promotion:** Roles may require knowledge of community health, behavior change, program planning or health education.",
            "**Healthcare related positions:** Some jobs have additional requirements if they involve clinical work regulated by a profession.",
            "**International health organizations:** Application strength can be bolstered by relevant academic qualifications, practical experience, knowledge of health systems, and language skills.",
            "Students need to know the difference between a public health degree and a clinical degree. A master's degree in public health does not qualify a graduate to practise as a doctor, nurse or other licensed healthcare professional in Sweden."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Salary and Job Prospects After Public Health in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "A public health qualification can lead to work in research, government, healthcare planning, health promotion and international development. The exact career path depends on the student\u2019s specialization, experience, language proficiency and requirements of the employer.",
            "Possible career paths include:",
            "**Public Health Officer:** Supports community health initiatives, prevention programs and public health planning.",
            "**Epidemiologist:** Looks at patterns of disease and risk factors to help inform public health decisions. For specialist research roles, further study or advanced quantitative skills may be required.",
            "**Health Promotion Specialist:** Creates programs to promote healthier lifestyles and reduce preventable health risks.",
            "**Public Health Researcher:** Studies population health, health disparities, and healthcare interventions.",
            "**Health policy analyst:** Reviews health systems, public health programs and policies.",
            "**Global Health Project Coordinator:** Support health projects with NGOs, development organizations and international agencies.",
            "**Monitoring and Evaluation Officer:** Evaluates the performance and results of public health programs.",
            "**Research or Project Assistant:** Assists universities, research centers and public health organizations to gather and analyze data.",
            "**Expected salary**",
            "In Sweden, the salary of a public health professional varies depending on job title, employer, education, experience and location. Salaries can vary for research jobs, government jobs, jobs with NGOs, and specialized epidemiology jobs.",
            "Students should refer to current Swedish salary statistics and relevant job advertisements when planning their careers. There is no guaranty of work after graduation from a Swedish university, and some public-sector jobs may require Swedish-language skills."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Needed to Study Public Health in Sweden",
      "groups": [
        {
          "t": "p",
          "items": [
            "International applicants should prepare the following documents, according to the requirements of their chosen program:"
          ]
        },
        {
          "t": "ul",
          "items": [
            "Valid passport or other acceptable ID.",
            "Bachelor\u2019s degree certificate for master\u2019s level admission.",
            "Transcripts and records of courses taken.",
            "Proof of proficiency in English, if required.",
            "CV or resume, especially if the program requires one.",
            "Statement of purpose or motivation letter, if applicable.",
            "CV form or application summary sheet specific to the program.",
            "Evidence of relevant professional or research experience (if requested).",
            "Course descriptions or other academic documents, if necessary to assess eligibility.",
            "Certified translations of documents when needed.",
            "Admission decision and financial documentation for residence permit procedures if applicable."
          ]
        },
        {
          "t": "p",
          "items": [
            "Applicants must carefully follow the instructions in the official document. The requirements may differ from one university to another and your failure to provide the necessary documentation may impact the consideration of your application."
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
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "KTH Royal Institute of Technology",
      "location": "Stockholm, Sweden",
      "fee": "SEK 120,000 \u2013 160,000 / Year",
      "desc": "Sweden's leading technical university, ranked among Europe's top polytechnics for engineering, computer science, and innovation.",
      "image": uniImg1, "img": uniImg1
    },
    {
      "name": "Lund University",
      "location": "Lund, Sweden",
      "fee": "SEK 90,000 \u2013 150,000 / Year",
      "desc": "Top-100 world university offering comprehensive programs in engineering, sciences, medicine, law, and economics.",
      "image": uniImg2, "img": uniImg2
    },
    {
      "name": "Uppsala University",
      "location": "Uppsala, Sweden",
      "fee": "SEK 90,000 \u2013 145,000 / Year",
      "desc": "The oldest university in Sweden and the Nordic region, internationally acclaimed for scientific research, pharmacy, and humanities.",
      "image": uniImg3, "img": uniImg3
    },
    {
      "name": "Chalmers University of Technology",
      "location": "Gothenburg, Sweden",
      "fee": "SEK 130,000 \u2013 170,000 / Year",
      "desc": "Globally recognized for cutting-edge engineering, sustainable technology, automotive systems, and industry partnerships.",
      "image": uniImg1, "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Public Health in Sweden?",
      "a": "Yes, Indian students with qualifying credentials meeting English language proficiency (IELTS/TOEFL) and academic prerequisites can apply to recognized universities in Sweden."
    },
    {
      "q": "What is the medium of instruction for Public Health in Sweden?",
      "a": "Most master's and international bachelor's degree programmes are taught entirely in English for international students across Swedish universities."
    },
    {
      "q": "What are the typical tuition fees for Public Health in Sweden?",
      "a": "Tuition fees for international students generally range between SEK 80,000 and SEK 150,000 per year, depending on the institution and level of study."
    },
    {
      "q": "Can international students work while studying in Sweden?",
      "a": "Yes, non-EU international students holding a valid Swedish residence permit for higher education are permitted to work alongside their studies without a fixed hours limitation during term time."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function PublicHealthSweden() {
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
      seoPath="/study-abroad/sweden/public-health"
    />
  );
}
