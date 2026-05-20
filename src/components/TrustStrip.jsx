const items = ["No Long-Term Contracts", "Fast Onboarding", "Built For Scalable Growth"];

export default function TrustStrip() {
  return (
    <div className="relative z-10 mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80"
        >
          <span className="mr-2 text-cyan-300">✓</span>
          {item}
        </span>
      ))}
    </div>
  );
}