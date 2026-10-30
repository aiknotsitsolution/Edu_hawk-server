// import React from "react";
// import { Link } from "react-router-dom"; // Make sure to install & import react-router-dom
// import Eduhawk from "../assets/icon.jpg"; // Your logo path
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// export default function Footer() {
//   const COUNTRIES = [
//     {
//       name: "Russia",
//       flag: "🇷🇺",
//       path: "/mbbsabroad/russia",
//       seats: "600+",
//       fee: "₹20-35L",
//     },
//     {
//       name: "Georgia",
//       flag: "🇬🇪",
//       path: "/mbbsabroad/georgia",
//       seats: "200+",
//       fee: "₹25-40L",
//     },
//     {
//       name: "Uzbekistan",
//       flag: "🇺🇿",
//       path: "/mbbsabroad/uzbekistan",
//       seats: "400+",
//       fee: "₹15-30L",
//     },
//     {
//       name: "Kazakhstan",
//       flag: "🇰🇿",
//       path: "/mbbsabroad/kazakhstan",
//       seats: "300+",
//       fee: "₹18-32L",
//     },
//     {
//       name: "Kyrgyzstan",
//       flag: "🇰🇬",
//       path: "/mbbsabroad/kyrgyzstan",
//       seats: "250+",
//       fee: "₹15-27L",
//     },
//     {
//       name: "Nepal",
//       flag: "🇳🇵",
//       path: "/mbbsabroad/nepal",
//       seats: "150+",
//       fee: "₹35-50L",
//     },

//     {
//       name: "Bangladesh",
//       flag: "🇧🇩",
//       path: "/mbbsabroad/bangladesh",
//       seats: "200+",
//       fee: "₹22-40L",
//     },
//     {
//       name: "Vietnam",
//       flag: "🇻🇳",
//       path: "/mbbsabroad/vietnam",
//       seats: "100+",
//       fee: "₹25-35L",
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-[#0a1b2e] to-[#060f1a] text-gray-300">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3 mb-5">
//               <img
//                 src={Eduhawk}
//                 alt="Edu-Hawk Logo"
//                 className="w-15 h-15 rounded-full object-cover"
//               />
//               <div>
//                 <h3 className="text-white font-bold text-xl tracking-tight">
//                   Edu-Hawk Worldwide
//                 </h3>
//                 <p className="text-amber-400 text-xs uppercase tracking-widest mt-0.5">
//                   Overseas Medical Education
//                 </p>
//               </div>
//             </div>

//             <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
//               Trusted & ethical counselling for MBBS abroad — helping 2000+
//               Indian students since inception.
//             </p>

//             <div className="flex gap-4 text-xl">
//               <a
//                 href="https://www.facebook.com/eduhawkglobal"
//                 className="hover:text-amber-400 transition-colors duration-200"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://www.youtube.com/@Eduhawkteam"
//                 className="hover:text-amber-400 transition-colors duration-200"
//               >
//                 <FaYoutube />
//               </a>
//               <a
//                 href="https://www.instagram.com/eduhawk_global/"
//                 className="hover:text-amber-400 transition-colors duration-200"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/edu-hawk-worldwide/?viewAsMember=true"
//                 className="hover:text-amber-400 transition-colors duration-200"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>

//           {/* Popular Destinations */}
//           <div>
//             <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
//               Popular Destinations
//             </h4>
//             <div className="space-y-2 text-sm">
//               {COUNTRIES.map((c) => (
//                 <Link
//                   key={c.name}
//                   to={c.path || "#"}
//                   className={`flex items-center gap-2 hover:text-amber-300 transition-colors duration-200 ${
//                     !c.path ? "opacity-60 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   <span className="text-lg">{c.flag}</span>
//                   <span>{c.name}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
//               Quick Links
//             </h4>
//             <div className="space-y-2 text-sm">
//               {[
//                 { label: "Home", path: "/" },
//                 { label: "About", path: "/about" },
//                 { label: "Services", path: "/services" },

//                 { label: "Contact", path: "/contact" },
//                 { label: "Blog", path: "/blog" },
//               ].map((item) => (
//                 <Link
//                   key={item.label}
//                   to={item.path}
//                   className="hover:text-amber-300 transition-colors duration-200 block"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Newsletter + Contact */}
//           <div>
//             <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
//               Stay Updated
//             </h4>

//             <div className="mt-6 text-sm">
//               <div className="text-gray-400 mb-1.5">Contact Us</div>
//               <div className="text-white">+91 9630736070</div>
//               <div className="text-white mt-1">admin@eduhawk.in</div>
//               <div className="text-gray-400 mt-3 text-xs">

//       <a
//   href="https://www.google.com/maps/place/Edu+Hawk+Worldwide+-+MBBS+Abroad+Consultants+in+Delhi/@28.5686707,77.0719455,17z"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-gray no-underline hover:no-underline hover:text-gray-600"
// >
//   Bajrang House, N-5, next to Aakash Institute, South Extension I, Block N
// </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
//           <p className="font-small text-gray-400">
//             © {new Date().getFullYear()} Edu-Hawk Worldwide • All Rights
//             Reserved
//           </p>
//           <p className="mt-1">
//             Powered By{" "}
//             <a
//               href="http://aiknotsit.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span className="font-small text-gray-400">
//                 AI Knots IT Solution Pvt. Ltd.
//               </span>
//             </a>
//             <a className="font-small text-gray-400">version 5.0.0 </a>Trusted
//             by 2000+ Indian Students
//           </p>

//           <div className="mt-4 flex justify-center gap-6 text-xs">
//             <Link
//               to="/privacy-policy"
//               className="hover:text-amber-400 transition-colors duration-200"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               to="/terms-conditions"
//               className="hover:text-amber-400 transition-colors duration-200"
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import Eduhawk from "../assets/icon.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const COUNTRIES = [
    {
      name: "Russia",
      path: "/mbbsabroad/russia",
      seats: "600+",
      fee: "₹20-35L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="6.67" fill="#FFFFFF" />
          <rect y="6.67" width="30" height="6.66" fill="#0039A6" />
          <rect y="13.33" width="30" height="6.67" fill="#D52B1E" />
        </svg>
      ),
    },
    {
      name: "Georgia",
      path: "/mbbsabroad/georgia",
      seats: "200+",
      fee: "₹25-40L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="20" fill="#FFFFFF" />
          <rect x="12" width="6" height="20" fill="#FF0000" />
          <rect y="7" width="30" height="6" fill="#FF0000" />
          <path d="M6 3.5h1.5v1.5H9v1.5H7.5V8H6V6.5H4.5V5H6z" fill="#FF0000" />
          <path
            d="M22.5 3.5h1.5v1.5H26v1.5h-1.5V8H22.5V6.5H21V5h1.5z"
            fill="#FF0000"
          />
          <path
            d="M6 12h1.5v1.5H9v1.5H7.5V17H6v-1.5H4.5V14H6z"
            fill="#FF0000"
          />
          <path
            d="M22.5 12h1.5v1.5H26v1.5h-1.5V17H22.5v-1.5H21V14h1.5z"
            fill="#FF0000"
          />
        </svg>
      ),
    },
    {
      name: "Uzbekistan",
      path: "/mbbsabroad/uzbekistan",
      seats: "400+",
      fee: "₹15-30L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="6.67" fill="#1EB53A" />
          <rect y="6.67" width="30" height="6.66" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#0099B5" />
          <rect y="6.2" width="30" height="0.9" fill="#CE1126" />
          <rect y="12.9" width="30" height="0.9" fill="#CE1126" />
          <circle cx="5.5" cy="3.3" r="1.8" fill="#FFFFFF" />
          <circle cx="6.3" cy="3.3" r="1.5" fill="#1EB53A" />
          <g fill="#FFFFFF">
            <circle cx="9.5" cy="2.2" r="0.35" />
            <circle cx="10.8" cy="2.8" r="0.35" />
            <circle cx="11.5" cy="4" r="0.35" />
            <circle cx="10.8" cy="5.2" r="0.35" />
            <circle cx="9.5" cy="5.8" r="0.35" />
            <circle cx="8.2" cy="5.2" r="0.35" />
            <circle cx="7.5" cy="4" r="0.35" />
            <circle cx="8.2" cy="2.8" r="0.35" />
            <circle cx="9.5" cy="3.5" r="0.35" />
            <circle cx="10.2" cy="4" r="0.35" />
            <circle cx="9.5" cy="4.5" r="0.35" />
            <circle cx="8.8" cy="4" r="0.35" />
          </g>
        </svg>
      ),
    },
    {
      name: "Kazakhstan",
      path: "/mbbsabroad/kazakhstan",
      seats: "300+",
      fee: "₹18-32L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="20" fill="#00AFCA" />
          <rect x="0" y="0" width="3.2" height="20" fill="#FECB00" />
          <circle cx="16.5" cy="7.2" r="2.6" fill="#FECB00" />
          <g stroke="#FECB00" strokeWidth="0.7" fill="none">
            <path d="M16.5 2.8v1.6M16.5 10v1.6M12 7.2h1.6M19.4 7.2h1.6M13.2 4l1.1 1.1M18.7 9.3l1.1 1.1M18.7 4l-1.1 1.1M13.2 9.3l-1.1 1.1" />
          </g>
          <path
            d="M13.8 11c1-.6 2.4-1 3.6-.7.9.2 1.8.7 2.4 1.4-.5.2-1.1.3-1.7.2-.6-.1-1.2-.3-1.7-.7-.3.4-.8.7-1.3.9-.7.2-1.4.1-2-.3-.4-.3-.7-.8-.8-1.3.4.1.8.2 1.3.2z"
            fill="#FECB00"
          />
        </svg>
      ),
    },
    {
      name: "Kyrgyzstan",
      path: "/mbbsabroad/kyrgyzstan",
      seats: "250+",
      fee: "₹15-27L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="20" fill="#E8112D" />
          <circle cx="15" cy="10" r="5.5" fill="#FFEE00" />
          <circle cx="15" cy="10" r="4.2" fill="#E8112D" />
          <g stroke="#FFEE00" strokeWidth="0.9" fill="none">
            <path d="M15 3.2v2.2M15 14.6v2.2M8.2 10h2.2M19.6 10h2.2M10.2 5.2l1.5 1.5M18.3 13.3l1.5 1.5M18.3 5.2l-1.5 1.5M10.2 13.3l-1.5 1.5M12 3.8l.9 2M17.1 14.2l.9 2M17.1 3.8l-.9 2M12 14.2l-.9 2" />
          </g>
          <path d="M13.5 8.5h3v3h-3z" fill="#FFEE00" />
          <path d="M14.2 7.8h1.6v4.4h-1.6z" fill="#FFEE00" />
        </svg>
      ),
    },
    {
      name: "Nepal",
      path: "/mbbsabroad/nepal",
      seats: "150+",
      fee: "₹35-50L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <path d="M2 1 L28 1 L28 10 L16 10 L28 19 L2 19 Z" fill="#003893" />
          <path
            d="M3.5 2.5 L26.5 2.5 L26.5 9 L15 9 L26.5 17.5 L3.5 17.5 Z"
            fill="#DC143C"
          />
          <circle cx="9" cy="6" r="2.2" fill="#FFFFFF" />
          <circle cx="9.8" cy="5.6" r="1.9" fill="#DC143C" />
          <circle cx="9" cy="13.5" r="2" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Bangladesh",
      path: "/mbbsabroad/bangladesh",
      seats: "200+",
      fee: "₹22-40L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="20" fill="#006A4E" />
          <circle cx="13" cy="10" r="5.5" fill="#F42A41" />
        </svg>
      ),
    },
    {
      name: "Vietnam",
      path: "/mbbsabroad/vietnam",
      seats: "100+",
      fee: "₹25-35L",
      flag: (
        <svg
          viewBox="0 0 30 20"
          className="w-6 h-4 rounded-sm shadow-sm border border-white/20"
        >
          <rect width="30" height="20" fill="#DA251D" />
          <path
            d="M15 5.5l1.4 4.2h4.4l-3.5 2.6 1.3 4.2-3.6-2.6-3.6 2.6 1.3-4.2-3.5-2.6h4.4z"
            fill="#FFFF00"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a1b2e] to-[#060f1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={Eduhawk}
                alt="Edu-Hawk Logo"
                className="w-15 h-15 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-bold text-xl tracking-tight">
                  Edu-Hawk Worldwide
                </h3>
                <p className="text-amber-400 text-xs uppercase tracking-widest mt-0.5">
                  Overseas Medical Education
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Trusted & ethical counselling for MBBS abroad — helping 2000+
              Indian students since inception.
            </p>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/eduhawkglobal"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@Eduhawkteam"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/eduhawk_global/"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/edu-hawk-worldwide/?viewAsMember=true"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
              Popular Destinations
            </h4>
            <div className="space-y-2 text-sm">
              {COUNTRIES.map((c) => (
                <Link
                  key={c.name}
                  to={c.path || "#"}
                  className={`flex items-center gap-2.5 hover:text-amber-300 transition-colors duration-200 ${
                    !c.path ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {c.flag}
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
                { label: "Blog", path: "/blog" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-amber-300 transition-colors duration-200 block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">
              Stay Updated
            </h4>

            <div className="mt-6 text-sm">
              <div className="text-gray-400 mb-1.5">Contact Us</div>
              <div className="text-white">+91 9630736070</div>
              <div className="text-white mt-1">admin@eduhawk.in</div>
              <div className="text-gray-400 mt-3 text-xs">
                <a
                  href="https://www.google.com/maps/place/Edu+Hawk+Worldwide+-+MBBS+Abroad+Consultants+in+Delhi/@28.5686707,77.0719455,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 no-underline hover:text-amber-400 transition-colors"
                >
                  Bajrang House, N-5, next to Aakash Institute, South Extension
                  I, Block N
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          <p className="font-small text-gray-400">
            © {new Date().getFullYear()} Edu-Hawk Worldwide • All Rights
            Reserved
          </p>
          <p className="mt-1">
            Powered By{" "}
            <a
              href="http://aiknotsit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-small text-gray-400">
                AI Knots IT Solution Pvt. Ltd.
              </span>
            </a>
            <a className="font-small text-gray-400"> version 5.0.0 </a>
            Trusted by 2000+ Indian Students
          </p>

          <div className="mt-4 flex justify-center gap-6 text-xs flex-wrap">
            <Link
              to="/privacy-policy"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies-policy"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Cookies Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
