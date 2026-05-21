import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

const included = [
  "Lead List Building",
  "Cold Calling",
  "Email Outreach",
  "LinkedIn Outreach",
  "CRM Tracking",
  "Follow-Up Management",
  "Appointment Setting",
  "Weekly Reporting",
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#03060b] text-white">
      <Navbar />

      {/* Homepage Packages Section */}
      <div className="pt-24">
        <Packages />
      </div>

      {/* Included System */}
      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.03] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Included System
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Every package is built around qualified appointments.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-300/10 bg-black/30 p-5 transition hover:border-cyan-300/30"
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}