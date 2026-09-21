// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Eduhawk from "../assets/Eduhawk.png"; // ← adjust path if needed

// const Navbar = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMedicalOpen, setIsMedicalOpen] = useState(false);
//   const [isAbroadOpen, setIsAbroadOpen] = useState(false);
//   const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);
//   const [isTestsOpen, setIsTestsOpen] = useState(true);
//   const [openSection, setOpenSection] = useState(null);
//   // Mobile nested toggles
//   const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);
//   const [isBusinessOpen, setIsBusinessOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const abroadCountries = [
//     { name: "Russia", path: "russia" },
//     { name: "Bangladesh", path: "bangladesh" },
//     { name: "Nepal", path: "nepal" },
//     { name: "Kazakhstan", path: "kazakhstan" },
//     { name: "Kyrgyzstan", path: "kyrgyzstan" },
//     { name: "Uzbekistan", path: "uzbekistan" },
//     { name: "Tajikistan", path: "tajikistan" },
//     { name: "Egypt", path: "egypt" },
//     { name: "Georgia", path: "georgia" },
//     { name: "Vietnam", path: "vietnam" },
//   ];

//   const engineeringBranches = [
//     { name: "Computer Engineering", path: "computer-engineering" },
//     { name: "Mechanical Engineering", path: "mechanical-engineering" },
//     { name: "Civil Engineering", path: "civil-engineering" },
//     { name: "Electrical Engineering", path: "electrical-engineering" },
//     { name: "Electronics & Communication", path: "electronics-communication" },
//     { name: "Chemical Engineering", path: "chemical-engineering" },
//     { name: "Aerospace Engineering", path: "aerospace-engineering" },
//     { name: "Biomedical Engineering", path: "biomedical-engineering" },
//     { name: "Automobile Engineering", path: "automobile-engineering" },
//   ];

//   const businessCourses = [
//     { name: "MBA", path: "mba" },
//     { name: "MBS (Master of Business Studies)", path: "mbs" },
//     { name: "BBA", path: "bba" },
//     { name: "BBS", path: "bbs" },
//     { name: "Executive MBA", path: "executive-mba" },
//     { name: "International Business", path: "international-business" },
//     { name: "Marketing Management", path: "marketing-management" },
//     { name: "Human Resource Management", path: "hr-management" },
//     { name: "Finance & Accounting", path: "accounting-finance" },
//   ];

//   // English Language Tests with tooltips
//   const englishTests = [
//     {
//       name: "IELTS",
//       path: "ielts",
//       tip: "IELTS is a widely accepted English test for universities in the UK, Australia, Canada, and New Zealand.",
//     },
//     {
//       name: "TOEFL",
//       path: "toefl",
//       tip: "TOEFL measures academic English proficiency and is widely accepted by universities in the United States.",
//     },
//     {
//       name: "Duolingo",
//       path: "duolingo",
//       tip: "The Duolingo English Test can be taken online from home and is accepted by many universities.",
//     },
//     {
//       name: "PTE",
//       path: "pte",
//       tip: "PTE Academic is a computer-based English test with fast results, widely accepted in Australia, the UK, and Canada.",
//     },
//     {
//       name: "OET",
//       path: "oet",
//       tip: "OET is designed for doctors, nurses, pharmacists, and other healthcare professionals pursuing work or study abroad.",
//     },
//   ];

//   const foreignTests = [
//     {
//       name: "France",
//       path: "france",
//       tip: "French language proficiency tests (DELF, DALF, TCF, TEF) for study and work in France.",
//     },
//     {
//       name: "Germany",
//       path: "germany",
//       tip: "German language tests (TestDaF, Goethe-Zertifikat, DSH) required for universities in Germany.",
//     },
//     {
//       name: "Spanish",
//       path: "spanish",
//       tip: "Spanish language exams (DELE, SIELE) accepted by universities in Spain and Latin America.",
//     },
//   ];

//   const entranceTests = [
//     {
//       name: "GRE",
//       path: "gre",
//       tip: "GRE assesses verbal, quantitative, and analytical writing skills for graduate programs such as MS and PhD degrees.",
//     },
//     {
//       name: "GMAT",
//       path: "gmat",
//       tip: "GMAT is an important admissions test for MBA and other graduate business programs.",
//     },
//     {
//       name: "SAT",
//       path: "sat",
//       tip: "SAT is a common admissions test for undergraduate programs at colleges and universities in the United States.",
//     },
//     {
//       name: "ACT",
//       path: "act",
//       tip: "ACT is an alternative to the SAT for undergraduate admissions at universities in the United States.",
//     },
//     {
//       name: "CMAT",
//       path: "cmat",
//       tip: "CMAT is a common entrance test for MBA and PGDM programs at AICTE-approved institutes in India.",
//     },
//     {
//       name: "IMAT",
//       path: "imat",
//       tip: "IMAT is the admissions test for English-taught medicine and MBBS programs in Italy.",
//     },
//     {
//       name: "UCAT",
//       path: "ucat",
//       tip: "UCAT is an aptitude test for medicine and dentistry courses in the UK, Australia, and New Zealand.",
//     },
//     {
//       name: "MCAT",
//       path: "mcat",
//       tip: "MCAT is an admissions exam used by medical schools offering MD programs in the United States and Canada.",
//     },
//   ];

//   const toggleSection = (section) => {
//     setOpenSection((prev) => (prev === section ? null : section));
//   };

//   const isActive = (path) =>
//     path === "/"
//       ? location.pathname === "/"
//       : location.pathname.startsWith(path);

//   const navLinkClass = (path) =>
//     `${isActive(path) ? "text-[#F48C06]" : "text-[#2F327D]"} hover:text-[#F48C06] transition-colors relative group`;

//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>
//               <img
//                 src={Eduhawk}
//                 alt="Eduhawk Logo"
//                 className="h-10 sm:h-11 md:h-12 w-auto object-contain"
//               />
//             </div>
//           </div>

//           {/* ================= DESKTOP NAVIGATION ================= */}
//           <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium">
//             <a href="/" className={navLinkClass("/")}>
//               Home
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>
//             <a href="/about" className={navLinkClass("/about")}>
//               About
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>

//             {/* ========== STUDY ABROAD MEGA MENU ========== */}
//             <div className="relative group">
//               <button
//                 onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
//                 className={`${isActive("/study-abroad") ? "text-[#F48C06]" : "text-[#2F327D]"} hover:text-[#F48C06] transition-colors flex items-center gap-1 py-2`}
//                 aria-expanded={isStudyAbroadOpen}
//               >
//                 Study Abroad
//                 <svg
//                   className="w-4 h-4 transition-transform group-hover:rotate-180"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {/* Mega Menu Panel */}
//               <div
//                 className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1100px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden ${isStudyAbroadOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
//               >
//                 <div className="flex">
//                   {/* Left Content - 4 Columns */}
//                   <div className="flex-1 grid grid-cols-4 gap-0 p-5">
//                     {/* Column 1: Medical & Health */}
//                     <div className="pr-3 border-r border-gray-100">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
//                         <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                           MBBS Abroad
//                         </h4>
//                       </div>
//                       <ul className="space-y-0.5">
//                         {[
//                           { name: "Dentistry", path: "dentistry" },
//                           { name: "Nursing", path: "nursing" },
//                           { name: "Pharmacy", path: "pharmacy" },
//                           { name: "Physiotherapy", path: "physiotherapy" },
//                           { name: "Public Health", path: "public-health" },
//                           { name: "Biotechnology", path: "biotechnology" },
//                         ].map((course) => (
//                           <li key={course.path}>
//                             <a
//                               href={`/courses/${course.path}`}
//                               className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                             >
//                               <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3 h-3"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 {course.name}
//                               </span>
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Column 2: Tech, Business & More */}
//                     <div className="px-3 border-r border-gray-100">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
//                         <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                           Tech, Business & More
//                         </h4>
//                       </div>
//                       <ul className="space-y-0.5">
//                         {/* Engineering → UG & PG → Branches */}
//                         <li className="relative group/eng">
//                           <a
//                             href="/courses/engineering"
//                             className="flex items-center justify-between gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                           >
//                             <div className="flex items-center gap-2.5">
//                               <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3 h-3"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 Engineering
//                               </span>
//                             </div>
//                             <svg
//                               className="w-3.5 h-3.5 text-gray-400 group-hover/eng:text-[#F48C06] transition-transform group-hover/eng:rotate-90"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 5l7 7-7 7"
//                               />
//                             </svg>
//                           </a>
//                           {/* Level 1: UG & PG */}
//                           <div className="absolute left-full top-0 ml-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/eng:opacity-100 group-hover/eng:visible transition-all duration-200 z-50 py-2">
//                             {/* UG */}
//                             <div className="relative group/ug">
//                               <a
//                                 href="/courses/ug/engineering"
//                                 className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                               >
//                                 <span className="font-medium">
//                                   Undergraduate (UG)
//                                 </span>
//                                 <svg
//                                   className="w-3.5 h-3.5 text-gray-400 group-hover/ug:text-[#F48C06] transition-transform group-hover/ug:rotate-90"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </a>
//                               {/* Level 2: UG Branches */}
//                               <div className="absolute left-full top-0 ml-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/ug:opacity-100 group-hover/ug:visible transition-all duration-200 z-50 py-2">
//                                 {engineeringBranches.map((branch) => (
//                                   <a
//                                     key={`ug-${branch.path}`}
//                                     href={`/courses/ug/${branch.path}`}
//                                     className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] opacity-60"></span>
//                                     {branch.name}
//                                   </a>
//                                 ))}
//                               </div>
//                             </div>
//                             {/* PG */}
//                             <div className="relative group/pg">
//                               <a
//                                 href="/courses/pg/engineering"
//                                 className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                               >
//                                 <span className="font-medium">
//                                   Postgraduate (PG)
//                                 </span>
//                                 <svg
//                                   className="w-3.5 h-3.5 text-gray-400 group-hover/pg:text-[#F48C06] transition-transform group-hover/pg:rotate-90"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </a>
//                               {/* Level 2: PG Branches */}
//                               <div className="absolute left-full top-0 ml-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/pg:opacity-100 group-hover/pg:visible transition-all duration-200 z-50 py-2">
//                                 {engineeringBranches.map((branch) => (
//                                   <a
//                                     key={`pg-${branch.path}`}
//                                     href={`/courses/pg/${branch.path}`}
//                                     className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] opacity-60"></span>
//                                     {branch.name}
//                                   </a>
//                                 ))}
//                               </div>
//                             </div>
//                             <div className="border-t border-gray-100 my-1"></div>
//                             <a
//                               href="/courses/engineering"
//                               className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium text-[#F48C06] hover:bg-orange-50 transition-colors"
//                             >
//                               View All Engineering →
//                             </a>
//                           </div>
//                         </li>

//                         {/* Computer Science */}
//                         <li>
//                           <a
//                             href="/courses/computer-science"
//                             className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                           >
//                             <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                               <svg
//                                 className="w-3 h-3"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M9 5l7 7-7 7"
//                                 />
//                               </svg>
//                             </span>
//                             <span className="text-[13px] font-medium leading-tight">
//                               Computer Science
//                             </span>
//                           </a>
//                         </li>

//                         {/* Information Technology */}
//                         <li>
//                           <a
//                             href="/courses/information-technology"
//                             className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                           >
//                             <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                               <svg
//                                 className="w-3 h-3"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M9 5l7 7-7 7"
//                                 />
//                               </svg>
//                             </span>
//                             <span className="text-[13px] font-medium leading-tight">
//                               Information Technology
//                             </span>
//                           </a>
//                         </li>

//                         {/* Business Management with nested courses */}
//                         <li className="relative group/biz">
//                           <a
//                             href="/courses/business-management"
//                             className="flex items-center justify-between gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                           >
//                             <div className="flex items-center gap-2.5">
//                               <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3 h-3"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 Business Management
//                               </span>
//                             </div>
//                             <svg
//                               className="w-3.5 h-3.5 text-gray-400 group-hover/biz:text-[#F48C06] transition-transform group-hover/biz:rotate-90"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 5l7 7-7 7"
//                               />
//                             </svg>
//                           </a>
//                           {/* Nested Business Courses */}
//                           <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/biz:opacity-100 group-hover/biz:visible transition-all duration-200 z-50 py-2">
//                             {businessCourses.map((course) => (
//                               <a
//                                 key={course.path}
//                                 href={`/courses/${course.path}`}
//                                 className="flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                               >
//                                 <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] opacity-60"></span>
//                                 {course.name}
//                               </a>
//                             ))}
//                             <div className="border-t border-gray-100 my-1"></div>
//                             <a
//                               href="/courses/business-management"
//                               className="flex items-center gap-2.5 px-3 py-1.5 text-[13px] font-medium text-[#F48C06] hover:bg-orange-50 transition-colors"
//                             >
//                               View All Business Courses →
//                             </a>
//                           </div>
//                         </li>

//                         {/* Remaining items */}
//                         {[
//                           {
//                             name: "Hospitality Management",
//                             path: "hospitality-management",
//                           },
//                           { name: "Architecture", path: "architecture" },
//                           { name: "Law", path: "law" },
//                           { name: "Other Courses", path: "other-courses" },
//                         ].map((course) => (
//                           <li key={course.path}>
//                             <a
//                               href={`/courses/${course.path}`}
//                               className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                             >
//                               <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3 h-3"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 {course.name}
//                               </span>
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Column 3: Programs & More */}
//                     <div className="px-3 border-r border-gray-100">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
//                         <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                           Programs
//                         </h4>
//                       </div>
//                       <ul className="space-y-0.5">
//                         {[
//                           {
//                             name: "Language Courses",
//                             path: "/study-abroad/language-courses",
//                             icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
//                           },
//                           {
//                             name: "Summer Courses",
//                             path: "/study-abroad/summer-courses",
//                             icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
//                           },
//                           {
//                             name: "Winter Courses",
//                             path: "/study-abroad/winter-courses",
//                             icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
//                           },
//                           {
//                             name: "Working Professionals",
//                             path: "/study-abroad/working-professionals",
//                             icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
//                           },
//                           {
//                             name: "News",
//                             path: "/blog",
//                             icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
//                           },
//                         ].map((item) => (
//                           <li key={item.path}>
//                             <a
//                               href={item.path}
//                               className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                             >
//                               <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3.5 h-3.5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d={item.icon}
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 {item.name}
//                               </span>
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Column 4: Tests & Exams - WITH TOOLTIPS */}
//                     <div className="pl-3">
//                       <div className="pl-3">
//                         <div className="flex items-center gap-2 mb-3">
//                           <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
//                           <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                             Tests & Online Exams
//                           </h4>
//                         </div>

//                         <ul className="space-y-0.5">
//                           {/* ========== 1. English Online Exam (Dropdown) ========== */}
//                           <li>
//                             <button
//                               onClick={() => toggleSection("english")}
//                               className="w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                             >
//                               <div className="flex items-center gap-2.5">
//                                 <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                   <svg
//                                     className="w-3 h-3"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M9 5l7 7-7 7"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span className="text-[13px] font-semibold leading-tight">
//                                   English Online Exam
//                                 </span>
//                               </div>
//                               <svg
//                                 className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
//                                   openSection === "english" ? "rotate-180" : ""
//                                 }`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M19 9l-7 7-7-7"
//                                 />
//                               </svg>
//                             </button>

//                             {openSection === "english" && (
//                               <ul className="mt-1 ml-2 space-y-0.5 border-l border-orange-100 pl-2">
//                                 {englishTests.map((test) => (
//                                   <li key={test.path}>
//                                     <a
//                                       href={`/tests/${test.path}`}
//                                       title={test.tip}
//                                       className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                                     >
//                                       <span className="w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                         <svg
//                                           className="w-2.5 h-2.5"
//                                           fill="none"
//                                           stroke="currentColor"
//                                           viewBox="0 0 24 24"
//                                         >
//                                           <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M9 5l7 7-7 7"
//                                           />
//                                         </svg>
//                                       </span>
//                                       <span className="text-[13px] font-medium leading-tight">
//                                         {test.name}
//                                       </span>
//                                     </a>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </li>

//                           {/* ========== 2. Foreign Online Exam (Dropdown) ========== */}
//                           <li>
//                             <button
//                               onClick={() => toggleSection("foreign")}
//                               className="w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                             >
//                               <div className="flex items-center gap-2.5">
//                                 <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                   <svg
//                                     className="w-3 h-3"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M9 5l7 7-7 7"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span className="text-[13px] font-semibold leading-tight">
//                                   Foreign Online Exam
//                                 </span>
//                               </div>
//                               <svg
//                                 className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
//                                   openSection === "foreign" ? "rotate-180" : ""
//                                 }`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M19 9l-7 7-7-7"
//                                 />
//                               </svg>
//                             </button>

//                             {openSection === "foreign" && (
//                               <ul className="mt-1 ml-2 space-y-0.5 border-l border-orange-100 pl-2">
//                                 {foreignTests.map((test) => (
//                                   <li key={test.path}>
//                                     <a
//                                       href={`/tests/${test.path}`}
//                                       title={test.tip}
//                                       className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                                     >
//                                       <span className="w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                         <svg
//                                           className="w-2.5 h-2.5"
//                                           fill="none"
//                                           stroke="currentColor"
//                                           viewBox="0 0 24 24"
//                                         >
//                                           <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M9 5l7 7-7 7"
//                                           />
//                                         </svg>
//                                       </span>
//                                       <span className="text-[13px] font-medium leading-tight">
//                                         {test.name}
//                                       </span>
//                                     </a>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </li>

//                           {/* ========== 3. Entrance & Academic Tests (Dropdown) ========== */}
//                           <li>
//                             <button
//                               onClick={() => toggleSection("entrance")}
//                               className="w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                             >
//                               <div className="flex items-center gap-2.5">
//                                 <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                   <svg
//                                     className="w-3 h-3"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M9 5l7 7-7 7"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span className="text-[13px] font-semibold leading-tight">
//                                   Entrance & Academic Tests
//                                 </span>
//                               </div>
//                               <svg
//                                 className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
//                                   openSection === "entrance" ? "rotate-180" : ""
//                                 }`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M19 9l-7 7-7-7"
//                                 />
//                               </svg>
//                             </button>

//                             {openSection === "entrance" && (
//                               <ul className="mt-1 ml-2 space-y-0.5 border-l border-orange-100 pl-2">
//                                 {entranceTests.map((test) => (
//                                   <li key={test.path}>
//                                     <a
//                                       href={`/tests/${test.path}`}
//                                       title={test.tip}
//                                       className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                                     >
//                                       <span className="w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                         <svg
//                                           className="w-2.5 h-2.5"
//                                           fill="none"
//                                           stroke="currentColor"
//                                           viewBox="0 0 24 24"
//                                         >
//                                           <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M9 5l7 7-7 7"
//                                           />
//                                         </svg>
//                                       </span>
//                                       <span className="text-[13px] font-medium leading-tight">
//                                         {test.name}
//                                       </span>
//                                     </a>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </li>

//                           {/* Which Test Do I Need? */}
//                           <li className="mt-3">
//                             <a
//                               href="/tests/which-test"
//                               title="Not sure which test you need? Find the best test for your study goals here."
//                               className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#F48C06] font-semibold hover:bg-orange-50 transition-colors group/item"
//                             >
//                               <span className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3.5 h-3.5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 Which Test Do I Need?
//                               </span>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>

//                       {openSection === "legacy" && (
//                         <ul className="space-y-0.5">
//                           {/* ========== 1. English Online Exam ========== */}
//                           <li className="px-2 pt-1 pb-1">
//                             <div className="flex items-center gap-2 mb-1.5">
//                               <span className="w-1 h-1 rounded-full bg-[#F48C06]"></span>
//                               <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
//                                 English Online Exam
//                               </span>
//                             </div>
//                           </li>

//                           {englishTests.map((test) => (
//                             <li key={test.path}>
//                               <a
//                                 href={`/tests/${test.path}`}
//                                 title={test.tip}
//                                 className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                               >
//                                 <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                   <svg
//                                     className="w-3 h-3"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M9 5l7 7-7 7"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span className="text-[13px] font-medium leading-tight">
//                                   {test.name}
//                                 </span>
//                               </a>
//                             </li>
//                           ))}

//                           {/* Divider */}
//                           <li className="my-3 px-2">
//                             <div className="border-t border-gray-200"></div>
//                           </li>

//                           {/* ========== 2. Foreign Online Exam ========== */}
//                           <li className="px-2 pt-1 pb-1">
//                             <div className="flex items-center gap-2 mb-1.5">
//                               <span className="w-1 h-1 rounded-full bg-[#F48C06]"></span>
//                               <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
//                                 Foreign Online Exam
//                               </span>
//                             </div>
//                           </li>

//                           {foreignTests.map((test) => (
//                             <li key={test.path}>
//                               <a
//                                 href={`/tests/${test.path}`}
//                                 title={test.tip}
//                                 className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                               >
//                                 <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                   <svg
//                                     className="w-3 h-3"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M9 5l7 7-7 7"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span className="text-[13px] font-medium leading-tight">
//                                   {test.name}
//                                 </span>
//                               </a>
//                             </li>
//                           ))}

//                           {/* Divider */}
//                           <li className="my-3 px-2">
//                             <div className="border-t border-gray-200"></div>
//                           </li>

//                           {/* ========== 3. Entrance & Academic Tests ========== */}
//                           <li className="px-2 pt-1 pb-1">
//                             <div className="flex items-center gap-2 mb-1.5">
//                               <span className="w-1 h-1 rounded-full bg-[#F48C06]"></span>
//                               <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
//                                 Entrance & Academic Tests
//                               </span>
//                             </div>
//                           </li>

//                           {entranceTests.map((test) => (
//                             <li key={test.path}>
//                               <a
//                                 href={`/tests/${test.path}`}
//                                 title={test.tip}
//                                 className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
//                               >
//                                 <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                   <svg
//                                     className="w-3 h-3"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M9 5l7 7-7 7"
//                                     />
//                                   </svg>
//                                 </span>
//                                 <span className="text-[13px] font-medium leading-tight">
//                                   {test.name}
//                                 </span>
//                               </a>
//                             </li>
//                           ))}

//                           {/* Which Test Do I Need? */}
//                           <li className="mt-3">
//                             <a
//                               href="/tests/which-test"
//                               title="Not sure which test you need? Find the best test for your study goals here."
//                               className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#F48C06] font-semibold hover:bg-orange-50 transition-colors group/item"
//                             >
//                               <span className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
//                                 <svg
//                                   className="w-3.5 h-3.5"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                                   />
//                                 </svg>
//                               </span>
//                               <span className="text-[13px] font-medium leading-tight">
//                                 Which Test Do I Need?
//                               </span>
//                             </a>
//                           </li>
//                         </ul>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right Promo Card */}
//                   <div className="w-[200px] bg-gradient-to-b from-[#1e3a5f] to-[#0f172a] p-5 flex flex-col justify-between text-white shrink-0">
//                     <div>
//                       <span className="inline-block px-2.5 py-1 bg-[#F48C06] text-white text-[10px] font-bold rounded-full uppercase tracking-wide mb-4">
//                         Free
//                       </span>
//                       <h3 className="text-[15px] font-semibold leading-snug mb-2">
//                         Not sure where to start?
//                       </h3>
//                       <p className="text-sm text-gray-300 leading-relaxed">
//                         Get a free profile evaluation from an Eduhawk
//                         counsellor.
//                       </p>
//                     </div>
//                     <a
//                       href="/contact"
//                       className="mt-6 block w-full text-center bg-[#F48C06] hover:bg-[#e07b00] text-white font-semibold text-sm py-2.5 px-4 rounded-full transition-colors"
//                     >
//                       Book free session
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Medical Colleges */}
//             <div className="relative group">
//               <button
//                 onClick={() => setIsMedicalOpen(!isMedicalOpen)}
//                 className={`${isActive("/allcollege") || isActive("/mbbsabroad") ? "text-[#F48C06]" : "text-[#2F327D]"} hover:text-[#F48C06] transition-colors flex items-center gap-1`}
//                 aria-expanded={isMedicalOpen}
//               >
//                 Medical Colleges
//                 <svg
//                   className="w-4 h-4 transition-transform group-hover:rotate-180"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 border border-gray-200 z-50 ${isMedicalOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
//               >
//                 <a
//                   href="/allcollege"
//                   className="block px-5 py-2.5 text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                 >
//                   MBBS India
//                 </a>
//                 <div className="border-t border-gray-100 my-1"></div>
//                 <div className="relative group/sub">
//                   <div className="px-5 py-2.5 text-[#F48C06] font-semibold flex justify-between items-center hover:bg-orange-50 cursor-pointer">
//                     <span>MBBS Abroad</span>
//                     <svg
//                       className="w-4 h-4 transition-transform group-hover/sub:rotate-180"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                   <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-200 max-h-[70vh] overflow-y-auto z-50">
//                     {abroadCountries.map((country) => (
//                       <a
//                         key={country.path}
//                         href={`/mbbsabroad/${country.path}`}
//                         className="block px-5 py-2.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
//                       >
//                         {country.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <a href="/blog" className={navLinkClass("/blog")}>
//               Our Blog
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>
//             <a href="/services" className={navLinkClass("/services")}>
//               Services
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>
//             <a
//               href="/contact"
//               className={`${navLinkClass("/contact")} whitespace-nowrap`}
//             >
//               Contact Us
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
//             </a>
//           </nav>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-[#2F327D] focus:outline-none"
//             onClick={toggleMobileMenu}
//             aria-label="Toggle menu"
//           >
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   isMobileMenuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* ================= MOBILE MENU ================= */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden py-4 border-t bg-white max-h-[80vh] overflow-y-auto">
//             <div className="flex flex-col divide-y divide-gray-100 text-[15px] font-medium">
//               <a href="/" className={`${navLinkClass("/")} block py-4 px-5`}>
//                 Home
//               </a>
//               <a
//                 href="/about"
//                 className={`${navLinkClass("/about")} block py-4 px-5`}
//               >
//                 About
//               </a>

//               {/* Study Abroad Accordion */}
//               <div>
//                 <button
//                   className={`w-full flex justify-between items-center py-4 px-5 ${isActive("/study-abroad") ? "text-[#F48C06]" : "text-[#2F327D]"}`}
//                   onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
//                 >
//                   <span>Study Abroad</span>
//                   <svg
//                     className={`w-5 h-5 transition-transform ${
//                       isStudyAbroadOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {isStudyAbroadOpen && (
//                   <div className="bg-gray-50 pb-3">
//                     {/* Medical & Health */}
//                     <p className="px-5 pt-3 pb-1 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                       Medical & Health
//                     </p>
//                     {[
//                       "Medical Abroad",
//                       "Dentistry",
//                       "Nursing",
//                       "Pharmacy",
//                       "Physiotherapy",
//                       "Public Health",
//                       "Biotechnology",
//                     ].map((name) => (
//                       <a
//                         key={name}
//                         href={`/courses/${name
//                           .toLowerCase()
//                           .replace(/ /g, "-")}`}
//                         className="block py-2.5 px-8 text-[#2F327D]"
//                       >
//                         {name}
//                       </a>
//                     ))}

//                     {/* Tech, Business & More */}
//                     <p className="px-5 pt-4 pb-1 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                       Tech, Business & More
//                     </p>

//                     {/* Engineering Accordion - UG & PG */}
//                     <div>
//                       <button
//                         className="w-full flex justify-between items-center py-2.5 px-8 text-[#2F327D]"
//                         onClick={() => setIsEngineeringOpen(!isEngineeringOpen)}
//                       >
//                         <span>Engineering</span>
//                         <svg
//                           className={`w-4 h-4 transition-transform ${
//                             isEngineeringOpen ? "rotate-180" : ""
//                           }`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                       {isEngineeringOpen && (
//                         <div className="bg-gray-100">
//                           <p className="px-12 pt-2 pb-1 text-[11px] font-semibold text-gray-500 uppercase">
//                             Undergraduate (UG)
//                           </p>
//                           {engineeringBranches.map((b) => (
//                             <a
//                               key={`ug-${b.path}`}
//                               href={`/courses/ug/${b.path}`}
//                               className="block py-2 px-14 text-sm text-[#2F327D]"
//                             >
//                               {b.name}
//                             </a>
//                           ))}
//                           <p className="px-12 pt-3 pb-1 text-[11px] font-semibold text-gray-500 uppercase">
//                             Postgraduate (PG)
//                           </p>
//                           {engineeringBranches.map((b) => (
//                             <a
//                               key={`pg-${b.path}`}
//                               href={`/courses/pg/${b.path}`}
//                               className="block py-2 px-14 text-sm text-[#2F327D]"
//                             >
//                               {b.name}
//                             </a>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <a
//                       href="/courses/computer-science"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       Computer Science
//                     </a>
//                     <a
//                       href="/courses/information-technology"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       Information Technology
//                     </a>

//                     {/* Business Management Accordion */}
//                     <div>
//                       <button
//                         className="w-full flex justify-between items-center py-2.5 px-8 text-[#2F327D]"
//                         onClick={() => setIsBusinessOpen(!isBusinessOpen)}
//                       >
//                         <span>Business Management</span>
//                         <svg
//                           className={`w-4 h-4 transition-transform ${
//                             isBusinessOpen ? "rotate-180" : ""
//                           }`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                       {isBusinessOpen && (
//                         <div className="bg-gray-100">
//                           {businessCourses.map((c) => (
//                             <a
//                               key={c.path}
//                               href={`/courses/${c.path}`}
//                               className="block py-2 px-12 text-sm text-[#2F327D]"
//                             >
//                               {c.name}
//                             </a>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     {[
//                       "Hospitality Management",
//                       "Architecture",
//                       "Law",
//                       "Other Courses",
//                     ].map((name) => (
//                       <a
//                         key={name}
//                         href={`/courses/${name
//                           .toLowerCase()
//                           .replace(/ & /g, "-")
//                           .replace(/ /g, "-")}`}
//                         className="block py-2.5 px-8 text-[#2F327D]"
//                       >
//                         {name}
//                       </a>
//                     ))}

//                     {/* Programs */}
//                     <p className="px-5 pt-4 pb-1 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
//                       Programs & More
//                     </p>
//                     <a
//                       href="/study-abroad/language-courses"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       Language Courses
//                     </a>
//                     <a
//                       href="/study-abroad/summer-courses"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       Summer Courses
//                     </a>
//                     <a
//                       href="/study-abroad/winter-courses"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       Winter Courses
//                     </a>
//                     <a
//                       href="/study-abroad/working-professionals"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       Working Professionals
//                     </a>
//                     <a
//                       href="/blog"
//                       className="block py-2.5 px-8 text-[#2F327D]"
//                     >
//                       News
//                     </a>

//                     {/* Tests & Exams */}
//                     <button
//                       className="w-full flex justify-between items-center px-5 pt-4 pb-2 text-left font-serif text-sm font-semibold text-[#2F327D]"
//                       onClick={() => setIsTestsOpen(!isTestsOpen)}
//                       aria-expanded={isTestsOpen}
//                     >
//                       <span>Tests & Exams</span>
//                       <svg
//                         className={`w-4 h-4 transition-transform ${
//                           isTestsOpen ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>

//                     {isTestsOpen && (
//                       <div className="pb-2">
//                         {/* English Language Tests */}
//                         <button
//                           className="w-full flex justify-between items-center px-8 pt-2 pb-1 text-left font-serif text-sm font-semibold text-[#2F327D]"
//                           onClick={() => toggleSection("english")}
//                           aria-expanded={openSection === "english"}
//                         >
//                           <span>English Language Tests</span>
//                           <span className="text-[#F48C06]">
//                             {openSection === "english" ? "−" : "+"}
//                           </span>
//                         </button>
//                         {openSection === "english" &&
//                           englishTests.map((test) => (
//                             <a
//                               key={test.path}
//                               href={`/tests/${test.path}`}
//                               title={test.tip}
//                               className="block py-2 px-10 text-[#2F327D]"
//                             >
//                               {test.name}
//                             </a>
//                           ))}

//                         {/* Foreign Language Tests */}
//                         <button
//                           className="w-full flex justify-between items-center px-8 pt-3 pb-1 text-left font-serif text-sm font-semibold text-[#2F327D]"
//                           onClick={() => toggleSection("foreign")}
//                           aria-expanded={openSection === "foreign"}
//                         >
//                           <span>Foreign Language Tests</span>
//                           <span className="text-[#F48C06]">
//                             {openSection === "foreign" ? "−" : "+"}
//                           </span>
//                         </button>
//                         {openSection === "foreign" &&
//                           foreignTests.map((test) => (
//                             <a
//                               key={test.path}
//                               href={`/tests/${test.path}`}
//                               title={test.tip}
//                               className="block py-2 px-10 text-[#2F327D]"
//                             >
//                               {test.name}
//                             </a>
//                           ))}

//                         {/* Entrance & Academic Tests */}
//                         <button
//                           className="w-full flex justify-between items-center px-8 pt-3 pb-1 text-left font-serif text-sm font-semibold text-[#2F327D]"
//                           onClick={() => toggleSection("entrance")}
//                           aria-expanded={openSection === "entrance"}
//                         >
//                           <span>Entrance & Academic Tests</span>
//                           <span className="text-[#F48C06]">
//                             {openSection === "entrance" ? "−" : "+"}
//                           </span>
//                         </button>
//                         {openSection === "entrance" &&
//                           entranceTests.map((test) => (
//                             <a
//                               key={test.path}
//                               href={`/tests/${test.path}`}
//                               title={test.tip}
//                               className="block py-2 px-10 text-[#2F327D]"
//                             >
//                               {test.name}
//                             </a>
//                           ))}

//                         <a
//                           href="/tests/which-test"
//                           title="Not sure which test you need? Find the best test for your study goals here."
//                           className="block py-2.5 px-8 mt-1 text-[#F48C06] font-semibold"
//                         >
//                           Which Test Do I Need?
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Medical Colleges Mobile */}
//               <div>
//                 <button
//                   className={`w-full flex justify-between items-center py-4 px-5 ${isActive("/allcollege") || isActive("/mbbsabroad") ? "text-[#F48C06]" : "text-[#2F327D]"}`}
//                   onClick={() => setIsMedicalOpen(!isMedicalOpen)}
//                 >
//                   <span>Medical Colleges</span>
//                   <svg
//                     className={`w-5 h-5 transition-transform ${
//                       isMedicalOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {isMedicalOpen && (
//                   <div className="bg-gray-50">
//                     <a
//                       href="/allcollege"
//                       className="block py-3 px-10 text-[#2F327D]"
//                     >
//                       MBBS India
//                     </a>
//                     <button
//                       className="w-full flex justify-between items-center py-3 px-10 text-[#F48C06] font-semibold"
//                       onClick={() => setIsAbroadOpen(!isAbroadOpen)}
//                     >
//                       <span>MBBS Abroad</span>
//                       <svg
//                         className={`w-4 h-4 transition-transform ${
//                           isAbroadOpen ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                     {isAbroadOpen && (
//                       <div className="bg-gray-100">
//                         {abroadCountries.map((c) => (
//                           <a
//                             key={c.path}
//                             href={`/mbbsabroad/${c.path}`}
//                             className="block py-2.5 px-14 text-sm text-[#2F327D]"
//                           >
//                             {c.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <a
//                 href="/blog"
//                 className={`${navLinkClass("/blog")} block py-4 px-5`}
//               >
//                 Our Blog
//               </a>
//               <a
//                 href="/services"
//                 className={`${navLinkClass("/services")} block py-4 px-5`}
//               >
//                 Services
//               </a>
//               <a
//                 href="/contact"
//                 className={`${navLinkClass("/contact")} block py-4 px-5`}
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Eduhawk from "../assets/Eduhawk.png"; // ← adjust path if needed

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);
  const [isAbroadOpen, setIsAbroadOpen] = useState(false);
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);
  const [isTestsOpen, setIsTestsOpen] = useState(true);
  const [openSection, setOpenSection] = useState(null);
  // Mobile nested toggles
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const abroadCountries = [
    { name: "Russia", path: "russia" },
    { name: "Bangladesh", path: "bangladesh" },
    { name: "Nepal", path: "nepal" },
    { name: "Kazakhstan", path: "kazakhstan" },
    { name: "Kyrgyzstan", path: "kyrgyzstan" },
    { name: "Uzbekistan", path: "uzbekistan" },
    { name: "Tajikistan", path: "tajikistan" },
    { name: "Egypt", path: "egypt" },
    { name: "Georgia", path: "georgia" },
    { name: "Vietnam", path: "vietnam" },
  ];

  const engineeringBranches = [
    { name: "Computer Engineering", path: "computer-engineering" },
    { name: "Mechanical Engineering", path: "mechanical-engineering" },
    { name: "Civil Engineering", path: "civil-engineering" },
    { name: "Electrical Engineering", path: "electrical-engineering" },
    { name: "Electronics & Communication", path: "electronics-communication" },
    { name: "Chemical Engineering", path: "chemical-engineering" },
    { name: "Aerospace Engineering", path: "aerospace-engineering" },
    { name: "Biomedical Engineering", path: "biomedical-engineering" },
    { name: "Automobile Engineering", path: "automobile-engineering" },
  ];

  const businessCourses = [
    { name: "MBA", path: "mba" },
    { name: "MBS (Master of Business Studies)", path: "mbs" },
    { name: "BBA", path: "bba" },
    { name: "BBS", path: "bbs" },
    { name: "Executive MBA", path: "executive-mba" },
    { name: "International Business", path: "international-business" },
    { name: "Marketing Management", path: "marketing-management" },
    { name: "Human Resource Management", path: "hr-management" },
    { name: "Finance & Accounting", path: "accounting-finance" },
  ];

  // English Language Tests with tooltips
  const englishTests = [
    {
      name: "IELTS",
      path: "ielts",
      tip: "IELTS is a widely accepted English test for universities in the UK, Australia, Canada, and New Zealand.",
    },
    {
      name: "TOEFL",
      path: "toefl",
      tip: "TOEFL measures academic English proficiency and is widely accepted by universities in the United States.",
    },
    {
      name: "Duolingo",
      path: "duolingo",
      tip: "The Duolingo English Test can be taken online from home and is accepted by many universities.",
    },
    {
      name: "PTE",
      path: "pte",
      tip: "PTE Academic is a computer-based English test with fast results, widely accepted in Australia, the UK, and Canada.",
    },
    {
      name: "OET",
      path: "oet",
      tip: "OET is designed for doctors, nurses, pharmacists, and other healthcare professionals pursuing work or study abroad.",
    },
  ];

  const foreignTests = [
    {
      name: "France",
      path: "france",
      tip: "French language proficiency tests (DELF, DALF, TCF, TEF) for study and work in France.",
    },
    {
      name: "Germany",
      path: "germany",
      tip: "German language tests (TestDaF, Goethe-Zertifikat, DSH) required for universities in Germany.",
    },
    {
      name: "Spanish",
      path: "spanish",
      tip: "Spanish language exams (DELE, SIELE) accepted by universities in Spain and Latin America.",
    },
  ];

  const entranceTests = [
    {
      name: "GRE",
      path: "gre",
      tip: "GRE assesses verbal, quantitative, and analytical writing skills for graduate programs such as MS and PhD degrees.",
    },
    {
      name: "GMAT",
      path: "gmat",
      tip: "GMAT is an important admissions test for MBA and other graduate business programs.",
    },
    {
      name: "SAT",
      path: "sat",
      tip: "SAT is a common admissions test for undergraduate programs at colleges and universities in the United States.",
    },
    {
      name: "ACT",
      path: "act",
      tip: "ACT is an alternative to the SAT for undergraduate admissions at universities in the United States.",
    },
    {
      name: "CMAT",
      path: "cmat",
      tip: "CMAT is a common entrance test for MBA and PGDM programs at AICTE-approved institutes in India.",
    },
    {
      name: "IMAT",
      path: "imat",
      tip: "IMAT is the admissions test for English-taught medicine and MBBS programs in Italy.",
    },
    {
      name: "UCAT",
      path: "ucat",
      tip: "UCAT is an aptitude test for medicine and dentistry courses in the UK, Australia, and New Zealand.",
    },
    {
      name: "MCAT",
      path: "mcat",
      tip: "MCAT is an admissions exam used by medical schools offering MD programs in the United States and Canada.",
    },
  ];

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const navLinkClass = (path) =>
    `${isActive(path) ? "text-[#F48C06]" : "text-[#2F327D]"} hover:text-[#F48C06] transition-colors relative group`;

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#65DAFF]/30 to-[#F48C06]/20 rounded-full blur-xl opacity-60 -z-10"></div>
              <img
                src={Eduhawk}
                alt="Eduhawk Logo"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium">
            <a href="/" className={navLinkClass("/")}>
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/about" className={navLinkClass("/about")}>
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* ========== STUDY ABROAD MEGA MENU ========== */}
            <div className="relative group">
              <button
                onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                className={`${isActive("/study-abroad") ? "text-[#F48C06]" : "text-[#2F327D]"} hover:text-[#F48C06] transition-colors flex items-center gap-1 py-2`}
                aria-expanded={isStudyAbroadOpen}
              >
                Study Abroad
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega Menu Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1100px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden ${isStudyAbroadOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
              >
                <div className="flex">
                  {/* Left Content - 4 Columns */}
                  <div className="flex-1 grid grid-cols-4 gap-0 p-5">
                    {/* Column 1: Medical & Health */}
                    <div className="pr-3 border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
                        <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                          MBBS Abroad
                        </h4>
                      </div>
                      <ul className="space-y-0.5">
                        {[
                          { name: "Dentistry", path: "dentistry" },
                          { name: "Nursing", path: "nursing" },
                          { name: "Pharmacy", path: "pharmacy" },
                          { name: "Physiotherapy", path: "physiotherapy" },
                          { name: "Public Health", path: "public-health" },
                          { name: "Biotechnology", path: "biotechnology" },
                        ].map((course) => (
                          <li key={course.path}>
                            <a
                              href={`/courses/${course.path}`}
                              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                            >
                              <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                {course.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Tech, Business & More */}
                    <div className="px-3 border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
                        <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                          Tech, Business & More
                        </h4>
                      </div>
                      <ul className="space-y-0.5">
                        {/* Engineering → UG & PG → Branches */}
                        <li className="relative group/eng">
                          <a
                            href="/courses/engineering"
                            className="flex items-center justify-between gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                Engineering
                              </span>
                            </div>
                            <svg
                              className="w-3.5 h-3.5 text-gray-400 group-hover/eng:text-[#F48C06] transition-transform group-hover/eng:rotate-90"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                          {/* Level 1: UG & PG */}
                          <div className="absolute left-full top-0 ml-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/eng:opacity-100 group-hover/eng:visible transition-all duration-200 z-50 py-2">
                            {/* UG */}
                            <div className="relative group/ug">
                              <a
                                href="/courses/ug/engineering"
                                className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                              >
                                <span className="font-medium">
                                  Undergraduate (UG)
                                </span>
                                <svg
                                  className="w-3.5 h-3.5 text-gray-400 group-hover/ug:text-[#F48C06] transition-transform group-hover/ug:rotate-90"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </a>
                              {/* Level 2: UG Branches */}
                              <div className="absolute left-full top-0 ml-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/ug:opacity-100 group-hover/ug:visible transition-all duration-200 z-50 py-2">
                                {engineeringBranches.map((branch) => (
                                  <a
                                    key={`ug-${branch.path}`}
                                    href={`/courses/ug/${branch.path}`}
                                    className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] opacity-60"></span>
                                    {branch.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                            {/* PG */}
                            <div className="relative group/pg">
                              <a
                                href="/courses/pg/engineering"
                                className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                              >
                                <span className="font-medium">
                                  Postgraduate (PG)
                                </span>
                                <svg
                                  className="w-3.5 h-3.5 text-gray-400 group-hover/pg:text-[#F48C06] transition-transform group-hover/pg:rotate-90"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </a>
                              {/* Level 2: PG Branches */}
                              <div className="absolute left-full top-0 ml-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/pg:opacity-100 group-hover/pg:visible transition-all duration-200 z-50 py-2">
                                {engineeringBranches.map((branch) => (
                                  <a
                                    key={`pg-${branch.path}`}
                                    href={`/courses/pg/${branch.path}`}
                                    className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] opacity-60"></span>
                                    {branch.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                            <div className="border-t border-gray-100 my-1"></div>
                            <a
                              href="/courses/engineering"
                              className="flex items-center gap-2.5 px-4 py-2 text-[13px] font-medium text-[#F48C06] hover:bg-orange-50 transition-colors"
                            >
                              View All Engineering →
                            </a>
                          </div>
                        </li>

                        {/* Computer Science */}
                        <li>
                          <a
                            href="/courses/computer-science"
                            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                          >
                            <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                            <span className="text-[13px] font-medium leading-tight">
                              Computer Science
                            </span>
                          </a>
                        </li>

                        {/* Information Technology */}
                        <li>
                          <a
                            href="/courses/information-technology"
                            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                          >
                            <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                            <span className="text-[13px] font-medium leading-tight">
                              Information Technology
                            </span>
                          </a>
                        </li>

                        {/* Business Management with nested courses */}
                        <li className="relative group/biz">
                          <a
                            href="/courses/business-management"
                            className="flex items-center justify-between gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                Business Management
                              </span>
                            </div>
                            <svg
                              className="w-3.5 h-3.5 text-gray-400 group-hover/biz:text-[#F48C06] transition-transform group-hover/biz:rotate-90"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                          {/* Nested Business Courses */}
                          <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/biz:opacity-100 group-hover/biz:visible transition-all duration-200 z-50 py-2">
                            {businessCourses.map((course) => (
                              <a
                                key={course.path}
                                href={`/courses/${course.path}`}
                                className="flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06] opacity-60"></span>
                                {course.name}
                              </a>
                            ))}
                            <div className="border-t border-gray-100 my-1"></div>
                            <a
                              href="/courses/business-management"
                              className="flex items-center gap-2.5 px-3 py-1.5 text-[13px] font-medium text-[#F48C06] hover:bg-orange-50 transition-colors"
                            >
                              View All Business Courses →
                            </a>
                          </div>
                        </li>

                        {/* Remaining items */}
                        {[
                          {
                            name: "Hospitality Management",
                            path: "hospitality-management",
                          },
                          { name: "Architecture", path: "architecture" },
                          { name: "Law", path: "law" },
                          { name: "Other Courses", path: "other-courses" },
                        ].map((course) => (
                          <li key={course.path}>
                            <a
                              href={`/courses/${course.path}`}
                              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                            >
                              <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                {course.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: Programs & More */}
                    <div className="px-3 border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
                        <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                          Programs
                        </h4>
                      </div>
                      <ul className="space-y-0.5">
                        {[
                          {
                            name: "Language Courses",
                            path: "/study-abroad/language-courses",
                            icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
                          },
                          {
                            name: "Summer Courses",
                            path: "/study-abroad/summer-courses",
                            icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                          },
                          {
                            name: "Winter Courses",
                            path: "/study-abroad/winter-courses",
                            icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                          },
                          {
                            name: "Working Professionals",
                            path: "/study-abroad/working-professionals",
                            icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                          },
                          {
                            name: "News",
                            path: "/blog",
                            icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
                          },
                        ].map((item) => (
                          <li key={item.path}>
                            <a
                              href={item.path}
                              className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                            >
                              <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={item.icon}
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                {item.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 4: Tests & Exams - WITH TOOLTIPS */}
                    <div className="pl-3">
                      <div className="pl-3">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F48C06]"></span>
                          <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                            Tests & Online Exams
                          </h4>
                        </div>

                        <ul className="space-y-0.5">
                          {/* ========== 1. English Online Exam (Dropdown) ========== */}
                          <li>
                            <button
                              onClick={() => toggleSection("english")}
                              className="w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[13px] font-semibold leading-tight">
                                  English Online Exam
                                </span>
                              </div>
                              <svg
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                  openSection === "english" ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {openSection === "english" && (
                              <ul className="mt-1 ml-2 space-y-0.5 border-l border-orange-100 pl-2">
                                {englishTests.map((test) => (
                                  <li key={test.path}>
                                    <a
                                      href={`/tests/${test.path}`}
                                      title={test.tip}
                                      className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                                    >
                                      <span className="w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                        <svg
                                          className="w-2.5 h-2.5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </span>
                                      <span className="text-[13px] font-medium leading-tight">
                                        {test.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>

                          {/* ========== 2. Foreign Online Exam (Dropdown) ========== */}
                          <li>
                            <button
                              onClick={() => toggleSection("foreign")}
                              className="w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[13px] font-semibold leading-tight">
                                  Foreign Online Exam
                                </span>
                              </div>
                              <svg
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                  openSection === "foreign" ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {openSection === "foreign" && (
                              <ul className="mt-1 ml-2 space-y-0.5 border-l border-orange-100 pl-2">
                                {foreignTests.map((test) => (
                                  <li key={test.path}>
                                    <a
                                      href={`/tests/${test.path}`}
                                      title={test.tip}
                                      className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                                    >
                                      <span className="w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                        <svg
                                          className="w-2.5 h-2.5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </span>
                                      <span className="text-[13px] font-medium leading-tight">
                                        {test.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>

                          {/* ========== 3. Entrance & Academic Tests (Dropdown) ========== */}
                          <li>
                            <button
                              onClick={() => toggleSection("entrance")}
                              className="w-full flex items-center justify-between gap-2 px-2 py-2 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[13px] font-semibold leading-tight">
                                  Entrance & Academic Tests
                                </span>
                              </div>
                              <svg
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                  openSection === "entrance" ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {openSection === "entrance" && (
                              <ul className="mt-1 ml-2 space-y-0.5 border-l border-orange-100 pl-2">
                                {entranceTests.map((test) => (
                                  <li key={test.path}>
                                    <a
                                      href={`/tests/${test.path}`}
                                      title={test.tip}
                                      className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                                    >
                                      <span className="w-5 h-5 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                        <svg
                                          className="w-2.5 h-2.5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </span>
                                      <span className="text-[13px] font-medium leading-tight">
                                        {test.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>

                          {/* Which Test Do I Need? */}
                          <li className="mt-3">
                            <a
                              href="/tests/which-test"
                              title="Not sure which test you need? Find the best test for your study goals here."
                              className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#F48C06] font-semibold hover:bg-orange-50 transition-colors group/item"
                            >
                              <span className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                Which Test Do I Need?
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      {openSection === "legacy" && (
                        <ul className="space-y-0.5">
                          {/* ========== 1. English Online Exam ========== */}
                          <li className="px-2 pt-1 pb-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#F48C06]"></span>
                              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                                English Online Exam
                              </span>
                            </div>
                          </li>

                          {englishTests.map((test) => (
                            <li key={test.path}>
                              <a
                                href={`/tests/${test.path}`}
                                title={test.tip}
                                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                              >
                                <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[13px] font-medium leading-tight">
                                  {test.name}
                                </span>
                              </a>
                            </li>
                          ))}

                          {/* Divider */}
                          <li className="my-3 px-2">
                            <div className="border-t border-gray-200"></div>
                          </li>

                          {/* ========== 2. Foreign Online Exam ========== */}
                          <li className="px-2 pt-1 pb-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#F48C06]"></span>
                              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                                Foreign Online Exam
                              </span>
                            </div>
                          </li>

                          {foreignTests.map((test) => (
                            <li key={test.path}>
                              <a
                                href={`/tests/${test.path}`}
                                title={test.tip}
                                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                              >
                                <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[13px] font-medium leading-tight">
                                  {test.name}
                                </span>
                              </a>
                            </li>
                          ))}

                          {/* Divider */}
                          <li className="my-3 px-2">
                            <div className="border-t border-gray-200"></div>
                          </li>

                          {/* ========== 3. Entrance & Academic Tests ========== */}
                          <li className="px-2 pt-1 pb-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#F48C06]"></span>
                              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                                Entrance & Academic Tests
                              </span>
                            </div>
                          </li>

                          {entranceTests.map((test) => (
                            <li key={test.path}>
                              <a
                                href={`/tests/${test.path}`}
                                title={test.tip}
                                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors group/item"
                              >
                                <span className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[13px] font-medium leading-tight">
                                  {test.name}
                                </span>
                              </a>
                            </li>
                          ))}

                          {/* Which Test Do I Need? */}
                          <li className="mt-3">
                            <a
                              href="/tests/which-test"
                              title="Not sure which test you need? Find the best test for your study goals here."
                              className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#F48C06] font-semibold hover:bg-orange-50 transition-colors group/item"
                            >
                              <span className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#F48C06] group-hover/item:bg-[#F48C06] group-hover/item:text-white transition-colors shrink-0">
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                              <span className="text-[13px] font-medium leading-tight">
                                Which Test Do I Need?
                              </span>
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Right Promo Card */}
                  <div className="w-[200px] bg-gradient-to-b from-[#1e3a5f] to-[#0f172a] p-5 flex flex-col justify-between text-white shrink-0">
                    <div>
                      <span className="inline-block px-2.5 py-1 bg-[#F48C06] text-white text-[10px] font-bold rounded-full uppercase tracking-wide mb-4">
                        Free
                      </span>
                      <h3 className="text-[15px] font-semibold leading-snug mb-2">
                        Not sure where to start?
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Get a free profile evaluation from an Eduhawk
                        counsellor.
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className="mt-6 block w-full text-center bg-[#F48C06] hover:bg-[#e07b00] text-white font-semibold text-sm py-2.5 px-4 rounded-full transition-colors"
                    >
                      Book free session
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Colleges */}
            <div className="relative group">
              <button
                onClick={() => setIsMedicalOpen(!isMedicalOpen)}
                className={`${isActive("/allcollege") || isActive("/mbbsabroad") ? "text-[#F48C06]" : "text-[#2F327D]"} hover:text-[#F48C06] transition-colors flex items-center gap-1`}
                aria-expanded={isMedicalOpen}
              >
                Medical Colleges
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 border border-gray-200 z-50 ${isMedicalOpen ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
              >
                <a
                  href="/allcollege"
                  className="block px-5 py-2.5 text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                >
                  MBBS India
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                <div className="relative group/sub">
                  <div className="px-5 py-2.5 text-[#F48C06] font-semibold flex justify-between items-center hover:bg-orange-50 cursor-pointer">
                    <span>MBBS Abroad</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/sub:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-200 max-h-[70vh] overflow-y-auto z-50">
                    {abroadCountries.map((country) => (
                      <a
                        key={country.path}
                        href={`/mbbsabroad/${country.path}`}
                        className="block px-5 py-2.5 text-sm text-[#2F327D] hover:bg-orange-50 hover:text-[#F48C06] transition-colors"
                      >
                        {country.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="/blog" className={navLinkClass("/blog")}>
              Our Blog
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/services" className={navLinkClass("/services")}>
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              className={`${navLinkClass("/contact")} whitespace-nowrap`}
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F48C06] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#2F327D] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col divide-y divide-gray-100 text-[15px] font-medium">
              <a href="/" className={`${navLinkClass("/")} block py-4 px-5`}>
                Home
              </a>
              <a
                href="/about"
                className={`${navLinkClass("/about")} block py-4 px-5`}
              >
                About
              </a>

              {/* Study Abroad Accordion */}
              <div>
                <button
                  className={`w-full flex justify-between items-center py-4 px-5 ${isActive("/study-abroad") ? "text-[#F48C06]" : "text-[#2F327D]"}`}
                  onClick={() => setIsStudyAbroadOpen(!isStudyAbroadOpen)}
                >
                  <span>Study Abroad</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isStudyAbroadOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isStudyAbroadOpen && (
                  <div className="bg-gray-50 pb-3">
                    {/* Medical & Health */}
                    <p className="px-5 pt-3 pb-1 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                      Medical & Health
                    </p>
                    {[
                      "Medical Abroad",
                      "Dentistry",
                      "Nursing",
                      "Pharmacy",
                      "Physiotherapy",
                      "Public Health",
                      "Biotechnology",
                    ].map((name) => (
                      <a
                        key={name}
                        href={`/courses/${name
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block py-2.5 px-8 text-[#2F327D]"
                      >
                        {name}
                      </a>
                    ))}

                    {/* Tech, Business & More */}
                    <p className="px-5 pt-4 pb-1 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                      Tech, Business & More
                    </p>

                    {/* Engineering Accordion - UG & PG */}
                    <div>
                      <button
                        className="w-full flex justify-between items-center py-2.5 px-8 text-[#2F327D]"
                        onClick={() => setIsEngineeringOpen(!isEngineeringOpen)}
                      >
                        <span>Engineering</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isEngineeringOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isEngineeringOpen && (
                        <div className="bg-gray-100">
                          <p className="px-12 pt-2 pb-1 text-[11px] font-semibold text-gray-500 uppercase">
                            Undergraduate (UG)
                          </p>
                          {engineeringBranches.map((b) => (
                            <a
                              key={`ug-${b.path}`}
                              href={`/courses/ug/${b.path}`}
                              className="block py-2 px-14 text-sm text-[#2F327D]"
                            >
                              {b.name}
                            </a>
                          ))}
                          <p className="px-12 pt-3 pb-1 text-[11px] font-semibold text-gray-500 uppercase">
                            Postgraduate (PG)
                          </p>
                          {engineeringBranches.map((b) => (
                            <a
                              key={`pg-${b.path}`}
                              href={`/courses/pg/${b.path}`}
                              className="block py-2 px-14 text-sm text-[#2F327D]"
                            >
                              {b.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    <a
                      href="/courses/computer-science"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      Computer Science
                    </a>
                    <a
                      href="/courses/information-technology"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      Information Technology
                    </a>

                    {/* Business Management Accordion */}
                    <div>
                      <button
                        className="w-full flex justify-between items-center py-2.5 px-8 text-[#2F327D]"
                        onClick={() => setIsBusinessOpen(!isBusinessOpen)}
                      >
                        <span>Business Management</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isBusinessOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isBusinessOpen && (
                        <div className="bg-gray-100">
                          {businessCourses.map((c) => (
                            <a
                              key={c.path}
                              href={`/courses/${c.path}`}
                              className="block py-2 px-12 text-sm text-[#2F327D]"
                            >
                              {c.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {[
                      "Hospitality Management",
                      "Architecture",
                      "Law",
                      "Other Courses",
                    ].map((name) => (
                      <a
                        key={name}
                        href={`/courses/${name
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/ /g, "-")}`}
                        className="block py-2.5 px-8 text-[#2F327D]"
                      >
                        {name}
                      </a>
                    ))}

                    {/* Programs */}
                    <p className="px-5 pt-4 pb-1 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                      Programs & More
                    </p>
                    <a
                      href="/study-abroad/language-courses"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      Language Courses
                    </a>
                    <a
                      href="/study-abroad/summer-courses"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      Summer Courses
                    </a>
                    <a
                      href="/study-abroad/winter-courses"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      Winter Courses
                    </a>
                    <a
                      href="/study-abroad/working-professionals"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      Working Professionals
                    </a>
                    <a
                      href="/blog"
                      className="block py-2.5 px-8 text-[#2F327D]"
                    >
                      News
                    </a>

                    {/* Tests & Exams */}
                    <button
                      className="w-full flex justify-between items-center px-5 pt-4 pb-2 text-left text-sm font-semibold text-[#2F327D]"
                      onClick={() => setIsTestsOpen(!isTestsOpen)}
                      aria-expanded={isTestsOpen}
                    >
                      <span>Tests & Exams</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isTestsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isTestsOpen && (
                      <div className="pb-2">
                        {/* English Language Tests */}
                        <button
                          className="w-full flex justify-between items-center px-8 pt-2 pb-1 text-left text-sm font-semibold text-[#2F327D]"
                          onClick={() => toggleSection("english")}
                          aria-expanded={openSection === "english"}
                        >
                          <span>English Language Tests</span>
                          <span className="text-[#F48C06]">
                            {openSection === "english" ? "−" : "+"}
                          </span>
                        </button>
                        {openSection === "english" &&
                          englishTests.map((test) => (
                            <a
                              key={test.path}
                              href={`/tests/${test.path}`}
                              title={test.tip}
                              className="block py-2 px-10 text-[#2F327D]"
                            >
                              {test.name}
                            </a>
                          ))}

                        {/* Foreign Language Tests */}
                        <button
                          className="w-full flex justify-between items-center px-8 pt-3 pb-1 text-left text-sm font-semibold text-[#2F327D]"
                          onClick={() => toggleSection("foreign")}
                          aria-expanded={openSection === "foreign"}
                        >
                          <span>Foreign Language Tests</span>
                          <span className="text-[#F48C06]">
                            {openSection === "foreign" ? "−" : "+"}
                          </span>
                        </button>
                        {openSection === "foreign" &&
                          foreignTests.map((test) => (
                            <a
                              key={test.path}
                              href={`/tests/${test.path}`}
                              title={test.tip}
                              className="block py-2 px-10 text-[#2F327D]"
                            >
                              {test.name}
                            </a>
                          ))}

                        {/* Entrance & Academic Tests */}
                        <button
                          className="w-full flex justify-between items-center px-8 pt-3 pb-1 text-left text-sm font-semibold text-[#2F327D]"
                          onClick={() => toggleSection("entrance")}
                          aria-expanded={openSection === "entrance"}
                        >
                          <span>Entrance & Academic Tests</span>
                          <span className="text-[#F48C06]">
                            {openSection === "entrance" ? "−" : "+"}
                          </span>
                        </button>
                        {openSection === "entrance" &&
                          entranceTests.map((test) => (
                            <a
                              key={test.path}
                              href={`/tests/${test.path}`}
                              title={test.tip}
                              className="block py-2 px-10 text-[#2F327D]"
                            >
                              {test.name}
                            </a>
                          ))}

                        <a
                          href="/tests/which-test"
                          title="Not sure which test you need? Find the best test for your study goals here."
                          className="block py-2.5 px-8 mt-1 text-[#F48C06] font-semibold"
                        >
                          Which Test Do I Need?
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Medical Colleges Mobile */}
              <div>
                <button
                  className={`w-full flex justify-between items-center py-4 px-5 ${isActive("/allcollege") || isActive("/mbbsabroad") ? "text-[#F48C06]" : "text-[#2F327D]"}`}
                  onClick={() => setIsMedicalOpen(!isMedicalOpen)}
                >
                  <span>Medical Colleges</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isMedicalOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMedicalOpen && (
                  <div className="bg-gray-50">
                    <a
                      href="/allcollege"
                      className="block py-3 px-10 text-[#2F327D]"
                    >
                      MBBS India
                    </a>
                    <button
                      className="w-full flex justify-between items-center py-3 px-10 text-[#F48C06] font-semibold"
                      onClick={() => setIsAbroadOpen(!isAbroadOpen)}
                    >
                      <span>MBBS Abroad</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isAbroadOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isAbroadOpen && (
                      <div className="bg-gray-100">
                        {abroadCountries.map((c) => (
                          <a
                            key={c.path}
                            href={`/mbbsabroad/${c.path}`}
                            className="block py-2.5 px-14 text-sm text-[#2F327D]"
                          >
                            {c.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <a
                href="/blog"
                className={`${navLinkClass("/blog")} block py-4 px-5`}
              >
                Our Blog
              </a>
              <a
                href="/services"
                className={`${navLinkClass("/services")} block py-4 px-5`}
              >
                Services
              </a>
              <a
                href="/contact"
                className={`${navLinkClass("/contact")} block py-4 px-5`}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;