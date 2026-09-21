import React, { useState } from "react";

const Engineering = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: "Programs", value: "B.Tech, M.Tech, MS & specialised engineering courses" },
    { label: "Countries", value: "Germany, Canada, UK, USA, Australia & more" },
    { label: "Support", value: "Complete end-to-end guidance from profile to arrival" },
    { label: "Approach", value: "Industry-focused · Transparent fees · Honest counselling" },
  ];

  const features = [
    {
      title: "Right university for your goals",
      desc: "We carefully match your academic profile, preferred branch and budget with universities that have strong industry connections, modern labs and good placement outcomes.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Clear cost planning",
      desc: "You get a realistic breakdown of tuition, living expenses, insurance, travel and visa costs before making any decision.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Complete application support",
      desc: "From shortlisting and SOP writing to applications, scholarships and visa documentation — we stay with you throughout the process.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Accommodation & pre-departure help",
      desc: "We help you plan housing, flights, banking and your first weeks on campus so you settle in smoothly.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "English & profile guidance",
      desc: "Practical support for IELTS/PTE, Statement of Purpose, Letters of Recommendation, resume and interview preparation.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Honest destination comparison",
      desc: "Compare Germany, Canada, UK, USA, Australia and more on tuition, work rights, post-study options and career outcomes.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const eligibility = [
    "Class 12 with PCM (Physics, Chemistry, Mathematics) with required percentage (for Bachelor’s)",
    "Relevant Bachelor’s degree in Engineering or related field with good academic record (for Master’s)",
    "English language score (IELTS / PTE / TOEFL) as required by the university",
    "Valid passport and complete academic transcripts",
    "Strong Statement of Purpose and Letters of Recommendation",
    "Proof of funds for visa and tuition requirements",
  ];

  const destinations = [
    { name: "Germany", highlight: true },
    { name: "Canada", highlight: true },
    { name: "United Kingdom", highlight: true },
    { name: "United States", highlight: true },
    { name: "Australia", highlight: true },
    { name: "Ireland", highlight: false },
    { name: "Netherlands", highlight: false },
    { name: "New Zealand", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your academics, preferred branch, budget and target countries. We give an honest assessment of realistic options.",
    },
    {
      step: 2,
      title: "University & course shortlisting",
      desc: "We shortlist universities that match your profile, budget and long-term career goals — not just rankings.",
    },
    {
      step: 3,
      title: "Application & offer",
      desc: "Full support with applications, SOP, LORs, documents and scholarship opportunities until you receive offers.",
    },
    {
      step: 4,
      title: "Visa guidance",
      desc: "Complete visa file preparation, financial documents checklist and interview guidance.",
    },
    {
      step: 5,
      title: "Pre-departure & arrival support",
      desc: "Help with accommodation, flights, banking and settling into campus life.",
    },
  ];

  const faqs = [
    {
      q: "Which country is best for Engineering abroad?",
      a: "Germany is excellent for low/no tuition + strong industry links. Canada and Australia offer good post-study work rights. USA and UK are strong for research and top rankings. The best choice depends on your budget, branch and career plans.",
    },
    {
      q: "How much does it cost to study Engineering abroad?",
      a: "Costs vary widely. Germany can be very affordable (low or no tuition). Canada, UK, USA and Australia typically range higher. We provide a clear country-wise cost estimate before you apply.",
    },
    {
      q: "Do I need IELTS for Engineering abroad?",
      a: "Most universities require IELTS, PTE or TOEFL. Some universities in Germany and a few others may accept alternative proof of English or offer waivers. We check requirements for each university.",
    },
    {
      q: "Can I work while studying Engineering?",
      a: "Yes. Most popular destinations allow 20 hours/week part-time work during term and full-time during holidays (subject to visa rules).",
    },
    {
      q: "When should I start the process?",
      a: "Ideally 8–12 months before your intended intake. This gives enough time for tests, shortlisting, applications and visa processing.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen antialiased">
      {/* Hero with Image */}
      <section className="relative h-[520px] md:h-[580px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Engineering students and modern technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="text-sm text-white/60 mb-5">
            Home <span className="mx-1.5">›</span> Study Abroad{" "}
            <span className="mx-1.5">›</span> Engineering
          </div>
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
            Study Engineering · Abroad
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mb-5 text-white">
            Study{" "}
            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
              Engineering Abroad
            </span>{" "}
            with confidence
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            Top universities, strong industry exposure, modern labs and complete
            end-to-end support — from admission to pre-departure. Honest
            guidance by EduHawk.
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
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base border-[1.5px] border-white/40 text-white hover:bg-white/10 hover:border-white transition-all no-underline"
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
              Engineering Abroad at a glance
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

      {/* Overview + Image */}
      <section className="py-16 sm:py-20" id="overview">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Engineering Abroad with EduHawk
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Studying Engineering abroad opens access to advanced
                laboratories, industry projects, research opportunities and
                strong global career pathways across Mechanical, Computer
                Science, Civil, Electrical, Electronics, AI, Robotics and many
                specialised branches.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Countries like Germany, Canada, UK, USA and Australia offer
                excellent combinations of academic quality, practical exposure
                and post-study work opportunities that help Indian students
                build international careers.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                EduHawk helps you choose the right country and university based
                on your academic profile, preferred branch and budget — with
                complete transparency on costs and realistic outcomes.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering lab and technology"
                className="w-full h-[340px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
                <p className="text-white text-sm font-medium">
                  Modern labs · Industry projects · Global careers
                </p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
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

      {/* Image Banner */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden h-[280px] md:h-[340px]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
              alt="Engineering technology and innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/55 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Innovation. Industry. Impact.
                </h3>
                <p className="text-white/85 max-w-lg mx-auto">
                  From AI and robotics to sustainable energy and advanced
                  manufacturing — build a future-ready engineering career.
                </p>
              </div>
            </div>
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
                vary by university, course level and country.
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
                Share your Class 12 / bachelor’s marks, preferred branch and
                budget. We will tell you honestly which countries and
                universities are realistic for your profile.
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
              Popular destinations for Engineering
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
            We help you compare tuition fees, living costs, post-study work
            rights, industry exposure and career outcomes so you choose the
            right country — not just the most popular one.
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
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl px-8 py-14 sm:px-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
              Ready to start your Engineering journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">
              Book a free counselling session. We will assess your profile,
              share realistic options and give you a clear cost & process
              roadmap.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center relative">
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

export default Engineering;