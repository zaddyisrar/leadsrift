"use client";

import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 pb-24 pt-28 md:pb-32 md:pt-40"
    >
      {/* shard background */}
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <Image
          src="/hero-shards.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* glows */}
      <div className="absolute left-[10%] top-20 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
      <div className="absolute right-0 top-28 h-[620px] w-[620px] rounded-full bg-cyan-300/10 blur-[170px]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,11,0.45)_45%,rgba(3,6,11,0.98)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <Reveal delay={0.05} y={24}>
            <div className="mb-7 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl">
              Done-For-You Outbound Growth Systems
            </div>
          </Reveal>

          <Reveal delay={0.15} y={38}>
            <h1 className="max-w-[620px] text-[42px] font-semibold leading-[0.92] tracking-[-0.045em] text-white md:text-[54px] lg:text-[60px] xl:text-[66px]">
              We Book Qualified B2B/B2C Appointments without{" "}
              <span className="text-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
                Hiring an In-House Sales Team
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.25} y={30}>
            <p className="mt-8 max-w-[620px] text-[16px] leading-8 text-gray-300 md:text-[17px]">
              LeadsRift builds and manages done-for-you outreach systems using
              cold calling, email marketing, and LinkedIn outreach to help B2B
              and B2C businesses fill their calendar with qualified prospects.
            </p>
          </Reveal>

          <Reveal delay={0.35} y={24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-cyan-300 px-8 py-4 text-center text-sm font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.40)] transition hover:scale-[1.03] hover:bg-white"
              >
                Book Your Free Growth Strategy Call
              </Link>

              <Link
                href="/process"
                className="rounded-full border border-cyan-300/35 bg-white/[0.04] px-8 py-4 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
              >
                See How It Works
              </Link>
            </div>
          </Reveal>
        </div>

        {/* RIGHT VISUAL */}
        <Reveal delay={0.25} y={35}>
          <div className="relative mx-auto -mt-20 hidden h-[560px] w-full max-w-[600px] lg:block">
            {/* orbit glow */}
            <div className="absolute inset-8 rounded-full border border-cyan-300/10 bg-cyan-300/[0.03] shadow-[inset_0_0_90px_rgba(34,211,238,0.08),0_0_110px_rgba(34,211,238,0.18)]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-14 rounded-full border border-dashed border-cyan-300/10"
            />

            {/* floating symbol */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[46%] flex h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            >
              <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-300/15 blur-[120px]" />
              <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-[70px]" />

              <Image
                src="/leadsrift-symbol.png"
                alt="LeadsRift"
                width={255}
                height={255}
                priority
                className="relative z-20 brightness-125 drop-shadow-[0_0_70px_rgba(34,211,238,0.95)]"
              />
            </motion.div>

            {/* card 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-8 top-14 rounded-3xl border border-cyan-300/20 bg-[#071019]/85 px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl"
            >
              <p className="text-3xl font-semibold text-white">30,061+</p>
              <p className="mt-1 text-sm text-cyan-100/80">Emails Sent</p>
            </motion.div>

            {/* card 2 */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-28 rounded-3xl border border-cyan-300/20 bg-[#071019]/85 px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl"
            >
              <p className="text-3xl font-semibold text-white">1,629</p>
              <p className="mt-1 text-sm text-cyan-100/80">Replies Tracked</p>
            </motion.div>

            {/* card 3 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-28 left-12 rounded-3xl border border-cyan-300/20 bg-[#071019]/85 px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl"
            >
              <p className="text-3xl font-semibold text-white">200+</p>
              <p className="mt-1 text-sm text-cyan-100/80">
                Accepted Opportunities
              </p>
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.45} y={18}>
  <div className="mt-8 flex items-center gap-8 whitespace-nowrap text-sm text-cyan-100/85">

    <div className="flex items-center gap-2">
      <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        ✓
      </span>
      <span>No Long-Term Contracts</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        ✓
      </span>
      <span>Fast Onboarding</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
        ✓
      </span>
      <span>Built For Scalable Growth</span>
    </div>

  </div>
</Reveal>
      </div>
    </section>
  );
}