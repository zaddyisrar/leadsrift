import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  "30,061+ Emails Sent",
  "6,523 Opens Generated",
  "1,629 Replies Tracked",
  "200+ Accepted Opportunities",
];

const contactFlow = [
  "Tell us about your business and current pipeline.",
  "We review your offer, audience, and growth goals.",
  "We map the best outbound system for your stage.",
  "If it makes sense, we move into setup and launch.",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-44 pb-24 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-140px] top-56 h-80 w-80 rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute right-[-140px] bottom-10 h-80 w-80 rounded-full border border-cyan-300/10" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-300">
            LEADSRIFT CONTACT
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Ready to build your outbound growth system?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Tell us where your pipeline is stuck. We’ll help map the right
            system for outreach, qualification, follow-up, and booked
            appointments.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                What happens next
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight">
                Simple conversation first. No messy sales pressure.
              </h2>

              <div className="mt-7 space-y-4">
                {contactFlow.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-cyan-300/10 bg-black/25 p-5"
                  >
                    <span className="mt-1 text-sm font-semibold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-7 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-cyan-300/10 bg-white/[0.03] px-5 py-5 text-center"
                >
                  <p className="text-sm font-semibold text-cyan-200">{stat}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.04] p-7 shadow-[0_0_70px_rgba(34,211,238,0.08)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Start here
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight">
                Send your project details.
              </h2>

              <p className="mt-4 leading-7 text-white/60">
                Share the basics. We’ll use this to understand if outbound is
                the right move for your business.
              </p>

              <div className="mt-8 grid gap-5">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-cyan-300/10 bg-black/35 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-cyan-300/10 bg-black/35 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-2xl border border-cyan-300/10 bg-black/35 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Service Needed
                  </label>
                  <select
                    defaultValue=""
                    className="w-full rounded-2xl border border-cyan-300/10 bg-black/35 px-5 py-4 text-sm text-white outline-none transition focus:border-cyan-300/50"
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    <option>Cold Calling</option>
                    <option>Email Outreach</option>
                    <option>LinkedIn Outreach</option>
                    <option>Lead Qualification</option>
                    <option>CRM & Follow-Up Management</option>
                    <option>Appointment Setting</option>
                    <option>Full Outbound System</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tell us about your offer, audience, and growth goals..."
                    className="w-full resize-none rounded-2xl border border-cyan-300/10 bg-black/35 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:bg-white"
                >
                  Send Inquiry
                </button>

                <p className="text-center text-xs leading-6 text-white/40">
                  This form is visual for now. We’ll connect submission handling
                  in the next phase.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Prefer to explore first?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Review the services before sending details.
          </h2>

          <Link
            href="/services"
            className="mt-8 inline-flex rounded-full border border-cyan-300/30 px-8 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            View Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}