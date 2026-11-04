import React from "react";
import { Link } from "react-router-dom";
import {
  EhpShell,
  EhpHero,
  EhpHead,
  StatGrid,
  StepTimeline,
  FaqList,
  CtaBand,
  EligibilityCtaCard,
  formatRichText,
} from "../../../../../component/CoursePageKit";
import SeoHead from "../../../../../component/SeoHead";
import heroImg from "../../../../../Images/Abroad/USA/Engineering_UG/engineering-ug.webp";
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
    a: "Yes they can. Long as they meet the college’s academic rules, subject requirements and English language standards they are eligible to apply.",
  },
  {
    q: "How long does it take to complete an engineering degree in the USA?",
    a: "Most programs take four years of full-time study.",
  },
  {
    q: "How much does engineering education in the USA cost?",
    a: "Tuition usually ranges from USD 25,000 to USD 65,000 or more each year. This doesn’t include living expenses. Costs depend on the school and the program.",
  },
  {
    q: "Do I need to take the SAT for engineering admission in the USA?",
    a: "Not always. Some schools require it others don’t. Requirements can change from year to year. It’s best to check with each college.",
  },
  {
    q: "Can Indian engineering students get aid in the USA?",
    a: "Yes. Many universities give scholarships or financial help to students who qualify, especially based on academic performance.",
  },
];

const overviewParas = [
  "Choosing to study **undergraduate engineering in the USA** is a step for many **Indian students**. It opens doors to notch tech tools, modern labs, hands-on learning and real research projects. Across the United States colleges offer engineering programs with many options. Like [computer engineering](/courses/ug/computer-engineering), [mechanical engineering](/courses/ug/mechanical-engineering), [civil engineering](/courses/ug/civil-engineering), [electrical engineering](/courses/ug/electrical-engineering), [aerospace engineering](/courses/ug/aerospace-engineering), [chemical engineering](/courses/ug/chemical-engineering) and [biomedical engineering](/courses/ug/biomedical-engineering).",
  "Engineering bachelor’s degrees take **four years** to finish. During those years students learn skills, how to think critically and how to solve tough problems. They also often do internships, work with companies and take part in research projects. This helps them gain real-world experience before they graduate.",
  "To get into these programs students must have passed **Class 12** done the required subjects and show they can understand and speak English well.",
  "**SAT or ACT** results are also required by several colleges. Not all do. It’s important to check each college’s rules.",
  "Costs can vary a lot. Tuition can be between **USD 25,000 and USD 65,000 or more per year**. This doesn’t include housing, food and other living costs.. Some schools offer scholarships or financial help for international students, especially those who do well academically.",
  "After graduation students can work in engineering fields, or go on to higher studies such as [Postgraduate Engineering in the USA](/courses/pg/engineering). Job opportunities depend on company needs and visa rules in the US.",
];

const UndergraduateEngineeringUG = () => (
  <EhpShell>
    <SeoHead
      title="Undergraduate Engineering in USA for Indian Students | B.E. 2026 | Edu Hawk"
      description="Study Bachelor of Engineering in the USA after Class 12. Explore UG engineering branches — Computer, Mechanical, Civil, Electrical, ECE, Chemical, Aerospace, Biomedical & Automobile — with fees, eligibility, universities and visa guidance from Edu Hawk Worldwide."
      path="/courses/ug/engineering"
    >
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
    </SeoHead>

    {/* HERO */}
    <EhpHero
      crumb={
        <>
          Engineering <span className="mx-1.5">›</span> Undergraduate (UG)
        </>
      }
      eyebrow="Study Engineering · USA · Undergraduate"
      lead="Undergraduate Engineering in the"
      accent="USA"
      tail="for Indian Students"
      paras={[
        "Studying engineering in the USA opens doors to modern labs, hands-on learning and real research projects. US colleges offer bachelor's programs across computer, mechanical, civil, electrical, aerospace, chemical, biomedical and more branches.",
        "Edu Hawk Worldwide guides you through branch selection, university shortlisting, applications, scholarships and the complete visa journey.",
      ]}
      primary={{
        href: "https://api.whatsapp.com/send?phone=919630736070",
        external: true,
        label: "Book free counselling",
      }}
      secondary={{ href: "#branches", label: "Explore branches" }}
      img={heroImg}
      imgAlt="US engineering university campus"
      imgDims={{ w: 1920, h: 1440 }}
    />

    {/* HIGHLIGHTS */}
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <StatGrid items={highlights} />
        <EligibilityCtaCard level="UG" />
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <EhpHead eyebrow="Overview" title="Undergraduate Engineering in USA for Indian Students" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5">
            {overviewParas.map((p, i) => (
              <p key={i} className="text-slate-500 text-[15px] leading-relaxed">
                {formatRichText(p)}
              </p>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/2]">
            <img
              src={overviewImg}
              width={1000}
              height={666}
              alt="Engineering students working in a university fabrication laboratory"
              className="w-full h-full object-cover"
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

    {/* BRANCHES */}
    <section id="branches" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <EhpHead eyebrow="Programs" title="Choose Your Engineering Branch" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {branches.map((b) => (
            <Link
              key={b.slug}
              to={`/courses/ug/${b.slug}`}
              className="group ehp-card bg-white border border-slate-200 rounded-xl p-5 no-underline"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {b.name}
                </h3>
                <span className="text-slate-300 group-hover:text-blue-600 transition-colors">
                  →
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* APPLICATION PROCESS */}
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <EhpHead eyebrow="Step by step" title="Application & Visa Process" />
        <StepTimeline steps={steps} />
      </div>
    </section>

    {/* FAQ */}
    <section id="faq" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-1.5">
            FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FaqList faqs={faqs} />
        </div>
      </div>
    </section>

    {/* CTA */}
    <CtaBand
      title="Start your UG Engineering journey to the USA"
      desc="From branch selection to university applications, scholarships and visa — Edu Hawk Worldwide supports you at every step."
    />
  </EhpShell>
);

export default UndergraduateEngineeringUG;
