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
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:56px_56px] md:bg-[size:70px_70px]" />
      <div className="absolute left-1/2 top-20 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[130px] md:h-[450px] md:w-[450px] md:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mx-auto max-w-5xl text-[2rem] font-semibold leading-[1.12] text-white sm:text-4xl md:text-6xl">
              One Offer. Fully Custom.
              <span className="text-cyan-300"> Built For Results.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="relative min-w-0 py-4 md:py-6">
              <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-300/10 blur-[100px] md:h-72 md:w-72 md:blur-[120px]" />

              <div className="relative min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs sm:tracking-[0.28em]">
                  Done-For-You Outbound System
                </p>

                <h3 className="mt-5 max-w-full text-[1.85rem] font-semibold leading-[1.12] text-white sm:text-[2.3rem] md:text-5xl">
                  Cold calling · Email outreach · LinkedIn · Appointment
                  setting · CRM follow-up
                </h3>

                <p className="mt-5 max-w-full text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:text-lg md:leading-9">
                  A complete outbound growth system designed to find prospects,
                  start conversations, qualify interest, follow up, and book
                  real opportunities into your calendar.
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-cyan-300/15 bg-white/[0.035] p-5 backdrop-blur-xl sm:mt-7 sm:rounded-[2rem]">
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

                <div className="mt-6 grid grid-cols-1 gap-3 text-xs font-medium text-white/60 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3 sm:text-sm lg:flex-nowrap">
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <span className="text-cyan-300">⏱</span>
                    <span>Takes 45 seconds to book</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <span className="text-cyan-300">👥</span>
                    <span>120+ businesses scaled</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <span className="text-cyan-300">📅</span>
                    <span>2,500+ appointments booked</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="min-w-0">
              <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-[#06111a]/80 p-4 shadow-[0_0_45px_rgba(34,211,238,0.10)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5 md:shadow-[0_0_55px_rgba(34,211,238,0.12)]">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-[70px] sm:h-40 sm:w-40 sm:blur-[80px]" />
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-[60px] sm:h-32 sm:w-32 sm:blur-[70px]" />

                <div className="relative mb-4 flex items-center justify-between sm:mb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-[11px] sm:tracking-[0.28em]">
                    What&apos;s Included
                  </p>

                  <div className="mx-3 h-px flex-1 bg-cyan-300/20 sm:mx-4" />

                  <div className="flex shrink-0 gap-1">
                    <span className="h-1 w-4 rounded-full bg-cyan-300/50 sm:w-5" />
                    <span className="h-1 w-4 rounded-full bg-cyan-300/30 sm:w-5" />
                    <span className="h-1 w-4 rounded-full bg-cyan-300/20 sm:w-5" />
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="group flex min-w-0 items-center gap-2 rounded-xl border border-cyan-300/12 bg-black/25 p-2 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] sm:gap-3 sm:rounded-2xl sm:p-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_20px_rgba(34,211,238,0.18)] sm:h-11 sm:w-11">
                        <svg
                          className="h-3.5 w-3.5 text-cyan-300 sm:h-4 sm:w-4"
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

                      <p className="min-w-0 text-[10px] leading-4 text-gray-300 sm:text-[12px] sm:leading-5">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 sm:mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-[11px] sm:tracking-[0.22em]">
                    We handle the outreach.
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:tracking-[0.16em]">
                    You close the deals.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-50/90 p-4 shadow-[0_0_40px_rgba(74,222,128,0.08)] sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:h-10 sm:w-10">
                    <svg
                      className="h-4.5 w-4.5 text-emerald-700 sm:h-5 sm:w-5"
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

              <div className="mt-6 flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex w-full justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white sm:w-auto"
                >
                  Book Free Strategy Call
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 rounded-[1.5rem] border border-cyan-300/15 bg-white/[0.03] p-5 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                How Pricing Works
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
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