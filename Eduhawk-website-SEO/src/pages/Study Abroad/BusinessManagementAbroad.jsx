import React, { useState } from "react";

const BusinessManagementAbroad = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: "Programs", value: "BBA, MBA, MSc Management, Finance & more" },
    { label: "Countries", value: "15+ destinations with strong business schools" },
    { label: "Support", value: "End-to-end guidance from profile to arrival" },
    { label: "Approach", value: "Transparent fees, honest counselling & outcome focus" },
  ];

  const features = [
    {
      title: "Recognised universities only",
      desc: "We shortlist universities and business schools that are well-recognised globally and valued by employers worldwide.",
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Clear total cost breakdown",
      desc: "Tuition, hostel, living expenses, insurance, visa and travel — you get a complete year-wise budget before applying.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Complete application & visa support",
      desc: "Documents, applications, SOP & LOR guidance, scholarship support and visa file preparation handled end-to-end.",
      color: "bg-fuchsia-50 text-fuchsia-600",
    },
    {
      title: "Accommodation & pre-departure help",
      desc: "Hostel/PG booking, flight planning, forex guidance and first-week orientation support before you leave India.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Profile & eligibility guidance",
      desc: "Honest evaluation of your academic background, work experience and budget to match the right country and university.",
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Country comparison made simple",
      desc: "USA, UK, Canada, Australia, Germany, Singapore and more — compared on fees, rankings, internships and career outcomes.",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const eligibility = [
    "For Bachelor’s (BBA): Minimum 50–60% in Class 12 from a recognised board",
    "For Master’s / MBA: Relevant Bachelor’s degree with minimum 55–60% marks",
    "English proficiency (IELTS / PTE / TOEFL / Duolingo as required by the university)",
    "Work experience preferred (especially for MBA – 1 to 3 years in many cases)",
    "Statement of Purpose (SOP), Letters of Recommendation and sometimes GMAT/GRE",
    "Proof of funds / financial documents for the visa process",
  ];

  const destinations = [
    { name: "USA", highlight: true },
    { name: "UK", highlight: true },
    { name: "Canada", highlight: true },
    { name: "Australia", highlight: true },
    { name: "Germany", highlight: true },
    { name: "Singapore", highlight: false },
    { name: "Ireland", highlight: false },
    { name: "Netherlands", highlight: false },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Free profile evaluation",
      desc: "Share your academic background, work experience, budget and preferred countries. We give an honest assessment.",
    },
    {
      step: 2,
      title: "University shortlisting",
      desc: "We shortlist recognised universities and business schools that match your profile, budget and career goals.",
    },
    {
      step: 3,
      title: "Application & admission",
      desc: "Document preparation, SOP & LOR guidance, application filing and offer letter support till you secure the seat.",
    },
    {
      step: 4,
      title: "Visa guidance",
      desc: "Complete visa file preparation, financial documents checklist and interview guidance.",
    },
    {
      step: 5,
      title: "Pre-departure & arrival support",
      desc: "Accommodation support, flight guidance, airport pickup coordination and first-week settling help.",
    },
  ];

  const faqs = [
    {
      q: "Is GMAT or GRE mandatory for MBA abroad?",
      a: "Not always. Many universities have made GMAT/GRE optional or waived it, especially if you have strong academics or work experience. We guide you based on the latest requirements of each university.",
    },
    {
      q: "Which countries are best for Business Management abroad?",
      a: "USA, UK, Canada, Australia, Germany and Singapore are among the top choices due to strong business schools, internships, industry exposure and post-study work options. The best country depends on your budget and long-term goals.",
    },
    {
      q: "What is the total cost of studying Business Management abroad?",
      a: "Total cost usually ranges between ₹20–80 lakhs depending on the country, university and program (BBA vs MBA). Germany and some European countries can be more affordable. We provide a clear cost sheet before you apply.",
    },
    {
      q: "What are the career opportunities after Business Management?",
      a: "Graduates can work in consulting, marketing, finance, operations, human resources, business analytics, entrepreneurship and leadership roles across industries. Many countries also offer post-study work visas.",
    },
    {
      q: "When should I start the process?",
      a: "Ideally 8–12 months before the intake. Early application helps with better university options, scholarships and smoother visa processing.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen antialiased">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-white/50 mb-5">
                Home <span className="mx-1.5">›</span> Study Abroad{" "}
                <span className="mx-1.5">›</span> Business Management
              </div>
              
              <div className="text-xs font-semibold tracking-wider uppercase text-violet-300 mb-3">
                Study Business Management · Abroad
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Study{" "}
                <span className="bg-gradient-to-r from-violet-400 to-amber-300 bg-clip-text text-transparent">
                  Business Management Abroad
                </span>{" "}
                with confidence
              </h1>
              
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-5 leading-relaxed">
                Business Management is one of the most versatile and high-demand fields. Studying abroad gives you global exposure, strong industry connections and better career opportunities.
              </p>
              
              <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                EduHawk helps you choose the right country and university, understand real costs, and complete the entire admission + visa process with complete transparency.
              </p>
              
              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#consult"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base bg-violet-600 text-white hover:bg-violet-700 transition-all no-underline shadow-lg shadow-violet-600/25"
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                alt="Business Management students abroad"
                className="rounded-2xl shadow-2xl object-cover w-full h-[440px]"
              />
              <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium">
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
            <div className="text-xs font-semibold tracking-wider uppercase text-violet-600 mb-1.5">
              At a glance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Business Management Abroad at a glance
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
              <div className="text-xs font-semibold tracking-wider uppercase text-violet-600 mb-1.5">
                Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Business Management Courses Abroad with EduHawk
              </h2>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Business Management opens doors to leadership roles across industries. Studying abroad gives students exposure to global business practices, case studies, internships and strong networking opportunities.
              </p>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Countries like USA, UK, Canada, Australia, Germany and Singapore are popular among Indian students because of top-ranked business schools, industry connections and post-study work options.
              </p>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                At EduHawk, we help you choose the right destination based on your academic background, work experience, budget and career goals — with complete transparency in fees and process.
              </p>
              
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-violet-600 text-white hover:bg-violet-700 transition-all no-underline"
              >
                Get free profile evaluation
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80"
                alt="Business education abroad"
                className="rounded-2xl shadow-xl object-cover w-full h-[390px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-violet-600 to-purple-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-bold leading-none">20–80L</div>
                <div className="text-sm opacity-90 mt-1">Approx. total budget range</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-250"
              >
                <div className={`w-[42px] h-[42px] rounded-xl grid place-items-center mb-4 ${f.color}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
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
              <div className="text-xs font-semibold tracking-wider uppercase text-violet-600 mb-1.5">
                Eligibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Who can apply for Business Management abroad?
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                Basic requirements for most popular destinations. Exact criteria can vary by university and program.
              </p>
              
              <ul className="space-y-3.5">
                {eligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-800 leading-snug">
                    <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-violet-50 text-violet-600 grid place-items-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
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
                Share your academic background, work experience and preferred countries. We will tell you honestly which options are realistic for your profile and budget.
              </p>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-semibold text-[15px] bg-violet-600 text-white hover:bg-violet-700 transition-all no-underline"
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
            <div className="text-xs font-semibold tracking-wider uppercase text-violet-600 mb-1.5">
              Where to study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Popular destinations for Business Management
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">
              We help you compare fees, rankings, internships, career outcomes, safety and recognition so you can choose the right country.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {destinations.map((d, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border ${
                  d.highlight
                    ? "bg-violet-50 border-violet-200 text-violet-700"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                {d.highlight && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mr-1.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {d.name}
              </span>
            ))}
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="relative rounded-2xl overflow-hidden h-60 group">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
                alt="Study Business in USA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">USA</h4>
                  <p className="text-white/80 text-sm">Top destination for MBA & Business</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-60 group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80"
                alt="Study Business in UK"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">UK</h4>
                  <p className="text-white/80 text-sm">World-class business schools</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-60 group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80"
                alt="Study Business in Canada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-semibold text-lg">Canada</h4>
                  <p className="text-white/80 text-sm">Strong job market & PR pathway</p>
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
            <div className="text-xs font-semibold tracking-wider uppercase text-violet-600 mb-1.5">
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 text-white font-bold text-base grid place-items-center relative z-10">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
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
            <div className="text-xs font-semibold tracking-wider uppercase text-violet-600 mb-1.5">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
              Ready to start your Business Management journey?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed text-[15px] relative">
              Book a free counselling session. We will assess your profile, share realistic options and give you a clear cost & process roadmap.
            </p>
            
            <div className="flex flex-wrap gap-3.5 justify-center relative">
              <a
                href="https://wa.me/917632949984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] font-semibold text-base bg-violet-600 text-white hover:bg-violet-700 transition-all no-underline shadow-lg shadow-violet-600/25"
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

export default BusinessManagementAbroad;