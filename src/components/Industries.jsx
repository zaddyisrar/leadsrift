"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const industries = [
  {
    name: "Commercial Cleaning",
    icon: "▥",
    position: "left-1/2 top-[2%] -translate-x-1/2",
  },
  {
    name: "Roofing",
    icon: "⌂",
    position: "right-[3%] top-[17%]",
  },
  {
    name: "Solar",
    icon: "☼",
    position: "right-[-1%] top-[40%]",
  },
  {
    name: "Engineering",
    icon: "⚙",
    position: "right-[4%] top-[60%]",
  },
  {
    name: "SaaS",
    icon: "☁",
    position: "right-[13%] bottom-[13%]",
  },
  {
    name: "Finance / Merchant Processing",
    icon: "▤",
    position: "left-1/2 bottom-[1%] -translate-x-1/2",
  },
  {
    name: "Real Estate",
    icon: "▥",
    position: "left-[7%] bottom-[14%]",
  },
  {
    name: "Dental",
    icon: "♢",
    position: "left-[1%] top-[60%]",
  },
  {
    name: "Local Services",
    icon: "✕",
    position: "left-[0%] top-[39%]",
  },
  {
  name: "IT Managed Services",
  icon: "⋔",
  position: "left-[7%] top-[16%]",
},
];

const wires = [
  "M330 330 C315 250, 370 215, 330 95",
  "M350 320 C420 250, 475 190, 570 155",
  "M365 340 C460 300, 505 330, 610 300",
  "M365 360 C455 380, 510 415, 590 430",
  "M350 380 C420 440, 455 510, 540 535",
  "M330 390 C350 475, 285 535, 330 615",
  "M310 380 C245 430, 205 490, 95 525",
  "M300 360 C225 370, 170 430, 70 425",
  "M300 335 C230 305, 160 315, 70 300",
  "M310 315 C255 240, 215 175, 105 150",
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      <div className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[170px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_45%,rgba(3,6,11,0.95)_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal y={26}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
              Industries
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Powering Growth Across{" "}
              <span className="text-cyan-300">19+ Industries</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              LeadsRift adapts outbound systems around your market, offer,
              decision-makers, service area, and follow-up cycle.
            </p>
          </div>
        </Reveal>

        <Reveal y={34} delay={0.15}>
          <div className="relative mx-auto mt-14 hidden aspect-[1.32/1] w-full max-w-[920px] lg:block">
            {/* dark stage */}
            <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.11),rgba(3,6,11,0.20)_42%,transparent_70%)]" />

            {/* center blast */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[95px]" />
            <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-[45px]" />

            {/* wires */}
            <svg
              className="absolute inset-0 z-10 h-full w-full overflow-visible"
              viewBox="0 0 660 660"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="wireGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="wireGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.25)" />
                  <stop offset="45%" stopColor="rgba(103,232,249,1)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0.25)" />
                </linearGradient>
              </defs>

              {wires.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  stroke="url(#wireGradient)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  filter="url(#wireGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                />
              ))}

              {wires.map((path, index) => (
                <motion.circle
                  key={`${path}-dot`}
                  r="5.5"
                  fill="rgb(103,232,249)"
                  filter="url(#wireGlow)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <animateMotion
                    dur={`${4.5 + index * 0.15}s`}
                    repeatCount="indefinite"
                    path={path}
                  />
                </motion.circle>
              ))}
            </svg>

            {/* center logo */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            >
              <div className="absolute h-44 w-44 rounded-full bg-cyan-300/25 blur-[35px]" />

              <Image
                src="/leadsrift-symbol.png"
                alt="LeadsRift Symbol"
                width={118}
                height={118}
                className="relative z-10 h-[105px] w-[105px] object-contain drop-shadow-[0_0_45px_rgba(34,211,238,1)]"
              />
            </motion.div>

            {/* cards */}
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: 0.45 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute ${industry.position} z-40 flex min-w-[170px] items-center justify-center gap-3 rounded-full border border-cyan-300/35 bg-[#061019]/90 px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(34,211,238,0.16)] backdrop-blur-xl transition duration-300 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-[0_0_34px_rgba(34,211,238,0.35)]`}
              >
                <span className="text-xl leading-none text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.95)]">
                  {industry.icon}
                </span>

                <span>{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* mobile simple cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 0.04} y={24}>
              <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-white/[0.04] px-5 py-4 text-sm font-medium text-white">
                <span className="text-xl text-cyan-300">{industry.icon}</span>
                {industry.name}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal y={24} delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-300/45 bg-cyan-300/10 px-7 py-3.5 text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.18)] transition duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
            >
              Explore Industries
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300 text-black">
                ↗
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}