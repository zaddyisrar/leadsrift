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
    text: "Honestly the follow up part helped us the most. We had leads before too, but things were not really organized. LeadsRift made the process easier to keep up with.",
    name: "Kazeem Salami",
    rating: 5,
  },

  {
    type: "text",
    company: "Capital Facilities",
    text: "The outreach felt more structured than what we were doing before. It helped us stay on top of conversations and not lose track of people.",
    name: "Tom Fuge",
    rating: 5,
  },

  {
    type: "text",
    company: "Local Splash",
    text: "Good experience overall. The main thing was consistency. We were able to keep the conversations moving instead of starting from zero every time.",
    name: "Andrew Franklin",
    rating: 5,
  },

  {
    type: "text",
    company: "Family First Life",
    text: "They helped make the outreach side simpler for us. It was easier to see who was interested and who needed follow up.",
    name: "Braven Ramirez",
    rating: 5,
  },

  {
    type: "text",
    company: "Hero Cleaning",
    text: "Before this, our outreach was kind of all over the place. LeadsRift helped us put a proper process around it and that made a real difference.",
    name: "Anthony Pasquale",
    rating: 5,
  },

  {
    type: "text",
    company: "Smoky Mountain Commercial Cleaning",
    text: "We liked that everything was tracked better. It was not just random calls or messages, there was an actual flow behind it.",
    name: "Derek Hicks",
    rating: 5,
  },

  {
    type: "text",
    company: "Boston Cleaning Co., Inc.",
    text: "The system helped us stay more consistent with prospects. Follow ups were handled better and the pipeline was easier to understand.",
    name: "Anthony Pasquale",
    rating: 5,
  },

  {
    type: "text",
    company: "B.A.M Cleaning Company",
    text: "It gave us a cleaner way to manage appointment opportunities. Nothing too complicated, just a better process than what we had before.",
    name: "Bia Szucs",
    rating: 5,
  },

  {
    type: "text",
    company: "Physical Therapist in Lubbock, Texas",
    text: "The follow up process was useful. It helped keep conversations organized and made it easier to see which opportunities were worth moving forward with.",
    name: "DR. Tuamokumo Timi S MD",
    rating: 5,
  },

  {
    type: "text",
    company: "Dust Details Ltd.",
    text: "LeadsRift helped us make outreach more predictable. We still had to handle the sales side, but the front end process became much smoother.",
    name: "Rustom Abraha",
    rating: 5,
  },
];

export default function ReviewSection() {
  const [showMore, setShowMore] = useState(false);

  const videoReviews = reviews.filter((review) => review.type === "video");
  const textReviews = reviews.filter((review) => review.type === "text");

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-4 py-16 sm:px-6 md:py-24"
    >
<div className="absolute inset-0 hidden bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:80px_80px] md:block" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300 sm:text-sm md:tracking-[0.4em]">
            CLIENT REVIEWS
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-6xl">
            What Businesses Say About LeadsRift
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base md:text-lg md:leading-8">
            Real feedback from businesses using outbound systems to create more
            qualified sales opportunities.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          {videoReviews.map((review) => (
            <div
              key={review.video}
              className="group rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04] hover:shadow-[0_0_45px_rgba(34,211,238,0.10)]"
            >
              <div className="mx-auto aspect-[3/4] w-full max-w-[290px] overflow-hidden rounded-[1.5rem] border border-cyan-300/10 bg-black md:max-w-[310px]">
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
                    <span key={i} className="text-lg text-yellow-400">
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
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {textReviews.map((review) => (
              <div
                key={review.company}
                className="group flex min-h-[300px] flex-col rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04] hover:shadow-[0_0_45px_rgba(34,211,238,0.10)]"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-yellow-400">
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
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 transition hover:bg-cyan-300/20 hover:text-white sm:px-8 sm:text-sm sm:tracking-[0.25em]"
          >
            {showMore ? "Show Less Reviews" : "See More Reviews"}
            <span>{showMore ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}