import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Strategy Mapping",
    label: "System initialized",
    log: "We map your offer, target market, current pipeline, sales capacity, and growth objectives before touching outreach.",
    details: [
      "Offer review",
      "Target market clarity",
      "Growth objective mapping",
      "Pipeline gap analysis",
    ],
  },
  {
    number: "02",
    title: "Targeting & Setup",
    label: "Infrastructure generated",
    log: "We build the outbound foundation: audience profile, messaging angles, scripts, follow-up logic, and tracking structure.",
    details: [
      "Audience profile",
      "Messaging framework",
      "Outreach scripts",
      "CRM tracking setup",
    ],
  },
  {
    number: "03",
    title: "Outreach Launch",
    label: "Campaigns activated",
    log: "Your cold calling, email, and LinkedIn outreach systems go live with structured execution and clean tracking.",
    details: [
      "Cold calling",
      "Email outreach",
      "LinkedIn outreach",
      "Campaign monitoring",
    ],
  },
  {
    number: "04",
    title: "Qualification",
    label: "Signals processed",
    log: "We filter replies, conversations, objections, fit, and interest level so only real opportunities move forward.",
    details: [
      "Interest filtering",
      "Fit checking",
      "Objection handling",
      "Lead scoring",
    ],
  },
  {
    number: "05",
    title: "Follow-Up Engine",
    label: "Pipeline kept alive",
    log: "Most opportunities are won after follow-up. We keep conversations active instead of letting warm leads disappear.",
    details: [
      "Multi-touch follow-up",
      "Lead reactivation",
      "Response handling",
      "CRM status updates",
    ],
  },
  {
    number: "06",
    title: "Appointments Delivered",
    label: "Meetings pushed",
    log: "Qualified prospects are moved into your calendar with context, notes, and pipeline visibility.",
    details: [
      "Calendar booking",
      "Prospect context",
      "Meeting notes",
      "Sales handoff",
    ],
  },
];

const whyItWorks = [
  "Clear targeting before outreach starts.",
  "Every channel supports the same pipeline goal.",
  "Replies and conversations are tracked properly.",
  "Qualified opportunities move to your calendar with context.",
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-y border-cyan-300/10 bg-cyan-300/[0.025] px-6 pt-44 pb-24 md:pt-48">
<div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />        <div className="pointer-events-none absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-140px] top-56 h-80 w-80 rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute right-[-140px] bottom-10 h-80 w-80 rounded-full border border-cyan-300/10" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              LEADSRIFT PROCESS
            </p>

            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Every stage has a job. No guesswork. No messy handoffs.
            </h1>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-cyan-300/20 shadow-[0_0_20px_rgba(34,211,238,0.6)] md:block" />

            <div className="space-y-8">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="group relative rounded-[2rem] border border-cyan-300/10 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-black/45 md:ml-20 md:p-8"
                >
                  <div className="absolute -left-20 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f] text-sm font-semibold text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.35)] md:flex">
                    {step.number}
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)]" />

                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                          {step.label}
                        </p>
                      </div>

                      <h3 className="text-2xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-white/55 before:mr-2 before:text-cyan-300 before:content-['>']">
                        {step.log}
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-100 md:hidden">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-2xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65 transition group-hover:border-cyan-300/20"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Why it works
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              The system is built around consistency, context, and follow-up.
            </h2>
          </div>

          <div className="grid gap-4">
            {whyItWorks.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-cyan-300/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
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

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Ready to start?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Let’s build the outbound system behind your next stage of growth.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            We start with the strategy call, identify the pipeline gaps, and
            map the right execution plan before launch.
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