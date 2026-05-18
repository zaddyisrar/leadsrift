import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    name: "Commercial Cleaning",
    icon: "▥",
    description:
      "Outbound built around property managers, facility managers, offices, and commercial contracts.",
    targets: ["Facility managers", "Office buildings", "Property managers"],
  },
  {
    name: "Roofing",
    icon: "⌂",
    description:
      "Pipeline systems for roofing companies targeting property owners, managers, and commercial decision-makers.",
    targets: ["Commercial properties", "Property owners", "Building managers"],
  },
  {
    name: "Solar",
    icon: "☼",
    description:
      "Structured outreach for solar providers that need qualified conversations instead of cold traffic.",
    targets: ["Homeowners", "Businesses", "Energy decision-makers"],
  },
  {
    name: "Engineering",
    icon: "⚙",
    description:
      "Lead generation support for technical service firms that need serious B2B conversations.",
    targets: ["Project owners", "Contractors", "Industrial buyers"],
  },
  {
    name: "SaaS",
    icon: "☁",
    description:
      "Outbound systems for SaaS companies targeting buyers, operators, teams, and decision-makers.",
    targets: ["Founders", "Operators", "Department heads"],
  },
  {
    name: "Finance / Merchant Processing",
    icon: "▤",
    description:
      "Appointment-setting systems for finance and payment service providers targeting business owners.",
    targets: ["Business owners", "Retail operators", "Service businesses"],
  },
  {
    name: "Real Estate",
    icon: "▥",
    description:
      "Cold outreach and follow-up systems for agents, agencies, investors, and property-focused businesses.",
    targets: ["Property owners", "Investors", "Local buyers"],
  },
  {
    name: "Dental",
    icon: "♢",
    description:
      "Growth systems for dental clinics and providers that need consistent patient or partnership conversations.",
    targets: ["Clinic owners", "Patients", "Local communities"],
  },
  {
    name: "Local Services",
    icon: "✕",
    description:
      "Outbound systems for local service businesses that need booked calls, estimates, and qualified leads.",
    targets: ["Local buyers", "Homeowners", "Business owners"],
  },
  {
    name: "Restaurants",
    icon: "⋔",
    description:
      "Outreach support for restaurants, hospitality brands, suppliers, and local growth campaigns.",
    targets: ["Restaurant owners", "Hospitality buyers", "Local partners"],
  },
];

const wires = [
  { path: "M330 248 C300 185, 370 145, 330 78", dot: [330, 78] },
  { path: "M390 275 C455 210, 505 185, 570 155", dot: [570, 155] },
  { path: "M410 330 C475 300, 540 350, 620 315", dot: [620, 315] },
  { path: "M390 385 C455 430, 480 485, 560 505", dot: [560, 505] },
  { path: "M350 415 C405 485, 430 555, 505 610", dot: [505, 610] },
  { path: "M320 420 C350 500, 280 565, 330 635", dot: [330, 635] },
  { path: "M270 385 C210 430, 190 500, 95 555", dot: [95, 555] },
  { path: "M250 335 C190 305, 145 360, 60 335", dot: [60, 335] },
  { path: "M270 285 C215 245, 165 265, 90 230", dot: [90, 230] },
  { path: "M300 250 C250 185, 230 130, 170 95", dot: [170, 95] },
];

const bestFit = [
  "Businesses where one qualified conversation can create real pipeline value.",
  "Companies with clear offers but inconsistent outbound execution.",
  "Service providers that need appointment flow without building an internal SDR team.",
  "B2B or local businesses that rely on follow-up, trust, and direct conversations.",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-44 pb-24 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-300">
            LEADSRIFT INDUSTRIES
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Built for businesses that need consistent qualified conversations.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            LeadsRift adapts outbound systems around your market, offer,
            decision-makers, and follow-up cycle — not generic lead generation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:bg-white"
            >
              Book Free Strategy Call
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-cyan-300/30 px-7 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-cyan-300/10 bg-[#03060b] px-6 py-20 md:py-24">
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-300/8 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Industry Network
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              One outbound engine. Different markets. Same goal.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              The offer changes. The audience changes. The system stays clear:
              target the right people, start the right conversations, qualify
              the right opportunities, and book the right calls.
            </p>

            <div className="mt-8 flex max-w-xl items-center gap-5 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.05] p-5 backdrop-blur-xl">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-black/35 text-2xl text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.22)]">
                ✦
              </div>

              <p className="text-sm leading-7 text-cyan-50">
                Best for businesses where one qualified conversation can create
                real pipeline value.
              </p>
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-[600px] sm:block lg:max-w-[620px]">
            <div className="absolute left-[22%] top-[20%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            <div className="absolute right-[16%] top-[34%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            <div className="absolute bottom-[22%] left-[34%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            <div className="absolute bottom-[34%] right-[22%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

            <svg
              className="absolute inset-0 z-10 h-full w-full overflow-visible"
              viewBox="0 0 660 660"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="industriesWireGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {wires.map((wire) => (
                <g key={wire.path}>
                  <path
                    d={wire.path}
                    stroke="rgba(34,211,238,0.95)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="url(#industriesWireGlow)"
                  />

                  <circle
                    cx={wire.dot[0]}
                    cy={wire.dot[1]}
                    r="5"
                    fill="rgb(103,232,249)"
                    filter="url(#industriesWireGlow)"
                  />
                </g>
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-20 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[45px]" />
            <div className="absolute left-1/2 top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-[28px]" />

            <div className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <Image
                src="/leadsrift-symbol.png"
                alt="LeadsRift Symbol"
                width={120}
                height={120}
                className="relative z-10 h-24 w-24 object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.95)]"
              />
            </div>

            {industries.map((industry, index) => {
              const positions = [
                "left-[47%] top-[4%] -translate-x-1/2",
                "right-[5%] top-[18%]",
                "right-[0%] top-[42%]",
                "right-[6%] bottom-[22%]",
                "right-[22%] bottom-[4%]",
                "left-[43%] bottom-[-2%] -translate-x-1/2",
                "left-[10%] bottom-[14%]",
                "left-[3%] top-[45%]",
                "left-[8%] top-[28%]",
                "left-[18%] top-[12%]",
              ];

              return (
                <div
                  key={industry.name}
                  className={`absolute ${positions[index]} z-40 hidden items-center gap-3 rounded-2xl border border-cyan-300/35 bg-[#07111f]/90 px-4 py-3 text-sm font-medium text-white shadow-[0_0_22px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.28)] sm:flex`}
                >
                  <span className="text-xl leading-none text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                    {industry.icon}
                  </span>

                  <span>{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-2xl text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                  {industry.icon}
                </div>

                <h2 className="text-2xl font-semibold">{industry.name}</h2>

                <p className="mt-4 min-h-[96px] text-sm leading-7 text-white/60">
                  {industry.description}
                </p>

                <div className="mt-6 space-y-3">
                  {industry.targets.map((target) => (
                    <div
                      key={target}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                      <span>{target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Best Fit
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              LeadsRift works best when conversations directly create revenue.
            </h2>
          </div>

          <div className="grid gap-4">
            {bestFit.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-cyan-300/10 bg-black/30 p-5 transition hover:border-cyan-300/30 hover:bg-black/50"
              >
                <span className="mt-1 text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Your industry not listed?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            If your business needs qualified conversations, the system can be
            adapted.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            We check your offer, market, sales cycle, and audience before
            deciding whether outbound makes sense.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}