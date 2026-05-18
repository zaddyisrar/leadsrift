import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03060b] px-6 pt-20 pb-8">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

        <div className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.02] p-8 shadow-[0_0_60px_rgba(34,211,238,0.05)] backdrop-blur-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="pr-8 lg:border-r lg:border-white/10">
              <Image
                src="/leadsrift-logo.png"
                alt="LeadsRift"
                width={180}
                height={60}
                className="h-10 w-auto"
              />

              <p className="mt-8 max-w-sm text-lg leading-8 text-gray-300">
                We book qualified sales appointments for service businesses
                without hiring an in-house sales team.
              </p>

              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <p>No Setup Fees</p>
                <p>Cancel Anytime</p>
                <p>Performance-Driven Outreach</p>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Company
              </h4>

              <div className="space-y-4 text-gray-300">
                <Link href="/" className="block hover:text-cyan-300">
                  Home
                </Link>
                <Link href="/services" className="block hover:text-cyan-300">
                  Services
                </Link>
                <Link href="/industries" className="block hover:text-cyan-300">
                  Industries
                </Link>
                <Link href="/packages" className="block hover:text-cyan-300">
                  Packages
                </Link>
                <Link href="/contact" className="block hover:text-cyan-300">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Services
              </h4>

              <div className="space-y-4 text-gray-300">
                <Link href="/services" className="block hover:text-cyan-300">
                  Appointments
                </Link>
                <Link href="/services" className="block hover:text-cyan-300">
                  Cold Calling
                </Link>
                <Link href="/services" className="block hover:text-cyan-300">
                  Email Outreach
                </Link>
                <Link href="/services" className="block hover:text-cyan-300">
                  LinkedIn Outreach
                </Link>
                <Link href="/services" className="block hover:text-cyan-300">
                  CRM Follow-Up
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </h4>

              <div className="space-y-6">
                <div>
                  <p className="text-white">info@leadsrift.com</p>
                  <span className="text-sm text-cyan-300">Business Email</span>
                </div>

                <div>
                  <p className="text-white">+1 (575) 414-8669</p>
                  <span className="text-sm text-gray-400">Contact Number</span>
                </div>

                <div>
                  <p className="leading-7 text-white">
                    1209 Mountain Rd Pl NE STE R
                    <br />
                    Albuquerque, NM 87110, USA
                  </p>
                  <span className="text-sm text-gray-400">
                    Global Operations
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-400 md:flex-row">
              <p>© 2026 LeadsRift LLC. All Rights Reserved.</p>

              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/privacy" className="hover:text-cyan-300">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-cyan-300">
                  Terms
                </Link>
                <Link href="/compliance" className="hover:text-cyan-300">
                  Compliance
                </Link>
                <Link href="/refund" className="hover:text-cyan-300">
                  Refund
                </Link>
                <Link href="/cookies" className="hover:text-cyan-300">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}