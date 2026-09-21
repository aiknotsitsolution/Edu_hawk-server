import React, { useState } from "react";

const MedicalAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: "Programs", value: "MBBS, MD, BDS, Nursing & Allied Health" },
    { label: "Countries", value: "15+ destinations with NMC-recognised options" },
    { label: "Support", value: "End-to-end guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & outcome focus" },
  ];

  const features = [
    {
      title: "NMC-recognised universities only",
      desc: "We shortlist only universities that meet current NMC eligibility criteria so your degree remains valid in India and you can appear for FMGE/NExT without any issues.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Clear total cost breakdown",
      desc: "Tuition, hostel, living expenses, insurance, visa and travel — you see the real year-wise budget before you apply. No hidden charges.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Complete application & visa support",
      desc: "Documents, applications, offer letters, scholarship guidance and visa file preparation handled end-to-end by our experienced team.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Accommodation & pre-departure help",
      desc: "Hostel booking, flight planning, forex & banking guidance, and first-week orientation support before you leave India.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "NEET & profile guidance",
      desc: "Honest evaluation of your NEET score, Class 12 marks and budget to match the right country and university — not just any seat.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Country comparison made simple",
      desc: "Russia, Georgia, Kazakhstan, Uzbekistan, Kyrgyzstan, Philippines, Germany and more — compared on fees, safety, climate and recognition.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  const eligibility = [
    "Minimum 50% in PCB (Physics, Chemistry, Biology) in Class 12 (40% for reserved categories in many countries)",
    "NEET qualification (mandatory for Indian students as per current NMC guidelines)",
    "Age 17 years or above at the time of admission",
    "Valid passport and academic transcripts ready before deadlines",
    "Proof of funds / financial documents for the visa process",
    "English proficiency (IELTS/PTE or medium of instruction certificate as required by the university)",
  ];

  const destinations = [
    { name: "Russia", highlight: true },
    { name: "Georgia", highlight: true },
    { name: "Kazakhstan", highlight: true },
    { name: "Uzbekistan", highlight: true },
    { name: "Kyrgyzstan", highlight: true },
    { name: "Philippines", highlight: false },
    { name: "Germany", highlight: false },
    { name: "Armenia", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your NEET score, Class 12 marks, budget and preferred countries. We give an honest assessment of realistic options.",
    },
    {
      step: 2,
      title: "University shortlisting",
      desc: "We shortlist only NMC-recognised universities that match your academic profile, budget and long-term career goals.",
    },
    {
      step: 3,
      title: "Application & admission",
      desc: "Document preparation, application filing, offer letter and invitation letter support till you securely get the seat.",
    },
    {
      step: 4,
      title: "Visa guidance",
      desc: "Complete visa file preparation, financial documents checklist and interview guidance so your visa process stays smooth.",
    },
    {
      step: 5,
      title: "Pre-departure & arrival support",
      desc: "Hostel allocation, flight booking guidance, airport pickup coordination and first-week settling support.",
    },
  ];

  const faqs = [
    {
      q: "Is NEET mandatory for MBBS abroad?",
      a: "Yes. As per current NMC guidelines, Indian students must qualify NEET to pursue MBBS abroad and later practice or pursue PG in India. Without NEET, the degree will not be considered valid for registration in India.",
    },
    {
      q: "Which countries are best for MBBS abroad in 2025-26?",
      a: "Russia, Georgia, Kazakhstan, Uzbekistan and Kyrgyzstan remain the most popular for Indian students due to NMC recognition, reasonable fees and large Indian student communities. The best country depends on your budget, NEET score and long-term plans (FMGE/NExT or PG abroad).",
    },
    {
      q: "What is the total cost of MBBS abroad?",
      a: "Total cost (tuition + hostel + living) usually ranges between ₹15–40 lakhs for the complete course, depending on the country and university. We provide a transparent year-wise cost sheet before you apply so there are no surprises later.",
    },
    {
      q: "Will my degree be valid in India?",
      a: "Yes, provided you study at an NMC-recognised university, complete the required duration, pass the FMGE/NExT exam and fulfil other NMC conditions. We only recommend eligible universities.",
    },
    {
      q: "When should I start the process?",
      a: "Ideally 6–10 months before the intake. Most popular intakes are September/October. Early application gives better hostel options, scholarship chances and smoother visa processing.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen antialiased">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Medical
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-300 mb-3">
                Study Medicine · Abroad
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Medical Courses Abroad
                </span>{" "}
                with confidence
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-6 leading-relaxed">
                Limited seats and intense competition in India push thousands of students every year to pursue MBBS and other medical programs abroad. Choosing the right university and country is critical for your future practice and PG options.
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                EduHawk helps you select only NMC-eligible universities, understand real costs, and complete the entire admission + visa process with complete transparency. We focus on long-term outcomes — not just getting you a seat.
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

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Medical students studying abroad"
                className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
              />
              <div className="absolute bottom-4 left-4 bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium">
                Trusted by 1000+ Indian students
              </div>
            </div>
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
              Medical Abroad at a glance
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Medical Courses Abroad with EduHawk
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Every year, thousands of Indian students look beyond national borders for quality medical education. High competition for limited MBBS seats in India, rising fees of private colleges, and the desire for global exposure make studying medicine abroad a smart and practical choice.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                At EduHawk, we believe that studying abroad should be a carefully planned decision — not a rushed one. Our team helps you choose only NMC-recognised universities, understand the real cost of education, and complete every step of the admission and visa process with complete transparency.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                We focus on long-term outcomes. That means your degree should remain valid in India, you should be able to clear FMGE/NExT confidently, and you should feel prepared for both clinical practice and further studies.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-blue-600 text-white hover:bg-blue-700 transition-all no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="Medical education abroad"
                className="rounded-2xl shadow-xl object-cover w-full h-[380px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-bold leading-none">15–40L</div>
                <div className="text-sm opacity-90 mt-1">Approx. total budget range</div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                Basic requirements for most popular destinations. Exact criteria can vary slightly by university and country. We always verify the latest rules before shortlisting options for you.
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
                Share your Class 12 marks and NEET details. We will tell you honestly which countries and universities are realistic for your profile and budget. No false hopes, only practical guidance.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Popular destinations for Medical
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
              We help you compare fees, climate, Indian student community, safety and NMC recognition so you can choose the right country — not just the cheapest one. Every destination has its own strengths.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
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

          {/* Destination Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="relative rounded-2xl overflow-hidden h-56 group">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                alt="Study in Russia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Russia</h4>
                  <p className="text-white/80 text-sm">Top choice for Indian students</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-56 group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80"
                alt="Study in Georgia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Georgia</h4>
                  <p className="text-white/80 text-sm">English-medium & European lifestyle</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-56 group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80"
                alt="Study in Kazakhstan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Kazakhstan</h4>
                  <p className="text-white/80 text-sm">Affordable & growing Indian community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-slate-50" id="process">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
              How it works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Your journey with EduHawk
            </h2>
            <p className="text-slate-500 text-[15px] max-w-xl mx-auto">
              From the first counselling call to your arrival at the university, we stay with you at every step.
            </p>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
              Ready to start your Medical journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">
              Book a free counselling session. We will assess your profile, share realistic options and give you a clear cost & process roadmap — without any pressure.
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

export default MedicalAbroad;