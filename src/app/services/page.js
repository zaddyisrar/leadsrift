import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Cold Calling",
    description:
      "Direct outreach handled with structure, positioning, qualification, and consistent follow-up — not random dialing.",
    points: [
      "Prospect calling",
      "Qualification",
      "Objection handling",
      "Meeting booking",
    ],
  },
  {
    number: "02",
    title: "Email Outreach",
    description:
      "Campaigns built to reach targeted prospects with clean messaging, tracking, replies, and follow-up systems.",
    points: [
      "Cold email campaigns",
      "Reply tracking",
      "Follow-up sequences",
      "Inbox management",
    ],
  },
  {
    number: "03",
    title: "LinkedIn Outreach",
    description:
      "A professional LinkedIn system for starting conversations, building trust, and moving prospects toward calls.",
    points: [
      "Connection strategy",
      "Message sequences",
      "Prospect nurturing",
      "Conversation tracking",
    ],
  },
  {
    number: "04",
    title: "Lead Qualification",
    description:
      "We filter noise from real opportunities so your team spends time only with prospects that actually make sense.",
    points: ["Fit checking", "Need discovery", "Interest level", "Opportunity scoring"],
  },
  {
    number: "05",
    title: "Follow-Up Management",
    description:
      "Most deals die in silence. We keep the pipeline alive with structured follow-ups across channels.",
    points: [
      "Multi-touch follow-up",
      "Pipeline reminders",
      "Lead reactivation",
      "Response handling",
    ],
  },
  {
    number: "06",
    title: "CRM Management",
    description:
      "Every lead, reply, call, and opportunity stays organized inside a clean pipeline instead of scattered chats.",
    points: ["CRM updates", "Pipeline tracking", "Lead status tagging", "Reporting"],
  },
];

const systemSteps = [
  "Targeted prospecting",
  "Cold outreach execution",
  "Conversation handling",
  "Qualification and filtering",
  "Follow-up until response",
  "Appointment booked into your calendar",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-40 pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
           LEADSRIFT SERVICES
        </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Done-for-you outbound systems built to turn cold prospects into
            qualified appointments.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            We handle the outreach engine behind your growth — cold calling,
            email, LinkedIn, qualification, follow-up, CRM management, and
            appointment setting.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:bg-white"
            >
              Book Free Strategy Call
            </Link>

            <Link
              href="/packages"
              className="rounded-full border border-cyan-300/30 px-7 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-white/[0.03] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

              <p className="mb-6 text-sm font-semibold text-cyan-300">
                {service.number}
              </p>

              <h2 className="text-2xl font-semibold">{service.title}</h2>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-white/60">
                {service.description}
              </p>

              <div className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              The System
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Not just outreach. A complete appointment pipeline.
            </h2>
          </div>

          <div className="grid gap-4">
            {systemSteps.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-cyan-300/10 bg-black/30 px-5 py-4 transition hover:border-cyan-300/30 hover:bg-black/50"
              >
                <span className="text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Ready to move?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Let LeadsRift build your outbound growth engine.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            Your team focuses on closing. We focus on starting the right
            conversations and getting qualified opportunities on the calendar.
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