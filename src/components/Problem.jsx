const problems = [
  {
    title: "Referrals Are Unpredictable",
    desc: "Some months bring opportunities. Others bring silence.",
  },
  {
    title: "Ads Get Expensive",
    desc: "Higher costs. Lower returns. Less control.",
  },
  {
    title: "Leads Go Cold Fast",
    desc: "Delayed follow-ups quietly kill opportunities.",
  },
  {
    title: "Sales Teams Are Costly",
    desc: "Hiring and managing outreach creates overhead.",
  },
];

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

        {/* Heading */}
        <div className="max-w-4xl">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            The Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Most Businesses Don’t Have A Lead Problem.
            <br />

            <span className="text-cyan-300">
              They Have A Follow-Up Problem.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300">
            Referrals, ads, and random inquiries create inconsistency.
            Without a system, prospects disappear, pipelines dry up,
            and growth becomes unpredictable.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {problems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-500 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:-translate-y-2 ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-10"
              }`}
            >
              {/* glow */}
              <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-300/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                <span className="text-cyan-300">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}