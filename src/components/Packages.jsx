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
            
            <h2 className="text-3xl font-semibold text-white md:text-6xl">
              One Offer. Fully Custom.
              <span className="text-cyan-300"> Built For Results.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
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

                <div className="mt-7 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-5 backdrop-blur-xl">
                  <div className="space-y-4 text-sm leading-7 text-gray-300">
                    <p>
                      <span className="font-semibold text-cyan-300">
                        Custom Pricing.
                      </span>{" "}
                      Pricing depends on your industry, appointment type,
                      target market, and required monthly volume.
                    </p>

                    <p>
                      <span className="font-semibold text-cyan-300">
                        Flexible Models.
                      </span>{" "}
                      Retainer, appointment-based, or hybrid structures can be
                      discussed depending on the campaign.
                    </p>

                    <p>
                      <span className="font-semibold text-cyan-300">
                        No Long-Term Lock-In.
                      </span>{" "}
                      Start lean, validate the system, then scale based on
                      performance and campaign results.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                  >
                    Book Free Strategy Call
                  </a>

                    </div>
                          
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#06111a]/80 p-5 shadow-[0_0_55px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-[80px]" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-[70px]" />

              <div className="relative mb-5 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  What&apos;s Included
                </p>

                <div className="mx-4 h-px flex-1 bg-cyan-300/20" />

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
            <div className="mt-5 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-50/90 p-5 shadow-[0_0_40px_rgba(74,222,128,0.08)]">

  <div className="flex items-start gap-4">

    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
      <svg
        className="h-5 w-5 text-emerald-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        />
      </svg>
    </div>

    <p className="text-sm font-medium leading-7 text-emerald-900">
      <span className="font-bold">
        More qualified conversations. Less wasted outreach.
      </span>{" "}
      We build systems focused on consistency, follow-ups, and
      appointment opportunities — designed around your market.
    </p>

  </div>

</div>
<div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-emerald-700/10 pt-5 text-sm font-medium">

  <div className="flex items-center gap-2 text-cyan-700">
    <span className="text-cyan-500">⏱</span>
    <span>Takes 45 seconds to book</span>
  </div>

  <div className="flex items-center gap-2 text-cyan-700">
    <span className="text-cyan-500">👥</span>
    <span>120+ businesses scaled</span>
  </div>

  <div className="flex items-center gap-2 text-cyan-700">
    <span className="text-cyan-500">📅</span>
    <span>2,500+ appointments booked</span>
  </div>

</div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 rounded-[2.5rem] border border-cyan-300/15 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div>
  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
    How Pricing Works
  </p>

  <h3 className="mt-4 text-3xl font-semibold text-white">
    Pricing depends on your market and growth goals.
  </h3>
</div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pricingFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5"
                >
                  <p className="font-semibold text-white">{factor.title}</p>

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