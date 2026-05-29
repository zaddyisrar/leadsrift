"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const services = [
  {
    label: "APPOINTMENT SETTING",
    preview:
      "Professional outbound calling campaigns designed to connect with decision-makers, qualify prospects, and book high-intent sales conversations directly into your calendar.",
    points: [
      "Decision-maker outreach",
      "Lead qualification & intent verification",
      "Objection handling & follow-ups",
      "Qualified appointment booking",
      "Walkthrough & consultation scheduling",
      "B2B & B2C outbound campaigns",
    ],
  },
  {
    label: "B2B LEAD GENERATION",
    preview:
      "Targeted prospecting systems are built to help businesses consistently connect with qualified companies, decision-makers, and potential clients.",
    points: [
      "ICP & market targeting",
      "Prospect list building",
      "Multi-channel outreach",
      "Decision-maker engagement",
      "Sales pipeline generation",
      "Qualified business opportunities",
    ],
  },
  {
    label: "B2C LEAD GENERATION",
    preview:
      "Outbound campaigns focused on helping local and service-based businesses generate qualified consumer leads and book appointments consistently.",
    points: [
      "Local market targeting",
      "Homeowner outreach campaigns",
      "Service inquiry generation",
      "Qualified consumer conversations",
      "Follow-up management",
      "Appointment & estimate booking",
    ],
  },
  {
    label: "EMAIL OUTREACH",
    preview:
      "Cold email campaigns designed to start conversations, nurture prospects, and generate qualified business opportunities without spam tactics.",
    points: [
      "Personalized email campaigns",
      "Prospect segmentation",
      "Reply management & tracking",
      "Automated follow-up sequences",
      "Conversation nurturing",
      "Appointment-focused outreach",
    ],
  },
  {
    label: "LINKEDIN PROSPECTING",
    preview:
      "Strategic LinkedIn outreach systems that help businesses connect with decision-makers, build relationships, and generate qualified conversations.",
    points: [
      "LinkedIn prospect targeting",
      "Personalized connection outreach",
      "Follow-up messaging sequences",
      "Decision-maker engagement",
      "Conversation management",
      "Qualified meeting generation",
    ],
  },
  {
    label: "CRM & FOLLOW-UPS",
    preview:
      "Pipeline and follow-up management systems that help businesses stay organized, respond faster, and convert more opportunities into appointments.",
    points: [
      "CRM pipeline organization",
      "Lead tracking & updates",
      "Follow-up scheduling",
      "Prospect status management",
      "Sales activity reporting",
      "Opportunity nurturing workflows",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-4 py-20 sm:px-6 md:py-24">
<div className="absolute inset-0 hidden bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:56px_56px] md:block md:bg-[size:80px_80px]" />
      <div className="absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-300/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal y={24}>
          <div className="mb-10 text-center md:mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300 sm:text-sm md:tracking-[0.4em]">
              OUR CORE SERVICES
            </p>

            <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Outbound Systems Built To Generate{" "}
              <span className="text-cyan-300">
                Qualified Appointments & Sales Opportunities
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.label} delay={index * 0.06} y={24}>
              <div className="group flex h-full flex-col rounded-[1.5rem] border border-cyan-300/10 bg-white/[0.03] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.10)] sm:rounded-[2rem] sm:p-6 md:p-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300 drop-shadow-[0_0_16px_rgba(34,211,238,0.35)] sm:mb-6 sm:text-xs">
                  {service.label}
                </p>

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