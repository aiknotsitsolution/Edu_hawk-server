import React, { useState } from "react";

const PharmacyAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: "Programs", value: "B.Pharm, Pharm.D, M.Pharm & related courses" },
    { label: "Countries", value: "UK, Canada, Australia, USA, Ireland & more" },
    { label: "Support", value: "Complete guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & career focus" },
  ];

  const features = [
    {
      title: "Right university for your goals",
      desc: "We compare accreditation, curriculum, internships, ranking and entry requirements before recommending a university.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Clear cost planning",
      desc: "Understand tuition, living costs, insurance, travel and visa expenses before committing to a study plan.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Complete application support",
      desc: "From shortlisting and documents to applications, offers, scholarships and visa preparation — we stay with you throughout.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Accommodation and arrival help",
      desc: "Plan accommodation, travel, banking and your first days on campus before you leave India.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "English and profile guidance",
      desc: "Get practical help with IELTS, PTE, SOP, LORs and profile building where your chosen university needs them.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Honest destination comparison",
      desc: "Compare UK, Canada, Australia, USA, Ireland, Germany and more by cost, career outcomes, licensing and lifestyle.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const eligibility = [
    "Class 12 with PCB or PCM (Physics, Chemistry, Biology/Mathematics) with minimum required percentage",
    "English language score such as IELTS, PTE or TOEFL where required by the university",
    "Valid passport and academic transcripts prepared ahead of deadlines",
    "A focused statement of purpose and recommendation letters for eligible courses",
    "Proof of funds and financial documents for the visa process",
    "A realistic study plan that connects your pharmacy course with your future goals",
  ];

  const destinations = [
    { name: "United Kingdom", highlight: true },
    { name: "Canada", highlight: true },
    { name: "Australia", highlight: true },
    { name: "United States", highlight: true },
    { name: "Ireland", highlight: true },
    { name: "Germany", highlight: false },
    { name: "New Zealand", highlight: false },
    { name: "UAE", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your academic background, goals and budget. We assess realistic options honestly.",
    },
    {
      step: 2,
      title: "Course and university shortlisting",
      desc: "Based on your profile, budget and preference we shortlist suitable pharmacy courses and universities.",
    },
    {
      step: 3,
      title: "Application and offer",
      desc: "We help with applications, documents, SOP, LORs and scholarship opportunities until you receive an offer.",
    },
    {
      step: 4,
      title: "Visa guidance and documentation",
      desc: "Prepare your financial documents, visa file and interview answers with a clear checklist.",
    },
    {
      step: 5,
      title: "Pre-departure and arrival support",
      desc: "Plan accommodation, travel, banking and your first days on campus before you fly.",
    },
  ];

  const faqs = [
    {
      q: "Which country is best for Pharmacy abroad?",
      a: "There is no single best country. The right choice depends on your budget, academic profile, preferred course (B.Pharm / Pharm.D / M.Pharm), licensing pathway and long-term career plans. UK, Canada and Australia are currently the most popular among Indian students.",
    },
    {
      q: "How much does it cost to study Pharmacy abroad?",
      a: "Costs vary by country and university. Your total budget includes tuition, accommodation, living expenses, insurance, travel and visa costs. We share a realistic estimate before you apply.",
    },
    {
      q: "Do I need IELTS or another English test?",
      a: "Most universities in UK, Canada, Australia and USA ask for IELTS, PTE or TOEFL. Some universities offer waivers based on your previous medium of instruction. Requirements are checked university by university.",
    },
    {
      q: "Can I work while studying Pharmacy abroad?",
      a: "Yes. Most popular destinations allow international students to work part-time during the course (usually 20 hours per week) and full-time during holidays, subject to visa conditions.",
    },
    {
      q: "When should I start my application?",
      a: "Starting 8–12 months before your intended intake gives you enough time for testing, shortlisting, documents, applications and visa preparation.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen antialiased">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-sm text-white/50 mb-5">
            Home <span className="mx-1.5">›</span> Study Abroad{" "}
            <span className="mx-1.5">›</span> Pharmacy
          </div>
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
            Study Pharmacy · Abroad
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mb-5">
            Study{" "}
            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
              Pharmacy Abroad
            </span>{" "}
            with confidence
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
            Top universities, transparent fees, strong career pathways and
            complete end-to-end support — from admission to pre-departure.
            Honest guidance by EduHawk.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#consult"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
            >
              Book free counselling
            </a>
            <a
              href="#destinations"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
            >
              View countries
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-9">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              At a glance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Pharmacy Abroad at a glance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="block text-[13px] text-slate-500 font-medium mb-1.5">
                  {item.label}
                </span>
                <strong className="text-[15px] text-slate-900 font-semibold leading-snug">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + Features */}
      <section className="py-16 sm:py-20" id="overview">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Pharmacy Abroad with EduHawk
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-3.5">
                Studying Pharmacy abroad opens doors to global careers in
                clinical pharmacy, research, regulatory affairs, hospital
                pharmacy and the pharmaceutical industry. The right university
                and country make a big difference to your future opportunities.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                EduHawk helps you choose suitable universities, understand real
                costs, and complete the entire admission + visa process with
                transparency. We focus on long-term outcomes — not just getting
                you a seat.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative bg-gradient-to-br from-blue-600 to-sky-500 rounded-[20px] p-10 text-white text-center min-h-[280px] flex flex-col justify-end items-center">
              <div className="absolute top-5 left-5 bg-white/15 backdrop-blur-sm px-3.5 py-2 rounded-lg text-[13px] font-semibold">
                EduHawk · Pharmacy Abroad
              </div>
              <div className="text-5xl font-bold leading-none">20–45L</div>
              <div className="text-[15px] opacity-90 mt-1.5">
                Approx. total budget range
              </div>
              <div className="mt-6 text-sm opacity-80">
                Transparent fees · Career focused
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250"
              >
                <div
                  className={`w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 ${f.color}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 sm:py-20 bg-slate-50" id="eligibility">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
                Eligibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Who can apply?
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                Basic requirements for most popular destinations. Exact criteria
                can vary slightly by university and country.
              </p>
              <ul className="space-y-3.5">
                {eligibility.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] text-slate-800 leading-snug"
                  >
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-blue-50 text-blue-600 grid place-items-center mt-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.8"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2.5">
                Not sure if you are eligible?
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-5">
                Share your Class 12 marks and preferred countries. We will tell
                you honestly which universities and programs are realistic for
                your profile and budget.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline"
              >
                Book free eligibility check
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 sm:py-20" id="destinations">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Popular destinations for Pharmacy
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {destinations.map((d, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border ${
                  d.highlight
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                {d.highlight && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="mr-1.5"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {d.name}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed mt-5 max-w-xl">
            We help you compare fees, climate, Indian student community, safety,
            post-study work options and career pathways so you can choose the
            right country — not just the cheapest one.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-slate-50" id="process">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              How it works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Your journey with EduHawk
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {processSteps.map((s, i) => (
              <div key={i} className="flex gap-5 pb-9 relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-base grid place-items-center relative z-10">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20" id="faq">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 font-semibold text-[15px] text-left text-slate-900 flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors bg-transparent border-none cursor-pointer font-sans"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl text-slate-400 font-normal flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20" id="consult">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-8 py-14 sm:px-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to start your Pharmacy journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px]">
              Book a free counselling session. We will assess your profile,
              share realistic options and give you a clear cost & process
              roadmap.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center">
              <a
                href="https://wa.me/917632949984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline shadow-lg shadow-blue-600/25"
              >
                WhatsApp us now
              </a>
              <a
                href="tel:+917632949984"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/30 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
              >
                Call +91 76329 49984
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PharmacyAbroad;