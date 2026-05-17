const faqs = [
  {
    q: "What does LeadsRift do?",
    a: "LeadsRift builds and manages outbound systems using cold calling, email, LinkedIn, lead qualification, follow-up, and appointment setting.",
  },
  {
    q: "Who is LeadsRift best for?",
    a: "It is best for service businesses that need more qualified sales appointments without hiring and managing an in-house outreach team.",
  },
  {
    q: "Do you only do cold calling?",
    a: "No. LeadsRift can combine cold calling, email outreach, LinkedIn outreach, CRM tracking, and follow-up depending on the campaign.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No long-term contracts are required.",
  },
  {
    q: "What makes an appointment qualified?",
    a: "A qualified appointment is based on fit, interest, need, and whether the prospect matches the targeting criteria agreed before launch.",
  },
  {
    q: "How fast can campaigns launch?",
    a: "Launch timing depends on targeting, setup, messaging, and campaign requirements. The goal is to prepare the system properly before outreach starts.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-24"
    >
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Questions Before You{" "}
            <span className="text-cyan-300">Launch?</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-6 py-5 backdrop-blur-xl transition duration-300 open:border-cyan-300/30 open:bg-cyan-300/[0.045]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="flex items-center gap-4">
                  <span className="hidden text-sm font-semibold text-cyan-300 sm:inline">
                    0{index + 1}
                  </span>

                  <h3 className="text-left text-lg font-semibold text-white">
                    {faq.q}
                  </h3>
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-300 transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 border-t border-white/10 pt-5 leading-7 text-gray-300">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}