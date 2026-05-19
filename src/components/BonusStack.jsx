"use client";

import { useState } from "react";

export default function BonusStack() {
  const [open, setOpen] = useState(false);

  const bonuses = [
    {
      title: "Bonus 1: Free Market Targeting Audit",
      text: "We identify your best industries, locations, decision-makers, and service areas before launching outreach.",
    },
    {
      title: "Bonus 2: Custom Call Script and Objection Handling",
      text: "We create scripts for your industry, including responses for common objections.",
    },
    {
      title: "Bonus 3: Email and LinkedIn Outreach Sequences",
      text: "We write professional outreach messages designed to start real conversations.",
    },
    {
      title: "Bonus 4: CRM and Lead Tracking Setup",
      text: "We help you track every lead, conversation, appointment, follow-up, and campaign result.",
    },
    {
      title: "Bonus 5: Weekly Performance Report",
      text: "You get clear weekly reporting on calls made, leads contacted, interested prospects, booked appointments, and follow-ups.",
    },
    {
      title: "Bonus 6: Appointment Quality Filter",
      text: "We do not just book random calls. We qualify prospects based on location, service need, decision-maker status, and buying intent.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)]" />

        <div className="relative mx-auto flex max-w-7xl justify-center">
          <button
            onClick={() => setOpen(true)}
            className="group relative overflow-hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-10 py-5 backdrop-blur-xl transition hover:scale-105 hover:border-cyan-300/40 hover:bg-cyan-300/15"
          >
            <div className="absolute inset-0 bg-cyan-300/10 opacity-0 blur-xl transition group-hover:opacity-100" />

            <span className="relative text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              🎁 FREE BONUSES FOR YOUR BUSINESS
            </span>
          </button>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 p-6 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2.5rem] border border-cyan-300/20 bg-[#050914] p-8 shadow-[0_0_100px_rgba(34,211,238,0.15)] md:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-[90px]" />

            <button
              onClick={() => setOpen(false)}
              className="absolute right-7 top-7 z-10 text-2xl text-white/40 transition hover:text-white"
            >
              ✕
            </button>

            <div className="relative">
              <div className="mb-6 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-red-300">
                LIMITED BONUS ACCESS — STRATEGY CALL ONLY
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Unlock 6 Free Bonuses Before Your Campaign Starts
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-white/60">
                Most agencies charge extra for these systems. We include them
                to help launch faster, track better, and book higher-quality
                appointments.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {bonuses.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.05]"
                  >
                    <h3 className="text-lg font-semibold text-cyan-300">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.04] p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                  BONUS VALUE
                </p>

                <div className="mt-2 text-3xl text-white/25 line-through">
                  $1500+
                </div>

                <div className="text-6xl font-bold text-cyan-300">FREE</div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-8 w-full rounded-full border border-cyan-300/30 bg-cyan-300/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:bg-cyan-300/20 hover:text-white"
              >
                Claim These Bonuses In Your Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}