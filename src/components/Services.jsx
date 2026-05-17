const services = [
  {
    title: "Cold Calling Appointment Setting",
    text: "Trained callers contact target prospects, qualify interest, handle objections, and schedule appointments.",
    tag: "Voice Outreach",
  },
  {
    title: "Email Outreach Campaigns",
    text: "We write, launch, and manage email campaigns designed to generate replies and start conversations.",
    tag: "Inbox Growth",
  },
  {
    title: "LinkedIn Outreach",
    text: "We connect with decision-makers, send personalized messages, follow up, and convert interest into booked calls.",
    tag: "Decision Makers",
  },
  {
    title: "CRM & Follow-Up Management",
    text: "Every lead, reply, follow-up, and appointment is tracked so nothing disappears.",
    tag: "Pipeline Control",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      {/* Background */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/8 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            What We Do
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            We Handle The Outreach.
            <br />
            <span className="text-cyan-300">You Close The Deals.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            LeadsRift gives your business a managed outbound system across
            calling, email, LinkedIn, qualification, tracking, and follow-up.
          </p>

          <div className="mt-8 rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.05] p-5 backdrop-blur-xl">
            <p className="text-sm leading-7 text-cyan-50">
              Built for service businesses that need consistent conversations,
              not random lead spikes.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.055]"
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-300/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                  0{index + 1}
                </span>

                <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-gray-400">
                  {service.tag}
                </span>
              </div>

              <h3 className="relative mt-5 text-xl font-semibold leading-8 text-white">
                {service.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-gray-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}