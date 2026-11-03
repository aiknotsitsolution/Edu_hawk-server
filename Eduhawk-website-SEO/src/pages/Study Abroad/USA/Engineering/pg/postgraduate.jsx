import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../../../Images/Abroad/USA/Engineering_PG/engineering-pg.jpg";
import overviewImg from "../../../../../Images/Abroad/USA/Engineering_PG/engineering-pg-overview.webp";

const branches = [
  {
    name: "Computer Engineering",
    slug: "computer-engineering",
    desc: "MS / MEng with specialisations in computer architecture, VLSI, embedded systems, robotics and intelligent computing.",
  },
  {
    name: "Mechanical Engineering",
    slug: "mechanical-engineering",
    desc: "Graduate study in design, thermodynamics, manufacturing, robotics and research-led projects.",
  },
  {
    name: "Civil Engineering",
    slug: "civil-engineering",
    desc: "Master's pathways in structures, transportation, geotechnics and water resources engineering.",
  },
  {
    name: "Electrical Engineering",
    slug: "electrical-engineering",
    desc: "MS programs covering power systems, control, signals and advanced electronics research.",
  },
  {
    name: "Electronics & Communication",
    slug: "electronics-communication",
    desc: "Specialised master's tracks in telecommunication, VLSI, networking and signal processing.",
  },
  {
    name: "Chemical Engineering",
    slug: "chemical-engineering",
    desc: "Graduate focus on process design, materials, energy systems and industrial production research.",
  },
  {
    name: "Aerospace Engineering",
    slug: "aerospace-engineering",
    desc: "MS / MEng study of aircraft, spacecraft, propulsion and flight systems with lab and research work.",
  },
  {
    name: "Biomedical Engineering",
    slug: "biomedical-engineering",
    desc: "Master's specialisations in medical devices, healthcare technology and bio-design research.",
  },
  {
    name: "Automobile Engineering",
    slug: "automobile-engineering",
    desc: "Postgraduate programs in vehicle design, manufacturing and advanced mobility systems.",
  },
];

const highlights = [
  {
    label: "Degree",
    value: "Master of Science / MEng in Engineering — 1–2 years full-time",
  },
  {
    label: "Tuition",
    value:
      "Varies by university, program length and location; assistantships can offset costs",
  },
  {
    label: "Entry",
    value:
      "Relevant bachelor's degree, official transcripts + English proficiency",
  },
  {
    label: "Tests",
    value: "GRE required by some universities, optional or waived by others",
  },
];

const steps = [
  "Shortlist master's programs and specialisations that match your bachelor's background and career goals.",
  "Verify each university's GRE policy, English test requirements and prerequisite subjects.",
  "Prepare transcripts, degree certificates, SOP, letters of recommendation and financial documents.",
  "Apply before university deadlines and compare admission and funding offers.",
  "Pay the SEVIS fee, complete the US student visa process and plan travel.",
];

const faqs = [
  {
    q: "Can Indian students pursue postgraduate engineering in the USA?",
    a: "Yes. Candidates possessing a relevant bachelor's degree and requisite academic credentials are eligible to apply to postgraduate engineering programs.",
  },
  {
    q: "How long does a master's in engineering take in the USA?",
    a: "The majority of master's programs require approximately one to two years for completion, contingent upon the institution and program configuration.",
  },
  {
    q: "Is the GRE compulsory for admission?",
    a: "No. Graduate Record Examination requirements vary across institutions and programs. Certain universities do not mandate GRE scores.",
  },
  {
    q: "Are scholarships available for Indian students?",
    a: "Yes. Numerous universities extend merit-based scholarships, research assistantships, teaching assistantships, or supplementary financial assistance to qualified international students.",
  },
  {
    q: "What career opportunities are available after postgraduate engineering?",
    a: "Graduates may pursue specialized positions in engineering design, research and development, technology, manufacturing, infrastructure, or project management, contingent upon their academic qualifications and professional credentials.",
  },
];

const PostgraduateEngineering = () => {
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
          Postgraduate Engineering in USA for Indian Students | MS in USA | Edu
          Hawk
        </title>
        <meta
          name="description"
          content="Study postgraduate engineering in the USA after your bachelor's. Explore 1–2 year MS / MEng programs — Computer, Mechanical, Civil, Electrical, ECE, Chemical, Aerospace, Biomedical & Automobile — with GRE guidance, scholarships, assistantships, careers and visa support from Edu Hawk Worldwide."
        />
        <meta
          name="keywords"
          content="Postgraduate Engineering in USA for Indian Students, MS in USA, Master's in Engineering in the USA, MS in Computer Engineering in USA, GRE for MS in USA, Engineering Scholarships in USA, Research Assistantships USA"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Postgraduate Engineering in the USA for Indian Students | Edu Hawk Worldwide"
        />
        <meta
          property="og:description"
          content="1–2 year master's engineering programs in the USA for Indian students — specialisations, GRE and English requirements, assistantships, scholarships and the full visa process."
        />
        <meta
          property="og:url"
          content="https://www.eduhawk.in/courses/pg/engineering"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.eduhawk.in/courses/pg/engineering"
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
                <span className="mx-1.5">›</span> Postgraduate (PG)
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Engineering · USA · Postgraduate
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Postgraduate Engineering in the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  USA
                </span>{" "}
                for Indian Students
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                A master's degree in engineering in the USA builds advanced
                technical skills, research expertise and specialisations that
                employers value. Universities offer 1–2 year MS and MEng
                programs with cutting-edge labs, industry collaborations and
                hands-on research.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Edu Hawk Worldwide guides you through program selection, GRE and
                English test planning, applications, assistantships,
                scholarships and the complete visa journey.
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
                  Explore specialisations
                </a>
              </div>
            </div>
            <div className="relative mt-2 lg:mt-0">
              <img
                src={heroImg}
                alt="US engineering graduate research campus"
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
              Postgraduate Engineering in the USA for Indian Students
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Indian students can develop advanced technical skills, research
                techniques, and professionally useful knowledge by pursuing
                postgraduate engineering education in the United States.
                Master's degree programs in computer engineering, mechanical
                engineering, civil engineering, electrical engineering, chemical
                engineering, aerospace engineering, and biomedical engineering
                are offered by academic institutions. Depending on the degree
                framework and institutional structure, most master's programs
                take one to two years to complete. Students get access to
                cutting-edge labs, research initiatives, collaborations with
                business partners, and chances to focus on a particular
                discipline. A relevant bachelor's degree, official academic
                records, and proof of English language proficiency are standard
                requirements for admission. Institutions have different
                requirements for the Graduate Record Examination (GRE). Subject
                to employer requirements and pertinent employment authorization
                laws, graduates may follow career paths in engineering,
                technology, scientific research, manufacturing, and
                infrastructure development.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/2]">
              <img
                src={overviewImg}
                alt="Graduate engineering students conducting research in a university laboratory"
                className="overview-zoom-img w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium text-white">
                Advanced research · Specialisations · Industry collaboration
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
              Choose Your Master's Engineering Specialisation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((b) => (
              <Link
                key={b.slug}
                to={`/courses/pg/${b.slug}`}
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
              Frequently Asked Questions (FAQs)
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
            Start your PG Engineering journey to the USA
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            From specialisation and GRE planning to university applications,
            assistantships, scholarships and visa — Edu Hawk Worldwide supports
            you at every step.
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

export default PostgraduateEngineering;
