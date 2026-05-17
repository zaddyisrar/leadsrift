const steps = [
  {
    title: "Strategy Call",
    log: "System initialized and growth objectives mapped.",
  },
  {
    title: "Targeting & Setup",
    log: "Audience profile, scripts, and infrastructure generated.",
  },
  {
    title: "Outreach Launch",
    log: "Multi-channel outbound campaigns activated.",
  },
  {
    title: "Qualification",
    log: "Interest and fit signals processed.",
  },
  {
    title: "Appointments Delivered",
    log: "Qualified meetings pushed to your calendar.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#05070d] px-6 py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Process
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            How LeadsRift Builds{" "}
            <span className="text-cyan-300">
              Your Pipeline
            </span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">

          {/* center line */}
          <div className="absolute left-6 top-0 h-full w-px bg-cyan-300/20 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

          <div className="space-y-10">

            {steps.map((step,index)=>(

              <div
                key={step.title}
                className="relative pl-20"
              >
                {/* node */}
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f] text-sm font-semibold text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.35)]">
                  0{index+1}
                </div>

                <div className="mb-2 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)]" />

                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="font-mono text-sm leading-7 text-gray-400 before:mr-2 before:text-cyan-300 before:content-['>']">
                  {step.log}
                </p>

              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}