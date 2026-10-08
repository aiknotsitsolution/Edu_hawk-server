import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../Footer";
import { ChevronUp, GraduationCap, MapPin, PhoneCall } from "lucide-react";

const universityDestinations = [
  {
    country: "China",
    university: "Peking University Health Science Center",
  },
  {
    country: "Russia",
    university: "First Moscow State Medical University (Sechenov)",
  },
  {
    country: "Philippines",
    university: "University of Santo Tomas Faculty of Medicine",
  },
  {
    country: "Kazakhstan",
    university: "West Kazakhstan Marat Ospanov State Medical University",
  },
];

const countryFlags = {
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
  Russia: (
    <>
      <rect width="30" height="6.67" fill="#fff" />
      <rect y="6.67" width="30" height="6.66" fill="#0039a6" />
      <rect y="13.33" width="30" height="6.67" fill="#d52b1e" />
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
  Kazakhstan: (
    <>
      <rect width="30" height="20" fill="#00afca" />
      <circle cx="15" cy="8" r="3" fill="#fecd00" />
      <path d="M15 2.5v1.3m0 8.4v1.3m-5.8-5.7h1.3m9 0h1.3m-9.9-4 1 1m6.2 6.2 1 1m0-8.2-1 1m-6.2 6.2-1 1" stroke="#fecd00" strokeWidth="1" />
      <path d="M4 0h1v20H4z" fill="#fecd00" />
    </>
  ),
};

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showUniversityCard, setShowUniversityCard] = useState(false);
  const [destinationIndex, setDestinationIndex] = useState(0);

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
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=919630736070", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="md:pt-1">
        <Outlet />
      </main>

      <Footer />

      {showUniversityCard && (
        <section
          aria-live="polite"
          aria-label="Study abroad university information"
          className="fixed bottom-24 left-4 z-40 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl sm:bottom-6 sm:left-6"
        >
          <div className="mb-3 flex items-center gap-2 text-blue-700">
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