export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/15 blur-[150px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* small floating shards */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-[22%] h-20 w-10 rotate-[32deg] border border-cyan-300/25 bg-cyan-300/[0.03] shadow-[0_0_24px_rgba(34,211,238,0.18)] [clip-path:polygon(50%_0%,100%_100%,0%_80%)]" />
        <span className="absolute right-[13%] bottom-[22%] h-24 w-12 rotate-[-28deg] border border-cyan-300/25 bg-cyan-300/[0.03] shadow-[0_0_24px_rgba(34,211,238,0.18)] [clip-path:polygon(45%_0%,100%_90%,0%_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-cyan-300/20 bg-white/[0.035] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.12),inset_0_0_45px_rgba(34,211,238,0.045)] backdrop-blur-2xl md:p-16">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
          Ready To Launch?
        </p>

        <h2 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Ready To Fill Your Calendar With{" "}
          <span className="text-cyan-300 drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]">
            Qualified Appointments?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Stop depending on referrals, random leads, and inconsistent outreach.
          LeadsRift builds the system, contacts your ideal prospects, qualifies
          interest, and books appointments directly into your calendar.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.38)] transition duration-300 hover:bg-white hover:shadow-[0_0_58px_rgba(34,211,238,0.6)]"
          >
            Book My Free Strategy Call
          </a>

          <a
            href="#packages"
            className="rounded-full border border-cyan-300/35 bg-black/25 px-8 py-4 text-sm font-semibold text-cyan-100 transition duration-300 hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
}