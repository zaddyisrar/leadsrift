const bonuses = [
  "Free Market Targeting Audit",
  "Custom Call Script",
  "Email & LinkedIn Sequences",
  "CRM & Lead Tracking Setup",
  "Weekly Performance Report",
  "Appointment Quality Filter",
];

export default function BonusStack() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#05070d] px-6 py-20">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Bonus Stack
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Everything You Need To{" "}
            <span className="text-cyan-300">
              Launch Outbound
            </span>
          </h2>
        </div>

        {/* Stack */}
        <div className="relative mx-auto grid max-w-5xl gap-3">

          {bonuses.map((bonus, index) => (
            <div
              key={bonus}
              className="group relative flex items-center justify-between overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-[#07111f]/85 px-5 py-4 backdrop-blur-xl transition duration-500 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05]"
              style={{
                transform: `translateX(${index % 2 === 0 ? 0 : 20}px)`
              }}
            >
              {/* left cyan bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

              {/* glow */}
              <div className="absolute right-0 top-0 h-24 w-24 bg-cyan-300/10 blur-[50px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="flex items-center gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                  0{index + 1}
                </div>

                <h3 className="text-base font-medium text-white">
                  {bonus}
                </h3>

              </div>

              <div className="hidden h-px flex-1 mx-6 bg-gradient-to-r from-cyan-300/25 to-transparent md:block" />

              <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}