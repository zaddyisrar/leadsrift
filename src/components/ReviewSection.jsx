import Link from "next/link";

const reviews = [
  {
    name: "Operations Manager",
    company: "Commercial Cleaning Company",
    text: "LeadsRift helped us turn cold prospects into real booked conversations. The follow-up system made the biggest difference.",
  },
  {
    name: "Founder",
    company: "Local Service Business",
    text: "We finally had a consistent outbound process instead of relying on referrals and random inquiries.",
  },
  {
    name: "Sales Director",
    company: "B2B Service Company",
    text: "The appointments were more organized, better tracked, and easier for our team to follow up with.",
  },
];

export default function ReviewSection() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">
            CLIENTS REVIEWS
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            What Businesses Say About LeadsRift
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Real feedback from businesses using outbound systems to create more
            qualified sales opportunities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04]"
            >
              <div className="mb-6 flex gap-1 text-cyan-300">
                ★★★★★
              </div>

              <p className="leading-8 text-white/70">“{review.text}”</p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="mt-1 text-sm text-white/45">{review.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:bg-cyan-300/20 hover:text-white"
          >
            See More Reviews
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}