import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Mauritius/WinterCourses/hero.webp";
import heroBgImg from "../../../../Images/Abroad/Mauritius/WinterCourses/hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Mauritius/WinterCourses/side.webp";
import ctaBgImg from "../../../../Images/Abroad/Mauritius/WinterCourses/cta_bg.webp";

// University images
import uniImg1 from "../../../../Images/Abroad/Mauritius/WinterCourses/image1.png";
import uniImg2 from "../../../../Images/Abroad/Mauritius/WinterCourses/image2.png";
import cmsData from "../../../../data/study_abroad/mauritius/winter-courses.json";

const page = {
  "name": "Winter Courses",
  "country": "Mauritius",
  "slug": "winter-courses",
  "title": "Winter Courses in Mauritius for Indian Students | Edu-Hawk Worldwide",
  "description": "Study Winter Courses in Mauritius: Top universities, course duration, tuition fees in MUR & INR, eligibility criteria, admission process & visa requirements for Indian students.",
  "keywords": "Study Winter Courses in Mauritius, Winter Courses in Mauritius for Indian Students, Best Universities in Mauritius, Mauritius Winter Courses Admission, Cost of Studying in Mauritius, Edu-Hawk Worldwide",
  "introTitle": "Winter Courses in Mauritius for Indian Students",
  "heroParas": [
    "**Winter Courses in Mauritius** can be a useful way for students and working professionals to develop practical skills, explore new subjects, and make productive use of a study break. Short courses may cover technology, business, engineering software, sustainability, communication, and other professional topics. These **winter short courses in Mauritius** provide opportunities to learn new skills without committing to a full degree programme."
  ],
  "overview": [
    "In Mauritius, winter learning opportunities are generally advertised as short courses, professional development programmes, or technical training, rather than as one standardised winter-school programme. The University of Mauritius publishes short-course opportunities throughout the year, including programmes scheduled for November and December 2026\\. Students exploring **winter courses in Mauritius for international students** can review the available programmes and confirm their eligibility with the relevant institution."
  ],
  "level": "Short-term / Winter Programmes",
  "crumb": "Winter Courses",
  "stats": [
    {
      "val": "MUR 150K-350K",
      "label": "Tuition / Year"
    },
    {
      "val": "English",
      "label": "Medium of Study"
    },
    {
      "val": "3-4 Years",
      "label": "Course Duration"
    },
    {
      "val": "Permitted",
      "label": "Part-Time Work"
    }
  ],
  "highlights": [
    {
      "icon": "FaAward",
      "title": "Bilingual & English Degrees",
      "desc": "Study in English with recognized qualifications from national institutions and global UK/Australian branch campuses."
    },
    {
      "icon": "FaGraduationCap",
      "title": "Affordable Tuition & Living",
      "desc": "High quality tertiary education with tuition fees and living costs substantially lower than Western Europe."
    },
    {
      "icon": "FaFileAlt",
      "title": "Safe & Multicultural Island",
      "desc": "Consistently ranked as the safest and most politically stable nation in Africa with close cultural ties to India."
    },
    {
      "icon": "FaCheckCircle",
      "title": "Simplified Visa Process",
      "desc": "Streamlined student visa procedures arranged directly through recognized higher education institutions."
    }
  ],
  "sections": [
    {
      "slot": "why",
      "eyebrow": "Why Mauritius",
      "title": "Why Choose Winter Courses in Mauritius?",
      "groups": [
        {
          "t": "p",
          "items": [
            "Short-term learning: Gain new knowledge without committing to a full degree.",
            "Career development: Build skills that may support your current role or future employment.",
            "Practical training: Explore technical and professional subjects through focused courses.",
            "Flexible choices: Compare programmes by schedule, duration, cost, and entry requirements.",
            "Further education planning: Try a subject before committing to a longer qualification.",
            "Course availability varies by provider. International students should confirm whether they can enrol, whether the course is suitable for their intended stay, and whether any immigration permission is required. Learners considering **winter short courses in Mauritius** should check the latest course announcements before planning their studies."
          ]
        }
      ]
    },
    {
      "slot": "courses",
      "eyebrow": "Degrees & Pathways",
      "title": "Types of Winter Courses in Mauritius",
      "groups": [
        {
          "t": "table",
          "headers": [
            "Course category",
            "Examples",
            "Suitable for"
          ],
          "rows": [
            [
              "Technology and AI",
              "Generative AI, machine learning, AI automation",
              "Students and professionals"
            ],
            [
              "Engineering and design",
              "AutoCAD, Revit, 3D modelling",
              "Engineering and design learners"
            ],
            [
              "Business and management",
              "Project management, sustainability and ESG reporting",
              "Graduates and working professionals"
            ],
            [
              "Renewable energy",
              "Photovoltaic energy systems",
              "Technical learners and professionals"
            ],
            [
              "IT and networking",
              "Cisco networking and computer-related training",
              "IT students and professionals"
            ],
            [
              "Communication",
              "Professional communication and workplace skills",
              "Job seekers and employees"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "These are subject areas to explore, not a guarantee that each course is currently open for winter registration. The available **Winter Courses in Mauritius** may vary according to the institution, course schedule and intake."
          ]
        }
      ]
    },
    {
      "slot": "universities",
      "eyebrow": "Top Institutions",
      "title": "Top Institutions Offering Winter and Short Courses in Mauritius",
      "lead": "Explore leading universities and institutions in Mauritius offering accredited Winter Courses programmes, modern campuses, and international student support.",
      "unis": [
        {
          "name": "University of Mauritius (UoM)",
          "location": "Reduit, Mauritius",
          "fee": "MUR 150,000 \u2013 350,000 / Year",
          "desc": "The flagship national university of Mauritius offering premier degree programs in health sciences, engineering, agriculture, and business.",
          "img": uniImg1
        },
        {
          "name": "Universit\u00e9 des Mascareignes (UdM)",
          "location": "Rose Hill, Mauritius",
          "fee": "MUR 180,000 \u2013 320,000 / Year",
          "desc": "Bilingual public university partnering with French universities to offer internationally accredited dual qualifications.",
          "img": uniImg2
        },
        {
          "name": "University of Technology, Mauritius (UTM)",
          "location": "La Tour Koenig, Mauritius",
          "fee": "MUR 160,000 \u2013 280,000 / Year",
          "desc": "Dynamic public institution recognized for cutting-edge programs in technology, applied management, healthcare, and sustainable development.",
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg2
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg1
        }
      ],
      "unis_data": [
        {
          "name": "University of Mauritius (UoM)",
          "location": "Reduit, Mauritius",
          "fee": "MUR 150,000 \u2013 350,000 / Year",
          "desc": "The flagship national university of Mauritius offering premier degree programs in health sciences, engineering, agriculture, and business.",
          "img": uniImg1
        },
        {
          "name": "Universit\u00e9 des Mascareignes (UdM)",
          "location": "Rose Hill, Mauritius",
          "fee": "MUR 180,000 \u2013 320,000 / Year",
          "desc": "Bilingual public university partnering with French universities to offer internationally accredited dual qualifications.",
          "img": uniImg2
        },
        {
          "name": "University of Technology, Mauritius (UTM)",
          "location": "La Tour Koenig, Mauritius",
          "fee": "MUR 160,000 \u2013 280,000 / Year",
          "desc": "Dynamic public institution recognized for cutting-edge programs in technology, applied management, healthcare, and sustainable development.",
          "img": uniImg1
        },
        {
          "name": "Middlesex University Mauritius",
          "location": "Flic en Flac, Mauritius",
          "fee": "MUR 250,000 \u2013 450,000 / Year",
          "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
          "img": uniImg2
        },
        {
          "name": "Curtin Mauritius",
          "location": "Moka, Mauritius",
          "fee": "MUR 280,000 \u2013 420,000 / Year",
          "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
          "img": uniImg1
        }
      ],
      "note": [
        "Students should verify the exact eligibility criteria, intake periods, program accreditation, and residence permit requirements before submitting their applications."
      ]
    },
    {
      "slot": "eligibility",
      "eyebrow": "Eligibility Criteria",
      "title": "Eligibility Criteria",
      "groups": [
        {
          "t": "p",
          "items": [
            "Requirements vary according to the provider and course. Understanding **winter course eligibility in Mauritius** can help applicants identify suitable programmes before applying.",
            "**For introductory courses**",
            "Basic educational qualifications, if specified.",
            "Minimum age requirements, where applicable.",
            "No previous experience for courses designed for beginners.",
            "**For professional or technical courses**",
            "Relevant academic qualifications or work experience may be required.",
            "Previous knowledge of software or technical subjects may be necessary.",
            "Applicants may need to complete an assessment or provide a CV.",
            "For example, the University of Mauritius's short courses have their own entry requirements, schedules, and application deadlines. Applicants should read the relevant course announcement before registering.",
            "Applicants should confirm **winter course eligibility in Mauritius** directly with the selected institution, as requirements may differ between introductory and professional programmes. International applicants interested in **winter courses in Mauritius for international students** should also check whether overseas enrolment is permitted."
          ]
        }
      ]
    },
    {
      "slot": "requirements",
      "eyebrow": "Admission Requirements",
      "title": "Admission Requirements",
      "groups": [
        {
          "t": "p",
          "items": [
            "Before applying, check:",
            "Course title and subject area.",
            "Eligibility and minimum qualifications.",
            "Start dates, class schedule, and duration.",
            "Tuition and registration fees.",
            "Whether the course is online, in person, or blended.",
            "Whether a certificate is awarded.",
            "Application deadlines and available places.",
            "Whether international applicants are accepted.",
            "International students should also confirm whether their planned course and length of stay require any specific immigration permission.",
            "For **winter course admission in Mauritius**, applicants should follow the official registration instructions and submit the documents requested by their chosen provider. Checking the admission process early can help avoid missing application deadlines."
          ]
        }
      ]
    },
    {
      "slot": "fees",
      "eyebrow": "Tuition & Living Costs",
      "title": "Cost of Winter Courses in Mauritius",
      "groups": [
        {
          "t": "p",
          "items": [
            "Course fees depend on the institution, subject, duration, and applicant category. The **winter course fees in Mauritius** may therefore differ between university programmes and technical training courses."
          ]
        },
        {
          "t": "table",
          "headers": [
            "Expense",
            "Estimated cost in MUR",
            "Approximate cost in INR"
          ],
          "rows": [
            [
              "University or professional short course",
              "Varies by programme",
              "Varies"
            ],
            [
              "Technical training",
              "Varies; some courses may be free",
              "Varies"
            ],
            [
              "Accommodation, if travelling to Mauritius",
              "Depends on housing choice",
              "Additional"
            ],
            [
              "Food and local transport",
              "Depends on lifestyle",
              "Additional"
            ]
          ]
        },
        {
          "t": "p",
          "items": [
            "The University of Mauritius publishes individual course announcements rather than one standard fee for all short courses. For example, its Sustainability and ESG Reporting course is listed for November and December 2026, while its Photovoltaic Energy Systems course has separate application and registration deadlines. Consult the relevant course page for fees and conditions.",
            "Do not assume that all winter courses are free. Confirm the total cost before enrolling and budget separately for travel, accommodation, meals, and insurance if studying from overseas. Students should verify the latest **winter course fees in Mauritius** with the institution before completing registration."
          ]
        }
      ]
    },
    {
      "slot": "timeline",
      "eyebrow": "Admission Procedure",
      "title": "Admission Process",
      "groups": [
        {
          "t": "p",
          "items": [
            "Select a course: Choose a subject that matches your career plans or personal interests.",
            "Compare providers: Review the University of Mauritius, ITET, and other training institutions.",
            "Check the schedule: Confirm the dates, duration, application deadline, and availability of places.",
            "Verify eligibility: Review any academic, age, or professional requirements.",
            "Submit the application: Use the provider\u2019s official registration process and supply the requested documents.",
            "Prepare for attendance: Arrange transport and accommodation if needed, and confirm whether course materials are provided.",
            "Students applying for **winter course admission in Mauritius** should check the official application procedure, registration dates and payment conditions. International learners should confirm any additional requirements before making travel arrangements."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Further Studies & Scope",
      "title": "Further Study Options",
      "groups": [
        {
          "t": "p",
          "items": [
            "After completing a winter course, learners may consider:",
            "Advanced training in the same subject.",
            "Professional certificates and micro-credentials.",
            "Undergraduate study in technology, engineering, business, or related fields.",
            "Postgraduate professional development programmes.",
            "Specialist training in renewable energy, AI, or project management.",
            "Further technical training in networking, CAD, or 3D modelling.",
            "A short course may help you explore a subject or develop a specific skill, but it should not be treated as equivalent to a degree or professional licence unless the provider explicitly confirms its status.",
            "Learners completing **Winter Courses in Mauritius** may continue with advanced training or professional development programmes based on their interests and career plans."
          ]
        }
      ]
    },
    {
      "slot": "careers",
      "eyebrow": "Career Opportunities",
      "title": "Career Opportunities",
      "groups": [
        {
          "t": "p",
          "items": [
            "The career benefits depend on the course completed, previous qualifications, and practical experience. Relevant subject areas may support opportunities such as:",
            "IT Support Assistant",
            "Junior Cybersecurity Trainee",
            "CAD Technician",
            "Project Coordination Assistant",
            "Sustainability Reporting Assistant",
            "Renewable Energy Technician Trainee",
            "Graphic Design Assistant",
            "Business Operations Assistant",
            "Technical Support Executive",
            "Administrative or Communication Executive",
            "A short course can strengthen a CV, but employment outcomes are not guaranteed. Some technical and regulated occupations require additional qualifications or supervised experience."
          ]
        }
      ]
    },
    {
      "slot": "documents",
      "eyebrow": "Required Documentation",
      "title": "Documents Required",
      "groups": [
        {
          "t": "p",
          "items": [
            "Depending on the institution, applicants may need:",
            "Valid passport or national identity card.",
            "Completed application form.",
            "Academic certificates and transcripts, if required.",
            "CV or r\u00e9sum\u00e9 for professional courses.",
            "Proof of previous experience, where applicable.",
            "Recent photograph, if requested.",
            "Proof of payment, if the course has a fee.",
            "English-language proficiency evidence, if required.",
            "Additional documents specified by the provider.",
            "Relevant immigration documents for international learners, where applicable.",
            "Always use the official course application checklist because requirements can differ between providers. Applicants completing **winter course admission in Mauritius** should prepare the documents specified by their selected institution."
          ]
        }
      ]
    }
  ],
  "universities": [
    {
      "name": "University of Mauritius (UoM)",
      "location": "Reduit, Mauritius",
      "fee": "MUR 150,000 \u2013 350,000 / Year",
      "desc": "The flagship national university of Mauritius offering premier degree programs in health sciences, engineering, agriculture, and business.",
      "img": uniImg1
    },
    {
      "name": "Universit\u00e9 des Mascareignes (UdM)",
      "location": "Rose Hill, Mauritius",
      "fee": "MUR 180,000 \u2013 320,000 / Year",
      "desc": "Bilingual public university partnering with French universities to offer internationally accredited dual qualifications.",
      "img": uniImg2
    },
    {
      "name": "University of Technology, Mauritius (UTM)",
      "location": "La Tour Koenig, Mauritius",
      "fee": "MUR 160,000 \u2013 280,000 / Year",
      "desc": "Dynamic public institution recognized for cutting-edge programs in technology, applied management, healthcare, and sustainable development.",
      "img": uniImg1
    },
    {
      "name": "Middlesex University Mauritius",
      "location": "Flic en Flac, Mauritius",
      "fee": "MUR 250,000 \u2013 450,000 / Year",
      "desc": "Accredited British branch campus delivering internationally recognized undergraduate and postgraduate degrees in coastal Mauritius.",
      "img": uniImg2
    },
    {
      "name": "Curtin Mauritius",
      "location": "Moka, Mauritius",
      "fee": "MUR 280,000 \u2013 420,000 / Year",
      "desc": "Premier Australian branch university known for high academic standards in commerce, design, health, and humanities.",
      "img": uniImg1
    }
  ],
  "faqs": [
    {
      "q": "Can Indian students apply for Winter Courses in Mauritius?",
      "a": "Yes, Indian students meeting the academic criteria and English proficiency requirements can apply to recognized Mauritian institutions."
    },
    {
      "q": "What is the medium of instruction for Winter Courses in Mauritius?",
      "a": "Programmes at major Mauritian universities are delivered in English, with bilingual options available at select institutions."
    },
    {
      "q": "What are the typical tuition fees for Winter Courses in Mauritius?",
      "a": "Tuition fees generally range between MUR 150,000 and MUR 350,000 per year, offering cost-effective international degree options."
    },
    {
      "q": "Is a student visa required for Indian students?",
      "a": "Yes, international students require an entry permit and student visa issued by the Passport and Immigration Office of Mauritius upon receiving admission."
    }
  ],
  "faqTitle": "Frequently Asked Questions"
};

export default function WinterCoursesMauritius() {
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
      seoPath="/study-abroad/mauritius/winter-courses"
    />
  );
}
