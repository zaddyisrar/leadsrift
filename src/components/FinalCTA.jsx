"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-28"
    >
      {/* shard background */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <Image
          src="/hero-shards.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* background glow */}
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-300/15 blur-[170px]" />
      <div className="absolute bottom-[-20%] left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[130px]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,11,0.38)_45%,rgba(3,6,11,0.98)_100%)]" />

      {/* floating shards */}
      <motion.span
        animate={{ y: [0, -14, 0], rotate: [32, 43, 32] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[10%] top-[24%] h-24 w-11 border border-cyan-300/25 bg-cyan-300/[0.035] shadow-[0_0_28px_rgba(34,211,238,0.20)] [clip-path:polygon(50%_0%,100%_100%,0%_80%)]"
      />

      <motion.span
        animate={{ y: [0, 16, 0], rotate: [-28, -39, -28] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[11%] bottom-[22%] h-28 w-12 border border-cyan-300/25 bg-cyan-300/[0.035] shadow-[0_0_28px_rgba(34,211,238,0.20)] [clip-path:polygon(45%_0%,100%_90%,0%_100%)]"
      />

      <Reveal y={36}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.75rem] border border-cyan-300/20 bg-white/[0.035] p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.14),inset_0_0_55px_rgba(34,211,238,0.05)] backdrop-blur-2xl md:p-16">
          {/* moving top beam */}
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.9)]"
          />

          {/* subtle inner glow */}
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[90px]" />

          {/* orbital symbol */}
          <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-300/20"
            />

            <div className="absolute h-32 w-32 rounded-full bg-cyan-300/20 blur-[35px]" />

            <Image
              src="/leadsrift-symbol.png"
              alt="LeadsRift"
              width={82}
              height={82}
              className="relative z-10 drop-shadow-[0_0_35px_rgba(34,211,238,0.95)]"
            />
          </div>

          <p className="relative mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            Ready To Grow?
          </p>

          <h2 className="relative mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ready To Fill Your Calendar With{" "}
            <span className="text-cyan-300 drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]">
              Qualified Appointments?
            </span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            Stop depending on referrals, random leads, and inconsistent outreach.
            LeadsRift builds the outreach system, contacts your ideal prospects,
            qualifies interest, and books appointments directly into your
            calendar.
          </p>

          <p className="relative mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-400">
            Book your free strategy call today and see how many qualified
            opportunities we can generate in your market.
          </p>

          <div className="relative mt-10 flex flex-col items-center">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 45px rgba(34,211,238,0.28)",
                  "0 0 75px rgba(34,211,238,0.48)",
                  "0 0 45px rgba(34,211,238,0.28)",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full"
            >
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-cyan-300 px-12 py-6 text-lg font-semibold text-black transition hover:scale-[1.02] hover:bg-white"
              >
                Book My Free Strategy Call
              </Link>
            </motion.div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5 text-xs text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.18)]">
                ⏱
              </span>

              <span>
                Takes{" "}
                <span className="font-semibold text-cyan-300">
                  45 seconds
                </span>{" "}
                only
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}