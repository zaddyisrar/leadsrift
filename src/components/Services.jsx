import Link from "next/link";

const services = [
  {
    title: "Cold Calling Appointment Setting",
    desc: "Our trained callers contact your target prospects, qualify interest, handle objections, and schedule appointments directly into your calendar.",
  },
  {
    title: "B2B Lead Generation",
    desc: "We build targeted lead lists based on industry, location, company size, decision-maker role, and service area.",
  },
  {
    title: "B2C Lead Generation",
    desc: "We help local service businesses reach homeowners, property owners, and potential customers in specific geographic areas.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#05070d] px-6 py-24"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-300/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Outbound Services Built To{" "}
            <span className="text-cyan-300">Book Qualified Appointments</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We handle the outreach, lead generation, follow-up, and appointment
            setting system behind your growth.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.05]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-xs font-bold text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.16)]">
                  0{index + 1}
                </span>

                <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/30 to-transparent" />
              </div>

              <h3 className="relative text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-7 py-3.5 text-center text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.18)] transition duration-300 hover:border-cyan-300/80 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </section>
  );
}