const services = [
  {
    title: "Cold Calling",
    desc: "Human-led outreach that starts real conversations with targeted prospects.",
  },
  {
    title: "Email Outreach",
    desc: "Structured cold email campaigns designed for replies, not vanity sends.",
  },
  {
    title: "LinkedIn Outreach",
    desc: "Connection and message systems that open doors with decision-makers.",
  },
  {
    title: "CRM & Follow-Up",
    desc: "Pipeline tracking and follow-up management so opportunities do not go cold.",
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
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Outbound Systems Built To{" "}
            <span className="text-cyan-300">Create Conversations</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We manage the outreach engine behind your growth — from prospecting
            to follow-up and booked appointments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.05]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
                0{index + 1}
              </div>

              <h3 className="relative text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}