import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reviews = [
  {
    company: "Top Notch Tidy",
    review:
      "LeadsRift helped us build a repeatable outreach system instead of relying on referrals. Appointment flow became far more consistent.",
    author: "Operations Team",
  },

  {
    company: "Nova Building",
    review:
      "Cold outreach always felt messy before. LeadsRift handled targeting, follow-ups, and appointment booking in a structured way.",
    author: "Founder",
  },

  {
    company: "TMP Janitorial",
    review:
      "We stopped chasing random leads. The outreach system brought qualified conversations directly into our calendar.",
    author: "Growth Team",
  },

  {
    company: "Market Pioneers",
    review:
      "Instead of hiring an in-house outreach team, we plugged LeadsRift into our process and scaled faster.",
    author: "Director",
  },

  {
    company: "Twilight Cleaning",
    review:
      "The follow-up process alone changed everything. Warm prospects stopped disappearing.",
    author: "Owner",
  },

  {
    company: "Growth Vero",
    review:
      "The combination of outreach and qualification saved our sales team serious time.",
    author: "Sales Lead",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="px-6 pt-40 pb-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            CLIENT REVIEWS
          </p>

          <h1 className="mt-6 text-4xl font-semibold md:text-6xl">
            See What Businesses{" "}
            <span className="text-cyan-300">
              Say About LeadsRift
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            Real feedback from companies using LeadsRift to generate
            qualified conversations and booked appointments.
          </p>

        </div>


        <div className="mx-auto mt-20 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.company}
              className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
            >

              <div className="mb-6 flex gap-1 text-cyan-300">
                ★★★★★
              </div>

              <p className="leading-8 text-gray-300">
                "{review.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">

                <h3 className="font-semibold text-white">
                  {review.company}
                </h3>

                <p className="mt-1 text-sm text-cyan-300">
                  {review.author}
                </p>

              </div>

            </div>

          ))}

        </div>


        <div className="mx-auto mt-24 max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-10 text-center">

          <h2 className="text-3xl font-semibold">
            Ready To Become The Next Success Story?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            We build outreach systems that create conversations,
            qualify interest, and deliver appointments directly into
            your calendar.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-8 py-4 font-semibold text-black transition hover:bg-white"
          >
            Book Free Strategy Call
          </Link>

        </div>

      </section>

      <Footer />
    </main>
  );
}