import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Starter",
    tag: "For early outbound testing",
    description:
      "A focused outbound setup for businesses that want to validate offers, start conversations, and build pipeline momentum.",
    bestFor: "New campaigns, small teams, early validation",
    features: [
      "Cold email outreach",
      "Basic lead qualification",
      "Follow-up sequences",
      "Reply tracking",
      "CRM status updates",
      "Weekly performance snapshot",
    ],
  },
  {
    name: "Growth",
    tag: "Most popular",
    description:
      "A stronger multi-channel system built for consistent appointment flow across email, LinkedIn, follow-up, and qualification.",
    bestFor: "Businesses ready for consistent booked calls",
    featured: true,
    features: [
      "Cold email outreach",
      "LinkedIn outreach",
      "Lead qualification",
      "Follow-up management",
      "CRM pipeline management",
      "Appointment setting",
      "Weekly reporting",
      "Campaign optimization",
    ],
  },
  {
    name: "Scale",
    tag: "For serious pipeline growth",
    description:
      "A complete outbound growth engine for teams that want aggressive execution, cleaner systems, and higher-volume opportunity creation.",
    bestFor: "Scaling teams, agencies, B2B service companies",
    features: [
      "Cold calling",
      "Cold email outreach",
      "LinkedIn outreach",
      "Advanced lead qualification",
      "Multi-touch follow-up",
      "CRM management",
      "Appointment setting",
      "Pipeline reporting",
      "Campaign iteration",
    ],
  },
];

const included = [
  "Cold Calling",
  "Email Outreach",
  "LinkedIn Outreach",
  "Lead Qualification",
  "Follow-Up",
  "CRM Management",
  "Appointment Setting",
  "Pipeline Tracking",
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-44 pb-24 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-120px] top-40 h-72 w-72 rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute left-[-120px] bottom-10 h-72 w-72 rounded-full border border-cyan-300/10" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-300">
        LEADSRIFT PACKAGES
        </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Choose the outbound system that matches your growth stage.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            From campaign validation to serious appointment flow, LeadsRift
            gives you a structured outbound engine without hiring an internal
            outreach team.
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
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`group relative overflow-hidden rounded-[2rem] border p-7 transition hover:-translate-y-1 ${
                item.featured
                  ? "border-cyan-300/40 bg-cyan-300/[0.07] shadow-[0_0_80px_rgba(34,211,238,0.12)]"
                  : "border-cyan-300/10 bg-white/[0.03] hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
              }`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {item.tag}
                  </p>

                  {item.featured && (
                    <span className="rounded-full border border-cyan-300/30 bg-black/30 px-3 py-1 text-xs font-semibold text-cyan-100">
                      Recommended
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-semibold">{item.name}</h2>

                <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/60">
                  {item.description}
                </p>

                <div className="mt-6 rounded-2xl border border-cyan-300/10 bg-black/25 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Best For
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {item.bestFor}
                  </p>
                </div>

                <div className="mt-7 space-y-3">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    item.featured
                      ? "bg-cyan-300 text-black hover:bg-white"
                      : "border border-cyan-300/25 text-cyan-100 hover:border-cyan-300/70 hover:bg-cyan-300/10"
                  }`}
                >
                  Discuss This Package
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.03] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Included System
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Every package is built around pipeline, not vanity activity.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/60">
              We do not sell random outreach. We build a repeatable system for
              starting conversations, filtering opportunities, and booking
              qualified appointments.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-300/10 bg-black/30 p-5 transition hover:border-cyan-300/30 hover:bg-black/50"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Starter",
              copy: "Best when you need market signal, offer testing, and a cleaner first outbound motion.",
            },
            {
              title: "Growth",
              copy: "Best when you want consistent conversations and a more complete appointment-setting pipeline.",
            },
            {
              title: "Scale",
              copy: "Best when you want higher-volume execution across multiple outbound channels.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-cyan-300/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Not sure which one fits?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Start with a strategy call. We’ll map the right outbound path.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            The right package depends on your offer, market, sales capacity,
            and how aggressive your growth target is.
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