"use client";

import Reveal from "@/components/Reveal";

const packages = [
  {
    name: "Starter Outreach",
    desc: "For small businesses testing outbound.",
    level: "01",
    items: [
      "Lead list building",
      "Cold calling",
      "Basic reporting",
      "Appointment setting",
      "Weekly update",
    ],
  },
  {
    name: "Growth Engine",
    desc: "For companies that want consistent booked appointments.",
    level: "02",
    featured: true,
    items: [
      "Cold calling",
      "Email outreach",
      "LinkedIn outreach",
      "CRM tracking",
      "Follow-up management",
      "Weekly reporting",
      "Dedicated campaign manager",
    ],
  },
  {
    name: "Premium Revenue Partner",
    desc: "For serious companies that want full pipeline support.",
    level: "03",
    items: [
      "Everything in Growth Engine",
      "Advanced targeting",
      "Appointment quality control",
      "CRM setup",
      "Sales script improvement",
      "Call recordings",
      "Weekly strategy call",
      "Pipeline review",
      "Dedicated callers",
      "Priority campaign scaling",
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-4 py-20 md:px-6 md:py-24"
    >
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal y={26}>
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
              Packages
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Choose Your <span className="text-cyan-300">Growth System</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base md:text-lg">
              Pick the outbound system that matches your current growth stage.
            </p>
          </div>
        </Reveal>

        {/* guarantee */}
        <Reveal y={30}>
          <div className="mb-10 flex justify-center md:mb-14">
            <div className="flex w-full max-w-[900px] flex-col items-center gap-5 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.04] px-5 py-6 text-center shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:px-8 md:flex-row">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/[0.05]">
                <span className="text-4xl">🛡️</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  30-Day Money-Back Guarantee
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base md:text-lg">
                  If we don't book
                  <span className="font-semibold text-cyan-300">
                    {" "}10+ qualified appointments{" "}
                  </span>
                  in your first 30 days.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        {/* cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <div
                className={`group relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:p-7 ${
                  plan.featured
                    ? "border-cyan-300/45 bg-cyan-300/[0.08] shadow-[0_0_65px_rgba(34,211,238,0.18)] lg:-translate-y-4"
                    : "border-white/10 bg-white/[0.035] hover:border-cyan-300/30"
                }`}
              >
                <div className="relative flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-xs font-semibold text-cyan-300 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm">
                    {plan.level}
                  </span>

                  {plan.featured && (
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300 px-3 py-1 text-[10px] font-bold text-black sm:text-[11px]">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
                  {plan.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {plan.desc}
                </p>

                <div className="my-6 h-px bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent" />

                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#final-cta"
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-cyan-300 text-black hover:bg-white"
                      : "border border-cyan-300/30 bg-white/[0.04] text-cyan-100 hover:bg-cyan-300/10"
                  }`}
                >
                  Book Strategy Call
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}