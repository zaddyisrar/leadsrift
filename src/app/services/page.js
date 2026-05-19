import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Cold Calling Appointment Setting & Walkthroughs",
    description:
      "Our outbound specialists connect with qualified prospects, handle objections, and book high-quality appointments directly into your calendar.",
    points: [
      "Targeted prospect outreach",
      "Lead qualification & intent verification",
      "Objection handling & conversation management",
      "Qualified appointment booking"
    ],
  },
  {
    number: "02",
    title: "B2B Lead Generation",
    description:
      "We build targeted lead lists based on industry, location, company size, decision-maker role, and service area.",
    points: [
      "Industry targeting",
      "Decision makers",
      "Company filtering",
      "Lead research",
    ],
  },
  {
    number: "03",
    title: "B2C Lead Generation",
    description:
      "We help local service businesses reach homeowners, property owners, and potential customers in specific geographic areas.",
    points: [
      "Homeowner targeting",
      "Local markets",
      "Service areas",
      "Lead sourcing",
    ],
  },
  {
    number: "04",
    title: "Email Marketing Outreach",
    description:
      "We create and send personalized email campaigns designed to generate replies and start sales conversations.",
    points: [
      "Email campaigns",
      "Personalized messaging",
      "Reply tracking",
      "Follow-up sequences",
    ],
  },
  {
    number: "05",
    title: "LinkedIn Outreach",
    description:
      "We connect with decision-makers, send personalized messages, follow up, and turn conversations into booked calls.",
    points: [
      "Connection strategy",
      "Message sequences",
      "Follow-ups",
      "Conversation tracking",
    ],
  },
  {
    number: "06",
    title: "CRM Management and Follow-Up",
    description:
      "We track every prospect, update lead status, manage follow-ups, and keep your pipeline organized.",
    points: [
      "CRM updates",
      "Lead tracking",
      "Follow-up management",
      "Pipeline organization",
    ],
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

      <section className="px-6 pt-40 pb-24">
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
            LEADSRIFT SERVICES
          </p>
        </div>

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

              <h2 className="text-2xl font-semibold">
                {service.title}
              </h2>

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
              More than outreach. A complete appointment generation system.
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