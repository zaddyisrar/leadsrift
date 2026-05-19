import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const team = [
  "Outreach Specialists",
  "Lead Research Team",
  "Campaign Strategists",
  "CRM & Follow-Up Operators",
  "Appointment Coordinators",
];

const studies = [
  { stat: "30,061+", label: "Emails Sent" },
  { stat: "6,523", label: "Opens Generated" },
  { stat: "1,629", label: "Replies Tracked" },
  { stat: "200+", label: "Accepted Opportunities" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#03060b] text-white">
        <section className="relative overflow-hidden px-6 pb-28 pt-48 md:pt-56">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[150px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
                ABOUT LEADSRIFT
              </p>

              <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.05] md:text-7xl">
                Remote Outreach Built To Turn Cold Prospects Into Qualified
                Opportunities
              </h1>

              <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-white/60">
                <p>
                  LeadsRift is a remote outreach and appointment-setting company
                  helping businesses turn cold prospects into qualified sales
                  opportunities.
                </p>

                <p>
                  We work with service-based companies that want predictable
                  growth without spending months hiring, training, and managing
                  an internal sales team. Our team handles cold calling, email
                  outreach, LinkedIn outreach, lead generation, follow-ups, and
                  appointment setting, so our clients can focus on closing
                  deals.
                </p>

                <p>
                  From commercial cleaning and roofing to solar, real estate,
                  engineering, and other service industries, we build outreach
                  systems that are simple, measurable, and focused on one goal:
                  getting qualified prospects into your calendar.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-24 h-px max-w-4xl bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

            <div className="mt-24">
              <h2 className="mb-10 text-center text-3xl font-semibold">
                Our Team
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {team.map((item) => (
                  <div
                    key={item}
                    className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/25"
                  >
                    <div className="mb-5 text-3xl text-cyan-300">✦</div>
                    <h3 className="text-xl text-white">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-24 h-px max-w-4xl bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

            <div className="mt-24">
              <h2 className="mb-10 text-center text-3xl font-semibold">
                Case Studies
              </h2>

              <div className="grid gap-6 md:grid-cols-4">
                {studies.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.04] p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/25"
                  >
                    <div className="text-4xl font-bold text-cyan-300">
                      {item.stat}
                    </div>

                    <div className="mt-3 text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 text-center">
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:bg-cyan-300/20 hover:text-white"
              >
                Book Free Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}