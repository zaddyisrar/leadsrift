import Link from "next/link";

const stages = [
  {
    title: "Target",
    desc: "Define your ideal market and high-fit prospects.",
  },
  {
    title: "Build List",
    desc: "Create focused lead lists for outbound campaigns.",
  },
  {
    title: "Outreach",
    desc: "Launch cold calling, email, and LinkedIn sequences.",
  },
  {
    title: "Follow-Up",
    desc: "Keep conversations alive until prospects respond.",
  },
  {
    title: "Meetings",
    desc: "Book qualified appointments into your calendar.",
  },
];

export default function Pipeline() {
  return (
    <section
      id="pipeline"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Pipeline System
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            From Cold Prospect To{" "}
            <span className="text-cyan-300">Booked Meeting</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Outreach is not random activity. It is a connected system that moves
            prospects from targeting to qualified meetings.
          </p>
        </div>

        <div className="relative mt-16 rounded-[2.5rem] border border-cyan-300/15 bg-white/[0.025] p-6 shadow-[inset_0_0_35px_rgba(34,211,238,0.04)] backdrop-blur-xl md:p-8">
          <div className="pointer-events-none absolute left-8 right-8 top-1/2 hidden h-[3px] -translate-y-1/2 rounded-full bg-cyan-300/25 shadow-[0_0_25px_rgba(34,211,238,0.45)] xl:block" />

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/85 p-6 text-center shadow-[0_0_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.055]"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[50px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.35),inset_0_0_16px_rgba(34,211,238,0.08)]">
                  0{index + 1}
                </div>

                <h3 className="relative text-xl font-semibold text-white">
                  {stage.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-gray-400">
                  {stage.desc}
                </p>

                {index !== stages.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/40 bg-[#03060b] shadow-[0_0_25px_rgba(34,211,238,0.75)] xl:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-7 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition duration-300 hover:border-cyan-300/70 hover:bg-cyan-300/20"
          >
            Build My Appointment System
          </Link>
        </div>
      </div>
    </section>
  );
}