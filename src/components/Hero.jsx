"use client";

import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-5 pb-16 pt-28 md:px-6 md:pb-32 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 md:opacity-55">
        <Image
          src="/hero-shards.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute left-[10%] top-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-[130px]" />
      <div className="absolute right-0 top-28 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-[160px]" />

<div className="absolute inset-0 hidden bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:48px_48px] md:block md:bg-[size:64px_64px]" />      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,11,0.55)_45%,rgba(3,6,11,0.98)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 text-center lg:text-left">
          <Reveal delay={0.05} y={20}>
            <div className="mb-5 inline-flex max-w-full rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-[11px] font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl sm:text-xs md:px-5 md:text-sm">
              Done-For-You Outbound Growth Systems
            </div>
          </Reveal>

          <Reveal delay={0.15} y={30}>
            <h1 className="mx-auto max-w-[330px] text-[32px] font-semibold leading-[0.92] tracking-[-0.06em] text-white min-[390px]:max-w-[370px] min-[390px]:text-[36px] sm:max-w-[620px] sm:text-[48px] md:text-[56px] lg:mx-0 lg:text-[60px] xl:text-[66px]">
              We Build Outbound Systems{" "}
              <span className="text-cyan-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
                That Fill Your Calendar With Qualified Appointments
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.25} y={24}>
            <p className="mx-auto mt-6 max-w-[330px] text-[13px] leading-7 text-gray-300 min-[390px]:max-w-[365px] sm:max-w-[620px] sm:text-[15px] md:text-[17px] lg:mx-0">
              LeadsRift helps B2B and B2C businesses generate qualified leads, booked demos, walkthroughs, and sales opportunities through cold calling, LinkedIn outreach, and email campaigns done entirely for you.
            </p>
          </Reveal>

          <Reveal delay={0.35} y={20}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="w-full max-w-[300px] rounded-full bg-cyan-300 px-5 py-3 text-center text-[12px] font-bold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-[1.03] hover:bg-white sm:w-auto sm:max-w-none sm:px-7 sm:py-4 sm:text-sm"
              >
                Book Your Free Growth Strategy Call
              </Link>

              <Link
                href="/process"
                className="w-full max-w-[300px] rounded-full border border-cyan-300/35 bg-white/[0.04] px-5 py-3 text-center text-[12px] font-semibold text-cyan-100 transition hover:bg-cyan-300/10 sm:w-auto sm:max-w-none sm:px-7 sm:py-4 sm:text-sm"
              >
                See How It Works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.45} y={16}>
            <div className="mx-auto mt-7 flex max-w-[330px] flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-cyan-100/85 min-[390px]:max-w-[365px] sm:max-w-none sm:text-[13px] lg:mx-0 lg:justify-start">
              {[
                "No Long-Term Contracts",
                "Fast Onboarding",
                "Built For Scalable Growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} y={35}>
          <div className="relative mx-auto mt-4 h-[330px] w-full max-w-[340px] sm:h-[430px] sm:max-w-[460px] lg:-mt-20 lg:h-[560px] lg:max-w-[600px]">
            <div className="absolute inset-8 rounded-full border border-cyan-300/10 bg-cyan-300/[0.03] shadow-[inset_0_0_90px_rgba(34,211,238,0.08),0_0_110px_rgba(34,211,238,0.18)]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-dashed border-cyan-300/10"
            />

            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[46%] flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
            >
              <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-300/15 blur-[90px] lg:h-[520px] lg:w-[520px]" />
              <div className="absolute h-[200px] w-[200px] rounded-full bg-cyan-300/20 blur-[55px] lg:h-[320px] lg:w-[320px]" />

              <Image
                src="/leadsrift-symbol.png"
                alt="LeadsRift"
                width={255}
                height={255}
                priority
                className="relative z-20 w-[150px] brightness-125 drop-shadow-[0_0_70px_rgba(34,211,238,0.95)] sm:w-[210px] lg:w-[255px]"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-8 rounded-2xl border border-cyan-300/20 bg-[#071019]/85 px-3 py-2.5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:px-5 sm:py-4 lg:top-14 lg:rounded-3xl lg:px-6 lg:py-5"
            >
              <p className="text-lg font-semibold text-white sm:text-2xl lg:text-3xl">
                2,500+
              </p>
              <p className="mt-1 text-[10px] text-cyan-100/80 sm:text-sm">
                Appointments Booked
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-24 rounded-2xl border border-cyan-300/20 bg-[#071019]/85 px-3 py-2.5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:px-5 sm:py-4 lg:top-28 lg:rounded-3xl lg:px-6 lg:py-5"
            >
              <p className="text-lg font-semibold text-white sm:text-2xl lg:text-3xl">
                850+
              </p>
              <p className="mt-1 text-[10px] text-cyan-100/80 sm:text-sm">
                Qualified Sales Calls
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-4 rounded-2xl border border-cyan-300/20 bg-[#071019]/85 px-3 py-2.5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:left-8 sm:px-5 sm:py-4 lg:bottom-28 lg:left-12 lg:rounded-3xl lg:px-6 lg:py-5"
            >
              <p className="text-lg font-semibold text-white sm:text-2xl lg:text-3xl">
                120+
              </p>
              <p className="mt-1 text-[10px] text-cyan-100/80 sm:text-sm">
                Businesses Scaled
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}