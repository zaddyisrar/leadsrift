"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-20"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />

      <Reveal y={30}>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">

          <motion.div
            animate={{
              boxShadow: [
                "0 0 35px rgba(34,211,238,0.18)",
                "0 0 65px rgba(34,211,238,0.35)",
                "0 0 35px rgba(34,211,238,0.18)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full"
          >
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cyan-300 px-10 py-5 text-lg font-semibold text-black transition hover:scale-[1.02] hover:bg-white"
            >
              Book My Free Strategy Call
            </Link>
          </motion.div>

          <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
            <span className="text-cyan-300">⏱</span>

            <span>
              Takes{" "}
              <span className="font-semibold text-cyan-300">
                45 seconds
              </span>{" "}
              only
            </span>
          </div>

        </div>
      </Reveal>
    </section>
  );
}