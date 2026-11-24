import React, { useState, useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../Footer";
import RouteLoader from "../../component/RouteLoader";
import { ChevronUp, GraduationCap, MapPin, PhoneCall, X } from "lucide-react";

const universityDestinations = [
  {
    country: "USA",
    university: "Harvard University / MIT",
  },
  {
    country: "UK",
    university: "University of Oxford / Cambridge",
  },
  {
    country: "Canada",
    university: "University of Toronto / McGill",
  },
  {
    country: "Australia",
    university: "University of Melbourne / Sydney",
  },
  {
    country: "Germany",
    university: "Technical University of Munich (TUM)",
  },
  {
    country: "Ireland",
    university: "Trinity College Dublin",
  },
  {
    country: "France",
    university: "Sorbonne University Paris",
  },
  {
    country: "Italy",
    university: "University of Bologna / Sapienza",
  },
  {
    country: "Russia",
    university: "First Moscow State Medical University (Sechenov)",
  },
  {
    country: "Uzbekistan",
    university: "Tashkent Medical Academy",
  },
  {
    country: "Kazakhstan",
    university: "West Kazakhstan Marat Ospanov State Medical University",
  },
  {
    country: "Georgia",
    university: "Tbilisi State Medical University",
  },
  {
    country: "Philippines",
    university: "University of Santo Tomas Faculty of Medicine",
  },
  {
    country: "Kyrgyzstan",
    university: "Kyrgyz State Medical Academy",
  },
  {
    country: "Egypt",
    university: "Cairo University Faculty of Medicine",
  },
  {
    country: "Bangladesh",
    university: "Dhaka Medical College",
  },
  {
    country: "Nepal",
    university: "Tribhuvan University Institute of Medicine",
  },
  {
    country: "China",
    university: "Peking University Health Science Center",
  },
];

const countryFlags = {
  USA: (
    <>
      <rect width="30" height="20" fill="#b22234" />
      <path d="M0 1.54h30M0 4.62h30M0 7.69h30M0 10.77h30M0 13.85h30M0 16.92h30" stroke="#fff" strokeWidth="1.54" />
      <rect width="13" height="10.77" fill="#3c3b6e" />
      <circle cx="3" cy="2.5" r="0.6" fill="#fff" />
      <circle cx="6.5" cy="2.5" r="0.6" fill="#fff" />
      <circle cx="10" cy="2.5" r="0.6" fill="#fff" />
      <circle cx="4.7" cy="5.4" r="0.6" fill="#fff" />
      <circle cx="8.3" cy="5.4" r="0.6" fill="#fff" />
      <circle cx="3" cy="8.3" r="0.6" fill="#fff" />
      <circle cx="6.5" cy="8.3" r="0.6" fill="#fff" />
      <circle cx="10" cy="8.3" r="0.6" fill="#fff" />
    </>
  ),
  UK: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" strokeWidth="2" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.5" />
    </>
  ),
  Canada: (
    <>
      <rect width="30" height="20" fill="#d80621" />
      <rect x="7.5" width="15" height="20" fill="#fff" />
      <path d="M15 4l1 3.5 2.5-.5-1.5 2.5 2 1.5-3 1 .5 3.5-1.5-2-1.5 2 .5-3.5-3-1 2-1.5-1.5-2.5 2.5.5z" fill="#d80621" />
    </>
  ),
  Australia: (
    <>
      <rect width="30" height="20" fill="#00008b" />
      <g transform="scale(0.5)">
        <rect width="30" height="20" fill="#012169" />
        <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
        <path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" strokeWidth="2" />
        <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
        <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.5" />
      </g>
      <circle cx="7.5" cy="15" r="1.5" fill="#fff" />
      <circle cx="22" cy="4" r="0.8" fill="#fff" />
      <circle cx="20" cy="8" r="0.8" fill="#fff" />
      <circle cx="25" cy="9" r="0.8" fill="#fff" />
      <circle cx="22" cy="14" r="0.8" fill="#fff" />
      <circle cx="23.5" cy="11" r="0.5" fill="#fff" />
    </>
  ),
  Germany: (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.66" fill="#dd0000" />
      <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
    </>
  ),
  Ireland: (
    <>
      <rect width="10" height="20" fill="#169b62" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ff883e" />
    </>
  ),
  France: (
    <>
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ed2939" />
    </>
  ),
  Italy: (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ce2b37" />
    </>
  ),
  Russia: (
    <>
      <rect width="30" height="6.67" fill="#fff" />
      <rect y="6.67" width="30" height="6.66" fill="#0039a6" />
      <rect y="13.33" width="30" height="6.67" fill="#d52b1e" />
    </>
  ),
  Uzbekistan: (
    <>
      <rect width="30" height="6.3" fill="#0099b5" />
      <rect y="6.3" width="30" height="0.7" fill="#ce1126" />
      <rect y="7" width="30" height="6" fill="#fff" />
      <rect y="13" width="30" height="0.7" fill="#ce1126" />
      <rect y="13.7" width="30" height="6.3" fill="#1eb53a" />
      <circle cx="5" cy="3.5" r="1.8" fill="#fff" />
      <circle cx="5.6" cy="3.5" r="1.5" fill="#0099b5" />
    </>
  ),
  Kazakhstan: (
    <>
      <rect width="30" height="20" fill="#00afca" />
      <circle cx="15" cy="8" r="3" fill="#fecd00" />
      <path d="M15 2.5v1.3m0 8.4v1.3m-5.8-5.7h1.3m9 0h1.3m-9.9-4 1 1m6.2 6.2 1 1m0-8.2-1 1m-6.2 6.2-1 1" stroke="#fecd00" strokeWidth="1" />
      <path d="M4 0h1v20H4z" fill="#fecd00" />
    </>
  ),
  Georgia: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <path d="M12 0h6v20h-6zM0 7h30v6H0z" fill="#ff0000" />
      <path d="M5 2h2v4H5zM4 3h4v2H4zM23 2h2v4h-2zM22 3h4v2h-4zM5 14h2v4H5zM4 15h4v2H4zM23 14h2v4h-2zM22 15h4v2h-4z" fill="#ff0000" />
    </>
  ),
  Philippines: (
    <>
      <rect width="30" height="10" fill="#0038a8" />
      <rect y="10" width="30" height="10" fill="#ce1126" />
      <path d="M0 0 14 10 0 20z" fill="#fff" />
      <circle cx="4.5" cy="10" r="2" fill="#fcd116" />
      <circle cx="4.5" cy="10" r="0.8" fill="#fff" />
      <path d="m11 3 .5 1.2 1.3.1-1 .8.3 1.2L11 5.6l-1.1.7.3-1.2-.9-.8 1.2-.1zM2 2l.4.8.9.1-.7.6.2.9L2 4l-.8.5.2-.9-.7-.6.9-.1zM2 16l.4.8.9.1-.7.6.2.9L2 18l-.8.5.2-.9-.7-.6.9-.1z" fill="#fcd116" />
    </>
  ),
  Kyrgyzstan: (
    <>
      <rect width="30" height="20" fill="#e8112d" />
      <circle cx="15" cy="10" r="4" fill="#ffe600" />
      <circle cx="15" cy="10" r="3" fill="#e8112d" />
      <path d="M15 7.5v5M12.5 10h5" stroke="#ffe600" strokeWidth="0.8" />
    </>
  ),
  Egypt: (
    <>
      <rect width="30" height="6.67" fill="#ce1126" />
      <rect y="6.67" width="30" height="6.66" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <circle cx="15" cy="10" r="1.5" fill="#c09300" />
    </>
  ),
  Bangladesh: (
    <>
      <rect width="30" height="20" fill="#006a4e" />
      <circle cx="13" cy="10" r="5" fill="#f42a41" />
    </>
  ),
  Nepal: (
    <>
      <rect width="30" height="20" fill="#003893" />
      <path d="M2 1l16 9.5-11 0 11 8.5H2z" fill="#dc143c" stroke="#003893" strokeWidth="1" />
      <circle cx="6" cy="7" r="1.5" fill="#fff" />
      <circle cx="6" cy="14" r="1.5" fill="#fff" />
    </>
  ),
  China: (
    <>
      <rect width="30" height="20" fill="#de2910" />
      <path
        d="m7 3 1.1 2.3 2.5.4-1.8 1.7.4 2.5L7 8.7l-2.2 1.2.4-2.5-1.8-1.7 2.5-.4z"
        fill="#ffde00"
      />
      <circle cx="13" cy="4" r="0.8" fill="#ffde00" />
      <circle cx="16" cy="7" r="0.8" fill="#ffde00" />
      <circle cx="15" cy="11" r="0.8" fill="#ffde00" />
      <circle cx="12" cy="14" r="0.8" fill="#ffde00" />
    </>
  ),
};

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showUniversityCard, setShowUniversityCard] = useState(false);
  const [destinationIndex, setDestinationIndex] = useState(0);
  const dismissTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let rotationInterval;
    const visibilityTimeout = window.setTimeout(() => {
      setShowUniversityCard(true);
      rotationInterval = window.setInterval(() => {
        setDestinationIndex((currentIndex) =>
          (currentIndex + 1) % universityDestinations.length
        );
      }, 5000);
    }, 5000);

    return () => {
      window.clearTimeout(visibilityTimeout);
      window.clearInterval(rotationInterval);
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, []);

  const handleDismissCard = () => {
    setShowUniversityCard(false);
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    // Reappear automatically after 20 seconds
    dismissTimerRef.current = setTimeout(() => {
      setShowUniversityCard(true);
    }, 20000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=919630736070", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navbar />

      <main className="md:pt-1">
        <Suspense fallback={<RouteLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      {showUniversityCard && (
        <section
          aria-live="polite"
          aria-label="Study abroad university information"
          className="fixed bottom-24 left-4 right-4 sm:right-auto sm:w-full z-40 max-w-sm rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl sm:bottom-6 sm:left-6 transition-all duration-300"
        >
          {/* Close / Dismiss button (Re-appears automatically after ~20 seconds) */}
          <button
            onClick={handleDismissCard}
            aria-label="Temporarily dismiss spotlight"
            className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            title="Dismiss temporarily"
          >
            <X size={15} />
          </button>

          <div className="mb-3 flex items-center gap-2 text-blue-700 pr-6">
            <GraduationCap size={20} aria-hidden="true" />
            <p className="text-sm font-bold">Study Abroad Spotlight</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-blue-600"
                aria-hidden="true"
              />
              <p>
                <span className="font-semibold">Country: </span>
                <span className="mr-1 inline-flex align-middle" aria-hidden="true">
                  <svg
                    viewBox="0 0 30 20"
                    className="h-5 w-7 rounded-sm border border-gray-300 shadow-sm"
                    focusable="false"
                  >
                    {countryFlags[universityDestinations[destinationIndex].country]}
                  </svg>
                </span>
                {universityDestinations[destinationIndex].country}
              </p>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <GraduationCap
                size={17}
                className="mt-0.5 shrink-0 text-blue-600"
                aria-hidden="true"
              />
              <p>
                <span className="font-semibold">University: </span>
                {universityDestinations[destinationIndex].university}
              </p>
            </div>
          </div>
          <a
            href="tel:+919630736070"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <PhoneCall size={17} aria-hidden="true" />
            Call Now
          </a>
        </section>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex gap-4 z-50">
        
        {/* WhatsApp Button with Blinking Border */}
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60"></span>
          
          <button
            onClick={openWhatsApp}
            aria-label="Chat with Edu-Hawk on WhatsApp"
            className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5c] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            title="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>

        {/* Scroll to Top Button - Clean & Professional */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            title="Scroll to Top"
          >
            <ChevronUp size={26} strokeWidth={2.8} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainLayout;