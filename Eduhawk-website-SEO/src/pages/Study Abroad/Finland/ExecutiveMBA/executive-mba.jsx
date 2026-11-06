import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";
import heroImg from "../../../../Images/Abroad/Finland/ExecutiveMBA/emba_finland_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Finland/ExecutiveMBA/emba_finland_hero_bg.webp";
import sideImg from "../../../../Images/Abroad/Finland/ExecutiveMBA/emba_finland_leadership.webp";
import ctaBgImg from "../../../../Images/Abroad/Finland/ExecutiveMBA/emba_finland_cta_bg.webp";
import u0Img from "../../../../Images/Abroad/Finland/ExecutiveMBA/Aalto_University_Aalto_Executive_MBA.webp";
import u1Img from "../../../../Images/Abroad/Finland/ExecutiveMBA/Hanken_SSE_Executive_Education_Hanken_Executive_MBA.webp";
import u2Img from "../../../../Images/Abroad/Finland/ExecutiveMBA/Turku_School_of_Economics_Executive_Education_TSE_EXE_Executive_MBA.webp";

const page = {
  name: "Executive MBA",
  country: "Finland",
  slug: "executive-mba",
  title: "Executive MBA in Finland for International Students | Edu-Hawk Worldwide",
  description: "Executive MBA in Finland for international students: Top executive business schools (Aalto EE, Hanken & SSE, Turku TSE EXE), programme fees, modular formats, eligibility, and leadership career pathways.",
  keywords: "Executive MBA in Finland, Executive MBA in Finland for international students, EMBA in Finland fees, Executive MBA universities in Finland, Study Executive MBA in Finland, Executive MBA eligibility in Finland",
  introTitle: "Executive MBA in Finland for International Students",
  heroParas: [
    "An **[Executive MBA in Finland](/study-abroad/finland/executive-mba)** for international students is designed for experienced professionals, managers, entrepreneurs and business leaders who want to strengthen their leadership abilities and advance their careers. Finnish executive education programmes focus on strategic management, organisational development, financial decision-making, innovation and leadership in international business environments."
  ],
  overview: [
    "Finland offers executive education options through institutions such as Aalto University, Hanken & SSE Executive Education and Turku School of Economics Executive Education. These programmes are generally designed to be completed alongside professional responsibilities, allowing participants to apply their learning to real business challenges.",
    "With guidance from **[Edu-Hawk Worldwide](/services)**, professionals can compare executive education options, understand programme requirements, estimate fees in euros and Indian rupees, and prepare the documents needed to apply.",
    "**Important distinction:** An Executive MBA (EMBA) is often a professional executive education qualification rather than a conventional academic master's degree. Applicants should check the exact qualification awarded, recognition, admission requirements and study format before enrolling."
  ],
  level: "Executive Postgraduate",
  crumb: "Business",

  stats: [
    { label: "Degree Awarded", value: "Executive MBA / Executive Qualification" },
    { label: "Course Duration", value: "Around 2 Years (Part-Time / Modular)" },
    { label: "Top Institutions", value: "Aalto EE, Hanken & SSE, TSE EXE" },
    { label: "Programme Fees", value: "€44,800 – €52,000 + VAT (~₹48.65L – ₹56.47L)" }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Finland",
      title: "Why Study an Executive MBA in Finland?",
      groups: [
        {
          t: "p",
          items: [
            "Finland can be an attractive destination for professionals seeking advanced management education, international exposure and opportunities to expand their professional networks.",
            "Key benefits of pursuing an Executive MBA in Finland include:"
          ]
        },
        {
          t: "dl",
          pairs: [
            {
              t: "Advanced leadership development",
              d: "Strengthen your ability to manage teams, lead organisational change and make strategic decisions."
            },
            {
              t: "International business perspective",
              d: "Explore global business challenges, international markets and cross-cultural management."
            },
            {
              t: "Practical learning",
              d: "Apply management frameworks through business projects, case studies and workplace challenges."
            },
            {
              t: "Professional networking",
              d: "Connect with experienced managers, entrepreneurs, business owners and professionals from different industries."
            },
            {
              t: "Strategic thinking",
              d: "Develop skills in business planning, innovation, financial decision-making and organisational growth."
            },
            {
              t: "Career development",
              d: "Prepare for greater responsibilities in senior management, business leadership or entrepreneurship."
            },
            {
              t: "Flexible learning",
              d: "Many executive programmes use part-time schedules or modular teaching formats that allow professionals to continue working."
            }
          ]
        },
        {
          t: "p",
          items: [
            "The suitability of an EMBA depends on the applicant’s career stage and goals. It is generally more appropriate for people with substantial professional experience than for recent graduates seeking their first postgraduate qualification."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Curriculum & Format",
      title: "Executive MBA Courses in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Executive MBA programmes generally cover several areas of business leadership. The exact curriculum, module structure and credit allocation vary between institutions."
          ]
        },
        {
          t: "table",
          headers: ["Specialisation", "What You Learn"],
          rows: [
            ["Strategic Management", "Business strategy, competitive positioning and long-term planning"],
            ["Leadership and People Management", "Team development, communication and organisational leadership"],
            ["Financial Management", "Financial analysis, budgeting and business performance"],
            ["Marketing Strategy", "Market positioning, customer value and strategic marketing"],
            ["Entrepreneurship and Innovation", "Business model development, innovation and growth"],
            ["Digital Transformation", "Technology-led business change and digital strategy"],
            ["Change Management", "Organisational transformation and implementation"],
            ["International Business", "Global markets, cross-cultural leadership and international strategy"],
            ["Corporate Sustainability", "Responsible business practices and sustainable growth"],
            ["Business Analytics", "Using business information to support strategic decisions"]
          ]
        },
        {
          t: "h4",
          text: "Executive MBA duration and study format"
        },
        {
          t: "p",
          items: [
            "A typical Finnish EMBA programme may have the following characteristics:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Duration:** Commonly around two years, although some programmes take longer.",
            "**Study format:** Part-time, modular or executive-format learning.",
            "**Teaching language:** English or Finnish, depending on the programme.",
            "**Target audience:** Experienced managers, executives, entrepreneurs and business professionals.",
            "**Learning methods:** Case studies, management projects, workshops, group discussions and applied assignments.",
            "**Study location:** Often delivered through on-campus modules, with some programmes including international study visits."
          ]
        },
        {
          t: "p",
          items: [
            "Applicants should check whether attendance is required in Finland for the full programme or only for scheduled modules."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Institutions",
      title: "Top Universities and Institutions for Executive MBA in Finland",
      groups: [
        {
          t: "h3",
          text: "1. Aalto University – Aalto Executive MBA"
        },
        {
          t: "img",
          src: u0Img,
          alt: "Aalto University – Aalto Executive MBA",
          link: "https://www.aaltoee.fi/en/programs/aalto-executive-mba"
        },
        {
          t: "p",
          items: [
            "Aalto University’s Executive MBA is offered through Aalto University Executive Education and Professional Development (Aalto EE). It is designed for experienced managers who want to improve their leadership capabilities, strategic thinking and ability to lead organisational change.",
            "The programme covers general management, leadership, business strategy, innovation and organisational development. Participants can also explore opportunities to undertake studies at international universities."
          ]
        },
        {
          t: "ul",
          items: [
            "**Programme:** Aalto Executive MBA",
            "**Duration:** Two years",
            "**Credits:** 90 ECTS",
            "**Language:** English",
            "**Study format:** On-campus executive education",
            "**Published programme fee:** €52,000 plus applicable VAT",
            "**Approximate fee in INR:** ₹56.47 lakh before VAT",
            "**Published programme schedule:** October 2026 to November 2028"
          ]
        },
        {
          t: "p",
          items: [
            "The published application deadline for the October 2026 intake was in August 2026, so that intake’s stated deadline has passed. Applicants should contact Aalto EE to confirm the next available intake and application timeline."
          ]
        },
        {
          t: "h3",
          text: "2. Hanken & SSE Executive Education – Hanken Executive MBA"
        },
        {
          t: "img",
          src: u1Img,
          alt: "Hanken & SSE Executive Education – Hanken Executive MBA",
          link: "https://www.hankensse.fi/programs/executive-mba"
        },
        {
          t: "p",
          items: [
            "Hanken & SSE Executive Education offers the Hanken Executive MBA, a part-time programme focused on strategic decision-making, leadership and responding to complex business challenges.",
            "The programme is delivered in English and is structured for professionals who want to strengthen their management capabilities while continuing their careers. It carries 90 ECTS and has the international AMBA, AACSB and EQUIS accreditations."
          ]
        },
        {
          t: "ul",
          items: [
            "**Programme:** Hanken Executive MBA",
            "**Duration:** Approximately two years",
            "**Credits:** 90 ECTS",
            "**Language:** English",
            "**Study format:** Part-time executive programme",
            "**Location:** Helsinki",
            "**Published programme fee:** €46,000 plus applicable VAT",
            "**Approximate fee in INR:** ₹49.96 lakh before VAT"
          ]
        },
        {
          t: "p",
          items: [
            "The published start date for the October 2026 intake is 22 October 2026, with a stated registration deadline of 15 September 2026. Since that deadline has passed, international applicants should contact the admissions team to check whether late applications or a subsequent intake are available.",
            "**Qualification note:** Hanken describes this EMBA as an executive education qualification, not an academic master's degree."
          ]
        },
        {
          t: "h3",
          text: "3. Turku School of Economics Executive Education – TSE EXE Executive MBA"
        },
        {
          t: "img",
          src: u2Img,
          alt: "Turku School of Economics Executive Education – TSE EXE Executive MBA",
          link: "https://www.utu.fi/en/university/turku-school-of-economics/executive-education"
        },
        {
          t: "p",
          items: [
            "Turku School of Economics Executive Education offers the TSE EXE Executive MBA for executives, managers, specialists and entrepreneurs who want to develop their leadership and organisational management skills.",
            "The programme includes leadership development, strategic management, business analysis and a range of elective modules. It is designed for professionals who want to apply advanced management concepts to their organisations."
          ]
        },
        {
          t: "ul",
          items: [
            "**Programme:** TSE EXE Executive MBA",
            "**Target audience:** Experienced executives, managers, specialists and entrepreneurs",
            "**Professional experience:** The published programme material specifies at least five years of demanding specialist or managerial experience, or equivalent leadership experience",
            "**Academic background:** A bachelor’s degree or equivalent knowledge and work experience",
            "**Published programme fee:** €44,800 plus applicable VAT",
            "**Approximate fee in INR:** ₹48.65 lakh before VAT"
          ]
        },
        {
          t: "p",
          items: [
            "The programme fee and admission requirements should be confirmed directly with the institution. Applicants should also check the current teaching language, schedule, additional travel costs and next application period before making a decision."
          ]
        },
        {
          t: "h3",
          text: "Related alternative: Aalto MBA"
        },
        {
          t: "p",
          items: [
            "Professionals who are open to a general MBA rather than an Executive MBA can also consider the Aalto MBA. It is a two-year, part-time programme for professionals interested in business leadership and management development."
          ]
        },
        {
          t: "ul",
          items: [
            "**Programme:** Aalto MBA",
            "**Duration:** Two years",
            "**Credits:** 90 ECTS",
            "**Language:** English",
            "**Published programme fee:** €37,800 plus applicable VAT",
            "**Approximate fee in INR:** ₹41.05 lakh before VAT",
            "**Published schedule:** January 2027 to December 2028",
            "**Published application deadline:** 16 November 2026"
          ]
        },
        {
          t: "p",
          items: [
            "This is a related alternative, not the same programme as the Aalto Executive MBA. The published deadline is upcoming as of October 2026, but applicants should confirm the latest availability and admission conditions before submitting an application."
          ]
        }
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Eligibility",
      title: "Eligibility to Study an Executive MBA in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Executive MBA eligibility is different from the requirements for a regular academic MBA. Institutions generally assess professional experience, leadership potential, educational background and the applicant’s career objectives.",
            "Common requirements may include:"
          ]
        },
        {
          t: "ul",
          items: [
            "A recognised bachelor’s degree or equivalent academic qualification.",
            "Several years of relevant professional experience.",
            "Experience in a managerial, specialist, entrepreneurial or leadership role.",
            "Evidence of professional responsibilities and career progression.",
            "English-language proficiency for programmes taught in English.",
            "A completed application and professional CV.",
            "References, an interview or other selection assessments, where required."
          ]
        },
        {
          t: "p",
          items: [
            "For example, the published TSE EXE EMBA material specifies a minimum of five years of demanding specialist or managerial experience, or equivalent leadership experience. Individual programme requirements differ, so applicants should not assume that the same experience threshold applies everywhere.",
            "**[Edu-Hawk Worldwide](/services)** can help professionals compare the requirements of available programmes and organise their applications according to their academic and professional backgrounds."
          ]
        }
      ]
    },
    {
      slot: "admission",
      eyebrow: "Admission Requirements",
      title: "Admission Requirements for an Executive MBA in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Applicants should review the official requirements of their selected institution before beginning the application process."
          ]
        },
        {
          t: "dl",
          pairs: [
            {
              t: "Educational background",
              d: "A recognised bachelor’s degree or an equivalent qualification, as accepted by the programme."
            },
            {
              t: "Professional experience",
              d: "Relevant work experience in management, business operations, specialist roles or entrepreneurship. The required duration depends on the institution."
            },
            {
              t: "Professional CV",
              d: "A detailed résumé outlining work history, achievements, leadership responsibilities and career progression."
            },
            {
              t: "English-language proficiency",
              d: "Evidence of professional English proficiency or a test result, if required by the institution."
            },
            {
              t: "Academic documents",
              d: "Degree certificates and transcripts, where requested."
            },
            {
              t: "Professional references",
              d: "Some programmes ask for references from managers, colleagues, clients or other professional contacts."
            },
            {
              t: "Interview or assessment",
              d: "Applicants may need to discuss their career goals, management experience and reasons for applying."
            },
            {
              t: "Statement of purpose",
              d: "A programme may request a personal statement explaining how the EMBA fits the applicant’s professional objectives."
            }
          ]
        },
        {
          t: "p",
          items: [
            "Unlike many full-time academic master's programmes, an EMBA may place considerable emphasis on professional experience and leadership potential. Applicants should confirm the exact assessment criteria with the institution."
          ]
        }
      ]
    },
    {
      slot: "costs",
      eyebrow: "Tuition & Costs",
      title: "Cost of Studying an Executive MBA in Finland",
      groups: [
        {
          t: "p",
          items: [
            "Executive MBA fees are generally substantially higher than those of many conventional academic master's programmes. The cost reflects the executive format, specialised teaching, professional networking and programme structure.",
            "**Executive MBA programme fees**"
          ]
        },
        {
          t: "table",
          headers: ["Institution", "Published Programme Fee", "Approximate Fee in INR"],
          rows: [
            ["Aalto Executive MBA", "€52,000 + VAT", "₹56.47 lakh + VAT"],
            ["Hanken Executive MBA", "€46,000 + VAT", "₹49.96 lakh + VAT"],
            ["TSE EXE Executive MBA", "€44,800 + VAT", "₹48.65 lakh + VAT"],
            ["Aalto MBA – related alternative", "€37,800 + VAT", "₹41.05 lakh + VAT"]
          ]
        },
        {
          t: "p",
          items: [
            "INR estimates use an indicative exchange rate of €1 ≈ ₹108.60. Actual exchange rates and bank charges may vary. Fees are based on published programme information and can change. Applicable VAT, travel, accommodation and other additional costs may increase the final amount."
          ]
        },
        {
          t: "h4",
          text: "Additional expenses to consider"
        },
        {
          t: "p",
          items: [
            "In addition to the programme fee, international participants may need to budget for:"
          ]
        },
        {
          t: "table",
          headers: ["Expense", "What to Consider"],
          rows: [
            ["Accommodation", "Hotel, rented accommodation or other lodging during modules"],
            ["Travel", "International flights and transport within Finland"],
            ["Food and daily expenses", "Meals, groceries and personal spending during visits"],
            ["Study visits", "International module travel and accommodation, if not included"],
            ["Insurance", "Suitable travel or health insurance, depending on circumstances"],
            ["Study materials", "Additional resources or equipment, if charged separately"],
            ["Visa or residence-related costs", "Depends on nationality, duration and the nature of the programme"]
          ]
        },
        {
          t: "p",
          items: [
            "Some executive programmes include study materials and selected international modules in the published fee, but may exclude travel and accommodation. Read the fee conditions carefully before enrolling."
          ]
        },
        {
          t: "h4",
          text: "Scholarships and employer sponsorship"
        },
        {
          t: "p",
          items: [
            "Executive MBA programmes may have different funding arrangements from regular university degree programmes. Applicants can explore:"
          ]
        },
        {
          t: "ul",
          items: [
            "Employer sponsorship or professional development budgets.",
            "Payment arrangements offered by the institution.",
            "Scholarships or funding opportunities, if specifically available.",
            "Personal education funding.",
            "Financial support from their own business or organisation."
          ]
        },
        {
          t: "p",
          items: [
            "Scholarships should not be assumed to be available for every EMBA. Applicants should contact the programme provider to confirm current funding options."
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Application Steps",
      title: "Admission Process for an Executive MBA in Finland",
      groups: [
        {
          t: "p",
          items: [
            "The admission process usually involves the following steps:"
          ]
        },
        {
          t: "step",
          items: [
            {
              title: "Identify your career goals",
              desc: "Decide whether you want to improve leadership skills, move into senior management, expand your business or strengthen strategic expertise."
            },
            {
              title: "Compare programmes",
              desc: "Review programme structure, language, location, fee, professional requirements and qualification awarded."
            },
            {
              title: "Check eligibility",
              desc: "Confirm that your educational background and work experience meet the institution’s requirements."
            },
            {
              title: "Prepare your professional CV",
              desc: "Include work history, achievements, leadership responsibilities and relevant qualifications."
            },
            {
              title: "Collect academic documents",
              desc: "Prepare degree certificates and transcripts if requested."
            },
            {
              title: "Arrange professional references",
              desc: "Contact suitable referees early if the application requires references."
            },
            {
              title: "Submit the application",
              desc: "Complete the official form and upload the required documents."
            },
            {
              title: "Attend an interview",
              desc: "Participate in an interview or additional assessment if required."
            },
            {
              title: "Review the offer and fee conditions",
              desc: "Check payment schedules, VAT, travel costs and cancellation terms before accepting."
            },
            {
              title: "Plan your participation",
              desc: "Arrange travel, accommodation and any immigration documentation required for your circumstances."
            }
          ]
        },
        {
          t: "p",
          items: [
            "**[Edu-Hawk Worldwide](/services)** can assist with programme comparisons, application documentation and planning the next steps of an international executive education journey."
          ]
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Recognition",
      title: "Licensing and Professional Recognition After an Executive MBA",
      groups: [
        {
          t: "p",
          items: [
            "An Executive MBA is generally a management-development qualification rather than a licence to practise a regulated profession.",
            "The value of an EMBA depends on the programme provider, curriculum, professional relevance, accreditation and the needs of the applicant’s industry.",
            "Before enrolling, consider the following:"
          ]
        },
        {
          t: "ul",
          items: [
            "**Check the qualification awarded:** Determine whether the programme grants an academic degree or an executive education certificate.",
            "**Verify accreditation:** Review the programme’s published accreditation information and what each accreditation covers.",
            "**Confirm employer recognition:** Ask whether the qualification aligns with your employer’s promotion or professional-development criteria.",
            "**Review industry requirements:** Certain regulated occupations require separate qualifications or professional authorisation.",
            "**Consider career relevance:** Compare programme outcomes with your leadership responsibilities and long-term professional goals.",
            "**Check international applicability:** If you intend to use the qualification outside Finland, confirm its recognition with relevant employers or authorities."
          ]
        },
        {
          t: "p",
          items: [
            "An EMBA can strengthen management knowledge and professional networks, but it does not automatically guarantee a promotion, salary increase, professional licence or immigration status."
          ]
        }
      ]
    },
    {
      slot: "jobs",
      eyebrow: "Career & Outcomes",
      title: "Jobs and Salary After an Executive MBA in Finland",
      groups: [
        {
          t: "p",
          items: [
            "An Executive MBA is usually pursued by professionals who already have work experience. Rather than being an entry-level career qualification, it can help participants develop capabilities relevant to senior responsibilities and business leadership.",
            "Potential career paths include:"
          ]
        },
        {
          t: "table",
          headers: ["Career Option", "Typical Responsibilities"],
          rows: [
            ["General Manager", "Overseeing business operations, budgets and organisational performance"],
            ["Operations Director", "Improving efficiency, operational strategy and service delivery"],
            ["Business Strategy Manager", "Developing growth plans and evaluating business opportunities"],
            ["Senior Business Consultant", "Advising organisations on strategy, change and operational improvement"],
            ["Business Development Director", "Managing market expansion, partnerships and revenue growth"],
            ["Marketing Director", "Leading brand strategy, marketing teams and customer acquisition"],
            ["Entrepreneur or Business Owner", "Developing business strategy and managing organisational growth"],
            ["Chief Operating Officer", "Coordinating business functions and implementing organisational strategy"],
            ["Senior Project or Programme Manager", "Managing complex initiatives, resources and business outcomes"]
          ]
        },
        {
          t: "h4",
          text: "Salary expectations"
        },
        {
          t: "p",
          items: [
            "There is no single salary associated with completing an Executive MBA in Finland. Participants often enter the programme with established careers, so their compensation depends on their existing role, industry, organisation, experience and responsibilities.",
            "Senior management salaries may differ substantially from those of mid-level managers. Salary research should focus on the specific occupation and sector rather than assuming that an EMBA leads to a fixed salary.",
            "An Executive MBA may help participants strengthen their leadership profile, but a salary increase or promotion is not guaranteed. Career outcomes depend on performance, employer needs, market conditions and the individual’s professional background."
          ]
        }
      ]
    },
    {
      slot: "documents",
      eyebrow: "Checklist",
      title: "Documents Required for Executive MBA Admission",
      groups: [
        {
          t: "p",
          items: [
            "The exact document list depends on the programme. Applicants may need to prepare:"
          ]
        },
        {
          t: "ul",
          items: [
            "Completed application form.",
            "Updated CV or résumé in English.",
            "Bachelor’s degree certificate or equivalent qualification, where required.",
            "Academic transcripts, where requested.",
            "Professional references or reference forms.",
            "Personal statement or motivation letter, if required.",
            "Details of employment history and management responsibilities.",
            "Proof of English proficiency, if required.",
            "Valid passport or other accepted identification.",
            "Additional documents requested during the interview or assessment process."
          ]
        },
        {
          t: "p",
          items: [
            "For example, Hanken’s published application information requests an application form, an English-language CV, copies of degree certificates and transcripts, and two professional reference forms. Requirements differ across programmes, so applicants should use the current official checklist for their selected intake."
          ]
        }
      ]
    }
  ],

  faqs: [
    {
      q: "Can international students study an Executive MBA in Finland?",
      a: "Yes. International applicants can explore programmes such as the Aalto Executive MBA, Hanken Executive MBA and TSE EXE Executive MBA. Admission depends on the programme’s professional experience, educational background, language and selection requirements."
    },
    {
      q: "What is the duration of an Executive MBA in Finland?",
      a: "Many Finnish Executive MBA programmes take approximately two years and are designed to be completed alongside professional work. Some programmes may have different schedules or longer completion periods."
    },
    {
      q: "What is the cost of an Executive MBA in Finland?",
      a: "The published programme fees featured in this guide range from €44,800 to €52,000 before applicable VAT for the selected EMBA options. This is approximately ₹48.65 lakh to ₹56.47 lakh at the indicative exchange rate used here. Travel, accommodation and other expenses may be additional."
    },
    {
      q: "Is an Executive MBA the same as a regular MBA?",
      a: "No. An Executive MBA is generally designed for experienced professionals and often uses a part-time or modular format. A regular MBA may have different entry requirements and study structures. Applicants should also check whether the qualification is an academic master's degree or an executive education credential."
    },
    {
      q: "Do I need work experience for an Executive MBA in Finland?",
      a: "Professional experience is an important requirement for most Executive MBA programmes. The exact amount varies by institution. The published TSE EXE EMBA requirements, for example, specify at least five years of relevant demanding specialist or managerial experience, or equivalent leadership experience."
    }
  ]
};

export default function ExecutiveMBAInFinland() {
  return (
    <AbroadCoursePage
      page={page}
      heroImg={heroImg}
      heroBgImg={heroBgImg}
      sideImg={sideImg}
      ctaBgImg={ctaBgImg}
    />
  );
}
