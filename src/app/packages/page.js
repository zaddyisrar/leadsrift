import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Starter Outreach",
    tag: "For small businesses testing outbound",
    description: "For small businesses testing outbound.",
    bestFor:
      "Small businesses, first outbound campaigns, early market testing",

    features: [
      "Lead list building",
      "Cold calling",
      "Basic reporting",
      "Appointment setting",
      "Weekly update",
    ],
  },

  {
    name: "Growth Engine",
    tag: "Most popular",
    description:
      "For companies that want consistent booked appointments.",

    bestFor:
      "Companies ready for steady appointment flow and follow-up support",

    featured: true,

    features: [
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
    tag: "For full pipeline support",

    description:
      "For serious companies that want full pipeline support.",

    bestFor:
      "Serious companies that want deeper targeting, scaling, and revenue support",

    features: [
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

const included = [
  "Lead List Building",
  "Cold Calling",
  "Email Outreach",
  "LinkedIn Outreach",
  "CRM Tracking",
  "Follow-Up Management",
  "Appointment Setting",
  "Weekly Reporting",
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="px-6 pt-40 pb-24">
        <div className="mx-auto mb-14 max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
            LEADSRIFT PACKAGES
          </p>
        </div>

        {/* package cards */}
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
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {item.tag}
                  </p>

                  {item.featured && (
                    <span className="rounded-full border border-cyan-300/30 bg-black/30 px-3 py-1 text-xs font-semibold text-cyan-100">
                      Recommended
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-semibold">
                  {item.name}
                </h2>

                <p className="mt-4 min-h-[70px] text-sm leading-7 text-white/60">
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
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {feature}
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

        {/* NEW BUTTON */}
        <div className="mt-12 text-center">
        </div>
      </section>

      {/* Included system */}
      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.03] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Included System
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Every package is built around qualified appointments.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-300/10 bg-black/30 p-5"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}