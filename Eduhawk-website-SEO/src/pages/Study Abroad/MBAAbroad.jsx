import React, { useState } from "react";

const MBAAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: "Programs", value: "MBA, Global MBA, Executive MBA & specialised MBAs" },
    { label: "Countries", value: "USA, UK, Canada, Australia, Germany, Ireland & more" },
    { label: "Support", value: "Complete end-to-end guidance from profile to arrival" },
    { label: "Approach", value: "Career-focused · Transparent fees · Honest counselling" },
  ];

  const features = [
    {
      title: "Right university for your goals",
      desc: "We match your academic background, work experience, preferred specialisation and budget with B-schools that offer strong industry connections and good ROI.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Clear cost planning",
      desc: "You receive a realistic breakdown of tuition, living expenses, insurance, travel and visa costs before making any commitment.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Complete application support",
      desc: "From shortlisting and SOP/essays to applications, scholarships, LORs and visa documentation — we stay with you throughout the process.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Accommodation & pre-departure help",
      desc: "We help you plan housing, flights, banking and your first weeks on campus so you settle in smoothly.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Profile & interview guidance",
      desc: "Practical support for GMAT/GRE (if required), essays, Statement of Purpose, Letters of Recommendation and interview preparation.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Honest destination comparison",
      desc: "Compare USA, UK, Canada, Australia, Germany and more on tuition, rankings, post-study work rights and long-term career outcomes.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const eligibility = [
    "Bachelor’s degree in any discipline with required percentage / CGPA",
    "Work experience preferred (especially for top B-schools and Executive MBA)",
    "GMAT / GRE score if required by the university (many programs now accept without it)",
    "English language score (IELTS / PTE / TOEFL) as required",
    "Strong Statement of Purpose / essays and Letters of Recommendation",
    "Valid passport and complete academic + professional documents",
  ];

  const destinations = [
    { name: "United States", highlight: true },
    { name: "United Kingdom", highlight: true },
    { name: "Canada", highlight: true },
    { name: "Australia", highlight: true },
    { name: "Germany", highlight: true },
    { name: "Ireland", highlight: true },
    { name: "Singapore", highlight: false },
    { name: "France", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your academics, work experience, preferred specialisation, budget and target countries. We give an honest assessment.",
    },
    {
      step: 2,
      title: "University & course shortlisting",
      desc: "We shortlist B-schools that match your profile, budget and career goals — focusing on ROI and industry relevance.",
    },
    {
      step: 3,
      title: "Application & offer",
      desc: "Full support with applications, essays, SOP, LORs, documents and scholarship opportunities until you receive offers.",
    },
    {
      step: 4,
      title: "Visa guidance",
      desc: "Complete visa file preparation, financial documents checklist and interview guidance.",
    },
    {
      step: 5,
      title: "Pre-departure & arrival support",
      desc: "Help with accommodation, flights, banking and settling into campus and professional life.",
    },
  ];

  const faqs = [
    {
      q: "Which country is best for MBA abroad?",
      a: "USA and UK dominate global rankings. Canada and Australia offer good post-study work rights. Germany and Ireland provide strong value. The best choice depends on your budget, work experience, preferred specialisation and long-term career plans.",
    },
    {
      q: "How much does an MBA abroad cost?",
      a: "Costs vary widely. Top US and UK programs are expensive. Canada, Australia, Germany and Ireland offer more affordable options. We provide a clear country-wise cost estimate before you apply.",
    },
    {
      q: "Do I need GMAT or GRE for MBA abroad?",
      a: "Many universities still require GMAT/GRE, especially top-ranked ones. However, a growing number of programs now accept applications without these scores or offer waivers based on work experience and academic profile.",
    },
    {
      q: "Is work experience mandatory for MBA?",
      a: "Not always mandatory for all programs, but 2–5 years of relevant work experience significantly strengthens your application and is preferred by most reputed B-schools.",
    },
    {
      q: "When should I start the process?",
      a: "Ideally 10–14 months before your intended intake. This gives enough time for tests (if needed), shortlisting, essays, applications and visa processing.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen antialiased">
      {/* Hero with Image */}
      <section className="relative h-[520px] md:h-[580px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
          alt="MBA students and business leadership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/55" />
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="text-sm text-white/60 mb-5">
            Home <span className="mx-1.5">›</span> Study Abroad{" "}
            <span className="mx-1.5">›</span> MBA
          </div>
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
            Study MBA · Abroad
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mb-5 text-white">
            Study{" "}
            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
              MBA Abroad
            </span>{" "}
            with confidence
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            Top B-schools, strong industry exposure, global networks and
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
              MBA Abroad at a glance
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
                MBA Abroad with EduHawk
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                An MBA from a reputed international B-school can significantly
                accelerate your career, expand your global network and open
                doors to leadership roles across industries.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Whether you are looking for a full-time MBA, specialised MBA
                (Finance, Marketing, Business Analytics, HR, International
                Business) or Executive MBA, the right country and university
                make a major difference in ROI and career outcomes.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                EduHawk helps you choose the right B-school based on your
                academic profile, work experience, preferred specialisation and
                budget — with complete transparency on costs and realistic
                outcomes.
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="MBA classroom and professional networking"
                className="w-full h-[340px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
                <p className="text-white text-sm font-medium">
                  Leadership · Strategy · Global Network · Career Growth
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
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Business leadership and professional success"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/55 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Lead. Grow. Transform.
                </h3>
                <p className="text-white/85 max-w-lg mx-auto">
                  From strategy and finance to analytics and entrepreneurship —
                  build a powerful global career with the right MBA.
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
                vary by university, program type and country.
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
                Share your academics, work experience, preferred specialisation
                and budget. We will tell you honestly which countries and
                B-schools are realistic for your profile.
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
              Popular destinations for MBA
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
            We help you compare tuition fees, rankings, post-study work rights,
            industry exposure and long-term career outcomes so you choose the
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
              Ready to start your MBA journey?
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

export default MBAAbroad;