import Link from "next/link";

const clients = [
  "Roli Cleaners",
  "TMP Janitorial",
  "Growth Vero",
  "Innodez",
  "Top Notch Tidy",
  "Nova Building",
  "Twilight Cleaning",
  "Market Pioneers",
];

export default function ProofBar() {
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-12">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-cyan-300">
            OUR CLIENTS
          </p>

          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            The Choice of Market Pioneers
          </h2>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] py-5 backdrop-blur-xl">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#03060b] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#03060b] to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-4">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex h-20 min-w-[190px] items-center justify-center rounded-2xl border border-white/10 bg-black/25 px-6 text-center text-sm font-medium text-gray-400 transition duration-300 hover:border-cyan-300/30 hover:text-cyan-200"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
        </div>
      </div>
    </section>
  );
}