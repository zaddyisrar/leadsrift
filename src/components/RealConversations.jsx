"use client";

import { FaPlay } from "react-icons/fa";

const calls = [
  {
    industry: "Commercial Cleaning",
    title: "Interested Prospect",
    duration: "1:32",
    outcome: "Interested",
    audio: "/calls/call-01.mp3",
  },
  {
    industry: "Roofing",
    title: "Qualified Conversation",
    duration: "2:04",
    outcome: "Qualified",
    audio: "/calls/call-02.mp3",
  },
  {
    industry: "Solar",
    title: "Appointment Opportunity",
    duration: "1:48",
    outcome: "Booked",
    audio: "/calls/call-03.mp3",
  },
];

export default function RealConversations() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Call Recordings
          </p>

          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Real Conversations.{" "}
            <span className="text-cyan-300">Real Opportunities.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Listen to outreach conversations from our team and hear how
            qualified opportunities are created.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {calls.map((call, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-white/[0.03] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_0_45px_rgba(34,211,238,0.1)]"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-[65px]" />

              <div className="relative flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                  <FaPlay size={12} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    {call.industry}
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-white">
                    {call.title}
                  </h3>
                </div>
              </div>

              <div className="relative mt-5 flex items-end gap-1.5">
                {[...Array(22)].map((_, i) => (
                  <span
                    key={i}
                    className="block w-1 rounded-full bg-cyan-300/35"
                    style={{
                      height: `${8 + ((i * 5) % 22)}px`,
                    }}
                  />
                ))}
              </div>

              <div className="relative mt-5 flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  {call.outcome}
                </span>

                <span className="text-xs text-slate-400">{call.duration}</span>
              </div>

              <audio controls className="relative mt-4 h-8 w-full">
                <source src={call.audio} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}