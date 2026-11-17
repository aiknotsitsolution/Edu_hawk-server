import cmsData from "../../../../data/study_abroad/australia/dentistry.json";
import React from "react";
import { AbroadCoursePage } from "../../../../component/CoursePageKit.jsx";

// Page layout images
import heroImg from "../../../../Images/Abroad/Australia/Dentistry/dentistry_aus_hero.webp";
import heroBgImg from "../../../../Images/Abroad/Australia/Dentistry/dentistry_aus_hero_bg.webp";
import clinicalImg from "../../../../Images/Abroad/Australia/Dentistry/dentistry_aus_clinical.webp";
import ctaBgImg from "../../../../Images/Abroad/Australia/Dentistry/dentistry_aus_cta_bg.webp";

// University Campus Images
import melbourneImg from "../../../../Images/Abroad/Australia/Dentistry/The_University_of_Melbourne.webp";
import adelaideImg from "../../../../Images/Abroad/Australia/Dentistry/Adelaide_University.webp";
import queenslandImg from "../../../../Images/Abroad/Australia/Dentistry/University_of_Queensland.webp";
import sydneyImg from "../../../../Images/Abroad/Australia/Dentistry/The_University_of_Sydney.webp";

const sideImg = clinicalImg;

const page = {
  name: "Dentistry in Australia",
  country: "Australia",
  slug: "dentistry",
  title: "Dentistry in Australia for Indian Students | Edu-Hawk Worldwide",
  description:
    "Study Dentistry in Australia for Indian students. Learn about BDS, BDSc, graduate-entry DDS/DMD, top dental schools (Melbourne, Adelaide, UQ, Sydney), eligibility, fees, ADC accreditation, and licensing.",
  keywords:
    "Study Dentistry in Australia for Indian Students Best Dentistry Universities in Australia Dentistry Courses in Australia After 12th BDS in Australia for International Students Dentistry Admission Requirements in Australia Dentistry Fees in Australia for Indian Students Dentistry Scholarships in Australia for International Students Bachelor of Dental Science in Australia Doctor of Dental Surgery in Australia for Indian Students Doctor of Dental Medicine in Australia Dentistry Course Duration in Australia IELTS and PTE Requirements for Dentistry in Australia Dentistry Admission Process in Australia Australian Dental Council Accreditation for Dentistry Courses How Indian Dentists Can Get Registration in Australia",
  introTitle: "Indian Students Can Study Dentistry in Australia",
  heroParas: [
    "Australia is a well-liked location for students who want to become dentists since it provides clinical training, university-based dental education, and chances to learn in contemporary healthcare settings. To prepare students for professional dental practice, dentistry schools integrate academic knowledge, laboratory practice, simulation-based learning, and supervised clinical experience."
  ],
  overview: [
    "Edu Hawk Worldwide helps students prepare for their foreign education adventure, comprehend university admission standards, and explore international study possibilities."
  ],
  level: "Undergraduate & Graduate Entry",
  crumb: "Healthcare & Dentistry",

  stats: [
    { label: "Degree Choices", value: "BDS, BDSc, DDS & DMD" },
    { label: "Course Duration", value: "4 to 5 Years Full-Time" },
    { label: "Top Dental Schools", value: "Melbourne, Adelaide, UQ, Sydney" },
    { label: "Accreditation", value: "ADC & Dental Board of Australia" }
  ],

  sections: [
    {
      slot: "why",
      eyebrow: "Why Australia",
      title: "Why Come to Australia to Study Dentistry?",
      groups: [
        {
          t: "p",
          items: [
            "Students can acquire the academic information, practical skills, and clinical understanding necessary for a career in oral healthcare by studying dentistry in Australia. Dental programs concentrate on treating patients, preventing dental diseases, identifying oral disorders, and encouraging good oral hygiene.",
            "**Significant Benefits of Studying Dentistry in Australia**"
          ]
        },
        {
          t: "dl",
          pairs: [
            {
              t: "Supervised Clinical Experience",
              d: "As required by the curriculum, obtain supervised practical experience through clinical assignments and university dental clinics."
            },
            {
              t: "Modern Learning Facilities",
              d: "Dental laboratories, simulation tools, and clinical training facilities are examples of modern learning facilities."
            },
            {
              t: "Professional Registration Pathway",
              d: "After fulfilling all other prerequisites, graduates of Australian dental programs authorized for the applicable registration pathway may apply for professional registration."
            },
            {
              t: "Opportunities for Specialization",
              d: "Dentists can pursue fields like orthodontics, periodontics, endodontics, pediatric dentistry, and oral surgery after fulfilling additional education, registration, and experience requirements."
            },
            {
              t: "Multicultural Learning Environment",
              d: "Studying with students from diverse origins and honing communication skills for patient care is possible in a multicultural learning environment."
            },
            {
              t: "Diverse Career Options",
              d: "Graduates may look into employment in dentistry clinics, hospitals, public oral health services, research, and education, depending on their qualifications and registration."
            }
          ]
        },
        {
          t: "p",
          items: [
            "Edu Hawk Worldwide assists students in understanding entrance requirements, investigating appropriate foreign study opportunities, and getting ready for their worldwide educational journey."
          ]
        }
      ]
    },
    {
      slot: "courses",
      eyebrow: "Degrees & Pathways",
      title: "Australian Dentistry Courses",
      groups: [
        {
          t: "p",
          items: [
            "Different routes to dentistry are available at Australian universities. The best choice is determined by the student's prior education, academic standing, level of English proficiency, and the university's entrance requirements.",
            "**Programs for Undergraduate Dentistry**",
            "International applicants are eligible to apply to undergraduate dental programs for students who have finished Class 12 or an equivalent degree.",
            "Typical Degree Choices Include:"
          ]
        },
        {
          t: "ul",
          items: [
            "Dental Surgery Bachelor of Science (BDS)",
            "Dental Science Bachelor's degree (BDSc)",
            "A Bachelor of Dental Science with Honors or a comparable dental degree"
          ]
        },
        {
          t: "p",
          items: [
            "It takes about five years of full-time study to earn some undergraduate dentistry degrees. Each university has a different course structure and length.",
            "Class 12 or above, competitive academic standing, prerequisite coursework when necessary, fluency in English, and passing any necessary selection exam or interview are all prerequisites for eligibility.",
            "**Dental Graduate-Entry Programs**",
            "Students may be able to apply for a graduate-entry dental degree if they already have a bachelor's degree.",
            "Typical Degree Choices Include:"
          ]
        },
        {
          t: "ul",
          items: [
            "DDS, or Doctor of Dental Surgery",
            "DMD, or doctor of dental medicine"
          ]
        },
        {
          t: "p",
          items: [
            "Four years of full-time study are required for some graduate-entry programs. A bachelor's degree by itself does not ensure admission; candidates must fulfilll the academic and selection criteria of the particular university.",
            "**Specialization and Postgraduate Dentistry**",
            "Postgraduate studies in clinical dentistry, research, or specialized training are options available to dentists who already possess the necessary dental qualifications.",
            "Potential Research Topics Include:"
          ]
        },
        {
          t: "pills",
          items: [
            "Orthodontics",
            "Endodontics",
            "Periodontics",
            "Prosthodontics",
            "Pediatric Dental Care",
            "Oral Surgery and Oral Medicine",
            "Public Health in Dentistry",
            "Dental Research"
          ]
        },
        {
          t: "p",
          items: [
            "Clinical experience, professional registration, and additional academic prerequisites are typical for specialized programs.",
            "Verify the program's accreditation and approval for the chosen registration pathway before submitting an application."
          ]
        }
      ]
    },
    {
      slot: "unis",
      eyebrow: "Top Institutions",
      title: "Australia's Best Universities to Consider for Dentistry",
      lead: [
        "The following Australian universities and dental education providers are good places for students to start their research. Each university should be contacted directly to confirm course availability, campus, intake, eligibility for overseas students, and entrance requirements."
      ],
      unis: [
        {
          name: "Adelaide University",
          img: adelaideImg,
          location: "Adelaide, South Australia",
          desc: "The University of Adelaide Dental School is among Australia's oldest and most distinguished dental institutions, featuring state-of-the-art simulation clinics at the Adelaide Health and Medical Sciences building.",
          fee: "AUD 70,000–100,000 / year",
          duration: "5 Years Bachelor of Dental Surgery (BDS)",
          link: "https://www.adelaide.edu.au/"
        },
        {
          name: "The University of Melbourne",
          img: melbourneImg,
          location: "Melbourne, Victoria, Australia",
          desc: "Melbourne Dental School provides premier graduate-entry dental programs (Doctor of Dental Surgery - DDS) with cutting-edge preclinical simulation labs and comprehensive patient care at the Royal Dental Hospital of Melbourne.",
          fee: "AUD 70,000–100,000 / year",
          duration: "4 Years Doctor of Dental Surgery (DDS)",
          link: "https://www.unimelb.edu.au/"
        },
        {
          name: "The University of Sydney",
          img: sydneyImg,
          location: "Sydney, New South Wales, Australia",
          desc: "Sydney Dental School offers world-class dental education through its renowned Doctor of Dental Medicine (DMD) program, integrating extensive clinical training across major public dental hospitals.",
          fee: "AUD 70,000–100,000 / year",
          duration: "4 Years Doctor of Dental Medicine (DMD)",
          link: "https://www.sydney.edu.au/"
        },
        {
          name: "The University of Queensland",
          img: queenslandImg,
          location: "Brisbane, Queensland, Australia",
          desc: "UQ School of Dentistry, housed at the purpose-built Oral Health Centre in Herston, delivers accredited Bachelor of Dental Science (Honours) programs featuring advanced simulation and public dental clinic rotations.",
          fee: "AUD 70,000–100,000 / year",
          duration: "5 Years Bachelor of Dental Science (Honours)",
          link: "https://www.uq.edu.au/"
        }
      ],
      note: [
        "To confirm a course's current accreditation status and registration eligibility, students should go to the Australian Dental Council's accredited-program list.",
        "**How to Pick the Best Dental School**",
        "Students should compare the following before applying:",
        "• Verify whether the particular qualification supports the proposed professional registration pathway.",
        "• Verify the university's acceptance of foreign applicants for that course and intake.",
        "• Examine prerequisite courses, minimum grades, and selection criteria.",
        "• Verify whether an exam, interview, or other evaluation is necessary for admission.",
        "• Comprehend the framework of supervised clinical training and the prerequisites for placement.",
        "• Compare the entire cost of the course, not just the first year's tuition.",
        "• Make plans for lodging, food, transportation, insurance, and personal needs.",
        "• Verify the length of the degree and any further prerequisites.",
        "• Examine academic counseling, services for international students, and housing support.",
        "Students can investigate appropriate possibilities and comprehend the procedures involved in applying to study dentistry abroad with Edu Hawk Worldwide."
      ]
    },
    {
      slot: "eligibility",
      eyebrow: "Academic Criteria",
      title: "Qualifications for Studying Dentistry in Australia",
      groups: [
        {
          t: "p",
          items: [
            "The university, course, intake, and academic history of the student all affect eligibility. Since dentistry is a competitive field, entrance is not always guaranteed by fulfilling the minimal prerequisites.",
            "**Qualifications Following Class 12**",
            "Applicants to dental undergraduate programs may require:"
          ]
        },
        {
          t: "ul",
          items: [
            "A recognized equivalent qualification or the completion of Class 12.",
            "A strong academic record that satisfies the requirements for admission to the institution.",
            "English, biology, chemistry, or any other necessary courses that the school may need.",
            "Evidence of fluency in English.",
            "If appropriate, the necessary entrance exam results."
          ]
        },
        {
          t: "p",
          items: [
            "**Qualifications for Dental Graduate Entry**",
            "Candidates for DDS or DMD programs might require:"
          ]
        },
        {
          t: "ul",
          items: [
            "A valid bachelor's degree.",
            "Academic performance that satisfies the program's prerequisite.",
            "Finishing any prerequisite courses that are necessary.",
            "The ability to communicate in English.",
            "Results of pertinent entrance tests, if necessary.",
            "An interview or further evaluation, if necessary."
          ]
        },
        {
          t: "p",
          items: [
            "**Postgraduate Dentistry Eligibility**",
            "Students who are applying to specialized or postgraduate clinical programs may require:"
          ]
        },
        {
          t: "ul",
          items: [
            "A validated dental degree.",
            "Degree certificates and academic transcripts.",
            "If necessary, proof of professional standing or current dental registration.",
            "Clinical experience that is relevant.",
            "The ability to communicate in English.",
            "A resume, references, or a research proposal for particular programs."
          ]
        },
        {
          t: "p",
          items: [
            "Before submitting an application, candidates should review each university's current official requirements."
          ]
        }
      ]
    },
    {
      slot: "admissions",
      eyebrow: "Language Testing",
      title: "Australia's English Language Requirements for Dentistry",
      groups: [
        {
          t: "p",
          items: [
            "Because dentistry students must comprehend lectures, interact with patients, record clinical data, and collaborate with healthcare teams, English proficiency is crucial.",
            "**Acceptable English Exams**",
            "The following tests may be accepted, depending on the program and university:"
          ]
        },
        {
          t: "ul",
          items: [
            "IELTS Academic",
            "PTE Academic",
            "The TOEFL iBT",
            "Other examinations that the organization has officially approved"
          ]
        },
        {
          t: "p",
          items: [
            "There may be differences in the minimum total score as well as any minimum scores needed in certain parts. Students should verify the prerequisites for the course and intake they have selected.",
            "**Professional Registration vs. University Admission**",
            "Dental registration and university admission are two different procedures. Fulfilling the English language requirements of the university does not guaranty that all professional registration criteria have been fulfilled."
          ]
        }
      ]
    },
    {
      slot: "docs",
      eyebrow: "Application Papers",
      title: "Admission Requirements for Dentistry in Australia",
      groups: [
        {
          t: "p",
          items: [
            "Each university and degree type has different prerequisites for admission. Students should gather the necessary paperwork and verify the current application process for the university of their choice.",
            "**Undergraduate Candidate Documents**",
            "Students might have to turn in:"
          ]
        },
        {
          t: "ul",
          items: [
            "The mark sheet and certificate for Class 10",
            "Class 12 grade report and certificate",
            "A valid passport",
            "Test results in English, if necessary",
            "The application form for university",
            "If asked, a statement of purpose or a personal statement",
            "Extra supporting documentation that the university specifies"
          ]
        },
        {
          t: "p",
          items: [
            "**Graduate-Entry Documents**",
            "Candidates might require:"
          ]
        },
        {
          t: "ul",
          items: [
            "A certificate of bachelor's degree",
            "Academic records",
            "Verification of prerequisite courses, if necessary",
            "Results of an English language exam",
            "Results of the entrance exam, if any",
            "A personal statement or resume, if needed",
            "When necessary, academic or professional references"
          ]
        },
        {
          t: "p",
          items: [
            "**Postgraduate Candidate Documents**",
            "Students could require:"
          ]
        },
        {
          t: "ul",
          items: [
            "Transcripts and a certificate of dental degree",
            "When necessary, evidence of professional registration",
            "CV or resume",
            "A purpose statement",
            "Proof of pertinent clinical experience",
            "References from academic or professional sources",
            "A study suggestion for pertinent research initiatives",
            "Test results in English, if necessary"
          ]
        },
        {
          t: "p",
          items: [
            "The official checklist provided by the university should always be consulted, as different courses may have different paperwork needs."
          ]
        }
      ]
    },
    {
      slot: "fees",
      eyebrow: "Tuition & Living Costs",
      title: "The cost of Dental Education in Australia",
      groups: [
        {
          t: "p",
          items: [
            "The university, course length, campus, housing, and individual lifestyle all affect the total cost of studying dentistry. Due to the high cost of tuition and the need for clinical training, dentistry can be very expensive.",
            "**Cost of Tuition**",
            "The annual cost of international dentistry education at some institutions can range from AUD 70,000 to AUD 100,000 or higher. Students should review the official cost schedule for the intake they have selected because actual fees vary greatly by program and university.",
            "**Extra Living and Educational Costs**",
            "Students ought to set up money for:"
          ]
        },
        {
          t: "pills",
          items: [
            "Accommodations and utilities",
            "Food and groceries",
            "Public transportation",
            "Overseas Student Health Coverage (OSHC)",
            "Study guides and textbooks",
            "Clinical supplies, clothing, and dental instruments",
            "Health screenings and immunizations",
            "Verifications and approvals for clinical placement",
            "Travel expenses and the application for a visa",
            "Funds for emergencies and personal expenses"
          ]
        },
        {
          t: "p",
          items: [
            "Instead of depending solely on the first year's tuition, students should assess the whole cost of their degree."
          ]
        }
      ]
    },
    {
      slot: "scholarships",
      eyebrow: "Financial Aid",
      title: "Australian Dental Scholarships",
      groups: [
        {
          t: "p",
          items: [
            "Certain Australian universities may give scholarships to international students. Each university and intake has different requirements for availability, eligibility, grant value, and application dates.",
            "**Potential Scholarship Choices**"
          ]
        },
        {
          t: "ul",
          items: [
            "Merit-based scholarships are given to students who fulfilll certain academic requirements.",
            "The International Student Scholarships offer financial aid or tuition discounts to qualified foreign candidates.",
            "Scholarships granted for specific programs or academic fields are known as faculty or course-based scholarships.",
            "Financial opportunities provided by organizations outside the institution are known as \"external scholarships.\""
          ]
        }
      ]
    },
    {
      slot: "process",
      eyebrow: "Step-by-Step",
      title: "Australian Dentistry Admission Procedure",
      groups: [
        {
          t: "p",
          items: [
            "When getting ready to apply to dental programs in Australia, students might follow these procedures."
          ]
        },
        {
          t: "step",
          items: [
            {
              title: "Step 1: Select Your Path in Dentistry",
              text: "Choose an undergraduate, graduate, or postgraduate program based on your educational background and professional objectives."
            },
            {
              title: "Step 2: Make a shortlist of colleges",
              text: "Examine course length, tuition costs, academic prerequisites, campus location, clinical training, and eligibility for overseas students."
            },
            {
              title: "Step 3: Verify Accreditation",
              text: "Check the program's accreditation status and whether the proposed professional registration pathway is supported."
            },
            {
              title: "Step 4: Examine Your Qualifications",
              text: "Verify your academic standing, prerequisite coursework, English language skills, and any necessary entry exams or interviews."
            },
            {
              title: "Step 5: Get Your Documents Ready",
              text: "Gather academic credentials, transcripts, passport information, English test scores, and any other paperwork the school requires."
            },
            {
              title: "Step 6: Send in Your Application",
              text: "Use the official admissions portal of the university or another authorized application method."
            },
            {
              title: "Step 7 :Examine Your Offer in Step Seven",
              text: "Before accepting the offer, review the course name, campus, intake, tuition costs, terms, due dates, and refund policies."
            },
            {
              title: "Step 8 : Set Up Your Student Visa in Step Eight",
              text: "Prepare the necessary paperwork and adhere to the Australian Department of Home Affairs' current requirements for the right student visa."
            },
            {
              title: "Step 9: Get Ready for Clinical Instruction",
              text: "Finish the training modules, immunizations, police checks, health examinations, and other clearances that the university or clinical placement provider requires."
            }
          ]
        }
      ]
    },
    {
      slot: "licensing",
      eyebrow: "Accreditation & Practice",
      title: "Australia's Dentistry Registration, Accreditation, and Recognition",
      groups: [
        {
          t: "p",
          items: [
            "When selecting a dental program, professional accreditation and registration are crucial factors to take into account.",
            "**Dental Council of Australia (ADC)**",
            "The Australian Dental Council participates in the evaluation process for internationally qualified dental practitioners and evaluates dental education programs for accreditation purposes.",
            "Before enrolling, students should confirm the program's current accreditation status.",
            "**Australian Dental Board**",
            "Dental practitioners must adhere to registration standards and regulations specified by the Dental Board of Australia. Completing a dentistry program does not ensure employment or registration.",
            "Before beginning dental practice in Australia, candidates must fulfill the relevant registration requirements.",
            "**For Dental Graduates from India**",
            "The relevant pathway for internationally trained dental practitioners must be examined by Indian-qualified dentists who want to work in Australia. Before becoming eligible for registration, people might need to go through an evaluation procedure, take tests, or fulfill other conditions, depending on their circumstances and qualifications.",
            "For the most recent regulations, students and licensed dentists should refer to the official Dental Board of Australia, Australian Dental Council, and Australian Health Practitioner Regulation Agency (Ahpra) resources."
          ]
        }
      ]
    },
    {
      slot: "careers",
      eyebrow: "Career Pathways & Compensation",
      title: "Career Options in Dental Education in Australia",
      groups: [
        {
          t: "p",
          items: [
            "Graduates may investigate career options in oral healthcare, clinical practice, research, and education after obtaining an appropriate dental degree and fulfilling the necessary registration criteria.",
            "**Potential Career Routes**"
          ]
        },
        {
          t: "ul",
          items: [
            "Within the parameters of their practice, general dentists diagnose and treat common oral and dental health issues.",
            "Dental Practitioner in a Clinic - Offer dental care in individual or group dental offices, according to employment and registration regulations.",
            "When qualified, provide preventative dental care and community oral health services as a public health dentist.",
            "Examine potential positions as a hospital dentist or in specialized clinical settings.",
            "Participate in studies on oral health and dentistry as a researcher.",
            "After fulfilling the necessary academic and professional qualifications, a dental educator can contribute to clinical training and dental education.",
            "In a subject like orthodontics, endodontics, or periodontics, pursue additional recognized specialized education and fulfilll the necessary registration requirements to become a dental specialist."
          ]
        },
        {
          t: "p",
          items: [
            "Registration, credentials, clinical experience, workplace criteria, and any further specialized training all affect career advancement.",
            "**Expectations for Salary**",
            "In Australia, a dentist's pay varies depending on their experience, region, kind of employment, area of expertise, and whether they work for the government or privately. The number of patients and working hours may also have an impact on earnings.",
            "For accurate pay estimations, students should refer to up-to-date Australian labor market data and job postings. A degree by itself does not ensure a certain employment or compensation."
          ]
        }
      ]
    },
    {
      slot: "checklist",
      eyebrow: "Required Records",
      title: "Documents Needed to Learn Dentistry in Australia",
      groups: [
        {
          t: "p",
          items: [
            "Depending on the university, degree, and visa application, different documents are needed.",
            "**Academic Records**"
          ]
        },
        {
          t: "ul",
          items: [
            "The mark sheet and certificate for Class 10",
            "Class 12 grade report and certificate",
            "Transcripts from prior educational establishments",
            "Transcripts and a bachelor's degree certificate, if relevant",
            "When necessary, official English translations of documents"
          ]
        },
        {
          t: "p",
          items: [
            "**Application and Identity Documents**"
          ]
        },
        {
          t: "ul",
          items: [
            "A valid passport",
            "A recent photo, upon request",
            "The application form for university",
            "If necessary, a statement of purpose or a personal statement",
            "CV or resume for appropriate postgraduate courses",
            "Academic or professional references, upon request"
          ]
        },
        {
          t: "p",
          items: [
            "**Documents in English**"
          ]
        },
        {
          t: "ul",
          items: [
            "IELTS academic scores, if necessary and accepted",
            "PTE academic results, if necessary and acceptable",
            "Results of the TOEFL iBT, if approved and necessary",
            "Additional proof approved by the university's English-language policy"
          ]
        },
        {
          t: "p",
          items: [
            "**Documents related to finances and visas**"
          ]
        },
        {
          t: "ul",
          items: [
            "Enrollment documents and an offer letter from the university",
            "Confirmation of Enrollment (CoE), if necessary",
            "Proof of finances and other documentation needed in accordance with current visa regulations",
            "When necessary, Overseas Student Health Coverage (OSHC)",
            "The Department of Home Affairs has requested additional papers."
          ]
        },
        {
          t: "p",
          items: [
            "**Documents for Clinical Placement**",
            "Students may require the following, depending on the school and placement provider:"
          ]
        },
        {
          t: "ul",
          items: [
            "Records of vaccinations and immunizations",
            "Documents from health assessments",
            "Police inspections",
            "Records of training and clinical placement compliance",
            "Extra clearances that the university specifies"
          ]
        }
      ]
    },
    {
      slot: "visa",
      eyebrow: "Visa Subclass 500",
      title: "Australian Student Visa Requirements for Students Pursuing Dentistry",
      groups: [
        {
          t: "p",
          items: [
            "International students must typically fulfill the requirements for the Australian Student visa (subclass 500) in order to enroll in an authorized full-time dental program.",
            "Before applying, candidates should consult the official website of the Australian Department of Home Affairs because visa conditions are subject to change.",
            "**Crucial Steps in Visa Preparation**"
          ]
        },
        {
          t: "ul",
          items: [
            "Accept an offer from a qualified educational institution and finish the enrollment procedure.",
            "When necessary, obtain a current Confirmation of Enrollment (CoE).",
            "Prepare supporting documentation, such as proof of financial capacity.",
            "Fulfill the relevant Genuine Student prerequisite.",
            "As needed, set up Overseas Student Health Coverage (OSHC).",
            "Finish any necessary character checks and health screenings.",
            "Send in the visa application together with the necessary paperwork.",
            "Adhere to the current visa requirements for the duration of your studies.",
            "An offer from a university does not ensure that a visa will be granted. For their unique situation, students should consult official immigration guidelines."
          ]
        }
      ]
    },
    {
      slot: "faq",
      eyebrow: "FAQ",
      title: "FAQs Regarding Australian Dentistry",
      groups: [
        {
          t: "faq",
          items: [
            {
              q: "After Class 12, are Indian students able to pursue dental studies in Australia?",
              a: "Indeed. After Class 12, Indian students who fulfilll the academic, prerequisite subject, English language, and selection requirements of the university are able to apply to undergraduate-entry dentistry programs."
            },
            {
              q: "What is the length of time required to study dentistry in Australia?",
              a: "While some graduate-entry dental programs take about four years, some undergraduate-entry programs take about five. The degree and university determine the precise time frame."
            },
            {
              q: "What is the cost of studying dentistry in Australia?",
              a: "The cost of tuition varies depending on the program and university. The annual cost of certain overseas dental schools can range from AUD 70,000 to AUD 100,000 or more. Budgeting for housing, living expenditures, insurance, travel, and study-related expenses is also necessary for students."
            },
            {
              q: "Can I work as a dentist in Australia once I graduate?",
              a: "Before they can practice, graduates must fulfilll the necessary registration criteria. Obtaining a dental degree by itself does not ensure employment or professional registration."
            },
            {
              q: "Which English-language tests are acceptable in Australia for dental care?",
              a: "IELTS Academic, PTE Academic, and TOEFL iBT are examples of examinations that may be approved, depending on the university. Students should confirm the requirements for their particular program and intake."
            }
          ]
        }
      ]
    }
  ]
};

export default function DentistryAustralia() {
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
      seoPath="/study-abroad/australia/dentistry"
    />
  );
}