import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "Services",
    questions: [
      {
        q: "What exactly does LeadsRift do?",
        a: "LeadsRift builds and runs outbound systems including cold calling, email outreach, LinkedIn outreach, lead qualification, follow-up, CRM management, and appointment setting.",
      },
      {
        q: "Do you only generate leads?",
        a: "No. We focus on complete outbound systems. The goal is qualified conversations and booked opportunities, not vanity lead numbers.",
      },
    ],
  },
  {
    category: "Process",
    questions: [
      {
        q: "How does onboarding work?",
        a: "We start with a strategy call, review your offer and audience, build infrastructure, launch campaigns, qualify responses, and push appointments into your calendar.",
      },
      {
        q: "Do you handle follow-ups?",
        a: "Yes. Follow-up is a major part of the system because most opportunities happen after multiple touches.",
      },
    ],
  },
  {
    category: "Packages",
    questions: [
      {
        q: "Which package should I choose?",
        a: "That depends on your offer, market, sales capacity, and growth goals. Strategy calls help determine the best fit.",
      },
      {
        q: "Can packages be customized?",
        a: "Yes. The system can be adjusted depending on channels, outreach volume, and campaign goals.",
      },
    ],
  },
  {
    category: "Results",
    questions: [
      {
        q: "How quickly do results happen?",
        a: "Outbound timing depends on market, offer, targeting quality, and follow-up cycle. The focus is building repeatable pipeline systems.",
      },
      {
        q: "Do you guarantee meetings?",
        a: "We focus on structured execution and optimization. Quality systems outperform random promises.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-44 pb-24 md:pt-48">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-300">
            LEADSRIFT FAQ
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Questions before building your outbound system?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Everything around services, onboarding, process, packages, and expectations.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-8">
          {faqs.map((group) => (
            <div
              key={group.category}
              className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-8"
            >
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {group.category}
              </p>

              <div className="space-y-5">
                {group.questions.map((item) => (
            <details
                key={item.q}
                className="group rounded-2xl border border-cyan-300/10 bg-black/25 p-5 transition hover:border-cyan-300/30 open:border-cyan-300/35 open:bg-cyan-300/[0.04]"
                >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium text-white">
                <span>{item.q}</span>
                <span className="text-cyan-300 transition group-open:rotate-45">
                +
                </span>
                </summary>

                <p className="mt-5 max-w-3xl leading-7 text-white/60">
                {item.a}
                </p>
            </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Still have questions?
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            Let’s talk through your growth goals.
          </h2>

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