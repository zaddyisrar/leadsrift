import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 pb-28 pt-36 md:pb-36 md:pt-44"
    >
      {/* Main glow */}
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[140px]" />

      <div className="absolute right-0 top-40 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-[160px]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,11,0.30)_45%,rgba(3,6,11,0.95)_100%)]" />

      {/* LEFT SHARDS */}
      <div className="pointer-events-none absolute left-[-18%] top-[2%] opacity-60">
        <Image
          src="/hero-shards.png"
          alt=""
          width={820}
          height={820}
          priority
          className="rotate-[-15deg] brightness-150 contrast-125"
        />
      </div>

      {/* RIGHT SHARDS */}
      <div className="pointer-events-none absolute right-[-18%] top-[2%] opacity-60">
        <Image
          src="/hero-shards.png"
          alt=""
          width={820}
          height={820}
          priority
          className="scale-x-[-1] rotate-[15deg] brightness-150 contrast-125"
        />
      </div>

      {/* extra small floating shards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[6%] top-[18%] h-24 w-12 rotate-[35deg] border border-cyan-300/30 bg-cyan-300/[0.04] shadow-[0_0_30px_rgba(34,211,238,0.25)] [clip-path:polygon(50%_0%,100%_100%,0%_75%)]" />

        <div className="absolute left-[22%] top-[12%] h-16 w-8 rotate-[-25deg] border border-cyan-300/25 bg-cyan-300/[0.03] shadow-[0_0_20px_rgba(34,211,238,0.18)] [clip-path:polygon(45%_0%,100%_80%,0%_100%)]" />

        <div className="absolute right-[8%] top-[12%] h-28 w-14 rotate-[-30deg] border border-cyan-300/35 bg-cyan-300/[0.04] shadow-[0_0_35px_rgba(34,211,238,0.25)] [clip-path:polygon(45%_0%,100%_95%,0%_100%)]" />

        <div className="absolute right-[25%] top-[18%] h-20 w-10 rotate-[22deg] border border-cyan-300/25 bg-cyan-300/[0.04] shadow-[0_0_25px_rgba(34,211,238,0.20)] [clip-path:polygon(50%_0%,100%_100%,0%_80%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl text-center">

        <div className="mb-8 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          Done-For-You Outbound Growth Systems
        </div>

        <h1 className="mx-auto max-w-6xl text-5xl font-semibold leading-[0.92] tracking-tight text-white md:text-7xl lg:text-[88px]">
          We Book Qualified Sales Appointments for Businesses {" "}
          <span className="text-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
            Hiring An In-House Sales Team
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-9 text-gray-300 md:text-lg">
          LeadsRift builds and manages done-for-you outreach systems using
          cold calling, email marketing, and LinkedIn outreach to help B2B and
          B2C companies fill their calendar with qualified prospects in their
          target service areas.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.40)] transition hover:bg-white hover:scale-[1.03]"
          >
            Book Your Free Growth Strategy Call
          </Link>

          <Link
            href="/process"
            className="rounded-full border border-cyan-300/35 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
          >
            See How It Works
          </Link>

        </div>

      </div>
    </section>
  );
}