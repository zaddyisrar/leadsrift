"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Cold Calling Appointment Setting & Walkthroughs",
    preview: "Connect with qualified prospects and fill your calendar.",
    points: [
      "Targeted prospect outreach",
      "Lead qualification & intent verification",
      "Objection handling & conversation management",
      "Qualified appointment booking",
    ],
  },
  {
    number: "02",
    title: "B2B Lead Generation",
    preview: "Target decision-makers based on market fit.",
    points: [
      "Industry targeting",
      "Decision makers",
      "Company filtering",
      "Lead research",
    ],
  },
  {
    number: "03",
    title: "B2C Lead Generation",
    preview: "Reach homeowners and customers in local areas.",
    points: ["Homeowner targeting", "Local markets", "Service areas", "Lead sourcing"],
  },
  {
    number: "04",
    title: "Email Marketing Outreach",
    preview: "Generate conversations through personalized outreach.",
    points: [
      "Email campaigns",
      "Personalized messaging",
      "Reply tracking",
      "Follow-up sequences",
    ],
  },
  {
    number: "05",
    title: "LinkedIn Outreach",
    preview: "Turn LinkedIn connections into sales opportunities.",
    points: [
      "Connection strategy",
      "Message sequences",
      "Follow-ups",
      "Conversation tracking",
    ],
  },
  {
    number: "06",
    title: "CRM Management and Follow-Up",
    preview: "Keep your pipeline organized and active.",
    points: [
      "CRM updates",
      "Lead tracking",
      "Follow-up management",
      "Pipeline organization",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-4 py-20 sm:px-6 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:56px_56px] md:bg-[size:80px_80px]" />

      <div className="absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-300/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal y={24}>
          <div className="mb-10 text-center md:mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300 sm:text-sm md:tracking-[0.4em]">
              OUR CORE SERVICES
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Outreach Systems Built To Generate{" "}
              <span className="text-cyan-300">Qualified Conversations</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} y={24}>
              <div className="group flex h-full flex-col rounded-[1.5rem] border border-cyan-300/10 bg-white/[0.03] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.10)] sm:rounded-[2rem] sm:p-6 md:p-7">
                <div className="mb-4 text-2xl font-bold text-cyan-300 drop-shadow-[0_0_16px_rgba(34,211,238,0.35)] sm:mb-6 sm:text-4xl">
                  {service.number}
                </div>

                <h3 className="text-[13px] font-semibold leading-5 text-white sm:text-lg sm:leading-7 md:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-white/55 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                  {service.preview}
                </p>

                {open === index && (
                  <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-[11px] leading-5 text-white/75 sm:gap-3 sm:text-sm"
                      >
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.75)] sm:h-2 sm:w-2" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="mt-auto pt-5 text-left text-[12px] font-semibold text-cyan-300 transition hover:text-white sm:pt-8 sm:text-sm"
                >
                  {open === index ? "Show Less" : "See More →"}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}