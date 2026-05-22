import Link from "next/link";

const reviews = [
  {
    type: "video",
    name: "Client Review",
    company: "Business Owner",
    video: "/reviews/client-review-01.mp4",
    rating: 5,
  },

  {
    type: "video",
    name: "Operations Manager",
    company: "Commercial Cleaning Company",
    video: "/reviews/client-review-02.mp4",  
    rating: 5,
  },

  {
    type: "text",
    name: "Founder",
    company: "Local Service Business",
    text: "We finally had a consistent outbound process instead of relying on referrals and random inquiries.",
    rating: 4,
  },
];

export default function ReviewSection() {
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
            Real feedback from businesses using outbound systems
            to create more qualified sales opportunities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="
              group
              rounded-[2rem]
              border border-cyan-300/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
              hover:border-cyan-300/25
              hover:bg-cyan-300/[0.04]
              hover:shadow-[0_0_45px_rgba(34,211,238,0.10)]
            "
            >

              {review.type === "video" ? (
                <>

                  <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-cyan-300/10 bg-black">

                    <video
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      <source
                        src={review.video}
                        type="video/mp4"
                      />
                    </video>

                  </div>

                  <div className="mt-5 px-2 pb-2">

                    <div className="mb-4 flex gap-1">

                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-white/20"
                          }`}
                        >
                          ★
                        </span>
                      ))}

                    </div>

                    <p className="font-semibold text-white">
                      {review.name}
                    </p>

                    <p className="mt-1 text-sm text-white/45">
                      {review.company}
                    </p>

                  </div>

                </>
              ) : (
                <div className="p-4">

                  <div className="mb-6 flex gap-1">

                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-white/20"
                        }`}
                      >
                        ★
                      </span>
                    ))}

                  </div>

                  <p className="leading-8 text-white/70">
                    “{review.text}”
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">

                    <p className="font-semibold text-white">
                      {review.name}
                    </p>

                    <p className="mt-1 text-sm text-white/45">
                      {review.company}
                    </p>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

        <div className="mt-14 text-center">
          <Link
            href="/reviews"
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border border-cyan-300/30
            bg-cyan-300/10
            px-8 py-4
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-cyan-300
            transition
            hover:bg-cyan-300/20
            hover:text-white
          "
          >
            See More Reviews
            <span>↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}