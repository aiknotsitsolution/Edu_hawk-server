import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../src/Images/Italy/UniversityPadua.png";
import MBBSStudent from "../../../src/Images/Italy/MBBS-in-Italy.webp";
import Flowchart from "../../../src/Images/Italy/flowchart.png";

import UniversitiesInMilan from "../../../src/Images/Italy/UniversitiesInMilan.png";
import UniversityBologna from "../../../src/Images/Italy/UniversityBologna.png";
import UniversityPadua from "../../../src/Images/Italy/UniversityPadua.png";
import UniversityTurin from "../../../src/Images/Italy/UniversityTurin.png";
import UniversityPavia from "../../../src/Images/Italy/UniversityPavia.png";

import UniversityRome from "../../../src/Images/Italy/UniversityRome.png";






const Italy = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [showMoreEligibility, setShowMoreEligibility] = useState(false);
  const [showMoreRecognition, setShowMoreRecognition] = useState(false);
  const [showMoreNMC, setShowMoreNMC] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Italy Landscape"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl text-center px-4">
              STUDY MBBS IN ITALY
            </h1>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
                <img
                src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
              alt="Italy flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Italy 2026–2027
            </h2>
          </div>
        </div>

        {/* About Italy + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Italy
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Italy is one of Europe's most popular destinations for international students seeking high-quality{" "}
              <Link to="/" className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900">
                medical education
              </Link>
              . With a long-standing tradition of medical research, modern healthcare facilities, and globally oriented universities, Italy offers attractive opportunities for students who wish to <strong>Study MBBS in Italy</strong>.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              For Indian students, Italy provides several English-taught medical programmes at established public universities. The Italian medical degree is generally a six-year single-cycle programme in Medicine and Surgery. For example, the University of Bologna offers a six-year Medicine and Surgery Programme delivered entirely in English.
            </p>

            {showMoreAbout ? (
              <>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Italy is also known for its comparatively accessible public-university fee structure and regional financial-support schemes. Depending on the university, family financial situation, eligibility and scholarship rules, students may be able to reduce their education and living expenses through scholarships and fee exemptions.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  For Indian students planning to pursue medicine abroad, Italy can therefore be considered for its combination of European medical education, English-taught programmes, public universities and scholarship opportunities.
                </p>
              </>
            ) : null}

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More"}
            </button>
          </div>

          <div>
            <img
              src={MBBSStudent}
              alt="Italy University"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* MBBS in Italy for Indian Students 2026-27 */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
            MBBS in Italy for Indian Students 2026-27
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
             <strong>MBBS in Italy for Indian students</strong> is an increasingly considered option for students looking for medical education in Europe. In Italy, the undergraduate medical qualification is generally structured as a six-year single-cycle <strong>Medicine and Surgery</strong> degree rather than being formally titled “MBBS”.
            </p>
            <p className="mt-4">
              Several Italian public universities offer Medicine and Surgery programmes in English for international students. These programmes combine foundational medical sciences with clinical education and practical learning. The University of Bologna, for instance, lists its 2026/27 Medicine and Surgery programme as a six-year, English-taught programme with restricted national access.
            </p>
            <p className="mt-4">
              The <strong>MBBS in Italy</strong> admission route requires students to understand both Italian university admission regulations and the requirements applicable to Indian students. For 2026/27, the Italian Ministry of University and Research has published the national framework and admission-test information for English-language Medicine and Surgery programmes.
            </p>
            <p className="mt-4">
              Students should also verify the latest NMC requirements before selecting a university, especially if they intend to return to India and practice medicine after graduation.
            </p>
          </div>
        </div>

        {/* Important Links */}
        <div className="mb-20 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            MBBS in Italy – Important Links
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-blue-800">
            <li><a className="hover:underline" href="#italy-eligibility">• MBBS in Italy Eligibility Criteria for Indian Students</a></li>
            <li><a className="hover:underline" href="#italy-universities">• Top Medical Universities in Italy</a></li>
            <li><a className="hover:underline" href="#italy-documents">• Documents Required for MBBS in Italy Admission</a></li>
            <li><a className="hover:underline" href="#italy-recognition">• Recognition of MBBS in Italy</a></li>
            <li><a className="hover:underline" href="#italy-language">• Medium of Teaching for MBBS in Italy</a></li>
            <li><a className="hover:underline" href="#italy-fees-scholarships">• MBBS in Italy Fees and Scholarships</a></li>
            <li><a className="hover:underline" href="#italy-admission">• IMAT Exam and Admission Process</a></li>
            <li><a className="hover:underline" href="#italy-faq">• Frequently Asked Questions About MBBS in Italy</a></li>
          </ul>
        </div>

        {/* MBBS in Italy for Indian Students */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            MBBS in Italy for Indian Students
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Choosing <strong>MBBS in Italy for Indian students</strong> requires careful planning because admission requirements, available seats, university procedures, tuition fees and scholarship conditions can vary.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Italian public universities offer medical programmes that are particularly attractive to international students because some Medicine and Surgery courses are taught completely in English. The University of Milan, for example, offers a six-year International Medical School degree in Medicine and Surgery taught entirely in English and open to both EU and non-EU students.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Students interested in <strong>Study medicine in Italy</strong> should consider factors such as university reputation, course language, admission route, tuition fees, living costs, scholarships, clinical training and future registration requirements in India.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            The <strong>MBBS in Italy admission</strong> admission process should therefore be approached as a combination of university admission, Italian immigration/visa formalities and Indian regulatory considerations.
          </p>
        </div>

        {/* Features of MBBS in Italy */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Features of MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            There are several reasons why international students consider Italy for medical education:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-bold text-blue-900 mb-3">English-Taught Medical Programmes</h3>
              <p className="text-gray-700">
                One of the biggest advantages is the availability of <strong>English taught medicine in Italy</strong>. Universities such as Bologna and Milan offer Medicine and Surgery programmes in English, allowing international students to pursue their academic coursework without requiring Italian as the primary language of instruction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-bold text-blue-900 mb-3">European Medical Education</h3>
              <p className="text-gray-700">
                Students can experience a European academic environment with opportunities for research, clinical exposure and international academic exchange.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Public Universities</h3>
              <p className="text-gray-700">
                Many leading <strong>Medical universities in Italy</strong> are public institutions. Tuition structures can depend on the university and the student's financial documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Scholarship Opportunities</h3>
              <p className="text-gray-700">
                Students may be eligible for regional or university-based financial support. For example, ER.GO's 2026/27 scholarship framework includes financial eligibility thresholds and different scholarship amounts depending on whether students are resident, commuting or living away from home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border md:col-span-2">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Six-Year Medical Programme</h3>
              <p className="text-gray-700">
                Medicine and Surgery is generally a six-year single-cycle degree. The University of Bologna's 2026/27 programme, for example, has a six-year duration and is delivered entirely in English.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Information + Eligibility */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Italy
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC, WHO, FAIMER & Ministry of Health, Italy</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">Class 12 with Physics, Chemistry, Biology</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (Single-cycle Medicine and Surgery)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Mandatory for Indian students (verify latest NMC rules)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Entrance Exam</td>
                    <td className="p-4">IMAT / University-specific test</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English (selected programmes)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Intake</td>
                    <td className="p-4">September / October</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – Eligibility */}
          <div>
            <h3 id="italy-eligibility" className="scroll-mt-28 text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              MBBS in Italy Eligibility Criteria for Indian Students
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Class 12 qualification</li>
              <li>Physics, Chemistry and Biology</li>
              <li>NEET requirements applicable to Indian students</li>
              <li>Passport and academic documents</li>
              <li>University-specific admission requirements</li>
              <li>Entrance examination requirements</li>
            </ul>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Understanding <strong>MBBS in Italy eligibility</strong> is one of the first steps before applying. Students who wish to pursue medicine in Italy after completing Class 12 should check the eligibility criteria published by the specific university and the relevant Italian admission authorities.
            </p>

            {showMoreEligibility ? (
              <>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  For students planning to <strong>MBBS in Italy after 12th</strong>, the academic background normally needs to include the relevant science subjects required for medical admission, particularly Physics, Chemistry and Biology or equivalent qualifications.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Indian students should also verify their NEET status and NMC requirements before proceeding with a foreign medical programme. University admission eligibility and eligibility to pursue medical education abroad under Indian regulations are separate considerations.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Because requirements and admission procedures can change from one academic year to another, students should verify the current university call for applications and applicable NMC regulations before applying.
                </p>
              </>
            ) : null}

            <button
              onClick={() => setShowMoreEligibility(!showMoreEligibility)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreEligibility ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* ==================== UNIVERSITIES GRID ==================== */}
        {/* ==================== UNIVERSITIES GRID ==================== */}
<div className="mb-20">
  <h2 id="italy-universities" className="scroll-mt-28 text-4xl font-bold text-center text-blue-900 mb-4">
    Medical Universities in Italy to Consider
  </h2>
  <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
    Italy offers Medicine and Surgery degrees at several universities. These qualifications are generally single-cycle degrees rather than courses formally titled MBBS. The universities below are options to research; course language, admission tests, available seats and deadlines can change each year.
  </p>

  <div className="space-y-10">
    {[
      {
        name: "University of Bologna",
        desc: "A historic public university. Check its current Medicine and Surgery course page and annual admission call for the teaching language, entry route and available places.",
        img: UniversityBologna,
        established: "1088",
        recognition: "Check course and latest NMC rules",
        duration: "Usually 6-year single-cycle; verify course",
        eligibility: "University criteria and entrance test apply",
        language: "Check current course information",
        lastDate: "Check the current admission call",
      },
      {
        name: "University of Milan",
        desc: "The university has an International Medical School. Confirm the current course structure, teaching language, non-EU application route and seat availability before applying.",
        img: UniversitiesInMilan,
        established: "1924",
        recognition: "Check course and latest NMC rules",
        duration: "Usually 6-year single-cycle; verify course",
        eligibility: "University criteria and entrance test apply",
        language: "Check current course information",
        lastDate: "Check the current admission call",
      },
      {
        name: "University of Padua",
        desc: "Review the university's Medicine and Surgery course catalogue and current admission call for the programme language, entrance requirements and places available to international applicants.",
        img: UniversityPadua,
        established: "1222",
        recognition: "Check course and latest NMC rules",
        duration: "Usually 6-year single-cycle; verify course",
        eligibility: "University criteria and entrance test apply",
        language: "Check current course information",
        lastDate: "Check the current admission call",
      },
      {
        name: "University of Pavia",
        desc: "An established university with international medical study options. Check the current course listing for language of instruction, admission test and seat allocation.",
        img: UniversityPavia,
        established: "1361",
        recognition: "Check course and latest NMC rules",
        duration: "Usually 6-year single-cycle; verify course",
        eligibility: "University criteria and entrance test apply",
        language: "Check current course information",
        lastDate: "Check the current admission call",
      },
      {
        name: "Sapienza University of Rome",
        desc: "A major public university in Rome. Verify the specific Medicine and Surgery course, language of instruction and international admission requirements for your intended intake.",
        img: UniversityRome,
        established: "1303",
        recognition: "Check course and latest NMC rules",
        duration: "Usually 6-year single-cycle; verify course",
        eligibility: "University criteria and entrance test apply",
        language: "Check current course information",
        lastDate: "Check the current admission call",
      },
       {
        name: "University of Turin",
        desc: "An established university to include in your research. Confirm whether the relevant Medicine and Surgery course is available in your preferred language and check its current admission notice.",
        img: UniversityTurin,
        established: "1404",
        recognition: "Check course and latest NMC rules",
        duration: "Usually 6-year single-cycle; verify course",
        eligibility: "University criteria and entrance test apply",
        language: "Check current course information",
        lastDate: "Check the current admission call",
      },
    ].map((uni, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left: Image + Description */}
          <div className="lg:w-1/2 p-6 flex flex-col sm:flex-row gap-5">
            <img
              src={uni.img}
              alt={uni.name}
              className="w-full sm:w-44 h-40 object-cover rounded-xl flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {uni.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {uni.desc}
              </p>
            </div>
          </div>

          {/* Right: Details Box */}
          <div className="lg:w-1/2 bg-gray-50 p-6 border-t lg:border-t-0 lg:border-l border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
              <div className="flex justify-between sm:block">
                <span className="text-gray-500 font-medium">Year Established</span>
                <p className="font-semibold text-gray-800">{uni.established}</p>
              </div>
              <div className="flex justify-between sm:block">
                <span className="text-gray-500 font-medium">Recognition / Indian practice</span>
                <p className="font-semibold text-gray-800">{uni.recognition}</p>
              </div>
              <div className="flex justify-between sm:block">
                <span className="text-gray-500 font-medium">Course Duration</span>
                <p className="font-semibold text-gray-800">{uni.duration}</p>
              </div>
              <div className="flex justify-between sm:block">
                <span className="text-gray-500 font-medium">Admission Requirements</span>
                <p className="font-semibold text-gray-800">{uni.eligibility}</p>
              </div>
              <div className="flex justify-between sm:block">
                <span className="text-gray-500 font-medium">Language of Study</span>
                <p className="font-semibold text-gray-800">{uni.language}</p>
              </div>
              <div className="flex justify-between sm:block">
                <span className="text-gray-500 font-medium">Application Deadline</span>
                <p className="font-semibold text-gray-800">{uni.lastDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <p className="mt-10 text-center text-gray-600 text-sm max-w-3xl mx-auto">
    Check each university's official course page and current admission call for fees, deadlines, language, eligibility and available seats. Recognition by a university or its inclusion in a directory does not by itself guarantee eligibility to practise in India; check the latest NMC rules for the specific programme.
  </p>
</div>

        {/* NEET Requirements */}
        {/* NEET Requirements */}
<div className="mb-20 bg-yellow-50 p-8 rounded-xl border border-yellow-200">
  <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
    NEET Requirements for MBBS in Italy
  </h2>

  <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center max-w-4xl mx-auto">
    NEET is an important consideration for Indian students planning to study medicine abroad.
  </p>

  <ul className="space-y-4 text-gray-700 text-lg max-w-4xl mx-auto">
    <li className="flex gap-3">
      <span className="text-yellow-600 font-bold">•</span>
      <span>
        The Italian university admission process and India’s eligibility requirements are separate regulatory systems. Therefore, students should not assume that an Italian university’s admission criteria automatically determine their eligibility under Indian regulations.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="text-yellow-600 font-bold">•</span>
      <span>
        The keyword <strong>“MBBS in Italy without NEET”</strong> is sometimes used online, but students should be cautious with this claim. Indian students should verify the latest NMC rules and NEET-related requirements applicable to studying medicine abroad before taking admission.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="text-yellow-600 font-bold">•</span>
      <span>
        NMC currently states that foreign medical qualifications and registration of foreign medical graduates are governed by applicable regulations, including the Foreign Medical Graduate Licentiate Regulations.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="text-yellow-600 font-bold">•</span>
      <span>
        The NMC also advises students to exercise due diligence regarding the duration, medium of instruction, curriculum, clinical training and internship arrangements of foreign medical programmes.
      </span>
    </li>
  </ul>

  <p className="mt-8 text-lg leading-relaxed text-gray-800 font-semibold text-center max-w-4xl mx-auto">
    Therefore, students should obtain proper regulatory guidance before choosing a programme advertised as  <strong>MBBS in Italy without NEET</strong>.
  </p>
</div>

        {/* Documents Required */}
        <div className="mb-20">
          <h2 id="italy-documents" className="scroll-mt-28 text-3xl font-bold text-blue-900 mb-6 text-center">
            Documents Required for MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            The exact documents required can differ depending on the university, admission route and student's nationality. However, students applying for medical education in Italy may generally need documents such as:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h5 className="text-lg font-semibold text-blue-800 mb-3">Academic Documents</h5>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Class 10 certificate and marksheet</li>
                <li>Class 12 certificate and marksheet</li>
                <li>Academic transcripts</li>
                <li>Birth certificate, where required</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h5 className="text-lg font-semibold text-blue-800 mb-3">Identity & Application</h5>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Valid passport</li>
                <li>Passport-size photographs</li>
                <li>Admission-test documentation</li>
                <li>University application documents</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h5 className="text-lg font-semibold text-blue-800 mb-3">Financial & Scholarship</h5>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Financial and family-income documents for scholarship applications</li>
                <li>Proof of language proficiency, where applicable</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h5 className="text-lg font-semibold text-blue-800 mb-3">Visa & Pre-enrolment</h5>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Documents required for Universitaly pre-enrolment</li>
                <li>Visa-related documents</li>
                <li>Legalisation, apostille or certified translations where required</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-gray-700">
            The exact <strong>MBBS in Italy requirements for Indian students </strong> should always be checked against the university's latest admission call and the applicable Italian and Indian regulations. For example, universities may require international students to complete pre-enrolment through Universitaly and present original documents after arrival.
          </p>
        </div>

        {/* Recognition */}
        {/* Recognition */}
{/* Recognition */}
<div className="mb-20 bg-blue-50 p-8 rounded-xl border border-blue-100">
  <h2 id="italy-recognition" className="scroll-mt-28 text-3xl font-bold text-blue-900 mb-6 text-center">
    Recognition of MBBS in Italy
  </h2>

  <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center max-w-4xl mx-auto">
    Recognition is one of the most important factors students should consider before choosing a foreign medical university.
  </p>

  <ul className="space-y-4 text-gray-700 text-lg max-w-4xl mx-auto">
    <li className="flex gap-3">
      <span className="text-blue-700 font-bold">•</span>
      <span>
        When researching <strong>MBBS in Italy</strong>, Indian students should not rely only on the general reputation of a university. They should verify whether the specific medical qualification and programme meet the applicable requirements for future medical registration in India.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="text-blue-700 font-bold">•</span>
      <span>
        The NMC’s Foreign Medical Graduate framework specifies requirements relating to the foreign medical qualification, duration, medium of instruction, curriculum, clinical training and internship.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="text-blue-700 font-bold">•</span>
      <span>
        NMC guidance also states that Indian/OCI candidates obtaining foreign undergraduate medical qualifications are subject to the applicable regulatory framework and registration process in India.
      </span>
    </li>

    {showMoreRecognition && (
      <>
        <li className="flex gap-3">
          <span className="text-blue-700 font-bold">•</span>
          <span>
            NMC guidance currently highlights, among other requirements, a minimum course duration of 54 months, English as the medium of instruction, and prescribed clinical/internship requirements under the applicable FMGL framework.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-blue-700 font-bold">•</span>
          <span>
            Students should therefore verify the <strong>recognition of MBBS in Italy</strong> at the programme level and review the latest NMC regulations before enrolment.
          </span>
        </li>
      </>
    )}
  </ul>

  <div className="text-center mt-6">
    <button
      onClick={() => setShowMoreRecognition(!showMoreRecognition)}
      className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
    >
      {showMoreRecognition ? "Show Less" : "Read More"}
    </button>
  </div>
</div>

        {/* MBBS Syllabus */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            MBBS Syllabus in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            For MBBS in Italy, students can choose from both public and private medical universities that offer Medicine and Surgery programmes, including selected English-taught medicine programmes in Italy.
          </p>
          <p className="text-lg text-gray-700 mb-6 text-center">
            The following are some of the main subjects covered as part of the MBBS program in Italy. These may vary somewhat depending on which university you select for the course.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 font-semibold">Year</th>
                  <th className="p-4 border border-gray-300 font-semibold">Key Subjects</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">1st Year</td>
                  <td className="p-4 border">Anatomy, Histology, Biology, Chemistry, Biochemistry, Medical Physics, Molecular Biology</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">2nd Year</td>
                  <td className="p-4 border">Anatomy, Physiology, Biochemistry, Genetics, Microbiology, Immunology, Molecular Medicine</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">3rd Year</td>
                  <td className="p-4 border">Pathology, Pharmacology, Pathophysiology, Medical Genetics, Internal Medicine, Microbiology, Diagnostic Medicine</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">4th Year</td>
                  <td className="p-4 border">Internal Medicine, General Surgery, Cardiology, Neurology, Psychiatry, Dermatology, Oncology, Clinical Pharmacology</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">5th Year</td>
                  <td className="p-4 border">Pediatrics, Obstetrics & Gynecology, Orthopedics, Emergency Medicine, Radiology, Anesthesiology, Geriatrics, Specialized Surgery</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">6th Year</td>
                  <td className="p-4 border">Advanced Internal Medicine, General Surgery, Emergency & Intensive Care, Clinical Training, Professional Internship, Research/Dissertation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Admission Intake & Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Admission Intake for MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            In Italy, the main MBBS intake usually takes place in September or October. Those intending to pursue MBBS in Italy should start the admission process a few months ahead of the academic year.
          </p>

          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Admission Timeline</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 font-semibold">Stage</th>
                  <th className="p-4 border border-gray-300 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border">University Research & Shortlisting</td>
                  <td className="p-4 border">September–December</td>
                </tr>
                <tr>
                  <td className="p-4 border">Eligibility & Documents</td>
                  <td className="p-4 border">October–February</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border">Private University Applications</td>
                  <td className="p-4 border">October–May*</td>
                </tr>
                <tr>
                  <td className="p-4 border">Private University Entrance Tests</td>
                  <td className="p-4 border">January–May*</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border">Admission Results</td>
                  <td className="p-4 border">February–June*</td>
                </tr>
                <tr>
                  <td className="p-4 border">Public University Admission</td>
                  <td className="p-4 border">As per official MUR schedule</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border">Scholarship Applications</td>
                  <td className="p-4 border">June–September*</td>
                </tr>
                <tr>
                  <td className="p-4 border">Universitaly Pre-Enrolment</td>
                  <td className="p-4 border">After Admission</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border">Student Visa Process</td>
                  <td className="p-4 border">July–October*</td>
                </tr>
                <tr>
                  <td className="p-4 border">Academic Session</td>
                  <td className="p-4 border">September–October</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            *Schedules can differ depending on the university and academic year.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Public Universities</h4>
              <p className="text-gray-700">
                Public medical universities adhere to the relevant national admission framework and the official MUR timetable.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Private Universities</h4>
              <p className="text-gray-700">
                Private medical universities usually hold their own entrance exams and admission processes, and their application windows may open earlier.
              </p>
            </div>
          </div>
        </div>

        {/* Career Prospects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Career Prospects after Completing an MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            An MBBS in Italy can give students a solid foundation for a career in medicine, research and healthcare. Once the six-year Medicine and Surgery programme is completed, graduates can consider a range of career paths.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Begin a Private Practice</h4>
              <p className="text-gray-700 text-sm">Set up a private medical practice after securing the necessary licence and registration.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Work in Clinics & Hospitals</h4>
              <p className="text-gray-700 text-sm">Take up clinical roles in hospitals, clinics and healthcare institutions, in line with local licensing rules.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Medical Research</h4>
              <p className="text-gray-700 text-sm">Become part of research teams, universities, hospitals or biomedical research institutes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Practise Medicine in Italy</h4>
              <p className="text-gray-700 text-sm">Finish the relevant professional licensing and registration process in order to practise in Italy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Pursue Further Studies in Europe</h4>
              <p className="text-gray-700 text-sm">Look into postgraduate studies and specialisation options in other European countries, subject to their specific requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Practise Medicine in India</h4>
              <p className="text-gray-700 text-sm">Indian graduates need to meet the applicable NMC/FMGL requirements and complete the licensing/registration process in force when they graduate.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Practise Medicine in the USA</h4>
              <p className="text-gray-700 text-sm">Graduates can follow the US medical licensing route, which includes the USMLE, along with other eligibility and residency requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border md:col-span-2 lg:col-span-2">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Launch Your Medical Career on a Global Scale</h4>
              <p className="text-gray-700 text-sm">Whether you go from Italy to India, Europe, or further afield — pairing your medical degree with the right licensing and career strategy can unlock a range of opportunities.</p>
            </div>
          </div>
        </div>

        {/* Language of Instruction */}
        <div className="mb-20 bg-blue-50 p-8 rounded-xl">
          <h2 id="italy-language" className="scroll-mt-28 text-3xl font-bold text-blue-900 mb-6 text-center">
            Language of Instruction for MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Certain medical universities in Italy provide Medicine and Surgery programmes taught in English, which makes them a good fit for international students.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-2">English</h4>
              <p className="text-gray-700">The main language used for lectures, examinations and academic teaching in English-taught programmes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-2">Italian</h4>
              <p className="text-gray-700">Essential for communicating with patients and for clinical training.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h4 className="text-xl font-bold text-blue-900 mb-2">Programme-Specific</h4>
              <p className="text-gray-700">Language requirements can differ from one university and course to another.</p>
            </div>
          </div>
          <p className="mt-6 text-center text-gray-700 font-medium">
            Note: Before applying, students should confirm the official language of instruction.
          </p>
        </div>

        {/* MBBS in India vs Italy */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
            MBBS in India vs. MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Studying MBBS abroad offers a completely different experience compared with pursuing MBBS in India. If you are considering studying MBBS in Italy, here are some of the main differences between the same programme as offered by the two countries—
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 font-semibold">Factor</th>
                  <th className="p-4 border border-gray-300 font-semibold">MBBS in India</th>
                  <th className="p-4 border border-gray-300 font-semibold">Medicine in Italy</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Course Duration</td>
                  <td className="p-4 border">Generally 5.5 years including internship</td>
                  <td className="p-4 border">Generally 6 years</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Admission</td>
                  <td className="p-4 border">NEET-UG</td>
                  <td className="p-4 border">National/university-specific admission route, depending on programme</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Medium of Teaching</td>
                  <td className="p-4 border">English / Regional language</td>
                  <td className="p-4 border">English or Italian, depending on programme</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Annual Tuition Fee</td>
                  <td className="p-4 border">10-40 L</td>
                  <td className="p-4 border">4-5 L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Scholarships</td>
                  <td className="p-4 border">Limited and institution/state dependent</td>
                  <td className="p-4 border">Regional and university scholarships available</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Clinical Exposure</td>
                  <td className="p-4 border">Primarily within India</td>
                  <td className="p-4 border">Clinical training within the Italian healthcare system</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">International Exposure</td>
                  <td className="p-4 border">Comparatively limited</td>
                  <td className="p-4 border">Strong European/international exposure</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Accreditation & Recognition</td>
                  <td className="p-4 border">NMC, WHO, FAIMER</td>
                  <td className="p-4 border">NMC, WHO, FAIMER, Ministry of Health, Italy and other global bodies</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Indian Licensing</td>
                  <td className="p-4 border">Direct Indian pathway after required internship</td>
                  <td className="p-4 border">Indian graduates must meet applicable NMC/FMGL and licensing requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Fee + Scholarships */}
        <div id="italy-fees-scholarships" className="grid md:grid-cols-2 gap-12 mb-20 scroll-mt-28">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Low MBBS Fee in Italy
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              For students, pursuing MBBS in Italy may prove more economical than many private medical colleges in India and other overseas destinations.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Public Universities:</strong> Tuition fees are usually tied to income and can be relatively affordable.
              </li>
              <li>
                <strong>Regional Scholarships:</strong> Qualifying international students may be granted tuition reductions and financial assistance.
              </li>
              <li>
                <strong>Private Universities:</strong> Fees tend to be higher and differ from one institution to another.
              </li>
              <li>
                <strong>Additional Costs:</strong> Students should also plan for accommodation, food, transport, insurance, visa and other living expenses.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Scholarships for Indian Students in Italy
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Indian students who decide to study MBBS in Italy can look into a range of scholarship and financial support options.
            </p>
            <h4 className="text-xl font-semibold text-blue-800 mb-3">Major Scholarship Options</h4>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Regional Scholarships (DSU):</strong> Need-based assistance provided through regional authorities, which may cover tuition benefits, accommodation, meals and financial support.
              </li>
              <li>
                <strong>University Scholarships:</strong> Some individual universities may provide merit-based awards or other forms of tuition-fee assistance.
              </li>
              <li>
                <strong>Government Scholarships (MAECI):</strong> These are scholarships provided by the Italian Government to qualifying international students under the relevant annual call. Eligibility requirements and the programmes covered differ from one call to another.
              </li>
            </ul>
            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">What Scholarships May Cover</h4>
            <p className="text-gray-700">
              Based on the scholarship and the student's eligibility, the benefits can include: Tuition Fee Reduction | Accommodation | Meals | Financial Grant | Other Student Benefits.
            </p>
          </div>
        </div>

        {/* Effect of NMC Gazette */}
        <div className="mb-20 bg-red-50 p-8 rounded-xl border border-red-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Effect of the NMC Gazette on MBBS in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            For Indian students intending to pursue MBBS in Italy and then return to practise medicine in India, the NMC Foreign Medical Graduate Licentiate (FMGL) Regulations are a key consideration.
          </p>
          <h4 className="text-xl font-semibold text-blue-800 mb-4">Key requirements include:</h4>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Course Duration</strong> – The medical programme must satisfy the applicable minimum duration requirements.
            </li>
            <li>
              <strong>Medium of Instruction</strong> – The programme must comply with the relevant NMC requirements for English-medium medical education.
            </li>
            <li>
              <strong>Internship & Clinical Training</strong> – Students are expected to complete the necessary clinical training and internship in line with applicable regulations.
            </li>
            <li>
              <strong>Licence to Practise</strong> – As stipulated by the applicable rules, the graduate must be able to obtain a medical licence in the country that awards the medical qualification.
            </li>
          </ul>
        </div>

        {/* Admission Procedure */}
        <div className="mb-20">
          <h2 id="italy-admission" className="scroll-mt-28 text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
            Admission Procedure
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-4xl mx-auto">
            The admission process for MBBS in Italy consists of several stages, such as eligibility assessment, entrance examination, university application, admission confirmation, Universitaly pre-enrolment and student visa processing.
          </p>

          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Step-by-Step Admission Procedure</h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                step: "1. Check Eligibility",
                desc: "Review the eligibility criteria for MBBS in Italy and confirm that you satisfy the academic, NEET and other relevant requirements for Indian students.",
              },
              {
                step: "2. Select the Right University",
                desc: "Shortlist appropriate medical universities in Italy according to course language, admission route, tuition fees, scholarships, location and eligibility.",
              },
              {
                step: "3. Prepare Required Documents",
                desc: "Get your academic certificates, marksheets, passport, NEET documents, photographs and other university-specific documents ready.",
              },
              {
                step: "4. Register for the Entrance Examination",
                desc: "For Medicine programmes taught in English, students may need to take the applicable IMAT exam for Indian students or a university-specific entrance examination, depending on the institution and the admission year.",
              },
              {
                step: "5. Apply to the University",
                desc: "Submit the university application before the prescribed deadline and provide all the required documents.",
              },
              {
                step: "6. Receive Admission / Eligibility Confirmation",
                desc: "Following a successful evaluation or entrance-test result, the university may grant an admission, eligibility or enrolment confirmation in line with its admission procedure.",
              },
              {
                step: "7. Apply for Scholarships",
                desc: "Students who qualify can independently apply for regional, university or other scholarship opportunities that are available.",
              },
              {
                step: "8. Complete Universitaly Pre-Enrolment",
                desc: "Students who need a visa typically complete the Universitaly pre-enrolment process once they have received the necessary university confirmation.",
              },
              {
                step: "9. Apply for an Italian Student Visa",
                desc: "Gather the required documents and apply for the long-stay student visa through the relevant Italian consular/VFS process in India.",
              },
              {
                step: "10. Travel to Italy & Complete Enrolment",
                desc: "Once the visa is approved, travel to Italy, complete the necessary residence formalities and finalise your university enrolment.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-2">{item.step}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center sm:px-8">
  <h4 className="mb-5 text-xl font-bold text-blue-900">Admission Flow</h4>
  <img
    src={Flowchart}
    alt="Admission Flow"
    className="mx-auto h-auto w-full max-w-3xl object-contain"
  />
</div>
        </div>

        {/* Cost of Living */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Cost of Living in Italy
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            For Indian students, the cost of pursuing MBBS in Italy covers accommodation, food, transportation, health insurance and everyday expenses. Costs differ based on the city and the lifestyle you choose.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 font-semibold">Expense</th>
                  <th className="p-4 border border-gray-300 font-semibold">Approx. Monthly Cost (€)</th>
                  <th className="p-4 border border-gray-300 font-semibold">Approx. Monthly Cost (₹)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border">Accommodation</td>
                  <td className="p-4 border">€250–€900</td>
                  <td className="p-4 border">₹27,100–₹97,560</td>
                </tr>
                <tr>
                  <td className="p-4 border">Food & Groceries</td>
                  <td className="p-4 border">€200–€350</td>
                  <td className="p-4 border">₹21,680–₹37,940</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border">Local Transport</td>
                  <td className="p-4 border">€30–€60</td>
                  <td className="p-4 border">₹3,250–₹6,500</td>
                </tr>
                <tr>
                  <td className="p-4 border">Mobile & Internet</td>
                  <td className="p-4 border">€20–€40</td>
                  <td className="p-4 border">₹2,170–₹4,340</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border">Personal Expenses</td>
                  <td className="p-4 border">€100–€200</td>
                  <td className="p-4 border">₹10,840–₹21,680</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-gray-700">
            <strong>Approximate Living Cost:</strong> Roughly ₹64,943–₹1,62,359 each month, varying by city and lifestyle. Students can lower their costs by using university housing, shared accommodation, and regional scholarship programs. Information about housing and student assistance is available through Italian universities and official portals.
          </p>
        </div>

        {/* FAQs */}
       <div className="mb-20">
  <h2 id="italy-faq" className="scroll-mt-28 text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
    Frequently Asked Questions About MBBS in Italy
  </h2>

  <div className="max-w-4xl mx-auto space-y-4">
    {/* FAQ Item 1 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
        Is Italy a Schengen Country?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
          Yes. Italy is a Schengen Country.
        </p>
      </div>
    </div>

    {/* FAQ Item 2 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
        Are there any scholarships for MBBS in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
            A number of Italian universities provide scholarships of up to 100% to students, awarded based on merit and financial need.
        </p>
      </div>
    </div>

    {/* FAQ Item 3 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
          What is the medium of teaching MBBS in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
          This course is conducted entirely in English.
        </p>
      </div>
    </div>

    {/* FAQ Item 4 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
          Is it possible to work while pursuing MBBS in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
        During their study program, students are permitted by the Italian government to work up to 20 hours per week.
        </p>
      </div>
    </div>

    {/* FAQ Item 5 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
          After completing MBBS in Italy, can I practice in India?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
          Yes. You can practice in India once you have passed the Foreign Medical Graduate Examination (FMGE) or the National Exit Test.
        </p>
      </div>
    </div>

    {/* FAQ Item 6 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
          Is NEET required to apply for MBBS in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
         To be eligible for studying MBBS in Italy, NEET is mandatory.
        </p>
      </div>
    </div>

    {/* FAQ Item 7 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
        Are medical programmes taught in English available in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
          Certain Italian universities provide English-taught Medicine and Surgery programmes to international students.
        </p>
      </div>
    </div>

    {/* FAQ Item 8 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
        Can Indian students obtain scholarships in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
            Students can look into regional, university, and other scholarships, depending on the eligibility criteria that apply.
        </p>
      </div>
    </div>

    {/* FAQ Item 9 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
        Is an MBBS earned in Italy recognised in India?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
          Before enrolling, students ought to check the particular university and programme against the most current NMC/FMGL requirements.
        </p>
      </div>
    </div>

    {/* FAQ Item 10 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          const arrow = e.currentTarget.querySelector("svg");
          content.classList.toggle("hidden");
          arrow.classList.toggle("rotate-180");
        }}
      >
        <h4 className="text-lg font-semibold text-blue-900 pr-4">
          What career paths are available after studying Medicine in Italy?
        </h4>
        <svg
          className="w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="hidden px-6 pb-6">
        <p className="text-gray-700 leading-relaxed">
          Graduates may pursue clinical practice, postgraduate studies, research, and healthcare roles, subject to licensing requirements.
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Italy;