import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 pb-28 pt-36 md:pb-36 md:pt-44"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[140px]" />
      <div className="absolute right-0 top-40 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-[160px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,11,0.35)_45%,rgba(3,6,11,0.95)_100%)]" />

      {/* Floating Glass Shards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[15%] h-24 w-12 rotate-[35deg] border border-cyan-300/30 bg-cyan-300/[0.03] shadow-[0_0_25px_rgba(34,211,238,0.18)] [clip-path:polygon(50%_0%,100%_100%,0%_75%)]" />
        <div className="absolute left-[30%] top-[10%] h-14 w-8 rotate-[-25deg] border border-cyan-300/20 bg-cyan-300/[0.03] shadow-[0_0_20px_rgba(34,211,238,0.15)] [clip-path:polygon(45%_0%,100%_80%,0%_100%)]" />
        <div className="absolute right-[8%] top-[12%] h-28 w-14 rotate-[-30deg] border border-cyan-300/35 bg-cyan-300/[0.04] shadow-[0_0_35px_rgba(34,211,238,0.25)] [clip-path:polygon(45%_0%,100%_95%,0%_100%)]" />
        <div className="absolute right-[25%] top-[35%] h-16 w-8 rotate-[18deg] border border-cyan-300/25 bg-cyan-300/[0.03] shadow-[0_0_18px_rgba(34,211,238,0.15)] [clip-path:polygon(50%_0%,100%_100%,0%_80%)]" />
        <div className="absolute bottom-[20%] left-[15%] h-20 w-10 rotate-[-30deg] border border-cyan-300/30 bg-cyan-300/[0.03] shadow-[0_0_20px_rgba(34,211,238,0.16)] [clip-path:polygon(45%_0%,100%_90%,0%_100%)]" />
        <div className="absolute bottom-[12%] right-[18%] h-24 w-12 rotate-[25deg] border border-cyan-300/30 bg-cyan-300/[0.03] shadow-[0_0_24px_rgba(34,211,238,0.18)] [clip-path:polygon(50%_0%,100%_100%,0%_80%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <div className="mb-7 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
            Done-For-You Outbound Growth Systems
          </div>

          <h1 className="max-w-6xl text-5xl font-semibold leading-[0.92] tracking-tight text-white md:text-7xl lg:text-[82px]">
            We Book Qualified Sales Appointments For{" "}
            <span className="text-cyan-300 drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]">
              Service Businesses
            </span>{" "}
            Without Hiring An In-House Sales Team
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
            LeadsRift builds and manages done-for-you outreach systems using
            cold calling, email marketing, and LinkedIn outreach to help B2B
            and B2C companies fill their calendar with qualified prospects in
            their target service areas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3.5 text-center text-sm font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-[1.03] hover:bg-white"
            >
              Book Your Free Growth Strategy Call
            </Link>

            <Link
              href="/process"
              className="rounded-full border border-cyan-300/35 bg-white/[0.04] px-7 py-3.5 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}