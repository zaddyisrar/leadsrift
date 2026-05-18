const steps = [
  "Target Prospects",
  "Build Lead Lists",
  "Launch Outreach",
  "Qualify Interest",
  "Book Appointments",
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#05070d] px-6 py-20"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Process
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            How We Turn Outreach Into{" "}
            <span className="text-cyan-300">
              Qualified Appointments
            </span>
          </h2>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 backdrop-blur-xl">
          <div className="grid grid-cols-5 items-center gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                    0{index + 1}
                  </div>

                  <span className="mt-4 text-sm font-medium text-white">
                    {step}
                  </span>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute left-[70%] top-5 h-px w-[70%] bg-gradient-to-r from-cyan-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}