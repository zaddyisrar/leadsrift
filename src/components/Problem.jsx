export default function Problem() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Subtle shards */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[8%] top-[20%] h-20 w-10 rotate-[35deg] border border-cyan-300/20 [clip-path:polygon(50%_0%,100%_100%,0%_75%)]" />
        <div className="absolute right-[12%] top-[15%] h-16 w-8 rotate-[-30deg] border border-cyan-300/20 [clip-path:polygon(50%_0%,100%_100%,0%_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
  Problem
</p>

<h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
  Stop Chasing Leads.
  <br />

  <span className="text-cyan-300">
    Start Booking Qualified Conversations.
  </span>
</h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-gray-300">
            Many businesses rely on referrals, ads, or inconsistent inbound
            inquiries. But without a structured outbound system, follow-ups get
            missed, conversations die, and sales opportunities slip through the
            cracks.
          </p>
        </div>

        {/* What We Do */}
        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.03] p-8 backdrop-blur-xl md:p-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            What We Do
          </p>

          <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            We Build Predictable Outbound Systems that
            <span className="text-cyan-300">
              {" "}Consistently Book Qualified Appointments.
            </span>
          </h3>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            We help companies find prospects, contact them, qualify them,
            follow up, and book appointments, so your team can focus on selling
            and delivering the service.
          </p>

          <div className="mt-8 flex justify-start">
            <a
              href="/process"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              See How It Works
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}