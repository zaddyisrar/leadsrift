"use client";

import Reveal from "@/components/Reveal";

const features = [
  "Targeted lead list building",
  "Cold calling campaigns",
  "Email outreach sequences",
  "LinkedIn prospecting",
  "Prospect qualification",
  "Calendar booking & scheduling",
  "CRM tracking & follow-ups",
  "Weekly performance reports",
  "Dedicated campaign manager",
  "Custom sales scripts",
];

const pricingCards = [
  {
    title: "Custom Pricing",
    body:
      "Pricing depends on your industry, appointment type, target market, and required monthly volume.",
  },
  {
    title: "Flexible Models",
    body:
      "Retainer, appointment-based, or hybrid structures can be discussed depending on the campaign.",
  },
  {
    title: "No Long-Term Lock-In",
    body:
      "Start lean, validate the system, then scale based on performance and campaign results.",
  },
];

const pricingFactors = [
  {
    title: "Your Industry",
    body:
      "Cleaning, roofing, SaaS, solar, real estate, engineering — every market has a different outreach difficulty and appointment value.",
  },
  {
    title: "Appointment Type",
    body:
      "Walkthroughs, demos, discovery calls, consultations, or qualified leads only — every appointment type is built differently.",
  },
  {
    title: "Monthly Volume",
    body:
      "The number of appointments or qualified conversations you need affects campaign size, outreach volume, and team structure.",
  },
  {
    title: "Target Market",
    body:
      "Local, national, B2B, B2C, niche decision-makers, or high-ticket prospects — targeting changes the system we build.",
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-4 py-20 md:px-6 md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300">
              PACKAGES
            </p>

            <h2 className="text-3xl font-semibold text-white md:text-6xl">
              One Offer. Fully Custom.
              <span className="text-cyan-300">
                {" "}Built For Results.
              </span>
            </h2>

            </div>
        </Reveal>

        {/* top area */}

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}

          <Reveal delay={0.1}>
            <div className="relative py-6">

              <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />

              <div className="relative">

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Done-For-You Outbound System
                </p>

                <h3 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Cold calling · Email outreach · LinkedIn · Appointment
                  setting · CRM follow-up
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-300 md:text-lg">
                  A complete outbound growth system designed to find prospects,
                  start conversations, qualify interest, follow up, and book
                  real opportunities into your calendar.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Custom Built
                  </span>

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    No Fixed Tiers
                  </span>

                </div>

              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
<Reveal delay={0.2}>
  <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#06111a]/80 p-5 shadow-[0_0_55px_rgba(34,211,238,0.12)] backdrop-blur-xl">
    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-[80px]" />
    <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-[70px]" />

    <div className="relative mb-5 flex items-center justify-between">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
        What&apos;s Included
      </p>

      <div className="h-px flex-1 bg-cyan-300/20 mx-4" />

      <div className="flex gap-1">
        <span className="h-1 w-5 rounded-full bg-cyan-300/50" />
        <span className="h-1 w-5 rounded-full bg-cyan-300/30" />
        <span className="h-1 w-5 rounded-full bg-cyan-300/20" />
      </div>
    </div>

    <div className="relative grid gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature}
          className="group flex items-center gap-3 rounded-2xl border border-cyan-300/12 bg-black/25 p-3 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_20px_rgba(34,211,238,0.18)]">
  <svg
    className="h-4 w-4 text-cyan-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
</div>

          <p className="text-[12px] font-medium leading-5 text-gray-300">
            {feature}
          </p>
        </div>
      ))}
    </div>

    <div className="relative mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
        We handle the outreach.
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
        You close the deals.
      </p>
    </div>
  </div>
</Reveal>

        </div>

        {/* MINI CARDS */}

        <Reveal>
  <div className="mt-8 grid gap-4 md:grid-cols-3">

    {pricingCards.map((card) => (
      <div
        key={card.title}
        className="
        group relative overflow-hidden
        rounded-[2rem]
        border border-cyan-300/15
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
        transition-all duration-500 ease-out
        hover:-translate-y-3
        hover:scale-[1.02]
        hover:border-cyan-300/35
        hover:shadow-[0_0_50px_rgba(34,211,238,0.14)]
        "
      >

        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/10 blur-[60px] opacity-0 transition duration-500 group-hover:opacity-100" />

        <p className="relative text-xs uppercase tracking-[0.25em] text-cyan-300">
          {card.title}
        </p>

        <p className="relative mt-4 text-sm leading-7 text-gray-300">
          {card.body}
        </p>

      </div>
    ))}

  </div>
</Reveal>

        {/* pricing works */}

        <Reveal>
          <div className="mt-10 rounded-[2.5rem] border border-cyan-300/15 bg-white/[0.03] p-8 backdrop-blur-xl">

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  How Pricing Works
                </p>

                <h3 className="mt-4 text-3xl font-semibold text-white">
                  Pricing depends on your market and growth goals.
                </h3>
              </div>

              <a
                href="/contact"
                className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Book Free Strategy Call
              </a>

            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {pricingFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5"
                >
                  <p className="font-semibold text-white">
                    {factor.title}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {factor.body}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}