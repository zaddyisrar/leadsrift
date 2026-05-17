import Image from "next/image";

const industries = [
  { name: "Commercial Cleaning", icon: "▥", position: "left-[47%] top-[4%] -translate-x-1/2" },
  { name: "Roofing", icon: "⌂", position: "right-[5%] top-[18%]" },
  { name: "Solar", icon: "☼", position: "right-[0%] top-[42%]" },
  { name: "Engineering", icon: "⚙", position: "right-[6%] bottom-[22%]" },
  { name: "SaaS", icon: "☁", position: "right-[22%] bottom-[4%]" },
  { name: "Finance / Merchant Processing", icon: "▤", position: "left-[43%] bottom-[-2%] -translate-x-1/2" },
  { name: "Real Estate", icon: "▥", position: "left-[10%] bottom-[14%]" },
  { name: "Dental", icon: "♢", position: "left-[3%] top-[45%]" },
  { name: "Local Services", icon: "✕", position: "left-[8%] top-[28%]" },
  { name: "Restaurants", icon: "⋔", position: "left-[18%] top-[12%]" },
];

const wires = [
  { path: "M330 248 C300 185, 370 145, 330 78", dot: [330, 78] },
  { path: "M390 275 C455 210, 505 185, 570 155", dot: [570, 155] },
  { path: "M410 330 C475 300, 540 350, 620 315", dot: [620, 315] },
  { path: "M390 385 C455 430, 480 485, 560 505", dot: [560, 505] },
  { path: "M350 415 C405 485, 430 555, 505 610", dot: [505, 610] },
  { path: "M320 420 C350 500, 280 565, 330 635", dot: [330, 635] },
  { path: "M270 385 C210 430, 190 500, 95 555", dot: [95, 555] },
  { path: "M250 335 C190 305, 145 360, 60 335", dot: [60, 335] },
  { path: "M270 285 C215 245, 165 265, 90 230", dot: [90, 230] },
  { path: "M300 250 C250 185, 230 130, 170 95", dot: [170, 95] },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-20"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-300/8 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Industries
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Built For Service Businesses That Need{" "}
            <span className="text-cyan-300">Consistent Conversations</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            LeadsRift adapts outbound systems around your market, offer,
            decision-makers, and follow-up cycle.
          </p>

          <div className="mt-8 flex max-w-xl items-center gap-5 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.05] p-5 backdrop-blur-xl">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-black/35 text-2xl text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.22)]">
              ✦
            </div>

            <p className="text-sm leading-7 text-cyan-50">
              Best for businesses where one qualified conversation can create
              real pipeline value.
            </p>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[600px] lg:max-w-[620px]">
          {/* Tiny particles */}
          <div className="absolute left-[22%] top-[20%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <div className="absolute right-[16%] top-[34%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <div className="absolute bottom-[22%] left-[34%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
          <div className="absolute bottom-[34%] right-[22%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

          {/* Curved glowing strings */}
          <svg
            className="absolute inset-0 z-10 h-full w-full overflow-visible"
            viewBox="0 0 660 660"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="strongWireGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {wires.map((wire) => (
              <g key={wire.path}>
                <path
                  d={wire.path}
                  stroke="rgba(34,211,238,0.95)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#strongWireGlow)"
                />

                <circle
                  cx={wire.dot[0]}
                  cy={wire.dot[1]}
                  r="5"
                  fill="rgb(103,232,249)"
                  filter="url(#strongWireGlow)"
                />
              </g>
            ))}
          </svg>

          {/* Center glow circle behind symbol */}
          <div className="absolute left-1/2 top-1/2 z-20 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[45px]" />
          <div className="absolute left-1/2 top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-[28px]" />

          {/* Symbol only, no ring */}
          <div className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Image
              src="/leadsrift-symbol.png"
              alt="LeadsRift Symbol"
              width={120}
              height={120}
              className="relative z-10 h-24 w-24 object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.95)]"
            />
          </div>

          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`absolute ${industry.position} z-40 flex items-center gap-3 rounded-2xl border border-cyan-300/35 bg-[#07111f]/90 px-4 py-3 text-sm font-medium text-white shadow-[0_0_22px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.28)]`}
            >
              <span className="text-xl leading-none text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                {industry.icon}
              </span>

              <span>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}