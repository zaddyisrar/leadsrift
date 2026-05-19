const packages = [
  {
    name: "Starter Outreach",
    desc: "For small businesses testing outbound.",
    level: "01",
    items: [
      "Lead list building",
      "Cold calling",
      "Basic reporting",
      "Appointment setting",
      "Weekly update",
    ],
  },
  {
    name: "Growth Engine",
    desc: "For companies that want consistent booked appointments.",
    level: "02",
    featured: true,
    items: [
      "Cold calling",
      "Email outreach",
      "LinkedIn outreach",
      "CRM tracking",
      "Follow-up management",
      "Weekly reporting",
      "Dedicated campaign manager",
    ],
  },
  {
    name: "Premium Revenue Partner",
    desc: "For serious companies that want full pipeline support.",
    level: "03",
    items: [
      "Everything in Growth Engine",
      "Advanced targeting",
      "Appointment quality control",
      "CRM setup",
      "Sales script improvement",
      "Call recordings",
      "Weekly strategy call",
      "Pipeline review",
      "Dedicated callers",
      "Priority campaign scaling",
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Packages
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Choose Your <span className="text-cyan-300">Growth System</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Pick the outbound system that matches your current growth stage.
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl md:p-7">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-3xl shadow-[0_0_25px_rgba(34,211,238,0.18)]">
              🛡️
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                30-Day Money-Back Guarantee
              </h3>

              <p className="mt-3 max-w-4xl leading-8 text-white/65">
                If we don&apos;t book{" "}
                <span className="font-semibold text-cyan-300">
                  10+ qualified appointments
                </span>{" "}
                in your first 30 days, you get every dollar back. No contracts.
                No catch. No questions asked.
              </p>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {packages.map((plan) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 ${
                plan.featured
                  ? "border-cyan-300/45 bg-cyan-300/[0.08] shadow-[0_0_65px_rgba(34,211,238,0.18)] lg:-translate-y-4"
                  : "border-white/10 bg-white/[0.035] hover:border-cyan-300/30 hover:bg-cyan-300/[0.045]"
              }`}
            >
              <div className="absolute right-0 top-0 h-40 w-40 bg-cyan-300/10 opacity-0 blur-[75px] transition duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]">
                  {plan.level}
                </span>

                {plan.featured && (
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300 px-3 py-1 text-[11px] font-bold tracking-wide text-black shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                    Most Popular
                  </span>
                )}
              </div>

              <h3 className="relative mt-7 text-2xl font-semibold text-white">
                {plan.name}
              </h3>

              <p className="relative mt-3 min-h-[48px] text-sm leading-6 text-gray-300">
                {plan.desc}
              </p>

              <div className="relative my-7 h-px bg-gradient-to-r from-cyan-300/30 via-white/10 to-transparent" />

              <ul className="relative space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#final-cta"
                className={`relative mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                  plan.featured
                    ? "bg-cyan-300 text-black shadow-[0_0_30px_rgba(34,211,238,0.28)] hover:bg-white"
                    : "border border-cyan-300/30 bg-white/[0.04] text-cyan-100 hover:border-cyan-300/60 hover:bg-cyan-300/10"
                }`}
              >
                Book Strategy Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}