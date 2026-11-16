// src/data/testsData.js
// Comprehensive data repository for all 17 Study Abroad Exams and Tests
// Preserves 100% of the content from "Online Exams and test.md" and "Online Exams and test - Germany.md"
// Strict standard: Exactly one hero paragraph per exam in heroPara.

export const TESTS_DATA = {
  // =========================================================================
  // 1. IELTS
  // =========================================================================
  ielts: {
    id: "ielts",
    name: "IELTS (International English Language Testing System)",
    shortName: "IELTS",
    category: "English Online Exam",
    badge: "Most Widely Accepted English Test",
    title: "IELTS Exam for Study Abroad: Types, Syllabus, Registration & Validity | EduHawk Worldwide",
    description: "Complete guide to IELTS Academic, General Training, UKVI and IELTS Online for Indian students. Explore exam format, band score system (1–9), registration steps, 2-year validity, preparation tips, and university requirements.",
    keywords: "IELTS for studying abroad, IELTS Academic, IELTS General Training, IELTS for UKVI, IELTS Online, IELTS syllabus, IELTS exam pattern, IELTS registration India, IELTS score validity, IELTS band score, IELTS preparation tips, study abroad English test",
    heroPara: "The International English Language Testing System (IELTS) is the world's most widely recognized English language proficiency test, accepted by more than 12,500 universities, employers, and immigration authorities across the UK, USA, Canada, Australia, Germany, Ireland, and New Zealand.",
    stats: [
      { label: "Test Duration", value: "2 Hours 45 Minutes" },
      { label: "Scoring Scale", value: "Band 1.0 to 9.0 (0.5 increments)" },
      { label: "Test Formats", value: "Computer-delivered, Paper-based, Online" },
      { label: "Score Validity", value: "2 Years from Test Date" },
      { label: "Target Band", value: "6.5 – 7.5 (Course Dependent)" },
      { label: "Approx. Fee", value: "₹17,000 approximately" }
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France", "Spain", "Italy", "Finland"],
    overview: [
      "IELTS (International English Language Testing System) is among the most widely recognized English language proficiency tests accepted by employers, universities, and immigration departments globally.",
      "Indian students who wish to study abroad may have to take the IELTS to prove their English language proficiency in academic and professional communication.",
      "The entire examination evaluates four fundamental communicative proficiencies: Listening, Reading, Writing, and Speaking, replicating real-world academic scenarios in global university classrooms."
    ],
    examTypes: [
      {
        title: "IELTS Academic",
        desc: "Generally needed for students applying to colleges, undergraduate programs, master's degrees, and other higher education institutions abroad."
      },
      {
        title: "IELTS General Training",
        desc: "Mainly designed for employment, permanent residency, migration, and other non-academic vocational training routes."
      },
      {
        title: "IELTS for UKVI",
        desc: "An approved Secure English Language Test (SELT) specifically designated for direct student visas and immigration pathways into the United Kingdom."
      },
      {
        title: "IELTS Online",
        desc: "A remote, computer-based exam option available in select countries, accepted by participating universities subject to institutional admission policies."
      }
    ],
    sections: [
      {
        name: "Listening",
        duration: "30 Minutes",
        timeExtra: "(+10 minutes transfer time for paper-based test)",
        measures: "Listening comprehension of spoken English across four recorded monologues and conversations with diverse global English accents (British, Australian, American, Canadian)."
      },
      {
        name: "Reading",
        duration: "60 Minutes",
        timeExtra: "(No additional transfer time)",
        measures: "Comprehension of written academic material through 3 long factual, descriptive, analytical, and scholarly articles taken from books, journals, magazines, and newspapers."
      },
      {
        name: "Writing",
        duration: "60 Minutes",
        timeExtra: "(2 Tasks: Task 1 - 20 mins; Task 2 - 40 mins)",
        measures: "Task 1 requires describing visual data, graphs, charts, or diagrams (minimum 150 words). Task 2 requires a formal discursive essay presenting an argument or solution (minimum 250 words)."
      },
      {
        name: "Speaking",
        duration: "11–14 Minutes",
        timeExtra: "(Face-to-face or video call with examiner)",
        measures: "Fluency, spoken communication, grammatical range, lexical accuracy, and pronunciation evaluated across three interactive parts: general introduction, topic card monologue, and two-way discussion."
      }
    ],
    preparationTips: [
      "Get accustomed to diverse native English accents, including British, Australian, North American, and Irish speech patterns.",
      "Read scholarly articles, peer-reviewed journals, international newspapers, and academic publications regularly.",
      "Improve your vocabulary, idiomatic language range, grammar structure, and complex sentence construction.",
      "Get comfortable writing essays that summarize factual data accurately and construct logically reasoned arguments under time constraints.",
      "Engage in regular academic English conversations to build speaking fluency, natural confidence, and lexical precision.",
      "Take official practice mock exams under timed conditions to get thoroughly accustomed to the test timing and computer/paper interface."
    ],
    registrationSteps: [
      "Visit an approved official booking center or the official IELTS booking portal (IDP India / British Council).",
      "Select the appropriate IELTS test variant (Academic, General Training, or IELTS for UKVI).",
      "Choose a convenient test date, authorized test location/venue, and format (Computer-delivered or Paper-based).",
      "Fill in accurate personal, educational, and contact details matching your official passport.",
      "Upload or enter valid identification information (valid international passport details as directed).",
      "Pay the applicable test registration fee using secure digital payment options.",
      "Review the booking confirmation receipt, download your admission notice, and adhere to all test-day guidelines."
    ],
    validityDetails: "Many global universities and immigration authorities accept IELTS scores as valid for a period of two years from the test date. Score acceptability, required overall band, and minimum sub-section band cutoffs are determined by each receiving institution.",
    faqs: [
      {
        q: "Do you need to take IELTS to study abroad?",
        a: "No single test is universal. While thousands of prestigious universities require IELTS, others accept alternative English tests (such as TOEFL, PTE Academic, or Duolingo English Test) or waive the requirement for students whose medium of instruction (MOI) was English."
      },
      {
        q: "Which IELTS exam should I take for university entrance?",
        a: "IELTS Academic is generally taken for undergraduate, master's, and doctoral university admissions. Students applying for UK Foundation or Pre-sessional pathways should specifically verify if IELTS for UKVI Academic is mandated."
      },
      {
        q: "What is the IELTS score required to study abroad?",
        a: "Required scores differ by university, degree level, and subject. Most undergraduate programs require an overall band of 6.0–6.5, while competitive master's, law, management, and medicine programs require 6.5–7.5 with no band less than 6.0."
      },
      {
        q: "How long does the IELTS score remain valid?",
        a: "IELTS test results remain valid for exactly two years from the examination date. Candidates should verify the score validity timelines and application deadlines of their target universities prior to booking."
      }
    ],
    countryContexts: {
      germany: "In Germany, English-taught bachelor's and master's programs at public universities typically require an IELTS band of 6.5 (minimum 6.0 in each section). IELTS is also accepted during APS certificate processing and German student visa applications.",
      france: "In France, top Grand Écoles and public universities offering English-taught Master of Science (MSc) and MBA programs accept IELTS Academic with minimum cutoffs of 6.0 to 7.0, exempting students from French language exams for English tracks.",
      ireland: "In Ireland, major universities such as Trinity College Dublin and University College Dublin require IELTS 6.5 overall (minimum 6.0 per component). IELTS is fully accepted for Irish Stamp 2 student visa processing.",
      usa: "In the United States, over 3,400 universities accept IELTS Academic alongside TOEFL, with top tier institutions requiring scores between 7.0 and 7.5.",
      uk: "In the United Kingdom, IELTS and IELTS for UKVI are the premier Secure English Language Tests (SELT) required for CAS letter issuance and Student Visa route entry.",
      australia: "In Australia, IELTS is universally accepted across the Group of Eight universities and for Australian Subclass 500 student visa compliance.",
      canada: "In Canada, IELTS Academic is universally required by universities and colleges, while IELTS General Training is the benchmark for Express Entry and PR."
    }
  },

  // =========================================================================
  // 2. TOEFL
  // =========================================================================
  toefl: {
    id: "toefl",
    name: "TOEFL iBT (Test of English as a Foreign Language)",
    shortName: "TOEFL",
    category: "English Online Exam",
    badge: "ETS Official Academic Assessment",
    title: "TOEFL Exam for Study Abroad: Pattern, Scoring, Registration & Eligibility | EduHawk Worldwide",
    description: "Complete guide to the TOEFL iBT and TOEFL ITP exams by ETS for study abroad applicants. Learn about the 4 test sections, enhanced scoring scale, eligibility criteria, test center vs Home Edition, and registration steps.",
    keywords: "TOEFL exam for study abroad, TOEFL iBT, TOEFL ITP, TOEFL test types, TOEFL eligibility, TOEFL exam pattern, TOEFL scoring system, TOEFL registration ETS, TOEFL score validity, TOEFL home edition, TOEFL preparation",
    heroPara: "The TOEFL iBT exam, developed by the Educational Testing Service (ETS), assesses English proficiency in academic contexts at the university level and is accepted by more than 12,000 institutions across more than 160 countries worldwide.",
    stats: [
      { label: "Test Duration", value: "Under 2 Hours (Enhanced Format)" },
      { label: "Scoring Scale", value: "0 – 120 Total (or 1–6 Band Scale)" },
      { label: "Test Formats", value: "Test Center iBT, Home Edition, ITP" },
      { label: "Score Validity", value: "2 Years from Test Date" },
      { label: "Target Score", value: "80 – 100+ out of 120" },
      { label: "Approx. Fee", value: "US $190 – $220 (~₹16,500 – ₹18,500)" }
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France", "Spain", "Italy", "Finland"],
    overview: [
      "The TOEFL exam is a leading standardized test of English language proficiency developed by ETS (Educational Testing Service).",
      "It measures international students' English proficiency across academic university scenarios, assessing readiness to write research assignments, follow lectures, comprehend advanced literature, and communicate in academic seminars.",
      "Universities use TOEFL scores to judge whether foreign applicants have sufficient communicative aptitude to succeed in rigorous degree programs taught in English."
    ],
    examTypes: [
      {
        title: "TOEFL iBT (Internet-Based Test)",
        desc: "The primary examination taken by international students applying for undergraduate, master's, and PhD admissions worldwide. Delivered on computer at authorized testing centers or as the TOEFL iBT Home Edition."
      },
      {
        title: "TOEFL ITP (Institutional Testing Program)",
        desc: "Used primarily by colleges and language academies for internal evaluation, placement, or specific scholarship grants. It is not generally equivalent to TOEFL iBT for standard direct university admissions."
      }
    ],
    sections: [
      {
        name: "Reading",
        duration: "35 Minutes",
        timeExtra: "(2 reading passages, 10 questions each)",
        measures: "Comprehension of written academic material, university-level textbooks, vocabulary in context, inference, and argumentative structure."
      },
      {
        name: "Listening",
        duration: "36 Minutes",
        timeExtra: "(3 lectures and 2 conversations)",
        measures: "Ability to understand spoken English, lecture concepts, pragmatic understanding, student-professor discussions, and classroom interactions."
      },
      {
        name: "Speaking",
        duration: "16 Minutes",
        timeExtra: "(4 tasks: 1 independent, 3 integrated)",
        measures: "Reacting to academic tasks, synthesizing information from reading/listening passages, and articulating opinions clearly into a microphone."
      },
      {
        name: "Writing",
        duration: "29 Minutes",
        timeExtra: "(2 tasks: Integrated + Academic Discussion)",
        measures: "Communicating ideas in structured academic written English, synthesizing listening/reading materials, and contributing to an online academic classroom discussion."
      }
    ],
    eligibilityCriteria: [
      "Generally, candidates do not need any specific educational background or minimum qualification to take the TOEFL iBT.",
      "Any student who satisfies the identification (valid international passport) and ETS registration criteria may appear.",
      "Common applicant profiles include: High school students applying for undergraduate degrees after 12th; Bachelor's graduates applying for Master's programs; PhD and postgraduate research aspirants; and study-abroad scholarship and exchange students."
    ],
    scoringSystem: "The TOEFL iBT awards scores for each of the four sections (0–30 per section) totaling 0–120 points. Under recent ETS enhancements, scores are also mapped onto a 1–6 scale with half-point increments reflecting CEFR performance levels.",
    registrationSteps: [
      "Create an official ETS account on the official ETS TOEFL website and verify personal contact details.",
      "Choose the appropriate TOEFL test variant matching your destination university requirements.",
      "Select your preferred examination format: authorized in-person Test Center appointment or TOEFL iBT Home Edition.",
      "Browse appointment calendars to pick an optimal test date and location with adequate score reporting lead time.",
      "Enter identification details strictly matching your valid passport.",
      "Pay the registration fee using a secure international credit/debit card, PayPal, or accepted electronic payment.",
      "Confirm your test booking and download appointment confirmation details and test-day security instructions."
    ],
    validityDetails: "TOEFL scores are officially valid for two years from the test date. Official score reports can be sent directly to university admissions offices through your ETS account.",
    faqs: [
      {
        q: "What is the purpose of the TOEFL test?",
        a: "The TOEFL exam measures English proficiency for academic university admissions and scholarship consideration, demonstrating an international applicant's readiness for English-medium university courses."
      },
      {
        q: "Do universities outside of the U.S. accept TOEFL?",
        a: "Yes. Thousands of top universities in the UK, Canada, Australia, Germany, Ireland, France, and Europe accept TOEFL iBT scores alongside IELTS."
      },
      {
        q: "How long are TOEFL scores valid?",
        a: "TOEFL scores are officially valid for two years from the test date. Students must ensure their scores remain valid through their university intake date."
      },
      {
        q: "Can Indian students take the TOEFL at home?",
        a: "Yes, the TOEFL iBT Home Edition is accessible to Indian students with an appropriate computer, webcam, microphone, reliable internet, and private testing space meeting ETS security standards."
      },
      {
        q: "Is the TOEFL easier than the IELTS?",
        a: "Neither exam is objectively easier. TOEFL is completely computer-administered and features multiple-choice format reading/listening and integrated tasks, whereas IELTS includes a human examiner speaking interview and varied question formats."
      }
    ],
    countryContexts: {
      usa: "In the United States, TOEFL iBT is universally accepted by 100% of universities, with Ivy League and top-50 colleges typically asking for scores between 90 and 105+.",
      germany: "In Germany, public universities accept TOEFL iBT scores (typical requirement: 80–92 points) for English-taught master's in engineering, science, and business.",
      canada: "In Canada, major universities including Toronto, UBC, and McGill accept TOEFL iBT for direct academic entry (standard cutoff: 86–100).",
      uk: "In the United Kingdom, Russell Group universities accept TOEFL iBT for degree-level courses meeting UKVI B2/C1 English language thresholds."
    }
  },

  // =========================================================================
  // 3. DUOLINGO ENGLISH TEST (DET)
  // =========================================================================
  duolingo: {
    id: "duolingo",
    name: "Duolingo English Test (DET)",
    shortName: "Duolingo (DET)",
    category: "English Online Exam",
    badge: "Fast Online At-Home Assessment",
    title: "Duolingo English Test (DET) for Study Abroad: Fees, Scoring, Validity & Registration | EduHawk Worldwide",
    description: "Comprehensive guide to the Duolingo English Test (DET) for international university admissions. Discover the 10–160 computer-adaptive scoring scale, 48-hour result delivery, eligibility, at-home setup, and registration steps.",
    keywords: "Duolingo English Test, DET for study abroad, Duolingo test scoring 10-160, Duolingo test fee India, DET registration, Duolingo test validity 2 years, Duolingo at home, accepted universities Duolingo",
    heroPara: "The Duolingo English Test (DET) is an innovative, computer-adaptive online English proficiency examination that qualified candidates can take from home on a computer with an internet connection, accepted by over 5,000 university programs globally.",
    stats: [
      { label: "Test Duration", value: "1 Hour (60 Minutes)" },
      { label: "Scoring Scale", value: "10 to 160 (5-point increments)" },
      { label: "Delivery Mode", value: "100% Online from Home" },
      { label: "Result Turnaround", value: "Certified within 48 Hours" },
      { label: "Score Validity", value: "2 Years from Test Date" },
      { label: "Approx. Fee", value: "US $59 (~₹4,900) / 2 Tests for $98" }
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France", "Spain", "Italy", "Finland"],
    overview: [
      "The Duolingo English Test (DET) has emerged as an accessible and fast alternative to traditional testing center exams, designed by Duolingo to evaluate real-world academic English.",
      "The test uses computer-adaptive technology: the difficulty of subsequent questions adjusts dynamically based on the test taker's performance in previous questions.",
      "Upon completion, the exam undergoes a rigorous human and AI proctoring verification process before official certified results and a video interview snippet are made available to universities."
    ],
    skillsAssessed: [
      { skill: "Reading", desc: "Recognizing vocabulary, reading academic passages, filling missing letters in text, and evaluating reading comprehension." },
      { skill: "Writing", desc: "Expressing ideas clearly in structured essays, describing visual imagery, and responding to academic conversation prompts." },
      { skill: "Listening", desc: "Understanding spoken English across short audio cues, transcribing spoken sentences, and identifying real English words." },
      { skill: "Speaking", desc: "Reading sentences aloud, speaking spontaneously on designated topic cards, and articulating opinions during the recorded interview." }
    ],
    eligibilityCriteria: [
      "The Duolingo English Test is open to anyone who satisfies the provider's registration, identification, and technical testing requirements.",
      "Indian students commonly take the DET for: Undergraduate degree programs; Master's and postgraduate diploma admissions; PhD programs; and international exchange and scholarship pathways."
    ],
    scoringSystem: "DET results are reported on a scale of 10 to 160 in 5-point increments. Subscores are also provided across four composite subscores: Literacy (Reading & Writing), Comprehension (Reading & Listening), Conversation (Listening & Speaking), and Production (Writing & Speaking). A score of 120–135+ is generally considered competitive for top universities.",
    registrationSteps: [
      "Visit the official Duolingo English Test website (englishtest.duolingo.com).",
      "Create an account using an active email address and valid personal details.",
      "Read through the official hardware, camera, microphone, identification, and test-day security guidelines.",
      "Purchase the test credit securely online using a credit/debit card or supported digital payment method.",
      "Set up your testing environment: ensure a quiet, private room with front lighting, unobstructed background, and no external interruptions.",
      "Launch the test using the official desktop application, keeping your front-facing camera, microphone, and speakers active.",
      "Wait for certification: the proctoring team verifies your session recording within 48 hours.",
      "Send certified scores instantly to an unlimited number of participating universities at zero extra charge."
    ],
    validityDetails: "Certified DET results are delivered within 48 hours and remain valid for two years from the test date. Score submission to universities is free and completed directly through the Duolingo dashboard.",
    faqs: [
      {
        q: "What is the Duolingo English Test used for?",
        a: "The Duolingo English Test is an accepted English proficiency credential used by thousands of universities worldwide for undergraduate and postgraduate admissions."
      },
      {
        q: "What is the cost of the Duolingo English Test in India?",
        a: "The single test fee is approximately US $59 (around ₹4,900), with a two-test bundle option available at $98. Always verify current exchange rates and taxes on the official website."
      },
      {
        q: "Do foreign universities accept the Duolingo English Test?",
        a: "Yes, over 5,000 university programs globally accept DET scores, including prestigious institutions in the USA, UK, Ireland, Germany, and Canada. Always verify your specific department's policy."
      },
      {
        q: "How long does the Duolingo English Test result remain valid?",
        a: "DET results are valid for two years from the examination date."
      },
      {
        q: "Am I allowed to take the Duolingo English Test at home?",
        a: "Yes. The exam is 100% remote and completed from home provided you comply with technical, environmental, identity, and proctoring rules (e.g. no headphones, no looking away from screen, private room)."
      }
    ],
    countryContexts: {
      usa: "In the United States, over 3,000 universities and colleges accept DET, with typical competitive cutoffs ranging from 115 to 135.",
      ireland: "In Ireland, major universities and institutes of technology accept DET with minimum cutoffs of 110 to 125.",
      germany: "In Germany, select private universities and international business schools accept DET for English-taught bachelor's and master's degrees.",
      uk: "In the UK, many universities accept DET for degree-level admission, though applicants must confirm CAS and student visa compatibility."
    }
  },

  // =========================================================================
  // 4. PTE ACADEMIC
  // =========================================================================
  pte: {
    id: "pte",
    name: "PTE Academic (Pearson Test of English Academic)",
    shortName: "PTE Academic",
    category: "English Online Exam",
    badge: "Pearson Fast AI-Scored Assessment",
    title: "PTE Academic Exam for Study Abroad: Fees, Pattern, Scoring 10–90 & Registration | EduHawk Worldwide",
    description: "Complete guide to PTE Academic for international students. Learn about the 2-hour computer-based exam format, 10–90 scoring scale, 48-hour result delivery, eligibility, 2-year validity, and test-center registration.",
    keywords: "PTE Academic exam for study abroad, PTE exam format, PTE scoring scale 10 to 90, PTE exam fee India, PTE Academic registration, PTE score validity, PTE vs IELTS, study abroad Pearson test",
    heroPara: "Pearson Test of English Academic (PTE Academic) is a premier computer-based English language examination that delivers objective, AI-evaluated results typically within 48 hours, widely accepted for study abroad and visa applications globally.",
    stats: [
      { label: "Test Duration", value: "2 Hours (Approx. 120 Mins)" },
      { label: "Scoring Scale", value: "10 to 90 Scale (Granular)" },
      { label: "Evaluation", value: "100% Automated AI Scoring" },
      { label: "Score Turnaround", value: "Typically Within 48 Hours" },
      { label: "Score Validity", value: "2 Years from Test Date" },
      { label: "Approx. Fee", value: "₹17,000 approximately" }
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France", "Spain", "Italy", "Finland"],
    overview: [
      "PTE Academic is developed by Pearson to measure academic English proficiency for students seeking international higher education.",
      "The examination is conducted entirely on a computer at secure authorized test centers, utilizing patented automated AI scoring that eliminates human examiner bias.",
      "PTE Academic assesses how fluently students can read, write, speak, and comprehend spoken English in authentic academic classroom scenarios."
    ],
    sections: [
      {
        name: "Speaking & Writing (Integrated)",
        duration: "54–67 Minutes",
        measures: "Oral fluency, pronunciation, grammar, and written communication through Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, Answer Short Questions, Summarize Written Text, and Essay Writing."
      },
      {
        name: "Reading",
        duration: "29–30 Minutes",
        measures: "Comprehension, vocabulary, and syntactic analysis via Reading & Writing Fill in the Blanks, Multiple Choice, Re-order Paragraphs, and Reading Fill in the Blanks."
      },
      {
        name: "Listening",
        duration: "30–43 Minutes",
        measures: "Understanding academic lectures and dialogues via Summarize Spoken Text, Multiple Choice, Fill in the Blanks, Highlight Correct Summary, Select Missing Word, Highlight Incorrect Words, and Write from Dictation."
      }
    ],
    eligibilityCriteria: [
      "There are no specific academic qualification prerequisites to sit for the PTE Academic exam.",
      "Candidates must adhere to Pearson's registration guidelines, age requirements (16+ with parental consent), and present a valid passport at the test center.",
      "PTE Academic is taken by students applying for Undergraduate degrees after Class 12, Master's and postgraduate diplomas, PhD research, and international migration visas."
    ],
    scoringSystem: "Scores are reported on a scale of 10 to 90. The scorecard provides an overall score alongside individual communicative skills scores for Speaking, Writing, Reading, and Listening. Scores of 58–65 correspond roughly to IELTS 6.5, while scores of 66–75+ correspond to IELTS 7.0–7.5.",
    registrationSteps: [
      "Visit the official Pearson PTE website (pearsonpte.com) and create a myPTE account.",
      "Select PTE Academic or the specific PTE test variant matching your destination goals.",
      "Locate an authorized Pearson testing facility near you and browse available time slots.",
      "Pick a suitable test date and appointment time that allows sufficient prep and score submission lead time.",
      "Provide personal identification details strictly matching your valid passport.",
      "Complete the booking payment using an approved debit/credit card or voucher.",
      "Review appointment confirmation details, test center directions, and test-day guidelines.",
      "Review official Pearson practice materials and arrive at the test center 30 minutes prior to appointment."
    ],
    validityDetails: "PTE Academic scores are valid for two years from the date of the test. Test takers can send their score reports to an unlimited number of universities free of charge via their Pearson portal.",
    faqs: [
      {
        q: "What is the purpose of the PTE Academic exam?",
        a: "PTE Academic assesses university-level English communication skills and is accepted by thousands of universities worldwide as proof of language proficiency for undergraduate and graduate admissions."
      },
      {
        q: "How much is the PTE Academic exam fee in India?",
        a: "The standard registration fee is approximately ₹17,000 (inclusive of taxes). Late booking fees may apply if booking within 48 hours of test date."
      },
      {
        q: "How long are PTE Academic scores valid for?",
        a: "Scores are officially valid for two years from the examination date for study abroad purposes."
      },
      {
        q: "Do international universities accept PTE Academic?",
        a: "Yes. PTE Academic is 100% accepted by Australian and New Zealand universities, over 99% of UK universities, top Canadian institutions, and an increasing number of US and European universities."
      },
      {
        q: "Is IELTS harder than PTE Academic?",
        a: "Neither test is universally harder. Students who feel comfortable typing essays on a keyboard, speaking into a headset, and prefer fast automated computer scoring often favor PTE Academic over IELTS."
      }
    ],
    countryContexts: {
      australia: "In Australia, PTE Academic is 100% accepted by all universities and the Department of Home Affairs for Subclass 500 student visas and permanent residency points.",
      uk: "In the UK, virtually all universities accept PTE Academic for undergraduate and postgraduate courses, with PTE Academic UKVI accepted for Tier 4/Student Visa compliance.",
      canada: "In Canada, top universities accept PTE Academic for academic admissions.",
      germany: "In Germany, prominent public universities and private business schools accept PTE Academic scores of 58–65+ for English-taught master's programs."
    }
  },

  // =========================================================================
  // 5. OET (Occupational English Test)
  // =========================================================================
  oet: {
    id: "oet",
    name: "OET (Occupational English Test)",
    shortName: "OET",
    category: "English Online Exam",
    badge: "Healthcare Professionals Standard",
    title: "OET Exam for Healthcare Professionals Abroad: Syllabus, Scoring, Registration & Validity | EduHawk Worldwide",
    description: "Comprehensive guide to the Occupational English Test (OET) for doctors, nurses, and healthcare professionals planning to study, register, and work abroad. Explore the 4 medical subtests, A–E scoring scale, and registration procedure.",
    keywords: "OET test for overseas study and employment, Occupational English Test, OET scoring 0 to 500, OET grade A to E, OET registration India, OET eligibility healthcare, OET for nurses doctors, OET validity",
    heroPara: "The Occupational English Test (OET) is the leading international English language assessment specifically engineered for healthcare professionals, evaluating medical communication skills across realistic clinical workplace scenarios.",
    stats: [
      { label: "Test Duration", value: "Approx. 2 Hours 45 Minutes" },
      { label: "Scoring Scale", value: "0 to 500 (Grades A to E)" },
      { label: "Target Professions", value: "Doctors, Nurses, Pharmacists, Dentists, etc." },
      { label: "Delivery Formats", value: "On Paper, On Computer, at Home (OET@Home)" },
      { label: "Score Validity", value: "2 Years from Test Date" },
      { label: "Approx. Fee", value: "AU $587 (~₹32,000 approximately)" }
    ],
    countries: ["UK", "USA", "Australia", "Canada", "Ireland", "New Zealand"],
    overview: [
      "The Occupational English Test (OET) is an international English language assessment tailored exclusively for 12 healthcare professions, including Medicine, Nursing, Dentistry, Pharmacy, Physiotherapy, and Radiography.",
      "Unlike general English proficiency exams, OET uses authentic healthcare scenarios to evaluate communication skills directly relevant to clinical practice, hospital wards, and patient consultations.",
      "OET is recognized by major healthcare regulatory councils, hospital trusts, medical councils, and immigration authorities in the UK, USA, Australia, Canada, Ireland, and New Zealand."
    ],
    sections: [
      {
        name: "Listening",
        duration: "Approx. 45 Minutes",
        measures: "Understanding spoken consultations, patient-doctor dialogues, and clinical lectures across three parts: Part A (consultation extracts), Part B (workplace dialogues), and Part C (presentation extracts)."
      },
      {
        name: "Reading",
        duration: "60 Minutes",
        measures: "Comprehending health-related texts and clinical literature across three parts: Part A (expeditious reading/matching across 4 short medical texts), Part B (workplace memos/protocols), and Part C (long analytical articles)."
      },
      {
        name: "Writing",
        duration: "45 Minutes",
        measures: "Drafting a professional healthcare communication based on clinical case notes—typically a referral letter, transfer letter, or discharge letter tailored to the recipient's role."
      },
      {
        name: "Speaking",
        duration: "Approx. 20 Minutes",
        measures: "Delivering two recorded clinical role-plays with an interlocutor acting as a patient or caregiver, assessing clinical communication, empathy, reassurance, and professional language accuracy."
      }
    ],
    scoringSystem: "OET scores are reported on a scale of 0 to 500 for each of the four subtests, mapped to letter grades: Grade A (450–500: Very high fluency), Grade B (350–440: High fluency), Grade C+ (300–340), Grade C (200–290), Grade D (100–190), Grade E (0–90). Most healthcare councils (e.g. GMC, NMC in the UK, NMBI in Ireland) require Grade B (350+) in all four subtests.",
    registrationSteps: [
      "Visit the official OET booking portal (oet.com).",
      "Create your profile and enter your personal and contact information accurately.",
      "Select your healthcare discipline (e.g. Medicine, Nursing, Dentistry, Pharmacy).",
      "Choose your preferred test format: OET on Paper, OET on Computer at a test venue, or OET@Home where eligible.",
      "Browse and select an available test date, time, and authorized test city.",
      "Enter your valid passport or authorized national ID information.",
      "Complete the payment using a recognized international credit card.",
      "Check your booking confirmation email and download test-day instructions.",
      "Prepare using profession-specific official mock practice tests and clinical communication materials."
    ],
    validityDetails: "OET score release depends on the provider's official schedule (typically 12–16 days). Scores are valid for two years for healthcare council registration, overseas fellowship training, and medical visa applications.",
    faqs: [
      {
        q: "Why do healthcare professionals choose OET?",
        a: "OET uses authentic clinical scenarios that healthcare professionals encounter daily, making preparation directly relevant to clinical practice compared to general academic topics."
      },
      {
        q: "Who is eligible to take the OET exam in India?",
        a: "Qualified healthcare professionals and students in 12 covered professions (Medicine, Nursing, Dentistry, Pharmacy, Physiotherapy, Dietetics, Occupational Therapy, Optometry, Podiatry, Radiography, Speech Pathology, Veterinary Science) are eligible."
      },
      {
        q: "What is the OET score needed to work overseas?",
        a: "Most medical and nursing regulators (such as the UK General Medical Council and Nursing and Midwifery Council) require a minimum Grade B (score of 350 or higher) in each of the four subtests."
      },
      {
        q: "How much does the OET exam cost in India?",
        a: "The exam registration fee is set in Australian Dollars at AU $587 (approximately ₹32,000 depending on current exchange rates and transaction charges)."
      },
      {
        q: "Is OET better than IELTS for medical professionals?",
        a: "Neither test is universally superior, but healthcare professionals often feel more confident with OET because the vocabulary, case notes, and speaking role-plays reflect everyday hospital and clinic environments."
      }
    ],
    countryContexts: {
      uk: "In the UK, OET is recognized by the General Medical Council (GMC) for doctor registration (PLAB exemption routes) and the Nursing and Midwifery Council (NMC) for nurse registration.",
      ireland: "In Ireland, the Medical Council of Ireland and the Nursing and Midwifery Board of Ireland (NMBI) accept OET Grade B for medical registration.",
      usa: "In the USA, ECFMG (Educational Commission for Foreign Medical Graduates) accepts OET Medicine scores for clinical communication certification.",
      australia: "In Australia, AHPRA (Australian Health Practitioner Regulation Agency) recognizes OET across all healthcare boards."
    }
  },

  // =========================================================================
  // 6. FOREIGN ONLINE EXAMS - FRANCE
  // =========================================================================
  france: {
    id: "france",
    name: "Foreign Online Exams for France (DELF, DALF, TCF, TEF)",
    shortName: "France Online Exams",
    category: "Foreign Online Exam",
    badge: "Official French Language & Admissions Tests",
    title: "Exams Abroad for France: DELF, DALF, TCF, TEF & University Requirements | EduHawk Worldwide",
    description: "Complete guide to studying in France: French language proficiency certifications (DELF, DALF, TCF, TEF), English exam alternatives (IELTS/TOEFL), Campus France registration roadmap, and visa guidelines.",
    keywords: "Exams abroad for France, French foreign exams, DELF exam France, DALF certification, TCF test, TEF French test, study in France from India, Campus France language requirements, French study visa exam",
    heroPara: "International students planning to study in France can choose between French-taught and English-taught programs, requiring specific French language diplomas (DELF, DALF, TCF, TEF) or accepted English tests (IELTS, TOEFL) for Campus France and university admission.",
    stats: [
      { label: "Target Programs", value: "Bachelor's, Master's, MBA, PhD" },
      { label: "French Diplomas", value: "DELF (A1–B2), DALF (C1–C2)" },
      { label: "Test Validity", value: "DELF/DALF: Indefinite / TCF: 2 Years" },
      { label: "English Options", value: "IELTS, TOEFL iBT (for English tracks)" },
      { label: "Admission Route", value: "Campus France / Études en France" },
      { label: "Visa Requirement", value: "VLS-TS Student Long-Stay Visa" }
    ],
    countries: ["France"],
    overview: [
      "France is a premier European destination for Indian students seeking top-notch education, globally recognized credentials, and worldwide employment opportunities across management, engineering, fashion, and sciences.",
      "Your chosen university, program language of instruction, academic background, and professional goals determine the specific examinations you must take.",
      "While programs taught in French require certified French language proficiency (DELF, DALF, TCF, or TEF), thousands of programs taught entirely in English accept IELTS or TOEFL."
    ],
    examCategories: [
      {
        category: "French-Language Examinations",
        exams: "DELF (Diplôme d'Études en Langue Française), DALF (Diplôme Approfondi de Langue Française), TCF (Test de Connaissance du Français), and TEF (Test d'Évaluation de Français)."
      },
      {
        category: "English-Language Proficiency Tests",
        exams: "IELTS Academic, TOEFL iBT, and PTE Academic for degree courses taught entirely in the English language."
      },
      {
        category: "Academic & Management Assessments",
        exams: "GMAT or GRE required by elite French business schools (such as HEC Paris, INSEAD, ESSEC, ESCP) for Grand École and MBA programs."
      }
    ],
    comparisonTable: [
      { exam: "DELF", purpose: "French proficiency certification (Levels A1 to B2)", validity: "Diploma is valid indefinitely (Lifetime)" },
      { exam: "DALF", purpose: "Advanced French proficiency certification (Levels C1 & C2)", validity: "Diploma is valid indefinitely (Lifetime)" },
      { exam: "TCF", purpose: "French-language assessment for university admission / visa", validity: "Results generally valid for 2 years" },
      { exam: "TEF", purpose: "French-language assessment for study, work, or immigration", validity: "Validity depends on test version (generally 2 years)" },
      { exam: "IELTS", purpose: "English proficiency for English-taught bachelor's/master's", validity: "Acceptance depends on institution (valid 2 years)" },
      { exam: "TOEFL iBT", purpose: "English proficiency for English-taught university programs", validity: "Scores generally valid for 2 years" }
    ],
    eligibilityAndFees: [
      "Secondary school diploma recognized for university entry (for Bachelor's candidates).",
      "Recognized Bachelor's degree appropriate for Master's and MSc programs.",
      "Official academic transcripts, graduation certificates, and certified translations into French or English.",
      "Proof of French language ability (B2 level is the standard threshold for French-taught university courses) or English test score report.",
      "DELF and DALF registration fees vary by level and test center location in India (Alliance Française network).",
      "TCF and TEF fees depend on the specific modular version selected and testing center."
    ],
    registrationRoadmap: [
      "Step 1: Choose your university and course. Determine whether your curriculum is taught in English or French.",
      "Step 2: Verify formal admission requirements. Confirm accepted language tests, required cutoff levels (e.g. DELF B2 or IELTS 6.5), and application deadlines.",
      "Step 3: Select the appropriate test. For French programs, choose DELF, DALF, TCF, or TEF. For English programs, confirm IELTS or TOEFL iBT.",
      "Step 4: Locate an approved testing facility or provider. Contact your local Alliance Française center or official ETS/IDP booking portals in India.",
      "Step 5: Pay the fee and register. Ensure your personal details match your valid international passport.",
      "Step 6: Prepare for the exam using official sample papers, past exam prompts, and structured coaching.",
      "Step 7: Submit score certificates through the official Campus France 'Études en France' portal and institutional applications."
    ],
    visaGuidelines: [
      "A language test certificate is an essential component but does not independently guarantee university admission or a French student visa.",
      "Applicants must complete the mandatory Campus France India interview, secure an official admission offer letter, submit academic records, and demonstrate sufficient financial resources (€615/month minimum standard).",
      "Applicants must hold valid health insurance coverage and complete biometric submission at VFS Global for their Long-Stay Student Visa (VLS-TS)."
    ],
    faqs: [
      {
        q: "What test is needed to study in France?",
        a: "It depends on the language of instruction. French-taught degrees generally require DELF B2 or DALF C1, or an equivalent TCF/TEF score. Programs taught in English require IELTS (6.0–7.0) or TOEFL iBT (80–100)."
      },
      {
        q: "Is taking the IELTS required in France?",
        a: "No, IELTS is not mandatory for all programs. If you enroll in a French-taught course, French diplomas (DELF/DALF) are required. For English-taught programs, universities accept TOEFL or PTE as alternatives."
      },
      {
        q: "Is it possible for me to take an online French language test from India?",
        a: "Certain TCF sessions and partnerships may offer digital/computer-based options at authorized centers. However, official DELF and DALF diplomas must be taken in-person during official examination sessions at authorized Alliance Française centers."
      },
      {
        q: "What is the validity period for French language exam results?",
        a: "DELF and DALF diplomas have perpetual (lifetime) validity. TCF test score reports are valid for two years. TEF validity is also generally two years depending on the specific test variant."
      }
    ]
  },

  // =========================================================================
  // 7. FOREIGN ONLINE EXAMS - SPAIN
  // =========================================================================
  spanish: {
    id: "spanish",
    name: "Foreign Examinations for Spain (DELE, SIELE, PCE, UNEDasiss)",
    shortName: "Spain Online Exams",
    category: "Foreign Online Exam",
    badge: "Official Spanish Language & University Tests",
    title: "Spain Foreign Examinations: DELE, SIELE, PCE & UNEDasiss Guide | EduHawk Worldwide",
    description: "Complete guide to university admission exams for Spain: DELE perpetual diplomas, SIELE online tests, PCE subject examinations, and UNEDasiss accreditation credentials for international students.",
    keywords: "Spain foreign examinations, DELE exam Spain, SIELE online test, PCE subject exams Spain, UNEDasiss accreditation, study in Spain from India, Spanish university entrance exams, Spanish student visa",
    heroPara: "Spain provides high-quality university education and rich cultural immersion, requiring students to qualify for official Spanish language certifications (DELE, SIELE), university access credentials (UNEDasiss, PCE), or English tests for English-medium tracks.",
    stats: [
      { label: "Target Programs", value: "Grado (Bachelor's), Máster, Doctorado" },
      { label: "Spanish Diplomas", value: "DELE (A1–C2 Lifetime), SIELE (5 Years)" },
      { label: "Undergrad Access", value: "UNEDasiss Accreditation & PCE Exams" },
      { label: "English Options", value: "IELTS, TOEFL iBT (for English tracks)" },
      { label: "Visa Requirement", value: "Spanish National Study Visa (Type D)" },
      { label: "Approx. Living", value: "€800 – €1,200 / month" }
    ],
    countries: ["Spain"],
    overview: [
      "Spain is an increasingly attractive European study destination for Indian students seeking accredited degrees, affordable tuition fees, vibrant lifestyle, and global career opportunities.",
      "International applicants have a wide array of bachelor's, master's, business, and doctoral degrees to choose from across renowned public and private institutions.",
      "The examinations you need depend on your program: DELE and SIELE evaluate Spanish proficiency; IELTS and TOEFL serve English tracks; while PCE and UNEDasiss are essential for undergraduate university access."
    ],
    popularExams: [
      { name: "Official DELE Diploma", desc: "Diplomas of Spanish as a Foreign Language, granted by the Spanish Ministry of Education and Instituto Cervantes across CEFR levels A1, A2, B1, B2, C1, and C2. Valid for life." },
      { name: "SIELE Examination", desc: "International Spanish Language Evaluation Service (Servicio Internacional de Evaluación de la Lengua Española). A modular, computer-based exam scored on a 0–1000 scale, valid for 5 years." },
      { name: "PCE (Pruebas de Competencias Específicas)", desc: "Specific Competency Subject Tests managed by UNEDasiss for international students entering Spanish public universities." },
      { name: "UNEDasiss Accreditation", desc: "Official academic credential conversion and validation service required for international high school qualifications." },
      { name: "IELTS / TOEFL", desc: "Accepted for English-taught bachelor's and master's programs at Spanish universities and business schools." }
    ],
    deleLevels: [
      { level: "A1 & A2", desc: "Basic communicative ability in familiar and routine daily situations." },
      { level: "B1", desc: "Independent communication, understanding main points of clear standard input on familiar matters." },
      { level: "B2", desc: "Advanced operational proficiency. Standard minimum requirement for admission to Spanish-taught university programs." },
      { level: "C1 & C2", desc: "High and mastery-level proficiency for demanding academic, legal, and professional contexts." }
    ],
    eligibilityAndRequirements: [
      "Secondary school diploma recognized or officially validated (Homologación) for undergraduate entry.",
      "Recognized Bachelor's degree for Master's admissions.",
      "Certified academic transcripts and official sworn Spanish translations (Traducción Jurada) with Hague Apostille.",
      "Proof of Spanish language proficiency (B2 minimum for Spanish-medium courses) or English test scores.",
      "PCE subject examinations or UNEDasiss accreditation criteria for public university undergraduate pathways."
    ],
    registrationSteps: [
      "Step 1: Pick your university and degree subject. Verify whether your chosen program is taught in English or Spanish.",
      "Step 2: Review specific university admission requirements, admission cycles (convocatorias), and minimum score benchmarks.",
      "Step 3: Determine which tests you need: DELE or SIELE for Spanish; IELTS/TOEFL for English; PCE/UNEDasiss for undergraduate entry.",
      "Step 4: Visit the official exam provider website (Instituto Cervantes for DELE/SIELE; UNEDasiss portal for PCE).",
      "Step 5: Register, select an authorized testing center in India, and pay the applicable fee with valid passport details.",
      "Step 6: Prepare using official sample questions, past exam papers, and timed practice tests.",
      "Step 7: Submit language certificates, credential equivalencies, and academic dossiers directly to Spanish institutions."
    ],
    faqs: [
      {
        q: "What is the test needed to study in Spain?",
        a: "It depends on the course. For English-taught programs, IELTS or TOEFL is standard. For Spanish-taught programs, DELE B2 or SIELE is required. Undergraduate students entering public universities often need PCE subject tests through UNEDasiss."
      },
      {
        q: "Do you need to do the IELTS in Spain?",
        a: "No, IELTS is not mandatory for all programs. If you study in Spanish, you only need Spanish proficiency. For English-medium programs, universities also accept TOEFL iBT or Cambridge qualifications."
      },
      {
        q: "What is the difference between DELE and SIELE?",
        a: "DELE is an official physical diploma testing a specific CEFR level with permanent (lifetime) validity. SIELE is a flexible, single computer-based multi-level exam scored 0–1000, valid for five years, with faster digital results."
      },
      {
        q: "Is it possible to take an online Spanish language test from India?",
        a: "SIELE is computer-based and can be booked at authorized SIELE exam centers across India. DELE is administered on designated international dates at accredited Instituto Cervantes centers."
      },
      {
        q: "Are PCE exams a must for Indian students?",
        a: "Not for all applicants. PCE exams are primarily required for undergraduate admission into competitive Spanish public universities to raise admission points (nota de corte). Master's and private university programs typically do not require PCE."
      }
    ]
  },

  // =========================================================================
  // 8. FOREIGN ONLINE EXAMS IN GERMANY
  // =========================================================================
  germany: {
    id: "germany",
    name: "Foreign Online Exams in Germany (Goethe, TestDaF, telc, TestAS)",
    shortName: "Germany Online Exams",
    category: "Foreign Online Exam",
    badge: "Official German Academic & Language Assessments",
    title: "Foreign Online Exams in Germany: Language, TestAS & University Tests | EduHawk Worldwide",
    description: "Complete guide to foreign online exams for studying in Germany: Goethe-Zertifikat, TestDaF, telc Deutsch, TestAS aptitude tests, GRE/GMAT requirements, APS certificate guidelines, and preparation options.",
    keywords: "Foreign online exams in Germany, online exams for international students in Germany, Germany university entrance exams, study in Germany entrance exam, German language exams for international students, TestAS exam preparation, IELTS coaching for Germany, study in Germany from India",
    heroPara: "Students planning to study in Germany may need to take specific entrance examinations, German language proficiency assessments (TestDaF, Goethe, telc), aptitude tests (TestAS), or international exams (GRE, GMAT, IELTS) depending on their university and course.",
    stats: [
      { label: "Target Programs", value: "Bachelor's, Master's, PhD" },
      { label: "German Exams", value: "Goethe (B1–C2), TestDaF (TDN 3–5), telc" },
      { label: "Aptitude Exam", value: "TestAS (Core + Subject Modules)" },
      { label: "Standardized Tests", value: "GRE, GMAT, IELTS, TOEFL" },
      { label: "Mandatory Cert.", value: "APS Certificate (India Mandatory)" },
      { label: "Tuition in Germany", value: "€0 Tuition at Public Universities" }
    ],
    countries: ["Germany"],
    overview: [
      "Germany is Europe's economic engine and a world-renowned higher education destination offering tuition-free study at public universities, world-class research institutes, and an 18-month post-study work visa.",
      "International students must qualify for specific examinations based on their academic background, degree level, and medium of instruction.",
      "Examinations can include German language certifications (Goethe-Zertifikat, TestDaF, telc), English assessments (IELTS, TOEFL), aptitude exams (TestAS), and graduate standardized tests (GRE, GMAT)."
    ],
    examTypes: [
      {
        name: "German Language Exams",
        desc: "Goethe-Zertifikat (A1 to C2), TestDaF (Test Deutsch als Fremdsprache), telc Deutsch C1 Hochschule, and DSH, mandated for German-taught degree programs."
      },
      {
        name: "English Language Proficiency Tests",
        desc: "IELTS Academic, TOEFL iBT, and PTE Academic, universally accepted by German universities for English-taught bachelor's and master's degree programs."
      },
      {
        name: "TestAS (Test for Academic Studies)",
        desc: "A standardized aptitude test designed for international undergraduate applicants, assessing cognitive skills and subject aptitude across engineering, economics, or humanities."
      },
      {
        name: "GRE & GMAT Standardized Tests",
        desc: "Required or strongly recommended for competitive master's programs in engineering, computer science, and management (e.g. TUM, RWTH Aachen, Mannheim)."
      }
    ],
    eligibilityAndRegistration: [
      "Select the appropriate entrance exam for your chosen course and university.",
      "Check official exam eligibility requirements, APS certificate guidelines, and test delivery formats.",
      "Complete the exam registration through the authorized provider (Goethe-Institut, TestDaF center, ETS, Pearson).",
      "Submit required passport identification and educational credentials.",
      "Prepare using diagnostic practice questions, full-length mock tests, and digital study resources.",
      "Take the exam according to the provider's test-center rules or proctored remote schedule."
    ],
    eduHawkPreparation: "Edu-Hawk Worldwide supports students preparing for international exams through structured online classes, one-to-one mentoring, full-length mock exams, individualized performance reviews, and curated digital study materials for IELTS, TOEFL, PTE, SAT, GRE, GMAT, IMAT, and German language examinations.",
    faqs: [
      {
        q: "Can international students take online exams for German universities?",
        a: "Some universities and providers offer digital admission assessments, but many entrance tests and official German language exams require in-person attendance at accredited centers (e.g. Goethe-Institut / Max Mueller Bhavan in India)."
      },
      {
        q: "Which exams are required to study in Germany?",
        a: "Requirements depend on course and university. English-taught programs require IELTS (6.5) or TOEFL (85–90+). German-taught programs require TestDaF (TDN 4) or Goethe C1. Select courses require TestAS, GRE, or GMAT."
      },
      {
        q: "Can I take German language exams online from India?",
        a: "Online preparation and preparatory mock tests are available remotely, but official certification exams (Goethe-Zertifikat, TestDaF) generally require booking an in-person test session at authorized centers in India."
      },
      {
        q: "Is TestAS compulsory for all international students in Germany?",
        a: "No. TestAS is required or recommended by select universities and undergraduate programs, but it is not a universal requirement for all degrees."
      },
      {
        q: "How can I prepare for foreign exams in Germany?",
        a: "Students can prepare through EduHawk's structured coaching programs, practice test series, mock exams, digital study materials, and customized one-on-one reviews."
      }
    ]
  },

  // =========================================================================
  // 9. GRE (Graduate Record Examination)
  // =========================================================================
  gre: {
    id: "gre",
    name: "GRE (Graduate Record Examination)",
    shortName: "GRE",
    category: "Entrance & Academic Tests",
    badge: "ETS Graduate Admissions Standard",
    title: "GRE Exam for Study Abroad: Pattern, Syllabus, Registration & Preparation | EduHawk Worldwide",
    description: "Complete guide to the GRE General Test conducted by ETS for MS, Master's, and PhD admissions abroad. Learn about Verbal, Quantitative, and Analytical Writing sections, 1h 58m format, 130–170 scoring, and fees.",
    keywords: "GRE Graduate Record Examination, GRE exam for international students, GRE General Test, GRE exam pattern, GRE eligibility criteria, GRE exam fees, GRE exam preparation, GRE for studying abroad, MS in USA GRE",
    heroPara: "The Graduate Record Examination (GRE), conducted by ETS, evaluates Verbal Reasoning, Quantitative Reasoning, and Analytical Writing for students planning to pursue Master's degrees, MS programs, and PhDs abroad.",
    stats: [
      { label: "Test Duration", value: "1 Hour 58 Minutes (Shorter GRE)" },
      { label: "Scoring Scale", value: "260 to 340 (Verbal 130-170, Quant 130-170)" },
      { label: "Analytical Writing", value: "0 to 6 (0.5 point increments)" },
      { label: "Delivery Mode", value: "Computer-delivered at Center or Home" },
      { label: "Score Validity", value: "5 Years from Test Date" },
      { label: "Approx. Fee", value: "US $220 (~₹18,500 approximately)" }
    ],
    countries: ["USA", "Germany", "Canada", "UK", "Australia", "Singapore", "Ireland"],
    overview: [
      "The Graduate Record Examination (GRE) is a standardized test conducted by Educational Testing Service (ETS) for students pursuing master's degrees, MS programs, PhD programs, and postgraduate studies abroad.",
      "The exam is accepted by thousands of graduate schools and universities worldwide, particularly in the United States, Canada, Germany, the UK, and Europe.",
      "The examination evaluates three core academic competencies: Verbal Reasoning, Quantitative Reasoning, and Analytical Writing, measuring reading comprehension, mathematical problem-solving, and structured critical essay writing."
    ],
    sections: [
      {
        name: "Verbal Reasoning",
        duration: "Approx. 41 Minutes",
        scoring: "130 to 170 Score Scale (1-point increments)",
        measures: "Reading comprehension, critical reasoning, and vocabulary in context through Text Completion, Sentence Equivalence, and Reading Comprehension passages."
      },
      {
        name: "Quantitative Reasoning",
        duration: "Approx. 47 Minutes",
        scoring: "130 to 170 Score Scale (1-point increments)",
        measures: "Mathematical problem-solving and numerical aptitude covering arithmetic, elementary algebra, geometry, and data interpretation with an on-screen calculator."
      },
      {
        name: "Analytical Writing (AWA)",
        duration: "30 Minutes",
        scoring: "0 to 6 Score Scale (0.5-point increments)",
        measures: "One 'Analyze an Issue' task assessing the ability to articulate and develop complex ideas, construct a logical argument, and support claims with relevant reasons and examples."
      }
    ],
    eligibilityAndFees: [
      "The GRE eligibility criteria are flexible, with no minimum educational qualification or age limit imposed by ETS simply to take the test.",
      "Undergraduate students, graduates, and working professionals may register subject to valid passport identification requirements.",
      "Students must verify the specific GRE cutoffs and submission policies of their target universities before applying.",
      "Registration is completed online via ets.org/gre, with test center appointments or the GRE at Home option available in India."
    ],
    preparationTips: [
      "Review the official GRE syllabus, question patterns, and timing constraints.",
      "Take an official ETS diagnostic test (POWERPREP) to identify baseline strengths and weaknesses.",
      "Practice high-frequency vocabulary in context, reading comprehension passages, and quantitative problem sets daily.",
      "Improve essay-writing skills through timed practice using official pool topics.",
      "Complete regular full-length timed mock tests to develop pacing and stamina for the 1 hour 58 minute exam.",
      "Review incorrect answers thoroughly and revise underlying algebraic, geometric, and reasoning concepts."
    ],
    studyAbroadValue: "GRE scores strengthen applications for MS programs in the USA, STEM degrees in Germany, and competitive scholarships globally. While some universities are test-optional, a strong GRE score (315–325+) provides a significant advantage for admission and research assistantships.",
    faqs: [
      {
        q: "What is the full form of GRE?",
        a: "GRE stands for Graduate Record Examination, a standardized assessment used by graduate schools worldwide for postgraduate admissions."
      },
      {
        q: "Is GRE compulsory for studying abroad?",
        a: "No. Requirements depend on the university, department, and degree. Many US universities require it for STEM/MS programs, while others are test-optional."
      },
      {
        q: "What is a good GRE score?",
        a: "A score of 310–318 is solid for many universities, while scores of 320–330+ are considered competitive for top-tier institutions and STEM programs."
      },
      {
        q: "Can Indian students take the GRE?",
        a: "Yes. Indian students can register online via ETS for testing at authorized Pearson VUE centers across major cities or choose the GRE at Home option."
      },
      {
        q: "Can I take the GRE online from home?",
        a: "Yes, the GRE General Test at Home is available year-round to students with an appropriate computer, webcam, and private test room meeting ETS proctoring standards."
      }
    ]
  },

  // =========================================================================
  // 10. GMAT (Graduate Management Admission Test)
  // =========================================================================
  gmat: {
    id: "gmat",
    name: "GMAT (Graduate Management Admission Test)",
    shortName: "GMAT",
    category: "Entrance & Academic Tests",
    badge: "GMAC Global Business School Benchmark",
    title: "GMAT Exam for Study Abroad: Focus Edition Pattern, Scoring 205–805 & Prep | EduHawk Worldwide",
    description: "Complete guide to the GMAT Focus Edition administered by GMAC for MBA and Master's in Management programs abroad. Learn about Quantitative, Verbal, and Data Insights sections, scoring scale, fees, and preparation.",
    keywords: "GMAT Graduate Management Admission Test, GMAT Focus Edition, GMAT exam pattern, GMAT scoring 205 to 805, GMAT eligibility, GMAT exam fees India, GMAT exam preparation, GMAT for studying abroad, MBA abroad GMAT",
    heroPara: "The Graduate Management Admission Test (GMAT), administered by GMAC, is the gold standard assessment designed specifically for students applying to MBA programs, Master's in Management (MiM), and graduate business degrees worldwide.",
    stats: [
      { label: "Test Duration", value: "2 Hours 15 Minutes (+ optional 10m break)" },
      { label: "Scoring Scale", value: "205 to 805 (all total scores end in 5)" },
      { label: "Section Scoring", value: "60 to 90 per section (1-point increments)" },
      { label: "Sections Count", value: "3 Equal Sections (45 mins each)" },
      { label: "Score Validity", value: "5 Years from Test Date" },
      { label: "Approx. Fee", value: "US $275 – $300 (~₹23,000 – ₹25,000)" }
    ],
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "France", "Spain", "Singapore", "Ireland"],
    overview: [
      "The Graduate Management Admission Test (GMAT) is administered by the Graduate Management Admission Council (GMAC) and accepted by more than 7,700 graduate business programs at 2,400+ business schools globally.",
      "The examination evaluates analytical thinking, quantitative problem-solving, data interpretation, and critical verbal reasoning to determine academic readiness for graduate-level business education.",
      "Under the enhanced GMAT Focus Edition, the test features three equal sections with flexible section ordering and a question edit/review feature that allows candidates to change up to three answers per section."
    ],
    sections: [
      {
        name: "Quantitative Reasoning",
        duration: "45 Minutes",
        questions: "21 Questions",
        measures: "Mathematical problem-solving ability, arithmetic, algebra, and applied quantitative reasoning. Calculators are not permitted in this section."
      },
      {
        name: "Verbal Reasoning",
        duration: "45 Minutes",
        questions: "23 Questions",
        measures: "Critical reasoning and reading comprehension, evaluating the ability to understand written passages, analyze arguments, and draw reasoned conclusions."
      },
      {
        name: "Data Insights",
        duration: "45 Minutes",
        questions: "20 Questions",
        measures: "Data analysis and interpretation, integrating Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis. An on-screen calculator is provided."
      }
    ],
    eligibilityAndRegistration: [
      "GMAC does not mandate a specific degree or minimum qualification simply to take the examination.",
      "Candidates must be at least 18 years old (or 13–17 with parental consent) and hold a valid passport for identification.",
      "Admission to target MBA programs abroad generally requires a recognized Bachelor's degree, 2–5 years of professional work experience, essays, and recommendation letters.",
      "Registration is completed online through mba.com, with options for test-center appointments or the GMAT Online exam."
    ],
    preparationTips: [
      "Understand the official GMAT Focus Edition syllabus, scoring structure, and section timing.",
      "Take an official GMAT Focus Practice Exam on mba.com to benchmark your current scoring profile.",
      "Practice Quantitative and Verbal reasoning questions systematically, mastering pacing of 2 minutes per question.",
      "Develop specialized Data Insights skills by analyzing complex tables, multi-source tabs, and graphical displays.",
      "Complete timed full-length GMAT mock tests under authentic exam conditions.",
      "Review every incorrect answer, analyze alternative problem-solving shortcuts, and strengthen weaker concepts."
    ],
    studyAbroadValue: "A competitive GMAT score (645–705+ on the Focus Edition, equivalent to 700–750 on the classic scale) significantly elevates admissions chances at elite business schools such as Harvard, Stanford, INSEAD, London Business School, HEC Paris, and Mannheim Business School.",
    faqs: [
      {
        q: "What is the full form of GMAT?",
        a: "GMAT stands for Graduate Management Admission Test, used by graduate business schools to evaluate applicants for MBA and business master's degrees."
      },
      {
        q: "Is GMAT compulsory for an MBA abroad?",
        a: "No. While top business schools strongly prefer or mandate GMAT scores, some institutions offer GMAT waivers, accept GRE scores, or evaluate candidates based on substantial executive experience."
      },
      {
        q: "What is a good GMAT score?",
        a: "On the GMAT Focus Edition scale (205–805), a score of 595–645 is competitive for good business schools, while 655–715+ places applicants in the top percentiles for elite global programs."
      },
      {
        q: "Can Indian students take the GMAT?",
        a: "Yes. Indian students can register at mba.com for testing at authorized Pearson VUE centers across major Indian cities or choose the online proctored exam."
      },
      {
        q: "Can I take the GMAT online?",
        a: "Yes, the GMAT Online examination is available to candidates worldwide, featuring identical questions, scoring, and duration as the test-center exam."
      }
    ]
  },

  // =========================================================================
  // 11. SAT (Scholastic Assessment Test)
  // =========================================================================
  sat: {
    id: "sat",
    name: "SAT (Scholastic Assessment Test)",
    shortName: "SAT",
    category: "Entrance & Academic Tests",
    badge: "College Board Undergraduate Benchmark",
    title: "Digital SAT Exam for Study Abroad: Pattern, 400–1600 Scoring, Prep & Dates | EduHawk Worldwide",
    description: "Complete guide to the Digital SAT examination conducted by College Board for undergraduate bachelor's admissions in the USA and abroad. Explore Reading & Writing, Math with Desmos, scoring, registration, and prep.",
    keywords: "Digital SAT exam for international students, SAT exam pattern, SAT scoring 400 to 1600, SAT eligibility criteria, SAT exam fees India, SAT registration College Board, SAT preparation tips, bachelor's degree USA SAT",
    heroPara: "The Digital SAT, conducted by the College Board, is a computer-based standardized examination used by colleges and universities worldwide to evaluate students applying for undergraduate bachelor's degree programs.",
    stats: [
      { label: "Test Duration", value: "2 Hours 14 Minutes (+ scheduled break)" },
      { label: "Scoring Scale", value: "400 to 1600 Total Score" },
      { label: "Section Scoring", value: "200 to 800 per Section" },
      { label: "Exam Format", value: "Digital Multi-Stage Adaptive (Bluebook)" },
      { label: "Calculator Policy", value: "Built-in Desmos Calculator for Entire Math Section" },
      { label: "Approx. Fee", value: "US $68 + $43 International Fee (~₹9,200)" }
    ],
    countries: ["USA", "Canada", "UK", "Australia", "Singapore", "Germany", "Italy"],
    overview: [
      "The SAT is a standardized examination conducted by the College Board, taken by millions of high school students worldwide seeking undergraduate college admissions, particularly in the United States.",
      "The Digital SAT assesses essential academic competencies in Reading, Writing, and Mathematics that are vital for success in university coursework.",
      "The examination is administered through College Board's custom testing application (Bluebook) on laptops or tablets at authorized international test centers."
    ],
    sections: [
      {
        name: "Reading and Writing",
        duration: "64 Minutes (Two 32-minute adaptive modules)",
        questions: "54 Questions total",
        measures: "Short passage reading comprehension, vocabulary in context, textual analysis, rhetorical synthesis, grammar, and sentence structure conventions."
      },
      {
        name: "Math",
        duration: "70 Minutes (Two 35-minute adaptive modules)",
        questions: "44 Questions total",
        measures: "Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry & Trigonometry. A built-in Desmos graphing calculator is available for all math questions."
      }
    ],
    adaptiveTesting: "The Digital SAT uses multi-stage adaptive testing: performance on the first module of each section determines the difficulty level of the second module, enabling shorter test timing while maintaining scoring precision.",
    registrationSteps: [
      "Create an account on the official College Board website (collegeboard.org).",
      "Complete your student profile with accurate high school academic and personal information.",
      "Select an available international test date and authorized test center in India.",
      "Upload a compliant passport-style photograph matching College Board requirements.",
      "Pay the examination fee ($68 registration + $43 international regional fee) using an accepted digital payment method.",
      "Download the Bluebook testing app onto your device and generate your official SAT Admission Ticket.",
      "Review test-day guidelines and arrive with your approved device, valid passport, and admission ticket."
    ],
    preparationTips: [
      "Familiarize yourself with the digital testing interface using the official Bluebook application.",
      "Practice reading diverse academic passages and master standard English grammar conventions.",
      "Master essential algebra, functions, geometry, and data interpretation formulas.",
      "Learn how to effectively utilize the built-in Desmos graphing calculator for fast problem solving.",
      "Take official full-length adaptive practice tests in Bluebook to measure your baseline score.",
      "Review every incorrect response, identify patterns, and target weaker sub-skills before exam day."
    ],
    faqs: [
      {
        q: "What is the full form of SAT?",
        a: "Historically expanded as the Scholastic Assessment Test (and earlier Scholastic Aptitude Test), today it is officially recognized simply as the SAT."
      },
      {
        q: "Is SAT compulsory for studying in the USA?",
        a: "No. While many top universities have reinstated SAT requirements (such as MIT, Dartmouth, Yale, UT Austin), others remain test-optional. However, a high SAT score significantly enhances admission and merit scholarship prospects."
      },
      {
        q: "What is a good SAT score?",
        a: "The average SAT score is around 1050. Scores of 1250–1350 are competitive for good universities, while scores of 1450–1550+ place candidates in the competitive range for Ivy League and top-30 US institutions."
      },
      {
        q: "Can Indian students take the SAT?",
        a: "Yes. Indian students can take the Digital SAT at authorized test centers in major cities across India during designated international testing dates (March, May, June, August, October, November, December)."
      },
      {
        q: "Can I take the SAT online from home?",
        a: "No. Although the SAT is digital, it must be taken in-person at an authorized test center on your own or a school-provided laptop/tablet running the Bluebook testing app."
      }
    ]
  },

  // =========================================================================
  // 12. ACT (American College Testing)
  // =========================================================================
  act: {
    id: "act",
    name: "ACT (American College Testing)",
    shortName: "ACT",
    category: "Entrance & Academic Tests",
    badge: "Undergraduate Admissions Alternative",
    title: "ACT Exam for Study Abroad: Pattern, Composite Score 1–36, ACT vs SAT | EduHawk Worldwide",
    description: "Complete guide to the ACT examination administered by ACT, Inc. for undergraduate university admissions abroad. Discover the English, Math, and Reading core sections, optional Science & Writing, fees, and prep.",
    keywords: "ACT American College Testing, ACT exam for international students, ACT exam pattern, ACT composite score 1 to 36, ACT eligibility, ACT exam fees, ACT vs SAT difference, undergraduate admission USA ACT",
    heroPara: "The ACT is a standardized examination designed for students applying to undergraduate programs and bachelor's degrees abroad, assessing competencies in English, Mathematics, and Reading, with optional Science and Writing tests.",
    stats: [
      { label: "Test Duration", value: "Approx. 2 Hours (Core Sections)" },
      { label: "Composite Scale", value: "Score 1 to 36 (Average of Core Sections)" },
      { label: "Core Sections", value: "English, Mathematics, Reading" },
      { label: "Optional Modules", value: "Science Reasoning & Writing Essay" },
      { label: "Delivery Mode", value: "Computer-based at International Centers" },
      { label: "Approx. Fee", value: "US $181.50 (Non-Writing) / $206.50 (With Writing)" }
    ],
    countries: ["USA", "Canada"],
    overview: [
      "The ACT is a standardized college admissions test administered by ACT, Inc., accepted by 100% of four-year colleges and universities in the United States and recognized internationally.",
      "The exam evaluates students' academic readiness for higher education, measuring curriculum-based skills in English grammar, mathematical reasoning, and reading comprehension.",
      "Under the revised enhanced ACT format, the test offers a shorter core duration, with the Science section and Writing essay offered as optional components."
    ],
    sections: [
      {
        name: "English",
        measures: "Grammar, punctuation, usage, sentence structure, rhetorical skills, and organization evaluated across multiple prose passages."
      },
      {
        name: "Mathematics",
        measures: "Algebra, coordinate and plane geometry, functions, and trigonometry, testing problem-solving skills under timed conditions."
      },
      {
        name: "Reading",
        measures: "Comprehension of literary narrative, humanities, social sciences, and natural sciences passages, evaluating main ideas, supporting details, and author tone."
      },
      {
        name: "Science (Optional)",
        measures: "Interpretation, analysis, evaluation, reasoning, and problem-solving skills applied to scientific data representations, research summaries, and conflicting viewpoints."
      },
      {
        name: "Writing (Optional)",
        measures: "One prompt presenting an issue and three diverse perspectives, assessing the ability to analyze perspectives, state your own view, and construct an organized essay."
      }
    ],
    actVsSatComparison: [
      { feature: "Core Focus", act: "Curriculum-based knowledge (English, Math, Reading)", sat: "Critical reasoning & analysis (Reading & Writing, Math)" },
      { feature: "Scoring Scale", act: "Composite score 1 to 36", sat: "Total score 400 to 1600" },
      { feature: "Science Component", act: "Dedicated optional Science section testing data interpretation", sat: "No dedicated science section (science passages embedded in reading)" },
      { feature: "Math Calculator", act: "Calculator allowed on entire Math section", sat: "Built-in Desmos graphing calculator allowed on all Math questions" },
      { feature: "Testing Format", act: "Computer-based testing at international test centers", sat: "Digital adaptive testing in Bluebook app" }
    ],
    registrationSteps: [
      "Visit the official ACT website (act.org).",
      "Create an online account and complete required student profile information.",
      "Select an available test date and authorized international testing center in India.",
      "Choose your preferred test options (ACT without Writing or ACT with Writing, and Science option).",
      "Pay the applicable examination fee using an international credit card.",
      "Download and print your ACT Admission Ticket and review test-day security requirements."
    ],
    faqs: [
      {
        q: "What is the full form of ACT?",
        a: "ACT stands for American College Testing, a standardized examination used by colleges and universities for undergraduate admissions."
      },
      {
        q: "Is the ACT compulsory for studying in the USA?",
        a: "No. While some universities require or recommend standardized scores, many US universities are test-optional. A competitive ACT score strengthens admissions profiles."
      },
      {
        q: "What is a good ACT score?",
        a: "The national US average is around 20–21. Scores of 28–31 are competitive for strong universities, while scores of 33–36 place applicants in the top tier for Ivy League and prestigious colleges."
      },
      {
        q: "Can Indian students take the ACT?",
        a: "Yes. Indian students take the computer-based ACT at authorized international testing centers across major cities in India."
      },
      {
        q: "What is the difference between ACT and SAT?",
        a: "Both tests are equally accepted by all US colleges. ACT focuses on faster-paced questions with an optional Science section, while SAT features multi-stage adaptive testing with built-in Desmos math calculators."
      }
    ]
  },

  // =========================================================================
  // 13. CMAT (Common Management Admission Test)
  // =========================================================================
  cmat: {
    id: "cmat",
    name: "CMAT (Common Management Admission Test)",
    shortName: "CMAT",
    category: "Entrance & Academic Tests",
    badge: "NTA National Management Test",
    title: "CMAT Exam Guide: Pattern, 5 Sections, Syllabus, Marking & Eligibility | EduHawk Worldwide",
    description: "Complete guide to the Common Management Admission Test (CMAT) conducted by the National Testing Agency (NTA) in India for MBA and PGDM admissions. Explore pattern, negative marking, 180 min duration, and prep tips.",
    keywords: "CMAT Common Management Admission Test, CMAT exam pattern, CMAT eligibility criteria, CMAT exam fees NTA, CMAT registration, CMAT preparation tips, CMAT for MBA admission, MBA in India CMAT",
    heroPara: "The Common Management Admission Test (CMAT), conducted by the National Testing Agency (NTA), is a national-level entrance examination evaluating candidates for admission into MBA and PGDM programs at AICTE-approved management institutes.",
    stats: [
      { label: "Test Duration", value: "180 Minutes (3 Hours)" },
      { label: "Total Questions", value: "100 Multiple-Choice Questions" },
      { label: "Marking Scheme", value: "+4 for Correct, -1 for Incorrect Answer" },
      { label: "Total Marks", value: "400 Total Marks" },
      { label: "Conducting Body", value: "National Testing Agency (NTA)" },
      { label: "Delivery Mode", value: "Computer-Based Test (CBT) across India" }
    ],
    countries: ["India"],
    overview: [
      "The Common Management Admission Test (CMAT) is a premier national entrance examination conducted by the National Testing Agency (NTA).",
      "It facilitates admissions into MBA, PGDM, Executive PGDM, and related management postgraduate courses at over 1,000 AICTE-approved institutions and universities across India.",
      "The exam evaluates candidates across five comprehensive disciplines: Quantitative Techniques, Logical Reasoning, Language Comprehension, General Awareness, and Innovation & Entrepreneurship."
    ],
    sections: [
      {
        name: "Quantitative Techniques & Data Interpretation",
        questions: "20 Questions (80 Marks)",
        measures: "Arithmetic, algebra, geometry, modern math, number systems, and graphical data interpretation."
      },
      {
        name: "Logical Reasoning",
        questions: "20 Questions (80 Marks)",
        measures: "Analytical reasoning, coding-decoding, blood relations, series, syllogisms, and critical logical deductions."
      },
      {
        name: "Language Comprehension",
        questions: "20 Questions (80 Marks)",
        measures: "Reading comprehension passages, grammar, vocabulary, sentence correction, idioms, and verbal ability."
      },
      {
        name: "General Awareness",
        questions: "20 Questions (80 Marks)",
        measures: "Current national and international affairs, business news, economics, history, geography, and static general knowledge."
      },
      {
        name: "Innovation & Entrepreneurship",
        questions: "20 Questions (80 Marks)",
        measures: "Understanding start-up concepts, business frameworks, funding stages, innovation lifecycles, and entrepreneurial case scenarios."
      }
    ],
    eligibilityCriteria: [
      "Candidates must hold a Bachelor's degree in any discipline from a recognized university.",
      "Final-year undergraduate students are also eligible to apply, provided their graduation results are submitted by the specified deadline.",
      "There is no upper age limit for appearing in the CMAT examination."
    ],
    registrationSteps: [
      "Visit the official NTA CMAT website (exams.nta.ac.in/CMAT).",
      "Complete the online registration form by creating login credentials.",
      "Enter personal, educational, category, and contact details accurately.",
      "Upload scanned copies of your recent photograph and signature as per NTA size specifications.",
      "Pay the applicable examination fee online using Net Banking, Debit/Credit Card, or UPI.",
      "Download and save the official Confirmation Page after successful fee transaction.",
      "Download your CMAT Admit Card when issued and verify test center allocation."
    ],
    faqs: [
      {
        q: "What is the full form of CMAT?",
        a: "CMAT stands for Common Management Admission Test, an entrance exam conducted by NTA for admission to participating management institutes."
      },
      {
        q: "Who is eligible for the CMAT exam?",
        a: "Graduates in any discipline from recognized universities and eligible final-year undergraduate students can apply."
      },
      {
        q: "Is CMAT compulsory for an MBA?",
        a: "No. CMAT is one of several accepted management entrance exams in India (alongside CAT, XAT, MAT). Colleges accept scores based on their admission policies."
      },
      {
        q: "What is the duration of the CMAT exam?",
        a: "The CMAT exam is a single 180-minute (3-hour) computer-based test with 100 questions."
      },
      {
        q: "Is there negative marking in CMAT?",
        a: "Yes. Each correct answer earns +4 marks, while each incorrect answer results in a penalty deduction of -1 mark."
      }
    ]
  },

  // =========================================================================
  // 14. IMAT (International Medical Admissions Test)
  // =========================================================================
  imat: {
    id: "imat",
    name: "IMAT (International Medical Admissions Test)",
    shortName: "IMAT",
    category: "Entrance & Academic Tests",
    badge: "Italian Public Medical University Admissions",
    title: "IMAT Exam for MBBS in Italy: Syllabus, Pattern, Registration & NMC Rules | EduHawk Worldwide",
    description: "Complete guide to the International Medical Admissions Test (IMAT) for English-taught Medicine & Surgery (MBBS) at Italian public universities. Learn about Biology, Chemistry, Physics/Math, Logical Reasoning, and NMC rules.",
    keywords: "IMAT International Medical Admissions Test, study MBBS in Italy through IMAT, IMAT exam pattern, IMAT eligibility criteria, IMAT registration, IMAT exam preparation tips, MBBS in Italy for Indian students, NMC guidelines Italy MBBS",
    heroPara: "The International Medical Admissions Test (IMAT) is the official entrance examination for admission into English-taught Medicine and Surgery (MBBS / MD) programs at prestigious public universities across Italy.",
    stats: [
      { label: "Target Degree", value: "Medicine and Surgery (6-Year MD/MBBS)" },
      { label: "Instruction Language", value: "100% English Taught" },
      { label: "Tuition Fees", value: "€500 to €3,500/year (Public Universities)" },
      { label: "Scholarships", value: "DSU Regional Scholarships (Up to €7,000/year + Tuition Waiver)" },
      { label: "Indian Recognition", value: "Fully compliant with NMC FMGL Regulations" },
      { label: "Conducting Body", value: "Italian Ministry of Universities and Research (MUR)" }
    ],
    countries: ["Italy"],
    overview: [
      "The International Medical Admissions Test (IMAT) is conducted annually by the Italian Ministry of Universities and Research (MUR) for international students seeking medical education at public Italian universities.",
      "Prominent participating universities include University of Milan, Sapienza University of Rome, University of Bologna, University of Padua, University of Pavia, and University of Turin.",
      "The examination evaluates scientific proficiency in biology, chemistry, physics, and mathematics, combined with rigorous logical reasoning and general knowledge."
    ],
    sections: [
      {
        name: "Reading Skills & General Knowledge",
        measures: "Comprehension of short texts, historical/cultural general awareness, and international scientific contexts."
      },
      {
        name: "Logical Reasoning & Problem-Solving",
        measures: "Critical thinking, argument analysis, data problem-solving, and syllogistic deductions."
      },
      {
        name: "Biology",
        measures: "Bioenergetics, cell biology, genetics, human anatomy and physiology, molecular biology, and inheritance mechanisms."
      },
      {
        name: "Chemistry",
        measures: "Atomic structure, chemical periodicity, chemical bonds, chemical reactions, stoichiometry, thermodynamics, solutions, and organic chemistry."
      },
      {
        name: "Physics & Mathematics",
        measures: "Mechanics, thermodynamics, electrostatics, optics, algebraic functions, trigonometry, and probability."
      }
    ],
    eligibilityAndNMC: [
      "Candidates must have completed 12 years of recognized formal schooling (10+2) with Physics, Chemistry, and Biology.",
      "Minimum aggregate of 50% in PCB for general category (40% for reserved categories).",
      "Indian students must qualify for NEET-UG in their year of admission as mandated by the National Medical Commission (NMC) Foreign Medical Graduate Licentiate (FMGL) Regulations.",
      "Registration is completed online via the official Universitaly portal (universitaly.it) during the designated annual window."
    ],
    preparationTips: [
      "Review the official MUR IMAT syllabus and past papers.",
      "Thoroughly master NCERT / A-Level Biology and Chemistry textbooks.",
      "Practice medical reasoning and critical thinking questions under timed conditions.",
      "Solve physics and math questions with focus on conceptual application without calculators.",
      "Complete full-length 100-minute timed mock tests to manage pacing and avoid negative marking penalties.",
      "Monitor official Italian government and Universitaly notices for test center updates in India."
    ],
    faqs: [
      {
        q: "What is the full form of IMAT?",
        a: "IMAT stands for International Medical Admissions Test, used for admission to English-taught Medicine and Surgery programs in Italy."
      },
      {
        q: "Is IMAT required to study MBBS in Italy?",
        a: "Yes. Admission to English-taught medical programs at Italian public universities is determined strictly by merit rank in the official IMAT exam."
      },
      {
        q: "Can Indian students take the IMAT exam?",
        a: "Yes. Indian students can register and sit for the IMAT exam at authorized international centers in India (typically New Delhi) or overseas."
      },
      {
        q: "What subjects should I study for IMAT?",
        a: "Preparation covers Biology, Chemistry, Physics, Mathematics, Logical Reasoning, and Reading Skills/General Knowledge."
      },
      {
        q: "Can I study MBBS in Italy in English?",
        a: "Yes, over 15 public universities in Italy offer fully English-taught 6-year single-cycle MD (MBBS equivalent) programs recognized globally and by the NMC."
      }
    ]
  },

  // =========================================================================
  // 15. UCAT (University Clinical Aptitude Test)
  // =========================================================================
  ucat: {
    id: "ucat",
    name: "UCAT (University Clinical Aptitude Test)",
    shortName: "UCAT",
    category: "Entrance & Academic Tests",
    badge: "UK & Commonwealth Medical Aptitude",
    title: "UCAT Exam Guide: 5 Subtests, Scoring, Registration & Medical Prep | EduHawk Worldwide",
    description: "Complete guide to the University Clinical Aptitude Test (UCAT) for medicine and dentistry courses in the UK, Australia, and New Zealand. Discover Verbal, Decision Making, Quant, Abstract, and Situational Judgement.",
    keywords: "UCAT University Clinical Aptitude Test, UCAT exam pattern and sections, UCAT eligibility criteria, UCAT fees and registration, preparation tips for UCAT, study medicine abroad UCAT, MBBS in UK UCAT",
    heroPara: "The University Clinical Aptitude Test (UCAT) is a computer-based admissions test used by universities in the United Kingdom, Australia, and New Zealand to select applicants for medicine and dentistry degree programs.",
    stats: [
      { label: "Target Courses", value: "Medicine (MBBS / MBChB) & Dentistry (BDS)" },
      { label: "Test Duration", value: "2 Hours (120 Minutes)" },
      { label: "Subtests Count", value: "5 Distinct Subtests" },
      { label: "Cognitive Scoring", value: "1200 to 3600 (300 to 900 per Cognitive Subtest)" },
      { label: "SJT Scoring", value: "Banded into Band 1 (Highest) to Band 4" },
      { label: "Delivery Mode", value: "Computer-Based at Pearson VUE Centers" }
    ],
    countries: ["UK", "Australia", "New Zealand"],
    overview: [
      "The UCAT is an aptitude test designed to evaluate innate cognitive abilities, professional behaviors, and critical judgment rather than knowledge of scientific curriculum facts.",
      "Used by a consortium of over 30 leading UK medical schools (including Oxford, Cambridge, King's College London, Imperial, Edinburgh) and Australian universities.",
      "The examination assesses high-speed decision making, logical thinking, and situational judgment under strict time pressure."
    ],
    sections: [
      {
        name: "Verbal Reasoning",
        duration: "21 Minutes (44 Questions)",
        measures: "Ability to critically evaluate information presented in a written format and draw logical conclusions."
      },
      {
        name: "Decision Making",
        duration: "31 Minutes (29 Questions)",
        measures: "Problem solving, evaluating arguments, and analyzing statistical/categorical information using logic."
      },
      {
        name: "Quantitative Reasoning",
        duration: "25 Minutes (36 Questions)",
        measures: "Numerical problem-solving skills, interpreting charts, graphs, and proportions using an on-screen calculator."
      },
      {
        name: "Abstract Reasoning",
        duration: "12 Minutes (50 Questions)",
        measures: "Identifying patterns, rules, and relationships between complex geometric shapes and abstract figures."
      },
      {
        name: "Situational Judgement (SJT)",
        duration: "26 Minutes (69 Questions)",
        measures: "Understanding real-world clinical situations, integrity, empathy, professional ethics, and teamwork."
      }
    ],
    eligibilityAndRegistration: [
      "Candidates must verify whether their target medical or dental schools require the UCAT.",
      "Review academic requirements, including AAA/A*AA predictions at A-Level or equivalent 90%+ in Class 12.",
      "Register through the official UCAT consortium portal (ucat.ac.uk) via Pearson VUE.",
      "Select an authorized Pearson VUE test appointment during the annual testing window (July to September).",
      "UCAT scores must be submitted alongside UCAS medical applications by the October 15 deadline."
    ],
    faqs: [
      {
        q: "What is the full form of UCAT?",
        a: "UCAT stands for University Clinical Aptitude Test, an admissions aptitude test for medicine and dentistry courses."
      },
      {
        q: "Is UCAT required for MBBS in the UK?",
        a: "Yes. The vast majority of UK medical schools require UCAT as an essential selection criterion alongside academic grades and interviews."
      },
      {
        q: "Can international students take the UCAT?",
        a: "Yes. International students take the UCAT at authorized Pearson VUE test centers across India and worldwide."
      },
      {
        q: "What subjects are tested in UCAT?",
        a: "The test evaluates cognitive aptitudes: Verbal Reasoning, Decision Making, Quantitative Reasoning, Abstract Reasoning, and Situational Judgement. It does not test biology or chemistry science facts."
      },
      {
        q: "How should I prepare for the UCAT?",
        a: "Preparation requires speed drills, learning keyboard shortcuts, practicing timing pacing, and completing official timed mock exams on the UCAT website."
      }
    ]
  },

  // =========================================================================
  // 16. MCAT (Medical College Admission Test)
  // =========================================================================
  mcat: {
    id: "mcat",
    name: "MCAT (Medical College Admission Test)",
    shortName: "MCAT",
    category: "Entrance & Academic Tests",
    badge: "US & Canada Medical School Benchmark",
    title: "MCAT Exam Guide: 4 Sections, Scoring 472–528, AAMC Registration & Prep | EduHawk Worldwide",
    description: "Complete guide to the Medical College Admission Test (MCAT) conducted by the AAMC for MD programs in the United States and Canada. Explore CARS, Biological/Biochemical Foundations, Chemical/Physical, and prep tips.",
    keywords: "MCAT Medical College Admission Test, MCAT exam pattern and sections, MCAT eligibility criteria, MCAT fees and registration, MCAT preparation tips, study medicine in USA Canada MCAT, MD in USA MCAT",
    heroPara: "The Medical College Admission Test (MCAT), administered by the Association of American Medical Colleges (AAMC), is a rigorous standardized examination required for admission to Doctor of Medicine (MD) programs in the United States and Canada.",
    stats: [
      { label: "Target Degree", value: "Doctor of Medicine (MD) / DO Programs" },
      { label: "Test Duration", value: "Approx. 7.5 Hours (Seated Time)" },
      { label: "Scoring Scale", value: "472 to 528 (Midpoint: 500)" },
      { label: "Section Scoring", value: "118 to 132 per Section" },
      { label: "Delivery Mode", value: "Computer-Based at Pearson VUE Centers" },
      { label: "Conducting Body", value: "Association of American Medical Colleges (AAMC)" }
    ],
    countries: ["USA", "Canada"],
    overview: [
      "The MCAT is a standardized multiple-choice examination developed by the AAMC, used by medical school admissions committees across the United States and Canada.",
      "The exam evaluates candidates' problem-solving, critical thinking, and knowledge of natural, behavioral, and social science concepts fundamental to the study of medicine.",
      "Medical education in the US and Canada is graduate-level: students first complete a 4-year undergraduate pre-med bachelor's degree before applying to 4-year MD medical programs."
    ],
    sections: [
      {
        name: "Chemical and Physical Foundations of Biological Systems",
        duration: "95 Minutes (59 Questions)",
        measures: "General chemistry, organic chemistry, introductory physics, and biochemistry applied to living systems."
      },
      {
        name: "Critical Analysis and Reasoning Skills (CARS)",
        duration: "90 Minutes (53 Questions)",
        measures: "Reading comprehension, rhetorical analysis, and critical reasoning across complex ethics, philosophy, social sciences, and humanities passages."
      },
      {
        name: "Biological and Biochemical Foundations of Living Systems",
        duration: "95 Minutes (59 Questions)",
        measures: "Cell biology, molecular biology, biochemistry, genetics, microbiology, and human organ system physiology."
      },
      {
        name: "Psychological, Social, and Biological Foundations of Behaviour",
        duration: "95 Minutes (59 Questions)",
        measures: "Psychology, sociology, behavioral biology, socioeconomic determinants of health, and epidemiological principles."
      }
    ],
    eligibilityAndRegistration: [
      "Candidates must be planning to apply to health professions schools (MD, DO, Podiatric, Veterinary).",
      "Prerequisite undergraduate coursework typically includes General Chemistry, Organic Chemistry, Biochemistry, Physics, Biology, Psychology, and Sociology.",
      "Registration is completed online through the official AAMC MCAT Registration System.",
      "International testing appointments are available at authorized Pearson VUE centers during scheduled test windows."
    ],
    preparationTips: [
      "Build deep scientific foundations in biochemistry, biology, organic chemistry, and physics.",
      "Practice daily CARS passages to develop high-speed reading comprehension and argument dissection.",
      "Familiarize yourself with the authentic interface using official AAMC practice question packs.",
      "Take full-length 7.5-hour practice exams to build cognitive endurance and test-day pacing.",
      "Analyze mistakes in depth, identifying conceptual gaps versus timing errors.",
      "Allocate 300 to 500 hours of structured study time over a 3 to 6 month preparation timeline."
    ],
    faqs: [
      {
        q: "What is the full form of MCAT?",
        a: "MCAT stands for Medical College Admission Test, required for admission to medical schools in the US and Canada."
      },
      {
        q: "Which countries accept the MCAT?",
        a: "The MCAT is primarily used in the United States and Canada, though select medical programs in Australia and international graduate-entry schools also accept it."
      },
      {
        q: "What subjects are included in the MCAT?",
        a: "The exam covers Biology, Biochemistry, General Chemistry, Organic Chemistry, Physics, Psychology, Sociology, and Critical Analysis and Reasoning Skills (CARS)."
      },
      {
        q: "Can international students take the MCAT?",
        a: "Yes. International students can register through AAMC for testing at authorized Pearson VUE centers worldwide."
      },
      {
        q: "Is the MCAT required for MBBS in every country?",
        a: "No. The MCAT is specific to graduate-entry medical programs in North America. European countries (e.g. Italy uses IMAT, UK uses UCAT) have their own admission systems."
      }
    ]
  },

  // =========================================================================
  // 17. WHICH TEST DO I NEED? (Master Study Abroad Exam Selector)
  // =========================================================================
  "which-test": {
    id: "which-test",
    name: "Which Test Do I Need? Complete Study Abroad Exam Selector",
    shortName: "Which Test Do I Need?",
    category: "Study Abroad Selector",
    badge: "Personalized Exam Decision Guide",
    title: "Which Test Do I Need to Study Abroad? Compare All 16 Exams | EduHawk Worldwide",
    description: "Unsure which exam to take for studying abroad? Compare IELTS, TOEFL, PTE, Duolingo, OET, GRE, GMAT, SAT, ACT, IMAT, UCAT & MCAT by country, degree level, and university admission cutoffs.",
    keywords: "Which test do I need, study abroad exams, compare IELTS vs TOEFL vs PTE, GRE vs GMAT, SAT vs ACT, IMAT vs UCAT, study abroad entrance exams, EduHawk test guidance",
    heroPara: "Navigating international exams depends on your target study destination, degree level, and medium of instruction, spanning English language proficiency, foreign language diplomas, and graduate admissions tests.",
    stats: [
      { label: "Total Exams Covered", value: "16 Standardized Tests" },
      { label: "Destinations Supported", value: "10+ Global Study Destinations" },
      { label: "Degree Levels", value: "UG, Master's, MBA, Medicine, PhD" },
      { label: "Guidance Fee", value: "100% Free Consultation with EduHawk" },
      { label: "Assessment Tool", value: "Interactive 3-Step Decision Finder" },
      { label: "Prep Support", value: "1-on-1 Mentoring, Mock Tests & Materials" }
    ],
    countries: ["All Countries", "USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France", "Spain", "Italy", "Finland"],
    overview: [
      "Choosing the right study abroad examination is the crucial first milestone in your international education journey.",
      "The required test depends strictly on your destination country, chosen course discipline, academic level (Undergraduate, Postgraduate, MBA, Medicine), and the teaching language of your degree.",
      "Edu-Hawk Worldwide provides comprehensive diagnostic assessments, cutoff benchmarking, and personalized test selection guidance to ensure students prepare for the exact examination needed."
    ],
    categoriesSummary: [
      {
        category: "1. English Language Proficiency",
        exams: "IELTS Academic, TOEFL iBT, PTE Academic, Duolingo English Test (DET), and OET.",
        purpose: "Mandatory for non-native English speakers applying to English-medium degree programs worldwide."
      },
      {
        category: "2. Foreign Country Language & Entrance Exams",
        exams: "Germany (Goethe, TestDaF, telc, TestAS), France (DELF, DALF, TCF, TEF), and Spain (DELE, SIELE, PCE, UNEDasiss).",
        purpose: "Required for public university programs taught in the national language and undergraduate credential accreditation."
      },
      {
        category: "3. Graduate & Business Admissions",
        exams: "GRE (General Test), GMAT (Focus Edition), and CMAT.",
        purpose: "Evaluates analytical, quantitative, and verbal aptitude for MS, Master's, MBA, and PhD admissions."
      },
      {
        category: "4. Undergraduate Admissions",
        exams: "SAT (Digital SAT) and ACT.",
        purpose: "Assesses college readiness in mathematics, reading, and writing for bachelor's admissions in the USA and globally."
      },
      {
        category: "5. Clinical & Medical School Admissions",
        exams: "IMAT (Italy English MBBS), UCAT (UK/Australia Medicine), and MCAT (USA/Canada MD).",
        purpose: "Competitive admissions tests for medical, clinical, and dental degree entry."
      }
    ],
    decisionMatrix: [
      { goal: "Bachelor's Degree in USA", recommended: "Digital SAT or ACT + IELTS or TOEFL or Duolingo", note: "SAT/ACT required by top colleges; IELTS 6.5 or TOEFL 80+." },
      { goal: "Master's (MS/STEM) in USA", recommended: "GRE General Test + IELTS or TOEFL iBT", note: "GRE Quant 160+ and TOEFL 90+ / IELTS 7.0 for top STEM universities." },
      { goal: "MBA Abroad (USA/Europe/UK)", recommended: "GMAT Focus Edition or GRE + IELTS / TOEFL", note: "GMAT 645+ or GRE 315+ with 2-5 years work experience." },
      { goal: "Tuition-Free Master's in Germany (English)", recommended: "IELTS Academic (6.5+) + Optional GRE + APS Certificate", note: "No German required for English tracks; APS mandatory for Indian applicants." },
      { goal: "Master's in France (Grand École / MSc)", recommended: "IELTS Academic (6.5) or TOEFL (85+) + Optional GMAT", note: "English tracks require no French; DELF B2 required for French tracks." },
      { goal: "Undergraduate / Master's in Ireland", recommended: "IELTS Academic (6.5) or PTE Academic (63) or Duolingo", note: "Accepted for university entry and Stamp 2 student visa." },
      { goal: "MBBS in Italy (English-Taught)", recommended: "IMAT Exam + NEET Qualification (NMC Mandatory)", note: "Public university admission based on IMAT rank; very low tuition." },
      { goal: "Medicine / MBBS in UK", recommended: "UCAT Exam + IELTS for UKVI (7.0+)", note: "UCAT test taken between July and September before UCAS Oct 15 deadline." },
      { goal: "MD in USA / Canada", recommended: "MCAT Exam + 4-Year Pre-Med Bachelor's Degree", note: "Graduate-entry only; requires pre-med science prerequisite coursework." },
      { goal: "Healthcare Professional Migration", recommended: "OET (Occupational English Test)", note: "Requires Grade B (350+) across Listening, Reading, Writing, and Speaking." }
    ],
    faqs: [
      {
        q: "Should I take IELTS or TOEFL?",
        a: "Both tests are universally accepted by virtually all top universities. Choose IELTS if you prefer face-to-face speaking interviews, handwriting or typing, and diverse question types. Choose TOEFL if you are comfortable with an all-computer interface, integrated tasks, and typing essays."
      },
      {
        q: "Should I take GRE or GMAT for an MBA?",
        a: "Over 90% of top business schools now accept both GRE and GMAT equally. If you have exceptional quantitative and data analysis skills, GMAT is traditionally favored by management consulting and finance recruiters. If your vocabulary and verbal skills are stronger, GRE is often easier."
      },
      {
        q: "Can I study abroad without IELTS or English tests?",
        a: "Yes, in certain circumstances. Universities in Germany, France, Ireland, and the UK may waive IELTS if your undergraduate medium of instruction (MOI) was English, or if you take alternative tests like Duolingo English Test or PTE Academic."
      },
      {
        q: "Which test is the fastest to receive results?",
        a: "Duolingo English Test (DET) and PTE Academic deliver official certified results within 48 hours. IELTS on Computer delivers results in 1–5 days, while TOEFL iBT results take 4–8 days."
      },
      {
        q: "How does EduHawk help me choose and prepare?",
        a: "Edu-Hawk Worldwide offers free diagnostic profile evaluations, recommends the exact tests matching your target universities, and provides structured coaching, mock tests, and visa documentation support."
      }
    ]
  }
};
