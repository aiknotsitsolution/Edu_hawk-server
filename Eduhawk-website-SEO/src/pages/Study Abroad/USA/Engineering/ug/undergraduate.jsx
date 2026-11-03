import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../Images/Abroad/USA/Engineering_UG/engineering-ug.jpg";
import overviewImg from "../../../../../Images/Abroad/USA/Engineering_UG/engineering-overview.webp";

const branches = [
  {
    name: "Computer Engineering",
    slug: "computer-engineering",
    desc: "Hardware, digital systems, embedded systems and computer architecture.",
  },
  {
    name: "Mechanical Engineering",
    slug: "mechanical-engineering",
    desc: "Design, manufacturing, thermodynamics and motion systems.",
  },
  {
    name: "Civil Engineering",
    slug: "civil-engineering",
    desc: "Structures, construction, transportation and water resources.",
  },
  {
    name: "Electrical Engineering",
    slug: "electrical-engineering",
    desc: "Power systems, electronics, signals and control.",
  },
  {
    name: "Electronics & Communication",
    slug: "electronics-communication",
    desc: "Telecommunication, VLSI, networking and signal processing.",
  },
  {
    name: "Chemical Engineering",
    slug: "chemical-engineering",
    desc: "Process design, materials, energy and industrial production.",
  },
  {
    name: "Aerospace Engineering",
    slug: "aerospace-engineering",
    desc: "Aircraft, spacecraft, propulsion and flight systems.",
  },
  {
    name: "Biomedical Engineering",
    slug: "biomedical-engineering",
    desc: "Medical devices, healthcare technology and bio-design.",
  },
  {
    name: "Automobile Engineering",
    slug: "automobile-engineering",
    desc: "Vehicle design, manufacturing and mobility systems.",
  },
];

const highlights = [
  {
    label: "Degree",
    value: "Bachelor of Engineering (B.E. / B.S.) — 4 years full-time",
  },
  {
    label: "Tuition",
    value: "USD 25,000 – 65,000+ per year (excluding living costs)",
  },
  {
    label: "Entry",
    value: "Class 12 with Mathematics & Physics + English proficiency",
  },
  {
    label: "Tests",
    value: "SAT / ACT required by some universities, optional by others",
  },
];

const steps = [
  "Shortlist engineering branches and universities that match your profile and budget.",
  "Verify Class 12 subject requirements and English test scores for each university.",
  "Prepare transcripts, SOP, letters of recommendation and financial documents.",
  "Apply before university deadlines and compare admission offers.",
  "Pay the SEVIS fee, complete the US student visa process and plan travel.",
];

const faqs = [
  {
    q: "Can Indian students study engineering in the US after Class 12?",
    a: "Yes. Indian students can apply after Class 12 as long as they meet the university's academic rules, subject requirements and English language standards.",
  },
  {
    q: "How long does it take to complete an engineering degree in the USA?",
    a: "Most undergraduate engineering programs take four years of full-time study.",
  },
  {
    q: "How much does engineering education in the USA cost?",
    a: "Tuition usually ranges from USD 25,000 to USD 65,000 or more per year, excluding housing, food and other living costs. Total cost depends on the university, location and program.",
  },
  {
    q: "Do I need to take the SAT for engineering admission in the USA?",
    a: "Not always. Some universities require SAT or ACT scores while others are test-optional, and policies can change year to year — check each university's current requirements.",
  },
  {
    q: "Can Indian engineering students get aid in the USA?",
    a: "Yes. Many universities offer scholarships or financial aid to international students who qualify, especially based on academic performance.",
  },
];

const UndergraduateEngineeringUG = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll("section");
    if (!sections) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    sections.forEach((s) => {
      s.classList.add("reveal");
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-slate-800">
      <Helmet>
        <title>
          Undergraduate Engineering in USA for Indian Students | B.E. 2026 |
          Edu Hawk
        </title>
        <meta
          name="description"
          content="Study Bachelor of Engineering in the USA after Class 12. Explore UG engineering branches — Computer, Mechanical, Civil, Electrical, ECE, Chemical, Aerospace, Biomedical & Automobile — with fees, eligibility, universities and visa guidance from Edu Hawk Worldwide."
        />
        <meta
          name="keywords"
          content="Undergraduate Engineering in USA for Indian Students, Best Engineering Universities in USA, Bachelor of Engineering in USA, Engineering Courses in USA for Indian Students, Study Engineering in USA After 12th"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Undergraduate Engineering in the USA for Indian Students | Edu Hawk Worldwide"
        />
        <meta
          property="og:description"
          content="4-year B.E. engineering pathways in the USA for Indian students after Class 12 — branches, fees, eligibility, scholarships and visa process."
        />
        <meta
          property="og:url"
          content="https://www.eduhawk.in/courses/ug/engineering"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.eduhawk.in/courses/ug/engineering"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.is-visible { opacity: 1; transform: none; }
        @keyframes ken-burns-zoom {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(-1.5%, 1.5%); }
        }
        .overview-zoom-img {
          animation: ken-burns-zoom 12s ease-in-out infinite alternate;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .overview-zoom-img { animation: none; }
          .visa-step-card { animation: none; opacity: 1; }
        }
        .visa-step-card {
          opacity: 0;
          animation: visaStepReveal 0.7s ease forwards;
        }
        @keyframes visaStepReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Paper artwork: stacked rotated sheets + dotted graph-paper texture */
        .visa-step-card {
          background-image: radial-gradient(#e2e8f0 1px, transparent 1.1px);
          background-size: 16px 16px;
        }
        .visa-step-card::before,
        .visa-step-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 3px 10px rgba(15, 23, 42, 0.06);
          z-index: -1;
          transition: transform 0.5s ease;
        }
        .visa-step-card::before { transform: rotate(2deg) translate(3px, 4px); }
        .visa-step-card::after {
          transform: rotate(-1.6deg) translate(-4px, 2px);
          background: #fffbeb;
        }
        .visa-step-card:hover::before { transform: rotate(3.2deg) translate(5px, 6px); }
        .visa-step-card:hover::after { transform: rotate(-2.6deg) translate(-6px, 3px); }
        @media (prefers-reduced-motion: reduce) {
          .visa-step-card::before,
          .visa-step-card::after { transition: none; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#0b1533] via-[#101c47] to-[#0b1533] text-white pt-12 pb-14 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[480px] h-[480px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Engineering{" "}
                <span className="mx-1.5">›</span> Undergraduate (UG)
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Engineering · USA · Undergraduate
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Undergraduate Engineering in the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Studying engineering in the USA opens doors to modern labs,
                hands-on learning and real research projects. US colleges offer
                bachelor's programs across computer, mechanical, civil,
                electrical, aerospace, chemical, biomedical and more branches.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Edu Hawk Worldwide guides you through branch selection,
                university shortlisting, applications, scholarships and the
                complete visa journey.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <a
                  href="https://api.whatsapp.com/send?phone=919630736070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
                >
                  Book free counselling
                </a>
                <a
                  href="#branches"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
                >
                  Explore branches
                </a>
              </div>
            </div>
            <div className="relative mt-2 lg:mt-0">
              <img
                src={heroImg}
                alt="US engineering university campus"
                className="rounded-2xl shadow-2xl object-cover w-full h-56 sm:h-72 lg:h-[440px]"
                loading="eager"
              />
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium">
                Trusted by 1000+ Indian students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
                  {h.label}
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
              Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Study Engineering in the USA?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Engineering bachelor's degrees in the USA take four years to
                complete. Alongside core subjects, students build critical
                thinking and problem-solving skills, and often do internships,
                industry projects and research work — gaining real-world
                experience before graduation.
              </p>
              <p>
                To get into these programs, students must have passed Class 12
                with the required subjects (typically Mathematics and Physics)
                and demonstrate English proficiency through tests such as IELTS,
                TOEFL, PTE or Duolingo. SAT or ACT scores are required by some
                colleges and optional at others, so it is important to check
                each university's rules.
              </p>
              <p>
                Costs vary widely — tuition ranges from about USD 25,000 to USD
                65,000+ per year, excluding housing, food and living expenses.
                Many universities offer scholarships and need-based financial
                aid to strong international applicants.
              </p>
              <p>
                After graduation, students can work in engineering roles or
                continue to higher studies. Job opportunities depend on company
                demand and US visa rules.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/2]">
              <img
                src={overviewImg}
                alt="Engineering students working in a university fabrication laboratory"
                className="overview-zoom-img w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium text-white">
                Hands-on labs · Real projects · Industry exposure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRANCHES ================= */}
      <section id="branches" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
              Programs
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Choose Your Engineering Branch
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((b) => (
              <Link
                key={b.slug}
                to={`/courses/ug/${b.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-orange-300 hover:shadow-md transition-all no-underline"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-800 group-hover:text-[#F48C06] transition-colors">
                    {b.name}
                  </h3>
                  <span className="text-slate-300 group-hover:text-[#F48C06] transition-colors">
                    →
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {b.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION PROCESS ================= */}
      <section className="py-14 sm:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
              Step by step
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Application & Visa Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div
                key={s}
                className="visa-step-card group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-orange-200"
                style={{
                  animationDelay: `${i * 120}ms`,
                }}
              >
                {/* Animated Number Circle */}
                <div className="mb-5 relative w-fit">
                  <div className="visa-number-circle relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-orange-500 bg-orange-50 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-orange-200">
                    <span className="text-xl font-bold text-orange-500 transition-colors duration-500 group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Outer Ring */}
                    <span className="absolute inset-[-6px] rounded-full border border-orange-200 opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" />
                  </div>
                </div>

                {/* Step Content */}
                <p className="text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-800">
                  {s}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-orange-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-orange-400 mb-1.5">
              FAQs
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span
                    className={`text-xl text-orange-500 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-slate-600 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-[#0b1533] via-[#101c47] to-[#0b1533] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start your UG Engineering journey to the USA
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            From branch selection to university applications, scholarships and
            visa — Edu Hawk Worldwide supports you at every step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=919630736070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold bg-blue-600 hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919630736070"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold border-[1.5px] border-white/30 hover:bg-white/10 hover:border-white transition-all no-underline"
            >
              Call +91 96307 36070
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UndergraduateEngineeringUG;
