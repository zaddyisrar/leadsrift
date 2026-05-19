"use client";

import { useState } from "react";

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
    points: [
      "Homeowner targeting",
      "Local markets",
      "Service areas",
      "Lead sourcing",
    ],
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
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
            OUR CORE SERVICES
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/30"
            >
              <div className="mb-6 text-4xl font-bold text-cyan-300">
                {service.number}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-white/55">
                {service.preview}
              </p>

              {open === index && (
                <div className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-white/75"
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-300" />
                      {point}
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="mt-8 text-cyan-300 transition hover:text-white"
              >
                {open === index ? "Show Less" : "See More →"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}