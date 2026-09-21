

import React, { useState } from "react";
import RussiaFlag from "../../Images/country flag png/Nepal.svg";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import Kathmandu from "../../../src/Images/Kathmandu.jpg";

const Nepal = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const navigate = useNavigate();

  return (
    <>
         <Helmet>
                      <title> MBBS in Nepal for Indian Students | Fees & Admission Process </title>
                      <meta name="description" content="MBBS in Nepal with affordable fees and Indian syllabus. Get complete details on admission process, eligibility and top medical colleges." />
                      <meta name="keywords" content=" mbbs in nepal, nepal mbbs fees, study mbbs nepal, nepal medical colleges" />
                    </Helmet>
   
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://asmi.edu.kg/wp-content/uploads/slider2/DJI_0086.jpeg"
            alt="Nepal Landscape / Medical Campus"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN NEPAL
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
              src={RussiaFlag}
              alt="Nepal flag"
              className="w-32 md:w-40  shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Nepal 2026–2027
            </h2>
          </div>
        </div>

        {/* About Nepal + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Nepal
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Nepal has become one of the most preferred destinations for 
              Indian students who want to 
              {" "} 
              <button onClick={() => navigate("/")}
                       className=" hover:text-[#426a91] text-blue-600 font-bold transition-colors duration-200 cursor-pointer"
                       >
                         study MBBS abroad.
                    </button>
              {" "} 
              because of its quality
              education, affordable tuition fees, and culturally familiar environment.
              Located between India and China, Nepal offers a safe and student-friendly
              atmosphere along with globally recognised medical education. 
              Many students choose to {" "}<strong>study MBBS in Nepal</strong>{" "} because the education
              pattern, food, and lifestyle are very similar to India, making
              it easier for Indian students to adapt comfortably.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              One of the major benefits of {" "}<strong>MBBS admission in Nepal</strong>{" "} is the
              availability of {" "}<strong>affordable fees in MBBS abroad</strong>{" "} programs along
              with excellent clinical exposure. The country is home to several
              {" "}<strong>top medical universities in Nepal</strong>{" "} and reputed colleges that 
              provide modern infrastructure, experienced faculty, and 
              practical hospital training. Students studying in 
              {" "}<a
                href="#universities"
                className="font-bold text-blue-600 hover:underline cursor-pointer"
               >
                 MBBS universities in Nepal
               </a>{" "} 
               receive strong theoretical and hands-on 
              clinical education, helping them become skilled medical professionals.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Nepal is also known for having some of the {" "}<strong>top government medical 
                colleges in Nepal</strong>{" "} along with reputed private institutions. 
                The availability of {" "}<strong>top private and government college in Nepal</strong>{" "}
                options gives students flexibility according to their budget 
                and career goals. Apart from Nepal, other popular foreign 
                countries for MBBS abroad include Kyrgyzstan, Kazakhstan, 
                and Georgia, making Nepal one of the best countries for MBBS 
                abroad and home to some of the {" "}<strong>best medical colleges in abroad
                for Indian student</strong>{" "}.
              </p>
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
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Nepal_Patan_Mangal.jpg"
              alt="Patan Durbar Square, Nepal"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Nepal
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC & WHO approved</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate (40% reserved)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">
                      5.5 – 6 Years (including internship)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory for Indian students</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">
                      Universities Recognition
                    </td>
                    <td className="p-4">NMC & WHO-approved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              MBBS in Nepal for Indian Students
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              MBBS in Nepal is a preferred choice for Indian students due to
              high-quality education, modern facilities, practical training, and
              reasonable fees compared to private colleges in India.
            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The course duration is 5.5–6 years (4.5–5 years academic + 1
                year internship), with curriculum aligned to Indian standards,
                preparing students well for FMGE/NEXT. English-medium
                instruction removes language barriers. Nepal's climate is
                temperate with moderate conditions; winters can be cold (down to
                -20°C in higher areas), summers warm (up to +25°C). Hostels have
                heating systems for comfort. The culturally similar environment,
                safe surroundings, and low living costs make Nepal an ideal
                destination for Indian students.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* ==================== UNIVERSITIES GRID ==================== */}
        <div id="universities" className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Nepal
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nepalgunj Medical College",
                img: "https://www.edufever.com/wp-content/uploads/2022/08/Nepalgunj-Medical-College.webp",
              },
              {
                name: "Manipal College of Medical Sciences",
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Manipal_Teaching_Hospital.jpg",
              },
              {
                name: "Kathmandu Medical College",
                img: Kathmandu,
              },
              {
                name: "Lumbini Medical College",
                img: "https://flyfuture.in/admin/services/1658570838.jpg",
              },
              {
                name: "Devdaha Medical College and Research Institute",
                img: "https://ik.imagekit.io/lyzj6ywpw/main-images/devdaha-medical-college-and-research-institute/image1.jpg",
              },
              {
                name: "Chitwan Medical College",
                img: "https://mycareersview.com/afile/mcv16373_5fe0220b67856_chitawan.jpg",
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">
                    {uni.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Nepal 2026–2027
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Affordable & High-Quality Education
                </h5>
                <p className="text-gray-700">
                  World-class medical training at much lower cost than private
                  Indian colleges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. English-Medium Instruction
                </h5>
                <p className="text-gray-700">
                  No language barrier – ideal for Indian students.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. Similar Curriculum & Environment
                </h5>
                <p className="text-gray-700">
                  Education system aligned with India; culturally familiar and
                  safe.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. Indian Mess & Hostel Facilities
                </h5>
                <p className="text-gray-700">
                  Comfortable living with Indian food options in most colleges.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  5. No Donation / Capitation Fees
                </h5>
                <p className="text-gray-700">
                  Straightforward admission with only NEET required.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Nepal
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MBBS in Nepal is highly affordable for Indian students due to
              reasonable tuition fees and low living costs. No donation or
              capitation fees required. Total cost for the full course (tuition
              + hostel + food) typically ranges between ₹45 lakh to ₹65 lakh,
              depending on the university and facilities. Nepal government and
              universities provide subsidized structures, making it easier than
              many private colleges in India.
            </p>
          </div>
        </div>

        {/* ==================== FOOD & ACCOMMODATION ==================== */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Nepal
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Medical universities in Nepal offer comfortable, safe, and
                affordable hostel facilities specially designed for
                international students, including many from India.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>On-campus hostels available in most universities</li>
                <li>Rooms usually shared by 2–3 students</li>
                <li>Safe, well-maintained environment with security</li>
                <li>
                  Students can stay in hostels for the entire course duration
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Room Facilities
              </h4>
              <p>Fully furnished rooms include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Comfortable beds, mattress, blankets, bedsheets</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Common kitchens for self-cooking (popular for Indian meals)
                </li>
                <li>Many universities offer Indian mess/canteen facilities</li>
                <li>Indian restaurants and grocery stores nearby</li>
                <li>
                  Local Nepali food and international cuisines also available
                </li>
              </ul>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Laundry and Daily Facilities
              </h4>
              <p>
                Hostels provide washing machines/laundry rooms. Daily activities
                are easy to manage on campus.
              </p>

              <h4 className="text-2xl font-semibold mt-8 mb-4">
                Average Monthly Living Cost
              </h4>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Hostel: ₹8,000 – ₹18,000</li>
                <li>Food (mess + self-cooking): ₹8,000 – ₹15,000</li>
                <li>Miscellaneous: ₹3,000 – ₹7,000</li>
                <li>
                  <strong>Total:</strong> ≈ ₹20,000 – ₹40,000 (comfortable
                  budget)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================== ADMISSION PROCESS ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Admission Process for MBBS in Nepal 2026–2027
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The admission process for MBBS in Nepal is straightforward and
                student-friendly.
              </p>

              <div className="space-y-10">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 1
                  </h4>
                  <p>
                    Research and select a recognized medical university in
                    Nepal.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 2
                  </h4>
                  <p>
                    Check eligibility and fill out the university application
                    form online.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 3
                  </h4>
                  <p>
                    Submit required documents (marksheets, NEET scorecard,
                    passport, etc.).
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 4
                  </h4>
                  <p>Receive admission confirmation or invitation letter.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 5
                  </h4>
                  <p>
                    Apply for student visa at Nepal Embassy (if required for
                    Indian students – often simplified due to open border).
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Stage 6
                  </h4>
                  <p>
                    Travel to Nepal, complete university registration, and begin
                    MBBS program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== ELIGIBILITY & DOCUMENTS ==================== */}
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                  Eligibility Criteria for MBBS in Nepal
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>
                    Minimum 17 years old by 31st December of admission year
                  </li>
                  <li>Minimum 50% in 12th (Physics, Chemistry, Biology)</li>
                  <li>NEET qualification mandatory for Indian students</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                  Documents Required
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Admission application form</li>
                  <li>10th & 12th marksheets + certificates</li>
                  <li>NEET scorecard</li>
                  <li>Valid passport copy</li>
                  <li>Passport-size photographs</li>
                  <li>Medical fitness certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== COMPARISON TABLE ==================== */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              MBBS in Nepal vs MBBS in India – Quick Comparison (2026–2027)
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      Criteria
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in Nepal
                    </th>
                    <th className="p-4 border border-gray-300 text-center font-semibold">
                      MBBS in India
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">
                      Entrance Requirement
                    </td>
                    <td className="p-4 border">NEET qualified</td>
                    <td className="p-4 border">NEET + high cut-offs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Course Duration</td>
                    <td className="p-4 border">
                      5.5–6 years (incl. internship)
                    </td>
                    <td className="p-4 border">5.5 years + internship</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">Total Cost</td>
                    <td className="p-4 border">₹45–65 lakhs</td>
                    <td className="p-4 border">Private: ₹20–80+ lakhs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Seats Availability
                    </td>
                    <td className="p-4 border">
                      More seats for international/Indian students
                    </td>
                    <td className="p-4 border">Limited in govt colleges</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-medium">
                      Infrastructure & Exposure
                    </td>
                    <td className="p-4 border">
                      Modern hospitals, good clinical training
                    </td>
                    <td className="p-4 border">Varies widely</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ==================== FAQs ==================== */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Frequently Asked Questions – MBBS in Nepal
            </h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Can Indian students study MBBS in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, Indian students easily study MBBS in Nepal. Many
                  universities welcome Indian students, and the education system
                  is very similar to India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is MBBS in Nepal valid in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, degrees from NMC-recognized universities in Nepal are
                  valid in India. Students must clear FMGE/NEXT to practice in
                  India.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the total cost of MBBS in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  The total cost usually ranges between ₹45 lakh and ₹65 lakh
                  for the complete course, depending on the university and
                  facilities.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is NEET required for MBBS in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, NEET qualification is mandatory for Indian students
                  pursuing MBBS in Nepal.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  What is the duration of the MBBS course in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  The MBBS course duration in Nepal is generally 5.5 to 6 years,
                  including academic study and 1-year internship.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Are hostel and food facilities available for Indian students
                  in Nepal?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, most universities provide hostel facilities, Indian
                  mess/canteen services, and nearby Indian food options.
                </p>
              </details>

              <details className="bg-white p-6 rounded-xl shadow-sm border">
                <summary className="text-xl font-semibold text-blue-900 cursor-pointer">
                  Is studying MBBS in Nepal better than private medical colleges
                  in India?
                </summary>
                <p className="mt-4 text-gray-700">
                  Many students prefer Nepal due to similar education system,
                  familiar culture, easier admission, and better cost-to-quality
                  ratio compared to many private Indian colleges.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Floating Enroll Button */}
      </div>
    </div>
     </>
  );
};

export default Nepal;
