"use client";

import { useState } from "react";

const reviews = [
  {
    type: "video",
    name: "Kyle Rose",
    company: "Jaguar Cleaning Services Corp.",
    video: "/reviews/client-review-01.mp4",
    rating: 5,
  },
  {
    type: "video",
    name: "Leny Poulin",
    company: "Clover Leaf Cleaning Services",
    video: "/reviews/client-review-02.mp4",
    rating: 5,
  },
  {
    type: "text",
    company: "Seagull Cleaning Services",
    text: "LeadsRift helped us create a more structured outbound process. The follow-up system made it easier to keep conversations moving.",
    name: "Operations Team",
    rating: 5,
  },
  {
    type: "text",
    company: "Capital Facilities",
    text: "The outreach process became more organized, better tracked, and easier for our team to manage week after week.",
    name: "Management Team",
    rating: 5,
  },
  {
    type: "text",
    company: "Roli Cleaners",
    text: "We needed a cleaner way to reach prospects and follow up consistently. LeadsRift helped us build that system.",
    name: "Founder",
    rating: 5,
  },
  {
    type: "text",
    company: "Premium Maintenance Services Ltd.",
    text: "Instead of relying only on referrals, we had a more predictable process for outreach and follow-ups.",
    name: "Business Development Team",
    rating: 5,
  },
  {
    type: "text",
    company: "Boston Cleaning Co.",
    text: "LeadsRift made outbound feel less random. The process became more structured and easier to scale.",
    name: "Sales Director",
    rating: 5,
  },
  {
    type: "text",
    company: "Optimal Cleaning Services",
    text: "The targeting and follow-up systems helped us spend less time chasing leads.",
    name: "Founder",
    rating: 5,
  },
  {
    type: "text",
    company: "Smoky Mountain Commercial Cleaning",
    text: "We needed consistency in our pipeline and LeadsRift helped us create a repeatable process.",
    name: "Owner",
    rating: 5,
  },
  {
    type: "text",
    company: "B.A.M Cleaning Company",
    text: "LeadsRift gave us a cleaner system to manage conversations and appointments.",
    name: "Operations Team",
    rating: 4,
  },
  {
    type: "text",
    company: "Hero Cleaning",
    text: "The outreach became much easier to manage and far more organized.",
    name: "Founder",
    rating: 5,
  },
  {
    type: "text",
    company: "Spot It Cleaning Services",
    text: "Warm prospects stopped disappearing because follow-ups became consistent.",
    name: "Owner",
    rating: 5,
  },
  {
    type: "text",
    company: "Dust Details Ltd.",
    text: "The pipeline became more visible and easier for our team to manage.",
    name: "Management Team",
    rating: 4,
  },
  {
    type: "text",
    company: "All-N-One Cleaning Services LLC",
    text: "The outreach became more focused, and tracking appointment interest became easier for the team.",
    name: "Owner",
    rating: 5,
  },
];

export default function ReviewSection() {
  const [showMore, setShowMore] = useState(false);

  const videoReviews = reviews.filter((review) => review.type === "video");
  const textReviews = reviews.filter((review) => review.type === "text").slice(0, 12);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
            CLIENT REVIEWS
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            What Businesses Say About LeadsRift
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Real feedback from businesses using outbound systems to create more
            qualified sales opportunities.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {videoReviews.map((review) => (
            <div
              key={review.video}
              className="group rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04] hover:shadow-[0_0_45px_rgba(34,211,238,0.10)]"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-cyan-300/10 bg-black">
                <video
                  controls
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src={review.video} type="video/mp4" />
                </video>
              </div>

              <div className="mt-5 px-2 pb-2">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-white/20"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="font-semibold text-white">{review.company}</p>
                <p className="mt-1 text-sm text-cyan-300">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {textReviews.map((review) => (
              <div
                key={review.company}
                className="group flex min-h-[320px] flex-col rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04] hover:shadow-[0_0_45px_rgba(34,211,238,0.10)]"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-white/20"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="flex-1 text-sm leading-7 text-white/70">
                  “{review.text}”
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{review.company}</p>
                  <p className="mt-1 text-sm text-cyan-300">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:bg-cyan-300/20 hover:text-white"
          >
            {showMore ? "Show Less Reviews" : "See More Reviews"}
            <span>{showMore ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}