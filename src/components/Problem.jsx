export default function Problem() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24">

      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* subtle shards */}
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
            Most businesses do not have a lead problem.
            <br />

            <span className="text-cyan-300">
              They have a follow-up and appointment-setting problem.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-gray-300">
            Many companies depend on referrals, ads, or random inquiries.
            But without consistent outbound outreach, their sales pipeline
            becomes unpredictable. LeadsRift solves this by building a
            repeatable outreach system that brings qualified prospects
            directly into your calendar.
          </p>

        </div>

        {/* What We Do */}

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.03] p-8 backdrop-blur-xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            What We Do
          </p>

          <h3 className="text-3xl font-semibold text-white">
            We handle the outreach.
            <span className="text-cyan-300">
              {" "}You close the deals.
            </span>
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            We help companies find prospects, contact them,
            qualify them, follow up, and book appointments,
            so your team can focus on selling and delivering
            the service.
          </p>

        </div>

      </div>
    </section>
  );
}