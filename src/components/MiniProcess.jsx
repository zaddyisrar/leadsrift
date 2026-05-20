const steps = [
  { num: "01", title: "Strategy", desc: "We define your market and offer." },
  { num: "02", title: "Outreach", desc: "We contact your ideal prospects." },
  { num: "03", title: "Appointments", desc: "You get qualified calls booked." },
];

export default function MiniProcess() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
          Simple Process
        </p>

        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          From Cold Prospects To{" "}
          <span className="text-cyan-300">Booked Calls</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-6 text-left backdrop-blur-xl"
            >
              <span className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
                {step.num}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}