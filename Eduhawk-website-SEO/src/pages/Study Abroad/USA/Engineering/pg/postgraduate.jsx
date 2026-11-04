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
import heroImg from "../../../../../Images/Abroad/USA/Engineering_PG/engineering-pg.webp";
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

const overviewParas = [
  "**Indian students** can develop advanced technical skills, research techniques, and professionally useful knowledge by pursuing **postgraduate engineering education in the United States**. Master's degree programs in [computer engineering](/courses/pg/computer-engineering), [mechanical engineering](/courses/pg/mechanical-engineering), [civil engineering](/courses/pg/civil-engineering), [electrical engineering](/courses/pg/electrical-engineering), [chemical engineering](/courses/pg/chemical-engineering), [aerospace engineering](/courses/pg/aerospace-engineering), and [biomedical engineering](/courses/pg/biomedical-engineering) are offered by academic institutions.",
  "Depending on the degree framework and institutional structure, most master's programs take **one to two years** to complete. Students get access to cutting-edge labs, research initiatives, collaborations with business partners, and chances to focus on a particular discipline.",
  "A **relevant bachelor's degree**, official academic records, and proof of **English language proficiency** are standard requirements for admission. Institutions have different requirements for the **Graduate Record Examination (GRE)**.",
  "Subject to employer requirements and pertinent employment authorization laws, graduates may follow career paths in engineering, technology, scientific research, manufacturing, and infrastructure development. Prospective candidates can also explore [Undergraduate Engineering in the USA](/courses/ug/engineering) or [connect with Edu Hawk Worldwide counsellors](/contact).",
];

const PostgraduateEngineering = () => (
  <EhpShell>
    <SeoHead
      title="Postgraduate Engineering in USA for Indian Students | MS in USA | Edu Hawk"
      description="Study postgraduate engineering in the USA after your bachelor's. Explore 1–2 year MS / MEng programs — Computer, Mechanical, Civil, Electrical, ECE, Chemical, Aerospace, Biomedical & Automobile — with GRE guidance, scholarships, assistantships, careers and visa support from Edu Hawk Worldwide."
      path="/courses/pg/engineering"
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
          Engineering <span className="mx-1.5">›</span> Postgraduate (PG)
        </>
      }
      eyebrow="Study Engineering · USA · Postgraduate"
      lead="Postgraduate Engineering in the"
      accent="USA"
      tail="for Indian Students"
      paras={[
        "A master's degree in engineering in the USA builds advanced technical skills, research expertise and specialisations that employers value. Universities offer 1–2 year MS and MEng programs with cutting-edge labs, industry collaborations and hands-on research.",
        "Edu Hawk Worldwide guides you through program selection, GRE and English test planning, applications, assistantships, scholarships and the complete visa journey.",
      ]}
      primary={{
        href: "https://api.whatsapp.com/send?phone=919630736070",
        external: true,
        label: "Book free counselling",
      }}
      secondary={{ href: "#branches", label: "Explore specialisations" }}
      img={heroImg}
      imgAlt="US engineering graduate research campus"
      imgDims={{ w: 1920, h: 1526 }}
    />

    {/* HIGHLIGHTS */}
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <StatGrid items={highlights} />
          </div>
          <div className="lg:col-span-5">
            <EligibilityCtaCard level="PG" />
          </div>
        </div>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <EhpHead eyebrow="Overview" title="Postgraduate Engineering in the USA for Indian Students" />
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
              height={750}
              alt="Graduate engineering students conducting research in a university laboratory"
              className="w-full h-full object-cover"
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

    {/* BRANCHES */}
    <section id="branches" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <EhpHead eyebrow="Programs" title="Choose Your Master's Engineering Specialisation" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {branches.map((b) => (
            <Link
              key={b.slug}
              to={`/courses/pg/${b.slug}`}
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
      title="Start your PG Engineering journey to the USA"
      desc="From specialisation and GRE planning to university applications, assistantships, scholarships and visa — Edu Hawk Worldwide supports you at every step."
    />
  </EhpShell>
);

export default PostgraduateEngineering;
